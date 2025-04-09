
const multipart = require('parse-multipart');
const { ComputerVisionClient } = require('@azure/cognitiveservices-computervision');
const { ApiKeyCredentials } = require('@azure/ms-rest-js');

module.exports = async function (context, req) {
    context.log('Processing bill analysis request');

    try {
        // Check if we have a file
        if (!req.body || !req.headers['content-type']) {
            context.res = {
                status: 400,
                body: { message: "Please upload a file" }
            };
            return;
        }

        // Parse the multipart form data
        const bodyBuffer = Buffer.from(req.body);
        const boundary = multipart.getBoundary(req.headers['content-type']);
        const parts = multipart.Parse(bodyBuffer, boundary);

        if (!parts || parts.length === 0) {
            context.res = {
                status: 400,
                body: { message: "No file found in request" }
            };
            return;
        }

        // Get the file and form data
        const file = parts.find(part => part.filename);
        const formDataPart = parts.find(part => part.name === 'formData');
        
        if (!file) {
            context.res = {
                status: 400,
                body: { message: "No file found in request" }
            };
            return;
        }

        // Get form data if available
        let formData = {};
        if (formDataPart) {
            formData = JSON.parse(formDataPart.data.toString());
        }

        // Azure Computer Vision API setup
        const key = process.env.COMPUTER_VISION_KEY;
        const endpoint = process.env.COMPUTER_VISION_ENDPOINT;

        if (!key || !endpoint) {
            context.res = {
                status: 500,
                body: { message: "Azure Computer Vision credentials not configured" }
            };
            return;
        }

        const credentials = new ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } });
        const client = new ComputerVisionClient(credentials, endpoint);

        // Process the file with Azure Computer Vision
        let result;
        const contentType = file.type;
        
        if (contentType.includes('pdf')) {
            // Handle PDF files
            const fileBuffer = Buffer.from(file.data);
            result = await client.readInStream(fileBuffer);
            
            // Operation ID is returned when reading PDFs
            const operationLocation = result.operationLocation;
            const operationId = operationLocation.split('/').pop();
            
            // Poll for the results
            let readResults;
            let i = 0;
            do {
                readResults = await client.getReadResult(operationId);
                await new Promise(resolve => setTimeout(resolve, 1000));
                i++;
            } while (readResults.status !== "succeeded" && i < 10);
            
            result = readResults;
        } else {
            // Handle image files
            const fileBuffer = Buffer.from(file.data);
            result = await client.recognizePrintedTextInStream(true, fileBuffer);
        }

        // Process the results to extract relevant bill information
        // This is a simplified mock analysis - in a real solution, 
        // you would implement more sophisticated text parsing
        const mockAnalysisResult = {
            totalAmount: 125.67,
            kwhUsage: 750,
            rate: 0.167,
            tariffType: "Time-of-Use",
            billingPeriod: {
                start: "2024-03-15",
                end: "2024-04-15"
            },
            providerName: "Energy Provider",
            insights: [
                "You're using 20% more energy than similar households",
                "Your peak usage hours are between 5-8pm",
                "Shifting usage to off-peak hours could save you $25/month",
                "Your appliances with highest consumption: AC, Water Heater"
            ]
        };

        // Return the analysis results
        context.res = {
            status: 200,
            body: mockAnalysisResult
        };
    } catch (error) {
        context.log.error('Error processing bill:', error);
        context.res = {
            status: 500,
            body: { message: `Error analyzing bill: ${error.message}` }
        };
    }
};

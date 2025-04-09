
import logging
import azure.functions as func
import json
import os
import tempfile
from azure.ai.formrecognizer import DocumentAnalysisClient
from azure.core.credentials import AzureKeyCredential

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    try:
        # Check if a file was uploaded
        file_data = req.get_body()
        if not file_data:
            return func.HttpResponse(
                json.dumps({"message": "Please upload a file"}),
                status_code=400,
                mimetype="application/json"
            )
            
        # Save the file temporarily
        temp_file = tempfile.NamedTemporaryFile(delete=False)
        temp_file.write(file_data)
        temp_file.close()
        
        # Get Azure Document Intelligence (formerly Form Recognizer) credentials
        endpoint = os.environ["FORM_RECOGNIZER_ENDPOINT"]
        key = os.environ["FORM_RECOGNIZER_KEY"]
        
        if not endpoint or not key:
            return func.HttpResponse(
                json.dumps({"message": "Azure Document Intelligence credentials not configured"}),
                status_code=500,
                mimetype="application/json"
            )
        
        # Analyze the document
        document_analysis_client = DocumentAnalysisClient(
            endpoint=endpoint, credential=AzureKeyCredential(key)
        )
        
        with open(temp_file.name, "rb") as f:
            poller = document_analysis_client.begin_analyze_document(
                "prebuilt-document", document=f
            )
        result = poller.result()
        
        # Process the results to extract bill information
        # This is where you would implement custom logic to parse the document
        # For now, we'll return a mock result
        mock_analysis_result = {
            "totalAmount": 125.67,
            "kwhUsage": 750,
            "rate": 0.167,
            "tariffType": "Time-of-Use",
            "billingPeriod": {
                "start": "2024-03-15",
                "end": "2024-04-15"
            },
            "providerName": "Energy Provider",
            "insights": [
                "You're using 20% more energy than similar households",
                "Your peak usage hours are between 5-8pm",
                "Shifting usage to off-peak hours could save you $25/month",
                "Your appliances with highest consumption: AC, Water Heater"
            ]
        }
        
        # Clean up the temporary file
        os.unlink(temp_file.name)
        
        return func.HttpResponse(
            json.dumps(mock_analysis_result),
            status_code=200,
            mimetype="application/json"
        )
        
    except Exception as e:
        logging.error(f"Error processing bill: {str(e)}")
        return func.HttpResponse(
            json.dumps({"message": f"Error analyzing bill: {str(e)}"}),
            status_code=500,
            mimetype="application/json"
        )

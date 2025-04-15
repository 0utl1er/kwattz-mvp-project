
const fetch = require('node-fetch');

module.exports = async function (context, req) {
    try {
        if (!req.body || !req.body.message) {
            context.res = {
                status: 400,
                body: { error: "Please provide a message in the request body" }
            };
            return;
        }

        const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "gpt-4-turbo-preview",
                messages: [
                    { 
                        role: "system", 
                        content: "You are kWattz AI, an energy advisor focused on helping users understand and optimize their energy consumption. Keep responses concise and focused on energy-related topics."
                    },
                    {
                        role: "user",
                        content: req.body.message
                    }
                ],
                max_tokens: 500
            })
        });

        const data = await openaiResponse.json();

        if (!openaiResponse.ok) {
            throw new Error(data.error?.message || 'Failed to get response from OpenAI');
        }

        context.res = {
            body: { message: data.choices[0].message.content }
        };
    } catch (error) {
        context.res = {
            status: 500,
            body: { error: "Failed to process your request" }
        };
    }
};

const AWS = require('aws-sdk');
const ses = new AWS.SES();

exports.handler = async (event) => {
    const formData = JSON.parse(event.body);

    const emailParams = {
        Destination: {
            ToAddresses: ['seiffarah97@gmail.com'] // Change to your email address
        },
        Message: {
            Body: {
                Text: {
                    Data: `
                        Name: ${formData.name}\n
                        Email: ${formData.email}\n
                        Message: ${formData.message}
                    `
                }
            },
            Subject: { Data: 'New Contact Form Submission' }
        },
        Source: 'seiffarah97@gmail.com' // Change to your verified SES email address
    };

    try {
        await ses.sendEmail(emailParams).promise();
        const response = {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*', // Allow requests from any origin
                'Access-Control-Allow-Methods': 'OPTIONS,POST', // Allow only POST requests
                'Access-Control-Allow-Headers': 'Content-Type', // Allow the Content-Type header
                'Access-Control-Allow-Credentials': true // Allow credentials (if needed)
            },
            body: JSON.stringify({ message: 'Email sent successfully' })
        };
        return response;
    } catch (error) {
        const response = {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*', // Allow requests from any origin
                'Access-Control-Allow-Methods': 'OPTIONS,POST', // Allow only POST requests
                'Access-Control-Allow-Headers': 'Content-Type' // Allow the Content-Type header
            },
            body: JSON.stringify({ message: 'Failed to send email' })
        };
        return response;
    }
};

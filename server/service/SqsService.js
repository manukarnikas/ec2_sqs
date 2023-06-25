const AWS = require('aws-sdk');

const publishMessage = async (data)=>{
    try{
        const sqs = new AWS.SQS({
            apiVersion: '2012-11-05',
            region: process.env.REGION,
            accessKeyId:  process.env.ACCESS_KEY_ID,
            secretAccessKey: process.env.SECRET_ACCESS_KEY,
           });
           const url=`https://sqs.ap-south-1.amazonaws.com/${process.env.ACCOUNT_ID}/message-processor`;
           const payload = data;
           const params = {
                QueueUrl: url,
                MessageBody: JSON.stringify(payload)
           }
           console.log('sqs params',params);
           const sqsStatus = await sqs.sendMessage(params).promise();
           console.log('SQS status', sqsStatus);
           return sqsStatus;
    }catch(error){
        throw error;
    }
}

module.exports = {
    publishMessage
}
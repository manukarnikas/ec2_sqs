

exports.handler = async (event, context) => {
    try{
        const eventRecord = event.Records?.[0];
        const message = eventRecord?.body;
        console.log("Message Received from SQS",message)
    }catch(err){
        console.log("Error in handler:",err);
    }
}

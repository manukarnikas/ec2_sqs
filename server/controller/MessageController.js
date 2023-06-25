const SqsService  = require('../service/SqsService');

const publishMessage = async (req,res)=>{
    try{
        const result = await SqsService.publishMessage(req.body);
        res.status(200);
        res.send({
            result: result
        });
    }catch(error){
        console.log("Error:",error);
        res.status(500);
        res.send({
            error: error.message
        });
    }
}


module.exports = {
    publishMessage,
}
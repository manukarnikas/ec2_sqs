const SqsService  = require('../service/SqsService');

const publishMessage = async (req,res)=>{
    try{
        const result = await SqsService.publishMessage(req.body);
        res.send({
            status: 200,
            result: result
        });
    }catch(error){
        console.log("Error:",error);
        res.send({
            status: 500,
            error: error.message
        });
    }

}


module.exports = {
    publishMessage,
}
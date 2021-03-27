var mongoose=require("mongoose")
//var db= "mongodb://localhost:27017/test";

var db='mongodb+srv://task_process:S4KUVC2MsBaZHT7@cluster0.2f7a6.mongodb.net/task_Process?retryWrites=true&w=majority'
//var db='mongodb://34.66.156.237:27017/'
// /**
//  * this function is use for connection.
//  */

exports.connection=()=>{
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
	.then(() => console.log(`Connect to MongoDb${db}`))
	.catch(err => console.log('Not Connect', err));
}



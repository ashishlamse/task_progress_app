const taskRouts=require('express').Router();
const bcrypt=require('bcrypt');
var {Task,validate,updateValidate}=require('../../module/taskModule');
var message =require('../../constant/responseMessage').msg;
var uploadImage=require('../../service/google-bucket');
var mongoose=require('mongoose')
/**
 * This api is used to add new task.
 * @param {*} req 
 * @param {*} res 
 */
taskRouts.addTask= async(req,res)=>{
try{
    var decoded=req.decoded;
    //This is for validate req data.
    const { error } = validate(req.body);
	if (error) return res.status(400).json({message:error.details[0].message});
	
    var image=''
    if(req.body.imageFile.length>0){
         image=await uploadImage(req.body.imageFile,req.body.type);
         image=image.url;
        }
	    
        const task = new Task({
            task_name:req.body.task_name,
            description: req.body.description,
            document_upload:image,
            priority:req.body.priority,
            deadline:req.body.deadline,
            status:req.body.status,
            createdBy:decoded.id,
            createdByName:decoded.first_name +' ' +decoded.last_name,
            submittedStatus:false,
            createdAt:new Date()
        });
        
    await task.save();

    return	res.status(200).json({message:message.TASK_ADDED,data:task});
}catch(error){
    console.log("Error",error);
    return res.status(502).json({message:message.SOMETHING_WENT_WRONG})
}
}

/**
 * This api used for get created and submited task.
 */

taskRouts.getTask=async(req,res)=>{
try{

    let submitedtask = await Task.find({submittedStatus:true}).sort( { createdAt: -1 } );

    let task = await Task.find({submittedStatus:false}).sort( { createdAt: -1 } );
    
    return res.status(200).json({task:task,submitedtask:submitedtask});


}catch(err){
    console.log('Error',err);
    return res.status(502).json({message:message.SOMETHING_WENT_WRONG});
}
}

//This api is used to update submitted status.
taskRouts.updateSubmitStatus=async(req,res)=>{
try{
    var decode=req.decoded;
    var id=req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id))
	return res.status(404).json({message:message.INVALID_ID});

	let task = await Task.findById(id);
    console.log(task)
	if (!task) return res.status(404).json({message:message.TASK_NOT_FOUND});


    var taskSubmit = await Task.findByIdAndUpdate(id, {submittedByName:decode.first_name +' ' +decode.last_name,submittedBy:decode.id, submittedAt:new Date(),submittedStatus:true,updatedAt:new Date()});	
    res.status(200).json({message:message.TASK_SUBMITTED});


}catch(err){
    console.log("Error",err);
    return res.status(502).json({message:message.SOMETHING_WENT_WRONG});
}

}

//This api is used to delete task.
taskRouts.deleteTask=async(req,res)=>{
    try{
        var id=req.params.id;
    
        if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).json({message:message.INVALID_ID});
    
        let task = await Task.findById(id);
        if (!task) return res.status(404).json({message:message.TASK_NOT_FOUND});
    
        if(task.submittedStatus===false){

        var taskSubmit = await Task.findByIdAndRemove(id);	
        return res.status(200).json({message:message.TASK_DELETED});
     }else{
         return res.status(501).json({message:message.SOMETHING_WENT_WRONG})
         }
    }catch(err){
        console.log("Error",err);
        return res.status(502).json({message:message.SOMETHING_WENT_WRONG});
    }
    
}

/**
 * This api is used to update task details.
 * @param {*} req 
 * @param {*} res 
 */

taskRouts.updateTask=async(req,res)=>{
try{
        var decode=req.decoded;
        var id=req.params.id;
        var taskObject={};
        if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).json({message:message.INVALID_ID});
    
        //This is for validate req data.
        const { error } = updateValidate(req.body);
	    if (error) return res.status(400).json({message:error.details[0].message});
	


        let task = await Task.findById(id);
        if (!task) return res.status(404).json({message:message.TASK_NOT_FOUND});
    
        if(req.body.imageFlag===true && req.body.imageFile.length>0){
            image=await uploadImage(req.body.imageFile,req.body.type);
            taskObject.document_upload=image.url;       
        }

        taskObject.task_name=req.body.task_name,
        taskObject.description= req.body.description,
        taskObject.priority=req.body.priority,
        taskObject.deadline=req.body.deadline,
        taskObject.status=req.body.status,
        taskObject.updatedAt=new Date()
        var taskUpdate = await Task.findByIdAndUpdate(id,taskObject,{new:true});	
        
        return res.status(200).json({message:message.TASk_UPDATED,taskData:taskUpdate});
    
    
    }catch(err){
        console.log("Error",err);
        return res.status(502).json({message:message.SOMETHING_WENT_WRONG});
    }
}
    
/**
 * This api is used to get count by created date.
 */
taskRouts.getCountbyDate=async(req,res)=>{

    let taskCount = await Task.aggregate([
        {
            $match: { submittedStatus: true }
        },
        {
            $group: {
                _id: {
                    month: { $month: "$submittedAt" },
                    day: { $dayOfMonth: "$submittedAt" },
                    year: { $year: "$submittedAt" }
                },
                count: { $sum: 1 }
            }
        }
    ]);
    
    taskCount.map(ele=>{
        ele.date=ele._id.year+'-'+ele._id.day+'-'+ele._id.month;
    })
      return res.status(200).json({count:taskCount});

}

taskRouts.updateStatus=async(req,res)=>{
    try{
        var decode=req.decoded;
        var id=req.params.id;
    
        if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).json({message:message.INVALID_ID});
    
        let task = await Task.findById(id);
        if (!task) return res.status(404).json({message:message.TASK_NOT_FOUND});
    
    
        var taskSubmit = await Task.findByIdAndUpdate(id, {status:req.body.status,updatedAt:new Date()});	
        res.status(200).json({message:message.TASK_STATUS});
    
    
    }catch(err){
        console.log("Error",err);
        return res.status(502).json({message:message.SOMETHING_WENT_WRONG});
    }
    
}
    

module.exports=taskRouts;
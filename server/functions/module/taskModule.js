const mongoose = require('mongoose');
const Joi = require('joi');

/**
 * shcema for task data.
 */
const taskSchema = new mongoose.Schema({
    task_name: {
        type: String,
        minlength: 2,
        maxlength: 55,
        required: true
    },
    description: {
        type: String,
        minlength: 2,
        maxlength: 2048,
        required: true
    },
    document_upload: {
        type: String,
        minlength: 0,
        maxlength: 1024,
    },
    priority: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    deadline:{
        type:Date,
        required:true
    },
    status:{
        type:String,
        required:true,
        minlength:1,
        maxlength:55,
    },
    createdBy:{
        type:String,
        required:true,
        minlength:1,
        maxlength:512        
    },
    createdByName:{
        type:String,
        required:true,
        minlength:1,
        maxlength:512        
    },
    createdAt:{
        type:Date,
        required:true
    },
    submittedBy:{
        type:String,
        minlength:0,
        maxlength:512
    },
    submittedByName:{
        type:String,
        minlength:0,
        maxlength:512
    },
    submittedAt:{
        type:Date
    },
    submittedStatus:{
        type:Boolean,
        required:true 
    },
    updatedAt:{
        type:Date
    }

});



/**
 * This function use for check data validation.
 * @param {data of req } task 
 */
function validateTask(task) {
    const schema = Joi.object({
        task_name: Joi.string().min(2).max(55).required(),
        description: Joi.string().min(2).max(2048).required(),
        priority: Joi.string().min(2).max(50).required(),
        status:Joi.string().min(1).max(55).required(),
        createdBy:Joi.string().min(1).max(512)
    }).unknown(true);
    return Joi.validate(task, schema);
}

/**
 * This function use for check data validation when update task record.
 * @param {data of req } task 
 */
function validateUpdateTask(task) {
    const schema = Joi.object({
        task_name: Joi.string().min(2).max(55).required(),
        description: Joi.string().min(2).max(2048).required(),
        priority: Joi.string().min(2).max(50).required(),
        status:Joi.string().min(1).max(55).required(),
    }).unknown(true);
    return Joi.validate(task, schema);
}


const Task = mongoose.model('Task', taskSchema);
exports.Task = Task;
exports.validate = validateTask;
exports.updateValidate=validateUpdateTask;
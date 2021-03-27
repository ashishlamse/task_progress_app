const taskRouts = require('../../controller/task/taskApi');
var taskApimodule = require('../../controller/task/taskApi');
const taskRouter=require('express').Router();
const auth=require('../../middleware/ authentication')
//task Router
taskRouter.post('/',auth.verifyTocken,taskApimodule.addTask);
taskRouter.get('/',auth.verifyTocken,taskApimodule.getTask);
taskRouter.put('/:id',auth.verifyTocken,taskApimodule.updateTask);
taskRouter.put('/submit/:id',auth.verifyTocken,taskApimodule.updateSubmitStatus);
taskRouter.put('/status/:id',auth.verifyTocken,taskApimodule.updateStatus);
taskRouter.delete('/:id',auth.verifyTocken,taskApimodule.deleteTask);
taskRouter.get('/chart',auth.verifyTocken,taskApimodule.getCountbyDate);

module.exports = taskRouter;
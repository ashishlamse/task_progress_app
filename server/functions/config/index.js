const Cloud = require('@google-cloud/storage');
const path = require('path');
const serviceKey = path.join(__dirname, './task-progress-app-308717-firebase-adminsdk-jyzmx-15e519ded1.json');

const { Storage } = Cloud
const storage = new Storage({
  keyFilename: serviceKey,
  projectId: "task-progress-app-308717",
})

module.exports = storage
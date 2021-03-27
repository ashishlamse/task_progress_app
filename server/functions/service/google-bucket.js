const util = require('util')
const gcs = require('../config');

const myBucket = gcs.bucket('task_documents');

//  upload image in  bucket
  const uploadImage = (myFile) => new Promise((resolve, reject) => {
    try{
      var imgName=String(new Date().getTime());
      var stream = require('stream');
      var bufferStream = new stream.PassThrough();
      bufferStream.end(Buffer.from(myFile, 'base64'));
      var  type='image/gif';
      var  file = myBucket.file(imgName);
      var  url = "https://storage.googleapis.com/task_documents/"+imgName;
    
  
  //Pipe the 'bufferStream' into a 'file.createWriteStream' method.
  bufferStream.pipe(file.createWriteStream({
      resumable: false,
      gzip: true,
      metadata: {
        contentType: type,
        metadata: {
          custom: 'metadata'
        }
      },
      public: true
    })) 
    .on('error', (err) => {
       reject(err);
      })
    .on('finish', (data)=> {
      // The file upload is complete.
      console.log("resolve succcessfully");
      resolve(
        {
          message: "Upload was successful",
          url: url
        }
      );
    });
  }catch(err){
    console.log("Error",err)
  }
})

module.exports = uploadImage;
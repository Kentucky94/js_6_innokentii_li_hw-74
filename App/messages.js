const express = require('express');

const fs = require('fs');

const router = express.Router();

router.post('/', (req, res) => {
  const datetime = new Date().toISOString();

  const message = JSON.stringify(req.body.message);

  fs.writeFile(`./messages/${datetime}.txt`, message, err => {
    if(err) {
      console.log(err)
    }else{
      console.log('File has been saved');
    }
  });

  res.send({message, datetime});
});

router.get('/', (req, res) => {

  const path = "./messages";

  fs.readdir(path, (err, files) => {
    res.send(files);
  });
});

module.exports = router;
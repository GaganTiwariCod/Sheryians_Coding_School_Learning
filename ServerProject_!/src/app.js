const express = require('express');
const multer = require('multer');
const uploadImage = require('./services/storage.service');
const postModel = require('./model/post.model');
const cors = require('cors');
const upload = multer({storage: multer.memoryStorage()});
const app = express();
app.use(cors());


app.use(express.json());


//creating A post route

app.post('/create-post', upload.single('image'), async(req,res)=>{
    if (!req.file) {
        return res.status(400).json({ message: 'Please upload an image using the "image" field.' });
    }

    const result = await uploadImage(req.file.buffer);
    const post = await postModel.create({
        caption: req.body.caption,
        imageurl: result.url,
    });
    res.status(201).json({ message: 'Post created successfully', post });
});

app.get('/posts', async(req,res)=>{
    const posts = await postModel.find();
    res.status(200).json({posts});
});


module.exports = app; 
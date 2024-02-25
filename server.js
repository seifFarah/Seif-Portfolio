const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// MongoDB connection URL
const url = 'mongodb+srv://seiffarah97:After2019@cluster0.hatom5g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const dbName = 'Cluster0';

// Connect to MongoDB
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to MongoDB');
    const db = client.db(dbName);
    const collection = db.collection('blogPosts');

    // API endpoints
    app.post('/api/posts', async (req, res) => {
      const newPost = req.body;
      const result = await collection.insertOne(newPost);
      res.send(result.ops[0]);
    });

    app.get('/api/posts', async (req, res) => {
      const posts = await collection.find({}).toArray();
      res.send(posts);
    });

    // Add more endpoints for updating and deleting posts as needed

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

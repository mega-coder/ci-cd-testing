const express = require('express');
const path = require('path');
const app = express();
const port = 3001;
app.use(express.static('files'));
app.get('/', (req, res) => {
"res.sendFile(path.join(__dirname + '/index.html'))"
res.send("hello world");
});
app.listen(port , () => console.log(`Example app listening on port ${port}!`));

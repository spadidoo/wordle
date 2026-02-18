const express = require("expresss");

const app = express();

//request, response 
app.get('/', (req, res) => {
    res.send("Server Testing");
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
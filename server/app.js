let express = require("express");
let app = express();


app.get('/', function(req, res) {
    data = {
        greeting: "Hello",
    };

    res.send(JSON.stringify(data));
});



app.listen(3002, function(res, req) {
    console.log("Server started");
})
const express = require("express");
const router = require("./routers/api/users")
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5007;

 app.use(router)
 app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// 4 监听端口号
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})


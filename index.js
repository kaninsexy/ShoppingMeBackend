require('dotenv').config()
const express = require('express')
const app = express()
const db = require("./models");
const cors = require("cors");
const UserRouter = require('./routes/User')
const ProductRouter = require('./routes/Product')
const OrderRouter = require('./routes/Order')

let allowedOrigins = ["http://localhost:3001", "http://localhost:3000"];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);


        if (allowedOrigins.indexOf(origin) === -1) {
            let mes = "เข้าไม่ได้นะ";
            return callback(new Error(mes), false);
        }
        return callback(null, true);
    }
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/user', UserRouter)
app.use('/product', ProductRouter)
app.use('/order', OrderRouter)

db.sequelize.sync({ force: false }).then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running at ${process.env.PORT}`);
    });
});

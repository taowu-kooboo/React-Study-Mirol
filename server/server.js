const express = require("express");
const mongoose = require("mongoose");
// 链接mongo 并且使用mirol这个集合
const DB_URL = "mongodb://127.0.0.1:27017/mirol";
mongoose.connect(DB_URL);
mongoose.connection.on("connected", () => {
  console.log("mongo connect success");
});
// 类似于MySQL的表  mongo里有文档 字段的概念
const User = mongoose.model(
  "user",
  new mongoose.Schema({
    user: { type: String, require: true },
    age: { type: Number, require: true }
  })
);
// 新增数据
// User.create(
//   {
//     user: "Tony",
//     age: 18
//   },
//   (err, doc) => {
//     if (!err) {
//       console.log(doc);
//     } else {
//       console.log(err);
//     }
//   }
// );

// 删除数据
// User.remove({age: 18}, (err, doc) => {
//     if (!err) {
//         console.log(doc)
//     } else {
//         console.log(err)
//     }
// })

// 更新数据
User.update({ user: "Mirol" }, { $set: { age: 26 } }, (err, doc) => {
  if (!err) console.log(doc);
  else console.log(err);
});

// 新建app
const app = express();
app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.get("/data", (req, res) => {
  //   User.find({}, (err, doc) => {
  //     res.json(doc);
  //   });
  User.findOne({ user: "Mirol" }, (err, doc) => {
    res.json(doc);
  });
});

app.listen(9090, function() {
  console.log(`Node app started`);
});

import express from 'express'
import { systemEnv } from "./config.ts";
import { ernieInstance } from "./src/models/index.js";
import { IRawMessage } from "node_modules/@clients/public/index.ts";
import { getMessageAnswer } from "./src/service/Ernie.js";
import { Orm } from 'src/orm/index.ts';

const app = express()

// 初始化数据库连接
Orm.initialize()
  .then(() => {
    console.log("数据库连接成功");
  })
  .catch((error) => {
    console.error("数据库连接失败", error);
  });

app.get('/', (req, res) => {
  ernieInstance.getMessageAnswer("你好！")
})

// post 请求，
// 请求体： {message: "你好！",modelType: "Ernie"}
// 返回：{message: "你好！", answer: "你好！"}
app.post('/message', (req, res) => {
  // 流式传输
  const message: IRawMessage = req.body.message
  const answer = getMessageAnswer(message)

  res.write(JSON.stringify({
    answer: answer
  }))
})

app.listen(systemEnv.PORT, () => {
  console.log(`Example app listening at http://localhost:${systemEnv.PORT}`)
})

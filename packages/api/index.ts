import express from 'express'
import dotenv from 'dotenv'
import {systemEnv} from "./config";

// 加载环境变量
dotenv.config()

const app = express()

systemEnv.setAllEnv({
  PORT: process.env.PORT || '3000',
  QIANFAN_ACCESS_KEY: process.env.QIANFAN_ACCESS_KEY || '',
  QIANFAN_SECRET_KEY: process.env.QIANFAN_SECRET_KEY || '',
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(systemEnv.PORT, () => {
  console.log(`Example app listening at http://localhost:${systemEnv.PORT}`)
})

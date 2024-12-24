import dotenv from "dotenv";
import {systemEnv} from "../../config.js";
import Ernie from "./Ernie.js";

dotenv.config()

systemEnv.setAllEnv({
  PORT: process.env.PORT || '3000',
  QIANFAN_ACCESS_KEY: process.env.QIANFAN_ACCESS_KEY || '',
  QIANFAN_SECRET_KEY: process.env.QIANFAN_SECRET_KEY || '',
})

const ernieInstance =  new Ernie(systemEnv);

export {
  ernieInstance
}

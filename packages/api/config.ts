export interface ISystemEnv {
  PORT: string,
  QIANFAN_ACCESS_KEY: string,
  QIANFAN_SECRET_KEY: string,
}

class SystemEnv implements ISystemEnv {
  PORT = process.env.PORT || '3000'
  QIANFAN_ACCESS_KEY = process.env.QIANFAN_ACCESS_KEY || ''
  QIANFAN_SECRET_KEY = process.env.QIANFAN_SECRET_KEY || ''

  constructor() {
    console.log(this)
  }

  setOneEnv(key: string, value: string) {

  }

  setAllEnv(env: ISystemEnv) {
    this.PORT = env.PORT
    this.QIANFAN_ACCESS_KEY = env.QIANFAN_ACCESS_KEY
    this.QIANFAN_SECRET_KEY = env.QIANFAN_SECRET_KEY
  }
}

export const systemEnv = new SystemEnv()
// packages/back/src/data-source.ts
import { DataSource } from 'typeorm';
import { Chat } from './chat.ts';
import { Message } from './messages.ts';
import { Vector } from './vector.ts';

console.log(process.env.DB_NAME)
console.log(process.env.QIANFAN_ACCESS_KEY)

export const Orm = new DataSource({
    type: 'mysql',
    host: 'localhost',  // 数据库服务器地址
    port: 3306,         // MySQL 默认端口
    username: 'root',   // 用户名
    password: 'root',   // 密码
    database: 'easy_rag', // 数据库名称
    synchronize: true,  // 是否自动同步数据库，开发阶段建议为 true，生产环境要小心使用
    logging: true,      // 启用 SQL 日志输出
    entities: [Chat, Message, Vector], // 需要初始化的实体类
    migrations: [],
    subscribers: [],
});

export const chatRepository = Orm.getRepository(Chat)
export const messageRepository = Orm.getRepository(Message);
export const vectorRepository = Orm.getRepository(Vector);
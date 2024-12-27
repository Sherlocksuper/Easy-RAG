// packages/back/src/orm/messages.ts

import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Repository } from 'typeorm';
import { Orm } from './index.ts';  // Assuming Orm is the TypeORM data source

@Entity('messages')
export class Message {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int')
    chatId: number;

    @Column('text')
    text: string;

    @Column('text')
    token: string;

    @CreateDateColumn()
    createdAt: Date;
}

const messageRepository = Orm.getRepository(Message);

// 创建一个新的 Message
async function createMessage(chatId: number, text: string, token: string): Promise<Message | null> {
    const message = new Message();
    message.chatId = chatId;
    message.text = text;
    message.token = token;

    try {
        await messageRepository.save(message);
        console.log(`Message for chatId ${chatId} created successfully.`);
        return message;
    } catch (error) {
        console.error('Error creating message:', error);
        return null;
    }
}

// 查找所有 Message
async function getMessages(): Promise<Message[]> {
    try {
        const messages = await messageRepository.find();
        console.log('Messages:', messages);
        return messages;
    } catch (error) {
        console.error('Error fetching messages:', error);
        return [];
    }
}

// 通过 chatId 查找 Message
async function getMessagesByChatId(chatId: number): Promise<Message[]> {
    try {
        const messages = await messageRepository.find({
            where: { chatId }
        });
        console.log(`Messages for chatId ${chatId}:`, messages);
        return messages;
    } catch (error) {
        console.error(`Error fetching messages for chatId ${chatId}:`, error);
        return [];
    }
}

// 更新 Message
async function updateMessage(id: number, newText: string, newToken: string): Promise<Message | null> {
    try {
        const message = await messageRepository.findOneBy({ id });
        if (!message) {
            console.log(`Message with ID ${id} not found.`);
            return null;
        }
        message.text = newText;
        message.token = newToken;
        await messageRepository.save(message);
        console.log(`Message with ID ${id} updated.`);
        return message;
    } catch (error) {
        console.error(`Error updating message with ID ${id}:`, error);
        return null;
    }
}

// 删除 Message
async function deleteMessage(id: number): Promise<boolean> {
    try {
        const message = await messageRepository.findOneBy({ id });
        if (!message) {
            console.log(`Message with ID ${id} not found.`);
            return false;
        }
        await messageRepository.remove(message);
        console.log(`Message with ID ${id} deleted.`);
        return true;
    } catch (error) {
        console.error(`Error deleting message with ID ${id}:`, error);
        return false;
    }
}
import { Entity, Column, PrimaryGeneratedColumn, getRepository } from "typeorm"
import { chatRepository, Orm } from "./index.ts";


@Entity()
export class Chat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;
}



// Start of Selection
// 创建一个新的 Chat 实体并保存
async function createChat(name: string) {
    const chat = new Chat();
    chat.name = name;

    try {
        await chatRepository.save(chat);
        console.log(`Chat with name ${name} created successfully.`);
    } catch (error) {
        console.error('Error creating chat:', error);
    }
}

// 查找所有的 Chat
async function getChats() {
    try {
        const chats = await chatRepository.find();
        console.log('Chats:', chats);
        return chats;
    } catch (error) {
        console.error('Error fetching chats:', error);
        return [];
    }
}

// 查找单个 Chat 根据 ID
async function getChatById(id: number) {
    try {
        const chat = await chatRepository.findOneBy({
            id: id
        });
        if (!chat) {
            console.log(`Chat with ID ${id} not found.`);
            return null;
        }
        console.log('Chat found:', chat);
        return chat;
    } catch (error) {
        console.error(`Error fetching chat with ID ${id}:`, error);
        return null;
    }
}

// 更新 Chat 的名称
async function updateChat(id: number, newName: string) {
    try {
        const chat = await chatRepository.findOneBy({
            id: id
        });
        if (!chat) {
            console.log(`Chat with ID ${id} not found.`);
            return null;
        }
        chat.name = newName;
        await chatRepository.save(chat);
        console.log(`Chat with ID ${id} updated to ${newName}.`);
        return chat;
    } catch (error) {
        console.error(`Error updating chat with ID ${id}:`, error);
        return null;
    }
}

// 删除一个 Chat
async function deleteChat(id: number) {
    try {
        const chat = await chatRepository.findOneBy({
            id: id
        });
        if (!chat) {
            console.log(`Chat with ID ${id} not found.`);
            return false;
        }
        await chatRepository.remove(chat);
        console.log(`Chat with ID ${id} deleted.`);
        return true;
    } catch (error) {
        console.error(`Error deleting chat with ID ${id}:`, error);
        return false;
    }
}
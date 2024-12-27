// packages/back/src/orm/messages.ts

import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

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
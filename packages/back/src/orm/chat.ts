import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Chat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;
}
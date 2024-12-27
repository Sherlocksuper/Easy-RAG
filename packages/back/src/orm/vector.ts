import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Vector {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    text: string;

    @Column('text')
    source: string;

    @Column('text')
    modelType: string;


    @Column('text')
    token: string;

    // 特征值：浮动数组
    @Column('simple-array')
    features: number[];
}
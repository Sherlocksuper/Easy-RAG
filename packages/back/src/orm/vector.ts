import { Entity, PrimaryGeneratedColumn, Column, Repository } from 'typeorm';
import { Orm } from './index.ts';

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

const vectorRepository = Orm.getRepository(Vector);

// 创建一个新的 Vector
async function createVector(text: string, source: string, modelType: string, token: string, features: number[]): Promise<Vector | null> {
    const vector = new Vector();
    vector.text = text;
    vector.source = source;
    vector.modelType = modelType;
    vector.token = token;
    vector.features = features;

    try {
        await vectorRepository.save(vector);
        console.log(`Vector with ID ${vector.id} created successfully.`);
        return vector;
    } catch (error) {
        console.error('Error creating vector:', error);
        return null;
    }
}

// 查找所有的 Vector
async function getVectors(): Promise<Vector[]> {
    try {
        const vectors = await vectorRepository.find();
        console.log('Vectors:', vectors);
        return vectors;
    } catch (error) {
        console.error('Error fetching vectors:', error);
        return [];
    }
}

// 根据 ID 查找单个 Vector
async function getVectorById(id: number): Promise<Vector | null> {
    try {
        const vector = await vectorRepository.findOneBy({ id });
        if (!vector) {
            console.log(`Vector with ID ${id} not found.`);
            return null;
        }
        console.log('Vector found:', vector);
        return vector;
    } catch (error) {
        console.error(`Error fetching vector with ID ${id}:`, error);
        return null;
    }
}

// 根据modelType查找单个Vector
async function getVectorByModelType(modelType: string): Promise<Vector | null> {
    try {
        const vector = await vectorRepository.findOneBy({ modelType });
        if (!vector) {
            console.log(`Vector with modelType ${modelType} not found.`);
            return null;
        }
        console.log('Vector found:', vector);
        return vector;
    } catch (error) {
        console.error(`Error fetching vector with modelType ${modelType}:`, error);
        return null;
    }
}


// 删除一个 Vector
async function deleteVector(id: number): Promise<boolean> {
    try {
        const vector = await vectorRepository.findOneBy({ id });
        if (!vector) {
            console.log(`Vector with ID ${id} not found.`);
            return false;
        }
        await vectorRepository.remove(vector);
        console.log(`Vector with ID ${id} deleted.`);
        return true;
    } catch (error) {
        console.error(`Error deleting vector with ID ${id}:`, error);
        return false;
    }
}

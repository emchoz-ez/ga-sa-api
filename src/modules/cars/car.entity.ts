import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';

@Table
export class Car extends Model<Car> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    model: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    type: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    year: string;
}
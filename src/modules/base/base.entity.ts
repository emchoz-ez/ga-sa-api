import { Column, DataType, Model } from 'sequelize-typescript';

export class BaseEntity extends Model<BaseEntity> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  code: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  other: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  notes: string;
}

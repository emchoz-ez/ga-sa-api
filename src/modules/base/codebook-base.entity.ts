import { Column, DataType, Model } from 'sequelize-typescript';

export class CodebookBaseEntity extends Model<CodebookBaseEntity> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  code: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  other: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  notes: string;
}

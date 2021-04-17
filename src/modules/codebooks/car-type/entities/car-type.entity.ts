import { Table } from "sequelize-typescript";
import { CodebookBaseEntity } from "src/modules/base/codebook-base.entity";

@Table
export class CarType extends CodebookBaseEntity {}

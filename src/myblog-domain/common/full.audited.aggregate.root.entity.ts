import { BaseEntity, CreateDateColumn, ObjectID, ObjectIdColumn, UpdateDateColumn } from "typeorm";

export class FullAuditedAggregateRoot extends BaseEntity {

    @ObjectIdColumn()
    Id: ObjectID;

    @CreateDateColumn()
    InsertDate?: Date;

    @UpdateDateColumn()
    UpdateDate?: Date;

}
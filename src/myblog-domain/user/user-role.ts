import { Entity, Column } from "typeorm";
import { FullAuditedEntity } from "../common/full.audited.entity";


@Entity()
export class UserRole extends FullAuditedEntity {
 
    @Column()
    RoleName: string;

    @Column()
    RoleType: number;
}
import { Entity, Column } from "typeorm";
import { FullAuditedAggregateRoot } from "../common/full.audited.aggregate.root.entity";
import { UserRole } from "./user-role";

@Entity()
export class User extends FullAuditedAggregateRoot {

    constructor(userName: string, passWord: string) {
        super();
        this.UserName = userName;
        this.Password = passWord;
    }

    @Column()
    UserName: string;

    @Column()
    Password: string;

    @Column((type) => UserRole)
    Roles?: UserRole[];

    setRole(roles: UserRole[]) {
        this.Roles = roles;
    }


}
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("pessoas")
export class Pessoa {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column("text")
    first_name: string

    @Column("text")
    last_name: string

    @Column("text")
    username: string

    @Column("text")
    password: string

    @Column("text")
    email: string
}
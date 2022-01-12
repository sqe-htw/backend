import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Card {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    userId: number;

    @Column({ nullable: false })
    text: string;
}
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Marca {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, length:30 })
    nombre: string;
}

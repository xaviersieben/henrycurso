import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Credential from "./Credential";
import Appointment from "./Appointment";

@Entity({ name: "users" })
class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    birthday: Date

    @Column()
    nDni: string

    @OneToOne(() => Credential)
    @JoinColumn()
    credentialId: Credential

    @OneToMany(() => Appointment, appointment => appointment.user)
    appointments: Appointment[];
}

export default User

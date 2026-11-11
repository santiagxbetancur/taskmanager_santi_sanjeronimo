/*
 * Register User Use Case
 *
 * Contiene las reglas necesarias para
 * registrar un nuevo usuario.
 */
import { User } from "../entities/User.js";

export class RegisterUser {

    constructor(userRepository, passwordHasher) {
        this.userRepository = userRepository;
        this.passwordHasher = passwordHasher;
    }

    async execute(user) {
 debugger;
        const existingUser =
            await this.userRepository.findByEmail( user.email
            );

        if (existingUser) {
            throw new Error(
                "Ya existe un usuario con este correo."
            );
        }
debugger;
        const passwordData = await this.passwordHasher.hash(user.password);
        debugger;

        const userData = new User({
            institucion: user.institucion,
            tipodeusuario: user.tipodeusuario,
            name: user.name,
            genero: user.genero,
            email: user.email,
            passwordHash: passwordData,
            activo: user.activo
        });

        
        
        return await this.userRepository.save(userData);
    }
}
    
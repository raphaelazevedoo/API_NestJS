import { Injectable } from "@nestjs/common";

@Injectable()
export class UsuarioRepository {
    private usuarios: any[] = [];

    async salvar(usuario) {
        this.usuarios.push(usuario);
        await this.sleep(5000);
        console.log("Ok")
    }

    sleep(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async listar() {
        return this.usuarios;
    }

    async existeComEmail(email: string) {
        const possivelUsuario = this.usuarios.find(
            usuario => usuario.email === email
        );

        return possivelUsuario !== undefined;
    }
}
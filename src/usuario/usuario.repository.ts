export class UsuarioRepository {
    private usuarios: any[] = [];

    async salvar(usuario) {
        this.usuarios.push(usuario);
    }

    async listar() {
        return this.usuarios;
    }
}
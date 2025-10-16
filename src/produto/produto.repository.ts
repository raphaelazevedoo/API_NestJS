export class ProdutoRepository {
    private produtos: any[] = [];

    async salvar(produto){
        this.produtos.push(produto);
    }

    async listar(){
        return this.produtos;
    }
}
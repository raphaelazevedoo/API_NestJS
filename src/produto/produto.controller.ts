import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";
import { CriaProdutoDTO } from "./dto/CriaProduto.dto";

@Controller('/produtos')
export class ProdutoController {

    constructor(private produtoRepository: ProdutoRepository){}

    @Post()
    async criarProduto(@Body() dadosDoProtudo: CriaProdutoDTO) {
        this.produtoRepository.salvar(dadosDoProtudo);
        return dadosDoProtudo;
    }

    @Get()
    async listaProdutos(){
        return this.produtoRepository.listar();
    }
}
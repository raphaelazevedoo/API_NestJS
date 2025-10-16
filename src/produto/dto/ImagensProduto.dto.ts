import { IsNotEmpty, isNotEmpty, MaxLength } from "class-validator";

export class ImagensProdutoDTO {
    @IsNotEmpty()
    url: string;

    @IsNotEmpty({message: "A descrição das imagens não pode estar vazia."})
    @MaxLength(1000, {message: "A descrição das imagens deve conter no máximo 1000 caracteres."})
    descricao: string;
}
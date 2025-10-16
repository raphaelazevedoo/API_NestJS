import { IsNotEmpty, isNotEmpty, MaxLength } from "class-validator";

export class CaracteristicaProdutoDTO {
    @IsNotEmpty({message: "Insira o nome válido da caracteristica."})
    nome: string;

    @IsNotEmpty({message: "A descrição das caracteristicas não pode estar vazia."})
    @MaxLength(1000, {message: "A descrição das caracteristicas deve conter no máximo 1000 caracteres."})
    descricao: string

}
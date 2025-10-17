import { Type } from "class-transformer";
import { IsArray, isArray, isNotEmpty, IsNotEmpty, IsPositive, isPositive, IsUUID, isUUID, MAX_LENGTH, MaxLength, maxLength, Min, ValidateNested } from "class-validator";
import { CaracteristicaProdutoDTO } from "./CaracteristicaProduto.dto";
import { ImagensProdutoDTO } from "./ImagensProduto.dto";

export class CriaProdutoDTO {
    @IsNotEmpty({ message: "O nome não pode estar em branco." })
    nome: string;

    @IsUUID(undefined, {message: "Insira um ID de usuario."})
    userID: string;

    @IsPositive({ message: "O valor deve ser positivo." })
    @MaxLength(2, { message: "O valor máximo deve ser de dois digitos." })
    valor: number;

    @Min(0, { message: "A quantidade deve ser igual ou maior que 0" })
    quantidade: number;

    @IsNotEmpty({ message: "A descrição não pode estar vazia." })
    @MaxLength(1000, { message: "A descrição deve conter no máximo 1000 caracteres." })
    descricao: string;

    @ValidateNested()
    @IsArray()
    @Type(() => CaracteristicaProdutoDTO)
    caracteristica: CaracteristicaProdutoDTO[];

    @ValidateNested()
    @IsArray()
    @Type(() => ImagensProdutoDTO)
    imagens: ImagensProdutoDTO[];

    categoria: string;
}
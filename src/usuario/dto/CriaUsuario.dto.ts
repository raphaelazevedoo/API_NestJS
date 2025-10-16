import { IsEmail, isEmail, IsNotEmpty, isNotEmpty, IsString, isString, MinLength } from "class-validator";

export class CriaUsuarioDTO {

    @IsNotEmpty({message: "Digite um nome válido."})
    nome: string;
    
    @IsEmail(undefined, {message: "O e-mail informado é inválido."})  
    email: string;

    @MinLength(3, {message: "Digite uma senha válida, minimo 3 caracteres."})
    senha: string;
}
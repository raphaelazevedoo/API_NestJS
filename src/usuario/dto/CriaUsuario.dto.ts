import { IsEmail, isEmail, IsNotEmpty, isNotEmpty, IsString, isString, MinLength } from "class-validator";
import { EmailUnico, EmailUnicoValidator } from "../validacao/email-unico.validator";

export class CriaUsuarioDTO {

    @IsNotEmpty({message: "Digite um nome válido."})
    nome: string;
    
    @IsEmail(undefined, {message: "O e-mail informado é inválido."})
    @EmailUnico({message: "Já existe um cadastro com esse email."}) 
    email: string;

    @MinLength(3, {message: "Digite uma senha válida, minimo 3 caracteres."})
    senha: string;
}
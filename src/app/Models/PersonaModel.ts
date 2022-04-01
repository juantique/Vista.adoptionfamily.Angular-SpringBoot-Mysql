export class PersonaModel{
    idpersona: number;
    nomcompleto: String;
    email: String;
    usuario: String;
    numdocu: String;
    fechanace: Date;
    edad: number;
    genero: {
        nombreGenero: String,
        idGenero: number
    };
    estado: {
        nombreEstado: String,
        idEstado: number
    };
}
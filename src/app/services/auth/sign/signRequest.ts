//SIGNREQUEST ES UNA INTERFAZ DONDE SE DECLARAN LOS TIPOS 
//DE INFO DE LOS INPUTS, LOS CUALES LUEGO SE VERIFICARAN
export interface SignRequest {
    nombre:string,
    email:string,
    password:string
}
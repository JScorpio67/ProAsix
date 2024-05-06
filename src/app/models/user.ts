export interface User {
    //INTERFAZ DE FIREBASE
    uid?: string,
    email: string,
    displayName: string,
    photoURL?: string,
    //nos permite saber si el email ha sido verificado
    emailVerified: boolean,    
}

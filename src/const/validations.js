export const validationEmail =(email)=>{
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}
export const validationName =(name)=>{
    const palabras = name.trim().split(' ');
    return palabras.length >= 2; 
}
export const validationAddress=(address) =>{
    const palabras = address.trim().split(' ');
    return palabras.length >= 3;
}
export const validationNumber=(number) =>{
    return number <= 50;
}
export const validationPrice=(number) =>{
    return number > 1000000;
}
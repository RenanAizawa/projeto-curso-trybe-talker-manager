function generateToken(length) {
    // edit the token allowed characters
    const a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split('');
    const b = [];  
    for (let i = 0; i < length; i += 1) {
        const j = (Math.random() * (a.length - 1)).toFixed(0);
        b[i] = a[j];
    }
    return b.join('');
}

module.exports = generateToken;

// este gerador de token foi encontrado no site: https://stackoverflow.com/questions/8532406/create-a-random-token-in-javascript-based-on-user-details , no comentario do usuario: https://stackoverflow.com/users/2151420/kareem ; 
// Assim deixo meu agradecimento e reconhecimento.
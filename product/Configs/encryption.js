const randomstring = require("randomstring");
const bcrypt = require('bcryptjs');
const saltRounds = parseInt(process.env.ENCRYPTION_SALT_ROUNDS);

class EncryptionHandler {

    bcrypt(data){
        return bcrypt.hashSync(data.toString(), bcrypt.genSaltSync(saltRounds), null); 
    }

    compareBcrypt(entity, encryptEntity) {
        return bcrypt.compareSync(entity, encryptEntity);
    }

    generateAuthToken() {
        var tokenString = randomstring.generate(25);
        var token = bcrypt.hashSync(tokenString, bcrypt.genSaltSync(saltRounds), null);
        return token;
    }
}

module.exports = EncryptionHandler
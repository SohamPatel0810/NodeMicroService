const randomstring = require("randomstring");
const bcrypt = require('bcryptjs');
const saltRounds = parseInt(process.env.ENCRYPTION_SALT_ROUNDS);

class EncryptionHandler {

    compareBcrypt(entity, encryptEntity) {
        return bcrypt.compareSync(entity, encryptEntity);
    }
}

module.exports = EncryptionHandler
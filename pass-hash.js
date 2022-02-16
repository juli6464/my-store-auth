const bycript = require('bcrypt');

async function hashPassword () {
  const myPassword = 'admin123';
  const hash = await bycript.hash(myPassword, 10);
  console.log(hash);
}

hashPassword();

const bycript = require('bcrypt');

async function verifyPassword () {
  const myPassword = 'admin123';
  const hash = '$2b$10$OtlOR4rIFus7mmhgCT683OUF.fQQ/m473eg08bSWzsKEYIcbuwI4O';
  const isMatch = await bycript.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecretKey = "#$T#TDFBdfbnkl34lktnvs9-7t34978tsdV!";
// Bcrypt utilities:
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

function hashPassword(password) {
  return bcrypt.hashSync(password, salt);
}

console.log(hashPassword("123456"));

const users = [
  {
    id: 0,
    username: "amir",
    email: "amir@google.com",
    password: "$2b$10$Sl8BsmAmJAKUCKlG2FlwZOgbiCGMkEkpgjEfc/FDdFMcq6RFaZjw2",
  },
];
// -------------------------------------------------------#
export function findUser(username) {
  return users.find((user) => user.username === username);
}
export function isUserExists(username) {
  return findUser(username) || false;
}
// -------------------------------------------------------#

export default function login(username, password) {
  if (!username || !password) {
    return {
      error: "Not valid",
      message: `Botth are required`,
    };
  }
  if (!isUserExists(username)) {
    return {
      error: "USER_NOT_FOUND",
      message: `${username} is not defined, make sure the user is registered before.`,
    };
  }
  const user = findUser(username);
  const hashPassword = hashPassword(user.password);
  if (!checkPassword(hashPassword, user.password)) {
    return {
      error: "WRONG_CREDENTIAL",
      message: "Your Password is wrong. Shame on you!(^_^)",
    };
  }
  const token = jwt.sign({ username: user.username, email: user.email, id: user.id }, jwtSecretKey, {
    expiresIn: 3000, // 50min
  });

  return {
    payload: {
      token,
    },
  };
}

function checkPassword(currentHashedPassword, hashedPassword) {
  return bcrypt.compare(currentHashedPassword, hashedPassword);
}

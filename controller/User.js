const db = require('../models');
const bc = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const register = async (req, res) => {
  const { username, password, name, address } = req.body;
  const targetUser = await db.User.findOne({ where: { username } });

  if (targetUser) {
    res.status(400).send({ message: 'Username already used' });
  } else {
    const salt = bc.genSaltSync(Number(process.env.ROUND));
    const hashedPW = bc.hashSync(password, salt);

    await db.User.create({
      password: hashedPW,
      username,
      name,
      address,
    });

    res.status(201).send({ message: 'User created' });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const targetUser = await db.User.findOne({ where: { username } });
  if (!targetUser) {
    res.status(400).send({ message: 'Username or password is wrong.' });
  } else {
    // console.log(targetUser)
    const isPWCorrect = bc.compareSync(password, targetUser.password);
    if (isPWCorrect) {
      const payload = { id: targetUser.id, name: targetUser.name };
      const token = jwt.sign(payload, process.env.SECRET, { expiresIn: 36000 });

      res.status(200).send({
        message: 'Successfully login',
        access_token: token,
        accessToken: token,
      });
    } else {
      res.status(400).send({ message: 'Username or password is wrong.' });
    }
  }
};

module.exports = {
  register,
  login,
};

const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('deng', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql'
});

// 创建模型
class User extends Model { }
// 初始化user
User.init({
  username: DataTypes.STRING,
  birthday: DataTypes.CHAR
}, { sequelize, modelName: 'user' });


// 查询一条数据
(async () => {
  User.destroy({
    where: {
      id: 1
    }
  })
  const users = await User.findAll();
  console.log(users.every(user => user instanceof User)); // true
  console.log("All users:", JSON.stringify(users, null, 2));
  sequelize.close()
})()


// // 同步到数据库
// (async () => {
//   // 创建一条记录
//   await sequelize.sync();
//   const jane = await User.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20)
//   });
//   console.log(jane.toJSON());
// })();

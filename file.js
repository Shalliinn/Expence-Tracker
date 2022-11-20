const Sequelize=require('sequelize');

const sequelize=require('../util/database')
const File=sequelize.define('file',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  fileUrl:{
type:Sequelize.STRING
  }
})

module.exports=File;
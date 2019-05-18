
var fs=require('fs')  //引入文件读写模块
let files=fs.readdirSync('./moduels')  //读取所有的生成模块文件
let models = []
files.forEach(item=>{
    if(item!='index.js') {  //除了这个index.js
        /**下面这段代码结果是将： tb_user.js  转换为name为 User  **/
        console.log('item',item)
      let names = item.split('.')[0].split('_')  
      console.log('name',name)
        let name = ''
        for(let i=1;i<names.length;i++) {
          name+=names[i].substring(0,1).toUpperCase() + names[i].substring(1)

        }
        console.log('name2',name)
        models.push({name: name, path:"./"+item})
    } 
})
/**视情况未定**/
const template=`
var Sequelize =  require('sequelize');
/* 创建数据库连接 */
var sequelize = new Sequelize("xpu","root","dupingping",{
    host: "47.106.139.243",
    dialect:"mysql",
    underscored:true
})
/* 数据库模型名称配置及路径 */
const models=${JSON.stringify(models,null,4)}
/* 数据库模型输出 */
models.forEach(item=>{
    module.exports[item.name]=require(item.path)(sequelize,Sequelize);
})
`
fs.writeFile('./index.js',template,function(){
    console.log('success')
})
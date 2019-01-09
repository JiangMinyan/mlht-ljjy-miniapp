function sayHello(name){
    console.log(`Hello ${name} !`)
}

function tool(){
    console.log('i am a tool!')
}

//上述定义的函数需要使用module.exports暴露模块接口
//js文件中若需要使用则使用const util = require('../../utils/util.js')进行引入(仅支持相对路径)
module.exports = {
    sayHello:sayHello,
    tool:tool
}

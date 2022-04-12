const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false, //关闭语法检查
    pages: {
        index: {
            //入口
            entry: 'src/main.js'
        }
    },
// //开启代理服务器(方式一)   下面的端口号是要请求的服务器的端口号
//     devServer: {
//         proxy: 'http://localhost:5000'
//     },

    //开启代理服务器(方式二)   下面的端口号是要请求的服务器的端口号
    devServer: {
        proxy: {
            //   /api是请求前缀，有这个前缀就走代理服务器，没有这个前缀就不走代理，/api也可以换成别的名
            //由于你把/api为前缀的请求发给了代理服务器，代理就把以/api为前缀的请求发给了5000端口，
            //但是5000端口的服务器上并没有以/api为开头的资源，所以会请求失败。所以要加上pathRewrite:{'^/api':''}
            //重写路径，是个对象，里面是'key':'value'，，，表示匹配所有以api开头的路径，换成以空字符串开头
            '/api': {
                target: 'http://localhost:5000',
                pathRewrite:{'^/api':''},
                ws: true, //用于支持websocket
                changeOrigin: true  //用于控制请求头中的host值
                //代理服务器发送请求给5000端口服务器时，5000会问你来自哪里？如果配置成true
                //代理就会说谎说我来自于和你一样，也来自5000；
                // 如果配置成false，代理就会如实回答说我来自于一台端口号为8080的代理服务器
            },

            '/demo': {
                target: 'http://localhost:5001',
                pathRewrite:{'^/demo':''},
                ws: true,
                changeOrigin: true
            },

            //下面是上面代码的精简版
            // '/foo': {
            //     target: '<other_url>'
            // }
        }
    }

})

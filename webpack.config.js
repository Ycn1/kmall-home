
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const publicPath = '/';


const getHtmlConfig=(name,title)=>({
      template:'./src/view/'+name+'.html',
      filename:name+'.html',
      title:title,
      inject:true,
      hash:true,
      //指定引用的js
      chunks:['common',name]
})
//导出配置
module.exports = {
	//模式
	mode:'development',
	//指定入口文件 多入口文件
	entry:{
    'common':'./src/pages/common/index.js',
    'index':'./src/pages/index/index.js',
    'user-login':'./src/pages/user-login/index.js',
    'rigister':'./src/pages/rigister/index.js',
    'detail':'./src/pages/detail/index.js',
    'result':'./src/pages/result/index.js',
    'user-content':'./src/pages/user-content/index.js',
    'user-update-password':'./src/pages/user-update-password/index.js',
    'list':'./src/pages/list/index.js',
     'cart':'./src/pages/cart/index.js',
    
  },
  //额外的配置jQuery
  externals:{
    'jquery':'window.jQuery'
  },	
	//指定出口
	output:{
		//出口文件名称
		filename:'js/[name].js',
    publicPath:publicPath,
		//出口文件存储路径
		path:path.resolve(__dirname,'dist')
	},

  //配置別名

  resolve:{
        alias:{
            pages:path.resolve(__dirname,'./src/pages'),
            images:path.resolve(__dirname,'./src/images'),
            util:path.resolve(__dirname,'./src/util'),
            server:path.resolve(__dirname,'./src/server'),

            api:path.resolve(__dirname,'./src/api'),
            common:path.resolve(__dirname,'./src/common'),
            node_modules:path.resolve(__dirname,'./node_modules'),

        }
    },
	//配置loader
  module: {
    rules: [
    	//处理css文档的loader
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
            
            
            }
          },
          "css-loader"
        ]
      },
      //处理图片loader
	    {
        test: /\.(png|jpg|gif|ttf|woff2|woff|eot|svg)\??.*$/,
        use: [
          {
            loader: 'url-loader',
            options:{
              limit:300,
              name:'resource/[name].[ext]'
            }
          }
        ]
    	},
      {
        test:/\.js$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['env','es2015','react','stage-3'],
                //antd 按需加载
                plugins: [
                  ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }] 
                ]                
            }
        }               
      },
       {
        test:/\.tpl$/,
    
        use: {
            loader: 'html-loader',
        }               
      }
                  
    ]
  },
  plugins: [

  //给指定的html文件配置输出
  	/*new HtmlWebpackPlugin({
  		template:'./src/view/index.html',
  		filename:'index.html',
  		inject:true,
  		hash:true,
      //指定引用的js
      chunks:['common','index']
  	}),
    new HtmlWebpackPlugin({
      template:'./src/view/user-login.html',
      //输出的html文件名
      filename:'user-login.html',
      inject:true,
      hash:true,
      //指定引用的js
      chunks:['common','user-login']
    }),*/



    new HtmlWebpackPlugin(getHtmlConfig('index','首页')),

    new HtmlWebpackPlugin(getHtmlConfig('user-login','登录')),

    new HtmlWebpackPlugin(getHtmlConfig('user-content','个人中心')),

     new HtmlWebpackPlugin(getHtmlConfig('detail','商品详情')),

    new HtmlWebpackPlugin(getHtmlConfig('rigister','注册')),
     new HtmlWebpackPlugin(getHtmlConfig('cart','购物车页面')),
    
    new HtmlWebpackPlugin(getHtmlConfig('result','提示页面')),

    new HtmlWebpackPlugin(getHtmlConfig('user-update-password','修改密碼')),

    new HtmlWebpackPlugin(getHtmlConfig('list','列表页面')),


  	new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    })
  ],
  devServer: {
    contentBase: './dist',
    port:3002,
    proxy:{
      "/user":{
        target:"http://127.0.0.1:3000",
        changeOrigin:true
      },
      "/product":{
        target:"http://127.0.0.1:3000",
        changeOrigin:true
      },
      "/cart":{
        target:"http://127.0.0.1:3000",
        changeOrigin:true
      }
    }
 
  }
}
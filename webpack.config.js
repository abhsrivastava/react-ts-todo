const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
   entry: './src/index.tsx',
   mode: "development",
   output: {
      path: path.resolve(__dirname, "build"),
      filename: 'bundle.js'
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            loader: "awesome-typescript-loader"
         },
         {
            enforce: "pre",
            test: /\.js$/,
            loader: "source-map-loader"
         },
         {
            test: /\.scss$/,
            include: [path.resolve(__dirname, "src/styles")],
            use: [
               MiniCssExtractPlugin.loader,
               {
                 loader: "css-loader",
                 options: {
                   modules: true,
                   sourceMap: true,
                   importLoader: 2
                 }
               },
               "sass-loader"
            ]
         }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: "./index.html"
      }),
      new MiniCssExtractPlugin({
         filename: "foo.css",
         chunkFilename: "[id].css"
      })
   ],
   devtool: "source-map",
   resolve: {
      extensions: [".js", ".ts", ".tsx"] 
   }
}
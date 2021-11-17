const api_key = process.env.api_key;
   const HtmlWebpackPlugin = require('html-webpack-plugin');
    
    module.exports = {
      entry: 'index.js',
      plugins: [
        new HtmlWebpackPlugin({
          inject: false,
          template: './index.html',

          // Pass the full url with the key!
          apiUrl: `https://api.rust-servers.info/embed.js?id=6121`,

        });
      ]
    }
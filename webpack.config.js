const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.less', '.css']
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              onlyLocals: true,
              localsConvention: 'camelCase',
              importLoaders: 1,
              modules: {
                localIdentName: '[path][name]__[local]'
              }
            }
          },
          // 'css-loader',
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              relative: true
            }
          }
        ]
      },
      {
        test: /\.jsx?$/,
        use: ["babel-loader"]
      }
    ]
  }
}

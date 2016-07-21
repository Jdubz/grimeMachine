const webpack = require('webpack');

module.exports = {
  // entry point needs to be entry.jsx
  entry: './client/components/App.jsx',
  // webpack output to client/dist/bundle.js
  output: {
    path: './client/dist',
    publicPath: './client/dist',
    filename: 'bundle.js',
  },
  module: {
    noParse: ['ws'],
    loaders: [
      {
        test: /\.jsx?$/,
        // regular expression for .jsx or .js
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        // include: /flexboxgrid/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.ProvidePlugin({
      react: 'react',
    }),
  ],
  externals: ['ws'],
};

const path = require('path');
const { AngularWebpackPlugin } = require('@ngtools/webpack');
const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'mfeAngular',
  filename: 'remoteEntry.js',
  exposes: {
    './Component': './src/app/app.component.ts',
  },
  shared: {
    ...shareAll({ 
      singleton: true, 
      strictVersion: true, 
      requiredVersion: 'auto' 
    }),
  },
  entry: './src/main.ts',
  resolve: {
    extensions: ['.ts', '.js', '.html'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: '@ngtools/webpack',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: 'raw-loader',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'umd',
  },
  plugins: [
    new AngularWebpackPlugin({
      tsConfigPath: './tsconfig.json',
      entryModule: path.resolve(__dirname, './src/app/app.module#AppModule'),
    }),
  ],
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
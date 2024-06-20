module.exports = function (api) {
  api.cache(true);

  const plugins = [];
  const presets = ['module:@react-native/babel-preset'];

  plugins.push([
    'module-resolver',
    {
      root: ['./src'],
      extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      alias: {
        '@': ['./src'],
      },
    },
  ]);

  return {
    presets,
    plugins,
  };
};

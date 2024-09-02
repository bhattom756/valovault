module.exports = function (api) {
  api.cache(true);

  const plugins = [
    [
      '@tamagui/babel-plugin',
      {
        components: ['tamagui'],
        config: './tamagui.config.ts',
      },
    ],
    'nativewind/babel'
  ];

  return {
    presets: ['babel-preset-expo'],
    plugins,
  };
};

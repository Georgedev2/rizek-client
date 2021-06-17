const path = require('path')

module.exports = {
  // Point at your stories
  stories: ['../components/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',

    // Handle SCSS modules
    /*     {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: true,
        },
        sassLoaderOptions: {
          sassOptions: {
            includePaths: [
              path.resolve(__dirname, '../styles'),
              path.resolve(__dirname, '../node_modules'),
            ],
          },
        },
      },
    }, */
  ],

  webpackFinal: async (config) => {

    // This loaders tell webpack what to do with CSS modules
    config.module.rules.push({
      test: /\.(s*)css$/,
      include: path.resolve(__dirname, '../components'),
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
    })
    
    // loader to handle assets
    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    })

    // Return the altered config
    return config
  },
}

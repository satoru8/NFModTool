module.exports = {
  packagerConfig: {
    name: 'NFModTool',
    icon: './logo.png',
    executableName: 'NFModTool',
    appCopyright: 'Copyright 2022, Chikara',
    appVersion: '0.0.1',
    ignore: [
      /^\/src/,
      /(.eslintrc.json)|(.gitignore)|(electron.vite.config.ts)|(forge.config.js)|(tsconfig.*)/,
    ],
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
};
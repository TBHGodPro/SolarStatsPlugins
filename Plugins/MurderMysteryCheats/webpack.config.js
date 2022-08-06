const { join } = require('node:path');
const { copyFileSync, existsSync } = require('node:fs');
const package = require('./package.json');
const { DefinePlugin } = require('webpack');

const output = {
  filename: `${package.name}-v${package.version}.js`,
  path: join(__dirname, 'dist'),
};

module.exports = {
  target: 'node',
  mode: 'production',
  entry: join(__dirname, package.main),
  output,
  plugins: [
    new DefinePlugin({
      __package: JSON.stringify({
        name: package.solarstats.displayName || package.name,
        description: package.description,
        version: package.version,
        author: package.author,
      }),
    }),
    {
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap(package.name, () => {
          if (!package.solarstats.devPath) return;
          if (!existsSync(package.solarstats.devPath)) return;

          copyFileSync(
            join(output.path, output.filename),
            join(package.solarstats.devPath, output.filename)
          );
          console.log(
            '\n[Solar Stats] Plugin successfuly copied to dev plugins folder'
          );
        });
      },
    },
  ],
};

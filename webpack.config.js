/**
 * This file has been autogenerated as it didn't exist or was made for an older incompatible version.
 * This file can be used for manual configuration will not be modified if the flowDefaults constant exists.
 */
const fs = require('fs');
const merge = require('webpack-merge');
const flowDefaults = require('./webpack.generated.js');

const fileNameOfTheFlowGeneratedMainEntryPoint = require('path').resolve(
  __dirname,
  'target/frontend/generated-flow-imports.js'
);
const filteredFileNameOfTheFlowGeneratedMainEntryPoint =
  fileNameOfTheFlowGeneratedMainEntryPoint + '-filtered.js';

// @ts-ignore
module.exports = merge(flowDefaults, {
  entry: {
    export: filteredFileNameOfTheFlowGeneratedMainEntryPoint
  },
  plugins: [
    function(compiler) {
      compiler.hooks.afterPlugins.tap(
        'Filter out external deps',
        compilation => {
          const original = fs.readFileSync(
            fileNameOfTheFlowGeneratedMainEntryPoint,
            'utf8'
          );

          // Exclude component imports which are included in the "bundle" module
          const filtered = original
            .split('\n')
            .filter(row => {
              if (row.startsWith("import '@vaadin")) return false;
              if (row.startsWith("import '@polymer")) return false;
              if (!row.startsWith('import')) return false;
              return true;
            })
            .join('\n');

          fs.writeFileSync(
            filteredFileNameOfTheFlowGeneratedMainEntryPoint,
            filtered
          );
        }
      );
    }
  ]
});

/**
 * This file can be used to configure the flow plugin defaults.
 * <code>
 *   // Add a custom plugin
 *   flowDefaults.plugins.push(new MyPlugin());
 *
 *   // Update the rules to also transpile `.mjs` files
 *   if (!flowDefaults.module.rules[0].test) {
 *     throw "Unexpected structure in generated webpack config";
 *   }
 *   flowDefaults.module.rules[0].test = /\.m?js$/
 *
 *   // Include a custom JS in the entry point in addition to generated-flow-imports.js
 *   if (typeof flowDefaults.entry.index != "string") {
 *     throw "Unexpected structure in generated webpack config";
 *   }
 *   flowDefaults.entry.index = [flowDefaults.entry.index, "myCustomFile.js"];
 * </code>
 * or add new configuration in the merge block.
 * <code>
 *   module.exports = merge(flowDefaults, {
 *     mode: 'development',
 *     devtool: 'inline-source-map'
 *   });
 * </code>
 */

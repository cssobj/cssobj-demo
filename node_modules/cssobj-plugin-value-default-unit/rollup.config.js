// rollup.config.js

export default {
  entry: 'src/cssobj-plugin-value-default-unit.js',
  moduleName: 'cssobj_plugin_value_default_unit',
  moduleId: 'cssobj_plugin_value_default_unit',
  targets: [
    { format: 'iife', dest: 'dist/cssobj-plugin-value-default-unit.iife.js' },
    { format: 'amd',  dest: 'dist/cssobj-plugin-value-default-unit.amd.js'  },
    { format: 'cjs',  dest: 'dist/cssobj-plugin-value-default-unit.cjs.js'  },
    { format: 'es',   dest: 'dist/cssobj-plugin-value-default-unit.es.js'   }
  ]
}

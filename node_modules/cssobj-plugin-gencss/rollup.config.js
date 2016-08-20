// rollup.config.js

export default {
  entry: 'src/cssobj-plugin-gencss.js',
  moduleName: 'cssobj_plugin_gencss',
  moduleId: 'cssobj_plugin_gencss',
  targets: [
    { format: 'iife', dest: 'dist/cssobj-plugin-gencss.iife.js' },
    { format: 'amd',  dest: 'dist/cssobj-plugin-gencss.amd.js'  },
    { format: 'cjs',  dest: 'dist/cssobj-plugin-gencss.cjs.js'  },
    { format: 'es',   dest: 'dist/cssobj-plugin-gencss.es.js'   }
  ]
}

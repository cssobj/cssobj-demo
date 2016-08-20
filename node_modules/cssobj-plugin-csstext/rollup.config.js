// rollup.config.js

export default {
  entry: 'src/cssobj-plugin-csstext.js',
  moduleName: 'cssobj_plugin_csstext',
  moduleId: 'cssobj_plugin_csstext',
  targets: [
    { format: 'iife', dest: 'dist/cssobj-plugin-csstext.iife.js' },
    { format: 'amd',  dest: 'dist/cssobj-plugin-csstext.amd.js'  },
    { format: 'cjs',  dest: 'dist/cssobj-plugin-csstext.cjs.js'  },
    { format: 'es',   dest: 'dist/cssobj-plugin-csstext.es.js'   }
  ]
}

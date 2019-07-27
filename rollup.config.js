import babel from 'rollup-plugin-babel'

module.exports = {
  input: 'src/index.js',
  output: [{
    file: 'dist/picture-compressor.es.js',
    format: 'es'
  }, {
    file: 'dist/picture-compressor.js',
    format: 'umd',
    name: 'pictureCompress'
  }],
  plugins: [babel({
    exclude: '**/node_modules/**'
  })]
}
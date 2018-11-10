import nodeExternals from 'webpack-node-externals'
import webpack from 'webpack'
import browserify from 'browserify'
import path from 'path'
import fs from 'fs'
var PACKAGE_FILE = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf-8'))
var LIB_NAME = PACKAGE_FILE.name

/* helper function to get into build directory */
var libPath = function(name?: string) {
  if (undefined === name) {
    return 'dist'
  }

  return path.join('dist', name)
}

/* helper to clean leftovers */
var outputCleanup = function(dir: string) {
  if (!fs.existsSync(libPath())) {
    return
  }

  var list = fs.readdirSync(dir)
  for (var i = 0; i < list.length; i++) {
    var filename = path.join(dir, list[i])
    var stat = fs.statSync(filename)

    if (filename === '.' || filename === '..') {
      // pass these files
    } else if (stat.isDirectory()) {
      // outputCleanup recursively
      outputCleanup(filename)
    } else {
      // rm filename
      fs.unlinkSync(filename)
    }
  }
  fs.rmdirSync(dir)
}

/* precentage handler is used to hook build start and ending */
var percentageHandler = function handler(percentage: number) {
  if (0 === percentage) {
    /* Build Started */
    outputCleanup(libPath())
    // tslint:disable-next-line:no-console
    console.log('Build started... Good luck!')
  } else if (1.0 === percentage) {
    // TODO: No Error detection. :(
    createBrowserVersion(libPath(webpackConfig.output.filename))
  }
}

var webpackConfig = {
  mode: 'production',
  entry: './src/index.ts',
  target: 'node',
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['node_modules', 'src']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.ts$/,
        loader: 'tslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: [/node_modules/]
      }
    ]
  },
  externals: [nodeExternals()],
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        tslint: {
          emitErrors: true,
          failOnHint: true
        }
      }
    }),
    new webpack.ProgressPlugin(percentageHandler)
  ]
}

var createBrowserVersion = function(inputJs: string) {
  let outputName = inputJs.replace(/\.[^/.]+$/, '')
  outputName = `${outputName}.browser.js`
  // tslint:disable-next-line:no-console
  console.log('Creating browser version ...')

  let b = browserify(inputJs, {
    standalone: LIB_NAME
  })

  b.bundle(function(err: unknown) {
    if (err != null) {
      // tslint:disable-next-line:no-console
      console.error('Browserify error:')
      // tslint:disable-next-line:no-console
      console.error(err)
    }
  }).pipe(fs.createWriteStream(outputName))
}

module.exports = webpackConfig

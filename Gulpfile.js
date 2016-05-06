var gulp = require("gulp");
var gutil = require("gulp-util");
var ghPages = require('gulp-gh-pages');
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");

var webpackConfig = {
  entry: __dirname + "/src/index.js",
  output: {
    path:  __dirname + "/dist/js",
    filename: 'annotations.var.js',
    library: 'Annotations',
    libraryTarget: 'var'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0']
        }
      }
    ]
  }
};

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

gulp.task("webpack-dev-server", function(callback) {
  // modify some webpack config options
  var myConfig = Object.create(webpackConfig);
  //http://webpack.github.io/docs/configuration.html#devtool
  myConfig.devtool = "cheap-module-eval-source-map";
  myConfig.debug = true;

  // Start a webpack-dev-server
  new WebpackDevServer(webpack(myConfig), {
    contentBase: "dist/",
    publicPath: "/js/",
    stats: {
      colors: true
    }
  }).listen(8080, "localhost", function(err) {
    if(err) throw new gutil.PluginError("webpack-dev-server", err);
    gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
  });
});

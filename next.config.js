const withLess = require("next-with-less");

module.exports = withLess({
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: {
        "primary-color": "#51A67F",
      },
    },
  },
});

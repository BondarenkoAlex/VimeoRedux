export const consoleCustom = {
  log: function () {
    if (process.env.NODE_ENV !== 'production') {
      console.log.apply(console, arguments);
    }
  },

  error: function () {
    if (process.env.NODE_ENV !== 'production') {
      console.error.apply(console, arguments);
    }
  },

  dir: function () {
    if (process.env.NODE_ENV !== 'production') {
      console.dir.apply(console, arguments);
    }
  },
};

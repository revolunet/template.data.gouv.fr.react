module.exports = ctx => ({
  plugins: {
    "postcss-import": {},
    "postcss-cssnext": {
      warnForDuplicates: false,
      browsers: ["last 2 versions"]
    },
    cssnano: ctx.env === "production" ? {} : false,
    "postcss-reporter": {
      clearReportedMessages: true
    }
  }
});

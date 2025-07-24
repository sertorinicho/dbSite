module.exports = function(eleventyConfig) {
  return {
	pathPrefix: "/dbSite/",
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
  };
};
module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "./src/assets": "/" });
    eleventyConfig.addWatchTarget("./src/sass/");

    eleventyConfig.addShortcode("year", () => {
        return new Date().getFullYear();
    });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
};
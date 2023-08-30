module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "./src/images": "/" });

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
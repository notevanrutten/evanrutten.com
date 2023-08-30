module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "./src/favicons": "/" });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
};
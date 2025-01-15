/**
 * Configures Eleventy with various settings, collections, plugins, filters, shortcodes, and more.
 * Hint VS Code for eleventyConfig autocompletion.
 * © Henry Desroches - https://gist.github.com/xdesro/69583b25d281d055cd12b144381123bf
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig -
 * @returns {Object} -
 */

import collections from './src/_config/collections.js';
import filters from './src/_config/filters.js';

export default async function (eleventyConfig) {
    // Collections
    eleventyConfig.addCollection('wineClubPosts', collections.getWineClubPosts);

    // Filters
    eleventyConfig.addFilter('stripIndex', filters.stripIndex)

    // General Config
    return {
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",

        dir: {
            input: 'src',
            output: 'dist',
            includes: '_includes',
            layouts: '_layouts'
        },
    };
};
/**
 * Configures Eleventy with various settings, collections, plugins, filters, shortcodes, and more.
 * Hint VS Code for eleventyConfig autocompletion.
 * © Henry Desroches - https://gist.github.com/xdesro/69583b25d281d055cd12b144381123bf
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig -
 * @returns {Object} -
 */

import collections from './src/_config/collections.js';
import dateFilters from './src/_config/filters/date.js';
import generalFilters from './src/_config/filters/general.js';

import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default async function (eleventyConfig) {
    // Collections
    eleventyConfig.addCollection('wineClubPosts', collections.getWineClubPosts);

    // Plugins
    eleventyConfig.addPlugin(eleventyImageTransformPlugin);

    // Filters
    Object.keys(generalFilters).forEach(filterName => {
        eleventyConfig.addFilter(filterName, generalFilters[filterName])
    })

    Object.keys(dateFilters).forEach(filterName => {
        eleventyConfig.addFilter(filterName, dateFilters[filterName])
    })

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
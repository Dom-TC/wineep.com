/** All Wine Club entries */
const getWineClubPosts = collection => {
    return collection.getFilteredByGlob('./src/posts/wineclub/**/*.md').reverse();
};

export default {
    getWineClubPosts,
};
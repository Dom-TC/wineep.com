export default {
    stripIndex: (path) => {
        if (!path) return ''
        return path.replace('/index.html', '/')
    },
}
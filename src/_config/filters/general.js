import { URL } from "url";

export default {
    // Remove any trailing index.html from a given URL
    stripIndex: (path) => {
        if (!path) return ''
        return path.replace('/index.html', '/')
    },

    // Get the base domain for a given URL
    baseDomain: (url) => {
        try {
            const parsedUrl = new URL(url);
            return parsedUrl.hostname.replace(/^www\./, ""); // Remove 'www.' if present
        } catch (e) {
            console.error(`Invalid URL: ${url}`);
            return url; // Fallback to returning the original URL if invalid
        }
    },

    // Checks whether a value is an array
    isArray: (value) => {
        return Array.isArray(value);
      }
}
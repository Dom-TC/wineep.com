import { DateTime } from "luxon";

export default {
    toISOString: (dateString) => {
        return new Date(dateString).toISOString()
    },

    getMonthYear: (date) => {
        return DateTime.fromJSDate(date).toLocaleString({ month: 'long', year: 'numeric' });
    },

    formatDate: (date, format = "YYYY/MM/DD") => {
        return DateTime.DateTime.fromJSDate(date).toFormat(format);
    },
}
var moment = require('moment');
export function SortDate(input_date) {
	return moment(input_date).format('DD MMM YYYY');
}
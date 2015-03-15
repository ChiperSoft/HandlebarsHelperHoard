
exports.gt = function () {
	return function (value, test, options) {
		if (arguments.length !== 3) {
			throw new Error('Handlebars Helper "gt" needs 2 parameters');
		}
		
		if (!options.fn) return value > test || '';
		if (value > test) {
			return options.fn(this);
		} else {
			return options.inverse(this);
		}
	};
};
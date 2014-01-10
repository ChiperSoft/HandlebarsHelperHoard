
exports.multiply = function () {
	return function (valueA, valueB, options) {
		if (arguments.length < 2) {
			throw new Error('Handlebars Helper "multiply" needs 1 parameter minimum');
		}

		options = arguments[arguments.length - 1];

		var value = valueA;

		//with the arguments array as an entry point, descend into any sub-arrays for values to multiply the initial value by.
		(function descend(level) {
			if (Array.isArray(level)) {
				level.forEach(descend);
			} else {
				value = value * parseInt(level, 10);
			}
		})([].slice.call(arguments, 1, arguments.length - 2));

		return value;
		
	};
};
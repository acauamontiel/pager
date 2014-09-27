(function(root, factory) {
	'use strict';

	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.Pager = factory();
	}
} (this, function() {
	'use strict';

	function Pager (length, circular) {
		this.current = 0;
		this.length = length;
		this.circular = ('undefined' === typeof circular) ? true : circular;
	}

	Pager.prototype = {
		set: function(index) {
			var last = this.getLast();
			this.current = (last >= index) ? index : last;
		},

		hasPrev: function() {
			return 0 !== this.current;
		},

		hasNext: function() {
			return this.current < this.getLast();
		},

		getPrev: function () {
			if (this.hasPrev()) {
				return parseInt(this.current) - 1;
			} else {
				return (this.circular) ? this.getLast() : false;
			}
		},

		getNext: function() {
			if (this.hasNext()) {
				return parseInt(this.current) + 1;
			} else {
				return (this.circular) ? 0 : false;
			}
		},

		getFirst: function() {
			return 0;
		},

		getLast: function() {
			return this.length - 1;
		},

		prev: function() {
			if (this.hasPrev()) {
				this.current--;
			} else if (this.circular) {
				this.last();
			}

			return this.current;
		},

		next: function() {
			if (this.hasNext()) {
				this.current++;
			} else if (this.circular) {
				this.first();
			}

			return this.current;
		},

		first: function() {
			return (this.current = this.getFirst());
		},

		last: function() {
			return (this.current = this.getLast());
		}
	};

	return Pager;
}));

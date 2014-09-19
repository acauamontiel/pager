function Pager (length, circular) {
	this.current = 0;
	this.length = length;
	this.circular = ('undefined' === typeof circular) ? true : circular;
}

Pager.prototype.set = function(index) {
	var last = this.getLast();
	this.current = (last >= index) ? index : last;
};

Pager.prototype.hasPrev = function() {
	return 0 !== this.current;
};

Pager.prototype.hasNext = function() {
	return this.current < this.getLast();
};

Pager.prototype.getPrev = function () {
	if (this.hasPrev()) {
		return parseInt(this.current) - 1;
	} else {
		return (this.circular) ? this.getLast() : false;
	}
};

Pager.prototype.getNext = function() {
	if (this.hasNext()) {
		return parseInt(this.current) + 1;
	} else {
		return (this.circular) ? 0 : false;
	}
};

Pager.prototype.getFirst = function() {
	return 0;
};

Pager.prototype.getLast = function() {
	return this.length - 1;
};

Pager.prototype.prev = function() {
	if (this.hasPrev()) {
		this.current--;
	} else {
		if (this.circular) {
			this.last();
		}
	}

	return this.current;
};

Pager.prototype.next = function() {
	if (this.hasNext()) {
		this.current++;
	} else {
		if (this.circular) {
			this.first();
		}
	}

	return this.current;
};

Pager.prototype.first = function() {
	return this.current = this.getFirst();
};

Pager.prototype.last = function() {
	return this.current = this.getLast();
};

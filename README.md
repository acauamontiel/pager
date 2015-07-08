Pager v1.0.1
============

> A very simple and useful pager boilerplate

[![Bower version](https://badge.fury.io/bo/pager.svg)](http://badge.fury.io/bo/pager)
[![npm version](https://badge.fury.io/js/pager-js.svg)](http://badge.fury.io/js/pager-js)

---


Usage
-----

It's very simple to use Pager. You will need to [download](https://github.com/acauamontiel/pager/archive/master.zip) the files, or just run some of these following command lines: `bower install pager --save` or `npm i pager-js --save`

Then you just need to include the file in your HTML:

```html
<script src="bower_components/pager.min.js"></script>
```

If you're in a CommonJS environment:

```javascript
var Pager = require('pager-js');
```

Or if you're in a AMD environment:

```javascript
require(['path-to/pager'], function (Pager) {
	// ...
});
```

Now you can create a new instance:

```javascript
var myPager = new Pager(length, circular);
```

### Options

* **length** `Number` - Specifies the amount of items
* **circular** `Boolean` - Specifies whether to wrap at the first/last item and jump back to the start/end


### API

#### .set(index)

```javascript
myPager.set(2); // return number
```

Sets the current index with the number entered in the index parameter if it is not greater than the last index


#### .hasPrev()

```javascript
myPager.hasPrev(); // return boolean
```

Returns if there is a previous index


#### .hasNext()

```javascript
myPager.hasNext(); // return boolean
```

Returns if there is a next index


#### .getPrev()

```javascript
myPager.getPrev(); // return number or false
```

Returns the previous index if it exists


#### .getNext()

```javascript
myPager.getNext(); // return number or false
```

Returns the next index if it exists


#### .getFirst()

```javascript
myPager.getFirst(); // return number
```

Returns the first index


#### .getLast()

```javascript
myPager.getLast(); // return number
```

Returns the last index


#### .prev()

```javascript
myPager.prev(); // return number
```

Sets and returns the current index with the previous index, if the **circular** option is true and the current index is 0 it will return the last index


#### .next()

```javascript
myPager.next(); // return number
```

Sets and returns the current index with the next index, if the **circular** option is true and the current index is the last index it will return the first index


#### .first()

```javascript
myPager.first(); // return number
```

Sets the current index with the first index and return it


#### .last()

```javascript
myPager.last(); // return number
```

Sets the current index with the last index and return it


Building
--------

First of all, you need have installed [Node.js](http://nodejs.org/) and [Gulp](http://gulpjs.com) globally.
Then you can:

- Clone the repo: `git clone git@github.com:acauamontiel/pager.git`
- Enter the folder: `cd pager`
- Finally install Node dependencies: `npm install`


### Running

You can build by [Gulp](http://gulpjs.com)


#### Available Gulp commands


##### Default - `gulp`

Run `gulp` to lint and minify the code


##### Watch - `gulp watch`

Run `gulp watch` to watch JavaScript files


License
-------

© 2014 [Acauã Montiel](http://acauamontiel.com.br)

[MIT License](http://acaua.mit-license.org/)

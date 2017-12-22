/*
Just about identical copy of the code from https://github.com/keccers/heygirl minus pictures of Gosling :-)
*/

function Placeholder(i, g) {
	this.ratio = i, this.imageurl = g
}

function Randomize(i) {
	return Math.floor(Math.random() * i.length)
}

function imageRatio(i) {
	var g = i.height / i.width;
	return g > 1 ? "vertical" : 1 === g ? "square" : 1 > g ? "horizontal" : void 0
}
var getPlaceholder = {
		init: function(i) {
			this.myPlaceholder = i
		},
		horizontal: function() {
			return this.myPlaceholder.filter(function(i) {
				return "horizontal" === i.ratio
			})
		},
		vertical: function() {
			return this.myPlaceholder.filter(function(i) {
				return "vertical" === i.ratio
			})
		},
		square: function() {
			return this.myPlaceholder.filter(function(i) {
				return "square" === i.ratio
			})
		}
	},
	myPlaceholder = [new Placeholder("horizontal", "http://via.placeholder.com/300x200"), new Placeholder("vertical", "http://via.placeholder.com/200x300"), new Placeholder("square", "http://via.placeholder.com/200x200")];
! function(i) {
	getPlaceholder.init(myPlaceholder);
	for (var g = i.getElementsByTagName("img"), o = g.length, n = 0; o > n; n++) {
		var l = imageRatio(g[n]),
			t = Randomize(getPlaceholder[l]()),
			e = getPlaceholder[l]()[t];
		g[n].src = e.imageurl
	}
}(document);

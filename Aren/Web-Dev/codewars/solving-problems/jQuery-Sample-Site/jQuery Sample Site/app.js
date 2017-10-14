/*

For this quiz, can you use this script, which is linked in the <head> of index.html,
to change the boring placeholder image to a picture of a cute animal?

Remember, you'll need to pass a function into the jQuery object to run
when the document is ready.

Unfortunately, placepuppy is no longer available. Here's a link to a random
animal image on lorempixel.com:
http://lorempixel.com/350/150/animals/

Good luck!

*/
//var s = $('<img src="http://lorempixel.com/350/150/animals/" alt="Mountain View" style="width:304px;height:228px;">');
//$(document).ready(s);
//$('img').attr('src', 'http://placepuppy.it/350/150');

$(function() {
	var t = $('<img src="http://lorempixel.com/350/150/animals/">');
    var s = $('.article-list');
	t.insertAfter(s);
	//$('img').attr('src', 'http://lorempixel.com/350/150/animals/');
})
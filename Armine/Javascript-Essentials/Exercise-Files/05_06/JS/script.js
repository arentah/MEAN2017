
const FEATURED = document.querySelector(".featured-image");
const THEIMAGE = FEATURED.querySelector("img");

var altText = THEIMAGE.getAttribute("alt");

var captionElement = document.createElement("figcaption");
// creates a figcaption that's not in the document, just sitting in the browser
/**/
var captionText = document.createTextNode(altText);

captionElement.appendChild(captionText);

FEATURED.appendChild(captionElement);
/**/

/*
captionElement.append(altText);
FEATURED.append(captionElement);
*/
THEIMAGE.setAttribute("alt","");

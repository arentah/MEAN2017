var extLinks = document.querySelectorAll('a[href^]="http"]');
// means that any link that has the href attribute starting
// with whatever defined in double quotes
// will catch both http and https links

for(var i = 0; i < extLinks.length; i++){
  console.log(extLinks[i]);

  if( !extLinks[i].hasAttribute("target")){
    extLinks[i].setAttribute("target","_blank");
  }
}

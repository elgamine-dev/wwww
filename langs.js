/* 
source arabe
http://fr.wikiversity.org/wiki/Arabe/Grammaire/Alphabet

todo :
- add example
- add image
*/
var langs = {
	fr:[
    {l:'A'}, 
    {l:'B'}, 
    {l:'C'},
    {l:'D'},
    {l:'E'},
    {l:'F'},
  ],
	ar:[
  	{l:'ا',t:'ʾalif'},
  	{l:'ب',t:'bāʾ'},
  	{l:'ت',t:'tāʾ'},
  	{l:'ث',t:'ṯāʾ'},	  
  	{l:'ج',t:'ǧīm'},	  
	],
  bin:[
    {l:'0'},
    {l:1},
    {l:2},
    {l:3},
    {l:4},
    {l:5},
    {l:6},
    {l:7},
    {l:8},
    {l:9},
  ],
  square:[
    {l:shape(1,'sqr')},
    {l:shape(2,'sqr')},
    {l:shape(3,'sqr')},
  ]
};

function shape(times, cls){
  var out='';
  for (var i = times;i>0; i--) {
    out += '<span class="'+cls+'"></span>'
  }
  return out;
}
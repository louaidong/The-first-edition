"use strict";define(["jquery","jquery-cookie"],function(o){return{download:function(){o.ajax({url:"../date/index.json",success:function(a){for(var i="",t=0;t<3;t++)i+='<a href="javascript:;">\n                    <img src="'.concat(a[t].img,'">\n                </a>');o(".title1_img").html(i);for(var r="",n=3;n<5;n++)r+='<a href="javascript:;">\n                    <img src="'.concat(a[n].img,'">\n                </a>');o(".title2_img").html(r);for(var c="",e=5;e<7;e++)c+='<a href="javascript:;">\n                    <img src="'.concat(a[e].img,'">\n                </a>');o(".title3_img").html(c)}})}}});
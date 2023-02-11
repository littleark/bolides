(function(){var e=0;var t=["ms","moz","webkit","o"];for(var n=0;n<t.length&&!window.requestAnimationFrame;++n){window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"]}if(!window.requestAnimationFrame)window.requestAnimationFrame=function(t,n){var r=(new Date).getTime();var i=Math.max(0,16-(r-e));var s=window.setTimeout(function(){t(r+i)},i);e=r+i;return s};if(!window.cancelAnimationFrame)window.cancelAnimationFrame=function(e){clearTimeout(e)}})();(function(){function t(){var e=document.createElement("canvas");return!!(e.getContext&&e.getContext("2d"))}function v(t){function W(e,t,n){}function $(){var e=d3.extent(t.filter(function(e){return V.indexOf(+e.y)>-1}),function(e){return e.m});O.domain([0,e[1]]);X.container.selectAll("ul").classed("selected",function(e){console.log(e);return V.indexOf(+e.key)>-1}).selectAll("li.meteorite").select("b").style("width",function(e){return O(e.m)+"px"}).style("height",function(e){return O(e.m)+"px"})}function Q(){if(s)return;var e=window.scrollY||window.pageYOffset,t=J.classed("fixed");K.style("opacity",e/400);if(e>=299){if(!t){J.classed("fixed",true);d3.select(".logo").style("opacity",0).transition().duration(1e3).style("opacity",1);E.attr("height",350-1)}}else{if(t){d3.select(".logo").style("opacity",0);J.classed("fixed",false);E.attr("height",500);d3.select(".logo").transition().duration(2e3).style("opacity",1)}}}function Y(t){if(e){return}var t=t||z;var n=[];t.filter(function(e){return V.indexOf(+e.key)>-1}).forEach(function(e){var t=d3.extent(e.values,function(e){return e.m});n=n.concat(t)});var r=d3.extent(n);O.domain([0,r[1]]);var i=X.container.selectAll("div.meteorites").data(V);i=i.enter().insert("div",":first-child").attr("class","meteorites clearfix").attr("data",function(e){return+e}).style("opacity",.1);i.append("div").attr("class","m-year").append("a").attr("href","#").attr("title",function(e){return"Remove year "+e}).html(function(e){return"<b>"+e+"</b>"+"<span>x</span>"}).on("click",function(e){d3.event.preventDefault();d3.select("#info[data='"+e+"']").classed("selected",false);X.container.selectAll("div.meteorites[data='"+e+"']").transition().duration(1e3).style("opacity",0).each("end",function(){d3.select(this).remove();V.splice(V.indexOf(e),1);Y()})});var s=i.append("ul").selectAll("li.meteorite").data(function(e){var n=t.filter(function(t){return+t.key==e});return n[0].values}).enter().append("li").attr("class","meteorite clearfix");s.append("div").attr("class","shape").append("b").style("width",function(e){return"1px"}).style("height",function(e){return"1px"}).style("top",function(e){return"35px"});s.append("h3").html(function(e){return"<b>"+e.p+"</b><br/><span>"+countries[e.c]+"</span>"+"<br/><span>TYPE: "+e.t+"</span>"});s.append("h4").text(function(e){return"MASS: "+o(e.m)});s.append("div").attr("class","links").html(function(e){var t='<a href="http://here.com/map='+e.l+",8/title="+encodeURI(e.p+", "+e.c+" Type: "+e.t+" Mass: "+o(e.m))+'" target="_blank"><i class="icon-location"></i></a>',n='<a href="http://www.lpi.usra.edu/meteor/metbull.php?code='+e.u+'" title="Open at the Meteoritical Society" target="_blank"><i class="icon-link"></i></a>';return t+n});i.transition().duration(1e3).style("opacity",1);setTimeout(function(){X.container.selectAll("li.meteorite").select("b").style("width",function(e){return O(e.m)+"px"}).style("height",function(e){return O(e.m)+"px"}).style("border-radius",function(e){return O(e.m)/2+"px"}).style("top",function(e){return 35-O(e.m)/2+"px"})},50)}function st(e){var t=tt<b[0]+100;d3.selectAll(".view.visible").classed("visible",false);d3.select(".view[data='"+e.key+"']").classed("visible",true);it.el.style({display:"block",left:w(tt)+"px",opacity:1}).attr("data",tt).classed("selected",V.indexOf(tt)>-1).classed("ileft",t);it.h6.html("Year "+tt+", "+e.values.length+" landings");it.ul.selectAll("li").remove();it.ul.selectAll("li").data(e.values.slice(0,10)).enter().append("li").append("a").attr("href","#").html(function(e){var n=D(e.m)*2;n=n|n;return"<span>"+e.p+", "+countries[e.c]+"</span> - "+o(e.m)+'<b style="width:'+n+"px;height:"+n+"px;top:-"+(n/2+8)+"px;"+(t?"left":"right")+":"+ -n/2+"px;border-radius:"+n/2+'px"></b>'}).on("click",function(e){d3.event.preventDefault();if(V.indexOf(+e.y)<0){it.el.classed("selected",true);V.push(+e.y);Y()}});it.plus.on("click",function(){d3.event.preventDefault();if(V.indexOf(tt)>-1){it.el.classed("selected",false);X.container.selectAll("div.meteorites[data='"+tt+"']").transition().duration(1e3).style("opacity",0).each("end",function(){d3.select(this).remove();V.splice(V.indexOf(tt),1);Y()});d3.select(this).select("text").attr("dy",0).text("+")}else{V.push(tt);it.el.classed("selected",true);Y();d3.select(this).select("text").attr("dy",-2).text("–")}})}function at(){g=[];for(var e=0;e<t.length;e++){var r=t[e];var s=new Vector2(2.5+(-.5+Math.random()*2),1),o=s.angle(),u=s.clone().reverse();u.normalise().multiplyEq(200+Math.random()*200);var f=u.magnitude()/s.magnitude(),l=s.clone();var c=new Particle(w(r.y)+u.x,a+u.y,A(r.m));c.t=H(+r.y+Math.random());c.year=r.y;c.gravity=0;c.vel=s;c.explode=false;if(i){c.compositeOperation="lighter"}g.push(c)}R=(new Date).getTime();n=1}function ht(){v.fillStyle="rgba(0,0,0,1)";v.clearRect(0,0,d.width,d.height)}function pt(){v.save();v.strokeStyle="#fff";v.lineWidth=1;v.beginPath();v.moveTo(0,a);v.lineTo(u,a);v.stroke();v.restore()}function dt(){v.fillStyle="rgba(0,0,0,0.2)";v.fillRect(0,0,u,a);var e=H.invert(j);pt();if(e<=b[1]){v.save();v.fillStyle="#000";v.fillRect(w(e)-18,a-1,2,2);v.restore()}if(lt<B){h.text(B);p.text(r(ft)+" meteorite"+(ft>1?"s":""));lt=B}vt();var t=(new Date).getTime();j+=t-R;R=t;if(j<c+5e3){l=true;ct=requestAnimationFrame(dt)}else{l=false}}function vt(){for(var e=0;e<g.length;e++){var t=g[e];if(t.pos.y<a-1&&t.t<j&&!t.explode){t.update(d);B=t.year;t.draw(v);ft=e+1}else{if(!(t.pos.y<a-1)){t.explode=true;t.vel.x=0;t.vel.y=0;t.radius*=1.095;t.update(d);t.draw(v)}}}}var n=0;var r=d3.format(",.0f");var o=function(e){if(e===0){return"Unknown Mass"}var e=d3.format(".2s")(e);e=e.search(/[kM]+/g)>-1?e.replace("k"," kg").replace("M"," ton"):e+" gr";return e};var h=d3.select("#year h3 span");var p=d3.select("#year h3 b");var d=document.getElementById("falling"),v=d.getContext("2d");v.font="bold 16px Arial";var m=300;d.width=u;d.height=a+m;document.getElementById("canvas");var g=[];var y=[];var b=d3.extent(t,function(e){return e.y});var w=d3.scale.pow().exponent(5).range([0+50,u-50]).domain([b[0],b[1]]);var E=d3.select("#canvas").append("svg").attr("id","years").attr("width",d.width).attr("height",d.height+m);d3.select(window).on("resize",function(){if(u==window.innerWidth)return;u=window.innerWidth;E.attr("width",u);d.width=u;w.range([0+50,u-50]);k.selectAll("text").attr("x",function(e){return parseInt(w(e))});N.selectAll("g.view").attr("transform",function(e){return"translate("+parseInt(w(+e.key))+","+(a-5)+")"});T.selectAll("rect").attr("x",function(e){return parseInt(w(+e.key)-1)});it.el.style({left:w(tt)+"px"});f.restart()});E.append("rect").attr("x",0).attr("y",0).attr("width",d.width).attr("height",d.height+m).style("fill-opacity",0);var S=E.append("g").attr("id","legend").attr("transform","translate(5,"+a+")");S.append("rect").attr("class","istograms").attr("x",0).attr("y",0).attr("width",1).attr("height",36);S.selectAll("rect.count").data(d3.range(10)).enter().append("rect").attr("class","count").attr("x",0).attr("y",function(e,t){return-(t*2+t*2)}).attr("width",1).attr("height",1);S.append("text").attr("x",0).attr("y",-40).attr("dx",-3).text("COUNT");S.append("text").attr("x",0).attr("y",46).attr("dx",-3).text("MASS");var x=[b[0],1400,1500,1600,1700,1800,1900,1950,2e3,2013];var T=E.append("g").attr("id","istograms");var N=E.append("g").attr("id","views");var C=E.append("g").attr("id","circles");var k=E.append("g").attr("id","axis");k.selectAll("text").data(x).enter().append("text").style("text-anchor",function(e,t){if(e==x[x.length-1]){return"start"}return"end"}).attr("dx",function(e,t){if(e==x[x.length-1]){return 5}return-5}).attr("x",function(e){return parseInt(w(e))}).attr("y",a+20).text(String);var L=d3.extent(t,function(e){return e.m});var A=d3.scale.sqrt().range([1.5,20]).domain(L);var O=d3.scale.sqrt().rangeRound([4,60]).domain(L);var M=d3.scale.sqrt().range([5,100]).domain(L);var _=d3.scale.sqrt().range([2,20]).domain(L);var D=d3.scale.pow().exponent(1/3).range([.5,30]).domain(L);var P=d3.scale.pow().exponent(-1).range([0,1]).domain([b[0],b[1]+100]);var H=d3.scale.pow().exponent(10).range([1,c]).domain([b[0],b[1]+100]);var B=b[0],j=0,F=b[1],I=F;var q=.01;var R=0;var U=d3.nest().key(function(e){return e.y}).rollup(function(e){return{count:e.length,mass:d3.max(e,function(e){return e.m})}}).entries(t);var z=d3.nest().key(function(e){return e.y}).entries(t);T.selectAll("rect").data(U).enter().append("rect").attr("x",function(e){return parseInt(w(+e.key)-1)}).attr("y",function(e){return a}).attr("width",1).attr("height",function(e){return M(e.values.mass)});var X={container:d3.select("#details>div"),list:d3.select("#details ul"),year:d3.select("#details h2 span#dYear"),count:d3.select("#details h2 span#dCount")};var V=[];var J=d3.select("body"),K=d3.select("#stuff");d3.select(window).on("scroll",Q);var G=[];Y(z);d3.select("#restart").on("click",function(){d3.event.preventDefault();f.restart()});var Z=d3.select("#playPause");Z.on("click",function(){d3.event.preventDefault();if(n==0){f.start();Z.classed("paused",false)}else{f.pause();Z.classed("paused",true)}});var et=d3.bisector(function(e){return e.key}).right;var tt=0;var nt=false;var rt=null;var it={el:d3.select("#info"),ul:d3.select("#info ul"),h6:d3.select("#info h6"),plus:d3.select("#info #plus")};E.on("mousemove",function(){var e=d3.mouse(this)[0]+4,t=w.invert(e);t=t|t;var n=et(z,t,1),r=z[n-1];if(nt&&tt!=+r.key){tt=+r.key;st(r)}else{d3.selectAll(".view.visible").classed("visible",false);d3.select(".view[data='"+r.key+"']").classed("visible",true)}}).on("mousedown",function(){d3.event.preventDefault();nt=true;if(rt){clearTimeout(rt)}}).on("mouseup",function(){rt=setTimeout(function(){d3.selectAll("#circles g[data='"+tt+"']").classed("visible",false);it.el.style("opacity",.1)},3e3);nt=false}).on("click",function(){var e=d3.mouse(this)[0]+4,t=w.invert(e);t=t|t;var n=et(z,t,1),r=z[n-1];tt=+r.key;st(r)});d3.select(document).on("mouseup",function(){rt=setTimeout(function(){it.el.style("opacity",.1)},3e3);nt=false});E.on("touchmove",function(){d3.event.preventDefault();var e=d3.touches(this)[0][0],t=w.invert(e);t=t|t;var n=et(z,t,1),r=z[n-1];var e=d3.touches(this)[0][0],t=w.invert(e);t=t|t;var n=et(z,t,1),r=z[n-1];if(nt&&tt!=+r.key){tt=+r.key;st(r)}}).on("touchstart",function(){nt=true;if(rt){clearTimeout(rt)}}).on("touchend",function(){d3.event.stopPropagation();rt=setTimeout(function(){it.el.style("opacity",.1)},3e3);Q()});views=N.selectAll("g.views").data(U).enter().append("g").attr("class","view").attr("data",function(e){return e.key}).attr("transform",function(e){return"translate("+parseInt(w(+e.key))+","+(a-5)+")"});views.selectAll("rect.sq").data(function(e){var t=[];var n=5;for(var r=0;r<e.values.count;r++){t.push(r)}return t}).enter().append("rect").attr("class","sq").attr("x",-1).attr("y",function(e,t){return-(t*2+t*2)}).attr("width",1).attr("height",1);var ot=Math.PI,ut=d3.svg.arc().innerRadius(0).outerRadius(0).startAngle(-90*(ot/180)).endAngle(90*(ot/180));views.append("path").attr("d",function(e){ut.outerRadius(A(e.values.mass)*3);return ut()}).attr("transform","translate(0,4)");at();dt();var ft=1,lt=0,ct=-1;this.restart=function(){cancelAnimationFrame(ct);Z.classed("paused",false);ft=1;B=b[0];lt=0;j=0;ht();at();dt()};this.pause=function(){n=0;cancelAnimationFrame(ct)};this.start=function(){if(n==0){R=(new Date).getTime();n=1;dt()}};this.isPlaying=function(){return l}}function y(e,t){var n=d3.format(",.0f");var r=function(e){if(e===0){return"UNKNOWN"}var e=d3.format(".2s")(e);e=e.search(/[kM]+/g)>-1?e.replace("k"," kg").replace("M"," ton"):e+" gr";return e};var i=e.latitude/e.latitude.toFixed()>1?e.latitude:e.latitude.toFixed(1),s=e.longitude/e.longitude.toFixed()>1?e.longitude:e.longitude.toFixed(1);var o=d3.extent(t,function(e){return e.mass_g});var u=d3.scale.sqrt().rangeRound([5,100]).domain(o),a=u(e.mass_g);var f='<div class="m-shape"><b style="width: '+a+"px; height: "+a+"px;border-radius:"+a/2+"px;-webkit-border-radius:"+a/2+"px;margin-top:"+parseInt(50-a/2)+'px"></b></div>'+'<div class="m-info">'+'<span class="place">'+e.place+"</span>"+"<br/>"+"<span>"+e.country.country+", "+e.year+"</span>"+"<br/><span>TYPE: "+e.type_of_meteorite+"</span>"+"<br/>"+"<span>MASS: "+r(e.mass_g)+"</span>"+"<br/>"+'<a href="http://here.com/map='+i+","+s+",8/title="+encodeURI(e.place+", "+e.country.country+" Type: "+e.type_of_meteorite+" Mass: "+r(e.m))+'" target="_blank"><i class="icon-location"></i></a>'+'<a href="'+e.database+'" title="Open at the Meteoritical Society" target="_blank"><i class="icon-link"></i></a>'+"</div>";return f}var e=window.location.search.indexOf("embed")>-1;if(!t()){var n=document.createElement("div");n.className="ie8";n.innerHTML='<h1 class="logo"><i class="icon-fire-station"></i>bolides</h1><p>Your browser is apparently too old.<br/>Try with a modern browser or <a href="http://browser-update.org/update.html">update now</a>.</p>';document.getElementsByTagName("body")[0].appendChild(n);return 0}var r=!!navigator.userAgent.match(/firefox/i);var i=window.chrome||false;var s="ontouchstart"in document.documentElement;var o=Math.PI/180;var u=window.innerWidth,a=200;var f;var l=true;var c=60*1e3;var h="{'year':{$ne:'',$gt:0},'fell_found':'Fell','mass_g':{$gt:0},'type_of_meteorite':{$nin:[/Doubt/]}}",p="{'mass_g':1,'year':1,'place':1}",d="{'year':1}";h="{'year':{$ne:'',$gt:0},'fell_found':'Fell','mass_g':{$gt:0}}";d3.csv("data/met2.csv",function(e){e.l=e.lat+","+e.lng;e.y=+e.y;e.m=+e.m;return e},function(t){d3.select("body").classed("touch",s).classed("embedded",e);f=new v(t.sort(function(e,t){return e.y-t.y||t.m-e.m}));d3.select("#year h3").classed("hidden",false)});if(e){return}var m=[{country:{country:"Russia"},database:"http://www.lpi.usra.edu/meteor/metbull.php?code=23593",latitude:46.16,longitude:134.65333,mass_g:23e6,place:"Sikhote-Alin",type_of_meteorite:"Iron, IIAB",year:1947},{country:{country:"China"},database:"http://www.lpi.usra.edu/meteor/metbull.php?code=12171",latitude:44.05,longitude:126.16667,mass_g:4e6,place:"Jilin",type_of_meteorite:"H5",year:1976},{country:{country:"Mexico"},database:"http://www.lpi.usra.edu/meteor/metbull.php?code=2278",latitude:26.96667,longitude:-105.31667,mass_g:2e6,place:"Allende",type_of_meteorite:"CV3",year:1969},{country:{country:"United States"},database:"http://www.lpi.usra.edu/meteor/metbull.php?code=17922",latitude:39.68333,longitude:-99.86667,mass_g:11e5,place:"Norton County",type_of_meteorite:"Aubrite",year:1948},{country:{country:"Turkmenistan"},database:"http://www.lpi.usra.edu/meteor/metbull.php?code=12379",latitude:42.25,longitude:59.2,mass_g:11e5,place:"Kunya-Urgench",type_of_meteorite:"H5",year:1998},{country:{country:"China"},database:"http://www.lpi.usra.edu/meteor/metbull.php?code=12087",latitude:30.80833,longitude:109.5,mass_g:6e5,place:"Jianshi",type_of_meteorite:"Iron, IIIAB",year:1890},{country:{country:"Slovakia"},database:"http://www.lpi.usra.edu/meteor/metbull.php?code=12335",latitude:48.9,longitude:22.4,mass_g:5e5,place:"Knyahinya",type_of_meteorite:"L/LL5",year:1866},{country:{country:"Russia"},database:"http://www.lpi.usra.edu/meteor/metbull.php?code=17979",latitude:57.78333,longitude:55.26667,mass_g:5e5,place:"Ochansk",type_of_meteorite:"H4",year:1887},{country:{country:"United States"},database:"http://www.lpi.usra.edu/meteor/metbull.php?code=18101",latitude:36.06667,longitude:-90.5,mass_g:408e3,place:"Paragould",type_of_meteorite:"LL5",year:1930},{country:{country:"Finland"},database:"http://www.lpi.usra.edu/meteor/metbull.php?code=5064",latitude:60.4,longitude:25.8,mass_g:33e4,place:"Bjurböle",type_of_meteorite:"L/LL4",year:1899}];var g=[{country:{country:"Namibia"},database:"http://www.lpi.usra.edu/meteor/metbull.php?code=11890",latitude:-19.58333,longitude:17.91667,mass_g:6e7,place:"Hoba",type_of_meteorite:"Iron, IVB",year:1920},{country:{country:"Greenland"},database:"http://www.lpi.usra.edu/meteor/metbull.php?code=5262",latitude:76.13333,longitude:-64.93333,mass_g:582e5,place:"Cape York",type_of_meteorite:"Iron, IIIAB",year:1818},{country:{country:"Argentina"},database:"http://www.lpi.usra.edu/meteor/metbull.php?code=5247",latitude:-27.46667,longitude:-60.58333,mass_g:5e7,place:"Campo del Cielo",type_of_meteorite:"Iron, IAB-MG",year:1576},{country:{country:"United States"},database:"http://www.lpi.usra.edu/meteor/metbull.php?code=5257",latitude:35.05,longitude:-111.03333,mass_g:3e7,place:"Canyon Diablo",type_of_meteorite:"Iron, IAB-MG",year:1891},{country:{country:"China"},database:"http://www.lpi.usra.edu/meteor/metbull.php?code=2335",latitude:47,longitude:88,mass_g:28e6,place:"Armanty",type_of_meteorite:"Iron, IIIE",year:1898},{country:{country:"Namibia"},database:"http://www.lpi.usra.edu/meteor/metbull.php?code=10912",latitude:-25.5,longitude:18,mass_g:26e6,place:"Gibeon",type_of_meteorite:"Iron, IVA",year:1836},{country:{country:"Mexico"},database:"http://www.lpi.usra.edu/meteor/metbull.php?code=5363",latitude:27,longitude:-105.1,mass_g:243e5,place:"Chupaderos",type_of_meteorite:"Iron, IIIAB",year:1852},{country:{country:"Australia"},database:"http://www.lpi.usra.edu/meteor/metbull.php?code=16852",latitude:-30.78333,longitude:127.55,mass_g:24e6,place:"Mundrabilla",type_of_meteorite:"Iron, IAB-ung",year:1911},{country:{country:"Mexico"},database:"http://www.lpi.usra.edu/meteor/metbull.php?code=4919",latitude:26.2,longitude:-107.83333,mass_g:22e6,place:"Bacubirito",type_of_meteorite:"Iron, ungrouped",year:1863},{country:{country:"Tanzania"},database:"http://www.lpi.usra.edu/meteor/metbull.php?code=15456",latitude:-9.11667,longitude:33.06667,mass_g:16e6,place:"Mbosi",type_of_meteorite:"Iron, ungrouped",year:1930}];d3.select("div.half.right ul").selectAll("li").data(m).enter().append("li").attr("class","comparison").html(function(e){return y(e,g.concat(m))});d3.select("div.half.left ul").selectAll("li").data(g).enter().append("li").attr("class","comparison").html(function(e){return y(e,g.concat(m))})})()
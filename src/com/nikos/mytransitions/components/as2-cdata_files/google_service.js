
(function(){var f=null,k=false;function l(a){this.t={};this.tick=function(a,c,e){e=e?e:(new Date).getTime();this.t[a]=[e,c]};this.tick("start",f,a)}var m=new l;window.GA_jstiming={Timer:l,load:m};if(window.GA_jstiming){window.GA_jstiming.d={};window.GA_jstiming.i=1;var n=function(a,b,c){var e=a.t[b],d=a.t.start;if(e&&(d||c))return e=a.t[b][0],d=c!=void 0?c:d[0],e-d};window.GA_jstiming.report=function(a,b,c){var e="";a.h&&(e+="&"+a.h);var d=a.t,h=d.start,r=[],o=[],g;for(g in d)if(g!="start"&&g.indexOf("_")!=0){var i=d[g][1];i?d[i]&&o.push(g+"."+n(a,g,d[i][0])):h&&r.push(g+"."+n(a,g))}delete d.start;if(b)for(var j in b)e+="&"+j+"="+b[j];var a=[c?c:"http://csi.gstatic.com/csi","?v=3","&s="+(window.GA_jstiming.sn||
"gam")+"&action=",a.name,o.length?"&it="+o.join(","):"","",e,"&rt=",r.join(",")].join(""),b=new Image,s=window.GA_jstiming.i++;window.GA_jstiming.d[s]=b;b.onload=b.onerror=function(){delete window.GA_jstiming.d[s]};b.src=a;b=f;return a}};var p=this,q=function(a,b){var c,e=b,d=a.split(".");c=c||p;!(d[0]in c)&&c.execScript&&c.execScript("var "+d[0]);for(var h;d.length&&(h=d.shift());)!d.length&&e!==void 0?c[h]=e:c=c[h]?c[h]:c[h]={}},u=function(a){var b=t;function c(){}c.prototype=b.prototype;a.k=b.prototype;a.prototype=new c};var v=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,w=function(a,b){if(!a)return b;var c=a.match(v);return c?c[0]:b};var x,y="false",z=k,A=x=y=="true"?true:y=="false"?k:z;var B=function(){return w("","pubads.g.doubleclick.net")};var D=function(a){for(var b=aa,c=0,b=String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),a=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(b.length,a.length),d=0;c==0&&d<e;d++){var h=b[d]||"",r=a[d]||"",o=RegExp("(\\d*)(\\D*)","g"),g=RegExp("(\\d*)(\\D*)","g");do{var i=o.exec(h)||["","",""],j=g.exec(r)||["","",""];if(i[0].length==0&&j[0].length==0)break;var c=i[1].length==0?0:parseInt(i[1],10),s=j[1].length==0?0:parseInt(j[1],10),c=C(c,s)||C(i[2].length==0,j[2].length==
0)||C(i[2],j[2])}while(c==0)}return c},C=function(a,b){if(a<b)return-1;else if(a>b)return 1;return 0};var E,F,G,H,I=function(){return p.navigator?p.navigator.userAgent:f};H=G=F=E=k;var J;if(J=I()){var ba=p.navigator;E=J.indexOf("Opera")==0;F=!E&&J.indexOf("MSIE")!=-1;G=!E&&J.indexOf("WebKit")!=-1;H=!E&&!G&&ba.product=="Gecko"}var ca=E,K=F,L=H,da=G,M;
a:{var N="",O;if(ca&&p.opera)var P=p.opera.version,N=typeof P=="function"?P():P;else if(L?O=/rv\:([^\);]+)(\)|;)/:K?O=/MSIE\s+([^\);]+)(\)|;)/:da&&(O=/WebKit\/(\S+)/),O)var Q=O.exec(I()),N=Q?Q[1]:"";if(K){var R,S=p.document;R=S?S.documentMode:void 0;if(R>parseFloat(N)){M=String(R);break a}}M=N}var aa=M,T={},U={},V=function(){var a=9;return U[a]||(U[a]=K&&document.documentMode&&document.documentMode>=a)};!K||V();if(L||K)if((!K||!V())&&L){var W="1.9.1";T[W]||(T[W]=D(W)>=0)}K&&(T["9"]||(T["9"]=D("9")>=0));w("","pagead2.googlesyndication.com");var ea=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(f,a[c],c,a)};var X=function(a){this.c=[];this.b={};for(var b=0,c=arguments.length;b<c;++b)this.b[arguments[b]]=""};X.prototype.j=function(a){return this.b.hasOwnProperty(a)?this.b[a]:""};X.prototype.geil=X.prototype.j;var fa=function(a){var b=[],c=function(a){a!=""&&b.push(a)};ea(a.b,c);return a.c.length>0&&b.length>0?a.c.join(",")+","+b.join(","):a.c.join(",")+b.join(",")};function ga(a){var b="adsense";if(a&&typeof a=="string"&&a.length>0)if(b==f)a=f;else{var c=window.GS_googleServiceIds_[b];c==f&&(c=b=="adsense"?new Y:new Z,window.GS_googleServiceIds_[b]=c);b:{for(b=0;b<c.a.length;b++)if(a==c.a[b])break b;c.a[c.a.length]=a}a=c}else a=f;return a}q("GS_googleAddAdSenseService",ga);function ha(){for(var a in window.GS_googleServiceIds_){var b=window.GS_googleServiceIds_[a];typeof b!="function"&&b.enable()}}q("GS_googleEnableAllServices",ha);
function ia(){window.GS_googleServiceIds_={}}q("GS_googleResetAllServices",ia);function ja(){var a="adsense",a=a==f?f:window.GS_googleServiceIds_[a];return a=a==f?"":a.a.join()}q("GS_googleGetIdsForAdSenseService",ja);function ka(a){return $(a)}q("GS_googleFindService",ka);function la(){var a=$("adsense");return a?fa(a.g):""}q("GS_googleGetExpIdsForAdSense",la);function t(a){this.f=a;this.a=[];this.g=new X}
t.prototype.toString=function(){for(var a="["+this.f+" ids: ",b=0;b<this.a.length;b++)b>0&&(a+=","),a+=this.a[b];a+="]";return a};var $=function(a){return a=a==f?f:window.GS_googleServiceIds_[a]};function Z(){t.call(this,"unknown")}u(Z);Z.prototype.enable=function(){};function Y(){t.call(this,"adsense");this.e=k}u(Y);
Y.prototype.enable=function(){if(!this.e){var a;a=(a=document.URL)&&(a.indexOf("?google_debug")>0||a.indexOf("&google_debug")>0)?"google_ads_dbg.js":"google_ads.js";var b="http://"+w("","partner.googleadservices.com");A&&(b="https://"+w("","securepubads.g.doubleclick.net"));var c="",e;e=B();(e=e=="pubads.g.doubleclick.net")||(c="?prodhost="+B());a=b+"/gampad/"+a+c;b="script";document.write("<"+b+' src="'+a+'"><\/script>');this.e=true;if(window.GA_jstiming&&
window.GA_jstiming.Timer)window.GA_jstiming.load.name="load",window.GA_jstiming.load.tick("start")}};window.GS_googleServiceIds_||(window.GS_googleServiceIds_={});})()

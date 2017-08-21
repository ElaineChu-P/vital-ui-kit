/*******************************************
 * Copyright © 2017 Galaxy Software Services
 *
 * @gsscsid/vital-ui-kit, v0.0.7
 * UI Kit for GSS Vital Family
 *
 * By Neil Lin (https://github.com/Neil-Lin),Patric,Laura Lee (https://github.com/l443018),Eric Yip (https://github.com/ericyip),Vibrissa (https://github.com/Vibrissa),YuRu Lee (https://github.com/YuRu-Lee),CJies Tan (https://github.com/cjies),Evan Wu (https://github.com/evanwu-tw)
 *
 * License: MIT
 *
 ******************************************/
"use strict";var fabricator=window.fabricator={};fabricator.options={toggles:{labels:!0,notes:!0,code:!1},menu:!1,mq:"(min-width: 60em)"},fabricator.options.menu=window.matchMedia(fabricator.options.mq).matches,fabricator.test={},fabricator.test.sessionStorage=function(){var e="_f";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}}(),fabricator.test.sessionStorage&&(sessionStorage.fabricator=sessionStorage.fabricator||JSON.stringify(fabricator.options)),fabricator.dom={root:document.querySelector("html"),primaryMenu:document.querySelector(".f-menu"),menuItems:document.querySelectorAll(".f-menu li a"),menuToggle:document.querySelector(".f-menu-toggle")},fabricator.getOptions=function(){return fabricator.test.sessionStorage?JSON.parse(sessionStorage.fabricator):fabricator.options},fabricator.buildColorChips=function(){for(var e,t=document.querySelectorAll(".f-color-chip"),a=t.length-1;a>=0;a--)e=t[a].querySelector(".f-color-chip__color").innerHTML,t[a].style.borderTopColor=e,t[a].style.borderBottomColor=e;return this},fabricator.setActiveItem=function(){var e=function(){for(var e,t=(window.location.pathname+window.location.hash).replace(/(^\/)([^#]+)?(#[\w\-\.]+)?$/gi,function(e,t,a,n){return n=n||"",a=a||"",a+n.split(".")[0]})||"index.html",a=fabricator.dom.menuItems.length-1;a>=0;a--){var n=fabricator.dom.menuItems[a];e=n.getAttribute("href").replace(/^\//g,""),e===t?n.classList.add("f-active"):n.classList.remove("f-active")}};return window.addEventListener("hashchange",e),e(),this},fabricator.menuToggle=function(){var e=fabricator.dom.menuToggle,t=fabricator.getOptions(),a=function(){t.menu=!fabricator.dom.root.classList.contains("f-menu-active"),fabricator.dom.root.classList.toggle("f-menu-active"),fabricator.test.sessionStorage&&sessionStorage.setItem("fabricator",JSON.stringify(t))};document.onkeydown=function(e){e=e||event,e.ctrlKey&&e.keyCode=="M".charCodeAt(0)&&a()},e.addEventListener("click",function(){a()});for(var n=function(){window.matchMedia(fabricator.options.mq).matches||a()},r=0;r<fabricator.dom.menuItems.length;r++)fabricator.dom.menuItems[r].addEventListener("click",n);return this},fabricator.allItemsToggles=function(){for(var e={labels:document.querySelectorAll('[data-f-toggle="labels"]'),notes:document.querySelectorAll('[data-f-toggle="notes"]'),code:document.querySelectorAll('[data-f-toggle="code"]')},t=document.querySelectorAll(".f-controls [data-f-toggle-control]"),a=fabricator.getOptions(),n=function(t,n){for(var r=document.querySelector(".f-controls [data-f-toggle-control="+t+"]"),i=e[t],o=0;o<i.length;o++)n?i[o].classList.remove("f-item-hidden"):i[o].classList.add("f-item-hidden");n?r.classList.add("f-active"):r.classList.remove("f-active"),a.toggles[t]=n,fabricator.test.sessionStorage&&sessionStorage.setItem("fabricator",JSON.stringify(a))},r=0;r<t.length;r++)t[r].addEventListener("click",function(e){var t=e.currentTarget.getAttribute("data-f-toggle-control"),a=e.currentTarget.className.indexOf("f-active")<0;n(t,a)});for(var i in a.toggles)a.toggles.hasOwnProperty(i)&&n(i,a.toggles[i]);return this},fabricator.singleItemToggle=function(){for(var e=document.querySelectorAll(".f-item-group [data-f-toggle-control]"),t=function(e){var t=this.parentNode.parentNode.parentNode,a=e.currentTarget.getAttribute("data-f-toggle-control");t.querySelector("[data-f-toggle="+a+"]").classList.toggle("f-item-hidden")},a=0;a<e.length;a++)e[a].addEventListener("click",t);return this},fabricator.bindCodeAutoSelect=function(){for(var e=document.querySelectorAll(".f-item-code"),t=function(e){var t=window.getSelection(),a=document.createRange();a.selectNodeContents(e.querySelector("code")),t.removeAllRanges(),t.addRange(a)},a=e.length-1;a>=0;a--)e[a].addEventListener("click",t.bind(this,e[a]))},fabricator.setInitialMenuState=function(){var e=document.querySelector("html"),t=window.matchMedia(fabricator.options.mq),a=function(t){t.matches&&fabricator.getOptions().menu?e.classList.add("f-menu-active"):e.classList.remove("f-menu-active")};return t.addListener(a),a(t),this},function(){fabricator.setInitialMenuState().menuToggle().allItemsToggles().singleItemToggle().buildColorChips().setActiveItem().bindCodeAutoSelect()}(),self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{};var Prism=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{encode:function(e){return e instanceof a?new a(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var a=t.util.type(e);switch(a){case"Object":var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=t.util.clone(e[r]));return n;case"Array":return e.map(function(e){return t.util.clone(e)})}return e}},languages:{extend:function(e,a){var n=t.util.clone(t.languages[e]);for(var r in a)n[r]=a[r];return n},insertBefore:function(e,a,n,r){r=r||t.languages;var i=r[e];if(2==arguments.length){n=arguments[1];for(var o in n)n.hasOwnProperty(o)&&(i[o]=n[o]);return i}var s={};for(var l in i)if(i.hasOwnProperty(l)){if(l==a)for(var o in n)n.hasOwnProperty(o)&&(s[o]=n[o]);s[l]=i[l]}return t.languages.DFS(t.languages,function(t,a){a===r[e]&&t!=e&&(this[t]=s)}),r[e]=s},DFS:function(e,a,n){for(var r in e)e.hasOwnProperty(r)&&(a.call(e,r,e[r],n||r),"Object"===t.util.type(e[r])?t.languages.DFS(e[r],a):"Array"===t.util.type(e[r])&&t.languages.DFS(e[r],a,r))}},highlightAll:function(e,a){for(var n,r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),i=0;n=r[i++];)t.highlightElement(n,e===!0,a)},highlightElement:function(n,r,i){for(var o,s,l=n;l&&!e.test(l.className);)l=l.parentNode;if(l&&(o=(l.className.match(e)||[,""])[1],s=t.languages[o]),s){n.className=n.className.replace(e,"").replace(/\s+/g," ")+" language-"+o,l=n.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+o);var c=n.textContent;if(c){c=c.replace(/^(?:\r?\n|\r)/,"");var u={element:n,language:o,grammar:s,code:c};if(t.hooks.run("before-highlight",u),r&&self.Worker){var g=new Worker(t.filename);g.onmessage=function(e){u.highlightedCode=a.stringify(JSON.parse(e.data),o),t.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,i&&i.call(u.element),t.hooks.run("after-highlight",u)},g.postMessage(JSON.stringify({language:u.language,code:u.code}))}else u.highlightedCode=t.highlight(u.code,u.grammar,u.language),t.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,i&&i.call(n),t.hooks.run("after-highlight",u)}}},highlight:function(e,n,r){var i=t.tokenize(e,n);return a.stringify(t.util.encode(i),r)},tokenize:function(e,a,n){var r=t.Token,i=[e],o=a.rest;if(o){for(var s in o)a[s]=o[s];delete a.rest}e:for(var s in a)if(a.hasOwnProperty(s)&&a[s]){var l=a[s];l="Array"===t.util.type(l)?l:[l];for(var c=0;c<l.length;++c){var u=l[c],g=u.inside,f=!!u.lookbehind,d=0,m=u.alias;u=u.pattern||u;for(var p=0;p<i.length;p++){var h=i[p];if(i.length>e.length)break e;if(!(h instanceof r)){u.lastIndex=0;var y=u.exec(h);if(y){f&&(d=y[1].length);var b=y.index-1+d,y=y[0].slice(d),v=y.length,w=b+v,k=h.slice(0,b+1),S=h.slice(w+1),P=[p,1];k&&P.push(k);var A=new r(s,g?t.tokenize(y,g):y,m);P.push(A),S&&P.push(S),Array.prototype.splice.apply(i,P)}}}}}return i},hooks:{all:{},add:function(e,a){var n=t.hooks.all;n[e]=n[e]||[],n[e].push(a)},run:function(e,a){var n=t.hooks.all[e];if(n&&n.length)for(var r,i=0;r=n[i++];)r(a)}}},a=t.Token=function(e,t,a){this.type=e,this.content=t,this.alias=a};if(a.stringify=function(e,n,r){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(t){return a.stringify(t,n,e)}).join("");var i={type:e.type,content:a.stringify(e.content,n,r),tag:"span",classes:["token",e.type],attributes:{},language:n,parent:r};if("comment"==i.type&&(i.attributes.spellcheck="true"),e.alias){var o="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,o)}t.hooks.run("wrap",i);var s="";for(var l in i.attributes)s+=l+'="'+(i.attributes[l]||"")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'" '+s+">"+i.content+"</"+i.tag+">"},!self.document)return self.addEventListener?(self.addEventListener("message",function(e){var a=JSON.parse(e.data),n=a.language,r=a.code;self.postMessage(JSON.stringify(t.util.encode(t.tokenize(r,t.languages[n])))),self.close()},!1),self.Prism):self.Prism;var n=document.getElementsByTagName("script");return n=n[n.length-1],n&&(t.filename=n.src,document.addEventListener&&!n.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?.+?\?>/,doctype:/<!DOCTYPE.+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/i,inside:{tag:{pattern:/^<\/?[\w:-]+/i,inside:{punctuation:/^<\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/=|>|"/}},punctuation:/\/?>/,"attr-name":{pattern:/[\w:-]+/,inside:{namespace:/^[\w-]+?:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{punctuation:/[;:]/}},url:/url\((?:(["'])(\\\n|\\?.)*?\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/,string:/("|')(\\\n|\\?.)*?\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,punctuation:/[\{\};:]/,"function":/[-a-z0-9]+(?=\()/i},Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/<style[\w\W]*?>[\w\W]*?<\/style>/i,inside:{tag:{pattern:/<style[\w\W]*?>|<\/style>/i,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css},alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag)),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.+/,lookbehind:!0}],string:/("|')(\\\n|\\?.)*?\1/,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":{pattern:/[a-z0-9_]+\(/i,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,operator:/[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|~|\^|%/,ignore:/&(lt|gt|amp);/i,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|-?Infinity)\b/,"function":/(?!\d)[a-z0-9_$]+(?=\()/i}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/i,inside:{tag:{pattern:/<script[\w\W]*?>|<\/script>/i,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript},alias:"language-javascript"}}),sg.demoControl=function(){return $(_PREFIX+"-dropdown-menu a,"+_PREFIX+"-breadcrumb a").click(function(e){e.preventDefault(),e.stopPropagation()}),new jQueryCollapse($(_PREFIX+"-collapse"),{query:_PREFIX+"-collapse--title",open:function(){this.slideDown(150)},close:function(){this.slideUp(150)},accordion:!0}),this},function(){sg.demoControl()}();
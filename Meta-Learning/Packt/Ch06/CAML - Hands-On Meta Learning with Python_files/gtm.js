
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"50",
  
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date,c=-a.getTimezoneOffset(),d=0\u003C=c?\"+\":\"-\",b=function(a){a=Math.abs(Math.floor(a));return(10\u003Ea?\"0\":\"\")+a};return a.getFullYear()+\"-\"+b(a.getMonth()+1)+\"-\"+b(a.getDate())+\"T\"+b(a.getHours())+\":\"+b(a.getMinutes())+\":\"+b(a.getSeconds())+\".\"+b(a.getMilliseconds())+d+b(c\/60)+\":\"+b(c%60)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=2;return function(a){a.set(\"dimension\"+b,a.get(\"clientId\"))}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"originalLocation"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",2],8,16],"||window.location.protocol+\"\/\/\"+window.location.hostname+window.location.pathname+window.location.search})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.pathname+window.location.search})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(new Date).getTime()+\".\"+Math.random().toString(36).substring(5)})();"]
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",6],8,16],".split(\"\/\");return a[1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",6],8,16],".split(\"\/\");return a[2]})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.contentTitle"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(-1\u003C",["escape",["macro",9],8,16],".indexOf('\\x3cspan class\\x3d\"badge badge-video\"\\x3e')){var a=",["escape",["macro",9],8,16],".split('\\x3cspan class\\x3d\"badge badge-video\"\\x3e');return a[0]+\" [Video]\"}return ",["escape",["macro",9],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",6],8,16],".split(\"\/\");return a[3]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",6],8,16],".split(\"\/\");return a[4]})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"\"==",["escape",["macro",13],8,16],"?\"No Query Parameters\":",["escape",["macro",13],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.loginState"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.userId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"Logged In\"==",["escape",["macro",15],8,16],"||\"Logged in\"==",["escape",["macro",15],8,16],"?",["escape",["macro",16],8,16],":null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=new Date,c=function(a){a=Math.abs(Math.floor(a));return(10\u003Ea?\"0\":\"\")+a};return b.getFullYear()+\"-\"+c(b.getMonth()+1)+\"-\"+c(b.getDate())})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.products"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=[],c=",["escape",["macro",19],8,16],".length,a=0;a\u003Cc;a++)b.push(",["escape",["macro",19],8,16],"[a].id);return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"Logged In\"==",["escape",["macro",15],8,16],"||\"Logged in\"==",["escape",["macro",15],8,16],"?",["escape",["macro",16],8,16],":\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",19],8,16],";return a.reduce(function(a,b){return a.concat(b.name)},[]).join()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",19],8,16],"[0].priceAfterDiscount*",["escape",["macro",19],8,16],"[0].quantity,c=",["escape",["macro",19],8,16],".length,a=1;a\u003Cc;a++){var d=",["escape",["macro",19],8,16],"[a].priceAfterDiscount*",["escape",["macro",19],8,16],"[a].quantity;b+=d}return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=(",["escape",["macro",19],8,16],"[0].price-",["escape",["macro",19],8,16],"[0].priceAfterDiscount)*",["escape",["macro",19],8,16],"[0].quantity,c=",["escape",["macro",19],8,16],".length,a=1;a\u003Cc;a++){var d=(",["escape",["macro",19],8,16],"[a].price-",["escape",["macro",19],8,16],"[a].priceAfterDiscount)*",["escape",["macro",19],8,16],"[a].quantity;b+=d}return b})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.currencyCode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.revenue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.tax"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.shipping"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.coupon"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function c(b){return 0==",["escape",["macro",19],8,16],"[a].priceAfterDiscount?b+\" - Free Trial\":b}for(var b={ecommerce:{currencyCode:",["escape",["macro",25],8,16],",purchase:{actionField:{id:",["escape",["macro",26],8,16],",affiliation:\"Subscription\",revenue:",["escape",["macro",27],8,16],",tax:",["escape",["macro",28],8,16],",shipping:",["escape",["macro",29],8,16],",coupon:",["escape",["macro",30],8,16],"},products:[]}}},d=",["escape",["macro",19],8,16],".length,a=0;a\u003Cd;a++)b.ecommerce.purchase.products.push({id:",["escape",["macro",19],8,16],"[a].id,name:c(",["escape",["macro",19],8,16],"[a].name),\ncategory:\"Subscription\",brand:",["escape",["macro",19],8,16],"[a].brand,price:",["escape",["macro",19],8,16],"[a].priceAfterDiscount,variant:",["escape",["macro",19],8,16],"[a].variant,quantity:",["escape",["macro",19],8,16],"[a].quantity,dimension18:",["escape",["macro",19],8,16],"[a].payment,metric6:",["escape",["macro",19],8,16],"[a].price*",["escape",["macro",19],8,16],"[a].quantity,metric8:(",["escape",["macro",19],8,16],"[a].price-",["escape",["macro",19],8,16],"[a].priceAfterDiscount)*",["escape",["macro",19],8,16],"[a].quantity});return b})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",32],8,16],".matches(\"body.nightmode.home-body button.btn.nightmode-toggle i.fa.fa-moon-o.fa-lg\")?\"Nightmode Off Click\":\"Nightmode On Click\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(",["escape",["macro",32],8,16],").closest(\"product\").find(\"h2\").text().trim()})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b={ecommerce:{promoView:{promotions:[]}}},c=",["escape",["macro",35],8,16],".impressions.length,a=0;a\u003Cc;a++)b.ecommerce.promoView.promotions.push({id:",["escape",["macro",35],8,16],".impressions[a].category,name:",["escape",["macro",35],8,16],".impressions[a].name,creative:\"Library Content - \"+",["escape",["macro",35],8,16],".impressions[a].list,position:",["escape",["macro",35],8,16],".impressions[a].position});return b})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.click.products"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.click.actionField"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b={ecommerce:{promoClick:{promotions:[]}}},c=",["escape",["macro",37],8,16],".length,a=0;a\u003Cc;a++)b.ecommerce.promoClick.promotions.push({id:",["escape",["macro",37],8,16],"[a].category,name:",["escape",["macro",37],8,16],"[a].name,creative:\"Library Content - \"+",["escape",["macro",38],8,16],",position:",["escape",["macro",37],8,16],"[a].position});return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(",["escape",["macro",32],8,16],").closest(\"div.ng-scope.learning-path-line\").find(\"a.btn-empty.btn-rounded.ng-scope.btn-primary.btn\").text().trim()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(",["escape",["macro",32],8,16],").closest(\"div.ng-scope.learning-path-line\").find(\"h3\").text().trim()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.querySelector(\"button.dropdown-toggle span.ng-scope.ng-binding.ml5.hidden-xs\");return\"undefined\"!==typeof a?a.textContent:void 0})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",43],8,16],";return a.reduce(function(a,b){return a.concat(b.id)},[]).join()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",43],8,16],";return a.reduce(function(a,b){return a.concat(b.name)},[]).join()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",43],8,16],";return a.reduce(function(a,b){return a.concat(b.brand)},[]).join()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",43],8,16],";return a.reduce(function(a,b){return a.concat(b.variant)},[]).join()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",43],8,16],";return a.reduce(function(a,b){return a.concat(b.category)},[]).join()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",43],8,16],";return a.reduce(function(a,b){return a.concat(b.quantity)},[]).join()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",43],8,16],"[0].price*",["escape",["macro",43],8,16],"[0].quantity,c=",["escape",["macro",43],8,16],".length,a=1;a\u003Cc;a++){var d=",["escape",["macro",43],8,16],"[a].price*",["escape",["macro",43],8,16],"[a].quantity;b+=d}return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(",["escape",["macro",32],8,16],").closest(\"div.ng-scope.project-item.grid__item\").find(\".btn-info.btn\").text().trim()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(",["escape",["macro",32],8,16],").closest(\"div.ng-scope.project-item.grid__item\").find(\"h4\").text().trim()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(",["escape",["macro",32],8,16],").closest(\"div.ais-root__collapsible\").find(\"h5\").text().trim()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"div#subAlert1 \\x3e span\";return document.querySelector(a).innerText})();"]
    },{
      "function":"__dbg"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"",["escape",["macro",27],7],"\",b=\"",["escape",["macro",28],7],"\";try{var c=parseFloat(a),d=parseFloat(b);a=c-d;return a.toFixed(2)}catch(e){return ",["escape",["macro",55],8,16],"\u0026\u0026console.log(\"Tag error: dlv - mm - order_total\",e),0}})();"]
    },{
      "function":"__e"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":"Other Page Type",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^\/$","value","Subscription - Home"],["map","key","^\/saved","value","Subscription - Saved"],["map","key","^\/bookmarks","value","Subscription - Bookmarks"],["map","key","^\/purchases","value","Subscription - Purchases"],["map","key","^\/rewards","value","Subscription - Rewards"],["map","key","^\/my-account","value","Subscription - My Account"],["map","key","^\/books-and-videos","value","Subscription - Books and Videos"],["map","key","^\/search","value","Subscription - Search Results"],["map","key","^\/learning-paths","value","Subscription - Learning Paths"],["map","key","^\/projects","value","Subscription - Projects"],["map","key","^\/login","value","Subscription - Login"],["map","key","^\/register","value","Subscription - Register"],["map","key","^\/(book|video)\/","value","Subscription - Content"],["map","key","^\/help","value","Subscription - Help"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageLoaded"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.contentCategory"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":"Other",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^\/$","value","Home"],["map","key","^\/saved","value","My Library"],["map","key","^\/bookmarks","value","My Library"],["map","key","^\/purchases","value","My Library"],["map","key","^\/rewards","value","My Library"],["map","key","^\/my-account","value","My Account"],["map","key","^\/books-and-videos","value","Books and Videos"],["map","key","^\/search","value","Search Results"],["map","key","^\/learning-paths","value","Learning Paths"],["map","key","^\/projects","value","Projects"],["map","key","^\/login","value","Login"],["map","key","^\/register","value","Register"],["map","key","^\/(book|video)\/","value",["macro",60]],["map","key","^\/help","value","Help"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(a){a=",["escape",["macro",8],8,16],".replace(\/-\/g,\" \");a=a.toLowerCase().split(\" \");for(var b=0;b\u003Ca.length;b++)a[b]=a[b].charAt(0).toUpperCase()+a[b].slice(1);return a.join(\" \")})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":"No Content Grouping",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^\/saved","value","Saved"],["map","key","^\/bookmarks","value","Bookmarks"],["map","key","^\/purchases","value","Purchases"],["map","key","^\/rewards","value","Rewards"],["map","key","^\/learning-paths$","value","Learning Paths Home"],["map","key","^\/learning-paths\/","value",["macro",62]],["map","key","^\/(book|video)\/","value",["macro",10]]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",58],
      "vtp_map":["list",["map","key","Subscription - Content","value",["macro",10]]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",58],
      "vtp_map":["list",["map","key","Subscription - Content","value",["macro",60]]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",58],
      "vtp_map":["list",["map","key","Subscription - Content","value",["macro",11]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.contentType"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",58],
      "vtp_defaultValue":"",
      "vtp_map":["list",["map","key","Subscription - Content","value",["macro",67]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.contentChapterTitle"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",58],
      "vtp_map":["list",["map","key","Subscription - Content","value",["macro",69]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.contentSection"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",58],
      "vtp_map":["list",["map","key","Subscription - Content","value",["macro",71]]]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",55],
      "vtp_defaultValue":"UA-284627-1",
      "vtp_map":["list",["map","key","true","value","UA-284627-6"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",73],
      "vtp_defaultValue":"UA-284627-8",
      "vtp_map":["list",["map","key","subscription.packtpub.com","value",["macro",74]],["map","key","dev.packtpub.com","value","UA-284627-7"],["map","key","qa.packtpub.com","value","UA-284627-8"],["map","key","rc.packtpub.com","value","UA-284627-8"],["map","key","subscription-staging.packtpub.com","value","UA-284627-8"]]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",1]],["map","fieldName","location","value",["macro",3]],["map","fieldName","page","value",["macro",4]]],
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",58]],["map","index","2","group","Subscription"],["map","index","3","group",["macro",61]],["map","index","4","group",["macro",63]],["map","index","5","group","No Content Grouping"]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",17]],["map","index","3","dimension",["macro",5]],["map","index","4","dimension",["macro",0]],["map","index","5","dimension",["macro",64]],["map","index","6","dimension",["macro",65]],["map","index","7","dimension",["macro",66]],["map","index","8","dimension",["macro",68]],["map","index","9","dimension",["macro",70]],["map","index","10","dimension",["macro",72]],["map","index","12","dimension",["macro",15]],["map","index","16","dimension",["macro",14]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",75],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_stripWww":false,
      "vtp_varType":"URL",
      "vtp_component":"HOST"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",83],
      "vtp_map":["list",["map","key","video 0%","value","4"],["map","key","video 75%","value","5"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",83],
      "vtp_map":["list",["map","key","video 0%","value","1"],["map","key","video 75%","value","1"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"event_action"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.products.0.payment"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",83],
      "vtp_map":["list",["map","key","maptCheckoutPayment","value","3"],["map","key","maptCheckoutAddress","value","2"],["map","key","maptCheckoutLoginRegister","value","1"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={ecommerce:{checkout:{actionField:{step:",["escape",["macro",89],8,16],"}}}};return a})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",42],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","£","value","GBP"],["map","key","A\\$","value","AUD"],["map","key","€","value","EUR"],["map","key","[^A]\\$","value","USD"],["map","key","₹","value","INR"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b={ecommerce:{currencyCode:",["escape",["macro",92],8,16],",add:{products:[]}}},c=",["escape",["macro",35],8,16],".add.products.length,a=0;a\u003Cc;a++)b.ecommerce.add.products.push({id:",["escape",["macro",35],8,16],".add.products[a].id,name:",["escape",["macro",35],8,16],".add.products[a].name,category:",["escape",["macro",35],8,16],".add.products[a].category,price:",["escape",["macro",35],8,16],".add.products[a].price,brand:",["escape",["macro",35],8,16],".add.products[a].brand,variant:",["escape",["macro",35],8,16],".add.products[a].variant,quantity:",["escape",["macro",35],8,16],".add.products[a].quantity,\nmetric1:",["escape",["macro",35],8,16],".add.products[a].quantity*",["escape",["macro",35],8,16],".add.products[a].price});return b})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.variant"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.defaultChecked"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",98],
      "vtp_defaultValue":"Filter by",
      "vtp_map":["list",["map","key","true","value","Unfilter by"]]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"query"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",25],
      "vtp_map":["list",["map","key","GBP","value","40318"],["map","key","EUR","value","43634"],["map","key","USD","value","42254"],["map","key","AUD","value","42249"],["map","key","INR","value","43637"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.emailAddress"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.price"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.quantity"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.existingCustomer"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"subscription.currency"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",108],
      "vtp_defaultValue":"$",
      "vtp_map":["list",["map","key","GBP","value","£"],["map","key","USD","value","$"],["map","key","EUR","value","€"],["map","key","AUD","value","A$"],["map","key","INR","value","₹"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"subscription.hasZuoraAccount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"subscription.canClaimFreeTrial"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return null==",["escape",["macro",17],8,16],"?\"\":",["escape",["macro",104],8,16],"})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",73],
      "vtp_defaultValue":"false",
      "vtp_map":["list",["map","key","localhost","value","true"],["map","key","subscription-dev.packtpub.com","value","true"],["map","key","subscription-staging.packtpub.com","value","true"],["map","key","subscription-rc.packtpub.com","value","true"],["map","key","subscription.packtpub.com","value","true"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",73],
      "vtp_defaultValue":"2c92c0f9675821bc0167600d113773f6,2c92c0f9675821b70167600e44061f2b",
      "vtp_map":["list",["map","key","subscription.packtpub.com","value","2c92a0fe67588f5e01675aa134355a81,2c92a0fe67cb9f220167cc091e09543b"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=",["escape",["macro",20],8,16],";return a\u0026\u00260\u003Ca.length?a[0]:null}catch(b){if(",["escape",["macro",55],8,16],")return console.log(\"Error in variable: cj - ee - productId\",b),null}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ratePlanId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var b=\"",["escape",["macro",114],7],"\",a=",["escape",["macro",115],8,16],";a||(a=",["escape",["macro",116],8,16],");return a?-1!==b.indexOf(a):!1}catch(c){return ",["escape",["macro",55],8,16],"\u0026\u0026console.log(\"GTM variable error: cj - mm - isAnnual\",c),!1}})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",73],
      "vtp_defaultValue":"https:\/\/tag.mention-me.com\/api\/v2",
      "vtp_map":["list",["map","key","unused.com","value","https:\/\/tag-demo.mention-me.com\/api\/v2"],["map","key","subscription.packtpub.com","value","https:\/\/tag.mention-me.com\/api\/v2"]]
    },{
      "function":"__c",
      "vtp_value":"mm7a241d2a"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"firstname"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"surname"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"email"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order_date"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"freeTrial"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order_total"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"currency"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(a){a=",["escape",["macro",7],8,16],".replace(\/-\/g,\" \");a=a.toLowerCase().split(\" \");for(var b=0;b\u003Ca.length;b++)a[b]=a[b].charAt(0).toUpperCase()+a[b].slice(1);return a.join(\" \")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.products.0.payment"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",129],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^18 Month","value","18month"],["map","key","^Monthly","value","monthly"],["map","key","^Annual","value","annual"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"subscription.billingAddress.firstName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"subscription.billingAddress.country"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"subscription.creditBalance"
    },{
      "function":"__d",
      "vtp_elementId":"mmWrapper",
      "vtp_attributeName":"rate-plan-id",
      "vtp_selectorType":"ID"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__ctv"
    },{
      "function":"__r"
    },{
      "function":"__cid"
    },{
      "function":"__v",
      "vtp_name":"gtm.videoProvider",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoTitle",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoDuration",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoVisible",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoCurrentTime",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollDirection",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleRatio",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleTime",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":99,
      "teardown_tags":["list",["tag",81,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.heap=window.heap||[];\nheap.load=function(e,d){window.heap.appid=e;window.heap.config=d=d||{};var a=d.forceSSL||\"https:\"===document.location.protocol,b=document.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=(a?\"https:\":\"http:\")+\"\/\/cdn.heapanalytics.com\/js\/heap-\"+e+\".js\";a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a);b=function(a){return function(){heap.push([a].concat(Array.prototype.slice.call(arguments,0)))}};a=\"addEventProperties addUserProperties clearEventProperties identify removeEventProperty setEventProperties track unsetEventProperty\".split(\" \");for(var c=\n0;c\u003Ca.length;c++)heap[a[c]]=b(a[c])};window.heap.appid||heap.load(\"34805961\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":27
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",76],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1
    },{
      "function":"__hjtc",
      "teardown_tags":["list",["tag",82,2]],
      "once_per_event":true,
      "vtp_hotjar_site_id":"982604",
      "tag_id":6
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Clicks",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"External Click",
      "vtp_eventLabel":["macro",79],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":11
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Clicks",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Main Navigation Click",
      "vtp_eventLabel":["macro",80],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":12
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Clicks",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Find Out More About Subscription Click",
      "vtp_eventLabel":["macro",82],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":13
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Clicks",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Free Trial Click",
      "vtp_eventLabel":["macro",82],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":14
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Video",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index",["macro",84],"metric",["macro",85]]],
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":["macro",86],
      "vtp_eventLabel":["template",["macro",72]," - ",["macro",10]],
      "vtp_dimension":["list",["map","index","14","dimension",["template",["macro",72]," - ",["macro",10]]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":15
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Library Content Interactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Content Home Tab Click",
      "vtp_eventLabel":["macro",10],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":16
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Library Content Interactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Content Home Save For Later Click",
      "vtp_eventLabel":["macro",10],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":17
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Library Content Interactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Content Home Resume Click",
      "vtp_eventLabel":["macro",10],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":18
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Library Content Interactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Content Home Remove From Saved Click",
      "vtp_eventLabel":["macro",10],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":19
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Library Content Interactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Content Home Start Click",
      "vtp_eventLabel":["macro",10],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":20
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Library Content Interactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Content Home Table of Contents Click",
      "vtp_eventLabel":["macro",80],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":21
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Account Log In",
      "vtp_eventLabel":["macro",82],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":22
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Account Log Out",
      "vtp_eventLabel":["macro",82],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":23
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Registration Completed",
      "vtp_eventLabel":["macro",73],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":24
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Library Content Interactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Content Bookmark Click",
      "vtp_eventLabel":["macro",10],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":25
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Downloads",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","11","metric","1"]],
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Download Code Files",
      "vtp_eventLabel":["macro",10],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":26
    },{
      "function":"__twitter_website_tag",
      "once_per_event":true,
      "vtp_event_type":"PageView",
      "vtp_twitter_pixel_id":"nvlld",
      "tag_id":33
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":35
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"945348752",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",87],
      "tag_id":36
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",26],
      "vtp_conversionValue":["macro",27],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"945348752",
      "vtp_currencyCode":["macro",25],
      "vtp_conversionLabel":"zgEsCPaYkHEQkMHjwgM",
      "vtp_url":["macro",87],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":37
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"2",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"945348752",
      "vtp_currencyCode":"GBP",
      "vtp_conversionLabel":"N45jCIqx5WAQkMHjwgM",
      "vtp_url":["macro",87],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":38
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",31],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Order Confirmation",
      "vtp_eventLabel":"Subscription",
      "vtp_dimension":["list",["map","index","7","dimension",["macro",24]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":49
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Subscription Paid Sign Up",
      "vtp_eventLabel":["macro",88],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":50
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Subscription Free Trial Sign Up",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":51
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",90],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":["template","Zuora Checkout step ",["macro",89]],
      "vtp_dimension":["list",["map","index","19","dimension","Zuora Subscription Checkout"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":52
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Library Content Interactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Nightmode Click",
      "vtp_eventLabel":["macro",33],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":53
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Library Content Interactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Copy Code Click",
      "vtp_eventLabel":["template",["macro",10]," - ",["macro",71]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":54
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Library Content Interactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Font Size Change Click",
      "vtp_eventLabel":["macro",80],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":55
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Library Content Interactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Social Share Click",
      "vtp_eventLabel":["macro",80],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":56
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Clicks",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Library Sidebar Click",
      "vtp_eventLabel":["macro",80],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":57
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Library Content Interactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Next Section Click",
      "vtp_eventLabel":["template",["macro",10]," - ",["macro",71]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":58
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",36],
      "vtp_eventCategory":"Library Content Product Promotion Impressions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Product Promotion Impressions",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":59
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",39],
      "vtp_eventCategory":"Library Content Product Promotion Impressions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Product Promotion Click",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":60
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Learning Paths",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":["template","Learning Paths - ",["macro",40]],
      "vtp_eventLabel":["macro",41],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":61
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Projects",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":["template","Projects - ",["macro",51]],
      "vtp_eventLabel":["macro",52],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":62
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",93],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Product Added to Cart",
      "vtp_dimension":["list",["map","index","5","dimension",["macro",94]],["map","index","6","dimension",["macro",95]],["map","index","7","dimension",["macro",96]],["map","index","8","dimension",["macro",97]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":63
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Filter Interactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":["macro",99],
      "vtp_eventLabel":["template",["macro",53]," - ",["macro",91]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":66
    },{
      "function":"__twitter_website_tag",
      "once_per_event":true,
      "vtp_event_type":"CompleteRegistration",
      "vtp_twitter_pixel_id":"o1fg4",
      "vtp_event_parameters":["list",["map","param_table_key_column","value","param_table_value_column","2"]],
      "tag_id":68
    },{
      "function":"__twitter_website_tag",
      "once_per_event":true,
      "vtp_event_type":"Purchase",
      "vtp_twitter_pixel_id":"nvlld",
      "vtp_event_parameters":["list",["map","param_table_key_column","currency","param_table_value_column",["macro",25]],["map","param_table_key_column","value","param_table_value_column",["macro",27]],["map","param_table_key_column","order_id","param_table_value_column",["macro",26]],["map","param_table_key_column","num_items","param_table_value_column","1"]],
      "tag_id":77
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Library Content Interactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Missing Product Error",
      "vtp_eventLabel":["macro",79],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":80
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Form",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Create Account",
      "vtp_eventLabel":["macro",82],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":82
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"In Content Search",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":["template","Search ",["macro",101]],
      "vtp_eventLabel":["macro",102],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":83
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9659117_16",
      "tag_id":91
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9659117_17",
      "tag_id":92
    },{
      "function":"__cl",
      "tag_id":93
    },{
      "function":"__cl",
      "tag_id":94
    },{
      "function":"__cl",
      "tag_id":95
    },{
      "function":"__cl",
      "tag_id":96
    },{
      "function":"__cl",
      "tag_id":97
    },{
      "function":"__cl",
      "tag_id":98
    },{
      "function":"__cl",
      "tag_id":99
    },{
      "function":"__cl",
      "tag_id":100
    },{
      "function":"__cl",
      "tag_id":101
    },{
      "function":"__cl",
      "tag_id":102
    },{
      "function":"__cl",
      "tag_id":103
    },{
      "function":"__cl",
      "tag_id":104
    },{
      "function":"__cl",
      "tag_id":105
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9659117_59",
      "tag_id":106
    },{
      "function":"__cl",
      "tag_id":107
    },{
      "function":"__cl",
      "tag_id":108
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9659117_69",
      "tag_id":109
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9659117_70",
      "tag_id":110
    },{
      "function":"__cl",
      "tag_id":111
    },{
      "function":"__evl",
      "vtp_elementId":"subAlert1",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"MANY_PER_ELEMENT",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"9659117_95",
      "tag_id":112
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9659117_105",
      "tag_id":113
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];window.dataLayer.push({originalLocation:document.location.protocol+\"\/\/\"+document.location.hostname+document.location.pathname+document.location.search});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":2
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"445429252334850\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=445429252334850\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":3
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(c,d,e,f,g,a,b){c[e]=c[e]||[];a=d.createElement(f);a.async=1;a.src=g;b=d.getElementsByTagName(f)[0];b.parentNode.insertBefore(a,b)})(window,document,\"_gscq\",\"script\",\"\/\/widgets.getsitecontrol.com\/95715\/script.js\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":5
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];window.dataLayer.push({pageLoaded:\"pageLoaded\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":9
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EElement.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(a){a=(this.document||this.ownerDocument).querySelectorAll(a);for(var b=a.length;0\u003C=--b\u0026\u0026a.item(b)!==this;);return-1\u003Cb});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":10
    },{
      "function":"__html",
      "setup_tags":["list",["tag",89,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:",["escape",["macro",103],8,16],"},{event:\"setEmail\",email:\"",["escape",["macro",104],7],"\"},{event:\"trackTransaction\",id:\"",["escape",["macro",26],7],"\",trial:\"",["escape",["macro",18],7],"\",item:[{id:\"freetrial\",price:0,quantity:1}]});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":31
    },{
      "function":"__html",
      "setup_tags":["list",["tag",89,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:",["escape",["macro",103],8,16],"},{event:\"setEmail\",email:\"",["escape",["macro",104],7],"\"},{event:\"trackTransaction\",id:\"",["escape",["macro",26],7],"\",subscriber:\"true\",item:[{id:\"subscription\",price:0,quantity:1}]});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":32
    },{
      "function":"__html",
      "setup_tags":["list",["tag",69,1]],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Purchase\",{content_ids:",["escape",["macro",20],8,16],",content_type:\"product\",content_category:\"Subscription\",value:",["escape",["macro",27],8,16],",currency:",["escape",["macro",25],8,16],"});\u003C\/script\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":39
    },{
      "function":"__html",
      "setup_tags":["list",["tag",69,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"trackCustom\",\"Mapt Subscription\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":40
    },{
      "function":"__html",
      "setup_tags":["list",["tag",69,1]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Lead\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":41
    },{
      "function":"__html",
      "setup_tags":["list",["tag",69,1]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"CompleteRegistration\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":42
    },{
      "function":"__html",
      "setup_tags":["list",["tag",69,1]],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Purchase\",{content_ids:\"FreeTrial\",content_type:\"product\",content_category:\"Subscription\",value:",["escape",["macro",27],8,16],",currency:",["escape",["macro",25],8,16],"});\u003C\/script\u003E\n\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":43
    },{
      "function":"__html",
      "setup_tags":["list",["tag",69,1]],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddToCart\",{content_name:\"Shopping Cart\",content_ids:[",["escape",["macro",96],8,16],"],content_type:\"product\",value:",["escape",["macro",105],8,16],"*",["escape",["macro",106],8,16],",currency:",["escape",["macro",92],8,16],"});\u003C\/script\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":65
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar HeapUserId=\"",["escape",["macro",16],7],"\";\"string\"===typeof HeapUserId\u0026\u0026\"undefined\"!==HeapUserId\u0026\u0026window.heap.identify(HeapUserId);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":76
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Ehj(\"tagRecording\",[",["escape",["macro",21],8,16],"]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":78
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E_gscq.push([\"template\",\"UserID\",\"",["escape",["macro",16],7],"\"]);_gscq.push([\"template\",\"UserIDIfLoggedIn\",\"",["escape",["macro",17],7],"\"]);_gscq.push([\"template\",\"UserIDIfLoggedInElseEmpty\",\"",["escape",["macro",21],7],"\"]);_gscq.push([\"template\",\"LoginStatus\",\"",["escape",["macro",15],7],"\"]);_gscq.push([\"template\",\"EmailAddress\",\"",["escape",["macro",104],7],"\"]);_gscq.push([\"template\",\"ExistingCustomer\",\"",["escape",["macro",107],7],"\"]);_gscq.push([\"template\",\"CurrencyCode\",\"",["escape",["macro",108],7],"\"]);\n_gscq.push([\"template\",\"CurrencySymbol\",\"",["escape",["macro",109],7],"\"]);_gscq.push([\"template\",\"HasZuoraAccount\",\"",["escape",["macro",110],7],"\"]);_gscq.push([\"template\",\"CanClaimFreeTrial\",\"",["escape",["macro",111],7],"\"]);_gscq.push([\"targeting\",\"Tar_UserID\",\"",["escape",["macro",16],7],"\"]);_gscq.push([\"targeting\",\"Tar_UserIDIfLoggedIn\",\"",["escape",["macro",17],7],"\"]);_gscq.push([\"targeting\",\"Tar_UserIDIfLoggedInElseEmpty\",\"",["escape",["macro",21],7],"\"]);_gscq.push([\"targeting\",\"Tar_LoginStatus\",\"",["escape",["macro",15],7],"\"]);\n_gscq.push([\"targeting\",\"Tar_EmailAddress\",\"",["escape",["macro",104],7],"\"]);_gscq.push([\"targeting\",\"Tar_ExistingCustomer\",\"",["escape",["macro",107],7],"\"]);_gscq.push([\"targeting\",\"Tar_CurrencyCode\",\"",["escape",["macro",108],7],"\"]);_gscq.push([\"targeting\",\"Tar_CurrencySymbol\",\"",["escape",["macro",109],7],"\"]);_gscq.push([\"targeting\",\"Tar_HasZuoraAccount\",\"",["escape",["macro",110],7],"\"]);_gscq.push([\"targeting\",\"Tar_CanClaimFreeTrial\",\"",["escape",["macro",111],7],"\"]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":79
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,f,g,b,c,d){a.ProfitWellObject=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};a[b].l=1*new Date;c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,\"script\",\"https:\/\/dna8twue3dlxq.cloudfront.net\/js\/profitwell.js\",\"profitwell\");profitwell(\"auth_token\",\"8c79afc46264fdacbbb5c7bfc3b4800f\");profitwell(\"user_email\",\"",["escape",["macro",112],7],"\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":81
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"",["escape",["macro",118],14,3],"\/referreroffer\/",["escape",["macro",119],3],"?firstname=",["escape",["macro",120],12],"\u0026amp;surname=",["escape",["macro",121],12],"\u0026amp;email=",["escape",["macro",122],12],"\u0026amp;order_number=",["escape",["macro",26],12],"\u0026amp;order_total=",["escape",["macro",56],12],"\u0026amp;order_currency=",["escape",["macro",25],12],"\u0026amp;order_date=",["escape",["macro",123],12],"\u0026amp;situation=postpurchase\u0026amp;locale=en_GB\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":85
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"",["escape",["macro",118],14,3],"\/referreroffer\/",["escape",["macro",119],3],"?firstname=",["escape",["macro",120],12],"\u0026amp;surname=",["escape",["macro",121],12],"\u0026amp;email=",["escape",["macro",122],12],"\u0026amp;situation=accountpromo\u0026amp;implementation=popup\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":88
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/tag-demo.mention-me.com\/api\/v2\/refereefind\/mm7a241d2a?situation=checkout\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":89
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"",["escape",["macro",118],14,3],"\/referreroffer\/",["escape",["macro",119],3],"?firstname=",["escape",["macro",120],12],"\u0026amp;surname=",["escape",["macro",121],12],"\u0026amp;email=",["escape",["macro",122],12],"\u0026amp;order_number=",["escape",["macro",126],12],"\u0026amp;order_total=",["escape",["macro",125],12],"\u0026amp;order_currency=",["escape",["macro",127],12],"\u0026amp;order_date=",["escape",["macro",123],12],"\u0026amp;situation=postpurchase\u0026amp;locale=en_GB\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":90
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":30
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"pageDataLayerLoaded"
    },{
      "function":"_eq",
      "arg0":["macro",58],
      "arg1":"Subscription - Content"
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",59],
      "arg1":"pageLoaded"
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",77],
      "arg1":"packtpub.com",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",78],
      "arg1":"(^$|((^|,)9659117_16($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",32],
      "arg1":"ul.nav.navbar-nav.navbar-right a"
    },{
      "function":"_re",
      "arg0":["macro",78],
      "arg1":"(^$|((^|,)9659117_17($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",81],
      "arg1":"btn btn-primary mr5"
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"gtm.click"
    },{
      "function":"_css",
      "arg0":["macro",32],
      "arg1":"div.upsell__content a.btn-info.btn"
    },{
      "function":"_re",
      "arg0":["macro",57],
      "arg1":"^video"
    },{
      "function":"_re",
      "arg0":["macro",81],
      "arg1":"cover-accordion__title list-group-item collapsed",
      "ignore_case":true
    },{
      "function":"_css",
      "arg0":["macro",32],
      "arg1":"button.btn.btn-default.ng-scope, button.btn.btn-default.ng-scope *"
    },{
      "function":"_re",
      "arg0":["macro",80],
      "arg1":"Save for Later",
      "ignore_case":true
    },{
      "function":"_css",
      "arg0":["macro",32],
      "arg1":"div.button-group.text-right.ng-scope a"
    },{
      "function":"_re",
      "arg0":["macro",80],
      "arg1":"^Resume",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",80],
      "arg1":"Remove from saved",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",80],
      "arg1":"^Start",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",81],
      "arg1":"cover-toc__section-name ng-binding"
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"accountLogIn"
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"accountLogOut"
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"accountRegistration"
    },{
      "function":"_re",
      "arg0":["macro",80],
      "arg1":"Bookmark",
      "ignore_case":true
    },{
      "function":"_css",
      "arg0":["macro",32],
      "arg1":"a.btn-default.btn-square.ng-scope, a.btn-default.btn-square.ng-scope *"
    },{
      "function":"_re",
      "arg0":["macro",80],
      "arg1":"Code Files",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"recordTransactionCompleteSubscription"
    },{
      "function":"_gt",
      "arg0":["macro",27],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"0"
    },{
      "function":"_css",
      "arg0":["macro",32],
      "arg1":"div.ng-scope.btn-group button.btn.nightmode-toggle i.fa.fa-moon-o.fa-lg"
    },{
      "function":"_re",
      "arg0":["macro",81],
      "arg1":"copy-to-clipboard",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",91],
      "arg1":"^copyCode",
      "ignore_case":true
    },{
      "function":"_css",
      "arg0":["macro",32],
      "arg1":"a.ng-binding[ng-click='productController.toggleFontSize($event, fontSize)']"
    },{
      "function":"_css",
      "arg0":["macro",32],
      "arg1":"ul.dropdown-menu.dropdown-menu-right a[href='#']"
    },{
      "function":"_re",
      "arg0":["macro",78],
      "arg1":"(^$|((^|,)9659117_59($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",32],
      "arg1":"div#sidebar-nav div.section-name.ng-binding"
    },{
      "function":"_css",
      "arg0":["macro",32],
      "arg1":"div[ng-show='productController.previousSection \u0026\u0026 productController.nextSection'] a.btn-block.btn-lg.pull-right.btn-primary.btn"
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"recordProductListImpressionMapt"
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"recordProductListClickMapt"
    },{
      "function":"_eq",
      "arg0":["macro",81],
      "arg1":"btn btn-primary btn-rounded btn-empty ng-scope"
    },{
      "function":"_re",
      "arg0":["macro",78],
      "arg1":"(^$|((^|,)9659117_69($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",32],
      "arg1":"div.project-item__footer a"
    },{
      "function":"_re",
      "arg0":["macro",78],
      "arg1":"(^$|((^|,)9659117_70($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"recordProductAddedToCart"
    },{
      "function":"_css",
      "arg0":["macro",32],
      "arg1":"div.ais-refinement-list--item input"
    },{
      "function":"_sw",
      "arg0":["macro",54],
      "arg1":"Sorry, it appears that page"
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",78],
      "arg1":"(^$|((^|,)9659117_95($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",100],
      "arg1":"create-account-form"
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",78],
      "arg1":"(^$|((^|,)9659117_105($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"in-content-search"
    },{
      "function":"_re",
      "arg0":["macro",82],
      "arg1":".*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":".*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"^\/projects$|^\/projects\/$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",57],
      "arg1":"^newsletterSignUp"
    },{
      "function":"_eq",
      "arg0":["macro",113],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",117],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",124],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"my_account_load"
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"checkout_loaded"
    },{
      "function":"_gt",
      "arg0":["macro",125],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"subscription_upgrade"
    }],
  "rules":[
    [["if",0],["add",1,19,20,21,69,70,0,83]],
    [["if",1,2],["add",1,19,20,21,69,0]],
    [["if",4],["add",2,68,72,47,48,49,50,51,52,53,54,55,56,57,58,59,61,62,63,65,66,67]],
    [["if",6,7],["unless",5],["add",3]],
    [["if",6,8,9],["add",4]],
    [["if",10,11],["add",5]],
    [["if",11,12],["add",6]],
    [["if",13],["add",7]],
    [["if",11,14],["add",8]],
    [["if",11,15,16],["add",9]],
    [["if",11,17,18],["add",10]],
    [["if",11,15,19],["add",11]],
    [["if",11,17,20],["add",12]],
    [["if",11,21],["add",13]],
    [["if",22],["add",14,81]],
    [["if",23],["add",15]],
    [["if",24],["add",16,23,40,78,81]],
    [["if",11,15,25],["add",17]],
    [["if",11,26,27],["add",18]],
    [["if",28],["add",22,24,75,76,82]],
    [["if",28,29],["add",25,41,74]],
    [["if",28,30],["add",26,27,41,73,79]],
    [["if",11,31],["add",28]],
    [["if",11,32,33],["add",29]],
    [["if",11,34],["add",30]],
    [["if",6,35,36],["add",31]],
    [["if",11,37],["add",32]],
    [["if",11,38],["add",33]],
    [["if",39],["add",34]],
    [["if",40],["add",35]],
    [["if",6,41,42],["add",36]],
    [["if",6,43,44],["add",37]],
    [["if",45],["add",38,80]],
    [["if",11,46],["add",39]],
    [["if",47,48,49],["add",42]],
    [["if",50,51,52],["add",43]],
    [["if",53],["add",44]],
    [["if",4,54],["add",45]],
    [["if",4,55],["add",46,60]],
    [["if",4,56],["add",64]],
    [["if",2],["add",71,84]],
    [["if",57],["add",77]],
    [["if",28,29,58,59],["add",85]],
    [["if",58,59,60,61],["add",86]],
    [["if",58,59,60,62],["add",87]],
    [["if",58,59,63,64],["add",88]],
    [["if",0,1],["unless",3],["block",1,19,20,21,69,0]]]
},
"runtime":[[50,"__twitter_website_tag",[46,"a"],[50,"i",[46],[41,"l"],[3,"l",["d","twq"]],[22,[15,"l"],[46,[36,[15,"l"]]]],["h","twq",[51,"",[7],[52,"n",["d","twq.exe.apply"]],[22,[15,"n"],[46,["c","twq.exe.apply",[45],[15,"arguments"]]],[46,["c","twq.queue.push",[15,"arguments"]]]]],true],["h","twq.version","1",true],["h","twq.queue",[7],true],[52,"m",[51,"",[7]]],["e","https://static.ads-twitter.com/uwt.js",[15,"m"],[15,"m"],"twitter_website_tag"],[36,["d","twq"]]],[52,"b",["require","createArgumentsQueue"]],[52,"c",["require","callInWindow"]],[52,"d",["require","copyFromWindow"]],[52,"e",["require","injectScript"]],[52,"f",["require","makeString"]],[52,"g",["require","makeTableMap"]],[52,"h",["require","setInWindow"]],[41,"j"],[3,"j",["i"]],["j","init",["f",[17,[15,"a"],"twitter_pixel_id"]]],[52,"k",["g",[30,[17,[15,"a"],"event_parameters"],[7]],"param_table_key_column","param_table_value_column"]],[22,[1,[15,"k"],[2,[15,"k"],"hasOwnProperty",[7,"content_ids"]]],[46,[53,[41,"l"],[3,"l",[16,[15,"k"],"content_ids"]],[3,"l",[2,[2,[15,"l"],"split",[7,"\""]],"join",[7,"\u0027"]]],[41,"m"],[3,"m",[2,[2,[15,"l"],"slice",[7,[2,[15,"l"],"indexOf",[7,"["]],[2,[15,"l"],"indexOf",[7,"]"]]]],"split",[7,","]]],[3,"m",[2,[15,"m"],"map",[7,[51,"",[7,"n"],[36,[30,[16,[2,[15,"n"],"split",[7,"\u0027"]],1],""]]]]]],[43,[15,"k"],"content_ids",[15,"m"]]]]],["j","track",["f",[17,[15,"a"],"event_type"]],[15,"k"]],[2,[15,"a"],"gtmOnSuccess",[7]]],[50,"__hjtc",[46,"a"],[52,"b",["require","createArgumentsQueue"]],[52,"c",["require","encodeUriComponent"]],[52,"d",["require","injectScript"]],[52,"e",["require","makeString"]],[52,"f",["require","setInWindow"]],["b","hj","hj.q"],[52,"g",[17,[15,"a"],"hotjar_site_id"]],["f","_hjSettings",[8,"hjid",[15,"g"],"hjsv",7,"scriptSource","gtm"]],["d",[0,[0,"https://static.hotjar.com/c/hotjar-",["c",["e",[15,"g"]]]],".js?sv\u003d7"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"]]]]
,"permissions":{"__twitter_website_tag":{"access_globals":{"keys":[{"key":"twq","read":true,"write":true,"execute":true},{"key":"twq.exe","read":true,"write":true,"execute":true},{"key":"twq.queue","read":true,"write":true,"execute":true},{"key":"twq.queue.push","read":true,"write":true,"execute":true},{"key":"twq.version","read":true,"write":true,"execute":false},{"key":"twq.exe.apply","read":true,"write":true,"execute":true}]},"inject_script":{"urls":["https:\/\/static.ads-twitter.com\/uwt.js"]}},"__hjtc":{"access_globals":{"keys":[{"key":"hj","read":true,"write":true,"execute":false},{"key":"hj.q","read":true,"write":true,"execute":false},{"key":"_hjSettings","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/static.hotjar.com\/c\/hotjar-*"]}}}

,"security_groups":{
"nonGoogleScripts":["__twitter_website_tag","__hjtc"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},da;if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var ha={Rf:!0},ia={};try{ia.__proto__=ha;ea=ia.Rf;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ja=da,ka=function(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(ja)ja(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]},ma=this||self,na=/^[\w+/_-]+[=]{0,2}$/,oa=null;var pa=function(a,b){this.a=a;this.i=b};var qa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ra=function(){this.s={};this.m=!1;this.F={}};ra.prototype.get=function(a){return this.s["dust."+a]};ra.prototype.set=function(a,b){this.m||(a="dust."+a,this.F.hasOwnProperty(a)||(this.s[a]=b))};ra.prototype.has=function(a){return this.s.hasOwnProperty("dust."+a)};var sa=function(a){var b=[],c;for(c in a.s)a.s.hasOwnProperty(c)&&b.push(c.substr(5));return b};var h=function(a){this.i=new ra;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(qa(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};aa=h.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof h?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"==a){if(!qa(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else qa(a)?this.a[Number(a)]=b:this.i.set(a,b)};aa.get=function(a){return"length"==a?this.length():qa(a)?this.a[Number(a)]:this.i.get(a)};aa.length=function(){return this.a.length};aa.cc=function(){for(var a=sa(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new h(a)};
var ta=function(a,b){if(qa(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.m||c.F.hasOwnProperty(d)||delete c.s[d]}};aa=h.prototype;aa.pop=function(){return this.a.pop()};aa.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.a.shift()};aa.splice=function(a,b,c){return new h(this.a.splice.apply(this.a,arguments))};aa.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
aa.has=function(a){return qa(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var ua=function(){function a(f,g){if(b[f]){if(b[f].Ub+g>b[f].max)throw Error("Quota exceeded");b[f].Ub+=g}}var b={},c=void 0,d=void 0,e={mh:function(f){c=f},ve:function(){c&&a(c,1)},oh:function(f){d=f},Da:function(f){d&&a(d,f)},Mh:function(f,g){b[f]=b[f]||{Ub:0};b[f].max=g},Lg:function(f){return b[f]&&b[f].Ub||0},reset:function(){b={}},rg:a};e.onFnConsume=e.mh;e.consumeFn=e.ve;e.onStorageConsume=e.oh;e.consumeStorage=e.Da;e.setMax=e.Mh;e.getConsumed=e.Lg;e.reset=e.reset;e.consume=e.rg;return e};var va=function(a,b){this.F=a;this.N=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new ra;this.a=this.s=void 0};va.prototype.add=function(a,b){xa(this,a,b,!1)};var xa=function(a,b,c,d){if(!a.i.m)if(a.F.Da(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.F["dust."+b]=!0}else a.i.set(b,c)};
va.prototype.set=function(a,b){this.i.m||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.F.Da(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};va.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};va.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var ya=function(a){var b=new va(a.F,a);a.s&&(b.s=a.s);b.N=a.N;b.a=a.a;return b};var Aa=function(){},Ba=function(a){return"function"==typeof a},p=function(a){return"string"==typeof a},Ca=function(a){return"number"==typeof a&&!isNaN(a)},Da=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},Fa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ga=function(a,b){if(a&&Da(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ha=function(a,b){if(!Ca(a)||
!Ca(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ja=function(a,b){for(var c=new Ia,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Ka=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ma=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Na=function(a){return Math.round(Number(a))||0},Pa=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Qa=function(a){var b=[];if(Da(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ra=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Sa=function(){return(new Date).getTime()},Ia=function(){this.prefix="gtm.";this.values={}};Ia.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ia.prototype.get=function(a){return this.values[this.prefix+a]};
var Ta=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ua=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Va=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Wa=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Xa=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Ya=function(a){for(var b=C,c=0;c<a.length-1;c++){if(!b.hasOwnProperty(a[c]))return;b=b[a[c]]}return b},Za=function(a,b){for(var c=
{},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},$a=function(a){var b=[];Ka(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var ab=function(a,b){ra.call(this);this.a=a;this.N=b};ka(ab,ra);ab.prototype.toString=function(){return this.a};ab.prototype.cc=function(){return new h(sa(this))};ab.prototype.i=function(a,b){a.F.ve();return this.N.apply(bb(this,a),Array.prototype.slice.call(arguments,1))};var bb=function(a,b){var c=function(d,e){this.i=d;this.m=e};c.prototype.a=function(d){var e=this.m;return Da(d)?cb(e,d):d};c.prototype.F=function(d){return db(this.m,d)};c.prototype.s=function(){return b.F};return new c(a,b)};
ab.prototype.Ga=function(a,b){try{return this.i.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var db=function(a,b){for(var c,d=0;d<b.length&&!(c=cb(a,b[d]),c instanceof pa);d++);return c},cb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof ab))throw Error("Attempting to execute non-function "+b[0]+".");return c.i.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.s;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};var eb=function(){ra.call(this)};ka(eb,ra);eb.prototype.cc=function(){return new h(sa(this))};var fb=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|Map|List)$/i,gb={Fn:"function",Map:"Object",List:"Array"},D=function(a,b,c){for(var d=0;d<b.length;d++){var e=fb.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],k=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==k){var n=typeof l;l instanceof ab?n="Fn":l instanceof h?n="List":l instanceof eb&&(n="Map");if(n!=k)throw Error("Error in "+
a+". Argument "+f+" has type "+n+", which does not match required type "+(gb[k]||k)+".");}}};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var hb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,ib=function(a){if(null==a)return String(a);var b=hb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},jb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},kb=function(a){if(!a||"object"!=ib(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!jb(a,"constructor")&&!jb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||jb(a,b)},F=function(a,b){var c=b||("array"==ib(a)?[]:{}),d;for(d in a)if(jb(a,d)){var e=a[d];"array"==ib(e)?("array"!=ib(c[d])&&(c[d]=[]),c[d]=F(e,c[d])):kb(e)?(kb(c[d])||(c[d]={}),c[d]=F(e,c[d])):c[d]=e}return c};var mb=function(a,b){var c=[],d=[],e=function(g,k){for(var l=sa(g),m=0;m<l.length;m++)k[l[m]]=f(g.get(l[m]))},f=function(g){var k=Fa(c,g);if(-1<k)return d[k];if(g instanceof h){var l=[];c.push(g);d.push(l);for(var m=g.cc(),n=0;n<m.length();n++)l[m.get(n)]=f(g.get(m.get(n)));return l}if(g instanceof eb){var r={};c.push(g);d.push(r);e(g,r);return r}if(g instanceof ab){var u=function(){for(var q=Array.prototype.slice.call(arguments,0),t=0;t<q.length;t++)q[t]=lb(q[t],b);var w=b?b.F:ua(),v=new va(w);b&&
(v.a=b.a);return f(g.i.apply(g,[v].concat(q)))};c.push(g);d.push(u);e(g,u);return u}switch(typeof g){case "boolean":case "number":case "string":case "undefined":return g;case "object":if(null===g)return null}};return f(a)},lb=function(a,b){var c=[],d=[],e=function(g,k){for(var l in g)g.hasOwnProperty(l)&&k.set(l,f(g[l]))},f=function(g){var k=Fa(c,g);if(-1<k)return d[k];if(Da(g)||Ma(g)){var l=new h([]);c.push(g);d.push(l);for(var m in g)g.hasOwnProperty(m)&&l.set(m,f(g[m]));return l}if(kb(g)){var n=
new eb;c.push(g);d.push(n);e(g,n);return n}if("function"===typeof g){var r=new ab("",function(q){for(var t=Array.prototype.slice.call(arguments,0),w=0;w<t.length;w++)t[w]=mb(this.a(t[w]),b);return f((0,this.m.N)(g,g,t))});c.push(g);d.push(r);e(g,r);return r}var u=typeof g;if(null===g||"string"===u||"number"===u||"boolean"===u)return g};return f(a)};var pb={control:function(a,b){return new pa(a,this.a(b))},fn:function(a,b,c){var d=this.m,e=this.a(b);if(!(e instanceof h))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.s().Da(a.length+f.length);return new ab(a,function(){return function(g){var k=ya(d);void 0===k.a&&(k.a=this.m.a);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.a(l[m]),l[m]instanceof pa)return l[m];for(var n=e.get("length"),r=
0;r<n;r++)r<l.length?k.set(e.get(r),l[r]):k.set(e.get(r),void 0);k.set("arguments",new h(l));var u=db(k,f);if(u instanceof pa)return"return"===u.a?u.i:u}}())},list:function(a){var b=this.s();b.Da(arguments.length);for(var c=new h,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.Da(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.s(),c=new eb,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Da(g);c.set(e,f)}return c},undefined:function(){}};function qb(a,b){var c=cb(a,b);if(c instanceof pa||c instanceof ab||c instanceof h||c instanceof eb||null===c||void 0===c||"string"===typeof c||"number"===typeof c||"boolean"===typeof c)return c}var rb=function(){this.m=ua();this.a=new va(this.m)},sb=function(a,b,c){var d=new ab(b,c);d.m=!0;a.a.set(b,d)};rb.prototype.$b=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};rb.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=qb(this.a,arguments[c]);return b};
rb.prototype.s=function(a,b){var c=ya(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=qb(c,arguments[e]);return d};var tb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var ub={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof h)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new h(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.i(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.i(a,this.get(e),e,this)&&d.push(this.get(e));return new h(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.i(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.i(a,this.get(e),e,this));return new h(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g==d)throw Error("TypeError: Reduce on List with no elements.");}for(var k=f;k<d;k++)this.has(k)&&(e=b.i(a,e,this.get(k),k,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var k=f;0<=k;k--)this.has(k)&&(e=b.i(a,e,this.get(k),k,this));return e},reverse:function(){for(var a=tb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):ta(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new h(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.i(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=tb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.i(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):ta(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var vb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),wb=new pa("break"),xb=new pa("continue"),zb=function(a,b){return this.a(a)+this.a(b)},Ab=function(a,b){return this.a(a)&&this.a(b)},Bb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof h))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"==typeof a){if(0<=Fa(vb,b))return lb(a[b].apply(a,tb(c)),this.m);throw Error("TypeError: "+b+" is not a function");}if(a instanceof h){if(a.has(b)){var d=a.get(b);if(d instanceof ab){var e=tb(c);e.unshift(this.m);return d.i.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=Fa(ub.supportedMethods,b)){var f=tb(c);f.unshift(this.m);
return ub[b].apply(a,f)}}if(a instanceof ab||a instanceof eb){if(a.has(b)){var g=a.get(b);if(g instanceof ab){var k=tb(c);k.unshift(this.m);return g.i.apply(g,k)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof ab?a.a:a.toString();if("hasOwnProperty"==b)return a.has.apply(a,tb(c))}throw Error("TypeError: Object has no '"+b+"' property.");},Cb=function(a,b){a=this.a(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");var c=this.m;if(!c.has(a))throw Error("Attempting to assign to undefined value "+
b);var d=this.a(b);c.set(a,d);return d},Db=function(a){var b=ya(this.m),c=db(b,Array.prototype.slice.apply(arguments));if(c instanceof pa)return c},Eb=function(){return wb},Fb=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof pa)return d}},Gb=function(a){for(var b=this.m,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);xa(b,d,e,!0)}}},Hb=function(){return xb},Ib=function(a,b,c){var d=new h;b=this.a(b);for(var e=
0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.m.set(a,this.a(f))},Jb=function(a,b){return this.a(a)/this.a(b)},Kb=function(a,b){return this.a(a)==this.a(b)},Lb=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function Mb(a,b,c){if("string"==typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=db(e,c);if(f instanceof pa){if("break"==f.a)break;if("return"==f.a)return f}}else if(b instanceof eb||b instanceof h||b instanceof ab)for(var g=b.cc(),k=g.length(),l=0;l<k;l++){var m=a(g.get(l)),n=db(m,c);if(n instanceof pa){if("break"==n.a)break;if("return"==n.a)return n}}}
var Ob=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Mb(function(e){d.set(a,e);return d},b,c)},Pb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Mb(function(e){var f=ya(d);xa(f,a,e,!0);return f},b,c)},Qb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Mb(function(e){var f=ya(d);f.add(a,e);return f},b,c)},Rb=function(a){return this.m.get(this.a(a))},Sb=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+
a+".");a instanceof eb||a instanceof h||a instanceof ab?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:qa(b)&&(c=a[b]));return c},Tb=function(a,b){return this.a(a)>this.a(b)},Ub=function(a,b){return this.a(a)>=this.a(b)},Vb=function(a,b){return this.a(a)===this.a(b)},Wb=function(a,b){return this.a(a)!==this.a(b)},Xb=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.F(d);if(e instanceof pa)return e},Yb=function(a,b){return this.a(a)<this.a(b)},Zb=function(a,b){return this.a(a)<=
this.a(b)},$b=function(a,b){return this.a(a)%this.a(b)},ac=function(a,b){return this.a(a)*this.a(b)},dc=function(a){return-this.a(a)},ec=function(a){return!this.a(a)},fc=function(a,b){return this.a(a)!=this.a(b)},gc=function(){return null},hc=function(a,b){return this.a(a)||this.a(b)},ic=function(a,b){var c=this.a(a);this.a(b);return c},jc=function(a){return this.a(a)},kc=function(a){return Array.prototype.slice.apply(arguments)},lc=function(a){return new pa("return",this.a(a))},mc=function(a,b,c){a=
this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof ab||a instanceof h||a instanceof eb)&&a.set(b,c);return c},nc=function(a,b){return this.a(a)-this.a(b)},oc=function(a,b,c){a=this.a(a);var d=this.a(b),e=this.a(c);if(!Da(d)||!Da(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,k=0;k<d.length;k++)if(g||a===this.a(d[k]))if(f=this.a(e[k]),f instanceof pa){var l=f.a;if("break"==l)return;if("return"==
l||"continue"==l)return f}else g=!0;if(e.length==d.length+1&&(f=this.a(e[e.length-1]),f instanceof pa&&("return"==f.a||"continue"==f.a)))return f},pc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},qc=function(a){a=this.a(a);return a instanceof ab?"function":typeof a},rc=function(a){for(var b=this.m,c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}},sc=function(a,b,c,d){var e,f=this.a(d);if(this.a(c)&&(e=this.F(f),e instanceof pa)){if("break"==e.a)return;if("return"==
e.a)return e}for(;this.a(a);){e=this.F(f);if(e instanceof pa){if("break"==e.a)break;if("return"==e.a)return e}this.a(b)}},tc=function(a){return~Number(this.a(a))},uc=function(a,b){return Number(this.a(a))<<Number(this.a(b))},vc=function(a,b){return Number(this.a(a))>>Number(this.a(b))},wc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},xc=function(a,b){return Number(this.a(a))&Number(this.a(b))},yc=function(a,b){return Number(this.a(a))^Number(this.a(b))},zc=function(a,b){return Number(this.a(a))|
Number(this.a(b))};var Bc=function(){this.a=new rb;Ac(this)};Bc.prototype.$b=function(a){return this.a.i(a)};
var Dc=function(a,b){return Cc.a.s(a,b)},Ac=function(a){function b(e,f){var g=d.a,k=String(f);pb.hasOwnProperty(e)&&sb(g,k||e,pb[e])}function c(e,f){sb(d.a,String(e),f)}var d=a;b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);c(0,zb);c(1,Ab);c(2,Bb);c(3,Cb);c(53,Db);c(4,Eb);c(5,Fb);c(52,Gb);c(6,Hb);c(9,Fb);c(50,Ib);c(10,Jb);c(12,Kb);c(13,Lb);c(47,Ob);c(54,Pb);c(55,Qb);c(15,Rb);c(16,Sb);c(17,Sb);c(18,Tb);c(19,Ub);c(20,Vb);c(21,Wb);c(22,Xb);c(23,Yb);c(24,Zb);c(25,$b);c(26,ac);c(27,
dc);c(28,ec);c(29,fc);c(45,gc);c(30,hc);c(32,ic);c(33,ic);c(34,jc);c(35,jc);c(46,kc);c(36,lc);c(43,mc);c(37,nc);c(38,oc);c(39,pc);c(40,qc);c(41,rc);c(42,sc);c(58,tc);c(57,uc);c(60,vc);c(61,wc);c(56,xc);c(62,yc);c(59,zc)},Fc=function(){var a=Cc,b=Ec();sb(a.a,"require",b)},Gc=function(a,b){a.a.a.N=b};
var Hc=[],Ic={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Jc=function(a){return Ic[a]},Kc=/[\x00\x22\x26\x27\x3c\x3e]/g;Hc[3]=function(a){return String(a).replace(Kc,Jc)};var Oc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Pc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Qc=function(a){return Pc[a]};Hc[7]=function(a){return String(a).replace(Oc,Qc)};
Hc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Oc,Qc)+"'"}};var Xc=/['()]/g,Yc=function(a){return"%"+a.charCodeAt(0).toString(16)};Hc[12]=function(a){var b=
encodeURIComponent(String(a));Xc.lastIndex=0;return Xc.test(b)?b.replace(Xc,Yc):b};var Zc=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,$c={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},ad=function(a){return $c[a]};var bd=
/^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i;Hc[14]=function(a){var b=String(a);return bd.test(b)?b.replace(Zc,ad):"#zSoyz"};Hc[16]=function(a){return a};var cd;
var dd=[],ed=[],fd=[],gd=[],hd=[],id={},jd,kd,ld,md=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},nd=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=id[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):cd(c,e,b)},pd=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=od(a[e],b,c));
return d},qd=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=id[b];return c?c.priorityOverride||0:0},od=function(a,b,c){if(Da(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(od(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=dd[f];if(!g||b.cd(g))return;c[f]=!0;try{var k=pd(g,b,c);k.vtp_gtmEventId=b.id;d=nd(k,b);ld&&(d=ld.ug(d,k))}catch(y){b.Ne&&b.Ne(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[od(a[l],b,c)]=od(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var r=od(a[n],b,c);kd&&(m=m||r===kd.Nb);d.push(r)}return kd&&m?kd.xg(d):d.join("");case "escape":d=od(a[1],b,c);if(kd&&Da(a[1])&&"macro"===a[1][0]&&kd.Yg(a))return kd.th(d);d=String(d);for(var u=2;u<a.length;u++)Hc[a[u]]&&(d=Hc[a[u]](d));return d;case "tag":var q=a[1];if(!gd[q])throw Error("Unable to resolve tag reference "+q+".");return d={Ae:a[2],
index:q};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var w=rd(t,b,c),v=!!a[4];return v||2!==w?v!==(1===w):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},rd=function(a,b,c){try{return jd(pd(a,b,c))}catch(d){JSON.stringify(a)}return 2};var sd=function(){var a=function(b){return{toString:function(){return b}}};return{Hd:a("convert_case_to"),Id:a("convert_false_to"),Jd:a("convert_null_to"),Kd:a("convert_true_to"),Ld:a("convert_undefined_to"),fi:a("debug_mode_metadata"),za:a("function"),sf:a("instance_name"),wf:a("live_only"),yf:a("malware_disabled"),zf:a("metadata"),gi:a("original_vendor_template_id"),Df:a("once_per_event"),Td:a("once_per_load"),ae:a("setup_tags"),ce:a("tag_id"),de:a("teardown_tags")}}();var td=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.i=a;this.a=c};ka(td,Error);function ud(a,b){if(Da(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)ud(a[c],b[c])}};var vd=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.m=a;this.i=b;this.a=[]};ka(vd,Error);var wd=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var yd=function(){return function(a,b){a instanceof vd||(a=new vd(a,xd));b&&a.a.push(b);throw a;}};function xd(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ca(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var zd=null,Cd=function(a){function b(r){for(var u=0;u<r.length;u++)d[r[u]]=!0}var c=[],d=[];zd=Ad(a);for(var e=0;e<ed.length;e++){var f=ed[e],g=Bd(f);if(g){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],n=0;n<gd.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Bd=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=zd(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=zd(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},Ad=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=rd(fd[c],a));return b[c]}};var Dd=function(){this.a={}};function Ed(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(k){g="string"===typeof k?g+(": "+k):k instanceof Error?g+(": "+k.message):g+"."}if(!f)throw new td(c,d,g);}}function Fd(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));Ed(e,b,d,g);Ed(f,b,d,g)}}}};var Jd=function(a){var b=Gd.w,c=this;this.i=new Dd;this.a={};var d={},e=Fd(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Ka(a,function(f,g){var k={};Ka(g,function(l,m){var n=Hd(l,m);k[l]=n.assert;d[l]||(d[l]=n.K)});c.a[f]=function(l,m){var n=k[l];if(!n)throw Id(l,{},"The requested permission "+l+" is not configured.");var r=Array.prototype.slice.call(arguments,0);n.apply(void 0,r);e.apply(void 0,r)}})},Ld=function(a){return Kd.a[a]||
function(){}};function Hd(a,b){var c=md(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Id;try{return nd(c)}catch(d){return{assert:function(e){throw new td(e,{},"Permission "+e+" is unknown.");},K:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function Id(a,b,c){return new td(a,b,c)};var Nd=!1;var Od={};Od.Vh=Pa('');Od.Eg=Pa('');var Pd=Nd,Qd=Od.Eg,Rd=Od.Vh;
var ee=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},fe=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;ee(b,"/*")&&(b=b.slice(0,-2));ee(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var k=d[d.length-1];return a.lastIndexOf(k)===a.length-k.length},ge=/^[a-z0-9-]+$/i,he=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
ie=function(a,b){var c;if(!(c="https:"!=a.protocol||a.port&&"443"!=a.port)){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!ge.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var k;var l=a,m=b[g];if(!he.exec(m))throw Error("Invalid Wildcard");var n=m.slice(8),r=n.slice(0,n.indexOf("/")),u;var q=l.hostname,t=r;if(0!==t.indexOf("*."))u=q.toLowerCase()===t.toLowerCase();else{t=t.slice(2);var w=q.toLowerCase().indexOf(t.toLowerCase());
u=-1===w?!1:q.length===t.length?!0:q.length!==t.length+w?!1:"."===q[w-1]}if(u){var v=n.slice(n.indexOf("/"));k=fe(l.pathname+l.search,v)?!0:!1}else k=!1;if(k)return!0}return!1};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
function le(a){return""+a}
function me(a,b){var c=[];return c};var ne=function(a,b){var c=new ab(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.m=!0;return c},oe=function(a,b){var c=new eb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ba(e)?c.set(d,ne(a+"_"+d,e)):(Ca(e)||p(e)||"boolean"==typeof e)&&c.set(d,e)}c.m=!0;return c};var pe=function(a,b){D(this.i.a,["apiName:!string","message:?string"],arguments);var c={},d=new eb;return d=oe("AssertApiSubject",c)};var qe=function(a,b){D(this.i.a,["actual:?*","message:?string"],arguments);var c={},d=new eb;return d=oe("AssertThatSubject",c)};function re(a){return function(){for(var b=[],c=this.m,d=0;d<arguments.length;++d)b.push(mb(arguments[d],c));return lb(a.apply(null,b))}}var te=function(){for(var a=Math,b=se,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=re(a[e].bind(a)))}return c};var ue=function(a){var b;return b};var ve=function(a){var b;return b};var we=function(a){D(this.i.a,["uri:!string"],arguments);return encodeURI(a)};var xe=function(a){D(this.i.a,["uri:!string"],arguments);return encodeURIComponent(a)};var ye=function(a){D(this.i.a,["message:?string"],arguments);};var ze=function(a,b){D(this.i.a,["min:!number","max:!number"],arguments);return Ha(a,b)};var Ae=function(){return(new Date).getTime()};var Be=function(a,b,c){var d=a.m.a;if(!d)throw Error("Missing program state.");d.eg.apply(null,Array.prototype.slice.call(arguments,1))};var Ce=function(){Be(this,"read_container_data");var a=new eb;a.set("containerId",'GTM-WJMM825');a.set("version",'50');a.set("environmentName",'');a.set("debugMode",Pd);a.set("previewMode",Rd);a.set("environmentMode",Qd);a.m=!0;return a};var De=function(a){return null===a?"null":a instanceof h?"array":a instanceof ab?"function":typeof a};var Ee=function(a){function b(c){return function(d){try{return c(d)}catch(e){(Pd||Rd)&&a.call(this,e.message)}}}return{parse:b(function(c){return lb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(mb(c))})}};var Fe=function(a){return Na(mb(a,this.m))};var Ge=function(a){return Number(mb(a,this.m))};var He=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var Ie=function(a,b,c){var d=null,e=!1;D(this.i.a,["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);d=new eb;for(var f=0;f<a.length();f++){var g=a.get(f);g instanceof eb&&g.has(b)&&g.has(c)&&(d.set(g.get(b),g.get(c)),e=!0)}return e?d:null};var se="floor ceil round max min abs pow sqrt".split(" ");var Je=function(){var a={};return{Mg:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Nh:function(b,c){a[b]=c},reset:function(){a={}}}},Ke=function(a,b){D(this.i.a,["apiName:!string","mock:?*"],arguments);};var Le=function(){this.a={}};Le.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};Le.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";this.a[a]=c?void 0:Ba(b)?ne(a,b):oe(a,b)};function Me(){var a={};return a};var G={ya:"_ee",ii:"_uei",Hc:"event_callback",Mb:"event_timeout",H:"gtag.config",ja:"allow_ad_personalization_signals",Ic:"restricted_data_processing",eb:"allow_google_signals",ka:"cookie_expires",Lb:"cookie_update",fb:"session_duration",ma:"user_properties",xa:"transport_url",I:"ads_data_redaction"};G.Ie=[G.ja,G.eb,G.Lb];G.Ke=[G.ka,G.Mb,G.fb];var C=window,I=document,Ne=navigator,Oe=I.currentScript&&I.currentScript.src,Pe=function(a,b){var c=C[a];C[a]=void 0===c?b:c;return C[a]},Qe=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Re=function(a,b,c){var d=I.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Qe(d,b);c&&(d.onerror=c);var e;if(null===oa)b:{var f=ma.document,g=f.querySelector&&f.querySelector("script[nonce]");
if(g){var k=g.nonce||g.getAttribute("nonce");if(k&&na.test(k)){oa=k;break b}}oa=""}e=oa;e&&d.setAttribute("nonce",e);var l=I.getElementsByTagName("script")[0]||I.body||I.head;l.parentNode.insertBefore(d,l);return d},Se=function(){if(Oe){var a=Oe.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Te=function(a,b){var c=I.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=I.body&&I.body.lastChild||
I.body||I.head;d.parentNode.insertBefore(c,d);Qe(c,b);void 0!==a&&(c.src=a);return c},Ue=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Ve=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},We=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},J=function(a){C.setTimeout(a,0)},Xe=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Ye=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Ze=function(a){var b=I.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},$e=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},af=function(a){Ne.sendBeacon&&Ne.sendBeacon(a)||Ue(a)},bf=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var cf={},O=function(a,b){cf[a]=cf[a]||[];cf[a][b]=!0},df=function(a){for(var b=[],c=cf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var ef=[];function ff(){var a=Pe("google_tag_data",{});a.ics||(a.ics={entries:{},set:gf,update:hf,addListener:jf,notifyListeners:kf,active:!1});return a.ics}
function gf(a,b,c,d,e,f){var g=ff();g.active=!0;if(void 0!=b){var k=g.entries,l=k[a]||{},m=l.region,n=c&&p(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(n===e||(n===d?m!==e:!n&&!m)){var r=!!(f&&0<f&&void 0===l.update),u={region:n,initial:"granted"===b,update:l.update,quiet:r};k[a]=u;r&&C.setTimeout(function(){k[a]===u&&u.quiet&&(u.quiet=!1,lf(a),kf(),O("TAGGING",2))},f)}}}
function hf(a,b){var c=ff();c.active=!0;if(void 0!=b){var d=mf(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=mf(a);f.quiet?(f.quiet=!1,lf(a)):g!==d&&lf(a)}}function jf(a,b){ef.push({ue:a,Hg:b})}function lf(a){for(var b=0;b<ef.length;++b){var c=ef[b];Da(c.ue)&&-1!==c.ue.indexOf(a)&&(c.We=!0)}}function kf(){for(var a=0;a<ef.length;++a){var b=ef[a];if(b.We){b.We=!1;try{b.Hg.call()}catch(c){}}}}
var mf=function(a){var b=ff().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},nf=function(a){return!(ff().entries[a]||{}).quiet},of=function(){return ff().active},pf=function(a,b){ff().addListener(a,b)},qf=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!nf(b[e]))return!0;return!1}if(c()){var d=!1;pf(b,function(){d||c()||(d=!0,a())})}else a()},rf=function(a,b){if(!1===mf(b)){var c=!1;pf([b],function(){!c&&mf(b)&&(a(),c=!0)})}};var sf=[G.o,G.S],tf=function(a){var b=a[G.zh];b&&O("GTM",40);var c=a[G.Ah];c&&O("GTM",41);for(var d=Da(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<sf.length;f++){var g=sf[f],k=a[sf[f]],l=d[e];ff().set(g,k,l,"IN","IN-MH",c)}},uf=function(a){for(var b=0;b<sf.length;b++){var c=sf[b],d=a[sf[b]];ff().update(c,d)}ff().notifyListeners()},vf=function(a){var b=mf(a);return void 0!=b?b:!0},wf=function(){for(var a=[],b=0;b<sf.length;b++){var c=mf(sf[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+
a.join("")},xf=function(a){rf(a,G.o)},yf=function(a,b){qf(a,b)};var Af=function(a){return zf?I.querySelectorAll(a):null},Bf=function(a,b){if(!zf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!I.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Cf=!1;if(I.querySelectorAll)try{var Df=I.querySelectorAll(":root");Df&&1==Df.length&&Df[0]==I.documentElement&&(Cf=!0)}catch(a){}var zf=Cf;var Gd={},Sf=null,Tf=Math.random();Gd.w="GTM-WJMM825";Gd.Rb="561";Gd.Sd="";var Uf={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Vf="www.googletagmanager.com/gtm.js";
var Wf=Vf,Xf=null,Yf=null,Zf=null,$f="//www.googletagmanager.com/a?id="+Gd.w+"&cv=50",ag={},bg={},cg=function(){var a=Sf.sequence||0;Sf.sequence=a+1;return a};
var dg=function(){return"&tc="+gd.filter(function(a){return a}).length},gg=function(){eg||(eg=C.setTimeout(fg,500))},fg=function(){eg&&(C.clearTimeout(eg),eg=void 0);void 0===hg||ig[hg]&&!jg&&!kg||(lg[hg]||mg.$g()||0>=ng--?(O("GTM",1),lg[hg]=!0):(mg.Ch(),Ue(og()),ig[hg]=!0,pg=qg=kg=jg=""))},og=function(){var a=hg;if(void 0===a)return"";var b=df("GTM"),c=df("TAGGING");return[rg,ig[a]?"":"&es=1",sg[a],b?"&u="+b:"",c?"&ut="+c:"",dg(),jg,kg,qg,pg,"&z=0"].join("")},tg=function(){return[$f,"&v=3&t=t","&pid="+
Ha(),"&rv="+Gd.Rb].join("")},ug="0.005000">Math.random(),rg=tg(),vg=function(){rg=tg()},ig={},jg="",kg="",pg="",qg="",hg=void 0,sg={},lg={},eg=void 0,mg=function(a,b){var c=0,d=0;return{$g:function(){if(c<a)return!1;Sa()-d>=b&&(c=0);return c>=a},Ch:function(){Sa()-d>=b&&(c=0);c++;d=Sa()}}}(2,1E3),ng=1E3,wg=function(a,b){if(ug&&!lg[a]&&hg!==a){fg();hg=a;pg=jg="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";sg[a]="&e="+c+"&eid="+a;gg()}},xg=function(a,b,c){if(ug&&!lg[a]&&
b){a!==hg&&(fg(),hg=a);var d,e=String(b[sd.za]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;jg=jg?jg+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var k=(id[g]?"1":"2")+d;pg=pg?pg+"."+k:"&ti="+k;gg();2022<=og().length&&fg()}},yg=function(a,b,c){if(ug&&!lg[a]){a!==hg&&(fg(),hg=a);var d=c+b;kg=kg?kg+
"."+d:"&epr="+d;gg();2022<=og().length&&fg()}};var zg={},Ag=new Ia,Bg={},Cg={},Fg={name:"dataLayer",set:function(a,b){F(Za(a,b),Bg);Dg()},get:function(a){return Eg(a,2)},reset:function(){Ag=new Ia;Bg={};Dg()}},Eg=function(a,b){if(2!=b){var c=Ag.get(a);if(ug){var d=Gg(a);c!==d&&O("GTM",5)}return c}return Gg(a)},Gg=function(a){var b=a.split("."),c=!1,d=void 0;return c?d:Hg(b)},Hg=function(a){for(var b=Bg,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Ig=function(a,b){Cg.hasOwnProperty(a)||(Ag.set(a,b),F(Za(a,b),Bg),Dg())},Dg=function(a){Ka(Cg,function(b,c){Ag.set(b,c);F(Za(b,void 0),Bg);F(Za(b,c),Bg);a&&delete Cg[b]})},Jg=function(a,b,c){zg[a]=zg[a]||{};var d=1!==c?Gg(b):Ag.get(b);"array"===ib(d)||"object"===ib(d)?zg[a][b]=F(d):zg[a][b]=d},Kg=function(a,b){if(zg[a])return zg[a][b]},Lg=function(a,b){zg[a]&&delete zg[a][b]};var Og=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Pg=/:[0-9]+$/,Qg=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var k=f[g].split("=");if(decodeURIComponent(k[0]).replace(/\+/g," ")===b){var l=k.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Tg=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Rg(a.protocol)||Rg(C.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
C.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||C.location.hostname).replace(Pg,"").toLowerCase());return Sg(a,b,c,d,e)},Sg=function(a,b,c,d,e){var f,g=Rg(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Ug(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Pg,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||O("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Fa(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Qg(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Rg=function(a){return a?a.replace(":",
"").toLowerCase():""},Ug=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Vg=function(a){var b=I.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||O("TAGGING",1),c="/"+c);var d=b.hostname.replace(Pg,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},Wg=function(a){function b(m){var n=m.split("=")[0];return 0>d.indexOf(n)?m:n+"=0"}function c(m){return m.split("&").map(b).filter(function(n){return void 0!=
n}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=Vg(a),f=a.split(/[?#]/)[0],g=e.search,k=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===k[0]&&(k=k.substring(1));g=c(g);k=c(k);""!==g&&(g="?"+g);""!==k&&(k="#"+k);var l=""+f+g+k;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function Xg(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),k=g[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var Yg={},Zg=function(a){return void 0==Yg[a]?!1:Yg[a]};var ah=function(a,b,c,d){return $g(d)?Xg(a,String(b||document.cookie),c):[]},dh=function(a,b,c,d,e){if($g(e)){var f=bh(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=ch(f,function(g){return g.Xb},b);if(1===f.length)return f[0].id;f=ch(f,function(g){return g.Bb},c);return f[0]?f[0].id:void 0}}};function eh(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=ah(b,f,!1,d).indexOf(c)}
var ih=function(a,b,c,d){function e(v,y,x){if(null==x)return delete k[y],v;k[y]=x;return v+"; "+y+"="+x}function f(v,y){if(null==y)return delete k[y],v;k[y]=!0;return v+"; "+y}if(!$g(c.Fa))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=fh(b),g=a+"="+b);var k={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.ih);g=e(g,"samesite",
c.Gh);c.Kh&&(g=f(g,"secure"));g=f(g,c.flags);var m=c.domain;if("auto"===m){for(var n=gh(),r=void 0,u=!1,q=0;q<n.length;++q){var t="none"!==n[q]?n[q]:void 0,w=e(g,"domain",t);try{d&&d(a,k)}catch(v){r=v;continue}u=!0;if(!hh(t,c.path)&&eh(w,a,b,c.Fa))return 0}if(r&&!u)throw r;return 1}m&&"none"!==m&&(g=e(g,"domain",m));d&&d(a,k);return hh(m,c.path)?1:eh(g,a,b,c.Fa)?0:1},kh=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return ih(a,b,c)};
function ch(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var k=a[g],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function bh(a,b,c){for(var d=[],e=ah(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),k=g.shift();if(!b||-1!==b.indexOf(k)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),Xb:1*l[0]||1,Bb:1*l[1]||1}))}}return d}
var fh=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},lh=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,mh=/(^|\.)doubleclick\.net$/i,hh=function(a,b){return mh.test(document.location.hostname)||"/"===b&&lh.test(a)},gh=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;mh.test(e)||lh.test(e)||a.push("none");
return a},$g=function(a){if(!Zg("gtag_cs_api")||!a||!of())return!0;if(!nf(a))return!1;var b=mf(a);return null==b?!0:!!b};var nh=function(){for(var a=Ne.userAgent+(I.cookie||"")+(I.referrer||""),b=a.length,c=C.history.length;0<c;)a+=c--^b++;var d=1,e,f,g;if(a)for(d=0,f=a.length-1;0<=f;f--)g=a.charCodeAt(f),d=(d<<6&268435455)+g+(g<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Sa()/1E3)].join(".")},qh=function(a,b,c,d,e){var f=oh(b);return dh(a,f,ph(c),d,e)},rh=function(a,b,c,d){var e=""+oh(c),f=ph(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},oh=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},ph=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function sh(a,b,c){var d,e=a.zb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Sa())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var th=["1"],uh={},yh=function(a){var b=vh(a.prefix);uh[b]||wh(b,a.path,a.domain)||(xh(b,nh(),a),wh(b,a.path,a.domain))};function xh(a,b,c){var d=rh(b,"1",c.domain,c.path),e=sh(c);e.Fa="ad_storage";kh(a,d,e)}function wh(a,b,c){var d=qh(a,b,c,th,"ad_storage");d&&(uh[a]=d);return d}function vh(a){return(a||"_gcl")+"_au"};function zh(){for(var a=Ah,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Bh(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Ah,Ch;function Dh(a){Ah=Ah||Bh();Ch=Ch||zh();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|g>>4,n=(g&15)<<2|k>>6,r=k&63;e||(r=64,d||(n=64));b.push(Ah[l],Ah[m],Ah[n],Ah[r])}return b.join("")}
function Eh(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Ch[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Ah=Ah||Bh();Ch=Ch||zh();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=k&&(c+=String.fromCharCode(g<<6&192|k)))}};var Fh;var Jh=function(){var a=Gh,b=Hh,c=Ih(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){Ve(I,"mousedown",d);Ve(I,"keyup",d);Ve(I,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Kh=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Ih().decorators.push(f)},Lh=function(a,b,c){for(var d=Ih().decorators,e={},f=0;f<d.length;++f){var g=
d[f],k;if(k=!c||g.forms)a:{var l=g.domains,m=a;if(l&&(g.sameHost||m!==I.location.hostname))for(var n=0;n<l.length;n++)if(l[n]instanceof RegExp){if(l[n].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[n])){k=!0;break a}k=!1}if(k){var r=g.placement;void 0==r&&(r=g.fragment?2:1);r===b&&Va(e,g.callback())}}return e},Ih=function(){var a=Pe("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Mh=/(.*?)\*(.*?)\*(.*)/,Nh=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Oh=/^(?:www\.|m\.|amp\.)+/,Ph=/([^?#]+)(\?[^#]*)?(#.*)?/;function Qh(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Sh=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Dh(String(d))))}var e=b.join("*");return["1",Rh(e),e].join("*")},Rh=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Fh)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,k=0;8>k;k++)g=
g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Fh=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Fh[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Uh=function(){return function(a){var b=Vg(C.location.href),c=b.search.replace("?",""),d=Qg(c,"_gl",!1,!0)||"";a.query=Th(d)||{};var e=Tg(b,"fragment").match(Qh("_gl"));a.fragment=Th(e&&e[3]||"")||{}}},Vh=function(a){var b=Uh(),c=Ih();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Va(d,e.query),a&&Va(d,e.fragment));return d},
Th=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Mh.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var k=g[3],l;a:{for(var m=g[2],n=0;n<b;++n)if(m===Rh(k,n)){l=!0;break a}l=!1}if(l){for(var r={},u=k?k.split("*"):[],q=0;q<u.length;q+=2)r[u[q]]=Eh(u[q+1]);return r}}}}catch(t){}};
function Wh(a,b,c,d){function e(n){var r=n,u=Qh(a).exec(r),q=r;if(u){var t=u[2],w=u[4];q=u[1];w&&(q=q+t+w)}n=q;var v=n.charAt(n.length-1);n&&"&"!==v&&(n+="&");return n+m}d=void 0===d?!1:d;var f=Ph.exec(c);if(!f)return"";var g=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+g+k+l}
function Xh(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Lh(b,1,c),e=Lh(b,2,c),f=Lh(b,3,c);if(Wa(d)){var g=Sh(d);c?Yh("_gl",g,a):Zh("_gl",g,a,!1)}if(!c&&Wa(e)){var k=Sh(e);Zh("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){Zh(m,n,r,void 0);break a}if("form"===r.tagName.toLowerCase()){Yh(m,n,r);break a}}"string"==typeof r&&Wh(m,n,r,void 0)}}
function Zh(a,b,c,d){if(c.href){var e=Wh(a,b,c.href,void 0===d?!1:d);Og.test(e)&&(c.href=e)}}
function Yh(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var k=e[g];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=I.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=Wh(a,b,c.action);Og.test(m)&&(c.action=m)}}}
var Gh=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Xh(e,e.hostname)}}catch(g){}},Hh=function(a){try{if(a.action){var b=Tg(Vg(a.action),"host");Xh(a,b)}}catch(c){}},$h=function(a,b,c,d){Jh();Kh(a,b,"fragment"===c?2:1,!!d,!1)},ai=function(a,b){Jh();Kh(a,[Sg(C.location,"host",!0)],b,!0,!0)},bi=function(){var a=I.location.hostname,b=Nh.exec(I.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Oh,""),l=e.replace(Oh,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},ci=function(a,b){return!1===a?!1:a||b||bi()};var di=/^\w+$/,ei=/^[\w-]+$/,fi=/^~?[\w-]+$/,gi={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},hi=function(){if(!Zg("gtag_cs_api")||!of())return!0;var a=mf("ad_storage");return null==a?!0:!!a},ii=function(a,b){nf("ad_storage")?hi()?a():rf(a,"ad_storage"):b?O("TAGGING",3):qf(function(){ii(a,!0)},["ad_storage"])},li=function(a){var b=[];if(!I.cookie)return b;var c=ah(a,I.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=ji(c[d]);e&&-1===Fa(b,e)&&b.push(e)}return ki(b)};
function mi(a){return a&&"string"==typeof a&&a.match(di)?a:"_gcl"}
var oi=function(){var a=Vg(C.location.href),b=Tg(a,"query",!1,void 0,"gclid"),c=Tg(a,"query",!1,void 0,"gclsrc"),d=Tg(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Qg(e,"gclid",!1,void 0);c=c||Qg(e,"gclsrc",!1,void 0)}return ni(b,c,d)},ni=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(ei))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":Zg("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},qi=function(a){var b=oi();ii(function(){return pi(b,a)})};
function pi(a,b,c){function d(m,n){var r=ri(m,e);r&&(kh(r,n,f),g=!0)}b=b||{};var e=mi(b.prefix);c=c||Sa();var f=sh(b,c,!0);f.Fa="ad_storage";var g=!1,k=Math.round(c/1E3),l=function(m){return["GCL",k,m].join(".")};a.aw&&(!0===b.Di?d("aw",l("~"+a.aw[0])):d("aw",l(a.aw[0])));a.dc&&d("dc",l(a.dc[0]));a.gf&&d("gf",l(a.gf[0]));a.ha&&d("ha",l(a.ha[0]));a.gp&&d("gp",l(a.gp[0]));return g}
var ti=function(a,b){var c=Vh(!0);ii(function(){for(var d=mi(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==gi[f]){var g=ri(f,d),k=c[g];if(k){var l=Math.min(si(k),Sa()),m;b:{for(var n=l,r=ah(g,I.cookie,void 0,"ad_storage"),u=0;u<r.length;++u)if(si(r[u])>n){m=!0;break b}m=!1}if(!m){var q=sh(b,l,!0);q.Fa="ad_storage";kh(g,k,q)}}}}pi(ni(c.gclid,c.gclsrc),b)})},ri=function(a,b){var c=gi[a];if(void 0!==c)return b+c},si=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function ji(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var ui=function(a,b,c,d,e){if(Da(b)){var f=mi(e),g=function(){for(var k={},l=0;l<a.length;++l){var m=ri(a[l],f);if(m){var n=ah(m,I.cookie,void 0,"ad_storage");n.length&&(k[m]=n.sort()[n.length-1])}}return k};ii(function(){$h(g,b,c,d)})}},ki=function(a){return a.filter(function(b){return fi.test(b)})},vi=function(a,b){for(var c=mi(b.prefix),d={},e=0;e<a.length;e++)gi[a[e]]&&(d[a[e]]=gi[a[e]]);ii(function(){Ka(d,function(f,g){var k=ah(c+g,I.cookie,void 0,"ad_storage");if(k.length){var l=k[0],m=si(l),
n={};n[f]=[ji(l)];pi(n,b,m)}})})};function wi(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var xi=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(of()){var c=oi();if(wi(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);ai(function(){return d},3);ai(function(){var e={};return e._up="1",e},1)}}},yi=function(){var a;if(hi()){for(var b=[],c=I.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({wd:f[1],value:f[2]})}var g={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[k].wd]||(g[b[k].wd]=[]),g[b[k].wd].push({timestamp:l[1],Jg:l[2]}))}a=g}else a={};return a};var zi=/^\d+\.fls\.doubleclick\.net$/;function Ai(a,b){nf(G.o)?vf(G.o)?a():xf(a):b?O("GTM",42):yf(function(){Ai(a,!0)},[G.o])}function Bi(a){var b=Vg(C.location.href),c=Tg(b,"host",!1);if(c&&c.match(zi)){var d=Tg(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Ci(a,b,c){if("aw"==a||"dc"==a){var d=Bi("gcl"+a);if(d)return d.split(".")}var e=mi(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!vf(G.o)&&c,g;g=oi()[a]||[];if(0<g.length)return f?["0"]:g}var k=ri(a,e);return k?li(k):[]}
var Di=function(a){var b=Bi("gac");if(b)return!vf(G.o)&&a?"0":decodeURIComponent(b);var c=yi(),d=[];Ka(c,function(e,f){for(var g=[],k=0;k<f.length;k++)g.push(f[k].Jg);g=ki(g);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},Ei=function(a,b){var c=oi().dc||[];Ai(function(){yh(b);var d=uh[vh(b.prefix)],e=!1;if(d&&0<c.length){var f=Sf.joined_au=Sf.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+d;af(l);e=f[g]=
!0}}null==a&&(a=e);if(a&&d){var m=vh(b.prefix),n=uh[m];n&&xh(m,n,b)}})};var Fi=/[A-Z]+/,Gi=/\s/,Hi=function(a){if(p(a)&&(a=Ra(a),!Gi.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Fi.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],B:d}}}}},Ji=function(a){for(var b={},c=0;c<a.length;++c){var d=Hi(a[c]);d&&(b[d.id]=d)}Ii(b);var e=[];Ka(b,function(f,g){e.push(g)});return e};
function Ii(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.B[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Ki=function(){var a=!1;return a};var R=function(a,b,c,d){return(2===Li()||d||"http:"!=C.location.protocol?a:b)+c},Li=function(){var a=Se(),b;if(1===a)a:{var c=Wf;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=I.getElementsByTagName("script"),k=0;k<g.length&&100>k;k++){var l=g[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var Zi=function(a){return vf(G.o)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=Wg(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})};var $i=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),aj={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},bj={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},cj="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var ej=function(a){var b=Eg("gtm.whitelist");b&&O("GTM",9);var c=b&&Xa(Qa(b),aj),d=Eg("gtm.blacklist");d||(d=Eg("tagTypeBlacklist"))&&O("GTM",3);d?
O("GTM",8):d=[];dj()&&(d=Qa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Fa(Qa(d),"google")&&O("GTM",2);var e=d&&Xa(Qa(d),bj),f={};return function(g){var k=g&&g[sd.za];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=bg[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>Fa(c,k))if(l&&0<l.length)for(var r=
0;r<l.length;r++){if(0>Fa(c,l[r])){O("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var u=!1;if(d){var q=0<=Fa(e,k);if(q)u=q;else{var t=Ja(e,l||[]);t&&O("GTM",10);u=t}}var w=!m||u;w||!(0<=Fa(l,"sandboxedScripts"))||c&&-1!==Fa(c,"sandboxedScripts")||(w=Ja(e,cj));return f[k]=w}},dj=function(){return $i.test(C.location&&C.location.hostname)};var fj={ug:function(a,b){b[sd.Hd]&&"string"===typeof a&&(a=1==b[sd.Hd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(sd.Jd)&&null===a&&(a=b[sd.Jd]);b.hasOwnProperty(sd.Ld)&&void 0===a&&(a=b[sd.Ld]);b.hasOwnProperty(sd.Kd)&&!0===a&&(a=b[sd.Kd]);b.hasOwnProperty(sd.Id)&&!1===a&&(a=b[sd.Id]);return a}};var gj={active:!0,isWhitelisted:function(){return!0}},hj=function(a){var b=Sf.zones;!b&&a&&(b=Sf.zones=a());return b};var ij=function(){};var jj=!1,kj=0,lj=[];function mj(a){if(!jj){var b=I.createEventObject,c="complete"==I.readyState,d="interactive"==I.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){jj=!0;for(var e=0;e<lj.length;e++)J(lj[e])}lj.push=function(){for(var f=0;f<arguments.length;f++)J(arguments[f]);return 0}}}function nj(){if(!jj&&140>kj){kj++;try{I.documentElement.doScroll("left"),mj()}catch(a){C.setTimeout(nj,50)}}}var oj=function(a){jj?a():lj.push(a)};var pj={},qj={},rj=function(a,b,c,d){if(!qj[a]||Uf[b]||"__zone"===b)return-1;var e={};kb(d)&&(e=F(d,e));e.id=c;e.status="timeout";return qj[a].tags.push(e)-1},sj=function(a,b,c,d){if(qj[a]){var e=qj[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function tj(a){for(var b=pj[a]||[],c=0;c<b.length;c++)b[c]();pj[a]={push:function(d){d(Gd.w,qj[a])}}}
var wj=function(a,b,c){qj[a]={tags:[]};Ba(b)&&uj(a,b);c&&C.setTimeout(function(){return tj(a)},Number(c));return vj(a)},uj=function(a,b){pj[a]=pj[a]||[];pj[a].push(Ua(function(){return J(function(){b(Gd.w,qj[a])})}))};function vj(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ua(function(){b++;d&&b>=c&&tj(a)})},cg:function(){d=!0;b>=c&&tj(a)}}};var xj=function(){function a(d){return!Ca(d)||0>d?0:d}if(!Sf._li&&C.performance&&C.performance.timing){var b=C.performance.timing.navigationStart,c=Ca(Fg.get("gtm.start"))?Fg.get("gtm.start"):0;Sf._li={cst:a(c-b),cbt:a(Yf-b)}}};var Bj={},Cj=function(){return C.GoogleAnalyticsObject&&C[C.GoogleAnalyticsObject]},Dj=!1;
var Ej=function(a){C.GoogleAnalyticsObject||(C.GoogleAnalyticsObject=a||"ga");var b=C.GoogleAnalyticsObject;if(C[b])C.hasOwnProperty(b)||O("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);C[b]=c}xj();return C[b]},Fj=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Cj();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Hj=function(a){},Gj=function(){return C.GoogleAnalyticsObject||"ga"};var Nj=function(){return!1},Oj=function(){var a={};return function(b,c,d){}};function Pj(a,b,c,d){var e=gd[a],f=Qj(a,b,c,d);if(!f)return null;var g=od(e[sd.ae],c,[]);if(g&&g.length){var k=g[0];f=Pj(k.index,{D:f,C:1===k.Ae?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Qj(a,b,c,d){function e(){if(f[sd.yf])k();else{var v=pd(f,c,[]),y=rj(c.id,String(f[sd.za]),Number(f[sd.ce]),v[sd.zf]),x=!1;v.vtp_gtmOnSuccess=function(){if(!x){x=!0;var z=Sa()-B;xg(c.id,gd[a],"5");sj(c.id,y,"success",z);g()}};v.vtp_gtmOnFailure=function(){if(!x){x=!0;var z=Sa()-B;xg(c.id,gd[a],"6");sj(c.id,y,"failure",z);k()}};v.vtp_gtmTagId=f.tag_id;
v.vtp_gtmEventId=c.id;xg(c.id,f,"1");var A=function(){var z=Sa()-B;xg(c.id,f,"7");sj(c.id,y,"exception",z);x||(x=!0,k())};var B=Sa();try{nd(v,c)}catch(z){A(z)}}}var f=gd[a],g=b.D,k=b.C,l=b.terminate;if(c.cd(f))return null;var m=od(f[sd.de],c,[]);if(m&&m.length){var n=m[0],r=Pj(n.index,{D:g,C:k,terminate:l},c,d);if(!r)return null;g=r;k=2===n.Ae?l:r}if(f[sd.Td]||f[sd.Df]){var u=f[sd.Td]?hd:c.Ph,q=g,t=k;if(!u[a]){e=Ua(e);var w=Rj(a,u,e);g=w.D;k=w.C}return function(){u[a](q,t)}}return e}
function Rj(a,b,c){var d=[],e=[];b[a]=Sj(d,e,c);return{D:function(){b[a]=Tj;for(var f=0;f<d.length;f++)d[f]()},C:function(){b[a]=Uj;for(var f=0;f<e.length;f++)e[f]()}}}function Sj(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Tj(a){a()}function Uj(a,b){b()};var Xj=function(a,b){for(var c=[],d=0;d<gd.length;d++)if(a.Ab[d]){var e=gd[d];var f=b.add();try{var g=Pj(d,{D:f,C:f,terminate:f},a,d);g?c.push({bf:d,Xe:qd(e),$b:g}):(Vj(d,a),f())}catch(l){f()}}b.cg();c.sort(Wj);for(var k=0;k<c.length;k++)c[k].$b();return 0<c.length};function Wj(a,b){var c,d=b.Xe,e=a.Xe;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.bf,k=b.bf;f=g>k?1:g<k?-1:0}return f}
function Vj(a,b){if(!ug)return;var c=function(d){var e=b.cd(gd[d])?"3":"4",f=od(gd[d][sd.ae],b,[]);f&&f.length&&c(f[0].index);xg(b.id,gd[d],e);var g=od(gd[d][sd.de],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Yj=!1,Zj=function(a,b,c,d,e){if("gtm.js"==b){if(Yj)return!1;Yj=!0}wg(a,b);var f=wj(a,d,e);Jg(a,"event",1);Jg(a,"ecommerce",1);Jg(a,"gtm");var g={id:a,name:b,cd:ej(c),Ab:[],Ph:[],Ne:function(){O("GTM",6)}};g.Ab=Cd(g);var k=Xj(g,f);"gtm.js"!==b&&"gtm.sync"!==b||Hj(Gd.w);if(!k)return k;for(var l=0;l<g.Ab.length;l++)if(g.Ab[l]){var m=gd[l];if(m&&!Uf[String(m[sd.za])])return!0}return!1};function bk(a,b){}function ck(a,b){return dk()?bk(a,b):void 0}function dk(){var a=!1;return a};var ek=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.D=function(){};this.C=function(){};this.eventId=void 0},fk=function(a){var b=new ek;b.eventModel=a;return b},gk=function(a,b){a.targetConfig=b;return a},hk=function(a,b){a.containerConfig=b;return a},ik=function(a,b){a.a=b;return a},jk=function(a,b){a.globalConfig=b;return a},kk=function(a,b){a.D=b;return a},lk=function(a,b){a.C=b;return a};
ek.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var mk=function(a){function b(e){Ka(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Ka(c,function(e){d.push(e)});return d};var nk;if(3===Gd.Rb.length)nk="g";else{var ok="G";nk=ok}
var pk={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:nk,OPT:"o"},qk=function(a){var b=Gd.w.split("-"),c=b[0].toUpperCase(),d=pk[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Gd.Rb.length){var g=void 0;f="2"+(g||"w")}else f=
"";return f+d+Gd.Rb+e};function rk(){var a=!1;return a}
function sk(a,b,c){function d(r){var u;Sf.reported_gclid||(Sf.reported_gclid={});u=Sf.reported_gclid;var q=f+(r?"gcu":"gcs");if(!u[q]){u[q]=!0;var t=[],w=function(B,z){z&&t.push(B+"="+encodeURIComponent(z))},v="https://www.google.com";
w("gclid",tk(b,f));w("gclsrc",g);w("gtm",qk(!c));var A=v+"/pagead/landing?"+t.join("&");af(A)}}var e=oi(),f=e.gclid||"",g=e.gclsrc,k=e.dclid||"",l=!a&&(!f||g&&"aw.ds"!==g?!1:!0),m=rk();if(l||m){var n=""+nh();m?yf(function(){d();vf(G.o)||xf(function(){return d(!0)})},[G.o]):d()}}
function tk(a,b){return b}var yl={},zl=["G","GP"];yl.df="";var Al=yl.df.split(",");function Bl(){var a=Sf;return a.gcq=a.gcq||new Cl}
var Dl=function(a,b,c){Bl().register(a,b,c)},El=function(a,b,c,d){Bl().push("event",[b,a],c,d)},Fl=function(a,b){Bl().push("config",[a],b)},Gl={},Hl=function(a){return!0},Il=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.a=!1},Jl=function(a,b,c,d,e){this.type=a;this.m=b;this.ba=c||
"";this.a=d;this.i=e},Cl=function(){this.m={};this.i={};this.a=[]},Kl=function(a,b){var c=Hi(b);return a.m[c.containerId]=a.m[c.containerId]||new Il},Ll=function(a,b,c){if(b){var d=Hi(b);if(d&&1===Kl(a,b).status&&Hl(d.prefix)){Kl(a,b).status=2;var e={};ug&&(e.timeoutId=C.setTimeout(function(){O("GTM",38);gg()},3E3));a.push("require",[e],d.containerId);Gl[d.containerId]=Sa();if(Ki()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",k=("http:"!=C.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=ck(c,g)||k;Re(l)}}}},Ml=function(a,b,c,d){if(d.ba){var e=Kl(a,d.ba),
f=e.m;if(f){var g=F(c),k=F(e.targetConfig[d.ba]),l=F(e.containerConfig),m=F(e.i),n=F(a.i),r=Eg("gtm.uniqueEventId"),u=Hi(d.ba).prefix,q=lk(kk(jk(ik(hk(gk(fk(g),k),l),m),n),function(){yg(r,u,"2");}),function(){yg(r,u,"3");});try{yg(r,u,"1");f(d.ba,b,d.m,q)}catch(t){
yg(r,u,"4");}}}};
Cl.prototype.register=function(a,b,c){if(3!==Kl(this,a).status){Kl(this,a).m=b;Kl(this,a).status=3;c&&(Kl(this,a).i=c);var d=Hi(a),e=Gl[d.containerId];if(void 0!==e){var f=Sf[d.containerId].bootstrap,g=d.prefix.toUpperCase();Sf[d.containerId]._spx&&(g=g.toLowerCase());var k=Eg("gtm.uniqueEventId"),l=g,m=Sa()-f;if(ug&&!lg[k]){k!==hg&&(fg(),hg=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);qg=qg?qg+","+n:"&cl="+n}delete Gl[d.containerId]}this.flush()}};
Cl.prototype.push=function(a,b,c,d){var e=Math.floor(Sa()/1E3);Ll(this,c,b[0][G.xa]||this.i[G.xa]);this.a.push(new Jl(a,e,c,b,d));d||this.flush()};
Cl.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==Kl(this,c.ba).status&&!a)return;ug&&C.clearTimeout(c.a[0].timeoutId);break;case "set":Ka(c.a[0],function(l,m){F(Za(l,m),b.i)});break;case "config":var d=c.a[0],e=!!d[G.uc];delete d[G.uc];var f=Kl(this,c.ba),g=Hi(c.ba),k=g.containerId===g.id;e||(k?f.containerConfig={}:f.targetConfig[c.ba]={});f.a&&e||Ml(this,G.H,d,c);f.a=!0;delete d[G.ya];k?F(d,f.containerConfig):
F(d,f.targetConfig[c.ba]);break;case "event":Ml(this,c.a[1],c.a[0],c)}this.a.shift()}};var Nl=function(a,b){return!0};var Ol=function(a,b){var c;D(this.i.a,["path:!string"],[a]);Be(this,"access_globals","execute",a);for(var d=a.split("."),e=C,f=e[d[0]],g=1;f&&g<d.length;g++)e=f,f=f[d[g]];if("function"!==ib(f))return;for(var k=[],l=1;l<arguments.length;l++)k.push(mb(arguments[l],this.m));c=lb((0,this.m.N)(f,e,k),this.m);return c};var Pl=function(a){};var Ql=function(a){var b;D(this.i.a,["path:!string"],arguments);Be(this,"access_globals","read",a);var c=a.split("."),d=C,e;for(e=0;e<c.length-1;e++)if(d=d[c[e]],null==d)return;b=d[c[e]];return lb(b,this.m)};var Rl=function(a,b){var c=null;D(this.i.a,["functionPath:!string","arrayPath:!string"],arguments);Be(this,"access_globals","readwrite",a);Be(this,"access_globals","readwrite",b);var d=a.split("."),e=Ya(d),f=d[d.length-1];if(void 0===e)throw Error("Path "+a+" does not exist.");var g=e[f];if(g&&!Ba(g))return null;if(g)return lb(g,this.m);var k;g=function(){if(!Ba(k.push))throw Error("Object at "+b+" in window is not an array.");k.push.call(k,
arguments)};e[f]=g;var l=b.split("."),m=Ya(l),n=l[l.length-1];if(void 0===m)throw Error("Path "+l+" does not exist.");k=m[n];void 0===k&&(k=[],m[n]=k);c=function(){g.apply(g,Array.prototype.slice.call(arguments,0))};return lb(c,this.m)};var Sl=function(a){var b;return lb(b,this.m)};var Tl=function(a){var b;return b};var Ul=function(a,b){b=void 0===b?!0:b;var c;return c};var Vl=function(a,b){var c;return c};var Wl=function(a,b){var c;return c};var Xl=function(a){var b="";return b};var Yl=function(a){var b="";return b};var Zl=function(a,b){};var $l={},am=function(a,b,c,d){D(this.i.a,["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);Be(this,"inject_script",a);var e=this.m,f=function(){b instanceof ab&&b.Ga(e)},g=function(){c instanceof ab&&c.Ga(e)};if(!d){Re(a,f,g);return}var k=d;$l[k]?($l[k].onSuccess.push(f),$l[k].onFailure.push(g)):($l[k]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=$l[k].onSuccess,m=0;m<l.length;m++)J(l[m]);l.push=function(n){J(n);
return 0}},g=function(){for(var l=$l[k].onFailure,m=0;m<l.length;m++)J(l[m]);$l[k]=null},Re(a,f,g));};var bm=function(){return!1},cm={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var dm=function(){};var em={},fm={};em.getItem=function(a){var b=null;return b};em.setItem=function(a,b){};
em.removeItem=function(a){};em.clear=function(){};var gm=function(a,b){var c=!1;return c};var hm=function(a,b,c){};var im=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var jm=function(a,b,c){D(this.i.a,["path:!string","value:?*","overrideExisting:?boolean"],arguments);Be(this,"access_globals","readwrite",a);var d=a.split("."),e=C,f;for(f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;if(void 0===e[d[f]]||c)return e[d[f]]=mb(b,this.m),!0;return!1};var km=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var lm=function(a,b,c){var d=this;};var mm=function(a){var b;return b};function nm(a){}
function om(a,b){var c;return lb(c,this.m)}function pm(){var a="";return a}
function qm(){var a="";return a}
var Ec=function(){var a=new Le;Ki()?(a.add("injectHiddenIframe",Aa),a.add("injectScript",Aa)):(a.add("injectHiddenIframe",Zl),a.add("injectScript",am));var b=hm;a.add("addEventCallback",nm);a.add("aliasInWindow",Nl);a.add("assertThat",qe);a.add("assertApi",pe);a.add("callInWindow",Ol);a.add("callLater",Pl);a.add("copyFromDataLayer",
om);a.add("copyFromWindow",Ql);a.add("createQueue",Sl);a.add("createArgumentsQueue",Rl);a.add("decodeUri",ue);a.add("decodeUriComponent",ve);a.add("encodeUri",we);a.add("encodeUriComponent",xe);a.add("fail",ye);a.add("generateRandom",ze);a.add("getCookieValues",Ul);a.add("getQueryParameters",Vl);a.add("getReferrerQueryParameters",Wl);a.add("getReferrerUrl",Xl);a.add("getTimestamp",Ae);a.add("getType",De);a.add("getUrl",Yl);a.add("logToConsole",dm);a.add("makeInteger",Fe);a.add("makeNumber",Ge);a.add("makeString",
He);a.add("makeTableMap",Ie);a.add("Math",te());a.add("mock",Ke);a.add("queryPermission",gm);a.add("readCharacterSet",pm);a.add("readTitle",qm);a.add("sendPixel",b);a.add("setCookie",im);a.add("setInWindow",jm);a.add("sha256",lm);a.add("TestHelper",Me());a.add("getContainerVersion",Ce);a.add("toBase64",mm,!("btoa"in C)),a.add("fromBase64",
Tl,!("atob"in C));a.add("localStorage",cm,!bm());
return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else throw Error(c+" is not a valid API name.");return d}};var Cc,Kd;
function rm(){var a=data.runtime||[],b=data.runtime_lines;Cc=new Bc;sm();cd=function(e,f,g){tm(f);var k=new eb;Ka(f,function(q,t){k.set(q,lb(t))});Cc.a.a.s=yd();var l={eg:Ld(e),eventId:void 0!==g?g.id:void 0,Zb:e,log:function(){}};if(Nj()){var m=Oj(),n=void 0,r=void 0;l.ca={i:{},a:function(q,t,w){1===t&&(n=q);7===t&&(r=w);m(q,t,w)},m:Je()};l.log=function(q,t){if(n){var w=Array.prototype.slice.call(arguments,1);m(n,4,{level:q,source:r,message:w})}}}var u=Dc(l,[e,k]);Cc.a.a.s=void 0;u instanceof pa&&
"return"===u.a&&(u=u.i);return mb(u)};Fc();for(var c=0;c<a.length;c++){var d=a[c];if(!Da(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&ud(d,b[c]);Cc.$b(d)}}function tm(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ba(b)&&(a.gtmOnSuccess=function(){J(b)});Ba(c)&&(a.gtmOnFailure=function(){J(c)})}
function sm(){var a=Cc;Sf.SANDBOXED_JS_SEMAPHORE=Sf.SANDBOXED_JS_SEMAPHORE||0;Gc(a,function(b,c,d){Sf.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{Sf.SANDBOXED_JS_SEMAPHORE--}})}function um(a){void 0!==a&&Ka(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");bg[e]=bg[e]||[];bg[e].push(b)}})};var vm=["GP","G"],wm="G".split(/,/);wm.push("GF");wm.push("HA");wm.push("AW");var xm=!1;xm=!0;var ym=null,zm={},Am={},Bm;function Cm(a,b){var c={event:a};b&&(c.eventModel=F(b),b[G.Hc]&&(c.eventCallback=b[G.Hc]),b[G.Mb]&&(c.eventTimeout=b[G.Mb]));return c}
var Hm={config:function(a){},event:function(a){var b=a[1];if(p(b)&&!(3<a.length)){var c;if(2<a.length){if(!kb(a[2])&&void 0!=a[2])return;c=a[2]}var d=Cm(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=Kd.i;d.a[b]?d.a[b].push(c):d.a[b]=[c]}},set:function(a){var b;
2==a.length&&kb(a[1])?b=F(a[1]):3==a.length&&p(a[1])&&(b={},kb(a[2])||Da(a[2])?b[a[1]]=F(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}};var Im={policy:!0};var Jm=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Lm=function(a){var b=Km(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Mm=!1,Nm=[];function Om(){if(!Mm){Mm=!0;for(var a=0;a<Nm.length;a++)J(Nm[a])}}var Pm=function(a){Mm?J(a):Nm.push(a)};var fn=function(a){if(en(a))return a;this.a=a};fn.prototype.Pg=function(){return this.a};var en=function(a){return!a||"object"!==ib(a)||kb(a)?!1:"getUntrustedUpdateValue"in a};fn.prototype.getUntrustedUpdateValue=fn.prototype.Pg;var gn=[],hn=!1,jn=function(a){return C["dataLayer"].push(a)},kn=function(a){var b=Sf["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function ln(a){var b=a._clear;Ka(a,function(f,g){"_clear"!==f&&(b&&Ig(f,void 0),Ig(f,g))});Xf||(Xf=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=cg(),a["gtm.uniqueEventId"]=d,Ig("gtm.uniqueEventId",d));Zf=c;var e=mn(a);Zf=null;switch(c){case "gtm.init":O("GTM",19),e&&O("GTM",20)}return e}
function mn(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Sf.zones;d=e?e.checkState(Gd.w,c):gj;return d.active?Zj(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function nn(){for(var a=!1;!hn&&0<gn.length;){hn=!0;delete Bg.eventModel;Dg();var b=gn.shift();if(null!=b){var c=en(b);if(c){var d=b;b=en(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var g=e[f],k=Eg(g,1);if(Da(k)||kb(k))k=F(k);Cg[g]=k}}try{if(Ba(b))try{b.call(Fg)}catch(t){}else if(Da(b)){var l=b;if(p(l[0])){var m=
l[0].split("."),n=m.pop(),r=l.slice(1),u=Eg(m.join("."),2);if(void 0!==u&&null!==u)try{u[n].apply(u,r)}catch(t){}}}else{if(Ma(b)){a:{if(b.length&&p(b[0])){var q=Hm[b[0]];if(q&&(!c||!Im[b[0]])){b=q(b);break a}}b=void 0}if(!b){hn=!1;continue}}a=ln(b)||a}}finally{c&&Dg(!0)}}hn=!1}return!a}function on(){var a=nn();try{Jm(C["dataLayer"],Gd.w)}catch(b){}return a}
var qn=function(){var a=Pe("dataLayer",[]),b=Pe("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};oj(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Pm(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<Sf.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new fn(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);gn.push.apply(gn,d);if(300<
this.length)for(O("GTM",4);300<this.length;)this.shift();var g="boolean"!==typeof f||f;return nn()&&g};gn.push.apply(gn,a.slice(0));pn()&&J(on)},pn=function(){var a=!0;return a};var rn={};rn.Nb=new String("undefined");
var sn=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===rn.Nb?b:a[d]);return c.join("")}};sn.prototype.toString=function(){return this.a("undefined")};sn.prototype.valueOf=sn.prototype.toString;rn.Mf=sn;rn.Pc={};rn.xg=function(a){return new sn(a)};var tn={};rn.Dh=function(a,b){var c=cg();tn[c]=[a,b];return c};rn.we=function(a){var b=a?0:1;return function(c){var d=tn[c];if(d&&"function"===typeof d[b])d[b]();tn[c]=void 0}};rn.Yg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};rn.th=function(a){if(a===rn.Nb)return a;var b=cg();rn.Pc[b]=a;return'google_tag_manager["'+Gd.w+'"].macro('+b+")"};rn.jh=function(a,b,c){a instanceof rn.Mf&&(a=a.a(rn.Dh(b,c)),b=Aa);return{ad:a,D:b}};var un=function(a,b,c){function d(f,g){var k=f[g];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Xe(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},vn=function(a){Sf.hasOwnProperty("autoEventsSettings")||(Sf.autoEventsSettings={});var b=Sf.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},wn=function(a,b,c){vn(a)[b]=c},xn=function(a,b,c,d){var e=vn(a),f=Ta(e,b,d);e[b]=c(f)},yn=function(a,b,c){var d=vn(a);return Ta(d,b,c)};var zn=["input","select","textarea"],An=["button","hidden","image","reset","submit"],Bn=function(a){var b=a.tagName.toLowerCase();return!Ga(zn,function(c){return c===b})||"input"===b&&Ga(An,function(c){return c===a.type.toLowerCase()})?!1:!0},Cn=function(a){return a.form?a.form.tagName?a.form:I.getElementById(a.form):$e(a,["form"],100)},Dn=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(Bn(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var En=!!C.MutationObserver,Fn=void 0,Gn=function(a){if(!Fn){var b=function(){var c=I.body;if(c)if(En)(new MutationObserver(function(){for(var e=0;e<Fn.length;e++)J(Fn[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Ve(c,"DOMNodeInserted",function(){d||(d=!0,J(function(){d=!1;for(var e=0;e<Fn.length;e++)J(Fn[e])}))})}};Fn=[];I.body?b():J(b)}Fn.push(a)};
var Rn=function(){var a=I.body,b=I.documentElement||a&&a.parentElement,c,d;if(I.compatMode&&"BackCompat"!==I.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};O("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Sn=function(a){var b=Rn(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,0)+
Math.max(e.right-d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0},Tn=function(a){if(I.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!C.getComputedStyle)return!0;var c=C.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var k=g.indexOf("opacity(");0<=k&&(g=g.substring(k+8,g.indexOf(")",k)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-
1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=C.getComputedStyle(d,null))}return!1};var Un=[],Vn=!(!C.IntersectionObserver||!C.IntersectionObserverEntry),Wn=function(a,b,c){for(var d=new C.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<Un.length;f++)if(!Un[f])return Un[f]=d,f;return Un.push(d)-1},Xn=function(a,b,c){function d(k,l){var m={top:0,bottom:0,right:0,left:0,width:0,
height:0},n={boundingClientRect:k.getBoundingClientRect(),intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:k,time:Sa()};J(function(){return a(n)})}for(var e=[],f=[],g=0;g<b.length;g++)e.push(0),f.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=Sn(b[k]);if(l>e[k])for(;f[k]<c.length-1&&l>=c[f[k]+1];)d(b[k],l),f[k]++;else if(l<e[k])for(;0<=f[k]&&l<=c[f[k]];)d(b[k],l),f[k]--;e[k]=l}}},Yn=function(a,b,c){for(var d=0;d<c.length;d++)1<
c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(Vn){var e=!1;J(function(){e||Xn(a,b,c)()});return Wn(function(f){e=!0;for(var g={$a:0};g.$a<f.length;g={$a:g.$a},g.$a++)J(function(k){return function(){return a(f[k.$a])}}(g))},b,c)}return C.setInterval(Xn(a,b,c),1E3)},Zn=function(a){Vn?0<=a&&a<Un.length&&Un[a]&&(Un[a].disconnect(),Un[a]=void 0):C.clearInterval(a)};var ao=C.clearTimeout,bo=C.setTimeout,S=function(a,b,c){if(Ki()){b&&J(b)}else return Re(a,b,c)},co=function(){return C.location.href},eo=function(a){return Tg(Vg(a),"fragment")},fo=function(a){return Ug(Vg(a))},U=function(a,b){return Eg(a,b||2)},go=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=jn(a)):d=jn(a);return d},ho=function(a,b){C[a]=b},V=function(a,b,c){b&&(void 0===C[a]||c&&!C[a])&&(C[a]=
b);return C[a]},io=function(a,b,c){return ah(a,b,void 0===c?!0:!!c)},jo=function(a,b,c){return 0===kh(a,b,c)},ko=function(a,b){if(Ki()){b&&J(b)}else Te(a,b)},lo=function(a){return!!yn(a,"init",!1)},mo=function(a){wn(a,"init",!0)},no=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Wf;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";S(R("https://","http://",c))},oo=function(a,b){var c=a[b];return c};
var po=rn.jh;var Mo=new Ia;function No(a,b){function c(g){var k=Vg(g),l=Tg(k,"protocol"),m=Tg(k,"host",!0),n=Tg(k,"port"),r=Tg(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Oo(a){return Po(a)?1:0}
function Po(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Da(c)){for(var d=0;d<c.length;d++)if(Oo({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var g=0;g<f.length;g++)if(b[f[g]]){e=b[f[g]](c);break a}}catch(w){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=Fa(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var r;var u=a.ignore_case?"i":void 0;try{var q=String(c)+u,t=Mo.get(q);t||(t=new RegExp(c,u),Mo.set(q,t));r=t.test(b)}catch(w){r=!1}return r;case "_sw":return 0==String(b).indexOf(String(c));
case "_um":return No(b,c)}return!1};var Qo=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Ro={},So=encodeURI,W=encodeURIComponent,To=Ue;var Uo=function(a,b){if(!a)return!1;var c=Tg(Vg(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Vo=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Ro.Zg=function(){var a=!1;return a};var iq=function(){var a=C.gaGlobal=C.gaGlobal||{};a.hid=a.hid||Ha();return a.hid};var rq=window,sq=document,tq=function(a){var b=rq._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===rq["ga-disable-"+a])return!0;try{var c=rq.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Xg("AMP_TOKEN",String(sq.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return sq.getElementById("__gaOptOutExtension")?!0:!1};
function wq(a,b){delete b.eventModel[G.ya];if(a!==G.H){var c=b.getWithConfig(G.mc);if(Da(c)){O("GTM",26);for(var d={},e=0;e<c.length;e++){var f=c[e],g=b.getWithConfig(f);void 0!==g&&(d[f]=g)}b.eventModel=d}}yq(b.eventModel)}var yq=function(a){Ka(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[G.ma]||{};Ka(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Bq=function(a,b,c){El(b,c,a)},Cq=function(a,b,c){El(b,c,a,!0)},Eq=function(a,b){};
function Dq(a,b){}var Y={b:{}};
Y.b.ctv=["google"],function(){(function(a){Y.__ctv=a;Y.__ctv.g="ctv";Y.__ctv.h=!0;Y.__ctv.priorityOverride=0})(function(){return"50"})}();

Y.b.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.g="jsm";Y.__jsm.h=!0;Y.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=V("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Y.b.sp=["google"],function(){(function(a){Y.__sp=a;Y.__sp.g="sp";Y.__sp.h=!0;Y.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure;xj();S(b,function(){var d=V("google_trackConversion");if(Ba(d)){var e=
{};"DATA_LAYER"==a.vtp_customParamsFormat?e=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(e=Vo(a.vtp_customParams,"key","value"));var f={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(e.event=a.vtp_eventName),a.vtp_eventValue&&(f.value=a.vtp_eventValue),a.vtp_eventItems&&(f.items=a.vtp_eventItems));var g={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:e,google_gtag_event_data:f,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,
google_gtm:qk()};a.vtp_rdp&&(g.google_restricted_data_processing=!0);a.vtp_userId&&(g.google_user_id=a.vtp_userId);d(g)||c()}else c()},c)})}();Y.b.c=["google"],function(){(function(a){Y.__c=a;Y.__c.g="c";Y.__c.h=!0;Y.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Y.b.d=["google"],function(){(function(a){Y.__d=a;Y.__d.g="d";Y.__d.h=!0;Y.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=Af(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}else b=I.getElementById(a.vtp_elementId);b&&(d?c=Xe(b,d):c=Ye(b));return Ra(String(b&&c))})}();
Y.b.e=["google"],function(){(function(a){Y.__e=a;Y.__e.g="e";Y.__e.h=!0;Y.__e.priorityOverride=0})(function(a){return String(Kg(a.vtp_gtmEventId,"event"))})}();
Y.b.f=["google"],function(){(function(a){Y.__f=a;Y.__f.g="f";Y.__f.h=!0;Y.__f.priorityOverride=0})(function(a){var b=U("gtm.referrer",1)||I.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Tg(Vg(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):fo(String(b)):String(b)})}();
Y.b.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=un(c,"gtm.click");go(d)}}(function(b){Y.__cl=b;Y.__cl.g="cl";Y.__cl.h=!0;Y.__cl.priorityOverride=0})(function(b){if(!lo("cl")){var c=V("document");Ve(c,"click",a,!0);mo("cl")}J(b.vtp_gtmOnSuccess)})}();

Y.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Y.__access_globals=b;Y.__access_globals.g="access_globals";Y.__access_globals.h=!0;Y.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],k=0;k<c.length;k++){var l=c[k],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(n,r,u){if(!p(u))throw d(n,{},"Key must be a string.");if("read"===r){if(-1<Fa(e,u))return}else if("write"===r){if(-1<Fa(f,u))return}else if("readwrite"===r){if(-1<Fa(f,u)&&-1<Fa(e,u))return}else if("execute"===r){if(-1<Fa(g,u))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+r);throw d(n,{},"Prohibited "+r+" on global variable: "+
u+".");},K:a}})}();Y.b.r=["google"],function(){(function(a){Y.__r=a;Y.__r.g="r";Y.__r.h=!0;Y.__r.priorityOverride=0})(function(a){return Ha(a.vtp_min,a.vtp_max)})}();
Y.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.g="u";Y.__u.h=!0;Y.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=U("gtm.url",1);c=c||co();var d=b[a("vtp_component")];if(!d||"URL"==d)return fo(String(c));var e=Vg(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Da(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var r=Tg(e,"QUERY",void 0,void 0,m[n]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=Tg(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Y.b.v=["google"],function(){(function(a){Y.__v=a;Y.__v.g="v";Y.__v.h=!0;Y.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=U(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Y.b.ua=["google"],function(){var a,b={},c=function(d){var e={},f={},g={},k={},l={};if(d.vtp_gaSettings){var m=d.vtp_gaSettings;F(Vo(m.vtp_fieldsToSet,"fieldName","value"),f);F(Vo(m.vtp_contentGroup,"index","group"),g);F(Vo(m.vtp_dimension,"index","dimension"),k);F(Vo(m.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;m.vtp_fieldsToSet=void 0;m.vtp_contentGroup=void 0;m.vtp_dimension=void 0;m.vtp_metric=void 0;var n=F(m);d=F(d,n)}F(Vo(d.vtp_fieldsToSet,"fieldName","value"),f);F(Vo(d.vtp_contentGroup,
"index","group"),g);F(Vo(d.vtp_dimension,"index","dimension"),k);F(Vo(d.vtp_metric,"index","metric"),l);var r=Ej(d.vtp_functionName);if(Ba(r)){var u="",q="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(q=d.vtp_trackerName,u=q+"."):(q="gtm"+cg(),u=q+".");var t={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0},
v=function(P){var M=[].slice.call(arguments,0);M[0]=u+M[0];r.apply(window,M)},y=function(P,M){return void 0===M?M:P(M)},x=function(P,M){if(M)for(var Oa in M)M.hasOwnProperty(Oa)&&v("set",P+Oa,M[Oa])},A=function(){var P=function(Iq,Gk,Jq){if(!kb(Gk))return!1;for(var Md=Ta(Object(Gk),Jq,[]),jh=0;Md&&jh<Md.length;jh++)v(Iq,Md[jh]);return!!Md&&0<Md.length},M;if(d.vtp_useEcommerceDataLayer){var Oa=!1;Oa||(M=U("ecommerce",1))}else d.vtp_ecommerceMacroData&&(M=d.vtp_ecommerceMacroData.ecommerce);if(!kb(M))return;M=Object(M);var bc=Ta(f,"currencyCode",M.currencyCode);void 0!==bc&&v("set","&cu",bc);P("ec:addImpression",M,"impressions");if(P("ec:addPromo",M[M.promoClick?"promoClick":"promoView"],"promotions")&&M.promoClick){v("ec:setAction","promo_click",M.promoClick.actionField);return}for(var La="detail checkout checkout_option click add remove purchase refund".split(" "),
nb="refund purchase remove checkout checkout_option add click detail".split(" "),ob=0;ob<La.length;ob++){var yb=M[La[ob]];if(yb){P("ec:addProduct",yb,"products");v("ec:setAction",La[ob],yb.actionField);if(ug)for(var Nb=0;Nb<nb.length;Nb++){var Wc=M[nb[Nb]];if(Wc){Wc!==yb&&O("GTM",13);break}}break}}},B=function(P,M,Oa){var bc=0;if(P)for(var La in P)if(P.hasOwnProperty(La)&&(Oa&&t[La]||!Oa&&void 0===t[La])){var nb=w[La]?Pa(P[La]):P[La];
"anonymizeIp"!=La||nb||(nb=void 0);M[La]=nb;bc++}return bc},z={name:q};B(f,z,!0);r("create",d.vtp_trackingId||e.trackingId,z);v("set","&gtm",qk(!0));d.vtp_enableRecaptcha&&
v("require","recaptcha","recaptcha.js");(function(P,M){void 0!==d[M]&&v("set",P,d[M])})("nonInteraction","vtp_nonInteraction");x("contentGroup",g);x("dimension",k);x("metric",l);var E={};B(f,E,!1)&&v("set",E);var H;d.vtp_enableLinkId&&v("require","linkid","linkid.js");v("set","hitCallback",function(){var P=f&&f.hitCallback;Ba(P)&&
P();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(v("require","ec","ec.js"),A());var N={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:y(String,d.vtp_eventLabel||e.label),eventValue:y(Na,d.vtp_eventValue||e.value)};B(H,N,!1);v("send",N);}else if("TRACK_SOCIAL"==
d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(v("require","ec","ec.js"),A());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var la="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");v("require",
"displayfeatures",void 0,{cookieName:la})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var ca="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");v("require","adfeatures",{cookieName:ca})}H?v("send","pageview",H):v("send","pageview");}if(!a){var za=
d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(za="internal/"+za);a=!0;var Ea=ck(f._x_19,"/analytics.js"),cc=R("https:","http:","//www.google-analytics.com/"+za,f&&f.forceSSL);S("analytics.js"===za&&Ea?Ea:cc,function(){var P=Cj();P&&P.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else J(d.vtp_gtmOnFailure)};Y.__ua=c;Y.__ua.g="ua";Y.__ua.h=!0;Y.__ua.priorityOverride=0}();

Y.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Y.__inject_script=b;Y.__inject_script.g="inject_script";Y.__inject_script.h=!0;Y.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!p(f))throw d(e,{},"Script URL must be a string.");try{if(ie(Vg(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},K:a}})}();


Y.b.cid=["google"],function(){(function(a){Y.__cid=a;Y.__cid.g="cid";Y.__cid.h=!0;Y.__cid.priorityOverride=0})(function(){return Gd.w})}();

Y.b.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"];(function(b){Y.__gclidw=b;Y.__gclidw.g="gclidw";Y.__gclidw.h=!0;Y.__gclidw.priorityOverride=100})(function(b){J(b.vtp_gtmOnSuccess);var c,d,e,f;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain,b.vtp_enableCookieFlagsFeature&&(f=b.vtp_cookieFlags));var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var k={prefix:e,path:c,domain:d,flags:f};b.vtp_enableCrossDomainFeature&&
(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||bi())&&ti(a,k));qi(k);vi(["aw","dc"],k);Ei(g,k);var l=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var m=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(","),n=b.vtp_urlPosition,r=!!b.vtp_formDecoration;ui(a,m,n,r,l);}var u=U(G.I);
sk(!1,void 0!=u&&!1!==u);b.vtp_enableUrlPassthroughFeature&&b.vtp_enableUrlPassthrough&&xi()})}();

Y.b.aev=["google"],function(){function a(q,t){var w=Kg(q,"gtm");if(w)return w[t]}function b(q,t,w,v){v||(v="element");var y=q+"."+t,x;if(n.hasOwnProperty(y))x=n[y];else{var A=a(q,v);if(A&&(x=w(A),n[y]=x,r.push(y),35<r.length)){var B=r.shift();delete n[B]}}return x}function c(q,t,w){var v=a(q,u[t]);return void 0!==v?v:w}function d(q,t){if(!q)return!1;var w=e(co());Da(t)||(t=String(t||"").replace(/\s+/g,"").split(","));for(var v=[w],y=0;y<t.length;y++)if(t[y]instanceof RegExp){if(t[y].test(q))return!1}else{var x=
t[y];if(0!=x.length){if(0<=e(q).indexOf(x))return!1;v.push(e(x))}}return!Uo(q,v)}function e(q){m.test(q)||(q="http://"+q);return Tg(Vg(q),"HOST",!0)}function f(q,t,w){switch(q){case "SUBMIT_TEXT":return b(t,"FORM."+q,g,"formSubmitElement")||w;case "LENGTH":var v=b(t,"FORM."+q,k);return void 0===v?w:v;case "INTERACTED_FIELD_ID":return l(t,"id",w);case "INTERACTED_FIELD_NAME":return l(t,"name",w);case "INTERACTED_FIELD_TYPE":return l(t,"type",w);case "INTERACTED_FIELD_POSITION":var y=a(t,"interactedFormFieldPosition");
return void 0===y?w:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(t,"interactSequenceNumber");return void 0===x?w:x;default:return w}}function g(q){switch(q.tagName.toLowerCase()){case "input":return Xe(q,"value");case "button":return Ye(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var t=0,w=0;w<q.elements.length;w++)Bn(q.elements[w])&&t++;return t}}function l(q,t,w){var v=a(q,"interactedFormField");return v&&Xe(v,t)||w}var m=/^https?:\/\//i,n={},r=[],u={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Y.__aev=q;Y.__aev.g="aev";Y.__aev.h=!0;Y.__aev.priorityOverride=0})(function(q){var t=q.vtp_gtmEventId,w=q.vtp_defaultValue,v=q.vtp_varType;switch(v){case "TAG_NAME":var y=a(t,"element");return y&&y.tagName||
w;case "TEXT":return b(t,v,Ye)||w;case "URL":var x;a:{var A=String(a(t,"elementUrl")||w||""),B=Vg(A),z=String(q.vtp_component||"URL");switch(z){case "URL":x=A;break a;case "IS_OUTBOUND":x=d(A,q.vtp_affiliatedDomains);break a;default:x=Tg(B,z,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===q.vtp_attribute)E=c(t,v,w);else{var H=q.vtp_attribute,N=a(t,"element");E=N&&Xe(N,H)||w||""}return E;case "MD":var Q=q.vtp_mdValue,T=b(t,"MD",Nn);return Q&&T?Qn(T,Q)||
w:T||w;case "FORM":return f(String(q.vtp_component||"SUBMIT_TEXT"),t,w);default:return c(t,v,w)}})}();
Y.b.gas=["google"],function(){function a(b,c,d){b.vtp_fieldsToSet=b.vtp_fieldsToSet||[];var e=b[c];void 0!==e&&(b.vtp_fieldsToSet.push({fieldName:d,value:e}),delete b[c])}(function(b){Y.__gas=b;Y.__gas.g="gas";Y.__gas.h=!0;Y.__gas.priorityOverride=0})(function(b){var c=F(b),d=c;d[sd.za]=null;d[sd.sf]=null;c=d;a(c,"vtp_cookieDomain","cookieDomain");return c})}();


Y.b.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=V("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},g=function(k){function l(){var v=!1;v&&of()?
yf(function(){var y=vf(G.o),x=!y&&void 0!=U(G.I)&&!1!==U(G.I);!k.vtp_transportUrl&&x&&(m.google_transport_url="https://pagead2.googlesyndication.com/");u("gcs",wf());b.push(m);y||xf(function(){m=F(m);!k.vtp_transportUrl&&m.google_transport_url&&delete m.google_transport_url;u("gcs",wf());u("gcu","1");b.push(m)})},[G.o]):b.push(m)}xj();var m={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,google_conversion_value:k.vtp_conversionValue||
0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:qk()};k.vtp_rdp&&(m.google_restricted_data_processing=!0);void 0!=U(G.I)&&!1!==U(G.I)&&(m.google_gtm_url_processor=function(v){return v=Zi(v)});var n=function(v){return function(y,x,A){var B="DATA_LAYER"==v?U(A):k[x];B&&(m[y]=B)}},r=n("JSON");r("google_conversion_currency","vtp_currencyCode");r("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(r=n(k.vtp_productReportingDataSource),
r("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),r("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),r("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),r("google_basket_discount","vtp_discount","discount"),r("google_conversion_items","vtp_items","items"),m.google_conversion_items&&m.google_conversion_items.map&&(m.google_conversion_items=m.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}})));
var u=function(v,y){(m.google_additional_conversion_params=m.google_additional_conversion_params||{})[v]=y},q=function(v){return function(y,x,A,B){var z="DATA_LAYER"==v?U(A):k[x];B(z)&&u(y,z)}};var t=ck(k.vtp_transportUrl,"/pagead/conversion_async.js");t||(t=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":
"https://www.google.com/pagead/conversion_async.js");k.vtp_enableNewCustomerReporting&&(r=q(k.vtp_newCustomerReportingDataSource),r("vdnc","vtp_awNewCustomer","new_customer",function(v){return void 0!=v&&""!==v}),r("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(v){return void 0!=v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(m.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),m.google_read_gcl_cookie_opt_out=
!1):m.google_read_gcl_cookie_opt_out=!0;var w=!0;w&&l();a||(a=!0,S(t,f(),e(t)))};
Y.__awct=g;Y.__awct.g="awct";Y.__awct.h=!0;Y.__awct.priorityOverride=0}();Y.b.remm=["google"],function(){(function(a){Y.__remm=a;Y.__remm.g="remm";Y.__remm.h=!0;Y.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=0;f<c.length;f++){var g=c[f].key||"";d&&(g="^"+g+"$");var k=new RegExp(g,e);if(k.test(b)){var l=c[f].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();

Y.b.fsl=[],function(){function a(){var e=V("document"),f=c(),g=HTMLFormElement.prototype.submit;Ve(e,"click",function(k){var l=k.target;if(l&&(l=$e(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&Xe(l,"value")){var m;l.form?l.form.tagName?m=l.form:m=I.getElementById(l.form):m=$e(l,["form"],100);m&&f.store(m,l)}},!1);Ve(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=b(l)&&!m,r=f.get(l),u=!0;if(d(l,function(){if(u){var q;
r&&(q=e.createElement("input"),q.type="hidden",q.name=r.name,q.value=r.value,l.appendChild(q));g.call(l);q&&l.removeChild(q)}},m,n,r))u=!1;else return m||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),m=!0;d(k,function(){m&&g.call(k)},!1,l)&&(g.call(k),m=!1)}}function b(e){var f=e.target;return f&&"_self"!==f&&"_parent"!==f&&"_top"!==f?!1:!0}function c(){var e=[],f=function(g){return Ga(e,function(k){return k.form===
g})};return{store:function(g,k){var l=f(g);l?l.button=k:e.push({form:g,button:k})},get:function(g){var k=f(g);return k?k.button:null}}}function d(e,f,g,k,l){var m=yn("fsl",g?"nv.mwt":"mwt",0),n;n=g?yn("fsl","nv.ids",[]):yn("fsl","ids",[]);if(!n.length)return!0;var r=un(e,"gtm.formSubmit",n),u=e.action;u&&u.tagName&&(u=e.cloneNode(!1).action);r["gtm.elementUrl"]=u;l&&(r["gtm.formSubmitElement"]=l);if(k&&m){if(!go(r,kn(f),m))return!1}else go(r,function(){},m||2E3);return!0}(function(e){Y.__fsl=e;Y.__fsl.g=
"fsl";Y.__fsl.h=!0;Y.__fsl.priorityOverride=0})(function(e){var f=e.vtp_waitForTags,g=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(f){var m=function(r){return Math.max(k,r)};xn("fsl","mwt",m,0);g||xn("fsl","nv.mwt",m,0)}var n=function(r){r.push(l);return r};xn("fsl","ids",n,[]);g||xn("fsl","nv.ids",n,[]);lo("fsl")||(a(),mo("fsl"));J(e.vtp_gtmOnSuccess)})}();Y.b.smm=["google"],function(){(function(a){Y.__smm=a;Y.__smm.g="smm";Y.__smm.h=!0;Y.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Vo(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();





Y.b.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=I.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Qe(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];k.firstChild;)r.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,r,l,g)()}else d.insertBefore(k,null),l()}else f()}catch(u){J(g)}}}var c=function(d){if(I.body){var e=
d.vtp_gtmOnFailure,f=po(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.ad,k=f.D;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,k,e):a(I.body,Ze(g),k,e)()}else bo(function(){c(d)},
200)};Y.__html=c;Y.__html.g="html";Y.__html.h=!0;Y.__html.priorityOverride=0}();

Y.b.dbg=["google"],function(){(function(a){Y.__dbg=a;Y.__dbg.g="dbg";Y.__dbg.h=!0;Y.__dbg.priorityOverride=0})(function(){return!1})}();




Y.b.lcl=[],function(){function a(){var c=V("document"),d=0,e=function(f){var g=f.target;if(g&&3!==f.which&&!(f.Xg||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;g=$e(g,["a","area"],100);if(!g)return f.returnValue;var k=f.defaultPrevented||!1===f.returnValue,l=yn("lcl",k?"nv.mwt":"mwt",0),m;m=k?yn("lcl","nv.ids",[]):yn("lcl","ids",[]);if(m.length){var n=un(g,"gtm.linkClick",m);if(b(f,g,c)&&!k&&l&&g.href){var r=String(oo(g,"rel")||""),u=!!Ga(r.split(" "),function(w){return"noreferrer"===w.toLowerCase()});
u&&O("GTM",36);var q=V((oo(g,"target")||"_self").substring(1)),t=!0;if(go(n,kn(function(){var w;if(w=t&&q){var v;a:if(u){var y;try{y=new MouseEvent(f.type)}catch(x){if(!c.createEvent){v=!1;break a}y=c.createEvent("MouseEvents");y.initEvent(f.type,!0,!0)}y.Xg=!0;f.target.dispatchEvent(y);v=!0}else v=!1;w=!v}w&&(q.location.href=oo(g,"href"))}),l))t=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else go(n,function(){},l||2E3);return!0}}};Ve(c,"click",e,!1);Ve(c,"auxclick",e,!1)}
function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=oo(d,"href"),g=f.indexOf("#"),k=oo(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===g)return!1;if(0<g){var l=fo(f),m=fo(e.location);return l!==m}return!0}(function(c){Y.__lcl=c;Y.__lcl.g="lcl";Y.__lcl.h=!0;Y.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);if(!f||
0>=f)f=2E3;var g=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(f,m)};xn("lcl","mwt",k,0);e||xn("lcl","nv.mwt",k,0)}var l=function(m){m.push(g);return m};xn("lcl","ids",l,[]);e||xn("lcl","nv.ids",l,[]);lo("lcl")||(a(),mo("lcl"));J(c.vtp_gtmOnSuccess)})}();
Y.b.evl=["google"],function(){function a(f,g){this.element=f;this.uid=g}function b(){var f=Number(U("gtm.start"))||0;return(new Date).getTime()-f}function c(f,g,k,l){function m(){if(!Tn(f.target)){g.has(e.Qb)||g.set(e.Qb,""+b());g.has(e.Kc)||g.set(e.Kc,""+b());var r=0;g.has(e.Sb)&&(r=Number(g.get(e.Sb)));r+=100;g.set(e.Sb,""+r);if(r>=k){var u=un(f.target,"gtm.elementVisibility",[g.uid]),q=Sn(f.target);u["gtm.visibleRatio"]=Math.round(1E3*q)/10;u["gtm.visibleTime"]=k;u["gtm.visibleFirstTime"]=Number(g.get(e.Kc));
u["gtm.visibleLastTime"]=Number(g.get(e.Qb));go(u);l()}}}if(!g.has(e.hb)&&(0==k&&m(),!g.has(e.La))){var n=V("self").setInterval(m,100);g.set(e.hb,n)}}function d(f){f.has(e.hb)&&(V("self").clearInterval(Number(f.get(e.hb))),f.a(e.hb))}var e={hb:"polling-id-",Kc:"first-on-screen-",Qb:"recent-on-screen-",Sb:"total-visible-time-",La:"has-fired-"};a.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.uid)};a.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.uid)};a.prototype.set=function(f,g){this.element.setAttribute("data-gtm-vis-"+f+this.uid,g)};a.prototype.a=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.uid)};(function(f){Y.__evl=f;Y.__evl.g="evl";Y.__evl.h=!0;Y.__evl.priorityOverride=0})(function(f){function g(){var y=!1,x=null;if("CSS"===l){try{x=Af(m)}catch(H){}y=!!x&&w.length!=x.length}else if("ID"===l){var A=I.getElementById(m);A&&(x=[A],y=1!=w.length||w[0]!==A)}x||(x=[],y=0<w.length);if(y){for(var B=0;B<w.length;B++){var z=
new a(w[B],q);d(z)}w=[];for(var E=0;E<x.length;E++)w.push(x[E]);0<=v&&Zn(v);0<w.length&&(v=Yn(k,w,[u]))}}function k(y){var x=new a(y.target,q);y.intersectionRatio>=u?x.has(e.La)||c(y,x,r,"ONCE"===t?function(){for(var A=0;A<w.length;A++){var B=new a(w[A],q);B.set(e.La,"1");d(B)}Zn(v);if(n&&Fn)for(var z=0;z<Fn.length;z++)Fn[z]===g&&Fn.splice(z,1)}:function(){x.set(e.La,"1");d(x)}):(d(x),"MANY_PER_ELEMENT"===t&&x.has(e.La)&&(x.a(e.La),x.a(e.Sb)),x.a(e.Qb))}var l=f.vtp_selectorType,m;"ID"===l?m=String(f.vtp_elementId):
"CSS"===l&&(m=String(f.vtp_elementSelector));var n=!!f.vtp_useDomChangeListener,r=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,u=(Number(f.vtp_onScreenRatio)||50)/100,q=f.vtp_uniqueTriggerId,t=f.vtp_firingFrequency,w=[],v=-1;g();n&&Gn(g);J(f.vtp_gtmOnSuccess)})}();


var Fq={};Fq.macro=function(a){if(rn.Pc.hasOwnProperty(a))return rn.Pc[a]},Fq.onHtmlSuccess=rn.we(!0),Fq.onHtmlFailure=rn.we(!1);Fq.dataLayer=Fg;Fq.callback=function(a){ag.hasOwnProperty(a)&&Ba(ag[a])&&ag[a]();delete ag[a]};function Gq(){Sf[Gd.w]=Fq;Va(bg,Y.b);kd=kd||rn;ld=fj}
function Hq(){Yg.gtm_3pds=!0;Sf=C.google_tag_manager=C.google_tag_manager||{};if(Sf[Gd.w]){var a=Sf.zones;a&&a.unregisterChild(Gd.w);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)dd.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)gd.push(e[f]);for(var g=b.predicates||[],k=0;k<g.length;k++)fd.push(g[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],r={},u=0;u<n.length;u++)r[n[u][0]]=Array.prototype.slice.call(n[u],1);ed.push(r)}id=Y;jd=Oo;var q=data.permissions||{},t=data.sandboxed_scripts,w=data.security_groups;rm();Kd=new Jd(q);if(void 0!==
t)for(var v=["sandboxedScripts"],y=0;y<t.length;y++){var x=t[y].replace(/^_*/,"");bg[x]=v}um(w);Gq();qn();jj=!1;kj=0;if("interactive"==I.readyState&&!I.createEventObject||"complete"==I.readyState)mj();else{Ve(I,"DOMContentLoaded",mj);Ve(I,"readystatechange",mj);if(I.createEventObject&&I.documentElement.doScroll){var A=!0;try{A=!C.frameElement}catch(H){}A&&nj()}Ve(C,"load",mj)}Mm=!1;"complete"===I.readyState?Om():Ve(C,"load",Om);a:{if(!ug)break a;C.setInterval(vg,864E5);}
Yf=(new Date).getTime();}}
(function(a){
a()})(Hq);

})()

(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{L6id:function(n,t,e){"use strict";e.r(t);var i=e("CcnG"),l=function(){},o=e("pMnS"),a=e("ra/t"),r=e("ntG5"),h=e("mrSG"),u=e("Ip0R"),c=e("26FU"),s=e("0/uQ"),p=e("F/XL"),d=e("VnD/"),g=e("t9fZ"),b=e("15JJ"),m=e("xMyE"),_=e("67Y/"),f=new i.r("OPTIONS"),y=function(){function n(n,t){this._document=t,this.options={theme:"github",path:"assets/lib/hljs",auto:!0},this._isReady$=new c.a(!1),this.options=Object(h.a)({},this.options,n),this._hljsLoader().subscribe()}return Object.defineProperty(n.prototype,"isReady",{get:function(){return this._isReady$.pipe(Object(d.a)(function(n){return n}),Object(g.a)(1))},enumerable:!0,configurable:!0}),n.prototype.highlight=function(n,t,e,i){if(this.hljs)return this.hljs.highlight(n,t,e,i)},n.prototype.highlightAuto=function(n,t){if(this.hljs)return this.hljs.highlightAuto(n,t)},n.prototype.fixMarkup=function(n){if(this.hljs)return this.hljs.fixMarkup(n)},n.prototype.highlightBlock=function(n){this.hljs&&this.hljs.highlightBlock(n)},n.prototype.configure=function(n){this.hljs&&this.hljs.configure(n)},n.prototype.initHighlighting=function(){this.hljs&&this.hljs.initHighlighting()},n.prototype.initHighlightingOnLoad=function(){this.hljs&&this.hljs.initHighlightingOnLoad()},n.prototype.registerLanguage=function(n,t){this.hljs&&this.hljs.registerLanguage(n,t)},n.prototype.listLanguages=function(){if(this.hljs)return this.hljs.listLanguages()},n.prototype.getLanguage=function(n){if(this.hljs)return this.hljs.getLanguage(n)},n.prototype._hljsLoader=function(){return this._document.defaultView.hljs?this._initHLJS():(this._themeLoader().subscribe(),this._loadScript())},n.prototype._loadScript=function(){var n=this,t=new Promise(function(t){var e=n._document.createElement("script");e.async=!0,e.type="text/javascript",e.onload=t,e.src=n.options.path+"/highlight.pack.js",n._document.head.appendChild(e)});return Object(s.a)(t).pipe(Object(b.a)(function(){return n._initHLJS()}))},n.prototype._themeLoader=function(){var n=this,t=new Promise(function(t){var e=n._document.createElement("link");e.rel="stylesheet",e.type="text/css",e.onload=t,e.href=n.options.path+"/styles/"+n.options.theme+".css",n._document.head.appendChild(e)});return Object(s.a)(t)},n.prototype._initHLJS=function(){var n=this;return Object(p.a)({}).pipe(Object(m.a)(function(){n.hljs=n._document.defaultView.hljs,n.hljs.configure(n.options.config),n._isReady$.next(!0)}))},n.ngInjectableDef=Object(i.V)({factory:function(){return new n(Object(i.Z)(f,8),Object(i.Z)(u.c))},token:n,providedIn:"root"}),n}(),v=function(){function n(n,t,e){this.renderer=t,this.hljs=e,this.highlighted=new i.n,this.el=n.nativeElement}return Object.defineProperty(n.prototype,"setCode",{set:function(n){var t=this;this.code=n,this.hljs.isReady.subscribe(function(){return t.highlightElement(t.el,n)})},enumerable:!0,configurable:!0}),n.prototype.ngOnInit=function(){var n=this;!this.code&&this.hljs.options.auto&&this.hljs.isReady.subscribe(function(){n.highlightTextContent(),n.domObs=new MutationObserver(function(){return n.highlightTextContent()}),n.domObs.observe(n.el,{childList:!0,subtree:!0})})},n.prototype.highlightTextContent=function(){this.highlight?this.highlightChildren(this.el,"all"===this.highlight?"pre code":this.highlight):"code"===this.el.tagName.toLowerCase()?this.highlightElement(this.el,this.el.innerText.trim()):console.warn("[HighlightDirective]: Use 'highlight' on <code> element only")},n.prototype.highlightElement=function(n,t){var e=this.hljs.highlightAuto(t,this.language);e.value!==n.innerHTML&&(this.renderer.addClass(n,"hljs"),this.renderer.setProperty(n,"innerHTML",e.value),this.highlighted.emit(e))},n.prototype.highlightChildren=function(n,t){var e=this,i=n.querySelectorAll(t);Object(s.a)(i).pipe(Object(d.a)(function(n){return 1===n.childNodes.length&&"#text"===n.childNodes[0].nodeName}),Object(_.a)(function(n){return e.highlightElement(n,n.innerText.trim())}),Object(g.a)(1)).subscribe()},n.prototype.ngOnDestroy=function(){!this.code&&this.hljs.options.auto&&this.domObs.disconnect()},n}(),j=function(){function n(){}return n.forRoot=function(t){return{ngModule:n,providers:[{provide:f,useValue:t}]}},n}(),C=function(){this.codeOver='\n  apiUrlGateWay = "https://us-central1-haravan-web-pwa.cloudfunctions.net/haravan";\n  shopHandle = "suplo-food";\n  theme_id = "1000332461";\n\n  apiUrl = `${apiUrlGateWay}/${shopHandle}`\n\n  //C\u1ea5u tr\xfac link c\u01a1 b\u1ea3n gh\xe9p l\u1ea1i nh\u01b0 sau\n  basicApiUrl = `${apiUrl}/${endpoint}?theme_id=${this.themeId}`\n\n  Http service example:\n  get(endpoint, options?: Object) {\n    return this.http.get(`${this.apiUrl}${endpoint}`, options)\n  }\n  ',this.apiLists=[{endpoint:"/collections/:handle",description:"Danh s\xe1ch s\u1ea3n ph\u1ea9m c\u1ee7a nh\xf3m s\u1ea3n ph\u1ea9m truy xu\u1ea5t b\u1edfi handle",code:'\n      getCollectionByHandle(handle, page = 1, sortType = "newest"){\n        this.get(`${apiUrl}/collections/${handle}?view=json&page=${page}&sort_by=${sortType}&theme_id=${this.themeId}`)\n      }\n      ',res:{products:[{id:1017630275,title:"D\xe2y chuy\u1ec1n DC MAMD 130",featured_image:"//hstatic.net/0/0/global/noDefaultImage6_large.gif",handle:"day-chuyen-dc-mamd-130",compare_at_price:0,compare_at_price_format:"0\u20ab",price:1935e5,price_format:"1,935,000\u20ab",available:!0,sale:"-0%"}],paginate:{pages:158,items:1257,current_page:1,hasNext:!0}}},{endpoint:"/products/:endpoint",description:"Th\xf4ng tin chi ti\u1ebft s\u1ea3n ph\u1ea9m",res:{available:!0,compare_at_price_max:0,compare_at_price_min:0,compare_at_price_varies:!1,compare_at_price:0,content:null,description:"<p>Nh\u1eabn c\u01b0\u1edbi kim c\u01b0\u01a1ng NCKC 457 \u0111\u01b0\u1ee3c ch\u1ebf t\xe1c t\u1eeb kim c\u01b0\u01a1ng t\u1ef1 nhi\xean k\u1ebft h\u1ee3p v\u1edbi ch\u1ea5t li\u1ec7u v\xe0ng bi\u1ec3u t\u01b0\u1ee3ng cho s\u1ef1 tr\u01b0\u1eddng t\u1ed3n v\u0129nh c\u1eedu, t\xecnh y\xeau b\u1ea5t t\u1eed. Kim c\u01b0\u01a1ng \u0111\xe3 chi\u1ebfm v\u1ecb tr\xed \u0111\u1ed9c t\xf4n cao qu\xfd c\u1ee7a m\xecnh qua nhi\u1ec1u th\u1ebf k\u1ef7, m\u1ed9t vi\xean kim c\u01b0\u01a1ng n\u1eafm gi\u1eef s\u1ee9c m\u1ea1nh khi\u1ebfn cho l\u1eddi th\u1ec1 trong h\xf4n nh\xe2n tr\u1edf n\xean v\u0129nh c\u1eedu.&nbsp;</p>",featured_image:"https://product.hstatic.net/1000112469/product/dungle-min_82f4575c53744eebb3e8564570dbea0c.jpg",handle:"nhan-cuoi-nc457",id:1005946074,images:["https://product.hstatic.net/1000112469/product/dungle-min_82f4575c53744eebb3e8564570dbea0c.jpg","https://product.hstatic.net/1000112469/product/img_0581-min.jpg","https://product.hstatic.net/1000112469/product/1-min_aec5c84d124c42b78d45d5704321c545.jpg","https://product.hstatic.net/1000112469/product/img_0574-min.jpg"],options:[{name:"M\xe0u s\u1eafc",position:1}],price:17788e5,price_max:17788e5,price_min:17788e5,price_varies:!1,tags:["mausac_Tr\u1eafng","Nh\u1eabn c\u1ee9\u1edbi kim c\u01b0\u01a1ng","Nh\u1eabn C\u01b0\u1edbi"],template_suffix:null,title:"Nh\u1eabn c\u01b0\u1edbi kim c\u01b0\u01a1ng NCKC 457 (Gi\xe1 1 \u0111\xf4i)",type:"nh\u1eabn c\u01b0\u1edbi",url:"/products/nhan-cuoi-nc457",pagetitle:"Nh\u1eabn c\u01b0\u1edbi kim c\u01b0\u01a1ng NCKC 457",metadescription:"Nh\u1eabn c\u01b0\u1edbi kim c\u01b0\u01a1ng NCKC 457 \u0111\u1eb7c bi\u1ec7t \u1ea5n t\u01b0\u1ee3ng v\u1edbi 2 thi\u1ebft k\u1ebf nh\u1eabn kh\xe1c nhau nh\u01b0ng v\u1eabn l\xe0m n\u1ed5i b\u1eadt \u0111\u01b0\u1ee3c v\u1ebb \u0111\u1eb9p c\u1ee7a s\u1ef1 th\u1ed1ng nh\u1ea5t.",variants:[{id:1014150583,barcode:"NC457",available:!0,price:17788e5,sku:"NCKC457",option1:"Tr\u1eafng",option2:"",option3:"",options:["Tr\u1eafng"],inventory_quantity:1,old_inventory_quantity:1,title:"Tr\u1eafng",weight:0,compare_at_price:0,inventory_management:null,inventory_policy:"deny",selected:!1,url:null,featured_image:null}],vendor:"Nh\u1eabn c\u01b0\u1edbi kim c\u01b0\u01a1ng",published_at:"2016-12-14T09:49:34.433Z",created_at:"2017-07-06T09:29:14.804Z",not_allow_promotion:!1},code:"\n      getProduct(handle){\n        return this.get(`/products/${handle}`)\n      }\n      "},{endpoint:"/cart",description:"Th\xf4ng tin chi ti\u1ebft gi\u1ecf h\xe0ng",res:{available:!0,compare_at_price_max:0,compare_at_price_min:0,compare_at_price_varies:!1,compare_at_price:0,content:null,description:"<p>Nh\u1eabn c\u01b0\u1edbi kim c\u01b0\u01a1ng NCKC 457 \u0111\u01b0\u1ee3c ch\u1ebf t\xe1c t\u1eeb kim c\u01b0\u01a1ng t\u1ef1 nhi\xean k\u1ebft h\u1ee3p v\u1edbi ch\u1ea5t li\u1ec7u v\xe0ng bi\u1ec3u t\u01b0\u1ee3ng cho s\u1ef1 tr\u01b0\u1eddng t\u1ed3n v\u0129nh c\u1eedu, t\xecnh y\xeau b\u1ea5t t\u1eed. Kim c\u01b0\u01a1ng \u0111\xe3 chi\u1ebfm v\u1ecb tr\xed \u0111\u1ed9c t\xf4n cao qu\xfd c\u1ee7a m\xecnh qua nhi\u1ec1u th\u1ebf k\u1ef7, m\u1ed9t vi\xean kim c\u01b0\u01a1ng n\u1eafm gi\u1eef s\u1ee9c m\u1ea1nh khi\u1ebfn cho l\u1eddi th\u1ec1 trong h\xf4n nh\xe2n tr\u1edf n\xean v\u0129nh c\u1eedu.&nbsp;</p>",featured_image:"https://product.hstatic.net/1000112469/product/dungle-min_82f4575c53744eebb3e8564570dbea0c.jpg",handle:"nhan-cuoi-nc457",id:1005946074,images:["https://product.hstatic.net/1000112469/product/dungle-min_82f4575c53744eebb3e8564570dbea0c.jpg","https://product.hstatic.net/1000112469/product/img_0581-min.jpg","https://product.hstatic.net/1000112469/product/1-min_aec5c84d124c42b78d45d5704321c545.jpg","https://product.hstatic.net/1000112469/product/img_0574-min.jpg"],options:[{name:"M\xe0u s\u1eafc",position:1}],price:17788e5,price_max:17788e5,price_min:17788e5,price_varies:!1,tags:["mausac_Tr\u1eafng","Nh\u1eabn c\u1ee9\u1edbi kim c\u01b0\u01a1ng","Nh\u1eabn C\u01b0\u1edbi"],template_suffix:null,title:"Nh\u1eabn c\u01b0\u1edbi kim c\u01b0\u01a1ng NCKC 457 (Gi\xe1 1 \u0111\xf4i)",type:"nh\u1eabn c\u01b0\u1edbi",url:"/products/nhan-cuoi-nc457",pagetitle:"Nh\u1eabn c\u01b0\u1edbi kim c\u01b0\u01a1ng NCKC 457",metadescription:"Nh\u1eabn c\u01b0\u1edbi kim c\u01b0\u01a1ng NCKC 457 \u0111\u1eb7c bi\u1ec7t \u1ea5n t\u01b0\u1ee3ng v\u1edbi 2 thi\u1ebft k\u1ebf nh\u1eabn kh\xe1c nhau nh\u01b0ng v\u1eabn l\xe0m n\u1ed5i b\u1eadt \u0111\u01b0\u1ee3c v\u1ebb \u0111\u1eb9p c\u1ee7a s\u1ef1 th\u1ed1ng nh\u1ea5t.",variants:[{id:1014150583,barcode:"NC457",available:!0,price:17788e5,sku:"NCKC457",option1:"Tr\u1eafng",option2:"",option3:"",options:["Tr\u1eafng"],inventory_quantity:1,old_inventory_quantity:1,title:"Tr\u1eafng",weight:0,compare_at_price:0,inventory_management:null,inventory_policy:"deny",selected:!1,url:null,featured_image:null}],vendor:"Nh\u1eabn c\u01b0\u1edbi kim c\u01b0\u01a1ng",published_at:"2016-12-14T09:49:34.433Z",created_at:"2017-07-06T09:29:14.804Z",not_allow_promotion:!1},code:"\n      async getHeader() {\n        let header;\n        await this.localStorage.getCartCookie().then(data => {\n          if(data !== null && data !== undefined){\n            this.cartCookie = data;\n          }\n          header = new HttpHeaders({\n            'X-Suplo-Haravan-Cookie': this.cartCookie\n          })\n        })\n        return header\n      }\n    \n      async getCart() {\n        let headers = await this.getHeader()\n        return await this.get(\"/cart\", {\n          headers: headers\n        }).toPromise();\n      }\n      "},{endpoint:"/cart/:action",description:"Th\xeam/s\u1eeda/xo\xe1 gi\u1ecf h\xe0ng - :action = 'add'| 'change' | 'update'",code:'\n      async addProductToCart(id, quantity) {\n        let headers = await this.getHeader()\n    \n        let payload = {\n          id: id,\n          quantity: quantity\n        }\n        let options = {\n          observe: "response",\n          headers: headers\n        }\n    \n        return await this.post("/cart/add", payload, options).pipe(\n          tap(resp => {\n            this.cartCookie = resp.headers.get("x-suplo-haravan-cookie");\n          })\n        ).toPromise();\n      }\n      ',res:{products:[{id:1017630275,title:"D\xe2y chuy\u1ec1n DC MAMD 130",featured_image:"//hstatic.net/0/0/global/noDefaultImage6_large.gif",handle:"day-chuyen-dc-mamd-130",compare_at_price:0,compare_at_price_format:"0\u20ab",price:1935e5,price_format:"1,935,000\u20ab",available:!0,sale:"-0%"}],paginate:{pages:158,items:1257,current_page:1,hasNext:!0}}}]},k=i.qb({encapsulation:0,styles:[[""]],data:{}});function N(n){return i.Jb(0,[(n()(),i.sb(0,0,null,null,18,"ion-card",[],null,null,null,a.H,a.d)),i.rb(1,49152,null,0,r.h,[i.i,i.l],null,null),(n()(),i.sb(2,0,null,0,7,"ion-card-header",[],null,null,null,a.E,a.f)),i.rb(3,49152,null,0,r.j,[i.i,i.l],null,null),(n()(),i.sb(4,0,null,0,2,"ion-card-subtitle",[],null,null,null,a.F,a.g)),i.rb(5,49152,null,0,r.k,[i.i,i.l],null,null),(n()(),i.Hb(6,0,["",""])),(n()(),i.sb(7,0,null,0,2,"ion-card-title",[],null,null,null,a.G,a.h)),i.rb(8,49152,null,0,r.l,[i.i,i.l],null,null),(n()(),i.Hb(9,0,["",""])),(n()(),i.sb(10,0,null,0,8,"ion-card-content",[],null,null,null,a.D,a.e)),i.rb(11,49152,null,0,r.i,[i.i,i.l],null,null),(n()(),i.sb(12,0,null,0,1,"h3",[],null,null,null,null,null)),(n()(),i.Hb(-1,null,["Demo"])),(n()(),i.sb(14,0,null,0,2,"pre",[],null,null,null,null,null)),(n()(),i.sb(15,0,null,null,1,"code",[["highlight",""]],null,null,null,null,null)),i.rb(16,212992,null,0,v,[i.l,i.F,y],{highlight:[0,"highlight"],setCode:[1,"setCode"]},null),(n()(),i.sb(17,0,null,0,1,"h3",[],null,null,null,null,null)),(n()(),i.Hb(-1,null,["Response"]))],function(n,t){n(t,16,0,"",t.context.$implicit.code)},function(n,t){n(t,6,0,t.context.$implicit.description),n(t,9,0,t.context.$implicit.endpoint)})}function O(n){return i.Jb(0,[(n()(),i.sb(0,0,null,null,10,"ion-header",[],null,null,null,a.L,a.l)),i.rb(1,49152,null,0,r.y,[i.i,i.l],null,null),(n()(),i.sb(2,0,null,0,8,"ion-toolbar",[],null,null,null,a.Z,a.y)),i.rb(3,49152,null,0,r.xb,[i.i,i.l],null,null),(n()(),i.sb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,a.C,a.c)),i.rb(5,49152,null,0,r.g,[],null,null),(n()(),i.sb(6,0,null,0,1,"ion-menu-button",[],null,null,null,a.Q,a.r)),i.rb(7,49152,null,0,r.O,[i.i,i.l],null,null),(n()(),i.sb(8,0,null,0,2,"ion-title",[],null,null,null,a.Y,a.z)),i.rb(9,49152,null,0,r.yb,[i.i,i.l],null,null),(n()(),i.Hb(-1,0,[" Home "])),(n()(),i.sb(11,0,null,null,9,"ion-content",[["padding",""]],null,null,null,a.J,a.j)),i.rb(12,49152,null,0,r.r,[i.i,i.l],null,null),(n()(),i.Hb(-1,0,[" \u0110\u1ec3 s\u1eed d\u1ee5ng api gateway n\xe0y, shop Haravan c\u1ea7n ph\u1ea3i \u0111\u01b0\u1ee3c c\xe0i theme Suplo. "])),(n()(),i.sb(14,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),i.Hb(-1,0,[" Theme chu\u1ea9n: Suplo Food - Kh\xf4ng xo\xe1 "])),(n()(),i.sb(16,0,null,0,2,"pre",[],null,null,null,null,null)),(n()(),i.sb(17,0,null,null,1,"code",[["class","dark"],["highlight",""]],null,null,null,null,null)),i.rb(18,212992,null,0,v,[i.l,i.F,y],{highlight:[0,"highlight"],setCode:[1,"setCode"]},null),(n()(),i.jb(16777216,null,0,1,null,N)),i.rb(20,278528,null,0,u.i,[i.R,i.O,i.u],{ngForOf:[0,"ngForOf"]},null)],function(n,t){var e=t.component;n(t,18,0,"",e.codeOver),n(t,20,0,e.apiLists)},null)}var w=i.ob("app-home",C,function(n){return i.Jb(0,[(n()(),i.sb(0,0,null,null,1,"app-home",[],null,null,null,O,k)),i.rb(1,49152,null,0,C,[],null,null)],null,null)},{},{},[]),H=e("gIcY"),x=e("95zI"),T=e("9opb"),L=e("apKv"),$=e("B4/3"),z=e("ZYCi");e.d(t,"HomePageModuleNgFactory",function(){return D});var D=i.pb(l,[],function(n){return i.yb([i.zb(512,i.k,i.eb,[[8,[o.a,w]],[3,i.k],i.z]),i.zb(4608,u.l,u.k,[i.w,[2,u.s]]),i.zb(4608,H.e,H.e,[]),i.zb(4608,x.a,x.a,[i.B,i.g]),i.zb(4608,T.a,T.a,[x.a,i.k,i.s]),i.zb(4608,L.a,L.a,[x.a,i.k,i.s]),i.zb(1073742336,u.b,u.b,[]),i.zb(1073742336,H.d,H.d,[]),i.zb(1073742336,H.b,H.b,[]),i.zb(1073742336,$.a,$.a,[]),i.zb(1073742336,j,j,[]),i.zb(1073742336,z.n,z.n,[[2,z.t],[2,z.l]]),i.zb(1073742336,l,l,[]),i.zb(256,f,{theme:"dark"},[]),i.zb(1024,z.j,function(){return[[{path:"",component:C}]]},[])])})}}]);
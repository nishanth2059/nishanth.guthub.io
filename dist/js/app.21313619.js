(function(t){function e(e){for(var r,o,n=e[0],c=e[1],l=e[2],m=0,d=[];m<n.length;m++)o=n[m],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,n=1;n<a.length;n++){var c=a[n];0!==s[c]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},s={app:0},i=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0ae3":function(t,e,a){"use strict";a("4380")},4052:function(t,e,a){"use strict";a("e62d")},4380:function(t,e,a){},5005:function(t,e,a){"use strict";a("ca7a")},5656:function(t,e,a){"use strict";a("b494")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=a("8c4f"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mt-5",attrs:{id:"app"}},[a("router-view",{attrs:{cart:t.cart,cartQty:t.cartQty,cartTotal:t.cartTotal,sliderStatus:t.sliderStatus,maximum:t.maximum,products:t.products},on:{"update:maximum":function(e){t.maximum=e},add:t.addItem,delete:t.deleteItem,toggle:t.toggleSliderStatus}})],1)},o=[],n=(a("4de4"),a("a434"),a("a9e3"),a("b76a")),c={name:"App",data:function(){return{maximum:99999,sliderStatus:!0,cart:[],products:null}},computed:{cartTotal:function(){var t=0;for(var e in this.cart)t+=this.cart[e].product.price*this.cart[e].qty;return t},cartQty:function(){var t=0;for(var e in this.cart)t+=this.cart[e].qty;return t}},methods:{toggleSliderStatus:function(){this.sliderStatus=!this.sliderStatus},addItem:function(t){var e,a=this.cart.filter((function(a,r){return a.product.id==Number(t.id)&&(e=r,!0)}));a.length?this.cart[e].qty++:this.cart.push({product:t,qty:1})},deleteItem:function(t){this.cart[t].qty>1?this.cart[t].qty--:this.cart.splice(t,1)}},mounted:function(){var t=this;this.products=n,this.$root.$on("cart",(function(e){t.cart=[]}))}},l=c,u=a("2877"),m=Object(u["a"])(l,i,o,!1,null,null,null),d=m.exports,p=(a("4989"),a("2e49"),a("f9e3"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.$store.state.loginStatus?a("div",{staticClass:"float-right"},[a("button",{staticClass:"btn btn-primary margine-left-10",on:{click:function(e){return t.onLogOutClick()}}},[t._v("Logout")])]):a("div",{staticClass:"float-right"},[a("button",{staticClass:"btn btn-warning",on:{click:function(e){return t.$router.push("register")}}},[t._v("Register")]),a("button",{staticClass:"btn btn-primary margine-left-10",on:{click:function(e){return t.$router.push("login")}}},[t._v("Login")])]),a("h1",[t._v("Mobile Mall")]),a("p",[t._v("research, compare and buy")]),a("navbar",{attrs:{cart:t.cart,cartQty:t.cartQty,cartTotal:t.cartTotal}}),a("price-slider",{attrs:{sliderStatus:t.sliderStatus,maximum:t.maximum},on:{"update:maximum":function(e){t.maximum=e}}}),a("product-list",{attrs:{maximum:t.maximum,products:t.products}})],1)}),h=[],f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-light sticky-top"},[a("div",{staticClass:"navbar-text ml-auto d-flex"},[a("button",{staticClass:"btn btn-sm btn-outline-success",on:{click:function(e){t.$parent.$emit("toggle"),t.showhideFiler()}}},[t.showFilter?a("span",{staticClass:"text-orange"},[t._v("Hide Price Filter")]):a("span",{staticClass:"text-orange"},[t._v("Show Price Filter")])]),t.cart.length>0?a("div",{staticClass:"dropdown ml-2"},[a("button",{staticClass:"btn btn-success btn-sm dropdown-toggle",attrs:{id:"cartDropdown","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("span",{staticClass:"badge badge-pill badge-light"},[t._v(t._s(t.cartQty))]),a("i",{staticClass:"fas fa-shopping-cart mx-2"}),a("price",{attrs:{value:Number(t.cartTotal)}})],1),a("div",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"cartDropdown"}},[t._l(t.cart,(function(e,r){return a("div",{key:r},[a("div",{staticClass:"dropdown-item-text text-nowrap text-left"},[a("span",{staticClass:"badge badge-pill badge-warning align-text-top mr-1"},[t._v(t._s(e.qty))]),t._v(" "+t._s(e.product.name)+" "),a("b",[a("price",{attrs:{value:Number(e.qty*e.product.price)}})],1),a("a",{staticClass:"badge badge-danger text-white align-middle",attrs:{href:"#"},on:{click:function(e){return e.stopPropagation(),t.$parent.$emit("delete",r)}}},[t._v("-")])])])})),a("router-link",{staticClass:"btn btn-sm btn-outline-info text-dark float-right mr-4",attrs:{to:"/checkout"}},[t._v("Checkout")])],2)]):t._e()])])},g=[],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t._v(" "+t._s(this.prefix+Number.parseFloat(this.value*this.conversion).toFixed(this.precision))+" ")])},b=[],y={props:{value:Number,prefix:{type:String,default:"Rs "},precision:{type:Number,default:2},conversion:{type:Number,default:1}}},_=y,x=(a("5005"),Object(u["a"])(_,v,b,!1,null,"19de19cd",null)),w=x.exports,C={name:"navbar",data:function(){return{showFilter:!0}},props:["cart","cartQty","cartTotal"],components:{Price:w},mounted:function(){var t=this;this.$root.$on("updateCart",(function(e){e&&t.$root.$emit("cart",[])}))},methods:{showhideFiler:function(){this.showFilter=!this.showFilter}},watch:{cartQty:function(t,e){console.log(t),console.log(e)}}},P=C,k=(a("ab05"),Object(u["a"])(P,f,g,!1,null,"264938b8",null)),S=k.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"custom","enter-active-class":"animated fadeInDown","leave-active-class":"animated slideOutRight"}},[t.sliderStatus?a("div",[a("div",{staticClass:"align-items-center adjust-items-right",class:t.sliderState},[a("label",{staticClass:"font-weight-bold mr-2",attrs:{for:"formMax"}},[t._v("Select maximum price")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.maxAmount,expression:"maxAmount"}],staticClass:"form-control mx-2 text-center",staticStyle:{width:"70px"},attrs:{type:"text",id:"formMax"},domProps:{value:t.maxAmount},on:{change:function(e){return t.$parent.$emit("update:maximum",t.maxAmount)},input:function(e){e.target.composing||(t.maxAmount=e.target.value)}}}),a("span",{staticClass:"font-weight-bold mr-2"},[t._v("Rs")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.maxAmount,expression:"maxAmount"}],staticClass:"custom-range",attrs:{type:"range",min:"0",max:"99999"},domProps:{value:t.maxAmount},on:{input:function(e){return t.$parent.$emit("update:maximum",t.maxAmount)},__r:function(e){t.maxAmount=e.target.value}}})])]):t._e()])},T=[],O={name:"price-slider",data:function(){return{maxAmount:49999}},props:["sliderStatus"],computed:{sliderState:function(){return this.sliderStatus?"d-flex":"d-none"}}},E=O,$=(a("deda"),Object(u["a"])(E,N,T,!1,null,"01d18b2a",null)),R=$.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition-group",{attrs:{name:"fade",tag:"div"},on:{beforeEnter:t.beforeEnter,enter:t.enter,leave:t.leave}},t._l(t.products,(function(e,r){return e.price<=Number(t.maximum)?a("div",{key:e.id,staticClass:"row d-flex mb-3 align-items-center",attrs:{"data-index":r}},[a("div",{staticClass:"col-4"},[a("img",{staticClass:"img-fluid d-block",attrs:{src:e.image,alt:e.name}})]),a("div",{staticClass:"col"},[a("h3",{staticClass:"text-info"},[t._v(t._s(e.name))]),a("p",{staticClass:"mb-0"},[t._v(t._s(e.description))]),a("div",{staticClass:"h5 float-right"},[a("price",{attrs:{value:Number(e.price)}})],1)]),a("div",{staticClass:"col-2 m-auto"},[a("button",{staticClass:"btn btn-info",on:{click:function(a){return t.$parent.$emit("add",e)}}},[t._v(" Add to Cart ")])])]):t._e()})),0)},A=[],G={name:"product-list",components:{Price:w},props:["products","maximum"],methods:{beforeEnter:function(t){t.className="d-none"},enter:function(t){var e=50*t.dataset.index;setTimeout((function(){t.className="row d-flex mb-3 align-items-center animated fadeInRight "}),e)},leave:function(t){var e=10*t.dataset.index;setTimeout((function(){t.className="row d-flex mb-3 align-items-center animated fadeOutRight "}),e)}}},M=G,q=(a("0ae3"),Object(u["a"])(M,j,A,!1,null,"19265c02",null)),D=q.exports,Y={name:"products",props:["products","maximum","cart","cartQty","cartTotal","sliderStatus","sliderState"],components:{Navbar:S,PriceSlider:R,ProductList:D},methods:{onLogOutClick:function(){confirm("You are loged out successfully.")&&(this.$store.state.loginStatus=!1)}}},F=Y,L=(a("5656"),Object(u["a"])(F,p,h,!1,null,"5da6d7c2",null)),Q=L.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("CheckOut")]),t.cart.length?a("table",{staticClass:"table table-hover"},[a("caption",{staticClass:"text-right h3"},[a("b",[t._v("Total:")]),a("price",{staticClass:"d-block text-success font-weight-light",attrs:{value:Number(t.cartTotal)}})],1),t._m(0),a("tbody",t._l(t.cart,(function(e,r){return a("tr",{key:e.product.id},[a("td",{staticClass:"text-center"},[a("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Basic example"}},[a("button",{staticClass:"btn btn-info",on:{click:function(a){return t.$emit("add",e.product)}}},[t._v("+")]),a("button",{staticClass:"btn btn-outline-info",on:{click:function(e){return t.$emit("delete",r)}}},[t._v("-")])])]),a("th",{attrs:{scope:"row"}},[t._v(t._s(e.product.name))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.qty))]),a("td",{staticClass:"text-right"},[t._v(t._s(Number(e.product.price)))]),a("td",{staticClass:"text-right"},[t._v(" "+t._s(Number(e.qty*e.product.price))+" ")])])})),0)]):t._e(),a("router-link",{staticClass:"btn btn-sm btn-outline-info text-dark",attrs:{to:"/home"}},[t._v("Keep Shopping")]),a("button",{staticClass:"btn btn-success text-black float-right",on:{click:function(e){return t.onSubmitClick()}}},[t._v("Submit")])],1)},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}}),a("th",{attrs:{scope:"col"}},[t._v("Item")]),a("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("Qty")]),a("th",{staticClass:"text-right",attrs:{scope:"col"}},[t._v("Price")]),a("th",{staticClass:"text-right",attrs:{scope:"col"}},[t._v("Sub-total")])])])}],H={name:"checkout",props:["cart","cartTotal"],components:{Price:w},data:function(){return{submitted:!1}},methods:{onSubmitClick:function(){this.$store.state.loginStatus?confirm("You have succeffully completed the payment.")&&(this.submitted=!0,this.$root.$emit("updateCart",this.submitted),this.$router.push("home")):confirm("Only registered user can place the order. Click ok to login and complete the shopping.")&&this.$router.push("login")}}},B=H,U=(a("ec3a"),Object(u["a"])(B,V,I,!1,null,"2a9af4c8",null)),z=U.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"card"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmitregister(e)}}},[a("p",{staticClass:"h4 text-center mb-4"},[t._v("Sign up")]),a("label",{staticClass:"grey-text",attrs:{for:"defaultFormRegisterNameEx"}},[t._v("Your name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.yourName,expression:"yourName"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.yourName},on:{blur:function(e){return t.validateName()},input:function(e){e.target.composing||(t.yourName=e.target.value)}}}),t.namematch?t._e():a("span",[t._v("Please enter first name and last name")]),t.yourName?t._e():a("span",[t._v("This field required")]),a("br"),a("label",{staticClass:"grey-text",attrs:{for:"defaultFormRegisterEmailEx"}},[t._v("Your email")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.yourEmail,expression:"yourEmail",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"email",required:""},domProps:{value:t.yourEmail},on:{input:function(e){e.target.composing||(t.yourEmail=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.yourEmail?t._e():a("span",[t._v("This field required")]),a("br"),a("label",{staticClass:"grey-text",attrs:{for:"defaultFormRegisterConfirmEx"}},[t._v("Confirm your email")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.confirmYourEmail,expression:"confirmYourEmail",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"email",required:""},domProps:{value:t.confirmYourEmail},on:{blur:[function(e){return t.validateEmail()},function(e){return t.$forceUpdate()}],input:function(e){e.target.composing||(t.confirmYourEmail=e.target.value.trim())}}}),t.emailMatch?t._e():a("span",[t._v("Email and Confrim email is not matching")]),t.confirmYourEmail?t._e():a("span",[t._v("This field required")]),a("br"),a("label",{staticClass:"grey-text",attrs:{for:"defaultFormRegisterPasswordEx"}},[t._v("Your password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.yourPassword,expression:"yourPassword"}],staticClass:"form-control",attrs:{type:"password",required:""},domProps:{value:t.yourPassword},on:{blur:function(e){return t.validatePassword()},input:function(e){e.target.composing||(t.yourPassword=e.target.value)}}}),t.passwordmatch?t._e():a("span",[t._v("Password must be atleast 6 charecters")]),t.yourPassword?t._e():a("span",[t._v("This field required")]),t._m(0)])])])},J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center mt-4"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Register")])])}],X={data:function(){return{yourName:null,yourEmail:null,confirmYourEmail:null,yourPassword:null,namematch:!0,emailMatch:!0,passwordmatch:!0,showModal:!1}},methods:{validateName:function(){var t=/^(?:[\u00c0-\u01ffa-zA-Z'-]){2,}(?:\s[\u00c0-\u01ffa-zA-Z'-]{2,})+$/i;t.test(this.yourName)?this.namematch=!0:this.namematch=!1},validateEmail:function(){this.yourEmail!=this.confirmYourEmail?this.emailMatch=!1:this.emailMatch=!0},validatePassword:function(){var t=/.{6,}/;t.test(this.yourPassword)?this.passwordmatch=!0:this.passwordmatch=!1},onSubmitregister:function(){confirm("You are registered successfully! Please login from home.")&&this.$router.push("home")}}},Z=X,K=(a("f521"),Object(u["a"])(Z,W,J,!1,null,"9b7e67a0",null)),tt=K.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"card"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmitLogin(e)}}},[a("p",{staticClass:"h4 text-center mb-4"},[t._v("Sign in")]),a("label",{staticClass:"grey-text",attrs:{for:"defaultFormLoginEmailEx"}},[t._v("Your email")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.yourEmail,expression:"yourEmail",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"email",required:""},domProps:{value:t.yourEmail},on:{input:function(e){e.target.composing||(t.yourEmail=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.yourEmail?t._e():a("span",[t._v("This field required")]),a("br"),a("label",{staticClass:"grey-text",attrs:{for:"defaultFormLoginPasswordEx"}},[t._v("Your password")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.yourPassword,expression:"yourPassword",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"password",required:""},domProps:{value:t.yourPassword},on:{input:function(e){e.target.composing||(t.yourPassword=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.yourPassword?t._e():a("span",[t._v("This field required")]),t._m(0),a("div",{staticClass:"card-footer"},[a("div",{staticClass:"d-flex justify-content-center links"},[t._v(" Don't have an account?"),a("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){return t.$router.push("register")}}},[t._v("Sign Up")])])])])])])},at=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center mt-4"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Login")])])}],rt={data:function(){return{yourEmail:null,yourPassword:null}},methods:{onSubmitLogin:function(){this.$store.state.loginStatus=!0,confirm("You are logged in successfully!.")&&this.$router.push("home")}}},st=rt,it=(a("4052"),Object(u["a"])(st,et,at,!1,null,"7e3530f8",null)),ot=it.exports,nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",[t._v(" Page not found! Maybe view our "),a("router-link",{attrs:{to:"/home"}},[t._v("Home Page")]),t._v("? ")],1)},ct=[],lt={},ut=Object(u["a"])(lt,nt,ct,!1,null,null,null),mt=ut.exports,dt=new s["a"]({routes:[{path:"/home",component:Q},{path:"/checkout",component:z},{path:"/register",component:tt},{path:"/login",component:ot},{path:"/:notFound(.*)",component:mt}]}),pt=dt,ht=a("2f62");r["a"].use(ht["a"]),r["a"].use(s["a"]),r["a"].config.productionTip=!1;var ft=new ht["a"].Store({state:{loginStatus:!1}});new r["a"]({render:function(t){return t(d)},router:pt,store:ft}).$mount("#app")},"6ea1":function(t,e,a){},a029:function(t,e,a){},ab05:function(t,e,a){"use strict";a("a029")},b494:function(t,e,a){},b76a:function(t){t.exports=JSON.parse('[{"id":"1","name":"Xiaomi Redmi Note 9 Pro","description":"The Redmi Note 9 Pro has a lower starting price than its predecessors, but also doesn\'t offer all the modern features that you might expect. It has a 6.67-inch LCD screen with a 60Hz refresh rate and hole-punch front camera at the top. The processor is a Qualcomm Snapdragon 720G which is surprisingly powerful for this segment. You also get a 5020mAh battery and suppport for 18W fast charging.","price":"9999","image_title":"slicker-jacket_lynda_29941","image":"https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note9-pro-0.jpg"},{"id":"2","name":"Samsung Galaxy M51","description":"The Samsung Galaxy M51 is the first smartphone from the company to pack in a massive 7,000mAh battery. The Galaxy  M51 also gets a bigger 6.7-inch SuperAMOLED display with a full-HD+ resolution. Samsung has opted for the 20:9 aspect ratio which makes the device tall and narrow. The Galaxy M51 has a hole-punch camera at the center towards the top of the display. A few users could find this distracting while watching content.","price":"19999","image_title":"ski-coat_lynda_29940","image":"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-m51-1.jpg"},{"id":"3","name":"Realme 7 Pro","description":"The Realme 7 Pro is the spiritual successor to the Realme 6 Pro, boasting of big upgrades such as an AMOLED display, stereo speakers, and 65W fast charging. The Realme 7 Pro features the same mirror-split design on its back as the Realme 7, but it\'s a lot slimmer (8.7mm) and lighter (182g), even compared to the Realme 6 Pro. Sadly, this phone ditches one big feature from the Realme 6 Pro, and that\'s a high screen refresh rate.","price":"29999","image_title":"unisex-thermal-vest_lynda_29944","image":"https://fdn2.gsmarena.com/vv/pics/realme/realme-7-pro-1.jpg"},{"id":"4","name":"Oppo Reno5 Pro 5G","description":"Oppo Reno 5 Pro 5G smartphone was launched on 10th December 2020. The phone comes with a 6.55-inch touchscreen display with a resolution of 1080x2400 pixels at a pixel density of 402 pixels per inch (ppi). Oppo Reno 5 Pro 5G is powered by an octa-core MediaTek Dimensity 1000+ processor. It comes with 8GB of RAM. The Oppo Reno 5 Pro 5G runs Android 11 and is powered by a 4350mAh battery. The Oppo Reno 5 Pro 5G supports proprietary fast charging.","price":"39999","image_title":"unisex-grunge-jeans_lynda_29937","image":"https://fdn2.gsmarena.com/vv/pics/oppo/oppo-reno5-pro-5g-1.jpg"},{"id":"5","name":"Vivo V20","description":"The V20 is a part of Vivo\'s V series of smartphones. The company has focused on the design of the device and made is slim. The Vivo V20 measures 7.38mm in thickness and has a gradient pattern finish at the back. The back panel is made out of glass and feels premium to the touch.","price":"49999","image_title":"v-neck-sweater-for-men_lynda_29947","image":"https://fdn2.gsmarena.com/vv/pics/vivo/vivo-v20-1.jpg"},{"id":"6","name":"OnePlus Nord N10 5G","description":"OnePlus Nord N10 5G smartphone was launched on 26th October 2020. The phone comes with a 6.49-inch touchscreen display. OnePlus Nord N10 5G is powered by an octa-core Qualcomm Snapdragon 690 processor. It comes with 6GB of RAM. The OnePlus Nord N10 5G runs Android 10 and is powered by a 4300mAh battery. The OnePlus Nord N10 5G supports proprietary fast charging.","price":"59999","image_title":"v-neck-long-sleeved-pullover_lynda_29946","image":"https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-nord-n10-5g-1.jpg"},{"id":"7","name":"Xiaomi Redmi Note 10","description":"The Redmi Note 9 Pro has a lower starting price than its predecessors, but also doesn\'t offer all the modern features that you might expect. It has a 6.67-inch LCD screen with a 60Hz refresh rate and hole-punch front camera at the top. The processor is a Qualcomm Snapdragon 720G which is surprisingly powerful for this segment. You also get a 5020mAh battery and suppport for 18W fast charging.","price":"69999","image_title":"slicker-jacket_lynda_29941","image":"https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note9-pro-0.jpg"},{"id":"8","name":"Samsung Galaxy M52","description":"The Samsung Galaxy M51 is the first smartphone from the company to pack in a massive 7,000mAh battery. The Galaxy  M51 also gets a bigger 6.7-inch SuperAMOLED display with a full-HD+ resolution. Samsung has opted for the 20:9 aspect ratio which makes the device tall and narrow. The Galaxy M51 has a hole-punch camera at the center towards the top of the display. A few users could find this distracting while watching content.","price":"79999","image_title":"ski-coat_lynda_29940","image":"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-m51-1.jpg"},{"id":"9","name":"Realme 8","description":"The Realme 7 Pro is the spiritual successor to the Realme 6 Pro, boasting of big upgrades such as an AMOLED display, stereo speakers, and 65W fast charging. The Realme 7 Pro features the same mirror-split design on its back as the Realme 7, but it\'s a lot slimmer (8.7mm) and lighter (182g), even compared to the Realme 6 Pro. Sadly, this phone ditches one big feature from the Realme 6 Pro, and that\'s a high screen refresh rate.","price":"89000","image_title":"unisex-thermal-vest_lynda_29944","image":"https://fdn2.gsmarena.com/vv/pics/realme/realme-7-pro-1.jpg"},{"id":"10","name":"Oppo Reno6","description":"Oppo Reno 5 Pro 5G smartphone was launched on 10th December 2020. The phone comes with a 6.55-inch touchscreen display with a resolution of 1080x2400 pixels at a pixel density of 402 pixels per inch (ppi). Oppo Reno 5 Pro 5G is powered by an octa-core MediaTek Dimensity 1000+ processor. It comes with 8GB of RAM. The Oppo Reno 5 Pro 5G runs Android 11 and is powered by a 4350mAh battery. The Oppo Reno 5 Pro 5G supports proprietary fast charging.","price":"91999","image_title":"unisex-grunge-jeans_lynda_29937","image":"https://fdn2.gsmarena.com/vv/pics/oppo/oppo-reno5-pro-5g-1.jpg"},{"id":"11","name":"Vivo V20","description":"The V20 is a part of Vivo\'s V series of smartphones. The company has focused on the design of the device and made is slim. The Vivo V20 measures 7.38mm in thickness and has a gradient pattern finish at the back. The back panel is made out of glass and feels premium to the touch.","price":"14000","image_title":"v-neck-sweater-for-men_lynda_29947","image":"https://fdn2.gsmarena.com/vv/pics/vivo/vivo-v20-1.jpg"},{"id":"12","name":"OnePlus Nord N11","description":"OnePlus Nord N10 5G smartphone was launched on 26th October 2020. The phone comes with a 6.49-inch touchscreen display. OnePlus Nord N10 5G is powered by an octa-core Qualcomm Snapdragon 690 processor. It comes with 6GB of RAM. The OnePlus Nord N10 5G runs Android 10 and is powered by a 4300mAh battery. The OnePlus Nord N10 5G supports proprietary fast charging.","price":"24000","image_title":"v-neck-long-sleeved-pullover_lynda_29946","image":"https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-nord-n10-5g-1.jpg"}]')},ca7a:function(t,e,a){},d146:function(t,e,a){},db0b:function(t,e,a){},deda:function(t,e,a){"use strict";a("d146")},e62d:function(t,e,a){},ec3a:function(t,e,a){"use strict";a("db0b")},f521:function(t,e,a){"use strict";a("6ea1")}});
//# sourceMappingURL=app.21313619.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(t,e,a){t.exports={wrapper:"Wrapper_wrapper__2cnHF"}},105:function(t,e,a){t.exports={grid:"ProductGrid_grid__1BU_w"}},106:function(t,e,a){t.exports={sectionTitle:"SectionTitle_sectionTitle__2bGxz"}},108:function(t,e,a){t.exports={checkoutButtonWrapper:"ProductContainer_checkoutButtonWrapper__310Sd"}},111:function(t,e,a){t.exports=a(298)},116:function(t,e,a){},117:function(t,e,a){var n={"./blackSuit.jpg":118,"./blackSuitJacket.jpg":119,"./blackSuitWithBowtie.jpg":120,"./blueShirt.jpg":121,"./blueSuit.jpg":122,"./crewWhite.jpg":123,"./greyCollarShirt.jpg":124,"./greySuitJacket.jpg":125,"./leatherJacket.jpg":126,"./rainZipUp.jpg":127,"./simpsonsShirt.jpg":128,"./vest.jpg":129};function r(t){var e=i(t);return a(e)}function i(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=i,t.exports=r,r.id=117},118:function(t,e,a){t.exports=a.p+"static/media/blackSuit.b2d49644.jpg"},119:function(t,e,a){t.exports=a.p+"static/media/blackSuitJacket.b12287ec.jpg"},120:function(t,e,a){t.exports=a.p+"static/media/blackSuitWithBowtie.a65b12c3.jpg"},121:function(t,e,a){t.exports=a.p+"static/media/blueShirt.5238d146.jpg"},122:function(t,e,a){t.exports=a.p+"static/media/blueSuit.a821a5b0.jpg"},123:function(t,e,a){t.exports=a.p+"static/media/crewWhite.bdf2a363.jpg"},124:function(t,e,a){t.exports=a.p+"static/media/greyCollarShirt.548d9cd9.jpg"},125:function(t,e,a){t.exports=a.p+"static/media/greySuitJacket.737c7cd7.jpg"},126:function(t,e,a){t.exports=a.p+"static/media/leatherJacket.25d29dc9.jpg"},127:function(t,e,a){t.exports=a.p+"static/media/rainZipUp.2240a6e5.jpg"},128:function(t,e,a){t.exports=a.p+"static/media/simpsonsShirt.21618fcf.jpg"},129:function(t,e,a){t.exports=a.p+"static/media/vest.32cfd6f5.jpg"},13:function(t,e,a){t.exports={imageWrapper:"Product_imageWrapper__2Wo3C",image:"Product_image__2rUds",price:"Product_price__1IF0E",productDetails:"Product_productDetails__1OGFS",productDetail:"Product_productDetail__3ck4S"}},20:function(t,e,a){t.exports={navigation:"Toolbar_navigation__1C2K5",brand:"Toolbar_brand__3mWUy",hilight:"Toolbar_hilight__1oE3E",hamburger:"Toolbar_hamburger__s3__u"}},21:function(t,e,a){t.exports={modal:"Modal_modal__2J34Z",modalActive:"Modal_modalActive__1awjU",exitIconWrapper:"Modal_exitIconWrapper__2RGud",exitIcon:"Modal_exitIcon__10vjA"}},298:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(19),o=a.n(i),c=(a(116),a(7)),l=a(8),s=a(34),u=a(32),m=a(35),p=a(104),d=a.n(p),h=function(t){return r.a.createElement("div",{className:d.a.wrapper},t.children)},g=a(52),b=a.n(g),_=function(t){return r.a.createElement("li",{className:b.a.listItem}," ",r.a.createElement("a",{className:b.a.link,href:"#"}," ",t.children," ")," ")},f=a(53),y=a.n(f),k=function(t){var e=[y.a.navigationList];return t.mobileNavItemsShouldShow||e.push(y.a.displayNone),r.a.createElement("ul",{className:e.join(" ")},r.a.createElement(_,null," Home "),r.a.createElement(_,null," Order History "))},v=a(20),S=a.n(v),E=function(t){return r.a.createElement(h,null,r.a.createElement("nav",{className:S.a.navigation},r.a.createElement("h1",{className:S.a.brand}," ",r.a.createElement("span",{className:S.a.hilight},"Shop"),"Prime "),r.a.createElement("i",{onClick:t.toggleMobileNavItems,className:["fas fa-bars",S.a.hamburger].join(" ")}),r.a.createElement(k,{mobileNavItemsShouldShow:t.mobileNavItemsShouldShow})))},N=a(54),j=a.n(N),w=function(t){var e=t.shouldBeVisible?{visibility:"visible"}:{visibility:"hidden"},a=[j.a.backdrop,j.a[t.opacity]];return r.a.createElement("div",{style:e,className:a.join(" "),onClick:t.clicked})},I=a(55),C=a.n(I),x=function(t){function e(){var t,a;Object(c.a)(this,e);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={mobileNavItemsShouldShow:!1},a.toggleMobileNavItems=function(){var t=a.state.mobileNavItemsShouldShow;a.setState({mobileNavItemsShouldShow:!t})},a}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("header",{className:C.a.header},r.a.createElement(E,{mobileNavItemsShouldShow:this.state.mobileNavItemsShouldShow,toggleMobileNavItems:this.toggleMobileNavItems})),r.a.createElement(w,{shouldBeVisible:this.state.mobileNavItemsShouldShow,clicked:this.toggleMobileNavItems,opacity:"highOpacity"}),r.a.createElement("main",{className:C.a.mainContent}," ",this.props.children," "))}}]),e}(n.Component),O=a(105),T=a.n(O),B=a(56),W=a.n(B),P=function(t){var e="".concat(W.a.button," ").concat(W.a[t.buttonType]);return r.a.createElement("button",{className:e,onClick:t.clicked}," ",t.children)},J=a(13),M=a.n(J),D=a(117),F=function(t){var e=D("./".concat(t.imageName));return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:M.a.imageWrapper},r.a.createElement("img",{className:M.a.image,src:e})),r.a.createElement("div",{className:M.a.productDetails},r.a.createElement("p",{className:M.a.productDetail}," ",t.description," "),r.a.createElement("p",{className:M.a.price}," $",t.price," "),r.a.createElement(P,{buttonType:"button--primary",clicked:t.addItemToCart}," Add To Cart")))},H=(a(130),function(t){var e=function(t){return t.products.map(function(e,a){return r.a.createElement("div",{key:e.id},r.a.createElement(F,{addItemToCart:function(e){return t.addItemToCart(a)},imageName:e.imageName,description:e.description,price:e.price}))})}(t);return r.a.createElement("div",{className:T.a.grid},e)});var A=a(106),U=a.n(A),V=function(t){return r.a.createElement("h1",{className:U.a.sectionTitle}," ",t.children," ")},G=function(){function t(){Object(c.a)(this,t),this.products=[L(1,"blackSuit.jpg","Fine black suit",99.99),L(2,"blackSuitJacket.jpg","Black suit jacket",49.99),L(3,"blueShirt.jpg","Blue long sleeve shirt",19.99),L(4,"blueSuit.jpg","Newton blue suit",99.99),L(5,"crewWhite.jpg","Classic white crew t-shirt",9.99),L(6,"greyCollarShirt.jpg","Grey Button Down shirt",29.99),L(7,"blackSuitWithBowtie.jpg","Charcoal Suit",99.99),L(8,"greySuitJacket.jpg","Grey Suit Jacket",49.99),L(9,"leatherJacket.jpg","Brown Leather Jacket",79.99),L(10,"rainZipUp.jpg","Waterproof zipup",39.99),L(11,"simpsonsShirt.jpg","Fun Simpsons Shirt",9.99),L(12,"vest.jpg","Grey Vest",29.99)]}return Object(l.a)(t,[{key:"getProduct",value:function(t){return this.products[t]}}]),t}();function L(t,e,a,n){return{id:t,imageName:e,description:a,price:n}}var q=function(){function t(){Object(c.a)(this,t),this.cartItems=[]}return Object(l.a)(t,[{key:"add",value:function(t){var e=this.cartItems.findIndex(function(e){return e.item.id===t.id});if(-1===e){var a={item:t,quantity:1};this.cartItems.push(a)}else this.cartItems[e].quantity++}},{key:"getTotalPrice",value:function(){return this.cartItems.reduce(function(t,e){return t+e.item.price*e.quantity},0)}},{key:"getCartItems",value:function(){return JSON.parse(JSON.stringify(this.cartItems))}},{key:"clearAll",value:function(){this.cartItems=[]}}]),t}(),R=a(21),Z=a.n(R),$=function(t){var e=[Z.a.modal];return t.shouldBeVisible&&e.push(Z.a.modalActive),r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:e.join(" ")},r.a.createElement("div",{className:Z.a.exitIconWrapper},r.a.createElement("i",{onClick:t.toggleModal,className:"fas fa-times ".concat(Z.a.exitIcon)})),t.children),r.a.createElement(w,{clicked:t.toggleModal,shouldBeVisible:t.shouldBeVisible,opacity:"lowOpacity"}))},z=a(57),K=a.n(z),Q=a(58),X=a.n(Q),Y=function(t){return r.a.createElement("table",{className:X.a.table},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{className:X.a.itemHeader},"Item"),r.a.createElement("th",null,"Quantity"))),r.a.createElement("tbody",null,t.itemsToPurchase.map(function(t){return r.a.createElement("tr",{key:t.item.id},r.a.createElement("td",null,t.item.description),r.a.createElement("td",null,t.quantity))})))};var tt=function(t){return r.a.createElement(n.Fragment,null,r.a.createElement(Y,{itemsToPurchase:t.itemsToPurchase}),r.a.createElement("p",{className:K.a.totalPrice},"Total: $",t.totalPrice),r.a.createElement("div",{className:K.a.buttonWrapper},r.a.createElement(P,{clicked:t.payNow,buttonType:"button--primary"}," Pay Now"),r.a.createElement(P,{clicked:t.continueShopping,buttonType:"button--primary"}," Continue Shopping")))},et=a(33),at=(a(99),a(107)),nt=a(108),rt=a.n(nt),it=function(t){function e(){var t,a;Object(c.a)(this,e);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).productData=new G,a.cartItems=new q,a.state={itemsToPurchase:a.cartItems.getCartItems(),checkoutButtonWasClicked:!1,payNowButtonWasClicked:!1},a.addItemToCartHandler=function(t){var e=a.productData.getProduct(t);a.cartItems.add(e),a.displayToast(),a.setState({itemsToPurchase:a.cartItems.getCartItems(),itemAddedToCart:!0})},a.toggleOrderSummary=function(t){var e=a.state.checkoutButtonWasClicked;a.setState({checkoutButtonWasClicked:!e})},a.toggleOrderConfirmationHandler=function(t){a.state.checkoutButtonWasClicked&&a.toggleOrderSummary();var e=a.state.payNowButtonWasClicked;a.setState({payNowButtonWasClicked:!e})},a}return Object(m.a)(e,t),Object(l.a)(e,[{key:"displayToast",value:function(){Object(et.a)("Item added to cart. Checkout at the bottom of the page",{position:"top-center",autoClose:3e3,className:Object(at.css)({color:"#000",borderRadius:"5px",lineHeight:1.6})})}},{key:"render",value:function(){var t=this.cartItems.getTotalPrice().toFixed(2);this.state.payNowButtonWasClicked&&this.cartItems.clearAll();var e=0===this.cartItems.getCartItems().length?"button--disabled":"button--checkout",a=t<=0?"Thank you for your payment":"Thank you for your payment of $".concat(t);return r.a.createElement(h,null,r.a.createElement($,{toggleModal:this.toggleOrderSummary,shouldBeVisible:this.state.checkoutButtonWasClicked},r.a.createElement(tt,{itemsToPurchase:this.state.itemsToPurchase,totalPrice:t,continueShopping:this.toggleOrderSummary,payNow:this.toggleOrderConfirmationHandler})),r.a.createElement($,{toggleModal:this.toggleOrderConfirmationHandler,shouldBeVisible:this.state.payNowButtonWasClicked},r.a.createElement("p",null," ",a," ")),r.a.createElement(V,null," Shop the latest trends "),r.a.createElement(H,{products:this.productData.products,addItemToCart:this.addItemToCartHandler}),r.a.createElement("div",{className:rt.a.checkoutButtonWrapper},r.a.createElement(P,{clicked:this.toggleOrderSummary,buttonType:e},"Checkout")))}}]),e}(n.Component);et.a.configure();var ot=function(){return r.a.createElement(x,null,r.a.createElement(it,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ot,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},52:function(t,e,a){t.exports={link:"NavigationItem_link__2RCzR"}},53:function(t,e,a){t.exports={navigationList:"NavigationItems_navigationList__26Y05",displayNone:"NavigationItems_displayNone__17oY3"}},54:function(t,e,a){t.exports={backdrop:"Backdrop_backdrop__2jpx1",highOpacity:"Backdrop_highOpacity__2-ddN",lowOpacity:"Backdrop_lowOpacity__CgWHi"}},55:function(t,e,a){t.exports={header:"Layout_header__19U8b"}},56:function(t,e,a){t.exports={button:"Button_button__3QF_k","button--primary":"Button_button--primary__7Sexj","button--checkout":"Button_button--checkout__1t_Kh","button--disabled":"Button_button--disabled__35uF0"}},57:function(t,e,a){t.exports={totalPrice:"OrderSummary_totalPrice__3iuXj",buttonWrapper:"OrderSummary_buttonWrapper__2o_c_"}},58:function(t,e,a){t.exports={table:"SummaryTable_table__n5hEX",itemHeader:"SummaryTable_itemHeader__2r8cD"}}},[[111,1,2]]]);
//# sourceMappingURL=main.67743247.chunk.js.map
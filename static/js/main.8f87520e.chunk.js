(this["webpackJsonpreact-map-practice"]=this["webpackJsonpreact-map-practice"]||[]).push([[0],{16:function(e,t,n){e.exports={loader:"Spinner_loader__1q8Pz",load4:"Spinner_load4__2piAH"}},17:function(e,t,n){e.exports={"content-wrapper":"Content_content-wrapper__vJkzd"}},18:function(e,t,n){e.exports={map:"Map_map__jcBYS"}},2:function(e,t,n){e.exports={"form-wrapper":"Input_form-wrapper__cfWbz",form__content:"Input_form__content__1K9p9",form__title:"Input_form__title__2zlYF","form__manage-controls":"Input_form__manage-controls__14IDi",form__button:"Input_form__button__2AMYS",form__para:"Input_form__para__JWE1x",form__input:"Input_form__input__3byUv",invalid:"Input_invalid__24w0K",hidden:"Input_hidden__3B1Cp","error-wrapper":"Input_error-wrapper__2Gd0Z","error-para":"Input_error-para__3HFkZ","error-btn":"Input_error-btn__27kE3"}},23:function(e,t,n){},24:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r,a=n(10),c=n.n(a),s=(n(23),n(24),n(4)),i=s.c,o=n(5),l=n.n(o),d=n(8),u=n(3),p=n(6),b=Object(p.b)({name:"adress",initialState:{places:[],draggedPlaceID:null},reducers:{sortPlaces:function(e){e.places.length>1&&e.places.sort((function(e,t){return e.id-t.id}))},addPlace:function(e,t){e.places.push(t.payload),localStorage.setItem("places",JSON.stringify(e.places))},removePlace:function(e,t){e.places=e.places.filter((function(e){return e.id!==t.payload}));var n=localStorage.getItem("places");if(n){var r=JSON.parse(n);if(r.length>0){var a=r.filter((function(e){return e.id!==t.payload}));localStorage.setItem("places",JSON.stringify(a))}}},setCurrentDraggedPlace:function(e,t){e.draggedPlaceID=t.payload},changePlaceId:function(e,t){var n=t.payload;if(e.draggedPlaceID&&e.draggedPlaceID!==n){var r=e.places.find((function(t){return t.id===e.draggedPlaceID})),a=e.places.find((function(e){return e.id===n}));r&&a&&(r.id=n,a.id=e.draggedPlaceID)}localStorage.setItem("places",JSON.stringify(e.places))}}}),g=b.reducer,f=b.actions,j=Object(d.a)({},f),m=function(){var e=Object(s.b)();return Object(u.b)(j,e)},h=n(1),v=function(){var e=i((function(e){return e.adress})).places,t=m(),n=t.removePlace,r=t.setCurrentDraggedPlace,a=t.sortPlaces,c=t.changePlaceId;function s(e){n(e)}function o(e){e.currentTarget.style.backgroundColor="#ffffff"}function d(e){e.currentTarget.style.visibility="visible",e.currentTarget.style.color="#000000",e.currentTarget.style.backgroundColor="#ffffff"}function u(e){e.preventDefault(),e.currentTarget.style.backgroundColor="#e6e6e6"}return a(),Object(h.jsxs)(h.Fragment,{children:[0===e.length&&Object(h.jsx)("p",{className:l.a["empty-text"],children:"\u041c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0435\u0449\u0451 \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b..."}),e.length>0&&Object(h.jsxs)("ul",{className:l.a["adress-list"],children:[Object(h.jsx)("h2",{className:l.a["heading-secondary"],children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0430\u0434\u0440\u0435\u0441\u0430:"}),e.map((function(e,t){return Object(h.jsxs)("li",{className:l.a["list-item"],draggable:!0,onDragStart:function(t){return function(e,t){var n=e.currentTarget.style;setTimeout((function(){n.visibility="hidden"}),0),r(t)}(t,e.id)},onDragLeave:o,onDragEnd:d,onDragOver:u,onDrop:function(t){return function(e,t){e.preventDefault(),e.currentTarget.style.backgroundColor="#ffffff",c(t),r(null)}(t,e.id)},children:[Object(h.jsxs)("div",{children:[Object(h.jsxs)("span",{children:[t+1,". "]}),e.adress.replaceAll("+"," ")]}),Object(h.jsx)("img",{onMouseDown:s.bind(null,e.id),onKeyDown:function(t){return function(e,t){"Enter"===e.key&&n(t)}(t,e.id)},tabIndex:0,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA1IDc5LjE2NDU5MCwgMjAyMC8xMi8wOS0xMTo1Nzo0NCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBDREQyRUQzNDE5QTExRUNBQzJEOTM0OTBGQjAxODRCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBDREQyRUQ0NDE5QTExRUNBQzJEOTM0OTBGQjAxODRCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MENERDJFRDE0MTlBMTFFQ0FDMkQ5MzQ5MEZCMDE4NEIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MENERDJFRDI0MTlBMTFFQ0FDMkQ5MzQ5MEZCMDE4NEIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz58maYJAAAChklEQVR42mL8//8/w3AATAzDBYBiBB2TAeaAjCITz6aKm6nkkZsUeOQmNTzCQqWI/YrEPgXELwmoFwdiMyx6yQbU8sgvJHYsEN8ioF4NKSZ+UcMBjNiSEiMjYx2QciLBHGMg5oGyrwDxWwLqhYFYB8r+AsRnSbBrL9DNzcR65P8gL6AYh23xSyiP3APi0kHi1m4gViK1HoEVjacHUaCfhrkLm5sJ5REQ/XeQeIQZ5DRceYRQ0mKkYhE9IHlkJxA7Qz3CjCT+ZwDd9xeaQvaSUo+wAikRINaFeooBWlub0tEzLNB8IQ7luwPxZSB+A3Tzb2JjBKTwORDzo4XIYzrHCHL+fAR1E1nNeK4BzC8ssMyNxS1U74+ADJ8BxMeA2ByLvCwQbwHizUAsg0XeAoiPA/F0IOakZX/ECKlOeYYlRoKQ5DdhMb4JSb4Ri/xmJPkgLDHyDEneCJ+bKY0RAbSGIDoQIkFeYCC7un/RCgh08IdA0f0bh1kjt88+6pFRj4x6ZNQjox4Z9cioR0Y9MuqRUY+MemTUI6MeGWCPIOtnJkOemVpuodQjyA5hxSLPSsAjhOSp5hHkATJsI/P7gfgBlL0Ii/41QPwTitdikV8Mpe8D8T40OdhYLza3YAIC41oGDIhxJdDYL7aRRkkg1sNjBWjiUxWPPEivBBZxNqidMPsN8LqZgEcUGCCTlf+hoepBx/zrDbUTZPcnIJanxCMs0OQBC5XbQOxAB0/YQO2C2bsaOQ+RMmOFzLVlgMxJwDLmbyj/N408AUpS9kDMAeWD5uFBU+VHkT1Cah6BgQIg/sdA/jINcjHIznyi3EzCWpQwBsioO708AbIrhNgCinF0vdYgAwABBgDYiPigg4vglgAAAABJRU5ErkJggg==",alt:"Delete adress",className:l.a["delete-icon"]})]},e.id)}))]})]})},_=n(13),A=n.n(_),O=n(15),I=n(7),x=n(0);!function(e){e.CHANGE="CHANGE",e.BLUR="BLUR",e.RESET="RESET"}(r||(r={}));var y="bbe0daff-f71f-462c-a067-4eaa9c595fd8",N=function(e){var t=Object(x.useState)(null),n=Object(I.a)(t,2),r=n[0],a=n[1],c=Object(x.useState)(!1),s=Object(I.a)(c,2),i=s[0],o=s[1];function l(){return(l=Object(O.a)(A.a.mark((function t(n){var r,c,s;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o(!0),a(null),t.prev=2,t.next=5,fetch("https://geocode-maps.yandex.ru/1.x/?apikey=".concat(y,"&format=json&geocode=").concat(n));case 5:return r=t.sent,t.next=8,r.json();case 8:c=t.sent,s=c.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos,e(s,n),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(2),a("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e \u043e\u0431\u0440\u0430\u0437\u0446\u0443"),console.log(t.t0);case 17:return t.prev=17,o(!1),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[2,13,17,20]])})))).apply(this,arguments)}return{sendRequest:function(e){return l.apply(this,arguments)},error:r,isLoading:i,resetError:function(){a(null),o(!1)}}},E=function(e){var t={value:"",isTouched:!1};var n=Object(x.useReducer)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case r.CHANGE:return{value:n.payload,isTouched:e.isTouched};case r.BLUR:return{value:e.value,isTouched:!0};case r.RESET:return{value:"",isTouched:!1};default:return t}}),t),a=Object(I.a)(n,2),c=a[0],s=a[1],i=e(c.value),o=!i&&c.isTouched;return{value:c.value,valueIsValid:i,hasError:o,valueChangeHandler:function(e){s({type:r.CHANGE,payload:e.target.value})},valueBlurHandler:function(){s({type:r.BLUR})},reset:function(){s({type:r.RESET})}}},D=n(16),C=n.n(D),R=function(){return Object(h.jsx)("div",{className:C.a.loader,children:"Loading..."})},B=n(2),M=n.n(B);function S(e){return e.length>0}var k=function(){var e=m().addPlace,t=E(S),n=t.value,r=t.hasError,a=t.valueIsValid,c=t.valueChangeHandler,s=t.valueBlurHandler,i=t.reset;var o=N((function(t,n){var r=t.split(" "),a={id:Date.now(),adress:n,lat:Number(r[0]),lng:Number(r[1])};e(a)})),l=o.error,d=o.isLoading,u=o.sendRequest,p=o.resetError;function b(){var e=n.replaceAll(" ","+");u(e),function(){var e=document.querySelector("#adress");e&&(e.blur(),i())}()}var g=r?M.a.invalid:"",f=r?M.a.form__para:M.a.hidden;return Object(h.jsxs)("div",{className:M.a["form-wrapper"],children:[d&&Object(h.jsx)(R,{}),!d&&l&&Object(h.jsxs)("div",{className:M.a["error-wrapper"],children:[Object(h.jsx)("p",{className:M.a["error-para"],children:l}),Object(h.jsx)("button",{onClick:p,className:M.a["error-btn"],children:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c"})]}),!d&&!l&&Object(h.jsxs)("div",{className:M.a.form__content,children:[Object(h.jsx)("h2",{className:M.a.form__title,children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441:"}),Object(h.jsxs)("div",{className:M.a["form__manage-controls"],children:[Object(h.jsxs)("div",{className:M.a.form__input,children:[Object(h.jsx)("label",{htmlFor:"adress"}),Object(h.jsx)("input",{className:g,type:"text",name:"adress",id:"adress",value:n,onChange:c,onBlur:s,onKeyDown:function(e){"Enter"===e.key&&a&&b()},placeholder:"\u0433\u043e\u0440\u043e\u0434 \u041c\u043e\u0441\u043a\u0432\u0430, \u0443\u043b\u0438\u0446\u0430 \u041b\u0435\u043d\u0438\u043d\u0430, \u0434\u043e\u043c 2"})]}),Object(h.jsx)("button",{className:M.a.form__button,onClick:function(){a&&b()},children:"\u0418\u0441\u043a\u0430\u0442\u044c"})]}),Object(h.jsx)("p",{className:f,children:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441"})]})]})},w=n(17),T=n.n(w),Y=function(){return Object(h.jsxs)("div",{className:T.a["content-wrapper"],children:[Object(h.jsx)(k,{}),Object(h.jsx)(v,{})]})},L=n(9),P=n(18),Q=n.n(P),J=function(){var e=i((function(e){return e.adress})).places,t={center:[55.752,37.615],zoom:10};if(e.length>0){var n=e[e.length-1];t={center:[n.lng,n.lat],zoom:10}}return Object(h.jsx)(L.c,{children:Object(h.jsx)("div",{id:"map",className:Q.a.map,children:Object(h.jsxs)(L.b,{state:t,style:{width:"100%",height:"100%"},children:[e.length>0&&e.map((function(e,t){return Object(h.jsx)(L.a,{geometry:{type:"Point",coordinates:[e.lng,e.lat]},properties:{balloonContentBody:['<div style="text-align: center">\n                      '.concat(t+1," - ").concat(e.adress.replaceAll("+"," "),"\n                    </div>")]},options:{draggable:!1},modules:["geoObject.addon.balloon","geoObject.addon.hint"]},e.id)})),e.length>1&&e.map((function(t,n){if(n>0){var r=[e[n-1].lng,e[n-1].lat],a=[e[n].lng,e[n].lat];return Object(h.jsx)(L.a,{geometry:{type:"LineString",coordinates:[r,a]},properties:{hintContent:t.adress},options:{strokeColor:"#000000",strokeWidth:4}},t.id)}return null}))]})})})};var z=function(){var e=m().addPlace,t=localStorage.getItem("places");if(t){var n=JSON.parse(t);t.length>0&&n.forEach((function(t){return e(t)}))}return Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)("h1",{className:"app__heading-primary",children:"Mapty Application"}),Object(h.jsxs)("div",{className:"app__main-wrapper main-wrapper",children:[Object(h.jsx)(Y,{}),Object(h.jsx)(J,{})]})]})},G=Object(p.a)({reducer:{adress:g}});c.a.render(Object(h.jsx)(s.a,{store:G,children:Object(h.jsx)(z,{})}),document.getElementById("root"))},5:function(e,t,n){e.exports={"adress-list":"AdressList_adress-list__2zZKf","list-item":"AdressList_list-item__2Kd8j","empty-text":"AdressList_empty-text__12o1F","delete-icon":"AdressList_delete-icon__2hb98","heading-secondary":"AdressList_heading-secondary__2Pp6j"}}},[[34,1,2]]]);
//# sourceMappingURL=main.8f87520e.chunk.js.map
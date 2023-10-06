(function(){"use strict";var e={9290:function(e,t,a){var n=a(144),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("nav-component"),t("b-container",[t("transition",{attrs:{name:"fade"}},[t("router-view")],1)],1)],1)},s=[],o=function(){var e=this,t=e._self._c;return t("nav",{staticClass:"text-center"},[t("router-link",{attrs:{to:"/"}},[e._v("Имя")]),e._v(" | "),t("router-link",{attrs:{to:"/race"}},[e._v("Раса")]),e._v(" | "),t("router-link",{attrs:{to:"/life"}},[e._v("Жизненный путь")]),e._v(" | "),t("router-link",{attrs:{to:"/profession"}},[e._v("Профессия")]),e._v(" | "),t("router-link",{attrs:{to:"/stats"}},[e._v("Параметры")]),e._v(" | "),t("router-link",{attrs:{to:"/skills"}},[e._v("Основные навыки")]),e._v(" | "),t("router-link",{attrs:{to:"/capital"}},[e._v("Начальный капитал")]),e._v(" | "),t("router-link",{attrs:{to:"/shop"}},[e._v("Магазин")]),e._v(" | "),t("router-link",{attrs:{to:"/result"}},[e._v("Результат")])],1)},l=[],i={},c=i,u=a(1001),p=(0,u.Z)(c,o,l,!1,null,null,null),m=p.exports,h={components:{NavComponent:m}},f=h,v=(0,u.Z)(f,r,s,!1,null,null,null),d=v.exports,g=a(5205);(0,g.z)("/the-witcher-trpg-charlist/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var b=a(8345),_=function(){var e=this,t=e._self._c;return t("div",[t("b-card",{staticClass:"mt-5 shadow",attrs:{title:"Имя персонажа"}},[t("b-form",[t("b-form-group",{staticClass:"mt-3",attrs:{label:"Ваше реальное имя","label-for":"player-name"}},[t("b-form-input",{attrs:{id:"player-name",placeholder:"Введите ваше имя",state:e.playerNameState,"aria-describedby":"player-name-feedback"},model:{value:e.playerName,callback:function(t){e.playerName=t},expression:"playerName"}}),t("b-form-invalid-feedback",{attrs:{id:"player-name-feedback"}},[e._v(" Имя должно содержать хотя бы 2 символа ")])],1),t("b-form-group",{staticClass:"mt-3",attrs:{label:"Имя персонажа","label-for":"name",description:"Поле может содержать имя и фамилию"}},[t("b-form-input",{attrs:{id:"name",placeholder:"Введите имя персонажа",state:e.nameState,"aria-describedby":"name-feedback"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),t("b-form-invalid-feedback",{attrs:{id:"name-feedback"}},[e._v(" Имя персонажа должно содержать хотя бы 2 символа ")])],1),t("div",{staticClass:"row mt-3"},[t("div",{staticClass:"col-sm-12 col-md-6"},[t("b-form-group",{attrs:{label:"Возраст персонажа","label-for":"age"}},[t("b-form-input",{attrs:{id:"age",type:"number",placeholder:"Введите возраст вашего персонажа",state:e.ageState,"aria-describedby":"age-feedback"},model:{value:e.age,callback:function(t){e.age=t},expression:"age"}}),t("b-form-invalid-feedback",{attrs:{id:"age-feedback"}},[e._v(" Возраст персонажа должен быть больше нуля ")])],1)],1),t("div",{staticClass:"col-sm-12 col-md-6"},[t("b-form-group",{attrs:{label:"Пол персонажа","label-for":"sex"}},[t("b-form-select",{attrs:{id:"sex",options:e.sexOptions,plain:""},model:{value:e.sex,callback:function(t){e.sex=t},expression:"sex"}})],1)],1)])],1)],1),t("pagination-component",{staticClass:"mt-4",attrs:{next:"/race","can-next":e.dataState},on:{goNext:e.save}})],1)},x=[],y=function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-flex justify-content-center"},[t("div",[t("b-button-group",[e.prev?t("b-button",{attrs:{disabled:!e.canPrev},on:{click:e.goPrev}},[t("b-icon",{attrs:{icon:"arrow-left-square-fill"}})],1):e._e(),e.next?t("b-button",{attrs:{disabled:!e.canNext},on:{click:e.goNext}},[t("b-icon",{attrs:{icon:"arrow-right-square-fill"}})],1):e._e()],1)],1)])},k=[],w=(a(7658),{props:{prev:{type:String,default:void 0},next:{type:String,default:void 0},canNext:{type:Boolean,default:!0},canPrev:{type:Boolean,default:!0}},methods:{goPrev(){this.$emit("goPrev"),this.$router.push(this.prev)},goNext(){this.$emit("goNext"),this.$router.push(this.next)}}}),C=w,N=(0,u.Z)(C,y,k,!1,null,null,null),S=N.exports,O=a(629),P={components:{PaginationComponent:S},data(){return{playerName:null,name:null,age:null,sex:null,sexOptions:null}},computed:{playerNameState(){return null!==this.playerName&&this.playerName.length>=2},nameState(){return null!==this.name&&this.name.length>=2},ageState(){return null!==this.age&&this.age>0},dataState(){return this.playerNameState&&this.nameState&&this.ageState}},methods:{save(){var e={playerName:this.playerName,name:this.name,age:this.age,sex:this.sex};this.saveState(e)},...(0,O.OI)({saveState:"saveNameViewData"})},beforeRouteLeave(e,t,a){this.dataState?(this.save(),a()):alert("Прежде чем перейти на другую  страницу необходимо заполнить все необходимые поля")},mounted(){var e=this.$store.state.charlist.common,t=this.$store.state.other;console.log(e),this.playerName=e.playerName,this.name=e.name,this.age=e.age,this.sex=e.sex,this.sexOptions=t.sexOptions}},F=P,Z=(0,u.Z)(F,_,x,!1,null,null,null),$=Z.exports,j=function(){var e=this,t=e._self._c;return t("div",[t("b-card",{staticClass:"mt-5 shadow",attrs:{title:"Раса"}},[t("b-form",[t("b-form-group",{attrs:{label:"Раса персонажа","label-for":"race"}},[t("b-form-select",{attrs:{id:"race",options:e.raceOptions,plain:""},model:{value:e.race,callback:function(t){e.race=t},expression:"race"}})],1)],1),t("div",{staticClass:"mt-4"},[t("h4",[e._v("Черты расы")]),t("div",{staticClass:"row"},e._l(e.features,(function(a,n){return t("div",{key:n,staticClass:"col-sm-12 col-md-6 col-lg my-1"},[t("b-card",{staticClass:"h-100",attrs:{title:a.name}},[t("p",[e._v(e._s(a.description))])])],1)})),0)])],1),t("pagination-component",{staticClass:"mt-4",attrs:{prev:"/",next:"/life"},on:{goPrev:e.save,goNext:e.save}})],1)},q=[],D={components:{PaginationComponent:S},data(){return{race:null,raceOptions:null}},computed:{features(){return"Человек"===this.race?this.getHumanFeatures():"Эльф"===this.race?this.getElfFeatures():"Краснолюд"===this.race?this.getDwarfFeatures():"Ведьмак"===this.race?this.getWitcherFeatures():[]}},methods:{getHumanFeatures(){return this.$store.state.other.humanFeatures},getElfFeatures(){return this.$store.state.other.elfFeatures},getDwarfFeatures(){return this.$store.state.other.dwarfFeatures},getWitcherFeatures(){return this.$store.state.other.witcherFeatures},save(){var e={race:this.race,features:this.features};this.saveState(e)},...(0,O.OI)({saveState:"saveRaceViewData"})},beforeRouteLeave(e,t,a){this.save(),a()},mounted(){var e=this.$store.state.charlist.common,t=this.$store.state.other;this.race=e.race,this.raceOptions=t.raceOptions}},R=D,T=(0,u.Z)(R,j,q,!1,null,null,null),B=T.exports,E=function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("Жизненный путь:")]),t("pagination-component",{staticClass:"mt-4",attrs:{prev:"/race",next:"/profession"}})],1)},V=[],A={components:{PaginationComponent:S}},I=A,H=(0,u.Z)(I,E,V,!1,null,null,null),L=H.exports,M=function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("Профессия:")]),t("pagination-component",{staticClass:"mt-4",attrs:{prev:"/life",next:"/stats"}})],1)},W=[],X={components:{PaginationComponent:S}},z=X,G=(0,u.Z)(z,M,W,!1,null,null,null),J=G.exports,K=function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("Параметры:")]),t("pagination-component",{staticClass:"mt-4",attrs:{prev:"/profession",next:"/skills"}})],1)},Q=[],U={components:{PaginationComponent:S}},Y=U,ee=(0,u.Z)(Y,K,Q,!1,null,null,null),te=ee.exports,ae=function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("Основные навыки:")]),t("pagination-component",{staticClass:"mt-4",attrs:{prev:"/stats",next:"/capital"}})],1)},ne=[],re={components:{PaginationComponent:S}},se=re,oe=(0,u.Z)(se,ae,ne,!1,null,null,null),le=oe.exports,ie=function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("Начальный капитал:")]),t("pagination-component",{staticClass:"mt-4",attrs:{prev:"/skills",next:"/shop"}})],1)},ce=[],ue={components:{PaginationComponent:S}},pe=ue,me=(0,u.Z)(pe,ie,ce,!1,null,null,null),he=me.exports,fe=function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("Начальный капитал:")]),t("pagination-component",{staticClass:"mt-4",attrs:{prev:"/capital",next:"/result"}})],1)},ve=[],de={components:{PaginationComponent:S}},ge=de,be=(0,u.Z)(ge,fe,ve,!1,null,null,null),_e=be.exports,xe=function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("Result")]),t("info-component"),t("pagination-component",{staticClass:"mt-4",attrs:{prev:"/shop"}})],1)},ye=[],ke=function(){var e=this,t=e._self._c;return t("div",[e._v(e._s(e.charlist))])},we=[],Ce={computed:{charlist(){return this.$store.state.charlist}}},Ne=Ce,Se=(0,u.Z)(Ne,ke,we,!1,null,null,null),Oe=Se.exports,Pe={components:{InfoComponent:Oe,PaginationComponent:S}},Fe=Pe,Ze=(0,u.Z)(Fe,xe,ye,!1,null,null,null),$e=Ze.exports;n["default"].use(b.ZP);const je=[{path:"/",name:"name",component:$},{path:"/race",name:"race",component:B},{path:"/life",name:"life",component:L},{path:"/profession",name:"profession",component:J},{path:"/stats",name:"stats",component:te},{path:"/skills",name:"skills",component:le},{path:"/capital",name:"capital",component:he},{path:"/shop",name:"shop",component:_e},{path:"/result",name:"result",component:$e}],qe=new b.ZP({mode:"history",base:"/the-witcher-trpg-charlist/",routes:je});var De=qe;n["default"].use(O.ZP);var Re=new O.ZP.Store({state:{charlist:{common:{playerName:null,name:null,race:"Человек",sex:"Мужчина",age:null},socialStatus:{north:"equal",nilfgaard:"equal",skellige:"equal",dolBlatanna:"equal",mahakam:"equal"},features:[],stats:{intelligence:{value:0},reaction:{value:0},agility:{value:0},physique:{value:0},speed:{value:0},empathy:{value:0},craft:{value:0},will:{value:0},luck:{value:0}}},other:{sexOptions:["Мужчина","Женщина"],raceOptions:["Человек","Эльф","Краснолюд","Ведьмак"],humanFeatures:[{name:"Доверие",description:"В мире, где нелюдям не доверяют, людям доверять куда проще. У людей есть врожденный бонус +1 к проверкам Харизмы, Соблазнения и Убеждения против других людей.",bonus:null},{name:"Изобретательность",description:"Люди умны и зачастую находят великолепные решения сложных проблем. Люди получают врожденный бонус +1 к Дедукции.",bonus:null},{name:"Упрямство",description:"Одно из величайших преимуществ человеческой расы - нежелание отступать даже в опасной ситуации. Они могут собраться с духом и перебросить неудачный результат проверки Сопротивление убеждению или Храбрости, но не более 3 раз за игровую партию. В таком случае из двух результатов выбирают наивысший, но если результат все равно провальный, то вновь использовать Упрямство нельзя.",bonus:null}],elfFeatures:[{name:"Чувство прекрасного",description:"У эльфов есть врождённая творческая жилка и развитое чувство прекрасного. Эльфы получают врождённый бонус +1 к Искусству.",bonus:null},{name:"Стрелок",description:"Благодаря давним традициям и постоянным тренировкам эльфы - одни из лучших лучников в мире. Эльфы получают врождённый бонус +2 к Стрельбе из лука и способны выхватывать и натягивать лук, не тратя на это действие.",bonus:null},{name:"Единение с природой",description:"Эльфы тесно связаны с природой. Они не тревожат животных - любой зверь, встреченный эльфом, будет относиться к нему дружелюбно и не нападёт без провокации. Эльфы также способны автоматически находить любые обычные и повсеместные субстанции растительного происхождения, если искомые растения обитают в природе на данной территории.",bonus:null}],dwarfFeatures:[{name:"Закалённый",description:"У краснолюдов весьма крепкая кожа, имеющая врождённую прочность 2. Данная величина прибавляется к прочности любой брони и не может быть понижена разрушающим уроном.",bonus:null},{name:"Силач",description:"Благодаря невысокому росту и склонности к тяжёлой работе, требующей физических усилий, краснолюды получают +1 к Силе и повышают своё значение Переносимого веса на 25.",bonus:null},{name:"Намётанный глаз",description:"Краснолюды - прекрасные оценщики, обладающие вниманием к деталям, а потому обмануть их весьма трудно. Краснолюды получают врождённый бонус +1 к Торговле.",bonus:null}],witcherFeatures:[{name:"Обострённые чувства",description:"Благодаря обострённым чувством ведьмаки не получают штрафов при слабом свете и получают врождённый бонус +1 к Вниманию, а также возможность выслеживания по запаху.",bonus:null},{name:"Стойкость мутанта",description:"После всех мутаций ведьмаки становятся невосприимчивы к болезням и способны использовать мутагены.",bonus:null},{name:"Притупление эмоций",description:"Из-за пережитых страданий и мутаций эмоции у ведьмаков притупляются. Ведьмакам не нужно совершать проверки Храбрости против Запугивания, но они получают штраф -4 к Эмпатии. При этом значение Эмпатии ведьмака не может быть ниже 1. (Из-за Притупления эмоций значение Эмпатии у ведьмака не может быть больше 6)",bonus:null},{name:"Молниеносная реакция",description:"Благодаря интенсивным тренировкам и мутациям ведьмаки куда быстрее и проворнее обычных людей. Они получают постоянный бонус +1 к Реакции и Ловкости, позволяющий сделать эти значения больше 10",bonus:null}]}},getters:{},mutations:{saveNameViewData(e,t){e.charlist.common.playerName=t.playerName,e.charlist.common.name=t.name,e.charlist.common.age=t.age,e.charlist.common.sex=t.sex},saveRaceViewData(e,t){e.charlist.common.race=t.race,e.charlist.features=t.features}},actions:{},modules:{}}),Te=a(9657),Be=a(3017);a(7024);n["default"].use(Te.XG7),n["default"].use(Be.X),n["default"].config.productionTip=!1,new n["default"]({router:De,store:Re,render:e=>e(d)}).$mount("#app")}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,n,r,s){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],s=e[u][2];for(var l=!0,i=0;i<n.length;i++)(!1&s||o>=s)&&Object.keys(a.O).every((function(e){return a.O[e](n[i])}))?n.splice(i--,1):(l=!1,s<o&&(o=s));if(l){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,r,s]}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,s,o=n[0],l=n[1],i=n[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(i)var u=i(a)}for(t&&t(n);c<o.length;c++)s=o[c],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(u)},n=self["webpackChunkthe_witcher_trpg_charlist"]=self["webpackChunkthe_witcher_trpg_charlist"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(9290)}));n=a.O(n)})();
//# sourceMappingURL=app.71c7904a.js.map
(function(e){function t(t){for(var i,r,u=t[0],s=t[1],l=t[2],d=0,f=[];d<u.length;d++)r=u[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);c&&c(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(i=!1)}i&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var i={},o={index:0},a=[];function r(e){return u.p+"static/js/"+({"pages-detail-index~pages-index-index":"pages-detail-index~pages-index-index","pages-detail-index":"pages-detail-index","pages-index-index":"pages-index-index"}[e]||e)+"."+{"pages-detail-index~pages-index-index":"ec128b7e","pages-detail-index":"cdcfe9f4","pages-index-index":"9b626cff"}[e]+".js"}function u(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,i){n=o[e]=[t,i]}));t.push(n[2]=i);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=r(e);var l=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,n[1](l)}o[e]=void 0}};var d=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=i,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)u.d(n,i,function(t){return e[t]}.bind(null,i));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="./",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var c=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("d858")},1213:function(e,t,n){"use strict";var i=n("4ea4");n("c740"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("2909")),a={namespaced:!1,state:{version:"2.0",renderIndex:0,audiolist:[],audio:{current:0,duration:0,duration_value:0,current_value:0,src:"",title:"",singer:"",coverImgUrl:""},playinfo:{current:0,duration:0,duration_value:0,current_value:0,src:"",title:"",singer:"",coverImgUrl:""},paused:!0,n_pause:!1},mutations:{set_audiolist:function(e,t){e.audiolist=(0,o.default)(t)},updata_audiolist:function(e,t){var n;(n=e.audiolist).push.apply(n,(0,o.default)(t))},set_playinfo:function(e,t){t.current&&(e.playinfo.current=t.current),t.duration&&(e.playinfo.duration=t.duration),t.duration_value&&(e.playinfo.duration_value=t.duration_value),t.current_value&&(e.playinfo.current_value=t.current_value),t.src&&(e.playinfo.src=t.src),t.title&&(e.playinfo.title=t.title),t.singer&&(e.playinfo.singer=t.singer),t.coverImgUrl&&(e.playinfo.coverImgUrl=t.coverImgUrl)},set_pause:function(e,t){e.paused=t},set_n_pause:function(e,t){e.n_pause=t},set_render:function(e,t){if(0!=e.audiolist.length)if("number"===typeof t||"string"===typeof t)e.renderIndex=1*t,e.audio={src:e.audiolist[t].src,title:e.audiolist[t].title,singer:e.audiolist[t].singer,coverImgUrl:e.audiolist[t].coverImgUrl,current:"00:00",duration:"00:00",current_value:0,duration_value:100};else{e.audio=t;var n=e.audiolist.findIndex((function(e){return e.src==t.src}));n>=0&&(e.renderIndex=n)}}},getters:{audiolist:function(e){return e.audiolist},playinfo:function(e){return e.playinfo},n_pause:function(e){return e.n_pause},paused:function(e){return e.paused},renderIndex:function(e){return e.renderIndex},audio:function(e){return e.audio},playIndex:function(e){var t=e.audiolist.findIndex((function(t){return t.src==e.playinfo.src}));return t<=0?0:t},renderIsPlay:function(e){return e.audio.src==e.playinfo.src}}};t.default=a},3689:function(e,t,n){"use strict";n.r(t);var i=n("828b"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},"3fd1":function(e,t,n){"use strict";var i=n("4ea4");n("acd8"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("d4ec")),a=i(n("bee2")),r=n("90bb"),u=function(){function e(t){(0,o.default)(this,e);var n=t.defaultCover,i=void 0===n?"":n,a=t.store,r=void 0===a?null:a,u=t.autoPlay,s=void 0!==u&&u,l=t.continuePlay,d=void 0===l||l,c=t.onError,f=void 0===c?null:c,p=t.onPlaying,h=void 0===p?null:p,g=t.onPlay,m=void 0===g?null:g,y=t.onCanplay,v=void 0===y?null:y,_=t.onPause,x=void 0===_?null:_,C=t.onStop,b=void 0===C?null:C,P=t.onEnded,S=void 0===P?null:P;if(!r)throw Error("请先配置store");this.audioCtx||(this.store=r,this.defaultCover=i,this.autoPlay=s,this.continuePlay=d,this.onPlaying=h,this.onCanplay=v,this.onPlay=m,this.onPause=x,this.onStop=b,this.onEnded=S,this.onError=f,this.init())}return(0,a.default)(e,[{key:"init",value:function(){var e=this,t=uni.createInnerAudioContext();this.audioCtx=t,this.audioCtx.onCanplay(this.onCanplayHandle.bind(this)),this.audioCtx.onPlay(this.onPlayHandle.bind(this)),this.audioCtx.onPause(this.onPauseHandle.bind(this)),this.audioCtx.onStop(this.onStopHandle.bind(this)),this.audioCtx.onEnded(this.onEndedHandle.bind(this)),this.audioCtx.onTimeUpdate(this.onTimeUpdateHandle.bind(this)),this.audioCtx.onError(this.onErrorHandle.bind(this)),setTimeout((function(){e.autoPlay&&e.operate()}),500),this.appCheckReplay(this.audioCtx,this.store)}},{key:"onCanplayHandle",value:function(){"function"===typeof this.onCanplay&&this.onCanplay()}},{key:"onPlayHandle",value:function(){var e=this.store.getters.audio;e.src,e.title,e.singer,e.coverImgUrl;this.commitStore("set_pause",!1),this.commitStore("set_n_pause",!1)}},{key:"onPauseHandle",value:function(){this.commitStore("set_pause",!0),"function"===typeof this.onPause&&this.onPause()}},{key:"onStopHandle",value:function(){this.tore.commit("set_pause",!0),"function"===typeof this.onStop&&this.onStop()}},{key:"onEndedHandle",value:function(){this.commitStore("set_pause",!0),this.audioCtx.startTime=0,this.commitStore("set_playinfo",{current:(0,r.formatSeconds)("0"),current_value:"0"}),"function"===typeof this.onEnded&&this.onEnded(),this.continuePlay&&this.changeplay(1)}},{key:"onTimeUpdateHandle",value:function(){var e=this.store.getters,t=e.renderIsPlay,n=e.playinfo;t&&(this.commitStore("set_playinfo",{current:(0,r.formatSeconds)(this.audioCtx.currentTime),current_value:this.audioCtx.currentTime}),this.audioCtx.duration!=n.duration_value&&this.commitStore("set_playinfo",{duration:(0,r.formatSeconds)(this.audioCtx.duration),duration_value:this.audioCtx.duration})),"function"===typeof this.onPlaying&&this.onPlaying(n)}},{key:"onErrorHandle",value:function(){this.commitStore("set_pause",!0),this.commitStore("set_render",{src:"",title:"",singer:"",coverImgUrl:""}),this.commitStore("set_playinfo",{current:0,current_value:0,duration:0,duration_value:0,title:"",src:""}),"function"===typeof this.onError&&this.onError()}},{key:"commitStore",value:function(e,t){this.store.commit(e,t)}},{key:"setRender",value:function(e){this.store.commit("set_render",e)}},{key:"syncRender",value:function(){this.setRender(this.store.getters.playIndex)}},{key:"setAudio",value:function(e){this.store.commit("set_audiolist",e)}},{key:"updateAudio",value:function(e){this.store.commit("updata_audiolist",e)}},{key:"seek",value:function(e){this.audioCtx.seek(e)}},{key:"stepPlay",value:function(e){var t=this.store.getters,n=t.renderIsPlay,i=t.playinfo;if(n){var o=i.current_value+e;this.seek(o)}}},{key:"changeplay",value:function(e){var t=this.store.getters,n=t.renderIsPlay,i=t.renderIndex,o=t.audiolist;if(n){var a=i;a+=e,a=a<0?o.length-1:a>o.length-1?0:a,this.commitStore("set_pause",!0),this.operate(a)}else this.commitStore("set_pause",!0),this.operate(i)}},{key:"operate",value:function(e){void 0!==e&&this.commitStore("set_render",e),this.operation()}},{key:"stop",value:function(){this.audioCtx.pause(),this.commitStore("set_pause",!0),this.commitStore("set_n_pause",!0)}},{key:"operation",value:function(){var e=this.store.getters.playinfo,t=(e.duration,e.current,e.duration_value,e.current_value),n=(e.src,this.store.getters.audio),i=n.src,o=n.title,a=n.singer,r=n.coverImgUrl,u=this.store.getters,s=u.renderIsPlay,l=u.paused;s?l?(this.audioCtx.play(),this.audioCtx.startTime=parseFloat(t),this.audioCtx.seek(parseFloat(t)),this.commitStore("set_pause",!1),this.commitStore("set_playinfo",{src:i,title:o,singer:a,coverImgUrl:r})):(this.audioCtx.pause(),this.commitStore("set_pause",!0),this.commitStore("set_n_pause",!0)):(this.audioCtx.src=i,this.audioCtx.title=o,this.audioCtx.singer=a,this.audioCtx.coverImgUrl=r||this.defaultCover,this.audioCtx.startTime=0,this.audioCtx.seek(0),this.audioCtx.play(),this.commitStore("set_pause",!1),this.commitStore("set_playinfo",{src:i,title:o,singer:a,coverImgUrl:r}))}},{key:"appCheckReplay",value:function(e,t){}},{key:"audiolist",get:function(){return this.store.getters.audiolist}},{key:"playIndex",get:function(){return this.store.getters.playIndex}},{key:"playinfo",get:function(){return this.store.getters.playinfo}},{key:"paused",get:function(){return this.store.getters.paused}}]),e}();t.default=u},5863:function(e,t,n){"use strict";n.r(t);var i=n("a63d"),o=n("3689");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("e437");var r,u=n("f0c5"),s=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);t["default"]=s.exports},"6ce2":function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("e143")),a=i(n("2f62")),r=n("cfed");o.default.use(a.default);var u=new a.default.Store({modules:{ZAudioStore:r.ZAudioStore,other:{state:{a:"123"}}}}),s=u;t.default=s},"828b":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={onLaunch:function(){},onShow:function(){},onHide:function(){}};t.default=i},"90bb":function(e,t,n){"use strict";n("99af"),n("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.formatSeconds=void 0;var i=function(e){if(!isNaN(e)){var t=parseInt(e),n=Math.floor(t/3600)<10?"0"+Math.floor(t/3600):Math.floor(t/3600),i=Math.floor(t/60%60)<10?"0"+Math.floor(t/60%60):Math.floor(t/60%60)+60*n,o=Math.floor(t%60)<10?"0"+Math.floor(t%60):Math.floor(t%60);return"".concat(i,":").concat(o)}};t.formatSeconds=i},a63d:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},a=[]},b1a3:function(e,t,n){"use strict";(function(e){var t=n("4ea4"),i=t(n("e143"));e["________"]=!0,delete e["________"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uniapp-zaudio",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}},e.__uniConfig.compilerVersion="2.9.11",e.__uniConfig.router={mode:"hash",base:"./"},e.__uniConfig.publicPath="./",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={maps:{}},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=n.e,i.default.component("pages-index-index",(function(e){var t={component:Promise.all([n.e("pages-detail-index~pages-index-index"),n.e("pages-index-index")]).then(function(){return e(n("9d53"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t})),i.default.component("pages-detail-index",(function(e){var t={component:Promise.all([n.e("pages-detail-index~pages-index-index"),n.e("pages-detail-index")]).then(function(){return e(n("dcfb"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t})),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,windowTop:44}},{path:"/pages/detail/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"uniapp-zaudio"})},[e("pages-detail-index",{slot:"page"})])}},meta:{name:"pages-detail-index",isNVue:!1,maxWidth:0,pagePath:"pages/detail/index",windowTop:44}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,n("c8ba"))},cfed:function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ZAudio",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ZAudioStore",{enumerable:!0,get:function(){return a.default}});var o=i(n("3fd1")),a=i(n("1213"))},d0da:function(e,t,n){var i=n("fe54");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("39d9ed47",i,!0,{sourceMap:!1,shadowMode:!1})},d858:function(e,t,n){"use strict";var i=n("4ea4"),o=i(n("5530"));n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("b1a3"),n("1c31");var a=i(n("e143")),r=i(n("5863")),u=i(n("6ce2")),s=n("cfed");a.default.config.productionTip=!1,r.default.mpType="app",a.default.prototype.$store=u.default;var l=new s.ZAudio({store:u.default,continuePlay:!0,autoPlay:!0,onError:function(){uni.showToast({title:"音频播放错误",duration:1500,mask:!1,icon:"none",position:"center"})},onCanplay:function(){console.log("onCanplay-------")},onPlaying:function(e){console.log("onPlaying---------",e)},onPause:function(){console.log("onPause---------")},onEnded:function(){console.log("onEnded---------")}});a.default.prototype.$zaudio=l;var d=[{src:"https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/zzzzzmp3/2016aJan/18X/18d_DeH/01.mp3",title:"恭喜发财",singer:"刘德华",coverImgUrl:"https://img.1ting.com/images/special/75/s150_f84ef5082b0420f74cd2546b986ab0fc.jpg"},{src:"https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/zzzzzmp3/2015kNov/25X/25m_XiaoQ/03.mp3",title:"好运来",singer:"作者1111",coverImgUrl:"https://img.1ting.com/images/special/204/s150_77254cd4a4da1a33b8faf89c4cbf6e40.jpg"}];l.setAudio(d);var c=new a.default((0,o.default)({},r.default));c.$mount()},e437:function(e,t,n){"use strict";var i=n("d0da"),o=n.n(i);o.a},fe54:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */",""]),e.exports=t}});
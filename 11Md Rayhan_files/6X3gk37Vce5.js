if (self.CavalryLogger) { CavalryLogger.start_js(["SUi0h"]); }

__d("MessengerHotLikeSVGReact.bs",["cx","fbt","cssVar","React","uniqueID","bs_belt_Option","CurrentUser","ReasonReact.bs","joinClasses","MessengerEnvironment"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=b("ReasonReact.bs").reducerComponent("MessengerHotLikeSVGReact"),k="transparent",l=h._("Thumbs Up Sign");function a(a,c,d){return[j[0],j[1],j[2],j[3],j[4],j[5],j[6],j[7],function(d){var e,f=0;!(c==null)&&c!==""?e=c:f=1;f===1&&(e=b("CurrentUser").isWorkUser()?"#373e4c":b("MessengerEnvironment").messengerui?"#0084ff":"#4080ff");return b("React").createElement("div",{className:b("joinClasses")(b("bs_belt_Option").getWithDefault(a,""),"_1i1j")},b("React").createElement("svg",{"aria-labelledby":d[1][0],role:"img",height:"100%",width:"100%",version:"1.1",viewBox:"0 0 256 256",x:"0px",y:"0px"},b("React").createElement("title",{id:d[1][0]},l),b("React").createElement("g",void 0,b("React").createElement("g",void 0,b("React").createElement("polyline",{fill:k,points:"256,0 258,256 2,258 "}),b("React").createElement("path",{d:"M254,147.1c0-12.7-4.4-16.4-9-20.1c2.6-4.2,5.1-10.2,5.1-18c0-15.8-12.3-25.7-32-25.7h-52c-0.5,0-1-0.5-0.9-1\n                 c1.4-8.6,3-24,3-31.7c0-16.7-4-37.5-19.3-45.7c-4.5-2.4-8.3-3.7-14.1-3.7c-8.8,0-14.6,3.6-16.7,5.9c-1.3,1.4-1.9,3.3-1.8,5.2\n                 l1.3,34.6c0.2,2.8-0.3,5.4-1.6,7.7l-24,47.8c-1.7,3.5-4.2,6.6-7.6,8.5c-3.5,2-6.5,5.9-6.5,9.5v94.8C78,230,94,238,112.3,238h86.1\n                 c13.5,0,22.4-4.5,27.2-13.5c4.4-8.2,3.2-15.8,1.4-21.5c7.4-2.3,14.8-8,16.9-18.3c1.3-6.6-0.7-12.1-2.9-16.2\n                 C247.5,165,254,159.8,254,147.1z",fill:e,stroke:k,strokeLinecap:"round",strokeWidth:"5%"}),b("React").createElement("path",{d:"M56.2,100H13.8C7.3,100,2,105.3,2,111.8v128.5c0,6.5,5.3,11.8,11.8,11.8h42.4c6.5,0,11.8-5.3,11.8-11.8V111.8\n                 C68,105.3,62.7,100,56.2,100z",fill:e})))))},function(){return[b("uniqueID")()]},j[10],function(a,b){return 0},j[12]]}f.component=j;f.cTRANSPARENT=k;f.label=l;f.make=a}),null);
__d("MessengerHotLikeSVGReact.re",["bs_curry","MessengerHotLikeSVGReact.bs","ReasonReact.bs"],(function(a,b,c,d,e,f){a=b("ReasonReact.bs").wrapReasonForJs(b("MessengerHotLikeSVGReact.bs").component,function(a){return b("bs_curry")._3(b("MessengerHotLikeSVGReact.bs").make,a.className,a.color,a.children)});f.component=a;f["default"]=a}),null);
__d("Sticker.react",["cx","fbt","Arbiter","MessengerDotComAndInboxM4Check.bs","MessengerHotLikeIconSVGM4React.bs","MessengerHotLikeSVGReact.re","PaddedStickerConfig","React","ReactDOM","StickerConstants","clearInterval","emptyFunction","getElementPosition","getObjectValues","joinClasses","setIntervalAcrossTransitions"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("MessengerHotLikeSVGReact.re").component;a=b("React").PropTypes;var j=83,k=5e3,l=10,m={CLICK:"click",HOVER:"hover",LOAD_AND_HOVER:"load_and_hover",ANIMATE_FOREVER:"animate_forever"};c=b("React").createClass({displayName:"Sticker",propTypes:{accessibilityLabel:a.string,animationTime:a.number,animationTrigger:a.oneOf(b("getObjectValues")(m)),forceCursorPointer:a.bool,frameCount:a.number.isRequired,frameRate:a.number,framesPerCol:a.number.isRequired,framesPerRow:a.number.isRequired,onAttachmentLoad:a.func,onStickerClick:a.func,packID:a.string,packName:a.string,sourceURI:a.string.isRequired,sourceWidth:a.number.isRequired,sourceHeight:a.number.isRequired,spriteURI:a.string,stickerID:a.string,subscribedThreadID:a.string,testID:a.string},getInitialState:function(){return{index:0,hasAnimated:!1,unsubscribeID:null}},getDefaultProps:function(){return{animationTime:k,accessibilityLabel:"",forceCursorPointer:!1,frameRate:j,onStickerClick:b("emptyFunction"),packID:null,packName:""}},componentDidMount:function(){this.props.onAttachmentLoad&&this.props.onAttachmentLoad();this._stopIntervalID=0;(this.props.animationTrigger===m.LOAD_AND_HOVER||this.props.animationTrigger===m.ANIMATE_FOREVER)&&this.props.frameCount>1&&this.props.spriteURI&&this.startAnimation();if(this.props.subscribedThreadID&&this.props.frameCount>1){var a=b("Arbiter").subscribe(this.props.subscribedThreadID,function(a,b){this.isScrolledIntoView(b.scrollTop,b.viewHeight,b.top)}.bind(this));this.setState({unsubscribeID:a})}},componentWillUnmount:function(){this.state.unsubscribeID&&b("Arbiter").unsubscribe(this.state.unsubscribeID),this.isAnimating()&&b("clearInterval")(this._stopIntervalID)},isAnimating:function(){return!!this._stopIntervalID},getWidth:function(){return Math.floor(this.props.sourceWidth)},getHeight:function(){return Math.floor(this.props.sourceHeight)},preloadSprite:function(){var a=new window.Image();a.onload=function(){this.isMounted()&&!this.state.hasAnimated&&(this.setState({hasAnimated:!0}),this._stopIntervalID=b("setIntervalAcrossTransitions")(this.incrementFrameIndex,this.props.frameRate))}.bind(this);b("PaddedStickerConfig").ChatPaddedAnimatedStickerGK&&this.props.paddedSpriteURI?a.src=this.props.paddedSpriteURI:a.src=this.props.spriteURI},isScrolledIntoView:function(a,c,d){var e=b("getElementPosition")(b("ReactDOM").findDOMNode(this));d=a+e.y-d;c=a+c;e=d+e.height;this.props.frameCount>1&&!this.state.hasAnimated&&e-l<=c&&d+l>=a&&this.startAnimation()},startAnimation:function(){!this.state.hasAnimated&&this.props.spriteURI?this.preloadSprite():this.isAnimating()||(this.setState({hasAnimated:!0}),this._stopIntervalID=b("setIntervalAcrossTransitions")(this.incrementFrameIndex,this.props.frameRate))},stopAnimation:function(){this.setState({index:0}),b("clearInterval")(this._stopIntervalID),this._stopIntervalID=0},toggleAnimation:function(){this.isAnimating()?this.stopAnimation():this.startAnimation()},shouldStopAnimating:function(){var a=this.state.index%this.props.frameCount;if(this.props.animationTrigger===m.ANIMATE_FOREVER)return!1;if(!(a===0&&this.state.index*this.props.frameRate>this.props.animationTime))return!1;return this.props.animationTrigger===m.CLICK?!0:!this.state.isHovered},incrementFrameIndex:function(){this.shouldStopAnimating()?this.stopAnimation():this.setState({index:this.state.index+1})},getStyle:function(){__p&&__p();var a=0,c=this.props.spriteURI;if(b("PaddedStickerConfig").ChatPaddedAnimatedStickerGK&&this.props.paddedSpriteURI){c=this.props.paddedSpriteURI;var d=240/Math.min(this.getHeight(),this.getWidth());a=Math.floor(b("StickerConstants").SPRITE_PADDING/d)}d=this.state.index%this.props.frameCount;var e=d%this.props.framesPerRow*(this.getWidth()+a*2)+a;d=Math.floor(d/this.props.framesPerRow)*(this.getHeight()+a*2)+a;var f=this.props.frameCount>1&&this.props.animationTrigger===m.CLICK||this._isStickerClickable(this.props.packID);f=this.props.forceCursorPointer||f?"pointer":"default";var g=this.getHeight(),h=this.getWidth();if(!this.state.hasAnimated||!this.props.spriteURI)return{backgroundImage:this._isHotLike()?null:"url("+this.props.sourceURI+")",backgroundRepeat:"no-repeat",backgroundSize:h+"px "+g+"px",cursor:f,height:g,width:h};else return{backgroundImage:"url("+c+")",backgroundPosition:-e+"px "+-d+"px",backgroundSize:(h+a*2)*this.props.framesPerRow+"px "+(g+a*2)*this.props.framesPerCol+"px",cursor:f,height:g,width:h,imageRendering:"-webkit-optimize-contrast"}},_isStickerClickable:function(a){return a&&a!=b("StickerConstants").MOBILE_LIKE_STICKER_PACK_ID&&a!=b("StickerConstants").GRAVEYARD_PACK_ID},onStickerClick:function(){if(!this._isStickerClickable(this.props.packID))return;this.props.onStickerClick&&this.props.onStickerClick(this.props.packID,this.props.stickerID)},mouseLeft:function(){this.setState({isHovered:!1})},mouseEntered:function(){this.setState({isHovered:!0}),this.isAnimating()||this.startAnimation()},tabFocusSelected:function(){this.setState({isHovered:!0}),this.isAnimating()||this.startAnimation()},tabFocusUnselected:function(){this.setState({isHovered:!1})},getAriaLabel:function(){return h._("{pack name} {sticker name} sticker",[h._param("pack name",this.props.packName),h._param("sticker name",this.props.accessibilityLabel)])},render:function(){var a,c;this.props.animationTrigger===m.CLICK&&this.props.frameCount>1&&this.props.spriteURI?a=!0:(this.props.animationTrigger===m.HOVER||this.props.animationTrigger===m.LOAD_AND_HOVER)&&this.props.frameCount>1&&this.props.spriteURI&&(c=!0);var d=a?this.toggleAnimation:null;this.props.packID&&(d=this.onStickerClick);var e=this.props.className,f=null;this._isHotLike()&&(e=b("joinClasses")(e,"_576q"),b("MessengerDotComAndInboxM4Check.bs").yes?f=b("MessengerHotLikeIconSVGM4React.bs").makeWithGradient(this.props.thread):f=b("React").createElement(i,{color:this.props.customColor}));return b("React").createElement("div",{"aria-label":this.getAriaLabel(),className:e,"data-testid":this.props.testID,onBlur:this.tabFocusUnselected,onClick:d,onFocus:this.tabFocusSelected,onMouseEnter:c?this.mouseEntered:null,onMouseLeave:c?this.mouseLeft:null,role:"img",style:this.getStyle(),tabIndex:"0"},f)},_isHotLike:function(){return!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect?this.props.stickerID===b("StickerConstants").HOT_LIKE_SMALL_STICKER_ID||this.props.stickerID===b("StickerConstants").HOT_LIKE_MEDIUM_STICKER_ID||this.props.stickerID===b("StickerConstants").HOT_LIKE_LARGE_STICKER_ID:!1}});e.exports=c}),null);
__d("StickerUtils",[],(function(a,b,c,d,e,f){__p&&__p();a={getScaledDimensions:function(a,b,c){var d,e,f;b>a?(f=c/b,d=a*f,e=b*f):(f=c/a,d=a*f,e=b*f);return{height:Math.round(d),width:Math.round(e)}},capitalizeWords:function(a){a=a.split(" ");for(var b=0;b<a.length;b++){var c=a[b].charAt(0).toUpperCase();a[b]=c+a[b].substr(1)}return a.join(" ")}};e.exports=a}),null);
__d("DialogFitHeight",["AbstractDialogFitHeight"],(function(a,b,c,d,e,f){__p&&__p();var g;g=babelHelpers.inherits(a,b("AbstractDialogFitHeight"));g&&g.prototype;a.prototype.getHeightProperty=function(){"use strict";return"height"};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);
__d("StickersStateStore",["FluxReduceStore","StickersActions","StickersConfig","StickersDispatcher","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("FluxReduceStore"));g&&g.prototype;a.prototype.getInitialState=function(){return b("immutable").Map({customPack:null,customPackLoaded:!1,customPackNuxContent:null,isAvatarStickersSelected:!1,recentStickers:[],recentStickersLoaded:!1,showFlyout:!1,storePackID:null,threadID:null,trayLoaded:!1,trayPackID:null})};a.prototype.reduce=function(a,c){__p&&__p();var d=c;c=b("StickersActions").Types;switch(d.type){case c.ADD_RECENT_STICKER:var e=[d.sticker];a.get("recentStickers").forEach(function(a){if(a.id===d.sticker.id)return;e.push(a)});return a.set("recentStickers",e.splice(0,b("StickersConfig").max_mru_stickers));case c.HIDE_FLYOUT:return a.set("showFlyout",!1);case c.LOAD_CUSTOM_STICKER_PACK:return a.set("customPack",d.pack).set("customPackLoaded",!0).set("customPackNuxContent",d.nuxContent);case c.LOAD_RECENT_STICKERS:return a.set("recentStickersLoaded",!0).set("recentStickers",d.stickers);case c.SELECT_AVATAR_STICKERS:return a.set("isAvatarStickersSelected",!0);case c.SELECT_STORE_PACK:return a.set("storePackID",d.packID);case c.SELECT_TRAY_PACK:return a.set("trayPackID",d.packID).set("trayLoaded",!0).set("isAvatarStickersSelected",!1);case c.SHOW_FLYOUT:return a.set("showFlyout",!0).set("threadID",d.threadID);case c.TRAY_LOADED:return a.set("trayLoaded",!0);default:return a}};function a(){g.apply(this,arguments)}a.__moduleID=e.id;e.exports=new a(b("StickersDispatcher"))}),null);
__d("StickersStoreController",["cx","Bootloader","DialogFitHeight","DOM","LayerAutoFocus","LayerFadeOnHide","LayerHideOnEscape","PureStoreBasedStateMixin","React","ReactDOM","StickersActions","StickersDispatcher","StickersStateStore","XUIDialog.react","XUIDialogBody.react","XUISpinner.react","isSocialPlugin","requestAnimationFrame"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;var h=688,i=320,j=null,k=b("React").createClass({displayName:"StoreLayer",mixins:[b("PureStoreBasedStateMixin")(b("StickersStateStore"))],propTypes:{isComposer:a.bool,onToggle:a.func.isRequired,shown:a.bool.isRequired},getDefaultProps:function(){return{isComposer:!1}},statics:{calculateState:function(){return{packID:b("StickersStateStore").getState().get("storePackID")}}},getInitialState:function(){return{renderStore:function(){return b("React").createElement("div",{className:"_5r5e"},b("React").createElement(b("XUISpinner.react"),{background:"light",size:"large"}))}}},UNSAFE_componentWillMount:function(){b("StickersDispatcher").explicitlyRegisterStores([b("StickersStateStore")])},shouldComponentUpdate:function(a){return!!a.shown},componentDidMount:function(){b("Bootloader").loadModules(["StickersStore.react","react-relay-deprecated/classic/container/RelayRootContainer","StickersStorePackListRoute","StickersStorePackDetailRoute"],function(a,c,d,e){this.setState({renderStore:function(){var f=this.state.packID?new e({packID:this.state.packID}):new d();return b("React").createElement(c,{Component:a,route:f,renderFetched:function(c){return b("React").createElement(a,babelHelpers["extends"]({},c,{isComposer:this.props.isComposer,packID:this.state.packID,shown:this.props.shown}))}.bind(this)})}.bind(this)})}.bind(this),"StickersStoreController")},_onToggle:function(a){b("requestAnimationFrame")(function(){return this.props.onToggle(a)}.bind(this))},render:function(){var a=b("isSocialPlugin")()&&document.body.offsetWidth<h?i:h;return b("React").createElement(b("XUIDialog.react"),{behaviors:{DialogFitHeight:b("DialogFitHeight"),LayerAutoFocus:b("LayerAutoFocus"),LayerFadeOnHide:b("LayerFadeOnHide"),LayerHideOnEscape:b("LayerHideOnEscape")},onToggle:this._onToggle,shown:this.props.shown,width:a},b("React").createElement(b("XUIDialogBody.react"),{className:"_5rq- autofocus"},this.state.renderStore()))}}),l=function(a){j||(j=b("DOM").create("div"),b("DOM").appendContent(document.body,j)),b("ReactDOM").render(b("React").createElement(k,{isComposer:a,onToggle:n,shown:!0}),j)},m=function(){if(!j)return;b("ReactDOM").render(b("React").createElement(k,{shown:!1,onToggle:n}),j)},n=function(a){a?l():m()};c={showStore:function(a,c){b("StickersActions").selectStorePack(a),l(!!c)}};e.exports=c}),null);
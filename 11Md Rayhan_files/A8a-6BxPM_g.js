if (self.CavalryLogger) { CavalryLogger.start_js(["valSy"]); }

__d("AdsPageMenuLoadErrorDataAction",["Laminar"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[]},function(){return[]},"AD_PAGE_SELECTOR.LOAD_ERROR");e.exports=a}),null);
__d("AdsPageMenuLoadErrorDataActionFlux",[],(function(a,b,c,d,e,f){"use strict";e.exports={actionType:"AD_PAGE_SELECTOR.LOAD_ERROR"}}),null);
__d("AdsPageMenuLoadSuccessDataAction",["Laminar"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[]},function(){return[]},"AD_PAGE_SELECTOR.LOAD_SUCCESS");e.exports=a}),null);
__d("AdsPageMenuLoadSuccessDataActionFlux",[],(function(a,b,c,d,e,f){"use strict";e.exports={actionType:"AD_PAGE_SELECTOR.LOAD_SUCCESS"}}),null);
__d("AdsPageMenuRetryLoadDataAction",["Laminar"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[]},function(){return[]},"AD_PAGE_SELECTOR.RETRY_LOAD");e.exports=a}),null);
__d("AdsPageMenuRetryLoadDataActionFlux",[],(function(a,b,c,d,e,f){"use strict";e.exports={actionType:"AD_PAGE_SELECTOR.RETRY_LOAD"}}),null);
__d("BizNotificationTabCountUtils",["BizChromeNotifTab","BizNotificationListConst"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("BizNotificationListConst").CLASSIFICATION_MAP,h=b("BizNotificationListConst").CLASSIFICATION_TO_TAB_MAP;a={incrementCountByTab:function(a,c){var d=Object.assign({},c);Object.keys(a).forEach(function(c){var e=h[c]||h[g[c]];c=a[c];e!=null&&(d[e]+=c,d[b("BizChromeNotifTab").ALL]+=c)});return d},clearTabCount:function(a,c,d){var e=Object.assign({},c),f=Object.assign({},d);a===b("BizChromeNotifTab").ALL?Object.keys(c).forEach(function(a){e[a]=0,f[a]=!1}):(e[b("BizChromeNotifTab").ALL]-=e[a],e[a]=0,f[a]=!1);return{updatedUnseenByTab:e,updatedTabCountToBeCleared:f}}};e.exports=a}),null);
__d("BizNotificationInitUnseenNotifsReducerPlugin",["BizNotificationListConst","BizNotificationTabCountUtils"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("BizNotificationListConst").CLASSIFICATION_MAP;a={reduce:function(a,c){var d=c.initialClassificationsForUnseenNotifs,e=a.unseenNotifsClassificationsMap,f=a.unseenNotifsCountByTab;f=b("BizNotificationTabCountUtils").incrementCountByTab(c.initialUnseenNotifsCountByClassification,a.unseenNotifsCountByTab);Object.keys(d).forEach(function(a){var b=d[a];b.forEach(function(b){e[b]=g[a]||a})});return babelHelpers["extends"]({},a,{unseenNotifsClassificationsMap:e,unseenNotifsCountByTab:f})}};e.exports=a}),null);
__d("BizNotificationInitUnseenNotifsAction",["Laminar","BizNotificationInitUnseenNotifsReducerPlugin","BizNotificationPopoverDataProvider"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[b("Laminar").__createReducer(b("BizNotificationInitUnseenNotifsReducerPlugin"),b("BizNotificationPopoverDataProvider"),{})]},function(){return[]},"BizNotificationInitUnseenNotifsActionPlugin");e.exports=a}),null);
__d("BizNotificationPrefsProviderPlugin",[],(function(a,b,c,d,e,f){"use strict";a={initialState:{prefs:null}};e.exports=a}),null);
__d("BizNotificationPrefsProvider",["Laminar","BizNotificationPrefsProviderPlugin"],(function(a,b,c,d,e,f){"use strict";e.exports=b("Laminar").__createProvider(b("BizNotificationPrefsProviderPlugin"),"BizNotificationPrefsProviderPlugin")}),null);
__d("IndeterminateNotificationCounter",["cx","DocumentTitle"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h="(*) ",i={init:function(a){a>0&&i.addBadge()},addBadge:function(){__p&&__p();var a=b("DocumentTitle").get(),c=document.getElementById("NotifIndeterminateBadge"),d=c&&c.getAttribute("class");if(d!=null&&d.includes("_76t_")){c=c&&c.textContent;c!=null&&b("DocumentTitle").set("("+c+") "+a,!0);return}else if(d!=null&&d.includes("_79ig")){b("DocumentTitle").set("(99+) "+a,!0);return}b("DocumentTitle").set(h+a,!0)},removeBadge:function(){var a=b("DocumentTitle").get();b("DocumentTitle").set(a,!0)}};e.exports=i}),null);
__d("BizNotificationBadgeUtils",["cx","IndeterminateNotificationCounter","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=99,i={increaseBadgeCount:function(a){if(a!=null){var b=a.textContent;if(!b.endsWith("+")){b=Number(a.textContent)+1;a.textContent=b<=h?b+"":h+"+"}}return a},decreaseBadgeCount:function(a){a!=null&&(a.textContent="0");return a},setBadgeElementToBeActive:function(a){var c=document.getElementById("NotifIndeterminateBadge");a?(c=i.increaseBadgeCount(c),b("IndeterminateNotificationCounter").addBadge()):(c=i.decreaseBadgeCount(c),b("IndeterminateNotificationCounter").removeBadge());var d=c&&c.textContent;d=(d!=null&&!d.endsWith("+")?"_76t_":"")+(d!=null&&d.endsWith("+")?" _79ig":"");a=a?b("joinClasses")("_7256",d):b("joinClasses")("_7257",d);c&&c.setAttribute("class",a)}};e.exports=i}),null);
__d("BizNotificationReceivedNotifReducerPlugin",["BizNotificationBadgeUtils","BizNotificationListConst","BizNotificationTabCountUtils"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("BizNotificationListConst").CLASSIFICATION_TO_MACRO_CATEGORY_MAP,h=b("BizNotificationListConst").EMPTY_UNSEEN_NOTIFS_COUNT_BY_CLASSIFICATION,i=b("BizNotificationListConst").ORDERED_CLASSIFICATIONS,j=function(a,b){if(b==null)return!1;b=b.macro_categories_excluded_from_badging;return!b.includes(g[a])};a={reduce:function(a,c,d){__p&&__p();var e=d.prefsData;d=c.notifs;var f=a.unseenNotifsClassificationsMap,g=Object.assign({},h);d.forEach(function(a){var c=a.classifications;if(c==null)return;c.forEach(function(c){i.includes(c)&&(g[c]+=1,f[a.alert_id]=c,j(c,e.prefs)&&b("BizNotificationBadgeUtils").setBadgeElementToBeActive(!0))})});c=b("BizNotificationTabCountUtils").incrementCountByTab(g,a.unseenNotifsCountByTab);return babelHelpers["extends"]({},a,{unseenNotifsClassificationsMap:f,unseenNotifsCountByTab:c})}};e.exports=a}),null);
__d("BizNotificationReceivedNotifAction",["Laminar","BizNotificationReceivedNotifReducerPlugin","BizNotificationPopoverDataProvider","BizNotificationPrefsProvider"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[b("Laminar").__createReducer(b("BizNotificationReceivedNotifReducerPlugin"),b("BizNotificationPopoverDataProvider"),{prefsData:b("BizNotificationPrefsProvider")})]},function(){return[]},"BizNotificationReceivedNotifActionPlugin");e.exports=a}),null);
__d("BizNotificationSeenStateUpdateReducerPlugin",["BizChromeNotifTab","BizNotificationBadgeUtils","BizNotificationListConst","BizNotificationTabCountUtils"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("BizNotificationListConst").CLASSIFICATION_TO_TAB_MAP;a={reduce:function(a,c){__p&&__p();b("BizNotificationBadgeUtils").setBadgeElementToBeActive(!1);if(!a.isJewelOpen){var d=b("BizNotificationTabCountUtils").clearTabCount(b("BizChromeNotifTab").ALL,a.unseenNotifsCountByTab,a.tabCountToBeCleared),e=d.updatedUnseenByTab;d=d.updatedTabCountToBeCleared;return babelHelpers["extends"]({},a,{unseenNotifsCountByTab:e,tabCountToBeCleared:d})}else{var f=a.tabCountToBeCleared;Object.keys(c.seenState).forEach(function(b){b=a.unseenNotifsClassificationsMap[b];if(b!=null){b=g[b];f[b]=!0}});return babelHelpers["extends"]({},a,{tabCountToBeCleared:f})}}};e.exports=a}),null);
__d("BizNotificationSeenStateUpdateAction",["Laminar","BizNotificationSeenStateUpdateReducerPlugin","BizNotificationPopoverDataProvider"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[b("Laminar").__createReducer(b("BizNotificationSeenStateUpdateReducerPlugin"),b("BizNotificationPopoverDataProvider"),{})]},function(){return[]},"BizNotificationSeenStateUpdateActionPlugin");e.exports=a}),null);
__d("BizNotificationSetJewelOpenReducerPlugin",["BizNotificationBadgeUtils","BizNotificationListConst","BizNotificationTabCountUtils"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("BizNotificationListConst").TAB_MAP;a={reduce:function(a,c){__p&&__p();c=c.isJewelOpen;var d=a.tabCountToBeCleared,e=a.unseenNotifsCountByTab,f=a.tabCountToBeCleared;b("BizNotificationBadgeUtils").setBadgeElementToBeActive(!1);c||Object.keys(d).forEach(function(a){if(d[a]){a=b("BizNotificationTabCountUtils").clearTabCount(g[a],e,f);e=a.updatedUnseenByTab;f=a.updatedTabCountToBeCleared}});return babelHelpers["extends"]({},a,{isJewelOpen:c,unseenNotifsCountByTab:e,tabCountToBeCleared:f})}};e.exports=a}),null);
__d("BizNotificationSetJewelOpenAction",["Laminar","BizNotificationSetJewelOpenReducerPlugin","BizNotificationPopoverDataProvider"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[b("Laminar").__createReducer(b("BizNotificationSetJewelOpenReducerPlugin"),b("BizNotificationPopoverDataProvider"),{})]},function(){return[]},"BizNotificationSetJewelOpenActionPlugin");e.exports=a}),null);
__d("BizNotificationsSetPrefsReducerPlugin",[],(function(a,b,c,d,e,f){"use strict";a={reduce:function(a,b){return babelHelpers["extends"]({},a,{prefs:b.prefs})}};e.exports=a}),null);
__d("BizNotificationSetPrefsAction",["Laminar","BizNotificationsSetPrefsReducerPlugin","BizNotificationPrefsProvider"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[b("Laminar").__createReducer(b("BizNotificationsSetPrefsReducerPlugin"),b("BizNotificationPrefsProvider"),{})]},function(){return[]},"BIZ_NOTIFICATION.SET_PREFS");e.exports=a}),null);
__d("AdsPersonalSettingsConstants",["keyMirror"],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({ACCOUNT_INFORMATION:"account_information",BILLING:"billing",NOTIFICATION:"notification",PAGES:"pages"});c=b("keyMirror")({NONE:null,NEW:null,OLD:null});d="bi_personal_settings_gear_tip";f="ads_personal_settings_gear";e.exports={EMAIL_NOTIFICATION_HANDLER_KEY:c,TABS:a,PERSONAL_SETTINGS_NUX_NAME:d,PERSONAL_SETTINGS_NUX_PLACEMENT:f}}),null);
__d("AdsPersonalSettingsGearNux.react",["AdsIntelligentBlueTip.react","AdsPersonalSettingsConstants","React","gkx"],(function(a,b,c,d,e,f){"use strict";var g=b("AdsPersonalSettingsConstants").PERSONAL_SETTINGS_NUX_NAME,h=b("AdsPersonalSettingsConstants").PERSONAL_SETTINGS_NUX_PLACEMENT;a=function(){return!b("gkx")("677810")?null:b("React").createElement("div",{id:h},b("React").createElement(b("AdsIntelligentBlueTip.react"),{contextNodeID:h,messageID:g,position:"below"}))};e.exports=a}),null);
__d("AdsPageMenuActions",["AdsPageMenuLoadErrorDataAction","AdsPageMenuLoadSuccessDataAction","AdsPageMenuRetryLoadDataAction"],(function(a,b,c,d,e,f){"use strict";a={updatePageMenu:function(a){b("AdsPageMenuLoadSuccessDataAction").dispatch({data:a},{line:"22",module:"AdsPageMenuActions.js"})},pageMenuFailedToLoad:function(a,c){b("AdsPageMenuLoadErrorDataAction").dispatch({data:{businessID:a,error:c}},{line:"28",module:"AdsPageMenuActions.js"})},retryLoad:function(a){b("AdsPageMenuRetryLoadDataAction").dispatch({data:{businessID:a}},{line:"37",module:"AdsPageMenuActions.js"})}};e.exports=a}),null);
__d("XAdsUnifiedNavPagesMenuItemsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/unified_nav/pages_menu_items/",{business_id:{type:"FBID"}})}),null);
__d("AdsPageMenuStore",["AdsDataAtom","AdsInterfacesLoggerUtils","AdsPageMenuActions","AdsPageMenuLoadErrorDataActionFlux","AdsPageMenuLoadSuccessDataActionFlux","AdsPageMenuRetryLoadDataActionFlux","AppConstants.brands","AsyncRequest","FluxLoadObjectStore","ICEPerformanceTimer","XAdsUnifiedNavPagesMenuItemsController","gkx","promiseDone"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h="pages_jewel_load",i=b("gkx")("779516");g=babelHelpers.inherits(a,b("FluxLoadObjectStore"));g&&g.prototype;a.prototype.__getActionTypes=function(){return i?[this.getActionTypeStartLoad(),b("AdsPageMenuLoadErrorDataActionFlux").actionType,b("AdsPageMenuLoadSuccessDataActionFlux").actionType,b("AdsPageMenuRetryLoadDataActionFlux").actionType]:null};a.prototype.reduce=function(a,c){switch(c.action.type){case b("AdsPageMenuLoadSuccessDataActionFlux").actionType:return this.__handleOne(a,c.action.data.businessID,c.action.data);case b("AdsPageMenuLoadErrorDataActionFlux").actionType:return this.__handleOne(a,c.action.data.businessID,c.action.data.error);case b("AdsPageMenuRetryLoadDataActionFlux").actionType:return this.$AdsPageMenuStore1(a,c.action.data.businessID);case b("AppConstants.brands").FAVORITE_ACTION.UPDATE_SUCCESS:return this.$AdsPageMenuStore1(a,c.action.businessID)}return a};a.prototype.$AdsPageMenuStore1=function(a,b){this.__load(b);return this.__setEmptyAndLoading(a,[b])};a.prototype.__load=function(a){var c=b("XAdsUnifiedNavPagesMenuItemsController").getURIBuilder().setFBID("business_id",a).getURI();b("ICEPerformanceTimer").start(h);b("promiseDone")(new(b("AsyncRequest"))().setAllowCrossPageTransition(!0).setURI(c).exec().then(function(c){b("AdsPageMenuActions").updatePageMenu({businessID:a,menu:c.payload,endpoint:null,seenPagesPromo:!0}),b("ICEPerformanceTimer").stop(h)})["catch"](function(c){c=new Error(c.getError(),c.getErrorDescription());b("AdsInterfacesLoggerUtils").logException(c);b("AdsPageMenuActions").pageMenuFailedToLoad(a,c)}))};function a(){g.apply(this,arguments)}a.__moduleID=e.id;e.exports=new a(b("AdsDataAtom"))}),null);
__d("XAdsUnifiedNavPagePromoController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/manager/ajax/unified_nav_page_promo/",{})}),null);
__d("AdsUnifiedNavigationPageMenuBootloader.react",["cx","fbt","AdsTestIDs","AsyncRequest","BootloadOnInteraction.react","JSResource","LazyComponent.react","Link.react","React","XAdsUnifiedNavPagePromoController"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=b("React").Component;d=babelHelpers.inherits(a,c);i=d&&d.prototype;function a(a){i.constructor.call(this,a),this.$2=function(a){var c=this.state.seenPagesPromo;this.setState({hasTooltip:a!=="show",seenPagesPromo:!0},function(){if(a==="show"&&!c){var d=b("XAdsUnifiedNavPagePromoController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(d).setMethod("POST").send()}})}.bind(this),this.state={hasTooltip:!a.selectorShown,seenPagesPromo:a.seenPagesPromo}}a.prototype.$1=function(){var a=this.state.hasTooltip?h._("Pages"):null,c=null;this.state.seenPagesPromo===!1&&(c=b("React").createElement("div",{className:"_mm0"}));return b("React").createElement(b("Link.react"),{"aria-haspopup":"true","aria-label":a,className:"_4hsu","data-hover":a?"tooltip":null,"data-testid":b("AdsTestIDs").UNIFIED_NAV_PAGES_JEWEL,"data-tooltip-content":a,"data-tooltip-delay":500,rel:"toggle",role:"button"},c)};a.prototype.render=function(){var a=this.$1(),c=babelHelpers["extends"]({onToggleMenu:this.$2},this.props);return b("React").createElement("div",null,b("React").createElement(b("BootloadOnInteraction.react"),{component:b("React").createElement(b("LazyComponent.react"),c,a),loader:b("JSResource")("AdsUnifiedNavigationPageMenuContainer.react").__setRef("AdsUnifiedNavigationPageMenuBootloader.react"),placeholder:a}))};e.exports=a}),null);
__d("AdsUnifiedNavigationPageJewel",["AdsUnifiedNavigationPageMenuBootloader.react","ReactRenderer","Toggler","AdsPageMenuStore"],(function(a,b,c,d,e,f){"use strict";a={init:function(a,c){b("AdsPageMenuStore");a={selectorShown:b("Toggler").isNodeShown(c),businessID:a.businessID,endpoint:a.endpoint,seenPagesPromo:a.seenPagesPromo};b("ReactRenderer").constructAndRenderComponentAcrossTransitions(b("AdsUnifiedNavigationPageMenuBootloader.react"),a,c)}};e.exports=a}),null);
__d("BusinessUnifiedNavigationGearButtonLogger",["BusinessUnifiedNavigationEvent","BusinessUnifiedNavigationLogger","Event"],(function(a,b,c,d,e,f){"use strict";a={init:function(a,c){b("Event").listen(a,"click",function(){return b("BusinessUnifiedNavigationLogger").log(b("BusinessUnifiedNavigationEvent").GEAR_BUTTON_CLICK,b("BusinessUnifiedNavigationEvent").APP_INIT,{toTool:c})})}};e.exports=a}),null);
__d("AdsUnifiedNavNotificationsSubscriptionWebGraphQLSubscription",["WebGraphQLSubscriptionHelper"],(function(a,b,c,d,e,f){"use strict";e.exports=b("WebGraphQLSubscriptionHelper").getExports({docID:"1940323352716738",queryID:"2130611887257172"})}),null);
__d("AdsUnifiedNavNotificationsSubscription",["AdsUnifiedNavNotificationsSubscriptionWebGraphQLSubscription","BaseGraphQLSubscription","WebPixelRatio","uuid"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h="ADS_UNIFIED_NAV";g=babelHelpers.inherits(a,b("BaseGraphQLSubscription"));g&&g.prototype;a.prototype.getTopic=function(a){return"gqls/"+this.getSubscriptionCallName()+"/actor_id_"+a.actorID+"_environment_"+h};a.prototype.getQueryID=function(){return b("AdsUnifiedNavNotificationsSubscriptionWebGraphQLSubscription").getDocID()};a.prototype.getQueryParameters=function(a){return{input:JSON.stringify({client_subscription_id:b("uuid")(),environment:h}),is_work_user:!1,scale:b("WebPixelRatio").get()}};a.prototype.getSubscriptionCallName=function(){return"web_notification_receive_subscribe"};function a(){g.apply(this,arguments)}e.exports=a}),null);
__d("BizNotificationBucketingUtils",["BizNotificationConfig"],(function(a,b,c,d,e,f){"use strict";a={preProcessNodeForLiveSendBucketing:function(a){var c=b("BizNotificationConfig").notifTypeWhitelist,d=[];a.eligible_buckets==null?d=["BIZ_NON_CRITICAL"]:!a.eligible_buckets.includes("BIZ_CRITICAL")&&c.includes(a.notif_type)&&(d=["BIZ_CRITICAL"].concat(a.eligible_buckets||[]));d.length!==0&&(a.eligible_buckets=d);return a}};e.exports=a}),null);
__d("AdsUnifiedNavNotificationSubscriptions",["AdsUnifiedNavNotificationsSubscription","Arbiter","BizNotificationBucketingUtils","ChannelConstants","CurrentUser","NotificationTokens","createNotificationSubscriptions","createObjectFrom"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=b("createNotificationSubscriptions")({subscribeToNotificationHides:function(a){return b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("notification_hidden"),function(c,d){c=b("NotificationTokens").tokenizeIDs([d.obj.notif_id+""]);d=d.obj.state===1;a(b("createObjectFrom")(c,d))})},subscribeToNotificationReadnessUpdates:function(a){return b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("notifications_read"),function(c,d){c=b("NotificationTokens").tokenizeIDs(d.obj.alert_ids);d=d.obj.new_state;a(b("createObjectFrom")(c,d))})},subscribeToNotificationSeenStateUpdates:function(a){return b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("notifications_seen"),function(c,d){c=b("NotificationTokens").tokenizeIDs(d.obj.alert_ids);d=d.obj.new_state;a(b("createObjectFrom")(c,d))})},subscribeToRealtimeChannelNotifications:function(a){return b("AdsUnifiedNavNotificationsSubscription").subscribe({actorID:b("CurrentUser").getID()},function(c){c=c.web_notification_receive_subscribe.aggregated_notification;a(c?[b("BizNotificationBucketingUtils").preProcessNodeForLiveSendBucketing(c)]:null,"AdsUnifiedNavNotificationsPayloadPagelet")})}})}),null);
__d("AdsUnifiedNavGlobalNotificationSubscriptionsSubscription",["AdsUnifiedNavNotificationSubscriptions"],(function(a,b,c,d,e,f){"use strict";e.exports=b("AdsUnifiedNavNotificationSubscriptions").setup()}),null);
__d("AdsUnifiedNavNotificationsSyncQueryWebGraphQLQuery",["WebGraphQLQueryBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(){__p&&__p();var a;a=babelHelpers.inherits(c,b("WebGraphQLQueryBase"));a&&a.prototype;c.__getDocID=function(){"use strict";return"2098397340170397"};c.getQueryID=function(){"use strict";return"730698150604120"};function c(){"use strict";a.apply(this,arguments)}return c}()}),null);
__d("AdsUnifiedNavNotificationSync",["invariant","AdsUnifiedNavNotificationsSyncQueryWebGraphQLQuery","Arbiter","ChannelConstants","CurrentUser","NotificationConstants","NotificationUpdates","WebGraphQL","WebPixelRatio","ifRequired","objectValues","promiseDone"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=0;function i(){var a={endpointControllerName:"AdsUnifiedNavNotificationsPayloadPagelet"},c;b("ifRequired")("NotificationStore",function(d){c=b("objectValues")(d.getAll(a))});if(c==null)return null;var d=c.map(function(a){return a.creation_time}).filter(Boolean);return d.length===0?null:Math.max.apply(Math,d)}function j(){__p&&__p();var a=i();if(a==null)return;b("promiseDone")(b("WebGraphQL").exec(new(b("AdsUnifiedNavNotificationsSyncQueryWebGraphQLQuery"))({is_work_user:b("CurrentUser").isWorkUser(),newer_than:a,scale:b("WebPixelRatio").get()})),function(a){__p&&__p();if(a){a=(a=a)!=null?(a=a.viewer)!=null?(a=a.notifications)!=null?a.edges:a:a:a;a=a&&a.map(function(a){a=a.node;return a}).filter(Boolean);if(a==null)return;a={nodes:a};b("NotificationUpdates").handleUpdate(b("NotificationConstants").PayloadSourceType.SYNC,a)}})}var k=null,l=0;a={setup:function(a){__p&&__p();l++;(h===null||a>h)&&(h=a);k==null&&(k=b("Arbiter").subscribe(b("ChannelConstants").ON_INVALID_HISTORY,j));var c=!1;return{remove:function(){if(c===!0)return;k!=null||g(0,51);c=!0;l--;l===0&&(k.unsubscribe(),k=null)}}}};e.exports=a}),null);
__d("AdsUnifiedNavGlobalNotificationSyncSubscription",["AdsUnifiedNavNotificationSync","InitialServerTime"],(function(a,b,c,d,e,f){"use strict";e.exports=b("AdsUnifiedNavNotificationSync").setup(b("InitialServerTime").serverTime)}),null);
__d("AppLoggerUtils.brands",["AppLogger.brands","Event"],(function(a,b,c,d,e,f){__p&&__p();var g={register:function(a,c,d,e,f){f=f||{},f.brandID=c,b("Event").listen(a,"click",function(a){b("AppLogger.brands").logForAnalytics(d,e,f)})},logServerEvent:function(a,c,d){b("AppLogger.brands").logForAnalytics(a,c,d)},registerForPopoverMenu:function(a,c,d,e,f){f&&g.register(a,d,e,f,{}),c.subscribe("itemclick",function(a,c){a=c.item&&c.item.getValue&&c.item.getValue();a?b("AppLogger.brands").logForAnalytics(e,a,{brandID:d}):b("AppLogger.brands").logForAnalytics(b("AppLogger.brands").CATEGORY.NAV,b("AppLogger.brands").EVENT.INVALID_NAV_ITEM)})},registerForPopoverOnlyMenu:function(a,c,d,e){a.subscribe("itemclick",function(a,e){a=e.item&&e.item.getValue&&e.item.getValue();a?b("AppLogger.brands").logForAnalytics(d,a,{brandID:c}):b("AppLogger.brands").logForAnalytics(b("AppLogger.brands").CATEGORY.NAV,b("AppLogger.brands").EVENT.INVALID_NAV_ITEM)})},registerForElements:function(a,c,d,e,f){f=f||{},f.brandID=c,a.forEach(function(a){b("Event").listen(a,"click",function(a){b("AppLogger.brands").logForAnalytics(d,e,f)})})}};e.exports=g}),null);
__d("BizsiteHelpButton.react",["ix","cx","AdsApplicationUtils","AdsFBIconDownsized.react","AdsIntelligentBlueTip.react","AdsInterfacesNavTools","AdsTestIDs","Bootloader","BusinessUnifiedNavigationEvent","BusinessUnifiedNavigationLogger","FluxContainerSubscriptions","Link.react","React","adsUnifiedNavGetToolFromPageType","asset","requireWeak"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=b("React").PureComponent;var j,k="help-jewel";function l(){return{isTrayOpen:!!j&&j.isTrayOpen()}}d=babelHelpers.inherits(a,c);i=d&&d.prototype;function a(a){__p&&__p();i.constructor.call(this,a),this.$2=function(a){var c=a.ctrlKey||a.shiftKey||a.metaKey||a.button===1,d=c?b("BusinessUnifiedNavigationEvent").HELP_CENTER_OPEN_NEW_WINDOW:this.state.isTrayOpen?b("BusinessUnifiedNavigationEvent").HELP_CENTER_CLOSE:b("BusinessUnifiedNavigationEvent").HELP_CENTER_OPEN,e=d===b("BusinessUnifiedNavigationEvent").HELP_CENTER_CLOSE?b("BusinessUnifiedNavigationEvent").HELP_CENTER_OPEN:b("BusinessUnifiedNavigationEvent").APP_INIT;b("BusinessUnifiedNavigationLogger").log(d,e);if(!c){a.preventDefault();var f=!this.state.isTrayOpen;b("Bootloader").loadModules(["AdsHelpTrayUIActions","AdsHelpTrayUIStore"],function(a,b){j=b,this.$1.setStores([j]),a.toggleHelpTray(f,null,this.props.pageType)}.bind(this),"BizsiteHelpButton.react")}}.bind(this),this.$1=new(b("FluxContainerSubscriptions"))(this.constructor.name),this.$1.addListener(function(){return this.setState(l)}.bind(this)),this.state=l()}a.prototype.componentDidMount=function(){b("requireWeak")("AdsHelpTrayUIStore",function(a){j=a,this.$1.setStores([j])}.bind(this)),this.setState(l)};a.prototype.render=function(){var a=this.props.pageType===b("AdsInterfacesNavTools").ANALYTICS?"/help/analytics":"/help";a=b("React").createElement(b("Link.react"),{className:"_14xs"+(this.state.isTrayOpen?" _14xt":""),"data-testid":b("AdsTestIDs").HELP_JEWEL,href:a,id:k,onClick:this.$2},b("React").createElement("span",{className:"_tkm"},b("React").createElement(b("AdsFBIconDownsized.react"),{className:"_nxh",src:g("392521")})));!this.state.isTrayOpen&&b("AdsApplicationUtils").isPowerEditor()&&(a=b("React").createElement(b("React").Fragment,null,a,b("React").createElement(b("AdsIntelligentBlueTip.react"),{contextNodeID:k,messageID:"release_notes_intro",position:"below"})));return a};e.exports=a}),null);
__d("BizHomeHelpTrayLogger",["AppLogger.brands"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={logFBExpertHelpItemClick:function(a){b("AppLogger.brands").logForAnalytics(b("AppLogger.brands").CATEGORY.HELPTRAY,b("AppLogger.brands").EVENT.HELPTRAY_FBEXPERTHELP_CLICK,{page:a})},logExpertHelpItemClick:function(a){b("AppLogger.brands").logForAnalytics(b("AppLogger.brands").CATEGORY.HELPTRAY,b("AppLogger.brands").EVENT.HELPTRAY_EXPERTHELP_CLICK,{page:a})},logReportItemClick:function(a){b("AppLogger.brands").logForAnalytics(b("AppLogger.brands").CATEGORY.HELPTRAY,b("AppLogger.brands").EVENT.HELPTRAY_REPORT_CLICK,{page:a})},logEmailItemClick:function(a){b("AppLogger.brands").logForAnalytics(b("AppLogger.brands").CATEGORY.HELPTRAY,b("AppLogger.brands").EVENT.HELPTRAY_EMAIL_CLICK,{page:a})},logCommunityItemClick:function(a){b("AppLogger.brands").logForAnalytics(b("AppLogger.brands").CATEGORY.HELPTRAY,b("AppLogger.brands").EVENT.HELPTRAY_COMMUNITY_CLICK,{page:a})},logSupportItemClick:function(a){b("AppLogger.brands").logForAnalytics(b("AppLogger.brands").CATEGORY.HELPTRAY,b("AppLogger.brands").EVENT.HELPTRAY_SUPPORT_CLICK,{page:a})},logSupportInboxItemClick:function(a){b("AppLogger.brands").logForAnalytics(b("AppLogger.brands").CATEGORY.HELPTRAY,b("AppLogger.brands").EVENT.HELPTRAY_SUPPORT_INBOX_CLICK,{page:a})},logChatItemClick:function(a){b("AppLogger.brands").logForAnalytics(b("AppLogger.brands").CATEGORY.HELPTRAY,b("AppLogger.brands").EVENT.HELPTRAY_CHAT_CLICK,{page:a})},logDirectSupportItemClick:function(a){b("AppLogger.brands").logForAnalytics(b("AppLogger.brands").CATEGORY.HELPTRAY,b("AppLogger.brands").EVENT.HELPTRAY_DIRECT_SUPPORT_CLICK,{page:a})},logHelpCenterClick:function(a,c){b("AppLogger.brands").logForAnalytics(b("AppLogger.brands").CATEGORY.HELPTRAY,b("AppLogger.brands").EVENT.HELPTRAY_FOOTER_LINK_CLICK,{destination:a,page:c})},logFAQItemClick:function(a){b("AppLogger.brands").logForAnalytics(b("AppLogger.brands").CATEGORY.HELPTRAY,b("AppLogger.brands").EVENT.HELPTRAY_FAQ_ITEM_CLICK,{data:a})},logSearch:function(a){b("AppLogger.brands").logForAnalytics(b("AppLogger.brands").CATEGORY.HELPTRAY,b("AppLogger.brands").EVENT.HELPTRAY_SEARCH,{query:a})},logHelpTrayOpen:function(){b("AppLogger.brands").logForAnalytics(b("AppLogger.brands").CATEGORY.HELPTRAY,b("AppLogger.brands").EVENT.HELPTRAY_OPEN)},logNewbieProgramItemClick:function(a){b("AppLogger.brands").logForAnalytics(b("AppLogger.brands").CATEGORY.HELPTRAY,b("AppLogger.brands").EVENT.HELPTRAY_NEWBIE_PROGRAM_CLICK,{page:a})}};e.exports=a}),null);
__d("BizHomeHelpTrayLoggerStore",["AdsDataAtom","AdsHelpTrayPushCmsIdDataActionFlux","AdsHelpTraySearchQueryDataActionFlux","AdsHelpTrayToggleDataActionFlux","AdsHelpTrayUIStore","BizHomeHelpTrayLogger","FluxStore"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("FluxStore"));g&&g.prototype;a.prototype.__onDispatch=function(a){a=a.action;switch(a.actionType){case b("AdsHelpTrayToggleDataActionFlux").actionType:b("AdsHelpTrayUIStore").isTrayOpen()&&b("BizHomeHelpTrayLogger").logHelpTrayOpen();break;case b("AdsHelpTraySearchQueryDataActionFlux").actionType:a.data.query&&b("BizHomeHelpTrayLogger").logSearch(a.data.query);break;case b("AdsHelpTrayPushCmsIdDataActionFlux").actionType:b("BizHomeHelpTrayLogger").logFAQItemClick(a.data);break}};function a(){g.apply(this,arguments)}a.__moduleID=e.id;e.exports=new a(b("AdsDataAtom"))}),null);
__d("BizHomeHelpTrayBootloadContainer.brands",["AdsHelpTrayUIStore","BootloadedComponent.react","FluxMixinLegacy","JSResource","React","ReactComponentWithPureRenderMixin","BizHomeHelpTrayLoggerStore"],(function(a,b,c,d,e,f){"use strict";a=b("React").createClass({displayName:"BizHomeHelpTrayContainer",mixins:[b("FluxMixinLegacy")([b("AdsHelpTrayUIStore")]),b("ReactComponentWithPureRenderMixin")],statics:{calculateState:function(){return{hidden:!b("AdsHelpTrayUIStore").isTrayOpen()}}},componentDidMount:function(){b("BizHomeHelpTrayLoggerStore")},render:function(){return this.state.hidden?null:b("React").createElement(b("BootloadedComponent.react"),babelHelpers["extends"]({},this.props,{bootloadLoader:b("JSResource")("BizHomeHelpTrayContainer.brands").__setRef("BizHomeHelpTrayBootloadContainer.brands"),name:"BizHomeHelpTrayContainer",bootloadPlaceholder:b("React").createElement("div",null)}))}});e.exports=a}),null);
__d("BizNotificationPopoverInitializationHelper",["AdsNuxTourAbandonedDataAction","Arbiter","BizNotificationInitUnseenNotifsAction","BizNotificationReceivedNotifAction","BizNotificationSeenStateUpdateAction","BizNotificationSetJewelOpenAction","BizNotificationSetPrefsAction","NotificationBucketStoreManager","NotificationConstants","NotificationUpdates"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={initPrefs:function(a){b("BizNotificationSetPrefsAction").dispatch({prefs:a},{line:"31",module:"BizNotificationPopoverInitializationHelper.js"})},initTabs:function(a,c){b("BizNotificationInitUnseenNotifsAction").dispatch({initialUnseenNotifsCountByClassification:a,initialClassificationsForUnseenNotifs:c},{line:"41",module:"BizNotificationPopoverInitializationHelper.js"}),g.setupSubscriptions(),g.initSkipBucket()},initSkipBucket:function(){b("NotificationBucketStoreManager").setSkipBucketType("BIZ_CRITICAL")},setupSubscriptions:function(){b("NotificationUpdates").subscribe("update-notifications",function(a,c){a=c.payloadsource;if(a!==b("NotificationConstants").PayloadSourceType.LIVE_SEND&&a!==b("NotificationConstants").PayloadSourceType.USER_ACTION)return;a=c.nodes;c=c.seenState;a!=null?b("BizNotificationReceivedNotifAction").dispatch({notifs:a},{line:"67",module:"BizNotificationPopoverInitializationHelper.js"}):c!=null&&b("BizNotificationSeenStateUpdateAction").dispatch({seenState:c},{line:"72",module:"BizNotificationPopoverInitializationHelper.js"})}),b("Arbiter").subscribe("notificationJewel/opened",function(){b("BizNotificationSetJewelOpenAction").dispatch({isJewelOpen:!0},{line:"77",module:"BizNotificationPopoverInitializationHelper.js"})}),b("Arbiter").subscribe("notificationJewel/closed",function(){b("AdsNuxTourAbandonedDataAction").dispatch({},{line:"81",module:"BizNotificationPopoverInitializationHelper.js"}),b("BizNotificationSetJewelOpenAction").dispatch({isJewelOpen:!1},{line:"82",module:"BizNotificationPopoverInitializationHelper.js"})})}};e.exports=g}),null);
__d("XUIIndeterminateBadge",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){this.$1=a}a.prototype.getCount=function(){return 0};a.prototype.setCount=function(a){return};a.prototype.setLegacyContent=function(a){return};a.prototype.increment=function(){return};e.exports=a}),null);
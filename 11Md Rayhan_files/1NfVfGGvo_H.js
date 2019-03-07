if (self.CavalryLogger) { CavalryLogger.start_js(["k9tFo"]); }

__d("ReactComposerFunFactSinglePromptDialog.react",["ix","cx","CurrentUser","FacebookAppIDs","FunFactSinglePromptSelector.react","Image.react","LayerFadeOnHide","ProfileEngagementTypedLogger","ProfileFunFactsStrings","ProfileFunFactsTestIDs","React","SimpleNUXMessage","SimpleNUXMessageTypes","XUIAmbientNUX.react","XUIButton.react","XUIDialog.react","XUIDialogBody.react","XUIDialogTitle.react","asset"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=600;c=babelHelpers.inherits(a,b("React").Component);i=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.state={showNux:!b("SimpleNUXMessage").hasUserSeenMessage(b("SimpleNUXMessageTypes").PROFILE_FUN_FACTS_ASK_NUX)},this.$2=function(){b("SimpleNUXMessage").markMessageSeenByUser(b("SimpleNUXMessageTypes").PROFILE_FUN_FACTS_ASK_NUX),this.setState({showNux:!1})}.bind(this),this.$1=function(){new(b("ProfileEngagementTypedLogger"))().setProductBucket("fun_facts").setProfileIDDummy(b("CurrentUser").getID()).setSurface(this.props.isGroup?"group":"unknown").setEngagementType("tap").setAppID(b("FacebookAppIDs").WWW).setItemType("create_prompt").setEventMetadata({entry_point:this.props.entryPoint}).log(),this.props.onAsk()}.bind(this),this.$3=function(){this.$4("exit"),this.props.onClose()}.bind(this),c}a.prototype.render=function(){var a=this.props.isGroup?null:b("React").createElement(b("XUIButton.react"),{className:"_3-90",image:b("React").createElement(b("Image.react"),{src:g("407424")}),label:b("ProfileFunFactsStrings").MANAGE_QUESTIONS_NULL_STATE_CTA_BUTTON_TEXT,onClick:this.$1,ref:"createButton"}),c=a===null?null:b("React").createElement(b("XUIAmbientNUX.react"),{alignment:"right",contextRef:function(){return this.refs.createButton}.bind(this),onCloseButtonClick:this.$2,position:"above",shown:this.state.showNux},b("ProfileFunFactsStrings").SINGLE_PROMPT_ASK_NUX);return b("React").createElement(b("React").Fragment,null,b("React").createElement(b("XUIDialog.react"),{behaviors:{LayerFadeOnHide:b("LayerFadeOnHide")},"data-testid":b("ProfileFunFactsTestIDs").DIALOG,isStrictlyControlled:!0,onHide:this.$3,shown:this.props.showDialog,width:j},b("React").createElement(b("XUIDialogTitle.react"),{className:"_4xqu"},b("ProfileFunFactsStrings").SINGLE_PROMPT_DIALOG_TITLE,a),b("React").createElement(b("XUIDialogBody.react"),{useCustomPadding:!0},b("React").createElement("div",{className:"_4xqv _2ph_"},b("React").createElement("div",{className:"_64pf"},b("React").createElement(b("FunFactSinglePromptSelector.react"),this.props))))),c)};a.prototype.componentDidMount=function(){this.$4("enter")};a.prototype.$4=function(a){new(b("ProfileEngagementTypedLogger"))().setProductBucket("fun_facts").setProfileIDDummy(b("CurrentUser").getID()).setSurface(this.props.isGroup?"group":"unknown").setEngagementType(a).setAppID(b("FacebookAppIDs").WWW).setItemType("answer_tab").setItemSubtype("single_prompt").setEventMetadata({entry_point:this.props.entryPoint}).log()};e.exports=a}),null);
__d("ReactComposerFunFactToggleController.react",["Arbiter","ClickableArea.react","ComposerEntryPointRef","React","ReactComposerContextTypes","ReactComposerEvents","ReactComposerFunFactSinglePromptDialog.react","ReactComposerLoggingName","ReactComposerTaggerActions","ReactComposerTaggerType"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("React").PureComponent);g=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.$1=function(){b("ReactComposerTaggerActions").selectTagger(this.context.composerID,this.props.loggingName,b("ReactComposerTaggerType").FUN_FACT)}.bind(this),this.$4=function(){this.props.showDialog&&b("ReactComposerTaggerActions").deselectCurrentTagger(this.context.composerID,this.props.loggingName)}.bind(this),this.$3=function(){var a={entryPoint:this.props.entryPoint,isAskPost:!0};this.$6(a)}.bind(this),this.$5=function(a,b){a={entryPoint:this.props.entryPoint,prompt:a,promptID:a.id,tapTarget:b};this.$6(a)}.bind(this),c}a.prototype.render=function(){return b("React").createElement(b("ClickableArea.react"),{onClick:this.$1},b("React").createElement("span",null,this.props.children,this.$2()))};a.prototype.$2=function(){return!this.props.showDialog?null:b("React").createElement(b("ReactComposerFunFactSinglePromptDialog.react"),{entryPoint:this.props.entryPoint,onAsk:this.$3,onClose:this.$4,onSelect:this.$5,isGroup:this.context.composerType===b("ComposerEntryPointRef").GROUP,showDialog:this.props.showDialog})};a.prototype.$6=function(a){b("ReactComposerTaggerActions").setTaggerData(this.context.composerID,b("ReactComposerLoggingName").FUN_FACT,b("ReactComposerTaggerType").FUN_FACT,a),this.$4(),b("Arbiter").inform(b("ReactComposerEvents").ACTIVATE_ATTACHMENT+this.context.composerID)};a.contextTypes=b("ReactComposerContextTypes");e.exports=a}),null);
__d("ReactComposerFunFactSproutContainer.react",["ComposerEntryPointRef","CurrentUser","ExtensibleSproutsItemType","FacebookAppIDs","FluxContainer","ProfileEngagementTypedLogger","ProfileFunFactsEntryPoint","QE2Logger","React","ReactComposerContextTypes","ReactComposerDisabledSproutItem.react","ReactComposerFunFactToggleController.react","ReactComposerSproutItem.react","ReactComposerSproutsDefaultUIConfigTyped","ReactComposerTaggerStore","ReactComposerTaggerType"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("React").PureComponent);g&&g.prototype;a.getStores=function(){return[b("ReactComposerTaggerStore")]};a.calculateState=function(a,c,d){a=d.composerID;return{highlighted:b("ReactComposerTaggerStore").hasData(a,b("ReactComposerTaggerType").FUN_FACT),isDisabled:b("ReactComposerTaggerStore").isDisabled(a,b("ReactComposerTaggerType").FUN_FACT),isSelected:b("ReactComposerTaggerStore").getSelectedTagger(a)===b("ReactComposerTaggerType").FUN_FACT}};a.prototype.componentDidMount=function(){this.$1()};a.prototype.render=function(){return this.state.isDisabled?b("React").createElement(b("ReactComposerDisabledSproutItem.react"),{uiConfig:this.props.uiConfig}):b("React").createElement(b("ReactComposerFunFactToggleController.react"),{entryPoint:this.$2(),loggingName:this.props.uiConfig.loggingName,showDialog:this.state.isSelected},b("React").createElement(b("ReactComposerSproutItem.react"),{uiConfig:this.props.uiConfig,highlighted:this.state.highlighted}))};a.prototype.$2=function(){var a=this.props.config.loggingConfig?this.props.config.loggingConfig.ref:null;return a===b("ComposerEntryPointRef").TIMELINE?b("ProfileFunFactsEntryPoint").TIMELINE_COMPOSER:b("ProfileFunFactsEntryPoint").NEWSFEED_COMPOSER};a.prototype.$1=function(){b("QE2Logger").logExposureForUser("groups_composer_growth");var a=this.context.composerType===b("ComposerEntryPointRef").GROUP?"group":"unknown";new(b("ProfileEngagementTypedLogger"))().setProductBucket("fun_facts").setProfileIDDummy(b("CurrentUser").getID()).setSurface(a).setEngagementType("impression").setItemType("entry_point").setEventMetadata({entry_point:this.$2()}).setAppID(b("FacebookAppIDs").WWW).log()};function a(){g.apply(this,arguments)}a.defaultProps={uiConfig:b("ReactComposerSproutsDefaultUIConfigTyped").sproutsUIConfigMap[b("ExtensibleSproutsItemType").FUN_FACT]};a.contextTypes=b("ReactComposerContextTypes");e.exports=b("FluxContainer").create(a,{withContext:!0,withProps:!0})}),null);
"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[8103],{88103:(e,t,i)=>{i.r(t),i.d(t,{INotebookPathOpener:()=>C,INotebookShell:()=>y,NotebookApp:()=>H,NotebookShell:()=>k,PanelHandler:()=>f,Private:()=>v,SidePanelHandler:()=>w,SidePanelPalette:()=>W,defaultNotebookPathOpener:()=>b});var s,n=i(38075),r=i(59987),a=i(75677),o=i(20389),d=i(76107),l=i(56544),h=i(7801),p=i(14931),g=i(21961),u=i(2159),c=i(2260),_=i(29072),m=i(62633);class f{constructor(){this._panelChildHook=(e,t)=>{if("child-removed"===t.type){const e=t.child;p.ArrayExt.removeFirstWhere(this._items,(t=>t.widget===e))}return!0},this._items=new Array,this._panel=new c.Panel,m.MessageLoop.installMessageHook(this._panel,this._panelChildHook)}get panel(){return this._panel}addWidget(e,t){e.parent=null;const i={widget:e,rank:t},n=p.ArrayExt.upperBound(this._items,i,s.itemCmp);p.ArrayExt.insert(this._items,n,i),this._panel.insertWidget(n,e)}}class w extends f{constructor(e){super(),this._isHiddenByUser=!1,this._widgetAdded=new u.Signal(this),this._widgetRemoved=new u.Signal(this),this._area=e,this._panel.hide(),this._currentWidget=null,this._lastCurrentWidget=null,this._widgetPanel=new c.StackedPanel,this._widgetPanel.widgetRemoved.connect(this._onWidgetRemoved,this),this._closeButton=document.createElement("button"),_.closeIcon.element({container:this._closeButton,height:"16px",width:"auto"}),this._closeButton.onclick=()=>{this.collapse(),this.hide()},this._closeButton.className="jp-Button jp-SidePanel-collapse",this._closeButton.title="Collapse side panel";const t=new c.Widget({node:this._closeButton});this._panel.addWidget(t),this._panel.addWidget(this._widgetPanel)}get currentWidget(){return this._currentWidget||this._lastCurrentWidget||(this._items.length>0?this._items[0].widget:null)}get area(){return this._area}get isVisible(){return this._panel.isVisible}get panel(){return this._panel}get widgets(){return this._items.map((e=>e.widget))}get widgetAdded(){return this._widgetAdded}get widgetRemoved(){return this._widgetRemoved}get closeButton(){return this._closeButton}expand(e){e?this._currentWidget&&this._currentWidget.id===e?(this.collapse(),this.hide()):(this.collapse(),this.hide(),this.activate(e),this.show()):this.currentWidget&&(this._currentWidget=this.currentWidget,this.activate(this._currentWidget.id),this.show())}activate(e){const t=this._findWidgetByID(e);t&&(this._currentWidget=t,t.show(),t.activate())}has(e){return null!==this._findWidgetByID(e)}collapse(){var e;null===(e=this._currentWidget)||void 0===e||e.hide(),this._currentWidget=null}addWidget(e,t){e.parent=null,e.hide();const i={widget:e,rank:t},s=this._findInsertIndex(i);p.ArrayExt.insert(this._items,s,i),this._widgetPanel.insertWidget(s,e),this._refreshVisibility(),this._widgetAdded.emit(e)}hide(){this._isHiddenByUser=!0,this._refreshVisibility()}show(){this._isHiddenByUser=!1,this._refreshVisibility()}_findInsertIndex(e){return p.ArrayExt.upperBound(this._items,e,s.itemCmp)}_findWidgetIndex(e){return p.ArrayExt.findFirstIndex(this._items,(t=>t.widget===e))}_findWidgetByID(e){const t=(0,p.find)(this._items,(t=>t.widget.id===e));return t?t.widget:null}_refreshVisibility(){this._panel.setHidden(this._isHiddenByUser)}_onWidgetRemoved(e,t){t===this._lastCurrentWidget&&(this._lastCurrentWidget=null),p.ArrayExt.removeAt(this._items,this._findWidgetIndex(t)),this._refreshVisibility(),this._widgetRemoved.emit(t)}}class W{constructor(e){this._items=[],this._commandPalette=e.commandPalette,this._command=e.command}getItem(e,t){const i=this._items;for(let s=0;s<i.length;s++){const n=i[s];if(n.widgetId===e.id&&n.area===t)return n}return null}addItem(e,t){if(this.getItem(e,t))return;const i=this._commandPalette.addItem({command:this._command,category:"View",args:{side:t,title:`Show ${e.title.caption}`,id:e.id}});this._items.push({widgetId:e.id,area:t,disposable:i})}removeItem(e,t){const i=this.getItem(e,t);i&&i.disposable.dispose()}}!function(e){e.itemCmp=function(e,t){return e.rank-t.rank}}(s||(s={}));const y=new g.Token("@jupyter-notebook/application:INotebookShell");class k extends c.Widget{constructor(){super(),this._translator=h.nullTranslator,this._currentChanged=new u.Signal(this),this._mainWidgetLoaded=new g.PromiseDelegate,this.id="main",this._userLayout={},this._topHandler=new f,this._menuHandler=new f,this._leftHandler=new w("left"),this._rightHandler=new w("right"),this._main=new c.Panel;const e=this._topWrapper=new c.Panel,t=this._menuWrapper=new c.Panel;this._topHandler.panel.id="top-panel",this._topHandler.panel.node.setAttribute("role","banner"),this._menuHandler.panel.id="menu-panel",this._menuHandler.panel.node.setAttribute("role","navigation"),this._main.id="main-panel",this._main.node.setAttribute("role","main"),this._spacer_top=new c.Widget,this._spacer_top.id="spacer-widget-top",this._spacer_bottom=new c.Widget,this._spacer_bottom.id="spacer-widget-bottom",e.id="top-panel-wrapper",e.addWidget(this._topHandler.panel),t.id="menu-panel-wrapper",t.addWidget(this._menuHandler.panel);const i=new c.BoxLayout,s=this._leftHandler,n=this._rightHandler;s.panel.id="jp-left-stack",s.panel.node.setAttribute("role","complementary"),n.panel.id="jp-right-stack",n.panel.node.setAttribute("role","complementary"),s.hide(),n.hide();const r=new c.BoxLayout({spacing:0,direction:"top-to-bottom"});c.BoxLayout.setStretch(this._topWrapper,0),c.BoxLayout.setStretch(this._menuWrapper,0),c.BoxLayout.setStretch(this._main,1);const a=new c.Panel({layout:r});a.addWidget(this._topWrapper),a.addWidget(this._menuWrapper),a.addWidget(this._spacer_top),a.addWidget(this._main),a.addWidget(this._spacer_bottom),a.layout=r;const o=new c.SplitPanel;o.id="main-split-panel",o.spacing=1,c.BoxLayout.setStretch(o,1),c.SplitPanel.setStretch(s.panel,0),c.SplitPanel.setStretch(n.panel,0),c.SplitPanel.setStretch(a,1),o.addWidget(s.panel),o.addWidget(a),o.addWidget(n.panel),o.setRelativeSizes([1,2.5,1]),i.spacing=0,i.addWidget(o),this.layout=i;const d=this._skipLinkWidgetHandler=new v.SkipLinkWidgetHandler(this);this.add(d.skipLinkWidget,"top",{rank:0}),this._skipLinkWidgetHandler.show()}get currentChanged(){return this._currentChanged}get currentWidget(){var e;return null!==(e=this._main.widgets[0])&&void 0!==e?e:null}get top(){return this._topWrapper}get menu(){return this._menuWrapper}get leftHandler(){return this._leftHandler}get rightHandler(){return this._rightHandler}get leftCollapsed(){return!(this._leftHandler.isVisible&&this._leftHandler.panel.isVisible)}get rightCollapsed(){return!(this._rightHandler.isVisible&&this._rightHandler.panel.isVisible)}get restored(){return this._mainWidgetLoaded.promise}get translator(){var e;return null!==(e=this._translator)&&void 0!==e?e:h.nullTranslator}set translator(e){if(e!==this._translator){this._translator=e;const t=e.load("notebook");this._leftHandler.closeButton.title=t.__("Collapse %1 side panel",this._leftHandler.area),this._rightHandler.closeButton.title=t.__("Collapse %1 side panel",this._rightHandler.area)}}get userLayout(){return g.JSONExt.deepCopy(this._userLayout)}activateById(e){for(const t of["main","top","left","right","menu"]){const i=(0,p.find)(this.widgets(t),(t=>t.id===e));i&&("left"===t?this.expandLeft(e):"right"===t?this.expandRight(e):i.activate())}}add(e,t,i){var s,n;let r;r=(null==i?void 0:i.type)&&this._userLayout[i.type]?this._userLayout[i.type]:this._userLayout[e.id],t=null!==(s=null==r?void 0:r.area)&&void 0!==s?s:t;const a=null!==(n=null==(i=i||(null==r?void 0:r.options)?{...i,...null==r?void 0:r.options}:void 0)?void 0:i.rank)&&void 0!==n?n:900;switch(t){case"top":return this._topHandler.addWidget(e,a);case"menu":return this._menuHandler.addWidget(e,a);case"main":case void 0:{if(this._main.widgets.length>0)return;const t=this.currentWidget;this._main.addWidget(e),this._main.update(),this._currentChanged.emit({newValue:e,oldValue:t}),this._mainWidgetLoaded.resolve();break}case"left":return this._leftHandler.addWidget(e,a);case"right":return this._rightHandler.addWidget(e,a);default:console.warn(`Cannot add widget to area: ${t}`)}}collapseTop(){this._topWrapper.setHidden(!0),this._spacer_top.setHidden(!0)}expandTop(){this._topWrapper.setHidden(!1),this._spacer_top.setHidden(!1)}*widgets(e){switch(null!=e?e:"main"){case"top":return void(yield*this._topHandler.panel.widgets);case"menu":return void(yield*this._menuHandler.panel.widgets);case"main":return void(yield*this._main.widgets);case"left":return void(yield*this._leftHandler.widgets);case"right":return void(yield*this._rightHandler.widgets);default:return void console.error(`This shell has no area called "${e}"`)}}expandLeft(e){this._leftHandler.panel.show(),this._leftHandler.expand(e)}collapseLeft(){this._leftHandler.collapse(),this._leftHandler.panel.hide()}expandRight(e){this._rightHandler.panel.show(),this._rightHandler.expand(e)}collapseRight(){this._rightHandler.collapse(),this._rightHandler.panel.hide()}async restoreLayout(e){this._userLayout=e}}var v,P;!function(e){e.SkipLinkWidgetHandler=class{constructor(e){this._isDisposed=!1;const t=this._skipLinkWidget=new c.Widget,i=document.createElement("a");i.href="#first-cell",i.tabIndex=1,i.text="Skip to Main",i.className="skip-link",i.addEventListener("click",this),t.addClass("jp-skiplink"),t.id="jp-skiplink",t.node.appendChild(i)}handleEvent(e){"click"===e.type&&this._focusMain()}_focusMain(){const e=document.querySelector("#main-panel .jp-InputArea-editor");e.tabIndex=1,e.focus()}get skipLinkWidget(){return this._skipLinkWidget}dispose(){this.isDisposed||(this._isDisposed=!0,this._skipLinkWidget.node.removeEventListener("click",this),this._skipLinkWidget.dispose())}hide(){this._skipLinkWidget.hide()}show(){this._skipLinkWidget.show()}get isDisposed(){return this._isDisposed}}}(v||(v={}));class H extends n.JupyterFrontEnd{constructor(e={shell:new k}){var t,i;if(super({...e,shell:null!==(t=e.shell)&&void 0!==t?t:new k}),this.name="Jupyter Notebook",this.namespace=this.name,this.status=new o.J(this),this.version=null!==(i=d.PageConfig.getOption("appVersion"))&&void 0!==i?i:"unknown",this._info=n.JupyterLab.defaultInfo,this._formatter=new l.Throttler((()=>{P.setFormat(this)}),250),this.docRegistry.addModelFactory(new r.Base64ModelFactory),e.mimeExtensions)for(const t of(0,a.as)(e.mimeExtensions))this.registerPlugin(t);const s=Object.keys(n.JupyterLab.defaultInfo).reduce(((t,i)=>(i in e&&(t[i]=JSON.parse(JSON.stringify(e[i]))),t)),{});this._info={...n.JupyterLab.defaultInfo,...s},this.restored=this.shell.restored,this.restored.then((()=>this._formatter.invoke()))}get info(){return this._info}get paths(){return{urls:{base:d.PageConfig.getOption("baseUrl"),notFound:d.PageConfig.getOption("notFoundUrl"),app:d.PageConfig.getOption("appUrl"),static:d.PageConfig.getOption("staticUrl"),settings:d.PageConfig.getOption("settingsUrl"),themes:d.PageConfig.getOption("themesUrl"),doc:d.PageConfig.getOption("docUrl"),translations:d.PageConfig.getOption("translationsApiUrl"),hubHost:d.PageConfig.getOption("hubHost")||void 0,hubPrefix:d.PageConfig.getOption("hubPrefix")||void 0,hubUser:d.PageConfig.getOption("hubUser")||void 0,hubServerName:d.PageConfig.getOption("hubServerName")||void 0},directories:{appSettings:d.PageConfig.getOption("appSettingsDir"),schemas:d.PageConfig.getOption("schemasDir"),static:d.PageConfig.getOption("staticDir"),templates:d.PageConfig.getOption("templatesDir"),themes:d.PageConfig.getOption("themesDir"),userSettings:d.PageConfig.getOption("userSettingsDir"),serverRoot:d.PageConfig.getOption("serverRoot"),workspaces:d.PageConfig.getOption("workspacesDir")}}}handleEvent(e){super.handleEvent(e),"resize"===e.type&&this._formatter.invoke()}registerPluginModule(e){let t=e.default;Object.prototype.hasOwnProperty.call(e,"__esModule")||(t=e),Array.isArray(t)||(t=[t]),t.forEach((e=>{try{this.registerPlugin(e)}catch(e){console.error(e)}}))}registerPluginModules(e){e.forEach((e=>{this.registerPluginModule(e)}))}}!function(e){e.setFormat=function(e){e.format=window.matchMedia("only screen and (max-width: 760px)").matches?"mobile":"desktop"}}(P||(P={}));const b=new class{open(e){const{prefix:t,path:i,searchParams:s,target:n,features:r}=e,a=new URL(d.URLExt.join(t,null!=i?i:""),window.location.origin);return s&&(a.search=s.toString()),window.open(a,n,r)}},C=new g.Token("@jupyter-notebook/application:INotebookPathOpener")}}]);
//# sourceMappingURL=8103.4e3c99d.js.map
// Compiled by ClojureScript 0.0-2202
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('devcards.system');
goog.require('figwheel.client');
goog.require('devcards.util.edn_renderer');
goog.require('om.dom');
goog.require('frontier.cards');
goog.require('frontier.core');
goog.require('cljs.core.async');
goog.require('devcards.system');
goog.require('frontier.cards');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('devcards.util.edn_renderer');
goog.require('sablono.core');
goog.require('figwheel.client');
goog.require('clojure.string');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('frontier.core');
if(typeof devcards.core.devcard_event_chan !== 'undefined')
{} else
{devcards.core.devcard_event_chan = cljs.core.async.chan.call(null);
}
/**
* This function starts the full devcard UI.
*/
devcards.core.start_devcard_ui_BANG_ = (function start_devcard_ui_BANG_(){if(typeof devcards.core.devcard_system !== 'undefined')
{return null;
} else
{devcards.core.devcard_system = (function (){devcards.system.render_base_if_necessary_BANG_.call(null);
var ds = devcards.system.devcard_system_start.call(null,devcards.core.devcard_event_chan,devcards.system.throttle_function.call(null,devcards.system.devcard_renderer,50));devcards.system.register_listeners.call(null,devcards.core.devcard_event_chan);
return ds;
})();
}
});
/**
* Start a devcard UI that allows you to cherry pick which cards to display.
* You will need to call render-single-card to put cards into the dom.
*/
devcards.core.start_single_card_ui_BANG_ = (function start_single_card_ui_BANG_(){if(typeof devcards.core.devcard_single_card_system !== 'undefined')
{return null;
} else
{devcards.core.devcard_single_card_system = devcards.system.devcard_system_start.call(null,devcards.core.devcard_event_chan,devcards.system.throttle_function.call(null,(function (p__15464){var map__15465 = p__15464;var map__15465__$1 = ((cljs.core.seq_QMARK_.call(null,map__15465))?cljs.core.apply.call(null,cljs.core.hash_map,map__15465):map__15465);var event_chan = cljs.core.get.call(null,map__15465__$1,new cljs.core.Keyword(null,"event-chan","event-chan",1951581719));var state = cljs.core.get.call(null,map__15465__$1,new cljs.core.Keyword(null,"state","state",1123661827));devcards.system.unmount_card_nodes.call(null,state);
return devcards.system.mount_card_nodes.call(null,state);
}),50));
}
});
devcards.core.devcard_before_jsload = (function devcard_before_jsload(x){cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"before-jsload","before-jsload",3705046831),x], null));
return x;
});
devcards.core.devcard_on_jsload = (function devcard_on_jsload(x){cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",3412240276),x], null));
return x;
});
devcards.core.devcard_on_cssload = (function devcard_on_cssload(x){cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cssload","cssload",2084339931)], null));
return x;
});
devcards.core.devcard_on_compile_fail = (function devcard_on_compile_fail(exception_msg){cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-fail","compile-fail",1107360234),exception_msg], null));
return exception_msg;
});
/**
* Start the figwheel reloader and hook it into devcards so that cards
* are reloaded on code reloads.
*/
devcards.core.start_figwheel_reloader_BANG_ = (function() {
var start_figwheel_reloader_BANG_ = null;
var start_figwheel_reloader_BANG___0 = (function (){return start_figwheel_reloader_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var start_figwheel_reloader_BANG___1 = (function (opts){return figwheel.client.watch_and_reload_with_opts.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"before-jsload","before-jsload",3705046831),cljs.core.comp.call(null,devcards.core.devcard_before_jsload,figwheel.client.default_before_load),new cljs.core.Keyword(null,"on-jsload","on-jsload",817745103),devcards.core.devcard_on_jsload,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",846779160),cljs.core.comp.call(null,devcards.core.devcard_on_compile_fail,figwheel.client.default_on_compile_fail),new cljs.core.Keyword(null,"on-cssload","on-cssload",1611735789),cljs.core.comp.call(null,devcards.core.devcard_on_cssload,figwheel.client.default_on_cssload)));
});
start_figwheel_reloader_BANG_ = function(opts){
switch(arguments.length){
case 0:
return start_figwheel_reloader_BANG___0.call(this);
case 1:
return start_figwheel_reloader_BANG___1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start_figwheel_reloader_BANG_.cljs$core$IFn$_invoke$arity$0 = start_figwheel_reloader_BANG___0;
start_figwheel_reloader_BANG_.cljs$core$IFn$_invoke$arity$1 = start_figwheel_reloader_BANG___1;
return start_figwheel_reloader_BANG_;
})()
;
devcards.core.register_card = (function register_card(path,options,func){return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-card","register-card",3872264044),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"options","options",4059396624),options,new cljs.core.Keyword(null,"func","func",1017058870),func], null)], null));
});
devcards.core.render_single_card = (function render_single_card(card_path,node){var id = devcards.system.path__GT_unique_card_id.call(null,card_path);if(cljs.core.truth_(document.getElementById(id)))
{return null;
} else
{return $(node).html([cljs.core.str("<div class='devcard-rendered-card' id='"),cljs.core.str(id),cljs.core.str("'></div>")].join(''));
}
});
devcards.core.edn__GT_html = devcards.util.edn_renderer.html_edn;
devcards.core.leading_space_count = (function leading_space_count(s){var temp__4126__auto__ = cljs.core.second.call(null,cljs.core.re_matches.call(null,/^([\s]*).*/,s));if(cljs.core.truth_(temp__4126__auto__))
{var ws = temp__4126__auto__;return ws.length;
} else
{return null;
}
});
devcards.core.code_delim_QMARK_ = (function code_delim_QMARK_(s){var and__7857__auto__ = !((s == null));if(and__7857__auto__)
{return cljs.core.re_matches.call(null,/^\s*```.*/,s);
} else
{return and__7857__auto__;
}
});
devcards.core.group_and_trim_code_block = (function group_and_trim_code_block(xs){var opener = cljs.core.first.call(null,xs);var leading_spaces = devcards.core.leading_space_count.call(null,opener);var code_block = cljs.core.take_while.call(null,cljs.core.complement.call(null,devcards.core.code_delim_QMARK_),cljs.core.rest.call(null,xs));var after_code_block = cljs.core.rest.call(null,cljs.core.drop_while.call(null,cljs.core.complement.call(null,devcards.core.code_delim_QMARK_),cljs.core.rest.call(null,xs)));return cljs.core.cons.call(null,clojure.string.join.call(null,"\n",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.trim.call(null,opener)], null),cljs.core.map.call(null,((function (opener,leading_spaces,code_block,after_code_block){
return (function (p1__15466_SHARP_){return cljs.core.subs.call(null,p1__15466_SHARP_,leading_spaces);
});})(opener,leading_spaces,code_block,after_code_block))
,code_block),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["```"], null))),after_code_block);
});
devcards.core.group_and_trim_code_blocks = (function group_and_trim_code_blocks(xs){if((xs == null))
{return cljs.core.PersistentVector.EMPTY;
} else
{if(cljs.core.empty_QMARK_.call(null,xs))
{return cljs.core.PersistentVector.EMPTY;
} else
{if(cljs.core.truth_(devcards.core.code_delim_QMARK_.call(null,cljs.core.first.call(null,xs))))
{return group_and_trim_code_blocks.call(null,devcards.core.group_and_trim_code_block.call(null,xs));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xs),group_and_trim_code_blocks.call(null,cljs.core.rest.call(null,xs)));
} else
{return null;
}
}
}
}
});
devcards.core.trim_markdown_string = (function trim_markdown_string(s){if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.re_matches.call(null,/^```[\s\S]*/,s))))
{return s;
} else
{return clojure.string.join.call(null,"\n",cljs.core.map.call(null,clojure.string.trim,devcards.core.group_and_trim_code_blocks.call(null,clojure.string.split.call(null,s,"\n"))));
}
});
devcards.core.preformat_markdown = (function preformat_markdown(mkdn_strs){return clojure.string.join.call(null,"\n",cljs.core.map.call(null,devcards.core.trim_markdown_string,mkdn_strs));
});
var conv_class_15467 = Showdown.converter;var converter_15468 = (new conv_class_15467());/**
* render markdown
*/
devcards.core.markdown_to_html = ((function (conv_class_15467,converter_15468){
return (function markdown_to_html(markdown_txt){return converter_15468.makeHtml(markdown_txt);
});})(conv_class_15467,converter_15468))
;
devcards.core.less_sensitive_markdown = cljs.core.comp.call(null,devcards.core.markdown_to_html,devcards.core.preformat_markdown);
/**
* Render a react component to a node.
*/
devcards.core.render_to = (function() {
var render_to = null;
var render_to__2 = (function (react_dom,html_node){return render_to.call(null,react_dom,html_node,cljs.core.identity);
});
var render_to__3 = (function (react_dom,html_node,callback){return React.renderComponent(react_dom,html_node,callback);
});
render_to = function(react_dom,html_node,callback){
switch(arguments.length){
case 2:
return render_to__2.call(this,react_dom,html_node);
case 3:
return render_to__3.call(this,react_dom,html_node,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_to.cljs$core$IFn$_invoke$arity$2 = render_to__2;
render_to.cljs$core$IFn$_invoke$arity$3 = render_to__3;
return render_to;
})()
;
devcards.core.unmount_react = (function unmount_react(node){return React.unmountComponentAtNode(node);
});
devcards.core.react_raw = (function react_raw(raw_html_str){return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",871417640),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",3824621309),raw_html_str], null)], null)));
});

/**
* @constructor
* @param {*} react_component
* @param {*} options
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
devcards.core.ReactCard = (function (react_component,options,__meta,__extmap){
this.react_component = react_component;
this.options = options;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
devcards.core.ReactCard.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8455__auto__,k__8456__auto__){var self__ = this;
var this__8455__auto____$1 = this;return cljs.core._lookup.call(null,this__8455__auto____$1,k__8456__auto__,null);
});
devcards.core.ReactCard.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8457__auto__,k15470,else__8458__auto__){var self__ = this;
var this__8457__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k15470,new cljs.core.Keyword(null,"react-component","react-component",3407231393)))
{return self__.react_component;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k15470,new cljs.core.Keyword(null,"options","options",4059396624)))
{return self__.options;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k15470,else__8458__auto__);
} else
{return null;
}
}
}
});
devcards.core.ReactCard.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8469__auto__,writer__8470__auto__,opts__8471__auto__){var self__ = this;
var this__8469__auto____$1 = this;var pr_pair__8472__auto__ = ((function (this__8469__auto____$1){
return (function (keyval__8473__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8470__auto__,cljs.core.pr_writer,""," ","",opts__8471__auto__,keyval__8473__auto__);
});})(this__8469__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8470__auto__,pr_pair__8472__auto__,"#devcards.core.ReactCard{",", ","}",opts__8471__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"react-component","react-component",3407231393),self__.react_component],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",4059396624),self__.options],null))], null),self__.__extmap));
});
devcards.core.ReactCard.prototype.devcards$system$IConfig$ = true;
devcards.core.ReactCard.prototype.devcards$system$IConfig$_options$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unmount-on-reload","unmount-on-reload",4064716876),false], null),self__.options);
});
devcards.core.ReactCard.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8453__auto__){var self__ = this;
var this__8453__auto____$1 = this;return self__.__meta;
});
devcards.core.ReactCard.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8449__auto__){var self__ = this;
var this__8449__auto____$1 = this;return (new devcards.core.ReactCard(self__.react_component,self__.options,self__.__meta,self__.__extmap,self__.__hash));
});
devcards.core.ReactCard.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8459__auto__){var self__ = this;
var this__8459__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
devcards.core.ReactCard.prototype.devcards$system$IUnMount$ = true;
devcards.core.ReactCard.prototype.devcards$system$IUnMount$unmount$arity$2 = (function (_,p__15472){var self__ = this;
var map__15473 = p__15472;var map__15473__$1 = ((cljs.core.seq_QMARK_.call(null,map__15473))?cljs.core.apply.call(null,cljs.core.hash_map,map__15473):map__15473);var node = cljs.core.get.call(null,map__15473__$1,new cljs.core.Keyword(null,"node","node",1017291124));var ___$1 = this;return devcards.core.unmount_react.call(null,node);
});
devcards.core.ReactCard.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8450__auto__){var self__ = this;
var this__8450__auto____$1 = this;var h__8280__auto__ = self__.__hash;if(!((h__8280__auto__ == null)))
{return h__8280__auto__;
} else
{var h__8280__auto____$1 = cljs.core.hash_imap.call(null,this__8450__auto____$1);self__.__hash = h__8280__auto____$1;
return h__8280__auto____$1;
}
});
devcards.core.ReactCard.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8451__auto__,other__8452__auto__){var self__ = this;
var this__8451__auto____$1 = this;if(cljs.core.truth_((function (){var and__7857__auto__ = other__8452__auto__;if(cljs.core.truth_(and__7857__auto__))
{return ((this__8451__auto____$1.constructor === other__8452__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8451__auto____$1,other__8452__auto__));
} else
{return and__7857__auto__;
}
})()))
{return true;
} else
{return false;
}
});
devcards.core.ReactCard.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8464__auto__,k__8465__auto__){var self__ = this;
var this__8464__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"react-component","react-component",3407231393),null,new cljs.core.Keyword(null,"options","options",4059396624),null], null), null),k__8465__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8464__auto____$1),self__.__meta),k__8465__auto__);
} else
{return (new devcards.core.ReactCard(self__.react_component,self__.options,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8465__auto__)),null));
}
});
devcards.core.ReactCard.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8462__auto__,k__8463__auto__,G__15469){var self__ = this;
var this__8462__auto____$1 = this;var pred__15474 = cljs.core.keyword_identical_QMARK_;var expr__15475 = k__8463__auto__;if(cljs.core.truth_(pred__15474.call(null,new cljs.core.Keyword(null,"react-component","react-component",3407231393),expr__15475)))
{return (new devcards.core.ReactCard(G__15469,self__.options,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15474.call(null,new cljs.core.Keyword(null,"options","options",4059396624),expr__15475)))
{return (new devcards.core.ReactCard(self__.react_component,G__15469,self__.__meta,self__.__extmap,null));
} else
{return (new devcards.core.ReactCard(self__.react_component,self__.options,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8463__auto__,G__15469),null));
}
}
});
devcards.core.ReactCard.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8467__auto__){var self__ = this;
var this__8467__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"react-component","react-component",3407231393),self__.react_component],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",4059396624),self__.options],null))], null),self__.__extmap));
});
devcards.core.ReactCard.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8454__auto__,G__15469){var self__ = this;
var this__8454__auto____$1 = this;return (new devcards.core.ReactCard(self__.react_component,self__.options,G__15469,self__.__extmap,self__.__hash));
});
devcards.core.ReactCard.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8460__auto__,entry__8461__auto__){var self__ = this;
var this__8460__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8461__auto__))
{return cljs.core._assoc.call(null,this__8460__auto____$1,cljs.core._nth.call(null,entry__8461__auto__,0),cljs.core._nth.call(null,entry__8461__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8460__auto____$1,entry__8461__auto__);
}
});
devcards.core.ReactCard.prototype.devcards$system$IMount$ = true;
devcards.core.ReactCard.prototype.devcards$system$IMount$mount$arity$2 = (function (_,p__15477){var self__ = this;
var map__15478 = p__15477;var map__15478__$1 = ((cljs.core.seq_QMARK_.call(null,map__15478))?cljs.core.apply.call(null,cljs.core.hash_map,map__15478):map__15478);var node = cljs.core.get.call(null,map__15478__$1,new cljs.core.Keyword(null,"node","node",1017291124));var ___$1 = this;return devcards.core.render_to.call(null,self__.react_component,node);
});
devcards.core.ReactCard.cljs$lang$type = true;
devcards.core.ReactCard.cljs$lang$ctorPrSeq = (function (this__8489__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/ReactCard");
});
devcards.core.ReactCard.cljs$lang$ctorPrWriter = (function (this__8489__auto__,writer__8490__auto__){return cljs.core._write.call(null,writer__8490__auto__,"devcards.core/ReactCard");
});
devcards.core.__GT_ReactCard = (function __GT_ReactCard(react_component,options){return (new devcards.core.ReactCard(react_component,options));
});
devcards.core.map__GT_ReactCard = (function map__GT_ReactCard(G__15471){return (new devcards.core.ReactCard(new cljs.core.Keyword(null,"react-component","react-component",3407231393).cljs$core$IFn$_invoke$arity$1(G__15471),new cljs.core.Keyword(null,"options","options",4059396624).cljs$core$IFn$_invoke$arity$1(G__15471),null,cljs.core.dissoc.call(null,G__15471,new cljs.core.Keyword(null,"react-component","react-component",3407231393),new cljs.core.Keyword(null,"options","options",4059396624))));
});
/**
* Simple react card. It only renders the react component passed in.
*/
devcards.core.react_card = (function() {
var react_card = null;
var react_card__1 = (function (react_component){return react_card.call(null,react_component,cljs.core.PersistentArrayMap.EMPTY);
});
var react_card__2 = (function (react_component,options){return (new devcards.core.ReactCard(react_component,options));
});
react_card = function(react_component,options){
switch(arguments.length){
case 1:
return react_card__1.call(this,react_component);
case 2:
return react_card__2.call(this,react_component,options);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
react_card.cljs$core$IFn$_invoke$arity$1 = react_card__1;
react_card.cljs$core$IFn$_invoke$arity$2 = react_card__2;
return react_card;
})()
;
/**
* Card that renders sablono.
*/
devcards.core.sab_card = (function() {
var sab_card = null;
var sab_card__1 = (function (sab_template){return devcards.core.react_card.call(null,sablono.interpreter.interpret.call(null,sab_template),cljs.core.PersistentArrayMap.EMPTY);
});
var sab_card__2 = (function (sab_template,options){return devcards.core.react_card.call(null,sablono.interpreter.interpret.call(null,sab_template),options);
});
sab_card = function(sab_template,options){
switch(arguments.length){
case 1:
return sab_card__1.call(this,sab_template);
case 2:
return sab_card__2.call(this,sab_template,options);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sab_card.cljs$core$IFn$_invoke$arity$1 = sab_card__1;
sab_card.cljs$core$IFn$_invoke$arity$2 = sab_card__2;
return sab_card;
})()
;
devcards.core.box_data_atom = (function box_data_atom(initial_state){if(cljs.core.truth_((function (){var and__7857__auto__ = initial_state;if(cljs.core.truth_(and__7857__auto__))
{var G__15480 = initial_state;if(G__15480)
{var bit__8519__auto__ = (G__15480.cljs$lang$protocol_mask$partition1$ & 16384);if((bit__8519__auto__) || (G__15480.cljs$core$IAtom$))
{return true;
} else
{if((!G__15480.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__15480);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__15480);
}
} else
{return and__7857__auto__;
}
})()))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__devcards-atom-box","__devcards-atom-box",2698794336),initial_state], null);
} else
{return initial_state;
}
});
devcards.core.unbox_data_atom = (function unbox_data_atom(data_atom){var or__7869__auto__ = (function (){var and__7857__auto__ = cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,data_atom));if(and__7857__auto__)
{return new cljs.core.Keyword(null,"__devcards-atom-box","__devcards-atom-box",2698794336).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data_atom));
} else
{return and__7857__auto__;
}
})();if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return data_atom;
}
});
devcards.core.edn_card = (function edn_card(clj_data){if((function (){var G__15486 = clj_data;if(G__15486)
{var bit__8519__auto__ = (G__15486.cljs$lang$protocol_mask$partition1$ & 16384);if((bit__8519__auto__) || (G__15486.cljs$core$IAtom$))
{return true;
} else
{if((!G__15486.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__15486);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__15486);
}
})())
{return devcards.core.om_root_card.call(null,(function (p1__15481_SHARP_){if(typeof devcards.core.t15487 !== 'undefined')
{} else
{
/**
* @constructor
*/
devcards.core.t15487 = (function (p1__15481_SHARP_,clj_data,edn_card,meta15488){
this.p1__15481_SHARP_ = p1__15481_SHARP_;
this.clj_data = clj_data;
this.edn_card = edn_card;
this.meta15488 = meta15488;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
devcards.core.t15487.cljs$lang$type = true;
devcards.core.t15487.cljs$lang$ctorStr = "devcards.core/t15487";
devcards.core.t15487.cljs$lang$ctorPrWriter = (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"devcards.core/t15487");
});
devcards.core.t15487.prototype.om$core$IRender$ = true;
devcards.core.t15487.prototype.om$core$IRender$render$arity$1 = (function (this__15179__auto__){var self__ = this;
var this__15179__auto____$1 = this;return devcards.core.edn__GT_html.call(null,self__.p1__15481_SHARP_);
});
devcards.core.t15487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15489){var self__ = this;
var _15489__$1 = this;return self__.meta15488;
});
devcards.core.t15487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15489,meta15488__$1){var self__ = this;
var _15489__$1 = this;return (new devcards.core.t15487(self__.p1__15481_SHARP_,self__.clj_data,self__.edn_card,meta15488__$1));
});
devcards.core.__GT_t15487 = (function __GT_t15487(p1__15481_SHARP___$1,clj_data__$1,edn_card__$1,meta15488){return (new devcards.core.t15487(p1__15481_SHARP___$1,clj_data__$1,edn_card__$1,meta15488));
});
}
return (new devcards.core.t15487(p1__15481_SHARP_,clj_data,edn_card,null));
}),clj_data);
} else
{return devcards.core.react_card.call(null,devcards.core.edn__GT_html.call(null,clj_data));
}
});

/**
* @constructor
* @param {*} react_component_fn
* @param {*} uniq_key
* @param {*} options
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
devcards.core.ReactRunnerCard = (function (react_component_fn,uniq_key,options,__meta,__extmap){
this.react_component_fn = react_component_fn;
this.uniq_key = uniq_key;
this.options = options;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
devcards.core.ReactRunnerCard.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8455__auto__,k__8456__auto__){var self__ = this;
var this__8455__auto____$1 = this;return cljs.core._lookup.call(null,this__8455__auto____$1,k__8456__auto__,null);
});
devcards.core.ReactRunnerCard.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8457__auto__,k15491,else__8458__auto__){var self__ = this;
var this__8457__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k15491,new cljs.core.Keyword(null,"react-component-fn","react-component-fn",4165992600)))
{return self__.react_component_fn;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k15491,new cljs.core.Keyword(null,"uniq-key","uniq-key",717305733)))
{return self__.uniq_key;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k15491,new cljs.core.Keyword(null,"options","options",4059396624)))
{return self__.options;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k15491,else__8458__auto__);
} else
{return null;
}
}
}
}
});
devcards.core.ReactRunnerCard.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8469__auto__,writer__8470__auto__,opts__8471__auto__){var self__ = this;
var this__8469__auto____$1 = this;var pr_pair__8472__auto__ = ((function (this__8469__auto____$1){
return (function (keyval__8473__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8470__auto__,cljs.core.pr_writer,""," ","",opts__8471__auto__,keyval__8473__auto__);
});})(this__8469__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8470__auto__,pr_pair__8472__auto__,"#devcards.core.ReactRunnerCard{",", ","}",opts__8471__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"react-component-fn","react-component-fn",4165992600),self__.react_component_fn],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"uniq-key","uniq-key",717305733),self__.uniq_key],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",4059396624),self__.options],null))], null),self__.__extmap));
});
devcards.core.ReactRunnerCard.prototype.devcards$system$IConfig$ = true;
devcards.core.ReactRunnerCard.prototype.devcards$system$IConfig$_options$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unmount-on-reload","unmount-on-reload",4064716876),false], null),self__.options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial-state","initial-state",4067401786),devcards.core.box_data_atom.call(null,new cljs.core.Keyword(null,"initial-state","initial-state",4067401786).cljs$core$IFn$_invoke$arity$1(self__.options))], null));
});
devcards.core.ReactRunnerCard.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8453__auto__){var self__ = this;
var this__8453__auto____$1 = this;return self__.__meta;
});
devcards.core.ReactRunnerCard.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8449__auto__){var self__ = this;
var this__8449__auto____$1 = this;return (new devcards.core.ReactRunnerCard(self__.react_component_fn,self__.uniq_key,self__.options,self__.__meta,self__.__extmap,self__.__hash));
});
devcards.core.ReactRunnerCard.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8459__auto__){var self__ = this;
var this__8459__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
devcards.core.ReactRunnerCard.prototype.devcards$system$IUnMount$ = true;
devcards.core.ReactRunnerCard.prototype.devcards$system$IUnMount$unmount$arity$2 = (function (_,p__15493){var self__ = this;
var map__15494 = p__15493;var map__15494__$1 = ((cljs.core.seq_QMARK_.call(null,map__15494))?cljs.core.apply.call(null,cljs.core.hash_map,map__15494):map__15494);var data_atom = cljs.core.get.call(null,map__15494__$1,new cljs.core.Keyword(null,"data-atom","data-atom",603797766));var node = cljs.core.get.call(null,map__15494__$1,new cljs.core.Keyword(null,"node","node",1017291124));var ___$1 = this;cljs.core.remove_watch.call(null,devcards.core.unbox_data_atom.call(null,data_atom),self__.uniq_key);
return devcards.core.unmount_react.call(null,node);
});
devcards.core.ReactRunnerCard.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8450__auto__){var self__ = this;
var this__8450__auto____$1 = this;var h__8280__auto__ = self__.__hash;if(!((h__8280__auto__ == null)))
{return h__8280__auto__;
} else
{var h__8280__auto____$1 = cljs.core.hash_imap.call(null,this__8450__auto____$1);self__.__hash = h__8280__auto____$1;
return h__8280__auto____$1;
}
});
devcards.core.ReactRunnerCard.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8451__auto__,other__8452__auto__){var self__ = this;
var this__8451__auto____$1 = this;if(cljs.core.truth_((function (){var and__7857__auto__ = other__8452__auto__;if(cljs.core.truth_(and__7857__auto__))
{return ((this__8451__auto____$1.constructor === other__8452__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8451__auto____$1,other__8452__auto__));
} else
{return and__7857__auto__;
}
})()))
{return true;
} else
{return false;
}
});
devcards.core.ReactRunnerCard.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8464__auto__,k__8465__auto__){var self__ = this;
var this__8464__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"react-component-fn","react-component-fn",4165992600),null,new cljs.core.Keyword(null,"options","options",4059396624),null,new cljs.core.Keyword(null,"uniq-key","uniq-key",717305733),null], null), null),k__8465__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8464__auto____$1),self__.__meta),k__8465__auto__);
} else
{return (new devcards.core.ReactRunnerCard(self__.react_component_fn,self__.uniq_key,self__.options,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8465__auto__)),null));
}
});
devcards.core.ReactRunnerCard.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8462__auto__,k__8463__auto__,G__15490){var self__ = this;
var this__8462__auto____$1 = this;var pred__15495 = cljs.core.keyword_identical_QMARK_;var expr__15496 = k__8463__auto__;if(cljs.core.truth_(pred__15495.call(null,new cljs.core.Keyword(null,"react-component-fn","react-component-fn",4165992600),expr__15496)))
{return (new devcards.core.ReactRunnerCard(G__15490,self__.uniq_key,self__.options,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15495.call(null,new cljs.core.Keyword(null,"uniq-key","uniq-key",717305733),expr__15496)))
{return (new devcards.core.ReactRunnerCard(self__.react_component_fn,G__15490,self__.options,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15495.call(null,new cljs.core.Keyword(null,"options","options",4059396624),expr__15496)))
{return (new devcards.core.ReactRunnerCard(self__.react_component_fn,self__.uniq_key,G__15490,self__.__meta,self__.__extmap,null));
} else
{return (new devcards.core.ReactRunnerCard(self__.react_component_fn,self__.uniq_key,self__.options,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8463__auto__,G__15490),null));
}
}
}
});
devcards.core.ReactRunnerCard.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8467__auto__){var self__ = this;
var this__8467__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"react-component-fn","react-component-fn",4165992600),self__.react_component_fn],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"uniq-key","uniq-key",717305733),self__.uniq_key],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",4059396624),self__.options],null))], null),self__.__extmap));
});
devcards.core.ReactRunnerCard.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8454__auto__,G__15490){var self__ = this;
var this__8454__auto____$1 = this;return (new devcards.core.ReactRunnerCard(self__.react_component_fn,self__.uniq_key,self__.options,G__15490,self__.__extmap,self__.__hash));
});
devcards.core.ReactRunnerCard.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8460__auto__,entry__8461__auto__){var self__ = this;
var this__8460__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8461__auto__))
{return cljs.core._assoc.call(null,this__8460__auto____$1,cljs.core._nth.call(null,entry__8461__auto__,0),cljs.core._nth.call(null,entry__8461__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8460__auto____$1,entry__8461__auto__);
}
});
devcards.core.ReactRunnerCard.prototype.devcards$system$IMount$ = true;
devcards.core.ReactRunnerCard.prototype.devcards$system$IMount$mount$arity$2 = (function (_,p__15498){var self__ = this;
var map__15499 = p__15498;var map__15499__$1 = ((cljs.core.seq_QMARK_.call(null,map__15499))?cljs.core.apply.call(null,cljs.core.hash_map,map__15499):map__15499);var data_atom = cljs.core.get.call(null,map__15499__$1,new cljs.core.Keyword(null,"data-atom","data-atom",603797766));var node = cljs.core.get.call(null,map__15499__$1,new cljs.core.Keyword(null,"node","node",1017291124));var ___$1 = this;var da = devcards.core.unbox_data_atom.call(null,data_atom);cljs.core.add_watch.call(null,da,self__.uniq_key,((function (da,___$1,map__15499,map__15499__$1,data_atom,node){
return (function (___$2,___$3,___$4,___$5){return devcards.core.render_to.call(null,self__.react_component_fn.call(null,da),node);
});})(da,___$1,map__15499,map__15499__$1,data_atom,node))
);
return cljs.core.reset_BANG_.call(null,da,cljs.core.deref.call(null,da));
});
devcards.core.ReactRunnerCard.cljs$lang$type = true;
devcards.core.ReactRunnerCard.cljs$lang$ctorPrSeq = (function (this__8489__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/ReactRunnerCard");
});
devcards.core.ReactRunnerCard.cljs$lang$ctorPrWriter = (function (this__8489__auto__,writer__8490__auto__){return cljs.core._write.call(null,writer__8490__auto__,"devcards.core/ReactRunnerCard");
});
devcards.core.__GT_ReactRunnerCard = (function __GT_ReactRunnerCard(react_component_fn,uniq_key,options){return (new devcards.core.ReactRunnerCard(react_component_fn,uniq_key,options));
});
devcards.core.map__GT_ReactRunnerCard = (function map__GT_ReactRunnerCard(G__15492){return (new devcards.core.ReactRunnerCard(new cljs.core.Keyword(null,"react-component-fn","react-component-fn",4165992600).cljs$core$IFn$_invoke$arity$1(G__15492),new cljs.core.Keyword(null,"uniq-key","uniq-key",717305733).cljs$core$IFn$_invoke$arity$1(G__15492),new cljs.core.Keyword(null,"options","options",4059396624).cljs$core$IFn$_invoke$arity$1(G__15492),null,cljs.core.dissoc.call(null,G__15492,new cljs.core.Keyword(null,"react-component-fn","react-component-fn",4165992600),new cljs.core.Keyword(null,"uniq-key","uniq-key",717305733),new cljs.core.Keyword(null,"options","options",4059396624))));
});
/**
* This card takes a function which takes a data atom and returns a
* react component. Any changes to the atom cause the component to
* rerender.
*/
devcards.core.react_runner_card = (function() {
var react_runner_card = null;
var react_runner_card__1 = (function (react_component_fn){return react_runner_card.call(null,react_component_fn,cljs.core.PersistentArrayMap.EMPTY);
});
var react_runner_card__2 = (function (react_component_fn,options){return (new devcards.core.ReactRunnerCard(react_component_fn,cljs.core.keyword.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"react-runner","react-runner",-679080713,null))),options));
});
react_runner_card = function(react_component_fn,options){
switch(arguments.length){
case 1:
return react_runner_card__1.call(this,react_component_fn);
case 2:
return react_runner_card__2.call(this,react_component_fn,options);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
react_runner_card.cljs$core$IFn$_invoke$arity$1 = react_runner_card__1;
react_runner_card.cljs$core$IFn$_invoke$arity$2 = react_runner_card__2;
return react_runner_card;
})()
;
devcards.core.render_test = (function (){var method_table__8727__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8728__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8729__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8730__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8731__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("render-test",((function (method_table__8727__auto__,prefer_table__8728__auto__,method_cache__8729__auto__,cached_hierarchy__8730__auto__,hierarchy__8731__auto__){
return (function (x){if(cljs.core.map_QMARK_.call(null,x))
{return new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(x);
} else
{if(typeof x === 'string')
{return new cljs.core.Keyword(null,"string","string",4416885635);
} else
{return null;
}
}
});})(method_table__8727__auto__,prefer_table__8728__auto__,method_cache__8729__auto__,cached_hierarchy__8730__auto__,hierarchy__8731__auto__))
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8731__auto__,method_table__8727__auto__,prefer_table__8728__auto__,method_cache__8729__auto__,cached_hierarchy__8730__auto__));
})();
devcards.core.test_wrapper = (function test_wrapper(test,body){return React.DOM.li({"className": [cljs.core.str("list-group-item list-group-item-"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"passed","passed",4313490402).cljs$core$IFn$_invoke$arity$1(test))?"success":"danger"))].join('')},React.DOM.span({"className": [cljs.core.str("devcards-test-icon glyphicon glyphicon-"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"passed","passed",4313490402).cljs$core$IFn$_invoke$arity$1(test))?"ok":"remove"))].join('')}),body);
});
cljs.core._add_method.call(null,devcards.core.render_test,new cljs.core.Keyword(null,"string","string",4416885635),(function (s){return React.DOM.li({"className": "list-group-item"},devcards.core.react_raw.call(null,devcards.core.less_sensitive_markdown.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null))));
}));
devcards.core.error_message = (function error_message(test,val1,val_join_msg,val2){if(cljs.core.not.call(null,new cljs.core.Keyword(null,"passed","passed",4313490402).cljs$core$IFn$_invoke$arity$1(test)))
{return React.DOM.span({"className": "explain"},"Expected ",React.DOM.span({"className": "code"},val1),val_join_msg,React.DOM.span({"className": "code"},val2));
} else
{return React.DOM.span({},"");
}
});
cljs.core._add_method.call(null,devcards.core.render_test,new cljs.core.Keyword(null,"is","is",1013907612),(function (test){return devcards.core.test_wrapper.call(null,test,React.DOM.span({"className": "devcards-test-body"},React.DOM.span({"className": "operator"},"is"),React.DOM.span({"className": "result-area"},React.DOM.span({"className": "exp"},cljs.core.prn_str.call(null,new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(test))),devcards.core.error_message.call(null,test,cljs.core.prn_str.call(null,new cljs.core.Keyword(null,"passed","passed",4313490402).cljs$core$IFn$_invoke$arity$1(test))," to be ","true"))));
}));
devcards.core.operator_relation_test = (function operator_relation_test(test,op,relation_phrase){return devcards.core.test_wrapper.call(null,test,React.DOM.span({"className": "devcards-test-body"},React.DOM.span({"className": "operator"},op),React.DOM.span({"className": "result-area"},React.DOM.span({"className": "exp"},cljs.core.prn_str.call(null,new cljs.core.Keyword(null,"exp1","exp1",1017031974).cljs$core$IFn$_invoke$arity$1(test))),React.DOM.span({"className": "exp"},cljs.core.prn_str.call(null,new cljs.core.Keyword(null,"exp2","exp2",1017031975).cljs$core$IFn$_invoke$arity$1(test))),devcards.core.error_message.call(null,test,cljs.core.prn_str.call(null,new cljs.core.Keyword(null,"val1","val1",1017516194).cljs$core$IFn$_invoke$arity$1(test)),relation_phrase,cljs.core.prn_str.call(null,new cljs.core.Keyword(null,"val2","val2",1017516195).cljs$core$IFn$_invoke$arity$1(test))))));
});
cljs.core._add_method.call(null,devcards.core.render_test,new cljs.core.Keyword(null,"are=","are=",1016906715),(function (test){return devcards.core.operator_relation_test.call(null,test,"="," to equal ");
}));
cljs.core._add_method.call(null,devcards.core.render_test,new cljs.core.Keyword(null,"are-not=","are-not=",3595476757),(function (test){return devcards.core.operator_relation_test.call(null,test,"!="," not to equal ");
}));
/**
* @param {...*} var_args
*/
devcards.core.test_card = (function() { 
var test_card__delegate = function (assertions){return devcards.core.react_card.call(null,React.DOM.ul({"className": "list-group devcards-test-group"},cljs.core.to_array.call(null,cljs.core.mapv.call(null,(function (t){return devcards.core.render_test.call(null,t);
}),assertions))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",4502531971),false], null));
};
var test_card = function (var_args){
var assertions = null;if (arguments.length > 0) {
  assertions = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return test_card__delegate.call(this,assertions);};
test_card.cljs$lang$maxFixedArity = 0;
test_card.cljs$lang$applyTo = (function (arglist__15500){
var assertions = cljs.core.seq(arglist__15500);
return test_card__delegate(assertions);
});
test_card.cljs$core$IFn$_invoke$arity$variadic = test_card__delegate;
return test_card;
})()
;

/**
* @constructor
* @param {*} f
* @param {*} arg_seqs
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
devcards.core.SliderCard = (function (f,arg_seqs,__meta,__extmap){
this.f = f;
this.arg_seqs = arg_seqs;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
devcards.core.SliderCard.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8455__auto__,k__8456__auto__){var self__ = this;
var this__8455__auto____$1 = this;return cljs.core._lookup.call(null,this__8455__auto____$1,k__8456__auto__,null);
});
devcards.core.SliderCard.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8457__auto__,k15502,else__8458__auto__){var self__ = this;
var this__8457__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k15502,new cljs.core.Keyword(null,"f","f",1013904344)))
{return self__.f;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k15502,new cljs.core.Keyword(null,"arg-seqs","arg-seqs",3652874365)))
{return self__.arg_seqs;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k15502,else__8458__auto__);
} else
{return null;
}
}
}
});
devcards.core.SliderCard.prototype.frontier$core$ITransform$ = true;
devcards.core.SliderCard.prototype.frontier$core$ITransform$_transform$arity$3 = (function (o,p__15504,state){var self__ = this;
var vec__15505 = p__15504;var msg_name = cljs.core.nth.call(null,vec__15505,0,null);var data = cljs.core.nth.call(null,vec__15505,1,null);var o__$1 = this;var pred__15506 = cljs.core._EQ_;var expr__15507 = msg_name;if(cljs.core.truth_(pred__15506.call(null,new cljs.core.Keyword(null,"set-index-for-key","set-index-for-key",692058791),expr__15507)))
{return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyed-vals","keyed-vals",2075818515),new cljs.core.Keyword(null,"k","k",1013904349).cljs$core$IFn$_invoke$arity$1(data)], null),new cljs.core.Keyword(null,"index","index",1114250308).cljs$core$IFn$_invoke$arity$1(data));
} else
{return state;
}
});
devcards.core.SliderCard.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8469__auto__,writer__8470__auto__,opts__8471__auto__){var self__ = this;
var this__8469__auto____$1 = this;var pr_pair__8472__auto__ = ((function (this__8469__auto____$1){
return (function (keyval__8473__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8470__auto__,cljs.core.pr_writer,""," ","",opts__8471__auto__,keyval__8473__auto__);
});})(this__8469__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8470__auto__,pr_pair__8472__auto__,"#devcards.core.SliderCard{",", ","}",opts__8471__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",1013904344),self__.f],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg-seqs","arg-seqs",3652874365),self__.arg_seqs],null))], null),self__.__extmap));
});
devcards.core.SliderCard.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8453__auto__){var self__ = this;
var this__8453__auto____$1 = this;return self__.__meta;
});
devcards.core.SliderCard.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8449__auto__){var self__ = this;
var this__8449__auto____$1 = this;return (new devcards.core.SliderCard(self__.f,self__.arg_seqs,self__.__meta,self__.__extmap,self__.__hash));
});
devcards.core.SliderCard.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8459__auto__){var self__ = this;
var this__8459__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
devcards.core.SliderCard.prototype.frontier$core$IDerive$ = true;
devcards.core.SliderCard.prototype.frontier$core$IDerive$_derive$arity$2 = (function (o,state){var self__ = this;
var o__$1 = this;var slider_inputs = cljs.core.map.call(null,((function (o__$1){
return (function (p__15509){var vec__15510 = p__15509;var k = cljs.core.nth.call(null,vec__15510,0,null);var seq_STAR_ = cljs.core.nth.call(null,vec__15510,1,null);var i = k.call(null,new cljs.core.Keyword(null,"keyed-vals","keyed-vals",2075818515).cljs$core$IFn$_invoke$arity$1(state));return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"k","k",1013904349),k,new cljs.core.Keyword(null,"index","index",1114250308),i,new cljs.core.Keyword(null,"v","v",1013904360),cljs.core.nth.call(null,seq_STAR_,i),new cljs.core.Keyword(null,"max","max",1014012118),(cljs.core.count.call(null,seq_STAR_) - 1)], null);
});})(o__$1))
,self__.arg_seqs);return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"slider-inputs","slider-inputs",3857184711),slider_inputs,new cljs.core.Keyword(null,"result","result",4374444943),self__.f.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"k","k",1013904349),new cljs.core.Keyword(null,"v","v",1013904360)),slider_inputs))));
});
devcards.core.SliderCard.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8450__auto__){var self__ = this;
var this__8450__auto____$1 = this;var h__8280__auto__ = self__.__hash;if(!((h__8280__auto__ == null)))
{return h__8280__auto__;
} else
{var h__8280__auto____$1 = cljs.core.hash_imap.call(null,this__8450__auto____$1);self__.__hash = h__8280__auto____$1;
return h__8280__auto____$1;
}
});
devcards.core.SliderCard.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8451__auto__,other__8452__auto__){var self__ = this;
var this__8451__auto____$1 = this;if(cljs.core.truth_((function (){var and__7857__auto__ = other__8452__auto__;if(cljs.core.truth_(and__7857__auto__))
{return ((this__8451__auto____$1.constructor === other__8452__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8451__auto____$1,other__8452__auto__));
} else
{return and__7857__auto__;
}
})()))
{return true;
} else
{return false;
}
});
devcards.core.SliderCard.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8464__auto__,k__8465__auto__){var self__ = this;
var this__8464__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arg-seqs","arg-seqs",3652874365),null,new cljs.core.Keyword(null,"f","f",1013904344),null], null), null),k__8465__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8464__auto____$1),self__.__meta),k__8465__auto__);
} else
{return (new devcards.core.SliderCard(self__.f,self__.arg_seqs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8465__auto__)),null));
}
});
devcards.core.SliderCard.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8462__auto__,k__8463__auto__,G__15501){var self__ = this;
var this__8462__auto____$1 = this;var pred__15511 = cljs.core.keyword_identical_QMARK_;var expr__15512 = k__8463__auto__;if(cljs.core.truth_(pred__15511.call(null,new cljs.core.Keyword(null,"f","f",1013904344),expr__15512)))
{return (new devcards.core.SliderCard(G__15501,self__.arg_seqs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15511.call(null,new cljs.core.Keyword(null,"arg-seqs","arg-seqs",3652874365),expr__15512)))
{return (new devcards.core.SliderCard(self__.f,G__15501,self__.__meta,self__.__extmap,null));
} else
{return (new devcards.core.SliderCard(self__.f,self__.arg_seqs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8463__auto__,G__15501),null));
}
}
});
devcards.core.SliderCard.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8467__auto__){var self__ = this;
var this__8467__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",1013904344),self__.f],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg-seqs","arg-seqs",3652874365),self__.arg_seqs],null))], null),self__.__extmap));
});
devcards.core.SliderCard.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8454__auto__,G__15501){var self__ = this;
var this__8454__auto____$1 = this;return (new devcards.core.SliderCard(self__.f,self__.arg_seqs,G__15501,self__.__extmap,self__.__hash));
});
devcards.core.SliderCard.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8460__auto__,entry__8461__auto__){var self__ = this;
var this__8460__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8461__auto__))
{return cljs.core._assoc.call(null,this__8460__auto____$1,cljs.core._nth.call(null,entry__8461__auto__,0),cljs.core._nth.call(null,entry__8461__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8460__auto____$1,entry__8461__auto__);
}
});
devcards.core.SliderCard.cljs$lang$type = true;
devcards.core.SliderCard.cljs$lang$ctorPrSeq = (function (this__8489__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/SliderCard");
});
devcards.core.SliderCard.cljs$lang$ctorPrWriter = (function (this__8489__auto__,writer__8490__auto__){return cljs.core._write.call(null,writer__8490__auto__,"devcards.core/SliderCard");
});
devcards.core.__GT_SliderCard = (function __GT_SliderCard(f,arg_seqs){return (new devcards.core.SliderCard(f,arg_seqs));
});
devcards.core.map__GT_SliderCard = (function map__GT_SliderCard(G__15503){return (new devcards.core.SliderCard(new cljs.core.Keyword(null,"f","f",1013904344).cljs$core$IFn$_invoke$arity$1(G__15503),new cljs.core.Keyword(null,"arg-seqs","arg-seqs",3652874365).cljs$core$IFn$_invoke$arity$1(G__15503),null,cljs.core.dissoc.call(null,G__15503,new cljs.core.Keyword(null,"f","f",1013904344),new cljs.core.Keyword(null,"arg-seqs","arg-seqs",3652874365))));
});
devcards.core.slider_input_control = (function slider_input_control(p__15514,event_chan){var map__15516 = p__15514;var map__15516__$1 = ((cljs.core.seq_QMARK_.call(null,map__15516))?cljs.core.apply.call(null,cljs.core.hash_map,map__15516):map__15516);var ic = map__15516__$1;var seq_STAR_ = cljs.core.get.call(null,map__15516__$1,new cljs.core.Keyword(null,"seq*","seq*",1017430813));var index = cljs.core.get.call(null,map__15516__$1,new cljs.core.Keyword(null,"index","index",1114250308));var v = cljs.core.get.call(null,map__15516__$1,new cljs.core.Keyword(null,"v","v",1013904360));var k = cljs.core.get.call(null,map__15516__$1,new cljs.core.Keyword(null,"k","k",1013904349));return React.DOM.div({"className": "slider-control"},React.DOM.div({},React.DOM.strong({},[cljs.core.str(k)].join(''))," ",cljs.core.prn_str.call(null,v)),om.dom.input.call(null,{"max": new cljs.core.Keyword(null,"max","max",1014012118).cljs$core$IFn$_invoke$arity$1(ic), "min": 0, "defaultValue": index, "onChange": ((function (map__15516,map__15516__$1,ic,seq_STAR_,index,v,k){
return (function (e){return cljs.core.async.put_BANG_.call(null,event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-index-for-key","set-index-for-key",692058791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"k","k",1013904349),k,new cljs.core.Keyword(null,"index","index",1114250308),window.parseInt(e.target.value)], null)], null));
});})(map__15516,map__15516__$1,ic,seq_STAR_,index,v,k))
, "type": "range"}));
});
devcards.core.make_slider_renderer = (function make_slider_renderer(value_render_func){return (function (p__15519){var map__15520 = p__15519;var map__15520__$1 = ((cljs.core.seq_QMARK_.call(null,map__15520))?cljs.core.apply.call(null,cljs.core.hash_map,map__15520):map__15520);var rstate = map__15520__$1;var event_chan = cljs.core.get.call(null,map__15520__$1,new cljs.core.Keyword(null,"event-chan","event-chan",1951581719));var state = cljs.core.get.call(null,map__15520__$1,new cljs.core.Keyword(null,"state","state",1123661827));return React.DOM.div({"className": "devcard-padding"},React.DOM.div({"className": "col-md-4"},React.DOM.h4({},"args"),cljs.core.to_array.call(null,cljs.core.mapv.call(null,((function (map__15520,map__15520__$1,rstate,event_chan,state){
return (function (slider_in){return devcards.core.slider_input_control.call(null,slider_in,event_chan);
});})(map__15520,map__15520__$1,rstate,event_chan,state))
,new cljs.core.Keyword(null,"slider-inputs","slider-inputs",3857184711).cljs$core$IFn$_invoke$arity$1(state)))),React.DOM.div({"className": "col-md-8"},React.DOM.h4({},"result"),React.DOM.div({},sablono.interpreter.interpret.call(null,value_render_func.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(state))))),React.DOM.div({"className": "clearfix"}));
});
});
/**
* @param {...*} var_args
*/
devcards.core.slider_card = (function() { 
var slider_card__delegate = function (f,arg_seqs,p__15521){var map__15523 = p__15521;var map__15523__$1 = ((cljs.core.seq_QMARK_.call(null,map__15523))?cljs.core.apply.call(null,cljs.core.hash_map,map__15523):map__15523);var value_render_func = cljs.core.get.call(null,map__15523__$1,new cljs.core.Keyword(null,"value-render-func","value-render-func",4665148849));return devcards.core.frontier_system_card.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyed-vals","keyed-vals",2075818515),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.call(null,cljs.core.vector,cljs.core.keys.call(null,arg_seqs),cljs.core.repeat.call(null,0)))], null),frontier.core.make_renderable.call(null,frontier.core.compose.call(null,(new devcards.core.SliderCard(f,arg_seqs))),devcards.core.make_slider_renderer.call(null,(function (){var or__7869__auto__ = value_render_func;if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return devcards.core.edn__GT_html;
}
})())),cljs.core.PersistentVector.EMPTY);
};
var slider_card = function (f,arg_seqs,var_args){
var p__15521 = null;if (arguments.length > 2) {
  p__15521 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return slider_card__delegate.call(this,f,arg_seqs,p__15521);};
slider_card.cljs$lang$maxFixedArity = 2;
slider_card.cljs$lang$applyTo = (function (arglist__15524){
var f = cljs.core.first(arglist__15524);
arglist__15524 = cljs.core.next(arglist__15524);
var arg_seqs = cljs.core.first(arglist__15524);
var p__15521 = cljs.core.rest(arglist__15524);
return slider_card__delegate(f,arg_seqs,p__15521);
});
slider_card.cljs$core$IFn$_invoke$arity$variadic = slider_card__delegate;
return slider_card;
})()
;
devcards.core.heckle_values = (function heckle_values(generator){return cljs.core.mapv.call(null,(function (args){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1016906831),args], null);
}),generator.call(null));
});
devcards.core.heckle_error_QMARK_ = (function heckle_error_QMARK_(res_val){return cljs.core.get.call(null,cljs.core.meta.call(null,res_val),new cljs.core.Keyword(null,"heckle-error","heckle-error",2419654987));
});
devcards.core.heckle_derive = (function heckle_derive(data,f,test_func){return cljs.core.map.call(null,(function (args){var res = (function (){try{return cljs.core.apply.call(null,f,new cljs.core.Keyword(null,"args","args",1016906831).cljs$core$IFn$_invoke$arity$1(args));
}catch (e15526){var e = e15526;return cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heckle-error","heckle-error",2419654987),e], null));
}})();var passed = (cljs.core.truth_(devcards.core.heckle_error_QMARK_.call(null,res))?true:test_func.call(null,args,res));return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Keyword(null,"args","args",1016906831).cljs$core$IFn$_invoke$arity$1(args),new cljs.core.Keyword(null,"class","class",1108647146),(cljs.core.truth_(devcards.core.heckle_error_QMARK_.call(null,res))?"danger ":((cljs.core.not.call(null,passed))?"warning ":(cljs.core.truth_(new cljs.core.Keyword(null,"only-errors","only-errors",1757541406).cljs$core$IFn$_invoke$arity$1(data))?"hidden":""))),new cljs.core.Keyword(null,"res-val","res-val",2109315046),res,new cljs.core.Keyword(null,"passed","passed",4313490402),passed,new cljs.core.Keyword(null,"error","error",1110689146),(cljs.core.truth_(devcards.core.heckle_error_QMARK_.call(null,res))?new cljs.core.Keyword(null,"heckle-error","heckle-error",2419654987).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,res)):null)], null);
}),new cljs.core.Keyword(null,"gen-arg-list","gen-arg-list",3087105796).cljs$core$IFn$_invoke$arity$1(data));
});
devcards.core.heckle_renderer = (function heckle_renderer(f,data,generator,value_render_func,test_func){var derived_data = devcards.core.heckle_derive.call(null,cljs.core.deref.call(null,data),f,test_func);return React.DOM.div({"className": "devcards-heckler-card"},React.DOM.div({"className": "devcards-pad-left"},React.DOM.a({"onClick": ((function (derived_data){
return (function (){return cljs.core.swap_BANG_.call(null,data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-arg-list","gen-arg-list",3087105796)], null),devcards.core.heckle_values.call(null,generator));
});})(derived_data))
, "className": "btn btn-danger navbar-btn", "type": "button"},"Re-heckle!"),React.DOM.a({"onClick": ((function (derived_data){
return (function (){return cljs.core.swap_BANG_.call(null,data,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"only-errors","only-errors",1757541406)], null),((function (derived_data){
return (function (x){return cljs.core.not.call(null,x);
});})(derived_data))
);
});})(derived_data))
, "className": [cljs.core.str("btn btn-default navbar-btn devcards-margin-left"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"only-errors","only-errors",1757541406).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)))?" active":""))].join('')},"Filter Errors"),React.DOM.span({"className": "devcards-pad-left"},(function (){var error_count = cljs.core.count.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"error","error",1110689146),derived_data));if((error_count > 0))
{return React.DOM.span({"className": "label label-danger"},error_count," Errors");
} else
{return React.DOM.span({});
}
})()),React.DOM.span({"style": {"paddingLeft": "14px"}},(function (){var failed_tests = cljs.core.filter.call(null,((function (derived_data){
return (function (x){return cljs.core._EQ_.call(null,false,new cljs.core.Keyword(null,"passed","passed",4313490402).cljs$core$IFn$_invoke$arity$1(x));
});})(derived_data))
,derived_data);if((cljs.core.count.call(null,failed_tests) > 0))
{return React.DOM.span({"className": "label label-warning"},cljs.core.count.call(null,failed_tests)," Tests Failed");
} else
{return React.DOM.span({});
}
})())),React.DOM.table({"className": "table table-striped table-hover"},React.DOM.tr({},React.DOM.th({},"Called"),React.DOM.th({},"Result")),cljs.core.to_array.call(null,cljs.core.mapv.call(null,((function (derived_data){
return (function (p__15530){var map__15531 = p__15530;var map__15531__$1 = ((cljs.core.seq_QMARK_.call(null,map__15531))?cljs.core.apply.call(null,cljs.core.hash_map,map__15531):map__15531);var res = map__15531__$1;var res_val = cljs.core.get.call(null,map__15531__$1,new cljs.core.Keyword(null,"res-val","res-val",2109315046));var error = cljs.core.get.call(null,map__15531__$1,new cljs.core.Keyword(null,"error","error",1110689146));var args = cljs.core.get.call(null,map__15531__$1,new cljs.core.Keyword(null,"args","args",1016906831));return React.DOM.tr({"className": [cljs.core.str(new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(res))].join('')},(function (){var args_SINGLEQUOTE_ = cljs.core.map.call(null,((function (map__15531,map__15531__$1,res,res_val,error,args,derived_data){
return (function (p1__15527_SHARP_){return React.DOM.span({},cljs.core.prn_str.call(null,p1__15527_SHARP_));
});})(map__15531,map__15531__$1,res,res_val,error,args,derived_data))
,args);return React.DOM.td({},cljs.core.to_array.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.span({"className": "text-muted"},"(f ")], null),cljs.core.interleave.call(null,cljs.core.butlast.call(null,args_SINGLEQUOTE_),cljs.core.repeatedly.call(null,((function (args_SINGLEQUOTE_,map__15531,map__15531__$1,res,res_val,error,args,derived_data){
return (function (){return React.DOM.span({"className": "text-muted"},",");
});})(args_SINGLEQUOTE_,map__15531,map__15531__$1,res,res_val,error,args,derived_data))
)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,args_SINGLEQUOTE_),React.DOM.span({"className": "text-muted"},")")], null))));
})(),React.DOM.td({},(cljs.core.truth_(error)?error.message:sablono.interpreter.interpret.call(null,value_render_func.call(null,res_val)))));
});})(derived_data))
,derived_data))));
});
/**
* @param {...*} var_args
*/
devcards.core.heckler_card = (function() { 
var heckler_card__delegate = function (f,generator,p__15532){var map__15534 = p__15532;var map__15534__$1 = ((cljs.core.seq_QMARK_.call(null,map__15534))?cljs.core.apply.call(null,cljs.core.hash_map,map__15534):map__15534);var value_render_func = cljs.core.get.call(null,map__15534__$1,new cljs.core.Keyword(null,"value-render-func","value-render-func",4665148849));var test_func = cljs.core.get.call(null,map__15534__$1,new cljs.core.Keyword(null,"test-func","test-func",4082171537));var system_func = ((function (map__15534,map__15534__$1,value_render_func,test_func){
return (function (data){if(((cljs.core.deref.call(null,data) == null)) || ((cljs.core.count.call(null,cljs.core.deref.call(null,data)) === 0)))
{cljs.core.swap_BANG_.call(null,data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-arg-list","gen-arg-list",3087105796)], null),devcards.core.heckle_values.call(null,generator));
} else
{}
return sablono.interpreter.interpret.call(null,devcards.core.heckle_renderer.call(null,f,data,generator,(function (){var or__7869__auto__ = value_render_func;if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return devcards.core.edn__GT_html;
}
})(),(function (){var or__7869__auto__ = test_func;if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return ((function (or__7869__auto__,map__15534,map__15534__$1,value_render_func,test_func){
return (function (x){return true;
});
;})(or__7869__auto__,map__15534,map__15534__$1,value_render_func,test_func))
}
})()));
});})(map__15534,map__15534__$1,value_render_func,test_func))
;return devcards.core.react_runner_card.call(null,system_func,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",4502531971),false], null));
};
var heckler_card = function (f,generator,var_args){
var p__15532 = null;if (arguments.length > 2) {
  p__15532 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return heckler_card__delegate.call(this,f,generator,p__15532);};
heckler_card.cljs$lang$maxFixedArity = 2;
heckler_card.cljs$lang$applyTo = (function (arglist__15535){
var f = cljs.core.first(arglist__15535);
arglist__15535 = cljs.core.next(arglist__15535);
var generator = cljs.core.first(arglist__15535);
var p__15532 = cljs.core.rest(arglist__15535);
return heckler_card__delegate(f,generator,p__15532);
});
heckler_card.cljs$core$IFn$_invoke$arity$variadic = heckler_card__delegate;
return heckler_card;
})()
;
devcards.core.reduce_card__GT_tests = (function reduce_card__GT_tests(f,curr,value_expected_vec){if(cljs.core.empty_QMARK_.call(null,value_expected_vec))
{return cljs.core.PersistentVector.EMPTY;
} else
{var val_STAR_ = cljs.core.first.call(null,value_expected_vec);var res_val = f.call(null,curr,cljs.core.first.call(null,val_STAR_));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"are=","are=",1016906715),new cljs.core.Keyword(null,"exp1","exp1",1017031974),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,val_STAR_)),curr),new cljs.core.Symbol(null,"f","f",-1640531425,null)),new cljs.core.Keyword(null,"exp2","exp2",1017031975),cljs.core.second.call(null,val_STAR_),new cljs.core.Keyword(null,"passed","passed",4313490402),cljs.core._EQ_.call(null,res_val,cljs.core.second.call(null,val_STAR_))], null),reduce_card__GT_tests.call(null,f,res_val,cljs.core.rest.call(null,value_expected_vec)));
}
});
devcards.core.reduce_card = (function reduce_card(f,init,value_expected_vec){var red_tests = devcards.core.reduce_card__GT_tests.call(null,f,init,cljs.core.partition.call(null,2,value_expected_vec));return cljs.core.apply.call(null,devcards.core.test_card,red_tests);
});
/**
* @param {...*} var_args
*/
devcards.core.reduce_fr_card = (function() { 
var reduce_fr_card__delegate = function (fr_comp,initial_state,msg_expects_vec){return devcards.core.reduce_card.call(null,(function (state,msg){return frontier.core._transform.call(null,(new devcards.core.SliderCard(1,1)),msg,state);
}),initial_state,msg_expects_vec);
};
var reduce_fr_card = function (fr_comp,initial_state,var_args){
var msg_expects_vec = null;if (arguments.length > 2) {
  msg_expects_vec = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return reduce_fr_card__delegate.call(this,fr_comp,initial_state,msg_expects_vec);};
reduce_fr_card.cljs$lang$maxFixedArity = 2;
reduce_fr_card.cljs$lang$applyTo = (function (arglist__15536){
var fr_comp = cljs.core.first(arglist__15536);
arglist__15536 = cljs.core.next(arglist__15536);
var initial_state = cljs.core.first(arglist__15536);
var msg_expects_vec = cljs.core.rest(arglist__15536);
return reduce_fr_card__delegate(fr_comp,initial_state,msg_expects_vec);
});
reduce_fr_card.cljs$core$IFn$_invoke$arity$variadic = reduce_fr_card__delegate;
return reduce_fr_card;
})()
;
/**
* @param {...*} var_args
*/
devcards.core.markdown_card = (function() { 
var markdown_card__delegate = function (mkdn_strs){if(typeof devcards.core.t15542 !== 'undefined')
{} else
{
/**
* @constructor
*/
devcards.core.t15542 = (function (mkdn_strs,markdown_card,meta15543){
this.mkdn_strs = mkdn_strs;
this.markdown_card = markdown_card;
this.meta15543 = meta15543;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
devcards.core.t15542.cljs$lang$type = true;
devcards.core.t15542.cljs$lang$ctorStr = "devcards.core/t15542";
devcards.core.t15542.cljs$lang$ctorPrWriter = (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"devcards.core/t15542");
});
devcards.core.t15542.prototype.devcards$system$IConfig$ = true;
devcards.core.t15542.prototype.devcards$system$IConfig$_options$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",1809215860),false], null);
});
devcards.core.t15542.prototype.devcards$system$IMount$ = true;
devcards.core.t15542.prototype.devcards$system$IMount$mount$arity$2 = (function (_,p__15545){var self__ = this;
var map__15546 = p__15545;var map__15546__$1 = ((cljs.core.seq_QMARK_.call(null,map__15546))?cljs.core.apply.call(null,cljs.core.hash_map,map__15546):map__15546);var node = cljs.core.get.call(null,map__15546__$1,new cljs.core.Keyword(null,"node","node",1017291124));var ___$1 = this;return node.innerHTML = devcards.core.less_sensitive_markdown.call(null,self__.mkdn_strs);
});
devcards.core.t15542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15544){var self__ = this;
var _15544__$1 = this;return self__.meta15543;
});
devcards.core.t15542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15544,meta15543__$1){var self__ = this;
var _15544__$1 = this;return (new devcards.core.t15542(self__.mkdn_strs,self__.markdown_card,meta15543__$1));
});
devcards.core.__GT_t15542 = (function __GT_t15542(mkdn_strs__$1,markdown_card__$1,meta15543){return (new devcards.core.t15542(mkdn_strs__$1,markdown_card__$1,meta15543));
});
}
return (new devcards.core.t15542(mkdn_strs,markdown_card,null));
};
var markdown_card = function (var_args){
var mkdn_strs = null;if (arguments.length > 0) {
  mkdn_strs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return markdown_card__delegate.call(this,mkdn_strs);};
markdown_card.cljs$lang$maxFixedArity = 0;
markdown_card.cljs$lang$applyTo = (function (arglist__15547){
var mkdn_strs = cljs.core.seq(arglist__15547);
return markdown_card__delegate(mkdn_strs);
});
markdown_card.cljs$core$IFn$_invoke$arity$variadic = markdown_card__delegate;
return markdown_card;
})()
;

/**
* @constructor
* @param {*} om_comp
* @param {*} initial_state
* @param {*} om_options
* @param {*} devcard_options
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
devcards.core.OmRootCard = (function (om_comp,initial_state,om_options,devcard_options,__meta,__extmap){
this.om_comp = om_comp;
this.initial_state = initial_state;
this.om_options = om_options;
this.devcard_options = devcard_options;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>4){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
devcards.core.OmRootCard.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8455__auto__,k__8456__auto__){var self__ = this;
var this__8455__auto____$1 = this;return cljs.core._lookup.call(null,this__8455__auto____$1,k__8456__auto__,null);
});
devcards.core.OmRootCard.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8457__auto__,k15549,else__8458__auto__){var self__ = this;
var this__8457__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k15549,new cljs.core.Keyword(null,"om-comp","om-comp",3907760400)))
{return self__.om_comp;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k15549,new cljs.core.Keyword(null,"initial-state","initial-state",4067401786)))
{return self__.initial_state;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k15549,new cljs.core.Keyword(null,"om-options","om-options",1099279649)))
{return self__.om_options;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k15549,new cljs.core.Keyword(null,"devcard-options","devcard-options",1928320232)))
{return self__.devcard_options;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k15549,else__8458__auto__);
} else
{return null;
}
}
}
}
}
});
devcards.core.OmRootCard.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8469__auto__,writer__8470__auto__,opts__8471__auto__){var self__ = this;
var this__8469__auto____$1 = this;var pr_pair__8472__auto__ = ((function (this__8469__auto____$1){
return (function (keyval__8473__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8470__auto__,cljs.core.pr_writer,""," ","",opts__8471__auto__,keyval__8473__auto__);
});})(this__8469__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8470__auto__,pr_pair__8472__auto__,"#devcards.core.OmRootCard{",", ","}",opts__8471__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"om-comp","om-comp",3907760400),self__.om_comp],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-state","initial-state",4067401786),self__.initial_state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"om-options","om-options",1099279649),self__.om_options],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"devcard-options","devcard-options",1928320232),self__.devcard_options],null))], null),self__.__extmap));
});
devcards.core.OmRootCard.prototype.devcards$system$IConfig$ = true;
devcards.core.OmRootCard.prototype.devcards$system$IConfig$_options$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unmount-on-reload","unmount-on-reload",4064716876),false,new cljs.core.Keyword(null,"initial-state","initial-state",4067401786),devcards.core.box_data_atom.call(null,self__.initial_state)], null),self__.devcard_options);
});
devcards.core.OmRootCard.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8453__auto__){var self__ = this;
var this__8453__auto____$1 = this;return self__.__meta;
});
devcards.core.OmRootCard.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8449__auto__){var self__ = this;
var this__8449__auto____$1 = this;return (new devcards.core.OmRootCard(self__.om_comp,self__.initial_state,self__.om_options,self__.devcard_options,self__.__meta,self__.__extmap,self__.__hash));
});
devcards.core.OmRootCard.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8459__auto__){var self__ = this;
var this__8459__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
});
devcards.core.OmRootCard.prototype.devcards$system$IUnMount$ = true;
devcards.core.OmRootCard.prototype.devcards$system$IUnMount$unmount$arity$2 = (function (_,p__15551){var self__ = this;
var map__15552 = p__15551;var map__15552__$1 = ((cljs.core.seq_QMARK_.call(null,map__15552))?cljs.core.apply.call(null,cljs.core.hash_map,map__15552):map__15552);var node = cljs.core.get.call(null,map__15552__$1,new cljs.core.Keyword(null,"node","node",1017291124));var ___$1 = this;return devcards.core.unmount_react.call(null,node);
});
devcards.core.OmRootCard.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8450__auto__){var self__ = this;
var this__8450__auto____$1 = this;var h__8280__auto__ = self__.__hash;if(!((h__8280__auto__ == null)))
{return h__8280__auto__;
} else
{var h__8280__auto____$1 = cljs.core.hash_imap.call(null,this__8450__auto____$1);self__.__hash = h__8280__auto____$1;
return h__8280__auto____$1;
}
});
devcards.core.OmRootCard.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8451__auto__,other__8452__auto__){var self__ = this;
var this__8451__auto____$1 = this;if(cljs.core.truth_((function (){var and__7857__auto__ = other__8452__auto__;if(cljs.core.truth_(and__7857__auto__))
{return ((this__8451__auto____$1.constructor === other__8452__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8451__auto____$1,other__8452__auto__));
} else
{return and__7857__auto__;
}
})()))
{return true;
} else
{return false;
}
});
devcards.core.OmRootCard.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8464__auto__,k__8465__auto__){var self__ = this;
var this__8464__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"om-comp","om-comp",3907760400),null,new cljs.core.Keyword(null,"om-options","om-options",1099279649),null,new cljs.core.Keyword(null,"initial-state","initial-state",4067401786),null,new cljs.core.Keyword(null,"devcard-options","devcard-options",1928320232),null], null), null),k__8465__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8464__auto____$1),self__.__meta),k__8465__auto__);
} else
{return (new devcards.core.OmRootCard(self__.om_comp,self__.initial_state,self__.om_options,self__.devcard_options,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8465__auto__)),null));
}
});
devcards.core.OmRootCard.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8462__auto__,k__8463__auto__,G__15548){var self__ = this;
var this__8462__auto____$1 = this;var pred__15553 = cljs.core.keyword_identical_QMARK_;var expr__15554 = k__8463__auto__;if(cljs.core.truth_(pred__15553.call(null,new cljs.core.Keyword(null,"om-comp","om-comp",3907760400),expr__15554)))
{return (new devcards.core.OmRootCard(G__15548,self__.initial_state,self__.om_options,self__.devcard_options,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15553.call(null,new cljs.core.Keyword(null,"initial-state","initial-state",4067401786),expr__15554)))
{return (new devcards.core.OmRootCard(self__.om_comp,G__15548,self__.om_options,self__.devcard_options,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15553.call(null,new cljs.core.Keyword(null,"om-options","om-options",1099279649),expr__15554)))
{return (new devcards.core.OmRootCard(self__.om_comp,self__.initial_state,G__15548,self__.devcard_options,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15553.call(null,new cljs.core.Keyword(null,"devcard-options","devcard-options",1928320232),expr__15554)))
{return (new devcards.core.OmRootCard(self__.om_comp,self__.initial_state,self__.om_options,G__15548,self__.__meta,self__.__extmap,null));
} else
{return (new devcards.core.OmRootCard(self__.om_comp,self__.initial_state,self__.om_options,self__.devcard_options,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8463__auto__,G__15548),null));
}
}
}
}
});
devcards.core.OmRootCard.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8467__auto__){var self__ = this;
var this__8467__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"om-comp","om-comp",3907760400),self__.om_comp],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-state","initial-state",4067401786),self__.initial_state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"om-options","om-options",1099279649),self__.om_options],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"devcard-options","devcard-options",1928320232),self__.devcard_options],null))], null),self__.__extmap));
});
devcards.core.OmRootCard.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8454__auto__,G__15548){var self__ = this;
var this__8454__auto____$1 = this;return (new devcards.core.OmRootCard(self__.om_comp,self__.initial_state,self__.om_options,self__.devcard_options,G__15548,self__.__extmap,self__.__hash));
});
devcards.core.OmRootCard.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8460__auto__,entry__8461__auto__){var self__ = this;
var this__8460__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8461__auto__))
{return cljs.core._assoc.call(null,this__8460__auto____$1,cljs.core._nth.call(null,entry__8461__auto__,0),cljs.core._nth.call(null,entry__8461__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8460__auto____$1,entry__8461__auto__);
}
});
devcards.core.OmRootCard.prototype.devcards$system$IMount$ = true;
devcards.core.OmRootCard.prototype.devcards$system$IMount$mount$arity$2 = (function (_,p__15556){var self__ = this;
var map__15557 = p__15556;var map__15557__$1 = ((cljs.core.seq_QMARK_.call(null,map__15557))?cljs.core.apply.call(null,cljs.core.hash_map,map__15557):map__15557);var data_atom = cljs.core.get.call(null,map__15557__$1,new cljs.core.Keyword(null,"data-atom","data-atom",603797766));var node = cljs.core.get.call(null,map__15557__$1,new cljs.core.Keyword(null,"node","node",1017291124));var ___$1 = this;return om.core.root.call(null,self__.om_comp,devcards.core.unbox_data_atom.call(null,data_atom),cljs.core.merge.call(null,self__.om_options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),node], null)));
});
devcards.core.OmRootCard.cljs$lang$type = true;
devcards.core.OmRootCard.cljs$lang$ctorPrSeq = (function (this__8489__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/OmRootCard");
});
devcards.core.OmRootCard.cljs$lang$ctorPrWriter = (function (this__8489__auto__,writer__8490__auto__){return cljs.core._write.call(null,writer__8490__auto__,"devcards.core/OmRootCard");
});
devcards.core.__GT_OmRootCard = (function __GT_OmRootCard(om_comp,initial_state,om_options,devcard_options){return (new devcards.core.OmRootCard(om_comp,initial_state,om_options,devcard_options));
});
devcards.core.map__GT_OmRootCard = (function map__GT_OmRootCard(G__15550){return (new devcards.core.OmRootCard(new cljs.core.Keyword(null,"om-comp","om-comp",3907760400).cljs$core$IFn$_invoke$arity$1(G__15550),new cljs.core.Keyword(null,"initial-state","initial-state",4067401786).cljs$core$IFn$_invoke$arity$1(G__15550),new cljs.core.Keyword(null,"om-options","om-options",1099279649).cljs$core$IFn$_invoke$arity$1(G__15550),new cljs.core.Keyword(null,"devcard-options","devcard-options",1928320232).cljs$core$IFn$_invoke$arity$1(G__15550),null,cljs.core.dissoc.call(null,G__15550,new cljs.core.Keyword(null,"om-comp","om-comp",3907760400),new cljs.core.Keyword(null,"initial-state","initial-state",4067401786),new cljs.core.Keyword(null,"om-options","om-options",1099279649),new cljs.core.Keyword(null,"devcard-options","devcard-options",1928320232))));
});
devcards.core.om_root_card = (function() {
var om_root_card = null;
var om_root_card__1 = (function (om_comp_fn){return om_root_card.call(null,om_comp_fn,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY);
});
var om_root_card__2 = (function (om_comp_fn,initial_state){return om_root_card.call(null,om_comp_fn,initial_state,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY);
});
var om_root_card__3 = (function (om_comp_fn,initial_state,om_options){return om_root_card.call(null,om_comp_fn,initial_state,om_options,cljs.core.PersistentArrayMap.EMPTY);
});
var om_root_card__4 = (function (om_comp_fn,initial_state,om_options,devcard_options){return (new devcards.core.OmRootCard(om_comp_fn,initial_state,om_options,devcard_options));
});
om_root_card = function(om_comp_fn,initial_state,om_options,devcard_options){
switch(arguments.length){
case 1:
return om_root_card__1.call(this,om_comp_fn);
case 2:
return om_root_card__2.call(this,om_comp_fn,initial_state);
case 3:
return om_root_card__3.call(this,om_comp_fn,initial_state,om_options);
case 4:
return om_root_card__4.call(this,om_comp_fn,initial_state,om_options,devcard_options);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_root_card.cljs$core$IFn$_invoke$arity$1 = om_root_card__1;
om_root_card.cljs$core$IFn$_invoke$arity$2 = om_root_card__2;
om_root_card.cljs$core$IFn$_invoke$arity$3 = om_root_card__3;
om_root_card.cljs$core$IFn$_invoke$arity$4 = om_root_card__4;
return om_root_card;
})()
;

/**
* @constructor
* @param {*} initial_state
* @param {*} component
* @param {*} initial_inputs
* @param {*} devcard_options
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
devcards.core.FrontierSystemCard = (function (initial_state,component,initial_inputs,devcard_options,__meta,__extmap){
this.initial_state = initial_state;
this.component = component;
this.initial_inputs = initial_inputs;
this.devcard_options = devcard_options;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>4){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
devcards.core.FrontierSystemCard.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8455__auto__,k__8456__auto__){var self__ = this;
var this__8455__auto____$1 = this;return cljs.core._lookup.call(null,this__8455__auto____$1,k__8456__auto__,null);
});
devcards.core.FrontierSystemCard.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8457__auto__,k15559,else__8458__auto__){var self__ = this;
var this__8457__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k15559,new cljs.core.Keyword(null,"initial-state","initial-state",4067401786)))
{return self__.initial_state;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k15559,new cljs.core.Keyword(null,"component","component",3908964463)))
{return self__.component;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k15559,new cljs.core.Keyword(null,"initial-inputs","initial-inputs",891663364)))
{return self__.initial_inputs;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k15559,new cljs.core.Keyword(null,"devcard-options","devcard-options",1928320232)))
{return self__.devcard_options;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k15559,else__8458__auto__);
} else
{return null;
}
}
}
}
}
});
devcards.core.FrontierSystemCard.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8469__auto__,writer__8470__auto__,opts__8471__auto__){var self__ = this;
var this__8469__auto____$1 = this;var pr_pair__8472__auto__ = ((function (this__8469__auto____$1){
return (function (keyval__8473__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8470__auto__,cljs.core.pr_writer,""," ","",opts__8471__auto__,keyval__8473__auto__);
});})(this__8469__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8470__auto__,pr_pair__8472__auto__,"#devcards.core.FrontierSystemCard{",", ","}",opts__8471__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-state","initial-state",4067401786),self__.initial_state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component","component",3908964463),self__.component],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-inputs","initial-inputs",891663364),self__.initial_inputs],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"devcard-options","devcard-options",1928320232),self__.devcard_options],null))], null),self__.__extmap));
});
devcards.core.FrontierSystemCard.prototype.devcards$system$IConfig$ = true;
devcards.core.FrontierSystemCard.prototype.devcards$system$IConfig$_options$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unmount-on-reload","unmount-on-reload",4064716876),false,new cljs.core.Keyword(null,"padding","padding",4502531971),false], null),self__.devcard_options);
});
devcards.core.FrontierSystemCard.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8453__auto__){var self__ = this;
var this__8453__auto____$1 = this;return self__.__meta;
});
devcards.core.FrontierSystemCard.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8449__auto__){var self__ = this;
var this__8449__auto____$1 = this;return (new devcards.core.FrontierSystemCard(self__.initial_state,self__.component,self__.initial_inputs,self__.devcard_options,self__.__meta,self__.__extmap,self__.__hash));
});
devcards.core.FrontierSystemCard.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8459__auto__){var self__ = this;
var this__8459__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
});
devcards.core.FrontierSystemCard.prototype.devcards$system$IUnMount$ = true;
devcards.core.FrontierSystemCard.prototype.devcards$system$IUnMount$unmount$arity$2 = (function (_,p__15561){var self__ = this;
var map__15562 = p__15561;var map__15562__$1 = ((cljs.core.seq_QMARK_.call(null,map__15562))?cljs.core.apply.call(null,cljs.core.hash_map,map__15562):map__15562);var data_atom = cljs.core.get.call(null,map__15562__$1,new cljs.core.Keyword(null,"data-atom","data-atom",603797766));var node = cljs.core.get.call(null,map__15562__$1,new cljs.core.Keyword(null,"node","node",1017291124));var ___$1 = this;if(cljs.core.truth_(new cljs.core.Keyword(null,"running","running",2564688177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data_atom))))
{cljs.core.reset_BANG_.call(null,data_atom,frontier.core.runner_stop.call(null,cljs.core.deref.call(null,data_atom)));
} else
{}
return React.unmountComponentAtNode(node);
});
devcards.core.FrontierSystemCard.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8450__auto__){var self__ = this;
var this__8450__auto____$1 = this;var h__8280__auto__ = self__.__hash;if(!((h__8280__auto__ == null)))
{return h__8280__auto__;
} else
{var h__8280__auto____$1 = cljs.core.hash_imap.call(null,this__8450__auto____$1);self__.__hash = h__8280__auto____$1;
return h__8280__auto____$1;
}
});
devcards.core.FrontierSystemCard.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8451__auto__,other__8452__auto__){var self__ = this;
var this__8451__auto____$1 = this;if(cljs.core.truth_((function (){var and__7857__auto__ = other__8452__auto__;if(cljs.core.truth_(and__7857__auto__))
{return ((this__8451__auto____$1.constructor === other__8452__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8451__auto____$1,other__8452__auto__));
} else
{return and__7857__auto__;
}
})()))
{return true;
} else
{return false;
}
});
devcards.core.FrontierSystemCard.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8464__auto__,k__8465__auto__){var self__ = this;
var this__8464__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component","component",3908964463),null,new cljs.core.Keyword(null,"initial-state","initial-state",4067401786),null,new cljs.core.Keyword(null,"devcard-options","devcard-options",1928320232),null,new cljs.core.Keyword(null,"initial-inputs","initial-inputs",891663364),null], null), null),k__8465__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8464__auto____$1),self__.__meta),k__8465__auto__);
} else
{return (new devcards.core.FrontierSystemCard(self__.initial_state,self__.component,self__.initial_inputs,self__.devcard_options,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8465__auto__)),null));
}
});
devcards.core.FrontierSystemCard.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8462__auto__,k__8463__auto__,G__15558){var self__ = this;
var this__8462__auto____$1 = this;var pred__15563 = cljs.core.keyword_identical_QMARK_;var expr__15564 = k__8463__auto__;if(cljs.core.truth_(pred__15563.call(null,new cljs.core.Keyword(null,"initial-state","initial-state",4067401786),expr__15564)))
{return (new devcards.core.FrontierSystemCard(G__15558,self__.component,self__.initial_inputs,self__.devcard_options,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15563.call(null,new cljs.core.Keyword(null,"component","component",3908964463),expr__15564)))
{return (new devcards.core.FrontierSystemCard(self__.initial_state,G__15558,self__.initial_inputs,self__.devcard_options,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15563.call(null,new cljs.core.Keyword(null,"initial-inputs","initial-inputs",891663364),expr__15564)))
{return (new devcards.core.FrontierSystemCard(self__.initial_state,self__.component,G__15558,self__.devcard_options,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15563.call(null,new cljs.core.Keyword(null,"devcard-options","devcard-options",1928320232),expr__15564)))
{return (new devcards.core.FrontierSystemCard(self__.initial_state,self__.component,self__.initial_inputs,G__15558,self__.__meta,self__.__extmap,null));
} else
{return (new devcards.core.FrontierSystemCard(self__.initial_state,self__.component,self__.initial_inputs,self__.devcard_options,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8463__auto__,G__15558),null));
}
}
}
}
});
devcards.core.FrontierSystemCard.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8467__auto__){var self__ = this;
var this__8467__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-state","initial-state",4067401786),self__.initial_state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component","component",3908964463),self__.component],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-inputs","initial-inputs",891663364),self__.initial_inputs],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"devcard-options","devcard-options",1928320232),self__.devcard_options],null))], null),self__.__extmap));
});
devcards.core.FrontierSystemCard.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8454__auto__,G__15558){var self__ = this;
var this__8454__auto____$1 = this;return (new devcards.core.FrontierSystemCard(self__.initial_state,self__.component,self__.initial_inputs,self__.devcard_options,G__15558,self__.__extmap,self__.__hash));
});
devcards.core.FrontierSystemCard.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8460__auto__,entry__8461__auto__){var self__ = this;
var this__8460__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8461__auto__))
{return cljs.core._assoc.call(null,this__8460__auto____$1,cljs.core._nth.call(null,entry__8461__auto__,0),cljs.core._nth.call(null,entry__8461__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8460__auto____$1,entry__8461__auto__);
}
});
devcards.core.FrontierSystemCard.prototype.devcards$system$IMount$ = true;
devcards.core.FrontierSystemCard.prototype.devcards$system$IMount$mount$arity$2 = (function (_,p__15566){var self__ = this;
var map__15567 = p__15566;var map__15567__$1 = ((cljs.core.seq_QMARK_.call(null,map__15567))?cljs.core.apply.call(null,cljs.core.hash_map,map__15567):map__15567);var data_atom = cljs.core.get.call(null,map__15567__$1,new cljs.core.Keyword(null,"data-atom","data-atom",603797766));var node = cljs.core.get.call(null,map__15567__$1,new cljs.core.Keyword(null,"node","node",1017291124));var ___$1 = this;var sys = frontier.core.run_with_atom.call(null,(function (){var or__7869__auto__ = new cljs.core.Keyword(null,"state-atom","state-atom",739597439).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data_atom));if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return cljs.core.atom.call(null,null);
}
})(),self__.initial_state,self__.component,((function (___$1,map__15567,map__15567__$1,data_atom,node){
return (function (state){var temp__4126__auto__ = frontier.core._render.call(null,self__.component,state);if(cljs.core.truth_(temp__4126__auto__))
{var react_dom = temp__4126__auto__;return React.renderComponent(sablono.interpreter.interpret.call(null,react_dom),node,cljs.core.identity);
} else
{return null;
}
});})(___$1,map__15567,map__15567__$1,data_atom,node))
);if(cljs.core.truth_((function (){var and__7857__auto__ = (new cljs.core.Keyword(null,"state-atom","state-atom",739597439).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data_atom)) == null);if(and__7857__auto__)
{var and__7857__auto____$1 = self__.initial_inputs;if(cljs.core.truth_(and__7857__auto____$1))
{return (cljs.core.count.call(null,self__.initial_inputs) > 0);
} else
{return and__7857__auto____$1;
}
} else
{return and__7857__auto__;
}
})()))
{var seq__15568_15572 = cljs.core.seq.call(null,self__.initial_inputs);var chunk__15569_15573 = null;var count__15570_15574 = 0;var i__15571_15575 = 0;while(true){
if((i__15571_15575 < count__15570_15574))
{var msg_15576 = cljs.core._nth.call(null,chunk__15569_15573,i__15571_15575);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"event-chan","event-chan",1951581719).cljs$core$IFn$_invoke$arity$1(sys),msg_15576);
{
var G__15577 = seq__15568_15572;
var G__15578 = chunk__15569_15573;
var G__15579 = count__15570_15574;
var G__15580 = (i__15571_15575 + 1);
seq__15568_15572 = G__15577;
chunk__15569_15573 = G__15578;
count__15570_15574 = G__15579;
i__15571_15575 = G__15580;
continue;
}
} else
{var temp__4126__auto___15581 = cljs.core.seq.call(null,seq__15568_15572);if(temp__4126__auto___15581)
{var seq__15568_15582__$1 = temp__4126__auto___15581;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15568_15582__$1))
{var c__8617__auto___15583 = cljs.core.chunk_first.call(null,seq__15568_15582__$1);{
var G__15584 = cljs.core.chunk_rest.call(null,seq__15568_15582__$1);
var G__15585 = c__8617__auto___15583;
var G__15586 = cljs.core.count.call(null,c__8617__auto___15583);
var G__15587 = 0;
seq__15568_15572 = G__15584;
chunk__15569_15573 = G__15585;
count__15570_15574 = G__15586;
i__15571_15575 = G__15587;
continue;
}
} else
{var msg_15588 = cljs.core.first.call(null,seq__15568_15582__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"event-chan","event-chan",1951581719).cljs$core$IFn$_invoke$arity$1(sys),msg_15588);
{
var G__15589 = cljs.core.next.call(null,seq__15568_15582__$1);
var G__15590 = null;
var G__15591 = 0;
var G__15592 = 0;
seq__15568_15572 = G__15589;
chunk__15569_15573 = G__15590;
count__15570_15574 = G__15591;
i__15571_15575 = G__15592;
continue;
}
}
} else
{}
}
break;
}
} else
{cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"event-chan","event-chan",1951581719).cljs$core$IFn$_invoke$arity$1(sys),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__system.noop","__system.noop",1002780499)], null));
}
return cljs.core.reset_BANG_.call(null,data_atom,sys);
});
devcards.core.FrontierSystemCard.cljs$lang$type = true;
devcards.core.FrontierSystemCard.cljs$lang$ctorPrSeq = (function (this__8489__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/FrontierSystemCard");
});
devcards.core.FrontierSystemCard.cljs$lang$ctorPrWriter = (function (this__8489__auto__,writer__8490__auto__){return cljs.core._write.call(null,writer__8490__auto__,"devcards.core/FrontierSystemCard");
});
devcards.core.__GT_FrontierSystemCard = (function __GT_FrontierSystemCard(initial_state,component,initial_inputs,devcard_options){return (new devcards.core.FrontierSystemCard(initial_state,component,initial_inputs,devcard_options));
});
devcards.core.map__GT_FrontierSystemCard = (function map__GT_FrontierSystemCard(G__15560){return (new devcards.core.FrontierSystemCard(new cljs.core.Keyword(null,"initial-state","initial-state",4067401786).cljs$core$IFn$_invoke$arity$1(G__15560),new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(G__15560),new cljs.core.Keyword(null,"initial-inputs","initial-inputs",891663364).cljs$core$IFn$_invoke$arity$1(G__15560),new cljs.core.Keyword(null,"devcard-options","devcard-options",1928320232).cljs$core$IFn$_invoke$arity$1(G__15560),null,cljs.core.dissoc.call(null,G__15560,new cljs.core.Keyword(null,"initial-state","initial-state",4067401786),new cljs.core.Keyword(null,"component","component",3908964463),new cljs.core.Keyword(null,"initial-inputs","initial-inputs",891663364),new cljs.core.Keyword(null,"devcard-options","devcard-options",1928320232))));
});
devcards.core.frontier_system_card = (function() {
var frontier_system_card = null;
var frontier_system_card__3 = (function (initial_state,component,initial_inputs){return frontier_system_card.call(null,initial_state,component,initial_inputs,cljs.core.PersistentArrayMap.EMPTY);
});
var frontier_system_card__4 = (function (initial_state,component,initial_inputs,devcard_options){return (new devcards.core.FrontierSystemCard(initial_state,component,initial_inputs,devcard_options));
});
frontier_system_card = function(initial_state,component,initial_inputs,devcard_options){
switch(arguments.length){
case 3:
return frontier_system_card__3.call(this,initial_state,component,initial_inputs);
case 4:
return frontier_system_card__4.call(this,initial_state,component,initial_inputs,devcard_options);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontier_system_card.cljs$core$IFn$_invoke$arity$3 = frontier_system_card__3;
frontier_system_card.cljs$core$IFn$_invoke$arity$4 = frontier_system_card__4;
return frontier_system_card;
})()
;
devcards.core.managed_history_card = (function() {
var managed_history_card = null;
var managed_history_card__3 = (function (initial_state,component,initial_inputs){return managed_history_card.call(null,initial_state,component,initial_inputs,cljs.core.PersistentArrayMap.EMPTY);
});
var managed_history_card__4 = (function (initial_state,component,initial_inputs,devcard_options){var inputs = cljs.core.mapv.call(null,cljs.core.partial.call(null,frontier.core.msg_prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__history-keeper","__history-keeper",3771734429),new cljs.core.Keyword(null,"state","state",1123661827)], null)),initial_inputs);var initial_state_SINGLEQUOTE_ = cljs.core.assoc_in.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__history-keeper","__history-keeper",3771734429),new cljs.core.Keyword(null,"state","state",1123661827)], null),initial_state);return devcards.core.frontier_system_card.call(null,initial_state_SINGLEQUOTE_,frontier.cards.history_manager.call(null,initial_state,component),inputs,devcard_options);
});
managed_history_card = function(initial_state,component,initial_inputs,devcard_options){
switch(arguments.length){
case 3:
return managed_history_card__3.call(this,initial_state,component,initial_inputs);
case 4:
return managed_history_card__4.call(this,initial_state,component,initial_inputs,devcard_options);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
managed_history_card.cljs$core$IFn$_invoke$arity$3 = managed_history_card__3;
managed_history_card.cljs$core$IFn$_invoke$arity$4 = managed_history_card__4;
return managed_history_card;
})()
;

//# sourceMappingURL=core.js.map
// Compiled by ClojureScript 0.0-2202
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__17026,args){var map__17028 = p__17026;var map__17028__$1 = ((cljs.core.seq_QMARK_(map__17028))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17028):map__17028);var debug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17028__$1,cljs.core.constant$keyword$86);if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array(args));
} else
{return null;
}
};
var log = function (p__17026,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__17026,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__17029){
var p__17026 = cljs.core.first(arglist__17029);
var args = cljs.core.rest(arglist__17029);
return log__delegate(p__17026,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__17030){var map__17032 = p__17030;var map__17032__$1 = ((cljs.core.seq_QMARK_(map__17032))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17032):map__17032);var websocket_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17032__$1,cljs.core.constant$keyword$87);return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace_first(clojure.string.replace_first(websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return [cljs.core.str(url),cljs.core.str("?rel="),cljs.core.str((new Date()).getTime())].join('');
});
figwheel.client.js_reload = (function js_reload(p__17033,callback){var map__17035 = p__17033;var map__17035__$1 = ((cljs.core.seq_QMARK_(map__17035))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17035):map__17035);var msg = map__17035__$1;var dependency_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17035__$1,cljs.core.constant$keyword$88);var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17035__$1,cljs.core.constant$keyword$89);var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17035__$1,cljs.core.constant$keyword$90);if(cljs.core.truth_((function (){var or__3481__auto__ = dependency_file;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster(request_url)).addCallback(((function (map__17035,map__17035__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__17035,map__17035__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();figwheel.client.js_reload(file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,url);
return cljs.core.async.close_BANG_(out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into(cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__17036,p__17037){var map__17040 = p__17036;var map__17040__$1 = ((cljs.core.seq_QMARK_(map__17040))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17040):map__17040);var opts = map__17040__$1;var url_rewriter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17040__$1,cljs.core.constant$keyword$91);var map__17041 = p__17037;var map__17041__$1 = ((cljs.core.seq_QMARK_(map__17041))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17041):map__17041);var d = map__17041__$1;var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17041__$1,cljs.core.constant$keyword$92);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.constant$keyword$90,(url_rewriter.cljs$core$IFn$_invoke$arity$1 ? url_rewriter.cljs$core$IFn$_invoke$arity$1([cljs.core.str("//"),cljs.core.str(figwheel.client.reload_host(opts)),cljs.core.str(file)].join('')) : url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.reload_host(opts)),cljs.core.str(file)].join(''))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__17042,p__17043){var map__17084 = p__17042;var map__17084__$1 = ((cljs.core.seq_QMARK_(map__17084))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17084):map__17084);var opts = map__17084__$1;var on_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17084__$1,cljs.core.constant$keyword$93);var before_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17084__$1,cljs.core.constant$keyword$94);var map__17085 = p__17043;var map__17085__$1 = ((cljs.core.seq_QMARK_(map__17085))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17085):map__17085);var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17085__$1,cljs.core.constant$keyword$95);var c__6136__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6136__auto__,map__17084,map__17084__$1,opts,on_jsload,before_jsload,map__17085,map__17085__$1,files){
return (function (){var f__6137__auto__ = (function (){var switch__6072__auto__ = ((function (c__6136__auto__,map__17084,map__17084__$1,opts,on_jsload,before_jsload,map__17085,map__17085__$1,files){
return (function (state_17107){var state_val_17108 = (state_17107[1]);if((state_val_17108 === 6))
{var inst_17090 = (state_17107[7]);var inst_17099 = (state_17107[2]);var inst_17100 = [inst_17090];var inst_17101 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_17100,null));var inst_17102 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(on_jsload,inst_17101);var state_17107__$1 = (function (){var statearr_17109 = state_17107;(statearr_17109[8] = inst_17099);
return statearr_17109;
})();var statearr_17110_17124 = state_17107__$1;(statearr_17110_17124[2] = inst_17102);
(statearr_17110_17124[1] = 5);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17108 === 5))
{var inst_17105 = (state_17107[2]);var state_17107__$1 = state_17107;return cljs.core.async.impl.ioc_helpers.return_chan(state_17107__$1,inst_17105);
} else
{if((state_val_17108 === 4))
{var state_17107__$1 = state_17107;var statearr_17111_17125 = state_17107__$1;(statearr_17111_17125[2] = null);
(statearr_17111_17125[1] = 5);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17108 === 3))
{var inst_17090 = (state_17107[7]);var inst_17093 = console.debug("Figwheel: loaded these files");var inst_17094 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$92,inst_17090);var inst_17095 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_17094], 0));var inst_17096 = console.log(inst_17095);var inst_17097 = cljs.core.async.timeout(10);var state_17107__$1 = (function (){var statearr_17112 = state_17107;(statearr_17112[9] = inst_17096);
(statearr_17112[10] = inst_17093);
return statearr_17112;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17107__$1,6,inst_17097);
} else
{if((state_val_17108 === 2))
{var inst_17090 = (state_17107[7]);var inst_17090__$1 = (state_17107[2]);var inst_17091 = cljs.core.not_empty(inst_17090__$1);var state_17107__$1 = (function (){var statearr_17113 = state_17107;(statearr_17113[7] = inst_17090__$1);
return statearr_17113;
})();if(cljs.core.truth_(inst_17091))
{var statearr_17114_17126 = state_17107__$1;(statearr_17114_17126[1] = 3);
} else
{var statearr_17115_17127 = state_17107__$1;(statearr_17115_17127[1] = 4);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_17108 === 1))
{var inst_17086 = (before_jsload.cljs$core$IFn$_invoke$arity$1 ? before_jsload.cljs$core$IFn$_invoke$arity$1(files) : before_jsload.call(null,files));var inst_17087 = figwheel.client.add_request_urls(opts,files);var inst_17088 = figwheel.client.load_all_js_files(inst_17087);var state_17107__$1 = (function (){var statearr_17116 = state_17107;(statearr_17116[11] = inst_17086);
return statearr_17116;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17107__$1,2,inst_17088);
} else
{return null;
}
}
}
}
}
}
});})(c__6136__auto__,map__17084,map__17084__$1,opts,on_jsload,before_jsload,map__17085,map__17085__$1,files))
;return ((function (switch__6072__auto__,c__6136__auto__,map__17084,map__17084__$1,opts,on_jsload,before_jsload,map__17085,map__17085__$1,files){
return (function() {
var state_machine__6073__auto__ = null;
var state_machine__6073__auto____0 = (function (){var statearr_17120 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17120[0] = state_machine__6073__auto__);
(statearr_17120[1] = 1);
return statearr_17120;
});
var state_machine__6073__auto____1 = (function (state_17107){while(true){
var ret_value__6074__auto__ = (function (){try{while(true){
var result__6075__auto__ = switch__6072__auto__(state_17107);if(cljs.core.keyword_identical_QMARK_(result__6075__auto__,cljs.core.constant$keyword$71))
{{
continue;
}
} else
{return result__6075__auto__;
}
break;
}
}catch (e17121){if((e17121 instanceof Object))
{var ex__6076__auto__ = e17121;var statearr_17122_17128 = state_17107;(statearr_17122_17128[5] = ex__6076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17107);
return cljs.core.constant$keyword$71;
} else
{if(cljs.core.constant$keyword$60)
{throw e17121;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6074__auto__,cljs.core.constant$keyword$71))
{{
var G__17129 = state_17107;
state_17107 = G__17129;
continue;
}
} else
{return ret_value__6074__auto__;
}
break;
}
});
state_machine__6073__auto__ = function(state_17107){
switch(arguments.length){
case 0:
return state_machine__6073__auto____0.call(this);
case 1:
return state_machine__6073__auto____1.call(this,state_17107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6073__auto____0;
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6073__auto____1;
return state_machine__6073__auto__;
})()
;})(switch__6072__auto__,c__6136__auto__,map__17084,map__17084__$1,opts,on_jsload,before_jsload,map__17085,map__17085__$1,files))
})();var state__6138__auto__ = (function (){var statearr_17123 = (f__6137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6137__auto__.cljs$core$IFn$_invoke$arity$0() : f__6137__auto__.call(null));(statearr_17123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6136__auto__);
return statearr_17123;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6138__auto__);
});})(c__6136__auto__,map__17084,map__17084__$1,opts,on_jsload,before_jsload,map__17085,map__17085__$1,files))
);
return c__6136__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__17130,link_href){var map__17132 = p__17130;var map__17132__$1 = ((cljs.core.seq_QMARK_(map__17132))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17132):map__17132);var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17132__$1,cljs.core.constant$keyword$90);var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17132__$1,cljs.core.constant$keyword$92);var trunc_href = figwheel.client.truncate_url(link_href);return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file,trunc_href)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(figwheel.client.truncate_url(request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some((function (l){if(figwheel.client.matches_file_QMARK_(f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links());
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster(url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster(url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[0]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__6136__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6136__auto__,parent){
return (function (){var f__6137__auto__ = (function (){var switch__6072__auto__ = ((function (c__6136__auto__,parent){
return (function (state_17153){var state_val_17154 = (state_17153[1]);if((state_val_17154 === 2))
{var inst_17150 = (state_17153[2]);var inst_17151 = parent.removeChild(orig_link);var state_17153__$1 = (function (){var statearr_17155 = state_17153;(statearr_17155[7] = inst_17150);
return statearr_17155;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_17153__$1,inst_17151);
} else
{if((state_val_17154 === 1))
{var inst_17148 = cljs.core.async.timeout(200);var state_17153__$1 = state_17153;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17153__$1,2,inst_17148);
} else
{return null;
}
}
});})(c__6136__auto__,parent))
;return ((function (switch__6072__auto__,c__6136__auto__,parent){
return (function() {
var state_machine__6073__auto__ = null;
var state_machine__6073__auto____0 = (function (){var statearr_17159 = [null,null,null,null,null,null,null,null];(statearr_17159[0] = state_machine__6073__auto__);
(statearr_17159[1] = 1);
return statearr_17159;
});
var state_machine__6073__auto____1 = (function (state_17153){while(true){
var ret_value__6074__auto__ = (function (){try{while(true){
var result__6075__auto__ = switch__6072__auto__(state_17153);if(cljs.core.keyword_identical_QMARK_(result__6075__auto__,cljs.core.constant$keyword$71))
{{
continue;
}
} else
{return result__6075__auto__;
}
break;
}
}catch (e17160){if((e17160 instanceof Object))
{var ex__6076__auto__ = e17160;var statearr_17161_17163 = state_17153;(statearr_17161_17163[5] = ex__6076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17153);
return cljs.core.constant$keyword$71;
} else
{if(cljs.core.constant$keyword$60)
{throw e17160;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6074__auto__,cljs.core.constant$keyword$71))
{{
var G__17164 = state_17153;
state_17153 = G__17164;
continue;
}
} else
{return ret_value__6074__auto__;
}
break;
}
});
state_machine__6073__auto__ = function(state_17153){
switch(arguments.length){
case 0:
return state_machine__6073__auto____0.call(this);
case 1:
return state_machine__6073__auto____1.call(this,state_17153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6073__auto____0;
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6073__auto____1;
return state_machine__6073__auto__;
})()
;})(switch__6072__auto__,c__6136__auto__,parent))
})();var state__6138__auto__ = (function (){var statearr_17162 = (f__6137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6137__auto__.cljs$core$IFn$_invoke$arity$0() : f__6137__auto__.call(null));(statearr_17162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6136__auto__);
return statearr_17162;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6138__auto__);
});})(c__6136__auto__,parent))
);
return c__6136__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__17165){var map__17167 = p__17165;var map__17167__$1 = ((cljs.core.seq_QMARK_(map__17167))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17167):map__17167);var f_data = map__17167__$1;var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17167__$1,cljs.core.constant$keyword$90);var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17167__$1,cljs.core.constant$keyword$92);var temp__4124__auto__ = figwheel.client.get_correct_link(f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.cljs$core$IFn$_invoke$arity$2(link,figwheel.client.clone_link(link,request_url));
} else
{return figwheel.client.add_link_to_doc.cljs$core$IFn$_invoke$arity$1(figwheel.client.create_link(request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__17168,files_msg){var map__17190 = p__17168;var map__17190__$1 = ((cljs.core.seq_QMARK_(map__17190))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17190):map__17190);var opts = map__17190__$1;var on_cssload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17190__$1,cljs.core.constant$keyword$96);var seq__17191_17211 = cljs.core.seq(figwheel.client.add_request_urls(opts,cljs.core.constant$keyword$95.cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__17192_17212 = null;var count__17193_17213 = 0;var i__17194_17214 = 0;while(true){
if((i__17194_17214 < count__17193_17213))
{var f_17215 = chunk__17192_17212.cljs$core$IIndexed$_nth$arity$2(null,i__17194_17214);figwheel.client.reload_css_file(f_17215);
{
var G__17216 = seq__17191_17211;
var G__17217 = chunk__17192_17212;
var G__17218 = count__17193_17213;
var G__17219 = (i__17194_17214 + 1);
seq__17191_17211 = G__17216;
chunk__17192_17212 = G__17217;
count__17193_17213 = G__17218;
i__17194_17214 = G__17219;
continue;
}
} else
{var temp__4126__auto___17220 = cljs.core.seq(seq__17191_17211);if(temp__4126__auto___17220)
{var seq__17191_17221__$1 = temp__4126__auto___17220;if(cljs.core.chunked_seq_QMARK_(seq__17191_17221__$1))
{var c__4229__auto___17222 = cljs.core.chunk_first(seq__17191_17221__$1);{
var G__17223 = cljs.core.chunk_rest(seq__17191_17221__$1);
var G__17224 = c__4229__auto___17222;
var G__17225 = cljs.core.count(c__4229__auto___17222);
var G__17226 = 0;
seq__17191_17211 = G__17223;
chunk__17192_17212 = G__17224;
count__17193_17213 = G__17225;
i__17194_17214 = G__17226;
continue;
}
} else
{var f_17227 = cljs.core.first(seq__17191_17221__$1);figwheel.client.reload_css_file(f_17227);
{
var G__17228 = cljs.core.next(seq__17191_17221__$1);
var G__17229 = null;
var G__17230 = 0;
var G__17231 = 0;
seq__17191_17211 = G__17228;
chunk__17192_17212 = G__17229;
count__17193_17213 = G__17230;
i__17194_17214 = G__17231;
continue;
}
}
} else
{}
}
break;
}
var c__6136__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6136__auto__,map__17190,map__17190__$1,opts,on_cssload){
return (function (){var f__6137__auto__ = (function (){var switch__6072__auto__ = ((function (c__6136__auto__,map__17190,map__17190__$1,opts,on_cssload){
return (function (state_17201){var state_val_17202 = (state_17201[1]);if((state_val_17202 === 2))
{var inst_17197 = (state_17201[2]);var inst_17198 = cljs.core.constant$keyword$95.cljs$core$IFn$_invoke$arity$1(files_msg);var inst_17199 = (on_cssload.cljs$core$IFn$_invoke$arity$1 ? on_cssload.cljs$core$IFn$_invoke$arity$1(inst_17198) : on_cssload.call(null,inst_17198));var state_17201__$1 = (function (){var statearr_17203 = state_17201;(statearr_17203[7] = inst_17197);
return statearr_17203;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_17201__$1,inst_17199);
} else
{if((state_val_17202 === 1))
{var inst_17195 = cljs.core.async.timeout(100);var state_17201__$1 = state_17201;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17201__$1,2,inst_17195);
} else
{return null;
}
}
});})(c__6136__auto__,map__17190,map__17190__$1,opts,on_cssload))
;return ((function (switch__6072__auto__,c__6136__auto__,map__17190,map__17190__$1,opts,on_cssload){
return (function() {
var state_machine__6073__auto__ = null;
var state_machine__6073__auto____0 = (function (){var statearr_17207 = [null,null,null,null,null,null,null,null];(statearr_17207[0] = state_machine__6073__auto__);
(statearr_17207[1] = 1);
return statearr_17207;
});
var state_machine__6073__auto____1 = (function (state_17201){while(true){
var ret_value__6074__auto__ = (function (){try{while(true){
var result__6075__auto__ = switch__6072__auto__(state_17201);if(cljs.core.keyword_identical_QMARK_(result__6075__auto__,cljs.core.constant$keyword$71))
{{
continue;
}
} else
{return result__6075__auto__;
}
break;
}
}catch (e17208){if((e17208 instanceof Object))
{var ex__6076__auto__ = e17208;var statearr_17209_17232 = state_17201;(statearr_17209_17232[5] = ex__6076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17201);
return cljs.core.constant$keyword$71;
} else
{if(cljs.core.constant$keyword$60)
{throw e17208;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6074__auto__,cljs.core.constant$keyword$71))
{{
var G__17233 = state_17201;
state_17201 = G__17233;
continue;
}
} else
{return ret_value__6074__auto__;
}
break;
}
});
state_machine__6073__auto__ = function(state_17201){
switch(arguments.length){
case 0:
return state_machine__6073__auto____0.call(this);
case 1:
return state_machine__6073__auto____1.call(this,state_17201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6073__auto____0;
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6073__auto____1;
return state_machine__6073__auto__;
})()
;})(switch__6072__auto__,c__6136__auto__,map__17190,map__17190__$1,opts,on_cssload))
})();var state__6138__auto__ = (function (){var statearr_17210 = (f__6137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6137__auto__.cljs$core$IFn$_invoke$arity$0() : f__6137__auto__.call(null));(statearr_17210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6136__auto__);
return statearr_17210;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6138__auto__);
});})(c__6136__auto__,map__17190,map__17190__$1,opts,on_cssload))
);
return c__6136__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return (compile_fail_callback.cljs$core$IFn$_invoke$arity$1 ? compile_fail_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(fail_msg,cljs.core.constant$keyword$97)) : compile_fail_callback.call(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(fail_msg,cljs.core.constant$keyword$97)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster(src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__17234){var map__17239 = p__17234;var map__17239__$1 = ((cljs.core.seq_QMARK_(map__17239))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17239):map__17239);var opts = map__17239__$1;var on_compile_fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17239__$1,cljs.core.constant$keyword$98);var jsload_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17239__$1,cljs.core.constant$keyword$99);var websocket_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17239__$1,cljs.core.constant$keyword$87);var retry_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17239__$1,cljs.core.constant$keyword$100);console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__17239,map__17239__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string(msg_str.data);var pred__17240 = cljs.core._EQ_;var expr__17241 = cljs.core.constant$keyword$97.cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_((pred__17240.cljs$core$IFn$_invoke$arity$2 ? pred__17240.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$101,expr__17241) : pred__17240.call(null,cljs.core.constant$keyword$101,expr__17241))))
{return figwheel.client.reload_js_files(opts,msg);
} else
{if(cljs.core.truth_((pred__17240.cljs$core$IFn$_invoke$arity$2 ? pred__17240.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$102,expr__17241) : pred__17240.call(null,cljs.core.constant$keyword$102,expr__17241))))
{return figwheel.client.reload_css_files(opts,msg);
} else
{if(cljs.core.truth_((pred__17240.cljs$core$IFn$_invoke$arity$2 ? pred__17240.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$103,expr__17241) : pred__17240.call(null,cljs.core.constant$keyword$103,expr__17241))))
{return figwheel.client.compile_failed(msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__17239,map__17239__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__17239,map__17239__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base();
return console.debug("Figwheel: socket connection established");
});})(socket,map__17239,map__17239__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__17239,map__17239__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.array_seq(["Figwheel: socket closed or failed to open"], 0));
if((retry_count > 0))
{return window.setTimeout(((function (socket,map__17239,map__17239__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.constant$keyword$100,(retry_count - 1)));
});})(socket,map__17239,map__17239__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,2000);
} else
{return null;
}
});})(socket,map__17239,map__17239__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__17239,map__17239__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.array_seq(["Figwheel: socket error "], 0));
});})(socket,map__17239,map__17239__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj17246 = {"detail":url};return obj17246;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons(cljs.core.select_keys(ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$104,cljs.core.constant$keyword$105], null)),get_essential_messages(cljs.core.constant$keyword$106.cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__17247){var map__17249 = p__17247;var map__17249__$1 = ((cljs.core.seq_QMARK_(map__17249))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17249):map__17249);var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17249__$1,cljs.core.constant$keyword$105);var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17249__$1,cljs.core.constant$keyword$104);return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__17250){var map__17256 = p__17250;var map__17256__$1 = ((cljs.core.seq_QMARK_(map__17256))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17256):map__17256);var ed = map__17256__$1;var exception_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17256__$1,cljs.core.constant$keyword$107);var formatted_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17256__$1,cljs.core.constant$keyword$108);console.debug("Figwheel: Compile Exception");
var seq__17257_17261 = cljs.core.seq((figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1 ? figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1(exception_data) : figwheel.client.format_messages.call(null,exception_data)));var chunk__17258_17262 = null;var count__17259_17263 = 0;var i__17260_17264 = 0;while(true){
if((i__17260_17264 < count__17259_17263))
{var msg_17265 = chunk__17258_17262.cljs$core$IIndexed$_nth$arity$2(null,i__17260_17264);console.log(msg_17265);
{
var G__17266 = seq__17257_17261;
var G__17267 = chunk__17258_17262;
var G__17268 = count__17259_17263;
var G__17269 = (i__17260_17264 + 1);
seq__17257_17261 = G__17266;
chunk__17258_17262 = G__17267;
count__17259_17263 = G__17268;
i__17260_17264 = G__17269;
continue;
}
} else
{var temp__4126__auto___17270 = cljs.core.seq(seq__17257_17261);if(temp__4126__auto___17270)
{var seq__17257_17271__$1 = temp__4126__auto___17270;if(cljs.core.chunked_seq_QMARK_(seq__17257_17271__$1))
{var c__4229__auto___17272 = cljs.core.chunk_first(seq__17257_17271__$1);{
var G__17273 = cljs.core.chunk_rest(seq__17257_17271__$1);
var G__17274 = c__4229__auto___17272;
var G__17275 = cljs.core.count(c__4229__auto___17272);
var G__17276 = 0;
seq__17257_17261 = G__17273;
chunk__17258_17262 = G__17274;
count__17259_17263 = G__17275;
i__17260_17264 = G__17276;
continue;
}
} else
{var msg_17277 = cljs.core.first(seq__17257_17271__$1);console.log(msg_17277);
{
var G__17278 = cljs.core.next(seq__17257_17271__$1);
var G__17279 = null;
var G__17280 = 0;
var G__17281 = 0;
seq__17257_17261 = G__17278;
chunk__17258_17262 = G__17279;
count__17259_17263 = G__17280;
i__17260_17264 = G__17281;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$92,files)], 0)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$100,100,cljs.core.constant$keyword$99,figwheel.client.default_on_jsload,cljs.core.constant$keyword$93,(function (){var or__3481__auto__ = cljs.core.constant$keyword$99.cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),cljs.core.constant$keyword$96,figwheel.client.default_on_cssload,cljs.core.constant$keyword$94,figwheel.client.default_before_load,cljs.core.constant$keyword$98,figwheel.client.default_on_compile_fail,cljs.core.constant$keyword$91,cljs.core.identity,cljs.core.constant$keyword$87,[cljs.core.str("ws://"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join('')], null),opts], 0)));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__17282){var map__17284 = p__17282;var map__17284__$1 = ((cljs.core.seq_QMARK_(map__17284))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17284):map__17284);var opts = map__17284__$1;return figwheel.client.watch_and_reload_with_opts(opts);
};
var watch_and_reload = function (var_args){
var p__17282 = null;if (arguments.length > 0) {
  p__17282 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__17282);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__17285){
var p__17282 = cljs.core.seq(arglist__17285);
return watch_and_reload__delegate(p__17282);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

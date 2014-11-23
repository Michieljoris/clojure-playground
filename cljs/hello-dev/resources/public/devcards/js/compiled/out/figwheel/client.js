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
figwheel.client.log_style = "color:rgb(0,128,0);";
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__16079,args){var map__16081 = p__16079;var map__16081__$1 = ((cljs.core.seq_QMARK_.call(null,map__16081))?cljs.core.apply.call(null,cljs.core.hash_map,map__16081):map__16081);var debug = cljs.core.get.call(null,map__16081__$1,new cljs.core.Keyword(null,"debug","debug",1109363141));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__16079,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__16079,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__16082){
var p__16079 = cljs.core.first(arglist__16082);
var args = cljs.core.rest(arglist__16082);
return log__delegate(p__16079,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__16083){var map__16085 = p__16083;var map__16085__$1 = ((cljs.core.seq_QMARK_.call(null,map__16085))?cljs.core.apply.call(null,cljs.core.hash_map,map__16085):map__16085);var websocket_url = cljs.core.get.call(null,map__16085__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return [cljs.core.str(url),cljs.core.str("?rel="),cljs.core.str((new Date()).getTime())].join('');
});
figwheel.client.js_reload = (function js_reload(p__16086,callback){var map__16088 = p__16086;var map__16088__$1 = ((cljs.core.seq_QMARK_.call(null,map__16088))?cljs.core.apply.call(null,cljs.core.hash_map,map__16088):map__16088);var msg = map__16088__$1;var dependency_file = cljs.core.get.call(null,map__16088__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",2750516784));var namespace = cljs.core.get.call(null,map__16088__$1,new cljs.core.Keyword(null,"namespace","namespace",2266122445));var request_url = cljs.core.get.call(null,map__16088__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));if(cljs.core.truth_((function (){var or__7869__auto__ = dependency_file;if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__16088,map__16088__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__16088,map__16088__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__16089,p__16090){var map__16093 = p__16089;var map__16093__$1 = ((cljs.core.seq_QMARK_.call(null,map__16093))?cljs.core.apply.call(null,cljs.core.hash_map,map__16093):map__16093);var opts = map__16093__$1;var url_rewriter = cljs.core.get.call(null,map__16093__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",538861174));var map__16094 = p__16090;var map__16094__$1 = ((cljs.core.seq_QMARK_.call(null,map__16094))?cljs.core.apply.call(null,cljs.core.hash_map,map__16094):map__16094);var d = map__16094__$1;var file = cljs.core.get.call(null,map__16094__$1,new cljs.core.Keyword(null,"file","file",1017047278));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2162835619),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__16095,p__16096){var map__16137 = p__16095;var map__16137__$1 = ((cljs.core.seq_QMARK_.call(null,map__16137))?cljs.core.apply.call(null,cljs.core.hash_map,map__16137):map__16137);var opts = map__16137__$1;var on_jsload = cljs.core.get.call(null,map__16137__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",817745103));var before_jsload = cljs.core.get.call(null,map__16137__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",3705046831));var map__16138 = p__16096;var map__16138__$1 = ((cljs.core.seq_QMARK_.call(null,map__16138))?cljs.core.apply.call(null,cljs.core.hash_map,map__16138):map__16138);var files = cljs.core.get.call(null,map__16138__$1,new cljs.core.Keyword(null,"files","files",1111338473));var c__10498__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto__,map__16137,map__16137__$1,opts,on_jsload,before_jsload,map__16138,map__16138__$1,files){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto__,map__16137,map__16137__$1,opts,on_jsload,before_jsload,map__16138,map__16138__$1,files){
return (function (state_16160){var state_val_16161 = (state_16160[1]);if((state_val_16161 === 6))
{var inst_16143 = (state_16160[7]);var inst_16152 = (state_16160[2]);var inst_16153 = [inst_16143];var inst_16154 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_16153,null));var inst_16155 = cljs.core.apply.call(null,on_jsload,inst_16154);var state_16160__$1 = (function (){var statearr_16162 = state_16160;(statearr_16162[8] = inst_16152);
return statearr_16162;
})();var statearr_16163_16177 = state_16160__$1;(statearr_16163_16177[2] = inst_16155);
(statearr_16163_16177[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16161 === 5))
{var inst_16158 = (state_16160[2]);var state_16160__$1 = state_16160;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16160__$1,inst_16158);
} else
{if((state_val_16161 === 4))
{var state_16160__$1 = state_16160;var statearr_16164_16178 = state_16160__$1;(statearr_16164_16178[2] = null);
(statearr_16164_16178[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16161 === 3))
{var inst_16143 = (state_16160[7]);var inst_16146 = console.log("%cFigwheel: loaded these files",figwheel.client.log_style);var inst_16147 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",1017047278),inst_16143);var inst_16148 = cljs.core.prn_str.call(null,inst_16147);var inst_16149 = console.log(inst_16148);var inst_16150 = cljs.core.async.timeout.call(null,10);var state_16160__$1 = (function (){var statearr_16165 = state_16160;(statearr_16165[9] = inst_16146);
(statearr_16165[10] = inst_16149);
return statearr_16165;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16160__$1,6,inst_16150);
} else
{if((state_val_16161 === 2))
{var inst_16143 = (state_16160[7]);var inst_16143__$1 = (state_16160[2]);var inst_16144 = cljs.core.not_empty.call(null,inst_16143__$1);var state_16160__$1 = (function (){var statearr_16166 = state_16160;(statearr_16166[7] = inst_16143__$1);
return statearr_16166;
})();if(cljs.core.truth_(inst_16144))
{var statearr_16167_16179 = state_16160__$1;(statearr_16167_16179[1] = 3);
} else
{var statearr_16168_16180 = state_16160__$1;(statearr_16168_16180[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16161 === 1))
{var inst_16139 = before_jsload.call(null,files);var inst_16140 = figwheel.client.add_request_urls.call(null,opts,files);var inst_16141 = figwheel.client.load_all_js_files.call(null,inst_16140);var state_16160__$1 = (function (){var statearr_16169 = state_16160;(statearr_16169[11] = inst_16139);
return statearr_16169;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16160__$1,2,inst_16141);
} else
{return null;
}
}
}
}
}
}
});})(c__10498__auto__,map__16137,map__16137__$1,opts,on_jsload,before_jsload,map__16138,map__16138__$1,files))
;return ((function (switch__10434__auto__,c__10498__auto__,map__16137,map__16137__$1,opts,on_jsload,before_jsload,map__16138,map__16138__$1,files){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_16173 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16173[0] = state_machine__10435__auto__);
(statearr_16173[1] = 1);
return statearr_16173;
});
var state_machine__10435__auto____1 = (function (state_16160){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_16160);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e16174){if((e16174 instanceof Object))
{var ex__10438__auto__ = e16174;var statearr_16175_16181 = state_16160;(statearr_16175_16181[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16160);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16174;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16182 = state_16160;
state_16160 = G__16182;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_16160){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_16160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto__,map__16137,map__16137__$1,opts,on_jsload,before_jsload,map__16138,map__16138__$1,files))
})();var state__10500__auto__ = (function (){var statearr_16176 = f__10499__auto__.call(null);(statearr_16176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto__);
return statearr_16176;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto__,map__16137,map__16137__$1,opts,on_jsload,before_jsload,map__16138,map__16138__$1,files))
);
return c__10498__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__16183,link_href){var map__16185 = p__16183;var map__16185__$1 = ((cljs.core.seq_QMARK_.call(null,map__16185))?cljs.core.apply.call(null,cljs.core.hash_map,map__16185):map__16185);var request_url = cljs.core.get.call(null,map__16185__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));var file = cljs.core.get.call(null,map__16185__$1,new cljs.core.Keyword(null,"file","file",1017047278));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[0]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__10498__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto__,parent){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto__,parent){
return (function (state_16206){var state_val_16207 = (state_16206[1]);if((state_val_16207 === 2))
{var inst_16203 = (state_16206[2]);var inst_16204 = parent.removeChild(orig_link);var state_16206__$1 = (function (){var statearr_16208 = state_16206;(statearr_16208[7] = inst_16203);
return statearr_16208;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16206__$1,inst_16204);
} else
{if((state_val_16207 === 1))
{var inst_16201 = cljs.core.async.timeout.call(null,200);var state_16206__$1 = state_16206;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16206__$1,2,inst_16201);
} else
{return null;
}
}
});})(c__10498__auto__,parent))
;return ((function (switch__10434__auto__,c__10498__auto__,parent){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_16212 = [null,null,null,null,null,null,null,null];(statearr_16212[0] = state_machine__10435__auto__);
(statearr_16212[1] = 1);
return statearr_16212;
});
var state_machine__10435__auto____1 = (function (state_16206){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_16206);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e16213){if((e16213 instanceof Object))
{var ex__10438__auto__ = e16213;var statearr_16214_16216 = state_16206;(statearr_16214_16216[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16206);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16213;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16217 = state_16206;
state_16206 = G__16217;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_16206){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_16206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto__,parent))
})();var state__10500__auto__ = (function (){var statearr_16215 = f__10499__auto__.call(null);(statearr_16215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto__);
return statearr_16215;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto__,parent))
);
return c__10498__auto__;
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
figwheel.client.reload_css_file = (function reload_css_file(p__16218){var map__16220 = p__16218;var map__16220__$1 = ((cljs.core.seq_QMARK_.call(null,map__16220))?cljs.core.apply.call(null,cljs.core.hash_map,map__16220):map__16220);var f_data = map__16220__$1;var request_url = cljs.core.get.call(null,map__16220__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));var file = cljs.core.get.call(null,map__16220__$1,new cljs.core.Keyword(null,"file","file",1017047278));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__16221,files_msg){var map__16243 = p__16221;var map__16243__$1 = ((cljs.core.seq_QMARK_.call(null,map__16243))?cljs.core.apply.call(null,cljs.core.hash_map,map__16243):map__16243);var opts = map__16243__$1;var on_cssload = cljs.core.get.call(null,map__16243__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1611735789));var seq__16244_16264 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__16245_16265 = null;var count__16246_16266 = 0;var i__16247_16267 = 0;while(true){
if((i__16247_16267 < count__16246_16266))
{var f_16268 = cljs.core._nth.call(null,chunk__16245_16265,i__16247_16267);figwheel.client.reload_css_file.call(null,f_16268);
{
var G__16269 = seq__16244_16264;
var G__16270 = chunk__16245_16265;
var G__16271 = count__16246_16266;
var G__16272 = (i__16247_16267 + 1);
seq__16244_16264 = G__16269;
chunk__16245_16265 = G__16270;
count__16246_16266 = G__16271;
i__16247_16267 = G__16272;
continue;
}
} else
{var temp__4126__auto___16273 = cljs.core.seq.call(null,seq__16244_16264);if(temp__4126__auto___16273)
{var seq__16244_16274__$1 = temp__4126__auto___16273;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16244_16274__$1))
{var c__8617__auto___16275 = cljs.core.chunk_first.call(null,seq__16244_16274__$1);{
var G__16276 = cljs.core.chunk_rest.call(null,seq__16244_16274__$1);
var G__16277 = c__8617__auto___16275;
var G__16278 = cljs.core.count.call(null,c__8617__auto___16275);
var G__16279 = 0;
seq__16244_16264 = G__16276;
chunk__16245_16265 = G__16277;
count__16246_16266 = G__16278;
i__16247_16267 = G__16279;
continue;
}
} else
{var f_16280 = cljs.core.first.call(null,seq__16244_16274__$1);figwheel.client.reload_css_file.call(null,f_16280);
{
var G__16281 = cljs.core.next.call(null,seq__16244_16274__$1);
var G__16282 = null;
var G__16283 = 0;
var G__16284 = 0;
seq__16244_16264 = G__16281;
chunk__16245_16265 = G__16282;
count__16246_16266 = G__16283;
i__16247_16267 = G__16284;
continue;
}
}
} else
{}
}
break;
}
var c__10498__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto__,map__16243,map__16243__$1,opts,on_cssload){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto__,map__16243,map__16243__$1,opts,on_cssload){
return (function (state_16254){var state_val_16255 = (state_16254[1]);if((state_val_16255 === 2))
{var inst_16250 = (state_16254[2]);var inst_16251 = new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_16252 = on_cssload.call(null,inst_16251);var state_16254__$1 = (function (){var statearr_16256 = state_16254;(statearr_16256[7] = inst_16250);
return statearr_16256;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16254__$1,inst_16252);
} else
{if((state_val_16255 === 1))
{var inst_16248 = cljs.core.async.timeout.call(null,100);var state_16254__$1 = state_16254;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16254__$1,2,inst_16248);
} else
{return null;
}
}
});})(c__10498__auto__,map__16243,map__16243__$1,opts,on_cssload))
;return ((function (switch__10434__auto__,c__10498__auto__,map__16243,map__16243__$1,opts,on_cssload){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_16260 = [null,null,null,null,null,null,null,null];(statearr_16260[0] = state_machine__10435__auto__);
(statearr_16260[1] = 1);
return statearr_16260;
});
var state_machine__10435__auto____1 = (function (state_16254){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_16254);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e16261){if((e16261 instanceof Object))
{var ex__10438__auto__ = e16261;var statearr_16262_16285 = state_16254;(statearr_16262_16285[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16254);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16261;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16286 = state_16254;
state_16254 = G__16286;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_16254){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_16254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto__,map__16243,map__16243__$1,opts,on_cssload))
})();var state__10500__auto__ = (function (){var statearr_16263 = f__10499__auto__.call(null);(statearr_16263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto__);
return statearr_16263;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto__,map__16243,map__16243__$1,opts,on_cssload))
);
return c__10498__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",3979112649)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__16287){var map__16292 = p__16287;var map__16292__$1 = ((cljs.core.seq_QMARK_.call(null,map__16292))?cljs.core.apply.call(null,cljs.core.hash_map,map__16292):map__16292);var opts = map__16292__$1;var on_compile_fail = cljs.core.get.call(null,map__16292__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",846779160));var jsload_callback = cljs.core.get.call(null,map__16292__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989));var websocket_url = cljs.core.get.call(null,map__16292__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));var retry_count = cljs.core.get.call(null,map__16292__$1,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212));console.log("%cFigwheel: trying to open cljs reload socket",figwheel.client.log_style);
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__16292,map__16292__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__16293 = cljs.core._EQ_;var expr__16294 = new cljs.core.Keyword(null,"msg-name","msg-name",3979112649).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__16293.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",2807270608),expr__16294)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__16293.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",1058553478),expr__16294)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__16293.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",630802569),expr__16294)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__16292,map__16292__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__16292,map__16292__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.log("%cFigwheel: socket connection established",figwheel.client.log_style);
});})(socket,map__16292,map__16292__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__16292,map__16292__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > 0))
{return window.setTimeout(((function (socket,map__16292,map__16292__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),(retry_count - 1)));
});})(socket,map__16292,map__16292__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,2000);
} else
{return null;
}
});})(socket,map__16292,map__16292__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__16292,map__16292__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__16292,map__16292__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj16299 = {"detail":url};return obj16299;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.Keyword(null,"class","class",1108647146)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",1108338651).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__16300){var map__16302 = p__16300;var map__16302__$1 = ((cljs.core.seq_QMARK_.call(null,map__16302))?cljs.core.apply.call(null,cljs.core.hash_map,map__16302):map__16302);var class$ = cljs.core.get.call(null,map__16302__$1,new cljs.core.Keyword(null,"class","class",1108647146));var message = cljs.core.get.call(null,map__16302__$1,new cljs.core.Keyword(null,"message","message",1968829305));return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__16303){var map__16309 = p__16303;var map__16309__$1 = ((cljs.core.seq_QMARK_.call(null,map__16309))?cljs.core.apply.call(null,cljs.core.hash_map,map__16309):map__16309);var ed = map__16309__$1;var exception_data = cljs.core.get.call(null,map__16309__$1,new cljs.core.Keyword(null,"exception-data","exception-data",922291674));var formatted_exception = cljs.core.get.call(null,map__16309__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",1408867312));console.log("%cFigwheel: Compile Exception",figwheel.client.log_style);
var seq__16310_16314 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__16311_16315 = null;var count__16312_16316 = 0;var i__16313_16317 = 0;while(true){
if((i__16313_16317 < count__16312_16316))
{var msg_16318 = cljs.core._nth.call(null,chunk__16311_16315,i__16313_16317);console.log(msg_16318);
{
var G__16319 = seq__16310_16314;
var G__16320 = chunk__16311_16315;
var G__16321 = count__16312_16316;
var G__16322 = (i__16313_16317 + 1);
seq__16310_16314 = G__16319;
chunk__16311_16315 = G__16320;
count__16312_16316 = G__16321;
i__16313_16317 = G__16322;
continue;
}
} else
{var temp__4126__auto___16323 = cljs.core.seq.call(null,seq__16310_16314);if(temp__4126__auto___16323)
{var seq__16310_16324__$1 = temp__4126__auto___16323;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16310_16324__$1))
{var c__8617__auto___16325 = cljs.core.chunk_first.call(null,seq__16310_16324__$1);{
var G__16326 = cljs.core.chunk_rest.call(null,seq__16310_16324__$1);
var G__16327 = c__8617__auto___16325;
var G__16328 = cljs.core.count.call(null,c__8617__auto___16325);
var G__16329 = 0;
seq__16310_16314 = G__16326;
chunk__16311_16315 = G__16327;
count__16312_16316 = G__16328;
i__16313_16317 = G__16329;
continue;
}
} else
{var msg_16330 = cljs.core.first.call(null,seq__16310_16324__$1);console.log(msg_16330);
{
var G__16331 = cljs.core.next.call(null,seq__16310_16324__$1);
var G__16332 = null;
var G__16333 = 0;
var G__16334 = 0;
seq__16310_16314 = G__16331;
chunk__16311_16315 = G__16332;
count__16312_16316 = G__16333;
i__16313_16317 = G__16334;
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
figwheel.client.default_before_load = (function default_before_load(files){console.log("%cFigwheel: loading files",figwheel.client.log_style);
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.log("%cFigwheel: loaded CSS files",figwheel.client.log_style);
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",1017047278),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),100,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",817745103),(function (){var or__7869__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1611735789),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",3705046831),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",846779160),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",538861174),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131),[cljs.core.str("ws://"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join('')], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__16335){var map__16337 = p__16335;var map__16337__$1 = ((cljs.core.seq_QMARK_.call(null,map__16337))?cljs.core.apply.call(null,cljs.core.hash_map,map__16337):map__16337);var opts = map__16337__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__16335 = null;if (arguments.length > 0) {
  p__16335 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__16335);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__16338){
var p__16335 = cljs.core.seq(arglist__16338);
return watch_and_reload__delegate(p__16335);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map
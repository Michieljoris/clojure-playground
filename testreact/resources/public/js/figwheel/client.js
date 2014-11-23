// Compiled by ClojureScript 0.0-2371
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
var log__delegate = function (p__18336,args){var map__18338 = p__18336;var map__18338__$1 = ((cljs.core.seq_QMARK_.call(null,map__18338))?cljs.core.apply.call(null,cljs.core.hash_map,map__18338):map__18338);var debug = cljs.core.get.call(null,map__18338__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__18336,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__18336,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__18339){
var p__18336 = cljs.core.first(arglist__18339);
var args = cljs.core.rest(arglist__18339);
return log__delegate(p__18336,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__18340){var map__18342 = p__18340;var map__18342__$1 = ((cljs.core.seq_QMARK_.call(null,map__18342))?cljs.core.apply.call(null,cljs.core.hash_map,map__18342):map__18342);var websocket_url = cljs.core.get.call(null,map__18342__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__18343,callback){var map__18345 = p__18343;var map__18345__$1 = ((cljs.core.seq_QMARK_.call(null,map__18345))?cljs.core.apply.call(null,cljs.core.hash_map,map__18345):map__18345);var msg = map__18345__$1;var dependency_file = cljs.core.get.call(null,map__18345__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__18345__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__18345__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__11495__auto__ = dependency_file;if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__18345,map__18345__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__18345,map__18345__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__18346,p__18347){var map__18350 = p__18346;var map__18350__$1 = ((cljs.core.seq_QMARK_.call(null,map__18350))?cljs.core.apply.call(null,cljs.core.hash_map,map__18350):map__18350);var opts = map__18350__$1;var url_rewriter = cljs.core.get.call(null,map__18350__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__18351 = p__18347;var map__18351__$1 = ((cljs.core.seq_QMARK_.call(null,map__18351))?cljs.core.apply.call(null,cljs.core.hash_map,map__18351):map__18351);var d = map__18351__$1;var file = cljs.core.get.call(null,map__18351__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__18352,p__18353){var map__18395 = p__18352;var map__18395__$1 = ((cljs.core.seq_QMARK_.call(null,map__18395))?cljs.core.apply.call(null,cljs.core.hash_map,map__18395):map__18395);var opts = map__18395__$1;var on_jsload = cljs.core.get.call(null,map__18395__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__18395__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__18396 = p__18353;var map__18396__$1 = ((cljs.core.seq_QMARK_.call(null,map__18396))?cljs.core.apply.call(null,cljs.core.hash_map,map__18396):map__18396);var files = cljs.core.get.call(null,map__18396__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__14001__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14001__auto__,map__18395,map__18395__$1,opts,on_jsload,before_jsload,map__18396,map__18396__$1,files){
return (function (){var f__14002__auto__ = (function (){var switch__13945__auto__ = ((function (c__14001__auto__,map__18395,map__18395__$1,opts,on_jsload,before_jsload,map__18396,map__18396__$1,files){
return (function (state_18419){var state_val_18420 = (state_18419[(1)]);if((state_val_18420 === (6)))
{var inst_18401 = (state_18419[(7)]);var inst_18410 = (state_18419[(2)]);var inst_18411 = cljs.core.PersistentVector.EMPTY_NODE;var inst_18412 = [inst_18401];var inst_18413 = (new cljs.core.PersistentVector(null,1,(5),inst_18411,inst_18412,null));var inst_18414 = cljs.core.apply.call(null,on_jsload,inst_18413);var state_18419__$1 = (function (){var statearr_18421 = state_18419;(statearr_18421[(8)] = inst_18410);
return statearr_18421;
})();var statearr_18422_18436 = state_18419__$1;(statearr_18422_18436[(2)] = inst_18414);
(statearr_18422_18436[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18420 === (5)))
{var inst_18417 = (state_18419[(2)]);var state_18419__$1 = state_18419;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18419__$1,inst_18417);
} else
{if((state_val_18420 === (4)))
{var state_18419__$1 = state_18419;var statearr_18423_18437 = state_18419__$1;(statearr_18423_18437[(2)] = null);
(statearr_18423_18437[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18420 === (3)))
{var inst_18401 = (state_18419[(7)]);var inst_18404 = console.debug("Figwheel: loaded these files");var inst_18405 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_18401);var inst_18406 = cljs.core.prn_str.call(null,inst_18405);var inst_18407 = console.log(inst_18406);var inst_18408 = cljs.core.async.timeout.call(null,(10));var state_18419__$1 = (function (){var statearr_18424 = state_18419;(statearr_18424[(9)] = inst_18404);
(statearr_18424[(10)] = inst_18407);
return statearr_18424;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18419__$1,(6),inst_18408);
} else
{if((state_val_18420 === (2)))
{var inst_18401 = (state_18419[(7)]);var inst_18401__$1 = (state_18419[(2)]);var inst_18402 = cljs.core.not_empty.call(null,inst_18401__$1);var state_18419__$1 = (function (){var statearr_18425 = state_18419;(statearr_18425[(7)] = inst_18401__$1);
return statearr_18425;
})();if(cljs.core.truth_(inst_18402))
{var statearr_18426_18438 = state_18419__$1;(statearr_18426_18438[(1)] = (3));
} else
{var statearr_18427_18439 = state_18419__$1;(statearr_18427_18439[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18420 === (1)))
{var inst_18397 = before_jsload.call(null,files);var inst_18398 = figwheel.client.add_request_urls.call(null,opts,files);var inst_18399 = figwheel.client.load_all_js_files.call(null,inst_18398);var state_18419__$1 = (function (){var statearr_18428 = state_18419;(statearr_18428[(11)] = inst_18397);
return statearr_18428;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18419__$1,(2),inst_18399);
} else
{return null;
}
}
}
}
}
}
});})(c__14001__auto__,map__18395,map__18395__$1,opts,on_jsload,before_jsload,map__18396,map__18396__$1,files))
;return ((function (switch__13945__auto__,c__14001__auto__,map__18395,map__18395__$1,opts,on_jsload,before_jsload,map__18396,map__18396__$1,files){
return (function() {
var state_machine__13946__auto__ = null;
var state_machine__13946__auto____0 = (function (){var statearr_18432 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18432[(0)] = state_machine__13946__auto__);
(statearr_18432[(1)] = (1));
return statearr_18432;
});
var state_machine__13946__auto____1 = (function (state_18419){while(true){
var ret_value__13947__auto__ = (function (){try{while(true){
var result__13948__auto__ = switch__13945__auto__.call(null,state_18419);if(cljs.core.keyword_identical_QMARK_.call(null,result__13948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13948__auto__;
}
break;
}
}catch (e18433){if((e18433 instanceof Object))
{var ex__13949__auto__ = e18433;var statearr_18434_18440 = state_18419;(statearr_18434_18440[(5)] = ex__13949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18419);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18433;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18441 = state_18419;
state_18419 = G__18441;
continue;
}
} else
{return ret_value__13947__auto__;
}
break;
}
});
state_machine__13946__auto__ = function(state_18419){
switch(arguments.length){
case 0:
return state_machine__13946__auto____0.call(this);
case 1:
return state_machine__13946__auto____1.call(this,state_18419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13946__auto____0;
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13946__auto____1;
return state_machine__13946__auto__;
})()
;})(switch__13945__auto__,c__14001__auto__,map__18395,map__18395__$1,opts,on_jsload,before_jsload,map__18396,map__18396__$1,files))
})();var state__14003__auto__ = (function (){var statearr_18435 = f__14002__auto__.call(null);(statearr_18435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14001__auto__);
return statearr_18435;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14003__auto__);
});})(c__14001__auto__,map__18395,map__18395__$1,opts,on_jsload,before_jsload,map__18396,map__18396__$1,files))
);
return c__14001__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__18442,link_href){var map__18444 = p__18442;var map__18444__$1 = ((cljs.core.seq_QMARK_.call(null,map__18444))?cljs.core.apply.call(null,cljs.core.hash_map,map__18444):map__18444);var request_url = cljs.core.get.call(null,map__18444__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__18444__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__14001__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14001__auto__,parent){
return (function (){var f__14002__auto__ = (function (){var switch__13945__auto__ = ((function (c__14001__auto__,parent){
return (function (state_18465){var state_val_18466 = (state_18465[(1)]);if((state_val_18466 === (2)))
{var inst_18462 = (state_18465[(2)]);var inst_18463 = parent.removeChild(orig_link);var state_18465__$1 = (function (){var statearr_18467 = state_18465;(statearr_18467[(7)] = inst_18462);
return statearr_18467;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18465__$1,inst_18463);
} else
{if((state_val_18466 === (1)))
{var inst_18460 = cljs.core.async.timeout.call(null,(200));var state_18465__$1 = state_18465;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18465__$1,(2),inst_18460);
} else
{return null;
}
}
});})(c__14001__auto__,parent))
;return ((function (switch__13945__auto__,c__14001__auto__,parent){
return (function() {
var state_machine__13946__auto__ = null;
var state_machine__13946__auto____0 = (function (){var statearr_18471 = [null,null,null,null,null,null,null,null];(statearr_18471[(0)] = state_machine__13946__auto__);
(statearr_18471[(1)] = (1));
return statearr_18471;
});
var state_machine__13946__auto____1 = (function (state_18465){while(true){
var ret_value__13947__auto__ = (function (){try{while(true){
var result__13948__auto__ = switch__13945__auto__.call(null,state_18465);if(cljs.core.keyword_identical_QMARK_.call(null,result__13948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13948__auto__;
}
break;
}
}catch (e18472){if((e18472 instanceof Object))
{var ex__13949__auto__ = e18472;var statearr_18473_18475 = state_18465;(statearr_18473_18475[(5)] = ex__13949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18465);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18472;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18476 = state_18465;
state_18465 = G__18476;
continue;
}
} else
{return ret_value__13947__auto__;
}
break;
}
});
state_machine__13946__auto__ = function(state_18465){
switch(arguments.length){
case 0:
return state_machine__13946__auto____0.call(this);
case 1:
return state_machine__13946__auto____1.call(this,state_18465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13946__auto____0;
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13946__auto____1;
return state_machine__13946__auto__;
})()
;})(switch__13945__auto__,c__14001__auto__,parent))
})();var state__14003__auto__ = (function (){var statearr_18474 = f__14002__auto__.call(null);(statearr_18474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14001__auto__);
return statearr_18474;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14003__auto__);
});})(c__14001__auto__,parent))
);
return c__14001__auto__;
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
figwheel.client.reload_css_file = (function reload_css_file(p__18477){var map__18479 = p__18477;var map__18479__$1 = ((cljs.core.seq_QMARK_.call(null,map__18479))?cljs.core.apply.call(null,cljs.core.hash_map,map__18479):map__18479);var f_data = map__18479__$1;var request_url = cljs.core.get.call(null,map__18479__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__18479__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__18480,files_msg){var map__18502 = p__18480;var map__18502__$1 = ((cljs.core.seq_QMARK_.call(null,map__18502))?cljs.core.apply.call(null,cljs.core.hash_map,map__18502):map__18502);var opts = map__18502__$1;var on_cssload = cljs.core.get.call(null,map__18502__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__18503_18523 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__18504_18524 = null;var count__18505_18525 = (0);var i__18506_18526 = (0);while(true){
if((i__18506_18526 < count__18505_18525))
{var f_18527 = cljs.core._nth.call(null,chunk__18504_18524,i__18506_18526);figwheel.client.reload_css_file.call(null,f_18527);
{
var G__18528 = seq__18503_18523;
var G__18529 = chunk__18504_18524;
var G__18530 = count__18505_18525;
var G__18531 = (i__18506_18526 + (1));
seq__18503_18523 = G__18528;
chunk__18504_18524 = G__18529;
count__18505_18525 = G__18530;
i__18506_18526 = G__18531;
continue;
}
} else
{var temp__4126__auto___18532 = cljs.core.seq.call(null,seq__18503_18523);if(temp__4126__auto___18532)
{var seq__18503_18533__$1 = temp__4126__auto___18532;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18503_18533__$1))
{var c__12265__auto___18534 = cljs.core.chunk_first.call(null,seq__18503_18533__$1);{
var G__18535 = cljs.core.chunk_rest.call(null,seq__18503_18533__$1);
var G__18536 = c__12265__auto___18534;
var G__18537 = cljs.core.count.call(null,c__12265__auto___18534);
var G__18538 = (0);
seq__18503_18523 = G__18535;
chunk__18504_18524 = G__18536;
count__18505_18525 = G__18537;
i__18506_18526 = G__18538;
continue;
}
} else
{var f_18539 = cljs.core.first.call(null,seq__18503_18533__$1);figwheel.client.reload_css_file.call(null,f_18539);
{
var G__18540 = cljs.core.next.call(null,seq__18503_18533__$1);
var G__18541 = null;
var G__18542 = (0);
var G__18543 = (0);
seq__18503_18523 = G__18540;
chunk__18504_18524 = G__18541;
count__18505_18525 = G__18542;
i__18506_18526 = G__18543;
continue;
}
}
} else
{}
}
break;
}
var c__14001__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14001__auto__,map__18502,map__18502__$1,opts,on_cssload){
return (function (){var f__14002__auto__ = (function (){var switch__13945__auto__ = ((function (c__14001__auto__,map__18502,map__18502__$1,opts,on_cssload){
return (function (state_18513){var state_val_18514 = (state_18513[(1)]);if((state_val_18514 === (2)))
{var inst_18509 = (state_18513[(2)]);var inst_18510 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_18511 = on_cssload.call(null,inst_18510);var state_18513__$1 = (function (){var statearr_18515 = state_18513;(statearr_18515[(7)] = inst_18509);
return statearr_18515;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18513__$1,inst_18511);
} else
{if((state_val_18514 === (1)))
{var inst_18507 = cljs.core.async.timeout.call(null,(100));var state_18513__$1 = state_18513;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18513__$1,(2),inst_18507);
} else
{return null;
}
}
});})(c__14001__auto__,map__18502,map__18502__$1,opts,on_cssload))
;return ((function (switch__13945__auto__,c__14001__auto__,map__18502,map__18502__$1,opts,on_cssload){
return (function() {
var state_machine__13946__auto__ = null;
var state_machine__13946__auto____0 = (function (){var statearr_18519 = [null,null,null,null,null,null,null,null];(statearr_18519[(0)] = state_machine__13946__auto__);
(statearr_18519[(1)] = (1));
return statearr_18519;
});
var state_machine__13946__auto____1 = (function (state_18513){while(true){
var ret_value__13947__auto__ = (function (){try{while(true){
var result__13948__auto__ = switch__13945__auto__.call(null,state_18513);if(cljs.core.keyword_identical_QMARK_.call(null,result__13948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13948__auto__;
}
break;
}
}catch (e18520){if((e18520 instanceof Object))
{var ex__13949__auto__ = e18520;var statearr_18521_18544 = state_18513;(statearr_18521_18544[(5)] = ex__13949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18513);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18520;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18545 = state_18513;
state_18513 = G__18545;
continue;
}
} else
{return ret_value__13947__auto__;
}
break;
}
});
state_machine__13946__auto__ = function(state_18513){
switch(arguments.length){
case 0:
return state_machine__13946__auto____0.call(this);
case 1:
return state_machine__13946__auto____1.call(this,state_18513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13946__auto____0;
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13946__auto____1;
return state_machine__13946__auto__;
})()
;})(switch__13945__auto__,c__14001__auto__,map__18502,map__18502__$1,opts,on_cssload))
})();var state__14003__auto__ = (function (){var statearr_18522 = f__14002__auto__.call(null);(statearr_18522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14001__auto__);
return statearr_18522;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14003__auto__);
});})(c__14001__auto__,map__18502,map__18502__$1,opts,on_cssload))
);
return c__14001__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__18546){var map__18551 = p__18546;var map__18551__$1 = ((cljs.core.seq_QMARK_.call(null,map__18551))?cljs.core.apply.call(null,cljs.core.hash_map,map__18551):map__18551);var opts = map__18551__$1;var on_compile_fail = cljs.core.get.call(null,map__18551__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__18551__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__18551__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__18551__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__18551,map__18551__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__18552 = cljs.core._EQ_;var expr__18553 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__18552.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__18553)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__18552.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__18553)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__18552.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__18553)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__18551,map__18551__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__18551,map__18551__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__18551,map__18551__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__18551,map__18551__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__18551,map__18551__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__18551,map__18551__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__18551,map__18551__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__18551,map__18551__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__18551,map__18551__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj18558 = {"detail":url};return obj18558;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__18559){var map__18561 = p__18559;var map__18561__$1 = ((cljs.core.seq_QMARK_.call(null,map__18561))?cljs.core.apply.call(null,cljs.core.hash_map,map__18561):map__18561);var class$ = cljs.core.get.call(null,map__18561__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__18561__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__18562){var map__18568 = p__18562;var map__18568__$1 = ((cljs.core.seq_QMARK_.call(null,map__18568))?cljs.core.apply.call(null,cljs.core.hash_map,map__18568):map__18568);var ed = map__18568__$1;var exception_data = cljs.core.get.call(null,map__18568__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__18568__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__18569_18573 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__18570_18574 = null;var count__18571_18575 = (0);var i__18572_18576 = (0);while(true){
if((i__18572_18576 < count__18571_18575))
{var msg_18577 = cljs.core._nth.call(null,chunk__18570_18574,i__18572_18576);console.log(msg_18577);
{
var G__18578 = seq__18569_18573;
var G__18579 = chunk__18570_18574;
var G__18580 = count__18571_18575;
var G__18581 = (i__18572_18576 + (1));
seq__18569_18573 = G__18578;
chunk__18570_18574 = G__18579;
count__18571_18575 = G__18580;
i__18572_18576 = G__18581;
continue;
}
} else
{var temp__4126__auto___18582 = cljs.core.seq.call(null,seq__18569_18573);if(temp__4126__auto___18582)
{var seq__18569_18583__$1 = temp__4126__auto___18582;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18569_18583__$1))
{var c__12265__auto___18584 = cljs.core.chunk_first.call(null,seq__18569_18583__$1);{
var G__18585 = cljs.core.chunk_rest.call(null,seq__18569_18583__$1);
var G__18586 = c__12265__auto___18584;
var G__18587 = cljs.core.count.call(null,c__12265__auto___18584);
var G__18588 = (0);
seq__18569_18573 = G__18585;
chunk__18570_18574 = G__18586;
count__18571_18575 = G__18587;
i__18572_18576 = G__18588;
continue;
}
} else
{var msg_18589 = cljs.core.first.call(null,seq__18569_18583__$1);console.log(msg_18589);
{
var G__18590 = cljs.core.next.call(null,seq__18569_18583__$1);
var G__18591 = null;
var G__18592 = (0);
var G__18593 = (0);
seq__18569_18573 = G__18590;
chunk__18570_18574 = G__18591;
count__18571_18575 = G__18592;
i__18572_18576 = G__18593;
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
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__11495__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__18594){var map__18596 = p__18594;var map__18596__$1 = ((cljs.core.seq_QMARK_.call(null,map__18596))?cljs.core.apply.call(null,cljs.core.hash_map,map__18596):map__18596);var opts = map__18596__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__18594 = null;if (arguments.length > 0) {
  p__18594 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__18594);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__18597){
var p__18594 = cljs.core.seq(arglist__18597);
return watch_and_reload__delegate(p__18594);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map
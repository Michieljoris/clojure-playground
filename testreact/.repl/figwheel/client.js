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
var log__delegate = function (p__13366,args){var map__13368 = p__13366;var map__13368__$1 = ((cljs.core.seq_QMARK_.call(null,map__13368))?cljs.core.apply.call(null,cljs.core.hash_map,map__13368):map__13368);var debug = cljs.core.get.call(null,map__13368__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__13366,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__13366,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__13369){
var p__13366 = cljs.core.first(arglist__13369);
var args = cljs.core.rest(arglist__13369);
return log__delegate(p__13366,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__13370){var map__13372 = p__13370;var map__13372__$1 = ((cljs.core.seq_QMARK_.call(null,map__13372))?cljs.core.apply.call(null,cljs.core.hash_map,map__13372):map__13372);var websocket_url = cljs.core.get.call(null,map__13372__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__13373,callback){var map__13375 = p__13373;var map__13375__$1 = ((cljs.core.seq_QMARK_.call(null,map__13375))?cljs.core.apply.call(null,cljs.core.hash_map,map__13375):map__13375);var msg = map__13375__$1;var dependency_file = cljs.core.get.call(null,map__13375__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__13375__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__13375__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__7446__auto__ = dependency_file;if(cljs.core.truth_(or__7446__auto__))
{return or__7446__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__13375,map__13375__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__13375,map__13375__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__13376,p__13377){var map__13380 = p__13376;var map__13380__$1 = ((cljs.core.seq_QMARK_.call(null,map__13380))?cljs.core.apply.call(null,cljs.core.hash_map,map__13380):map__13380);var opts = map__13380__$1;var url_rewriter = cljs.core.get.call(null,map__13380__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__13381 = p__13377;var map__13381__$1 = ((cljs.core.seq_QMARK_.call(null,map__13381))?cljs.core.apply.call(null,cljs.core.hash_map,map__13381):map__13381);var d = map__13381__$1;var file = cljs.core.get.call(null,map__13381__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__13382,p__13383){var map__13425 = p__13382;var map__13425__$1 = ((cljs.core.seq_QMARK_.call(null,map__13425))?cljs.core.apply.call(null,cljs.core.hash_map,map__13425):map__13425);var opts = map__13425__$1;var on_jsload = cljs.core.get.call(null,map__13425__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__13425__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__13426 = p__13383;var map__13426__$1 = ((cljs.core.seq_QMARK_.call(null,map__13426))?cljs.core.apply.call(null,cljs.core.hash_map,map__13426):map__13426);var files = cljs.core.get.call(null,map__13426__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__10383__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10383__auto__,map__13425,map__13425__$1,opts,on_jsload,before_jsload,map__13426,map__13426__$1,files){
return (function (){var f__10384__auto__ = (function (){var switch__10327__auto__ = ((function (c__10383__auto__,map__13425,map__13425__$1,opts,on_jsload,before_jsload,map__13426,map__13426__$1,files){
return (function (state_13449){var state_val_13450 = (state_13449[(1)]);if((state_val_13450 === (6)))
{var inst_13431 = (state_13449[(7)]);var inst_13440 = (state_13449[(2)]);var inst_13441 = cljs.core.PersistentVector.EMPTY_NODE;var inst_13442 = [inst_13431];var inst_13443 = (new cljs.core.PersistentVector(null,1,(5),inst_13441,inst_13442,null));var inst_13444 = cljs.core.apply.call(null,on_jsload,inst_13443);var state_13449__$1 = (function (){var statearr_13451 = state_13449;(statearr_13451[(8)] = inst_13440);
return statearr_13451;
})();var statearr_13452_13466 = state_13449__$1;(statearr_13452_13466[(2)] = inst_13444);
(statearr_13452_13466[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13450 === (5)))
{var inst_13447 = (state_13449[(2)]);var state_13449__$1 = state_13449;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13449__$1,inst_13447);
} else
{if((state_val_13450 === (4)))
{var state_13449__$1 = state_13449;var statearr_13453_13467 = state_13449__$1;(statearr_13453_13467[(2)] = null);
(statearr_13453_13467[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13450 === (3)))
{var inst_13431 = (state_13449[(7)]);var inst_13434 = console.debug("Figwheel: loaded these files");var inst_13435 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_13431);var inst_13436 = cljs.core.prn_str.call(null,inst_13435);var inst_13437 = console.log(inst_13436);var inst_13438 = cljs.core.async.timeout.call(null,(10));var state_13449__$1 = (function (){var statearr_13454 = state_13449;(statearr_13454[(9)] = inst_13434);
(statearr_13454[(10)] = inst_13437);
return statearr_13454;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13449__$1,(6),inst_13438);
} else
{if((state_val_13450 === (2)))
{var inst_13431 = (state_13449[(7)]);var inst_13431__$1 = (state_13449[(2)]);var inst_13432 = cljs.core.not_empty.call(null,inst_13431__$1);var state_13449__$1 = (function (){var statearr_13455 = state_13449;(statearr_13455[(7)] = inst_13431__$1);
return statearr_13455;
})();if(cljs.core.truth_(inst_13432))
{var statearr_13456_13468 = state_13449__$1;(statearr_13456_13468[(1)] = (3));
} else
{var statearr_13457_13469 = state_13449__$1;(statearr_13457_13469[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13450 === (1)))
{var inst_13427 = before_jsload.call(null,files);var inst_13428 = figwheel.client.add_request_urls.call(null,opts,files);var inst_13429 = figwheel.client.load_all_js_files.call(null,inst_13428);var state_13449__$1 = (function (){var statearr_13458 = state_13449;(statearr_13458[(11)] = inst_13427);
return statearr_13458;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13449__$1,(2),inst_13429);
} else
{return null;
}
}
}
}
}
}
});})(c__10383__auto__,map__13425,map__13425__$1,opts,on_jsload,before_jsload,map__13426,map__13426__$1,files))
;return ((function (switch__10327__auto__,c__10383__auto__,map__13425,map__13425__$1,opts,on_jsload,before_jsload,map__13426,map__13426__$1,files){
return (function() {
var state_machine__10328__auto__ = null;
var state_machine__10328__auto____0 = (function (){var statearr_13462 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13462[(0)] = state_machine__10328__auto__);
(statearr_13462[(1)] = (1));
return statearr_13462;
});
var state_machine__10328__auto____1 = (function (state_13449){while(true){
var ret_value__10329__auto__ = (function (){try{while(true){
var result__10330__auto__ = switch__10327__auto__.call(null,state_13449);if(cljs.core.keyword_identical_QMARK_.call(null,result__10330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10330__auto__;
}
break;
}
}catch (e13463){if((e13463 instanceof Object))
{var ex__10331__auto__ = e13463;var statearr_13464_13470 = state_13449;(statearr_13464_13470[(5)] = ex__10331__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13449);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13463;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13471 = state_13449;
state_13449 = G__13471;
continue;
}
} else
{return ret_value__10329__auto__;
}
break;
}
});
state_machine__10328__auto__ = function(state_13449){
switch(arguments.length){
case 0:
return state_machine__10328__auto____0.call(this);
case 1:
return state_machine__10328__auto____1.call(this,state_13449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10328__auto____0;
state_machine__10328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10328__auto____1;
return state_machine__10328__auto__;
})()
;})(switch__10327__auto__,c__10383__auto__,map__13425,map__13425__$1,opts,on_jsload,before_jsload,map__13426,map__13426__$1,files))
})();var state__10385__auto__ = (function (){var statearr_13465 = f__10384__auto__.call(null);(statearr_13465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10383__auto__);
return statearr_13465;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10385__auto__);
});})(c__10383__auto__,map__13425,map__13425__$1,opts,on_jsload,before_jsload,map__13426,map__13426__$1,files))
);
return c__10383__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__13472,link_href){var map__13474 = p__13472;var map__13474__$1 = ((cljs.core.seq_QMARK_.call(null,map__13474))?cljs.core.apply.call(null,cljs.core.hash_map,map__13474):map__13474);var request_url = cljs.core.get.call(null,map__13474__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__13474__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
var c__10383__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10383__auto__,parent){
return (function (){var f__10384__auto__ = (function (){var switch__10327__auto__ = ((function (c__10383__auto__,parent){
return (function (state_13495){var state_val_13496 = (state_13495[(1)]);if((state_val_13496 === (2)))
{var inst_13492 = (state_13495[(2)]);var inst_13493 = parent.removeChild(orig_link);var state_13495__$1 = (function (){var statearr_13497 = state_13495;(statearr_13497[(7)] = inst_13492);
return statearr_13497;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13495__$1,inst_13493);
} else
{if((state_val_13496 === (1)))
{var inst_13490 = cljs.core.async.timeout.call(null,(200));var state_13495__$1 = state_13495;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13495__$1,(2),inst_13490);
} else
{return null;
}
}
});})(c__10383__auto__,parent))
;return ((function (switch__10327__auto__,c__10383__auto__,parent){
return (function() {
var state_machine__10328__auto__ = null;
var state_machine__10328__auto____0 = (function (){var statearr_13501 = [null,null,null,null,null,null,null,null];(statearr_13501[(0)] = state_machine__10328__auto__);
(statearr_13501[(1)] = (1));
return statearr_13501;
});
var state_machine__10328__auto____1 = (function (state_13495){while(true){
var ret_value__10329__auto__ = (function (){try{while(true){
var result__10330__auto__ = switch__10327__auto__.call(null,state_13495);if(cljs.core.keyword_identical_QMARK_.call(null,result__10330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10330__auto__;
}
break;
}
}catch (e13502){if((e13502 instanceof Object))
{var ex__10331__auto__ = e13502;var statearr_13503_13505 = state_13495;(statearr_13503_13505[(5)] = ex__10331__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13495);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13502;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13506 = state_13495;
state_13495 = G__13506;
continue;
}
} else
{return ret_value__10329__auto__;
}
break;
}
});
state_machine__10328__auto__ = function(state_13495){
switch(arguments.length){
case 0:
return state_machine__10328__auto____0.call(this);
case 1:
return state_machine__10328__auto____1.call(this,state_13495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10328__auto____0;
state_machine__10328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10328__auto____1;
return state_machine__10328__auto__;
})()
;})(switch__10327__auto__,c__10383__auto__,parent))
})();var state__10385__auto__ = (function (){var statearr_13504 = f__10384__auto__.call(null);(statearr_13504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10383__auto__);
return statearr_13504;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10385__auto__);
});})(c__10383__auto__,parent))
);
return c__10383__auto__;
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
figwheel.client.reload_css_file = (function reload_css_file(p__13507){var map__13509 = p__13507;var map__13509__$1 = ((cljs.core.seq_QMARK_.call(null,map__13509))?cljs.core.apply.call(null,cljs.core.hash_map,map__13509):map__13509);var f_data = map__13509__$1;var request_url = cljs.core.get.call(null,map__13509__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__13509__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__13510,files_msg){var map__13532 = p__13510;var map__13532__$1 = ((cljs.core.seq_QMARK_.call(null,map__13532))?cljs.core.apply.call(null,cljs.core.hash_map,map__13532):map__13532);var opts = map__13532__$1;var on_cssload = cljs.core.get.call(null,map__13532__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__13533_13553 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__13534_13554 = null;var count__13535_13555 = (0);var i__13536_13556 = (0);while(true){
if((i__13536_13556 < count__13535_13555))
{var f_13557 = cljs.core._nth.call(null,chunk__13534_13554,i__13536_13556);figwheel.client.reload_css_file.call(null,f_13557);
{
var G__13558 = seq__13533_13553;
var G__13559 = chunk__13534_13554;
var G__13560 = count__13535_13555;
var G__13561 = (i__13536_13556 + (1));
seq__13533_13553 = G__13558;
chunk__13534_13554 = G__13559;
count__13535_13555 = G__13560;
i__13536_13556 = G__13561;
continue;
}
} else
{var temp__4126__auto___13562 = cljs.core.seq.call(null,seq__13533_13553);if(temp__4126__auto___13562)
{var seq__13533_13563__$1 = temp__4126__auto___13562;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13533_13563__$1))
{var c__8216__auto___13564 = cljs.core.chunk_first.call(null,seq__13533_13563__$1);{
var G__13565 = cljs.core.chunk_rest.call(null,seq__13533_13563__$1);
var G__13566 = c__8216__auto___13564;
var G__13567 = cljs.core.count.call(null,c__8216__auto___13564);
var G__13568 = (0);
seq__13533_13553 = G__13565;
chunk__13534_13554 = G__13566;
count__13535_13555 = G__13567;
i__13536_13556 = G__13568;
continue;
}
} else
{var f_13569 = cljs.core.first.call(null,seq__13533_13563__$1);figwheel.client.reload_css_file.call(null,f_13569);
{
var G__13570 = cljs.core.next.call(null,seq__13533_13563__$1);
var G__13571 = null;
var G__13572 = (0);
var G__13573 = (0);
seq__13533_13553 = G__13570;
chunk__13534_13554 = G__13571;
count__13535_13555 = G__13572;
i__13536_13556 = G__13573;
continue;
}
}
} else
{}
}
break;
}
var c__10383__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10383__auto__,map__13532,map__13532__$1,opts,on_cssload){
return (function (){var f__10384__auto__ = (function (){var switch__10327__auto__ = ((function (c__10383__auto__,map__13532,map__13532__$1,opts,on_cssload){
return (function (state_13543){var state_val_13544 = (state_13543[(1)]);if((state_val_13544 === (2)))
{var inst_13539 = (state_13543[(2)]);var inst_13540 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_13541 = on_cssload.call(null,inst_13540);var state_13543__$1 = (function (){var statearr_13545 = state_13543;(statearr_13545[(7)] = inst_13539);
return statearr_13545;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13543__$1,inst_13541);
} else
{if((state_val_13544 === (1)))
{var inst_13537 = cljs.core.async.timeout.call(null,(100));var state_13543__$1 = state_13543;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13543__$1,(2),inst_13537);
} else
{return null;
}
}
});})(c__10383__auto__,map__13532,map__13532__$1,opts,on_cssload))
;return ((function (switch__10327__auto__,c__10383__auto__,map__13532,map__13532__$1,opts,on_cssload){
return (function() {
var state_machine__10328__auto__ = null;
var state_machine__10328__auto____0 = (function (){var statearr_13549 = [null,null,null,null,null,null,null,null];(statearr_13549[(0)] = state_machine__10328__auto__);
(statearr_13549[(1)] = (1));
return statearr_13549;
});
var state_machine__10328__auto____1 = (function (state_13543){while(true){
var ret_value__10329__auto__ = (function (){try{while(true){
var result__10330__auto__ = switch__10327__auto__.call(null,state_13543);if(cljs.core.keyword_identical_QMARK_.call(null,result__10330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10330__auto__;
}
break;
}
}catch (e13550){if((e13550 instanceof Object))
{var ex__10331__auto__ = e13550;var statearr_13551_13574 = state_13543;(statearr_13551_13574[(5)] = ex__10331__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13543);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13550;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13575 = state_13543;
state_13543 = G__13575;
continue;
}
} else
{return ret_value__10329__auto__;
}
break;
}
});
state_machine__10328__auto__ = function(state_13543){
switch(arguments.length){
case 0:
return state_machine__10328__auto____0.call(this);
case 1:
return state_machine__10328__auto____1.call(this,state_13543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10328__auto____0;
state_machine__10328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10328__auto____1;
return state_machine__10328__auto__;
})()
;})(switch__10327__auto__,c__10383__auto__,map__13532,map__13532__$1,opts,on_cssload))
})();var state__10385__auto__ = (function (){var statearr_13552 = f__10384__auto__.call(null);(statearr_13552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10383__auto__);
return statearr_13552;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10385__auto__);
});})(c__10383__auto__,map__13532,map__13532__$1,opts,on_cssload))
);
return c__10383__auto__;
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__13576){var map__13581 = p__13576;var map__13581__$1 = ((cljs.core.seq_QMARK_.call(null,map__13581))?cljs.core.apply.call(null,cljs.core.hash_map,map__13581):map__13581);var opts = map__13581__$1;var on_compile_fail = cljs.core.get.call(null,map__13581__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__13581__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__13581__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__13581__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__13581,map__13581__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__13582 = cljs.core._EQ_;var expr__13583 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__13582.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__13583)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__13582.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__13583)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__13582.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__13583)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__13581,map__13581__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__13581,map__13581__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__13581,map__13581__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__13581,map__13581__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__13581,map__13581__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__13581,map__13581__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__13581,map__13581__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__13581,map__13581__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__13581,map__13581__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj13588 = {"detail":url};return obj13588;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__13589){var map__13591 = p__13589;var map__13591__$1 = ((cljs.core.seq_QMARK_.call(null,map__13591))?cljs.core.apply.call(null,cljs.core.hash_map,map__13591):map__13591);var class$ = cljs.core.get.call(null,map__13591__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__13591__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__13592){var map__13598 = p__13592;var map__13598__$1 = ((cljs.core.seq_QMARK_.call(null,map__13598))?cljs.core.apply.call(null,cljs.core.hash_map,map__13598):map__13598);var ed = map__13598__$1;var exception_data = cljs.core.get.call(null,map__13598__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__13598__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__13599_13603 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__13600_13604 = null;var count__13601_13605 = (0);var i__13602_13606 = (0);while(true){
if((i__13602_13606 < count__13601_13605))
{var msg_13607 = cljs.core._nth.call(null,chunk__13600_13604,i__13602_13606);console.log(msg_13607);
{
var G__13608 = seq__13599_13603;
var G__13609 = chunk__13600_13604;
var G__13610 = count__13601_13605;
var G__13611 = (i__13602_13606 + (1));
seq__13599_13603 = G__13608;
chunk__13600_13604 = G__13609;
count__13601_13605 = G__13610;
i__13602_13606 = G__13611;
continue;
}
} else
{var temp__4126__auto___13612 = cljs.core.seq.call(null,seq__13599_13603);if(temp__4126__auto___13612)
{var seq__13599_13613__$1 = temp__4126__auto___13612;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13599_13613__$1))
{var c__8216__auto___13614 = cljs.core.chunk_first.call(null,seq__13599_13613__$1);{
var G__13615 = cljs.core.chunk_rest.call(null,seq__13599_13613__$1);
var G__13616 = c__8216__auto___13614;
var G__13617 = cljs.core.count.call(null,c__8216__auto___13614);
var G__13618 = (0);
seq__13599_13603 = G__13615;
chunk__13600_13604 = G__13616;
count__13601_13605 = G__13617;
i__13602_13606 = G__13618;
continue;
}
} else
{var msg_13619 = cljs.core.first.call(null,seq__13599_13613__$1);console.log(msg_13619);
{
var G__13620 = cljs.core.next.call(null,seq__13599_13613__$1);
var G__13621 = null;
var G__13622 = (0);
var G__13623 = (0);
seq__13599_13603 = G__13620;
chunk__13600_13604 = G__13621;
count__13601_13605 = G__13622;
i__13602_13606 = G__13623;
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
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__7446__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__7446__auto__))
{return or__7446__auto__;
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
var watch_and_reload__delegate = function (p__13624){var map__13626 = p__13624;var map__13626__$1 = ((cljs.core.seq_QMARK_.call(null,map__13626))?cljs.core.apply.call(null,cljs.core.hash_map,map__13626):map__13626);var opts = map__13626__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__13624 = null;if (arguments.length > 0) {
  p__13624 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__13624);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__13627){
var p__13624 = cljs.core.seq(arglist__13627);
return watch_and_reload__delegate(p__13624);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

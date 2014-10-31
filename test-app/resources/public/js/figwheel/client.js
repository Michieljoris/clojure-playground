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
var log__delegate = function (p__10598,args){var map__10600 = p__10598;var map__10600__$1 = ((cljs.core.seq_QMARK_.call(null,map__10600))?cljs.core.apply.call(null,cljs.core.hash_map,map__10600):map__10600);var debug = cljs.core.get.call(null,map__10600__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__10598,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__10598,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__10601){
var p__10598 = cljs.core.first(arglist__10601);
var args = cljs.core.rest(arglist__10601);
return log__delegate(p__10598,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__10602){var map__10604 = p__10602;var map__10604__$1 = ((cljs.core.seq_QMARK_.call(null,map__10604))?cljs.core.apply.call(null,cljs.core.hash_map,map__10604):map__10604);var websocket_url = cljs.core.get.call(null,map__10604__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__10605,callback){var map__10607 = p__10605;var map__10607__$1 = ((cljs.core.seq_QMARK_.call(null,map__10607))?cljs.core.apply.call(null,cljs.core.hash_map,map__10607):map__10607);var msg = map__10607__$1;var dependency_file = cljs.core.get.call(null,map__10607__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__10607__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__10607__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3640__auto__ = dependency_file;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__10607,map__10607__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__10607,map__10607__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__10608,p__10609){var map__10612 = p__10608;var map__10612__$1 = ((cljs.core.seq_QMARK_.call(null,map__10612))?cljs.core.apply.call(null,cljs.core.hash_map,map__10612):map__10612);var opts = map__10612__$1;var url_rewriter = cljs.core.get.call(null,map__10612__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__10613 = p__10609;var map__10613__$1 = ((cljs.core.seq_QMARK_.call(null,map__10613))?cljs.core.apply.call(null,cljs.core.hash_map,map__10613):map__10613);var d = map__10613__$1;var file = cljs.core.get.call(null,map__10613__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__10614,p__10615){var map__10657 = p__10614;var map__10657__$1 = ((cljs.core.seq_QMARK_.call(null,map__10657))?cljs.core.apply.call(null,cljs.core.hash_map,map__10657):map__10657);var opts = map__10657__$1;var on_jsload = cljs.core.get.call(null,map__10657__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__10657__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__10658 = p__10615;var map__10658__$1 = ((cljs.core.seq_QMARK_.call(null,map__10658))?cljs.core.apply.call(null,cljs.core.hash_map,map__10658):map__10658);var files = cljs.core.get.call(null,map__10658__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__6379__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6379__auto__,map__10657,map__10657__$1,opts,on_jsload,before_jsload,map__10658,map__10658__$1,files){
return (function (){var f__6380__auto__ = (function (){var switch__6323__auto__ = ((function (c__6379__auto__,map__10657,map__10657__$1,opts,on_jsload,before_jsload,map__10658,map__10658__$1,files){
return (function (state_10681){var state_val_10682 = (state_10681[(1)]);if((state_val_10682 === (6)))
{var inst_10663 = (state_10681[(7)]);var inst_10672 = (state_10681[(2)]);var inst_10673 = cljs.core.PersistentVector.EMPTY_NODE;var inst_10674 = [inst_10663];var inst_10675 = (new cljs.core.PersistentVector(null,1,(5),inst_10673,inst_10674,null));var inst_10676 = cljs.core.apply.call(null,on_jsload,inst_10675);var state_10681__$1 = (function (){var statearr_10683 = state_10681;(statearr_10683[(8)] = inst_10672);
return statearr_10683;
})();var statearr_10684_10698 = state_10681__$1;(statearr_10684_10698[(2)] = inst_10676);
(statearr_10684_10698[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10682 === (5)))
{var inst_10679 = (state_10681[(2)]);var state_10681__$1 = state_10681;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10681__$1,inst_10679);
} else
{if((state_val_10682 === (4)))
{var state_10681__$1 = state_10681;var statearr_10685_10699 = state_10681__$1;(statearr_10685_10699[(2)] = null);
(statearr_10685_10699[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10682 === (3)))
{var inst_10663 = (state_10681[(7)]);var inst_10666 = console.debug("Figwheel: loaded these files");var inst_10667 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_10663);var inst_10668 = cljs.core.prn_str.call(null,inst_10667);var inst_10669 = console.log(inst_10668);var inst_10670 = cljs.core.async.timeout.call(null,(10));var state_10681__$1 = (function (){var statearr_10686 = state_10681;(statearr_10686[(9)] = inst_10666);
(statearr_10686[(10)] = inst_10669);
return statearr_10686;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10681__$1,(6),inst_10670);
} else
{if((state_val_10682 === (2)))
{var inst_10663 = (state_10681[(7)]);var inst_10663__$1 = (state_10681[(2)]);var inst_10664 = cljs.core.not_empty.call(null,inst_10663__$1);var state_10681__$1 = (function (){var statearr_10687 = state_10681;(statearr_10687[(7)] = inst_10663__$1);
return statearr_10687;
})();if(cljs.core.truth_(inst_10664))
{var statearr_10688_10700 = state_10681__$1;(statearr_10688_10700[(1)] = (3));
} else
{var statearr_10689_10701 = state_10681__$1;(statearr_10689_10701[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10682 === (1)))
{var inst_10659 = before_jsload.call(null,files);var inst_10660 = figwheel.client.add_request_urls.call(null,opts,files);var inst_10661 = figwheel.client.load_all_js_files.call(null,inst_10660);var state_10681__$1 = (function (){var statearr_10690 = state_10681;(statearr_10690[(11)] = inst_10659);
return statearr_10690;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10681__$1,(2),inst_10661);
} else
{return null;
}
}
}
}
}
}
});})(c__6379__auto__,map__10657,map__10657__$1,opts,on_jsload,before_jsload,map__10658,map__10658__$1,files))
;return ((function (switch__6323__auto__,c__6379__auto__,map__10657,map__10657__$1,opts,on_jsload,before_jsload,map__10658,map__10658__$1,files){
return (function() {
var state_machine__6324__auto__ = null;
var state_machine__6324__auto____0 = (function (){var statearr_10694 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10694[(0)] = state_machine__6324__auto__);
(statearr_10694[(1)] = (1));
return statearr_10694;
});
var state_machine__6324__auto____1 = (function (state_10681){while(true){
var ret_value__6325__auto__ = (function (){try{while(true){
var result__6326__auto__ = switch__6323__auto__.call(null,state_10681);if(cljs.core.keyword_identical_QMARK_.call(null,result__6326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6326__auto__;
}
break;
}
}catch (e10695){if((e10695 instanceof Object))
{var ex__6327__auto__ = e10695;var statearr_10696_10702 = state_10681;(statearr_10696_10702[(5)] = ex__6327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10681);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10695;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10703 = state_10681;
state_10681 = G__10703;
continue;
}
} else
{return ret_value__6325__auto__;
}
break;
}
});
state_machine__6324__auto__ = function(state_10681){
switch(arguments.length){
case 0:
return state_machine__6324__auto____0.call(this);
case 1:
return state_machine__6324__auto____1.call(this,state_10681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6324__auto____0;
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6324__auto____1;
return state_machine__6324__auto__;
})()
;})(switch__6323__auto__,c__6379__auto__,map__10657,map__10657__$1,opts,on_jsload,before_jsload,map__10658,map__10658__$1,files))
})();var state__6381__auto__ = (function (){var statearr_10697 = f__6380__auto__.call(null);(statearr_10697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6379__auto__);
return statearr_10697;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6381__auto__);
});})(c__6379__auto__,map__10657,map__10657__$1,opts,on_jsload,before_jsload,map__10658,map__10658__$1,files))
);
return c__6379__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__10704,link_href){var map__10706 = p__10704;var map__10706__$1 = ((cljs.core.seq_QMARK_.call(null,map__10706))?cljs.core.apply.call(null,cljs.core.hash_map,map__10706):map__10706);var request_url = cljs.core.get.call(null,map__10706__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__10706__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
var c__6379__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6379__auto__,parent){
return (function (){var f__6380__auto__ = (function (){var switch__6323__auto__ = ((function (c__6379__auto__,parent){
return (function (state_10727){var state_val_10728 = (state_10727[(1)]);if((state_val_10728 === (2)))
{var inst_10724 = (state_10727[(2)]);var inst_10725 = parent.removeChild(orig_link);var state_10727__$1 = (function (){var statearr_10729 = state_10727;(statearr_10729[(7)] = inst_10724);
return statearr_10729;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10727__$1,inst_10725);
} else
{if((state_val_10728 === (1)))
{var inst_10722 = cljs.core.async.timeout.call(null,(200));var state_10727__$1 = state_10727;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10727__$1,(2),inst_10722);
} else
{return null;
}
}
});})(c__6379__auto__,parent))
;return ((function (switch__6323__auto__,c__6379__auto__,parent){
return (function() {
var state_machine__6324__auto__ = null;
var state_machine__6324__auto____0 = (function (){var statearr_10733 = [null,null,null,null,null,null,null,null];(statearr_10733[(0)] = state_machine__6324__auto__);
(statearr_10733[(1)] = (1));
return statearr_10733;
});
var state_machine__6324__auto____1 = (function (state_10727){while(true){
var ret_value__6325__auto__ = (function (){try{while(true){
var result__6326__auto__ = switch__6323__auto__.call(null,state_10727);if(cljs.core.keyword_identical_QMARK_.call(null,result__6326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6326__auto__;
}
break;
}
}catch (e10734){if((e10734 instanceof Object))
{var ex__6327__auto__ = e10734;var statearr_10735_10737 = state_10727;(statearr_10735_10737[(5)] = ex__6327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10727);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10734;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10738 = state_10727;
state_10727 = G__10738;
continue;
}
} else
{return ret_value__6325__auto__;
}
break;
}
});
state_machine__6324__auto__ = function(state_10727){
switch(arguments.length){
case 0:
return state_machine__6324__auto____0.call(this);
case 1:
return state_machine__6324__auto____1.call(this,state_10727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6324__auto____0;
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6324__auto____1;
return state_machine__6324__auto__;
})()
;})(switch__6323__auto__,c__6379__auto__,parent))
})();var state__6381__auto__ = (function (){var statearr_10736 = f__6380__auto__.call(null);(statearr_10736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6379__auto__);
return statearr_10736;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6381__auto__);
});})(c__6379__auto__,parent))
);
return c__6379__auto__;
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
figwheel.client.reload_css_file = (function reload_css_file(p__10739){var map__10741 = p__10739;var map__10741__$1 = ((cljs.core.seq_QMARK_.call(null,map__10741))?cljs.core.apply.call(null,cljs.core.hash_map,map__10741):map__10741);var f_data = map__10741__$1;var request_url = cljs.core.get.call(null,map__10741__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__10741__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__10742,files_msg){var map__10764 = p__10742;var map__10764__$1 = ((cljs.core.seq_QMARK_.call(null,map__10764))?cljs.core.apply.call(null,cljs.core.hash_map,map__10764):map__10764);var opts = map__10764__$1;var on_cssload = cljs.core.get.call(null,map__10764__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__10765_10785 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__10766_10786 = null;var count__10767_10787 = (0);var i__10768_10788 = (0);while(true){
if((i__10768_10788 < count__10767_10787))
{var f_10789 = cljs.core._nth.call(null,chunk__10766_10786,i__10768_10788);figwheel.client.reload_css_file.call(null,f_10789);
{
var G__10790 = seq__10765_10785;
var G__10791 = chunk__10766_10786;
var G__10792 = count__10767_10787;
var G__10793 = (i__10768_10788 + (1));
seq__10765_10785 = G__10790;
chunk__10766_10786 = G__10791;
count__10767_10787 = G__10792;
i__10768_10788 = G__10793;
continue;
}
} else
{var temp__4126__auto___10794 = cljs.core.seq.call(null,seq__10765_10785);if(temp__4126__auto___10794)
{var seq__10765_10795__$1 = temp__4126__auto___10794;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10765_10795__$1))
{var c__4410__auto___10796 = cljs.core.chunk_first.call(null,seq__10765_10795__$1);{
var G__10797 = cljs.core.chunk_rest.call(null,seq__10765_10795__$1);
var G__10798 = c__4410__auto___10796;
var G__10799 = cljs.core.count.call(null,c__4410__auto___10796);
var G__10800 = (0);
seq__10765_10785 = G__10797;
chunk__10766_10786 = G__10798;
count__10767_10787 = G__10799;
i__10768_10788 = G__10800;
continue;
}
} else
{var f_10801 = cljs.core.first.call(null,seq__10765_10795__$1);figwheel.client.reload_css_file.call(null,f_10801);
{
var G__10802 = cljs.core.next.call(null,seq__10765_10795__$1);
var G__10803 = null;
var G__10804 = (0);
var G__10805 = (0);
seq__10765_10785 = G__10802;
chunk__10766_10786 = G__10803;
count__10767_10787 = G__10804;
i__10768_10788 = G__10805;
continue;
}
}
} else
{}
}
break;
}
var c__6379__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6379__auto__,map__10764,map__10764__$1,opts,on_cssload){
return (function (){var f__6380__auto__ = (function (){var switch__6323__auto__ = ((function (c__6379__auto__,map__10764,map__10764__$1,opts,on_cssload){
return (function (state_10775){var state_val_10776 = (state_10775[(1)]);if((state_val_10776 === (2)))
{var inst_10771 = (state_10775[(2)]);var inst_10772 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_10773 = on_cssload.call(null,inst_10772);var state_10775__$1 = (function (){var statearr_10777 = state_10775;(statearr_10777[(7)] = inst_10771);
return statearr_10777;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10775__$1,inst_10773);
} else
{if((state_val_10776 === (1)))
{var inst_10769 = cljs.core.async.timeout.call(null,(100));var state_10775__$1 = state_10775;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10775__$1,(2),inst_10769);
} else
{return null;
}
}
});})(c__6379__auto__,map__10764,map__10764__$1,opts,on_cssload))
;return ((function (switch__6323__auto__,c__6379__auto__,map__10764,map__10764__$1,opts,on_cssload){
return (function() {
var state_machine__6324__auto__ = null;
var state_machine__6324__auto____0 = (function (){var statearr_10781 = [null,null,null,null,null,null,null,null];(statearr_10781[(0)] = state_machine__6324__auto__);
(statearr_10781[(1)] = (1));
return statearr_10781;
});
var state_machine__6324__auto____1 = (function (state_10775){while(true){
var ret_value__6325__auto__ = (function (){try{while(true){
var result__6326__auto__ = switch__6323__auto__.call(null,state_10775);if(cljs.core.keyword_identical_QMARK_.call(null,result__6326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6326__auto__;
}
break;
}
}catch (e10782){if((e10782 instanceof Object))
{var ex__6327__auto__ = e10782;var statearr_10783_10806 = state_10775;(statearr_10783_10806[(5)] = ex__6327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10775);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10782;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10807 = state_10775;
state_10775 = G__10807;
continue;
}
} else
{return ret_value__6325__auto__;
}
break;
}
});
state_machine__6324__auto__ = function(state_10775){
switch(arguments.length){
case 0:
return state_machine__6324__auto____0.call(this);
case 1:
return state_machine__6324__auto____1.call(this,state_10775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6324__auto____0;
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6324__auto____1;
return state_machine__6324__auto__;
})()
;})(switch__6323__auto__,c__6379__auto__,map__10764,map__10764__$1,opts,on_cssload))
})();var state__6381__auto__ = (function (){var statearr_10784 = f__6380__auto__.call(null);(statearr_10784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6379__auto__);
return statearr_10784;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6381__auto__);
});})(c__6379__auto__,map__10764,map__10764__$1,opts,on_cssload))
);
return c__6379__auto__;
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__10808){var map__10813 = p__10808;var map__10813__$1 = ((cljs.core.seq_QMARK_.call(null,map__10813))?cljs.core.apply.call(null,cljs.core.hash_map,map__10813):map__10813);var opts = map__10813__$1;var on_compile_fail = cljs.core.get.call(null,map__10813__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__10813__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__10813__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__10813__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__10813,map__10813__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__10814 = cljs.core._EQ_;var expr__10815 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__10814.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__10815)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__10814.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__10815)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__10814.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__10815)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__10813,map__10813__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__10813,map__10813__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__10813,map__10813__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__10813,map__10813__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__10813,map__10813__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__10813,map__10813__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__10813,map__10813__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__10813,map__10813__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__10813,map__10813__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj10820 = {"detail":url};return obj10820;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__10821){var map__10823 = p__10821;var map__10823__$1 = ((cljs.core.seq_QMARK_.call(null,map__10823))?cljs.core.apply.call(null,cljs.core.hash_map,map__10823):map__10823);var class$ = cljs.core.get.call(null,map__10823__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__10823__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__10824){var map__10830 = p__10824;var map__10830__$1 = ((cljs.core.seq_QMARK_.call(null,map__10830))?cljs.core.apply.call(null,cljs.core.hash_map,map__10830):map__10830);var ed = map__10830__$1;var exception_data = cljs.core.get.call(null,map__10830__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__10830__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__10831_10835 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__10832_10836 = null;var count__10833_10837 = (0);var i__10834_10838 = (0);while(true){
if((i__10834_10838 < count__10833_10837))
{var msg_10839 = cljs.core._nth.call(null,chunk__10832_10836,i__10834_10838);console.log(msg_10839);
{
var G__10840 = seq__10831_10835;
var G__10841 = chunk__10832_10836;
var G__10842 = count__10833_10837;
var G__10843 = (i__10834_10838 + (1));
seq__10831_10835 = G__10840;
chunk__10832_10836 = G__10841;
count__10833_10837 = G__10842;
i__10834_10838 = G__10843;
continue;
}
} else
{var temp__4126__auto___10844 = cljs.core.seq.call(null,seq__10831_10835);if(temp__4126__auto___10844)
{var seq__10831_10845__$1 = temp__4126__auto___10844;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10831_10845__$1))
{var c__4410__auto___10846 = cljs.core.chunk_first.call(null,seq__10831_10845__$1);{
var G__10847 = cljs.core.chunk_rest.call(null,seq__10831_10845__$1);
var G__10848 = c__4410__auto___10846;
var G__10849 = cljs.core.count.call(null,c__4410__auto___10846);
var G__10850 = (0);
seq__10831_10835 = G__10847;
chunk__10832_10836 = G__10848;
count__10833_10837 = G__10849;
i__10834_10838 = G__10850;
continue;
}
} else
{var msg_10851 = cljs.core.first.call(null,seq__10831_10845__$1);console.log(msg_10851);
{
var G__10852 = cljs.core.next.call(null,seq__10831_10845__$1);
var G__10853 = null;
var G__10854 = (0);
var G__10855 = (0);
seq__10831_10835 = G__10852;
chunk__10832_10836 = G__10853;
count__10833_10837 = G__10854;
i__10834_10838 = G__10855;
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
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__3640__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
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
var watch_and_reload__delegate = function (p__10856){var map__10858 = p__10856;var map__10858__$1 = ((cljs.core.seq_QMARK_.call(null,map__10858))?cljs.core.apply.call(null,cljs.core.hash_map,map__10858):map__10858);var opts = map__10858__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__10856 = null;if (arguments.length > 0) {
  p__10856 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__10856);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__10859){
var p__10856 = cljs.core.seq(arglist__10859);
return watch_and_reload__delegate(p__10856);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map
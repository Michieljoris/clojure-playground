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
var log__delegate = function (p__9805,args){var map__9807 = p__9805;var map__9807__$1 = ((cljs.core.seq_QMARK_.call(null,map__9807))?cljs.core.apply.call(null,cljs.core.hash_map,map__9807):map__9807);var debug = cljs.core.get.call(null,map__9807__$1,new cljs.core.Keyword(null,"debug","debug",1109363141));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__9805,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__9805,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__9808){
var p__9805 = cljs.core.first(arglist__9808);
var args = cljs.core.rest(arglist__9808);
return log__delegate(p__9805,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__9809){var map__9811 = p__9809;var map__9811__$1 = ((cljs.core.seq_QMARK_.call(null,map__9811))?cljs.core.apply.call(null,cljs.core.hash_map,map__9811):map__9811);var websocket_url = cljs.core.get.call(null,map__9811__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return [cljs.core.str(url),cljs.core.str("?rel="),cljs.core.str((new Date()).getTime())].join('');
});
figwheel.client.js_reload = (function js_reload(p__9812,callback){var map__9814 = p__9812;var map__9814__$1 = ((cljs.core.seq_QMARK_.call(null,map__9814))?cljs.core.apply.call(null,cljs.core.hash_map,map__9814):map__9814);var msg = map__9814__$1;var dependency_file = cljs.core.get.call(null,map__9814__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",2750516784));var namespace = cljs.core.get.call(null,map__9814__$1,new cljs.core.Keyword(null,"namespace","namespace",2266122445));var request_url = cljs.core.get.call(null,map__9814__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));if(cljs.core.truth_((function (){var or__3481__auto__ = dependency_file;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__9814,map__9814__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__9814,map__9814__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__9815,p__9816){var map__9819 = p__9815;var map__9819__$1 = ((cljs.core.seq_QMARK_.call(null,map__9819))?cljs.core.apply.call(null,cljs.core.hash_map,map__9819):map__9819);var opts = map__9819__$1;var url_rewriter = cljs.core.get.call(null,map__9819__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",538861174));var map__9820 = p__9816;var map__9820__$1 = ((cljs.core.seq_QMARK_.call(null,map__9820))?cljs.core.apply.call(null,cljs.core.hash_map,map__9820):map__9820);var d = map__9820__$1;var file = cljs.core.get.call(null,map__9820__$1,new cljs.core.Keyword(null,"file","file",1017047278));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2162835619),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__9821,p__9822){var map__9863 = p__9821;var map__9863__$1 = ((cljs.core.seq_QMARK_.call(null,map__9863))?cljs.core.apply.call(null,cljs.core.hash_map,map__9863):map__9863);var opts = map__9863__$1;var on_jsload = cljs.core.get.call(null,map__9863__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",817745103));var before_jsload = cljs.core.get.call(null,map__9863__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",3705046831));var map__9864 = p__9822;var map__9864__$1 = ((cljs.core.seq_QMARK_.call(null,map__9864))?cljs.core.apply.call(null,cljs.core.hash_map,map__9864):map__9864);var files = cljs.core.get.call(null,map__9864__$1,new cljs.core.Keyword(null,"files","files",1111338473));var c__6136__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6136__auto__,map__9863,map__9863__$1,opts,on_jsload,before_jsload,map__9864,map__9864__$1,files){
return (function (){var f__6137__auto__ = (function (){var switch__6072__auto__ = ((function (c__6136__auto__,map__9863,map__9863__$1,opts,on_jsload,before_jsload,map__9864,map__9864__$1,files){
return (function (state_9886){var state_val_9887 = (state_9886[1]);if((state_val_9887 === 6))
{var inst_9869 = (state_9886[7]);var inst_9878 = (state_9886[2]);var inst_9879 = [inst_9869];var inst_9880 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9879,null));var inst_9881 = cljs.core.apply.call(null,on_jsload,inst_9880);var state_9886__$1 = (function (){var statearr_9888 = state_9886;(statearr_9888[8] = inst_9878);
return statearr_9888;
})();var statearr_9889_9903 = state_9886__$1;(statearr_9889_9903[2] = inst_9881);
(statearr_9889_9903[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9887 === 5))
{var inst_9884 = (state_9886[2]);var state_9886__$1 = state_9886;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9886__$1,inst_9884);
} else
{if((state_val_9887 === 4))
{var state_9886__$1 = state_9886;var statearr_9890_9904 = state_9886__$1;(statearr_9890_9904[2] = null);
(statearr_9890_9904[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9887 === 3))
{var inst_9869 = (state_9886[7]);var inst_9872 = console.debug("Figwheel: loaded these files");var inst_9873 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",1017047278),inst_9869);var inst_9874 = cljs.core.prn_str.call(null,inst_9873);var inst_9875 = console.log(inst_9874);var inst_9876 = cljs.core.async.timeout.call(null,10);var state_9886__$1 = (function (){var statearr_9891 = state_9886;(statearr_9891[9] = inst_9875);
(statearr_9891[10] = inst_9872);
return statearr_9891;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9886__$1,6,inst_9876);
} else
{if((state_val_9887 === 2))
{var inst_9869 = (state_9886[7]);var inst_9869__$1 = (state_9886[2]);var inst_9870 = cljs.core.not_empty.call(null,inst_9869__$1);var state_9886__$1 = (function (){var statearr_9892 = state_9886;(statearr_9892[7] = inst_9869__$1);
return statearr_9892;
})();if(cljs.core.truth_(inst_9870))
{var statearr_9893_9905 = state_9886__$1;(statearr_9893_9905[1] = 3);
} else
{var statearr_9894_9906 = state_9886__$1;(statearr_9894_9906[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9887 === 1))
{var inst_9865 = before_jsload.call(null,files);var inst_9866 = figwheel.client.add_request_urls.call(null,opts,files);var inst_9867 = figwheel.client.load_all_js_files.call(null,inst_9866);var state_9886__$1 = (function (){var statearr_9895 = state_9886;(statearr_9895[11] = inst_9865);
return statearr_9895;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9886__$1,2,inst_9867);
} else
{return null;
}
}
}
}
}
}
});})(c__6136__auto__,map__9863,map__9863__$1,opts,on_jsload,before_jsload,map__9864,map__9864__$1,files))
;return ((function (switch__6072__auto__,c__6136__auto__,map__9863,map__9863__$1,opts,on_jsload,before_jsload,map__9864,map__9864__$1,files){
return (function() {
var state_machine__6073__auto__ = null;
var state_machine__6073__auto____0 = (function (){var statearr_9899 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9899[0] = state_machine__6073__auto__);
(statearr_9899[1] = 1);
return statearr_9899;
});
var state_machine__6073__auto____1 = (function (state_9886){while(true){
var ret_value__6074__auto__ = (function (){try{while(true){
var result__6075__auto__ = switch__6072__auto__.call(null,state_9886);if(cljs.core.keyword_identical_QMARK_.call(null,result__6075__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6075__auto__;
}
break;
}
}catch (e9900){if((e9900 instanceof Object))
{var ex__6076__auto__ = e9900;var statearr_9901_9907 = state_9886;(statearr_9901_9907[5] = ex__6076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9886);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9900;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6074__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9908 = state_9886;
state_9886 = G__9908;
continue;
}
} else
{return ret_value__6074__auto__;
}
break;
}
});
state_machine__6073__auto__ = function(state_9886){
switch(arguments.length){
case 0:
return state_machine__6073__auto____0.call(this);
case 1:
return state_machine__6073__auto____1.call(this,state_9886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6073__auto____0;
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6073__auto____1;
return state_machine__6073__auto__;
})()
;})(switch__6072__auto__,c__6136__auto__,map__9863,map__9863__$1,opts,on_jsload,before_jsload,map__9864,map__9864__$1,files))
})();var state__6138__auto__ = (function (){var statearr_9902 = f__6137__auto__.call(null);(statearr_9902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6136__auto__);
return statearr_9902;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6138__auto__);
});})(c__6136__auto__,map__9863,map__9863__$1,opts,on_jsload,before_jsload,map__9864,map__9864__$1,files))
);
return c__6136__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__9909,link_href){var map__9911 = p__9909;var map__9911__$1 = ((cljs.core.seq_QMARK_.call(null,map__9911))?cljs.core.apply.call(null,cljs.core.hash_map,map__9911):map__9911);var request_url = cljs.core.get.call(null,map__9911__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));var file = cljs.core.get.call(null,map__9911__$1,new cljs.core.Keyword(null,"file","file",1017047278));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
var c__6136__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6136__auto__,parent){
return (function (){var f__6137__auto__ = (function (){var switch__6072__auto__ = ((function (c__6136__auto__,parent){
return (function (state_9932){var state_val_9933 = (state_9932[1]);if((state_val_9933 === 2))
{var inst_9929 = (state_9932[2]);var inst_9930 = parent.removeChild(orig_link);var state_9932__$1 = (function (){var statearr_9934 = state_9932;(statearr_9934[7] = inst_9929);
return statearr_9934;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9932__$1,inst_9930);
} else
{if((state_val_9933 === 1))
{var inst_9927 = cljs.core.async.timeout.call(null,200);var state_9932__$1 = state_9932;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9932__$1,2,inst_9927);
} else
{return null;
}
}
});})(c__6136__auto__,parent))
;return ((function (switch__6072__auto__,c__6136__auto__,parent){
return (function() {
var state_machine__6073__auto__ = null;
var state_machine__6073__auto____0 = (function (){var statearr_9938 = [null,null,null,null,null,null,null,null];(statearr_9938[0] = state_machine__6073__auto__);
(statearr_9938[1] = 1);
return statearr_9938;
});
var state_machine__6073__auto____1 = (function (state_9932){while(true){
var ret_value__6074__auto__ = (function (){try{while(true){
var result__6075__auto__ = switch__6072__auto__.call(null,state_9932);if(cljs.core.keyword_identical_QMARK_.call(null,result__6075__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6075__auto__;
}
break;
}
}catch (e9939){if((e9939 instanceof Object))
{var ex__6076__auto__ = e9939;var statearr_9940_9942 = state_9932;(statearr_9940_9942[5] = ex__6076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9932);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9939;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6074__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9943 = state_9932;
state_9932 = G__9943;
continue;
}
} else
{return ret_value__6074__auto__;
}
break;
}
});
state_machine__6073__auto__ = function(state_9932){
switch(arguments.length){
case 0:
return state_machine__6073__auto____0.call(this);
case 1:
return state_machine__6073__auto____1.call(this,state_9932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6073__auto____0;
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6073__auto____1;
return state_machine__6073__auto__;
})()
;})(switch__6072__auto__,c__6136__auto__,parent))
})();var state__6138__auto__ = (function (){var statearr_9941 = f__6137__auto__.call(null);(statearr_9941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6136__auto__);
return statearr_9941;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6138__auto__);
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
figwheel.client.reload_css_file = (function reload_css_file(p__9944){var map__9946 = p__9944;var map__9946__$1 = ((cljs.core.seq_QMARK_.call(null,map__9946))?cljs.core.apply.call(null,cljs.core.hash_map,map__9946):map__9946);var f_data = map__9946__$1;var request_url = cljs.core.get.call(null,map__9946__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));var file = cljs.core.get.call(null,map__9946__$1,new cljs.core.Keyword(null,"file","file",1017047278));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__9947,files_msg){var map__9969 = p__9947;var map__9969__$1 = ((cljs.core.seq_QMARK_.call(null,map__9969))?cljs.core.apply.call(null,cljs.core.hash_map,map__9969):map__9969);var opts = map__9969__$1;var on_cssload = cljs.core.get.call(null,map__9969__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1611735789));var seq__9970_9990 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__9971_9991 = null;var count__9972_9992 = 0;var i__9973_9993 = 0;while(true){
if((i__9973_9993 < count__9972_9992))
{var f_9994 = cljs.core._nth.call(null,chunk__9971_9991,i__9973_9993);figwheel.client.reload_css_file.call(null,f_9994);
{
var G__9995 = seq__9970_9990;
var G__9996 = chunk__9971_9991;
var G__9997 = count__9972_9992;
var G__9998 = (i__9973_9993 + 1);
seq__9970_9990 = G__9995;
chunk__9971_9991 = G__9996;
count__9972_9992 = G__9997;
i__9973_9993 = G__9998;
continue;
}
} else
{var temp__4126__auto___9999 = cljs.core.seq.call(null,seq__9970_9990);if(temp__4126__auto___9999)
{var seq__9970_10000__$1 = temp__4126__auto___9999;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9970_10000__$1))
{var c__4229__auto___10001 = cljs.core.chunk_first.call(null,seq__9970_10000__$1);{
var G__10002 = cljs.core.chunk_rest.call(null,seq__9970_10000__$1);
var G__10003 = c__4229__auto___10001;
var G__10004 = cljs.core.count.call(null,c__4229__auto___10001);
var G__10005 = 0;
seq__9970_9990 = G__10002;
chunk__9971_9991 = G__10003;
count__9972_9992 = G__10004;
i__9973_9993 = G__10005;
continue;
}
} else
{var f_10006 = cljs.core.first.call(null,seq__9970_10000__$1);figwheel.client.reload_css_file.call(null,f_10006);
{
var G__10007 = cljs.core.next.call(null,seq__9970_10000__$1);
var G__10008 = null;
var G__10009 = 0;
var G__10010 = 0;
seq__9970_9990 = G__10007;
chunk__9971_9991 = G__10008;
count__9972_9992 = G__10009;
i__9973_9993 = G__10010;
continue;
}
}
} else
{}
}
break;
}
var c__6136__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6136__auto__,map__9969,map__9969__$1,opts,on_cssload){
return (function (){var f__6137__auto__ = (function (){var switch__6072__auto__ = ((function (c__6136__auto__,map__9969,map__9969__$1,opts,on_cssload){
return (function (state_9980){var state_val_9981 = (state_9980[1]);if((state_val_9981 === 2))
{var inst_9976 = (state_9980[2]);var inst_9977 = new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_9978 = on_cssload.call(null,inst_9977);var state_9980__$1 = (function (){var statearr_9982 = state_9980;(statearr_9982[7] = inst_9976);
return statearr_9982;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9980__$1,inst_9978);
} else
{if((state_val_9981 === 1))
{var inst_9974 = cljs.core.async.timeout.call(null,100);var state_9980__$1 = state_9980;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9980__$1,2,inst_9974);
} else
{return null;
}
}
});})(c__6136__auto__,map__9969,map__9969__$1,opts,on_cssload))
;return ((function (switch__6072__auto__,c__6136__auto__,map__9969,map__9969__$1,opts,on_cssload){
return (function() {
var state_machine__6073__auto__ = null;
var state_machine__6073__auto____0 = (function (){var statearr_9986 = [null,null,null,null,null,null,null,null];(statearr_9986[0] = state_machine__6073__auto__);
(statearr_9986[1] = 1);
return statearr_9986;
});
var state_machine__6073__auto____1 = (function (state_9980){while(true){
var ret_value__6074__auto__ = (function (){try{while(true){
var result__6075__auto__ = switch__6072__auto__.call(null,state_9980);if(cljs.core.keyword_identical_QMARK_.call(null,result__6075__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6075__auto__;
}
break;
}
}catch (e9987){if((e9987 instanceof Object))
{var ex__6076__auto__ = e9987;var statearr_9988_10011 = state_9980;(statearr_9988_10011[5] = ex__6076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9980);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9987;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6074__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10012 = state_9980;
state_9980 = G__10012;
continue;
}
} else
{return ret_value__6074__auto__;
}
break;
}
});
state_machine__6073__auto__ = function(state_9980){
switch(arguments.length){
case 0:
return state_machine__6073__auto____0.call(this);
case 1:
return state_machine__6073__auto____1.call(this,state_9980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6073__auto____0;
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6073__auto____1;
return state_machine__6073__auto__;
})()
;})(switch__6072__auto__,c__6136__auto__,map__9969,map__9969__$1,opts,on_cssload))
})();var state__6138__auto__ = (function (){var statearr_9989 = f__6137__auto__.call(null);(statearr_9989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6136__auto__);
return statearr_9989;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6138__auto__);
});})(c__6136__auto__,map__9969,map__9969__$1,opts,on_cssload))
);
return c__6136__auto__;
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__10013){var map__10018 = p__10013;var map__10018__$1 = ((cljs.core.seq_QMARK_.call(null,map__10018))?cljs.core.apply.call(null,cljs.core.hash_map,map__10018):map__10018);var opts = map__10018__$1;var on_compile_fail = cljs.core.get.call(null,map__10018__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",846779160));var jsload_callback = cljs.core.get.call(null,map__10018__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989));var websocket_url = cljs.core.get.call(null,map__10018__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));var retry_count = cljs.core.get.call(null,map__10018__$1,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__10018,map__10018__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__10019 = cljs.core._EQ_;var expr__10020 = new cljs.core.Keyword(null,"msg-name","msg-name",3979112649).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__10019.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",2807270608),expr__10020)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__10019.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",1058553478),expr__10020)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__10019.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",630802569),expr__10020)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__10018,map__10018__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__10018,map__10018__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__10018,map__10018__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__10018,map__10018__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > 0))
{return window.setTimeout(((function (socket,map__10018,map__10018__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),(retry_count - 1)));
});})(socket,map__10018,map__10018__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,2000);
} else
{return null;
}
});})(socket,map__10018,map__10018__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__10018,map__10018__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__10018,map__10018__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj10025 = {"detail":url};return obj10025;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.Keyword(null,"class","class",1108647146)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",1108338651).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__10026){var map__10028 = p__10026;var map__10028__$1 = ((cljs.core.seq_QMARK_.call(null,map__10028))?cljs.core.apply.call(null,cljs.core.hash_map,map__10028):map__10028);var class$ = cljs.core.get.call(null,map__10028__$1,new cljs.core.Keyword(null,"class","class",1108647146));var message = cljs.core.get.call(null,map__10028__$1,new cljs.core.Keyword(null,"message","message",1968829305));return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__10029){var map__10035 = p__10029;var map__10035__$1 = ((cljs.core.seq_QMARK_.call(null,map__10035))?cljs.core.apply.call(null,cljs.core.hash_map,map__10035):map__10035);var ed = map__10035__$1;var exception_data = cljs.core.get.call(null,map__10035__$1,new cljs.core.Keyword(null,"exception-data","exception-data",922291674));var formatted_exception = cljs.core.get.call(null,map__10035__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",1408867312));console.debug("Figwheel: Compile Exception");
var seq__10036_10040 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__10037_10041 = null;var count__10038_10042 = 0;var i__10039_10043 = 0;while(true){
if((i__10039_10043 < count__10038_10042))
{var msg_10044 = cljs.core._nth.call(null,chunk__10037_10041,i__10039_10043);console.log(msg_10044);
{
var G__10045 = seq__10036_10040;
var G__10046 = chunk__10037_10041;
var G__10047 = count__10038_10042;
var G__10048 = (i__10039_10043 + 1);
seq__10036_10040 = G__10045;
chunk__10037_10041 = G__10046;
count__10038_10042 = G__10047;
i__10039_10043 = G__10048;
continue;
}
} else
{var temp__4126__auto___10049 = cljs.core.seq.call(null,seq__10036_10040);if(temp__4126__auto___10049)
{var seq__10036_10050__$1 = temp__4126__auto___10049;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10036_10050__$1))
{var c__4229__auto___10051 = cljs.core.chunk_first.call(null,seq__10036_10050__$1);{
var G__10052 = cljs.core.chunk_rest.call(null,seq__10036_10050__$1);
var G__10053 = c__4229__auto___10051;
var G__10054 = cljs.core.count.call(null,c__4229__auto___10051);
var G__10055 = 0;
seq__10036_10040 = G__10052;
chunk__10037_10041 = G__10053;
count__10038_10042 = G__10054;
i__10039_10043 = G__10055;
continue;
}
} else
{var msg_10056 = cljs.core.first.call(null,seq__10036_10050__$1);console.log(msg_10056);
{
var G__10057 = cljs.core.next.call(null,seq__10036_10050__$1);
var G__10058 = null;
var G__10059 = 0;
var G__10060 = 0;
seq__10036_10040 = G__10057;
chunk__10037_10041 = G__10058;
count__10038_10042 = G__10059;
i__10039_10043 = G__10060;
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
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",1017047278),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),100,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",817745103),(function (){var or__3481__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
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
var watch_and_reload__delegate = function (p__10061){var map__10063 = p__10061;var map__10063__$1 = ((cljs.core.seq_QMARK_.call(null,map__10063))?cljs.core.apply.call(null,cljs.core.hash_map,map__10063):map__10063);var opts = map__10063__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__10061 = null;if (arguments.length > 0) {
  p__10061 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__10061);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__10064){
var p__10061 = cljs.core.seq(arglist__10064);
return watch_and_reload__delegate(p__10061);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map
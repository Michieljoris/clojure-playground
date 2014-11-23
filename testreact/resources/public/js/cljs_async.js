// Compiled by ClojureScript 0.0-2371
goog.provide('cljs_async');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('cljs.core.async');
goog.require('goog.net.XhrIo');
goog.require('clojure.walk');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
alert("We're running ClojureScript");
cljs_async.c = cljs.core.async.chan.call(null);
cljs.core.println.call(null,"hello\n");
cljs.core.async.put_BANG_.call(null,cljs_async.c,(42),(function (arg){return cljs.core.println.call(null,"\nDone putting: ",arg);
}));
cljs.core.println.call(null,"hello\n");
cljs.core.async.take_BANG_.call(null,cljs_async.c,(function (x){return cljs.core.println.call(null,x);
}));
var c__14217__auto___25781 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14217__auto___25781){
return (function (){var f__14218__auto__ = (function (){var switch__14161__auto__ = ((function (c__14217__auto___25781){
return (function (state_25772){var state_val_25773 = (state_25772[(1)]);if((state_val_25773 === (1)))
{var state_25772__$1 = state_25772;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25772__$1,(32));
} else
{return null;
}
});})(c__14217__auto___25781))
;return ((function (switch__14161__auto__,c__14217__auto___25781){
return (function() {
var state_machine__14162__auto__ = null;
var state_machine__14162__auto____0 = (function (){var statearr_25777 = [null,null,null,null,null,null,null];(statearr_25777[(0)] = state_machine__14162__auto__);
(statearr_25777[(1)] = (1));
return statearr_25777;
});
var state_machine__14162__auto____1 = (function (state_25772){while(true){
var ret_value__14163__auto__ = (function (){try{while(true){
var result__14164__auto__ = switch__14161__auto__.call(null,state_25772);if(cljs.core.keyword_identical_QMARK_.call(null,result__14164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14164__auto__;
}
break;
}
}catch (e25778){if((e25778 instanceof Object))
{var ex__14165__auto__ = e25778;var statearr_25779_25782 = state_25772;(statearr_25779_25782[(5)] = ex__14165__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25772);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25778;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25783 = state_25772;
state_25772 = G__25783;
continue;
}
} else
{return ret_value__14163__auto__;
}
break;
}
});
state_machine__14162__auto__ = function(state_25772){
switch(arguments.length){
case 0:
return state_machine__14162__auto____0.call(this);
case 1:
return state_machine__14162__auto____1.call(this,state_25772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14162__auto____0;
state_machine__14162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14162__auto____1;
return state_machine__14162__auto__;
})()
;})(switch__14161__auto__,c__14217__auto___25781))
})();var state__14219__auto__ = (function (){var statearr_25780 = f__14218__auto__.call(null);(statearr_25780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14217__auto___25781);
return statearr_25780;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14219__auto__);
});})(c__14217__auto___25781))
);
cljs.core.println.call(null,cljs.core.async.take_BANG_);
cljs_async.canvas = document.getElementById("canvas");
cljs_async.colors = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#FF0000","#00FF00","#0000FF","#00FFFF","#FFFF00","#FF00FF"], null);
cljs_async.make_cell = (function make_cell(canvas,x,y){var ctx = document.getElementById(canvas).getContext("2d");var c__14217__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14217__auto__,ctx){
return (function (){var f__14218__auto__ = (function (){var switch__14161__auto__ = ((function (c__14217__auto__,ctx){
return (function (state_25833){var state_val_25834 = (state_25833[(1)]);if((state_val_25834 === (7)))
{var inst_25825 = (state_25833[(2)]);var state_25833__$1 = (function (){var statearr_25835 = state_25833;(statearr_25835[(7)] = inst_25825);
return statearr_25835;
})();var statearr_25836_25850 = state_25833__$1;(statearr_25836_25850[(2)] = null);
(statearr_25836_25850[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25834 === (6)))
{var inst_25829 = (state_25833[(2)]);var state_25833__$1 = state_25833;var statearr_25837_25851 = state_25833__$1;(statearr_25837_25851[(2)] = inst_25829);
(statearr_25837_25851[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25834 === (5)))
{var state_25833__$1 = state_25833;var statearr_25838_25852 = state_25833__$1;(statearr_25838_25852[(2)] = null);
(statearr_25838_25852[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25834 === (4)))
{var inst_25819 = cljs.core.rand_nth.call(null,cljs_async.colors);var inst_25820 = ctx.fillStyle = inst_25819;var inst_25821 = ctx.fillRect(x,y,(10),(10));var inst_25822 = cljs.core.rand_int.call(null,(1000));var inst_25823 = cljs.core.async.timeout.call(null,inst_25822);var state_25833__$1 = (function (){var statearr_25839 = state_25833;(statearr_25839[(8)] = inst_25821);
(statearr_25839[(9)] = inst_25820);
return statearr_25839;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25833__$1,(7),inst_25823);
} else
{if((state_val_25834 === (3)))
{var inst_25831 = (state_25833[(2)]);var state_25833__$1 = state_25833;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25833__$1,inst_25831);
} else
{if((state_val_25834 === (2)))
{var state_25833__$1 = state_25833;var statearr_25840_25853 = state_25833__$1;(statearr_25840_25853[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25834 === (1)))
{var state_25833__$1 = state_25833;var statearr_25842_25854 = state_25833__$1;(statearr_25842_25854[(2)] = null);
(statearr_25842_25854[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__14217__auto__,ctx))
;return ((function (switch__14161__auto__,c__14217__auto__,ctx){
return (function() {
var state_machine__14162__auto__ = null;
var state_machine__14162__auto____0 = (function (){var statearr_25846 = [null,null,null,null,null,null,null,null,null,null];(statearr_25846[(0)] = state_machine__14162__auto__);
(statearr_25846[(1)] = (1));
return statearr_25846;
});
var state_machine__14162__auto____1 = (function (state_25833){while(true){
var ret_value__14163__auto__ = (function (){try{while(true){
var result__14164__auto__ = switch__14161__auto__.call(null,state_25833);if(cljs.core.keyword_identical_QMARK_.call(null,result__14164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14164__auto__;
}
break;
}
}catch (e25847){if((e25847 instanceof Object))
{var ex__14165__auto__ = e25847;var statearr_25848_25855 = state_25833;(statearr_25848_25855[(5)] = ex__14165__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25833);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25847;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25856 = state_25833;
state_25833 = G__25856;
continue;
}
} else
{return ret_value__14163__auto__;
}
break;
}
});
state_machine__14162__auto__ = function(state_25833){
switch(arguments.length){
case 0:
return state_machine__14162__auto____0.call(this);
case 1:
return state_machine__14162__auto____1.call(this,state_25833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14162__auto____0;
state_machine__14162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14162__auto____1;
return state_machine__14162__auto__;
})()
;})(switch__14161__auto__,c__14217__auto__,ctx))
})();var state__14219__auto__ = (function (){var statearr_25849 = f__14218__auto__.call(null);(statearr_25849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14217__auto__);
return statearr_25849;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14219__auto__);
});})(c__14217__auto__,ctx))
);
return c__14217__auto__;
});
cljs_async.make_scene = (function make_scene(canvas,rows,cols){var n__12365__auto__ = cols;var x = (0);while(true){
if((x < n__12365__auto__))
{var n__12365__auto___25857__$1 = rows;var y_25858 = (0);while(true){
if((y_25858 < n__12365__auto___25857__$1))
{cljs_async.make_cell.call(null,canvas,((10) * x),((10) * y_25858));
{
var G__25859 = (y_25858 + (1));
y_25858 = G__25859;
continue;
}
} else
{}
break;
}
{
var G__25860 = (x + (1));
x = G__25860;
continue;
}
} else
{return null;
}
break;
}
});
cljs_async.make_scene.call(null,"canvas",(100),(100));
cljs_async.fixup_keys = (function fixup_keys(x){return clojure.walk.prewalk.call(null,(function (x__$1){if(cljs.core.map_QMARK_.call(null,x__$1))
{return cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.keys.call(null,x__$1)),cljs.core.vals.call(null,x__$1));
} else
{return x__$1;
}
}),x);
});
cljs_async.http_get = (function http_get(url){var c = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (c){
return (function (e){return cljs.core.async.put_BANG_.call(null,c,cljs_async.fixup_keys.call(null,cljs.core.js__GT_clj.call(null,e.target.getResponseJson())));
});})(c))
);
return c;
});
cljs_async.key = "b4cb6cd7a349b47ccfbb80e05a601a7c";
cljs_async.log = (function log(arg){cljs.core.print.call(null,"*******************\n");
return arg;
});
cljs_async.request_and_process = (function request_and_process(url){var c__14217__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14217__auto__){
return (function (){var f__14218__auto__ = (function (){var switch__14161__auto__ = ((function (c__14217__auto__){
return (function (state_25880){var state_val_25881 = (state_25880[(1)]);if((state_val_25881 === (2)))
{var inst_25878 = (state_25880[(2)]);var state_25880__$1 = state_25880;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25880__$1,inst_25878);
} else
{if((state_val_25881 === (1)))
{var inst_25875 = ("http://api.themoviedb.org/3/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"api_key="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_async.key));var inst_25876 = cljs_async.http_get.call(null,inst_25875);var state_25880__$1 = state_25880;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25880__$1,(2),inst_25876);
} else
{return null;
}
}
});})(c__14217__auto__))
;return ((function (switch__14161__auto__,c__14217__auto__){
return (function() {
var state_machine__14162__auto__ = null;
var state_machine__14162__auto____0 = (function (){var statearr_25885 = [null,null,null,null,null,null,null];(statearr_25885[(0)] = state_machine__14162__auto__);
(statearr_25885[(1)] = (1));
return statearr_25885;
});
var state_machine__14162__auto____1 = (function (state_25880){while(true){
var ret_value__14163__auto__ = (function (){try{while(true){
var result__14164__auto__ = switch__14161__auto__.call(null,state_25880);if(cljs.core.keyword_identical_QMARK_.call(null,result__14164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14164__auto__;
}
break;
}
}catch (e25886){if((e25886 instanceof Object))
{var ex__14165__auto__ = e25886;var statearr_25887_25889 = state_25880;(statearr_25887_25889[(5)] = ex__14165__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25880);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25886;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25890 = state_25880;
state_25880 = G__25890;
continue;
}
} else
{return ret_value__14163__auto__;
}
break;
}
});
state_machine__14162__auto__ = function(state_25880){
switch(arguments.length){
case 0:
return state_machine__14162__auto____0.call(this);
case 1:
return state_machine__14162__auto____1.call(this,state_25880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14162__auto____0;
state_machine__14162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14162__auto____1;
return state_machine__14162__auto__;
})()
;})(switch__14161__auto__,c__14217__auto__))
})();var state__14219__auto__ = (function (){var statearr_25888 = f__14218__auto__.call(null);(statearr_25888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14217__auto__);
return statearr_25888;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14219__auto__);
});})(c__14217__auto__))
);
return c__14217__auto__;
});
cljs_async.latest_movies = (function latest_movies(){return cljs_async.request_and_process.call(null,"movies/latest?");
});
cljs_async.top_rated_movies = (function top_rated_movies(){return cljs_async.request_and_process.call(null,"movie/top_rated?");
});
var c__14217__auto___25905 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14217__auto___25905){
return (function (){var f__14218__auto__ = (function (){var switch__14161__auto__ = ((function (c__14217__auto___25905){
return (function (state_25896){var state_val_25897 = (state_25896[(1)]);if((state_val_25897 === (2)))
{var inst_25893 = (state_25896[(2)]);var inst_25894 = cljs.core.println.call(null,inst_25893);var state_25896__$1 = state_25896;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25896__$1,inst_25894);
} else
{if((state_val_25897 === (1)))
{var inst_25891 = cljs_async.top_rated_movies.call(null);var state_25896__$1 = state_25896;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25896__$1,(2),inst_25891);
} else
{return null;
}
}
});})(c__14217__auto___25905))
;return ((function (switch__14161__auto__,c__14217__auto___25905){
return (function() {
var state_machine__14162__auto__ = null;
var state_machine__14162__auto____0 = (function (){var statearr_25901 = [null,null,null,null,null,null,null];(statearr_25901[(0)] = state_machine__14162__auto__);
(statearr_25901[(1)] = (1));
return statearr_25901;
});
var state_machine__14162__auto____1 = (function (state_25896){while(true){
var ret_value__14163__auto__ = (function (){try{while(true){
var result__14164__auto__ = switch__14161__auto__.call(null,state_25896);if(cljs.core.keyword_identical_QMARK_.call(null,result__14164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14164__auto__;
}
break;
}
}catch (e25902){if((e25902 instanceof Object))
{var ex__14165__auto__ = e25902;var statearr_25903_25906 = state_25896;(statearr_25903_25906[(5)] = ex__14165__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25896);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25902;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25907 = state_25896;
state_25896 = G__25907;
continue;
}
} else
{return ret_value__14163__auto__;
}
break;
}
});
state_machine__14162__auto__ = function(state_25896){
switch(arguments.length){
case 0:
return state_machine__14162__auto____0.call(this);
case 1:
return state_machine__14162__auto____1.call(this,state_25896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14162__auto____0;
state_machine__14162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14162__auto____1;
return state_machine__14162__auto__;
})()
;})(switch__14161__auto__,c__14217__auto___25905))
})();var state__14219__auto__ = (function (){var statearr_25904 = f__14218__auto__.call(null);(statearr_25904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14217__auto___25905);
return statearr_25904;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14219__auto__);
});})(c__14217__auto___25905))
);
cljs_async.movie_by_id = (function movie_by_id(id){return cljs_async.request_and_process.call(null,("movie/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"?"));
});
var c__14217__auto___25922 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14217__auto___25922){
return (function (){var f__14218__auto__ = (function (){var switch__14161__auto__ = ((function (c__14217__auto___25922){
return (function (state_25913){var state_val_25914 = (state_25913[(1)]);if((state_val_25914 === (2)))
{var inst_25910 = (state_25913[(2)]);var inst_25911 = cljs.core.println.call(null,inst_25910);var state_25913__$1 = state_25913;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25913__$1,inst_25911);
} else
{if((state_val_25914 === (1)))
{var inst_25908 = cljs_async.movie_by_id.call(null,(238));var state_25913__$1 = state_25913;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25913__$1,(2),inst_25908);
} else
{return null;
}
}
});})(c__14217__auto___25922))
;return ((function (switch__14161__auto__,c__14217__auto___25922){
return (function() {
var state_machine__14162__auto__ = null;
var state_machine__14162__auto____0 = (function (){var statearr_25918 = [null,null,null,null,null,null,null];(statearr_25918[(0)] = state_machine__14162__auto__);
(statearr_25918[(1)] = (1));
return statearr_25918;
});
var state_machine__14162__auto____1 = (function (state_25913){while(true){
var ret_value__14163__auto__ = (function (){try{while(true){
var result__14164__auto__ = switch__14161__auto__.call(null,state_25913);if(cljs.core.keyword_identical_QMARK_.call(null,result__14164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14164__auto__;
}
break;
}
}catch (e25919){if((e25919 instanceof Object))
{var ex__14165__auto__ = e25919;var statearr_25920_25923 = state_25913;(statearr_25920_25923[(5)] = ex__14165__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25913);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25919;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25924 = state_25913;
state_25913 = G__25924;
continue;
}
} else
{return ret_value__14163__auto__;
}
break;
}
});
state_machine__14162__auto__ = function(state_25913){
switch(arguments.length){
case 0:
return state_machine__14162__auto____0.call(this);
case 1:
return state_machine__14162__auto____1.call(this,state_25913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14162__auto____0;
state_machine__14162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14162__auto____1;
return state_machine__14162__auto__;
})()
;})(switch__14161__auto__,c__14217__auto___25922))
})();var state__14219__auto__ = (function (){var statearr_25921 = f__14218__auto__.call(null);(statearr_25921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14217__auto___25922);
return statearr_25921;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14219__auto__);
});})(c__14217__auto___25922))
);
cljs_async.movie_cast = (function movie_cast(id){return cljs_async.request_and_process.call(null,("movie/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/casts?"));
});
var c__14217__auto___25939 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14217__auto___25939){
return (function (){var f__14218__auto__ = (function (){var switch__14161__auto__ = ((function (c__14217__auto___25939){
return (function (state_25930){var state_val_25931 = (state_25930[(1)]);if((state_val_25931 === (2)))
{var inst_25927 = (state_25930[(2)]);var inst_25928 = cljs.core.println.call(null,inst_25927);var state_25930__$1 = state_25930;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25930__$1,inst_25928);
} else
{if((state_val_25931 === (1)))
{var inst_25925 = cljs_async.movie_cast.call(null,(238));var state_25930__$1 = state_25930;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25930__$1,(2),inst_25925);
} else
{return null;
}
}
});})(c__14217__auto___25939))
;return ((function (switch__14161__auto__,c__14217__auto___25939){
return (function() {
var state_machine__14162__auto__ = null;
var state_machine__14162__auto____0 = (function (){var statearr_25935 = [null,null,null,null,null,null,null];(statearr_25935[(0)] = state_machine__14162__auto__);
(statearr_25935[(1)] = (1));
return statearr_25935;
});
var state_machine__14162__auto____1 = (function (state_25930){while(true){
var ret_value__14163__auto__ = (function (){try{while(true){
var result__14164__auto__ = switch__14161__auto__.call(null,state_25930);if(cljs.core.keyword_identical_QMARK_.call(null,result__14164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14164__auto__;
}
break;
}
}catch (e25936){if((e25936 instanceof Object))
{var ex__14165__auto__ = e25936;var statearr_25937_25940 = state_25930;(statearr_25937_25940[(5)] = ex__14165__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25930);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25936;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25941 = state_25930;
state_25930 = G__25941;
continue;
}
} else
{return ret_value__14163__auto__;
}
break;
}
});
state_machine__14162__auto__ = function(state_25930){
switch(arguments.length){
case 0:
return state_machine__14162__auto____0.call(this);
case 1:
return state_machine__14162__auto____1.call(this,state_25930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14162__auto____0;
state_machine__14162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14162__auto____1;
return state_machine__14162__auto__;
})()
;})(switch__14161__auto__,c__14217__auto___25939))
})();var state__14219__auto__ = (function (){var statearr_25938 = f__14218__auto__.call(null);(statearr_25938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14217__auto___25939);
return statearr_25938;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14219__auto__);
});})(c__14217__auto___25939))
);
cljs_async.people_by_id = (function people_by_id(id){return cljs_async.request_and_process.call(null,("person/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"?"));
});
var c__14217__auto___25956 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14217__auto___25956){
return (function (){var f__14218__auto__ = (function (){var switch__14161__auto__ = ((function (c__14217__auto___25956){
return (function (state_25947){var state_val_25948 = (state_25947[(1)]);if((state_val_25948 === (2)))
{var inst_25944 = (state_25947[(2)]);var inst_25945 = cljs.core.println.call(null,inst_25944);var state_25947__$1 = state_25947;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25947__$1,inst_25945);
} else
{if((state_val_25948 === (1)))
{var inst_25942 = cljs_async.people_by_id.call(null,(3144));var state_25947__$1 = state_25947;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25947__$1,(2),inst_25942);
} else
{return null;
}
}
});})(c__14217__auto___25956))
;return ((function (switch__14161__auto__,c__14217__auto___25956){
return (function() {
var state_machine__14162__auto__ = null;
var state_machine__14162__auto____0 = (function (){var statearr_25952 = [null,null,null,null,null,null,null];(statearr_25952[(0)] = state_machine__14162__auto__);
(statearr_25952[(1)] = (1));
return statearr_25952;
});
var state_machine__14162__auto____1 = (function (state_25947){while(true){
var ret_value__14163__auto__ = (function (){try{while(true){
var result__14164__auto__ = switch__14161__auto__.call(null,state_25947);if(cljs.core.keyword_identical_QMARK_.call(null,result__14164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14164__auto__;
}
break;
}
}catch (e25953){if((e25953 instanceof Object))
{var ex__14165__auto__ = e25953;var statearr_25954_25957 = state_25947;(statearr_25954_25957[(5)] = ex__14165__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25947);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25953;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25958 = state_25947;
state_25947 = G__25958;
continue;
}
} else
{return ret_value__14163__auto__;
}
break;
}
});
state_machine__14162__auto__ = function(state_25947){
switch(arguments.length){
case 0:
return state_machine__14162__auto____0.call(this);
case 1:
return state_machine__14162__auto____1.call(this,state_25947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14162__auto____0;
state_machine__14162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14162__auto____1;
return state_machine__14162__auto__;
})()
;})(switch__14161__auto__,c__14217__auto___25956))
})();var state__14219__auto__ = (function (){var statearr_25955 = f__14218__auto__.call(null);(statearr_25955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14217__auto___25956);
return statearr_25955;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14219__auto__);
});})(c__14217__auto___25956))
);
cljs_async.avg = (function avg(col){return (cljs.core.reduce.call(null,cljs.core._PLUS_,(0),col) / cljs.core.count.call(null,col));
});
cljs_async.avg.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5)], null));
cljs_async.avg_cast_popularity = (function avg_cast_popularity(id){var c__14217__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14217__auto__){
return (function (){var f__14218__auto__ = (function (){var switch__14161__auto__ = ((function (c__14217__auto__){
return (function (state_25992){var state_val_25993 = (state_25992[(1)]);if((state_val_25993 === (3)))
{var inst_25982 = (state_25992[(2)]);var inst_25983 = new cljs.core.Keyword(null,"cast","cast",-1761029143).cljs$core$IFn$_invoke$arity$1(inst_25982);var inst_25984 = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),inst_25983);var inst_25985 = cljs.core.map.call(null,cljs_async.people_by_id,inst_25984);var inst_25986 = cljs.core.async.map.call(null,cljs.core.vector,inst_25985);var state_25992__$1 = state_25992;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25992__$1,(2),inst_25986);
} else
{if((state_val_25993 === (2)))
{var inst_25988 = (state_25992[(2)]);var inst_25989 = cljs.core.map.call(null,new cljs.core.Keyword(null,"popularity","popularity",924297410),inst_25988);var inst_25990 = cljs_async.avg.call(null,inst_25989);var state_25992__$1 = state_25992;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25992__$1,inst_25990);
} else
{if((state_val_25993 === (1)))
{var inst_25980 = cljs_async.movie_cast.call(null,id);var state_25992__$1 = state_25992;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25992__$1,(3),inst_25980);
} else
{return null;
}
}
}
});})(c__14217__auto__))
;return ((function (switch__14161__auto__,c__14217__auto__){
return (function() {
var state_machine__14162__auto__ = null;
var state_machine__14162__auto____0 = (function (){var statearr_25997 = [null,null,null,null,null,null,null];(statearr_25997[(0)] = state_machine__14162__auto__);
(statearr_25997[(1)] = (1));
return statearr_25997;
});
var state_machine__14162__auto____1 = (function (state_25992){while(true){
var ret_value__14163__auto__ = (function (){try{while(true){
var result__14164__auto__ = switch__14161__auto__.call(null,state_25992);if(cljs.core.keyword_identical_QMARK_.call(null,result__14164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14164__auto__;
}
break;
}
}catch (e25998){if((e25998 instanceof Object))
{var ex__14165__auto__ = e25998;var statearr_25999_26001 = state_25992;(statearr_25999_26001[(5)] = ex__14165__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25992);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25998;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26002 = state_25992;
state_25992 = G__26002;
continue;
}
} else
{return ret_value__14163__auto__;
}
break;
}
});
state_machine__14162__auto__ = function(state_25992){
switch(arguments.length){
case 0:
return state_machine__14162__auto____0.call(this);
case 1:
return state_machine__14162__auto____1.call(this,state_25992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14162__auto____0;
state_machine__14162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14162__auto____1;
return state_machine__14162__auto__;
})()
;})(switch__14161__auto__,c__14217__auto__))
})();var state__14219__auto__ = (function (){var statearr_26000 = f__14218__auto__.call(null);(statearr_26000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14217__auto__);
return statearr_26000;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14219__auto__);
});})(c__14217__auto__))
);
return c__14217__auto__;
});
var c__14217__auto___26026 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14217__auto___26026){
return (function (){var f__14218__auto__ = (function (){var switch__14161__auto__ = ((function (c__14217__auto___26026){
return (function (state_26014){var state_val_26015 = (state_26014[(1)]);if((state_val_26015 === (3)))
{var inst_26010 = (state_26014[(2)]);var inst_26011 = console.log(inst_26010);var inst_26012 = console.log("two");var state_26014__$1 = (function (){var statearr_26016 = state_26014;(statearr_26016[(7)] = inst_26011);
return statearr_26016;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26014__$1,inst_26012);
} else
{if((state_val_26015 === (2)))
{var inst_26006 = (state_26014[(2)]);var inst_26007 = console.log(inst_26006);var inst_26008 = cljs_async.avg_cast_popularity.call(null,(238));var state_26014__$1 = (function (){var statearr_26017 = state_26014;(statearr_26017[(8)] = inst_26007);
return statearr_26017;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26014__$1,(3),inst_26008);
} else
{if((state_val_26015 === (1)))
{var inst_26003 = console.log("one");var inst_26004 = cljs_async.avg_cast_popularity.call(null,(238));var state_26014__$1 = (function (){var statearr_26018 = state_26014;(statearr_26018[(9)] = inst_26003);
return statearr_26018;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26014__$1,(2),inst_26004);
} else
{return null;
}
}
}
});})(c__14217__auto___26026))
;return ((function (switch__14161__auto__,c__14217__auto___26026){
return (function() {
var state_machine__14162__auto__ = null;
var state_machine__14162__auto____0 = (function (){var statearr_26022 = [null,null,null,null,null,null,null,null,null,null];(statearr_26022[(0)] = state_machine__14162__auto__);
(statearr_26022[(1)] = (1));
return statearr_26022;
});
var state_machine__14162__auto____1 = (function (state_26014){while(true){
var ret_value__14163__auto__ = (function (){try{while(true){
var result__14164__auto__ = switch__14161__auto__.call(null,state_26014);if(cljs.core.keyword_identical_QMARK_.call(null,result__14164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14164__auto__;
}
break;
}
}catch (e26023){if((e26023 instanceof Object))
{var ex__14165__auto__ = e26023;var statearr_26024_26027 = state_26014;(statearr_26024_26027[(5)] = ex__14165__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26014);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26023;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26028 = state_26014;
state_26014 = G__26028;
continue;
}
} else
{return ret_value__14163__auto__;
}
break;
}
});
state_machine__14162__auto__ = function(state_26014){
switch(arguments.length){
case 0:
return state_machine__14162__auto____0.call(this);
case 1:
return state_machine__14162__auto____1.call(this,state_26014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14162__auto____0;
state_machine__14162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14162__auto____1;
return state_machine__14162__auto__;
})()
;})(switch__14161__auto__,c__14217__auto___26026))
})();var state__14219__auto__ = (function (){var statearr_26025 = f__14218__auto__.call(null);(statearr_26025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14217__auto___26026);
return statearr_26025;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14219__auto__);
});})(c__14217__auto___26026))
);
cljs_async.omdb_by_title = (function omdb_by_title(q){var c__14217__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14217__auto__){
return (function (){var f__14218__auto__ = (function (){var switch__14161__auto__ = ((function (c__14217__auto__){
return (function (state_26052){var state_val_26053 = (state_26052[(1)]);if((state_val_26053 === (2)))
{var inst_26048 = (state_26052[(2)]);var inst_26049 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_26048);var inst_26050 = cheshire.parse_string.call(null,inst_26049,true);var state_26052__$1 = state_26052;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26052__$1,inst_26050);
} else
{if((state_val_26053 === (1)))
{var inst_26045 = ("http://www.omdbapi.com/?t="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(q));var inst_26046 = cljs_async.http_get.call(null,inst_26045);var state_26052__$1 = state_26052;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26052__$1,(2),inst_26046);
} else
{return null;
}
}
});})(c__14217__auto__))
;return ((function (switch__14161__auto__,c__14217__auto__){
return (function() {
var state_machine__14162__auto__ = null;
var state_machine__14162__auto____0 = (function (){var statearr_26057 = [null,null,null,null,null,null,null];(statearr_26057[(0)] = state_machine__14162__auto__);
(statearr_26057[(1)] = (1));
return statearr_26057;
});
var state_machine__14162__auto____1 = (function (state_26052){while(true){
var ret_value__14163__auto__ = (function (){try{while(true){
var result__14164__auto__ = switch__14161__auto__.call(null,state_26052);if(cljs.core.keyword_identical_QMARK_.call(null,result__14164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14164__auto__;
}
break;
}
}catch (e26058){if((e26058 instanceof Object))
{var ex__14165__auto__ = e26058;var statearr_26059_26061 = state_26052;(statearr_26059_26061[(5)] = ex__14165__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26052);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26058;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26062 = state_26052;
state_26052 = G__26062;
continue;
}
} else
{return ret_value__14163__auto__;
}
break;
}
});
state_machine__14162__auto__ = function(state_26052){
switch(arguments.length){
case 0:
return state_machine__14162__auto____0.call(this);
case 1:
return state_machine__14162__auto____1.call(this,state_26052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14162__auto____0;
state_machine__14162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14162__auto____1;
return state_machine__14162__auto__;
})()
;})(switch__14161__auto__,c__14217__auto__))
})();var state__14219__auto__ = (function (){var statearr_26060 = f__14218__auto__.call(null);(statearr_26060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14217__auto__);
return statearr_26060;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14219__auto__);
});})(c__14217__auto__))
);
return c__14217__auto__;
});
cljs_async.omdb_item = (function omdb_item(id){var c__14217__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14217__auto__){
return (function (){var f__14218__auto__ = (function (){var switch__14161__auto__ = ((function (c__14217__auto__){
return (function (state_26086){var state_val_26087 = (state_26086[(1)]);if((state_val_26087 === (2)))
{var inst_26082 = (state_26086[(2)]);var inst_26083 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_26082);var inst_26084 = cheshire.parse_string.call(null,inst_26083,true);var state_26086__$1 = state_26086;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26086__$1,inst_26084);
} else
{if((state_val_26087 === (1)))
{var inst_26079 = ("http://www.omdbapi.com/?tomatoes=true&i="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));var inst_26080 = cljs_async.http_get.call(null,inst_26079);var state_26086__$1 = state_26086;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26086__$1,(2),inst_26080);
} else
{return null;
}
}
});})(c__14217__auto__))
;return ((function (switch__14161__auto__,c__14217__auto__){
return (function() {
var state_machine__14162__auto__ = null;
var state_machine__14162__auto____0 = (function (){var statearr_26091 = [null,null,null,null,null,null,null];(statearr_26091[(0)] = state_machine__14162__auto__);
(statearr_26091[(1)] = (1));
return statearr_26091;
});
var state_machine__14162__auto____1 = (function (state_26086){while(true){
var ret_value__14163__auto__ = (function (){try{while(true){
var result__14164__auto__ = switch__14161__auto__.call(null,state_26086);if(cljs.core.keyword_identical_QMARK_.call(null,result__14164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14164__auto__;
}
break;
}
}catch (e26092){if((e26092 instanceof Object))
{var ex__14165__auto__ = e26092;var statearr_26093_26095 = state_26086;(statearr_26093_26095[(5)] = ex__14165__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26086);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26092;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26096 = state_26086;
state_26086 = G__26096;
continue;
}
} else
{return ret_value__14163__auto__;
}
break;
}
});
state_machine__14162__auto__ = function(state_26086){
switch(arguments.length){
case 0:
return state_machine__14162__auto____0.call(this);
case 1:
return state_machine__14162__auto____1.call(this,state_26086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14162__auto____0;
state_machine__14162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14162__auto____1;
return state_machine__14162__auto__;
})()
;})(switch__14161__auto__,c__14217__auto__))
})();var state__14219__auto__ = (function (){var statearr_26094 = f__14218__auto__.call(null);(statearr_26094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14217__auto__);
return statearr_26094;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14219__auto__);
});})(c__14217__auto__))
);
return c__14217__auto__;
});
var c__14217__auto___26111 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14217__auto___26111){
return (function (){var f__14218__auto__ = (function (){var switch__14161__auto__ = ((function (c__14217__auto___26111){
return (function (state_26102){var state_val_26103 = (state_26102[(1)]);if((state_val_26103 === (2)))
{var inst_26099 = (state_26102[(2)]);var inst_26100 = cljs.core.println.call(null,inst_26099);var state_26102__$1 = state_26102;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26102__$1,inst_26100);
} else
{if((state_val_26103 === (1)))
{var inst_26097 = cljs_async.omdb_by_title.call(null,"the+matrix");var state_26102__$1 = state_26102;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26102__$1,(2),inst_26097);
} else
{return null;
}
}
});})(c__14217__auto___26111))
;return ((function (switch__14161__auto__,c__14217__auto___26111){
return (function() {
var state_machine__14162__auto__ = null;
var state_machine__14162__auto____0 = (function (){var statearr_26107 = [null,null,null,null,null,null,null];(statearr_26107[(0)] = state_machine__14162__auto__);
(statearr_26107[(1)] = (1));
return statearr_26107;
});
var state_machine__14162__auto____1 = (function (state_26102){while(true){
var ret_value__14163__auto__ = (function (){try{while(true){
var result__14164__auto__ = switch__14161__auto__.call(null,state_26102);if(cljs.core.keyword_identical_QMARK_.call(null,result__14164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14164__auto__;
}
break;
}
}catch (e26108){if((e26108 instanceof Object))
{var ex__14165__auto__ = e26108;var statearr_26109_26112 = state_26102;(statearr_26109_26112[(5)] = ex__14165__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26102);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26108;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26113 = state_26102;
state_26102 = G__26113;
continue;
}
} else
{return ret_value__14163__auto__;
}
break;
}
});
state_machine__14162__auto__ = function(state_26102){
switch(arguments.length){
case 0:
return state_machine__14162__auto____0.call(this);
case 1:
return state_machine__14162__auto____1.call(this,state_26102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14162__auto____0;
state_machine__14162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14162__auto____1;
return state_machine__14162__auto__;
})()
;})(switch__14161__auto__,c__14217__auto___26111))
})();var state__14219__auto__ = (function (){var statearr_26110 = f__14218__auto__.call(null);(statearr_26110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14217__auto___26111);
return statearr_26110;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14219__auto__);
});})(c__14217__auto___26111))
);
var c__14217__auto___26128 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14217__auto___26128){
return (function (){var f__14218__auto__ = (function (){var switch__14161__auto__ = ((function (c__14217__auto___26128){
return (function (state_26119){var state_val_26120 = (state_26119[(1)]);if((state_val_26120 === (2)))
{var inst_26116 = (state_26119[(2)]);var inst_26117 = cljs.core.println.call(null,inst_26116);var state_26119__$1 = state_26119;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26119__$1,inst_26117);
} else
{if((state_val_26120 === (1)))
{var inst_26114 = cljs_async.omdb_item.call(null,"tt1285016");var state_26119__$1 = state_26119;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26119__$1,(2),inst_26114);
} else
{return null;
}
}
});})(c__14217__auto___26128))
;return ((function (switch__14161__auto__,c__14217__auto___26128){
return (function() {
var state_machine__14162__auto__ = null;
var state_machine__14162__auto____0 = (function (){var statearr_26124 = [null,null,null,null,null,null,null];(statearr_26124[(0)] = state_machine__14162__auto__);
(statearr_26124[(1)] = (1));
return statearr_26124;
});
var state_machine__14162__auto____1 = (function (state_26119){while(true){
var ret_value__14163__auto__ = (function (){try{while(true){
var result__14164__auto__ = switch__14161__auto__.call(null,state_26119);if(cljs.core.keyword_identical_QMARK_.call(null,result__14164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14164__auto__;
}
break;
}
}catch (e26125){if((e26125 instanceof Object))
{var ex__14165__auto__ = e26125;var statearr_26126_26129 = state_26119;(statearr_26126_26129[(5)] = ex__14165__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26119);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26125;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26130 = state_26119;
state_26119 = G__26130;
continue;
}
} else
{return ret_value__14163__auto__;
}
break;
}
});
state_machine__14162__auto__ = function(state_26119){
switch(arguments.length){
case 0:
return state_machine__14162__auto____0.call(this);
case 1:
return state_machine__14162__auto____1.call(this,state_26119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14162__auto____0;
state_machine__14162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14162__auto____1;
return state_machine__14162__auto__;
})()
;})(switch__14161__auto__,c__14217__auto___26128))
})();var state__14219__auto__ = (function (){var statearr_26127 = f__14218__auto__.call(null);(statearr_26127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14217__auto___26128);
return statearr_26127;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14219__auto__);
});})(c__14217__auto___26128))
);
var c__14217__auto___26171 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14217__auto___26171){
return (function (){var f__14218__auto__ = (function (){var switch__14161__auto__ = ((function (c__14217__auto___26171){
return (function (state_26153){var state_val_26154 = (state_26153[(1)]);if((state_val_26154 === (7)))
{var inst_26133 = (state_26153[(7)]);var inst_26139 = (state_26153[(2)]);var inst_26140 = (inst_26133 + (1));var inst_26133__$1 = inst_26140;var state_26153__$1 = (function (){var statearr_26155 = state_26153;(statearr_26155[(7)] = inst_26133__$1);
(statearr_26155[(8)] = inst_26139);
return statearr_26155;
})();var statearr_26156_26172 = state_26153__$1;(statearr_26156_26172[(2)] = null);
(statearr_26156_26172[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26154 === (6)))
{var inst_26144 = (state_26153[(2)]);var state_26153__$1 = state_26153;var statearr_26157_26173 = state_26153__$1;(statearr_26157_26173[(2)] = inst_26144);
(statearr_26157_26173[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26154 === (5)))
{var state_26153__$1 = state_26153;var statearr_26158_26174 = state_26153__$1;(statearr_26158_26174[(2)] = null);
(statearr_26158_26174[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26154 === (4)))
{var inst_26137 = cljs_async.people_by_id.call(null,(3144));var state_26153__$1 = state_26153;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26153__$1,(7),inst_26137);
} else
{if((state_val_26154 === (3)))
{var inst_26132 = (state_26153[(9)]);var inst_26146 = (state_26153[(2)]);var inst_26147 = (new Date());var inst_26148 = inst_26147.getTime();var inst_26149 = (inst_26148 - inst_26132);var inst_26150 = ("Elapsed time: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26149)+" msecs");var inst_26151 = cljs.core.prn.call(null,inst_26150);var state_26153__$1 = (function (){var statearr_26159 = state_26153;(statearr_26159[(10)] = inst_26151);
return statearr_26159;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26153__$1,inst_26146);
} else
{if((state_val_26154 === (2)))
{var inst_26133 = (state_26153[(7)]);var inst_26135 = (inst_26133 < (10));var state_26153__$1 = state_26153;if(cljs.core.truth_(inst_26135))
{var statearr_26160_26175 = state_26153__$1;(statearr_26160_26175[(1)] = (4));
} else
{var statearr_26161_26176 = state_26153__$1;(statearr_26161_26176[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26154 === (1)))
{var inst_26131 = (new Date());var inst_26132 = inst_26131.getTime();var inst_26133 = (0);var state_26153__$1 = (function (){var statearr_26162 = state_26153;(statearr_26162[(9)] = inst_26132);
(statearr_26162[(7)] = inst_26133);
return statearr_26162;
})();var statearr_26163_26177 = state_26153__$1;(statearr_26163_26177[(2)] = null);
(statearr_26163_26177[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__14217__auto___26171))
;return ((function (switch__14161__auto__,c__14217__auto___26171){
return (function() {
var state_machine__14162__auto__ = null;
var state_machine__14162__auto____0 = (function (){var statearr_26167 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26167[(0)] = state_machine__14162__auto__);
(statearr_26167[(1)] = (1));
return statearr_26167;
});
var state_machine__14162__auto____1 = (function (state_26153){while(true){
var ret_value__14163__auto__ = (function (){try{while(true){
var result__14164__auto__ = switch__14161__auto__.call(null,state_26153);if(cljs.core.keyword_identical_QMARK_.call(null,result__14164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14164__auto__;
}
break;
}
}catch (e26168){if((e26168 instanceof Object))
{var ex__14165__auto__ = e26168;var statearr_26169_26178 = state_26153;(statearr_26169_26178[(5)] = ex__14165__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26153);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26168;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26179 = state_26153;
state_26153 = G__26179;
continue;
}
} else
{return ret_value__14163__auto__;
}
break;
}
});
state_machine__14162__auto__ = function(state_26153){
switch(arguments.length){
case 0:
return state_machine__14162__auto____0.call(this);
case 1:
return state_machine__14162__auto____1.call(this,state_26153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14162__auto____0;
state_machine__14162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14162__auto____1;
return state_machine__14162__auto__;
})()
;})(switch__14161__auto__,c__14217__auto___26171))
})();var state__14219__auto__ = (function (){var statearr_26170 = f__14218__auto__.call(null);(statearr_26170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14217__auto___26171);
return statearr_26170;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14219__auto__);
});})(c__14217__auto___26171))
);
var c__14217__auto___26270 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14217__auto___26270){
return (function (){var f__14218__auto__ = (function (){var switch__14161__auto__ = ((function (c__14217__auto___26270){
return (function (state_26238){var state_val_26239 = (state_26238[(1)]);if((state_val_26239 === (7)))
{var inst_26198 = (state_26238[(7)]);var inst_26195 = (state_26238[(8)]);var inst_26197 = (state_26238[(9)]);var inst_26196 = (state_26238[(10)]);var inst_26205 = (state_26238[(2)]);var inst_26206 = (inst_26198 + (1));var tmp26240 = inst_26195;var tmp26241 = inst_26197;var tmp26242 = inst_26196;var inst_26195__$1 = tmp26240;var inst_26196__$1 = tmp26242;var inst_26197__$1 = tmp26241;var inst_26198__$1 = inst_26206;var state_26238__$1 = (function (){var statearr_26243 = state_26238;(statearr_26243[(7)] = inst_26198__$1);
(statearr_26243[(8)] = inst_26195__$1);
(statearr_26243[(11)] = inst_26205);
(statearr_26243[(9)] = inst_26197__$1);
(statearr_26243[(10)] = inst_26196__$1);
return statearr_26243;
})();var statearr_26244_26271 = state_26238__$1;(statearr_26244_26271[(2)] = null);
(statearr_26244_26271[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26239 === (1)))
{var inst_26181 = (state_26238[(12)]);var inst_26180 = (new Date());var inst_26181__$1 = inst_26180.getTime();var inst_26186 = (function (){var start__12390__auto__ = inst_26181__$1;return ((function (start__12390__auto__,inst_26181,inst_26180,inst_26181__$1,state_val_26239,c__14217__auto___26270){
return (function iter__26182(s__26183){return (new cljs.core.LazySeq(null,((function (start__12390__auto__,inst_26181,inst_26180,inst_26181__$1,state_val_26239,c__14217__auto___26270){
return (function (){var s__26183__$1 = s__26183;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26183__$1);if(temp__4126__auto__)
{var s__26183__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26183__$2))
{var c__12232__auto__ = cljs.core.chunk_first.call(null,s__26183__$2);var size__12233__auto__ = cljs.core.count.call(null,c__12232__auto__);var b__26185 = cljs.core.chunk_buffer.call(null,size__12233__auto__);if((function (){var i__26184 = (0);while(true){
if((i__26184 < size__12233__auto__))
{var x = cljs.core._nth.call(null,c__12232__auto__,i__26184);cljs.core.chunk_append.call(null,b__26185,cljs_async.people_by_id.call(null,(3144)));
{
var G__26272 = (i__26184 + (1));
i__26184 = G__26272;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26185),iter__26182.call(null,cljs.core.chunk_rest.call(null,s__26183__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26185),null);
}
} else
{var x = cljs.core.first.call(null,s__26183__$2);return cljs.core.cons.call(null,cljs_async.people_by_id.call(null,(3144)),iter__26182.call(null,cljs.core.rest.call(null,s__26183__$2)));
}
} else
{return null;
}
break;
}
});})(start__12390__auto__,inst_26181,inst_26180,inst_26181__$1,state_val_26239,c__14217__auto___26270))
,null,null));
});
;})(start__12390__auto__,inst_26181,inst_26180,inst_26181__$1,state_val_26239,c__14217__auto___26270))
})();var inst_26187 = cljs.core.range.call(null,(10));var inst_26188 = inst_26186.call(null,inst_26187);var inst_26189 = cljs.core.doall.call(null,inst_26188);var inst_26194 = cljs.core.seq.call(null,inst_26189);var inst_26195 = inst_26194;var inst_26196 = null;var inst_26197 = (0);var inst_26198 = (0);var state_26238__$1 = (function (){var statearr_26245 = state_26238;(statearr_26245[(7)] = inst_26198);
(statearr_26245[(8)] = inst_26195);
(statearr_26245[(9)] = inst_26197);
(statearr_26245[(10)] = inst_26196);
(statearr_26245[(12)] = inst_26181__$1);
return statearr_26245;
})();var statearr_26246_26273 = state_26238__$1;(statearr_26246_26273[(2)] = null);
(statearr_26246_26273[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26239 === (4)))
{var inst_26198 = (state_26238[(7)]);var inst_26196 = (state_26238[(10)]);var inst_26203 = cljs.core._nth.call(null,inst_26196,inst_26198);var state_26238__$1 = state_26238;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26238__$1,(7),inst_26203);
} else
{if((state_val_26239 === (13)))
{var inst_26224 = (state_26238[(2)]);var state_26238__$1 = state_26238;var statearr_26247_26274 = state_26238__$1;(statearr_26247_26274[(2)] = inst_26224);
(statearr_26247_26274[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26239 === (6)))
{var inst_26229 = (state_26238[(2)]);var state_26238__$1 = state_26238;var statearr_26248_26275 = state_26238__$1;(statearr_26248_26275[(2)] = inst_26229);
(statearr_26248_26275[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26239 === (3)))
{var inst_26181 = (state_26238[(12)]);var inst_26231 = (state_26238[(2)]);var inst_26232 = (new Date());var inst_26233 = inst_26232.getTime();var inst_26234 = (inst_26233 - inst_26181);var inst_26235 = ("Elapsed time: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26234)+" msecs");var inst_26236 = cljs.core.prn.call(null,inst_26235);var state_26238__$1 = (function (){var statearr_26249 = state_26238;(statearr_26249[(13)] = inst_26236);
return statearr_26249;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26238__$1,inst_26231);
} else
{if((state_val_26239 === (12)))
{var inst_26209 = (state_26238[(14)]);var inst_26218 = cljs.core.first.call(null,inst_26209);var state_26238__$1 = state_26238;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26238__$1,(14),inst_26218);
} else
{if((state_val_26239 === (2)))
{var inst_26198 = (state_26238[(7)]);var inst_26197 = (state_26238[(9)]);var inst_26200 = (inst_26198 < inst_26197);var inst_26201 = inst_26200;var state_26238__$1 = state_26238;if(cljs.core.truth_(inst_26201))
{var statearr_26250_26276 = state_26238__$1;(statearr_26250_26276[(1)] = (4));
} else
{var statearr_26251_26277 = state_26238__$1;(statearr_26251_26277[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26239 === (11)))
{var inst_26209 = (state_26238[(14)]);var inst_26213 = cljs.core.chunk_first.call(null,inst_26209);var inst_26214 = cljs.core.chunk_rest.call(null,inst_26209);var inst_26215 = cljs.core.count.call(null,inst_26213);var inst_26195 = inst_26214;var inst_26196 = inst_26213;var inst_26197 = inst_26215;var inst_26198 = (0);var state_26238__$1 = (function (){var statearr_26252 = state_26238;(statearr_26252[(7)] = inst_26198);
(statearr_26252[(8)] = inst_26195);
(statearr_26252[(9)] = inst_26197);
(statearr_26252[(10)] = inst_26196);
return statearr_26252;
})();var statearr_26253_26278 = state_26238__$1;(statearr_26253_26278[(2)] = null);
(statearr_26253_26278[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26239 === (9)))
{var state_26238__$1 = state_26238;var statearr_26254_26279 = state_26238__$1;(statearr_26254_26279[(2)] = null);
(statearr_26254_26279[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26239 === (5)))
{var inst_26195 = (state_26238[(8)]);var inst_26209 = (state_26238[(14)]);var inst_26209__$1 = cljs.core.seq.call(null,inst_26195);var state_26238__$1 = (function (){var statearr_26255 = state_26238;(statearr_26255[(14)] = inst_26209__$1);
return statearr_26255;
})();if(inst_26209__$1)
{var statearr_26256_26280 = state_26238__$1;(statearr_26256_26280[(1)] = (8));
} else
{var statearr_26257_26281 = state_26238__$1;(statearr_26257_26281[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26239 === (14)))
{var inst_26209 = (state_26238[(14)]);var inst_26220 = (state_26238[(2)]);var inst_26221 = cljs.core.next.call(null,inst_26209);var inst_26195 = inst_26221;var inst_26196 = null;var inst_26197 = (0);var inst_26198 = (0);var state_26238__$1 = (function (){var statearr_26258 = state_26238;(statearr_26258[(7)] = inst_26198);
(statearr_26258[(8)] = inst_26195);
(statearr_26258[(9)] = inst_26197);
(statearr_26258[(15)] = inst_26220);
(statearr_26258[(10)] = inst_26196);
return statearr_26258;
})();var statearr_26259_26282 = state_26238__$1;(statearr_26259_26282[(2)] = null);
(statearr_26259_26282[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26239 === (10)))
{var inst_26227 = (state_26238[(2)]);var state_26238__$1 = state_26238;var statearr_26260_26283 = state_26238__$1;(statearr_26260_26283[(2)] = inst_26227);
(statearr_26260_26283[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26239 === (8)))
{var inst_26209 = (state_26238[(14)]);var inst_26211 = cljs.core.chunked_seq_QMARK_.call(null,inst_26209);var state_26238__$1 = state_26238;if(inst_26211)
{var statearr_26261_26284 = state_26238__$1;(statearr_26261_26284[(1)] = (11));
} else
{var statearr_26262_26285 = state_26238__$1;(statearr_26262_26285[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14217__auto___26270))
;return ((function (switch__14161__auto__,c__14217__auto___26270){
return (function() {
var state_machine__14162__auto__ = null;
var state_machine__14162__auto____0 = (function (){var statearr_26266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26266[(0)] = state_machine__14162__auto__);
(statearr_26266[(1)] = (1));
return statearr_26266;
});
var state_machine__14162__auto____1 = (function (state_26238){while(true){
var ret_value__14163__auto__ = (function (){try{while(true){
var result__14164__auto__ = switch__14161__auto__.call(null,state_26238);if(cljs.core.keyword_identical_QMARK_.call(null,result__14164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14164__auto__;
}
break;
}
}catch (e26267){if((e26267 instanceof Object))
{var ex__14165__auto__ = e26267;var statearr_26268_26286 = state_26238;(statearr_26268_26286[(5)] = ex__14165__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26238);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26267;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26287 = state_26238;
state_26238 = G__26287;
continue;
}
} else
{return ret_value__14163__auto__;
}
break;
}
});
state_machine__14162__auto__ = function(state_26238){
switch(arguments.length){
case 0:
return state_machine__14162__auto____0.call(this);
case 1:
return state_machine__14162__auto____1.call(this,state_26238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14162__auto____0;
state_machine__14162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14162__auto____1;
return state_machine__14162__auto__;
})()
;})(switch__14161__auto__,c__14217__auto___26270))
})();var state__14219__auto__ = (function (){var statearr_26269 = f__14218__auto__.call(null);(statearr_26269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14217__auto___26270);
return statearr_26269;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14219__auto__);
});})(c__14217__auto___26270))
);

//# sourceMappingURL=cljs_async.js.map
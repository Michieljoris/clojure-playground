// Compiled by ClojureScript 0.0-2371
goog.provide('test_react.cljs_async');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('cljs.core.async');
goog.require('goog.net.XhrIo');
goog.require('clojure.walk');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
alert("We're running ClojureScript");
test_react.cljs_async.c = cljs.core.async.chan.call(null);
cljs.core.async.put_BANG_.call(null,test_react.cljs_async.c,(42));
cljs.core.async.take_BANG_.call(null,test_react.cljs_async.c,(function (x){return cljs.core.println.call(null,x);
}));
var c__14212__auto___17192 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14212__auto___17192){
return (function (){var f__14213__auto__ = (function (){var switch__14156__auto__ = ((function (c__14212__auto___17192){
return (function (state_17183){var state_val_17184 = (state_17183[(1)]);if((state_val_17184 === (1)))
{var state_17183__$1 = state_17183;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17183__$1,(32));
} else
{return null;
}
});})(c__14212__auto___17192))
;return ((function (switch__14156__auto__,c__14212__auto___17192){
return (function() {
var state_machine__14157__auto__ = null;
var state_machine__14157__auto____0 = (function (){var statearr_17188 = [null,null,null,null,null,null,null];(statearr_17188[(0)] = state_machine__14157__auto__);
(statearr_17188[(1)] = (1));
return statearr_17188;
});
var state_machine__14157__auto____1 = (function (state_17183){while(true){
var ret_value__14158__auto__ = (function (){try{while(true){
var result__14159__auto__ = switch__14156__auto__.call(null,state_17183);if(cljs.core.keyword_identical_QMARK_.call(null,result__14159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14159__auto__;
}
break;
}
}catch (e17189){if((e17189 instanceof Object))
{var ex__14160__auto__ = e17189;var statearr_17190_17193 = state_17183;(statearr_17190_17193[(5)] = ex__14160__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17183);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17189;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17194 = state_17183;
state_17183 = G__17194;
continue;
}
} else
{return ret_value__14158__auto__;
}
break;
}
});
state_machine__14157__auto__ = function(state_17183){
switch(arguments.length){
case 0:
return state_machine__14157__auto____0.call(this);
case 1:
return state_machine__14157__auto____1.call(this,state_17183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14157__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14157__auto____0;
state_machine__14157__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14157__auto____1;
return state_machine__14157__auto__;
})()
;})(switch__14156__auto__,c__14212__auto___17192))
})();var state__14214__auto__ = (function (){var statearr_17191 = f__14213__auto__.call(null);(statearr_17191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14212__auto___17192);
return statearr_17191;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14214__auto__);
});})(c__14212__auto___17192))
);
cljs.core.println.call(null,cljs.core.async.take_BANG_);
test_react.cljs_async.canvas = document.getElementById("canvas");
test_react.cljs_async.colors = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#FF0000","#00FF00","#0000FF","#00FFFF","#FFFF00","#FF00FF"], null);
test_react.cljs_async.make_cell = (function make_cell(canvas,x,y){var ctx = document.getElementById(canvas).getContext("2d");var c__14212__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14212__auto__,ctx){
return (function (){var f__14213__auto__ = (function (){var switch__14156__auto__ = ((function (c__14212__auto__,ctx){
return (function (state_17244){var state_val_17245 = (state_17244[(1)]);if((state_val_17245 === (7)))
{var inst_17236 = (state_17244[(2)]);var state_17244__$1 = (function (){var statearr_17246 = state_17244;(statearr_17246[(7)] = inst_17236);
return statearr_17246;
})();var statearr_17247_17261 = state_17244__$1;(statearr_17247_17261[(2)] = null);
(statearr_17247_17261[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17245 === (6)))
{var inst_17240 = (state_17244[(2)]);var state_17244__$1 = state_17244;var statearr_17248_17262 = state_17244__$1;(statearr_17248_17262[(2)] = inst_17240);
(statearr_17248_17262[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17245 === (5)))
{var state_17244__$1 = state_17244;var statearr_17249_17263 = state_17244__$1;(statearr_17249_17263[(2)] = null);
(statearr_17249_17263[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17245 === (4)))
{var inst_17230 = cljs.core.rand_nth.call(null,test_react.cljs_async.colors);var inst_17231 = ctx.fillStyle = inst_17230;var inst_17232 = ctx.fillRect(x,y,(10),(10));var inst_17233 = cljs.core.rand_int.call(null,(1000));var inst_17234 = cljs.core.async.timeout.call(null,inst_17233);var state_17244__$1 = (function (){var statearr_17250 = state_17244;(statearr_17250[(8)] = inst_17231);
(statearr_17250[(9)] = inst_17232);
return statearr_17250;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17244__$1,(7),inst_17234);
} else
{if((state_val_17245 === (3)))
{var inst_17242 = (state_17244[(2)]);var state_17244__$1 = state_17244;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17244__$1,inst_17242);
} else
{if((state_val_17245 === (2)))
{var state_17244__$1 = state_17244;var statearr_17251_17264 = state_17244__$1;(statearr_17251_17264[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17245 === (1)))
{var state_17244__$1 = state_17244;var statearr_17253_17265 = state_17244__$1;(statearr_17253_17265[(2)] = null);
(statearr_17253_17265[(1)] = (2));
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
});})(c__14212__auto__,ctx))
;return ((function (switch__14156__auto__,c__14212__auto__,ctx){
return (function() {
var state_machine__14157__auto__ = null;
var state_machine__14157__auto____0 = (function (){var statearr_17257 = [null,null,null,null,null,null,null,null,null,null];(statearr_17257[(0)] = state_machine__14157__auto__);
(statearr_17257[(1)] = (1));
return statearr_17257;
});
var state_machine__14157__auto____1 = (function (state_17244){while(true){
var ret_value__14158__auto__ = (function (){try{while(true){
var result__14159__auto__ = switch__14156__auto__.call(null,state_17244);if(cljs.core.keyword_identical_QMARK_.call(null,result__14159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14159__auto__;
}
break;
}
}catch (e17258){if((e17258 instanceof Object))
{var ex__14160__auto__ = e17258;var statearr_17259_17266 = state_17244;(statearr_17259_17266[(5)] = ex__14160__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17244);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17258;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17267 = state_17244;
state_17244 = G__17267;
continue;
}
} else
{return ret_value__14158__auto__;
}
break;
}
});
state_machine__14157__auto__ = function(state_17244){
switch(arguments.length){
case 0:
return state_machine__14157__auto____0.call(this);
case 1:
return state_machine__14157__auto____1.call(this,state_17244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14157__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14157__auto____0;
state_machine__14157__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14157__auto____1;
return state_machine__14157__auto__;
})()
;})(switch__14156__auto__,c__14212__auto__,ctx))
})();var state__14214__auto__ = (function (){var statearr_17260 = f__14213__auto__.call(null);(statearr_17260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14212__auto__);
return statearr_17260;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14214__auto__);
});})(c__14212__auto__,ctx))
);
return c__14212__auto__;
});
test_react.cljs_async.make_scene = (function make_scene(canvas,rows,cols){var n__12365__auto__ = cols;var x = (0);while(true){
if((x < n__12365__auto__))
{var n__12365__auto___17268__$1 = rows;var y_17269 = (0);while(true){
if((y_17269 < n__12365__auto___17268__$1))
{test_react.cljs_async.make_cell.call(null,canvas,((10) * x),((10) * y_17269));
{
var G__17270 = (y_17269 + (1));
y_17269 = G__17270;
continue;
}
} else
{}
break;
}
{
var G__17271 = (x + (1));
x = G__17271;
continue;
}
} else
{return null;
}
break;
}
});
test_react.cljs_async.make_scene.call(null,"canvas",(100),(100));
test_react.cljs_async.fixup_keys = (function fixup_keys(x){return clojure.walk.prewalk.call(null,(function (x__$1){if(cljs.core.map_QMARK_.call(null,x__$1))
{return cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.keys.call(null,x__$1)),cljs.core.vals.call(null,x__$1));
} else
{return x__$1;
}
}),x);
});
test_react.cljs_async.http_get = (function http_get(url){var c = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (c){
return (function (e){return cljs.core.async.put_BANG_.call(null,c,test_react.cljs_async.fixup_keys.call(null,cljs.core.js__GT_clj.call(null,e.target.getResponseJson())));
});})(c))
);
return c;
});
test_react.cljs_async.key = "b4cb6cd7a349b47ccfbb80e05a601a7c";
test_react.cljs_async.request_and_process = (function request_and_process(url){var c__14212__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14212__auto__){
return (function (){var f__14213__auto__ = (function (){var switch__14156__auto__ = ((function (c__14212__auto__){
return (function (state_17291){var state_val_17292 = (state_17291[(1)]);if((state_val_17292 === (2)))
{var inst_17289 = (state_17291[(2)]);var state_17291__$1 = state_17291;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17291__$1,inst_17289);
} else
{if((state_val_17292 === (1)))
{var inst_17286 = ("http://api.themoviedb.org/3/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"api_key="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test_react.cljs_async.key));var inst_17287 = test_react.cljs_async.http_get.call(null,inst_17286);var state_17291__$1 = state_17291;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17291__$1,(2),inst_17287);
} else
{return null;
}
}
});})(c__14212__auto__))
;return ((function (switch__14156__auto__,c__14212__auto__){
return (function() {
var state_machine__14157__auto__ = null;
var state_machine__14157__auto____0 = (function (){var statearr_17296 = [null,null,null,null,null,null,null];(statearr_17296[(0)] = state_machine__14157__auto__);
(statearr_17296[(1)] = (1));
return statearr_17296;
});
var state_machine__14157__auto____1 = (function (state_17291){while(true){
var ret_value__14158__auto__ = (function (){try{while(true){
var result__14159__auto__ = switch__14156__auto__.call(null,state_17291);if(cljs.core.keyword_identical_QMARK_.call(null,result__14159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14159__auto__;
}
break;
}
}catch (e17297){if((e17297 instanceof Object))
{var ex__14160__auto__ = e17297;var statearr_17298_17300 = state_17291;(statearr_17298_17300[(5)] = ex__14160__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17291);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17297;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17301 = state_17291;
state_17291 = G__17301;
continue;
}
} else
{return ret_value__14158__auto__;
}
break;
}
});
state_machine__14157__auto__ = function(state_17291){
switch(arguments.length){
case 0:
return state_machine__14157__auto____0.call(this);
case 1:
return state_machine__14157__auto____1.call(this,state_17291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14157__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14157__auto____0;
state_machine__14157__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14157__auto____1;
return state_machine__14157__auto__;
})()
;})(switch__14156__auto__,c__14212__auto__))
})();var state__14214__auto__ = (function (){var statearr_17299 = f__14213__auto__.call(null);(statearr_17299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14212__auto__);
return statearr_17299;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14214__auto__);
});})(c__14212__auto__))
);
return c__14212__auto__;
});
test_react.cljs_async.latest_movies = (function latest_movies(){return test_react.cljs_async.request_and_process.call(null,"movies/latest?");
});
test_react.cljs_async.top_rated_movies = (function top_rated_movies(){return test_react.cljs_async.request_and_process.call(null,"movie/top_rated?");
});
var c__14212__auto___17316 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14212__auto___17316){
return (function (){var f__14213__auto__ = (function (){var switch__14156__auto__ = ((function (c__14212__auto___17316){
return (function (state_17307){var state_val_17308 = (state_17307[(1)]);if((state_val_17308 === (2)))
{var inst_17304 = (state_17307[(2)]);var inst_17305 = cljs.core.println.call(null,inst_17304);var state_17307__$1 = state_17307;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17307__$1,inst_17305);
} else
{if((state_val_17308 === (1)))
{var inst_17302 = test_react.cljs_async.top_rated_movies.call(null);var state_17307__$1 = state_17307;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17307__$1,(2),inst_17302);
} else
{return null;
}
}
});})(c__14212__auto___17316))
;return ((function (switch__14156__auto__,c__14212__auto___17316){
return (function() {
var state_machine__14157__auto__ = null;
var state_machine__14157__auto____0 = (function (){var statearr_17312 = [null,null,null,null,null,null,null];(statearr_17312[(0)] = state_machine__14157__auto__);
(statearr_17312[(1)] = (1));
return statearr_17312;
});
var state_machine__14157__auto____1 = (function (state_17307){while(true){
var ret_value__14158__auto__ = (function (){try{while(true){
var result__14159__auto__ = switch__14156__auto__.call(null,state_17307);if(cljs.core.keyword_identical_QMARK_.call(null,result__14159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14159__auto__;
}
break;
}
}catch (e17313){if((e17313 instanceof Object))
{var ex__14160__auto__ = e17313;var statearr_17314_17317 = state_17307;(statearr_17314_17317[(5)] = ex__14160__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17307);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17313;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17318 = state_17307;
state_17307 = G__17318;
continue;
}
} else
{return ret_value__14158__auto__;
}
break;
}
});
state_machine__14157__auto__ = function(state_17307){
switch(arguments.length){
case 0:
return state_machine__14157__auto____0.call(this);
case 1:
return state_machine__14157__auto____1.call(this,state_17307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14157__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14157__auto____0;
state_machine__14157__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14157__auto____1;
return state_machine__14157__auto__;
})()
;})(switch__14156__auto__,c__14212__auto___17316))
})();var state__14214__auto__ = (function (){var statearr_17315 = f__14213__auto__.call(null);(statearr_17315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14212__auto___17316);
return statearr_17315;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14214__auto__);
});})(c__14212__auto___17316))
);
test_react.cljs_async.movie_by_id = (function movie_by_id(id){return test_react.cljs_async.request_and_process.call(null,("movie/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"?"));
});
var c__14212__auto___17333 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14212__auto___17333){
return (function (){var f__14213__auto__ = (function (){var switch__14156__auto__ = ((function (c__14212__auto___17333){
return (function (state_17324){var state_val_17325 = (state_17324[(1)]);if((state_val_17325 === (2)))
{var inst_17321 = (state_17324[(2)]);var inst_17322 = cljs.core.println.call(null,inst_17321);var state_17324__$1 = state_17324;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17324__$1,inst_17322);
} else
{if((state_val_17325 === (1)))
{var inst_17319 = test_react.cljs_async.movie_by_id.call(null,(238));var state_17324__$1 = state_17324;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17324__$1,(2),inst_17319);
} else
{return null;
}
}
});})(c__14212__auto___17333))
;return ((function (switch__14156__auto__,c__14212__auto___17333){
return (function() {
var state_machine__14157__auto__ = null;
var state_machine__14157__auto____0 = (function (){var statearr_17329 = [null,null,null,null,null,null,null];(statearr_17329[(0)] = state_machine__14157__auto__);
(statearr_17329[(1)] = (1));
return statearr_17329;
});
var state_machine__14157__auto____1 = (function (state_17324){while(true){
var ret_value__14158__auto__ = (function (){try{while(true){
var result__14159__auto__ = switch__14156__auto__.call(null,state_17324);if(cljs.core.keyword_identical_QMARK_.call(null,result__14159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14159__auto__;
}
break;
}
}catch (e17330){if((e17330 instanceof Object))
{var ex__14160__auto__ = e17330;var statearr_17331_17334 = state_17324;(statearr_17331_17334[(5)] = ex__14160__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17324);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17330;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17335 = state_17324;
state_17324 = G__17335;
continue;
}
} else
{return ret_value__14158__auto__;
}
break;
}
});
state_machine__14157__auto__ = function(state_17324){
switch(arguments.length){
case 0:
return state_machine__14157__auto____0.call(this);
case 1:
return state_machine__14157__auto____1.call(this,state_17324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14157__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14157__auto____0;
state_machine__14157__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14157__auto____1;
return state_machine__14157__auto__;
})()
;})(switch__14156__auto__,c__14212__auto___17333))
})();var state__14214__auto__ = (function (){var statearr_17332 = f__14213__auto__.call(null);(statearr_17332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14212__auto___17333);
return statearr_17332;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14214__auto__);
});})(c__14212__auto___17333))
);
test_react.cljs_async.movie_cast = (function movie_cast(id){return test_react.cljs_async.request_and_process.call(null,("movie/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/casts?"));
});
var c__14212__auto___17350 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14212__auto___17350){
return (function (){var f__14213__auto__ = (function (){var switch__14156__auto__ = ((function (c__14212__auto___17350){
return (function (state_17341){var state_val_17342 = (state_17341[(1)]);if((state_val_17342 === (2)))
{var inst_17338 = (state_17341[(2)]);var inst_17339 = cljs.core.println.call(null,inst_17338);var state_17341__$1 = state_17341;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17341__$1,inst_17339);
} else
{if((state_val_17342 === (1)))
{var inst_17336 = test_react.cljs_async.movie_cast.call(null,(238));var state_17341__$1 = state_17341;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17341__$1,(2),inst_17336);
} else
{return null;
}
}
});})(c__14212__auto___17350))
;return ((function (switch__14156__auto__,c__14212__auto___17350){
return (function() {
var state_machine__14157__auto__ = null;
var state_machine__14157__auto____0 = (function (){var statearr_17346 = [null,null,null,null,null,null,null];(statearr_17346[(0)] = state_machine__14157__auto__);
(statearr_17346[(1)] = (1));
return statearr_17346;
});
var state_machine__14157__auto____1 = (function (state_17341){while(true){
var ret_value__14158__auto__ = (function (){try{while(true){
var result__14159__auto__ = switch__14156__auto__.call(null,state_17341);if(cljs.core.keyword_identical_QMARK_.call(null,result__14159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14159__auto__;
}
break;
}
}catch (e17347){if((e17347 instanceof Object))
{var ex__14160__auto__ = e17347;var statearr_17348_17351 = state_17341;(statearr_17348_17351[(5)] = ex__14160__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17341);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17347;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17352 = state_17341;
state_17341 = G__17352;
continue;
}
} else
{return ret_value__14158__auto__;
}
break;
}
});
state_machine__14157__auto__ = function(state_17341){
switch(arguments.length){
case 0:
return state_machine__14157__auto____0.call(this);
case 1:
return state_machine__14157__auto____1.call(this,state_17341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14157__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14157__auto____0;
state_machine__14157__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14157__auto____1;
return state_machine__14157__auto__;
})()
;})(switch__14156__auto__,c__14212__auto___17350))
})();var state__14214__auto__ = (function (){var statearr_17349 = f__14213__auto__.call(null);(statearr_17349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14212__auto___17350);
return statearr_17349;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14214__auto__);
});})(c__14212__auto___17350))
);
test_react.cljs_async.people_by_id = (function people_by_id(id){return test_react.cljs_async.request_and_process.call(null,("person/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"?"));
});
var c__14212__auto___17367 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14212__auto___17367){
return (function (){var f__14213__auto__ = (function (){var switch__14156__auto__ = ((function (c__14212__auto___17367){
return (function (state_17358){var state_val_17359 = (state_17358[(1)]);if((state_val_17359 === (2)))
{var inst_17355 = (state_17358[(2)]);var inst_17356 = cljs.core.println.call(null,inst_17355);var state_17358__$1 = state_17358;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17358__$1,inst_17356);
} else
{if((state_val_17359 === (1)))
{var inst_17353 = test_react.cljs_async.people_by_id.call(null,(3144));var state_17358__$1 = state_17358;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17358__$1,(2),inst_17353);
} else
{return null;
}
}
});})(c__14212__auto___17367))
;return ((function (switch__14156__auto__,c__14212__auto___17367){
return (function() {
var state_machine__14157__auto__ = null;
var state_machine__14157__auto____0 = (function (){var statearr_17363 = [null,null,null,null,null,null,null];(statearr_17363[(0)] = state_machine__14157__auto__);
(statearr_17363[(1)] = (1));
return statearr_17363;
});
var state_machine__14157__auto____1 = (function (state_17358){while(true){
var ret_value__14158__auto__ = (function (){try{while(true){
var result__14159__auto__ = switch__14156__auto__.call(null,state_17358);if(cljs.core.keyword_identical_QMARK_.call(null,result__14159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14159__auto__;
}
break;
}
}catch (e17364){if((e17364 instanceof Object))
{var ex__14160__auto__ = e17364;var statearr_17365_17368 = state_17358;(statearr_17365_17368[(5)] = ex__14160__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17358);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17364;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17369 = state_17358;
state_17358 = G__17369;
continue;
}
} else
{return ret_value__14158__auto__;
}
break;
}
});
state_machine__14157__auto__ = function(state_17358){
switch(arguments.length){
case 0:
return state_machine__14157__auto____0.call(this);
case 1:
return state_machine__14157__auto____1.call(this,state_17358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14157__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14157__auto____0;
state_machine__14157__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14157__auto____1;
return state_machine__14157__auto__;
})()
;})(switch__14156__auto__,c__14212__auto___17367))
})();var state__14214__auto__ = (function (){var statearr_17366 = f__14213__auto__.call(null);(statearr_17366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14212__auto___17367);
return statearr_17366;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14214__auto__);
});})(c__14212__auto___17367))
);
test_react.cljs_async.avg = (function avg(col){return (cljs.core.reduce.call(null,cljs.core._PLUS_,(0),col) / cljs.core.count.call(null,col));
});
test_react.cljs_async.avg.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5)], null));
test_react.cljs_async.avg_cast_popularity = (function avg_cast_popularity(id){var c__14212__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14212__auto__){
return (function (){var f__14213__auto__ = (function (){var switch__14156__auto__ = ((function (c__14212__auto__){
return (function (state_17403){var state_val_17404 = (state_17403[(1)]);if((state_val_17404 === (3)))
{var inst_17393 = (state_17403[(2)]);var inst_17394 = new cljs.core.Keyword(null,"cast","cast",-1761029143).cljs$core$IFn$_invoke$arity$1(inst_17393);var inst_17395 = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),inst_17394);var inst_17396 = cljs.core.map.call(null,test_react.cljs_async.people_by_id,inst_17395);var inst_17397 = cljs.core.async.map.call(null,cljs.core.vector,inst_17396);var state_17403__$1 = state_17403;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17403__$1,(2),inst_17397);
} else
{if((state_val_17404 === (2)))
{var inst_17399 = (state_17403[(2)]);var inst_17400 = cljs.core.map.call(null,new cljs.core.Keyword(null,"popularity","popularity",924297410),inst_17399);var inst_17401 = test_react.cljs_async.avg.call(null,inst_17400);var state_17403__$1 = state_17403;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17403__$1,inst_17401);
} else
{if((state_val_17404 === (1)))
{var inst_17391 = test_react.cljs_async.movie_cast.call(null,id);var state_17403__$1 = state_17403;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17403__$1,(3),inst_17391);
} else
{return null;
}
}
}
});})(c__14212__auto__))
;return ((function (switch__14156__auto__,c__14212__auto__){
return (function() {
var state_machine__14157__auto__ = null;
var state_machine__14157__auto____0 = (function (){var statearr_17408 = [null,null,null,null,null,null,null];(statearr_17408[(0)] = state_machine__14157__auto__);
(statearr_17408[(1)] = (1));
return statearr_17408;
});
var state_machine__14157__auto____1 = (function (state_17403){while(true){
var ret_value__14158__auto__ = (function (){try{while(true){
var result__14159__auto__ = switch__14156__auto__.call(null,state_17403);if(cljs.core.keyword_identical_QMARK_.call(null,result__14159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14159__auto__;
}
break;
}
}catch (e17409){if((e17409 instanceof Object))
{var ex__14160__auto__ = e17409;var statearr_17410_17412 = state_17403;(statearr_17410_17412[(5)] = ex__14160__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17403);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17409;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17413 = state_17403;
state_17403 = G__17413;
continue;
}
} else
{return ret_value__14158__auto__;
}
break;
}
});
state_machine__14157__auto__ = function(state_17403){
switch(arguments.length){
case 0:
return state_machine__14157__auto____0.call(this);
case 1:
return state_machine__14157__auto____1.call(this,state_17403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14157__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14157__auto____0;
state_machine__14157__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14157__auto____1;
return state_machine__14157__auto__;
})()
;})(switch__14156__auto__,c__14212__auto__))
})();var state__14214__auto__ = (function (){var statearr_17411 = f__14213__auto__.call(null);(statearr_17411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14212__auto__);
return statearr_17411;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14214__auto__);
});})(c__14212__auto__))
);
return c__14212__auto__;
});
var c__14212__auto___17429 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14212__auto___17429){
return (function (){var f__14213__auto__ = (function (){var switch__14156__auto__ = ((function (c__14212__auto___17429){
return (function (state_17420){var state_val_17421 = (state_17420[(1)]);if((state_val_17421 === (2)))
{var inst_17416 = (state_17420[(2)]);var inst_17417 = cljs.core.pr_str.call(null,inst_17416);var inst_17418 = alert(inst_17417);var state_17420__$1 = state_17420;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17420__$1,inst_17418);
} else
{if((state_val_17421 === (1)))
{var inst_17414 = test_react.cljs_async.avg_cast_popularity.call(null,(238));var state_17420__$1 = state_17420;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17420__$1,(2),inst_17414);
} else
{return null;
}
}
});})(c__14212__auto___17429))
;return ((function (switch__14156__auto__,c__14212__auto___17429){
return (function() {
var state_machine__14157__auto__ = null;
var state_machine__14157__auto____0 = (function (){var statearr_17425 = [null,null,null,null,null,null,null];(statearr_17425[(0)] = state_machine__14157__auto__);
(statearr_17425[(1)] = (1));
return statearr_17425;
});
var state_machine__14157__auto____1 = (function (state_17420){while(true){
var ret_value__14158__auto__ = (function (){try{while(true){
var result__14159__auto__ = switch__14156__auto__.call(null,state_17420);if(cljs.core.keyword_identical_QMARK_.call(null,result__14159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14159__auto__;
}
break;
}
}catch (e17426){if((e17426 instanceof Object))
{var ex__14160__auto__ = e17426;var statearr_17427_17430 = state_17420;(statearr_17427_17430[(5)] = ex__14160__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17420);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17426;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17431 = state_17420;
state_17420 = G__17431;
continue;
}
} else
{return ret_value__14158__auto__;
}
break;
}
});
state_machine__14157__auto__ = function(state_17420){
switch(arguments.length){
case 0:
return state_machine__14157__auto____0.call(this);
case 1:
return state_machine__14157__auto____1.call(this,state_17420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14157__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14157__auto____0;
state_machine__14157__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14157__auto____1;
return state_machine__14157__auto__;
})()
;})(switch__14156__auto__,c__14212__auto___17429))
})();var state__14214__auto__ = (function (){var statearr_17428 = f__14213__auto__.call(null);(statearr_17428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14212__auto___17429);
return statearr_17428;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14214__auto__);
});})(c__14212__auto___17429))
);
test_react.cljs_async.omdb_by_title = (function omdb_by_title(q){var c__14212__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14212__auto__){
return (function (){var f__14213__auto__ = (function (){var switch__14156__auto__ = ((function (c__14212__auto__){
return (function (state_17455){var state_val_17456 = (state_17455[(1)]);if((state_val_17456 === (2)))
{var inst_17451 = (state_17455[(2)]);var inst_17452 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_17451);var inst_17453 = cheshire.parse_string.call(null,inst_17452,true);var state_17455__$1 = state_17455;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17455__$1,inst_17453);
} else
{if((state_val_17456 === (1)))
{var inst_17448 = ("http://www.omdbapi.com/?t="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(q));var inst_17449 = test_react.cljs_async.http_get.call(null,inst_17448);var state_17455__$1 = state_17455;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17455__$1,(2),inst_17449);
} else
{return null;
}
}
});})(c__14212__auto__))
;return ((function (switch__14156__auto__,c__14212__auto__){
return (function() {
var state_machine__14157__auto__ = null;
var state_machine__14157__auto____0 = (function (){var statearr_17460 = [null,null,null,null,null,null,null];(statearr_17460[(0)] = state_machine__14157__auto__);
(statearr_17460[(1)] = (1));
return statearr_17460;
});
var state_machine__14157__auto____1 = (function (state_17455){while(true){
var ret_value__14158__auto__ = (function (){try{while(true){
var result__14159__auto__ = switch__14156__auto__.call(null,state_17455);if(cljs.core.keyword_identical_QMARK_.call(null,result__14159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14159__auto__;
}
break;
}
}catch (e17461){if((e17461 instanceof Object))
{var ex__14160__auto__ = e17461;var statearr_17462_17464 = state_17455;(statearr_17462_17464[(5)] = ex__14160__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17455);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17461;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17465 = state_17455;
state_17455 = G__17465;
continue;
}
} else
{return ret_value__14158__auto__;
}
break;
}
});
state_machine__14157__auto__ = function(state_17455){
switch(arguments.length){
case 0:
return state_machine__14157__auto____0.call(this);
case 1:
return state_machine__14157__auto____1.call(this,state_17455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14157__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14157__auto____0;
state_machine__14157__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14157__auto____1;
return state_machine__14157__auto__;
})()
;})(switch__14156__auto__,c__14212__auto__))
})();var state__14214__auto__ = (function (){var statearr_17463 = f__14213__auto__.call(null);(statearr_17463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14212__auto__);
return statearr_17463;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14214__auto__);
});})(c__14212__auto__))
);
return c__14212__auto__;
});
test_react.cljs_async.omdb_item = (function omdb_item(id){var c__14212__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14212__auto__){
return (function (){var f__14213__auto__ = (function (){var switch__14156__auto__ = ((function (c__14212__auto__){
return (function (state_17489){var state_val_17490 = (state_17489[(1)]);if((state_val_17490 === (2)))
{var inst_17485 = (state_17489[(2)]);var inst_17486 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_17485);var inst_17487 = cheshire.parse_string.call(null,inst_17486,true);var state_17489__$1 = state_17489;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17489__$1,inst_17487);
} else
{if((state_val_17490 === (1)))
{var inst_17482 = ("http://www.omdbapi.com/?tomatoes=true&i="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));var inst_17483 = test_react.cljs_async.http_get.call(null,inst_17482);var state_17489__$1 = state_17489;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17489__$1,(2),inst_17483);
} else
{return null;
}
}
});})(c__14212__auto__))
;return ((function (switch__14156__auto__,c__14212__auto__){
return (function() {
var state_machine__14157__auto__ = null;
var state_machine__14157__auto____0 = (function (){var statearr_17494 = [null,null,null,null,null,null,null];(statearr_17494[(0)] = state_machine__14157__auto__);
(statearr_17494[(1)] = (1));
return statearr_17494;
});
var state_machine__14157__auto____1 = (function (state_17489){while(true){
var ret_value__14158__auto__ = (function (){try{while(true){
var result__14159__auto__ = switch__14156__auto__.call(null,state_17489);if(cljs.core.keyword_identical_QMARK_.call(null,result__14159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14159__auto__;
}
break;
}
}catch (e17495){if((e17495 instanceof Object))
{var ex__14160__auto__ = e17495;var statearr_17496_17498 = state_17489;(statearr_17496_17498[(5)] = ex__14160__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17489);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17495;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17499 = state_17489;
state_17489 = G__17499;
continue;
}
} else
{return ret_value__14158__auto__;
}
break;
}
});
state_machine__14157__auto__ = function(state_17489){
switch(arguments.length){
case 0:
return state_machine__14157__auto____0.call(this);
case 1:
return state_machine__14157__auto____1.call(this,state_17489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14157__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14157__auto____0;
state_machine__14157__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14157__auto____1;
return state_machine__14157__auto__;
})()
;})(switch__14156__auto__,c__14212__auto__))
})();var state__14214__auto__ = (function (){var statearr_17497 = f__14213__auto__.call(null);(statearr_17497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14212__auto__);
return statearr_17497;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14214__auto__);
});})(c__14212__auto__))
);
return c__14212__auto__;
});
test_react.cljs_async._LT__BANG__BANG_.call(null,test_react.cljs_async.omdb_by_title.call(null,"the+matrix"));
test_react.cljs_async._LT__BANG__BANG_.call(null,test_react.cljs_async.omdb_item.call(null,"tt1285016"));
var c__14212__auto___17540 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14212__auto___17540){
return (function (){var f__14213__auto__ = (function (){var switch__14156__auto__ = ((function (c__14212__auto___17540){
return (function (state_17522){var state_val_17523 = (state_17522[(1)]);if((state_val_17523 === (7)))
{var inst_17502 = (state_17522[(7)]);var inst_17508 = (state_17522[(2)]);var inst_17509 = (inst_17502 + (1));var inst_17502__$1 = inst_17509;var state_17522__$1 = (function (){var statearr_17524 = state_17522;(statearr_17524[(8)] = inst_17508);
(statearr_17524[(7)] = inst_17502__$1);
return statearr_17524;
})();var statearr_17525_17541 = state_17522__$1;(statearr_17525_17541[(2)] = null);
(statearr_17525_17541[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17523 === (6)))
{var inst_17513 = (state_17522[(2)]);var state_17522__$1 = state_17522;var statearr_17526_17542 = state_17522__$1;(statearr_17526_17542[(2)] = inst_17513);
(statearr_17526_17542[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17523 === (5)))
{var state_17522__$1 = state_17522;var statearr_17527_17543 = state_17522__$1;(statearr_17527_17543[(2)] = null);
(statearr_17527_17543[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17523 === (4)))
{var inst_17506 = test_react.cljs_async.people_by_id.call(null,(3144));var state_17522__$1 = state_17522;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17522__$1,(7),inst_17506);
} else
{if((state_val_17523 === (3)))
{var inst_17501 = (state_17522[(9)]);var inst_17515 = (state_17522[(2)]);var inst_17516 = (new Date());var inst_17517 = inst_17516.getTime();var inst_17518 = (inst_17517 - inst_17501);var inst_17519 = ("Elapsed time: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_17518)+" msecs");var inst_17520 = cljs.core.prn.call(null,inst_17519);var state_17522__$1 = (function (){var statearr_17528 = state_17522;(statearr_17528[(10)] = inst_17520);
return statearr_17528;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17522__$1,inst_17515);
} else
{if((state_val_17523 === (2)))
{var inst_17502 = (state_17522[(7)]);var inst_17504 = (inst_17502 < (10));var state_17522__$1 = state_17522;if(cljs.core.truth_(inst_17504))
{var statearr_17529_17544 = state_17522__$1;(statearr_17529_17544[(1)] = (4));
} else
{var statearr_17530_17545 = state_17522__$1;(statearr_17530_17545[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17523 === (1)))
{var inst_17500 = (new Date());var inst_17501 = inst_17500.getTime();var inst_17502 = (0);var state_17522__$1 = (function (){var statearr_17531 = state_17522;(statearr_17531[(9)] = inst_17501);
(statearr_17531[(7)] = inst_17502);
return statearr_17531;
})();var statearr_17532_17546 = state_17522__$1;(statearr_17532_17546[(2)] = null);
(statearr_17532_17546[(1)] = (2));
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
});})(c__14212__auto___17540))
;return ((function (switch__14156__auto__,c__14212__auto___17540){
return (function() {
var state_machine__14157__auto__ = null;
var state_machine__14157__auto____0 = (function (){var statearr_17536 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17536[(0)] = state_machine__14157__auto__);
(statearr_17536[(1)] = (1));
return statearr_17536;
});
var state_machine__14157__auto____1 = (function (state_17522){while(true){
var ret_value__14158__auto__ = (function (){try{while(true){
var result__14159__auto__ = switch__14156__auto__.call(null,state_17522);if(cljs.core.keyword_identical_QMARK_.call(null,result__14159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14159__auto__;
}
break;
}
}catch (e17537){if((e17537 instanceof Object))
{var ex__14160__auto__ = e17537;var statearr_17538_17547 = state_17522;(statearr_17538_17547[(5)] = ex__14160__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17522);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17537;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17548 = state_17522;
state_17522 = G__17548;
continue;
}
} else
{return ret_value__14158__auto__;
}
break;
}
});
state_machine__14157__auto__ = function(state_17522){
switch(arguments.length){
case 0:
return state_machine__14157__auto____0.call(this);
case 1:
return state_machine__14157__auto____1.call(this,state_17522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14157__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14157__auto____0;
state_machine__14157__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14157__auto____1;
return state_machine__14157__auto__;
})()
;})(switch__14156__auto__,c__14212__auto___17540))
})();var state__14214__auto__ = (function (){var statearr_17539 = f__14213__auto__.call(null);(statearr_17539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14212__auto___17540);
return statearr_17539;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14214__auto__);
});})(c__14212__auto___17540))
);
var c__14212__auto___17639 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14212__auto___17639){
return (function (){var f__14213__auto__ = (function (){var switch__14156__auto__ = ((function (c__14212__auto___17639){
return (function (state_17607){var state_val_17608 = (state_17607[(1)]);if((state_val_17608 === (7)))
{var inst_17564 = (state_17607[(7)]);var inst_17565 = (state_17607[(8)]);var inst_17567 = (state_17607[(9)]);var inst_17566 = (state_17607[(10)]);var inst_17574 = (state_17607[(2)]);var inst_17575 = (inst_17567 + (1));var tmp17609 = inst_17564;var tmp17610 = inst_17565;var tmp17611 = inst_17566;var inst_17564__$1 = tmp17609;var inst_17565__$1 = tmp17610;var inst_17566__$1 = tmp17611;var inst_17567__$1 = inst_17575;var state_17607__$1 = (function (){var statearr_17612 = state_17607;(statearr_17612[(7)] = inst_17564__$1);
(statearr_17612[(8)] = inst_17565__$1);
(statearr_17612[(9)] = inst_17567__$1);
(statearr_17612[(11)] = inst_17574);
(statearr_17612[(10)] = inst_17566__$1);
return statearr_17612;
})();var statearr_17613_17640 = state_17607__$1;(statearr_17613_17640[(2)] = null);
(statearr_17613_17640[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17608 === (1)))
{var inst_17550 = (state_17607[(12)]);var inst_17549 = (new Date());var inst_17550__$1 = inst_17549.getTime();var inst_17555 = (function (){var start__12390__auto__ = inst_17550__$1;return ((function (start__12390__auto__,inst_17550,inst_17549,inst_17550__$1,state_val_17608,c__14212__auto___17639){
return (function iter__17551(s__17552){return (new cljs.core.LazySeq(null,((function (start__12390__auto__,inst_17550,inst_17549,inst_17550__$1,state_val_17608,c__14212__auto___17639){
return (function (){var s__17552__$1 = s__17552;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17552__$1);if(temp__4126__auto__)
{var s__17552__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17552__$2))
{var c__12232__auto__ = cljs.core.chunk_first.call(null,s__17552__$2);var size__12233__auto__ = cljs.core.count.call(null,c__12232__auto__);var b__17554 = cljs.core.chunk_buffer.call(null,size__12233__auto__);if((function (){var i__17553 = (0);while(true){
if((i__17553 < size__12233__auto__))
{var x = cljs.core._nth.call(null,c__12232__auto__,i__17553);cljs.core.chunk_append.call(null,b__17554,test_react.cljs_async.people_by_id.call(null,(3144)));
{
var G__17641 = (i__17553 + (1));
i__17553 = G__17641;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17554),iter__17551.call(null,cljs.core.chunk_rest.call(null,s__17552__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17554),null);
}
} else
{var x = cljs.core.first.call(null,s__17552__$2);return cljs.core.cons.call(null,test_react.cljs_async.people_by_id.call(null,(3144)),iter__17551.call(null,cljs.core.rest.call(null,s__17552__$2)));
}
} else
{return null;
}
break;
}
});})(start__12390__auto__,inst_17550,inst_17549,inst_17550__$1,state_val_17608,c__14212__auto___17639))
,null,null));
});
;})(start__12390__auto__,inst_17550,inst_17549,inst_17550__$1,state_val_17608,c__14212__auto___17639))
})();var inst_17556 = cljs.core.range.call(null,(10));var inst_17557 = inst_17555.call(null,inst_17556);var inst_17558 = cljs.core.doall.call(null,inst_17557);var inst_17563 = cljs.core.seq.call(null,inst_17558);var inst_17564 = inst_17563;var inst_17565 = null;var inst_17566 = (0);var inst_17567 = (0);var state_17607__$1 = (function (){var statearr_17614 = state_17607;(statearr_17614[(12)] = inst_17550__$1);
(statearr_17614[(7)] = inst_17564);
(statearr_17614[(8)] = inst_17565);
(statearr_17614[(9)] = inst_17567);
(statearr_17614[(10)] = inst_17566);
return statearr_17614;
})();var statearr_17615_17642 = state_17607__$1;(statearr_17615_17642[(2)] = null);
(statearr_17615_17642[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17608 === (4)))
{var inst_17565 = (state_17607[(8)]);var inst_17567 = (state_17607[(9)]);var inst_17572 = cljs.core._nth.call(null,inst_17565,inst_17567);var state_17607__$1 = state_17607;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17607__$1,(7),inst_17572);
} else
{if((state_val_17608 === (13)))
{var inst_17593 = (state_17607[(2)]);var state_17607__$1 = state_17607;var statearr_17616_17643 = state_17607__$1;(statearr_17616_17643[(2)] = inst_17593);
(statearr_17616_17643[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17608 === (6)))
{var inst_17598 = (state_17607[(2)]);var state_17607__$1 = state_17607;var statearr_17617_17644 = state_17607__$1;(statearr_17617_17644[(2)] = inst_17598);
(statearr_17617_17644[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17608 === (3)))
{var inst_17550 = (state_17607[(12)]);var inst_17600 = (state_17607[(2)]);var inst_17601 = (new Date());var inst_17602 = inst_17601.getTime();var inst_17603 = (inst_17602 - inst_17550);var inst_17604 = ("Elapsed time: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_17603)+" msecs");var inst_17605 = cljs.core.prn.call(null,inst_17604);var state_17607__$1 = (function (){var statearr_17618 = state_17607;(statearr_17618[(13)] = inst_17605);
return statearr_17618;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17607__$1,inst_17600);
} else
{if((state_val_17608 === (12)))
{var inst_17578 = (state_17607[(14)]);var inst_17587 = cljs.core.first.call(null,inst_17578);var state_17607__$1 = state_17607;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17607__$1,(14),inst_17587);
} else
{if((state_val_17608 === (2)))
{var inst_17567 = (state_17607[(9)]);var inst_17566 = (state_17607[(10)]);var inst_17569 = (inst_17567 < inst_17566);var inst_17570 = inst_17569;var state_17607__$1 = state_17607;if(cljs.core.truth_(inst_17570))
{var statearr_17619_17645 = state_17607__$1;(statearr_17619_17645[(1)] = (4));
} else
{var statearr_17620_17646 = state_17607__$1;(statearr_17620_17646[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17608 === (11)))
{var inst_17578 = (state_17607[(14)]);var inst_17582 = cljs.core.chunk_first.call(null,inst_17578);var inst_17583 = cljs.core.chunk_rest.call(null,inst_17578);var inst_17584 = cljs.core.count.call(null,inst_17582);var inst_17564 = inst_17583;var inst_17565 = inst_17582;var inst_17566 = inst_17584;var inst_17567 = (0);var state_17607__$1 = (function (){var statearr_17621 = state_17607;(statearr_17621[(7)] = inst_17564);
(statearr_17621[(8)] = inst_17565);
(statearr_17621[(9)] = inst_17567);
(statearr_17621[(10)] = inst_17566);
return statearr_17621;
})();var statearr_17622_17647 = state_17607__$1;(statearr_17622_17647[(2)] = null);
(statearr_17622_17647[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17608 === (9)))
{var state_17607__$1 = state_17607;var statearr_17623_17648 = state_17607__$1;(statearr_17623_17648[(2)] = null);
(statearr_17623_17648[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17608 === (5)))
{var inst_17564 = (state_17607[(7)]);var inst_17578 = (state_17607[(14)]);var inst_17578__$1 = cljs.core.seq.call(null,inst_17564);var state_17607__$1 = (function (){var statearr_17624 = state_17607;(statearr_17624[(14)] = inst_17578__$1);
return statearr_17624;
})();if(inst_17578__$1)
{var statearr_17625_17649 = state_17607__$1;(statearr_17625_17649[(1)] = (8));
} else
{var statearr_17626_17650 = state_17607__$1;(statearr_17626_17650[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17608 === (14)))
{var inst_17578 = (state_17607[(14)]);var inst_17589 = (state_17607[(2)]);var inst_17590 = cljs.core.next.call(null,inst_17578);var inst_17564 = inst_17590;var inst_17565 = null;var inst_17566 = (0);var inst_17567 = (0);var state_17607__$1 = (function (){var statearr_17627 = state_17607;(statearr_17627[(7)] = inst_17564);
(statearr_17627[(8)] = inst_17565);
(statearr_17627[(15)] = inst_17589);
(statearr_17627[(9)] = inst_17567);
(statearr_17627[(10)] = inst_17566);
return statearr_17627;
})();var statearr_17628_17651 = state_17607__$1;(statearr_17628_17651[(2)] = null);
(statearr_17628_17651[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17608 === (10)))
{var inst_17596 = (state_17607[(2)]);var state_17607__$1 = state_17607;var statearr_17629_17652 = state_17607__$1;(statearr_17629_17652[(2)] = inst_17596);
(statearr_17629_17652[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17608 === (8)))
{var inst_17578 = (state_17607[(14)]);var inst_17580 = cljs.core.chunked_seq_QMARK_.call(null,inst_17578);var state_17607__$1 = state_17607;if(inst_17580)
{var statearr_17630_17653 = state_17607__$1;(statearr_17630_17653[(1)] = (11));
} else
{var statearr_17631_17654 = state_17607__$1;(statearr_17631_17654[(1)] = (12));
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
});})(c__14212__auto___17639))
;return ((function (switch__14156__auto__,c__14212__auto___17639){
return (function() {
var state_machine__14157__auto__ = null;
var state_machine__14157__auto____0 = (function (){var statearr_17635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17635[(0)] = state_machine__14157__auto__);
(statearr_17635[(1)] = (1));
return statearr_17635;
});
var state_machine__14157__auto____1 = (function (state_17607){while(true){
var ret_value__14158__auto__ = (function (){try{while(true){
var result__14159__auto__ = switch__14156__auto__.call(null,state_17607);if(cljs.core.keyword_identical_QMARK_.call(null,result__14159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14159__auto__;
}
break;
}
}catch (e17636){if((e17636 instanceof Object))
{var ex__14160__auto__ = e17636;var statearr_17637_17655 = state_17607;(statearr_17637_17655[(5)] = ex__14160__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17607);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17636;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17656 = state_17607;
state_17607 = G__17656;
continue;
}
} else
{return ret_value__14158__auto__;
}
break;
}
});
state_machine__14157__auto__ = function(state_17607){
switch(arguments.length){
case 0:
return state_machine__14157__auto____0.call(this);
case 1:
return state_machine__14157__auto____1.call(this,state_17607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14157__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14157__auto____0;
state_machine__14157__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14157__auto____1;
return state_machine__14157__auto__;
})()
;})(switch__14156__auto__,c__14212__auto___17639))
})();var state__14214__auto__ = (function (){var statearr_17638 = f__14213__auto__.call(null);(statearr_17638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14212__auto___17639);
return statearr_17638;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14214__auto__);
});})(c__14212__auto___17639))
);

//# sourceMappingURL=cljs_async.js.map
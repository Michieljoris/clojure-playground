// Compiled by ClojureScript 0.0-2371
goog.provide('reagent.ratom');
goog.require('cljs.core');
reagent.ratom.debug = false;
reagent.ratom._running = cljs.core.atom.call(null,(0));
reagent.ratom.running = (function running(){return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){obj.cljsCaptured = null;
var _STAR_ratom_context_STAR_17186 = reagent.ratom._STAR_ratom_context_STAR_;try{reagent.ratom._STAR_ratom_context_STAR_ = obj;
return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_17186;
}});
reagent.ratom.captured = (function captured(obj){var c = obj.cljsCaptured;obj.cljsCaptured = null;
return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){var obj = reagent.ratom._STAR_ratom_context_STAR_;if((obj == null))
{return null;
} else
{var captured = obj.cljsCaptured;return obj.cljsCaptured = cljs.core.conj.call(null,(((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.cljs$lang$type = true;
reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";
reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__12073__auto__,writer__12074__auto__,opt__12075__auto__){return cljs.core._write.call(null,writer__12074__auto__,"reagent.ratom/RAtom");
});
reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){f.call(null,key,this$__$1,oldval,newval);
return null;
});})(this$__$1))
,null,self__.watches);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});
reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){var self__ = this;
var a__$1 = this;if((self__.validator == null))
{} else
{if(cljs.core.truth_(self__.validator.call(null,new_value)))
{} else
{throw (new Error(("Assert failed: Validator rejected reference state\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null)))))));
}
}
var old_value = self__.state;self__.state = new_value;
if((self__.watches == null))
{} else
{cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
}
return new_value;
});
reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
return self__.state;
});
reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){return (new reagent.ratom.RAtom(state,meta,validator,watches));
});
/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__17190__delegate = function (x,p__17187){var map__17189 = p__17187;var map__17189__$1 = ((cljs.core.seq_QMARK_.call(null,map__17189))?cljs.core.apply.call(null,cljs.core.hash_map,map__17189):map__17189);var validator = cljs.core.get.call(null,map__17189__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));var meta = cljs.core.get.call(null,map__17189__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__17190 = function (x,var_args){
var p__17187 = null;if (arguments.length > 1) {
  p__17187 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__17190__delegate.call(this,x,p__17187);};
G__17190.cljs$lang$maxFixedArity = 1;
G__17190.cljs$lang$applyTo = (function (arglist__17191){
var x = cljs.core.first(arglist__17191);
var p__17187 = cljs.core.rest(arglist__17191);
return G__17190__delegate(x,p__17187);
});
G__17190.cljs$core$IFn$_invoke$arity$variadic = G__17190__delegate;
return G__17190;
})()
;
atom = function(x,var_args){
var p__17187 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;

/**
* @constructor
*/
reagent.ratom.RCursor = (function (path,ratom){
this.path = path;
this.ratom = ratom;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RCursor.cljs$lang$type = true;
reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";
reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__12073__auto__,writer__12074__auto__,opt__12075__auto__){return cljs.core._write.call(null,writer__12074__auto__,"reagent.ratom/RCursor");
});
reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;return cljs.core._notify_watches.call(null,self__.ratom,oldval,newval);
});
reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return cljs.core._add_watch.call(null,self__.ratom,key,f);
});
reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return cljs.core._remove_watch.call(null,self__.ratom,key);
});
reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write.call(null,writer,"#<Cursor: ");
cljs.core.pr_writer.call(null,self__.path,writer,opts);
cljs.core._write.call(null,writer," ");
cljs.core.pr_writer.call(null,self__.ratom,writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.RCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core._meta.call(null,self__.ratom);
});
reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){var self__ = this;
var a__$1 = this;return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.update_in,self__.path,f);
});
reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){var self__ = this;
var a__$1 = this;return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.update_in,self__.path,f,x);
});
reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){var self__ = this;
var a__$1 = this;return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.update_in,self__.path,f,x,y);
});
reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.update_in,self__.path,f,x,y,more);
});
reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){var self__ = this;
var a__$1 = this;return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.assoc_in,self__.path,new_value);
});
reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
});
reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.__GT_RCursor = (function __GT_RCursor(path,ratom){return (new reagent.ratom.RCursor(path,ratom));
});
reagent.ratom.cursor = (function cursor(path,ra){return (new reagent.ratom.RCursor(path,ra));
});
reagent.ratom.IDisposable = (function (){var obj17193 = {};return obj17193;
})();
reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){if((function (){var and__11484__auto__ = this$;if(and__11484__auto__)
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else
{return and__11484__auto__;
}
})())
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else
{var x__12133__auto__ = (((this$ == null))?null:this$);return (function (){var or__11496__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__12133__auto__)]);if(or__11496__auto__)
{return or__11496__auto__;
} else
{var or__11496__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);if(or__11496__auto____$1)
{return or__11496__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IRunnable = (function (){var obj17195 = {};return obj17195;
})();
reagent.ratom.run = (function run(this$){if((function (){var and__11484__auto__ = this$;if(and__11484__auto__)
{return this$.reagent$ratom$IRunnable$run$arity$1;
} else
{return and__11484__auto__;
}
})())
{return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else
{var x__12133__auto__ = (((this$ == null))?null:this$);return (function (){var or__11496__auto__ = (reagent.ratom.run[goog.typeOf(x__12133__auto__)]);if(or__11496__auto__)
{return or__11496__auto__;
} else
{var or__11496__auto____$1 = (reagent.ratom.run["_"]);if(or__11496__auto____$1)
{return or__11496__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IComputedImpl = (function (){var obj17197 = {};return obj17197;
})();
reagent.ratom._update_watching = (function _update_watching(this$,derefed){if((function (){var and__11484__auto__ = this$;if(and__11484__auto__)
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else
{return and__11484__auto__;
}
})())
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else
{var x__12133__auto__ = (((this$ == null))?null:this$);return (function (){var or__11496__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__12133__auto__)]);if(or__11496__auto__)
{return or__11496__auto__;
} else
{var or__11496__auto____$1 = (reagent.ratom._update_watching["_"]);if(or__11496__auto____$1)
{return or__11496__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});
reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){if((function (){var and__11484__auto__ = k;if(and__11484__auto__)
{return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else
{return and__11484__auto__;
}
})())
{return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else
{var x__12133__auto__ = (((k == null))?null:k);return (function (){var or__11496__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__12133__auto__)]);if(or__11496__auto__)
{return or__11496__auto__;
} else
{var or__11496__auto____$1 = (reagent.ratom._handle_change["_"]);if(or__11496__auto____$1)
{return or__11496__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});
reagent.ratom.call_watches = (function call_watches(obs,watches,oldval,newval){return cljs.core.reduce_kv.call(null,(function (_,key,f){f.call(null,key,obs,oldval,newval);
return null;
}),null,watches);
});

/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.cljs$lang$type = true;
reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";
reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__12073__auto__,writer__12074__auto__,opt__12075__auto__){return cljs.core._write.call(null,writer__12074__auto__,"reagent.ratom/Reaction");
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_((function (){var and__11484__auto__ = self__.active_QMARK_;if(cljs.core.truth_(and__11484__auto__))
{return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
} else
{return and__11484__auto__;
}
})()))
{self__.dirty_QMARK_ = true;
return (function (){var or__11496__auto__ = self__.auto_run;if(cljs.core.truth_(or__11496__auto__))
{return or__11496__auto__;
} else
{return reagent.ratom.run;
}
})().call(null,this$__$1);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){var self__ = this;
var this$__$1 = this;var seq__17198_17210 = cljs.core.seq.call(null,derefed);var chunk__17199_17211 = null;var count__17200_17212 = (0);var i__17201_17213 = (0);while(true){
if((i__17201_17213 < count__17200_17212))
{var w_17214 = cljs.core._nth.call(null,chunk__17199_17211,i__17201_17213);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_17214))
{} else
{cljs.core.add_watch.call(null,w_17214,this$__$1,reagent.ratom._handle_change);
}
{
var G__17215 = seq__17198_17210;
var G__17216 = chunk__17199_17211;
var G__17217 = count__17200_17212;
var G__17218 = (i__17201_17213 + (1));
seq__17198_17210 = G__17215;
chunk__17199_17211 = G__17216;
count__17200_17212 = G__17217;
i__17201_17213 = G__17218;
continue;
}
} else
{var temp__4126__auto___17219 = cljs.core.seq.call(null,seq__17198_17210);if(temp__4126__auto___17219)
{var seq__17198_17220__$1 = temp__4126__auto___17219;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17198_17220__$1))
{var c__12266__auto___17221 = cljs.core.chunk_first.call(null,seq__17198_17220__$1);{
var G__17222 = cljs.core.chunk_rest.call(null,seq__17198_17220__$1);
var G__17223 = c__12266__auto___17221;
var G__17224 = cljs.core.count.call(null,c__12266__auto___17221);
var G__17225 = (0);
seq__17198_17210 = G__17222;
chunk__17199_17211 = G__17223;
count__17200_17212 = G__17224;
i__17201_17213 = G__17225;
continue;
}
} else
{var w_17226 = cljs.core.first.call(null,seq__17198_17220__$1);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_17226))
{} else
{cljs.core.add_watch.call(null,w_17226,this$__$1,reagent.ratom._handle_change);
}
{
var G__17227 = cljs.core.next.call(null,seq__17198_17220__$1);
var G__17228 = null;
var G__17229 = (0);
var G__17230 = (0);
seq__17198_17210 = G__17227;
chunk__17199_17211 = G__17228;
count__17200_17212 = G__17229;
i__17201_17213 = G__17230;
continue;
}
}
} else
{}
}
break;
}
var seq__17202_17231 = cljs.core.seq.call(null,self__.watching);var chunk__17203_17232 = null;var count__17204_17233 = (0);var i__17205_17234 = (0);while(true){
if((i__17205_17234 < count__17204_17233))
{var w_17235 = cljs.core._nth.call(null,chunk__17203_17232,i__17205_17234);if(cljs.core.contains_QMARK_.call(null,derefed,w_17235))
{} else
{cljs.core.remove_watch.call(null,w_17235,this$__$1);
}
{
var G__17236 = seq__17202_17231;
var G__17237 = chunk__17203_17232;
var G__17238 = count__17204_17233;
var G__17239 = (i__17205_17234 + (1));
seq__17202_17231 = G__17236;
chunk__17203_17232 = G__17237;
count__17204_17233 = G__17238;
i__17205_17234 = G__17239;
continue;
}
} else
{var temp__4126__auto___17240 = cljs.core.seq.call(null,seq__17202_17231);if(temp__4126__auto___17240)
{var seq__17202_17241__$1 = temp__4126__auto___17240;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17202_17241__$1))
{var c__12266__auto___17242 = cljs.core.chunk_first.call(null,seq__17202_17241__$1);{
var G__17243 = cljs.core.chunk_rest.call(null,seq__17202_17241__$1);
var G__17244 = c__12266__auto___17242;
var G__17245 = cljs.core.count.call(null,c__12266__auto___17242);
var G__17246 = (0);
seq__17202_17231 = G__17243;
chunk__17203_17232 = G__17244;
count__17204_17233 = G__17245;
i__17205_17234 = G__17246;
continue;
}
} else
{var w_17247 = cljs.core.first.call(null,seq__17202_17241__$1);if(cljs.core.contains_QMARK_.call(null,derefed,w_17247))
{} else
{cljs.core.remove_watch.call(null,w_17247,this$__$1);
}
{
var G__17248 = cljs.core.next.call(null,seq__17202_17241__$1);
var G__17249 = null;
var G__17250 = (0);
var G__17251 = (0);
seq__17202_17231 = G__17248;
chunk__17203_17232 = G__17249;
count__17204_17233 = G__17250;
i__17205_17234 = G__17251;
continue;
}
}
} else
{}
}
break;
}
return self__.watching = derefed;
});
reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;cljs.core._write.call(null,writer,("#<Reaction "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,this$__$1))+": "));
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var seq__17206_17252 = cljs.core.seq.call(null,self__.watching);var chunk__17207_17253 = null;var count__17208_17254 = (0);var i__17209_17255 = (0);while(true){
if((i__17209_17255 < count__17208_17254))
{var w_17256 = cljs.core._nth.call(null,chunk__17207_17253,i__17209_17255);cljs.core.remove_watch.call(null,w_17256,this$__$1);
{
var G__17257 = seq__17206_17252;
var G__17258 = chunk__17207_17253;
var G__17259 = count__17208_17254;
var G__17260 = (i__17209_17255 + (1));
seq__17206_17252 = G__17257;
chunk__17207_17253 = G__17258;
count__17208_17254 = G__17259;
i__17209_17255 = G__17260;
continue;
}
} else
{var temp__4126__auto___17261 = cljs.core.seq.call(null,seq__17206_17252);if(temp__4126__auto___17261)
{var seq__17206_17262__$1 = temp__4126__auto___17261;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17206_17262__$1))
{var c__12266__auto___17263 = cljs.core.chunk_first.call(null,seq__17206_17262__$1);{
var G__17264 = cljs.core.chunk_rest.call(null,seq__17206_17262__$1);
var G__17265 = c__12266__auto___17263;
var G__17266 = cljs.core.count.call(null,c__12266__auto___17263);
var G__17267 = (0);
seq__17206_17252 = G__17264;
chunk__17207_17253 = G__17265;
count__17208_17254 = G__17266;
i__17209_17255 = G__17267;
continue;
}
} else
{var w_17268 = cljs.core.first.call(null,seq__17206_17262__$1);cljs.core.remove_watch.call(null,w_17268,this$__$1);
{
var G__17269 = cljs.core.next.call(null,seq__17206_17262__$1);
var G__17270 = null;
var G__17271 = (0);
var G__17272 = (0);
seq__17206_17252 = G__17269;
chunk__17207_17253 = G__17270;
count__17208_17254 = G__17271;
i__17209_17255 = G__17272;
continue;
}
}
} else
{}
}
break;
}
self__.watching = cljs.core.PersistentHashSet.EMPTY;
self__.state = null;
self__.dirty_QMARK_ = true;
if(cljs.core.truth_(self__.active_QMARK_))
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else
{}
self__.active_QMARK_ = false;
} else
{}
if(cljs.core.truth_(self__.on_dispose))
{return self__.on_dispose.call(null);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){var self__ = this;
var a__$1 = this;var old_value = self__.state;self__.state = new_value;
cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
return new_value;
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state));
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x));
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x,y));
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,self__.state,x,y,more));
});
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var oldstate = self__.state;var res = reagent.ratom.capture_derefed.call(null,self__.f,this$__$1);var derefed = reagent.ratom.captured.call(null,this$__$1);if(cljs.core.not_EQ_.call(null,derefed,self__.watching))
{reagent.ratom._update_watching.call(null,this$__$1,derefed);
} else
{}
if(cljs.core.truth_(self__.active_QMARK_))
{} else
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else
{}
self__.active_QMARK_ = true;
}
self__.dirty_QMARK_ = false;
self__.state = res;
reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldstate,self__.state);
return res;
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(self__.on_set))
{self__.on_set.call(null,oldval,newval);
} else
{}
return reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldval,newval);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;self__.watches = cljs.core.dissoc.call(null,self__.watches,k);
if(cljs.core.empty_QMARK_.call(null,self__.watches))
{return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.not.call(null,(function (){var or__11496__auto__ = self__.auto_run;if(cljs.core.truth_(or__11496__auto__))
{return or__11496__auto__;
} else
{return reagent.ratom._STAR_ratom_context_STAR_;
}
})()))
{var x__13017__auto___17273 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);if(typeof console !== 'undefined')
{console.log((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("dbg reagent.ratom:"+231+": [auto-run *ratom-context*]: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,x__13017__auto___17273))))));
} else
{}
} else
{}
if(cljs.core.truth_((function (){var or__11496__auto__ = self__.auto_run;if(cljs.core.truth_(or__11496__auto__))
{return or__11496__auto__;
} else
{return reagent.ratom._STAR_ratom_context_STAR_;
}
})()))
{} else
{throw (new Error(("Assert failed: Reaction derefed outside auto-running context\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.Symbol(null,"*ratom-context*","*ratom-context*",-1557728360,null)))))));
}
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
if(cljs.core.truth_(self__.dirty_QMARK_))
{return reagent.ratom.run.call(null,this$__$1);
} else
{return self__.state;
}
});
reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});
/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__17274){var map__17276 = p__17274;var map__17276__$1 = ((cljs.core.seq_QMARK_.call(null,map__17276))?cljs.core.apply.call(null,cljs.core.hash_map,map__17276):map__17276);var derefed = cljs.core.get.call(null,map__17276__$1,new cljs.core.Keyword(null,"derefed","derefed",590684583));var on_dispose = cljs.core.get.call(null,map__17276__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));var on_set = cljs.core.get.call(null,map__17276__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));var auto_run = cljs.core.get.call(null,map__17276__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));var runner = ((cljs.core._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);var active = !((derefed == null));var dirty = !(active);var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,cljs.core.PersistentArrayMap.EMPTY,runner,on_set,on_dispose));if((derefed == null))
{} else
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else
{}
reagent.ratom._update_watching.call(null,reaction,derefed);
}
return reaction;
};
var make_reaction = function (f,var_args){
var p__17274 = null;if (arguments.length > 1) {
  p__17274 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_reaction__delegate.call(this,f,p__17274);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__17277){
var f = cljs.core.first(arglist__17277);
var p__17274 = cljs.core.rest(arglist__17277);
return make_reaction__delegate(f,p__17274);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;

//# sourceMappingURL=ratom.js.map
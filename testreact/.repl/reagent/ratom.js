// Compiled by ClojureScript 0.0-2371
goog.provide('reagent.ratom');
goog.require('cljs.core');
reagent.ratom.debug = false;
reagent.ratom._running = cljs.core.atom.call(null,(0));
reagent.ratom.running = (function running(){return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){obj.cljsCaptured = null;
var _STAR_ratom_context_STAR_9320 = reagent.ratom._STAR_ratom_context_STAR_;try{reagent.ratom._STAR_ratom_context_STAR_ = obj;
return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_9320;
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
reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__8023__auto__,writer__8024__auto__,opt__8025__auto__){return cljs.core._write.call(null,writer__8024__auto__,"reagent.ratom/RAtom");
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
var G__9324__delegate = function (x,p__9321){var map__9323 = p__9321;var map__9323__$1 = ((cljs.core.seq_QMARK_.call(null,map__9323))?cljs.core.apply.call(null,cljs.core.hash_map,map__9323):map__9323);var validator = cljs.core.get.call(null,map__9323__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));var meta = cljs.core.get.call(null,map__9323__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__9324 = function (x,var_args){
var p__9321 = null;if (arguments.length > 1) {
  p__9321 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__9324__delegate.call(this,x,p__9321);};
G__9324.cljs$lang$maxFixedArity = 1;
G__9324.cljs$lang$applyTo = (function (arglist__9325){
var x = cljs.core.first(arglist__9325);
var p__9321 = cljs.core.rest(arglist__9325);
return G__9324__delegate(x,p__9321);
});
G__9324.cljs$core$IFn$_invoke$arity$variadic = G__9324__delegate;
return G__9324;
})()
;
atom = function(x,var_args){
var p__9321 = var_args;
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
reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__8023__auto__,writer__8024__auto__,opt__8025__auto__){return cljs.core._write.call(null,writer__8024__auto__,"reagent.ratom/RCursor");
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
reagent.ratom.IDisposable = (function (){var obj9327 = {};return obj9327;
})();
reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){if((function (){var and__7434__auto__ = this$;if(and__7434__auto__)
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else
{return and__7434__auto__;
}
})())
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else
{var x__8083__auto__ = (((this$ == null))?null:this$);return (function (){var or__7446__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__8083__auto__)]);if(or__7446__auto__)
{return or__7446__auto__;
} else
{var or__7446__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);if(or__7446__auto____$1)
{return or__7446__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IRunnable = (function (){var obj9329 = {};return obj9329;
})();
reagent.ratom.run = (function run(this$){if((function (){var and__7434__auto__ = this$;if(and__7434__auto__)
{return this$.reagent$ratom$IRunnable$run$arity$1;
} else
{return and__7434__auto__;
}
})())
{return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else
{var x__8083__auto__ = (((this$ == null))?null:this$);return (function (){var or__7446__auto__ = (reagent.ratom.run[goog.typeOf(x__8083__auto__)]);if(or__7446__auto__)
{return or__7446__auto__;
} else
{var or__7446__auto____$1 = (reagent.ratom.run["_"]);if(or__7446__auto____$1)
{return or__7446__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IComputedImpl = (function (){var obj9331 = {};return obj9331;
})();
reagent.ratom._update_watching = (function _update_watching(this$,derefed){if((function (){var and__7434__auto__ = this$;if(and__7434__auto__)
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else
{return and__7434__auto__;
}
})())
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else
{var x__8083__auto__ = (((this$ == null))?null:this$);return (function (){var or__7446__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__8083__auto__)]);if(or__7446__auto__)
{return or__7446__auto__;
} else
{var or__7446__auto____$1 = (reagent.ratom._update_watching["_"]);if(or__7446__auto____$1)
{return or__7446__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});
reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){if((function (){var and__7434__auto__ = k;if(and__7434__auto__)
{return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else
{return and__7434__auto__;
}
})())
{return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else
{var x__8083__auto__ = (((k == null))?null:k);return (function (){var or__7446__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__8083__auto__)]);if(or__7446__auto__)
{return or__7446__auto__;
} else
{var or__7446__auto____$1 = (reagent.ratom._handle_change["_"]);if(or__7446__auto____$1)
{return or__7446__auto____$1;
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
reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__8023__auto__,writer__8024__auto__,opt__8025__auto__){return cljs.core._write.call(null,writer__8024__auto__,"reagent.ratom/Reaction");
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_((function (){var and__7434__auto__ = self__.active_QMARK_;if(cljs.core.truth_(and__7434__auto__))
{return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
} else
{return and__7434__auto__;
}
})()))
{self__.dirty_QMARK_ = true;
return (function (){var or__7446__auto__ = self__.auto_run;if(cljs.core.truth_(or__7446__auto__))
{return or__7446__auto__;
} else
{return reagent.ratom.run;
}
})().call(null,this$__$1);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){var self__ = this;
var this$__$1 = this;var seq__9332_9344 = cljs.core.seq.call(null,derefed);var chunk__9333_9345 = null;var count__9334_9346 = (0);var i__9335_9347 = (0);while(true){
if((i__9335_9347 < count__9334_9346))
{var w_9348 = cljs.core._nth.call(null,chunk__9333_9345,i__9335_9347);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_9348))
{} else
{cljs.core.add_watch.call(null,w_9348,this$__$1,reagent.ratom._handle_change);
}
{
var G__9349 = seq__9332_9344;
var G__9350 = chunk__9333_9345;
var G__9351 = count__9334_9346;
var G__9352 = (i__9335_9347 + (1));
seq__9332_9344 = G__9349;
chunk__9333_9345 = G__9350;
count__9334_9346 = G__9351;
i__9335_9347 = G__9352;
continue;
}
} else
{var temp__4126__auto___9353 = cljs.core.seq.call(null,seq__9332_9344);if(temp__4126__auto___9353)
{var seq__9332_9354__$1 = temp__4126__auto___9353;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9332_9354__$1))
{var c__8216__auto___9355 = cljs.core.chunk_first.call(null,seq__9332_9354__$1);{
var G__9356 = cljs.core.chunk_rest.call(null,seq__9332_9354__$1);
var G__9357 = c__8216__auto___9355;
var G__9358 = cljs.core.count.call(null,c__8216__auto___9355);
var G__9359 = (0);
seq__9332_9344 = G__9356;
chunk__9333_9345 = G__9357;
count__9334_9346 = G__9358;
i__9335_9347 = G__9359;
continue;
}
} else
{var w_9360 = cljs.core.first.call(null,seq__9332_9354__$1);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_9360))
{} else
{cljs.core.add_watch.call(null,w_9360,this$__$1,reagent.ratom._handle_change);
}
{
var G__9361 = cljs.core.next.call(null,seq__9332_9354__$1);
var G__9362 = null;
var G__9363 = (0);
var G__9364 = (0);
seq__9332_9344 = G__9361;
chunk__9333_9345 = G__9362;
count__9334_9346 = G__9363;
i__9335_9347 = G__9364;
continue;
}
}
} else
{}
}
break;
}
var seq__9336_9365 = cljs.core.seq.call(null,self__.watching);var chunk__9337_9366 = null;var count__9338_9367 = (0);var i__9339_9368 = (0);while(true){
if((i__9339_9368 < count__9338_9367))
{var w_9369 = cljs.core._nth.call(null,chunk__9337_9366,i__9339_9368);if(cljs.core.contains_QMARK_.call(null,derefed,w_9369))
{} else
{cljs.core.remove_watch.call(null,w_9369,this$__$1);
}
{
var G__9370 = seq__9336_9365;
var G__9371 = chunk__9337_9366;
var G__9372 = count__9338_9367;
var G__9373 = (i__9339_9368 + (1));
seq__9336_9365 = G__9370;
chunk__9337_9366 = G__9371;
count__9338_9367 = G__9372;
i__9339_9368 = G__9373;
continue;
}
} else
{var temp__4126__auto___9374 = cljs.core.seq.call(null,seq__9336_9365);if(temp__4126__auto___9374)
{var seq__9336_9375__$1 = temp__4126__auto___9374;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9336_9375__$1))
{var c__8216__auto___9376 = cljs.core.chunk_first.call(null,seq__9336_9375__$1);{
var G__9377 = cljs.core.chunk_rest.call(null,seq__9336_9375__$1);
var G__9378 = c__8216__auto___9376;
var G__9379 = cljs.core.count.call(null,c__8216__auto___9376);
var G__9380 = (0);
seq__9336_9365 = G__9377;
chunk__9337_9366 = G__9378;
count__9338_9367 = G__9379;
i__9339_9368 = G__9380;
continue;
}
} else
{var w_9381 = cljs.core.first.call(null,seq__9336_9375__$1);if(cljs.core.contains_QMARK_.call(null,derefed,w_9381))
{} else
{cljs.core.remove_watch.call(null,w_9381,this$__$1);
}
{
var G__9382 = cljs.core.next.call(null,seq__9336_9375__$1);
var G__9383 = null;
var G__9384 = (0);
var G__9385 = (0);
seq__9336_9365 = G__9382;
chunk__9337_9366 = G__9383;
count__9338_9367 = G__9384;
i__9339_9368 = G__9385;
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
var this$__$1 = this;var seq__9340_9386 = cljs.core.seq.call(null,self__.watching);var chunk__9341_9387 = null;var count__9342_9388 = (0);var i__9343_9389 = (0);while(true){
if((i__9343_9389 < count__9342_9388))
{var w_9390 = cljs.core._nth.call(null,chunk__9341_9387,i__9343_9389);cljs.core.remove_watch.call(null,w_9390,this$__$1);
{
var G__9391 = seq__9340_9386;
var G__9392 = chunk__9341_9387;
var G__9393 = count__9342_9388;
var G__9394 = (i__9343_9389 + (1));
seq__9340_9386 = G__9391;
chunk__9341_9387 = G__9392;
count__9342_9388 = G__9393;
i__9343_9389 = G__9394;
continue;
}
} else
{var temp__4126__auto___9395 = cljs.core.seq.call(null,seq__9340_9386);if(temp__4126__auto___9395)
{var seq__9340_9396__$1 = temp__4126__auto___9395;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9340_9396__$1))
{var c__8216__auto___9397 = cljs.core.chunk_first.call(null,seq__9340_9396__$1);{
var G__9398 = cljs.core.chunk_rest.call(null,seq__9340_9396__$1);
var G__9399 = c__8216__auto___9397;
var G__9400 = cljs.core.count.call(null,c__8216__auto___9397);
var G__9401 = (0);
seq__9340_9386 = G__9398;
chunk__9341_9387 = G__9399;
count__9342_9388 = G__9400;
i__9343_9389 = G__9401;
continue;
}
} else
{var w_9402 = cljs.core.first.call(null,seq__9340_9396__$1);cljs.core.remove_watch.call(null,w_9402,this$__$1);
{
var G__9403 = cljs.core.next.call(null,seq__9340_9396__$1);
var G__9404 = null;
var G__9405 = (0);
var G__9406 = (0);
seq__9340_9386 = G__9403;
chunk__9341_9387 = G__9404;
count__9342_9388 = G__9405;
i__9343_9389 = G__9406;
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
var this$__$1 = this;if(cljs.core.not.call(null,(function (){var or__7446__auto__ = self__.auto_run;if(cljs.core.truth_(or__7446__auto__))
{return or__7446__auto__;
} else
{return reagent.ratom._STAR_ratom_context_STAR_;
}
})()))
{var x__9176__auto___9407 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);if(typeof console !== 'undefined')
{console.log((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("dbg reagent.ratom:"+231+": [auto-run *ratom-context*]: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,x__9176__auto___9407))))));
} else
{}
} else
{}
if(cljs.core.truth_((function (){var or__7446__auto__ = self__.auto_run;if(cljs.core.truth_(or__7446__auto__))
{return or__7446__auto__;
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
var make_reaction__delegate = function (f,p__9408){var map__9410 = p__9408;var map__9410__$1 = ((cljs.core.seq_QMARK_.call(null,map__9410))?cljs.core.apply.call(null,cljs.core.hash_map,map__9410):map__9410);var derefed = cljs.core.get.call(null,map__9410__$1,new cljs.core.Keyword(null,"derefed","derefed",590684583));var on_dispose = cljs.core.get.call(null,map__9410__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));var on_set = cljs.core.get.call(null,map__9410__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));var auto_run = cljs.core.get.call(null,map__9410__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));var runner = ((cljs.core._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);var active = !((derefed == null));var dirty = !(active);var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,cljs.core.PersistentArrayMap.EMPTY,runner,on_set,on_dispose));if((derefed == null))
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
var p__9408 = null;if (arguments.length > 1) {
  p__9408 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_reaction__delegate.call(this,f,p__9408);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__9411){
var f = cljs.core.first(arglist__9411);
var p__9408 = cljs.core.rest(arglist__9411);
return make_reaction__delegate(f,p__9408);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;

// Compiled by ClojureScript 0.0-2202
goog.provide('crate.binding');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');

/**
* @constructor
*/
crate.binding.SubAtom = (function (atm,path,prevhash,watches,key){
this.atm = atm;
this.path = path;
this.prevhash = prevhash;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.SubAtom.cljs$lang$type = true;
crate.binding.SubAtom.cljs$lang$ctorStr = "crate.binding/SubAtom";
crate.binding.SubAtom.cljs$lang$ctorPrWriter = (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"crate.binding/SubAtom");
});
crate.binding.SubAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__20209 = cljs.core.seq.call(null,self__.watches);var chunk__20210 = null;var count__20211 = 0;var i__20212 = 0;while(true){
if((i__20212 < count__20211))
{var vec__20213 = cljs.core._nth.call(null,chunk__20210,i__20212);var key__$1 = cljs.core.nth.call(null,vec__20213,0,null);var f = cljs.core.nth.call(null,vec__20213,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__20215 = seq__20209;
var G__20216 = chunk__20210;
var G__20217 = count__20211;
var G__20218 = (i__20212 + 1);
seq__20209 = G__20215;
chunk__20210 = G__20216;
count__20211 = G__20217;
i__20212 = G__20218;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20209);if(temp__4126__auto__)
{var seq__20209__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20209__$1))
{var c__8617__auto__ = cljs.core.chunk_first.call(null,seq__20209__$1);{
var G__20219 = cljs.core.chunk_rest.call(null,seq__20209__$1);
var G__20220 = c__8617__auto__;
var G__20221 = cljs.core.count.call(null,c__8617__auto__);
var G__20222 = 0;
seq__20209 = G__20219;
chunk__20210 = G__20220;
count__20211 = G__20221;
i__20212 = G__20222;
continue;
}
} else
{var vec__20214 = cljs.core.first.call(null,seq__20209__$1);var key__$1 = cljs.core.nth.call(null,vec__20214,0,null);var f = cljs.core.nth.call(null,vec__20214,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__20223 = cljs.core.next.call(null,seq__20209__$1);
var G__20224 = null;
var G__20225 = 0;
var G__20226 = 0;
seq__20209 = G__20223;
chunk__20210 = G__20224;
count__20211 = G__20225;
i__20212 = G__20226;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(f))
{return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("#<SubAtom: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path))),cljs.core.str(">")].join(''));
});
crate.binding.SubAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path);
});
crate.binding.SubAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_SubAtom = (function __GT_SubAtom(atm,path,prevhash,watches,key){return (new crate.binding.SubAtom(atm,path,prevhash,watches,key));
});
crate.binding.subatom = (function subatom(atm,path){var path__$1 = ((cljs.core.coll_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));var vec__20228 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));var atm__$1 = cljs.core.nth.call(null,vec__20228,0,null);var path__$2 = cljs.core.nth.call(null,vec__20228,1,null);var k = cljs.core.gensym.call(null,"subatom");var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null,k));cljs.core.add_watch.call(null,atm__$1,k,((function (path__$1,vec__20228,atm__$1,path__$2,k,sa){
return (function (_,___$1,ov,nv){var latest = cljs.core.get_in.call(null,nv,path__$2);var prev = cljs.core.get_in.call(null,ov,path__$2);var latest_hash = cljs.core.hash.call(null,latest);if((cljs.core.not_EQ_.call(null,sa.prevhash,latest_hash)) && (cljs.core.not_EQ_.call(null,prev,latest)))
{sa.prevhash = latest_hash;
return cljs.core._notify_watches.call(null,sa,cljs.core.get_in.call(null,ov,path__$2),latest);
} else
{return null;
}
});})(path__$1,vec__20228,atm__$1,path__$2,k,sa))
);
return sa;
});
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
crate.binding.sub_reset_BANG_ = (function sub_reset_BANG_(sa,new_value){cljs.core.swap_BANG_.call(null,sa.atm,cljs.core.assoc_in,sa.path,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
crate.binding.sub_swap_BANG_ = (function() {
var sub_swap_BANG_ = null;
var sub_swap_BANG___2 = (function (sa,f){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa)));
});
var sub_swap_BANG___3 = (function (sa,f,x){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x));
});
var sub_swap_BANG___4 = (function (sa,f,x,y){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y));
});
var sub_swap_BANG___5 = (function (sa,f,x,y,z){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y,z));
});
var sub_swap_BANG___6 = (function() { 
var G__20229__delegate = function (sa,f,x,y,z,more){return crate.binding.sub_reset_BANG_.call(null,sa,cljs.core.apply.call(null,f,cljs.core.deref.call(null,sa),x,y,z,more));
};
var G__20229 = function (sa,f,x,y,z,var_args){
var more = null;if (arguments.length > 5) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__20229__delegate.call(this,sa,f,x,y,z,more);};
G__20229.cljs$lang$maxFixedArity = 5;
G__20229.cljs$lang$applyTo = (function (arglist__20230){
var sa = cljs.core.first(arglist__20230);
arglist__20230 = cljs.core.next(arglist__20230);
var f = cljs.core.first(arglist__20230);
arglist__20230 = cljs.core.next(arglist__20230);
var x = cljs.core.first(arglist__20230);
arglist__20230 = cljs.core.next(arglist__20230);
var y = cljs.core.first(arglist__20230);
arglist__20230 = cljs.core.next(arglist__20230);
var z = cljs.core.first(arglist__20230);
var more = cljs.core.rest(arglist__20230);
return G__20229__delegate(sa,f,x,y,z,more);
});
G__20229.cljs$core$IFn$_invoke$arity$variadic = G__20229__delegate;
return G__20229;
})()
;
sub_swap_BANG_ = function(sa,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return sub_swap_BANG___2.call(this,sa,f);
case 3:
return sub_swap_BANG___3.call(this,sa,f,x);
case 4:
return sub_swap_BANG___4.call(this,sa,f,x,y);
case 5:
return sub_swap_BANG___5.call(this,sa,f,x,y,z);
default:
return sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic(sa,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub_swap_BANG_.cljs$lang$maxFixedArity = 5;
sub_swap_BANG_.cljs$lang$applyTo = sub_swap_BANG___6.cljs$lang$applyTo;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = sub_swap_BANG___2;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = sub_swap_BANG___3;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = sub_swap_BANG___4;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = sub_swap_BANG___5;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic;
return sub_swap_BANG_;
})()
;
crate.binding.sub_destroy_BANG_ = (function sub_destroy_BANG_(sa){cljs.core.remove_watch.call(null,sa.atm,sa.key);
sa.watches = null;
return sa.atm = null;
});
crate.binding.computable = (function (){var obj20232 = {};return obj20232;
})();
crate.binding._compute = (function _compute(this$){if((function (){var and__7857__auto__ = this$;if(and__7857__auto__)
{return this$.crate$binding$computable$_compute$arity$1;
} else
{return and__7857__auto__;
}
})())
{return this$.crate$binding$computable$_compute$arity$1(this$);
} else
{var x__8496__auto__ = (((this$ == null))?null:this$);return (function (){var or__7869__auto__ = (crate.binding._compute[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (crate.binding._compute["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"computable.-compute",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
crate.binding.Computed = (function (atms,value,func,watches,key){
this.atms = atms;
this.value = value;
this.func = func;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.Computed.cljs$lang$type = true;
crate.binding.Computed.cljs$lang$ctorStr = "crate.binding/Computed";
crate.binding.Computed.cljs$lang$ctorPrWriter = (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"crate.binding/Computed");
});
crate.binding.Computed.prototype.crate$binding$computable$ = true;
crate.binding.Computed.prototype.crate$binding$computable$_compute$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var old = this$__$1.value;this$__$1.value = cljs.core.apply.call(null,self__.func,cljs.core.map.call(null,cljs.core.deref,self__.atms));
return cljs.core._notify_watches.call(null,this$__$1,old,this$__$1.value);
});
crate.binding.Computed.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__20233 = cljs.core.seq.call(null,self__.watches);var chunk__20234 = null;var count__20235 = 0;var i__20236 = 0;while(true){
if((i__20236 < count__20235))
{var vec__20237 = cljs.core._nth.call(null,chunk__20234,i__20236);var key__$1 = cljs.core.nth.call(null,vec__20237,0,null);var f = cljs.core.nth.call(null,vec__20237,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__20239 = seq__20233;
var G__20240 = chunk__20234;
var G__20241 = count__20235;
var G__20242 = (i__20236 + 1);
seq__20233 = G__20239;
chunk__20234 = G__20240;
count__20235 = G__20241;
i__20236 = G__20242;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20233);if(temp__4126__auto__)
{var seq__20233__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20233__$1))
{var c__8617__auto__ = cljs.core.chunk_first.call(null,seq__20233__$1);{
var G__20243 = cljs.core.chunk_rest.call(null,seq__20233__$1);
var G__20244 = c__8617__auto__;
var G__20245 = cljs.core.count.call(null,c__8617__auto__);
var G__20246 = 0;
seq__20233 = G__20243;
chunk__20234 = G__20244;
count__20235 = G__20245;
i__20236 = G__20246;
continue;
}
} else
{var vec__20238 = cljs.core.first.call(null,seq__20233__$1);var key__$1 = cljs.core.nth.call(null,vec__20238,0,null);var f = cljs.core.nth.call(null,vec__20238,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__20247 = cljs.core.next.call(null,seq__20233__$1);
var G__20248 = null;
var G__20249 = 0;
var G__20250 = 0;
seq__20233 = G__20247;
chunk__20234 = G__20248;
count__20235 = G__20249;
i__20236 = G__20250;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(f))
{return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.Computed.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("#<Computed: "),cljs.core.str(cljs.core.pr_str.call(null,self__.value)),cljs.core.str(">")].join(''));
});
crate.binding.Computed.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
crate.binding.Computed.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_Computed = (function __GT_Computed(atms,value,func,watches,key){return (new crate.binding.Computed(atms,value,func,watches,key));
});
crate.binding.computed = (function computed(atms,func){var k = cljs.core.gensym.call(null,"computed");var neue = (new crate.binding.Computed(atms,null,func,null,k));crate.binding._compute.call(null,neue);
var seq__20255_20259 = cljs.core.seq.call(null,atms);var chunk__20256_20260 = null;var count__20257_20261 = 0;var i__20258_20262 = 0;while(true){
if((i__20258_20262 < count__20257_20261))
{var atm_20263 = cljs.core._nth.call(null,chunk__20256_20260,i__20258_20262);cljs.core.add_watch.call(null,atm_20263,k,((function (seq__20255_20259,chunk__20256_20260,count__20257_20261,i__20258_20262,atm_20263,k,neue){
return (function (_,___$1,___$2,___$3){return crate.binding._compute.call(null,neue);
});})(seq__20255_20259,chunk__20256_20260,count__20257_20261,i__20258_20262,atm_20263,k,neue))
);
{
var G__20264 = seq__20255_20259;
var G__20265 = chunk__20256_20260;
var G__20266 = count__20257_20261;
var G__20267 = (i__20258_20262 + 1);
seq__20255_20259 = G__20264;
chunk__20256_20260 = G__20265;
count__20257_20261 = G__20266;
i__20258_20262 = G__20267;
continue;
}
} else
{var temp__4126__auto___20268 = cljs.core.seq.call(null,seq__20255_20259);if(temp__4126__auto___20268)
{var seq__20255_20269__$1 = temp__4126__auto___20268;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20255_20269__$1))
{var c__8617__auto___20270 = cljs.core.chunk_first.call(null,seq__20255_20269__$1);{
var G__20271 = cljs.core.chunk_rest.call(null,seq__20255_20269__$1);
var G__20272 = c__8617__auto___20270;
var G__20273 = cljs.core.count.call(null,c__8617__auto___20270);
var G__20274 = 0;
seq__20255_20259 = G__20271;
chunk__20256_20260 = G__20272;
count__20257_20261 = G__20273;
i__20258_20262 = G__20274;
continue;
}
} else
{var atm_20275 = cljs.core.first.call(null,seq__20255_20269__$1);cljs.core.add_watch.call(null,atm_20275,k,((function (seq__20255_20259,chunk__20256_20260,count__20257_20261,i__20258_20262,atm_20275,seq__20255_20269__$1,temp__4126__auto___20268,k,neue){
return (function (_,___$1,___$2,___$3){return crate.binding._compute.call(null,neue);
});})(seq__20255_20259,chunk__20256_20260,count__20257_20261,i__20258_20262,atm_20275,seq__20255_20269__$1,temp__4126__auto___20268,k,neue))
);
{
var G__20276 = cljs.core.next.call(null,seq__20255_20269__$1);
var G__20277 = null;
var G__20278 = 0;
var G__20279 = 0;
seq__20255_20259 = G__20276;
chunk__20256_20260 = G__20277;
count__20257_20261 = G__20278;
i__20258_20262 = G__20279;
continue;
}
}
} else
{}
}
break;
}
return neue;
});
crate.binding.z = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
crate.binding.y = crate.binding.computed.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.z], null),(function (z){return cljs.core.filter.call(null,cljs.core.even_QMARK_,z);
}));
crate.binding.r = crate.binding.computed.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.y], null),(function (y){return cljs.core.filter.call(null,(function (p1__20280_SHARP_){return (p1__20280_SHARP_ > 100);
}),y);
}));
cljs.core.swap_BANG_.call(null,crate.binding.z,cljs.core.conj,1340);
cljs.core.deref.call(null,crate.binding.y);
cljs.core.deref.call(null,crate.binding.r);
crate.binding.notify = (function notify(w,o,v){return cljs.core._notify_watches.call(null,w,o,v);
});
crate.binding.bindable_coll = (function (){var obj20282 = {};return obj20282;
})();
crate.binding.bindable = (function (){var obj20284 = {};return obj20284;
})();
crate.binding._value = (function _value(this$){if((function (){var and__7857__auto__ = this$;if(and__7857__auto__)
{return this$.crate$binding$bindable$_value$arity$1;
} else
{return and__7857__auto__;
}
})())
{return this$.crate$binding$bindable$_value$arity$1(this$);
} else
{var x__8496__auto__ = (((this$ == null))?null:this$);return (function (){var or__7869__auto__ = (crate.binding._value[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (crate.binding._value["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-value",this$);
}
}
})().call(null,this$);
}
});
crate.binding._on_change = (function _on_change(this$,func){if((function (){var and__7857__auto__ = this$;if(and__7857__auto__)
{return this$.crate$binding$bindable$_on_change$arity$2;
} else
{return and__7857__auto__;
}
})())
{return this$.crate$binding$bindable$_on_change$arity$2(this$,func);
} else
{var x__8496__auto__ = (((this$ == null))?null:this$);return (function (){var or__7869__auto__ = (crate.binding._on_change[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (crate.binding._on_change["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-on-change",this$);
}
}
})().call(null,this$,func);
}
});

/**
* @constructor
*/
crate.binding.atom_binding = (function (atm,value_func){
this.atm = atm;
this.value_func = value_func;
})
crate.binding.atom_binding.cljs$lang$type = true;
crate.binding.atom_binding.cljs$lang$ctorStr = "crate.binding/atom-binding";
crate.binding.atom_binding.cljs$lang$ctorPrWriter = (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"crate.binding/atom-binding");
});
crate.binding.atom_binding.prototype.crate$binding$bindable$ = true;
crate.binding.atom_binding.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.value_func.call(null,cljs.core.deref.call(null,self__.atm));
});
crate.binding.atom_binding.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.atm,cljs.core.gensym.call(null,"atom-binding"),((function (this$__$1){
return (function (){return func.call(null,crate.binding._value.call(null,this$__$1));
});})(this$__$1))
);
});
crate.binding.__GT_atom_binding = (function __GT_atom_binding(atm,value_func){return (new crate.binding.atom_binding(atm,value_func));
});

/**
* @constructor
*/
crate.binding.notifier = (function (watches){
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 0;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.notifier.cljs$lang$type = true;
crate.binding.notifier.cljs$lang$ctorStr = "crate.binding/notifier";
crate.binding.notifier.cljs$lang$ctorPrWriter = (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"crate.binding/notifier");
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__20285 = cljs.core.seq.call(null,self__.watches);var chunk__20286 = null;var count__20287 = 0;var i__20288 = 0;while(true){
if((i__20288 < count__20287))
{var vec__20289 = cljs.core._nth.call(null,chunk__20286,i__20288);var key = cljs.core.nth.call(null,vec__20289,0,null);var f = cljs.core.nth.call(null,vec__20289,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__20291 = seq__20285;
var G__20292 = chunk__20286;
var G__20293 = count__20287;
var G__20294 = (i__20288 + 1);
seq__20285 = G__20291;
chunk__20286 = G__20292;
count__20287 = G__20293;
i__20288 = G__20294;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20285);if(temp__4126__auto__)
{var seq__20285__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20285__$1))
{var c__8617__auto__ = cljs.core.chunk_first.call(null,seq__20285__$1);{
var G__20295 = cljs.core.chunk_rest.call(null,seq__20285__$1);
var G__20296 = c__8617__auto__;
var G__20297 = cljs.core.count.call(null,c__8617__auto__);
var G__20298 = 0;
seq__20285 = G__20295;
chunk__20286 = G__20296;
count__20287 = G__20297;
i__20288 = G__20298;
continue;
}
} else
{var vec__20290 = cljs.core.first.call(null,seq__20285__$1);var key = cljs.core.nth.call(null,vec__20290,0,null);var f = cljs.core.nth.call(null,vec__20290,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__20299 = cljs.core.next.call(null,seq__20285__$1);
var G__20300 = null;
var G__20301 = 0;
var G__20302 = 0;
seq__20285 = G__20299;
chunk__20286 = G__20300;
count__20287 = G__20301;
i__20288 = G__20302;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
crate.binding.__GT_notifier = (function __GT_notifier(watches){return (new crate.binding.notifier(watches));
});

/**
* @constructor
*/
crate.binding.bound_collection = (function (atm,notif,opts,stuff){
this.atm = atm;
this.notif = notif;
this.opts = opts;
this.stuff = stuff;
})
crate.binding.bound_collection.cljs$lang$type = true;
crate.binding.bound_collection.cljs$lang$ctorStr = "crate.binding/bound-collection";
crate.binding.bound_collection.cljs$lang$ctorPrWriter = (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"crate.binding/bound-collection");
});
crate.binding.bound_collection.prototype.crate$binding$bindable$ = true;
crate.binding.bound_collection.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.map.call(null,new cljs.core.Keyword(null,"elem","elem",1017020161),cljs.core.vals.call(null,this$__$1.stuff));
});
crate.binding.bound_collection.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.notif,cljs.core.gensym.call(null,"bound-coll"),((function (this$__$1){
return (function (_,___$1,___$2,p__20303){var vec__20304 = p__20303;var event = cljs.core.nth.call(null,vec__20304,0,null);var el = cljs.core.nth.call(null,vec__20304,1,null);var v = cljs.core.nth.call(null,vec__20304,2,null);return func.call(null,event,el,v);
});})(this$__$1))
);
});
crate.binding.bound_collection.prototype.crate$binding$bindable_coll$ = true;
crate.binding.__GT_bound_collection = (function __GT_bound_collection(atm,notif,opts,stuff){return (new crate.binding.bound_collection(atm,notif,opts,stuff));
});
crate.binding.opt = (function opt(bc,k){return bc.opts.call(null,k);
});
crate.binding.bc_add = (function bc_add(bc,path,key){var sa = crate.binding.subatom.call(null,bc.atm,path);var elem = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"as","as",1013907364)).call(null,sa);bc.stuff = cljs.core.assoc.call(null,bc.stuff,key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",1017020161),elem,new cljs.core.Keyword(null,"subatom","subatom",3440732931),sa], null));
return crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add","add",1014000659),elem,cljs.core.deref.call(null,sa)], null));
});
crate.binding.bc_remove = (function bc_remove(bc,key){var notif = bc.notif;var prev = bc.stuff.call(null,key);bc.stuff = cljs.core.dissoc.call(null,bc.stuff,key);
crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",4374260726),new cljs.core.Keyword(null,"elem","elem",1017020161).cljs$core$IFn$_invoke$arity$1(prev),null], null));
return crate.binding.sub_destroy_BANG_.call(null,new cljs.core.Keyword(null,"subatom","subatom",3440732931).cljs$core$IFn$_invoke$arity$1(prev));
});
crate.binding.__GT_indexed = (function __GT_indexed(coll){if(cljs.core.map_QMARK_.call(null,coll))
{return cljs.core.seq.call(null,coll);
} else
{if(cljs.core.set_QMARK_.call(null,coll))
{return cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.identity),coll);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.map_indexed.call(null,cljs.core.vector,coll);
} else
{return null;
}
}
}
});
crate.binding.__GT_keyed = (function __GT_keyed(coll,keyfn){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,keyfn,crate.binding.__GT_indexed.call(null,coll)));
});
/**
* @param {...*} var_args
*/
crate.binding.__GT_path = (function() { 
var __GT_path__delegate = function (bc,segs){return cljs.core.concat.call(null,(function (){var or__7869__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"path","path",1017337751));if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),segs);
};
var __GT_path = function (bc,var_args){
var segs = null;if (arguments.length > 1) {
  segs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return __GT_path__delegate.call(this,bc,segs);};
__GT_path.cljs$lang$maxFixedArity = 1;
__GT_path.cljs$lang$applyTo = (function (arglist__20305){
var bc = cljs.core.first(arglist__20305);
var segs = cljs.core.rest(arglist__20305);
return __GT_path__delegate(bc,segs);
});
__GT_path.cljs$core$IFn$_invoke$arity$variadic = __GT_path__delegate;
return __GT_path;
})()
;
crate.binding.bc_compare = (function bc_compare(bc,neue){var prev = bc.stuff;var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433)));var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));var seq__20314_20322 = cljs.core.seq.call(null,added);var chunk__20315_20323 = null;var count__20316_20324 = 0;var i__20317_20325 = 0;while(true){
if((i__20317_20325 < count__20316_20324))
{var a_20326 = cljs.core._nth.call(null,chunk__20315_20323,i__20317_20325);crate.binding.bc_add.call(null,bc,a_20326,a_20326);
{
var G__20327 = seq__20314_20322;
var G__20328 = chunk__20315_20323;
var G__20329 = count__20316_20324;
var G__20330 = (i__20317_20325 + 1);
seq__20314_20322 = G__20327;
chunk__20315_20323 = G__20328;
count__20316_20324 = G__20329;
i__20317_20325 = G__20330;
continue;
}
} else
{var temp__4126__auto___20331 = cljs.core.seq.call(null,seq__20314_20322);if(temp__4126__auto___20331)
{var seq__20314_20332__$1 = temp__4126__auto___20331;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20314_20332__$1))
{var c__8617__auto___20333 = cljs.core.chunk_first.call(null,seq__20314_20332__$1);{
var G__20334 = cljs.core.chunk_rest.call(null,seq__20314_20332__$1);
var G__20335 = c__8617__auto___20333;
var G__20336 = cljs.core.count.call(null,c__8617__auto___20333);
var G__20337 = 0;
seq__20314_20322 = G__20334;
chunk__20315_20323 = G__20335;
count__20316_20324 = G__20336;
i__20317_20325 = G__20337;
continue;
}
} else
{var a_20338 = cljs.core.first.call(null,seq__20314_20332__$1);crate.binding.bc_add.call(null,bc,a_20338,a_20338);
{
var G__20339 = cljs.core.next.call(null,seq__20314_20332__$1);
var G__20340 = null;
var G__20341 = 0;
var G__20342 = 0;
seq__20314_20322 = G__20339;
chunk__20315_20323 = G__20340;
count__20316_20324 = G__20341;
i__20317_20325 = G__20342;
continue;
}
}
} else
{}
}
break;
}
var seq__20318 = cljs.core.seq.call(null,removed);var chunk__20319 = null;var count__20320 = 0;var i__20321 = 0;while(true){
if((i__20321 < count__20320))
{var r = cljs.core._nth.call(null,chunk__20319,i__20321);crate.binding.bc_remove.call(null,bc,r);
{
var G__20343 = seq__20318;
var G__20344 = chunk__20319;
var G__20345 = count__20320;
var G__20346 = (i__20321 + 1);
seq__20318 = G__20343;
chunk__20319 = G__20344;
count__20320 = G__20345;
i__20321 = G__20346;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20318);if(temp__4126__auto__)
{var seq__20318__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20318__$1))
{var c__8617__auto__ = cljs.core.chunk_first.call(null,seq__20318__$1);{
var G__20347 = cljs.core.chunk_rest.call(null,seq__20318__$1);
var G__20348 = c__8617__auto__;
var G__20349 = cljs.core.count.call(null,c__8617__auto__);
var G__20350 = 0;
seq__20318 = G__20347;
chunk__20319 = G__20348;
count__20320 = G__20349;
i__20321 = G__20350;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__20318__$1);crate.binding.bc_remove.call(null,bc,r);
{
var G__20351 = cljs.core.next.call(null,seq__20318__$1);
var G__20352 = null;
var G__20353 = 0;
var G__20354 = 0;
seq__20318 = G__20351;
chunk__20319 = G__20352;
count__20320 = G__20353;
i__20321 = G__20354;
continue;
}
}
} else
{return null;
}
}
break;
}
});
/**
* @param {...*} var_args
*/
crate.binding.bound_coll = (function() { 
var bound_coll__delegate = function (atm,p__20355){var vec__20358 = p__20355;var path = cljs.core.nth.call(null,vec__20358,0,null);var opts = cljs.core.nth.call(null,vec__20358,1,null);var vec__20359 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));var path__$1 = cljs.core.nth.call(null,vec__20359,0,null);var opts__$1 = cljs.core.nth.call(null,vec__20359,1,null);var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));var opts__$2 = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"path","path",1017337751),path__$1);var opts__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (vec__20359,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__20358,path,opts){
return (function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
});})(vec__20359,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__20358,path,opts))
);
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var bound_coll = function (atm,var_args){
var p__20355 = null;if (arguments.length > 1) {
  p__20355 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound_coll__delegate.call(this,atm,p__20355);};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__20360){
var atm = cljs.core.first(arglist__20360);
var p__20355 = cljs.core.rest(arglist__20360);
return bound_coll__delegate(atm,p__20355);
});
bound_coll.cljs$core$IFn$_invoke$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
/**
* @param {...*} var_args
*/
crate.binding.map_bound = (function() { 
var map_bound__delegate = function (as,atm,p__20361){var vec__20363 = p__20361;var opts = cljs.core.nth.call(null,vec__20363,0,null);var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1013907364),as);var atm__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom.call(null,atm,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)));var opts__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (opts__$1,atm__$1,opts__$2,bc,vec__20363,opts){
return (function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
});})(opts__$1,atm__$1,opts__$2,bc,vec__20363,opts))
);
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var map_bound = function (as,atm,var_args){
var p__20361 = null;if (arguments.length > 2) {
  p__20361 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return map_bound__delegate.call(this,as,atm,p__20361);};
map_bound.cljs$lang$maxFixedArity = 2;
map_bound.cljs$lang$applyTo = (function (arglist__20364){
var as = cljs.core.first(arglist__20364);
arglist__20364 = cljs.core.next(arglist__20364);
var atm = cljs.core.first(arglist__20364);
var p__20361 = cljs.core.rest(arglist__20364);
return map_bound__delegate(as,atm,p__20361);
});
map_bound.cljs$core$IFn$_invoke$arity$variadic = map_bound__delegate;
return map_bound;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){var G__20366 = b;if(G__20366)
{var bit__8519__auto__ = null;if(cljs.core.truth_((function (){var or__7869__auto__ = bit__8519__auto__;if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return G__20366.crate$binding$bindable$;
}
})()))
{return true;
} else
{if((!G__20366.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__20366);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__20366);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){var G__20368 = b;if(G__20368)
{var bit__8519__auto__ = null;if(cljs.core.truth_((function (){var or__7869__auto__ = bit__8519__auto__;if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return G__20368.crate$binding$bindable_coll$;
}
})()))
{return true;
} else
{if((!G__20368.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__20368);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__20368);
}
});
crate.binding.deref_QMARK_ = (function deref_QMARK_(atm){var G__20370 = atm;if(G__20370)
{var bit__8519__auto__ = (G__20370.cljs$lang$protocol_mask$partition0$ & 32768);if((bit__8519__auto__) || (G__20370.cljs$core$IDeref$))
{return true;
} else
{if((!G__20370.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__20370);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__20370);
}
});
crate.binding.value = (function value(b){return crate.binding._value.call(null,b);
});
crate.binding.index = (function index(sub_atom){return cljs.core.last.call(null,sub_atom.path);
});
crate.binding.on_change = (function on_change(b,func){return crate.binding._on_change.call(null,b,func);
});
/**
* @param {...*} var_args
*/
crate.binding.bound = (function() { 
var bound__delegate = function (atm,p__20371){var vec__20373 = p__20371;var func = cljs.core.nth.call(null,vec__20373,0,null);var func__$1 = (function (){var or__7869__auto__ = func;if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return cljs.core.identity;
}
})();return (new crate.binding.atom_binding(atm,func__$1));
};
var bound = function (atm,var_args){
var p__20371 = null;if (arguments.length > 1) {
  p__20371 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound__delegate.call(this,atm,p__20371);};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__20374){
var atm = cljs.core.first(arglist__20374);
var p__20371 = cljs.core.rest(arglist__20374);
return bound__delegate(atm,p__20371);
});
bound.cljs$core$IFn$_invoke$arity$variadic = bound__delegate;
return bound;
})()
;

//# sourceMappingURL=binding.js.map
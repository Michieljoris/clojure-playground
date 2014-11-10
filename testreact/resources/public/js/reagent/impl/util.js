// Compiled by ClojureScript 0.0-2371
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.util.is_client = (typeof window !== 'undefined') && (!(((window["document"]) == null)));
reagent.impl.util.extract_props = (function extract_props(v){var p = cljs.core.nth.call(null,v,(1),null);if(cljs.core.map_QMARK_.call(null,p))
{return p;
} else
{return null;
}
});
reagent.impl.util.extract_children = (function extract_children(v){var p = cljs.core.nth.call(null,v,(1),null);var first_child = ((((p == null)) || (cljs.core.map_QMARK_.call(null,p)))?(2):(1));if((cljs.core.count.call(null,v) > first_child))
{return cljs.core.subvec.call(null,v,first_child);
} else
{return null;
}
});
reagent.impl.util.get_argv = (function get_argv(c){return (c["props"]["argv"]);
});
reagent.impl.util.get_props = (function get_props(c){return reagent.impl.util.extract_props.call(null,(c["props"]["argv"]));
});
reagent.impl.util.get_children = (function get_children(c){return reagent.impl.util.extract_children.call(null,(c["props"]["argv"]));
});
reagent.impl.util.reagent_component_QMARK_ = (function reagent_component_QMARK_(c){return !(((c["props"]["argv"]) == null));
});
reagent.impl.util.cached_react_class = (function cached_react_class(c){return (c["cljsReactClass"]);
});
reagent.impl.util.cache_react_class = (function cache_react_class(c,constructor){return (c["cljsReactClass"] = constructor);
});
reagent.impl.util.memoize_1 = (function memoize_1(f){var mem = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);return ((function (mem){
return (function (arg){var v = cljs.core.get.call(null,cljs.core.deref.call(null,mem),arg);if(!((v == null)))
{return v;
} else
{var ret = f.call(null,arg);cljs.core.swap_BANG_.call(null,mem,cljs.core.assoc,arg,ret);
return ret;
}
});
;})(mem))
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function capitalize(s){if((cljs.core.count.call(null,s) < (2)))
{return clojure.string.upper_case.call(null,s);
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,(0),(1))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(1))));
}
});
reagent.impl.util.dash_to_camel = (function dash_to_camel(dashed){if(typeof dashed === 'string')
{return dashed;
} else
{var name_str = cljs.core.name.call(null,dashed);var vec__17279 = clojure.string.split.call(null,name_str,/-/);var start = cljs.core.nth.call(null,vec__17279,(0),null);var parts = cljs.core.nthnext.call(null,vec__17279,(1));if(cljs.core.truth_(reagent.impl.util.dont_camel_case.call(null,start)))
{return name_str;
} else
{return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,reagent.impl.util.capitalize,parts));
}
}
});

/**
* @constructor
*/
reagent.impl.util.partial_ifn = (function (f,args,p){
this.f = f;
this.args = args;
this.p = p;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
})
reagent.impl.util.partial_ifn.cljs$lang$type = true;
reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";
reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__12073__auto__,writer__12074__auto__,opt__12075__auto__){return cljs.core._write.call(null,writer__12074__auto__,"reagent.impl.util/partial-ifn");
});
reagent.impl.util.partial_ifn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});
reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;return (cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args));
});
reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__17281__delegate = function (self__,a){var self____$1 = this;var _ = self____$1;var or__11496__auto___17282 = self__.p;if(cljs.core.truth_(or__11496__auto___17282))
{} else
{self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}
return cljs.core.apply.call(null,self__.p,a);
};
var G__17281 = function (self__,var_args){
var self__ = this;
var a = null;if (arguments.length > 1) {
  a = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__17281__delegate.call(this,self__,a);};
G__17281.cljs$lang$maxFixedArity = 1;
G__17281.cljs$lang$applyTo = (function (arglist__17283){
var self__ = cljs.core.first(arglist__17283);
var a = cljs.core.rest(arglist__17283);
return G__17281__delegate(self__,a);
});
G__17281.cljs$core$IFn$_invoke$arity$variadic = G__17281__delegate;
return G__17281;
})()
;
reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args17280){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args17280)));
});
reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__17284__delegate = function (a){var _ = this;var or__11496__auto___17285 = self__.p;if(cljs.core.truth_(or__11496__auto___17285))
{} else
{self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}
return cljs.core.apply.call(null,self__.p,a);
};
var G__17284 = function (var_args){
var self__ = this;
var a = null;if (arguments.length > 0) {
  a = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__17284__delegate.call(this,a);};
G__17284.cljs$lang$maxFixedArity = 0;
G__17284.cljs$lang$applyTo = (function (arglist__17286){
var a = cljs.core.seq(arglist__17286);
return G__17284__delegate(a);
});
G__17284.cljs$core$IFn$_invoke$arity$variadic = G__17284__delegate;
return G__17284;
})()
;
reagent.impl.util.__GT_partial_ifn = (function __GT_partial_ifn(f,args,p){return (new reagent.impl.util.partial_ifn(f,args,p));
});
reagent.impl.util.clj_ifn_QMARK_ = (function clj_ifn_QMARK_(x){var or__11496__auto__ = cljs.core.ifn_QMARK_.call(null,x);if(or__11496__auto__)
{return or__11496__auto__;
} else
{var G__17290 = x;if(G__17290)
{var bit__12160__auto__ = (G__17290.cljs$lang$protocol_mask$partition1$ & (256));if((bit__12160__auto__) || (G__17290.cljs$core$IMultiFn$))
{return true;
} else
{if((!G__17290.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMultiFn,G__17290);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMultiFn,G__17290);
}
}
});
reagent.impl.util.merge_class = (function merge_class(p1,p2){var class$ = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1);if(cljs.core.truth_(temp__4126__auto__))
{var c1 = temp__4126__auto__;var temp__4126__auto____$1 = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p2);if(cljs.core.truth_(temp__4126__auto____$1))
{var c2 = temp__4126__auto____$1;return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c1)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c2));
} else
{return null;
}
} else
{return null;
}
})();if((class$ == null))
{return p2;
} else
{return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"class","class",-2030961996),class$);
}
});
reagent.impl.util.merge_style = (function merge_style(p1,p2){var style = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p1);if(cljs.core.truth_(temp__4126__auto__))
{var s1 = temp__4126__auto__;var temp__4126__auto____$1 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p2);if(cljs.core.truth_(temp__4126__auto____$1))
{var s2 = temp__4126__auto____$1;return cljs.core.merge.call(null,s1,s2);
} else
{return null;
}
} else
{return null;
}
})();if((style == null))
{return p2;
} else
{return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"style","style",-496642736),style);
}
});
reagent.impl.util.merge_props = (function merge_props(p1,p2){if((p1 == null))
{return p2;
} else
{if(cljs.core.map_QMARK_.call(null,p1))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"p1","p1",703771573,null)))))));
}
return reagent.impl.util.merge_style.call(null,p1,reagent.impl.util.merge_class.call(null,p1,cljs.core.merge.call(null,p1,p2)));
}
});
reagent.impl.util.doc_node_type = (9);
reagent.impl.util.react_id_name = "data-reactid";
reagent.impl.util.get_react_node = (function get_react_node(cont){if((cont == null))
{return null;
} else
{if((reagent.impl.util.doc_node_type === (cont["nodeType"])))
{return (cont["documentElement"]);
} else
{return (cont["firstChild"]);
}
}
});
reagent.impl.util.get_root_id = (function get_root_id(cont){var G__17292 = reagent.impl.util.get_react_node.call(null,cont);var G__17292__$1 = (((G__17292 == null))?null:(G__17292["getAttribute"])(reagent.impl.util.react_id_name));return G__17292__$1;
});
reagent.impl.util.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
reagent.impl.util.re_render_component = (function re_render_component(comp,container){try{return (React["renderComponent"])(comp.call(null),container);
}catch (e17295){if((e17295 instanceof Object))
{var e = e17295;try{(React["unmountComponentAtNode"])(container);
}catch (e17296){if((e17296 instanceof Object))
{var e_17297__$1 = e17296;if(typeof console !== 'undefined')
{console.log(e_17297__$1);
} else
{}
} else
{throw e17296;

}
}var temp__4126__auto___17298 = reagent.impl.util.get_react_node.call(null,container);if(cljs.core.truth_(temp__4126__auto___17298))
{var n_17299 = temp__4126__auto___17298;(n_17299["removeAttribute"])(reagent.impl.util.react_id_name);
(n_17299["innerHTML"] = "");
} else
{}
throw e;
} else
{throw e17295;

}
}});
reagent.impl.util.render_component = (function render_component(comp,container,callback){return (React["renderComponent"])(comp.call(null),container,(function (){var id_17300 = reagent.impl.util.get_root_id.call(null,container);if((id_17300 == null))
{} else
{cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.assoc,id_17300,((function (id_17300){
return (function (){return reagent.impl.util.re_render_component.call(null,comp,container);
});})(id_17300))
);
}
if((callback == null))
{return null;
} else
{return callback.call(null);
}
}));
});
reagent.impl.util.unmount_component_at_node = (function unmount_component_at_node(container){var id_17301 = reagent.impl.util.get_root_id.call(null,container);if((id_17301 == null))
{} else
{cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.dissoc,id_17301);
}
return (React["unmountComponentAtNode"])(container);
});
reagent.impl.util.force_update_all = (function force_update_all(){var _STAR_always_update_STAR_17307_17312 = reagent.impl.util._STAR_always_update_STAR_;try{reagent.impl.util._STAR_always_update_STAR_ = true;
var seq__17308_17313 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.impl.util.roots)));var chunk__17309_17314 = null;var count__17310_17315 = (0);var i__17311_17316 = (0);while(true){
if((i__17311_17316 < count__17310_17315))
{var f_17317 = cljs.core._nth.call(null,chunk__17309_17314,i__17311_17316);f_17317.call(null);
{
var G__17318 = seq__17308_17313;
var G__17319 = chunk__17309_17314;
var G__17320 = count__17310_17315;
var G__17321 = (i__17311_17316 + (1));
seq__17308_17313 = G__17318;
chunk__17309_17314 = G__17319;
count__17310_17315 = G__17320;
i__17311_17316 = G__17321;
continue;
}
} else
{var temp__4126__auto___17322 = cljs.core.seq.call(null,seq__17308_17313);if(temp__4126__auto___17322)
{var seq__17308_17323__$1 = temp__4126__auto___17322;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17308_17323__$1))
{var c__12266__auto___17324 = cljs.core.chunk_first.call(null,seq__17308_17323__$1);{
var G__17325 = cljs.core.chunk_rest.call(null,seq__17308_17323__$1);
var G__17326 = c__12266__auto___17324;
var G__17327 = cljs.core.count.call(null,c__12266__auto___17324);
var G__17328 = (0);
seq__17308_17313 = G__17325;
chunk__17309_17314 = G__17326;
count__17310_17315 = G__17327;
i__17311_17316 = G__17328;
continue;
}
} else
{var f_17329 = cljs.core.first.call(null,seq__17308_17323__$1);f_17329.call(null);
{
var G__17330 = cljs.core.next.call(null,seq__17308_17323__$1);
var G__17331 = null;
var G__17332 = (0);
var G__17333 = (0);
seq__17308_17313 = G__17330;
chunk__17309_17314 = G__17331;
count__17310_17315 = G__17332;
i__17311_17316 = G__17333;
continue;
}
}
} else
{}
}
break;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_17307_17312;
}return "Updated";
});
reagent.impl.util._not_found = (function (){var obj17335 = {};return obj17335;
})();
reagent.impl.util.identical_ish_QMARK_ = (function identical_ish_QMARK_(x,y){return (cljs.core.keyword_identical_QMARK_.call(null,x,y)) || ((((x instanceof cljs.core.Symbol)) || ((cljs.core.type.call(null,x) === reagent.impl.util.partial_ifn))) && (cljs.core._EQ_.call(null,x,y)));
});
reagent.impl.util.shallow_equal_maps = (function shallow_equal_maps(x,y){var or__11496__auto__ = (x === y);if(or__11496__auto__)
{return or__11496__auto__;
} else
{var and__11484__auto__ = cljs.core.map_QMARK_.call(null,x);if(and__11484__auto__)
{var and__11484__auto____$1 = cljs.core.map_QMARK_.call(null,y);if(and__11484__auto____$1)
{var and__11484__auto____$2 = (cljs.core.count.call(null,x) === cljs.core.count.call(null,y));if(and__11484__auto____$2)
{return cljs.core.reduce_kv.call(null,((function (and__11484__auto____$2,and__11484__auto____$1,and__11484__auto__,or__11496__auto__){
return (function (res,k,v){var yv = cljs.core.get.call(null,y,k,reagent.impl.util._not_found);if(cljs.core.truth_((function (){var or__11496__auto____$1 = (v === yv);if(or__11496__auto____$1)
{return or__11496__auto____$1;
} else
{var or__11496__auto____$2 = reagent.impl.util.identical_ish_QMARK_.call(null,v,yv);if(or__11496__auto____$2)
{return or__11496__auto____$2;
} else
{var and__11484__auto____$3 = cljs.core.keyword_identical_QMARK_.call(null,k,new cljs.core.Keyword(null,"style","style",-496642736));if(and__11484__auto____$3)
{return shallow_equal_maps.call(null,v,yv);
} else
{return and__11484__auto____$3;
}
}
}
})()))
{return res;
} else
{return cljs.core.reduced.call(null,false);
}
});})(and__11484__auto____$2,and__11484__auto____$1,and__11484__auto__,or__11496__auto__))
,true,x);
} else
{return and__11484__auto____$2;
}
} else
{return and__11484__auto____$1;
}
} else
{return and__11484__auto__;
}
}
});
reagent.impl.util.equal_args = (function equal_args(v1,v2){if(cljs.core.vector_QMARK_.call(null,v1))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v1","v1",-2141311508,null)))))));
}
if(cljs.core.vector_QMARK_.call(null,v2))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v2","v2",1875554983,null)))))));
}
var or__11496__auto__ = (v1 === v2);if(or__11496__auto__)
{return or__11496__auto__;
} else
{var and__11484__auto__ = (cljs.core.count.call(null,v1) === cljs.core.count.call(null,v2));if(and__11484__auto__)
{return cljs.core.reduce_kv.call(null,((function (and__11484__auto__,or__11496__auto__){
return (function (res,k,v){var v_SINGLEQUOTE_ = cljs.core.nth.call(null,v2,k);if(cljs.core.truth_((function (){var or__11496__auto____$1 = (v === v_SINGLEQUOTE_);if(or__11496__auto____$1)
{return or__11496__auto____$1;
} else
{var or__11496__auto____$2 = reagent.impl.util.identical_ish_QMARK_.call(null,v,v_SINGLEQUOTE_);if(or__11496__auto____$2)
{return or__11496__auto____$2;
} else
{var and__11484__auto____$1 = cljs.core.map_QMARK_.call(null,v);if(and__11484__auto____$1)
{return reagent.impl.util.shallow_equal_maps.call(null,v,v_SINGLEQUOTE_);
} else
{return and__11484__auto____$1;
}
}
}
})()))
{return res;
} else
{return cljs.core.reduced.call(null,false);
}
});})(and__11484__auto__,or__11496__auto__))
,true,v1);
} else
{return and__11484__auto__;
}
}
});

//# sourceMappingURL=util.js.map
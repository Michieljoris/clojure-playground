// Compiled by ClojureScript 0.0-2202
goog.provide('crate.compiler');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('crate.binding');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('goog.style');
goog.require('goog.dom');
goog.require('goog.dom');
crate.compiler.xmlns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xhtml","xhtml",1127939989),"http://www.w3.org/1999/xhtml",new cljs.core.Keyword(null,"svg","svg",1014018518),"http://www.w3.org/2000/svg"], null);
crate.compiler.group_id = cljs.core.atom.call(null,0);
crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
crate.compiler.capture_binding = (function capture_binding(tag,b){return cljs.core.swap_BANG_.call(null,crate.compiler.bindings,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,b], null));
});
crate.compiler.as_content = (function as_content(parent,content){var seq__20063 = cljs.core.seq.call(null,content);var chunk__20064 = null;var count__20065 = 0;var i__20066 = 0;while(true){
if((i__20066 < count__20065))
{var c = cljs.core._nth.call(null,chunk__20064,i__20066);var child_20067 = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?as_content.call(null,parent,c):((crate.binding.binding_coll_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"coll","coll",1016963678),c);
return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})():((crate.binding.binding_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"text","text",1017460895),c);
return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get(0):((new cljs.core.Keyword(null,"else","else",1017020587))?goog.dom.createTextNode([cljs.core.str(c)].join('')):null))))))))));if(cljs.core.truth_(child_20067))
{goog.dom.appendChild(parent,child_20067);
} else
{}
{
var G__20068 = seq__20063;
var G__20069 = chunk__20064;
var G__20070 = count__20065;
var G__20071 = (i__20066 + 1);
seq__20063 = G__20068;
chunk__20064 = G__20069;
count__20065 = G__20070;
i__20066 = G__20071;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20063);if(temp__4126__auto__)
{var seq__20063__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20063__$1))
{var c__8617__auto__ = cljs.core.chunk_first.call(null,seq__20063__$1);{
var G__20072 = cljs.core.chunk_rest.call(null,seq__20063__$1);
var G__20073 = c__8617__auto__;
var G__20074 = cljs.core.count.call(null,c__8617__auto__);
var G__20075 = 0;
seq__20063 = G__20072;
chunk__20064 = G__20073;
count__20065 = G__20074;
i__20066 = G__20075;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__20063__$1);var child_20076 = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?as_content.call(null,parent,c):((crate.binding.binding_coll_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"coll","coll",1016963678),c);
return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})():((crate.binding.binding_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"text","text",1017460895),c);
return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get(0):((new cljs.core.Keyword(null,"else","else",1017020587))?goog.dom.createTextNode([cljs.core.str(c)].join('')):null))))))))));if(cljs.core.truth_(child_20076))
{goog.dom.appendChild(parent,child_20076);
} else
{}
{
var G__20077 = cljs.core.next.call(null,seq__20063__$1);
var G__20078 = null;
var G__20079 = 0;
var G__20080 = 0;
seq__20063 = G__20077;
chunk__20064 = G__20078;
count__20065 = G__20079;
i__20066 = G__20080;
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
crate.compiler.dom_binding = (function (){var method_table__8727__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8728__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8729__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8730__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8731__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("dom-binding",((function (method_table__8727__auto__,prefer_table__8728__auto__,method_cache__8729__auto__,cached_hierarchy__8730__auto__,hierarchy__8731__auto__){
return (function (type,_,___$1){return type;
});})(method_table__8727__auto__,prefer_table__8728__auto__,method_cache__8729__auto__,cached_hierarchy__8730__auto__,hierarchy__8731__auto__))
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8731__auto__,method_table__8727__auto__,prefer_table__8728__auto__,method_cache__8729__auto__,cached_hierarchy__8730__auto__));
})();
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"text","text",1017460895),(function (_,b,elem){return crate.binding.on_change.call(null,b,(function (v){goog.dom.removeChildren(elem);
return crate.compiler.as_content.call(null,elem,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
}));
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"attr","attr",1016909155),(function (_,p__20081,elem){var vec__20082 = p__20081;var k = cljs.core.nth.call(null,vec__20082,0,null);var b = cljs.core.nth.call(null,vec__20082,1,null);return crate.binding.on_change.call(null,b,((function (vec__20082,k,b){
return (function (v){return crate.compiler.dom_attr.call(null,elem,k,v);
});})(vec__20082,k,b))
);
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"style","style",1123684643),(function (_,p__20083,elem){var vec__20084 = p__20083;var k = cljs.core.nth.call(null,vec__20084,0,null);var b = cljs.core.nth.call(null,vec__20084,1,null);return crate.binding.on_change.call(null,b,((function (vec__20084,k,b){
return (function (v){if(cljs.core.truth_(k))
{return crate.compiler.dom_style.call(null,elem,k,v);
} else
{return crate.compiler.dom_style.call(null,elem,v);
}
});})(vec__20084,k,b))
);
}));
crate.compiler.dom_add = (function dom_add(bc,parent,elem,v){var temp__4124__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"add","add",1014000659));if(cljs.core.truth_(temp__4124__auto__))
{var adder = temp__4124__auto__;return adder.call(null,parent,elem,v);
} else
{return goog.dom.appendChild(parent,elem);
}
});
crate.compiler.dom_remove = (function dom_remove(bc,elem){var temp__4124__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"remove","remove",4374260726));if(cljs.core.truth_(temp__4124__auto__))
{var remover = temp__4124__auto__;return remover.call(null,elem);
} else
{return goog.dom.removeNode(elem);
}
});
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"coll","coll",1016963678),(function (_,bc,parent){return crate.binding.on_change.call(null,bc,(function (type,elem,v){var pred__20085 = cljs.core._EQ_;var expr__20086 = type;if(cljs.core.truth_(pred__20085.call(null,new cljs.core.Keyword(null,"add","add",1014000659),expr__20086)))
{return crate.compiler.dom_add.call(null,bc,parent,elem,v);
} else
{if(cljs.core.truth_(pred__20085.call(null,new cljs.core.Keyword(null,"remove","remove",4374260726),expr__20086)))
{return crate.compiler.dom_remove.call(null,bc,elem);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__20086)].join('')));
}
}
}));
}));
crate.compiler.handle_bindings = (function handle_bindings(bs,elem){var seq__20094 = cljs.core.seq.call(null,bs);var chunk__20095 = null;var count__20096 = 0;var i__20097 = 0;while(true){
if((i__20097 < count__20096))
{var vec__20098 = cljs.core._nth.call(null,chunk__20095,i__20097);var type = cljs.core.nth.call(null,vec__20098,0,null);var b = cljs.core.nth.call(null,vec__20098,1,null);crate.compiler.dom_binding.call(null,type,b,elem);
{
var G__20100 = seq__20094;
var G__20101 = chunk__20095;
var G__20102 = count__20096;
var G__20103 = (i__20097 + 1);
seq__20094 = G__20100;
chunk__20095 = G__20101;
count__20096 = G__20102;
i__20097 = G__20103;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20094);if(temp__4126__auto__)
{var seq__20094__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20094__$1))
{var c__8617__auto__ = cljs.core.chunk_first.call(null,seq__20094__$1);{
var G__20104 = cljs.core.chunk_rest.call(null,seq__20094__$1);
var G__20105 = c__8617__auto__;
var G__20106 = cljs.core.count.call(null,c__8617__auto__);
var G__20107 = 0;
seq__20094 = G__20104;
chunk__20095 = G__20105;
count__20096 = G__20106;
i__20097 = G__20107;
continue;
}
} else
{var vec__20099 = cljs.core.first.call(null,seq__20094__$1);var type = cljs.core.nth.call(null,vec__20099,0,null);var b = cljs.core.nth.call(null,vec__20099,1,null);crate.compiler.dom_binding.call(null,type,b,elem);
{
var G__20108 = cljs.core.next.call(null,seq__20094__$1);
var G__20109 = null;
var G__20110 = 0;
var G__20111 = 0;
seq__20094 = G__20108;
chunk__20095 = G__20109;
count__20096 = G__20110;
i__20097 = G__20111;
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
crate.compiler.dom_style = (function() {
var dom_style = null;
var dom_style__2 = (function (elem,v){if(typeof v === 'string')
{elem.setAttribute("style",v);
} else
{if(cljs.core.map_QMARK_.call(null,v))
{var seq__20118_20124 = cljs.core.seq.call(null,v);var chunk__20119_20125 = null;var count__20120_20126 = 0;var i__20121_20127 = 0;while(true){
if((i__20121_20127 < count__20120_20126))
{var vec__20122_20128 = cljs.core._nth.call(null,chunk__20119_20125,i__20121_20127);var k_20129 = cljs.core.nth.call(null,vec__20122_20128,0,null);var v_20130__$1 = cljs.core.nth.call(null,vec__20122_20128,1,null);dom_style.call(null,elem,k_20129,v_20130__$1);
{
var G__20131 = seq__20118_20124;
var G__20132 = chunk__20119_20125;
var G__20133 = count__20120_20126;
var G__20134 = (i__20121_20127 + 1);
seq__20118_20124 = G__20131;
chunk__20119_20125 = G__20132;
count__20120_20126 = G__20133;
i__20121_20127 = G__20134;
continue;
}
} else
{var temp__4126__auto___20135 = cljs.core.seq.call(null,seq__20118_20124);if(temp__4126__auto___20135)
{var seq__20118_20136__$1 = temp__4126__auto___20135;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20118_20136__$1))
{var c__8617__auto___20137 = cljs.core.chunk_first.call(null,seq__20118_20136__$1);{
var G__20138 = cljs.core.chunk_rest.call(null,seq__20118_20136__$1);
var G__20139 = c__8617__auto___20137;
var G__20140 = cljs.core.count.call(null,c__8617__auto___20137);
var G__20141 = 0;
seq__20118_20124 = G__20138;
chunk__20119_20125 = G__20139;
count__20120_20126 = G__20140;
i__20121_20127 = G__20141;
continue;
}
} else
{var vec__20123_20142 = cljs.core.first.call(null,seq__20118_20136__$1);var k_20143 = cljs.core.nth.call(null,vec__20123_20142,0,null);var v_20144__$1 = cljs.core.nth.call(null,vec__20123_20142,1,null);dom_style.call(null,elem,k_20143,v_20144__$1);
{
var G__20145 = cljs.core.next.call(null,seq__20118_20136__$1);
var G__20146 = null;
var G__20147 = 0;
var G__20148 = 0;
seq__20118_20124 = G__20145;
chunk__20119_20125 = G__20146;
count__20120_20126 = G__20147;
i__20121_20127 = G__20148;
continue;
}
}
} else
{}
}
break;
}
} else
{if(crate.binding.binding_QMARK_.call(null,v))
{crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,v], null));
dom_style.call(null,elem,crate.binding.value.call(null,v));
} else
{}
}
}
return elem;
});
var dom_style__3 = (function (elem,k,v){var v__$1 = ((crate.binding.binding_QMARK_.call(null,v))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
return crate.binding.value.call(null,v);
})():v);return goog.style.setStyle(elem,cljs.core.name.call(null,k),v__$1);
});
dom_style = function(elem,k,v){
switch(arguments.length){
case 2:
return dom_style__2.call(this,elem,k);
case 3:
return dom_style__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dom_style.cljs$core$IFn$_invoke$arity$2 = dom_style__2;
dom_style.cljs$core$IFn$_invoke$arity$3 = dom_style__3;
return dom_style;
})()
;
crate.compiler.dom_attr = (function() {
var dom_attr = null;
var dom_attr__2 = (function (elem,attrs){if(cljs.core.truth_(elem))
{if(!(cljs.core.map_QMARK_.call(null,attrs)))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var seq__20155_20161 = cljs.core.seq.call(null,attrs);var chunk__20156_20162 = null;var count__20157_20163 = 0;var i__20158_20164 = 0;while(true){
if((i__20158_20164 < count__20157_20163))
{var vec__20159_20165 = cljs.core._nth.call(null,chunk__20156_20162,i__20158_20164);var k_20166 = cljs.core.nth.call(null,vec__20159_20165,0,null);var v_20167 = cljs.core.nth.call(null,vec__20159_20165,1,null);dom_attr.call(null,elem,k_20166,v_20167);
{
var G__20168 = seq__20155_20161;
var G__20169 = chunk__20156_20162;
var G__20170 = count__20157_20163;
var G__20171 = (i__20158_20164 + 1);
seq__20155_20161 = G__20168;
chunk__20156_20162 = G__20169;
count__20157_20163 = G__20170;
i__20158_20164 = G__20171;
continue;
}
} else
{var temp__4126__auto___20172 = cljs.core.seq.call(null,seq__20155_20161);if(temp__4126__auto___20172)
{var seq__20155_20173__$1 = temp__4126__auto___20172;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20155_20173__$1))
{var c__8617__auto___20174 = cljs.core.chunk_first.call(null,seq__20155_20173__$1);{
var G__20175 = cljs.core.chunk_rest.call(null,seq__20155_20173__$1);
var G__20176 = c__8617__auto___20174;
var G__20177 = cljs.core.count.call(null,c__8617__auto___20174);
var G__20178 = 0;
seq__20155_20161 = G__20175;
chunk__20156_20162 = G__20176;
count__20157_20163 = G__20177;
i__20158_20164 = G__20178;
continue;
}
} else
{var vec__20160_20179 = cljs.core.first.call(null,seq__20155_20173__$1);var k_20180 = cljs.core.nth.call(null,vec__20160_20179,0,null);var v_20181 = cljs.core.nth.call(null,vec__20160_20179,1,null);dom_attr.call(null,elem,k_20180,v_20181);
{
var G__20182 = cljs.core.next.call(null,seq__20155_20173__$1);
var G__20183 = null;
var G__20184 = 0;
var G__20185 = 0;
seq__20155_20161 = G__20182;
chunk__20156_20162 = G__20183;
count__20157_20163 = G__20184;
i__20158_20164 = G__20185;
continue;
}
}
} else
{}
}
break;
}
return elem;
}
} else
{return null;
}
});
var dom_attr__3 = (function (elem,k,v){if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"style","style",1123684643)))
{crate.compiler.dom_style.call(null,elem,v);
} else
{var v_20186__$1 = ((crate.binding.binding_QMARK_.call(null,v))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
return crate.binding.value.call(null,v);
})():v);elem.setAttribute(cljs.core.name.call(null,k),v_20186__$1);
}
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case 2:
return dom_attr__2.call(this,elem,k);
case 3:
return dom_attr__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dom_attr.cljs$core$IFn$_invoke$arity$2 = dom_attr__2;
dom_attr.cljs$core$IFn$_invoke$arity$3 = dom_attr__3;
return dom_attr;
})()
;
/**
* Regular expression that parses a CSS-style id and class from a tag name.
*/
crate.compiler.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
crate.compiler.normalize_map_attrs = (function normalize_map_attrs(map_attrs){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__20189){var vec__20190 = p__20189;var n = cljs.core.nth.call(null,vec__20190,0,null);var v = cljs.core.nth.call(null,vec__20190,1,null);if(v === true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.name.call(null,n)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,v], null);
}
}),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.boolean$,cljs.core.second),map_attrs)));
});
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
crate.compiler.normalize_element = (function normalize_element(p__20192){var vec__20197 = p__20192;var tag = cljs.core.nth.call(null,vec__20197,0,null);var content = cljs.core.nthnext.call(null,vec__20197,1);if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string')))
{throw [cljs.core.str(tag),cljs.core.str(" is not a valid tag name.")].join('');
} else
{}
var vec__20198 = cljs.core.re_matches.call(null,crate.compiler.re_tag,cljs.core.name.call(null,tag));var _ = cljs.core.nth.call(null,vec__20198,0,null);var tag__$1 = cljs.core.nth.call(null,vec__20198,1,null);var id = cljs.core.nth.call(null,vec__20198,2,null);var class$ = cljs.core.nth.call(null,vec__20198,3,null);var vec__20199 = (function (){var vec__20200 = clojure.string.split.call(null,tag__$1,/:/);var nsp = cljs.core.nth.call(null,vec__20200,0,null);var t = cljs.core.nth.call(null,vec__20200,1,null);var ns_xmlns = crate.compiler.xmlns.call(null,cljs.core.keyword.call(null,nsp));if(cljs.core.truth_(t))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__7869__auto__ = ns_xmlns;if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return nsp;
}
})(),t], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhtml","xhtml",1127939989).cljs$core$IFn$_invoke$arity$1(crate.compiler.xmlns),nsp], null);
}
})();var nsp = cljs.core.nth.call(null,vec__20199,0,null);var tag__$2 = cljs.core.nth.call(null,vec__20199,1,null);var tag_attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (vec__20198,_,tag__$1,id,class$,vec__20199,nsp,tag__$2,vec__20197,tag,content){
return (function (p1__20191_SHARP_){return !((cljs.core.second.call(null,p1__20191_SHARP_) == null));
});})(vec__20198,_,tag__$1,id,class$,vec__20199,nsp,tag__$2,vec__20197,tag,content))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(function (){var or__7869__auto__ = id;if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return null;
}
})(),new cljs.core.Keyword(null,"class","class",1108647146),(cljs.core.truth_(class$)?clojure.string.replace.call(null,class$,/\./," "):null)], null)));var map_attrs = cljs.core.first.call(null,content);if(cljs.core.map_QMARK_.call(null,map_attrs))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsp,tag__$2,cljs.core.merge.call(null,tag_attrs,crate.compiler.normalize_map_attrs.call(null,map_attrs)),cljs.core.next.call(null,content)], null);
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsp,tag__$2,tag_attrs,content], null);
}
});
crate.compiler.parse_content = (function parse_content(elem,content){var attrs = cljs.core.first.call(null,content);if(cljs.core.map_QMARK_.call(null,attrs))
{crate.compiler.dom_attr.call(null,elem,attrs);
return cljs.core.rest.call(null,content);
} else
{return content;
}
});
crate.compiler.create_elem = (cljs.core.truth_(document.createElementNS)?(function (nsp,tag){return document.createElementNS(nsp,tag);
}):(function (_,tag){return document.createElement(tag);
}));
crate.compiler.elem_factory = (function elem_factory(tag_def){var bindings20203 = crate.compiler.bindings;try{crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var vec__20204 = crate.compiler.normalize_element.call(null,tag_def);var nsp = cljs.core.nth.call(null,vec__20204,0,null);var tag = cljs.core.nth.call(null,vec__20204,1,null);var attrs = cljs.core.nth.call(null,vec__20204,2,null);var content = cljs.core.nth.call(null,vec__20204,3,null);var elem = crate.compiler.create_elem.call(null,nsp,tag);crate.compiler.dom_attr.call(null,elem,attrs);
crate.compiler.as_content.call(null,elem,content);
crate.compiler.handle_bindings.call(null,cljs.core.deref.call(null,crate.compiler.bindings),elem);
return elem;
}finally {crate.compiler.bindings = bindings20203;
}});
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.compiler.add_optional_attrs = (function add_optional_attrs(func){return (function() { 
var G__20207__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__20206 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__20206,0,null);var body = cljs.core.nthnext.call(null,vec__20206,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__20207 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20207__delegate.call(this,args);};
G__20207.cljs$lang$maxFixedArity = 0;
G__20207.cljs$lang$applyTo = (function (arglist__20208){
var args = cljs.core.seq(arglist__20208);
return G__20207__delegate(args);
});
G__20207.cljs$core$IFn$_invoke$arity$variadic = G__20207__delegate;
return G__20207;
})()
;
});

//# sourceMappingURL=compiler.js.map
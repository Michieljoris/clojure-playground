// Compiled by ClojureScript 0.0-2202
goog.provide('devcards.system');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('jayq.core');
goog.require('clojure.set');
goog.require('frontier.core');
goog.require('cljs.core.async');
goog.require('crate.core');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('goog.History');
goog.require('goog.events');
goog.require('jayq.core');
goog.require('clojure.string');
goog.require('crate.core');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.events');
goog.require('frontier.core');
devcards.system.devcards_app_element_id = "devcards-main";
devcards.system.devcards_controls_element_id = "devcards-controls";
devcards.system.devcards_cards_element_id = "devcards-cards";
devcards.system.get_element_by_id = (function get_element_by_id(id){return document.getElementById(id);
});
devcards.system.devcards_app_node = (function devcards_app_node(){return devcards.system.get_element_by_id.call(null,devcards.system.devcards_app_element_id);
});
devcards.system.devcards_controls_node = (function devcards_controls_node(){return devcards.system.get_element_by_id.call(null,devcards.system.devcards_controls_element_id);
});
devcards.system.devcards_cards_node = (function devcards_cards_node(){return devcards.system.get_element_by_id.call(null,devcards.system.devcards_cards_element_id);
});
devcards.system.path__GT_unique_card_id = (function path__GT_unique_card_id(path){return clojure.string.join.call(null,".",cljs.core.map.call(null,(function (x){return [cljs.core.str("["),cljs.core.str(x),cljs.core.str("]")].join('');
}),cljs.core.map.call(null,cljs.core.name,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cardpath","cardpath",1006488231),path))));
});
devcards.system.unique_card_id__GT_path = (function unique_card_id__GT_path(card_id){return cljs.core.mapv.call(null,cljs.core.keyword,cljs.core.rest.call(null,clojure.string.split.call(null,cljs.core.subs.call(null,card_id,1,(cljs.core.count.call(null,card_id) - 1)),/\].\[/)));
});
devcards.system.current_page = (function current_page(data){var and__7857__auto__ = new cljs.core.Keyword(null,"current-path","current-path",2436513643).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(and__7857__auto__))
{var and__7857__auto____$1 = new cljs.core.Keyword(null,"cards","cards",1108335317).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(and__7857__auto____$1))
{return cljs.core.get_in.call(null,new cljs.core.Keyword(null,"cards","cards",1108335317).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"current-path","current-path",2436513643).cljs$core$IFn$_invoke$arity$1(data));
} else
{return and__7857__auto____$1;
}
} else
{return and__7857__auto__;
}
});
devcards.system.valid_path_QMARK_ = (function valid_path_QMARK_(state,path){var or__7869__auto__ = cljs.core._EQ_.call(null,cljs.core.PersistentVector.EMPTY,path);if(or__7869__auto__)
{return or__7869__auto__;
} else
{return cljs.core.get_in.call(null,new cljs.core.Keyword(null,"cards","cards",1108335317).cljs$core$IFn$_invoke$arity$1(state),path);
}
});
devcards.system.enforce_valid_path = (function enforce_valid_path(state,path){return cljs.core.vec.call(null,(cljs.core.truth_(devcards.system.valid_path_QMARK_.call(null,state,path))?path:cljs.core.PersistentVector.EMPTY));
});
devcards.system.IMount = (function (){var obj19577 = {};return obj19577;
})();
devcards.system.mount = (function mount(o,data){if((function (){var and__7857__auto__ = o;if(and__7857__auto__)
{return o.devcards$system$IMount$mount$arity$2;
} else
{return and__7857__auto__;
}
})())
{return o.devcards$system$IMount$mount$arity$2(o,data);
} else
{var x__8496__auto__ = (((o == null))?null:o);return (function (){var or__7869__auto__ = (devcards.system.mount[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (devcards.system.mount["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMount.mount",o);
}
}
})().call(null,o,data);
}
});
devcards.system.IUnMount = (function (){var obj19579 = {};return obj19579;
})();
devcards.system.unmount = (function unmount(o,data){if((function (){var and__7857__auto__ = o;if(and__7857__auto__)
{return o.devcards$system$IUnMount$unmount$arity$2;
} else
{return and__7857__auto__;
}
})())
{return o.devcards$system$IUnMount$unmount$arity$2(o,data);
} else
{var x__8496__auto__ = (((o == null))?null:o);return (function (){var or__7869__auto__ = (devcards.system.unmount[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (devcards.system.unmount["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUnMount.unmount",o);
}
}
})().call(null,o,data);
}
});
devcards.system.IConfig = (function (){var obj19581 = {};return obj19581;
})();
devcards.system._options = (function _options(o){if((function (){var and__7857__auto__ = o;if(and__7857__auto__)
{return o.devcards$system$IConfig$_options$arity$1;
} else
{return and__7857__auto__;
}
})())
{return o.devcards$system$IConfig$_options$arity$1(o);
} else
{var x__8496__auto__ = (((o == null))?null:o);return (function (){var or__7869__auto__ = (devcards.system._options[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (devcards.system._options["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IConfig.-options",o);
}
}
})().call(null,o);
}
});
devcards.system.default_card_options = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"heading","heading",1809215860),true,new cljs.core.Keyword(null,"padding","padding",4502531971),true,new cljs.core.Keyword(null,"unmount-on-reload","unmount-on-reload",4064716876),true,new cljs.core.Keyword(null,"hidden","hidden",4091384092),false], null);
devcards.system.get_options = (function get_options(card){return cljs.core.merge.call(null,devcards.system.default_card_options,(function (){var or__7869__auto__ = (function (){var and__7857__auto__ = (function (){var G__19589 = card;if(G__19589)
{var bit__8519__auto__ = null;if(cljs.core.truth_((function (){var or__7869__auto__ = bit__8519__auto__;if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return G__19589.devcards$system$IConfig$;
}
})()))
{return true;
} else
{if((!G__19589.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IConfig,G__19589);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IConfig,G__19589);
}
})();if(and__7857__auto__)
{return devcards.system._options.call(null,card);
} else
{return and__7857__auto__;
}
})();if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});

/**
* @constructor
* @param {*} path
* @param {*} options
* @param {*} func
* @param {*} position
* @param {*} data_atom
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
devcards.system.DevCard = (function (path,options,func,position,data_atom,__meta,__extmap){
this.path = path;
this.options = options;
this.func = func;
this.position = position;
this.data_atom = data_atom;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
devcards.system.DevCard.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8455__auto__,k__8456__auto__){var self__ = this;
var this__8455__auto____$1 = this;return cljs.core._lookup.call(null,this__8455__auto____$1,k__8456__auto__,null);
});
devcards.system.DevCard.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8457__auto__,k19591,else__8458__auto__){var self__ = this;
var this__8457__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k19591,new cljs.core.Keyword(null,"path","path",1017337751)))
{return self__.path;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k19591,new cljs.core.Keyword(null,"options","options",4059396624)))
{return self__.options;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k19591,new cljs.core.Keyword(null,"func","func",1017058870)))
{return self__.func;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k19591,new cljs.core.Keyword(null,"position","position",1761709211)))
{return self__.position;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k19591,new cljs.core.Keyword(null,"data-atom","data-atom",603797766)))
{return self__.data_atom;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k19591,else__8458__auto__);
} else
{return null;
}
}
}
}
}
}
});
devcards.system.DevCard.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8469__auto__,writer__8470__auto__,opts__8471__auto__){var self__ = this;
var this__8469__auto____$1 = this;var pr_pair__8472__auto__ = ((function (this__8469__auto____$1){
return (function (keyval__8473__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8470__auto__,cljs.core.pr_writer,""," ","",opts__8471__auto__,keyval__8473__auto__);
});})(this__8469__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8470__auto__,pr_pair__8472__auto__,"#devcards.system.DevCard{",", ","}",opts__8471__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",1017337751),self__.path],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",4059396624),self__.options],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",1017058870),self__.func],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"position","position",1761709211),self__.position],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data-atom","data-atom",603797766),self__.data_atom],null))], null),self__.__extmap));
});
devcards.system.DevCard.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8453__auto__){var self__ = this;
var this__8453__auto____$1 = this;return self__.__meta;
});
devcards.system.DevCard.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8449__auto__){var self__ = this;
var this__8449__auto____$1 = this;return (new devcards.system.DevCard(self__.path,self__.options,self__.func,self__.position,self__.data_atom,self__.__meta,self__.__extmap,self__.__hash));
});
devcards.system.DevCard.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8459__auto__){var self__ = this;
var this__8459__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
devcards.system.DevCard.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8450__auto__){var self__ = this;
var this__8450__auto____$1 = this;var h__8280__auto__ = self__.__hash;if(!((h__8280__auto__ == null)))
{return h__8280__auto__;
} else
{var h__8280__auto____$1 = cljs.core.hash_imap.call(null,this__8450__auto____$1);self__.__hash = h__8280__auto____$1;
return h__8280__auto____$1;
}
});
devcards.system.DevCard.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8451__auto__,other__8452__auto__){var self__ = this;
var this__8451__auto____$1 = this;if(cljs.core.truth_((function (){var and__7857__auto__ = other__8452__auto__;if(cljs.core.truth_(and__7857__auto__))
{return ((this__8451__auto____$1.constructor === other__8452__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8451__auto____$1,other__8452__auto__));
} else
{return and__7857__auto__;
}
})()))
{return true;
} else
{return false;
}
});
devcards.system.DevCard.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8464__auto__,k__8465__auto__){var self__ = this;
var this__8464__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",1017337751),null,new cljs.core.Keyword(null,"func","func",1017058870),null,new cljs.core.Keyword(null,"position","position",1761709211),null,new cljs.core.Keyword(null,"options","options",4059396624),null,new cljs.core.Keyword(null,"data-atom","data-atom",603797766),null], null), null),k__8465__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8464__auto____$1),self__.__meta),k__8465__auto__);
} else
{return (new devcards.system.DevCard(self__.path,self__.options,self__.func,self__.position,self__.data_atom,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8465__auto__)),null));
}
});
devcards.system.DevCard.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8462__auto__,k__8463__auto__,G__19590){var self__ = this;
var this__8462__auto____$1 = this;var pred__19593 = cljs.core.keyword_identical_QMARK_;var expr__19594 = k__8463__auto__;if(cljs.core.truth_(pred__19593.call(null,new cljs.core.Keyword(null,"path","path",1017337751),expr__19594)))
{return (new devcards.system.DevCard(G__19590,self__.options,self__.func,self__.position,self__.data_atom,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__19593.call(null,new cljs.core.Keyword(null,"options","options",4059396624),expr__19594)))
{return (new devcards.system.DevCard(self__.path,G__19590,self__.func,self__.position,self__.data_atom,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__19593.call(null,new cljs.core.Keyword(null,"func","func",1017058870),expr__19594)))
{return (new devcards.system.DevCard(self__.path,self__.options,G__19590,self__.position,self__.data_atom,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__19593.call(null,new cljs.core.Keyword(null,"position","position",1761709211),expr__19594)))
{return (new devcards.system.DevCard(self__.path,self__.options,self__.func,G__19590,self__.data_atom,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__19593.call(null,new cljs.core.Keyword(null,"data-atom","data-atom",603797766),expr__19594)))
{return (new devcards.system.DevCard(self__.path,self__.options,self__.func,self__.position,G__19590,self__.__meta,self__.__extmap,null));
} else
{return (new devcards.system.DevCard(self__.path,self__.options,self__.func,self__.position,self__.data_atom,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8463__auto__,G__19590),null));
}
}
}
}
}
});
devcards.system.DevCard.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8467__auto__){var self__ = this;
var this__8467__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",1017337751),self__.path],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",4059396624),self__.options],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",1017058870),self__.func],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"position","position",1761709211),self__.position],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data-atom","data-atom",603797766),self__.data_atom],null))], null),self__.__extmap));
});
devcards.system.DevCard.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8454__auto__,G__19590){var self__ = this;
var this__8454__auto____$1 = this;return (new devcards.system.DevCard(self__.path,self__.options,self__.func,self__.position,self__.data_atom,G__19590,self__.__extmap,self__.__hash));
});
devcards.system.DevCard.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8460__auto__,entry__8461__auto__){var self__ = this;
var this__8460__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8461__auto__))
{return cljs.core._assoc.call(null,this__8460__auto____$1,cljs.core._nth.call(null,entry__8461__auto__,0),cljs.core._nth.call(null,entry__8461__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8460__auto____$1,entry__8461__auto__);
}
});
devcards.system.DevCard.cljs$lang$type = true;
devcards.system.DevCard.cljs$lang$ctorPrSeq = (function (this__8489__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.system/DevCard");
});
devcards.system.DevCard.cljs$lang$ctorPrWriter = (function (this__8489__auto__,writer__8490__auto__){return cljs.core._write.call(null,writer__8490__auto__,"devcards.system/DevCard");
});
devcards.system.__GT_DevCard = (function __GT_DevCard(path,options,func,position,data_atom){return (new devcards.system.DevCard(path,options,func,position,data_atom));
});
devcards.system.map__GT_DevCard = (function map__GT_DevCard(G__19592){return (new devcards.system.DevCard(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(G__19592),new cljs.core.Keyword(null,"options","options",4059396624).cljs$core$IFn$_invoke$arity$1(G__19592),new cljs.core.Keyword(null,"func","func",1017058870).cljs$core$IFn$_invoke$arity$1(G__19592),new cljs.core.Keyword(null,"position","position",1761709211).cljs$core$IFn$_invoke$arity$1(G__19592),new cljs.core.Keyword(null,"data-atom","data-atom",603797766).cljs$core$IFn$_invoke$arity$1(G__19592),null,cljs.core.dissoc.call(null,G__19592,new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"options","options",4059396624),new cljs.core.Keyword(null,"func","func",1017058870),new cljs.core.Keyword(null,"position","position",1761709211),new cljs.core.Keyword(null,"data-atom","data-atom",603797766))));
});
devcards.system.devcard_QMARK_ = (function devcard_QMARK_(d){var and__7857__auto__ = cljs.core.map_QMARK_.call(null,d);if(and__7857__auto__)
{var and__7857__auto____$1 = new cljs.core.Keyword(null,"data-atom","data-atom",603797766).cljs$core$IFn$_invoke$arity$1(d);if(cljs.core.truth_(and__7857__auto____$1))
{var and__7857__auto____$2 = new cljs.core.Keyword(null,"func","func",1017058870).cljs$core$IFn$_invoke$arity$1(d);if(cljs.core.truth_(and__7857__auto____$2))
{var and__7857__auto____$3 = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(d);if(cljs.core.truth_(and__7857__auto____$3))
{var and__7857__auto____$4 = new cljs.core.Keyword(null,"position","position",1761709211).cljs$core$IFn$_invoke$arity$1(d);if(cljs.core.truth_(and__7857__auto____$4))
{return d;
} else
{return and__7857__auto____$4;
}
} else
{return and__7857__auto____$3;
}
} else
{return and__7857__auto____$2;
}
} else
{return and__7857__auto____$1;
}
} else
{return and__7857__auto__;
}
});
devcards.system.ifilter = (function (){var method_table__8727__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8728__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8729__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8730__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8731__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("ifilter",cljs.core.first,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8731__auto__,method_table__8727__auto__,prefer_table__8728__auto__,method_cache__8729__auto__,cached_hierarchy__8730__auto__));
})();
cljs.core._add_method.call(null,devcards.system.ifilter,new cljs.core.Keyword(null,"default","default",2558708147),(function (msg,state){return msg;
}));
cljs.core._add_method.call(null,devcards.system.ifilter,new cljs.core.Keyword(null,"set-current-path","set-current-path",2665043702),(function (p__19596,state){var vec__19597 = p__19596;var _ = cljs.core.nth.call(null,vec__19597,0,null);var map__19598 = cljs.core.nth.call(null,vec__19597,1,null);var map__19598__$1 = ((cljs.core.seq_QMARK_.call(null,map__19598))?cljs.core.apply.call(null,cljs.core.hash_map,map__19598):map__19598);var path = cljs.core.get.call(null,map__19598__$1,new cljs.core.Keyword(null,"path","path",1017337751));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-path","current-path",2436513643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),devcards.system.unique_card_id__GT_path.call(null,path)], null)], null);
}));
devcards.system.dev_trans = (function (){var method_table__8727__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8728__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8729__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8730__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8731__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("dev-trans",cljs.core.first,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8731__auto__,method_table__8727__auto__,prefer_table__8728__auto__,method_cache__8729__auto__,cached_hierarchy__8730__auto__));
})();
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"default","default",2558708147),(function (msg,state){return state;
}));
devcards.system.map_vals = (function map_vals(f,h_map){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__19601){var vec__19602 = p__19601;var k = cljs.core.nth.call(null,vec__19602,0,null);var v = cljs.core.nth.call(null,vec__19602,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
}),h_map));
});
devcards.system.map_all_cards_in_ns = (function map_all_cards_in_ns(f,state,ns){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",1108335317),ns], null),(function (p1__19603_SHARP_){return devcards.system.map_vals.call(null,f,p1__19603_SHARP_);
}));
});
devcards.system.mark_card = (function mark_card(card){return cljs.core.assoc.call(null,card,new cljs.core.Keyword(null,"sweep-marker","sweep-marker",1175282093),true);
});
devcards.system.remove_mark_from_card = (function remove_mark_from_card(card){return cljs.core.dissoc.call(null,card,new cljs.core.Keyword(null,"sweep-marker","sweep-marker",1175282093));
});
devcards.system.set_card_to_be_deleted = (function set_card_to_be_deleted(card){if(cljs.core.truth_(new cljs.core.Keyword(null,"sweep-marker","sweep-marker",1175282093).cljs$core$IFn$_invoke$arity$1(card)))
{return cljs.core.assoc.call(null,card,new cljs.core.Keyword(null,"delete-card","delete-card",4140359012),true);
} else
{return card;
}
});
devcards.system.set_deleted_and_remove_marks_in_ns = (function set_deleted_and_remove_marks_in_ns(state,ns){return devcards.system.map_all_cards_in_ns.call(null,cljs.core.comp.call(null,devcards.system.remove_mark_from_card,devcards.system.set_card_to_be_deleted),state,ns);
});
devcards.system.card_namespaces_being_reloaded = (function card_namespaces_being_reloaded(state,files){return clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.keyword,new cljs.core.Keyword(null,"namespace","namespace",2266122445)),files)),cljs.core.set.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"cards","cards",1108335317).cljs$core$IFn$_invoke$arity$1(state))));
});
devcards.system.mark_all_cards = (function mark_all_cards(state,files){return cljs.core.reduce.call(null,cljs.core.partial.call(null,devcards.system.map_all_cards_in_ns,devcards.system.mark_card),state,devcards.system.card_namespaces_being_reloaded.call(null,state,files));
});
devcards.system.remove_deleted_cards = (function remove_deleted_cards(card_map){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__19606){var vec__19607 = p__19606;var k = cljs.core.nth.call(null,vec__19607,0,null);var v = cljs.core.nth.call(null,vec__19607,1,null);return cljs.core.not.call(null,new cljs.core.Keyword(null,"delete-card","delete-card",4140359012).cljs$core$IFn$_invoke$arity$1(v));
}),card_map));
});
devcards.system.remove_deleted_cards_in_ns = (function remove_deleted_cards_in_ns(state,ns){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",1108335317),ns], null),devcards.system.remove_deleted_cards);
});
devcards.system.sweep_ns = (function sweep_ns(state,ns){return devcards.system.set_deleted_and_remove_marks_in_ns.call(null,devcards.system.remove_deleted_cards_in_ns.call(null,state,ns),ns);
});
devcards.system.sweep = (function sweep(state,files){return cljs.core.reduce.call(null,devcards.system.sweep_ns,state,cljs.core.set.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"cards","cards",1108335317).cljs$core$IFn$_invoke$arity$1(state))));
});
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"before-jsload","before-jsload",3705046831),(function (p__19608,state){var vec__19609 = p__19608;var _ = cljs.core.nth.call(null,vec__19609,0,null);var files = cljs.core.nth.call(null,vec__19609,1,null);return devcards.system.mark_all_cards.call(null,state,files);
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"jsreload","jsreload",3412240276),(function (p__19610,state){var vec__19611 = p__19610;var _ = cljs.core.nth.call(null,vec__19611,0,null);var files = cljs.core.nth.call(null,vec__19611,1,null);return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,devcards.system.sweep.call(null,state,files),new cljs.core.Keyword(null,"code-loaded","code-loaded",2924989271),new cljs.core.Keyword(null,"js","js",1013907643)),new cljs.core.Keyword(null,"compile-failed","compile-failed",630802569));
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"cssload","cssload",2084339931),(function (msg,state){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"code-loaded","code-loaded",2924989271),new cljs.core.Keyword(null,"css","css",1014003061));
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"remove-code-loaded-effect","remove-code-loaded-effect",3939124180),(function (msg,state){return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"code-loaded","code-loaded",2924989271));
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"compile-fail","compile-fail",1107360234),(function (msg,state){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"compile-failed","compile-failed",630802569),cljs.core.last.call(null,msg));
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"register-card","register-card",3872264044),(function (p__19612,state){var vec__19613 = p__19612;var _ = cljs.core.nth.call(null,vec__19613,0,null);var map__19614 = cljs.core.nth.call(null,vec__19613,1,null);var map__19614__$1 = ((cljs.core.seq_QMARK_.call(null,map__19614))?cljs.core.apply.call(null,cljs.core.hash_map,map__19614):map__19614);var func = cljs.core.get.call(null,map__19614__$1,new cljs.core.Keyword(null,"func","func",1017058870));var options = cljs.core.get.call(null,map__19614__$1,new cljs.core.Keyword(null,"options","options",4059396624));var path = cljs.core.get.call(null,map__19614__$1,new cljs.core.Keyword(null,"path","path",1017337751));var position = new cljs.core.Keyword(null,"position","position",1761709211).cljs$core$IFn$_invoke$arity$1(state);return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null),cljs.core.inc),cljs.core.cons.call(null,new cljs.core.Keyword(null,"cards","cards",1108335317),path),((function (position,vec__19613,_,map__19614,map__19614__$1,func,options,path){
return (function (dc){if(cljs.core.truth_(dc))
{return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,dc,new cljs.core.Keyword(null,"options","options",4059396624),cljs.core.merge.call(null,devcards.system.default_card_options,options),new cljs.core.Keyword(null,"position","position",1761709211),position,new cljs.core.Keyword(null,"func","func",1017058870),func),new cljs.core.Keyword(null,"sweep-marker","sweep-marker",1175282093)),new cljs.core.Keyword(null,"delete-card","delete-card",4140359012));
} else
{return (new devcards.system.DevCard(path,cljs.core.merge.call(null,devcards.system.default_card_options,options),func,position,cljs.core.atom.call(null,(function (){var or__7869__auto__ = new cljs.core.Keyword(null,"initial-state","initial-state",4067401786).cljs$core$IFn$_invoke$arity$1(options);if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})())));
}
});})(position,vec__19613,_,map__19614,map__19614__$1,func,options,path))
);
}));
devcards.system.add_navigate_effect = (function add_navigate_effect(p__19615){var map__19617 = p__19615;var map__19617__$1 = ((cljs.core.seq_QMARK_.call(null,map__19617))?cljs.core.apply.call(null,cljs.core.hash_map,map__19617):map__19617);var state = map__19617__$1;var current_path = cljs.core.get.call(null,map__19617__$1,new cljs.core.Keyword(null,"current-path","current-path",2436513643));return frontier.core.add_effects.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",3116398819),current_path], null));
});
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"add-to-current-path","add-to-current-path",4368567377),(function (p__19618,p__19619){var vec__19620 = p__19618;var _ = cljs.core.nth.call(null,vec__19620,0,null);var map__19621 = cljs.core.nth.call(null,vec__19620,1,null);var map__19621__$1 = ((cljs.core.seq_QMARK_.call(null,map__19621))?cljs.core.apply.call(null,cljs.core.hash_map,map__19621):map__19621);var path = cljs.core.get.call(null,map__19621__$1,new cljs.core.Keyword(null,"path","path",1017337751));var map__19622 = p__19619;var map__19622__$1 = ((cljs.core.seq_QMARK_.call(null,map__19622))?cljs.core.apply.call(null,cljs.core.hash_map,map__19622):map__19622);var state = map__19622__$1;var current_path = cljs.core.get.call(null,map__19622__$1,new cljs.core.Keyword(null,"current-path","current-path",2436513643));return devcards.system.add_navigate_effect.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-path","current-path",2436513643),devcards.system.enforce_valid_path.call(null,state,cljs.core.conj.call(null,current_path,cljs.core.keyword.call(null,path)))));
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"current-path","current-path",2436513643),(function (p__19623,p__19624){var vec__19625 = p__19623;var _ = cljs.core.nth.call(null,vec__19625,0,null);var map__19626 = cljs.core.nth.call(null,vec__19625,1,null);var map__19626__$1 = ((cljs.core.seq_QMARK_.call(null,map__19626))?cljs.core.apply.call(null,cljs.core.hash_map,map__19626):map__19626);var path = cljs.core.get.call(null,map__19626__$1,new cljs.core.Keyword(null,"path","path",1017337751));var map__19627 = p__19624;var map__19627__$1 = ((cljs.core.seq_QMARK_.call(null,map__19627))?cljs.core.apply.call(null,cljs.core.hash_map,map__19627):map__19627);var state = map__19627__$1;var current_path = cljs.core.get.call(null,map__19627__$1,new cljs.core.Keyword(null,"current-path","current-path",2436513643));var path__$1 = cljs.core.vec.call(null,path);if(cljs.core.not_EQ_.call(null,current_path,path__$1))
{return devcards.system.add_navigate_effect.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-path","current-path",2436513643),devcards.system.enforce_valid_path.call(null,state,path__$1)));
} else
{return state;
}
}));
devcards.system.visible_cards = (function visible_cards(state){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"visible-card-nodes","visible-card-nodes",1307322721),devcards.system.visible_card_nodes.call(null,state));
});
devcards.system.display_current_cards = (function display_current_cards(state){var cur = devcards.system.current_page.call(null,state);if(cljs.core.truth_(devcards.system.devcard_QMARK_.call(null,cur)))
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"display-single-card","display-single-card",1219792988),cur);
} else
{return cljs.core.assoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"display-dir-paths","display-dir-paths",3029188565),cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.comp.call(null,devcards.system.devcard_QMARK_,cljs.core.second)),cur)),new cljs.core.Keyword(null,"display-cards","display-cards",2395336202),cljs.core.filter.call(null,cljs.core.comp.call(null,((function (cur){
return (function (p1__19628_SHARP_){var and__7857__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"delete-card","delete-card",4140359012).cljs$core$IFn$_invoke$arity$1(p1__19628_SHARP_));if(and__7857__auto__)
{return devcards.system.devcard_QMARK_.call(null,p1__19628_SHARP_);
} else
{return and__7857__auto__;
}
});})(cur))
,cljs.core.second),cur));
}
});
devcards.system.render_cards_QMARK_ = (function render_cards_QMARK_(state){var visible_cards = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"path","path",1017337751),cljs.core.first),new cljs.core.Keyword(null,"visible-card-nodes","visible-card-nodes",1307322721).cljs$core$IFn$_invoke$arity$1(state)));var intended_cards = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"path","path",1017337751),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display-single-card","display-single-card",1219792988).cljs$core$IFn$_invoke$arity$1(state)], null),cljs.core.vals.call(null,new cljs.core.Keyword(null,"display-cards","display-cards",2395336202).cljs$core$IFn$_invoke$arity$1(state)))));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"render-cards","render-cards",651634654),cljs.core.not_EQ_.call(null,visible_cards,intended_cards));
});
devcards.system.breadcrumbs = (function breadcrumbs(p__19629){var map__19631 = p__19629;var map__19631__$1 = ((cljs.core.seq_QMARK_.call(null,map__19631))?cljs.core.apply.call(null,cljs.core.hash_map,map__19631):map__19631);var state = map__19631__$1;var current_path = cljs.core.get.call(null,map__19631__$1,new cljs.core.Keyword(null,"current-path","current-path",2436513643));var cpath = cljs.core.map.call(null,cljs.core.name,cljs.core.cons.call(null,new cljs.core.Keyword(null,"home","home",1017112657),current_path));var crumbs = cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.last,cljs.core.rest),cljs.core.rest.call(null,cljs.core.map_indexed.call(null,((function (cpath,map__19631,map__19631__$1,state,current_path){
return (function (i,v){return cljs.core.subvec.call(null,v,0,i);
});})(cpath,map__19631,map__19631__$1,state,current_path))
,cljs.core.take.call(null,(cljs.core.count.call(null,cpath) + 1),cljs.core.repeat.call(null,cljs.core.vec.call(null,cpath))))));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"breadcrumbs","breadcrumbs",962446402),crumbs);
});

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
devcards.system.DevCards = (function (__meta,__extmap){
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>0){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
devcards.system.DevCards.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8455__auto__,k__8456__auto__){var self__ = this;
var this__8455__auto____$1 = this;return cljs.core._lookup.call(null,this__8455__auto____$1,k__8456__auto__,null);
});
devcards.system.DevCards.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8457__auto__,k19633,else__8458__auto__){var self__ = this;
var this__8457__auto____$1 = this;if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k19633,else__8458__auto__);
} else
{return null;
}
});
devcards.system.DevCards.prototype.frontier$core$IInputFilter$ = true;
devcards.system.DevCards.prototype.frontier$core$IInputFilter$_filter_input$arity$3 = (function (o,msg,state){var self__ = this;
var o__$1 = this;return devcards.system.ifilter.call(null,msg,state);
});
devcards.system.DevCards.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8469__auto__,writer__8470__auto__,opts__8471__auto__){var self__ = this;
var this__8469__auto____$1 = this;var pr_pair__8472__auto__ = ((function (this__8469__auto____$1){
return (function (keyval__8473__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8470__auto__,cljs.core.pr_writer,""," ","",opts__8471__auto__,keyval__8473__auto__);
});})(this__8469__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8470__auto__,pr_pair__8472__auto__,"#devcards.system.DevCards{",", ","}",opts__8471__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
devcards.system.DevCards.prototype.frontier$core$IDerive$ = true;
devcards.system.DevCards.prototype.frontier$core$IDerive$_derive$arity$2 = (function (o,state){var self__ = this;
var o__$1 = this;return devcards.system.breadcrumbs.call(null,devcards.system.render_cards_QMARK_.call(null,devcards.system.display_current_cards.call(null,devcards.system.visible_cards.call(null,state))));
});
devcards.system.DevCards.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8453__auto__){var self__ = this;
var this__8453__auto____$1 = this;return self__.__meta;
});
devcards.system.DevCards.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8449__auto__){var self__ = this;
var this__8449__auto____$1 = this;return (new devcards.system.DevCards(self__.__meta,self__.__extmap,self__.__hash));
});
devcards.system.DevCards.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8459__auto__){var self__ = this;
var this__8459__auto____$1 = this;return (0 + cljs.core.count.call(null,self__.__extmap));
});
devcards.system.DevCards.prototype.frontier$core$ITransform$ = true;
devcards.system.DevCards.prototype.frontier$core$ITransform$_transform$arity$3 = (function (o,msg,state){var self__ = this;
var o__$1 = this;return devcards.system.dev_trans.call(null,msg,state);
});
devcards.system.DevCards.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8450__auto__){var self__ = this;
var this__8450__auto____$1 = this;var h__8280__auto__ = self__.__hash;if(!((h__8280__auto__ == null)))
{return h__8280__auto__;
} else
{var h__8280__auto____$1 = cljs.core.hash_imap.call(null,this__8450__auto____$1);self__.__hash = h__8280__auto____$1;
return h__8280__auto____$1;
}
});
devcards.system.DevCards.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8451__auto__,other__8452__auto__){var self__ = this;
var this__8451__auto____$1 = this;if(cljs.core.truth_((function (){var and__7857__auto__ = other__8452__auto__;if(cljs.core.truth_(and__7857__auto__))
{return ((this__8451__auto____$1.constructor === other__8452__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8451__auto____$1,other__8452__auto__));
} else
{return and__7857__auto__;
}
})()))
{return true;
} else
{return false;
}
});
devcards.system.DevCards.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8464__auto__,k__8465__auto__){var self__ = this;
var this__8464__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__8465__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8464__auto____$1),self__.__meta),k__8465__auto__);
} else
{return (new devcards.system.DevCards(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8465__auto__)),null));
}
});
devcards.system.DevCards.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8462__auto__,k__8463__auto__,G__19632){var self__ = this;
var this__8462__auto____$1 = this;var pred__19635 = cljs.core.keyword_identical_QMARK_;var expr__19636 = k__8463__auto__;return (new devcards.system.DevCards(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8463__auto__,G__19632),null));
});
devcards.system.DevCards.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8467__auto__){var self__ = this;
var this__8467__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
devcards.system.DevCards.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8454__auto__,G__19632){var self__ = this;
var this__8454__auto____$1 = this;return (new devcards.system.DevCards(G__19632,self__.__extmap,self__.__hash));
});
devcards.system.DevCards.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8460__auto__,entry__8461__auto__){var self__ = this;
var this__8460__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8461__auto__))
{return cljs.core._assoc.call(null,this__8460__auto____$1,cljs.core._nth.call(null,entry__8461__auto__,0),cljs.core._nth.call(null,entry__8461__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8460__auto____$1,entry__8461__auto__);
}
});
devcards.system.DevCards.cljs$lang$type = true;
devcards.system.DevCards.cljs$lang$ctorPrSeq = (function (this__8489__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.system/DevCards");
});
devcards.system.DevCards.cljs$lang$ctorPrWriter = (function (this__8489__auto__,writer__8490__auto__){return cljs.core._write.call(null,writer__8490__auto__,"devcards.system/DevCards");
});
devcards.system.__GT_DevCards = (function __GT_DevCards(){return (new devcards.system.DevCards());
});
devcards.system.map__GT_DevCards = (function map__GT_DevCards(G__19634){return (new devcards.system.DevCards(null,cljs.core.dissoc.call(null,G__19634)));
});
if(typeof devcards.system.history !== 'undefined')
{} else
{devcards.system.history = (function (){var h = (new goog.History());h.setEnabled(true);
return h;
})();
}
devcards.system.path__GT_token = (function path__GT_token(path){return [cljs.core.str("!/"),cljs.core.str(clojure.string.join.call(null,"/",cljs.core.map.call(null,cljs.core.name,path)))].join('');
});
devcards.system.token__GT_path = (function token__GT_path(token){return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.keyword,clojure.string.split.call(null,clojure.string.replace.call(null,token,/!\//,""),/\//)));
});

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
devcards.system.HashBangRouting = (function (__meta,__extmap){
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>0){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
devcards.system.HashBangRouting.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8455__auto__,k__8456__auto__){var self__ = this;
var this__8455__auto____$1 = this;return cljs.core._lookup.call(null,this__8455__auto____$1,k__8456__auto__,null);
});
devcards.system.HashBangRouting.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8457__auto__,k19640,else__8458__auto__){var self__ = this;
var this__8457__auto____$1 = this;if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k19640,else__8458__auto__);
} else
{return null;
}
});
devcards.system.HashBangRouting.prototype.frontier$core$IInit$ = true;
devcards.system.HashBangRouting.prototype.frontier$core$IInit$_initialize$arity$3 = (function (_,state,event_chan){var self__ = this;
var ___$1 = this;goog.events.listen(devcards.system.history,goog.history.EventType.NAVIGATE,((function (___$1){
return (function (p1__19638_SHARP_){return cljs.core.async.put_BANG_.call(null,event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-path","current-path",2436513643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),devcards.system.token__GT_path.call(null,p1__19638_SHARP_.token)], null)], null));
});})(___$1))
);
var temp__4126__auto__ = devcards.system.history.getToken();if(cljs.core.truth_(temp__4126__auto__))
{var token = temp__4126__auto__;var c__10498__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto__,token,temp__4126__auto__,___$1){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto__,token,temp__4126__auto__,___$1){
return (function (state_19653){var state_val_19654 = (state_19653[1]);if((state_val_19654 === 2))
{var inst_19644 = (state_19653[2]);var inst_19645 = [new cljs.core.Keyword(null,"path","path",1017337751)];var inst_19646 = devcards.system.token__GT_path.call(null,token);var inst_19647 = [inst_19646];var inst_19648 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_19645,inst_19647);var inst_19649 = [new cljs.core.Keyword(null,"current-path","current-path",2436513643),inst_19648];var inst_19650 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_19649,null));var inst_19651 = cljs.core.async.put_BANG_.call(null,event_chan,inst_19650);var state_19653__$1 = (function (){var statearr_19655 = state_19653;(statearr_19655[7] = inst_19644);
return statearr_19655;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19653__$1,inst_19651);
} else
{if((state_val_19654 === 1))
{var inst_19642 = cljs.core.async.timeout.call(null,20);var state_19653__$1 = state_19653;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19653__$1,2,inst_19642);
} else
{return null;
}
}
});})(c__10498__auto__,token,temp__4126__auto__,___$1))
;return ((function (switch__10434__auto__,c__10498__auto__,token,temp__4126__auto__,___$1){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_19659 = [null,null,null,null,null,null,null,null];(statearr_19659[0] = state_machine__10435__auto__);
(statearr_19659[1] = 1);
return statearr_19659;
});
var state_machine__10435__auto____1 = (function (state_19653){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_19653);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e19660){if((e19660 instanceof Object))
{var ex__10438__auto__ = e19660;var statearr_19661_19668 = state_19653;(statearr_19661_19668[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19653);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19660;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19669 = state_19653;
state_19653 = G__19669;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_19653){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_19653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto__,token,temp__4126__auto__,___$1))
})();var state__10500__auto__ = (function (){var statearr_19662 = f__10499__auto__.call(null);(statearr_19662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto__);
return statearr_19662;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto__,token,temp__4126__auto__,___$1))
);
return c__10498__auto__;
} else
{return null;
}
});
devcards.system.HashBangRouting.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8469__auto__,writer__8470__auto__,opts__8471__auto__){var self__ = this;
var this__8469__auto____$1 = this;var pr_pair__8472__auto__ = ((function (this__8469__auto____$1){
return (function (keyval__8473__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8470__auto__,cljs.core.pr_writer,""," ","",opts__8471__auto__,keyval__8473__auto__);
});})(this__8469__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8470__auto__,pr_pair__8472__auto__,"#devcards.system.HashBangRouting{",", ","}",opts__8471__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
devcards.system.HashBangRouting.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8453__auto__){var self__ = this;
var this__8453__auto____$1 = this;return self__.__meta;
});
devcards.system.HashBangRouting.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8449__auto__){var self__ = this;
var this__8449__auto____$1 = this;return (new devcards.system.HashBangRouting(self__.__meta,self__.__extmap,self__.__hash));
});
devcards.system.HashBangRouting.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8459__auto__){var self__ = this;
var this__8459__auto____$1 = this;return (0 + cljs.core.count.call(null,self__.__extmap));
});
devcards.system.HashBangRouting.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8450__auto__){var self__ = this;
var this__8450__auto____$1 = this;var h__8280__auto__ = self__.__hash;if(!((h__8280__auto__ == null)))
{return h__8280__auto__;
} else
{var h__8280__auto____$1 = cljs.core.hash_imap.call(null,this__8450__auto____$1);self__.__hash = h__8280__auto____$1;
return h__8280__auto____$1;
}
});
devcards.system.HashBangRouting.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8451__auto__,other__8452__auto__){var self__ = this;
var this__8451__auto____$1 = this;if(cljs.core.truth_((function (){var and__7857__auto__ = other__8452__auto__;if(cljs.core.truth_(and__7857__auto__))
{return ((this__8451__auto____$1.constructor === other__8452__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8451__auto____$1,other__8452__auto__));
} else
{return and__7857__auto__;
}
})()))
{return true;
} else
{return false;
}
});
devcards.system.HashBangRouting.prototype.frontier$core$IEffect$ = true;
devcards.system.HashBangRouting.prototype.frontier$core$IEffect$_effect$arity$5 = (function (o,p__19663,system,event_chan,effect_chan){var self__ = this;
var vec__19664 = p__19663;var nm = cljs.core.nth.call(null,vec__19664,0,null);var path = cljs.core.nth.call(null,vec__19664,1,null);var o__$1 = this;if(cljs.core._EQ_.call(null,nm,new cljs.core.Keyword(null,"navigate","navigate",3116398819)))
{return devcards.system.history.setToken(devcards.system.path__GT_token.call(null,path));
} else
{return null;
}
});
devcards.system.HashBangRouting.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8464__auto__,k__8465__auto__){var self__ = this;
var this__8464__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__8465__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8464__auto____$1),self__.__meta),k__8465__auto__);
} else
{return (new devcards.system.HashBangRouting(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8465__auto__)),null));
}
});
devcards.system.HashBangRouting.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8462__auto__,k__8463__auto__,G__19639){var self__ = this;
var this__8462__auto____$1 = this;var pred__19665 = cljs.core.keyword_identical_QMARK_;var expr__19666 = k__8463__auto__;return (new devcards.system.HashBangRouting(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8463__auto__,G__19639),null));
});
devcards.system.HashBangRouting.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8467__auto__){var self__ = this;
var this__8467__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
devcards.system.HashBangRouting.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8454__auto__,G__19639){var self__ = this;
var this__8454__auto____$1 = this;return (new devcards.system.HashBangRouting(G__19639,self__.__extmap,self__.__hash));
});
devcards.system.HashBangRouting.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8460__auto__,entry__8461__auto__){var self__ = this;
var this__8460__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8461__auto__))
{return cljs.core._assoc.call(null,this__8460__auto____$1,cljs.core._nth.call(null,entry__8461__auto__,0),cljs.core._nth.call(null,entry__8461__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8460__auto____$1,entry__8461__auto__);
}
});
devcards.system.HashBangRouting.cljs$lang$type = true;
devcards.system.HashBangRouting.cljs$lang$ctorPrSeq = (function (this__8489__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.system/HashBangRouting");
});
devcards.system.HashBangRouting.cljs$lang$ctorPrWriter = (function (this__8489__auto__,writer__8490__auto__){return cljs.core._write.call(null,writer__8490__auto__,"devcards.system/HashBangRouting");
});
devcards.system.__GT_HashBangRouting = (function __GT_HashBangRouting(){return (new devcards.system.HashBangRouting());
});
devcards.system.map__GT_HashBangRouting = (function map__GT_HashBangRouting(G__19641){return (new devcards.system.HashBangRouting(null,cljs.core.dissoc.call(null,G__19641)));
});
devcards.system.naked_card = (function naked_card(p__19670){var map__19672 = p__19670;var map__19672__$1 = ((cljs.core.seq_QMARK_.call(null,map__19672))?cljs.core.apply.call(null,cljs.core.hash_map,map__19672):map__19672);var options = cljs.core.get.call(null,map__19672__$1,new cljs.core.Keyword(null,"options","options",4059396624));var path = cljs.core.get.call(null,map__19672__$1,new cljs.core.Keyword(null,"path","path",1017337751));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),devcards.system.path__GT_unique_card_id.call(null,path),new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("devcard-rendered-card"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"padding","padding",4502531971).cljs$core$IFn$_invoke$arity$1(options))?" devcard-padding":""))].join('')], null)], null);
});
devcards.system.card_template = (function card_template(p__19673){var map__19675 = p__19673;var map__19675__$1 = ((cljs.core.seq_QMARK_.call(null,map__19675))?cljs.core.apply.call(null,cljs.core.hash_map,map__19675):map__19675);var card = map__19675__$1;var options = cljs.core.get.call(null,map__19675__$1,new cljs.core.Keyword(null,"options","options",4059396624));var path = cljs.core.get.call(null,map__19675__$1,new cljs.core.Keyword(null,"path","path",1017337751));if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",4091384092).cljs$core$IFn$_invoke$arity$1(options)))
{if(cljs.core.truth_(new cljs.core.Keyword(null,"heading","heading",1809215860).cljs$core$IFn$_invoke$arity$1(options)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default.devcard-panel","div.panel.panel-default.devcard-panel",1439351633),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading.devcards-set-current-path","div.panel-heading.devcards-set-current-path",3498842019),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-path","data-path",604226522),devcards.system.path__GT_unique_card_id.call(null,path)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.panel-title","span.panel-title",1574285341),cljs.core.name.call(null,cljs.core.last.call(null,path))," "], null)], null),devcards.system.naked_card.call(null,card)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default.devcard-panel","div.panel.panel-default.devcard-panel",1439351633),devcards.system.naked_card.call(null,card)], null);
}
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956)], null);
}
});
devcards.system.display_cards = (function display_cards(cards){return cljs.core.map.call(null,cljs.core.comp.call(null,devcards.system.card_template,cljs.core.second),cljs.core.sort_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"position","position",1761709211),cljs.core.second),cards));
});
devcards.system.dir_links = (function dir_links(dirs){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.list-group","div.list-group",1811678591),cljs.core.map.call(null,(function (p__19678){var vec__19679 = p__19678;var key = cljs.core.nth.call(null,vec__19679,0,null);var child_tree = cljs.core.nth.call(null,vec__19679,1,null);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.list-group-item.devcards-add-to-current-path","a.list-group-item.devcards-add-to-current-path",2958249949),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-path","data-path",604226522),cljs.core.name.call(null,key)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-folder-close","span.glyphicon.glyphicon-folder-close",1033290496)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.badge","span.badge",1118720881),cljs.core.count.call(null,child_tree)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956)," ",cljs.core.name.call(null,key)], null)], null);
}),cljs.core.reverse.call(null,dirs))], null);
});
devcards.system.breadcrumbs_templ = (function breadcrumbs_templ(crumbs){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol.breadcrumb.devcards-breadcrumb","ol.breadcrumb.devcards-breadcrumb",4620418554),cljs.core.map.call(null,(function (p__19682){var vec__19683 = p__19682;var n = cljs.core.nth.call(null,vec__19683,0,null);var path = cljs.core.nth.call(null,vec__19683,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.devcards-set-current-path","a.devcards-set-current-path",2980456232),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",1017115293),"#",new cljs.core.Keyword(null,"data-path","data-path",604226522),devcards.system.path__GT_unique_card_id.call(null,path)], null),n], null)], null);
}),crumbs)], null);
});
devcards.system.main_template = (function main_template(data){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar.navbar-default.navbar-static-top.devards-main-navbar","div.navbar.navbar-default.navbar-static-top.devards-main-navbar",580178330),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",4254619350),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-header","div.navbar-header",1151360959),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-brand","a.navbar-brand",4283020137),"(:devcards ClojureScript)"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",4254619350),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-9","div.col-md-9",1688702431),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"breadcrumbs","breadcrumbs",962446402).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(temp__4126__auto__))
{var crumbs = temp__4126__auto__;return devcards.system.breadcrumbs_templ.call(null,crumbs);
} else
{return null;
}
})(),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"display-dir-paths","display-dir-paths",3029188565).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(temp__4126__auto__))
{var dir_paths = temp__4126__auto__;return devcards.system.dir_links.call(null,dir_paths);
} else
{return null;
}
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3","div.col-md-3",1688702425)], null)], null)], null)], null);
});
devcards.system.cards_templates = (function cards_templates(data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",4254619350),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-9","div.col-md-9",1688702431),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"display-cards","display-cards",2395336202).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(temp__4126__auto__))
{var cards = temp__4126__auto__;return devcards.system.display_cards.call(null,cards);
} else
{return null;
}
})(),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"display-single-card","display-single-card",1219792988).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(temp__4126__auto__))
{var card = temp__4126__auto__;return devcards.system.naked_card.call(null,card);
} else
{return null;
}
})()], null)], null)], null);
});
devcards.system.to_node = (function to_node(jq){return (jq.get()[0]);
});
devcards.system.sel_nodes = (function sel_nodes(sel){return cljs.core.mapv.call(null,devcards.system.to_node,jayq.core.$.call(null,sel));
});
devcards.system.visible_card_paths = (function visible_card_paths(){var card_nodes = devcards.system.sel_nodes.call(null,".devcard-rendered-card");return cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,((function (card_nodes){
return (function (p1__19684_SHARP_){return devcards.system.unique_card_id__GT_path.call(null,p1__19684_SHARP_.id);
});})(card_nodes))
,card_nodes));
});
devcards.system.visible_card_nodes = (function visible_card_nodes(data){var card_nodes = devcards.system.sel_nodes.call(null,".devcard-rendered-card");return cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,cljs.core.juxt.call(null,((function (card_nodes){
return (function (p1__19685_SHARP_){return cljs.core.get_in.call(null,data,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cards","cards",1108335317),devcards.system.unique_card_id__GT_path.call(null,p1__19685_SHARP_.id)));
});})(card_nodes))
,cljs.core.identity),card_nodes));
});
devcards.system.toggle_background_to_white = (function toggle_background_to_white(data){if(cljs.core.truth_(new cljs.core.Keyword(null,"display-single-card","display-single-card",1219792988).cljs$core$IFn$_invoke$arity$1(data)))
{return $("body").addClass("devcards-white-background");
} else
{return $("body").removeClass("devcards-white-background");
}
});
devcards.system.compile_failure = (function compile_failure(state){if(cljs.core.truth_(new cljs.core.Keyword(null,"compile-failed","compile-failed",630802569).cljs$core$IFn$_invoke$arity$1(state)))
{return $(devcards.system.devcards_app_node.call(null)).addClass("devcards-compile-failed");
} else
{return $(devcards.system.devcards_app_node.call(null)).removeClass("devcards-compile-failed");
}
});
devcards.system.code_loaded_class = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"js","js",1013907643),"devcards-load-highlight",new cljs.core.Keyword(null,"css","css",1014003061),"devcards-cssload-highlight"], null);
devcards.system.code_loaded = (function code_loaded(state,event_chan){var temp__4126__auto__ = devcards.system.code_loaded_class.call(null,new cljs.core.Keyword(null,"code-loaded","code-loaded",2924989271).cljs$core$IFn$_invoke$arity$1(state));if(cljs.core.truth_(temp__4126__auto__))
{var class$ = temp__4126__auto__;$(devcards.system.devcards_app_node.call(null)).addClass(class$);
var c__10498__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto__,class$,temp__4126__auto__){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto__,class$,temp__4126__auto__){
return (function (state_19716){var state_val_19717 = (state_19716[1]);if((state_val_19717 === 2))
{var inst_19708 = (state_19716[2]);var inst_19709 = devcards.system.devcards_app_node.call(null);var inst_19710 = $(inst_19709);var inst_19711 = inst_19710.removeClass(class$);var inst_19712 = [new cljs.core.Keyword(null,"remove-code-loaded-effect","remove-code-loaded-effect",3939124180)];var inst_19713 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_19712,null));var inst_19714 = cljs.core.async.put_BANG_.call(null,event_chan,inst_19713);var state_19716__$1 = (function (){var statearr_19718 = state_19716;(statearr_19718[7] = inst_19711);
(statearr_19718[8] = inst_19708);
return statearr_19718;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19716__$1,inst_19714);
} else
{if((state_val_19717 === 1))
{var inst_19706 = cljs.core.async.timeout.call(null,1400);var state_19716__$1 = state_19716;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19716__$1,2,inst_19706);
} else
{return null;
}
}
});})(c__10498__auto__,class$,temp__4126__auto__))
;return ((function (switch__10434__auto__,c__10498__auto__,class$,temp__4126__auto__){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_19722 = [null,null,null,null,null,null,null,null,null];(statearr_19722[0] = state_machine__10435__auto__);
(statearr_19722[1] = 1);
return statearr_19722;
});
var state_machine__10435__auto____1 = (function (state_19716){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_19716);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e19723){if((e19723 instanceof Object))
{var ex__10438__auto__ = e19723;var statearr_19724_19726 = state_19716;(statearr_19724_19726[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19716);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19723;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19727 = state_19716;
state_19716 = G__19727;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_19716){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_19716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto__,class$,temp__4126__auto__))
})();var state__10500__auto__ = (function (){var statearr_19725 = f__10499__auto__.call(null);(statearr_19725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto__);
return statearr_19725;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto__,class$,temp__4126__auto__))
);
return c__10498__auto__;
} else
{return null;
}
});
devcards.system.create_needed_card_nodes = (function create_needed_card_nodes(data){if(cljs.core.truth_(new cljs.core.Keyword(null,"render-cards","render-cards",651634654).cljs$core$IFn$_invoke$arity$1(data)))
{return jayq.core.$.call(null,devcards.system.devcards_cards_node.call(null)).html(crate.core.html.call(null,devcards.system.cards_templates.call(null,data)));
} else
{return null;
}
});
devcards.system.unmount_card_nodes = (function unmount_card_nodes(data){var seq__19738 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"visible-card-nodes","visible-card-nodes",1307322721).cljs$core$IFn$_invoke$arity$1(data));var chunk__19739 = null;var count__19740 = 0;var i__19741 = 0;while(true){
if((i__19741 < count__19740))
{var vec__19742 = cljs.core._nth.call(null,chunk__19739,i__19741);var card = cljs.core.nth.call(null,vec__19742,0,null);var node = cljs.core.nth.call(null,vec__19742,1,null);var temp__4126__auto___19748 = cljs.core.get_in.call(null,data,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cards","cards",1108335317),devcards.system.unique_card_id__GT_path.call(null,node.id)));if(cljs.core.truth_(temp__4126__auto___19748))
{var card_19749__$1 = temp__4126__auto___19748;var functionality_19750 = new cljs.core.Keyword(null,"func","func",1017058870).cljs$core$IFn$_invoke$arity$1(card_19749__$1).call(null);if(cljs.core.truth_((function (){var and__7857__auto__ = (function (){var G__19744 = functionality_19750;if(G__19744)
{var bit__8519__auto__ = null;if(cljs.core.truth_((function (){var or__7869__auto__ = bit__8519__auto__;if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return G__19744.devcards$system$IUnMount$;
}
})()))
{return true;
} else
{if((!G__19744.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IUnMount,G__19744);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IUnMount,G__19744);
}
})();if(and__7857__auto__)
{var or__7869__auto__ = new cljs.core.Keyword(null,"render-cards","render-cards",651634654).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = new cljs.core.Keyword(null,"unmount-on-reload","unmount-on-reload",4064716876).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",4059396624).cljs$core$IFn$_invoke$arity$1(card_19749__$1));if(cljs.core.truth_(or__7869__auto____$1))
{return or__7869__auto____$1;
} else
{return new cljs.core.Keyword(null,"delete-card","delete-card",4140359012).cljs$core$IFn$_invoke$arity$1(card_19749__$1);
}
}
} else
{return and__7857__auto__;
}
})()))
{devcards.system.unmount.call(null,functionality_19750,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",1017291124),node,new cljs.core.Keyword(null,"data-atom","data-atom",603797766),new cljs.core.Keyword(null,"data-atom","data-atom",603797766).cljs$core$IFn$_invoke$arity$1(card_19749__$1)], null));
} else
{}
} else
{}
{
var G__19751 = seq__19738;
var G__19752 = chunk__19739;
var G__19753 = count__19740;
var G__19754 = (i__19741 + 1);
seq__19738 = G__19751;
chunk__19739 = G__19752;
count__19740 = G__19753;
i__19741 = G__19754;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19738);if(temp__4126__auto__)
{var seq__19738__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19738__$1))
{var c__8617__auto__ = cljs.core.chunk_first.call(null,seq__19738__$1);{
var G__19755 = cljs.core.chunk_rest.call(null,seq__19738__$1);
var G__19756 = c__8617__auto__;
var G__19757 = cljs.core.count.call(null,c__8617__auto__);
var G__19758 = 0;
seq__19738 = G__19755;
chunk__19739 = G__19756;
count__19740 = G__19757;
i__19741 = G__19758;
continue;
}
} else
{var vec__19745 = cljs.core.first.call(null,seq__19738__$1);var card = cljs.core.nth.call(null,vec__19745,0,null);var node = cljs.core.nth.call(null,vec__19745,1,null);var temp__4126__auto___19759__$1 = cljs.core.get_in.call(null,data,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cards","cards",1108335317),devcards.system.unique_card_id__GT_path.call(null,node.id)));if(cljs.core.truth_(temp__4126__auto___19759__$1))
{var card_19760__$1 = temp__4126__auto___19759__$1;var functionality_19761 = new cljs.core.Keyword(null,"func","func",1017058870).cljs$core$IFn$_invoke$arity$1(card_19760__$1).call(null);if(cljs.core.truth_((function (){var and__7857__auto__ = (function (){var G__19747 = functionality_19761;if(G__19747)
{var bit__8519__auto__ = null;if(cljs.core.truth_((function (){var or__7869__auto__ = bit__8519__auto__;if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return G__19747.devcards$system$IUnMount$;
}
})()))
{return true;
} else
{if((!G__19747.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IUnMount,G__19747);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IUnMount,G__19747);
}
})();if(and__7857__auto__)
{var or__7869__auto__ = new cljs.core.Keyword(null,"render-cards","render-cards",651634654).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = new cljs.core.Keyword(null,"unmount-on-reload","unmount-on-reload",4064716876).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",4059396624).cljs$core$IFn$_invoke$arity$1(card_19760__$1));if(cljs.core.truth_(or__7869__auto____$1))
{return or__7869__auto____$1;
} else
{return new cljs.core.Keyword(null,"delete-card","delete-card",4140359012).cljs$core$IFn$_invoke$arity$1(card_19760__$1);
}
}
} else
{return and__7857__auto__;
}
})()))
{devcards.system.unmount.call(null,functionality_19761,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",1017291124),node,new cljs.core.Keyword(null,"data-atom","data-atom",603797766),new cljs.core.Keyword(null,"data-atom","data-atom",603797766).cljs$core$IFn$_invoke$arity$1(card_19760__$1)], null));
} else
{}
} else
{}
{
var G__19762 = cljs.core.next.call(null,seq__19738__$1);
var G__19763 = null;
var G__19764 = 0;
var G__19765 = 0;
seq__19738 = G__19762;
chunk__19739 = G__19763;
count__19740 = G__19764;
i__19741 = G__19765;
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
devcards.system.mount_card_nodes = (function mount_card_nodes(data){var seq__19774 = cljs.core.seq.call(null,devcards.system.visible_card_nodes.call(null,data));var chunk__19775 = null;var count__19776 = 0;var i__19777 = 0;while(true){
if((i__19777 < count__19776))
{var vec__19778 = cljs.core._nth.call(null,chunk__19775,i__19777);var card = cljs.core.nth.call(null,vec__19778,0,null);var node = cljs.core.nth.call(null,vec__19778,1,null);var functionality_19782 = new cljs.core.Keyword(null,"func","func",1017058870).cljs$core$IFn$_invoke$arity$1(card).call(null);var arg_19783 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",1017291124),node,new cljs.core.Keyword(null,"data-atom","data-atom",603797766),new cljs.core.Keyword(null,"data-atom","data-atom",603797766).cljs$core$IFn$_invoke$arity$1(card)], null);if(cljs.core.truth_(new cljs.core.Keyword(null,"delete-card","delete-card",4140359012).cljs$core$IFn$_invoke$arity$1(card)))
{} else
{if((function (){var G__19779 = functionality_19782;if(G__19779)
{var bit__8519__auto__ = null;if(cljs.core.truth_((function (){var or__7869__auto__ = bit__8519__auto__;if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return G__19779.devcards$system$IMount$;
}
})()))
{return true;
} else
{if((!G__19779.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IMount,G__19779);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IMount,G__19779);
}
})())
{devcards.system.mount.call(null,functionality_19782,arg_19783);
} else
{cljs.core.apply.call(null,functionality_19782,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_19783], null));
}
}
{
var G__19784 = seq__19774;
var G__19785 = chunk__19775;
var G__19786 = count__19776;
var G__19787 = (i__19777 + 1);
seq__19774 = G__19784;
chunk__19775 = G__19785;
count__19776 = G__19786;
i__19777 = G__19787;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19774);if(temp__4126__auto__)
{var seq__19774__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19774__$1))
{var c__8617__auto__ = cljs.core.chunk_first.call(null,seq__19774__$1);{
var G__19788 = cljs.core.chunk_rest.call(null,seq__19774__$1);
var G__19789 = c__8617__auto__;
var G__19790 = cljs.core.count.call(null,c__8617__auto__);
var G__19791 = 0;
seq__19774 = G__19788;
chunk__19775 = G__19789;
count__19776 = G__19790;
i__19777 = G__19791;
continue;
}
} else
{var vec__19780 = cljs.core.first.call(null,seq__19774__$1);var card = cljs.core.nth.call(null,vec__19780,0,null);var node = cljs.core.nth.call(null,vec__19780,1,null);var functionality_19792 = new cljs.core.Keyword(null,"func","func",1017058870).cljs$core$IFn$_invoke$arity$1(card).call(null);var arg_19793 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",1017291124),node,new cljs.core.Keyword(null,"data-atom","data-atom",603797766),new cljs.core.Keyword(null,"data-atom","data-atom",603797766).cljs$core$IFn$_invoke$arity$1(card)], null);if(cljs.core.truth_(new cljs.core.Keyword(null,"delete-card","delete-card",4140359012).cljs$core$IFn$_invoke$arity$1(card)))
{} else
{if((function (){var G__19781 = functionality_19792;if(G__19781)
{var bit__8519__auto__ = null;if(cljs.core.truth_((function (){var or__7869__auto__ = bit__8519__auto__;if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return G__19781.devcards$system$IMount$;
}
})()))
{return true;
} else
{if((!G__19781.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IMount,G__19781);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IMount,G__19781);
}
})())
{devcards.system.mount.call(null,functionality_19792,arg_19793);
} else
{cljs.core.apply.call(null,functionality_19792,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_19793], null));
}
}
{
var G__19794 = cljs.core.next.call(null,seq__19774__$1);
var G__19795 = null;
var G__19796 = 0;
var G__19797 = 0;
seq__19774 = G__19794;
chunk__19775 = G__19795;
count__19776 = G__19796;
i__19777 = G__19797;
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
devcards.system.remove_node = (function remove_node(node){if(cljs.core.truth_(node))
{return node.parentNode.removeChild(node);
} else
{return null;
}
});
devcards.system.remove_card = (function remove_card(card){var temp__4126__auto__ = document.getElementById(devcards.system.path__GT_unique_card_id.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(card)));if(cljs.core.truth_(temp__4126__auto__))
{var node = temp__4126__auto__;return devcards.system.remove_node.call(null,node.parentNode);
} else
{return null;
}
});
devcards.system.delete_deleted_card_nodes = (function delete_deleted_card_nodes(data){var seq__19804 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"visible-card-nodes","visible-card-nodes",1307322721).cljs$core$IFn$_invoke$arity$1(data));var chunk__19805 = null;var count__19806 = 0;var i__19807 = 0;while(true){
if((i__19807 < count__19806))
{var vec__19808 = cljs.core._nth.call(null,chunk__19805,i__19807);var card = cljs.core.nth.call(null,vec__19808,0,null);var node = cljs.core.nth.call(null,vec__19808,1,null);if(cljs.core.truth_(new cljs.core.Keyword(null,"delete-card","delete-card",4140359012).cljs$core$IFn$_invoke$arity$1(card)))
{devcards.system.remove_card.call(null,card);
} else
{}
{
var G__19810 = seq__19804;
var G__19811 = chunk__19805;
var G__19812 = count__19806;
var G__19813 = (i__19807 + 1);
seq__19804 = G__19810;
chunk__19805 = G__19811;
count__19806 = G__19812;
i__19807 = G__19813;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19804);if(temp__4126__auto__)
{var seq__19804__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19804__$1))
{var c__8617__auto__ = cljs.core.chunk_first.call(null,seq__19804__$1);{
var G__19814 = cljs.core.chunk_rest.call(null,seq__19804__$1);
var G__19815 = c__8617__auto__;
var G__19816 = cljs.core.count.call(null,c__8617__auto__);
var G__19817 = 0;
seq__19804 = G__19814;
chunk__19805 = G__19815;
count__19806 = G__19816;
i__19807 = G__19817;
continue;
}
} else
{var vec__19809 = cljs.core.first.call(null,seq__19804__$1);var card = cljs.core.nth.call(null,vec__19809,0,null);var node = cljs.core.nth.call(null,vec__19809,1,null);if(cljs.core.truth_(new cljs.core.Keyword(null,"delete-card","delete-card",4140359012).cljs$core$IFn$_invoke$arity$1(card)))
{devcards.system.remove_card.call(null,card);
} else
{}
{
var G__19818 = cljs.core.next.call(null,seq__19804__$1);
var G__19819 = null;
var G__19820 = 0;
var G__19821 = 0;
seq__19804 = G__19818;
chunk__19805 = G__19819;
count__19806 = G__19820;
i__19807 = G__19821;
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
devcards.system.render_base_if_necessary_BANG_ = (function render_base_if_necessary_BANG_(){var temp__4124__auto__ = devcards.system.devcards_app_node.call(null);if(cljs.core.truth_(temp__4124__auto__))
{var devcards_node = temp__4124__auto__;if(cljs.core.truth_(devcards.system.devcards_controls_node.call(null)))
{} else
{devcards_node.appendChild(crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),devcards.system.devcards_controls_element_id], null)], null)));
}
if(cljs.core.truth_(devcards.system.devcards_cards_node.call(null)))
{return null;
} else
{return devcards_node.appendChild(crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),devcards.system.devcards_cards_element_id], null)], null)));
}
} else
{throw (new Error([cljs.core.str("The devcards interface needs an element with an id of \""),cljs.core.str(devcards.system.devcards_app_element_id),cljs.core.str("\"")].join('')));
}
});
devcards.system.devcard_renderer = (function devcard_renderer(p__19822){var map__19824 = p__19822;var map__19824__$1 = ((cljs.core.seq_QMARK_.call(null,map__19824))?cljs.core.apply.call(null,cljs.core.hash_map,map__19824):map__19824);var event_chan = cljs.core.get.call(null,map__19824__$1,new cljs.core.Keyword(null,"event-chan","event-chan",1951581719));var state = cljs.core.get.call(null,map__19824__$1,new cljs.core.Keyword(null,"state","state",1123661827));devcards.system.unmount_card_nodes.call(null,state);
devcards.system.delete_deleted_card_nodes.call(null,state);
jayq.core.$.call(null,devcards.system.devcards_controls_node.call(null)).html(crate.core.html.call(null,devcards.system.main_template.call(null,state)));
devcards.system.create_needed_card_nodes.call(null,state);
devcards.system.toggle_background_to_white.call(null,state);
devcards.system.compile_failure.call(null,state);
devcards.system.code_loaded.call(null,state,event_chan);
return devcards.system.mount_card_nodes.call(null,state);
});
devcards.system.devcard_initial_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-path","current-path",2436513643),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"position","position",1761709211),0,new cljs.core.Keyword(null,"cards","cards",1108335317),cljs.core.PersistentArrayMap.EMPTY], null);
devcards.system.devcard_comp = frontier.core.compose.call(null,(new devcards.system.DevCards()),(new devcards.system.HashBangRouting()));
devcards.system.data_to_message = (function data_to_message(msg_name,event_chan){return (function (e){e.preventDefault();
var t = e.currentTarget;var temp__4126__auto__ = jayq.core.$.call(null,t).data();if(cljs.core.truth_(temp__4126__auto__))
{var data = temp__4126__auto__;return cljs.core.async.put_BANG_.call(null,event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg_name,cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true)], null));
} else
{return null;
}
});
});
devcards.system.register_listeners = (function register_listeners(event_chan){jayq.core.$.call(null,devcards.system.devcards_app_node.call(null)).on("click","a.devcards-add-to-current-path",devcards.system.data_to_message.call(null,new cljs.core.Keyword(null,"add-to-current-path","add-to-current-path",4368567377),event_chan));
return jayq.core.$.call(null,devcards.system.devcards_app_node.call(null)).on("click",".devcards-set-current-path",devcards.system.data_to_message.call(null,new cljs.core.Keyword(null,"set-current-path","set-current-path",2665043702),event_chan));
});
devcards.system.devcard_system_start = (function devcard_system_start(event_chan,render_callback){return frontier.core.runner_start.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,frontier.core.make_runnable.call(null,devcards.system.devcard_comp,devcards.system.devcard_initial_data),new cljs.core.Keyword(null,"state-callback","state-callback",2401068403),render_callback),new cljs.core.Keyword(null,"event-chan","event-chan",1951581719),event_chan));
});
devcards.system.throttle_chan = (function throttle_chan(in$,ms){var out = cljs.core.async.chan.call(null);var c__10498__auto___19919 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto___19919,out){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto___19919,out){
return (function (state_19898){var state_val_19899 = (state_19898[1]);if((state_val_19899 === 7))
{var inst_19875 = (state_19898[7]);var inst_19882 = (state_19898[2]);var inst_19883 = cljs.core.nth.call(null,inst_19882,0,null);var inst_19884 = cljs.core.nth.call(null,inst_19882,1,null);var inst_19885 = cljs.core._EQ_.call(null,inst_19884,inst_19875);var state_19898__$1 = (function (){var statearr_19900 = state_19898;(statearr_19900[8] = inst_19883);
return statearr_19900;
})();if(inst_19885)
{var statearr_19901_19920 = state_19898__$1;(statearr_19901_19920[1] = 8);
} else
{var statearr_19902_19921 = state_19898__$1;(statearr_19902_19921[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19899 === 1))
{var state_19898__$1 = state_19898;var statearr_19903_19922 = state_19898__$1;(statearr_19903_19922[2] = null);
(statearr_19903_19922[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19899 === 4))
{var inst_19874 = (state_19898[2]);var inst_19875 = cljs.core.async.timeout.call(null,ms);var inst_19876 = inst_19874;var state_19898__$1 = (function (){var statearr_19904 = state_19898;(statearr_19904[9] = inst_19876);
(statearr_19904[7] = inst_19875);
return statearr_19904;
})();var statearr_19905_19923 = state_19898__$1;(statearr_19905_19923[2] = null);
(statearr_19905_19923[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19899 === 6))
{var inst_19892 = (state_19898[2]);var inst_19893 = cljs.core.async.put_BANG_.call(null,out,inst_19892);var state_19898__$1 = (function (){var statearr_19906 = state_19898;(statearr_19906[10] = inst_19893);
return statearr_19906;
})();var statearr_19907_19924 = state_19898__$1;(statearr_19907_19924[2] = null);
(statearr_19907_19924[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19899 === 3))
{var inst_19896 = (state_19898[2]);var state_19898__$1 = state_19898;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19898__$1,inst_19896);
} else
{if((state_val_19899 === 2))
{var state_19898__$1 = state_19898;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19898__$1,4,in$);
} else
{if((state_val_19899 === 9))
{var inst_19883 = (state_19898[8]);var inst_19876 = inst_19883;var state_19898__$1 = (function (){var statearr_19908 = state_19898;(statearr_19908[9] = inst_19876);
return statearr_19908;
})();var statearr_19909_19925 = state_19898__$1;(statearr_19909_19925[2] = null);
(statearr_19909_19925[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19899 === 5))
{var inst_19875 = (state_19898[7]);var inst_19879 = [in$,inst_19875];var inst_19880 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_19879,null));var state_19898__$1 = state_19898;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_19898__$1,7,inst_19880);
} else
{if((state_val_19899 === 10))
{var inst_19890 = (state_19898[2]);var state_19898__$1 = state_19898;var statearr_19910_19926 = state_19898__$1;(statearr_19910_19926[2] = inst_19890);
(statearr_19910_19926[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19899 === 8))
{var inst_19876 = (state_19898[9]);var state_19898__$1 = state_19898;var statearr_19911_19927 = state_19898__$1;(statearr_19911_19927[2] = inst_19876);
(statearr_19911_19927[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__10498__auto___19919,out))
;return ((function (switch__10434__auto__,c__10498__auto___19919,out){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_19915 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19915[0] = state_machine__10435__auto__);
(statearr_19915[1] = 1);
return statearr_19915;
});
var state_machine__10435__auto____1 = (function (state_19898){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_19898);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e19916){if((e19916 instanceof Object))
{var ex__10438__auto__ = e19916;var statearr_19917_19928 = state_19898;(statearr_19917_19928[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19898);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19916;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19929 = state_19898;
state_19898 = G__19929;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_19898){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_19898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto___19919,out))
})();var state__10500__auto__ = (function (){var statearr_19918 = f__10499__auto__.call(null);(statearr_19918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto___19919);
return statearr_19918;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto___19919,out))
);
return out;
});
devcards.system.throttle_function = (function throttle_function(f,ms){var q = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1));var tq = devcards.system.throttle_chan.call(null,q,ms);var c__10498__auto___19988 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto___19988,q,tq){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto___19988,q,tq){
return (function (state_19971){var state_val_19972 = (state_19971[1]);if((state_val_19972 === 7))
{var inst_19967 = (state_19971[2]);var state_19971__$1 = state_19971;var statearr_19973_19989 = state_19971__$1;(statearr_19973_19989[2] = inst_19967);
(statearr_19973_19989[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19972 === 6))
{var state_19971__$1 = state_19971;var statearr_19974_19990 = state_19971__$1;(statearr_19974_19990[2] = null);
(statearr_19974_19990[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19972 === 5))
{var inst_19961 = (state_19971[7]);var inst_19963 = f.call(null,inst_19961);var state_19971__$1 = (function (){var statearr_19975 = state_19971;(statearr_19975[8] = inst_19963);
return statearr_19975;
})();var statearr_19976_19991 = state_19971__$1;(statearr_19976_19991[2] = null);
(statearr_19976_19991[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19972 === 4))
{var inst_19961 = (state_19971[7]);var inst_19961__$1 = (state_19971[2]);var state_19971__$1 = (function (){var statearr_19977 = state_19971;(statearr_19977[7] = inst_19961__$1);
return statearr_19977;
})();if(cljs.core.truth_(inst_19961__$1))
{var statearr_19978_19992 = state_19971__$1;(statearr_19978_19992[1] = 5);
} else
{var statearr_19979_19993 = state_19971__$1;(statearr_19979_19993[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19972 === 3))
{var inst_19969 = (state_19971[2]);var state_19971__$1 = state_19971;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19971__$1,inst_19969);
} else
{if((state_val_19972 === 2))
{var state_19971__$1 = state_19971;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19971__$1,4,tq);
} else
{if((state_val_19972 === 1))
{var state_19971__$1 = state_19971;var statearr_19980_19994 = state_19971__$1;(statearr_19980_19994[2] = null);
(statearr_19980_19994[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__10498__auto___19988,q,tq))
;return ((function (switch__10434__auto__,c__10498__auto___19988,q,tq){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_19984 = [null,null,null,null,null,null,null,null,null];(statearr_19984[0] = state_machine__10435__auto__);
(statearr_19984[1] = 1);
return statearr_19984;
});
var state_machine__10435__auto____1 = (function (state_19971){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_19971);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e19985){if((e19985 instanceof Object))
{var ex__10438__auto__ = e19985;var statearr_19986_19995 = state_19971;(statearr_19986_19995[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19971);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19985;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19996 = state_19971;
state_19971 = G__19996;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_19971){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_19971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto___19988,q,tq))
})();var state__10500__auto__ = (function (){var statearr_19987 = f__10499__auto__.call(null);(statearr_19987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto___19988);
return statearr_19987;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto___19988,q,tq))
);
return ((function (q,tq){
return (function (x){return cljs.core.async.put_BANG_.call(null,q,x);
});
;})(q,tq))
});

//# sourceMappingURL=system.js.map
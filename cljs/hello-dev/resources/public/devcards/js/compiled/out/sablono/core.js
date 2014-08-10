// Compiled by ClojureScript 0.0-2202
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__16449__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__16448 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__16448,0,null);var body = cljs.core.nthnext.call(null,vec__16448,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__16449 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__16449__delegate.call(this,args);};
G__16449.cljs$lang$maxFixedArity = 0;
G__16449.cljs$lang$applyTo = (function (arglist__16450){
var args = cljs.core.seq(arglist__16450);
return G__16449__delegate(args);
});
G__16449.cljs$core$IFn$_invoke$arity$variadic = G__16449__delegate;
return G__16449;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__8586__auto__ = (function iter__16455(s__16456){return (new cljs.core.LazySeq(null,(function (){var s__16456__$1 = s__16456;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16456__$1);if(temp__4126__auto__)
{var s__16456__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16456__$2))
{var c__8584__auto__ = cljs.core.chunk_first.call(null,s__16456__$2);var size__8585__auto__ = cljs.core.count.call(null,c__8584__auto__);var b__16458 = cljs.core.chunk_buffer.call(null,size__8585__auto__);if((function (){var i__16457 = 0;while(true){
if((i__16457 < size__8585__auto__))
{var args = cljs.core._nth.call(null,c__8584__auto__,i__16457);cljs.core.chunk_append.call(null,b__16458,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__16459 = (i__16457 + 1);
i__16457 = G__16459;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16458),iter__16455.call(null,cljs.core.chunk_rest.call(null,s__16456__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16458),null);
}
} else
{var args = cljs.core.first.call(null,s__16456__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__16455.call(null,cljs.core.rest.call(null,s__16456__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8586__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__8586__auto__ = (function iter__16464(s__16465){return (new cljs.core.LazySeq(null,(function (){var s__16465__$1 = s__16465;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16465__$1);if(temp__4126__auto__)
{var s__16465__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16465__$2))
{var c__8584__auto__ = cljs.core.chunk_first.call(null,s__16465__$2);var size__8585__auto__ = cljs.core.count.call(null,c__8584__auto__);var b__16467 = cljs.core.chunk_buffer.call(null,size__8585__auto__);if((function (){var i__16466 = 0;while(true){
if((i__16466 < size__8585__auto__))
{var style = cljs.core._nth.call(null,c__8584__auto__,i__16466);cljs.core.chunk_append.call(null,b__16467,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__16468 = (i__16466 + 1);
i__16466 = G__16468;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16467),iter__16464.call(null,cljs.core.chunk_rest.call(null,s__16465__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16467),null);
}
} else
{var style = cljs.core.first.call(null,s__16465__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__16464.call(null,cljs.core.rest.call(null,s__16465__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8586__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__16469){
var styles = cljs.core.seq(arglist__16469);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to16470 = (function() { 
var link_to16470__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to16470 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to16470__delegate.call(this,url,content);};
link_to16470.cljs$lang$maxFixedArity = 1;
link_to16470.cljs$lang$applyTo = (function (arglist__16471){
var url = cljs.core.first(arglist__16471);
var content = cljs.core.rest(arglist__16471);
return link_to16470__delegate(url,content);
});
link_to16470.cljs$core$IFn$_invoke$arity$variadic = link_to16470__delegate;
return link_to16470;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to16470);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to16472 = (function() { 
var mail_to16472__delegate = function (e_mail,p__16473){var vec__16475 = p__16473;var content = cljs.core.nth.call(null,vec__16475,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__7869__auto__ = content;if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to16472 = function (e_mail,var_args){
var p__16473 = null;if (arguments.length > 1) {
  p__16473 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to16472__delegate.call(this,e_mail,p__16473);};
mail_to16472.cljs$lang$maxFixedArity = 1;
mail_to16472.cljs$lang$applyTo = (function (arglist__16476){
var e_mail = cljs.core.first(arglist__16476);
var p__16473 = cljs.core.rest(arglist__16476);
return mail_to16472__delegate(e_mail,p__16473);
});
mail_to16472.cljs$core$IFn$_invoke$arity$variadic = mail_to16472__delegate;
return mail_to16472;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to16472);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list16477 = (function unordered_list16477(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__8586__auto__ = (function iter__16482(s__16483){return (new cljs.core.LazySeq(null,(function (){var s__16483__$1 = s__16483;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16483__$1);if(temp__4126__auto__)
{var s__16483__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16483__$2))
{var c__8584__auto__ = cljs.core.chunk_first.call(null,s__16483__$2);var size__8585__auto__ = cljs.core.count.call(null,c__8584__auto__);var b__16485 = cljs.core.chunk_buffer.call(null,size__8585__auto__);if((function (){var i__16484 = 0;while(true){
if((i__16484 < size__8585__auto__))
{var x = cljs.core._nth.call(null,c__8584__auto__,i__16484);cljs.core.chunk_append.call(null,b__16485,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__16486 = (i__16484 + 1);
i__16484 = G__16486;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16485),iter__16482.call(null,cljs.core.chunk_rest.call(null,s__16483__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16485),null);
}
} else
{var x = cljs.core.first.call(null,s__16483__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__16482.call(null,cljs.core.rest.call(null,s__16483__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8586__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list16477);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list16487 = (function ordered_list16487(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__8586__auto__ = (function iter__16492(s__16493){return (new cljs.core.LazySeq(null,(function (){var s__16493__$1 = s__16493;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16493__$1);if(temp__4126__auto__)
{var s__16493__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16493__$2))
{var c__8584__auto__ = cljs.core.chunk_first.call(null,s__16493__$2);var size__8585__auto__ = cljs.core.count.call(null,c__8584__auto__);var b__16495 = cljs.core.chunk_buffer.call(null,size__8585__auto__);if((function (){var i__16494 = 0;while(true){
if((i__16494 < size__8585__auto__))
{var x = cljs.core._nth.call(null,c__8584__auto__,i__16494);cljs.core.chunk_append.call(null,b__16495,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__16496 = (i__16494 + 1);
i__16494 = G__16496;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16495),iter__16492.call(null,cljs.core.chunk_rest.call(null,s__16493__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16495),null);
}
} else
{var x = cljs.core.first.call(null,s__16493__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__16492.call(null,cljs.core.rest.call(null,s__16493__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8586__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list16487);
/**
* Create an image element.
*/
sablono.core.image16497 = (function() {
var image16497 = null;
var image16497__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image16497__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image16497 = function(src,alt){
switch(arguments.length){
case 1:
return image16497__1.call(this,src);
case 2:
return image16497__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image16497.cljs$core$IFn$_invoke$arity$1 = image16497__1;
image16497.cljs$core$IFn$_invoke$arity$2 = image16497__2;
return image16497;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image16497);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__16498_SHARP_,p2__16499_SHARP_){return [cljs.core.str(p1__16498_SHARP_),cljs.core.str("["),cljs.core.str(p2__16499_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__16500_SHARP_,p2__16501_SHARP_){return [cljs.core.str(p1__16500_SHARP_),cljs.core.str("-"),cljs.core.str(p2__16501_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field16502 = (function() {
var color_field16502 = null;
var color_field16502__1 = (function (name__13492__auto__){return color_field16502.call(null,name__13492__auto__,null);
});
var color_field16502__2 = (function (name__13492__auto__,value__13493__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1545688804,null))].join(''),name__13492__auto__,value__13493__auto__);
});
color_field16502 = function(name__13492__auto__,value__13493__auto__){
switch(arguments.length){
case 1:
return color_field16502__1.call(this,name__13492__auto__);
case 2:
return color_field16502__2.call(this,name__13492__auto__,value__13493__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field16502.cljs$core$IFn$_invoke$arity$1 = color_field16502__1;
color_field16502.cljs$core$IFn$_invoke$arity$2 = color_field16502__2;
return color_field16502;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field16502);
/**
* Creates a date input field.
*/
sablono.core.date_field16503 = (function() {
var date_field16503 = null;
var date_field16503__1 = (function (name__13492__auto__){return date_field16503.call(null,name__13492__auto__,null);
});
var date_field16503__2 = (function (name__13492__auto__,value__13493__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",-1637455513,null))].join(''),name__13492__auto__,value__13493__auto__);
});
date_field16503 = function(name__13492__auto__,value__13493__auto__){
switch(arguments.length){
case 1:
return date_field16503__1.call(this,name__13492__auto__);
case 2:
return date_field16503__2.call(this,name__13492__auto__,value__13493__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field16503.cljs$core$IFn$_invoke$arity$1 = date_field16503__1;
date_field16503.cljs$core$IFn$_invoke$arity$2 = date_field16503__2;
return date_field16503;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field16503);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field16504 = (function() {
var datetime_field16504 = null;
var datetime_field16504__1 = (function (name__13492__auto__){return datetime_field16504.call(null,name__13492__auto__,null);
});
var datetime_field16504__2 = (function (name__13492__auto__,value__13493__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))].join(''),name__13492__auto__,value__13493__auto__);
});
datetime_field16504 = function(name__13492__auto__,value__13493__auto__){
switch(arguments.length){
case 1:
return datetime_field16504__1.call(this,name__13492__auto__);
case 2:
return datetime_field16504__2.call(this,name__13492__auto__,value__13493__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field16504.cljs$core$IFn$_invoke$arity$1 = datetime_field16504__1;
datetime_field16504.cljs$core$IFn$_invoke$arity$2 = datetime_field16504__2;
return datetime_field16504;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field16504);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field16505 = (function() {
var datetime_local_field16505 = null;
var datetime_local_field16505__1 = (function (name__13492__auto__){return datetime_local_field16505.call(null,name__13492__auto__,null);
});
var datetime_local_field16505__2 = (function (name__13492__auto__,value__13493__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))].join(''),name__13492__auto__,value__13493__auto__);
});
datetime_local_field16505 = function(name__13492__auto__,value__13493__auto__){
switch(arguments.length){
case 1:
return datetime_local_field16505__1.call(this,name__13492__auto__);
case 2:
return datetime_local_field16505__2.call(this,name__13492__auto__,value__13493__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field16505.cljs$core$IFn$_invoke$arity$1 = datetime_local_field16505__1;
datetime_local_field16505.cljs$core$IFn$_invoke$arity$2 = datetime_local_field16505__2;
return datetime_local_field16505;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field16505);
/**
* Creates a email input field.
*/
sablono.core.email_field16506 = (function() {
var email_field16506 = null;
var email_field16506__1 = (function (name__13492__auto__){return email_field16506.call(null,name__13492__auto__,null);
});
var email_field16506__2 = (function (name__13492__auto__,value__13493__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1543912107,null))].join(''),name__13492__auto__,value__13493__auto__);
});
email_field16506 = function(name__13492__auto__,value__13493__auto__){
switch(arguments.length){
case 1:
return email_field16506__1.call(this,name__13492__auto__);
case 2:
return email_field16506__2.call(this,name__13492__auto__,value__13493__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field16506.cljs$core$IFn$_invoke$arity$1 = email_field16506__1;
email_field16506.cljs$core$IFn$_invoke$arity$2 = email_field16506__2;
return email_field16506;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field16506);
/**
* Creates a file input field.
*/
sablono.core.file_field16507 = (function() {
var file_field16507 = null;
var file_field16507__1 = (function (name__13492__auto__){return file_field16507.call(null,name__13492__auto__,null);
});
var file_field16507__2 = (function (name__13492__auto__,value__13493__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",-1637388491,null))].join(''),name__13492__auto__,value__13493__auto__);
});
file_field16507 = function(name__13492__auto__,value__13493__auto__){
switch(arguments.length){
case 1:
return file_field16507__1.call(this,name__13492__auto__);
case 2:
return file_field16507__2.call(this,name__13492__auto__,value__13493__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field16507.cljs$core$IFn$_invoke$arity$1 = file_field16507__1;
file_field16507.cljs$core$IFn$_invoke$arity$2 = file_field16507__2;
return file_field16507;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field16507);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field16508 = (function() {
var hidden_field16508 = null;
var hidden_field16508__1 = (function (name__13492__auto__){return hidden_field16508.call(null,name__13492__auto__,null);
});
var hidden_field16508__2 = (function (name__13492__auto__,value__13493__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))].join(''),name__13492__auto__,value__13493__auto__);
});
hidden_field16508 = function(name__13492__auto__,value__13493__auto__){
switch(arguments.length){
case 1:
return hidden_field16508__1.call(this,name__13492__auto__);
case 2:
return hidden_field16508__2.call(this,name__13492__auto__,value__13493__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field16508.cljs$core$IFn$_invoke$arity$1 = hidden_field16508__1;
hidden_field16508.cljs$core$IFn$_invoke$arity$2 = hidden_field16508__2;
return hidden_field16508;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field16508);
/**
* Creates a month input field.
*/
sablono.core.month_field16509 = (function() {
var month_field16509 = null;
var month_field16509__1 = (function (name__13492__auto__){return month_field16509.call(null,name__13492__auto__,null);
});
var month_field16509__2 = (function (name__13492__auto__,value__13493__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-1536451527,null))].join(''),name__13492__auto__,value__13493__auto__);
});
month_field16509 = function(name__13492__auto__,value__13493__auto__){
switch(arguments.length){
case 1:
return month_field16509__1.call(this,name__13492__auto__);
case 2:
return month_field16509__2.call(this,name__13492__auto__,value__13493__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field16509.cljs$core$IFn$_invoke$arity$1 = month_field16509__1;
month_field16509.cljs$core$IFn$_invoke$arity$2 = month_field16509__2;
return month_field16509;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field16509);
/**
* Creates a number input field.
*/
sablono.core.number_field16510 = (function() {
var number_field16510 = null;
var number_field16510__1 = (function (name__13492__auto__){return number_field16510.call(null,name__13492__auto__,null);
});
var number_field16510__2 = (function (name__13492__auto__,value__13493__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",1620071682,null))].join(''),name__13492__auto__,value__13493__auto__);
});
number_field16510 = function(name__13492__auto__,value__13493__auto__){
switch(arguments.length){
case 1:
return number_field16510__1.call(this,name__13492__auto__);
case 2:
return number_field16510__2.call(this,name__13492__auto__,value__13493__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field16510.cljs$core$IFn$_invoke$arity$1 = number_field16510__1;
number_field16510.cljs$core$IFn$_invoke$arity$2 = number_field16510__2;
return number_field16510;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field16510);
/**
* Creates a password input field.
*/
sablono.core.password_field16511 = (function() {
var password_field16511 = null;
var password_field16511__1 = (function (name__13492__auto__){return password_field16511.call(null,name__13492__auto__,null);
});
var password_field16511__2 = (function (name__13492__auto__,value__13493__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",-423545772,null))].join(''),name__13492__auto__,value__13493__auto__);
});
password_field16511 = function(name__13492__auto__,value__13493__auto__){
switch(arguments.length){
case 1:
return password_field16511__1.call(this,name__13492__auto__);
case 2:
return password_field16511__2.call(this,name__13492__auto__,value__13493__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field16511.cljs$core$IFn$_invoke$arity$1 = password_field16511__1;
password_field16511.cljs$core$IFn$_invoke$arity$2 = password_field16511__2;
return password_field16511;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field16511);
/**
* Creates a range input field.
*/
sablono.core.range_field16512 = (function() {
var range_field16512 = null;
var range_field16512__1 = (function (name__13492__auto__){return range_field16512.call(null,name__13492__auto__,null);
});
var range_field16512__2 = (function (name__13492__auto__,value__13493__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1532251402,null))].join(''),name__13492__auto__,value__13493__auto__);
});
range_field16512 = function(name__13492__auto__,value__13493__auto__){
switch(arguments.length){
case 1:
return range_field16512__1.call(this,name__13492__auto__);
case 2:
return range_field16512__2.call(this,name__13492__auto__,value__13493__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field16512.cljs$core$IFn$_invoke$arity$1 = range_field16512__1;
range_field16512.cljs$core$IFn$_invoke$arity$2 = range_field16512__2;
return range_field16512;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field16512);
/**
* Creates a search input field.
*/
sablono.core.search_field16513 = (function() {
var search_field16513 = null;
var search_field16513__1 = (function (name__13492__auto__){return search_field16513.call(null,name__13492__auto__,null);
});
var search_field16513__2 = (function (name__13492__auto__,value__13493__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",1748098913,null))].join(''),name__13492__auto__,value__13493__auto__);
});
search_field16513 = function(name__13492__auto__,value__13493__auto__){
switch(arguments.length){
case 1:
return search_field16513__1.call(this,name__13492__auto__);
case 2:
return search_field16513__2.call(this,name__13492__auto__,value__13493__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field16513.cljs$core$IFn$_invoke$arity$1 = search_field16513__1;
search_field16513.cljs$core$IFn$_invoke$arity$2 = search_field16513__2;
return search_field16513;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field16513);
/**
* Creates a tel input field.
*/
sablono.core.tel_field16514 = (function() {
var tel_field16514 = null;
var tel_field16514__1 = (function (name__13492__auto__){return tel_field16514.call(null,name__13492__auto__,null);
});
var tel_field16514__2 = (function (name__13492__auto__,value__13493__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))].join(''),name__13492__auto__,value__13493__auto__);
});
tel_field16514 = function(name__13492__auto__,value__13493__auto__){
switch(arguments.length){
case 1:
return tel_field16514__1.call(this,name__13492__auto__);
case 2:
return tel_field16514__2.call(this,name__13492__auto__,value__13493__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field16514.cljs$core$IFn$_invoke$arity$1 = tel_field16514__1;
tel_field16514.cljs$core$IFn$_invoke$arity$2 = tel_field16514__2;
return tel_field16514;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field16514);
/**
* Creates a text input field.
*/
sablono.core.text_field16515 = (function() {
var text_field16515 = null;
var text_field16515__1 = (function (name__13492__auto__){return text_field16515.call(null,name__13492__auto__,null);
});
var text_field16515__2 = (function (name__13492__auto__,value__13493__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-1636974874,null))].join(''),name__13492__auto__,value__13493__auto__);
});
text_field16515 = function(name__13492__auto__,value__13493__auto__){
switch(arguments.length){
case 1:
return text_field16515__1.call(this,name__13492__auto__);
case 2:
return text_field16515__2.call(this,name__13492__auto__,value__13493__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field16515.cljs$core$IFn$_invoke$arity$1 = text_field16515__1;
text_field16515.cljs$core$IFn$_invoke$arity$2 = text_field16515__2;
return text_field16515;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field16515);
/**
* Creates a time input field.
*/
sablono.core.time_field16516 = (function() {
var time_field16516 = null;
var time_field16516__1 = (function (name__13492__auto__){return time_field16516.call(null,name__13492__auto__,null);
});
var time_field16516__2 = (function (name__13492__auto__,value__13493__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1636971386,null))].join(''),name__13492__auto__,value__13493__auto__);
});
time_field16516 = function(name__13492__auto__,value__13493__auto__){
switch(arguments.length){
case 1:
return time_field16516__1.call(this,name__13492__auto__);
case 2:
return time_field16516__2.call(this,name__13492__auto__,value__13493__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field16516.cljs$core$IFn$_invoke$arity$1 = time_field16516__1;
time_field16516.cljs$core$IFn$_invoke$arity$2 = time_field16516__2;
return time_field16516;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field16516);
/**
* Creates a url input field.
*/
sablono.core.url_field16517 = (function() {
var url_field16517 = null;
var url_field16517__1 = (function (name__13492__auto__){return url_field16517.call(null,name__13492__auto__,null);
});
var url_field16517__2 = (function (name__13492__auto__,value__13493__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",-1640415448,null))].join(''),name__13492__auto__,value__13493__auto__);
});
url_field16517 = function(name__13492__auto__,value__13493__auto__){
switch(arguments.length){
case 1:
return url_field16517__1.call(this,name__13492__auto__);
case 2:
return url_field16517__2.call(this,name__13492__auto__,value__13493__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field16517.cljs$core$IFn$_invoke$arity$1 = url_field16517__1;
url_field16517.cljs$core$IFn$_invoke$arity$2 = url_field16517__2;
return url_field16517;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field16517);
/**
* Creates a week input field.
*/
sablono.core.week_field16518 = (function() {
var week_field16518 = null;
var week_field16518__1 = (function (name__13492__auto__){return week_field16518.call(null,name__13492__auto__,null);
});
var week_field16518__2 = (function (name__13492__auto__,value__13493__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",-1636886099,null))].join(''),name__13492__auto__,value__13493__auto__);
});
week_field16518 = function(name__13492__auto__,value__13493__auto__){
switch(arguments.length){
case 1:
return week_field16518__1.call(this,name__13492__auto__);
case 2:
return week_field16518__2.call(this,name__13492__auto__,value__13493__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field16518.cljs$core$IFn$_invoke$arity$1 = week_field16518__1;
week_field16518.cljs$core$IFn$_invoke$arity$2 = week_field16518__2;
return week_field16518;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field16518);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box16519 = (function() {
var check_box16519 = null;
var check_box16519__1 = (function (name){return check_box16519.call(null,name,null);
});
var check_box16519__2 = (function (name,checked_QMARK_){return check_box16519.call(null,name,checked_QMARK_,"true");
});
var check_box16519__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box16519 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box16519__1.call(this,name);
case 2:
return check_box16519__2.call(this,name,checked_QMARK_);
case 3:
return check_box16519__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box16519.cljs$core$IFn$_invoke$arity$1 = check_box16519__1;
check_box16519.cljs$core$IFn$_invoke$arity$2 = check_box16519__2;
check_box16519.cljs$core$IFn$_invoke$arity$3 = check_box16519__3;
return check_box16519;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box16519);
/**
* Creates a radio button.
*/
sablono.core.radio_button16520 = (function() {
var radio_button16520 = null;
var radio_button16520__1 = (function (group){return radio_button16520.call(null,group,null);
});
var radio_button16520__2 = (function (group,checked_QMARK_){return radio_button16520.call(null,group,checked_QMARK_,"true");
});
var radio_button16520__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button16520 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button16520__1.call(this,group);
case 2:
return radio_button16520__2.call(this,group,checked_QMARK_);
case 3:
return radio_button16520__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button16520.cljs$core$IFn$_invoke$arity$1 = radio_button16520__1;
radio_button16520.cljs$core$IFn$_invoke$arity$2 = radio_button16520__2;
radio_button16520.cljs$core$IFn$_invoke$arity$3 = radio_button16520__3;
return radio_button16520;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button16520);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options16521 = (function() {
var select_options16521 = null;
var select_options16521__1 = (function (coll){return select_options16521.call(null,coll,null);
});
var select_options16521__2 = (function (coll,selected){var iter__8586__auto__ = (function iter__16530(s__16531){return (new cljs.core.LazySeq(null,(function (){var s__16531__$1 = s__16531;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16531__$1);if(temp__4126__auto__)
{var s__16531__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16531__$2))
{var c__8584__auto__ = cljs.core.chunk_first.call(null,s__16531__$2);var size__8585__auto__ = cljs.core.count.call(null,c__8584__auto__);var b__16533 = cljs.core.chunk_buffer.call(null,size__8585__auto__);if((function (){var i__16532 = 0;while(true){
if((i__16532 < size__8585__auto__))
{var x = cljs.core._nth.call(null,c__8584__auto__,i__16532);cljs.core.chunk_append.call(null,b__16533,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__16536 = x;var text = cljs.core.nth.call(null,vec__16536,0,null);var val = cljs.core.nth.call(null,vec__16536,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__16536,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options16521.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__16538 = (i__16532 + 1);
i__16532 = G__16538;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16533),iter__16530.call(null,cljs.core.chunk_rest.call(null,s__16531__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16533),null);
}
} else
{var x = cljs.core.first.call(null,s__16531__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__16537 = x;var text = cljs.core.nth.call(null,vec__16537,0,null);var val = cljs.core.nth.call(null,vec__16537,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__16537,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options16521.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__16530.call(null,cljs.core.rest.call(null,s__16531__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8586__auto__.call(null,coll);
});
select_options16521 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options16521__1.call(this,coll);
case 2:
return select_options16521__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options16521.cljs$core$IFn$_invoke$arity$1 = select_options16521__1;
select_options16521.cljs$core$IFn$_invoke$arity$2 = select_options16521__2;
return select_options16521;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options16521);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down16539 = (function() {
var drop_down16539 = null;
var drop_down16539__2 = (function (name,options){return drop_down16539.call(null,name,options,null);
});
var drop_down16539__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down16539 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down16539__2.call(this,name,options);
case 3:
return drop_down16539__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down16539.cljs$core$IFn$_invoke$arity$2 = drop_down16539__2;
drop_down16539.cljs$core$IFn$_invoke$arity$3 = drop_down16539__3;
return drop_down16539;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down16539);
/**
* Creates a text area element.
*/
sablono.core.text_area16540 = (function() {
var text_area16540 = null;
var text_area16540__1 = (function (name){return text_area16540.call(null,name,null);
});
var text_area16540__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area16540 = function(name,value){
switch(arguments.length){
case 1:
return text_area16540__1.call(this,name);
case 2:
return text_area16540__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area16540.cljs$core$IFn$_invoke$arity$1 = text_area16540__1;
text_area16540.cljs$core$IFn$_invoke$arity$2 = text_area16540__2;
return text_area16540;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area16540);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label16541 = (function label16541(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label16541);
/**
* Creates a submit button.
*/
sablono.core.submit_button16542 = (function submit_button16542(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button16542);
/**
* Creates a form reset button.
*/
sablono.core.reset_button16543 = (function reset_button16543(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button16543);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to16544 = (function() { 
var form_to16544__delegate = function (p__16545,body){var vec__16547 = p__16545;var method = cljs.core.nth.call(null,vec__16547,0,null);var action = cljs.core.nth.call(null,vec__16547,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to16544 = function (p__16545,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to16544__delegate.call(this,p__16545,body);};
form_to16544.cljs$lang$maxFixedArity = 1;
form_to16544.cljs$lang$applyTo = (function (arglist__16548){
var p__16545 = cljs.core.first(arglist__16548);
var body = cljs.core.rest(arglist__16548);
return form_to16544__delegate(p__16545,body);
});
form_to16544.cljs$core$IFn$_invoke$arity$variadic = form_to16544__delegate;
return form_to16544;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to16544);

//# sourceMappingURL=core.js.map
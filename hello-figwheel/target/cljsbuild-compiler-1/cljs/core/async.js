// Compiled by ClojureScript 0.0-2202
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t17406 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17406 = (function (f,fn_handler,meta17407){
this.f = f;
this.fn_handler = fn_handler;
this.meta17407 = meta17407;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17406.cljs$lang$type = true;
cljs.core.async.t17406.cljs$lang$ctorStr = "cljs.core.async/t17406";
cljs.core.async.t17406.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"cljs.core.async/t17406");
});
cljs.core.async.t17406.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17406.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t17406.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t17406.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17408){var self__ = this;
var _17408__$1 = this;return self__.meta17407;
});
cljs.core.async.t17406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17408,meta17407__$1){var self__ = this;
var _17408__$1 = this;return (new cljs.core.async.t17406(self__.f,self__.fn_handler,meta17407__$1));
});
cljs.core.async.__GT_t17406 = (function __GT_t17406(f__$1,fn_handler__$1,meta17407){return (new cljs.core.async.t17406(f__$1,fn_handler__$1,meta17407));
});
}
return (new cljs.core.async.t17406(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__17410 = buff;if(G__17410)
{var bit__4131__auto__ = null;if(cljs.core.truth_((function (){var or__3481__auto__ = bit__4131__auto__;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return G__17410.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__17410.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__17410);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__17410);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(ret))
{var val_17411 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17411) : fn1.call(null,val_17411));
} else
{cljs.core.async.impl.dispatch.run(((function (val_17411,ret){
return (function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17411) : fn1.call(null,val_17411));
});})(val_17411,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref(ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref(retb);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else
{cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4329__auto___17412 = n;var x_17413 = 0;while(true){
if((x_17413 < n__4329__auto___17412))
{(a[x_17413] = 0);
{
var G__17414 = (x_17413 + 1);
x_17413 = G__17414;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n))
{return a;
} else
{var j = cljs.core.rand_int(i);(a[i] = (a[j]));
(a[j] = i);
{
var G__17415 = (i + 1);
i = G__17415;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t17419 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17419 = (function (flag,alt_flag,meta17420){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta17420 = meta17420;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17419.cljs$lang$type = true;
cljs.core.async.t17419.cljs$lang$ctorStr = "cljs.core.async/t17419";
cljs.core.async.t17419.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"cljs.core.async/t17419");
});})(flag))
;
cljs.core.async.t17419.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17419.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});})(flag))
;
cljs.core.async.t17419.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t17419.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17421){var self__ = this;
var _17421__$1 = this;return self__.meta17420;
});})(flag))
;
cljs.core.async.t17419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17421,meta17420__$1){var self__ = this;
var _17421__$1 = this;return (new cljs.core.async.t17419(self__.flag,self__.alt_flag,meta17420__$1));
});})(flag))
;
cljs.core.async.__GT_t17419 = ((function (flag){
return (function __GT_t17419(flag__$1,alt_flag__$1,meta17420){return (new cljs.core.async.t17419(flag__$1,alt_flag__$1,meta17420));
});})(flag))
;
}
return (new cljs.core.async.t17419(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t17425 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17425 = (function (cb,flag,alt_handler,meta17426){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta17426 = meta17426;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17425.cljs$lang$type = true;
cljs.core.async.t17425.cljs$lang$ctorStr = "cljs.core.async/t17425";
cljs.core.async.t17425.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"cljs.core.async/t17425");
});
cljs.core.async.t17425.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17425.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t17425.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t17425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17427){var self__ = this;
var _17427__$1 = this;return self__.meta17426;
});
cljs.core.async.t17425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17427,meta17426__$1){var self__ = this;
var _17427__$1 = this;return (new cljs.core.async.t17425(self__.cb,self__.flag,self__.alt_handler,meta17426__$1));
});
cljs.core.async.__GT_t17425 = (function __GT_t17425(cb__$1,flag__$1,alt_handler__$1,meta17426){return (new cljs.core.async.t17425(cb__$1,flag__$1,alt_handler__$1,meta17426));
});
}
return (new cljs.core.async.t17425(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17428_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17428_SHARP_,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17428_SHARP_,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17429_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17429_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17429_SHARP_,port], null)));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3481__auto__ = wport;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__17430 = (i + 1);
i = G__17430;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3481__auto__ = ret;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$61))
{var temp__4126__auto__ = (function (){var and__3469__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3469__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3469__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$61.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$61], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__17431){var map__17433 = p__17431;var map__17433__$1 = ((cljs.core.seq_QMARK_(map__17433))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17433):map__17433);var opts = map__17433__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__17431 = null;if (arguments.length > 1) {
  p__17431 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__17431);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__17434){
var ports = cljs.core.first(arglist__17434);
var p__17431 = cljs.core.rest(arglist__17434);
return alts_BANG___delegate(ports,p__17431);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t17442 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17442 = (function (ch,f,map_LT_,meta17443){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17443 = meta17443;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17442.cljs$lang$type = true;
cljs.core.async.t17442.cljs$lang$ctorStr = "cljs.core.async/t17442";
cljs.core.async.t17442.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"cljs.core.async/t17442");
});
cljs.core.async.t17442.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17442.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});
cljs.core.async.t17442.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17442.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t17445 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17445 = (function (fn1,_,meta17443,ch,f,map_LT_,meta17446){
this.fn1 = fn1;
this._ = _;
this.meta17443 = meta17443;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17446 = meta17446;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17445.cljs$lang$type = true;
cljs.core.async.t17445.cljs$lang$ctorStr = "cljs.core.async/t17445";
cljs.core.async.t17445.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"cljs.core.async/t17445");
});})(___$1))
;
cljs.core.async.t17445.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17445.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t17445.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});})(___$1))
;
cljs.core.async.t17445.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__17435_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__17435_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17435_SHARP_) : self__.f.call(null,p1__17435_SHARP_)))) : f1.call(null,(((p1__17435_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17435_SHARP_) : self__.f.call(null,p1__17435_SHARP_)))));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t17445.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17447){var self__ = this;
var _17447__$1 = this;return self__.meta17446;
});})(___$1))
;
cljs.core.async.t17445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17447,meta17446__$1){var self__ = this;
var _17447__$1 = this;return (new cljs.core.async.t17445(self__.fn1,self__._,self__.meta17443,self__.ch,self__.f,self__.map_LT_,meta17446__$1));
});})(___$1))
;
cljs.core.async.__GT_t17445 = ((function (___$1){
return (function __GT_t17445(fn1__$1,___$2,meta17443__$1,ch__$2,f__$2,map_LT___$2,meta17446){return (new cljs.core.async.t17445(fn1__$1,___$2,meta17443__$1,ch__$2,f__$2,map_LT___$2,meta17446));
});})(___$1))
;
}
return (new cljs.core.async.t17445(fn1,___$1,self__.meta17443,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3469__auto__ = ret;if(cljs.core.truth_(and__3469__auto__))
{return !((cljs.core.deref(ret) == null));
} else
{return and__3469__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ret)) : self__.f.call(null,cljs.core.deref(ret))));
} else
{return ret;
}
});
cljs.core.async.t17442.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17442.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t17442.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t17442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17444){var self__ = this;
var _17444__$1 = this;return self__.meta17443;
});
cljs.core.async.t17442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17444,meta17443__$1){var self__ = this;
var _17444__$1 = this;return (new cljs.core.async.t17442(self__.ch,self__.f,self__.map_LT_,meta17443__$1));
});
cljs.core.async.__GT_t17442 = (function __GT_t17442(ch__$1,f__$1,map_LT___$1,meta17443){return (new cljs.core.async.t17442(ch__$1,f__$1,map_LT___$1,meta17443));
});
}
return (new cljs.core.async.t17442(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t17451 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17451 = (function (ch,f,map_GT_,meta17452){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta17452 = meta17452;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17451.cljs$lang$type = true;
cljs.core.async.t17451.cljs$lang$ctorStr = "cljs.core.async/t17451";
cljs.core.async.t17451.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"cljs.core.async/t17451");
});
cljs.core.async.t17451.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17451.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});
cljs.core.async.t17451.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17451.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t17451.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17451.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t17451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17453){var self__ = this;
var _17453__$1 = this;return self__.meta17452;
});
cljs.core.async.t17451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17453,meta17452__$1){var self__ = this;
var _17453__$1 = this;return (new cljs.core.async.t17451(self__.ch,self__.f,self__.map_GT_,meta17452__$1));
});
cljs.core.async.__GT_t17451 = (function __GT_t17451(ch__$1,f__$1,map_GT___$1,meta17452){return (new cljs.core.async.t17451(ch__$1,f__$1,map_GT___$1,meta17452));
});
}
return (new cljs.core.async.t17451(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t17457 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17457 = (function (ch,p,filter_GT_,meta17458){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta17458 = meta17458;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17457.cljs$lang$type = true;
cljs.core.async.t17457.cljs$lang$ctorStr = "cljs.core.async/t17457";
cljs.core.async.t17457.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"cljs.core.async/t17457");
});
cljs.core.async.t17457.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17457.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});
cljs.core.async.t17457.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17457.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t17457.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17457.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t17457.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t17457.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17459){var self__ = this;
var _17459__$1 = this;return self__.meta17458;
});
cljs.core.async.t17457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17459,meta17458__$1){var self__ = this;
var _17459__$1 = this;return (new cljs.core.async.t17457(self__.ch,self__.p,self__.filter_GT_,meta17458__$1));
});
cljs.core.async.__GT_t17457 = (function __GT_t17457(ch__$1,p__$1,filter_GT___$1,meta17458){return (new cljs.core.async.t17457(ch__$1,p__$1,filter_GT___$1,meta17458));
});
}
return (new cljs.core.async.t17457(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6136__auto___17542 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6136__auto___17542,out){
return (function (){var f__6137__auto__ = (function (){var switch__6072__auto__ = ((function (c__6136__auto___17542,out){
return (function (state_17521){var state_val_17522 = (state_17521[1]);if((state_val_17522 === 7))
{var inst_17517 = (state_17521[2]);var state_17521__$1 = state_17521;var statearr_17523_17543 = state_17521__$1;(statearr_17523_17543[2] = inst_17517);
(statearr_17523_17543[1] = 3);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17522 === 1))
{var state_17521__$1 = state_17521;var statearr_17524_17544 = state_17521__$1;(statearr_17524_17544[2] = null);
(statearr_17524_17544[1] = 2);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17522 === 4))
{var inst_17503 = (state_17521[7]);var inst_17503__$1 = (state_17521[2]);var inst_17504 = (inst_17503__$1 == null);var state_17521__$1 = (function (){var statearr_17525 = state_17521;(statearr_17525[7] = inst_17503__$1);
return statearr_17525;
})();if(cljs.core.truth_(inst_17504))
{var statearr_17526_17545 = state_17521__$1;(statearr_17526_17545[1] = 5);
} else
{var statearr_17527_17546 = state_17521__$1;(statearr_17527_17546[1] = 6);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_17522 === 6))
{var inst_17503 = (state_17521[7]);var inst_17508 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17503) : p.call(null,inst_17503));var state_17521__$1 = state_17521;if(cljs.core.truth_(inst_17508))
{var statearr_17528_17547 = state_17521__$1;(statearr_17528_17547[1] = 8);
} else
{var statearr_17529_17548 = state_17521__$1;(statearr_17529_17548[1] = 9);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_17522 === 3))
{var inst_17519 = (state_17521[2]);var state_17521__$1 = state_17521;return cljs.core.async.impl.ioc_helpers.return_chan(state_17521__$1,inst_17519);
} else
{if((state_val_17522 === 2))
{var state_17521__$1 = state_17521;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17521__$1,4,ch);
} else
{if((state_val_17522 === 11))
{var inst_17511 = (state_17521[2]);var state_17521__$1 = state_17521;var statearr_17530_17549 = state_17521__$1;(statearr_17530_17549[2] = inst_17511);
(statearr_17530_17549[1] = 10);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17522 === 9))
{var state_17521__$1 = state_17521;var statearr_17531_17550 = state_17521__$1;(statearr_17531_17550[2] = null);
(statearr_17531_17550[1] = 10);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17522 === 5))
{var inst_17506 = cljs.core.async.close_BANG_(out);var state_17521__$1 = state_17521;var statearr_17532_17551 = state_17521__$1;(statearr_17532_17551[2] = inst_17506);
(statearr_17532_17551[1] = 7);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17522 === 10))
{var inst_17514 = (state_17521[2]);var state_17521__$1 = (function (){var statearr_17533 = state_17521;(statearr_17533[8] = inst_17514);
return statearr_17533;
})();var statearr_17534_17552 = state_17521__$1;(statearr_17534_17552[2] = null);
(statearr_17534_17552[1] = 2);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17522 === 8))
{var inst_17503 = (state_17521[7]);var state_17521__$1 = state_17521;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17521__$1,11,out,inst_17503);
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
});})(c__6136__auto___17542,out))
;return ((function (switch__6072__auto__,c__6136__auto___17542,out){
return (function() {
var state_machine__6073__auto__ = null;
var state_machine__6073__auto____0 = (function (){var statearr_17538 = [null,null,null,null,null,null,null,null,null];(statearr_17538[0] = state_machine__6073__auto__);
(statearr_17538[1] = 1);
return statearr_17538;
});
var state_machine__6073__auto____1 = (function (state_17521){while(true){
var ret_value__6074__auto__ = (function (){try{while(true){
var result__6075__auto__ = switch__6072__auto__(state_17521);if(cljs.core.keyword_identical_QMARK_(result__6075__auto__,cljs.core.constant$keyword$71))
{{
continue;
}
} else
{return result__6075__auto__;
}
break;
}
}catch (e17539){if((e17539 instanceof Object))
{var ex__6076__auto__ = e17539;var statearr_17540_17553 = state_17521;(statearr_17540_17553[5] = ex__6076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17521);
return cljs.core.constant$keyword$71;
} else
{if(cljs.core.constant$keyword$60)
{throw e17539;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6074__auto__,cljs.core.constant$keyword$71))
{{
var G__17554 = state_17521;
state_17521 = G__17554;
continue;
}
} else
{return ret_value__6074__auto__;
}
break;
}
});
state_machine__6073__auto__ = function(state_17521){
switch(arguments.length){
case 0:
return state_machine__6073__auto____0.call(this);
case 1:
return state_machine__6073__auto____1.call(this,state_17521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6073__auto____0;
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6073__auto____1;
return state_machine__6073__auto__;
})()
;})(switch__6072__auto__,c__6136__auto___17542,out))
})();var state__6138__auto__ = (function (){var statearr_17541 = (f__6137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6137__auto__.cljs$core$IFn$_invoke$arity$0() : f__6137__auto__.call(null));(statearr_17541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6136__auto___17542);
return statearr_17541;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6138__auto__);
});})(c__6136__auto___17542,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6136__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6136__auto__){
return (function (){var f__6137__auto__ = (function (){var switch__6072__auto__ = ((function (c__6136__auto__){
return (function (state_17720){var state_val_17721 = (state_17720[1]);if((state_val_17721 === 7))
{var inst_17716 = (state_17720[2]);var state_17720__$1 = state_17720;var statearr_17722_17763 = state_17720__$1;(statearr_17722_17763[2] = inst_17716);
(statearr_17722_17763[1] = 3);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17721 === 20))
{var inst_17686 = (state_17720[7]);var inst_17697 = (state_17720[2]);var inst_17698 = cljs.core.next(inst_17686);var inst_17672 = inst_17698;var inst_17673 = null;var inst_17674 = 0;var inst_17675 = 0;var state_17720__$1 = (function (){var statearr_17723 = state_17720;(statearr_17723[8] = inst_17697);
(statearr_17723[9] = inst_17675);
(statearr_17723[10] = inst_17673);
(statearr_17723[11] = inst_17674);
(statearr_17723[12] = inst_17672);
return statearr_17723;
})();var statearr_17724_17764 = state_17720__$1;(statearr_17724_17764[2] = null);
(statearr_17724_17764[1] = 8);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17721 === 1))
{var state_17720__$1 = state_17720;var statearr_17725_17765 = state_17720__$1;(statearr_17725_17765[2] = null);
(statearr_17725_17765[1] = 2);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17721 === 4))
{var inst_17661 = (state_17720[13]);var inst_17661__$1 = (state_17720[2]);var inst_17662 = (inst_17661__$1 == null);var state_17720__$1 = (function (){var statearr_17726 = state_17720;(statearr_17726[13] = inst_17661__$1);
return statearr_17726;
})();if(cljs.core.truth_(inst_17662))
{var statearr_17727_17766 = state_17720__$1;(statearr_17727_17766[1] = 5);
} else
{var statearr_17728_17767 = state_17720__$1;(statearr_17728_17767[1] = 6);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_17721 === 15))
{var state_17720__$1 = state_17720;var statearr_17732_17768 = state_17720__$1;(statearr_17732_17768[2] = null);
(statearr_17732_17768[1] = 16);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17721 === 21))
{var state_17720__$1 = state_17720;var statearr_17733_17769 = state_17720__$1;(statearr_17733_17769[2] = null);
(statearr_17733_17769[1] = 23);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17721 === 13))
{var inst_17675 = (state_17720[9]);var inst_17673 = (state_17720[10]);var inst_17674 = (state_17720[11]);var inst_17672 = (state_17720[12]);var inst_17682 = (state_17720[2]);var inst_17683 = (inst_17675 + 1);var tmp17729 = inst_17673;var tmp17730 = inst_17674;var tmp17731 = inst_17672;var inst_17672__$1 = tmp17731;var inst_17673__$1 = tmp17729;var inst_17674__$1 = tmp17730;var inst_17675__$1 = inst_17683;var state_17720__$1 = (function (){var statearr_17734 = state_17720;(statearr_17734[14] = inst_17682);
(statearr_17734[9] = inst_17675__$1);
(statearr_17734[10] = inst_17673__$1);
(statearr_17734[11] = inst_17674__$1);
(statearr_17734[12] = inst_17672__$1);
return statearr_17734;
})();var statearr_17735_17770 = state_17720__$1;(statearr_17735_17770[2] = null);
(statearr_17735_17770[1] = 8);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17721 === 22))
{var state_17720__$1 = state_17720;var statearr_17736_17771 = state_17720__$1;(statearr_17736_17771[2] = null);
(statearr_17736_17771[1] = 2);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17721 === 6))
{var inst_17661 = (state_17720[13]);var inst_17670 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17661) : f.call(null,inst_17661));var inst_17671 = cljs.core.seq(inst_17670);var inst_17672 = inst_17671;var inst_17673 = null;var inst_17674 = 0;var inst_17675 = 0;var state_17720__$1 = (function (){var statearr_17737 = state_17720;(statearr_17737[9] = inst_17675);
(statearr_17737[10] = inst_17673);
(statearr_17737[11] = inst_17674);
(statearr_17737[12] = inst_17672);
return statearr_17737;
})();var statearr_17738_17772 = state_17720__$1;(statearr_17738_17772[2] = null);
(statearr_17738_17772[1] = 8);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17721 === 17))
{var inst_17686 = (state_17720[7]);var inst_17690 = cljs.core.chunk_first(inst_17686);var inst_17691 = cljs.core.chunk_rest(inst_17686);var inst_17692 = cljs.core.count(inst_17690);var inst_17672 = inst_17691;var inst_17673 = inst_17690;var inst_17674 = inst_17692;var inst_17675 = 0;var state_17720__$1 = (function (){var statearr_17739 = state_17720;(statearr_17739[9] = inst_17675);
(statearr_17739[10] = inst_17673);
(statearr_17739[11] = inst_17674);
(statearr_17739[12] = inst_17672);
return statearr_17739;
})();var statearr_17740_17773 = state_17720__$1;(statearr_17740_17773[2] = null);
(statearr_17740_17773[1] = 8);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17721 === 3))
{var inst_17718 = (state_17720[2]);var state_17720__$1 = state_17720;return cljs.core.async.impl.ioc_helpers.return_chan(state_17720__$1,inst_17718);
} else
{if((state_val_17721 === 12))
{var inst_17706 = (state_17720[2]);var state_17720__$1 = state_17720;var statearr_17741_17774 = state_17720__$1;(statearr_17741_17774[2] = inst_17706);
(statearr_17741_17774[1] = 9);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17721 === 2))
{var state_17720__$1 = state_17720;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17720__$1,4,in$);
} else
{if((state_val_17721 === 23))
{var inst_17714 = (state_17720[2]);var state_17720__$1 = state_17720;var statearr_17742_17775 = state_17720__$1;(statearr_17742_17775[2] = inst_17714);
(statearr_17742_17775[1] = 7);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17721 === 19))
{var inst_17701 = (state_17720[2]);var state_17720__$1 = state_17720;var statearr_17743_17776 = state_17720__$1;(statearr_17743_17776[2] = inst_17701);
(statearr_17743_17776[1] = 16);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17721 === 11))
{var inst_17686 = (state_17720[7]);var inst_17672 = (state_17720[12]);var inst_17686__$1 = cljs.core.seq(inst_17672);var state_17720__$1 = (function (){var statearr_17744 = state_17720;(statearr_17744[7] = inst_17686__$1);
return statearr_17744;
})();if(inst_17686__$1)
{var statearr_17745_17777 = state_17720__$1;(statearr_17745_17777[1] = 14);
} else
{var statearr_17746_17778 = state_17720__$1;(statearr_17746_17778[1] = 15);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_17721 === 9))
{var inst_17708 = (state_17720[2]);var inst_17709 = cljs.core.async.impl.protocols.closed_QMARK_(out);var state_17720__$1 = (function (){var statearr_17747 = state_17720;(statearr_17747[15] = inst_17708);
return statearr_17747;
})();if(cljs.core.truth_(inst_17709))
{var statearr_17748_17779 = state_17720__$1;(statearr_17748_17779[1] = 21);
} else
{var statearr_17749_17780 = state_17720__$1;(statearr_17749_17780[1] = 22);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_17721 === 5))
{var inst_17664 = cljs.core.async.close_BANG_(out);var state_17720__$1 = state_17720;var statearr_17750_17781 = state_17720__$1;(statearr_17750_17781[2] = inst_17664);
(statearr_17750_17781[1] = 7);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17721 === 14))
{var inst_17686 = (state_17720[7]);var inst_17688 = cljs.core.chunked_seq_QMARK_(inst_17686);var state_17720__$1 = state_17720;if(inst_17688)
{var statearr_17751_17782 = state_17720__$1;(statearr_17751_17782[1] = 17);
} else
{var statearr_17752_17783 = state_17720__$1;(statearr_17752_17783[1] = 18);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_17721 === 16))
{var inst_17704 = (state_17720[2]);var state_17720__$1 = state_17720;var statearr_17753_17784 = state_17720__$1;(statearr_17753_17784[2] = inst_17704);
(statearr_17753_17784[1] = 12);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17721 === 10))
{var inst_17675 = (state_17720[9]);var inst_17673 = (state_17720[10]);var inst_17680 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17673,inst_17675);var state_17720__$1 = state_17720;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17720__$1,13,out,inst_17680);
} else
{if((state_val_17721 === 18))
{var inst_17686 = (state_17720[7]);var inst_17695 = cljs.core.first(inst_17686);var state_17720__$1 = state_17720;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17720__$1,20,out,inst_17695);
} else
{if((state_val_17721 === 8))
{var inst_17675 = (state_17720[9]);var inst_17674 = (state_17720[11]);var inst_17677 = (inst_17675 < inst_17674);var inst_17678 = inst_17677;var state_17720__$1 = state_17720;if(cljs.core.truth_(inst_17678))
{var statearr_17754_17785 = state_17720__$1;(statearr_17754_17785[1] = 10);
} else
{var statearr_17755_17786 = state_17720__$1;(statearr_17755_17786[1] = 11);
}
return cljs.core.constant$keyword$71;
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
}
}
}
}
}
}
}
}
}
});})(c__6136__auto__))
;return ((function (switch__6072__auto__,c__6136__auto__){
return (function() {
var state_machine__6073__auto__ = null;
var state_machine__6073__auto____0 = (function (){var statearr_17759 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17759[0] = state_machine__6073__auto__);
(statearr_17759[1] = 1);
return statearr_17759;
});
var state_machine__6073__auto____1 = (function (state_17720){while(true){
var ret_value__6074__auto__ = (function (){try{while(true){
var result__6075__auto__ = switch__6072__auto__(state_17720);if(cljs.core.keyword_identical_QMARK_(result__6075__auto__,cljs.core.constant$keyword$71))
{{
continue;
}
} else
{return result__6075__auto__;
}
break;
}
}catch (e17760){if((e17760 instanceof Object))
{var ex__6076__auto__ = e17760;var statearr_17761_17787 = state_17720;(statearr_17761_17787[5] = ex__6076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17720);
return cljs.core.constant$keyword$71;
} else
{if(cljs.core.constant$keyword$60)
{throw e17760;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6074__auto__,cljs.core.constant$keyword$71))
{{
var G__17788 = state_17720;
state_17720 = G__17788;
continue;
}
} else
{return ret_value__6074__auto__;
}
break;
}
});
state_machine__6073__auto__ = function(state_17720){
switch(arguments.length){
case 0:
return state_machine__6073__auto____0.call(this);
case 1:
return state_machine__6073__auto____1.call(this,state_17720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6073__auto____0;
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6073__auto____1;
return state_machine__6073__auto__;
})()
;})(switch__6072__auto__,c__6136__auto__))
})();var state__6138__auto__ = (function (){var statearr_17762 = (f__6137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6137__auto__.cljs$core$IFn$_invoke$arity$0() : f__6137__auto__.call(null));(statearr_17762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6136__auto__);
return statearr_17762;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6138__auto__);
});})(c__6136__auto__))
);
return c__6136__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6136__auto___17883 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6136__auto___17883){
return (function (){var f__6137__auto__ = (function (){var switch__6072__auto__ = ((function (c__6136__auto___17883){
return (function (state_17859){var state_val_17860 = (state_17859[1]);if((state_val_17860 === 7))
{var inst_17855 = (state_17859[2]);var state_17859__$1 = state_17859;var statearr_17861_17884 = state_17859__$1;(statearr_17861_17884[2] = inst_17855);
(statearr_17861_17884[1] = 3);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17860 === 1))
{var state_17859__$1 = state_17859;var statearr_17862_17885 = state_17859__$1;(statearr_17862_17885[2] = null);
(statearr_17862_17885[1] = 2);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17860 === 4))
{var inst_17838 = (state_17859[7]);var inst_17838__$1 = (state_17859[2]);var inst_17839 = (inst_17838__$1 == null);var state_17859__$1 = (function (){var statearr_17863 = state_17859;(statearr_17863[7] = inst_17838__$1);
return statearr_17863;
})();if(cljs.core.truth_(inst_17839))
{var statearr_17864_17886 = state_17859__$1;(statearr_17864_17886[1] = 5);
} else
{var statearr_17865_17887 = state_17859__$1;(statearr_17865_17887[1] = 6);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_17860 === 13))
{var state_17859__$1 = state_17859;var statearr_17866_17888 = state_17859__$1;(statearr_17866_17888[2] = null);
(statearr_17866_17888[1] = 14);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17860 === 6))
{var inst_17838 = (state_17859[7]);var state_17859__$1 = state_17859;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17859__$1,11,to,inst_17838);
} else
{if((state_val_17860 === 3))
{var inst_17857 = (state_17859[2]);var state_17859__$1 = state_17859;return cljs.core.async.impl.ioc_helpers.return_chan(state_17859__$1,inst_17857);
} else
{if((state_val_17860 === 12))
{var state_17859__$1 = state_17859;var statearr_17867_17889 = state_17859__$1;(statearr_17867_17889[2] = null);
(statearr_17867_17889[1] = 2);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17860 === 2))
{var state_17859__$1 = state_17859;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17859__$1,4,from);
} else
{if((state_val_17860 === 11))
{var inst_17848 = (state_17859[2]);var state_17859__$1 = state_17859;if(cljs.core.truth_(inst_17848))
{var statearr_17868_17890 = state_17859__$1;(statearr_17868_17890[1] = 12);
} else
{var statearr_17869_17891 = state_17859__$1;(statearr_17869_17891[1] = 13);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_17860 === 9))
{var state_17859__$1 = state_17859;var statearr_17870_17892 = state_17859__$1;(statearr_17870_17892[2] = null);
(statearr_17870_17892[1] = 10);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17860 === 5))
{var state_17859__$1 = state_17859;if(cljs.core.truth_(close_QMARK_))
{var statearr_17871_17893 = state_17859__$1;(statearr_17871_17893[1] = 8);
} else
{var statearr_17872_17894 = state_17859__$1;(statearr_17872_17894[1] = 9);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_17860 === 14))
{var inst_17853 = (state_17859[2]);var state_17859__$1 = state_17859;var statearr_17873_17895 = state_17859__$1;(statearr_17873_17895[2] = inst_17853);
(statearr_17873_17895[1] = 7);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17860 === 10))
{var inst_17845 = (state_17859[2]);var state_17859__$1 = state_17859;var statearr_17874_17896 = state_17859__$1;(statearr_17874_17896[2] = inst_17845);
(statearr_17874_17896[1] = 7);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17860 === 8))
{var inst_17842 = cljs.core.async.close_BANG_(to);var state_17859__$1 = state_17859;var statearr_17875_17897 = state_17859__$1;(statearr_17875_17897[2] = inst_17842);
(statearr_17875_17897[1] = 10);
return cljs.core.constant$keyword$71;
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
});})(c__6136__auto___17883))
;return ((function (switch__6072__auto__,c__6136__auto___17883){
return (function() {
var state_machine__6073__auto__ = null;
var state_machine__6073__auto____0 = (function (){var statearr_17879 = [null,null,null,null,null,null,null,null];(statearr_17879[0] = state_machine__6073__auto__);
(statearr_17879[1] = 1);
return statearr_17879;
});
var state_machine__6073__auto____1 = (function (state_17859){while(true){
var ret_value__6074__auto__ = (function (){try{while(true){
var result__6075__auto__ = switch__6072__auto__(state_17859);if(cljs.core.keyword_identical_QMARK_(result__6075__auto__,cljs.core.constant$keyword$71))
{{
continue;
}
} else
{return result__6075__auto__;
}
break;
}
}catch (e17880){if((e17880 instanceof Object))
{var ex__6076__auto__ = e17880;var statearr_17881_17898 = state_17859;(statearr_17881_17898[5] = ex__6076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17859);
return cljs.core.constant$keyword$71;
} else
{if(cljs.core.constant$keyword$60)
{throw e17880;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6074__auto__,cljs.core.constant$keyword$71))
{{
var G__17899 = state_17859;
state_17859 = G__17899;
continue;
}
} else
{return ret_value__6074__auto__;
}
break;
}
});
state_machine__6073__auto__ = function(state_17859){
switch(arguments.length){
case 0:
return state_machine__6073__auto____0.call(this);
case 1:
return state_machine__6073__auto____1.call(this,state_17859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6073__auto____0;
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6073__auto____1;
return state_machine__6073__auto__;
})()
;})(switch__6072__auto__,c__6136__auto___17883))
})();var state__6138__auto__ = (function (){var statearr_17882 = (f__6137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6137__auto__.cljs$core$IFn$_invoke$arity$0() : f__6137__auto__.call(null));(statearr_17882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6136__auto___17883);
return statearr_17882;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6138__auto__);
});})(c__6136__auto___17883))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__6136__auto___18000 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6136__auto___18000,tc,fc){
return (function (){var f__6137__auto__ = (function (){var switch__6072__auto__ = ((function (c__6136__auto___18000,tc,fc){
return (function (state_17975){var state_val_17976 = (state_17975[1]);if((state_val_17976 === 7))
{var inst_17971 = (state_17975[2]);var state_17975__$1 = state_17975;var statearr_17977_18001 = state_17975__$1;(statearr_17977_18001[2] = inst_17971);
(statearr_17977_18001[1] = 3);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17976 === 1))
{var state_17975__$1 = state_17975;var statearr_17978_18002 = state_17975__$1;(statearr_17978_18002[2] = null);
(statearr_17978_18002[1] = 2);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17976 === 4))
{var inst_17952 = (state_17975[7]);var inst_17952__$1 = (state_17975[2]);var inst_17953 = (inst_17952__$1 == null);var state_17975__$1 = (function (){var statearr_17979 = state_17975;(statearr_17979[7] = inst_17952__$1);
return statearr_17979;
})();if(cljs.core.truth_(inst_17953))
{var statearr_17980_18003 = state_17975__$1;(statearr_17980_18003[1] = 5);
} else
{var statearr_17981_18004 = state_17975__$1;(statearr_17981_18004[1] = 6);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_17976 === 13))
{var state_17975__$1 = state_17975;var statearr_17982_18005 = state_17975__$1;(statearr_17982_18005[2] = null);
(statearr_17982_18005[1] = 14);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17976 === 6))
{var inst_17952 = (state_17975[7]);var inst_17958 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17952) : p.call(null,inst_17952));var state_17975__$1 = state_17975;if(cljs.core.truth_(inst_17958))
{var statearr_17983_18006 = state_17975__$1;(statearr_17983_18006[1] = 9);
} else
{var statearr_17984_18007 = state_17975__$1;(statearr_17984_18007[1] = 10);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_17976 === 3))
{var inst_17973 = (state_17975[2]);var state_17975__$1 = state_17975;return cljs.core.async.impl.ioc_helpers.return_chan(state_17975__$1,inst_17973);
} else
{if((state_val_17976 === 12))
{var state_17975__$1 = state_17975;var statearr_17985_18008 = state_17975__$1;(statearr_17985_18008[2] = null);
(statearr_17985_18008[1] = 2);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17976 === 2))
{var state_17975__$1 = state_17975;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17975__$1,4,ch);
} else
{if((state_val_17976 === 11))
{var inst_17952 = (state_17975[7]);var inst_17962 = (state_17975[2]);var state_17975__$1 = state_17975;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17975__$1,8,inst_17962,inst_17952);
} else
{if((state_val_17976 === 9))
{var state_17975__$1 = state_17975;var statearr_17986_18009 = state_17975__$1;(statearr_17986_18009[2] = tc);
(statearr_17986_18009[1] = 11);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17976 === 5))
{var inst_17955 = cljs.core.async.close_BANG_(tc);var inst_17956 = cljs.core.async.close_BANG_(fc);var state_17975__$1 = (function (){var statearr_17987 = state_17975;(statearr_17987[8] = inst_17955);
return statearr_17987;
})();var statearr_17988_18010 = state_17975__$1;(statearr_17988_18010[2] = inst_17956);
(statearr_17988_18010[1] = 7);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17976 === 14))
{var inst_17969 = (state_17975[2]);var state_17975__$1 = state_17975;var statearr_17989_18011 = state_17975__$1;(statearr_17989_18011[2] = inst_17969);
(statearr_17989_18011[1] = 7);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17976 === 10))
{var state_17975__$1 = state_17975;var statearr_17990_18012 = state_17975__$1;(statearr_17990_18012[2] = fc);
(statearr_17990_18012[1] = 11);
return cljs.core.constant$keyword$71;
} else
{if((state_val_17976 === 8))
{var inst_17964 = (state_17975[2]);var state_17975__$1 = state_17975;if(cljs.core.truth_(inst_17964))
{var statearr_17991_18013 = state_17975__$1;(statearr_17991_18013[1] = 12);
} else
{var statearr_17992_18014 = state_17975__$1;(statearr_17992_18014[1] = 13);
}
return cljs.core.constant$keyword$71;
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
});})(c__6136__auto___18000,tc,fc))
;return ((function (switch__6072__auto__,c__6136__auto___18000,tc,fc){
return (function() {
var state_machine__6073__auto__ = null;
var state_machine__6073__auto____0 = (function (){var statearr_17996 = [null,null,null,null,null,null,null,null,null];(statearr_17996[0] = state_machine__6073__auto__);
(statearr_17996[1] = 1);
return statearr_17996;
});
var state_machine__6073__auto____1 = (function (state_17975){while(true){
var ret_value__6074__auto__ = (function (){try{while(true){
var result__6075__auto__ = switch__6072__auto__(state_17975);if(cljs.core.keyword_identical_QMARK_(result__6075__auto__,cljs.core.constant$keyword$71))
{{
continue;
}
} else
{return result__6075__auto__;
}
break;
}
}catch (e17997){if((e17997 instanceof Object))
{var ex__6076__auto__ = e17997;var statearr_17998_18015 = state_17975;(statearr_17998_18015[5] = ex__6076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17975);
return cljs.core.constant$keyword$71;
} else
{if(cljs.core.constant$keyword$60)
{throw e17997;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6074__auto__,cljs.core.constant$keyword$71))
{{
var G__18016 = state_17975;
state_17975 = G__18016;
continue;
}
} else
{return ret_value__6074__auto__;
}
break;
}
});
state_machine__6073__auto__ = function(state_17975){
switch(arguments.length){
case 0:
return state_machine__6073__auto____0.call(this);
case 1:
return state_machine__6073__auto____1.call(this,state_17975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6073__auto____0;
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6073__auto____1;
return state_machine__6073__auto__;
})()
;})(switch__6072__auto__,c__6136__auto___18000,tc,fc))
})();var state__6138__auto__ = (function (){var statearr_17999 = (f__6137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6137__auto__.cljs$core$IFn$_invoke$arity$0() : f__6137__auto__.call(null));(statearr_17999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6136__auto___18000);
return statearr_17999;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6138__auto__);
});})(c__6136__auto___18000,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6136__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6136__auto__){
return (function (){var f__6137__auto__ = (function (){var switch__6072__auto__ = ((function (c__6136__auto__){
return (function (state_18063){var state_val_18064 = (state_18063[1]);if((state_val_18064 === 7))
{var inst_18059 = (state_18063[2]);var state_18063__$1 = state_18063;var statearr_18065_18081 = state_18063__$1;(statearr_18065_18081[2] = inst_18059);
(statearr_18065_18081[1] = 3);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18064 === 6))
{var inst_18052 = (state_18063[7]);var inst_18049 = (state_18063[8]);var inst_18056 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18049,inst_18052) : f.call(null,inst_18049,inst_18052));var inst_18049__$1 = inst_18056;var state_18063__$1 = (function (){var statearr_18066 = state_18063;(statearr_18066[8] = inst_18049__$1);
return statearr_18066;
})();var statearr_18067_18082 = state_18063__$1;(statearr_18067_18082[2] = null);
(statearr_18067_18082[1] = 2);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18064 === 5))
{var inst_18049 = (state_18063[8]);var state_18063__$1 = state_18063;var statearr_18068_18083 = state_18063__$1;(statearr_18068_18083[2] = inst_18049);
(statearr_18068_18083[1] = 7);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18064 === 4))
{var inst_18052 = (state_18063[7]);var inst_18052__$1 = (state_18063[2]);var inst_18053 = (inst_18052__$1 == null);var state_18063__$1 = (function (){var statearr_18069 = state_18063;(statearr_18069[7] = inst_18052__$1);
return statearr_18069;
})();if(cljs.core.truth_(inst_18053))
{var statearr_18070_18084 = state_18063__$1;(statearr_18070_18084[1] = 5);
} else
{var statearr_18071_18085 = state_18063__$1;(statearr_18071_18085[1] = 6);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_18064 === 3))
{var inst_18061 = (state_18063[2]);var state_18063__$1 = state_18063;return cljs.core.async.impl.ioc_helpers.return_chan(state_18063__$1,inst_18061);
} else
{if((state_val_18064 === 2))
{var state_18063__$1 = state_18063;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18063__$1,4,ch);
} else
{if((state_val_18064 === 1))
{var inst_18049 = init;var state_18063__$1 = (function (){var statearr_18072 = state_18063;(statearr_18072[8] = inst_18049);
return statearr_18072;
})();var statearr_18073_18086 = state_18063__$1;(statearr_18073_18086[2] = null);
(statearr_18073_18086[1] = 2);
return cljs.core.constant$keyword$71;
} else
{return null;
}
}
}
}
}
}
}
});})(c__6136__auto__))
;return ((function (switch__6072__auto__,c__6136__auto__){
return (function() {
var state_machine__6073__auto__ = null;
var state_machine__6073__auto____0 = (function (){var statearr_18077 = [null,null,null,null,null,null,null,null,null];(statearr_18077[0] = state_machine__6073__auto__);
(statearr_18077[1] = 1);
return statearr_18077;
});
var state_machine__6073__auto____1 = (function (state_18063){while(true){
var ret_value__6074__auto__ = (function (){try{while(true){
var result__6075__auto__ = switch__6072__auto__(state_18063);if(cljs.core.keyword_identical_QMARK_(result__6075__auto__,cljs.core.constant$keyword$71))
{{
continue;
}
} else
{return result__6075__auto__;
}
break;
}
}catch (e18078){if((e18078 instanceof Object))
{var ex__6076__auto__ = e18078;var statearr_18079_18087 = state_18063;(statearr_18079_18087[5] = ex__6076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18063);
return cljs.core.constant$keyword$71;
} else
{if(cljs.core.constant$keyword$60)
{throw e18078;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6074__auto__,cljs.core.constant$keyword$71))
{{
var G__18088 = state_18063;
state_18063 = G__18088;
continue;
}
} else
{return ret_value__6074__auto__;
}
break;
}
});
state_machine__6073__auto__ = function(state_18063){
switch(arguments.length){
case 0:
return state_machine__6073__auto____0.call(this);
case 1:
return state_machine__6073__auto____1.call(this,state_18063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6073__auto____0;
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6073__auto____1;
return state_machine__6073__auto__;
})()
;})(switch__6072__auto__,c__6136__auto__))
})();var state__6138__auto__ = (function (){var statearr_18080 = (f__6137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6137__auto__.cljs$core$IFn$_invoke$arity$0() : f__6137__auto__.call(null));(statearr_18080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6136__auto__);
return statearr_18080;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6138__auto__);
});})(c__6136__auto__))
);
return c__6136__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6136__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6136__auto__){
return (function (){var f__6137__auto__ = (function (){var switch__6072__auto__ = ((function (c__6136__auto__){
return (function (state_18162){var state_val_18163 = (state_18162[1]);if((state_val_18163 === 7))
{var inst_18144 = (state_18162[2]);var state_18162__$1 = state_18162;var statearr_18164_18187 = state_18162__$1;(statearr_18164_18187[2] = inst_18144);
(statearr_18164_18187[1] = 6);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18163 === 1))
{var inst_18138 = cljs.core.seq(coll);var inst_18139 = inst_18138;var state_18162__$1 = (function (){var statearr_18165 = state_18162;(statearr_18165[7] = inst_18139);
return statearr_18165;
})();var statearr_18166_18188 = state_18162__$1;(statearr_18166_18188[2] = null);
(statearr_18166_18188[1] = 2);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18163 === 4))
{var inst_18139 = (state_18162[7]);var inst_18142 = cljs.core.first(inst_18139);var state_18162__$1 = state_18162;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18162__$1,7,ch,inst_18142);
} else
{if((state_val_18163 === 13))
{var inst_18156 = (state_18162[2]);var state_18162__$1 = state_18162;var statearr_18167_18189 = state_18162__$1;(statearr_18167_18189[2] = inst_18156);
(statearr_18167_18189[1] = 10);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18163 === 6))
{var inst_18147 = (state_18162[2]);var state_18162__$1 = state_18162;if(cljs.core.truth_(inst_18147))
{var statearr_18168_18190 = state_18162__$1;(statearr_18168_18190[1] = 8);
} else
{var statearr_18169_18191 = state_18162__$1;(statearr_18169_18191[1] = 9);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_18163 === 3))
{var inst_18160 = (state_18162[2]);var state_18162__$1 = state_18162;return cljs.core.async.impl.ioc_helpers.return_chan(state_18162__$1,inst_18160);
} else
{if((state_val_18163 === 12))
{var state_18162__$1 = state_18162;var statearr_18170_18192 = state_18162__$1;(statearr_18170_18192[2] = null);
(statearr_18170_18192[1] = 13);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18163 === 2))
{var inst_18139 = (state_18162[7]);var state_18162__$1 = state_18162;if(cljs.core.truth_(inst_18139))
{var statearr_18171_18193 = state_18162__$1;(statearr_18171_18193[1] = 4);
} else
{var statearr_18172_18194 = state_18162__$1;(statearr_18172_18194[1] = 5);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_18163 === 11))
{var inst_18153 = cljs.core.async.close_BANG_(ch);var state_18162__$1 = state_18162;var statearr_18173_18195 = state_18162__$1;(statearr_18173_18195[2] = inst_18153);
(statearr_18173_18195[1] = 13);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18163 === 9))
{var state_18162__$1 = state_18162;if(cljs.core.truth_(close_QMARK_))
{var statearr_18174_18196 = state_18162__$1;(statearr_18174_18196[1] = 11);
} else
{var statearr_18175_18197 = state_18162__$1;(statearr_18175_18197[1] = 12);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_18163 === 5))
{var inst_18139 = (state_18162[7]);var state_18162__$1 = state_18162;var statearr_18176_18198 = state_18162__$1;(statearr_18176_18198[2] = inst_18139);
(statearr_18176_18198[1] = 6);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18163 === 10))
{var inst_18158 = (state_18162[2]);var state_18162__$1 = state_18162;var statearr_18177_18199 = state_18162__$1;(statearr_18177_18199[2] = inst_18158);
(statearr_18177_18199[1] = 3);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18163 === 8))
{var inst_18139 = (state_18162[7]);var inst_18149 = cljs.core.next(inst_18139);var inst_18139__$1 = inst_18149;var state_18162__$1 = (function (){var statearr_18178 = state_18162;(statearr_18178[7] = inst_18139__$1);
return statearr_18178;
})();var statearr_18179_18200 = state_18162__$1;(statearr_18179_18200[2] = null);
(statearr_18179_18200[1] = 2);
return cljs.core.constant$keyword$71;
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
});})(c__6136__auto__))
;return ((function (switch__6072__auto__,c__6136__auto__){
return (function() {
var state_machine__6073__auto__ = null;
var state_machine__6073__auto____0 = (function (){var statearr_18183 = [null,null,null,null,null,null,null,null];(statearr_18183[0] = state_machine__6073__auto__);
(statearr_18183[1] = 1);
return statearr_18183;
});
var state_machine__6073__auto____1 = (function (state_18162){while(true){
var ret_value__6074__auto__ = (function (){try{while(true){
var result__6075__auto__ = switch__6072__auto__(state_18162);if(cljs.core.keyword_identical_QMARK_(result__6075__auto__,cljs.core.constant$keyword$71))
{{
continue;
}
} else
{return result__6075__auto__;
}
break;
}
}catch (e18184){if((e18184 instanceof Object))
{var ex__6076__auto__ = e18184;var statearr_18185_18201 = state_18162;(statearr_18185_18201[5] = ex__6076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18162);
return cljs.core.constant$keyword$71;
} else
{if(cljs.core.constant$keyword$60)
{throw e18184;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6074__auto__,cljs.core.constant$keyword$71))
{{
var G__18202 = state_18162;
state_18162 = G__18202;
continue;
}
} else
{return ret_value__6074__auto__;
}
break;
}
});
state_machine__6073__auto__ = function(state_18162){
switch(arguments.length){
case 0:
return state_machine__6073__auto____0.call(this);
case 1:
return state_machine__6073__auto____1.call(this,state_18162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6073__auto____0;
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6073__auto____1;
return state_machine__6073__auto__;
})()
;})(switch__6072__auto__,c__6136__auto__))
})();var state__6138__auto__ = (function (){var statearr_18186 = (f__6137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6137__auto__.cljs$core$IFn$_invoke$arity$0() : f__6137__auto__.call(null));(statearr_18186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6136__auto__);
return statearr_18186;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6138__auto__);
});})(c__6136__auto__))
);
return c__6136__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count(100,coll));cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj18204 = {};return obj18204;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3469__auto__ = _;if(and__3469__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3469__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4108__auto__ = (((_ == null))?null:_);return (function (){var or__3481__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj18206 = {};return obj18206;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t18428 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18428 = (function (cs,ch,mult,meta18429){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta18429 = meta18429;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18428.cljs$lang$type = true;
cljs.core.async.t18428.cljs$lang$ctorStr = "cljs.core.async/t18428";
cljs.core.async.t18428.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"cljs.core.async/t18428");
});})(cs))
;
cljs.core.async.t18428.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t18428.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t18428.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t18428.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t18428.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18428.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t18428.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18430){var self__ = this;
var _18430__$1 = this;return self__.meta18429;
});})(cs))
;
cljs.core.async.t18428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18430,meta18429__$1){var self__ = this;
var _18430__$1 = this;return (new cljs.core.async.t18428(self__.cs,self__.ch,self__.mult,meta18429__$1));
});})(cs))
;
cljs.core.async.__GT_t18428 = ((function (cs){
return (function __GT_t18428(cs__$1,ch__$1,mult__$1,meta18429){return (new cljs.core.async.t18428(cs__$1,ch__$1,mult__$1,meta18429));
});})(cs))
;
}
return (new cljs.core.async.t18428(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6136__auto___18649 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6136__auto___18649,cs,m,dchan,dctr,done){
return (function (){var f__6137__auto__ = (function (){var switch__6072__auto__ = ((function (c__6136__auto___18649,cs,m,dchan,dctr,done){
return (function (state_18561){var state_val_18562 = (state_18561[1]);if((state_val_18562 === 7))
{var inst_18557 = (state_18561[2]);var state_18561__$1 = state_18561;var statearr_18563_18650 = state_18561__$1;(statearr_18563_18650[2] = inst_18557);
(statearr_18563_18650[1] = 3);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 20))
{var inst_18462 = (state_18561[7]);var inst_18472 = cljs.core.first(inst_18462);var inst_18473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18472,0,null);var inst_18474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18472,1,null);var state_18561__$1 = (function (){var statearr_18564 = state_18561;(statearr_18564[8] = inst_18473);
return statearr_18564;
})();if(cljs.core.truth_(inst_18474))
{var statearr_18565_18651 = state_18561__$1;(statearr_18565_18651[1] = 22);
} else
{var statearr_18566_18652 = state_18561__$1;(statearr_18566_18652[1] = 23);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 27))
{var inst_18502 = (state_18561[9]);var inst_18509 = (state_18561[10]);var inst_18433 = (state_18561[11]);var inst_18504 = (state_18561[12]);var inst_18509__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18502,inst_18504);var inst_18510 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18509__$1,inst_18433,done);var state_18561__$1 = (function (){var statearr_18567 = state_18561;(statearr_18567[10] = inst_18509__$1);
return statearr_18567;
})();if(cljs.core.truth_(inst_18510))
{var statearr_18568_18653 = state_18561__$1;(statearr_18568_18653[1] = 30);
} else
{var statearr_18569_18654 = state_18561__$1;(statearr_18569_18654[1] = 31);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 1))
{var state_18561__$1 = state_18561;var statearr_18570_18655 = state_18561__$1;(statearr_18570_18655[2] = null);
(statearr_18570_18655[1] = 2);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 24))
{var inst_18462 = (state_18561[7]);var inst_18479 = (state_18561[2]);var inst_18480 = cljs.core.next(inst_18462);var inst_18442 = inst_18480;var inst_18443 = null;var inst_18444 = 0;var inst_18445 = 0;var state_18561__$1 = (function (){var statearr_18571 = state_18561;(statearr_18571[13] = inst_18445);
(statearr_18571[14] = inst_18443);
(statearr_18571[15] = inst_18444);
(statearr_18571[16] = inst_18442);
(statearr_18571[17] = inst_18479);
return statearr_18571;
})();var statearr_18572_18656 = state_18561__$1;(statearr_18572_18656[2] = null);
(statearr_18572_18656[1] = 8);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 39))
{var state_18561__$1 = state_18561;var statearr_18576_18657 = state_18561__$1;(statearr_18576_18657[2] = null);
(statearr_18576_18657[1] = 41);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 4))
{var inst_18433 = (state_18561[11]);var inst_18433__$1 = (state_18561[2]);var inst_18434 = (inst_18433__$1 == null);var state_18561__$1 = (function (){var statearr_18577 = state_18561;(statearr_18577[11] = inst_18433__$1);
return statearr_18577;
})();if(cljs.core.truth_(inst_18434))
{var statearr_18578_18658 = state_18561__$1;(statearr_18578_18658[1] = 5);
} else
{var statearr_18579_18659 = state_18561__$1;(statearr_18579_18659[1] = 6);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 15))
{var inst_18445 = (state_18561[13]);var inst_18443 = (state_18561[14]);var inst_18444 = (state_18561[15]);var inst_18442 = (state_18561[16]);var inst_18458 = (state_18561[2]);var inst_18459 = (inst_18445 + 1);var tmp18573 = inst_18443;var tmp18574 = inst_18444;var tmp18575 = inst_18442;var inst_18442__$1 = tmp18575;var inst_18443__$1 = tmp18573;var inst_18444__$1 = tmp18574;var inst_18445__$1 = inst_18459;var state_18561__$1 = (function (){var statearr_18580 = state_18561;(statearr_18580[13] = inst_18445__$1);
(statearr_18580[14] = inst_18443__$1);
(statearr_18580[15] = inst_18444__$1);
(statearr_18580[18] = inst_18458);
(statearr_18580[16] = inst_18442__$1);
return statearr_18580;
})();var statearr_18581_18660 = state_18561__$1;(statearr_18581_18660[2] = null);
(statearr_18581_18660[1] = 8);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 21))
{var inst_18483 = (state_18561[2]);var state_18561__$1 = state_18561;var statearr_18585_18661 = state_18561__$1;(statearr_18585_18661[2] = inst_18483);
(statearr_18585_18661[1] = 18);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 31))
{var inst_18509 = (state_18561[10]);var inst_18513 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_18514 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18509);var state_18561__$1 = (function (){var statearr_18586 = state_18561;(statearr_18586[19] = inst_18513);
return statearr_18586;
})();var statearr_18587_18662 = state_18561__$1;(statearr_18587_18662[2] = inst_18514);
(statearr_18587_18662[1] = 32);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 32))
{var inst_18502 = (state_18561[9]);var inst_18501 = (state_18561[20]);var inst_18503 = (state_18561[21]);var inst_18504 = (state_18561[12]);var inst_18516 = (state_18561[2]);var inst_18517 = (inst_18504 + 1);var tmp18582 = inst_18502;var tmp18583 = inst_18501;var tmp18584 = inst_18503;var inst_18501__$1 = tmp18583;var inst_18502__$1 = tmp18582;var inst_18503__$1 = tmp18584;var inst_18504__$1 = inst_18517;var state_18561__$1 = (function (){var statearr_18588 = state_18561;(statearr_18588[9] = inst_18502__$1);
(statearr_18588[20] = inst_18501__$1);
(statearr_18588[22] = inst_18516);
(statearr_18588[21] = inst_18503__$1);
(statearr_18588[12] = inst_18504__$1);
return statearr_18588;
})();var statearr_18589_18663 = state_18561__$1;(statearr_18589_18663[2] = null);
(statearr_18589_18663[1] = 25);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 40))
{var inst_18529 = (state_18561[23]);var inst_18533 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_18534 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18529);var state_18561__$1 = (function (){var statearr_18590 = state_18561;(statearr_18590[24] = inst_18533);
return statearr_18590;
})();var statearr_18591_18664 = state_18561__$1;(statearr_18591_18664[2] = inst_18534);
(statearr_18591_18664[1] = 41);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 33))
{var inst_18520 = (state_18561[25]);var inst_18522 = cljs.core.chunked_seq_QMARK_(inst_18520);var state_18561__$1 = state_18561;if(inst_18522)
{var statearr_18592_18665 = state_18561__$1;(statearr_18592_18665[1] = 36);
} else
{var statearr_18593_18666 = state_18561__$1;(statearr_18593_18666[1] = 37);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 13))
{var inst_18452 = (state_18561[26]);var inst_18455 = cljs.core.async.close_BANG_(inst_18452);var state_18561__$1 = state_18561;var statearr_18594_18667 = state_18561__$1;(statearr_18594_18667[2] = inst_18455);
(statearr_18594_18667[1] = 15);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 22))
{var inst_18473 = (state_18561[8]);var inst_18476 = cljs.core.async.close_BANG_(inst_18473);var state_18561__$1 = state_18561;var statearr_18595_18668 = state_18561__$1;(statearr_18595_18668[2] = inst_18476);
(statearr_18595_18668[1] = 24);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 36))
{var inst_18520 = (state_18561[25]);var inst_18524 = cljs.core.chunk_first(inst_18520);var inst_18525 = cljs.core.chunk_rest(inst_18520);var inst_18526 = cljs.core.count(inst_18524);var inst_18501 = inst_18525;var inst_18502 = inst_18524;var inst_18503 = inst_18526;var inst_18504 = 0;var state_18561__$1 = (function (){var statearr_18596 = state_18561;(statearr_18596[9] = inst_18502);
(statearr_18596[20] = inst_18501);
(statearr_18596[21] = inst_18503);
(statearr_18596[12] = inst_18504);
return statearr_18596;
})();var statearr_18597_18669 = state_18561__$1;(statearr_18597_18669[2] = null);
(statearr_18597_18669[1] = 25);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 41))
{var inst_18520 = (state_18561[25]);var inst_18536 = (state_18561[2]);var inst_18537 = cljs.core.next(inst_18520);var inst_18501 = inst_18537;var inst_18502 = null;var inst_18503 = 0;var inst_18504 = 0;var state_18561__$1 = (function (){var statearr_18598 = state_18561;(statearr_18598[9] = inst_18502);
(statearr_18598[20] = inst_18501);
(statearr_18598[27] = inst_18536);
(statearr_18598[21] = inst_18503);
(statearr_18598[12] = inst_18504);
return statearr_18598;
})();var statearr_18599_18670 = state_18561__$1;(statearr_18599_18670[2] = null);
(statearr_18599_18670[1] = 25);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 43))
{var state_18561__$1 = state_18561;var statearr_18600_18671 = state_18561__$1;(statearr_18600_18671[2] = null);
(statearr_18600_18671[1] = 44);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 29))
{var inst_18545 = (state_18561[2]);var state_18561__$1 = state_18561;var statearr_18601_18672 = state_18561__$1;(statearr_18601_18672[2] = inst_18545);
(statearr_18601_18672[1] = 26);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 44))
{var inst_18554 = (state_18561[2]);var state_18561__$1 = (function (){var statearr_18602 = state_18561;(statearr_18602[28] = inst_18554);
return statearr_18602;
})();var statearr_18603_18673 = state_18561__$1;(statearr_18603_18673[2] = null);
(statearr_18603_18673[1] = 2);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 6))
{var inst_18493 = (state_18561[29]);var inst_18492 = cljs.core.deref(cs);var inst_18493__$1 = cljs.core.keys(inst_18492);var inst_18494 = cljs.core.count(inst_18493__$1);var inst_18495 = cljs.core.reset_BANG_(dctr,inst_18494);var inst_18500 = cljs.core.seq(inst_18493__$1);var inst_18501 = inst_18500;var inst_18502 = null;var inst_18503 = 0;var inst_18504 = 0;var state_18561__$1 = (function (){var statearr_18604 = state_18561;(statearr_18604[9] = inst_18502);
(statearr_18604[29] = inst_18493__$1);
(statearr_18604[20] = inst_18501);
(statearr_18604[30] = inst_18495);
(statearr_18604[21] = inst_18503);
(statearr_18604[12] = inst_18504);
return statearr_18604;
})();var statearr_18605_18674 = state_18561__$1;(statearr_18605_18674[2] = null);
(statearr_18605_18674[1] = 25);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 28))
{var inst_18501 = (state_18561[20]);var inst_18520 = (state_18561[25]);var inst_18520__$1 = cljs.core.seq(inst_18501);var state_18561__$1 = (function (){var statearr_18606 = state_18561;(statearr_18606[25] = inst_18520__$1);
return statearr_18606;
})();if(inst_18520__$1)
{var statearr_18607_18675 = state_18561__$1;(statearr_18607_18675[1] = 33);
} else
{var statearr_18608_18676 = state_18561__$1;(statearr_18608_18676[1] = 34);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 25))
{var inst_18503 = (state_18561[21]);var inst_18504 = (state_18561[12]);var inst_18506 = (inst_18504 < inst_18503);var inst_18507 = inst_18506;var state_18561__$1 = state_18561;if(cljs.core.truth_(inst_18507))
{var statearr_18609_18677 = state_18561__$1;(statearr_18609_18677[1] = 27);
} else
{var statearr_18610_18678 = state_18561__$1;(statearr_18610_18678[1] = 28);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 34))
{var state_18561__$1 = state_18561;var statearr_18611_18679 = state_18561__$1;(statearr_18611_18679[2] = null);
(statearr_18611_18679[1] = 35);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 17))
{var state_18561__$1 = state_18561;var statearr_18612_18680 = state_18561__$1;(statearr_18612_18680[2] = null);
(statearr_18612_18680[1] = 18);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 3))
{var inst_18559 = (state_18561[2]);var state_18561__$1 = state_18561;return cljs.core.async.impl.ioc_helpers.return_chan(state_18561__$1,inst_18559);
} else
{if((state_val_18562 === 12))
{var inst_18488 = (state_18561[2]);var state_18561__$1 = state_18561;var statearr_18613_18681 = state_18561__$1;(statearr_18613_18681[2] = inst_18488);
(statearr_18613_18681[1] = 9);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 2))
{var state_18561__$1 = state_18561;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18561__$1,4,ch);
} else
{if((state_val_18562 === 23))
{var state_18561__$1 = state_18561;var statearr_18614_18682 = state_18561__$1;(statearr_18614_18682[2] = null);
(statearr_18614_18682[1] = 24);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 35))
{var inst_18543 = (state_18561[2]);var state_18561__$1 = state_18561;var statearr_18615_18683 = state_18561__$1;(statearr_18615_18683[2] = inst_18543);
(statearr_18615_18683[1] = 29);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 19))
{var inst_18462 = (state_18561[7]);var inst_18466 = cljs.core.chunk_first(inst_18462);var inst_18467 = cljs.core.chunk_rest(inst_18462);var inst_18468 = cljs.core.count(inst_18466);var inst_18442 = inst_18467;var inst_18443 = inst_18466;var inst_18444 = inst_18468;var inst_18445 = 0;var state_18561__$1 = (function (){var statearr_18616 = state_18561;(statearr_18616[13] = inst_18445);
(statearr_18616[14] = inst_18443);
(statearr_18616[15] = inst_18444);
(statearr_18616[16] = inst_18442);
return statearr_18616;
})();var statearr_18617_18684 = state_18561__$1;(statearr_18617_18684[2] = null);
(statearr_18617_18684[1] = 8);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 11))
{var inst_18462 = (state_18561[7]);var inst_18442 = (state_18561[16]);var inst_18462__$1 = cljs.core.seq(inst_18442);var state_18561__$1 = (function (){var statearr_18618 = state_18561;(statearr_18618[7] = inst_18462__$1);
return statearr_18618;
})();if(inst_18462__$1)
{var statearr_18619_18685 = state_18561__$1;(statearr_18619_18685[1] = 16);
} else
{var statearr_18620_18686 = state_18561__$1;(statearr_18620_18686[1] = 17);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 9))
{var inst_18490 = (state_18561[2]);var state_18561__$1 = state_18561;var statearr_18621_18687 = state_18561__$1;(statearr_18621_18687[2] = inst_18490);
(statearr_18621_18687[1] = 7);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 5))
{var inst_18440 = cljs.core.deref(cs);var inst_18441 = cljs.core.seq(inst_18440);var inst_18442 = inst_18441;var inst_18443 = null;var inst_18444 = 0;var inst_18445 = 0;var state_18561__$1 = (function (){var statearr_18622 = state_18561;(statearr_18622[13] = inst_18445);
(statearr_18622[14] = inst_18443);
(statearr_18622[15] = inst_18444);
(statearr_18622[16] = inst_18442);
return statearr_18622;
})();var statearr_18623_18688 = state_18561__$1;(statearr_18623_18688[2] = null);
(statearr_18623_18688[1] = 8);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 14))
{var state_18561__$1 = state_18561;var statearr_18624_18689 = state_18561__$1;(statearr_18624_18689[2] = null);
(statearr_18624_18689[1] = 15);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 45))
{var inst_18551 = (state_18561[2]);var state_18561__$1 = state_18561;var statearr_18625_18690 = state_18561__$1;(statearr_18625_18690[2] = inst_18551);
(statearr_18625_18690[1] = 44);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 26))
{var inst_18493 = (state_18561[29]);var inst_18547 = (state_18561[2]);var inst_18548 = cljs.core.seq(inst_18493);var state_18561__$1 = (function (){var statearr_18626 = state_18561;(statearr_18626[31] = inst_18547);
return statearr_18626;
})();if(inst_18548)
{var statearr_18627_18691 = state_18561__$1;(statearr_18627_18691[1] = 42);
} else
{var statearr_18628_18692 = state_18561__$1;(statearr_18628_18692[1] = 43);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 16))
{var inst_18462 = (state_18561[7]);var inst_18464 = cljs.core.chunked_seq_QMARK_(inst_18462);var state_18561__$1 = state_18561;if(inst_18464)
{var statearr_18629_18693 = state_18561__$1;(statearr_18629_18693[1] = 19);
} else
{var statearr_18630_18694 = state_18561__$1;(statearr_18630_18694[1] = 20);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 38))
{var inst_18540 = (state_18561[2]);var state_18561__$1 = state_18561;var statearr_18631_18695 = state_18561__$1;(statearr_18631_18695[2] = inst_18540);
(statearr_18631_18695[1] = 35);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 30))
{var state_18561__$1 = state_18561;var statearr_18632_18696 = state_18561__$1;(statearr_18632_18696[2] = null);
(statearr_18632_18696[1] = 32);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 10))
{var inst_18445 = (state_18561[13]);var inst_18443 = (state_18561[14]);var inst_18451 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18443,inst_18445);var inst_18452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18451,0,null);var inst_18453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18451,1,null);var state_18561__$1 = (function (){var statearr_18633 = state_18561;(statearr_18633[26] = inst_18452);
return statearr_18633;
})();if(cljs.core.truth_(inst_18453))
{var statearr_18634_18697 = state_18561__$1;(statearr_18634_18697[1] = 13);
} else
{var statearr_18635_18698 = state_18561__$1;(statearr_18635_18698[1] = 14);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 18))
{var inst_18486 = (state_18561[2]);var state_18561__$1 = state_18561;var statearr_18636_18699 = state_18561__$1;(statearr_18636_18699[2] = inst_18486);
(statearr_18636_18699[1] = 12);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 42))
{var state_18561__$1 = state_18561;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18561__$1,45,dchan);
} else
{if((state_val_18562 === 37))
{var inst_18520 = (state_18561[25]);var inst_18433 = (state_18561[11]);var inst_18529 = (state_18561[23]);var inst_18529__$1 = cljs.core.first(inst_18520);var inst_18530 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18529__$1,inst_18433,done);var state_18561__$1 = (function (){var statearr_18637 = state_18561;(statearr_18637[23] = inst_18529__$1);
return statearr_18637;
})();if(cljs.core.truth_(inst_18530))
{var statearr_18638_18700 = state_18561__$1;(statearr_18638_18700[1] = 39);
} else
{var statearr_18639_18701 = state_18561__$1;(statearr_18639_18701[1] = 40);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_18562 === 8))
{var inst_18445 = (state_18561[13]);var inst_18444 = (state_18561[15]);var inst_18447 = (inst_18445 < inst_18444);var inst_18448 = inst_18447;var state_18561__$1 = state_18561;if(cljs.core.truth_(inst_18448))
{var statearr_18640_18702 = state_18561__$1;(statearr_18640_18702[1] = 10);
} else
{var statearr_18641_18703 = state_18561__$1;(statearr_18641_18703[1] = 11);
}
return cljs.core.constant$keyword$71;
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
}
}
}
});})(c__6136__auto___18649,cs,m,dchan,dctr,done))
;return ((function (switch__6072__auto__,c__6136__auto___18649,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6073__auto__ = null;
var state_machine__6073__auto____0 = (function (){var statearr_18645 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18645[0] = state_machine__6073__auto__);
(statearr_18645[1] = 1);
return statearr_18645;
});
var state_machine__6073__auto____1 = (function (state_18561){while(true){
var ret_value__6074__auto__ = (function (){try{while(true){
var result__6075__auto__ = switch__6072__auto__(state_18561);if(cljs.core.keyword_identical_QMARK_(result__6075__auto__,cljs.core.constant$keyword$71))
{{
continue;
}
} else
{return result__6075__auto__;
}
break;
}
}catch (e18646){if((e18646 instanceof Object))
{var ex__6076__auto__ = e18646;var statearr_18647_18704 = state_18561;(statearr_18647_18704[5] = ex__6076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18561);
return cljs.core.constant$keyword$71;
} else
{if(cljs.core.constant$keyword$60)
{throw e18646;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6074__auto__,cljs.core.constant$keyword$71))
{{
var G__18705 = state_18561;
state_18561 = G__18705;
continue;
}
} else
{return ret_value__6074__auto__;
}
break;
}
});
state_machine__6073__auto__ = function(state_18561){
switch(arguments.length){
case 0:
return state_machine__6073__auto____0.call(this);
case 1:
return state_machine__6073__auto____1.call(this,state_18561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6073__auto____0;
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6073__auto____1;
return state_machine__6073__auto__;
})()
;})(switch__6072__auto__,c__6136__auto___18649,cs,m,dchan,dctr,done))
})();var state__6138__auto__ = (function (){var statearr_18648 = (f__6137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6137__auto__.cljs$core$IFn$_invoke$arity$0() : f__6137__auto__.call(null));(statearr_18648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6136__auto___18649);
return statearr_18648;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6138__auto__);
});})(c__6136__auto___18649,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_(mult);
});
cljs.core.async.Mix = (function (){var obj18707 = {};return obj18707;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$78,null,cljs.core.constant$keyword$79,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$80);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$79);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v))))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$80,chs);var pauses = pick(cljs.core.constant$keyword$78,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$81,solos,cljs.core.constant$keyword$82,pick(cljs.core.constant$keyword$79,chs),cljs.core.constant$keyword$83,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$78)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t18827 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18827 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18828){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18828 = meta18828;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18827.cljs$lang$type = true;
cljs.core.async.t18827.cljs$lang$ctorStr = "cljs.core.async/t18827";
cljs.core.async.t18827.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"cljs.core.async/t18827");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18827.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t18827.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18827.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18827.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18827.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18827.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18827.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18827.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18827.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18829){var self__ = this;
var _18829__$1 = this;return self__.meta18828;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18829,meta18828__$1){var self__ = this;
var _18829__$1 = this;return (new cljs.core.async.t18827(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18828__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t18827 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t18827(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18828){return (new cljs.core.async.t18827(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18828));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t18827(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6136__auto___18946 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6136__auto___18946,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6137__auto__ = (function (){var switch__6072__auto__ = ((function (c__6136__auto___18946,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18899){var state_val_18900 = (state_18899[1]);if((state_val_18900 === 7))
{var inst_18843 = (state_18899[7]);var inst_18848 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18843);var state_18899__$1 = state_18899;var statearr_18901_18947 = state_18899__$1;(statearr_18901_18947[2] = inst_18848);
(statearr_18901_18947[1] = 9);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18900 === 20))
{var inst_18858 = (state_18899[8]);var state_18899__$1 = state_18899;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18899__$1,23,out,inst_18858);
} else
{if((state_val_18900 === 1))
{var inst_18833 = (state_18899[9]);var inst_18833__$1 = calc_state();var inst_18834 = cljs.core.seq_QMARK_(inst_18833__$1);var state_18899__$1 = (function (){var statearr_18902 = state_18899;(statearr_18902[9] = inst_18833__$1);
return statearr_18902;
})();if(inst_18834)
{var statearr_18903_18948 = state_18899__$1;(statearr_18903_18948[1] = 2);
} else
{var statearr_18904_18949 = state_18899__$1;(statearr_18904_18949[1] = 3);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_18900 === 24))
{var inst_18851 = (state_18899[10]);var inst_18843 = inst_18851;var state_18899__$1 = (function (){var statearr_18905 = state_18899;(statearr_18905[7] = inst_18843);
return statearr_18905;
})();var statearr_18906_18950 = state_18899__$1;(statearr_18906_18950[2] = null);
(statearr_18906_18950[1] = 5);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18900 === 4))
{var inst_18833 = (state_18899[9]);var inst_18839 = (state_18899[2]);var inst_18840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18839,cljs.core.constant$keyword$83);var inst_18841 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18839,cljs.core.constant$keyword$82);var inst_18842 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18839,cljs.core.constant$keyword$81);var inst_18843 = inst_18833;var state_18899__$1 = (function (){var statearr_18907 = state_18899;(statearr_18907[11] = inst_18842);
(statearr_18907[12] = inst_18840);
(statearr_18907[13] = inst_18841);
(statearr_18907[7] = inst_18843);
return statearr_18907;
})();var statearr_18908_18951 = state_18899__$1;(statearr_18908_18951[2] = null);
(statearr_18908_18951[1] = 5);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18900 === 15))
{var state_18899__$1 = state_18899;var statearr_18909_18952 = state_18899__$1;(statearr_18909_18952[2] = null);
(statearr_18909_18952[1] = 16);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18900 === 21))
{var inst_18851 = (state_18899[10]);var inst_18843 = inst_18851;var state_18899__$1 = (function (){var statearr_18910 = state_18899;(statearr_18910[7] = inst_18843);
return statearr_18910;
})();var statearr_18911_18953 = state_18899__$1;(statearr_18911_18953[2] = null);
(statearr_18911_18953[1] = 5);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18900 === 13))
{var inst_18895 = (state_18899[2]);var state_18899__$1 = state_18899;var statearr_18912_18954 = state_18899__$1;(statearr_18912_18954[2] = inst_18895);
(statearr_18912_18954[1] = 6);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18900 === 22))
{var inst_18893 = (state_18899[2]);var state_18899__$1 = state_18899;var statearr_18913_18955 = state_18899__$1;(statearr_18913_18955[2] = inst_18893);
(statearr_18913_18955[1] = 13);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18900 === 6))
{var inst_18897 = (state_18899[2]);var state_18899__$1 = state_18899;return cljs.core.async.impl.ioc_helpers.return_chan(state_18899__$1,inst_18897);
} else
{if((state_val_18900 === 25))
{var state_18899__$1 = state_18899;var statearr_18914_18956 = state_18899__$1;(statearr_18914_18956[2] = null);
(statearr_18914_18956[1] = 26);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18900 === 17))
{var inst_18873 = (state_18899[14]);var state_18899__$1 = state_18899;var statearr_18915_18957 = state_18899__$1;(statearr_18915_18957[2] = inst_18873);
(statearr_18915_18957[1] = 19);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18900 === 3))
{var inst_18833 = (state_18899[9]);var state_18899__$1 = state_18899;var statearr_18916_18958 = state_18899__$1;(statearr_18916_18958[2] = inst_18833);
(statearr_18916_18958[1] = 4);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18900 === 12))
{var inst_18859 = (state_18899[15]);var inst_18854 = (state_18899[16]);var inst_18873 = (state_18899[14]);var inst_18873__$1 = (inst_18854.cljs$core$IFn$_invoke$arity$1 ? inst_18854.cljs$core$IFn$_invoke$arity$1(inst_18859) : inst_18854.call(null,inst_18859));var state_18899__$1 = (function (){var statearr_18917 = state_18899;(statearr_18917[14] = inst_18873__$1);
return statearr_18917;
})();if(cljs.core.truth_(inst_18873__$1))
{var statearr_18918_18959 = state_18899__$1;(statearr_18918_18959[1] = 17);
} else
{var statearr_18919_18960 = state_18899__$1;(statearr_18919_18960[1] = 18);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_18900 === 2))
{var inst_18833 = (state_18899[9]);var inst_18836 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18833);var state_18899__$1 = state_18899;var statearr_18920_18961 = state_18899__$1;(statearr_18920_18961[2] = inst_18836);
(statearr_18920_18961[1] = 4);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18900 === 23))
{var inst_18884 = (state_18899[2]);var state_18899__$1 = state_18899;if(cljs.core.truth_(inst_18884))
{var statearr_18921_18962 = state_18899__$1;(statearr_18921_18962[1] = 24);
} else
{var statearr_18922_18963 = state_18899__$1;(statearr_18922_18963[1] = 25);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_18900 === 19))
{var inst_18881 = (state_18899[2]);var state_18899__$1 = state_18899;if(cljs.core.truth_(inst_18881))
{var statearr_18923_18964 = state_18899__$1;(statearr_18923_18964[1] = 20);
} else
{var statearr_18924_18965 = state_18899__$1;(statearr_18924_18965[1] = 21);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_18900 === 11))
{var inst_18858 = (state_18899[8]);var inst_18864 = (inst_18858 == null);var state_18899__$1 = state_18899;if(cljs.core.truth_(inst_18864))
{var statearr_18925_18966 = state_18899__$1;(statearr_18925_18966[1] = 14);
} else
{var statearr_18926_18967 = state_18899__$1;(statearr_18926_18967[1] = 15);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_18900 === 9))
{var inst_18851 = (state_18899[10]);var inst_18851__$1 = (state_18899[2]);var inst_18852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18851__$1,cljs.core.constant$keyword$83);var inst_18853 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18851__$1,cljs.core.constant$keyword$82);var inst_18854 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18851__$1,cljs.core.constant$keyword$81);var state_18899__$1 = (function (){var statearr_18927 = state_18899;(statearr_18927[17] = inst_18853);
(statearr_18927[10] = inst_18851__$1);
(statearr_18927[16] = inst_18854);
return statearr_18927;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_18899__$1,10,inst_18852);
} else
{if((state_val_18900 === 5))
{var inst_18843 = (state_18899[7]);var inst_18846 = cljs.core.seq_QMARK_(inst_18843);var state_18899__$1 = state_18899;if(inst_18846)
{var statearr_18928_18968 = state_18899__$1;(statearr_18928_18968[1] = 7);
} else
{var statearr_18929_18969 = state_18899__$1;(statearr_18929_18969[1] = 8);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_18900 === 14))
{var inst_18859 = (state_18899[15]);var inst_18866 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18859);var state_18899__$1 = state_18899;var statearr_18930_18970 = state_18899__$1;(statearr_18930_18970[2] = inst_18866);
(statearr_18930_18970[1] = 16);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18900 === 26))
{var inst_18889 = (state_18899[2]);var state_18899__$1 = state_18899;var statearr_18931_18971 = state_18899__$1;(statearr_18931_18971[2] = inst_18889);
(statearr_18931_18971[1] = 22);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18900 === 16))
{var inst_18869 = (state_18899[2]);var inst_18870 = calc_state();var inst_18843 = inst_18870;var state_18899__$1 = (function (){var statearr_18932 = state_18899;(statearr_18932[18] = inst_18869);
(statearr_18932[7] = inst_18843);
return statearr_18932;
})();var statearr_18933_18972 = state_18899__$1;(statearr_18933_18972[2] = null);
(statearr_18933_18972[1] = 5);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18900 === 10))
{var inst_18858 = (state_18899[8]);var inst_18859 = (state_18899[15]);var inst_18857 = (state_18899[2]);var inst_18858__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18857,0,null);var inst_18859__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18857,1,null);var inst_18860 = (inst_18858__$1 == null);var inst_18861 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18859__$1,change);var inst_18862 = (inst_18860) || (inst_18861);var state_18899__$1 = (function (){var statearr_18934 = state_18899;(statearr_18934[8] = inst_18858__$1);
(statearr_18934[15] = inst_18859__$1);
return statearr_18934;
})();if(cljs.core.truth_(inst_18862))
{var statearr_18935_18973 = state_18899__$1;(statearr_18935_18973[1] = 11);
} else
{var statearr_18936_18974 = state_18899__$1;(statearr_18936_18974[1] = 12);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_18900 === 18))
{var inst_18853 = (state_18899[17]);var inst_18859 = (state_18899[15]);var inst_18854 = (state_18899[16]);var inst_18876 = cljs.core.empty_QMARK_(inst_18854);var inst_18877 = (inst_18853.cljs$core$IFn$_invoke$arity$1 ? inst_18853.cljs$core$IFn$_invoke$arity$1(inst_18859) : inst_18853.call(null,inst_18859));var inst_18878 = cljs.core.not(inst_18877);var inst_18879 = (inst_18876) && (inst_18878);var state_18899__$1 = state_18899;var statearr_18937_18975 = state_18899__$1;(statearr_18937_18975[2] = inst_18879);
(statearr_18937_18975[1] = 19);
return cljs.core.constant$keyword$71;
} else
{if((state_val_18900 === 8))
{var inst_18843 = (state_18899[7]);var state_18899__$1 = state_18899;var statearr_18938_18976 = state_18899__$1;(statearr_18938_18976[2] = inst_18843);
(statearr_18938_18976[1] = 9);
return cljs.core.constant$keyword$71;
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
});})(c__6136__auto___18946,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6072__auto__,c__6136__auto___18946,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6073__auto__ = null;
var state_machine__6073__auto____0 = (function (){var statearr_18942 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18942[0] = state_machine__6073__auto__);
(statearr_18942[1] = 1);
return statearr_18942;
});
var state_machine__6073__auto____1 = (function (state_18899){while(true){
var ret_value__6074__auto__ = (function (){try{while(true){
var result__6075__auto__ = switch__6072__auto__(state_18899);if(cljs.core.keyword_identical_QMARK_(result__6075__auto__,cljs.core.constant$keyword$71))
{{
continue;
}
} else
{return result__6075__auto__;
}
break;
}
}catch (e18943){if((e18943 instanceof Object))
{var ex__6076__auto__ = e18943;var statearr_18944_18977 = state_18899;(statearr_18944_18977[5] = ex__6076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18899);
return cljs.core.constant$keyword$71;
} else
{if(cljs.core.constant$keyword$60)
{throw e18943;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6074__auto__,cljs.core.constant$keyword$71))
{{
var G__18978 = state_18899;
state_18899 = G__18978;
continue;
}
} else
{return ret_value__6074__auto__;
}
break;
}
});
state_machine__6073__auto__ = function(state_18899){
switch(arguments.length){
case 0:
return state_machine__6073__auto____0.call(this);
case 1:
return state_machine__6073__auto____1.call(this,state_18899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6073__auto____0;
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6073__auto____1;
return state_machine__6073__auto__;
})()
;})(switch__6072__auto__,c__6136__auto___18946,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6138__auto__ = (function (){var statearr_18945 = (f__6137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6137__auto__.cljs$core$IFn$_invoke$arity$0() : f__6137__auto__.call(null));(statearr_18945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6136__auto___18946);
return statearr_18945;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6138__auto__);
});})(c__6136__auto___18946,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_(mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_(mix,mode);
});
cljs.core.async.Pub = (function (){var obj18980 = {};return obj18980;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3469__auto__ = p;if(and__3469__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3469__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4108__auto__ = (((p == null))?null:p);return (function (){var or__3481__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3469__auto__ = p;if(and__3469__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3469__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4108__auto__ = (((p == null))?null:p);return (function (){var or__3481__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3469__auto__ = p;if(and__3469__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3469__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4108__auto__ = (((p == null))?null:p);return (function (){var or__3481__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3469__auto__ = p;if(and__3469__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4108__auto__ = (((p == null))?null:p);return (function (){var or__3481__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3481__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3481__auto__,mults){
return (function (p1__18981_SHARP_){if(cljs.core.truth_((p1__18981_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18981_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18981_SHARP_.call(null,topic))))
{return p1__18981_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18981_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3481__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t19096 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19096 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta19097){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta19097 = meta19097;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19096.cljs$lang$type = true;
cljs.core.async.t19096.cljs$lang$ctorStr = "cljs.core.async/t19096";
cljs.core.async.t19096.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"cljs.core.async/t19096");
});})(mults,ensure_mult))
;
cljs.core.async.t19096.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t19096.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t19096.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t19096.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t19096.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t19096.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19096.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t19096.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19098){var self__ = this;
var _19098__$1 = this;return self__.meta19097;
});})(mults,ensure_mult))
;
cljs.core.async.t19096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19098,meta19097__$1){var self__ = this;
var _19098__$1 = this;return (new cljs.core.async.t19096(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta19097__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t19096 = ((function (mults,ensure_mult){
return (function __GT_t19096(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19097){return (new cljs.core.async.t19096(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19097));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t19096(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6136__auto___19210 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6136__auto___19210,mults,ensure_mult,p){
return (function (){var f__6137__auto__ = (function (){var switch__6072__auto__ = ((function (c__6136__auto___19210,mults,ensure_mult,p){
return (function (state_19166){var state_val_19167 = (state_19166[1]);if((state_val_19167 === 7))
{var inst_19162 = (state_19166[2]);var state_19166__$1 = state_19166;var statearr_19168_19211 = state_19166__$1;(statearr_19168_19211[2] = inst_19162);
(statearr_19168_19211[1] = 3);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19167 === 20))
{var state_19166__$1 = state_19166;var statearr_19169_19212 = state_19166__$1;(statearr_19169_19212[2] = null);
(statearr_19169_19212[1] = 22);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19167 === 1))
{var state_19166__$1 = state_19166;var statearr_19170_19213 = state_19166__$1;(statearr_19170_19213[2] = null);
(statearr_19170_19213[1] = 2);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19167 === 4))
{var inst_19101 = (state_19166[7]);var inst_19101__$1 = (state_19166[2]);var inst_19102 = (inst_19101__$1 == null);var state_19166__$1 = (function (){var statearr_19171 = state_19166;(statearr_19171[7] = inst_19101__$1);
return statearr_19171;
})();if(cljs.core.truth_(inst_19102))
{var statearr_19172_19214 = state_19166__$1;(statearr_19172_19214[1] = 5);
} else
{var statearr_19173_19215 = state_19166__$1;(statearr_19173_19215[1] = 6);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_19167 === 15))
{var inst_19143 = (state_19166[2]);var state_19166__$1 = state_19166;var statearr_19174_19216 = state_19166__$1;(statearr_19174_19216[2] = inst_19143);
(statearr_19174_19216[1] = 12);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19167 === 21))
{var inst_19149 = (state_19166[8]);var inst_19157 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19149);var state_19166__$1 = state_19166;var statearr_19175_19217 = state_19166__$1;(statearr_19175_19217[2] = inst_19157);
(statearr_19175_19217[1] = 22);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19167 === 13))
{var inst_19125 = (state_19166[9]);var inst_19127 = cljs.core.chunked_seq_QMARK_(inst_19125);var state_19166__$1 = state_19166;if(inst_19127)
{var statearr_19176_19218 = state_19166__$1;(statearr_19176_19218[1] = 16);
} else
{var statearr_19177_19219 = state_19166__$1;(statearr_19177_19219[1] = 17);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_19167 === 22))
{var inst_19159 = (state_19166[2]);var state_19166__$1 = (function (){var statearr_19178 = state_19166;(statearr_19178[10] = inst_19159);
return statearr_19178;
})();var statearr_19179_19220 = state_19166__$1;(statearr_19179_19220[2] = null);
(statearr_19179_19220[1] = 2);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19167 === 6))
{var inst_19149 = (state_19166[8]);var inst_19101 = (state_19166[7]);var inst_19149__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_19101) : topic_fn.call(null,inst_19101));var inst_19150 = cljs.core.deref(mults);var inst_19151 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19150,inst_19149__$1);var inst_19152 = cljs.core.async.muxch_STAR_(inst_19151);var state_19166__$1 = (function (){var statearr_19180 = state_19166;(statearr_19180[8] = inst_19149__$1);
return statearr_19180;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19166__$1,19,inst_19152,inst_19101);
} else
{if((state_val_19167 === 17))
{var inst_19125 = (state_19166[9]);var inst_19134 = cljs.core.first(inst_19125);var inst_19135 = cljs.core.async.muxch_STAR_(inst_19134);var inst_19136 = cljs.core.async.close_BANG_(inst_19135);var inst_19137 = cljs.core.next(inst_19125);var inst_19111 = inst_19137;var inst_19112 = null;var inst_19113 = 0;var inst_19114 = 0;var state_19166__$1 = (function (){var statearr_19181 = state_19166;(statearr_19181[11] = inst_19113);
(statearr_19181[12] = inst_19111);
(statearr_19181[13] = inst_19136);
(statearr_19181[14] = inst_19112);
(statearr_19181[15] = inst_19114);
return statearr_19181;
})();var statearr_19182_19221 = state_19166__$1;(statearr_19182_19221[2] = null);
(statearr_19182_19221[1] = 8);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19167 === 3))
{var inst_19164 = (state_19166[2]);var state_19166__$1 = state_19166;return cljs.core.async.impl.ioc_helpers.return_chan(state_19166__$1,inst_19164);
} else
{if((state_val_19167 === 12))
{var inst_19145 = (state_19166[2]);var state_19166__$1 = state_19166;var statearr_19183_19222 = state_19166__$1;(statearr_19183_19222[2] = inst_19145);
(statearr_19183_19222[1] = 9);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19167 === 2))
{var state_19166__$1 = state_19166;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19166__$1,4,ch);
} else
{if((state_val_19167 === 19))
{var inst_19154 = (state_19166[2]);var state_19166__$1 = state_19166;if(cljs.core.truth_(inst_19154))
{var statearr_19184_19223 = state_19166__$1;(statearr_19184_19223[1] = 20);
} else
{var statearr_19185_19224 = state_19166__$1;(statearr_19185_19224[1] = 21);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_19167 === 11))
{var inst_19111 = (state_19166[12]);var inst_19125 = (state_19166[9]);var inst_19125__$1 = cljs.core.seq(inst_19111);var state_19166__$1 = (function (){var statearr_19186 = state_19166;(statearr_19186[9] = inst_19125__$1);
return statearr_19186;
})();if(inst_19125__$1)
{var statearr_19187_19225 = state_19166__$1;(statearr_19187_19225[1] = 13);
} else
{var statearr_19188_19226 = state_19166__$1;(statearr_19188_19226[1] = 14);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_19167 === 9))
{var inst_19147 = (state_19166[2]);var state_19166__$1 = state_19166;var statearr_19189_19227 = state_19166__$1;(statearr_19189_19227[2] = inst_19147);
(statearr_19189_19227[1] = 7);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19167 === 5))
{var inst_19108 = cljs.core.deref(mults);var inst_19109 = cljs.core.vals(inst_19108);var inst_19110 = cljs.core.seq(inst_19109);var inst_19111 = inst_19110;var inst_19112 = null;var inst_19113 = 0;var inst_19114 = 0;var state_19166__$1 = (function (){var statearr_19190 = state_19166;(statearr_19190[11] = inst_19113);
(statearr_19190[12] = inst_19111);
(statearr_19190[14] = inst_19112);
(statearr_19190[15] = inst_19114);
return statearr_19190;
})();var statearr_19191_19228 = state_19166__$1;(statearr_19191_19228[2] = null);
(statearr_19191_19228[1] = 8);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19167 === 14))
{var state_19166__$1 = state_19166;var statearr_19195_19229 = state_19166__$1;(statearr_19195_19229[2] = null);
(statearr_19195_19229[1] = 15);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19167 === 16))
{var inst_19125 = (state_19166[9]);var inst_19129 = cljs.core.chunk_first(inst_19125);var inst_19130 = cljs.core.chunk_rest(inst_19125);var inst_19131 = cljs.core.count(inst_19129);var inst_19111 = inst_19130;var inst_19112 = inst_19129;var inst_19113 = inst_19131;var inst_19114 = 0;var state_19166__$1 = (function (){var statearr_19196 = state_19166;(statearr_19196[11] = inst_19113);
(statearr_19196[12] = inst_19111);
(statearr_19196[14] = inst_19112);
(statearr_19196[15] = inst_19114);
return statearr_19196;
})();var statearr_19197_19230 = state_19166__$1;(statearr_19197_19230[2] = null);
(statearr_19197_19230[1] = 8);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19167 === 10))
{var inst_19113 = (state_19166[11]);var inst_19111 = (state_19166[12]);var inst_19112 = (state_19166[14]);var inst_19114 = (state_19166[15]);var inst_19119 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19112,inst_19114);var inst_19120 = cljs.core.async.muxch_STAR_(inst_19119);var inst_19121 = cljs.core.async.close_BANG_(inst_19120);var inst_19122 = (inst_19114 + 1);var tmp19192 = inst_19113;var tmp19193 = inst_19111;var tmp19194 = inst_19112;var inst_19111__$1 = tmp19193;var inst_19112__$1 = tmp19194;var inst_19113__$1 = tmp19192;var inst_19114__$1 = inst_19122;var state_19166__$1 = (function (){var statearr_19198 = state_19166;(statearr_19198[16] = inst_19121);
(statearr_19198[11] = inst_19113__$1);
(statearr_19198[12] = inst_19111__$1);
(statearr_19198[14] = inst_19112__$1);
(statearr_19198[15] = inst_19114__$1);
return statearr_19198;
})();var statearr_19199_19231 = state_19166__$1;(statearr_19199_19231[2] = null);
(statearr_19199_19231[1] = 8);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19167 === 18))
{var inst_19140 = (state_19166[2]);var state_19166__$1 = state_19166;var statearr_19200_19232 = state_19166__$1;(statearr_19200_19232[2] = inst_19140);
(statearr_19200_19232[1] = 15);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19167 === 8))
{var inst_19113 = (state_19166[11]);var inst_19114 = (state_19166[15]);var inst_19116 = (inst_19114 < inst_19113);var inst_19117 = inst_19116;var state_19166__$1 = state_19166;if(cljs.core.truth_(inst_19117))
{var statearr_19201_19233 = state_19166__$1;(statearr_19201_19233[1] = 10);
} else
{var statearr_19202_19234 = state_19166__$1;(statearr_19202_19234[1] = 11);
}
return cljs.core.constant$keyword$71;
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
}
}
}
}
}
}
}
}
});})(c__6136__auto___19210,mults,ensure_mult,p))
;return ((function (switch__6072__auto__,c__6136__auto___19210,mults,ensure_mult,p){
return (function() {
var state_machine__6073__auto__ = null;
var state_machine__6073__auto____0 = (function (){var statearr_19206 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19206[0] = state_machine__6073__auto__);
(statearr_19206[1] = 1);
return statearr_19206;
});
var state_machine__6073__auto____1 = (function (state_19166){while(true){
var ret_value__6074__auto__ = (function (){try{while(true){
var result__6075__auto__ = switch__6072__auto__(state_19166);if(cljs.core.keyword_identical_QMARK_(result__6075__auto__,cljs.core.constant$keyword$71))
{{
continue;
}
} else
{return result__6075__auto__;
}
break;
}
}catch (e19207){if((e19207 instanceof Object))
{var ex__6076__auto__ = e19207;var statearr_19208_19235 = state_19166;(statearr_19208_19235[5] = ex__6076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19166);
return cljs.core.constant$keyword$71;
} else
{if(cljs.core.constant$keyword$60)
{throw e19207;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6074__auto__,cljs.core.constant$keyword$71))
{{
var G__19236 = state_19166;
state_19166 = G__19236;
continue;
}
} else
{return ret_value__6074__auto__;
}
break;
}
});
state_machine__6073__auto__ = function(state_19166){
switch(arguments.length){
case 0:
return state_machine__6073__auto____0.call(this);
case 1:
return state_machine__6073__auto____1.call(this,state_19166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6073__auto____0;
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6073__auto____1;
return state_machine__6073__auto__;
})()
;})(switch__6072__auto__,c__6136__auto___19210,mults,ensure_mult,p))
})();var state__6138__auto__ = (function (){var statearr_19209 = (f__6137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6137__auto__.cljs$core$IFn$_invoke$arity$0() : f__6137__auto__.call(null));(statearr_19209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6136__auto___19210);
return statearr_19209;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6138__auto__);
});})(c__6136__auto___19210,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__6136__auto___19373 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6136__auto___19373,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6137__auto__ = (function (){var switch__6072__auto__ = ((function (c__6136__auto___19373,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19343){var state_val_19344 = (state_19343[1]);if((state_val_19344 === 7))
{var state_19343__$1 = state_19343;var statearr_19345_19374 = state_19343__$1;(statearr_19345_19374[2] = null);
(statearr_19345_19374[1] = 8);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19344 === 1))
{var state_19343__$1 = state_19343;var statearr_19346_19375 = state_19343__$1;(statearr_19346_19375[2] = null);
(statearr_19346_19375[1] = 2);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19344 === 4))
{var inst_19307 = (state_19343[7]);var inst_19309 = (inst_19307 < cnt);var state_19343__$1 = state_19343;if(cljs.core.truth_(inst_19309))
{var statearr_19347_19376 = state_19343__$1;(statearr_19347_19376[1] = 6);
} else
{var statearr_19348_19377 = state_19343__$1;(statearr_19348_19377[1] = 7);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_19344 === 15))
{var inst_19339 = (state_19343[2]);var state_19343__$1 = state_19343;var statearr_19349_19378 = state_19343__$1;(statearr_19349_19378[2] = inst_19339);
(statearr_19349_19378[1] = 3);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19344 === 13))
{var inst_19332 = cljs.core.async.close_BANG_(out);var state_19343__$1 = state_19343;var statearr_19350_19379 = state_19343__$1;(statearr_19350_19379[2] = inst_19332);
(statearr_19350_19379[1] = 15);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19344 === 6))
{var state_19343__$1 = state_19343;var statearr_19351_19380 = state_19343__$1;(statearr_19351_19380[2] = null);
(statearr_19351_19380[1] = 11);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19344 === 3))
{var inst_19341 = (state_19343[2]);var state_19343__$1 = state_19343;return cljs.core.async.impl.ioc_helpers.return_chan(state_19343__$1,inst_19341);
} else
{if((state_val_19344 === 12))
{var inst_19329 = (state_19343[8]);var inst_19329__$1 = (state_19343[2]);var inst_19330 = cljs.core.some(cljs.core.nil_QMARK_,inst_19329__$1);var state_19343__$1 = (function (){var statearr_19352 = state_19343;(statearr_19352[8] = inst_19329__$1);
return statearr_19352;
})();if(cljs.core.truth_(inst_19330))
{var statearr_19353_19381 = state_19343__$1;(statearr_19353_19381[1] = 13);
} else
{var statearr_19354_19382 = state_19343__$1;(statearr_19354_19382[1] = 14);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_19344 === 2))
{var inst_19306 = cljs.core.reset_BANG_(dctr,cnt);var inst_19307 = 0;var state_19343__$1 = (function (){var statearr_19355 = state_19343;(statearr_19355[7] = inst_19307);
(statearr_19355[9] = inst_19306);
return statearr_19355;
})();var statearr_19356_19383 = state_19343__$1;(statearr_19356_19383[2] = null);
(statearr_19356_19383[1] = 4);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19344 === 11))
{var inst_19307 = (state_19343[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_19343,10,Object,null,9);var inst_19316 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19307) : chs__$1.call(null,inst_19307));var inst_19317 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19307) : done.call(null,inst_19307));var inst_19318 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19316,inst_19317);var state_19343__$1 = state_19343;var statearr_19357_19384 = state_19343__$1;(statearr_19357_19384[2] = inst_19318);
cljs.core.async.impl.ioc_helpers.process_exception(state_19343__$1);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19344 === 9))
{var inst_19307 = (state_19343[7]);var inst_19320 = (state_19343[2]);var inst_19321 = (inst_19307 + 1);var inst_19307__$1 = inst_19321;var state_19343__$1 = (function (){var statearr_19358 = state_19343;(statearr_19358[7] = inst_19307__$1);
(statearr_19358[10] = inst_19320);
return statearr_19358;
})();var statearr_19359_19385 = state_19343__$1;(statearr_19359_19385[2] = null);
(statearr_19359_19385[1] = 4);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19344 === 5))
{var inst_19327 = (state_19343[2]);var state_19343__$1 = (function (){var statearr_19360 = state_19343;(statearr_19360[11] = inst_19327);
return statearr_19360;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19343__$1,12,dchan);
} else
{if((state_val_19344 === 14))
{var inst_19329 = (state_19343[8]);var inst_19334 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19329);var state_19343__$1 = state_19343;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19343__$1,16,out,inst_19334);
} else
{if((state_val_19344 === 16))
{var inst_19336 = (state_19343[2]);var state_19343__$1 = (function (){var statearr_19361 = state_19343;(statearr_19361[12] = inst_19336);
return statearr_19361;
})();var statearr_19362_19386 = state_19343__$1;(statearr_19362_19386[2] = null);
(statearr_19362_19386[1] = 2);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19344 === 10))
{var inst_19311 = (state_19343[2]);var inst_19312 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_19343__$1 = (function (){var statearr_19363 = state_19343;(statearr_19363[13] = inst_19311);
return statearr_19363;
})();var statearr_19364_19387 = state_19343__$1;(statearr_19364_19387[2] = inst_19312);
cljs.core.async.impl.ioc_helpers.process_exception(state_19343__$1);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19344 === 8))
{var inst_19325 = (state_19343[2]);var state_19343__$1 = state_19343;var statearr_19365_19388 = state_19343__$1;(statearr_19365_19388[2] = inst_19325);
(statearr_19365_19388[1] = 5);
return cljs.core.constant$keyword$71;
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
}
}
});})(c__6136__auto___19373,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6072__auto__,c__6136__auto___19373,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6073__auto__ = null;
var state_machine__6073__auto____0 = (function (){var statearr_19369 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19369[0] = state_machine__6073__auto__);
(statearr_19369[1] = 1);
return statearr_19369;
});
var state_machine__6073__auto____1 = (function (state_19343){while(true){
var ret_value__6074__auto__ = (function (){try{while(true){
var result__6075__auto__ = switch__6072__auto__(state_19343);if(cljs.core.keyword_identical_QMARK_(result__6075__auto__,cljs.core.constant$keyword$71))
{{
continue;
}
} else
{return result__6075__auto__;
}
break;
}
}catch (e19370){if((e19370 instanceof Object))
{var ex__6076__auto__ = e19370;var statearr_19371_19389 = state_19343;(statearr_19371_19389[5] = ex__6076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19343);
return cljs.core.constant$keyword$71;
} else
{if(cljs.core.constant$keyword$60)
{throw e19370;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6074__auto__,cljs.core.constant$keyword$71))
{{
var G__19390 = state_19343;
state_19343 = G__19390;
continue;
}
} else
{return ret_value__6074__auto__;
}
break;
}
});
state_machine__6073__auto__ = function(state_19343){
switch(arguments.length){
case 0:
return state_machine__6073__auto____0.call(this);
case 1:
return state_machine__6073__auto____1.call(this,state_19343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6073__auto____0;
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6073__auto____1;
return state_machine__6073__auto__;
})()
;})(switch__6072__auto__,c__6136__auto___19373,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6138__auto__ = (function (){var statearr_19372 = (f__6137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6137__auto__.cljs$core$IFn$_invoke$arity$0() : f__6137__auto__.call(null));(statearr_19372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6136__auto___19373);
return statearr_19372;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6138__auto__);
});})(c__6136__auto___19373,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6136__auto___19498 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6136__auto___19498,out){
return (function (){var f__6137__auto__ = (function (){var switch__6072__auto__ = ((function (c__6136__auto___19498,out){
return (function (state_19474){var state_val_19475 = (state_19474[1]);if((state_val_19475 === 7))
{var inst_19453 = (state_19474[7]);var inst_19454 = (state_19474[8]);var inst_19453__$1 = (state_19474[2]);var inst_19454__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19453__$1,0,null);var inst_19455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19453__$1,1,null);var inst_19456 = (inst_19454__$1 == null);var state_19474__$1 = (function (){var statearr_19476 = state_19474;(statearr_19476[7] = inst_19453__$1);
(statearr_19476[8] = inst_19454__$1);
(statearr_19476[9] = inst_19455);
return statearr_19476;
})();if(cljs.core.truth_(inst_19456))
{var statearr_19477_19499 = state_19474__$1;(statearr_19477_19499[1] = 8);
} else
{var statearr_19478_19500 = state_19474__$1;(statearr_19478_19500[1] = 9);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_19475 === 1))
{var inst_19445 = cljs.core.vec(chs);var inst_19446 = inst_19445;var state_19474__$1 = (function (){var statearr_19479 = state_19474;(statearr_19479[10] = inst_19446);
return statearr_19479;
})();var statearr_19480_19501 = state_19474__$1;(statearr_19480_19501[2] = null);
(statearr_19480_19501[1] = 2);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19475 === 4))
{var inst_19446 = (state_19474[10]);var state_19474__$1 = state_19474;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_19474__$1,7,inst_19446);
} else
{if((state_val_19475 === 6))
{var inst_19470 = (state_19474[2]);var state_19474__$1 = state_19474;var statearr_19481_19502 = state_19474__$1;(statearr_19481_19502[2] = inst_19470);
(statearr_19481_19502[1] = 3);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19475 === 3))
{var inst_19472 = (state_19474[2]);var state_19474__$1 = state_19474;return cljs.core.async.impl.ioc_helpers.return_chan(state_19474__$1,inst_19472);
} else
{if((state_val_19475 === 2))
{var inst_19446 = (state_19474[10]);var inst_19448 = cljs.core.count(inst_19446);var inst_19449 = (inst_19448 > 0);var state_19474__$1 = state_19474;if(cljs.core.truth_(inst_19449))
{var statearr_19483_19503 = state_19474__$1;(statearr_19483_19503[1] = 4);
} else
{var statearr_19484_19504 = state_19474__$1;(statearr_19484_19504[1] = 5);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_19475 === 11))
{var inst_19446 = (state_19474[10]);var inst_19463 = (state_19474[2]);var tmp19482 = inst_19446;var inst_19446__$1 = tmp19482;var state_19474__$1 = (function (){var statearr_19485 = state_19474;(statearr_19485[10] = inst_19446__$1);
(statearr_19485[11] = inst_19463);
return statearr_19485;
})();var statearr_19486_19505 = state_19474__$1;(statearr_19486_19505[2] = null);
(statearr_19486_19505[1] = 2);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19475 === 9))
{var inst_19454 = (state_19474[8]);var state_19474__$1 = state_19474;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19474__$1,11,out,inst_19454);
} else
{if((state_val_19475 === 5))
{var inst_19468 = cljs.core.async.close_BANG_(out);var state_19474__$1 = state_19474;var statearr_19487_19506 = state_19474__$1;(statearr_19487_19506[2] = inst_19468);
(statearr_19487_19506[1] = 6);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19475 === 10))
{var inst_19466 = (state_19474[2]);var state_19474__$1 = state_19474;var statearr_19488_19507 = state_19474__$1;(statearr_19488_19507[2] = inst_19466);
(statearr_19488_19507[1] = 6);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19475 === 8))
{var inst_19446 = (state_19474[10]);var inst_19453 = (state_19474[7]);var inst_19454 = (state_19474[8]);var inst_19455 = (state_19474[9]);var inst_19458 = (function (){var c = inst_19455;var v = inst_19454;var vec__19451 = inst_19453;var cs = inst_19446;return ((function (c,v,vec__19451,cs,inst_19446,inst_19453,inst_19454,inst_19455,state_val_19475,c__6136__auto___19498,out){
return (function (p1__19391_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19391_SHARP_);
});
;})(c,v,vec__19451,cs,inst_19446,inst_19453,inst_19454,inst_19455,state_val_19475,c__6136__auto___19498,out))
})();var inst_19459 = cljs.core.filterv(inst_19458,inst_19446);var inst_19446__$1 = inst_19459;var state_19474__$1 = (function (){var statearr_19489 = state_19474;(statearr_19489[10] = inst_19446__$1);
return statearr_19489;
})();var statearr_19490_19508 = state_19474__$1;(statearr_19490_19508[2] = null);
(statearr_19490_19508[1] = 2);
return cljs.core.constant$keyword$71;
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
});})(c__6136__auto___19498,out))
;return ((function (switch__6072__auto__,c__6136__auto___19498,out){
return (function() {
var state_machine__6073__auto__ = null;
var state_machine__6073__auto____0 = (function (){var statearr_19494 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19494[0] = state_machine__6073__auto__);
(statearr_19494[1] = 1);
return statearr_19494;
});
var state_machine__6073__auto____1 = (function (state_19474){while(true){
var ret_value__6074__auto__ = (function (){try{while(true){
var result__6075__auto__ = switch__6072__auto__(state_19474);if(cljs.core.keyword_identical_QMARK_(result__6075__auto__,cljs.core.constant$keyword$71))
{{
continue;
}
} else
{return result__6075__auto__;
}
break;
}
}catch (e19495){if((e19495 instanceof Object))
{var ex__6076__auto__ = e19495;var statearr_19496_19509 = state_19474;(statearr_19496_19509[5] = ex__6076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19474);
return cljs.core.constant$keyword$71;
} else
{if(cljs.core.constant$keyword$60)
{throw e19495;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6074__auto__,cljs.core.constant$keyword$71))
{{
var G__19510 = state_19474;
state_19474 = G__19510;
continue;
}
} else
{return ret_value__6074__auto__;
}
break;
}
});
state_machine__6073__auto__ = function(state_19474){
switch(arguments.length){
case 0:
return state_machine__6073__auto____0.call(this);
case 1:
return state_machine__6073__auto____1.call(this,state_19474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6073__auto____0;
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6073__auto____1;
return state_machine__6073__auto__;
})()
;})(switch__6072__auto__,c__6136__auto___19498,out))
})();var state__6138__auto__ = (function (){var statearr_19497 = (f__6137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6137__auto__.cljs$core$IFn$_invoke$arity$0() : f__6137__auto__.call(null));(statearr_19497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6136__auto___19498);
return statearr_19497;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6138__auto__);
});})(c__6136__auto___19498,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6136__auto___19603 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6136__auto___19603,out){
return (function (){var f__6137__auto__ = (function (){var switch__6072__auto__ = ((function (c__6136__auto___19603,out){
return (function (state_19580){var state_val_19581 = (state_19580[1]);if((state_val_19581 === 7))
{var inst_19562 = (state_19580[7]);var inst_19562__$1 = (state_19580[2]);var inst_19563 = (inst_19562__$1 == null);var inst_19564 = cljs.core.not(inst_19563);var state_19580__$1 = (function (){var statearr_19582 = state_19580;(statearr_19582[7] = inst_19562__$1);
return statearr_19582;
})();if(inst_19564)
{var statearr_19583_19604 = state_19580__$1;(statearr_19583_19604[1] = 8);
} else
{var statearr_19584_19605 = state_19580__$1;(statearr_19584_19605[1] = 9);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_19581 === 1))
{var inst_19557 = 0;var state_19580__$1 = (function (){var statearr_19585 = state_19580;(statearr_19585[8] = inst_19557);
return statearr_19585;
})();var statearr_19586_19606 = state_19580__$1;(statearr_19586_19606[2] = null);
(statearr_19586_19606[1] = 2);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19581 === 4))
{var state_19580__$1 = state_19580;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19580__$1,7,ch);
} else
{if((state_val_19581 === 6))
{var inst_19575 = (state_19580[2]);var state_19580__$1 = state_19580;var statearr_19587_19607 = state_19580__$1;(statearr_19587_19607[2] = inst_19575);
(statearr_19587_19607[1] = 3);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19581 === 3))
{var inst_19577 = (state_19580[2]);var inst_19578 = cljs.core.async.close_BANG_(out);var state_19580__$1 = (function (){var statearr_19588 = state_19580;(statearr_19588[9] = inst_19577);
return statearr_19588;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_19580__$1,inst_19578);
} else
{if((state_val_19581 === 2))
{var inst_19557 = (state_19580[8]);var inst_19559 = (inst_19557 < n);var state_19580__$1 = state_19580;if(cljs.core.truth_(inst_19559))
{var statearr_19589_19608 = state_19580__$1;(statearr_19589_19608[1] = 4);
} else
{var statearr_19590_19609 = state_19580__$1;(statearr_19590_19609[1] = 5);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_19581 === 11))
{var inst_19557 = (state_19580[8]);var inst_19567 = (state_19580[2]);var inst_19568 = (inst_19557 + 1);var inst_19557__$1 = inst_19568;var state_19580__$1 = (function (){var statearr_19591 = state_19580;(statearr_19591[10] = inst_19567);
(statearr_19591[8] = inst_19557__$1);
return statearr_19591;
})();var statearr_19592_19610 = state_19580__$1;(statearr_19592_19610[2] = null);
(statearr_19592_19610[1] = 2);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19581 === 9))
{var state_19580__$1 = state_19580;var statearr_19593_19611 = state_19580__$1;(statearr_19593_19611[2] = null);
(statearr_19593_19611[1] = 10);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19581 === 5))
{var state_19580__$1 = state_19580;var statearr_19594_19612 = state_19580__$1;(statearr_19594_19612[2] = null);
(statearr_19594_19612[1] = 6);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19581 === 10))
{var inst_19572 = (state_19580[2]);var state_19580__$1 = state_19580;var statearr_19595_19613 = state_19580__$1;(statearr_19595_19613[2] = inst_19572);
(statearr_19595_19613[1] = 6);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19581 === 8))
{var inst_19562 = (state_19580[7]);var state_19580__$1 = state_19580;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19580__$1,11,out,inst_19562);
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
});})(c__6136__auto___19603,out))
;return ((function (switch__6072__auto__,c__6136__auto___19603,out){
return (function() {
var state_machine__6073__auto__ = null;
var state_machine__6073__auto____0 = (function (){var statearr_19599 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19599[0] = state_machine__6073__auto__);
(statearr_19599[1] = 1);
return statearr_19599;
});
var state_machine__6073__auto____1 = (function (state_19580){while(true){
var ret_value__6074__auto__ = (function (){try{while(true){
var result__6075__auto__ = switch__6072__auto__(state_19580);if(cljs.core.keyword_identical_QMARK_(result__6075__auto__,cljs.core.constant$keyword$71))
{{
continue;
}
} else
{return result__6075__auto__;
}
break;
}
}catch (e19600){if((e19600 instanceof Object))
{var ex__6076__auto__ = e19600;var statearr_19601_19614 = state_19580;(statearr_19601_19614[5] = ex__6076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19580);
return cljs.core.constant$keyword$71;
} else
{if(cljs.core.constant$keyword$60)
{throw e19600;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6074__auto__,cljs.core.constant$keyword$71))
{{
var G__19615 = state_19580;
state_19580 = G__19615;
continue;
}
} else
{return ret_value__6074__auto__;
}
break;
}
});
state_machine__6073__auto__ = function(state_19580){
switch(arguments.length){
case 0:
return state_machine__6073__auto____0.call(this);
case 1:
return state_machine__6073__auto____1.call(this,state_19580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6073__auto____0;
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6073__auto____1;
return state_machine__6073__auto__;
})()
;})(switch__6072__auto__,c__6136__auto___19603,out))
})();var state__6138__auto__ = (function (){var statearr_19602 = (f__6137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6137__auto__.cljs$core$IFn$_invoke$arity$0() : f__6137__auto__.call(null));(statearr_19602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6136__auto___19603);
return statearr_19602;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6138__auto__);
});})(c__6136__auto___19603,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6136__auto___19712 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6136__auto___19712,out){
return (function (){var f__6137__auto__ = (function (){var switch__6072__auto__ = ((function (c__6136__auto___19712,out){
return (function (state_19687){var state_val_19688 = (state_19687[1]);if((state_val_19688 === 7))
{var inst_19682 = (state_19687[2]);var state_19687__$1 = state_19687;var statearr_19689_19713 = state_19687__$1;(statearr_19689_19713[2] = inst_19682);
(statearr_19689_19713[1] = 3);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19688 === 1))
{var inst_19664 = null;var state_19687__$1 = (function (){var statearr_19690 = state_19687;(statearr_19690[7] = inst_19664);
return statearr_19690;
})();var statearr_19691_19714 = state_19687__$1;(statearr_19691_19714[2] = null);
(statearr_19691_19714[1] = 2);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19688 === 4))
{var inst_19667 = (state_19687[8]);var inst_19667__$1 = (state_19687[2]);var inst_19668 = (inst_19667__$1 == null);var inst_19669 = cljs.core.not(inst_19668);var state_19687__$1 = (function (){var statearr_19692 = state_19687;(statearr_19692[8] = inst_19667__$1);
return statearr_19692;
})();if(inst_19669)
{var statearr_19693_19715 = state_19687__$1;(statearr_19693_19715[1] = 5);
} else
{var statearr_19694_19716 = state_19687__$1;(statearr_19694_19716[1] = 6);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_19688 === 6))
{var state_19687__$1 = state_19687;var statearr_19695_19717 = state_19687__$1;(statearr_19695_19717[2] = null);
(statearr_19695_19717[1] = 7);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19688 === 3))
{var inst_19684 = (state_19687[2]);var inst_19685 = cljs.core.async.close_BANG_(out);var state_19687__$1 = (function (){var statearr_19696 = state_19687;(statearr_19696[9] = inst_19684);
return statearr_19696;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_19687__$1,inst_19685);
} else
{if((state_val_19688 === 2))
{var state_19687__$1 = state_19687;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19687__$1,4,ch);
} else
{if((state_val_19688 === 11))
{var inst_19667 = (state_19687[8]);var inst_19676 = (state_19687[2]);var inst_19664 = inst_19667;var state_19687__$1 = (function (){var statearr_19697 = state_19687;(statearr_19697[7] = inst_19664);
(statearr_19697[10] = inst_19676);
return statearr_19697;
})();var statearr_19698_19718 = state_19687__$1;(statearr_19698_19718[2] = null);
(statearr_19698_19718[1] = 2);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19688 === 9))
{var inst_19667 = (state_19687[8]);var state_19687__$1 = state_19687;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19687__$1,11,out,inst_19667);
} else
{if((state_val_19688 === 5))
{var inst_19667 = (state_19687[8]);var inst_19664 = (state_19687[7]);var inst_19671 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19667,inst_19664);var state_19687__$1 = state_19687;if(inst_19671)
{var statearr_19700_19719 = state_19687__$1;(statearr_19700_19719[1] = 8);
} else
{var statearr_19701_19720 = state_19687__$1;(statearr_19701_19720[1] = 9);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_19688 === 10))
{var inst_19679 = (state_19687[2]);var state_19687__$1 = state_19687;var statearr_19702_19721 = state_19687__$1;(statearr_19702_19721[2] = inst_19679);
(statearr_19702_19721[1] = 7);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19688 === 8))
{var inst_19664 = (state_19687[7]);var tmp19699 = inst_19664;var inst_19664__$1 = tmp19699;var state_19687__$1 = (function (){var statearr_19703 = state_19687;(statearr_19703[7] = inst_19664__$1);
return statearr_19703;
})();var statearr_19704_19722 = state_19687__$1;(statearr_19704_19722[2] = null);
(statearr_19704_19722[1] = 2);
return cljs.core.constant$keyword$71;
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
});})(c__6136__auto___19712,out))
;return ((function (switch__6072__auto__,c__6136__auto___19712,out){
return (function() {
var state_machine__6073__auto__ = null;
var state_machine__6073__auto____0 = (function (){var statearr_19708 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19708[0] = state_machine__6073__auto__);
(statearr_19708[1] = 1);
return statearr_19708;
});
var state_machine__6073__auto____1 = (function (state_19687){while(true){
var ret_value__6074__auto__ = (function (){try{while(true){
var result__6075__auto__ = switch__6072__auto__(state_19687);if(cljs.core.keyword_identical_QMARK_(result__6075__auto__,cljs.core.constant$keyword$71))
{{
continue;
}
} else
{return result__6075__auto__;
}
break;
}
}catch (e19709){if((e19709 instanceof Object))
{var ex__6076__auto__ = e19709;var statearr_19710_19723 = state_19687;(statearr_19710_19723[5] = ex__6076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19687);
return cljs.core.constant$keyword$71;
} else
{if(cljs.core.constant$keyword$60)
{throw e19709;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6074__auto__,cljs.core.constant$keyword$71))
{{
var G__19724 = state_19687;
state_19687 = G__19724;
continue;
}
} else
{return ret_value__6074__auto__;
}
break;
}
});
state_machine__6073__auto__ = function(state_19687){
switch(arguments.length){
case 0:
return state_machine__6073__auto____0.call(this);
case 1:
return state_machine__6073__auto____1.call(this,state_19687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6073__auto____0;
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6073__auto____1;
return state_machine__6073__auto__;
})()
;})(switch__6072__auto__,c__6136__auto___19712,out))
})();var state__6138__auto__ = (function (){var statearr_19711 = (f__6137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6137__auto__.cljs$core$IFn$_invoke$arity$0() : f__6137__auto__.call(null));(statearr_19711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6136__auto___19712);
return statearr_19711;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6138__auto__);
});})(c__6136__auto___19712,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6136__auto___19859 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6136__auto___19859,out){
return (function (){var f__6137__auto__ = (function (){var switch__6072__auto__ = ((function (c__6136__auto___19859,out){
return (function (state_19829){var state_val_19830 = (state_19829[1]);if((state_val_19830 === 7))
{var inst_19825 = (state_19829[2]);var state_19829__$1 = state_19829;var statearr_19831_19860 = state_19829__$1;(statearr_19831_19860[2] = inst_19825);
(statearr_19831_19860[1] = 3);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19830 === 1))
{var inst_19792 = (new Array(n));var inst_19793 = inst_19792;var inst_19794 = 0;var state_19829__$1 = (function (){var statearr_19832 = state_19829;(statearr_19832[7] = inst_19793);
(statearr_19832[8] = inst_19794);
return statearr_19832;
})();var statearr_19833_19861 = state_19829__$1;(statearr_19833_19861[2] = null);
(statearr_19833_19861[1] = 2);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19830 === 4))
{var inst_19797 = (state_19829[9]);var inst_19797__$1 = (state_19829[2]);var inst_19798 = (inst_19797__$1 == null);var inst_19799 = cljs.core.not(inst_19798);var state_19829__$1 = (function (){var statearr_19834 = state_19829;(statearr_19834[9] = inst_19797__$1);
return statearr_19834;
})();if(inst_19799)
{var statearr_19835_19862 = state_19829__$1;(statearr_19835_19862[1] = 5);
} else
{var statearr_19836_19863 = state_19829__$1;(statearr_19836_19863[1] = 6);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_19830 === 15))
{var inst_19819 = (state_19829[2]);var state_19829__$1 = state_19829;var statearr_19837_19864 = state_19829__$1;(statearr_19837_19864[2] = inst_19819);
(statearr_19837_19864[1] = 14);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19830 === 13))
{var state_19829__$1 = state_19829;var statearr_19838_19865 = state_19829__$1;(statearr_19838_19865[2] = null);
(statearr_19838_19865[1] = 14);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19830 === 6))
{var inst_19794 = (state_19829[8]);var inst_19815 = (inst_19794 > 0);var state_19829__$1 = state_19829;if(cljs.core.truth_(inst_19815))
{var statearr_19839_19866 = state_19829__$1;(statearr_19839_19866[1] = 12);
} else
{var statearr_19840_19867 = state_19829__$1;(statearr_19840_19867[1] = 13);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_19830 === 3))
{var inst_19827 = (state_19829[2]);var state_19829__$1 = state_19829;return cljs.core.async.impl.ioc_helpers.return_chan(state_19829__$1,inst_19827);
} else
{if((state_val_19830 === 12))
{var inst_19793 = (state_19829[7]);var inst_19817 = cljs.core.vec(inst_19793);var state_19829__$1 = state_19829;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19829__$1,15,out,inst_19817);
} else
{if((state_val_19830 === 2))
{var state_19829__$1 = state_19829;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19829__$1,4,ch);
} else
{if((state_val_19830 === 11))
{var inst_19809 = (state_19829[2]);var inst_19810 = (new Array(n));var inst_19793 = inst_19810;var inst_19794 = 0;var state_19829__$1 = (function (){var statearr_19841 = state_19829;(statearr_19841[7] = inst_19793);
(statearr_19841[8] = inst_19794);
(statearr_19841[10] = inst_19809);
return statearr_19841;
})();var statearr_19842_19868 = state_19829__$1;(statearr_19842_19868[2] = null);
(statearr_19842_19868[1] = 2);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19830 === 9))
{var inst_19793 = (state_19829[7]);var inst_19807 = cljs.core.vec(inst_19793);var state_19829__$1 = state_19829;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19829__$1,11,out,inst_19807);
} else
{if((state_val_19830 === 5))
{var inst_19802 = (state_19829[11]);var inst_19793 = (state_19829[7]);var inst_19794 = (state_19829[8]);var inst_19797 = (state_19829[9]);var inst_19801 = (inst_19793[inst_19794] = inst_19797);var inst_19802__$1 = (inst_19794 + 1);var inst_19803 = (inst_19802__$1 < n);var state_19829__$1 = (function (){var statearr_19843 = state_19829;(statearr_19843[11] = inst_19802__$1);
(statearr_19843[12] = inst_19801);
return statearr_19843;
})();if(cljs.core.truth_(inst_19803))
{var statearr_19844_19869 = state_19829__$1;(statearr_19844_19869[1] = 8);
} else
{var statearr_19845_19870 = state_19829__$1;(statearr_19845_19870[1] = 9);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_19830 === 14))
{var inst_19822 = (state_19829[2]);var inst_19823 = cljs.core.async.close_BANG_(out);var state_19829__$1 = (function (){var statearr_19847 = state_19829;(statearr_19847[13] = inst_19822);
return statearr_19847;
})();var statearr_19848_19871 = state_19829__$1;(statearr_19848_19871[2] = inst_19823);
(statearr_19848_19871[1] = 7);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19830 === 10))
{var inst_19813 = (state_19829[2]);var state_19829__$1 = state_19829;var statearr_19849_19872 = state_19829__$1;(statearr_19849_19872[2] = inst_19813);
(statearr_19849_19872[1] = 7);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19830 === 8))
{var inst_19802 = (state_19829[11]);var inst_19793 = (state_19829[7]);var tmp19846 = inst_19793;var inst_19793__$1 = tmp19846;var inst_19794 = inst_19802;var state_19829__$1 = (function (){var statearr_19850 = state_19829;(statearr_19850[7] = inst_19793__$1);
(statearr_19850[8] = inst_19794);
return statearr_19850;
})();var statearr_19851_19873 = state_19829__$1;(statearr_19851_19873[2] = null);
(statearr_19851_19873[1] = 2);
return cljs.core.constant$keyword$71;
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
}
});})(c__6136__auto___19859,out))
;return ((function (switch__6072__auto__,c__6136__auto___19859,out){
return (function() {
var state_machine__6073__auto__ = null;
var state_machine__6073__auto____0 = (function (){var statearr_19855 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19855[0] = state_machine__6073__auto__);
(statearr_19855[1] = 1);
return statearr_19855;
});
var state_machine__6073__auto____1 = (function (state_19829){while(true){
var ret_value__6074__auto__ = (function (){try{while(true){
var result__6075__auto__ = switch__6072__auto__(state_19829);if(cljs.core.keyword_identical_QMARK_(result__6075__auto__,cljs.core.constant$keyword$71))
{{
continue;
}
} else
{return result__6075__auto__;
}
break;
}
}catch (e19856){if((e19856 instanceof Object))
{var ex__6076__auto__ = e19856;var statearr_19857_19874 = state_19829;(statearr_19857_19874[5] = ex__6076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19829);
return cljs.core.constant$keyword$71;
} else
{if(cljs.core.constant$keyword$60)
{throw e19856;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6074__auto__,cljs.core.constant$keyword$71))
{{
var G__19875 = state_19829;
state_19829 = G__19875;
continue;
}
} else
{return ret_value__6074__auto__;
}
break;
}
});
state_machine__6073__auto__ = function(state_19829){
switch(arguments.length){
case 0:
return state_machine__6073__auto____0.call(this);
case 1:
return state_machine__6073__auto____1.call(this,state_19829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6073__auto____0;
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6073__auto____1;
return state_machine__6073__auto__;
})()
;})(switch__6072__auto__,c__6136__auto___19859,out))
})();var state__6138__auto__ = (function (){var statearr_19858 = (f__6137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6137__auto__.cljs$core$IFn$_invoke$arity$0() : f__6137__auto__.call(null));(statearr_19858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6136__auto___19859);
return statearr_19858;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6138__auto__);
});})(c__6136__auto___19859,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6136__auto___20018 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6136__auto___20018,out){
return (function (){var f__6137__auto__ = (function (){var switch__6072__auto__ = ((function (c__6136__auto___20018,out){
return (function (state_19988){var state_val_19989 = (state_19988[1]);if((state_val_19989 === 7))
{var inst_19984 = (state_19988[2]);var state_19988__$1 = state_19988;var statearr_19990_20019 = state_19988__$1;(statearr_19990_20019[2] = inst_19984);
(statearr_19990_20019[1] = 3);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19989 === 1))
{var inst_19947 = [];var inst_19948 = inst_19947;var inst_19949 = cljs.core.constant$keyword$84;var state_19988__$1 = (function (){var statearr_19991 = state_19988;(statearr_19991[7] = inst_19948);
(statearr_19991[8] = inst_19949);
return statearr_19991;
})();var statearr_19992_20020 = state_19988__$1;(statearr_19992_20020[2] = null);
(statearr_19992_20020[1] = 2);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19989 === 4))
{var inst_19952 = (state_19988[9]);var inst_19952__$1 = (state_19988[2]);var inst_19953 = (inst_19952__$1 == null);var inst_19954 = cljs.core.not(inst_19953);var state_19988__$1 = (function (){var statearr_19993 = state_19988;(statearr_19993[9] = inst_19952__$1);
return statearr_19993;
})();if(inst_19954)
{var statearr_19994_20021 = state_19988__$1;(statearr_19994_20021[1] = 5);
} else
{var statearr_19995_20022 = state_19988__$1;(statearr_19995_20022[1] = 6);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_19989 === 15))
{var inst_19978 = (state_19988[2]);var state_19988__$1 = state_19988;var statearr_19996_20023 = state_19988__$1;(statearr_19996_20023[2] = inst_19978);
(statearr_19996_20023[1] = 14);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19989 === 13))
{var state_19988__$1 = state_19988;var statearr_19997_20024 = state_19988__$1;(statearr_19997_20024[2] = null);
(statearr_19997_20024[1] = 14);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19989 === 6))
{var inst_19948 = (state_19988[7]);var inst_19973 = inst_19948.length;var inst_19974 = (inst_19973 > 0);var state_19988__$1 = state_19988;if(cljs.core.truth_(inst_19974))
{var statearr_19998_20025 = state_19988__$1;(statearr_19998_20025[1] = 12);
} else
{var statearr_19999_20026 = state_19988__$1;(statearr_19999_20026[1] = 13);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_19989 === 3))
{var inst_19986 = (state_19988[2]);var state_19988__$1 = state_19988;return cljs.core.async.impl.ioc_helpers.return_chan(state_19988__$1,inst_19986);
} else
{if((state_val_19989 === 12))
{var inst_19948 = (state_19988[7]);var inst_19976 = cljs.core.vec(inst_19948);var state_19988__$1 = state_19988;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19988__$1,15,out,inst_19976);
} else
{if((state_val_19989 === 2))
{var state_19988__$1 = state_19988;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19988__$1,4,ch);
} else
{if((state_val_19989 === 11))
{var inst_19952 = (state_19988[9]);var inst_19956 = (state_19988[10]);var inst_19966 = (state_19988[2]);var inst_19967 = [];var inst_19968 = inst_19967.push(inst_19952);var inst_19948 = inst_19967;var inst_19949 = inst_19956;var state_19988__$1 = (function (){var statearr_20000 = state_19988;(statearr_20000[7] = inst_19948);
(statearr_20000[11] = inst_19966);
(statearr_20000[8] = inst_19949);
(statearr_20000[12] = inst_19968);
return statearr_20000;
})();var statearr_20001_20027 = state_19988__$1;(statearr_20001_20027[2] = null);
(statearr_20001_20027[1] = 2);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19989 === 9))
{var inst_19948 = (state_19988[7]);var inst_19964 = cljs.core.vec(inst_19948);var state_19988__$1 = state_19988;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19988__$1,11,out,inst_19964);
} else
{if((state_val_19989 === 5))
{var inst_19952 = (state_19988[9]);var inst_19949 = (state_19988[8]);var inst_19956 = (state_19988[10]);var inst_19956__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19952) : f.call(null,inst_19952));var inst_19957 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19956__$1,inst_19949);var inst_19958 = cljs.core.keyword_identical_QMARK_(inst_19949,cljs.core.constant$keyword$84);var inst_19959 = (inst_19957) || (inst_19958);var state_19988__$1 = (function (){var statearr_20002 = state_19988;(statearr_20002[10] = inst_19956__$1);
return statearr_20002;
})();if(cljs.core.truth_(inst_19959))
{var statearr_20003_20028 = state_19988__$1;(statearr_20003_20028[1] = 8);
} else
{var statearr_20004_20029 = state_19988__$1;(statearr_20004_20029[1] = 9);
}
return cljs.core.constant$keyword$71;
} else
{if((state_val_19989 === 14))
{var inst_19981 = (state_19988[2]);var inst_19982 = cljs.core.async.close_BANG_(out);var state_19988__$1 = (function (){var statearr_20006 = state_19988;(statearr_20006[13] = inst_19981);
return statearr_20006;
})();var statearr_20007_20030 = state_19988__$1;(statearr_20007_20030[2] = inst_19982);
(statearr_20007_20030[1] = 7);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19989 === 10))
{var inst_19971 = (state_19988[2]);var state_19988__$1 = state_19988;var statearr_20008_20031 = state_19988__$1;(statearr_20008_20031[2] = inst_19971);
(statearr_20008_20031[1] = 7);
return cljs.core.constant$keyword$71;
} else
{if((state_val_19989 === 8))
{var inst_19952 = (state_19988[9]);var inst_19948 = (state_19988[7]);var inst_19956 = (state_19988[10]);var inst_19961 = inst_19948.push(inst_19952);var tmp20005 = inst_19948;var inst_19948__$1 = tmp20005;var inst_19949 = inst_19956;var state_19988__$1 = (function (){var statearr_20009 = state_19988;(statearr_20009[7] = inst_19948__$1);
(statearr_20009[14] = inst_19961);
(statearr_20009[8] = inst_19949);
return statearr_20009;
})();var statearr_20010_20032 = state_19988__$1;(statearr_20010_20032[2] = null);
(statearr_20010_20032[1] = 2);
return cljs.core.constant$keyword$71;
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
}
});})(c__6136__auto___20018,out))
;return ((function (switch__6072__auto__,c__6136__auto___20018,out){
return (function() {
var state_machine__6073__auto__ = null;
var state_machine__6073__auto____0 = (function (){var statearr_20014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20014[0] = state_machine__6073__auto__);
(statearr_20014[1] = 1);
return statearr_20014;
});
var state_machine__6073__auto____1 = (function (state_19988){while(true){
var ret_value__6074__auto__ = (function (){try{while(true){
var result__6075__auto__ = switch__6072__auto__(state_19988);if(cljs.core.keyword_identical_QMARK_(result__6075__auto__,cljs.core.constant$keyword$71))
{{
continue;
}
} else
{return result__6075__auto__;
}
break;
}
}catch (e20015){if((e20015 instanceof Object))
{var ex__6076__auto__ = e20015;var statearr_20016_20033 = state_19988;(statearr_20016_20033[5] = ex__6076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19988);
return cljs.core.constant$keyword$71;
} else
{if(cljs.core.constant$keyword$60)
{throw e20015;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6074__auto__,cljs.core.constant$keyword$71))
{{
var G__20034 = state_19988;
state_19988 = G__20034;
continue;
}
} else
{return ret_value__6074__auto__;
}
break;
}
});
state_machine__6073__auto__ = function(state_19988){
switch(arguments.length){
case 0:
return state_machine__6073__auto____0.call(this);
case 1:
return state_machine__6073__auto____1.call(this,state_19988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6073__auto____0;
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6073__auto____1;
return state_machine__6073__auto__;
})()
;})(switch__6072__auto__,c__6136__auto___20018,out))
})();var state__6138__auto__ = (function (){var statearr_20017 = (f__6137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6137__auto__.cljs$core$IFn$_invoke$arity$0() : f__6137__auto__.call(null));(statearr_20017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6136__auto___20018);
return statearr_20017;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6138__auto__);
});})(c__6136__auto___20018,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

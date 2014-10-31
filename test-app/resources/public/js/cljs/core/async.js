// Compiled by ClojureScript 0.0-2371
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10988 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10988 = (function (f,fn_handler,meta10989){
this.f = f;
this.fn_handler = fn_handler;
this.meta10989 = meta10989;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10988.cljs$lang$type = true;
cljs.core.async.t10988.cljs$lang$ctorStr = "cljs.core.async/t10988";
cljs.core.async.t10988.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t10988");
});
cljs.core.async.t10988.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10988.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10988.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10988.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10990){var self__ = this;
var _10990__$1 = this;return self__.meta10989;
});
cljs.core.async.t10988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10990,meta10989__$1){var self__ = this;
var _10990__$1 = this;return (new cljs.core.async.t10988(self__.f,self__.fn_handler,meta10989__$1));
});
cljs.core.async.__GT_t10988 = (function __GT_t10988(f__$1,fn_handler__$1,meta10989){return (new cljs.core.async.t10988(f__$1,fn_handler__$1,meta10989));
});
}
return (new cljs.core.async.t10988(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10992 = buff;if(G__10992)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__10992.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10992.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10992);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10992);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_10993 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10993);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_10993,ret){
return (function (){return fn1.call(null,val_10993);
});})(val_10993,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
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
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4510__auto___10994 = n;var x_10995 = (0);while(true){
if((x_10995 < n__4510__auto___10994))
{(a[x_10995] = (0));
{
var G__10996 = (x_10995 + (1));
x_10995 = G__10996;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10997 = (i + (1));
i = G__10997;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11001 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11001 = (function (flag,alt_flag,meta11002){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11002 = meta11002;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11001.cljs$lang$type = true;
cljs.core.async.t11001.cljs$lang$ctorStr = "cljs.core.async/t11001";
cljs.core.async.t11001.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t11001");
});})(flag))
;
cljs.core.async.t11001.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11001.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11001.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11001.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11003){var self__ = this;
var _11003__$1 = this;return self__.meta11002;
});})(flag))
;
cljs.core.async.t11001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11003,meta11002__$1){var self__ = this;
var _11003__$1 = this;return (new cljs.core.async.t11001(self__.flag,self__.alt_flag,meta11002__$1));
});})(flag))
;
cljs.core.async.__GT_t11001 = ((function (flag){
return (function __GT_t11001(flag__$1,alt_flag__$1,meta11002){return (new cljs.core.async.t11001(flag__$1,alt_flag__$1,meta11002));
});})(flag))
;
}
return (new cljs.core.async.t11001(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11007 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11007 = (function (cb,flag,alt_handler,meta11008){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11008 = meta11008;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11007.cljs$lang$type = true;
cljs.core.async.t11007.cljs$lang$ctorStr = "cljs.core.async/t11007";
cljs.core.async.t11007.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t11007");
});
cljs.core.async.t11007.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11007.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11007.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11009){var self__ = this;
var _11009__$1 = this;return self__.meta11008;
});
cljs.core.async.t11007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11009,meta11008__$1){var self__ = this;
var _11009__$1 = this;return (new cljs.core.async.t11007(self__.cb,self__.flag,self__.alt_handler,meta11008__$1));
});
cljs.core.async.__GT_t11007 = (function __GT_t11007(cb__$1,flag__$1,alt_handler__$1,meta11008){return (new cljs.core.async.t11007(cb__$1,flag__$1,alt_handler__$1,meta11008));
});
}
return (new cljs.core.async.t11007(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11010_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11010_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11011_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11011_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3640__auto__ = wport;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11012 = (i + (1));
i = G__11012;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3640__auto__ = ret;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3628__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3628__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3628__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var alts_BANG___delegate = function (ports,p__11013){var map__11015 = p__11013;var map__11015__$1 = ((cljs.core.seq_QMARK_.call(null,map__11015))?cljs.core.apply.call(null,cljs.core.hash_map,map__11015):map__11015);var opts = map__11015__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__11013 = null;if (arguments.length > 1) {
  p__11013 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11013);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11016){
var ports = cljs.core.first(arglist__11016);
var p__11013 = cljs.core.rest(arglist__11016);
return alts_BANG___delegate(ports,p__11013);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
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
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6379__auto___11111 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6379__auto___11111){
return (function (){var f__6380__auto__ = (function (){var switch__6323__auto__ = ((function (c__6379__auto___11111){
return (function (state_11087){var state_val_11088 = (state_11087[(1)]);if((state_val_11088 === (7)))
{var inst_11083 = (state_11087[(2)]);var state_11087__$1 = state_11087;var statearr_11089_11112 = state_11087__$1;(statearr_11089_11112[(2)] = inst_11083);
(statearr_11089_11112[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11088 === (1)))
{var state_11087__$1 = state_11087;var statearr_11090_11113 = state_11087__$1;(statearr_11090_11113[(2)] = null);
(statearr_11090_11113[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11088 === (4)))
{var inst_11066 = (state_11087[(7)]);var inst_11066__$1 = (state_11087[(2)]);var inst_11067 = (inst_11066__$1 == null);var state_11087__$1 = (function (){var statearr_11091 = state_11087;(statearr_11091[(7)] = inst_11066__$1);
return statearr_11091;
})();if(cljs.core.truth_(inst_11067))
{var statearr_11092_11114 = state_11087__$1;(statearr_11092_11114[(1)] = (5));
} else
{var statearr_11093_11115 = state_11087__$1;(statearr_11093_11115[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11088 === (13)))
{var state_11087__$1 = state_11087;var statearr_11094_11116 = state_11087__$1;(statearr_11094_11116[(2)] = null);
(statearr_11094_11116[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11088 === (6)))
{var inst_11066 = (state_11087[(7)]);var state_11087__$1 = state_11087;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11087__$1,(11),to,inst_11066);
} else
{if((state_val_11088 === (3)))
{var inst_11085 = (state_11087[(2)]);var state_11087__$1 = state_11087;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11087__$1,inst_11085);
} else
{if((state_val_11088 === (12)))
{var state_11087__$1 = state_11087;var statearr_11095_11117 = state_11087__$1;(statearr_11095_11117[(2)] = null);
(statearr_11095_11117[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11088 === (2)))
{var state_11087__$1 = state_11087;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11087__$1,(4),from);
} else
{if((state_val_11088 === (11)))
{var inst_11076 = (state_11087[(2)]);var state_11087__$1 = state_11087;if(cljs.core.truth_(inst_11076))
{var statearr_11096_11118 = state_11087__$1;(statearr_11096_11118[(1)] = (12));
} else
{var statearr_11097_11119 = state_11087__$1;(statearr_11097_11119[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11088 === (9)))
{var state_11087__$1 = state_11087;var statearr_11098_11120 = state_11087__$1;(statearr_11098_11120[(2)] = null);
(statearr_11098_11120[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11088 === (5)))
{var state_11087__$1 = state_11087;if(cljs.core.truth_(close_QMARK_))
{var statearr_11099_11121 = state_11087__$1;(statearr_11099_11121[(1)] = (8));
} else
{var statearr_11100_11122 = state_11087__$1;(statearr_11100_11122[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11088 === (14)))
{var inst_11081 = (state_11087[(2)]);var state_11087__$1 = state_11087;var statearr_11101_11123 = state_11087__$1;(statearr_11101_11123[(2)] = inst_11081);
(statearr_11101_11123[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11088 === (10)))
{var inst_11073 = (state_11087[(2)]);var state_11087__$1 = state_11087;var statearr_11102_11124 = state_11087__$1;(statearr_11102_11124[(2)] = inst_11073);
(statearr_11102_11124[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11088 === (8)))
{var inst_11070 = cljs.core.async.close_BANG_.call(null,to);var state_11087__$1 = state_11087;var statearr_11103_11125 = state_11087__$1;(statearr_11103_11125[(2)] = inst_11070);
(statearr_11103_11125[(1)] = (10));
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
});})(c__6379__auto___11111))
;return ((function (switch__6323__auto__,c__6379__auto___11111){
return (function() {
var state_machine__6324__auto__ = null;
var state_machine__6324__auto____0 = (function (){var statearr_11107 = [null,null,null,null,null,null,null,null];(statearr_11107[(0)] = state_machine__6324__auto__);
(statearr_11107[(1)] = (1));
return statearr_11107;
});
var state_machine__6324__auto____1 = (function (state_11087){while(true){
var ret_value__6325__auto__ = (function (){try{while(true){
var result__6326__auto__ = switch__6323__auto__.call(null,state_11087);if(cljs.core.keyword_identical_QMARK_.call(null,result__6326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6326__auto__;
}
break;
}
}catch (e11108){if((e11108 instanceof Object))
{var ex__6327__auto__ = e11108;var statearr_11109_11126 = state_11087;(statearr_11109_11126[(5)] = ex__6327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11087);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11108;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11127 = state_11087;
state_11087 = G__11127;
continue;
}
} else
{return ret_value__6325__auto__;
}
break;
}
});
state_machine__6324__auto__ = function(state_11087){
switch(arguments.length){
case 0:
return state_machine__6324__auto____0.call(this);
case 1:
return state_machine__6324__auto____1.call(this,state_11087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6324__auto____0;
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6324__auto____1;
return state_machine__6324__auto__;
})()
;})(switch__6323__auto__,c__6379__auto___11111))
})();var state__6381__auto__ = (function (){var statearr_11110 = f__6380__auto__.call(null);(statearr_11110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6379__auto___11111);
return statearr_11110;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6381__auto__);
});})(c__6379__auto___11111))
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
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__11311){var vec__11312 = p__11311;var v = cljs.core.nth.call(null,vec__11312,(0),null);var p = cljs.core.nth.call(null,vec__11312,(1),null);var job = vec__11312;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__6379__auto___11494 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6379__auto___11494,res,vec__11312,v,p,job,jobs,results){
return (function (){var f__6380__auto__ = (function (){var switch__6323__auto__ = ((function (c__6379__auto___11494,res,vec__11312,v,p,job,jobs,results){
return (function (state_11317){var state_val_11318 = (state_11317[(1)]);if((state_val_11318 === (2)))
{var inst_11314 = (state_11317[(2)]);var inst_11315 = cljs.core.async.close_BANG_.call(null,res);var state_11317__$1 = (function (){var statearr_11319 = state_11317;(statearr_11319[(7)] = inst_11314);
return statearr_11319;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11317__$1,inst_11315);
} else
{if((state_val_11318 === (1)))
{var state_11317__$1 = state_11317;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11317__$1,(2),res,v);
} else
{return null;
}
}
});})(c__6379__auto___11494,res,vec__11312,v,p,job,jobs,results))
;return ((function (switch__6323__auto__,c__6379__auto___11494,res,vec__11312,v,p,job,jobs,results){
return (function() {
var state_machine__6324__auto__ = null;
var state_machine__6324__auto____0 = (function (){var statearr_11323 = [null,null,null,null,null,null,null,null];(statearr_11323[(0)] = state_machine__6324__auto__);
(statearr_11323[(1)] = (1));
return statearr_11323;
});
var state_machine__6324__auto____1 = (function (state_11317){while(true){
var ret_value__6325__auto__ = (function (){try{while(true){
var result__6326__auto__ = switch__6323__auto__.call(null,state_11317);if(cljs.core.keyword_identical_QMARK_.call(null,result__6326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6326__auto__;
}
break;
}
}catch (e11324){if((e11324 instanceof Object))
{var ex__6327__auto__ = e11324;var statearr_11325_11495 = state_11317;(statearr_11325_11495[(5)] = ex__6327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11317);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11324;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11496 = state_11317;
state_11317 = G__11496;
continue;
}
} else
{return ret_value__6325__auto__;
}
break;
}
});
state_machine__6324__auto__ = function(state_11317){
switch(arguments.length){
case 0:
return state_machine__6324__auto____0.call(this);
case 1:
return state_machine__6324__auto____1.call(this,state_11317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6324__auto____0;
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6324__auto____1;
return state_machine__6324__auto__;
})()
;})(switch__6323__auto__,c__6379__auto___11494,res,vec__11312,v,p,job,jobs,results))
})();var state__6381__auto__ = (function (){var statearr_11326 = f__6380__auto__.call(null);(statearr_11326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6379__auto___11494);
return statearr_11326;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6381__auto__);
});})(c__6379__auto___11494,res,vec__11312,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__11327){var vec__11328 = p__11327;var v = cljs.core.nth.call(null,vec__11328,(0),null);var p = cljs.core.nth.call(null,vec__11328,(1),null);var job = vec__11328;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4510__auto___11497 = n;var __11498 = (0);while(true){
if((__11498 < n__4510__auto___11497))
{var G__11329_11499 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__11329_11499) {
case "async":
var c__6379__auto___11501 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__11498,c__6379__auto___11501,G__11329_11499,n__4510__auto___11497,jobs,results,process,async){
return (function (){var f__6380__auto__ = (function (){var switch__6323__auto__ = ((function (__11498,c__6379__auto___11501,G__11329_11499,n__4510__auto___11497,jobs,results,process,async){
return (function (state_11342){var state_val_11343 = (state_11342[(1)]);if((state_val_11343 === (7)))
{var inst_11338 = (state_11342[(2)]);var state_11342__$1 = state_11342;var statearr_11344_11502 = state_11342__$1;(statearr_11344_11502[(2)] = inst_11338);
(statearr_11344_11502[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11343 === (6)))
{var state_11342__$1 = state_11342;var statearr_11345_11503 = state_11342__$1;(statearr_11345_11503[(2)] = null);
(statearr_11345_11503[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11343 === (5)))
{var state_11342__$1 = state_11342;var statearr_11346_11504 = state_11342__$1;(statearr_11346_11504[(2)] = null);
(statearr_11346_11504[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11343 === (4)))
{var inst_11332 = (state_11342[(2)]);var inst_11333 = async.call(null,inst_11332);var state_11342__$1 = state_11342;if(cljs.core.truth_(inst_11333))
{var statearr_11347_11505 = state_11342__$1;(statearr_11347_11505[(1)] = (5));
} else
{var statearr_11348_11506 = state_11342__$1;(statearr_11348_11506[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11343 === (3)))
{var inst_11340 = (state_11342[(2)]);var state_11342__$1 = state_11342;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11342__$1,inst_11340);
} else
{if((state_val_11343 === (2)))
{var state_11342__$1 = state_11342;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11342__$1,(4),jobs);
} else
{if((state_val_11343 === (1)))
{var state_11342__$1 = state_11342;var statearr_11349_11507 = state_11342__$1;(statearr_11349_11507[(2)] = null);
(statearr_11349_11507[(1)] = (2));
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
});})(__11498,c__6379__auto___11501,G__11329_11499,n__4510__auto___11497,jobs,results,process,async))
;return ((function (__11498,switch__6323__auto__,c__6379__auto___11501,G__11329_11499,n__4510__auto___11497,jobs,results,process,async){
return (function() {
var state_machine__6324__auto__ = null;
var state_machine__6324__auto____0 = (function (){var statearr_11353 = [null,null,null,null,null,null,null];(statearr_11353[(0)] = state_machine__6324__auto__);
(statearr_11353[(1)] = (1));
return statearr_11353;
});
var state_machine__6324__auto____1 = (function (state_11342){while(true){
var ret_value__6325__auto__ = (function (){try{while(true){
var result__6326__auto__ = switch__6323__auto__.call(null,state_11342);if(cljs.core.keyword_identical_QMARK_.call(null,result__6326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6326__auto__;
}
break;
}
}catch (e11354){if((e11354 instanceof Object))
{var ex__6327__auto__ = e11354;var statearr_11355_11508 = state_11342;(statearr_11355_11508[(5)] = ex__6327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11342);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11354;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11509 = state_11342;
state_11342 = G__11509;
continue;
}
} else
{return ret_value__6325__auto__;
}
break;
}
});
state_machine__6324__auto__ = function(state_11342){
switch(arguments.length){
case 0:
return state_machine__6324__auto____0.call(this);
case 1:
return state_machine__6324__auto____1.call(this,state_11342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6324__auto____0;
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6324__auto____1;
return state_machine__6324__auto__;
})()
;})(__11498,switch__6323__auto__,c__6379__auto___11501,G__11329_11499,n__4510__auto___11497,jobs,results,process,async))
})();var state__6381__auto__ = (function (){var statearr_11356 = f__6380__auto__.call(null);(statearr_11356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6379__auto___11501);
return statearr_11356;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6381__auto__);
});})(__11498,c__6379__auto___11501,G__11329_11499,n__4510__auto___11497,jobs,results,process,async))
);

break;
case "compute":
var c__6379__auto___11510 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__11498,c__6379__auto___11510,G__11329_11499,n__4510__auto___11497,jobs,results,process,async){
return (function (){var f__6380__auto__ = (function (){var switch__6323__auto__ = ((function (__11498,c__6379__auto___11510,G__11329_11499,n__4510__auto___11497,jobs,results,process,async){
return (function (state_11369){var state_val_11370 = (state_11369[(1)]);if((state_val_11370 === (7)))
{var inst_11365 = (state_11369[(2)]);var state_11369__$1 = state_11369;var statearr_11371_11511 = state_11369__$1;(statearr_11371_11511[(2)] = inst_11365);
(statearr_11371_11511[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11370 === (6)))
{var state_11369__$1 = state_11369;var statearr_11372_11512 = state_11369__$1;(statearr_11372_11512[(2)] = null);
(statearr_11372_11512[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11370 === (5)))
{var state_11369__$1 = state_11369;var statearr_11373_11513 = state_11369__$1;(statearr_11373_11513[(2)] = null);
(statearr_11373_11513[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11370 === (4)))
{var inst_11359 = (state_11369[(2)]);var inst_11360 = process.call(null,inst_11359);var state_11369__$1 = state_11369;if(cljs.core.truth_(inst_11360))
{var statearr_11374_11514 = state_11369__$1;(statearr_11374_11514[(1)] = (5));
} else
{var statearr_11375_11515 = state_11369__$1;(statearr_11375_11515[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11370 === (3)))
{var inst_11367 = (state_11369[(2)]);var state_11369__$1 = state_11369;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11369__$1,inst_11367);
} else
{if((state_val_11370 === (2)))
{var state_11369__$1 = state_11369;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11369__$1,(4),jobs);
} else
{if((state_val_11370 === (1)))
{var state_11369__$1 = state_11369;var statearr_11376_11516 = state_11369__$1;(statearr_11376_11516[(2)] = null);
(statearr_11376_11516[(1)] = (2));
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
});})(__11498,c__6379__auto___11510,G__11329_11499,n__4510__auto___11497,jobs,results,process,async))
;return ((function (__11498,switch__6323__auto__,c__6379__auto___11510,G__11329_11499,n__4510__auto___11497,jobs,results,process,async){
return (function() {
var state_machine__6324__auto__ = null;
var state_machine__6324__auto____0 = (function (){var statearr_11380 = [null,null,null,null,null,null,null];(statearr_11380[(0)] = state_machine__6324__auto__);
(statearr_11380[(1)] = (1));
return statearr_11380;
});
var state_machine__6324__auto____1 = (function (state_11369){while(true){
var ret_value__6325__auto__ = (function (){try{while(true){
var result__6326__auto__ = switch__6323__auto__.call(null,state_11369);if(cljs.core.keyword_identical_QMARK_.call(null,result__6326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6326__auto__;
}
break;
}
}catch (e11381){if((e11381 instanceof Object))
{var ex__6327__auto__ = e11381;var statearr_11382_11517 = state_11369;(statearr_11382_11517[(5)] = ex__6327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11369);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11381;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11518 = state_11369;
state_11369 = G__11518;
continue;
}
} else
{return ret_value__6325__auto__;
}
break;
}
});
state_machine__6324__auto__ = function(state_11369){
switch(arguments.length){
case 0:
return state_machine__6324__auto____0.call(this);
case 1:
return state_machine__6324__auto____1.call(this,state_11369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6324__auto____0;
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6324__auto____1;
return state_machine__6324__auto__;
})()
;})(__11498,switch__6323__auto__,c__6379__auto___11510,G__11329_11499,n__4510__auto___11497,jobs,results,process,async))
})();var state__6381__auto__ = (function (){var statearr_11383 = f__6380__auto__.call(null);(statearr_11383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6379__auto___11510);
return statearr_11383;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6381__auto__);
});})(__11498,c__6379__auto___11510,G__11329_11499,n__4510__auto___11497,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__11519 = (__11498 + (1));
__11498 = G__11519;
continue;
}
} else
{}
break;
}
var c__6379__auto___11520 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6379__auto___11520,jobs,results,process,async){
return (function (){var f__6380__auto__ = (function (){var switch__6323__auto__ = ((function (c__6379__auto___11520,jobs,results,process,async){
return (function (state_11405){var state_val_11406 = (state_11405[(1)]);if((state_val_11406 === (9)))
{var inst_11398 = (state_11405[(2)]);var state_11405__$1 = (function (){var statearr_11407 = state_11405;(statearr_11407[(7)] = inst_11398);
return statearr_11407;
})();var statearr_11408_11521 = state_11405__$1;(statearr_11408_11521[(2)] = null);
(statearr_11408_11521[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11406 === (8)))
{var inst_11391 = (state_11405[(8)]);var inst_11396 = (state_11405[(2)]);var state_11405__$1 = (function (){var statearr_11409 = state_11405;(statearr_11409[(9)] = inst_11396);
return statearr_11409;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11405__$1,(9),results,inst_11391);
} else
{if((state_val_11406 === (7)))
{var inst_11401 = (state_11405[(2)]);var state_11405__$1 = state_11405;var statearr_11410_11522 = state_11405__$1;(statearr_11410_11522[(2)] = inst_11401);
(statearr_11410_11522[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11406 === (6)))
{var inst_11391 = (state_11405[(8)]);var inst_11386 = (state_11405[(10)]);var inst_11391__$1 = cljs.core.async.chan.call(null,(1));var inst_11392 = cljs.core.PersistentVector.EMPTY_NODE;var inst_11393 = [inst_11386,inst_11391__$1];var inst_11394 = (new cljs.core.PersistentVector(null,2,(5),inst_11392,inst_11393,null));var state_11405__$1 = (function (){var statearr_11411 = state_11405;(statearr_11411[(8)] = inst_11391__$1);
return statearr_11411;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11405__$1,(8),jobs,inst_11394);
} else
{if((state_val_11406 === (5)))
{var inst_11389 = cljs.core.async.close_BANG_.call(null,jobs);var state_11405__$1 = state_11405;var statearr_11412_11523 = state_11405__$1;(statearr_11412_11523[(2)] = inst_11389);
(statearr_11412_11523[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11406 === (4)))
{var inst_11386 = (state_11405[(10)]);var inst_11386__$1 = (state_11405[(2)]);var inst_11387 = (inst_11386__$1 == null);var state_11405__$1 = (function (){var statearr_11413 = state_11405;(statearr_11413[(10)] = inst_11386__$1);
return statearr_11413;
})();if(cljs.core.truth_(inst_11387))
{var statearr_11414_11524 = state_11405__$1;(statearr_11414_11524[(1)] = (5));
} else
{var statearr_11415_11525 = state_11405__$1;(statearr_11415_11525[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11406 === (3)))
{var inst_11403 = (state_11405[(2)]);var state_11405__$1 = state_11405;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11405__$1,inst_11403);
} else
{if((state_val_11406 === (2)))
{var state_11405__$1 = state_11405;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11405__$1,(4),from);
} else
{if((state_val_11406 === (1)))
{var state_11405__$1 = state_11405;var statearr_11416_11526 = state_11405__$1;(statearr_11416_11526[(2)] = null);
(statearr_11416_11526[(1)] = (2));
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
});})(c__6379__auto___11520,jobs,results,process,async))
;return ((function (switch__6323__auto__,c__6379__auto___11520,jobs,results,process,async){
return (function() {
var state_machine__6324__auto__ = null;
var state_machine__6324__auto____0 = (function (){var statearr_11420 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11420[(0)] = state_machine__6324__auto__);
(statearr_11420[(1)] = (1));
return statearr_11420;
});
var state_machine__6324__auto____1 = (function (state_11405){while(true){
var ret_value__6325__auto__ = (function (){try{while(true){
var result__6326__auto__ = switch__6323__auto__.call(null,state_11405);if(cljs.core.keyword_identical_QMARK_.call(null,result__6326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6326__auto__;
}
break;
}
}catch (e11421){if((e11421 instanceof Object))
{var ex__6327__auto__ = e11421;var statearr_11422_11527 = state_11405;(statearr_11422_11527[(5)] = ex__6327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11405);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11421;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11528 = state_11405;
state_11405 = G__11528;
continue;
}
} else
{return ret_value__6325__auto__;
}
break;
}
});
state_machine__6324__auto__ = function(state_11405){
switch(arguments.length){
case 0:
return state_machine__6324__auto____0.call(this);
case 1:
return state_machine__6324__auto____1.call(this,state_11405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6324__auto____0;
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6324__auto____1;
return state_machine__6324__auto__;
})()
;})(switch__6323__auto__,c__6379__auto___11520,jobs,results,process,async))
})();var state__6381__auto__ = (function (){var statearr_11423 = f__6380__auto__.call(null);(statearr_11423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6379__auto___11520);
return statearr_11423;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6381__auto__);
});})(c__6379__auto___11520,jobs,results,process,async))
);
var c__6379__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6379__auto__,jobs,results,process,async){
return (function (){var f__6380__auto__ = (function (){var switch__6323__auto__ = ((function (c__6379__auto__,jobs,results,process,async){
return (function (state_11461){var state_val_11462 = (state_11461[(1)]);if((state_val_11462 === (7)))
{var inst_11457 = (state_11461[(2)]);var state_11461__$1 = state_11461;var statearr_11463_11529 = state_11461__$1;(statearr_11463_11529[(2)] = inst_11457);
(statearr_11463_11529[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11462 === (20)))
{var state_11461__$1 = state_11461;var statearr_11464_11530 = state_11461__$1;(statearr_11464_11530[(2)] = null);
(statearr_11464_11530[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11462 === (1)))
{var state_11461__$1 = state_11461;var statearr_11465_11531 = state_11461__$1;(statearr_11465_11531[(2)] = null);
(statearr_11465_11531[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11462 === (4)))
{var inst_11426 = (state_11461[(7)]);var inst_11426__$1 = (state_11461[(2)]);var inst_11427 = (inst_11426__$1 == null);var state_11461__$1 = (function (){var statearr_11466 = state_11461;(statearr_11466[(7)] = inst_11426__$1);
return statearr_11466;
})();if(cljs.core.truth_(inst_11427))
{var statearr_11467_11532 = state_11461__$1;(statearr_11467_11532[(1)] = (5));
} else
{var statearr_11468_11533 = state_11461__$1;(statearr_11468_11533[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11462 === (15)))
{var inst_11439 = (state_11461[(8)]);var state_11461__$1 = state_11461;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11461__$1,(18),to,inst_11439);
} else
{if((state_val_11462 === (21)))
{var inst_11452 = (state_11461[(2)]);var state_11461__$1 = state_11461;var statearr_11469_11534 = state_11461__$1;(statearr_11469_11534[(2)] = inst_11452);
(statearr_11469_11534[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11462 === (13)))
{var inst_11454 = (state_11461[(2)]);var state_11461__$1 = (function (){var statearr_11470 = state_11461;(statearr_11470[(9)] = inst_11454);
return statearr_11470;
})();var statearr_11471_11535 = state_11461__$1;(statearr_11471_11535[(2)] = null);
(statearr_11471_11535[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11462 === (6)))
{var inst_11426 = (state_11461[(7)]);var state_11461__$1 = state_11461;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11461__$1,(11),inst_11426);
} else
{if((state_val_11462 === (17)))
{var inst_11447 = (state_11461[(2)]);var state_11461__$1 = state_11461;if(cljs.core.truth_(inst_11447))
{var statearr_11472_11536 = state_11461__$1;(statearr_11472_11536[(1)] = (19));
} else
{var statearr_11473_11537 = state_11461__$1;(statearr_11473_11537[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11462 === (3)))
{var inst_11459 = (state_11461[(2)]);var state_11461__$1 = state_11461;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11461__$1,inst_11459);
} else
{if((state_val_11462 === (12)))
{var inst_11436 = (state_11461[(10)]);var state_11461__$1 = state_11461;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11461__$1,(14),inst_11436);
} else
{if((state_val_11462 === (2)))
{var state_11461__$1 = state_11461;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11461__$1,(4),results);
} else
{if((state_val_11462 === (19)))
{var state_11461__$1 = state_11461;var statearr_11474_11538 = state_11461__$1;(statearr_11474_11538[(2)] = null);
(statearr_11474_11538[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11462 === (11)))
{var inst_11436 = (state_11461[(2)]);var state_11461__$1 = (function (){var statearr_11475 = state_11461;(statearr_11475[(10)] = inst_11436);
return statearr_11475;
})();var statearr_11476_11539 = state_11461__$1;(statearr_11476_11539[(2)] = null);
(statearr_11476_11539[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11462 === (9)))
{var state_11461__$1 = state_11461;var statearr_11477_11540 = state_11461__$1;(statearr_11477_11540[(2)] = null);
(statearr_11477_11540[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11462 === (5)))
{var state_11461__$1 = state_11461;if(cljs.core.truth_(close_QMARK_))
{var statearr_11478_11541 = state_11461__$1;(statearr_11478_11541[(1)] = (8));
} else
{var statearr_11479_11542 = state_11461__$1;(statearr_11479_11542[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11462 === (14)))
{var inst_11441 = (state_11461[(11)]);var inst_11439 = (state_11461[(8)]);var inst_11439__$1 = (state_11461[(2)]);var inst_11440 = (inst_11439__$1 == null);var inst_11441__$1 = cljs.core.not.call(null,inst_11440);var state_11461__$1 = (function (){var statearr_11480 = state_11461;(statearr_11480[(11)] = inst_11441__$1);
(statearr_11480[(8)] = inst_11439__$1);
return statearr_11480;
})();if(inst_11441__$1)
{var statearr_11481_11543 = state_11461__$1;(statearr_11481_11543[(1)] = (15));
} else
{var statearr_11482_11544 = state_11461__$1;(statearr_11482_11544[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11462 === (16)))
{var inst_11441 = (state_11461[(11)]);var state_11461__$1 = state_11461;var statearr_11483_11545 = state_11461__$1;(statearr_11483_11545[(2)] = inst_11441);
(statearr_11483_11545[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11462 === (10)))
{var inst_11433 = (state_11461[(2)]);var state_11461__$1 = state_11461;var statearr_11484_11546 = state_11461__$1;(statearr_11484_11546[(2)] = inst_11433);
(statearr_11484_11546[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11462 === (18)))
{var inst_11444 = (state_11461[(2)]);var state_11461__$1 = state_11461;var statearr_11485_11547 = state_11461__$1;(statearr_11485_11547[(2)] = inst_11444);
(statearr_11485_11547[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11462 === (8)))
{var inst_11430 = cljs.core.async.close_BANG_.call(null,to);var state_11461__$1 = state_11461;var statearr_11486_11548 = state_11461__$1;(statearr_11486_11548[(2)] = inst_11430);
(statearr_11486_11548[(1)] = (10));
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
}
}
}
}
}
}
}
});})(c__6379__auto__,jobs,results,process,async))
;return ((function (switch__6323__auto__,c__6379__auto__,jobs,results,process,async){
return (function() {
var state_machine__6324__auto__ = null;
var state_machine__6324__auto____0 = (function (){var statearr_11490 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11490[(0)] = state_machine__6324__auto__);
(statearr_11490[(1)] = (1));
return statearr_11490;
});
var state_machine__6324__auto____1 = (function (state_11461){while(true){
var ret_value__6325__auto__ = (function (){try{while(true){
var result__6326__auto__ = switch__6323__auto__.call(null,state_11461);if(cljs.core.keyword_identical_QMARK_.call(null,result__6326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6326__auto__;
}
break;
}
}catch (e11491){if((e11491 instanceof Object))
{var ex__6327__auto__ = e11491;var statearr_11492_11549 = state_11461;(statearr_11492_11549[(5)] = ex__6327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11461);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11491;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11550 = state_11461;
state_11461 = G__11550;
continue;
}
} else
{return ret_value__6325__auto__;
}
break;
}
});
state_machine__6324__auto__ = function(state_11461){
switch(arguments.length){
case 0:
return state_machine__6324__auto____0.call(this);
case 1:
return state_machine__6324__auto____1.call(this,state_11461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6324__auto____0;
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6324__auto____1;
return state_machine__6324__auto__;
})()
;})(switch__6323__auto__,c__6379__auto__,jobs,results,process,async))
})();var state__6381__auto__ = (function (){var statearr_11493 = f__6380__auto__.call(null);(statearr_11493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6379__auto__);
return statearr_11493;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6381__auto__);
});})(c__6379__auto__,jobs,results,process,async))
);
return c__6379__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
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
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6379__auto___11651 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6379__auto___11651,tc,fc){
return (function (){var f__6380__auto__ = (function (){var switch__6323__auto__ = ((function (c__6379__auto___11651,tc,fc){
return (function (state_11626){var state_val_11627 = (state_11626[(1)]);if((state_val_11627 === (7)))
{var inst_11622 = (state_11626[(2)]);var state_11626__$1 = state_11626;var statearr_11628_11652 = state_11626__$1;(statearr_11628_11652[(2)] = inst_11622);
(statearr_11628_11652[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11627 === (1)))
{var state_11626__$1 = state_11626;var statearr_11629_11653 = state_11626__$1;(statearr_11629_11653[(2)] = null);
(statearr_11629_11653[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11627 === (4)))
{var inst_11603 = (state_11626[(7)]);var inst_11603__$1 = (state_11626[(2)]);var inst_11604 = (inst_11603__$1 == null);var state_11626__$1 = (function (){var statearr_11630 = state_11626;(statearr_11630[(7)] = inst_11603__$1);
return statearr_11630;
})();if(cljs.core.truth_(inst_11604))
{var statearr_11631_11654 = state_11626__$1;(statearr_11631_11654[(1)] = (5));
} else
{var statearr_11632_11655 = state_11626__$1;(statearr_11632_11655[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11627 === (13)))
{var state_11626__$1 = state_11626;var statearr_11633_11656 = state_11626__$1;(statearr_11633_11656[(2)] = null);
(statearr_11633_11656[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11627 === (6)))
{var inst_11603 = (state_11626[(7)]);var inst_11609 = p.call(null,inst_11603);var state_11626__$1 = state_11626;if(cljs.core.truth_(inst_11609))
{var statearr_11634_11657 = state_11626__$1;(statearr_11634_11657[(1)] = (9));
} else
{var statearr_11635_11658 = state_11626__$1;(statearr_11635_11658[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11627 === (3)))
{var inst_11624 = (state_11626[(2)]);var state_11626__$1 = state_11626;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11626__$1,inst_11624);
} else
{if((state_val_11627 === (12)))
{var state_11626__$1 = state_11626;var statearr_11636_11659 = state_11626__$1;(statearr_11636_11659[(2)] = null);
(statearr_11636_11659[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11627 === (2)))
{var state_11626__$1 = state_11626;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11626__$1,(4),ch);
} else
{if((state_val_11627 === (11)))
{var inst_11603 = (state_11626[(7)]);var inst_11613 = (state_11626[(2)]);var state_11626__$1 = state_11626;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11626__$1,(8),inst_11613,inst_11603);
} else
{if((state_val_11627 === (9)))
{var state_11626__$1 = state_11626;var statearr_11637_11660 = state_11626__$1;(statearr_11637_11660[(2)] = tc);
(statearr_11637_11660[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11627 === (5)))
{var inst_11606 = cljs.core.async.close_BANG_.call(null,tc);var inst_11607 = cljs.core.async.close_BANG_.call(null,fc);var state_11626__$1 = (function (){var statearr_11638 = state_11626;(statearr_11638[(8)] = inst_11606);
return statearr_11638;
})();var statearr_11639_11661 = state_11626__$1;(statearr_11639_11661[(2)] = inst_11607);
(statearr_11639_11661[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11627 === (14)))
{var inst_11620 = (state_11626[(2)]);var state_11626__$1 = state_11626;var statearr_11640_11662 = state_11626__$1;(statearr_11640_11662[(2)] = inst_11620);
(statearr_11640_11662[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11627 === (10)))
{var state_11626__$1 = state_11626;var statearr_11641_11663 = state_11626__$1;(statearr_11641_11663[(2)] = fc);
(statearr_11641_11663[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11627 === (8)))
{var inst_11615 = (state_11626[(2)]);var state_11626__$1 = state_11626;if(cljs.core.truth_(inst_11615))
{var statearr_11642_11664 = state_11626__$1;(statearr_11642_11664[(1)] = (12));
} else
{var statearr_11643_11665 = state_11626__$1;(statearr_11643_11665[(1)] = (13));
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
});})(c__6379__auto___11651,tc,fc))
;return ((function (switch__6323__auto__,c__6379__auto___11651,tc,fc){
return (function() {
var state_machine__6324__auto__ = null;
var state_machine__6324__auto____0 = (function (){var statearr_11647 = [null,null,null,null,null,null,null,null,null];(statearr_11647[(0)] = state_machine__6324__auto__);
(statearr_11647[(1)] = (1));
return statearr_11647;
});
var state_machine__6324__auto____1 = (function (state_11626){while(true){
var ret_value__6325__auto__ = (function (){try{while(true){
var result__6326__auto__ = switch__6323__auto__.call(null,state_11626);if(cljs.core.keyword_identical_QMARK_.call(null,result__6326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6326__auto__;
}
break;
}
}catch (e11648){if((e11648 instanceof Object))
{var ex__6327__auto__ = e11648;var statearr_11649_11666 = state_11626;(statearr_11649_11666[(5)] = ex__6327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11626);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11648;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11667 = state_11626;
state_11626 = G__11667;
continue;
}
} else
{return ret_value__6325__auto__;
}
break;
}
});
state_machine__6324__auto__ = function(state_11626){
switch(arguments.length){
case 0:
return state_machine__6324__auto____0.call(this);
case 1:
return state_machine__6324__auto____1.call(this,state_11626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6324__auto____0;
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6324__auto____1;
return state_machine__6324__auto__;
})()
;})(switch__6323__auto__,c__6379__auto___11651,tc,fc))
})();var state__6381__auto__ = (function (){var statearr_11650 = f__6380__auto__.call(null);(statearr_11650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6379__auto___11651);
return statearr_11650;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6381__auto__);
});})(c__6379__auto___11651,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6379__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6379__auto__){
return (function (){var f__6380__auto__ = (function (){var switch__6323__auto__ = ((function (c__6379__auto__){
return (function (state_11714){var state_val_11715 = (state_11714[(1)]);if((state_val_11715 === (7)))
{var inst_11710 = (state_11714[(2)]);var state_11714__$1 = state_11714;var statearr_11716_11732 = state_11714__$1;(statearr_11716_11732[(2)] = inst_11710);
(statearr_11716_11732[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11715 === (6)))
{var inst_11703 = (state_11714[(7)]);var inst_11700 = (state_11714[(8)]);var inst_11707 = f.call(null,inst_11700,inst_11703);var inst_11700__$1 = inst_11707;var state_11714__$1 = (function (){var statearr_11717 = state_11714;(statearr_11717[(8)] = inst_11700__$1);
return statearr_11717;
})();var statearr_11718_11733 = state_11714__$1;(statearr_11718_11733[(2)] = null);
(statearr_11718_11733[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11715 === (5)))
{var inst_11700 = (state_11714[(8)]);var state_11714__$1 = state_11714;var statearr_11719_11734 = state_11714__$1;(statearr_11719_11734[(2)] = inst_11700);
(statearr_11719_11734[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11715 === (4)))
{var inst_11703 = (state_11714[(7)]);var inst_11703__$1 = (state_11714[(2)]);var inst_11704 = (inst_11703__$1 == null);var state_11714__$1 = (function (){var statearr_11720 = state_11714;(statearr_11720[(7)] = inst_11703__$1);
return statearr_11720;
})();if(cljs.core.truth_(inst_11704))
{var statearr_11721_11735 = state_11714__$1;(statearr_11721_11735[(1)] = (5));
} else
{var statearr_11722_11736 = state_11714__$1;(statearr_11722_11736[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11715 === (3)))
{var inst_11712 = (state_11714[(2)]);var state_11714__$1 = state_11714;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11714__$1,inst_11712);
} else
{if((state_val_11715 === (2)))
{var state_11714__$1 = state_11714;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11714__$1,(4),ch);
} else
{if((state_val_11715 === (1)))
{var inst_11700 = init;var state_11714__$1 = (function (){var statearr_11723 = state_11714;(statearr_11723[(8)] = inst_11700);
return statearr_11723;
})();var statearr_11724_11737 = state_11714__$1;(statearr_11724_11737[(2)] = null);
(statearr_11724_11737[(1)] = (2));
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
});})(c__6379__auto__))
;return ((function (switch__6323__auto__,c__6379__auto__){
return (function() {
var state_machine__6324__auto__ = null;
var state_machine__6324__auto____0 = (function (){var statearr_11728 = [null,null,null,null,null,null,null,null,null];(statearr_11728[(0)] = state_machine__6324__auto__);
(statearr_11728[(1)] = (1));
return statearr_11728;
});
var state_machine__6324__auto____1 = (function (state_11714){while(true){
var ret_value__6325__auto__ = (function (){try{while(true){
var result__6326__auto__ = switch__6323__auto__.call(null,state_11714);if(cljs.core.keyword_identical_QMARK_.call(null,result__6326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6326__auto__;
}
break;
}
}catch (e11729){if((e11729 instanceof Object))
{var ex__6327__auto__ = e11729;var statearr_11730_11738 = state_11714;(statearr_11730_11738[(5)] = ex__6327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11714);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11729;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11739 = state_11714;
state_11714 = G__11739;
continue;
}
} else
{return ret_value__6325__auto__;
}
break;
}
});
state_machine__6324__auto__ = function(state_11714){
switch(arguments.length){
case 0:
return state_machine__6324__auto____0.call(this);
case 1:
return state_machine__6324__auto____1.call(this,state_11714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6324__auto____0;
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6324__auto____1;
return state_machine__6324__auto__;
})()
;})(switch__6323__auto__,c__6379__auto__))
})();var state__6381__auto__ = (function (){var statearr_11731 = f__6380__auto__.call(null);(statearr_11731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6379__auto__);
return statearr_11731;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6381__auto__);
});})(c__6379__auto__))
);
return c__6379__auto__;
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
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6379__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6379__auto__){
return (function (){var f__6380__auto__ = (function (){var switch__6323__auto__ = ((function (c__6379__auto__){
return (function (state_11813){var state_val_11814 = (state_11813[(1)]);if((state_val_11814 === (7)))
{var inst_11795 = (state_11813[(2)]);var state_11813__$1 = state_11813;var statearr_11815_11838 = state_11813__$1;(statearr_11815_11838[(2)] = inst_11795);
(statearr_11815_11838[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11814 === (1)))
{var inst_11789 = cljs.core.seq.call(null,coll);var inst_11790 = inst_11789;var state_11813__$1 = (function (){var statearr_11816 = state_11813;(statearr_11816[(7)] = inst_11790);
return statearr_11816;
})();var statearr_11817_11839 = state_11813__$1;(statearr_11817_11839[(2)] = null);
(statearr_11817_11839[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11814 === (4)))
{var inst_11790 = (state_11813[(7)]);var inst_11793 = cljs.core.first.call(null,inst_11790);var state_11813__$1 = state_11813;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11813__$1,(7),ch,inst_11793);
} else
{if((state_val_11814 === (13)))
{var inst_11807 = (state_11813[(2)]);var state_11813__$1 = state_11813;var statearr_11818_11840 = state_11813__$1;(statearr_11818_11840[(2)] = inst_11807);
(statearr_11818_11840[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11814 === (6)))
{var inst_11798 = (state_11813[(2)]);var state_11813__$1 = state_11813;if(cljs.core.truth_(inst_11798))
{var statearr_11819_11841 = state_11813__$1;(statearr_11819_11841[(1)] = (8));
} else
{var statearr_11820_11842 = state_11813__$1;(statearr_11820_11842[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11814 === (3)))
{var inst_11811 = (state_11813[(2)]);var state_11813__$1 = state_11813;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11813__$1,inst_11811);
} else
{if((state_val_11814 === (12)))
{var state_11813__$1 = state_11813;var statearr_11821_11843 = state_11813__$1;(statearr_11821_11843[(2)] = null);
(statearr_11821_11843[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11814 === (2)))
{var inst_11790 = (state_11813[(7)]);var state_11813__$1 = state_11813;if(cljs.core.truth_(inst_11790))
{var statearr_11822_11844 = state_11813__$1;(statearr_11822_11844[(1)] = (4));
} else
{var statearr_11823_11845 = state_11813__$1;(statearr_11823_11845[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11814 === (11)))
{var inst_11804 = cljs.core.async.close_BANG_.call(null,ch);var state_11813__$1 = state_11813;var statearr_11824_11846 = state_11813__$1;(statearr_11824_11846[(2)] = inst_11804);
(statearr_11824_11846[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11814 === (9)))
{var state_11813__$1 = state_11813;if(cljs.core.truth_(close_QMARK_))
{var statearr_11825_11847 = state_11813__$1;(statearr_11825_11847[(1)] = (11));
} else
{var statearr_11826_11848 = state_11813__$1;(statearr_11826_11848[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11814 === (5)))
{var inst_11790 = (state_11813[(7)]);var state_11813__$1 = state_11813;var statearr_11827_11849 = state_11813__$1;(statearr_11827_11849[(2)] = inst_11790);
(statearr_11827_11849[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11814 === (10)))
{var inst_11809 = (state_11813[(2)]);var state_11813__$1 = state_11813;var statearr_11828_11850 = state_11813__$1;(statearr_11828_11850[(2)] = inst_11809);
(statearr_11828_11850[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11814 === (8)))
{var inst_11790 = (state_11813[(7)]);var inst_11800 = cljs.core.next.call(null,inst_11790);var inst_11790__$1 = inst_11800;var state_11813__$1 = (function (){var statearr_11829 = state_11813;(statearr_11829[(7)] = inst_11790__$1);
return statearr_11829;
})();var statearr_11830_11851 = state_11813__$1;(statearr_11830_11851[(2)] = null);
(statearr_11830_11851[(1)] = (2));
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
});})(c__6379__auto__))
;return ((function (switch__6323__auto__,c__6379__auto__){
return (function() {
var state_machine__6324__auto__ = null;
var state_machine__6324__auto____0 = (function (){var statearr_11834 = [null,null,null,null,null,null,null,null];(statearr_11834[(0)] = state_machine__6324__auto__);
(statearr_11834[(1)] = (1));
return statearr_11834;
});
var state_machine__6324__auto____1 = (function (state_11813){while(true){
var ret_value__6325__auto__ = (function (){try{while(true){
var result__6326__auto__ = switch__6323__auto__.call(null,state_11813);if(cljs.core.keyword_identical_QMARK_.call(null,result__6326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6326__auto__;
}
break;
}
}catch (e11835){if((e11835 instanceof Object))
{var ex__6327__auto__ = e11835;var statearr_11836_11852 = state_11813;(statearr_11836_11852[(5)] = ex__6327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11813);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11835;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11853 = state_11813;
state_11813 = G__11853;
continue;
}
} else
{return ret_value__6325__auto__;
}
break;
}
});
state_machine__6324__auto__ = function(state_11813){
switch(arguments.length){
case 0:
return state_machine__6324__auto____0.call(this);
case 1:
return state_machine__6324__auto____1.call(this,state_11813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6324__auto____0;
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6324__auto____1;
return state_machine__6324__auto__;
})()
;})(switch__6323__auto__,c__6379__auto__))
})();var state__6381__auto__ = (function (){var statearr_11837 = f__6380__auto__.call(null);(statearr_11837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6379__auto__);
return statearr_11837;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6381__auto__);
});})(c__6379__auto__))
);
return c__6379__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11855 = {};return obj11855;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3628__auto__ = _;if(and__3628__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4277__auto__ = (((_ == null))?null:_);return (function (){var or__3640__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11857 = {};return obj11857;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12079 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12079 = (function (cs,ch,mult,meta12080){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12080 = meta12080;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12079.cljs$lang$type = true;
cljs.core.async.t12079.cljs$lang$ctorStr = "cljs.core.async/t12079";
cljs.core.async.t12079.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12079");
});})(cs))
;
cljs.core.async.t12079.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12079.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12079.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12079.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12079.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12079.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12079.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12081){var self__ = this;
var _12081__$1 = this;return self__.meta12080;
});})(cs))
;
cljs.core.async.t12079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12081,meta12080__$1){var self__ = this;
var _12081__$1 = this;return (new cljs.core.async.t12079(self__.cs,self__.ch,self__.mult,meta12080__$1));
});})(cs))
;
cljs.core.async.__GT_t12079 = ((function (cs){
return (function __GT_t12079(cs__$1,ch__$1,mult__$1,meta12080){return (new cljs.core.async.t12079(cs__$1,ch__$1,mult__$1,meta12080));
});})(cs))
;
}
return (new cljs.core.async.t12079(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6379__auto___12300 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6379__auto___12300,cs,m,dchan,dctr,done){
return (function (){var f__6380__auto__ = (function (){var switch__6323__auto__ = ((function (c__6379__auto___12300,cs,m,dchan,dctr,done){
return (function (state_12212){var state_val_12213 = (state_12212[(1)]);if((state_val_12213 === (7)))
{var inst_12208 = (state_12212[(2)]);var state_12212__$1 = state_12212;var statearr_12214_12301 = state_12212__$1;(statearr_12214_12301[(2)] = inst_12208);
(statearr_12214_12301[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (20)))
{var inst_12113 = (state_12212[(7)]);var inst_12123 = cljs.core.first.call(null,inst_12113);var inst_12124 = cljs.core.nth.call(null,inst_12123,(0),null);var inst_12125 = cljs.core.nth.call(null,inst_12123,(1),null);var state_12212__$1 = (function (){var statearr_12215 = state_12212;(statearr_12215[(8)] = inst_12124);
return statearr_12215;
})();if(cljs.core.truth_(inst_12125))
{var statearr_12216_12302 = state_12212__$1;(statearr_12216_12302[(1)] = (22));
} else
{var statearr_12217_12303 = state_12212__$1;(statearr_12217_12303[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (27)))
{var inst_12160 = (state_12212[(9)]);var inst_12153 = (state_12212[(10)]);var inst_12155 = (state_12212[(11)]);var inst_12084 = (state_12212[(12)]);var inst_12160__$1 = cljs.core._nth.call(null,inst_12153,inst_12155);var inst_12161 = cljs.core.async.put_BANG_.call(null,inst_12160__$1,inst_12084,done);var state_12212__$1 = (function (){var statearr_12218 = state_12212;(statearr_12218[(9)] = inst_12160__$1);
return statearr_12218;
})();if(cljs.core.truth_(inst_12161))
{var statearr_12219_12304 = state_12212__$1;(statearr_12219_12304[(1)] = (30));
} else
{var statearr_12220_12305 = state_12212__$1;(statearr_12220_12305[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (1)))
{var state_12212__$1 = state_12212;var statearr_12221_12306 = state_12212__$1;(statearr_12221_12306[(2)] = null);
(statearr_12221_12306[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (24)))
{var inst_12113 = (state_12212[(7)]);var inst_12130 = (state_12212[(2)]);var inst_12131 = cljs.core.next.call(null,inst_12113);var inst_12093 = inst_12131;var inst_12094 = null;var inst_12095 = (0);var inst_12096 = (0);var state_12212__$1 = (function (){var statearr_12222 = state_12212;(statearr_12222[(13)] = inst_12095);
(statearr_12222[(14)] = inst_12093);
(statearr_12222[(15)] = inst_12130);
(statearr_12222[(16)] = inst_12096);
(statearr_12222[(17)] = inst_12094);
return statearr_12222;
})();var statearr_12223_12307 = state_12212__$1;(statearr_12223_12307[(2)] = null);
(statearr_12223_12307[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (39)))
{var state_12212__$1 = state_12212;var statearr_12227_12308 = state_12212__$1;(statearr_12227_12308[(2)] = null);
(statearr_12227_12308[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (4)))
{var inst_12084 = (state_12212[(12)]);var inst_12084__$1 = (state_12212[(2)]);var inst_12085 = (inst_12084__$1 == null);var state_12212__$1 = (function (){var statearr_12228 = state_12212;(statearr_12228[(12)] = inst_12084__$1);
return statearr_12228;
})();if(cljs.core.truth_(inst_12085))
{var statearr_12229_12309 = state_12212__$1;(statearr_12229_12309[(1)] = (5));
} else
{var statearr_12230_12310 = state_12212__$1;(statearr_12230_12310[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (15)))
{var inst_12095 = (state_12212[(13)]);var inst_12093 = (state_12212[(14)]);var inst_12096 = (state_12212[(16)]);var inst_12094 = (state_12212[(17)]);var inst_12109 = (state_12212[(2)]);var inst_12110 = (inst_12096 + (1));var tmp12224 = inst_12095;var tmp12225 = inst_12093;var tmp12226 = inst_12094;var inst_12093__$1 = tmp12225;var inst_12094__$1 = tmp12226;var inst_12095__$1 = tmp12224;var inst_12096__$1 = inst_12110;var state_12212__$1 = (function (){var statearr_12231 = state_12212;(statearr_12231[(13)] = inst_12095__$1);
(statearr_12231[(14)] = inst_12093__$1);
(statearr_12231[(18)] = inst_12109);
(statearr_12231[(16)] = inst_12096__$1);
(statearr_12231[(17)] = inst_12094__$1);
return statearr_12231;
})();var statearr_12232_12311 = state_12212__$1;(statearr_12232_12311[(2)] = null);
(statearr_12232_12311[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (21)))
{var inst_12134 = (state_12212[(2)]);var state_12212__$1 = state_12212;var statearr_12236_12312 = state_12212__$1;(statearr_12236_12312[(2)] = inst_12134);
(statearr_12236_12312[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (31)))
{var inst_12160 = (state_12212[(9)]);var inst_12164 = done.call(null,null);var inst_12165 = cljs.core.async.untap_STAR_.call(null,m,inst_12160);var state_12212__$1 = (function (){var statearr_12237 = state_12212;(statearr_12237[(19)] = inst_12164);
return statearr_12237;
})();var statearr_12238_12313 = state_12212__$1;(statearr_12238_12313[(2)] = inst_12165);
(statearr_12238_12313[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (32)))
{var inst_12154 = (state_12212[(20)]);var inst_12153 = (state_12212[(10)]);var inst_12152 = (state_12212[(21)]);var inst_12155 = (state_12212[(11)]);var inst_12167 = (state_12212[(2)]);var inst_12168 = (inst_12155 + (1));var tmp12233 = inst_12154;var tmp12234 = inst_12153;var tmp12235 = inst_12152;var inst_12152__$1 = tmp12235;var inst_12153__$1 = tmp12234;var inst_12154__$1 = tmp12233;var inst_12155__$1 = inst_12168;var state_12212__$1 = (function (){var statearr_12239 = state_12212;(statearr_12239[(20)] = inst_12154__$1);
(statearr_12239[(10)] = inst_12153__$1);
(statearr_12239[(21)] = inst_12152__$1);
(statearr_12239[(11)] = inst_12155__$1);
(statearr_12239[(22)] = inst_12167);
return statearr_12239;
})();var statearr_12240_12314 = state_12212__$1;(statearr_12240_12314[(2)] = null);
(statearr_12240_12314[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (40)))
{var inst_12180 = (state_12212[(23)]);var inst_12184 = done.call(null,null);var inst_12185 = cljs.core.async.untap_STAR_.call(null,m,inst_12180);var state_12212__$1 = (function (){var statearr_12241 = state_12212;(statearr_12241[(24)] = inst_12184);
return statearr_12241;
})();var statearr_12242_12315 = state_12212__$1;(statearr_12242_12315[(2)] = inst_12185);
(statearr_12242_12315[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (33)))
{var inst_12171 = (state_12212[(25)]);var inst_12173 = cljs.core.chunked_seq_QMARK_.call(null,inst_12171);var state_12212__$1 = state_12212;if(inst_12173)
{var statearr_12243_12316 = state_12212__$1;(statearr_12243_12316[(1)] = (36));
} else
{var statearr_12244_12317 = state_12212__$1;(statearr_12244_12317[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (13)))
{var inst_12103 = (state_12212[(26)]);var inst_12106 = cljs.core.async.close_BANG_.call(null,inst_12103);var state_12212__$1 = state_12212;var statearr_12245_12318 = state_12212__$1;(statearr_12245_12318[(2)] = inst_12106);
(statearr_12245_12318[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (22)))
{var inst_12124 = (state_12212[(8)]);var inst_12127 = cljs.core.async.close_BANG_.call(null,inst_12124);var state_12212__$1 = state_12212;var statearr_12246_12319 = state_12212__$1;(statearr_12246_12319[(2)] = inst_12127);
(statearr_12246_12319[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (36)))
{var inst_12171 = (state_12212[(25)]);var inst_12175 = cljs.core.chunk_first.call(null,inst_12171);var inst_12176 = cljs.core.chunk_rest.call(null,inst_12171);var inst_12177 = cljs.core.count.call(null,inst_12175);var inst_12152 = inst_12176;var inst_12153 = inst_12175;var inst_12154 = inst_12177;var inst_12155 = (0);var state_12212__$1 = (function (){var statearr_12247 = state_12212;(statearr_12247[(20)] = inst_12154);
(statearr_12247[(10)] = inst_12153);
(statearr_12247[(21)] = inst_12152);
(statearr_12247[(11)] = inst_12155);
return statearr_12247;
})();var statearr_12248_12320 = state_12212__$1;(statearr_12248_12320[(2)] = null);
(statearr_12248_12320[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (41)))
{var inst_12171 = (state_12212[(25)]);var inst_12187 = (state_12212[(2)]);var inst_12188 = cljs.core.next.call(null,inst_12171);var inst_12152 = inst_12188;var inst_12153 = null;var inst_12154 = (0);var inst_12155 = (0);var state_12212__$1 = (function (){var statearr_12249 = state_12212;(statearr_12249[(20)] = inst_12154);
(statearr_12249[(27)] = inst_12187);
(statearr_12249[(10)] = inst_12153);
(statearr_12249[(21)] = inst_12152);
(statearr_12249[(11)] = inst_12155);
return statearr_12249;
})();var statearr_12250_12321 = state_12212__$1;(statearr_12250_12321[(2)] = null);
(statearr_12250_12321[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (43)))
{var state_12212__$1 = state_12212;var statearr_12251_12322 = state_12212__$1;(statearr_12251_12322[(2)] = null);
(statearr_12251_12322[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (29)))
{var inst_12196 = (state_12212[(2)]);var state_12212__$1 = state_12212;var statearr_12252_12323 = state_12212__$1;(statearr_12252_12323[(2)] = inst_12196);
(statearr_12252_12323[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (44)))
{var inst_12205 = (state_12212[(2)]);var state_12212__$1 = (function (){var statearr_12253 = state_12212;(statearr_12253[(28)] = inst_12205);
return statearr_12253;
})();var statearr_12254_12324 = state_12212__$1;(statearr_12254_12324[(2)] = null);
(statearr_12254_12324[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (6)))
{var inst_12144 = (state_12212[(29)]);var inst_12143 = cljs.core.deref.call(null,cs);var inst_12144__$1 = cljs.core.keys.call(null,inst_12143);var inst_12145 = cljs.core.count.call(null,inst_12144__$1);var inst_12146 = cljs.core.reset_BANG_.call(null,dctr,inst_12145);var inst_12151 = cljs.core.seq.call(null,inst_12144__$1);var inst_12152 = inst_12151;var inst_12153 = null;var inst_12154 = (0);var inst_12155 = (0);var state_12212__$1 = (function (){var statearr_12255 = state_12212;(statearr_12255[(20)] = inst_12154);
(statearr_12255[(10)] = inst_12153);
(statearr_12255[(21)] = inst_12152);
(statearr_12255[(11)] = inst_12155);
(statearr_12255[(29)] = inst_12144__$1);
(statearr_12255[(30)] = inst_12146);
return statearr_12255;
})();var statearr_12256_12325 = state_12212__$1;(statearr_12256_12325[(2)] = null);
(statearr_12256_12325[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (28)))
{var inst_12152 = (state_12212[(21)]);var inst_12171 = (state_12212[(25)]);var inst_12171__$1 = cljs.core.seq.call(null,inst_12152);var state_12212__$1 = (function (){var statearr_12257 = state_12212;(statearr_12257[(25)] = inst_12171__$1);
return statearr_12257;
})();if(inst_12171__$1)
{var statearr_12258_12326 = state_12212__$1;(statearr_12258_12326[(1)] = (33));
} else
{var statearr_12259_12327 = state_12212__$1;(statearr_12259_12327[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (25)))
{var inst_12154 = (state_12212[(20)]);var inst_12155 = (state_12212[(11)]);var inst_12157 = (inst_12155 < inst_12154);var inst_12158 = inst_12157;var state_12212__$1 = state_12212;if(cljs.core.truth_(inst_12158))
{var statearr_12260_12328 = state_12212__$1;(statearr_12260_12328[(1)] = (27));
} else
{var statearr_12261_12329 = state_12212__$1;(statearr_12261_12329[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (34)))
{var state_12212__$1 = state_12212;var statearr_12262_12330 = state_12212__$1;(statearr_12262_12330[(2)] = null);
(statearr_12262_12330[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (17)))
{var state_12212__$1 = state_12212;var statearr_12263_12331 = state_12212__$1;(statearr_12263_12331[(2)] = null);
(statearr_12263_12331[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (3)))
{var inst_12210 = (state_12212[(2)]);var state_12212__$1 = state_12212;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12212__$1,inst_12210);
} else
{if((state_val_12213 === (12)))
{var inst_12139 = (state_12212[(2)]);var state_12212__$1 = state_12212;var statearr_12264_12332 = state_12212__$1;(statearr_12264_12332[(2)] = inst_12139);
(statearr_12264_12332[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (2)))
{var state_12212__$1 = state_12212;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12212__$1,(4),ch);
} else
{if((state_val_12213 === (23)))
{var state_12212__$1 = state_12212;var statearr_12265_12333 = state_12212__$1;(statearr_12265_12333[(2)] = null);
(statearr_12265_12333[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (35)))
{var inst_12194 = (state_12212[(2)]);var state_12212__$1 = state_12212;var statearr_12266_12334 = state_12212__$1;(statearr_12266_12334[(2)] = inst_12194);
(statearr_12266_12334[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (19)))
{var inst_12113 = (state_12212[(7)]);var inst_12117 = cljs.core.chunk_first.call(null,inst_12113);var inst_12118 = cljs.core.chunk_rest.call(null,inst_12113);var inst_12119 = cljs.core.count.call(null,inst_12117);var inst_12093 = inst_12118;var inst_12094 = inst_12117;var inst_12095 = inst_12119;var inst_12096 = (0);var state_12212__$1 = (function (){var statearr_12267 = state_12212;(statearr_12267[(13)] = inst_12095);
(statearr_12267[(14)] = inst_12093);
(statearr_12267[(16)] = inst_12096);
(statearr_12267[(17)] = inst_12094);
return statearr_12267;
})();var statearr_12268_12335 = state_12212__$1;(statearr_12268_12335[(2)] = null);
(statearr_12268_12335[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (11)))
{var inst_12093 = (state_12212[(14)]);var inst_12113 = (state_12212[(7)]);var inst_12113__$1 = cljs.core.seq.call(null,inst_12093);var state_12212__$1 = (function (){var statearr_12269 = state_12212;(statearr_12269[(7)] = inst_12113__$1);
return statearr_12269;
})();if(inst_12113__$1)
{var statearr_12270_12336 = state_12212__$1;(statearr_12270_12336[(1)] = (16));
} else
{var statearr_12271_12337 = state_12212__$1;(statearr_12271_12337[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (9)))
{var inst_12141 = (state_12212[(2)]);var state_12212__$1 = state_12212;var statearr_12272_12338 = state_12212__$1;(statearr_12272_12338[(2)] = inst_12141);
(statearr_12272_12338[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (5)))
{var inst_12091 = cljs.core.deref.call(null,cs);var inst_12092 = cljs.core.seq.call(null,inst_12091);var inst_12093 = inst_12092;var inst_12094 = null;var inst_12095 = (0);var inst_12096 = (0);var state_12212__$1 = (function (){var statearr_12273 = state_12212;(statearr_12273[(13)] = inst_12095);
(statearr_12273[(14)] = inst_12093);
(statearr_12273[(16)] = inst_12096);
(statearr_12273[(17)] = inst_12094);
return statearr_12273;
})();var statearr_12274_12339 = state_12212__$1;(statearr_12274_12339[(2)] = null);
(statearr_12274_12339[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (14)))
{var state_12212__$1 = state_12212;var statearr_12275_12340 = state_12212__$1;(statearr_12275_12340[(2)] = null);
(statearr_12275_12340[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (45)))
{var inst_12202 = (state_12212[(2)]);var state_12212__$1 = state_12212;var statearr_12276_12341 = state_12212__$1;(statearr_12276_12341[(2)] = inst_12202);
(statearr_12276_12341[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (26)))
{var inst_12144 = (state_12212[(29)]);var inst_12198 = (state_12212[(2)]);var inst_12199 = cljs.core.seq.call(null,inst_12144);var state_12212__$1 = (function (){var statearr_12277 = state_12212;(statearr_12277[(31)] = inst_12198);
return statearr_12277;
})();if(inst_12199)
{var statearr_12278_12342 = state_12212__$1;(statearr_12278_12342[(1)] = (42));
} else
{var statearr_12279_12343 = state_12212__$1;(statearr_12279_12343[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (16)))
{var inst_12113 = (state_12212[(7)]);var inst_12115 = cljs.core.chunked_seq_QMARK_.call(null,inst_12113);var state_12212__$1 = state_12212;if(inst_12115)
{var statearr_12280_12344 = state_12212__$1;(statearr_12280_12344[(1)] = (19));
} else
{var statearr_12281_12345 = state_12212__$1;(statearr_12281_12345[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (38)))
{var inst_12191 = (state_12212[(2)]);var state_12212__$1 = state_12212;var statearr_12282_12346 = state_12212__$1;(statearr_12282_12346[(2)] = inst_12191);
(statearr_12282_12346[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (30)))
{var state_12212__$1 = state_12212;var statearr_12283_12347 = state_12212__$1;(statearr_12283_12347[(2)] = null);
(statearr_12283_12347[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (10)))
{var inst_12096 = (state_12212[(16)]);var inst_12094 = (state_12212[(17)]);var inst_12102 = cljs.core._nth.call(null,inst_12094,inst_12096);var inst_12103 = cljs.core.nth.call(null,inst_12102,(0),null);var inst_12104 = cljs.core.nth.call(null,inst_12102,(1),null);var state_12212__$1 = (function (){var statearr_12284 = state_12212;(statearr_12284[(26)] = inst_12103);
return statearr_12284;
})();if(cljs.core.truth_(inst_12104))
{var statearr_12285_12348 = state_12212__$1;(statearr_12285_12348[(1)] = (13));
} else
{var statearr_12286_12349 = state_12212__$1;(statearr_12286_12349[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (18)))
{var inst_12137 = (state_12212[(2)]);var state_12212__$1 = state_12212;var statearr_12287_12350 = state_12212__$1;(statearr_12287_12350[(2)] = inst_12137);
(statearr_12287_12350[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (42)))
{var state_12212__$1 = state_12212;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12212__$1,(45),dchan);
} else
{if((state_val_12213 === (37)))
{var inst_12084 = (state_12212[(12)]);var inst_12171 = (state_12212[(25)]);var inst_12180 = (state_12212[(23)]);var inst_12180__$1 = cljs.core.first.call(null,inst_12171);var inst_12181 = cljs.core.async.put_BANG_.call(null,inst_12180__$1,inst_12084,done);var state_12212__$1 = (function (){var statearr_12288 = state_12212;(statearr_12288[(23)] = inst_12180__$1);
return statearr_12288;
})();if(cljs.core.truth_(inst_12181))
{var statearr_12289_12351 = state_12212__$1;(statearr_12289_12351[(1)] = (39));
} else
{var statearr_12290_12352 = state_12212__$1;(statearr_12290_12352[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12213 === (8)))
{var inst_12095 = (state_12212[(13)]);var inst_12096 = (state_12212[(16)]);var inst_12098 = (inst_12096 < inst_12095);var inst_12099 = inst_12098;var state_12212__$1 = state_12212;if(cljs.core.truth_(inst_12099))
{var statearr_12291_12353 = state_12212__$1;(statearr_12291_12353[(1)] = (10));
} else
{var statearr_12292_12354 = state_12212__$1;(statearr_12292_12354[(1)] = (11));
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
});})(c__6379__auto___12300,cs,m,dchan,dctr,done))
;return ((function (switch__6323__auto__,c__6379__auto___12300,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6324__auto__ = null;
var state_machine__6324__auto____0 = (function (){var statearr_12296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12296[(0)] = state_machine__6324__auto__);
(statearr_12296[(1)] = (1));
return statearr_12296;
});
var state_machine__6324__auto____1 = (function (state_12212){while(true){
var ret_value__6325__auto__ = (function (){try{while(true){
var result__6326__auto__ = switch__6323__auto__.call(null,state_12212);if(cljs.core.keyword_identical_QMARK_.call(null,result__6326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6326__auto__;
}
break;
}
}catch (e12297){if((e12297 instanceof Object))
{var ex__6327__auto__ = e12297;var statearr_12298_12355 = state_12212;(statearr_12298_12355[(5)] = ex__6327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12212);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12297;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12356 = state_12212;
state_12212 = G__12356;
continue;
}
} else
{return ret_value__6325__auto__;
}
break;
}
});
state_machine__6324__auto__ = function(state_12212){
switch(arguments.length){
case 0:
return state_machine__6324__auto____0.call(this);
case 1:
return state_machine__6324__auto____1.call(this,state_12212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6324__auto____0;
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6324__auto____1;
return state_machine__6324__auto__;
})()
;})(switch__6323__auto__,c__6379__auto___12300,cs,m,dchan,dctr,done))
})();var state__6381__auto__ = (function (){var statearr_12299 = f__6380__auto__.call(null);(statearr_12299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6379__auto___12300);
return statearr_12299;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6381__auto__);
});})(c__6379__auto___12300,cs,m,dchan,dctr,done))
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
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
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
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12358 = {};return obj12358;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__12359){var map__12364 = p__12359;var map__12364__$1 = ((cljs.core.seq_QMARK_.call(null,map__12364))?cljs.core.apply.call(null,cljs.core.hash_map,map__12364):map__12364);var opts = map__12364__$1;var statearr_12365_12368 = state;(statearr_12365_12368[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__12364,map__12364__$1,opts){
return (function (val){var statearr_12366_12369 = state;(statearr_12366_12369[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__12364,map__12364__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_12367_12370 = state;(statearr_12367_12370[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__12359 = null;if (arguments.length > 3) {
  p__12359 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__12359);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__12371){
var state = cljs.core.first(arglist__12371);
arglist__12371 = cljs.core.next(arglist__12371);
var cont_block = cljs.core.first(arglist__12371);
arglist__12371 = cljs.core.next(arglist__12371);
var ports = cljs.core.first(arglist__12371);
var p__12359 = cljs.core.rest(arglist__12371);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__12359);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12491 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12491 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12492){
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
this.meta12492 = meta12492;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12491.cljs$lang$type = true;
cljs.core.async.t12491.cljs$lang$ctorStr = "cljs.core.async/t12491";
cljs.core.async.t12491.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12491");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12491.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12491.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12491.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12491.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12491.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12491.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12491.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12491.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12491.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12493){var self__ = this;
var _12493__$1 = this;return self__.meta12492;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12493,meta12492__$1){var self__ = this;
var _12493__$1 = this;return (new cljs.core.async.t12491(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12492__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12491 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12491(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12492){return (new cljs.core.async.t12491(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12492));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12491(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6379__auto___12610 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6379__auto___12610,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6380__auto__ = (function (){var switch__6323__auto__ = ((function (c__6379__auto___12610,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12563){var state_val_12564 = (state_12563[(1)]);if((state_val_12564 === (7)))
{var inst_12507 = (state_12563[(7)]);var inst_12512 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12507);var state_12563__$1 = state_12563;var statearr_12565_12611 = state_12563__$1;(statearr_12565_12611[(2)] = inst_12512);
(statearr_12565_12611[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12564 === (20)))
{var inst_12522 = (state_12563[(8)]);var state_12563__$1 = state_12563;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12563__$1,(23),out,inst_12522);
} else
{if((state_val_12564 === (1)))
{var inst_12497 = (state_12563[(9)]);var inst_12497__$1 = calc_state.call(null);var inst_12498 = cljs.core.seq_QMARK_.call(null,inst_12497__$1);var state_12563__$1 = (function (){var statearr_12566 = state_12563;(statearr_12566[(9)] = inst_12497__$1);
return statearr_12566;
})();if(inst_12498)
{var statearr_12567_12612 = state_12563__$1;(statearr_12567_12612[(1)] = (2));
} else
{var statearr_12568_12613 = state_12563__$1;(statearr_12568_12613[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12564 === (24)))
{var inst_12515 = (state_12563[(10)]);var inst_12507 = inst_12515;var state_12563__$1 = (function (){var statearr_12569 = state_12563;(statearr_12569[(7)] = inst_12507);
return statearr_12569;
})();var statearr_12570_12614 = state_12563__$1;(statearr_12570_12614[(2)] = null);
(statearr_12570_12614[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12564 === (4)))
{var inst_12497 = (state_12563[(9)]);var inst_12503 = (state_12563[(2)]);var inst_12504 = cljs.core.get.call(null,inst_12503,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12505 = cljs.core.get.call(null,inst_12503,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12506 = cljs.core.get.call(null,inst_12503,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_12507 = inst_12497;var state_12563__$1 = (function (){var statearr_12571 = state_12563;(statearr_12571[(11)] = inst_12506);
(statearr_12571[(7)] = inst_12507);
(statearr_12571[(12)] = inst_12505);
(statearr_12571[(13)] = inst_12504);
return statearr_12571;
})();var statearr_12572_12615 = state_12563__$1;(statearr_12572_12615[(2)] = null);
(statearr_12572_12615[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12564 === (15)))
{var state_12563__$1 = state_12563;var statearr_12573_12616 = state_12563__$1;(statearr_12573_12616[(2)] = null);
(statearr_12573_12616[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12564 === (21)))
{var inst_12515 = (state_12563[(10)]);var inst_12507 = inst_12515;var state_12563__$1 = (function (){var statearr_12574 = state_12563;(statearr_12574[(7)] = inst_12507);
return statearr_12574;
})();var statearr_12575_12617 = state_12563__$1;(statearr_12575_12617[(2)] = null);
(statearr_12575_12617[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12564 === (13)))
{var inst_12559 = (state_12563[(2)]);var state_12563__$1 = state_12563;var statearr_12576_12618 = state_12563__$1;(statearr_12576_12618[(2)] = inst_12559);
(statearr_12576_12618[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12564 === (22)))
{var inst_12557 = (state_12563[(2)]);var state_12563__$1 = state_12563;var statearr_12577_12619 = state_12563__$1;(statearr_12577_12619[(2)] = inst_12557);
(statearr_12577_12619[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12564 === (6)))
{var inst_12561 = (state_12563[(2)]);var state_12563__$1 = state_12563;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12563__$1,inst_12561);
} else
{if((state_val_12564 === (25)))
{var state_12563__$1 = state_12563;var statearr_12578_12620 = state_12563__$1;(statearr_12578_12620[(2)] = null);
(statearr_12578_12620[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12564 === (17)))
{var inst_12537 = (state_12563[(14)]);var state_12563__$1 = state_12563;var statearr_12579_12621 = state_12563__$1;(statearr_12579_12621[(2)] = inst_12537);
(statearr_12579_12621[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12564 === (3)))
{var inst_12497 = (state_12563[(9)]);var state_12563__$1 = state_12563;var statearr_12580_12622 = state_12563__$1;(statearr_12580_12622[(2)] = inst_12497);
(statearr_12580_12622[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12564 === (12)))
{var inst_12518 = (state_12563[(15)]);var inst_12537 = (state_12563[(14)]);var inst_12523 = (state_12563[(16)]);var inst_12537__$1 = inst_12518.call(null,inst_12523);var state_12563__$1 = (function (){var statearr_12581 = state_12563;(statearr_12581[(14)] = inst_12537__$1);
return statearr_12581;
})();if(cljs.core.truth_(inst_12537__$1))
{var statearr_12582_12623 = state_12563__$1;(statearr_12582_12623[(1)] = (17));
} else
{var statearr_12583_12624 = state_12563__$1;(statearr_12583_12624[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12564 === (2)))
{var inst_12497 = (state_12563[(9)]);var inst_12500 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12497);var state_12563__$1 = state_12563;var statearr_12584_12625 = state_12563__$1;(statearr_12584_12625[(2)] = inst_12500);
(statearr_12584_12625[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12564 === (23)))
{var inst_12548 = (state_12563[(2)]);var state_12563__$1 = state_12563;if(cljs.core.truth_(inst_12548))
{var statearr_12585_12626 = state_12563__$1;(statearr_12585_12626[(1)] = (24));
} else
{var statearr_12586_12627 = state_12563__$1;(statearr_12586_12627[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12564 === (19)))
{var inst_12545 = (state_12563[(2)]);var state_12563__$1 = state_12563;if(cljs.core.truth_(inst_12545))
{var statearr_12587_12628 = state_12563__$1;(statearr_12587_12628[(1)] = (20));
} else
{var statearr_12588_12629 = state_12563__$1;(statearr_12588_12629[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12564 === (11)))
{var inst_12522 = (state_12563[(8)]);var inst_12528 = (inst_12522 == null);var state_12563__$1 = state_12563;if(cljs.core.truth_(inst_12528))
{var statearr_12589_12630 = state_12563__$1;(statearr_12589_12630[(1)] = (14));
} else
{var statearr_12590_12631 = state_12563__$1;(statearr_12590_12631[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12564 === (9)))
{var inst_12515 = (state_12563[(10)]);var inst_12515__$1 = (state_12563[(2)]);var inst_12516 = cljs.core.get.call(null,inst_12515__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12517 = cljs.core.get.call(null,inst_12515__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12518 = cljs.core.get.call(null,inst_12515__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_12563__$1 = (function (){var statearr_12591 = state_12563;(statearr_12591[(10)] = inst_12515__$1);
(statearr_12591[(15)] = inst_12518);
(statearr_12591[(17)] = inst_12517);
return statearr_12591;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_12563__$1,(10),inst_12516);
} else
{if((state_val_12564 === (5)))
{var inst_12507 = (state_12563[(7)]);var inst_12510 = cljs.core.seq_QMARK_.call(null,inst_12507);var state_12563__$1 = state_12563;if(inst_12510)
{var statearr_12592_12632 = state_12563__$1;(statearr_12592_12632[(1)] = (7));
} else
{var statearr_12593_12633 = state_12563__$1;(statearr_12593_12633[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12564 === (14)))
{var inst_12523 = (state_12563[(16)]);var inst_12530 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12523);var state_12563__$1 = state_12563;var statearr_12594_12634 = state_12563__$1;(statearr_12594_12634[(2)] = inst_12530);
(statearr_12594_12634[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12564 === (26)))
{var inst_12553 = (state_12563[(2)]);var state_12563__$1 = state_12563;var statearr_12595_12635 = state_12563__$1;(statearr_12595_12635[(2)] = inst_12553);
(statearr_12595_12635[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12564 === (16)))
{var inst_12533 = (state_12563[(2)]);var inst_12534 = calc_state.call(null);var inst_12507 = inst_12534;var state_12563__$1 = (function (){var statearr_12596 = state_12563;(statearr_12596[(18)] = inst_12533);
(statearr_12596[(7)] = inst_12507);
return statearr_12596;
})();var statearr_12597_12636 = state_12563__$1;(statearr_12597_12636[(2)] = null);
(statearr_12597_12636[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12564 === (10)))
{var inst_12522 = (state_12563[(8)]);var inst_12523 = (state_12563[(16)]);var inst_12521 = (state_12563[(2)]);var inst_12522__$1 = cljs.core.nth.call(null,inst_12521,(0),null);var inst_12523__$1 = cljs.core.nth.call(null,inst_12521,(1),null);var inst_12524 = (inst_12522__$1 == null);var inst_12525 = cljs.core._EQ_.call(null,inst_12523__$1,change);var inst_12526 = (inst_12524) || (inst_12525);var state_12563__$1 = (function (){var statearr_12598 = state_12563;(statearr_12598[(8)] = inst_12522__$1);
(statearr_12598[(16)] = inst_12523__$1);
return statearr_12598;
})();if(cljs.core.truth_(inst_12526))
{var statearr_12599_12637 = state_12563__$1;(statearr_12599_12637[(1)] = (11));
} else
{var statearr_12600_12638 = state_12563__$1;(statearr_12600_12638[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12564 === (18)))
{var inst_12518 = (state_12563[(15)]);var inst_12517 = (state_12563[(17)]);var inst_12523 = (state_12563[(16)]);var inst_12540 = cljs.core.empty_QMARK_.call(null,inst_12518);var inst_12541 = inst_12517.call(null,inst_12523);var inst_12542 = cljs.core.not.call(null,inst_12541);var inst_12543 = (inst_12540) && (inst_12542);var state_12563__$1 = state_12563;var statearr_12601_12639 = state_12563__$1;(statearr_12601_12639[(2)] = inst_12543);
(statearr_12601_12639[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12564 === (8)))
{var inst_12507 = (state_12563[(7)]);var state_12563__$1 = state_12563;var statearr_12602_12640 = state_12563__$1;(statearr_12602_12640[(2)] = inst_12507);
(statearr_12602_12640[(1)] = (9));
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
});})(c__6379__auto___12610,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6323__auto__,c__6379__auto___12610,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6324__auto__ = null;
var state_machine__6324__auto____0 = (function (){var statearr_12606 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12606[(0)] = state_machine__6324__auto__);
(statearr_12606[(1)] = (1));
return statearr_12606;
});
var state_machine__6324__auto____1 = (function (state_12563){while(true){
var ret_value__6325__auto__ = (function (){try{while(true){
var result__6326__auto__ = switch__6323__auto__.call(null,state_12563);if(cljs.core.keyword_identical_QMARK_.call(null,result__6326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6326__auto__;
}
break;
}
}catch (e12607){if((e12607 instanceof Object))
{var ex__6327__auto__ = e12607;var statearr_12608_12641 = state_12563;(statearr_12608_12641[(5)] = ex__6327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12563);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12607;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12642 = state_12563;
state_12563 = G__12642;
continue;
}
} else
{return ret_value__6325__auto__;
}
break;
}
});
state_machine__6324__auto__ = function(state_12563){
switch(arguments.length){
case 0:
return state_machine__6324__auto____0.call(this);
case 1:
return state_machine__6324__auto____1.call(this,state_12563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6324__auto____0;
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6324__auto____1;
return state_machine__6324__auto__;
})()
;})(switch__6323__auto__,c__6379__auto___12610,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6381__auto__ = (function (){var statearr_12609 = f__6380__auto__.call(null);(statearr_12609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6379__auto___12610);
return statearr_12609;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6381__auto__);
});})(c__6379__auto___12610,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12644 = {};return obj12644;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3640__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3640__auto__,mults){
return (function (p1__12645_SHARP_){if(cljs.core.truth_(p1__12645_SHARP_.call(null,topic)))
{return p1__12645_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12645_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3640__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12768 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12768 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12769){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12769 = meta12769;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12768.cljs$lang$type = true;
cljs.core.async.t12768.cljs$lang$ctorStr = "cljs.core.async/t12768";
cljs.core.async.t12768.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12768");
});})(mults,ensure_mult))
;
cljs.core.async.t12768.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12768.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12768.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12768.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12768.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12768.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12768.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12768.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12770){var self__ = this;
var _12770__$1 = this;return self__.meta12769;
});})(mults,ensure_mult))
;
cljs.core.async.t12768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12770,meta12769__$1){var self__ = this;
var _12770__$1 = this;return (new cljs.core.async.t12768(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12769__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12768 = ((function (mults,ensure_mult){
return (function __GT_t12768(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12769){return (new cljs.core.async.t12768(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12769));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12768(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6379__auto___12890 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6379__auto___12890,mults,ensure_mult,p){
return (function (){var f__6380__auto__ = (function (){var switch__6323__auto__ = ((function (c__6379__auto___12890,mults,ensure_mult,p){
return (function (state_12842){var state_val_12843 = (state_12842[(1)]);if((state_val_12843 === (7)))
{var inst_12838 = (state_12842[(2)]);var state_12842__$1 = state_12842;var statearr_12844_12891 = state_12842__$1;(statearr_12844_12891[(2)] = inst_12838);
(statearr_12844_12891[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12843 === (20)))
{var state_12842__$1 = state_12842;var statearr_12845_12892 = state_12842__$1;(statearr_12845_12892[(2)] = null);
(statearr_12845_12892[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12843 === (1)))
{var state_12842__$1 = state_12842;var statearr_12846_12893 = state_12842__$1;(statearr_12846_12893[(2)] = null);
(statearr_12846_12893[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12843 === (24)))
{var inst_12821 = (state_12842[(7)]);var inst_12830 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12821);var state_12842__$1 = state_12842;var statearr_12847_12894 = state_12842__$1;(statearr_12847_12894[(2)] = inst_12830);
(statearr_12847_12894[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12843 === (4)))
{var inst_12773 = (state_12842[(8)]);var inst_12773__$1 = (state_12842[(2)]);var inst_12774 = (inst_12773__$1 == null);var state_12842__$1 = (function (){var statearr_12848 = state_12842;(statearr_12848[(8)] = inst_12773__$1);
return statearr_12848;
})();if(cljs.core.truth_(inst_12774))
{var statearr_12849_12895 = state_12842__$1;(statearr_12849_12895[(1)] = (5));
} else
{var statearr_12850_12896 = state_12842__$1;(statearr_12850_12896[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12843 === (15)))
{var inst_12815 = (state_12842[(2)]);var state_12842__$1 = state_12842;var statearr_12851_12897 = state_12842__$1;(statearr_12851_12897[(2)] = inst_12815);
(statearr_12851_12897[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12843 === (21)))
{var inst_12835 = (state_12842[(2)]);var state_12842__$1 = (function (){var statearr_12852 = state_12842;(statearr_12852[(9)] = inst_12835);
return statearr_12852;
})();var statearr_12853_12898 = state_12842__$1;(statearr_12853_12898[(2)] = null);
(statearr_12853_12898[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12843 === (13)))
{var inst_12797 = (state_12842[(10)]);var inst_12799 = cljs.core.chunked_seq_QMARK_.call(null,inst_12797);var state_12842__$1 = state_12842;if(inst_12799)
{var statearr_12854_12899 = state_12842__$1;(statearr_12854_12899[(1)] = (16));
} else
{var statearr_12855_12900 = state_12842__$1;(statearr_12855_12900[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12843 === (22)))
{var inst_12827 = (state_12842[(2)]);var state_12842__$1 = state_12842;if(cljs.core.truth_(inst_12827))
{var statearr_12856_12901 = state_12842__$1;(statearr_12856_12901[(1)] = (23));
} else
{var statearr_12857_12902 = state_12842__$1;(statearr_12857_12902[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12843 === (6)))
{var inst_12823 = (state_12842[(11)]);var inst_12773 = (state_12842[(8)]);var inst_12821 = (state_12842[(7)]);var inst_12821__$1 = topic_fn.call(null,inst_12773);var inst_12822 = cljs.core.deref.call(null,mults);var inst_12823__$1 = cljs.core.get.call(null,inst_12822,inst_12821__$1);var state_12842__$1 = (function (){var statearr_12858 = state_12842;(statearr_12858[(11)] = inst_12823__$1);
(statearr_12858[(7)] = inst_12821__$1);
return statearr_12858;
})();if(cljs.core.truth_(inst_12823__$1))
{var statearr_12859_12903 = state_12842__$1;(statearr_12859_12903[(1)] = (19));
} else
{var statearr_12860_12904 = state_12842__$1;(statearr_12860_12904[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12843 === (25)))
{var inst_12832 = (state_12842[(2)]);var state_12842__$1 = state_12842;var statearr_12861_12905 = state_12842__$1;(statearr_12861_12905[(2)] = inst_12832);
(statearr_12861_12905[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12843 === (17)))
{var inst_12797 = (state_12842[(10)]);var inst_12806 = cljs.core.first.call(null,inst_12797);var inst_12807 = cljs.core.async.muxch_STAR_.call(null,inst_12806);var inst_12808 = cljs.core.async.close_BANG_.call(null,inst_12807);var inst_12809 = cljs.core.next.call(null,inst_12797);var inst_12783 = inst_12809;var inst_12784 = null;var inst_12785 = (0);var inst_12786 = (0);var state_12842__$1 = (function (){var statearr_12862 = state_12842;(statearr_12862[(12)] = inst_12786);
(statearr_12862[(13)] = inst_12783);
(statearr_12862[(14)] = inst_12808);
(statearr_12862[(15)] = inst_12784);
(statearr_12862[(16)] = inst_12785);
return statearr_12862;
})();var statearr_12863_12906 = state_12842__$1;(statearr_12863_12906[(2)] = null);
(statearr_12863_12906[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12843 === (3)))
{var inst_12840 = (state_12842[(2)]);var state_12842__$1 = state_12842;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12842__$1,inst_12840);
} else
{if((state_val_12843 === (12)))
{var inst_12817 = (state_12842[(2)]);var state_12842__$1 = state_12842;var statearr_12864_12907 = state_12842__$1;(statearr_12864_12907[(2)] = inst_12817);
(statearr_12864_12907[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12843 === (2)))
{var state_12842__$1 = state_12842;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12842__$1,(4),ch);
} else
{if((state_val_12843 === (23)))
{var state_12842__$1 = state_12842;var statearr_12865_12908 = state_12842__$1;(statearr_12865_12908[(2)] = null);
(statearr_12865_12908[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12843 === (19)))
{var inst_12823 = (state_12842[(11)]);var inst_12773 = (state_12842[(8)]);var inst_12825 = cljs.core.async.muxch_STAR_.call(null,inst_12823);var state_12842__$1 = state_12842;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12842__$1,(22),inst_12825,inst_12773);
} else
{if((state_val_12843 === (11)))
{var inst_12783 = (state_12842[(13)]);var inst_12797 = (state_12842[(10)]);var inst_12797__$1 = cljs.core.seq.call(null,inst_12783);var state_12842__$1 = (function (){var statearr_12866 = state_12842;(statearr_12866[(10)] = inst_12797__$1);
return statearr_12866;
})();if(inst_12797__$1)
{var statearr_12867_12909 = state_12842__$1;(statearr_12867_12909[(1)] = (13));
} else
{var statearr_12868_12910 = state_12842__$1;(statearr_12868_12910[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12843 === (9)))
{var inst_12819 = (state_12842[(2)]);var state_12842__$1 = state_12842;var statearr_12869_12911 = state_12842__$1;(statearr_12869_12911[(2)] = inst_12819);
(statearr_12869_12911[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12843 === (5)))
{var inst_12780 = cljs.core.deref.call(null,mults);var inst_12781 = cljs.core.vals.call(null,inst_12780);var inst_12782 = cljs.core.seq.call(null,inst_12781);var inst_12783 = inst_12782;var inst_12784 = null;var inst_12785 = (0);var inst_12786 = (0);var state_12842__$1 = (function (){var statearr_12870 = state_12842;(statearr_12870[(12)] = inst_12786);
(statearr_12870[(13)] = inst_12783);
(statearr_12870[(15)] = inst_12784);
(statearr_12870[(16)] = inst_12785);
return statearr_12870;
})();var statearr_12871_12912 = state_12842__$1;(statearr_12871_12912[(2)] = null);
(statearr_12871_12912[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12843 === (14)))
{var state_12842__$1 = state_12842;var statearr_12875_12913 = state_12842__$1;(statearr_12875_12913[(2)] = null);
(statearr_12875_12913[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12843 === (16)))
{var inst_12797 = (state_12842[(10)]);var inst_12801 = cljs.core.chunk_first.call(null,inst_12797);var inst_12802 = cljs.core.chunk_rest.call(null,inst_12797);var inst_12803 = cljs.core.count.call(null,inst_12801);var inst_12783 = inst_12802;var inst_12784 = inst_12801;var inst_12785 = inst_12803;var inst_12786 = (0);var state_12842__$1 = (function (){var statearr_12876 = state_12842;(statearr_12876[(12)] = inst_12786);
(statearr_12876[(13)] = inst_12783);
(statearr_12876[(15)] = inst_12784);
(statearr_12876[(16)] = inst_12785);
return statearr_12876;
})();var statearr_12877_12914 = state_12842__$1;(statearr_12877_12914[(2)] = null);
(statearr_12877_12914[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12843 === (10)))
{var inst_12786 = (state_12842[(12)]);var inst_12783 = (state_12842[(13)]);var inst_12784 = (state_12842[(15)]);var inst_12785 = (state_12842[(16)]);var inst_12791 = cljs.core._nth.call(null,inst_12784,inst_12786);var inst_12792 = cljs.core.async.muxch_STAR_.call(null,inst_12791);var inst_12793 = cljs.core.async.close_BANG_.call(null,inst_12792);var inst_12794 = (inst_12786 + (1));var tmp12872 = inst_12783;var tmp12873 = inst_12784;var tmp12874 = inst_12785;var inst_12783__$1 = tmp12872;var inst_12784__$1 = tmp12873;var inst_12785__$1 = tmp12874;var inst_12786__$1 = inst_12794;var state_12842__$1 = (function (){var statearr_12878 = state_12842;(statearr_12878[(12)] = inst_12786__$1);
(statearr_12878[(17)] = inst_12793);
(statearr_12878[(13)] = inst_12783__$1);
(statearr_12878[(15)] = inst_12784__$1);
(statearr_12878[(16)] = inst_12785__$1);
return statearr_12878;
})();var statearr_12879_12915 = state_12842__$1;(statearr_12879_12915[(2)] = null);
(statearr_12879_12915[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12843 === (18)))
{var inst_12812 = (state_12842[(2)]);var state_12842__$1 = state_12842;var statearr_12880_12916 = state_12842__$1;(statearr_12880_12916[(2)] = inst_12812);
(statearr_12880_12916[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12843 === (8)))
{var inst_12786 = (state_12842[(12)]);var inst_12785 = (state_12842[(16)]);var inst_12788 = (inst_12786 < inst_12785);var inst_12789 = inst_12788;var state_12842__$1 = state_12842;if(cljs.core.truth_(inst_12789))
{var statearr_12881_12917 = state_12842__$1;(statearr_12881_12917[(1)] = (10));
} else
{var statearr_12882_12918 = state_12842__$1;(statearr_12882_12918[(1)] = (11));
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
});})(c__6379__auto___12890,mults,ensure_mult,p))
;return ((function (switch__6323__auto__,c__6379__auto___12890,mults,ensure_mult,p){
return (function() {
var state_machine__6324__auto__ = null;
var state_machine__6324__auto____0 = (function (){var statearr_12886 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12886[(0)] = state_machine__6324__auto__);
(statearr_12886[(1)] = (1));
return statearr_12886;
});
var state_machine__6324__auto____1 = (function (state_12842){while(true){
var ret_value__6325__auto__ = (function (){try{while(true){
var result__6326__auto__ = switch__6323__auto__.call(null,state_12842);if(cljs.core.keyword_identical_QMARK_.call(null,result__6326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6326__auto__;
}
break;
}
}catch (e12887){if((e12887 instanceof Object))
{var ex__6327__auto__ = e12887;var statearr_12888_12919 = state_12842;(statearr_12888_12919[(5)] = ex__6327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12842);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12887;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12920 = state_12842;
state_12842 = G__12920;
continue;
}
} else
{return ret_value__6325__auto__;
}
break;
}
});
state_machine__6324__auto__ = function(state_12842){
switch(arguments.length){
case 0:
return state_machine__6324__auto____0.call(this);
case 1:
return state_machine__6324__auto____1.call(this,state_12842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6324__auto____0;
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6324__auto____1;
return state_machine__6324__auto__;
})()
;})(switch__6323__auto__,c__6379__auto___12890,mults,ensure_mult,p))
})();var state__6381__auto__ = (function (){var statearr_12889 = f__6380__auto__.call(null);(statearr_12889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6379__auto___12890);
return statearr_12889;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6381__auto__);
});})(c__6379__auto___12890,mults,ensure_mult,p))
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
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
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
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6379__auto___13057 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6379__auto___13057,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6380__auto__ = (function (){var switch__6323__auto__ = ((function (c__6379__auto___13057,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13027){var state_val_13028 = (state_13027[(1)]);if((state_val_13028 === (7)))
{var state_13027__$1 = state_13027;var statearr_13029_13058 = state_13027__$1;(statearr_13029_13058[(2)] = null);
(statearr_13029_13058[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13028 === (1)))
{var state_13027__$1 = state_13027;var statearr_13030_13059 = state_13027__$1;(statearr_13030_13059[(2)] = null);
(statearr_13030_13059[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13028 === (4)))
{var inst_12991 = (state_13027[(7)]);var inst_12993 = (inst_12991 < cnt);var state_13027__$1 = state_13027;if(cljs.core.truth_(inst_12993))
{var statearr_13031_13060 = state_13027__$1;(statearr_13031_13060[(1)] = (6));
} else
{var statearr_13032_13061 = state_13027__$1;(statearr_13032_13061[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13028 === (15)))
{var inst_13023 = (state_13027[(2)]);var state_13027__$1 = state_13027;var statearr_13033_13062 = state_13027__$1;(statearr_13033_13062[(2)] = inst_13023);
(statearr_13033_13062[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13028 === (13)))
{var inst_13016 = cljs.core.async.close_BANG_.call(null,out);var state_13027__$1 = state_13027;var statearr_13034_13063 = state_13027__$1;(statearr_13034_13063[(2)] = inst_13016);
(statearr_13034_13063[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13028 === (6)))
{var state_13027__$1 = state_13027;var statearr_13035_13064 = state_13027__$1;(statearr_13035_13064[(2)] = null);
(statearr_13035_13064[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13028 === (3)))
{var inst_13025 = (state_13027[(2)]);var state_13027__$1 = state_13027;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13027__$1,inst_13025);
} else
{if((state_val_13028 === (12)))
{var inst_13013 = (state_13027[(8)]);var inst_13013__$1 = (state_13027[(2)]);var inst_13014 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13013__$1);var state_13027__$1 = (function (){var statearr_13036 = state_13027;(statearr_13036[(8)] = inst_13013__$1);
return statearr_13036;
})();if(cljs.core.truth_(inst_13014))
{var statearr_13037_13065 = state_13027__$1;(statearr_13037_13065[(1)] = (13));
} else
{var statearr_13038_13066 = state_13027__$1;(statearr_13038_13066[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13028 === (2)))
{var inst_12990 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12991 = (0);var state_13027__$1 = (function (){var statearr_13039 = state_13027;(statearr_13039[(7)] = inst_12991);
(statearr_13039[(9)] = inst_12990);
return statearr_13039;
})();var statearr_13040_13067 = state_13027__$1;(statearr_13040_13067[(2)] = null);
(statearr_13040_13067[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13028 === (11)))
{var inst_12991 = (state_13027[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13027,(10),Object,null,(9));var inst_13000 = chs__$1.call(null,inst_12991);var inst_13001 = done.call(null,inst_12991);var inst_13002 = cljs.core.async.take_BANG_.call(null,inst_13000,inst_13001);var state_13027__$1 = state_13027;var statearr_13041_13068 = state_13027__$1;(statearr_13041_13068[(2)] = inst_13002);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13027__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13028 === (9)))
{var inst_12991 = (state_13027[(7)]);var inst_13004 = (state_13027[(2)]);var inst_13005 = (inst_12991 + (1));var inst_12991__$1 = inst_13005;var state_13027__$1 = (function (){var statearr_13042 = state_13027;(statearr_13042[(7)] = inst_12991__$1);
(statearr_13042[(10)] = inst_13004);
return statearr_13042;
})();var statearr_13043_13069 = state_13027__$1;(statearr_13043_13069[(2)] = null);
(statearr_13043_13069[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13028 === (5)))
{var inst_13011 = (state_13027[(2)]);var state_13027__$1 = (function (){var statearr_13044 = state_13027;(statearr_13044[(11)] = inst_13011);
return statearr_13044;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13027__$1,(12),dchan);
} else
{if((state_val_13028 === (14)))
{var inst_13013 = (state_13027[(8)]);var inst_13018 = cljs.core.apply.call(null,f,inst_13013);var state_13027__$1 = state_13027;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13027__$1,(16),out,inst_13018);
} else
{if((state_val_13028 === (16)))
{var inst_13020 = (state_13027[(2)]);var state_13027__$1 = (function (){var statearr_13045 = state_13027;(statearr_13045[(12)] = inst_13020);
return statearr_13045;
})();var statearr_13046_13070 = state_13027__$1;(statearr_13046_13070[(2)] = null);
(statearr_13046_13070[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13028 === (10)))
{var inst_12995 = (state_13027[(2)]);var inst_12996 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13027__$1 = (function (){var statearr_13047 = state_13027;(statearr_13047[(13)] = inst_12995);
return statearr_13047;
})();var statearr_13048_13071 = state_13027__$1;(statearr_13048_13071[(2)] = inst_12996);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13027__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13028 === (8)))
{var inst_13009 = (state_13027[(2)]);var state_13027__$1 = state_13027;var statearr_13049_13072 = state_13027__$1;(statearr_13049_13072[(2)] = inst_13009);
(statearr_13049_13072[(1)] = (5));
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
}
}
});})(c__6379__auto___13057,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6323__auto__,c__6379__auto___13057,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6324__auto__ = null;
var state_machine__6324__auto____0 = (function (){var statearr_13053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13053[(0)] = state_machine__6324__auto__);
(statearr_13053[(1)] = (1));
return statearr_13053;
});
var state_machine__6324__auto____1 = (function (state_13027){while(true){
var ret_value__6325__auto__ = (function (){try{while(true){
var result__6326__auto__ = switch__6323__auto__.call(null,state_13027);if(cljs.core.keyword_identical_QMARK_.call(null,result__6326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6326__auto__;
}
break;
}
}catch (e13054){if((e13054 instanceof Object))
{var ex__6327__auto__ = e13054;var statearr_13055_13073 = state_13027;(statearr_13055_13073[(5)] = ex__6327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13027);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13054;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13074 = state_13027;
state_13027 = G__13074;
continue;
}
} else
{return ret_value__6325__auto__;
}
break;
}
});
state_machine__6324__auto__ = function(state_13027){
switch(arguments.length){
case 0:
return state_machine__6324__auto____0.call(this);
case 1:
return state_machine__6324__auto____1.call(this,state_13027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6324__auto____0;
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6324__auto____1;
return state_machine__6324__auto__;
})()
;})(switch__6323__auto__,c__6379__auto___13057,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6381__auto__ = (function (){var statearr_13056 = f__6380__auto__.call(null);(statearr_13056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6379__auto___13057);
return statearr_13056;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6381__auto__);
});})(c__6379__auto___13057,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6379__auto___13182 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6379__auto___13182,out){
return (function (){var f__6380__auto__ = (function (){var switch__6323__auto__ = ((function (c__6379__auto___13182,out){
return (function (state_13158){var state_val_13159 = (state_13158[(1)]);if((state_val_13159 === (7)))
{var inst_13138 = (state_13158[(7)]);var inst_13137 = (state_13158[(8)]);var inst_13137__$1 = (state_13158[(2)]);var inst_13138__$1 = cljs.core.nth.call(null,inst_13137__$1,(0),null);var inst_13139 = cljs.core.nth.call(null,inst_13137__$1,(1),null);var inst_13140 = (inst_13138__$1 == null);var state_13158__$1 = (function (){var statearr_13160 = state_13158;(statearr_13160[(9)] = inst_13139);
(statearr_13160[(7)] = inst_13138__$1);
(statearr_13160[(8)] = inst_13137__$1);
return statearr_13160;
})();if(cljs.core.truth_(inst_13140))
{var statearr_13161_13183 = state_13158__$1;(statearr_13161_13183[(1)] = (8));
} else
{var statearr_13162_13184 = state_13158__$1;(statearr_13162_13184[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (1)))
{var inst_13129 = cljs.core.vec.call(null,chs);var inst_13130 = inst_13129;var state_13158__$1 = (function (){var statearr_13163 = state_13158;(statearr_13163[(10)] = inst_13130);
return statearr_13163;
})();var statearr_13164_13185 = state_13158__$1;(statearr_13164_13185[(2)] = null);
(statearr_13164_13185[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (4)))
{var inst_13130 = (state_13158[(10)]);var state_13158__$1 = state_13158;return cljs.core.async.ioc_alts_BANG_.call(null,state_13158__$1,(7),inst_13130);
} else
{if((state_val_13159 === (6)))
{var inst_13154 = (state_13158[(2)]);var state_13158__$1 = state_13158;var statearr_13165_13186 = state_13158__$1;(statearr_13165_13186[(2)] = inst_13154);
(statearr_13165_13186[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (3)))
{var inst_13156 = (state_13158[(2)]);var state_13158__$1 = state_13158;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13158__$1,inst_13156);
} else
{if((state_val_13159 === (2)))
{var inst_13130 = (state_13158[(10)]);var inst_13132 = cljs.core.count.call(null,inst_13130);var inst_13133 = (inst_13132 > (0));var state_13158__$1 = state_13158;if(cljs.core.truth_(inst_13133))
{var statearr_13167_13187 = state_13158__$1;(statearr_13167_13187[(1)] = (4));
} else
{var statearr_13168_13188 = state_13158__$1;(statearr_13168_13188[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (11)))
{var inst_13130 = (state_13158[(10)]);var inst_13147 = (state_13158[(2)]);var tmp13166 = inst_13130;var inst_13130__$1 = tmp13166;var state_13158__$1 = (function (){var statearr_13169 = state_13158;(statearr_13169[(10)] = inst_13130__$1);
(statearr_13169[(11)] = inst_13147);
return statearr_13169;
})();var statearr_13170_13189 = state_13158__$1;(statearr_13170_13189[(2)] = null);
(statearr_13170_13189[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (9)))
{var inst_13138 = (state_13158[(7)]);var state_13158__$1 = state_13158;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13158__$1,(11),out,inst_13138);
} else
{if((state_val_13159 === (5)))
{var inst_13152 = cljs.core.async.close_BANG_.call(null,out);var state_13158__$1 = state_13158;var statearr_13171_13190 = state_13158__$1;(statearr_13171_13190[(2)] = inst_13152);
(statearr_13171_13190[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (10)))
{var inst_13150 = (state_13158[(2)]);var state_13158__$1 = state_13158;var statearr_13172_13191 = state_13158__$1;(statearr_13172_13191[(2)] = inst_13150);
(statearr_13172_13191[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (8)))
{var inst_13139 = (state_13158[(9)]);var inst_13138 = (state_13158[(7)]);var inst_13130 = (state_13158[(10)]);var inst_13137 = (state_13158[(8)]);var inst_13142 = (function (){var c = inst_13139;var v = inst_13138;var vec__13135 = inst_13137;var cs = inst_13130;return ((function (c,v,vec__13135,cs,inst_13139,inst_13138,inst_13130,inst_13137,state_val_13159,c__6379__auto___13182,out){
return (function (p1__13075_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13075_SHARP_);
});
;})(c,v,vec__13135,cs,inst_13139,inst_13138,inst_13130,inst_13137,state_val_13159,c__6379__auto___13182,out))
})();var inst_13143 = cljs.core.filterv.call(null,inst_13142,inst_13130);var inst_13130__$1 = inst_13143;var state_13158__$1 = (function (){var statearr_13173 = state_13158;(statearr_13173[(10)] = inst_13130__$1);
return statearr_13173;
})();var statearr_13174_13192 = state_13158__$1;(statearr_13174_13192[(2)] = null);
(statearr_13174_13192[(1)] = (2));
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
});})(c__6379__auto___13182,out))
;return ((function (switch__6323__auto__,c__6379__auto___13182,out){
return (function() {
var state_machine__6324__auto__ = null;
var state_machine__6324__auto____0 = (function (){var statearr_13178 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13178[(0)] = state_machine__6324__auto__);
(statearr_13178[(1)] = (1));
return statearr_13178;
});
var state_machine__6324__auto____1 = (function (state_13158){while(true){
var ret_value__6325__auto__ = (function (){try{while(true){
var result__6326__auto__ = switch__6323__auto__.call(null,state_13158);if(cljs.core.keyword_identical_QMARK_.call(null,result__6326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6326__auto__;
}
break;
}
}catch (e13179){if((e13179 instanceof Object))
{var ex__6327__auto__ = e13179;var statearr_13180_13193 = state_13158;(statearr_13180_13193[(5)] = ex__6327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13158);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13179;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13194 = state_13158;
state_13158 = G__13194;
continue;
}
} else
{return ret_value__6325__auto__;
}
break;
}
});
state_machine__6324__auto__ = function(state_13158){
switch(arguments.length){
case 0:
return state_machine__6324__auto____0.call(this);
case 1:
return state_machine__6324__auto____1.call(this,state_13158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6324__auto____0;
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6324__auto____1;
return state_machine__6324__auto__;
})()
;})(switch__6323__auto__,c__6379__auto___13182,out))
})();var state__6381__auto__ = (function (){var statearr_13181 = f__6380__auto__.call(null);(statearr_13181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6379__auto___13182);
return statearr_13181;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6381__auto__);
});})(c__6379__auto___13182,out))
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
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6379__auto___13287 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6379__auto___13287,out){
return (function (){var f__6380__auto__ = (function (){var switch__6323__auto__ = ((function (c__6379__auto___13287,out){
return (function (state_13264){var state_val_13265 = (state_13264[(1)]);if((state_val_13265 === (7)))
{var inst_13246 = (state_13264[(7)]);var inst_13246__$1 = (state_13264[(2)]);var inst_13247 = (inst_13246__$1 == null);var inst_13248 = cljs.core.not.call(null,inst_13247);var state_13264__$1 = (function (){var statearr_13266 = state_13264;(statearr_13266[(7)] = inst_13246__$1);
return statearr_13266;
})();if(inst_13248)
{var statearr_13267_13288 = state_13264__$1;(statearr_13267_13288[(1)] = (8));
} else
{var statearr_13268_13289 = state_13264__$1;(statearr_13268_13289[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13265 === (1)))
{var inst_13241 = (0);var state_13264__$1 = (function (){var statearr_13269 = state_13264;(statearr_13269[(8)] = inst_13241);
return statearr_13269;
})();var statearr_13270_13290 = state_13264__$1;(statearr_13270_13290[(2)] = null);
(statearr_13270_13290[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13265 === (4)))
{var state_13264__$1 = state_13264;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13264__$1,(7),ch);
} else
{if((state_val_13265 === (6)))
{var inst_13259 = (state_13264[(2)]);var state_13264__$1 = state_13264;var statearr_13271_13291 = state_13264__$1;(statearr_13271_13291[(2)] = inst_13259);
(statearr_13271_13291[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13265 === (3)))
{var inst_13261 = (state_13264[(2)]);var inst_13262 = cljs.core.async.close_BANG_.call(null,out);var state_13264__$1 = (function (){var statearr_13272 = state_13264;(statearr_13272[(9)] = inst_13261);
return statearr_13272;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13264__$1,inst_13262);
} else
{if((state_val_13265 === (2)))
{var inst_13241 = (state_13264[(8)]);var inst_13243 = (inst_13241 < n);var state_13264__$1 = state_13264;if(cljs.core.truth_(inst_13243))
{var statearr_13273_13292 = state_13264__$1;(statearr_13273_13292[(1)] = (4));
} else
{var statearr_13274_13293 = state_13264__$1;(statearr_13274_13293[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13265 === (11)))
{var inst_13241 = (state_13264[(8)]);var inst_13251 = (state_13264[(2)]);var inst_13252 = (inst_13241 + (1));var inst_13241__$1 = inst_13252;var state_13264__$1 = (function (){var statearr_13275 = state_13264;(statearr_13275[(8)] = inst_13241__$1);
(statearr_13275[(10)] = inst_13251);
return statearr_13275;
})();var statearr_13276_13294 = state_13264__$1;(statearr_13276_13294[(2)] = null);
(statearr_13276_13294[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13265 === (9)))
{var state_13264__$1 = state_13264;var statearr_13277_13295 = state_13264__$1;(statearr_13277_13295[(2)] = null);
(statearr_13277_13295[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13265 === (5)))
{var state_13264__$1 = state_13264;var statearr_13278_13296 = state_13264__$1;(statearr_13278_13296[(2)] = null);
(statearr_13278_13296[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13265 === (10)))
{var inst_13256 = (state_13264[(2)]);var state_13264__$1 = state_13264;var statearr_13279_13297 = state_13264__$1;(statearr_13279_13297[(2)] = inst_13256);
(statearr_13279_13297[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13265 === (8)))
{var inst_13246 = (state_13264[(7)]);var state_13264__$1 = state_13264;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13264__$1,(11),out,inst_13246);
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
});})(c__6379__auto___13287,out))
;return ((function (switch__6323__auto__,c__6379__auto___13287,out){
return (function() {
var state_machine__6324__auto__ = null;
var state_machine__6324__auto____0 = (function (){var statearr_13283 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13283[(0)] = state_machine__6324__auto__);
(statearr_13283[(1)] = (1));
return statearr_13283;
});
var state_machine__6324__auto____1 = (function (state_13264){while(true){
var ret_value__6325__auto__ = (function (){try{while(true){
var result__6326__auto__ = switch__6323__auto__.call(null,state_13264);if(cljs.core.keyword_identical_QMARK_.call(null,result__6326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6326__auto__;
}
break;
}
}catch (e13284){if((e13284 instanceof Object))
{var ex__6327__auto__ = e13284;var statearr_13285_13298 = state_13264;(statearr_13285_13298[(5)] = ex__6327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13264);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13284;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13299 = state_13264;
state_13264 = G__13299;
continue;
}
} else
{return ret_value__6325__auto__;
}
break;
}
});
state_machine__6324__auto__ = function(state_13264){
switch(arguments.length){
case 0:
return state_machine__6324__auto____0.call(this);
case 1:
return state_machine__6324__auto____1.call(this,state_13264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6324__auto____0;
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6324__auto____1;
return state_machine__6324__auto__;
})()
;})(switch__6323__auto__,c__6379__auto___13287,out))
})();var state__6381__auto__ = (function (){var statearr_13286 = f__6380__auto__.call(null);(statearr_13286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6379__auto___13287);
return statearr_13286;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6381__auto__);
});})(c__6379__auto___13287,out))
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
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13307 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13307 = (function (ch,f,map_LT_,meta13308){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13308 = meta13308;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13307.cljs$lang$type = true;
cljs.core.async.t13307.cljs$lang$ctorStr = "cljs.core.async/t13307";
cljs.core.async.t13307.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13307");
});
cljs.core.async.t13307.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13307.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t13307.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13307.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13310 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13310 = (function (fn1,_,meta13308,ch,f,map_LT_,meta13311){
this.fn1 = fn1;
this._ = _;
this.meta13308 = meta13308;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13311 = meta13311;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13310.cljs$lang$type = true;
cljs.core.async.t13310.cljs$lang$ctorStr = "cljs.core.async/t13310";
cljs.core.async.t13310.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13310");
});})(___$1))
;
cljs.core.async.t13310.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13310.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t13310.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__13300_SHARP_){return f1.call(null,(((p1__13300_SHARP_ == null))?null:self__.f.call(null,p1__13300_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t13310.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13312){var self__ = this;
var _13312__$1 = this;return self__.meta13311;
});})(___$1))
;
cljs.core.async.t13310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13312,meta13311__$1){var self__ = this;
var _13312__$1 = this;return (new cljs.core.async.t13310(self__.fn1,self__._,self__.meta13308,self__.ch,self__.f,self__.map_LT_,meta13311__$1));
});})(___$1))
;
cljs.core.async.__GT_t13310 = ((function (___$1){
return (function __GT_t13310(fn1__$1,___$2,meta13308__$1,ch__$2,f__$2,map_LT___$2,meta13311){return (new cljs.core.async.t13310(fn1__$1,___$2,meta13308__$1,ch__$2,f__$2,map_LT___$2,meta13311));
});})(___$1))
;
}
return (new cljs.core.async.t13310(fn1,___$1,self__.meta13308,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3628__auto__ = ret;if(cljs.core.truth_(and__3628__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3628__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t13307.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13307.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13307.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t13307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13309){var self__ = this;
var _13309__$1 = this;return self__.meta13308;
});
cljs.core.async.t13307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13309,meta13308__$1){var self__ = this;
var _13309__$1 = this;return (new cljs.core.async.t13307(self__.ch,self__.f,self__.map_LT_,meta13308__$1));
});
cljs.core.async.__GT_t13307 = (function __GT_t13307(ch__$1,f__$1,map_LT___$1,meta13308){return (new cljs.core.async.t13307(ch__$1,f__$1,map_LT___$1,meta13308));
});
}
return (new cljs.core.async.t13307(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13316 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13316 = (function (ch,f,map_GT_,meta13317){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13317 = meta13317;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13316.cljs$lang$type = true;
cljs.core.async.t13316.cljs$lang$ctorStr = "cljs.core.async/t13316";
cljs.core.async.t13316.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13316");
});
cljs.core.async.t13316.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13316.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t13316.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13316.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13316.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13316.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13318){var self__ = this;
var _13318__$1 = this;return self__.meta13317;
});
cljs.core.async.t13316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13318,meta13317__$1){var self__ = this;
var _13318__$1 = this;return (new cljs.core.async.t13316(self__.ch,self__.f,self__.map_GT_,meta13317__$1));
});
cljs.core.async.__GT_t13316 = (function __GT_t13316(ch__$1,f__$1,map_GT___$1,meta13317){return (new cljs.core.async.t13316(ch__$1,f__$1,map_GT___$1,meta13317));
});
}
return (new cljs.core.async.t13316(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13322 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13322 = (function (ch,p,filter_GT_,meta13323){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13323 = meta13323;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13322.cljs$lang$type = true;
cljs.core.async.t13322.cljs$lang$ctorStr = "cljs.core.async/t13322";
cljs.core.async.t13322.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13322");
});
cljs.core.async.t13322.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13322.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t13322.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13322.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13322.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13322.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13322.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t13322.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13324){var self__ = this;
var _13324__$1 = this;return self__.meta13323;
});
cljs.core.async.t13322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13324,meta13323__$1){var self__ = this;
var _13324__$1 = this;return (new cljs.core.async.t13322(self__.ch,self__.p,self__.filter_GT_,meta13323__$1));
});
cljs.core.async.__GT_t13322 = (function __GT_t13322(ch__$1,p__$1,filter_GT___$1,meta13323){return (new cljs.core.async.t13322(ch__$1,p__$1,filter_GT___$1,meta13323));
});
}
return (new cljs.core.async.t13322(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6379__auto___13407 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6379__auto___13407,out){
return (function (){var f__6380__auto__ = (function (){var switch__6323__auto__ = ((function (c__6379__auto___13407,out){
return (function (state_13386){var state_val_13387 = (state_13386[(1)]);if((state_val_13387 === (7)))
{var inst_13382 = (state_13386[(2)]);var state_13386__$1 = state_13386;var statearr_13388_13408 = state_13386__$1;(statearr_13388_13408[(2)] = inst_13382);
(statearr_13388_13408[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13387 === (1)))
{var state_13386__$1 = state_13386;var statearr_13389_13409 = state_13386__$1;(statearr_13389_13409[(2)] = null);
(statearr_13389_13409[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13387 === (4)))
{var inst_13368 = (state_13386[(7)]);var inst_13368__$1 = (state_13386[(2)]);var inst_13369 = (inst_13368__$1 == null);var state_13386__$1 = (function (){var statearr_13390 = state_13386;(statearr_13390[(7)] = inst_13368__$1);
return statearr_13390;
})();if(cljs.core.truth_(inst_13369))
{var statearr_13391_13410 = state_13386__$1;(statearr_13391_13410[(1)] = (5));
} else
{var statearr_13392_13411 = state_13386__$1;(statearr_13392_13411[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13387 === (6)))
{var inst_13368 = (state_13386[(7)]);var inst_13373 = p.call(null,inst_13368);var state_13386__$1 = state_13386;if(cljs.core.truth_(inst_13373))
{var statearr_13393_13412 = state_13386__$1;(statearr_13393_13412[(1)] = (8));
} else
{var statearr_13394_13413 = state_13386__$1;(statearr_13394_13413[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13387 === (3)))
{var inst_13384 = (state_13386[(2)]);var state_13386__$1 = state_13386;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13386__$1,inst_13384);
} else
{if((state_val_13387 === (2)))
{var state_13386__$1 = state_13386;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13386__$1,(4),ch);
} else
{if((state_val_13387 === (11)))
{var inst_13376 = (state_13386[(2)]);var state_13386__$1 = state_13386;var statearr_13395_13414 = state_13386__$1;(statearr_13395_13414[(2)] = inst_13376);
(statearr_13395_13414[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13387 === (9)))
{var state_13386__$1 = state_13386;var statearr_13396_13415 = state_13386__$1;(statearr_13396_13415[(2)] = null);
(statearr_13396_13415[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13387 === (5)))
{var inst_13371 = cljs.core.async.close_BANG_.call(null,out);var state_13386__$1 = state_13386;var statearr_13397_13416 = state_13386__$1;(statearr_13397_13416[(2)] = inst_13371);
(statearr_13397_13416[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13387 === (10)))
{var inst_13379 = (state_13386[(2)]);var state_13386__$1 = (function (){var statearr_13398 = state_13386;(statearr_13398[(8)] = inst_13379);
return statearr_13398;
})();var statearr_13399_13417 = state_13386__$1;(statearr_13399_13417[(2)] = null);
(statearr_13399_13417[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13387 === (8)))
{var inst_13368 = (state_13386[(7)]);var state_13386__$1 = state_13386;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13386__$1,(11),out,inst_13368);
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
});})(c__6379__auto___13407,out))
;return ((function (switch__6323__auto__,c__6379__auto___13407,out){
return (function() {
var state_machine__6324__auto__ = null;
var state_machine__6324__auto____0 = (function (){var statearr_13403 = [null,null,null,null,null,null,null,null,null];(statearr_13403[(0)] = state_machine__6324__auto__);
(statearr_13403[(1)] = (1));
return statearr_13403;
});
var state_machine__6324__auto____1 = (function (state_13386){while(true){
var ret_value__6325__auto__ = (function (){try{while(true){
var result__6326__auto__ = switch__6323__auto__.call(null,state_13386);if(cljs.core.keyword_identical_QMARK_.call(null,result__6326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6326__auto__;
}
break;
}
}catch (e13404){if((e13404 instanceof Object))
{var ex__6327__auto__ = e13404;var statearr_13405_13418 = state_13386;(statearr_13405_13418[(5)] = ex__6327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13386);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13404;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13419 = state_13386;
state_13386 = G__13419;
continue;
}
} else
{return ret_value__6325__auto__;
}
break;
}
});
state_machine__6324__auto__ = function(state_13386){
switch(arguments.length){
case 0:
return state_machine__6324__auto____0.call(this);
case 1:
return state_machine__6324__auto____1.call(this,state_13386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6324__auto____0;
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6324__auto____1;
return state_machine__6324__auto__;
})()
;})(switch__6323__auto__,c__6379__auto___13407,out))
})();var state__6381__auto__ = (function (){var statearr_13406 = f__6380__auto__.call(null);(statearr_13406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6379__auto___13407);
return statearr_13406;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6381__auto__);
});})(c__6379__auto___13407,out))
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
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6379__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6379__auto__){
return (function (){var f__6380__auto__ = (function (){var switch__6323__auto__ = ((function (c__6379__auto__){
return (function (state_13585){var state_val_13586 = (state_13585[(1)]);if((state_val_13586 === (7)))
{var inst_13581 = (state_13585[(2)]);var state_13585__$1 = state_13585;var statearr_13587_13628 = state_13585__$1;(statearr_13587_13628[(2)] = inst_13581);
(statearr_13587_13628[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13586 === (20)))
{var inst_13551 = (state_13585[(7)]);var inst_13562 = (state_13585[(2)]);var inst_13563 = cljs.core.next.call(null,inst_13551);var inst_13537 = inst_13563;var inst_13538 = null;var inst_13539 = (0);var inst_13540 = (0);var state_13585__$1 = (function (){var statearr_13588 = state_13585;(statearr_13588[(8)] = inst_13540);
(statearr_13588[(9)] = inst_13562);
(statearr_13588[(10)] = inst_13537);
(statearr_13588[(11)] = inst_13539);
(statearr_13588[(12)] = inst_13538);
return statearr_13588;
})();var statearr_13589_13629 = state_13585__$1;(statearr_13589_13629[(2)] = null);
(statearr_13589_13629[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13586 === (1)))
{var state_13585__$1 = state_13585;var statearr_13590_13630 = state_13585__$1;(statearr_13590_13630[(2)] = null);
(statearr_13590_13630[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13586 === (4)))
{var inst_13526 = (state_13585[(13)]);var inst_13526__$1 = (state_13585[(2)]);var inst_13527 = (inst_13526__$1 == null);var state_13585__$1 = (function (){var statearr_13591 = state_13585;(statearr_13591[(13)] = inst_13526__$1);
return statearr_13591;
})();if(cljs.core.truth_(inst_13527))
{var statearr_13592_13631 = state_13585__$1;(statearr_13592_13631[(1)] = (5));
} else
{var statearr_13593_13632 = state_13585__$1;(statearr_13593_13632[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13586 === (15)))
{var state_13585__$1 = state_13585;var statearr_13597_13633 = state_13585__$1;(statearr_13597_13633[(2)] = null);
(statearr_13597_13633[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13586 === (21)))
{var state_13585__$1 = state_13585;var statearr_13598_13634 = state_13585__$1;(statearr_13598_13634[(2)] = null);
(statearr_13598_13634[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13586 === (13)))
{var inst_13540 = (state_13585[(8)]);var inst_13537 = (state_13585[(10)]);var inst_13539 = (state_13585[(11)]);var inst_13538 = (state_13585[(12)]);var inst_13547 = (state_13585[(2)]);var inst_13548 = (inst_13540 + (1));var tmp13594 = inst_13537;var tmp13595 = inst_13539;var tmp13596 = inst_13538;var inst_13537__$1 = tmp13594;var inst_13538__$1 = tmp13596;var inst_13539__$1 = tmp13595;var inst_13540__$1 = inst_13548;var state_13585__$1 = (function (){var statearr_13599 = state_13585;(statearr_13599[(8)] = inst_13540__$1);
(statearr_13599[(14)] = inst_13547);
(statearr_13599[(10)] = inst_13537__$1);
(statearr_13599[(11)] = inst_13539__$1);
(statearr_13599[(12)] = inst_13538__$1);
return statearr_13599;
})();var statearr_13600_13635 = state_13585__$1;(statearr_13600_13635[(2)] = null);
(statearr_13600_13635[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13586 === (22)))
{var state_13585__$1 = state_13585;var statearr_13601_13636 = state_13585__$1;(statearr_13601_13636[(2)] = null);
(statearr_13601_13636[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13586 === (6)))
{var inst_13526 = (state_13585[(13)]);var inst_13535 = f.call(null,inst_13526);var inst_13536 = cljs.core.seq.call(null,inst_13535);var inst_13537 = inst_13536;var inst_13538 = null;var inst_13539 = (0);var inst_13540 = (0);var state_13585__$1 = (function (){var statearr_13602 = state_13585;(statearr_13602[(8)] = inst_13540);
(statearr_13602[(10)] = inst_13537);
(statearr_13602[(11)] = inst_13539);
(statearr_13602[(12)] = inst_13538);
return statearr_13602;
})();var statearr_13603_13637 = state_13585__$1;(statearr_13603_13637[(2)] = null);
(statearr_13603_13637[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13586 === (17)))
{var inst_13551 = (state_13585[(7)]);var inst_13555 = cljs.core.chunk_first.call(null,inst_13551);var inst_13556 = cljs.core.chunk_rest.call(null,inst_13551);var inst_13557 = cljs.core.count.call(null,inst_13555);var inst_13537 = inst_13556;var inst_13538 = inst_13555;var inst_13539 = inst_13557;var inst_13540 = (0);var state_13585__$1 = (function (){var statearr_13604 = state_13585;(statearr_13604[(8)] = inst_13540);
(statearr_13604[(10)] = inst_13537);
(statearr_13604[(11)] = inst_13539);
(statearr_13604[(12)] = inst_13538);
return statearr_13604;
})();var statearr_13605_13638 = state_13585__$1;(statearr_13605_13638[(2)] = null);
(statearr_13605_13638[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13586 === (3)))
{var inst_13583 = (state_13585[(2)]);var state_13585__$1 = state_13585;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13585__$1,inst_13583);
} else
{if((state_val_13586 === (12)))
{var inst_13571 = (state_13585[(2)]);var state_13585__$1 = state_13585;var statearr_13606_13639 = state_13585__$1;(statearr_13606_13639[(2)] = inst_13571);
(statearr_13606_13639[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13586 === (2)))
{var state_13585__$1 = state_13585;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13585__$1,(4),in$);
} else
{if((state_val_13586 === (23)))
{var inst_13579 = (state_13585[(2)]);var state_13585__$1 = state_13585;var statearr_13607_13640 = state_13585__$1;(statearr_13607_13640[(2)] = inst_13579);
(statearr_13607_13640[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13586 === (19)))
{var inst_13566 = (state_13585[(2)]);var state_13585__$1 = state_13585;var statearr_13608_13641 = state_13585__$1;(statearr_13608_13641[(2)] = inst_13566);
(statearr_13608_13641[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13586 === (11)))
{var inst_13551 = (state_13585[(7)]);var inst_13537 = (state_13585[(10)]);var inst_13551__$1 = cljs.core.seq.call(null,inst_13537);var state_13585__$1 = (function (){var statearr_13609 = state_13585;(statearr_13609[(7)] = inst_13551__$1);
return statearr_13609;
})();if(inst_13551__$1)
{var statearr_13610_13642 = state_13585__$1;(statearr_13610_13642[(1)] = (14));
} else
{var statearr_13611_13643 = state_13585__$1;(statearr_13611_13643[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13586 === (9)))
{var inst_13573 = (state_13585[(2)]);var inst_13574 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_13585__$1 = (function (){var statearr_13612 = state_13585;(statearr_13612[(15)] = inst_13573);
return statearr_13612;
})();if(cljs.core.truth_(inst_13574))
{var statearr_13613_13644 = state_13585__$1;(statearr_13613_13644[(1)] = (21));
} else
{var statearr_13614_13645 = state_13585__$1;(statearr_13614_13645[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13586 === (5)))
{var inst_13529 = cljs.core.async.close_BANG_.call(null,out);var state_13585__$1 = state_13585;var statearr_13615_13646 = state_13585__$1;(statearr_13615_13646[(2)] = inst_13529);
(statearr_13615_13646[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13586 === (14)))
{var inst_13551 = (state_13585[(7)]);var inst_13553 = cljs.core.chunked_seq_QMARK_.call(null,inst_13551);var state_13585__$1 = state_13585;if(inst_13553)
{var statearr_13616_13647 = state_13585__$1;(statearr_13616_13647[(1)] = (17));
} else
{var statearr_13617_13648 = state_13585__$1;(statearr_13617_13648[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13586 === (16)))
{var inst_13569 = (state_13585[(2)]);var state_13585__$1 = state_13585;var statearr_13618_13649 = state_13585__$1;(statearr_13618_13649[(2)] = inst_13569);
(statearr_13618_13649[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13586 === (10)))
{var inst_13540 = (state_13585[(8)]);var inst_13538 = (state_13585[(12)]);var inst_13545 = cljs.core._nth.call(null,inst_13538,inst_13540);var state_13585__$1 = state_13585;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13585__$1,(13),out,inst_13545);
} else
{if((state_val_13586 === (18)))
{var inst_13551 = (state_13585[(7)]);var inst_13560 = cljs.core.first.call(null,inst_13551);var state_13585__$1 = state_13585;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13585__$1,(20),out,inst_13560);
} else
{if((state_val_13586 === (8)))
{var inst_13540 = (state_13585[(8)]);var inst_13539 = (state_13585[(11)]);var inst_13542 = (inst_13540 < inst_13539);var inst_13543 = inst_13542;var state_13585__$1 = state_13585;if(cljs.core.truth_(inst_13543))
{var statearr_13619_13650 = state_13585__$1;(statearr_13619_13650[(1)] = (10));
} else
{var statearr_13620_13651 = state_13585__$1;(statearr_13620_13651[(1)] = (11));
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
}
}
}
}
}
}
}
}
}
});})(c__6379__auto__))
;return ((function (switch__6323__auto__,c__6379__auto__){
return (function() {
var state_machine__6324__auto__ = null;
var state_machine__6324__auto____0 = (function (){var statearr_13624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13624[(0)] = state_machine__6324__auto__);
(statearr_13624[(1)] = (1));
return statearr_13624;
});
var state_machine__6324__auto____1 = (function (state_13585){while(true){
var ret_value__6325__auto__ = (function (){try{while(true){
var result__6326__auto__ = switch__6323__auto__.call(null,state_13585);if(cljs.core.keyword_identical_QMARK_.call(null,result__6326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6326__auto__;
}
break;
}
}catch (e13625){if((e13625 instanceof Object))
{var ex__6327__auto__ = e13625;var statearr_13626_13652 = state_13585;(statearr_13626_13652[(5)] = ex__6327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13585);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13625;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13653 = state_13585;
state_13585 = G__13653;
continue;
}
} else
{return ret_value__6325__auto__;
}
break;
}
});
state_machine__6324__auto__ = function(state_13585){
switch(arguments.length){
case 0:
return state_machine__6324__auto____0.call(this);
case 1:
return state_machine__6324__auto____1.call(this,state_13585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6324__auto____0;
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6324__auto____1;
return state_machine__6324__auto__;
})()
;})(switch__6323__auto__,c__6379__auto__))
})();var state__6381__auto__ = (function (){var statearr_13627 = f__6380__auto__.call(null);(statearr_13627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6379__auto__);
return statearr_13627;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6381__auto__);
});})(c__6379__auto__))
);
return c__6379__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
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
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
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
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6379__auto___13750 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6379__auto___13750,out){
return (function (){var f__6380__auto__ = (function (){var switch__6323__auto__ = ((function (c__6379__auto___13750,out){
return (function (state_13725){var state_val_13726 = (state_13725[(1)]);if((state_val_13726 === (7)))
{var inst_13720 = (state_13725[(2)]);var state_13725__$1 = state_13725;var statearr_13727_13751 = state_13725__$1;(statearr_13727_13751[(2)] = inst_13720);
(statearr_13727_13751[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13726 === (1)))
{var inst_13702 = null;var state_13725__$1 = (function (){var statearr_13728 = state_13725;(statearr_13728[(7)] = inst_13702);
return statearr_13728;
})();var statearr_13729_13752 = state_13725__$1;(statearr_13729_13752[(2)] = null);
(statearr_13729_13752[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13726 === (4)))
{var inst_13705 = (state_13725[(8)]);var inst_13705__$1 = (state_13725[(2)]);var inst_13706 = (inst_13705__$1 == null);var inst_13707 = cljs.core.not.call(null,inst_13706);var state_13725__$1 = (function (){var statearr_13730 = state_13725;(statearr_13730[(8)] = inst_13705__$1);
return statearr_13730;
})();if(inst_13707)
{var statearr_13731_13753 = state_13725__$1;(statearr_13731_13753[(1)] = (5));
} else
{var statearr_13732_13754 = state_13725__$1;(statearr_13732_13754[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13726 === (6)))
{var state_13725__$1 = state_13725;var statearr_13733_13755 = state_13725__$1;(statearr_13733_13755[(2)] = null);
(statearr_13733_13755[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13726 === (3)))
{var inst_13722 = (state_13725[(2)]);var inst_13723 = cljs.core.async.close_BANG_.call(null,out);var state_13725__$1 = (function (){var statearr_13734 = state_13725;(statearr_13734[(9)] = inst_13722);
return statearr_13734;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13725__$1,inst_13723);
} else
{if((state_val_13726 === (2)))
{var state_13725__$1 = state_13725;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13725__$1,(4),ch);
} else
{if((state_val_13726 === (11)))
{var inst_13705 = (state_13725[(8)]);var inst_13714 = (state_13725[(2)]);var inst_13702 = inst_13705;var state_13725__$1 = (function (){var statearr_13735 = state_13725;(statearr_13735[(7)] = inst_13702);
(statearr_13735[(10)] = inst_13714);
return statearr_13735;
})();var statearr_13736_13756 = state_13725__$1;(statearr_13736_13756[(2)] = null);
(statearr_13736_13756[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13726 === (9)))
{var inst_13705 = (state_13725[(8)]);var state_13725__$1 = state_13725;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13725__$1,(11),out,inst_13705);
} else
{if((state_val_13726 === (5)))
{var inst_13702 = (state_13725[(7)]);var inst_13705 = (state_13725[(8)]);var inst_13709 = cljs.core._EQ_.call(null,inst_13705,inst_13702);var state_13725__$1 = state_13725;if(inst_13709)
{var statearr_13738_13757 = state_13725__$1;(statearr_13738_13757[(1)] = (8));
} else
{var statearr_13739_13758 = state_13725__$1;(statearr_13739_13758[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13726 === (10)))
{var inst_13717 = (state_13725[(2)]);var state_13725__$1 = state_13725;var statearr_13740_13759 = state_13725__$1;(statearr_13740_13759[(2)] = inst_13717);
(statearr_13740_13759[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13726 === (8)))
{var inst_13702 = (state_13725[(7)]);var tmp13737 = inst_13702;var inst_13702__$1 = tmp13737;var state_13725__$1 = (function (){var statearr_13741 = state_13725;(statearr_13741[(7)] = inst_13702__$1);
return statearr_13741;
})();var statearr_13742_13760 = state_13725__$1;(statearr_13742_13760[(2)] = null);
(statearr_13742_13760[(1)] = (2));
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
});})(c__6379__auto___13750,out))
;return ((function (switch__6323__auto__,c__6379__auto___13750,out){
return (function() {
var state_machine__6324__auto__ = null;
var state_machine__6324__auto____0 = (function (){var statearr_13746 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13746[(0)] = state_machine__6324__auto__);
(statearr_13746[(1)] = (1));
return statearr_13746;
});
var state_machine__6324__auto____1 = (function (state_13725){while(true){
var ret_value__6325__auto__ = (function (){try{while(true){
var result__6326__auto__ = switch__6323__auto__.call(null,state_13725);if(cljs.core.keyword_identical_QMARK_.call(null,result__6326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6326__auto__;
}
break;
}
}catch (e13747){if((e13747 instanceof Object))
{var ex__6327__auto__ = e13747;var statearr_13748_13761 = state_13725;(statearr_13748_13761[(5)] = ex__6327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13725);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13747;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13762 = state_13725;
state_13725 = G__13762;
continue;
}
} else
{return ret_value__6325__auto__;
}
break;
}
});
state_machine__6324__auto__ = function(state_13725){
switch(arguments.length){
case 0:
return state_machine__6324__auto____0.call(this);
case 1:
return state_machine__6324__auto____1.call(this,state_13725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6324__auto____0;
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6324__auto____1;
return state_machine__6324__auto__;
})()
;})(switch__6323__auto__,c__6379__auto___13750,out))
})();var state__6381__auto__ = (function (){var statearr_13749 = f__6380__auto__.call(null);(statearr_13749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6379__auto___13750);
return statearr_13749;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6381__auto__);
});})(c__6379__auto___13750,out))
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
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6379__auto___13897 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6379__auto___13897,out){
return (function (){var f__6380__auto__ = (function (){var switch__6323__auto__ = ((function (c__6379__auto___13897,out){
return (function (state_13867){var state_val_13868 = (state_13867[(1)]);if((state_val_13868 === (7)))
{var inst_13863 = (state_13867[(2)]);var state_13867__$1 = state_13867;var statearr_13869_13898 = state_13867__$1;(statearr_13869_13898[(2)] = inst_13863);
(statearr_13869_13898[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13868 === (1)))
{var inst_13830 = (new Array(n));var inst_13831 = inst_13830;var inst_13832 = (0);var state_13867__$1 = (function (){var statearr_13870 = state_13867;(statearr_13870[(7)] = inst_13832);
(statearr_13870[(8)] = inst_13831);
return statearr_13870;
})();var statearr_13871_13899 = state_13867__$1;(statearr_13871_13899[(2)] = null);
(statearr_13871_13899[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13868 === (4)))
{var inst_13835 = (state_13867[(9)]);var inst_13835__$1 = (state_13867[(2)]);var inst_13836 = (inst_13835__$1 == null);var inst_13837 = cljs.core.not.call(null,inst_13836);var state_13867__$1 = (function (){var statearr_13872 = state_13867;(statearr_13872[(9)] = inst_13835__$1);
return statearr_13872;
})();if(inst_13837)
{var statearr_13873_13900 = state_13867__$1;(statearr_13873_13900[(1)] = (5));
} else
{var statearr_13874_13901 = state_13867__$1;(statearr_13874_13901[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13868 === (15)))
{var inst_13857 = (state_13867[(2)]);var state_13867__$1 = state_13867;var statearr_13875_13902 = state_13867__$1;(statearr_13875_13902[(2)] = inst_13857);
(statearr_13875_13902[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13868 === (13)))
{var state_13867__$1 = state_13867;var statearr_13876_13903 = state_13867__$1;(statearr_13876_13903[(2)] = null);
(statearr_13876_13903[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13868 === (6)))
{var inst_13832 = (state_13867[(7)]);var inst_13853 = (inst_13832 > (0));var state_13867__$1 = state_13867;if(cljs.core.truth_(inst_13853))
{var statearr_13877_13904 = state_13867__$1;(statearr_13877_13904[(1)] = (12));
} else
{var statearr_13878_13905 = state_13867__$1;(statearr_13878_13905[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13868 === (3)))
{var inst_13865 = (state_13867[(2)]);var state_13867__$1 = state_13867;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13867__$1,inst_13865);
} else
{if((state_val_13868 === (12)))
{var inst_13831 = (state_13867[(8)]);var inst_13855 = cljs.core.vec.call(null,inst_13831);var state_13867__$1 = state_13867;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13867__$1,(15),out,inst_13855);
} else
{if((state_val_13868 === (2)))
{var state_13867__$1 = state_13867;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13867__$1,(4),ch);
} else
{if((state_val_13868 === (11)))
{var inst_13847 = (state_13867[(2)]);var inst_13848 = (new Array(n));var inst_13831 = inst_13848;var inst_13832 = (0);var state_13867__$1 = (function (){var statearr_13879 = state_13867;(statearr_13879[(7)] = inst_13832);
(statearr_13879[(8)] = inst_13831);
(statearr_13879[(10)] = inst_13847);
return statearr_13879;
})();var statearr_13880_13906 = state_13867__$1;(statearr_13880_13906[(2)] = null);
(statearr_13880_13906[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13868 === (9)))
{var inst_13831 = (state_13867[(8)]);var inst_13845 = cljs.core.vec.call(null,inst_13831);var state_13867__$1 = state_13867;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13867__$1,(11),out,inst_13845);
} else
{if((state_val_13868 === (5)))
{var inst_13832 = (state_13867[(7)]);var inst_13835 = (state_13867[(9)]);var inst_13831 = (state_13867[(8)]);var inst_13840 = (state_13867[(11)]);var inst_13839 = (inst_13831[inst_13832] = inst_13835);var inst_13840__$1 = (inst_13832 + (1));var inst_13841 = (inst_13840__$1 < n);var state_13867__$1 = (function (){var statearr_13881 = state_13867;(statearr_13881[(12)] = inst_13839);
(statearr_13881[(11)] = inst_13840__$1);
return statearr_13881;
})();if(cljs.core.truth_(inst_13841))
{var statearr_13882_13907 = state_13867__$1;(statearr_13882_13907[(1)] = (8));
} else
{var statearr_13883_13908 = state_13867__$1;(statearr_13883_13908[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13868 === (14)))
{var inst_13860 = (state_13867[(2)]);var inst_13861 = cljs.core.async.close_BANG_.call(null,out);var state_13867__$1 = (function (){var statearr_13885 = state_13867;(statearr_13885[(13)] = inst_13860);
return statearr_13885;
})();var statearr_13886_13909 = state_13867__$1;(statearr_13886_13909[(2)] = inst_13861);
(statearr_13886_13909[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13868 === (10)))
{var inst_13851 = (state_13867[(2)]);var state_13867__$1 = state_13867;var statearr_13887_13910 = state_13867__$1;(statearr_13887_13910[(2)] = inst_13851);
(statearr_13887_13910[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13868 === (8)))
{var inst_13831 = (state_13867[(8)]);var inst_13840 = (state_13867[(11)]);var tmp13884 = inst_13831;var inst_13831__$1 = tmp13884;var inst_13832 = inst_13840;var state_13867__$1 = (function (){var statearr_13888 = state_13867;(statearr_13888[(7)] = inst_13832);
(statearr_13888[(8)] = inst_13831__$1);
return statearr_13888;
})();var statearr_13889_13911 = state_13867__$1;(statearr_13889_13911[(2)] = null);
(statearr_13889_13911[(1)] = (2));
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
}
});})(c__6379__auto___13897,out))
;return ((function (switch__6323__auto__,c__6379__auto___13897,out){
return (function() {
var state_machine__6324__auto__ = null;
var state_machine__6324__auto____0 = (function (){var statearr_13893 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13893[(0)] = state_machine__6324__auto__);
(statearr_13893[(1)] = (1));
return statearr_13893;
});
var state_machine__6324__auto____1 = (function (state_13867){while(true){
var ret_value__6325__auto__ = (function (){try{while(true){
var result__6326__auto__ = switch__6323__auto__.call(null,state_13867);if(cljs.core.keyword_identical_QMARK_.call(null,result__6326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6326__auto__;
}
break;
}
}catch (e13894){if((e13894 instanceof Object))
{var ex__6327__auto__ = e13894;var statearr_13895_13912 = state_13867;(statearr_13895_13912[(5)] = ex__6327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13867);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13894;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13913 = state_13867;
state_13867 = G__13913;
continue;
}
} else
{return ret_value__6325__auto__;
}
break;
}
});
state_machine__6324__auto__ = function(state_13867){
switch(arguments.length){
case 0:
return state_machine__6324__auto____0.call(this);
case 1:
return state_machine__6324__auto____1.call(this,state_13867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6324__auto____0;
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6324__auto____1;
return state_machine__6324__auto__;
})()
;})(switch__6323__auto__,c__6379__auto___13897,out))
})();var state__6381__auto__ = (function (){var statearr_13896 = f__6380__auto__.call(null);(statearr_13896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6379__auto___13897);
return statearr_13896;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6381__auto__);
});})(c__6379__auto___13897,out))
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
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6379__auto___14056 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6379__auto___14056,out){
return (function (){var f__6380__auto__ = (function (){var switch__6323__auto__ = ((function (c__6379__auto___14056,out){
return (function (state_14026){var state_val_14027 = (state_14026[(1)]);if((state_val_14027 === (7)))
{var inst_14022 = (state_14026[(2)]);var state_14026__$1 = state_14026;var statearr_14028_14057 = state_14026__$1;(statearr_14028_14057[(2)] = inst_14022);
(statearr_14028_14057[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14027 === (1)))
{var inst_13985 = [];var inst_13986 = inst_13985;var inst_13987 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_14026__$1 = (function (){var statearr_14029 = state_14026;(statearr_14029[(7)] = inst_13986);
(statearr_14029[(8)] = inst_13987);
return statearr_14029;
})();var statearr_14030_14058 = state_14026__$1;(statearr_14030_14058[(2)] = null);
(statearr_14030_14058[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14027 === (4)))
{var inst_13990 = (state_14026[(9)]);var inst_13990__$1 = (state_14026[(2)]);var inst_13991 = (inst_13990__$1 == null);var inst_13992 = cljs.core.not.call(null,inst_13991);var state_14026__$1 = (function (){var statearr_14031 = state_14026;(statearr_14031[(9)] = inst_13990__$1);
return statearr_14031;
})();if(inst_13992)
{var statearr_14032_14059 = state_14026__$1;(statearr_14032_14059[(1)] = (5));
} else
{var statearr_14033_14060 = state_14026__$1;(statearr_14033_14060[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14027 === (15)))
{var inst_14016 = (state_14026[(2)]);var state_14026__$1 = state_14026;var statearr_14034_14061 = state_14026__$1;(statearr_14034_14061[(2)] = inst_14016);
(statearr_14034_14061[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14027 === (13)))
{var state_14026__$1 = state_14026;var statearr_14035_14062 = state_14026__$1;(statearr_14035_14062[(2)] = null);
(statearr_14035_14062[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14027 === (6)))
{var inst_13986 = (state_14026[(7)]);var inst_14011 = inst_13986.length;var inst_14012 = (inst_14011 > (0));var state_14026__$1 = state_14026;if(cljs.core.truth_(inst_14012))
{var statearr_14036_14063 = state_14026__$1;(statearr_14036_14063[(1)] = (12));
} else
{var statearr_14037_14064 = state_14026__$1;(statearr_14037_14064[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14027 === (3)))
{var inst_14024 = (state_14026[(2)]);var state_14026__$1 = state_14026;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14026__$1,inst_14024);
} else
{if((state_val_14027 === (12)))
{var inst_13986 = (state_14026[(7)]);var inst_14014 = cljs.core.vec.call(null,inst_13986);var state_14026__$1 = state_14026;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14026__$1,(15),out,inst_14014);
} else
{if((state_val_14027 === (2)))
{var state_14026__$1 = state_14026;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14026__$1,(4),ch);
} else
{if((state_val_14027 === (11)))
{var inst_13994 = (state_14026[(10)]);var inst_13990 = (state_14026[(9)]);var inst_14004 = (state_14026[(2)]);var inst_14005 = [];var inst_14006 = inst_14005.push(inst_13990);var inst_13986 = inst_14005;var inst_13987 = inst_13994;var state_14026__$1 = (function (){var statearr_14038 = state_14026;(statearr_14038[(11)] = inst_14004);
(statearr_14038[(7)] = inst_13986);
(statearr_14038[(8)] = inst_13987);
(statearr_14038[(12)] = inst_14006);
return statearr_14038;
})();var statearr_14039_14065 = state_14026__$1;(statearr_14039_14065[(2)] = null);
(statearr_14039_14065[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14027 === (9)))
{var inst_13986 = (state_14026[(7)]);var inst_14002 = cljs.core.vec.call(null,inst_13986);var state_14026__$1 = state_14026;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14026__$1,(11),out,inst_14002);
} else
{if((state_val_14027 === (5)))
{var inst_13994 = (state_14026[(10)]);var inst_13987 = (state_14026[(8)]);var inst_13990 = (state_14026[(9)]);var inst_13994__$1 = f.call(null,inst_13990);var inst_13995 = cljs.core._EQ_.call(null,inst_13994__$1,inst_13987);var inst_13996 = cljs.core.keyword_identical_QMARK_.call(null,inst_13987,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_13997 = (inst_13995) || (inst_13996);var state_14026__$1 = (function (){var statearr_14040 = state_14026;(statearr_14040[(10)] = inst_13994__$1);
return statearr_14040;
})();if(cljs.core.truth_(inst_13997))
{var statearr_14041_14066 = state_14026__$1;(statearr_14041_14066[(1)] = (8));
} else
{var statearr_14042_14067 = state_14026__$1;(statearr_14042_14067[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14027 === (14)))
{var inst_14019 = (state_14026[(2)]);var inst_14020 = cljs.core.async.close_BANG_.call(null,out);var state_14026__$1 = (function (){var statearr_14044 = state_14026;(statearr_14044[(13)] = inst_14019);
return statearr_14044;
})();var statearr_14045_14068 = state_14026__$1;(statearr_14045_14068[(2)] = inst_14020);
(statearr_14045_14068[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14027 === (10)))
{var inst_14009 = (state_14026[(2)]);var state_14026__$1 = state_14026;var statearr_14046_14069 = state_14026__$1;(statearr_14046_14069[(2)] = inst_14009);
(statearr_14046_14069[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14027 === (8)))
{var inst_13994 = (state_14026[(10)]);var inst_13986 = (state_14026[(7)]);var inst_13990 = (state_14026[(9)]);var inst_13999 = inst_13986.push(inst_13990);var tmp14043 = inst_13986;var inst_13986__$1 = tmp14043;var inst_13987 = inst_13994;var state_14026__$1 = (function (){var statearr_14047 = state_14026;(statearr_14047[(7)] = inst_13986__$1);
(statearr_14047[(8)] = inst_13987);
(statearr_14047[(14)] = inst_13999);
return statearr_14047;
})();var statearr_14048_14070 = state_14026__$1;(statearr_14048_14070[(2)] = null);
(statearr_14048_14070[(1)] = (2));
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
}
});})(c__6379__auto___14056,out))
;return ((function (switch__6323__auto__,c__6379__auto___14056,out){
return (function() {
var state_machine__6324__auto__ = null;
var state_machine__6324__auto____0 = (function (){var statearr_14052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14052[(0)] = state_machine__6324__auto__);
(statearr_14052[(1)] = (1));
return statearr_14052;
});
var state_machine__6324__auto____1 = (function (state_14026){while(true){
var ret_value__6325__auto__ = (function (){try{while(true){
var result__6326__auto__ = switch__6323__auto__.call(null,state_14026);if(cljs.core.keyword_identical_QMARK_.call(null,result__6326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6326__auto__;
}
break;
}
}catch (e14053){if((e14053 instanceof Object))
{var ex__6327__auto__ = e14053;var statearr_14054_14071 = state_14026;(statearr_14054_14071[(5)] = ex__6327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14026);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14053;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14072 = state_14026;
state_14026 = G__14072;
continue;
}
} else
{return ret_value__6325__auto__;
}
break;
}
});
state_machine__6324__auto__ = function(state_14026){
switch(arguments.length){
case 0:
return state_machine__6324__auto____0.call(this);
case 1:
return state_machine__6324__auto____1.call(this,state_14026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6324__auto____0;
state_machine__6324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6324__auto____1;
return state_machine__6324__auto__;
})()
;})(switch__6323__auto__,c__6379__auto___14056,out))
})();var state__6381__auto__ = (function (){var statearr_14055 = f__6380__auto__.call(null);(statearr_14055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6379__auto___14056);
return statearr_14055;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6381__auto__);
});})(c__6379__auto___14056,out))
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

//# sourceMappingURL=async.js.map
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23816 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23816 = (function (f,fn_handler,meta23817){
this.f = f;
this.fn_handler = fn_handler;
this.meta23817 = meta23817;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23816.cljs$lang$type = true;
cljs.core.async.t23816.cljs$lang$ctorStr = "cljs.core.async/t23816";
cljs.core.async.t23816.cljs$lang$ctorPrWriter = (function (this__15777__auto__,writer__15778__auto__,opt__15779__auto__){return cljs.core._write.call(null,writer__15778__auto__,"cljs.core.async/t23816");
});
cljs.core.async.t23816.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23816.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23816.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23816.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23818){var self__ = this;
var _23818__$1 = this;return self__.meta23817;
});
cljs.core.async.t23816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23818,meta23817__$1){var self__ = this;
var _23818__$1 = this;return (new cljs.core.async.t23816(self__.f,self__.fn_handler,meta23817__$1));
});
cljs.core.async.__GT_t23816 = (function __GT_t23816(f__$1,fn_handler__$1,meta23817){return (new cljs.core.async.t23816(f__$1,fn_handler__$1,meta23817));
});
}
return (new cljs.core.async.t23816(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23820 = buff;if(G__23820)
{var bit__15864__auto__ = null;if(cljs.core.truth_((function (){var or__15200__auto__ = bit__15864__auto__;if(cljs.core.truth_(or__15200__auto__))
{return or__15200__auto__;
} else
{return G__23820.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23820.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23820);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23820);
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
{var val_23821 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_23821);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_23821,ret){
return (function (){return fn1.call(null,val_23821);
});})(val_23821,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__16070__auto___23822 = n;var x_23823 = (0);while(true){
if((x_23823 < n__16070__auto___23822))
{(a[x_23823] = (0));
{
var G__23824 = (x_23823 + (1));
x_23823 = G__23824;
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
var G__23825 = (i + (1));
i = G__23825;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t23829 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23829 = (function (flag,alt_flag,meta23830){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23830 = meta23830;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23829.cljs$lang$type = true;
cljs.core.async.t23829.cljs$lang$ctorStr = "cljs.core.async/t23829";
cljs.core.async.t23829.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__15777__auto__,writer__15778__auto__,opt__15779__auto__){return cljs.core._write.call(null,writer__15778__auto__,"cljs.core.async/t23829");
});})(flag))
;
cljs.core.async.t23829.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23829.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t23829.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t23829.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23831){var self__ = this;
var _23831__$1 = this;return self__.meta23830;
});})(flag))
;
cljs.core.async.t23829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23831,meta23830__$1){var self__ = this;
var _23831__$1 = this;return (new cljs.core.async.t23829(self__.flag,self__.alt_flag,meta23830__$1));
});})(flag))
;
cljs.core.async.__GT_t23829 = ((function (flag){
return (function __GT_t23829(flag__$1,alt_flag__$1,meta23830){return (new cljs.core.async.t23829(flag__$1,alt_flag__$1,meta23830));
});})(flag))
;
}
return (new cljs.core.async.t23829(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23835 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23835 = (function (cb,flag,alt_handler,meta23836){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23836 = meta23836;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23835.cljs$lang$type = true;
cljs.core.async.t23835.cljs$lang$ctorStr = "cljs.core.async/t23835";
cljs.core.async.t23835.cljs$lang$ctorPrWriter = (function (this__15777__auto__,writer__15778__auto__,opt__15779__auto__){return cljs.core._write.call(null,writer__15778__auto__,"cljs.core.async/t23835");
});
cljs.core.async.t23835.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23835.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t23835.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t23835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23837){var self__ = this;
var _23837__$1 = this;return self__.meta23836;
});
cljs.core.async.t23835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23837,meta23836__$1){var self__ = this;
var _23837__$1 = this;return (new cljs.core.async.t23835(self__.cb,self__.flag,self__.alt_handler,meta23836__$1));
});
cljs.core.async.__GT_t23835 = (function __GT_t23835(cb__$1,flag__$1,alt_handler__$1,meta23836){return (new cljs.core.async.t23835(cb__$1,flag__$1,alt_handler__$1,meta23836));
});
}
return (new cljs.core.async.t23835(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23838_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23838_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23839_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23839_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__15200__auto__ = wport;if(cljs.core.truth_(or__15200__auto__))
{return or__15200__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__23840 = (i + (1));
i = G__23840;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__15200__auto__ = ret;if(cljs.core.truth_(or__15200__auto__))
{return or__15200__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__15188__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__15188__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__15188__auto__;
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
var alts_BANG___delegate = function (ports,p__23841){var map__23843 = p__23841;var map__23843__$1 = ((cljs.core.seq_QMARK_.call(null,map__23843))?cljs.core.apply.call(null,cljs.core.hash_map,map__23843):map__23843);var opts = map__23843__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__23841 = null;if (arguments.length > 1) {
  p__23841 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23841);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23844){
var ports = cljs.core.first(arglist__23844);
var p__23841 = cljs.core.rest(arglist__23844);
return alts_BANG___delegate(ports,p__23841);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__21043__auto___23939 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__21043__auto___23939){
return (function (){var f__21044__auto__ = (function (){var switch__20987__auto__ = ((function (c__21043__auto___23939){
return (function (state_23915){var state_val_23916 = (state_23915[(1)]);if((state_val_23916 === (7)))
{var inst_23911 = (state_23915[(2)]);var state_23915__$1 = state_23915;var statearr_23917_23940 = state_23915__$1;(statearr_23917_23940[(2)] = inst_23911);
(statearr_23917_23940[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23916 === (1)))
{var state_23915__$1 = state_23915;var statearr_23918_23941 = state_23915__$1;(statearr_23918_23941[(2)] = null);
(statearr_23918_23941[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23916 === (4)))
{var inst_23894 = (state_23915[(7)]);var inst_23894__$1 = (state_23915[(2)]);var inst_23895 = (inst_23894__$1 == null);var state_23915__$1 = (function (){var statearr_23919 = state_23915;(statearr_23919[(7)] = inst_23894__$1);
return statearr_23919;
})();if(cljs.core.truth_(inst_23895))
{var statearr_23920_23942 = state_23915__$1;(statearr_23920_23942[(1)] = (5));
} else
{var statearr_23921_23943 = state_23915__$1;(statearr_23921_23943[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23916 === (13)))
{var state_23915__$1 = state_23915;var statearr_23922_23944 = state_23915__$1;(statearr_23922_23944[(2)] = null);
(statearr_23922_23944[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23916 === (6)))
{var inst_23894 = (state_23915[(7)]);var state_23915__$1 = state_23915;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23915__$1,(11),to,inst_23894);
} else
{if((state_val_23916 === (3)))
{var inst_23913 = (state_23915[(2)]);var state_23915__$1 = state_23915;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23915__$1,inst_23913);
} else
{if((state_val_23916 === (12)))
{var state_23915__$1 = state_23915;var statearr_23923_23945 = state_23915__$1;(statearr_23923_23945[(2)] = null);
(statearr_23923_23945[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23916 === (2)))
{var state_23915__$1 = state_23915;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23915__$1,(4),from);
} else
{if((state_val_23916 === (11)))
{var inst_23904 = (state_23915[(2)]);var state_23915__$1 = state_23915;if(cljs.core.truth_(inst_23904))
{var statearr_23924_23946 = state_23915__$1;(statearr_23924_23946[(1)] = (12));
} else
{var statearr_23925_23947 = state_23915__$1;(statearr_23925_23947[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23916 === (9)))
{var state_23915__$1 = state_23915;var statearr_23926_23948 = state_23915__$1;(statearr_23926_23948[(2)] = null);
(statearr_23926_23948[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23916 === (5)))
{var state_23915__$1 = state_23915;if(cljs.core.truth_(close_QMARK_))
{var statearr_23927_23949 = state_23915__$1;(statearr_23927_23949[(1)] = (8));
} else
{var statearr_23928_23950 = state_23915__$1;(statearr_23928_23950[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23916 === (14)))
{var inst_23909 = (state_23915[(2)]);var state_23915__$1 = state_23915;var statearr_23929_23951 = state_23915__$1;(statearr_23929_23951[(2)] = inst_23909);
(statearr_23929_23951[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23916 === (10)))
{var inst_23901 = (state_23915[(2)]);var state_23915__$1 = state_23915;var statearr_23930_23952 = state_23915__$1;(statearr_23930_23952[(2)] = inst_23901);
(statearr_23930_23952[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23916 === (8)))
{var inst_23898 = cljs.core.async.close_BANG_.call(null,to);var state_23915__$1 = state_23915;var statearr_23931_23953 = state_23915__$1;(statearr_23931_23953[(2)] = inst_23898);
(statearr_23931_23953[(1)] = (10));
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
});})(c__21043__auto___23939))
;return ((function (switch__20987__auto__,c__21043__auto___23939){
return (function() {
var state_machine__20988__auto__ = null;
var state_machine__20988__auto____0 = (function (){var statearr_23935 = [null,null,null,null,null,null,null,null];(statearr_23935[(0)] = state_machine__20988__auto__);
(statearr_23935[(1)] = (1));
return statearr_23935;
});
var state_machine__20988__auto____1 = (function (state_23915){while(true){
var ret_value__20989__auto__ = (function (){try{while(true){
var result__20990__auto__ = switch__20987__auto__.call(null,state_23915);if(cljs.core.keyword_identical_QMARK_.call(null,result__20990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__20990__auto__;
}
break;
}
}catch (e23936){if((e23936 instanceof Object))
{var ex__20991__auto__ = e23936;var statearr_23937_23954 = state_23915;(statearr_23937_23954[(5)] = ex__20991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23915);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23936;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23955 = state_23915;
state_23915 = G__23955;
continue;
}
} else
{return ret_value__20989__auto__;
}
break;
}
});
state_machine__20988__auto__ = function(state_23915){
switch(arguments.length){
case 0:
return state_machine__20988__auto____0.call(this);
case 1:
return state_machine__20988__auto____1.call(this,state_23915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20988__auto____0;
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20988__auto____1;
return state_machine__20988__auto__;
})()
;})(switch__20987__auto__,c__21043__auto___23939))
})();var state__21045__auto__ = (function (){var statearr_23938 = f__21044__auto__.call(null);(statearr_23938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21043__auto___23939);
return statearr_23938;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21045__auto__);
});})(c__21043__auto___23939))
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
return (function (p__24139){var vec__24140 = p__24139;var v = cljs.core.nth.call(null,vec__24140,(0),null);var p = cljs.core.nth.call(null,vec__24140,(1),null);var job = vec__24140;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__21043__auto___24322 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__21043__auto___24322,res,vec__24140,v,p,job,jobs,results){
return (function (){var f__21044__auto__ = (function (){var switch__20987__auto__ = ((function (c__21043__auto___24322,res,vec__24140,v,p,job,jobs,results){
return (function (state_24145){var state_val_24146 = (state_24145[(1)]);if((state_val_24146 === (2)))
{var inst_24142 = (state_24145[(2)]);var inst_24143 = cljs.core.async.close_BANG_.call(null,res);var state_24145__$1 = (function (){var statearr_24147 = state_24145;(statearr_24147[(7)] = inst_24142);
return statearr_24147;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24145__$1,inst_24143);
} else
{if((state_val_24146 === (1)))
{var state_24145__$1 = state_24145;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24145__$1,(2),res,v);
} else
{return null;
}
}
});})(c__21043__auto___24322,res,vec__24140,v,p,job,jobs,results))
;return ((function (switch__20987__auto__,c__21043__auto___24322,res,vec__24140,v,p,job,jobs,results){
return (function() {
var state_machine__20988__auto__ = null;
var state_machine__20988__auto____0 = (function (){var statearr_24151 = [null,null,null,null,null,null,null,null];(statearr_24151[(0)] = state_machine__20988__auto__);
(statearr_24151[(1)] = (1));
return statearr_24151;
});
var state_machine__20988__auto____1 = (function (state_24145){while(true){
var ret_value__20989__auto__ = (function (){try{while(true){
var result__20990__auto__ = switch__20987__auto__.call(null,state_24145);if(cljs.core.keyword_identical_QMARK_.call(null,result__20990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__20990__auto__;
}
break;
}
}catch (e24152){if((e24152 instanceof Object))
{var ex__20991__auto__ = e24152;var statearr_24153_24323 = state_24145;(statearr_24153_24323[(5)] = ex__20991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24145);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24152;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24324 = state_24145;
state_24145 = G__24324;
continue;
}
} else
{return ret_value__20989__auto__;
}
break;
}
});
state_machine__20988__auto__ = function(state_24145){
switch(arguments.length){
case 0:
return state_machine__20988__auto____0.call(this);
case 1:
return state_machine__20988__auto____1.call(this,state_24145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20988__auto____0;
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20988__auto____1;
return state_machine__20988__auto__;
})()
;})(switch__20987__auto__,c__21043__auto___24322,res,vec__24140,v,p,job,jobs,results))
})();var state__21045__auto__ = (function (){var statearr_24154 = f__21044__auto__.call(null);(statearr_24154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21043__auto___24322);
return statearr_24154;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21045__auto__);
});})(c__21043__auto___24322,res,vec__24140,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__24155){var vec__24156 = p__24155;var v = cljs.core.nth.call(null,vec__24156,(0),null);var p = cljs.core.nth.call(null,vec__24156,(1),null);var job = vec__24156;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__16070__auto___24325 = n;var __24326 = (0);while(true){
if((__24326 < n__16070__auto___24325))
{var G__24157_24327 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__24157_24327) {
case "async":
var c__21043__auto___24329 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__24326,c__21043__auto___24329,G__24157_24327,n__16070__auto___24325,jobs,results,process,async){
return (function (){var f__21044__auto__ = (function (){var switch__20987__auto__ = ((function (__24326,c__21043__auto___24329,G__24157_24327,n__16070__auto___24325,jobs,results,process,async){
return (function (state_24170){var state_val_24171 = (state_24170[(1)]);if((state_val_24171 === (7)))
{var inst_24166 = (state_24170[(2)]);var state_24170__$1 = state_24170;var statearr_24172_24330 = state_24170__$1;(statearr_24172_24330[(2)] = inst_24166);
(statearr_24172_24330[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24171 === (6)))
{var state_24170__$1 = state_24170;var statearr_24173_24331 = state_24170__$1;(statearr_24173_24331[(2)] = null);
(statearr_24173_24331[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24171 === (5)))
{var state_24170__$1 = state_24170;var statearr_24174_24332 = state_24170__$1;(statearr_24174_24332[(2)] = null);
(statearr_24174_24332[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24171 === (4)))
{var inst_24160 = (state_24170[(2)]);var inst_24161 = async.call(null,inst_24160);var state_24170__$1 = state_24170;if(cljs.core.truth_(inst_24161))
{var statearr_24175_24333 = state_24170__$1;(statearr_24175_24333[(1)] = (5));
} else
{var statearr_24176_24334 = state_24170__$1;(statearr_24176_24334[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24171 === (3)))
{var inst_24168 = (state_24170[(2)]);var state_24170__$1 = state_24170;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24170__$1,inst_24168);
} else
{if((state_val_24171 === (2)))
{var state_24170__$1 = state_24170;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24170__$1,(4),jobs);
} else
{if((state_val_24171 === (1)))
{var state_24170__$1 = state_24170;var statearr_24177_24335 = state_24170__$1;(statearr_24177_24335[(2)] = null);
(statearr_24177_24335[(1)] = (2));
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
});})(__24326,c__21043__auto___24329,G__24157_24327,n__16070__auto___24325,jobs,results,process,async))
;return ((function (__24326,switch__20987__auto__,c__21043__auto___24329,G__24157_24327,n__16070__auto___24325,jobs,results,process,async){
return (function() {
var state_machine__20988__auto__ = null;
var state_machine__20988__auto____0 = (function (){var statearr_24181 = [null,null,null,null,null,null,null];(statearr_24181[(0)] = state_machine__20988__auto__);
(statearr_24181[(1)] = (1));
return statearr_24181;
});
var state_machine__20988__auto____1 = (function (state_24170){while(true){
var ret_value__20989__auto__ = (function (){try{while(true){
var result__20990__auto__ = switch__20987__auto__.call(null,state_24170);if(cljs.core.keyword_identical_QMARK_.call(null,result__20990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__20990__auto__;
}
break;
}
}catch (e24182){if((e24182 instanceof Object))
{var ex__20991__auto__ = e24182;var statearr_24183_24336 = state_24170;(statearr_24183_24336[(5)] = ex__20991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24170);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24182;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24337 = state_24170;
state_24170 = G__24337;
continue;
}
} else
{return ret_value__20989__auto__;
}
break;
}
});
state_machine__20988__auto__ = function(state_24170){
switch(arguments.length){
case 0:
return state_machine__20988__auto____0.call(this);
case 1:
return state_machine__20988__auto____1.call(this,state_24170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20988__auto____0;
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20988__auto____1;
return state_machine__20988__auto__;
})()
;})(__24326,switch__20987__auto__,c__21043__auto___24329,G__24157_24327,n__16070__auto___24325,jobs,results,process,async))
})();var state__21045__auto__ = (function (){var statearr_24184 = f__21044__auto__.call(null);(statearr_24184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21043__auto___24329);
return statearr_24184;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21045__auto__);
});})(__24326,c__21043__auto___24329,G__24157_24327,n__16070__auto___24325,jobs,results,process,async))
);

break;
case "compute":
var c__21043__auto___24338 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__24326,c__21043__auto___24338,G__24157_24327,n__16070__auto___24325,jobs,results,process,async){
return (function (){var f__21044__auto__ = (function (){var switch__20987__auto__ = ((function (__24326,c__21043__auto___24338,G__24157_24327,n__16070__auto___24325,jobs,results,process,async){
return (function (state_24197){var state_val_24198 = (state_24197[(1)]);if((state_val_24198 === (7)))
{var inst_24193 = (state_24197[(2)]);var state_24197__$1 = state_24197;var statearr_24199_24339 = state_24197__$1;(statearr_24199_24339[(2)] = inst_24193);
(statearr_24199_24339[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24198 === (6)))
{var state_24197__$1 = state_24197;var statearr_24200_24340 = state_24197__$1;(statearr_24200_24340[(2)] = null);
(statearr_24200_24340[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24198 === (5)))
{var state_24197__$1 = state_24197;var statearr_24201_24341 = state_24197__$1;(statearr_24201_24341[(2)] = null);
(statearr_24201_24341[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24198 === (4)))
{var inst_24187 = (state_24197[(2)]);var inst_24188 = process.call(null,inst_24187);var state_24197__$1 = state_24197;if(cljs.core.truth_(inst_24188))
{var statearr_24202_24342 = state_24197__$1;(statearr_24202_24342[(1)] = (5));
} else
{var statearr_24203_24343 = state_24197__$1;(statearr_24203_24343[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24198 === (3)))
{var inst_24195 = (state_24197[(2)]);var state_24197__$1 = state_24197;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24197__$1,inst_24195);
} else
{if((state_val_24198 === (2)))
{var state_24197__$1 = state_24197;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24197__$1,(4),jobs);
} else
{if((state_val_24198 === (1)))
{var state_24197__$1 = state_24197;var statearr_24204_24344 = state_24197__$1;(statearr_24204_24344[(2)] = null);
(statearr_24204_24344[(1)] = (2));
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
});})(__24326,c__21043__auto___24338,G__24157_24327,n__16070__auto___24325,jobs,results,process,async))
;return ((function (__24326,switch__20987__auto__,c__21043__auto___24338,G__24157_24327,n__16070__auto___24325,jobs,results,process,async){
return (function() {
var state_machine__20988__auto__ = null;
var state_machine__20988__auto____0 = (function (){var statearr_24208 = [null,null,null,null,null,null,null];(statearr_24208[(0)] = state_machine__20988__auto__);
(statearr_24208[(1)] = (1));
return statearr_24208;
});
var state_machine__20988__auto____1 = (function (state_24197){while(true){
var ret_value__20989__auto__ = (function (){try{while(true){
var result__20990__auto__ = switch__20987__auto__.call(null,state_24197);if(cljs.core.keyword_identical_QMARK_.call(null,result__20990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__20990__auto__;
}
break;
}
}catch (e24209){if((e24209 instanceof Object))
{var ex__20991__auto__ = e24209;var statearr_24210_24345 = state_24197;(statearr_24210_24345[(5)] = ex__20991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24197);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24209;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24346 = state_24197;
state_24197 = G__24346;
continue;
}
} else
{return ret_value__20989__auto__;
}
break;
}
});
state_machine__20988__auto__ = function(state_24197){
switch(arguments.length){
case 0:
return state_machine__20988__auto____0.call(this);
case 1:
return state_machine__20988__auto____1.call(this,state_24197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20988__auto____0;
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20988__auto____1;
return state_machine__20988__auto__;
})()
;})(__24326,switch__20987__auto__,c__21043__auto___24338,G__24157_24327,n__16070__auto___24325,jobs,results,process,async))
})();var state__21045__auto__ = (function (){var statearr_24211 = f__21044__auto__.call(null);(statearr_24211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21043__auto___24338);
return statearr_24211;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21045__auto__);
});})(__24326,c__21043__auto___24338,G__24157_24327,n__16070__auto___24325,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__24347 = (__24326 + (1));
__24326 = G__24347;
continue;
}
} else
{}
break;
}
var c__21043__auto___24348 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__21043__auto___24348,jobs,results,process,async){
return (function (){var f__21044__auto__ = (function (){var switch__20987__auto__ = ((function (c__21043__auto___24348,jobs,results,process,async){
return (function (state_24233){var state_val_24234 = (state_24233[(1)]);if((state_val_24234 === (9)))
{var inst_24226 = (state_24233[(2)]);var state_24233__$1 = (function (){var statearr_24235 = state_24233;(statearr_24235[(7)] = inst_24226);
return statearr_24235;
})();var statearr_24236_24349 = state_24233__$1;(statearr_24236_24349[(2)] = null);
(statearr_24236_24349[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24234 === (8)))
{var inst_24219 = (state_24233[(8)]);var inst_24224 = (state_24233[(2)]);var state_24233__$1 = (function (){var statearr_24237 = state_24233;(statearr_24237[(9)] = inst_24224);
return statearr_24237;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24233__$1,(9),results,inst_24219);
} else
{if((state_val_24234 === (7)))
{var inst_24229 = (state_24233[(2)]);var state_24233__$1 = state_24233;var statearr_24238_24350 = state_24233__$1;(statearr_24238_24350[(2)] = inst_24229);
(statearr_24238_24350[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24234 === (6)))
{var inst_24219 = (state_24233[(8)]);var inst_24214 = (state_24233[(10)]);var inst_24219__$1 = cljs.core.async.chan.call(null,(1));var inst_24220 = cljs.core.PersistentVector.EMPTY_NODE;var inst_24221 = [inst_24214,inst_24219__$1];var inst_24222 = (new cljs.core.PersistentVector(null,2,(5),inst_24220,inst_24221,null));var state_24233__$1 = (function (){var statearr_24239 = state_24233;(statearr_24239[(8)] = inst_24219__$1);
return statearr_24239;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24233__$1,(8),jobs,inst_24222);
} else
{if((state_val_24234 === (5)))
{var inst_24217 = cljs.core.async.close_BANG_.call(null,jobs);var state_24233__$1 = state_24233;var statearr_24240_24351 = state_24233__$1;(statearr_24240_24351[(2)] = inst_24217);
(statearr_24240_24351[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24234 === (4)))
{var inst_24214 = (state_24233[(10)]);var inst_24214__$1 = (state_24233[(2)]);var inst_24215 = (inst_24214__$1 == null);var state_24233__$1 = (function (){var statearr_24241 = state_24233;(statearr_24241[(10)] = inst_24214__$1);
return statearr_24241;
})();if(cljs.core.truth_(inst_24215))
{var statearr_24242_24352 = state_24233__$1;(statearr_24242_24352[(1)] = (5));
} else
{var statearr_24243_24353 = state_24233__$1;(statearr_24243_24353[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24234 === (3)))
{var inst_24231 = (state_24233[(2)]);var state_24233__$1 = state_24233;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24233__$1,inst_24231);
} else
{if((state_val_24234 === (2)))
{var state_24233__$1 = state_24233;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24233__$1,(4),from);
} else
{if((state_val_24234 === (1)))
{var state_24233__$1 = state_24233;var statearr_24244_24354 = state_24233__$1;(statearr_24244_24354[(2)] = null);
(statearr_24244_24354[(1)] = (2));
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
});})(c__21043__auto___24348,jobs,results,process,async))
;return ((function (switch__20987__auto__,c__21043__auto___24348,jobs,results,process,async){
return (function() {
var state_machine__20988__auto__ = null;
var state_machine__20988__auto____0 = (function (){var statearr_24248 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24248[(0)] = state_machine__20988__auto__);
(statearr_24248[(1)] = (1));
return statearr_24248;
});
var state_machine__20988__auto____1 = (function (state_24233){while(true){
var ret_value__20989__auto__ = (function (){try{while(true){
var result__20990__auto__ = switch__20987__auto__.call(null,state_24233);if(cljs.core.keyword_identical_QMARK_.call(null,result__20990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__20990__auto__;
}
break;
}
}catch (e24249){if((e24249 instanceof Object))
{var ex__20991__auto__ = e24249;var statearr_24250_24355 = state_24233;(statearr_24250_24355[(5)] = ex__20991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24233);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24249;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24356 = state_24233;
state_24233 = G__24356;
continue;
}
} else
{return ret_value__20989__auto__;
}
break;
}
});
state_machine__20988__auto__ = function(state_24233){
switch(arguments.length){
case 0:
return state_machine__20988__auto____0.call(this);
case 1:
return state_machine__20988__auto____1.call(this,state_24233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20988__auto____0;
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20988__auto____1;
return state_machine__20988__auto__;
})()
;})(switch__20987__auto__,c__21043__auto___24348,jobs,results,process,async))
})();var state__21045__auto__ = (function (){var statearr_24251 = f__21044__auto__.call(null);(statearr_24251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21043__auto___24348);
return statearr_24251;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21045__auto__);
});})(c__21043__auto___24348,jobs,results,process,async))
);
var c__21043__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__21043__auto__,jobs,results,process,async){
return (function (){var f__21044__auto__ = (function (){var switch__20987__auto__ = ((function (c__21043__auto__,jobs,results,process,async){
return (function (state_24289){var state_val_24290 = (state_24289[(1)]);if((state_val_24290 === (7)))
{var inst_24285 = (state_24289[(2)]);var state_24289__$1 = state_24289;var statearr_24291_24357 = state_24289__$1;(statearr_24291_24357[(2)] = inst_24285);
(statearr_24291_24357[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24290 === (20)))
{var state_24289__$1 = state_24289;var statearr_24292_24358 = state_24289__$1;(statearr_24292_24358[(2)] = null);
(statearr_24292_24358[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24290 === (1)))
{var state_24289__$1 = state_24289;var statearr_24293_24359 = state_24289__$1;(statearr_24293_24359[(2)] = null);
(statearr_24293_24359[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24290 === (4)))
{var inst_24254 = (state_24289[(7)]);var inst_24254__$1 = (state_24289[(2)]);var inst_24255 = (inst_24254__$1 == null);var state_24289__$1 = (function (){var statearr_24294 = state_24289;(statearr_24294[(7)] = inst_24254__$1);
return statearr_24294;
})();if(cljs.core.truth_(inst_24255))
{var statearr_24295_24360 = state_24289__$1;(statearr_24295_24360[(1)] = (5));
} else
{var statearr_24296_24361 = state_24289__$1;(statearr_24296_24361[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24290 === (15)))
{var inst_24267 = (state_24289[(8)]);var state_24289__$1 = state_24289;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24289__$1,(18),to,inst_24267);
} else
{if((state_val_24290 === (21)))
{var inst_24280 = (state_24289[(2)]);var state_24289__$1 = state_24289;var statearr_24297_24362 = state_24289__$1;(statearr_24297_24362[(2)] = inst_24280);
(statearr_24297_24362[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24290 === (13)))
{var inst_24282 = (state_24289[(2)]);var state_24289__$1 = (function (){var statearr_24298 = state_24289;(statearr_24298[(9)] = inst_24282);
return statearr_24298;
})();var statearr_24299_24363 = state_24289__$1;(statearr_24299_24363[(2)] = null);
(statearr_24299_24363[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24290 === (6)))
{var inst_24254 = (state_24289[(7)]);var state_24289__$1 = state_24289;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24289__$1,(11),inst_24254);
} else
{if((state_val_24290 === (17)))
{var inst_24275 = (state_24289[(2)]);var state_24289__$1 = state_24289;if(cljs.core.truth_(inst_24275))
{var statearr_24300_24364 = state_24289__$1;(statearr_24300_24364[(1)] = (19));
} else
{var statearr_24301_24365 = state_24289__$1;(statearr_24301_24365[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24290 === (3)))
{var inst_24287 = (state_24289[(2)]);var state_24289__$1 = state_24289;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24289__$1,inst_24287);
} else
{if((state_val_24290 === (12)))
{var inst_24264 = (state_24289[(10)]);var state_24289__$1 = state_24289;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24289__$1,(14),inst_24264);
} else
{if((state_val_24290 === (2)))
{var state_24289__$1 = state_24289;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24289__$1,(4),results);
} else
{if((state_val_24290 === (19)))
{var state_24289__$1 = state_24289;var statearr_24302_24366 = state_24289__$1;(statearr_24302_24366[(2)] = null);
(statearr_24302_24366[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24290 === (11)))
{var inst_24264 = (state_24289[(2)]);var state_24289__$1 = (function (){var statearr_24303 = state_24289;(statearr_24303[(10)] = inst_24264);
return statearr_24303;
})();var statearr_24304_24367 = state_24289__$1;(statearr_24304_24367[(2)] = null);
(statearr_24304_24367[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24290 === (9)))
{var state_24289__$1 = state_24289;var statearr_24305_24368 = state_24289__$1;(statearr_24305_24368[(2)] = null);
(statearr_24305_24368[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24290 === (5)))
{var state_24289__$1 = state_24289;if(cljs.core.truth_(close_QMARK_))
{var statearr_24306_24369 = state_24289__$1;(statearr_24306_24369[(1)] = (8));
} else
{var statearr_24307_24370 = state_24289__$1;(statearr_24307_24370[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24290 === (14)))
{var inst_24269 = (state_24289[(11)]);var inst_24267 = (state_24289[(8)]);var inst_24267__$1 = (state_24289[(2)]);var inst_24268 = (inst_24267__$1 == null);var inst_24269__$1 = cljs.core.not.call(null,inst_24268);var state_24289__$1 = (function (){var statearr_24308 = state_24289;(statearr_24308[(11)] = inst_24269__$1);
(statearr_24308[(8)] = inst_24267__$1);
return statearr_24308;
})();if(inst_24269__$1)
{var statearr_24309_24371 = state_24289__$1;(statearr_24309_24371[(1)] = (15));
} else
{var statearr_24310_24372 = state_24289__$1;(statearr_24310_24372[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24290 === (16)))
{var inst_24269 = (state_24289[(11)]);var state_24289__$1 = state_24289;var statearr_24311_24373 = state_24289__$1;(statearr_24311_24373[(2)] = inst_24269);
(statearr_24311_24373[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24290 === (10)))
{var inst_24261 = (state_24289[(2)]);var state_24289__$1 = state_24289;var statearr_24312_24374 = state_24289__$1;(statearr_24312_24374[(2)] = inst_24261);
(statearr_24312_24374[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24290 === (18)))
{var inst_24272 = (state_24289[(2)]);var state_24289__$1 = state_24289;var statearr_24313_24375 = state_24289__$1;(statearr_24313_24375[(2)] = inst_24272);
(statearr_24313_24375[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24290 === (8)))
{var inst_24258 = cljs.core.async.close_BANG_.call(null,to);var state_24289__$1 = state_24289;var statearr_24314_24376 = state_24289__$1;(statearr_24314_24376[(2)] = inst_24258);
(statearr_24314_24376[(1)] = (10));
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
});})(c__21043__auto__,jobs,results,process,async))
;return ((function (switch__20987__auto__,c__21043__auto__,jobs,results,process,async){
return (function() {
var state_machine__20988__auto__ = null;
var state_machine__20988__auto____0 = (function (){var statearr_24318 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24318[(0)] = state_machine__20988__auto__);
(statearr_24318[(1)] = (1));
return statearr_24318;
});
var state_machine__20988__auto____1 = (function (state_24289){while(true){
var ret_value__20989__auto__ = (function (){try{while(true){
var result__20990__auto__ = switch__20987__auto__.call(null,state_24289);if(cljs.core.keyword_identical_QMARK_.call(null,result__20990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__20990__auto__;
}
break;
}
}catch (e24319){if((e24319 instanceof Object))
{var ex__20991__auto__ = e24319;var statearr_24320_24377 = state_24289;(statearr_24320_24377[(5)] = ex__20991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24289);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24319;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24378 = state_24289;
state_24289 = G__24378;
continue;
}
} else
{return ret_value__20989__auto__;
}
break;
}
});
state_machine__20988__auto__ = function(state_24289){
switch(arguments.length){
case 0:
return state_machine__20988__auto____0.call(this);
case 1:
return state_machine__20988__auto____1.call(this,state_24289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20988__auto____0;
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20988__auto____1;
return state_machine__20988__auto__;
})()
;})(switch__20987__auto__,c__21043__auto__,jobs,results,process,async))
})();var state__21045__auto__ = (function (){var statearr_24321 = f__21044__auto__.call(null);(statearr_24321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21043__auto__);
return statearr_24321;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21045__auto__);
});})(c__21043__auto__,jobs,results,process,async))
);
return c__21043__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__21043__auto___24479 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__21043__auto___24479,tc,fc){
return (function (){var f__21044__auto__ = (function (){var switch__20987__auto__ = ((function (c__21043__auto___24479,tc,fc){
return (function (state_24454){var state_val_24455 = (state_24454[(1)]);if((state_val_24455 === (7)))
{var inst_24450 = (state_24454[(2)]);var state_24454__$1 = state_24454;var statearr_24456_24480 = state_24454__$1;(statearr_24456_24480[(2)] = inst_24450);
(statearr_24456_24480[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24455 === (1)))
{var state_24454__$1 = state_24454;var statearr_24457_24481 = state_24454__$1;(statearr_24457_24481[(2)] = null);
(statearr_24457_24481[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24455 === (4)))
{var inst_24431 = (state_24454[(7)]);var inst_24431__$1 = (state_24454[(2)]);var inst_24432 = (inst_24431__$1 == null);var state_24454__$1 = (function (){var statearr_24458 = state_24454;(statearr_24458[(7)] = inst_24431__$1);
return statearr_24458;
})();if(cljs.core.truth_(inst_24432))
{var statearr_24459_24482 = state_24454__$1;(statearr_24459_24482[(1)] = (5));
} else
{var statearr_24460_24483 = state_24454__$1;(statearr_24460_24483[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24455 === (13)))
{var state_24454__$1 = state_24454;var statearr_24461_24484 = state_24454__$1;(statearr_24461_24484[(2)] = null);
(statearr_24461_24484[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24455 === (6)))
{var inst_24431 = (state_24454[(7)]);var inst_24437 = p.call(null,inst_24431);var state_24454__$1 = state_24454;if(cljs.core.truth_(inst_24437))
{var statearr_24462_24485 = state_24454__$1;(statearr_24462_24485[(1)] = (9));
} else
{var statearr_24463_24486 = state_24454__$1;(statearr_24463_24486[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24455 === (3)))
{var inst_24452 = (state_24454[(2)]);var state_24454__$1 = state_24454;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24454__$1,inst_24452);
} else
{if((state_val_24455 === (12)))
{var state_24454__$1 = state_24454;var statearr_24464_24487 = state_24454__$1;(statearr_24464_24487[(2)] = null);
(statearr_24464_24487[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24455 === (2)))
{var state_24454__$1 = state_24454;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24454__$1,(4),ch);
} else
{if((state_val_24455 === (11)))
{var inst_24431 = (state_24454[(7)]);var inst_24441 = (state_24454[(2)]);var state_24454__$1 = state_24454;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24454__$1,(8),inst_24441,inst_24431);
} else
{if((state_val_24455 === (9)))
{var state_24454__$1 = state_24454;var statearr_24465_24488 = state_24454__$1;(statearr_24465_24488[(2)] = tc);
(statearr_24465_24488[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24455 === (5)))
{var inst_24434 = cljs.core.async.close_BANG_.call(null,tc);var inst_24435 = cljs.core.async.close_BANG_.call(null,fc);var state_24454__$1 = (function (){var statearr_24466 = state_24454;(statearr_24466[(8)] = inst_24434);
return statearr_24466;
})();var statearr_24467_24489 = state_24454__$1;(statearr_24467_24489[(2)] = inst_24435);
(statearr_24467_24489[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24455 === (14)))
{var inst_24448 = (state_24454[(2)]);var state_24454__$1 = state_24454;var statearr_24468_24490 = state_24454__$1;(statearr_24468_24490[(2)] = inst_24448);
(statearr_24468_24490[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24455 === (10)))
{var state_24454__$1 = state_24454;var statearr_24469_24491 = state_24454__$1;(statearr_24469_24491[(2)] = fc);
(statearr_24469_24491[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24455 === (8)))
{var inst_24443 = (state_24454[(2)]);var state_24454__$1 = state_24454;if(cljs.core.truth_(inst_24443))
{var statearr_24470_24492 = state_24454__$1;(statearr_24470_24492[(1)] = (12));
} else
{var statearr_24471_24493 = state_24454__$1;(statearr_24471_24493[(1)] = (13));
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
});})(c__21043__auto___24479,tc,fc))
;return ((function (switch__20987__auto__,c__21043__auto___24479,tc,fc){
return (function() {
var state_machine__20988__auto__ = null;
var state_machine__20988__auto____0 = (function (){var statearr_24475 = [null,null,null,null,null,null,null,null,null];(statearr_24475[(0)] = state_machine__20988__auto__);
(statearr_24475[(1)] = (1));
return statearr_24475;
});
var state_machine__20988__auto____1 = (function (state_24454){while(true){
var ret_value__20989__auto__ = (function (){try{while(true){
var result__20990__auto__ = switch__20987__auto__.call(null,state_24454);if(cljs.core.keyword_identical_QMARK_.call(null,result__20990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__20990__auto__;
}
break;
}
}catch (e24476){if((e24476 instanceof Object))
{var ex__20991__auto__ = e24476;var statearr_24477_24494 = state_24454;(statearr_24477_24494[(5)] = ex__20991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24454);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24476;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24495 = state_24454;
state_24454 = G__24495;
continue;
}
} else
{return ret_value__20989__auto__;
}
break;
}
});
state_machine__20988__auto__ = function(state_24454){
switch(arguments.length){
case 0:
return state_machine__20988__auto____0.call(this);
case 1:
return state_machine__20988__auto____1.call(this,state_24454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20988__auto____0;
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20988__auto____1;
return state_machine__20988__auto__;
})()
;})(switch__20987__auto__,c__21043__auto___24479,tc,fc))
})();var state__21045__auto__ = (function (){var statearr_24478 = f__21044__auto__.call(null);(statearr_24478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21043__auto___24479);
return statearr_24478;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21045__auto__);
});})(c__21043__auto___24479,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__21043__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__21043__auto__){
return (function (){var f__21044__auto__ = (function (){var switch__20987__auto__ = ((function (c__21043__auto__){
return (function (state_24542){var state_val_24543 = (state_24542[(1)]);if((state_val_24543 === (7)))
{var inst_24538 = (state_24542[(2)]);var state_24542__$1 = state_24542;var statearr_24544_24560 = state_24542__$1;(statearr_24544_24560[(2)] = inst_24538);
(statearr_24544_24560[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24543 === (6)))
{var inst_24528 = (state_24542[(7)]);var inst_24531 = (state_24542[(8)]);var inst_24535 = f.call(null,inst_24528,inst_24531);var inst_24528__$1 = inst_24535;var state_24542__$1 = (function (){var statearr_24545 = state_24542;(statearr_24545[(7)] = inst_24528__$1);
return statearr_24545;
})();var statearr_24546_24561 = state_24542__$1;(statearr_24546_24561[(2)] = null);
(statearr_24546_24561[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24543 === (5)))
{var inst_24528 = (state_24542[(7)]);var state_24542__$1 = state_24542;var statearr_24547_24562 = state_24542__$1;(statearr_24547_24562[(2)] = inst_24528);
(statearr_24547_24562[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24543 === (4)))
{var inst_24531 = (state_24542[(8)]);var inst_24531__$1 = (state_24542[(2)]);var inst_24532 = (inst_24531__$1 == null);var state_24542__$1 = (function (){var statearr_24548 = state_24542;(statearr_24548[(8)] = inst_24531__$1);
return statearr_24548;
})();if(cljs.core.truth_(inst_24532))
{var statearr_24549_24563 = state_24542__$1;(statearr_24549_24563[(1)] = (5));
} else
{var statearr_24550_24564 = state_24542__$1;(statearr_24550_24564[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24543 === (3)))
{var inst_24540 = (state_24542[(2)]);var state_24542__$1 = state_24542;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24542__$1,inst_24540);
} else
{if((state_val_24543 === (2)))
{var state_24542__$1 = state_24542;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24542__$1,(4),ch);
} else
{if((state_val_24543 === (1)))
{var inst_24528 = init;var state_24542__$1 = (function (){var statearr_24551 = state_24542;(statearr_24551[(7)] = inst_24528);
return statearr_24551;
})();var statearr_24552_24565 = state_24542__$1;(statearr_24552_24565[(2)] = null);
(statearr_24552_24565[(1)] = (2));
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
});})(c__21043__auto__))
;return ((function (switch__20987__auto__,c__21043__auto__){
return (function() {
var state_machine__20988__auto__ = null;
var state_machine__20988__auto____0 = (function (){var statearr_24556 = [null,null,null,null,null,null,null,null,null];(statearr_24556[(0)] = state_machine__20988__auto__);
(statearr_24556[(1)] = (1));
return statearr_24556;
});
var state_machine__20988__auto____1 = (function (state_24542){while(true){
var ret_value__20989__auto__ = (function (){try{while(true){
var result__20990__auto__ = switch__20987__auto__.call(null,state_24542);if(cljs.core.keyword_identical_QMARK_.call(null,result__20990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__20990__auto__;
}
break;
}
}catch (e24557){if((e24557 instanceof Object))
{var ex__20991__auto__ = e24557;var statearr_24558_24566 = state_24542;(statearr_24558_24566[(5)] = ex__20991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24542);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24557;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24567 = state_24542;
state_24542 = G__24567;
continue;
}
} else
{return ret_value__20989__auto__;
}
break;
}
});
state_machine__20988__auto__ = function(state_24542){
switch(arguments.length){
case 0:
return state_machine__20988__auto____0.call(this);
case 1:
return state_machine__20988__auto____1.call(this,state_24542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20988__auto____0;
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20988__auto____1;
return state_machine__20988__auto__;
})()
;})(switch__20987__auto__,c__21043__auto__))
})();var state__21045__auto__ = (function (){var statearr_24559 = f__21044__auto__.call(null);(statearr_24559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21043__auto__);
return statearr_24559;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21045__auto__);
});})(c__21043__auto__))
);
return c__21043__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__21043__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__21043__auto__){
return (function (){var f__21044__auto__ = (function (){var switch__20987__auto__ = ((function (c__21043__auto__){
return (function (state_24641){var state_val_24642 = (state_24641[(1)]);if((state_val_24642 === (7)))
{var inst_24623 = (state_24641[(2)]);var state_24641__$1 = state_24641;var statearr_24643_24666 = state_24641__$1;(statearr_24643_24666[(2)] = inst_24623);
(statearr_24643_24666[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24642 === (1)))
{var inst_24617 = cljs.core.seq.call(null,coll);var inst_24618 = inst_24617;var state_24641__$1 = (function (){var statearr_24644 = state_24641;(statearr_24644[(7)] = inst_24618);
return statearr_24644;
})();var statearr_24645_24667 = state_24641__$1;(statearr_24645_24667[(2)] = null);
(statearr_24645_24667[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24642 === (4)))
{var inst_24618 = (state_24641[(7)]);var inst_24621 = cljs.core.first.call(null,inst_24618);var state_24641__$1 = state_24641;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24641__$1,(7),ch,inst_24621);
} else
{if((state_val_24642 === (13)))
{var inst_24635 = (state_24641[(2)]);var state_24641__$1 = state_24641;var statearr_24646_24668 = state_24641__$1;(statearr_24646_24668[(2)] = inst_24635);
(statearr_24646_24668[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24642 === (6)))
{var inst_24626 = (state_24641[(2)]);var state_24641__$1 = state_24641;if(cljs.core.truth_(inst_24626))
{var statearr_24647_24669 = state_24641__$1;(statearr_24647_24669[(1)] = (8));
} else
{var statearr_24648_24670 = state_24641__$1;(statearr_24648_24670[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24642 === (3)))
{var inst_24639 = (state_24641[(2)]);var state_24641__$1 = state_24641;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24641__$1,inst_24639);
} else
{if((state_val_24642 === (12)))
{var state_24641__$1 = state_24641;var statearr_24649_24671 = state_24641__$1;(statearr_24649_24671[(2)] = null);
(statearr_24649_24671[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24642 === (2)))
{var inst_24618 = (state_24641[(7)]);var state_24641__$1 = state_24641;if(cljs.core.truth_(inst_24618))
{var statearr_24650_24672 = state_24641__$1;(statearr_24650_24672[(1)] = (4));
} else
{var statearr_24651_24673 = state_24641__$1;(statearr_24651_24673[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24642 === (11)))
{var inst_24632 = cljs.core.async.close_BANG_.call(null,ch);var state_24641__$1 = state_24641;var statearr_24652_24674 = state_24641__$1;(statearr_24652_24674[(2)] = inst_24632);
(statearr_24652_24674[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24642 === (9)))
{var state_24641__$1 = state_24641;if(cljs.core.truth_(close_QMARK_))
{var statearr_24653_24675 = state_24641__$1;(statearr_24653_24675[(1)] = (11));
} else
{var statearr_24654_24676 = state_24641__$1;(statearr_24654_24676[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24642 === (5)))
{var inst_24618 = (state_24641[(7)]);var state_24641__$1 = state_24641;var statearr_24655_24677 = state_24641__$1;(statearr_24655_24677[(2)] = inst_24618);
(statearr_24655_24677[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24642 === (10)))
{var inst_24637 = (state_24641[(2)]);var state_24641__$1 = state_24641;var statearr_24656_24678 = state_24641__$1;(statearr_24656_24678[(2)] = inst_24637);
(statearr_24656_24678[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24642 === (8)))
{var inst_24618 = (state_24641[(7)]);var inst_24628 = cljs.core.next.call(null,inst_24618);var inst_24618__$1 = inst_24628;var state_24641__$1 = (function (){var statearr_24657 = state_24641;(statearr_24657[(7)] = inst_24618__$1);
return statearr_24657;
})();var statearr_24658_24679 = state_24641__$1;(statearr_24658_24679[(2)] = null);
(statearr_24658_24679[(1)] = (2));
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
});})(c__21043__auto__))
;return ((function (switch__20987__auto__,c__21043__auto__){
return (function() {
var state_machine__20988__auto__ = null;
var state_machine__20988__auto____0 = (function (){var statearr_24662 = [null,null,null,null,null,null,null,null];(statearr_24662[(0)] = state_machine__20988__auto__);
(statearr_24662[(1)] = (1));
return statearr_24662;
});
var state_machine__20988__auto____1 = (function (state_24641){while(true){
var ret_value__20989__auto__ = (function (){try{while(true){
var result__20990__auto__ = switch__20987__auto__.call(null,state_24641);if(cljs.core.keyword_identical_QMARK_.call(null,result__20990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__20990__auto__;
}
break;
}
}catch (e24663){if((e24663 instanceof Object))
{var ex__20991__auto__ = e24663;var statearr_24664_24680 = state_24641;(statearr_24664_24680[(5)] = ex__20991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24641);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24663;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24681 = state_24641;
state_24641 = G__24681;
continue;
}
} else
{return ret_value__20989__auto__;
}
break;
}
});
state_machine__20988__auto__ = function(state_24641){
switch(arguments.length){
case 0:
return state_machine__20988__auto____0.call(this);
case 1:
return state_machine__20988__auto____1.call(this,state_24641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20988__auto____0;
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20988__auto____1;
return state_machine__20988__auto__;
})()
;})(switch__20987__auto__,c__21043__auto__))
})();var state__21045__auto__ = (function (){var statearr_24665 = f__21044__auto__.call(null);(statearr_24665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21043__auto__);
return statearr_24665;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21045__auto__);
});})(c__21043__auto__))
);
return c__21043__auto__;
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
cljs.core.async.Mux = (function (){var obj24683 = {};return obj24683;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__15188__auto__ = _;if(and__15188__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__15188__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__15837__auto__ = (((_ == null))?null:_);return (function (){var or__15200__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__15837__auto__)]);if(or__15200__auto__)
{return or__15200__auto__;
} else
{var or__15200__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__15200__auto____$1)
{return or__15200__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj24685 = {};return obj24685;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__15188__auto__ = m;if(and__15188__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__15188__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__15837__auto__ = (((m == null))?null:m);return (function (){var or__15200__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__15837__auto__)]);if(or__15200__auto__)
{return or__15200__auto__;
} else
{var or__15200__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__15200__auto____$1)
{return or__15200__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__15188__auto__ = m;if(and__15188__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__15188__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__15837__auto__ = (((m == null))?null:m);return (function (){var or__15200__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__15837__auto__)]);if(or__15200__auto__)
{return or__15200__auto__;
} else
{var or__15200__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__15200__auto____$1)
{return or__15200__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__15188__auto__ = m;if(and__15188__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__15188__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__15837__auto__ = (((m == null))?null:m);return (function (){var or__15200__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__15837__auto__)]);if(or__15200__auto__)
{return or__15200__auto__;
} else
{var or__15200__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__15200__auto____$1)
{return or__15200__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24907 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24907 = (function (cs,ch,mult,meta24908){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24908 = meta24908;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24907.cljs$lang$type = true;
cljs.core.async.t24907.cljs$lang$ctorStr = "cljs.core.async/t24907";
cljs.core.async.t24907.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__15777__auto__,writer__15778__auto__,opt__15779__auto__){return cljs.core._write.call(null,writer__15778__auto__,"cljs.core.async/t24907");
});})(cs))
;
cljs.core.async.t24907.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24907.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24907.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24907.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24907.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24907.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24907.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24909){var self__ = this;
var _24909__$1 = this;return self__.meta24908;
});})(cs))
;
cljs.core.async.t24907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24909,meta24908__$1){var self__ = this;
var _24909__$1 = this;return (new cljs.core.async.t24907(self__.cs,self__.ch,self__.mult,meta24908__$1));
});})(cs))
;
cljs.core.async.__GT_t24907 = ((function (cs){
return (function __GT_t24907(cs__$1,ch__$1,mult__$1,meta24908){return (new cljs.core.async.t24907(cs__$1,ch__$1,mult__$1,meta24908));
});})(cs))
;
}
return (new cljs.core.async.t24907(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__21043__auto___25128 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__21043__auto___25128,cs,m,dchan,dctr,done){
return (function (){var f__21044__auto__ = (function (){var switch__20987__auto__ = ((function (c__21043__auto___25128,cs,m,dchan,dctr,done){
return (function (state_25040){var state_val_25041 = (state_25040[(1)]);if((state_val_25041 === (7)))
{var inst_25036 = (state_25040[(2)]);var state_25040__$1 = state_25040;var statearr_25042_25129 = state_25040__$1;(statearr_25042_25129[(2)] = inst_25036);
(statearr_25042_25129[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (20)))
{var inst_24941 = (state_25040[(7)]);var inst_24951 = cljs.core.first.call(null,inst_24941);var inst_24952 = cljs.core.nth.call(null,inst_24951,(0),null);var inst_24953 = cljs.core.nth.call(null,inst_24951,(1),null);var state_25040__$1 = (function (){var statearr_25043 = state_25040;(statearr_25043[(8)] = inst_24952);
return statearr_25043;
})();if(cljs.core.truth_(inst_24953))
{var statearr_25044_25130 = state_25040__$1;(statearr_25044_25130[(1)] = (22));
} else
{var statearr_25045_25131 = state_25040__$1;(statearr_25045_25131[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (27)))
{var inst_24981 = (state_25040[(9)]);var inst_24912 = (state_25040[(10)]);var inst_24988 = (state_25040[(11)]);var inst_24983 = (state_25040[(12)]);var inst_24988__$1 = cljs.core._nth.call(null,inst_24981,inst_24983);var inst_24989 = cljs.core.async.put_BANG_.call(null,inst_24988__$1,inst_24912,done);var state_25040__$1 = (function (){var statearr_25046 = state_25040;(statearr_25046[(11)] = inst_24988__$1);
return statearr_25046;
})();if(cljs.core.truth_(inst_24989))
{var statearr_25047_25132 = state_25040__$1;(statearr_25047_25132[(1)] = (30));
} else
{var statearr_25048_25133 = state_25040__$1;(statearr_25048_25133[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (1)))
{var state_25040__$1 = state_25040;var statearr_25049_25134 = state_25040__$1;(statearr_25049_25134[(2)] = null);
(statearr_25049_25134[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (24)))
{var inst_24941 = (state_25040[(7)]);var inst_24958 = (state_25040[(2)]);var inst_24959 = cljs.core.next.call(null,inst_24941);var inst_24921 = inst_24959;var inst_24922 = null;var inst_24923 = (0);var inst_24924 = (0);var state_25040__$1 = (function (){var statearr_25050 = state_25040;(statearr_25050[(13)] = inst_24923);
(statearr_25050[(14)] = inst_24922);
(statearr_25050[(15)] = inst_24958);
(statearr_25050[(16)] = inst_24921);
(statearr_25050[(17)] = inst_24924);
return statearr_25050;
})();var statearr_25051_25135 = state_25040__$1;(statearr_25051_25135[(2)] = null);
(statearr_25051_25135[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (39)))
{var state_25040__$1 = state_25040;var statearr_25055_25136 = state_25040__$1;(statearr_25055_25136[(2)] = null);
(statearr_25055_25136[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (4)))
{var inst_24912 = (state_25040[(10)]);var inst_24912__$1 = (state_25040[(2)]);var inst_24913 = (inst_24912__$1 == null);var state_25040__$1 = (function (){var statearr_25056 = state_25040;(statearr_25056[(10)] = inst_24912__$1);
return statearr_25056;
})();if(cljs.core.truth_(inst_24913))
{var statearr_25057_25137 = state_25040__$1;(statearr_25057_25137[(1)] = (5));
} else
{var statearr_25058_25138 = state_25040__$1;(statearr_25058_25138[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (15)))
{var inst_24923 = (state_25040[(13)]);var inst_24922 = (state_25040[(14)]);var inst_24921 = (state_25040[(16)]);var inst_24924 = (state_25040[(17)]);var inst_24937 = (state_25040[(2)]);var inst_24938 = (inst_24924 + (1));var tmp25052 = inst_24923;var tmp25053 = inst_24922;var tmp25054 = inst_24921;var inst_24921__$1 = tmp25054;var inst_24922__$1 = tmp25053;var inst_24923__$1 = tmp25052;var inst_24924__$1 = inst_24938;var state_25040__$1 = (function (){var statearr_25059 = state_25040;(statearr_25059[(13)] = inst_24923__$1);
(statearr_25059[(14)] = inst_24922__$1);
(statearr_25059[(16)] = inst_24921__$1);
(statearr_25059[(17)] = inst_24924__$1);
(statearr_25059[(18)] = inst_24937);
return statearr_25059;
})();var statearr_25060_25139 = state_25040__$1;(statearr_25060_25139[(2)] = null);
(statearr_25060_25139[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (21)))
{var inst_24962 = (state_25040[(2)]);var state_25040__$1 = state_25040;var statearr_25064_25140 = state_25040__$1;(statearr_25064_25140[(2)] = inst_24962);
(statearr_25064_25140[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (31)))
{var inst_24988 = (state_25040[(11)]);var inst_24992 = done.call(null,null);var inst_24993 = cljs.core.async.untap_STAR_.call(null,m,inst_24988);var state_25040__$1 = (function (){var statearr_25065 = state_25040;(statearr_25065[(19)] = inst_24992);
return statearr_25065;
})();var statearr_25066_25141 = state_25040__$1;(statearr_25066_25141[(2)] = inst_24993);
(statearr_25066_25141[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (32)))
{var inst_24981 = (state_25040[(9)]);var inst_24982 = (state_25040[(20)]);var inst_24980 = (state_25040[(21)]);var inst_24983 = (state_25040[(12)]);var inst_24995 = (state_25040[(2)]);var inst_24996 = (inst_24983 + (1));var tmp25061 = inst_24981;var tmp25062 = inst_24982;var tmp25063 = inst_24980;var inst_24980__$1 = tmp25063;var inst_24981__$1 = tmp25061;var inst_24982__$1 = tmp25062;var inst_24983__$1 = inst_24996;var state_25040__$1 = (function (){var statearr_25067 = state_25040;(statearr_25067[(22)] = inst_24995);
(statearr_25067[(9)] = inst_24981__$1);
(statearr_25067[(20)] = inst_24982__$1);
(statearr_25067[(21)] = inst_24980__$1);
(statearr_25067[(12)] = inst_24983__$1);
return statearr_25067;
})();var statearr_25068_25142 = state_25040__$1;(statearr_25068_25142[(2)] = null);
(statearr_25068_25142[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (40)))
{var inst_25008 = (state_25040[(23)]);var inst_25012 = done.call(null,null);var inst_25013 = cljs.core.async.untap_STAR_.call(null,m,inst_25008);var state_25040__$1 = (function (){var statearr_25069 = state_25040;(statearr_25069[(24)] = inst_25012);
return statearr_25069;
})();var statearr_25070_25143 = state_25040__$1;(statearr_25070_25143[(2)] = inst_25013);
(statearr_25070_25143[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (33)))
{var inst_24999 = (state_25040[(25)]);var inst_25001 = cljs.core.chunked_seq_QMARK_.call(null,inst_24999);var state_25040__$1 = state_25040;if(inst_25001)
{var statearr_25071_25144 = state_25040__$1;(statearr_25071_25144[(1)] = (36));
} else
{var statearr_25072_25145 = state_25040__$1;(statearr_25072_25145[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (13)))
{var inst_24931 = (state_25040[(26)]);var inst_24934 = cljs.core.async.close_BANG_.call(null,inst_24931);var state_25040__$1 = state_25040;var statearr_25073_25146 = state_25040__$1;(statearr_25073_25146[(2)] = inst_24934);
(statearr_25073_25146[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (22)))
{var inst_24952 = (state_25040[(8)]);var inst_24955 = cljs.core.async.close_BANG_.call(null,inst_24952);var state_25040__$1 = state_25040;var statearr_25074_25147 = state_25040__$1;(statearr_25074_25147[(2)] = inst_24955);
(statearr_25074_25147[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (36)))
{var inst_24999 = (state_25040[(25)]);var inst_25003 = cljs.core.chunk_first.call(null,inst_24999);var inst_25004 = cljs.core.chunk_rest.call(null,inst_24999);var inst_25005 = cljs.core.count.call(null,inst_25003);var inst_24980 = inst_25004;var inst_24981 = inst_25003;var inst_24982 = inst_25005;var inst_24983 = (0);var state_25040__$1 = (function (){var statearr_25075 = state_25040;(statearr_25075[(9)] = inst_24981);
(statearr_25075[(20)] = inst_24982);
(statearr_25075[(21)] = inst_24980);
(statearr_25075[(12)] = inst_24983);
return statearr_25075;
})();var statearr_25076_25148 = state_25040__$1;(statearr_25076_25148[(2)] = null);
(statearr_25076_25148[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (41)))
{var inst_24999 = (state_25040[(25)]);var inst_25015 = (state_25040[(2)]);var inst_25016 = cljs.core.next.call(null,inst_24999);var inst_24980 = inst_25016;var inst_24981 = null;var inst_24982 = (0);var inst_24983 = (0);var state_25040__$1 = (function (){var statearr_25077 = state_25040;(statearr_25077[(9)] = inst_24981);
(statearr_25077[(20)] = inst_24982);
(statearr_25077[(21)] = inst_24980);
(statearr_25077[(27)] = inst_25015);
(statearr_25077[(12)] = inst_24983);
return statearr_25077;
})();var statearr_25078_25149 = state_25040__$1;(statearr_25078_25149[(2)] = null);
(statearr_25078_25149[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (43)))
{var state_25040__$1 = state_25040;var statearr_25079_25150 = state_25040__$1;(statearr_25079_25150[(2)] = null);
(statearr_25079_25150[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (29)))
{var inst_25024 = (state_25040[(2)]);var state_25040__$1 = state_25040;var statearr_25080_25151 = state_25040__$1;(statearr_25080_25151[(2)] = inst_25024);
(statearr_25080_25151[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (44)))
{var inst_25033 = (state_25040[(2)]);var state_25040__$1 = (function (){var statearr_25081 = state_25040;(statearr_25081[(28)] = inst_25033);
return statearr_25081;
})();var statearr_25082_25152 = state_25040__$1;(statearr_25082_25152[(2)] = null);
(statearr_25082_25152[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (6)))
{var inst_24972 = (state_25040[(29)]);var inst_24971 = cljs.core.deref.call(null,cs);var inst_24972__$1 = cljs.core.keys.call(null,inst_24971);var inst_24973 = cljs.core.count.call(null,inst_24972__$1);var inst_24974 = cljs.core.reset_BANG_.call(null,dctr,inst_24973);var inst_24979 = cljs.core.seq.call(null,inst_24972__$1);var inst_24980 = inst_24979;var inst_24981 = null;var inst_24982 = (0);var inst_24983 = (0);var state_25040__$1 = (function (){var statearr_25083 = state_25040;(statearr_25083[(9)] = inst_24981);
(statearr_25083[(20)] = inst_24982);
(statearr_25083[(21)] = inst_24980);
(statearr_25083[(29)] = inst_24972__$1);
(statearr_25083[(12)] = inst_24983);
(statearr_25083[(30)] = inst_24974);
return statearr_25083;
})();var statearr_25084_25153 = state_25040__$1;(statearr_25084_25153[(2)] = null);
(statearr_25084_25153[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (28)))
{var inst_24999 = (state_25040[(25)]);var inst_24980 = (state_25040[(21)]);var inst_24999__$1 = cljs.core.seq.call(null,inst_24980);var state_25040__$1 = (function (){var statearr_25085 = state_25040;(statearr_25085[(25)] = inst_24999__$1);
return statearr_25085;
})();if(inst_24999__$1)
{var statearr_25086_25154 = state_25040__$1;(statearr_25086_25154[(1)] = (33));
} else
{var statearr_25087_25155 = state_25040__$1;(statearr_25087_25155[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (25)))
{var inst_24982 = (state_25040[(20)]);var inst_24983 = (state_25040[(12)]);var inst_24985 = (inst_24983 < inst_24982);var inst_24986 = inst_24985;var state_25040__$1 = state_25040;if(cljs.core.truth_(inst_24986))
{var statearr_25088_25156 = state_25040__$1;(statearr_25088_25156[(1)] = (27));
} else
{var statearr_25089_25157 = state_25040__$1;(statearr_25089_25157[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (34)))
{var state_25040__$1 = state_25040;var statearr_25090_25158 = state_25040__$1;(statearr_25090_25158[(2)] = null);
(statearr_25090_25158[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (17)))
{var state_25040__$1 = state_25040;var statearr_25091_25159 = state_25040__$1;(statearr_25091_25159[(2)] = null);
(statearr_25091_25159[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (3)))
{var inst_25038 = (state_25040[(2)]);var state_25040__$1 = state_25040;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25040__$1,inst_25038);
} else
{if((state_val_25041 === (12)))
{var inst_24967 = (state_25040[(2)]);var state_25040__$1 = state_25040;var statearr_25092_25160 = state_25040__$1;(statearr_25092_25160[(2)] = inst_24967);
(statearr_25092_25160[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (2)))
{var state_25040__$1 = state_25040;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25040__$1,(4),ch);
} else
{if((state_val_25041 === (23)))
{var state_25040__$1 = state_25040;var statearr_25093_25161 = state_25040__$1;(statearr_25093_25161[(2)] = null);
(statearr_25093_25161[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (35)))
{var inst_25022 = (state_25040[(2)]);var state_25040__$1 = state_25040;var statearr_25094_25162 = state_25040__$1;(statearr_25094_25162[(2)] = inst_25022);
(statearr_25094_25162[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (19)))
{var inst_24941 = (state_25040[(7)]);var inst_24945 = cljs.core.chunk_first.call(null,inst_24941);var inst_24946 = cljs.core.chunk_rest.call(null,inst_24941);var inst_24947 = cljs.core.count.call(null,inst_24945);var inst_24921 = inst_24946;var inst_24922 = inst_24945;var inst_24923 = inst_24947;var inst_24924 = (0);var state_25040__$1 = (function (){var statearr_25095 = state_25040;(statearr_25095[(13)] = inst_24923);
(statearr_25095[(14)] = inst_24922);
(statearr_25095[(16)] = inst_24921);
(statearr_25095[(17)] = inst_24924);
return statearr_25095;
})();var statearr_25096_25163 = state_25040__$1;(statearr_25096_25163[(2)] = null);
(statearr_25096_25163[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (11)))
{var inst_24941 = (state_25040[(7)]);var inst_24921 = (state_25040[(16)]);var inst_24941__$1 = cljs.core.seq.call(null,inst_24921);var state_25040__$1 = (function (){var statearr_25097 = state_25040;(statearr_25097[(7)] = inst_24941__$1);
return statearr_25097;
})();if(inst_24941__$1)
{var statearr_25098_25164 = state_25040__$1;(statearr_25098_25164[(1)] = (16));
} else
{var statearr_25099_25165 = state_25040__$1;(statearr_25099_25165[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (9)))
{var inst_24969 = (state_25040[(2)]);var state_25040__$1 = state_25040;var statearr_25100_25166 = state_25040__$1;(statearr_25100_25166[(2)] = inst_24969);
(statearr_25100_25166[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (5)))
{var inst_24919 = cljs.core.deref.call(null,cs);var inst_24920 = cljs.core.seq.call(null,inst_24919);var inst_24921 = inst_24920;var inst_24922 = null;var inst_24923 = (0);var inst_24924 = (0);var state_25040__$1 = (function (){var statearr_25101 = state_25040;(statearr_25101[(13)] = inst_24923);
(statearr_25101[(14)] = inst_24922);
(statearr_25101[(16)] = inst_24921);
(statearr_25101[(17)] = inst_24924);
return statearr_25101;
})();var statearr_25102_25167 = state_25040__$1;(statearr_25102_25167[(2)] = null);
(statearr_25102_25167[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (14)))
{var state_25040__$1 = state_25040;var statearr_25103_25168 = state_25040__$1;(statearr_25103_25168[(2)] = null);
(statearr_25103_25168[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (45)))
{var inst_25030 = (state_25040[(2)]);var state_25040__$1 = state_25040;var statearr_25104_25169 = state_25040__$1;(statearr_25104_25169[(2)] = inst_25030);
(statearr_25104_25169[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (26)))
{var inst_24972 = (state_25040[(29)]);var inst_25026 = (state_25040[(2)]);var inst_25027 = cljs.core.seq.call(null,inst_24972);var state_25040__$1 = (function (){var statearr_25105 = state_25040;(statearr_25105[(31)] = inst_25026);
return statearr_25105;
})();if(inst_25027)
{var statearr_25106_25170 = state_25040__$1;(statearr_25106_25170[(1)] = (42));
} else
{var statearr_25107_25171 = state_25040__$1;(statearr_25107_25171[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (16)))
{var inst_24941 = (state_25040[(7)]);var inst_24943 = cljs.core.chunked_seq_QMARK_.call(null,inst_24941);var state_25040__$1 = state_25040;if(inst_24943)
{var statearr_25108_25172 = state_25040__$1;(statearr_25108_25172[(1)] = (19));
} else
{var statearr_25109_25173 = state_25040__$1;(statearr_25109_25173[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (38)))
{var inst_25019 = (state_25040[(2)]);var state_25040__$1 = state_25040;var statearr_25110_25174 = state_25040__$1;(statearr_25110_25174[(2)] = inst_25019);
(statearr_25110_25174[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (30)))
{var state_25040__$1 = state_25040;var statearr_25111_25175 = state_25040__$1;(statearr_25111_25175[(2)] = null);
(statearr_25111_25175[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (10)))
{var inst_24922 = (state_25040[(14)]);var inst_24924 = (state_25040[(17)]);var inst_24930 = cljs.core._nth.call(null,inst_24922,inst_24924);var inst_24931 = cljs.core.nth.call(null,inst_24930,(0),null);var inst_24932 = cljs.core.nth.call(null,inst_24930,(1),null);var state_25040__$1 = (function (){var statearr_25112 = state_25040;(statearr_25112[(26)] = inst_24931);
return statearr_25112;
})();if(cljs.core.truth_(inst_24932))
{var statearr_25113_25176 = state_25040__$1;(statearr_25113_25176[(1)] = (13));
} else
{var statearr_25114_25177 = state_25040__$1;(statearr_25114_25177[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (18)))
{var inst_24965 = (state_25040[(2)]);var state_25040__$1 = state_25040;var statearr_25115_25178 = state_25040__$1;(statearr_25115_25178[(2)] = inst_24965);
(statearr_25115_25178[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (42)))
{var state_25040__$1 = state_25040;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25040__$1,(45),dchan);
} else
{if((state_val_25041 === (37)))
{var inst_24999 = (state_25040[(25)]);var inst_24912 = (state_25040[(10)]);var inst_25008 = (state_25040[(23)]);var inst_25008__$1 = cljs.core.first.call(null,inst_24999);var inst_25009 = cljs.core.async.put_BANG_.call(null,inst_25008__$1,inst_24912,done);var state_25040__$1 = (function (){var statearr_25116 = state_25040;(statearr_25116[(23)] = inst_25008__$1);
return statearr_25116;
})();if(cljs.core.truth_(inst_25009))
{var statearr_25117_25179 = state_25040__$1;(statearr_25117_25179[(1)] = (39));
} else
{var statearr_25118_25180 = state_25040__$1;(statearr_25118_25180[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25041 === (8)))
{var inst_24923 = (state_25040[(13)]);var inst_24924 = (state_25040[(17)]);var inst_24926 = (inst_24924 < inst_24923);var inst_24927 = inst_24926;var state_25040__$1 = state_25040;if(cljs.core.truth_(inst_24927))
{var statearr_25119_25181 = state_25040__$1;(statearr_25119_25181[(1)] = (10));
} else
{var statearr_25120_25182 = state_25040__$1;(statearr_25120_25182[(1)] = (11));
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
});})(c__21043__auto___25128,cs,m,dchan,dctr,done))
;return ((function (switch__20987__auto__,c__21043__auto___25128,cs,m,dchan,dctr,done){
return (function() {
var state_machine__20988__auto__ = null;
var state_machine__20988__auto____0 = (function (){var statearr_25124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25124[(0)] = state_machine__20988__auto__);
(statearr_25124[(1)] = (1));
return statearr_25124;
});
var state_machine__20988__auto____1 = (function (state_25040){while(true){
var ret_value__20989__auto__ = (function (){try{while(true){
var result__20990__auto__ = switch__20987__auto__.call(null,state_25040);if(cljs.core.keyword_identical_QMARK_.call(null,result__20990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__20990__auto__;
}
break;
}
}catch (e25125){if((e25125 instanceof Object))
{var ex__20991__auto__ = e25125;var statearr_25126_25183 = state_25040;(statearr_25126_25183[(5)] = ex__20991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25040);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25125;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25184 = state_25040;
state_25040 = G__25184;
continue;
}
} else
{return ret_value__20989__auto__;
}
break;
}
});
state_machine__20988__auto__ = function(state_25040){
switch(arguments.length){
case 0:
return state_machine__20988__auto____0.call(this);
case 1:
return state_machine__20988__auto____1.call(this,state_25040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20988__auto____0;
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20988__auto____1;
return state_machine__20988__auto__;
})()
;})(switch__20987__auto__,c__21043__auto___25128,cs,m,dchan,dctr,done))
})();var state__21045__auto__ = (function (){var statearr_25127 = f__21044__auto__.call(null);(statearr_25127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21043__auto___25128);
return statearr_25127;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21045__auto__);
});})(c__21043__auto___25128,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj25186 = {};return obj25186;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__15188__auto__ = m;if(and__15188__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__15188__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__15837__auto__ = (((m == null))?null:m);return (function (){var or__15200__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__15837__auto__)]);if(or__15200__auto__)
{return or__15200__auto__;
} else
{var or__15200__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__15200__auto____$1)
{return or__15200__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__15188__auto__ = m;if(and__15188__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__15188__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__15837__auto__ = (((m == null))?null:m);return (function (){var or__15200__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__15837__auto__)]);if(or__15200__auto__)
{return or__15200__auto__;
} else
{var or__15200__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__15200__auto____$1)
{return or__15200__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__15188__auto__ = m;if(and__15188__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__15188__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__15837__auto__ = (((m == null))?null:m);return (function (){var or__15200__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__15837__auto__)]);if(or__15200__auto__)
{return or__15200__auto__;
} else
{var or__15200__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__15200__auto____$1)
{return or__15200__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__15188__auto__ = m;if(and__15188__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__15188__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__15837__auto__ = (((m == null))?null:m);return (function (){var or__15200__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__15837__auto__)]);if(or__15200__auto__)
{return or__15200__auto__;
} else
{var or__15200__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__15200__auto____$1)
{return or__15200__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__15188__auto__ = m;if(and__15188__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__15188__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__15837__auto__ = (((m == null))?null:m);return (function (){var or__15200__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__15837__auto__)]);if(or__15200__auto__)
{return or__15200__auto__;
} else
{var or__15200__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__15200__auto____$1)
{return or__15200__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__25187){var map__25192 = p__25187;var map__25192__$1 = ((cljs.core.seq_QMARK_.call(null,map__25192))?cljs.core.apply.call(null,cljs.core.hash_map,map__25192):map__25192);var opts = map__25192__$1;var statearr_25193_25196 = state;(statearr_25193_25196[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__25192,map__25192__$1,opts){
return (function (val){var statearr_25194_25197 = state;(statearr_25194_25197[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25192,map__25192__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_25195_25198 = state;(statearr_25195_25198[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__25187 = null;if (arguments.length > 3) {
  p__25187 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__25187);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__25199){
var state = cljs.core.first(arglist__25199);
arglist__25199 = cljs.core.next(arglist__25199);
var cont_block = cljs.core.first(arglist__25199);
arglist__25199 = cljs.core.next(arglist__25199);
var ports = cljs.core.first(arglist__25199);
var p__25187 = cljs.core.rest(arglist__25199);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__25187);
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
;var m = (function (){if(typeof cljs.core.async.t25319 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25319 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25320){
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
this.meta25320 = meta25320;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25319.cljs$lang$type = true;
cljs.core.async.t25319.cljs$lang$ctorStr = "cljs.core.async/t25319";
cljs.core.async.t25319.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__15777__auto__,writer__15778__auto__,opt__15779__auto__){return cljs.core._write.call(null,writer__15778__auto__,"cljs.core.async/t25319");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25319.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25319.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25319.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25319.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25319.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25319.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25319.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25319.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25319.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25321){var self__ = this;
var _25321__$1 = this;return self__.meta25320;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25321,meta25320__$1){var self__ = this;
var _25321__$1 = this;return (new cljs.core.async.t25319(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25320__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25319 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25319(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25320){return (new cljs.core.async.t25319(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25320));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25319(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__21043__auto___25438 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__21043__auto___25438,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__21044__auto__ = (function (){var switch__20987__auto__ = ((function (c__21043__auto___25438,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25391){var state_val_25392 = (state_25391[(1)]);if((state_val_25392 === (7)))
{var inst_25335 = (state_25391[(7)]);var inst_25340 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25335);var state_25391__$1 = state_25391;var statearr_25393_25439 = state_25391__$1;(statearr_25393_25439[(2)] = inst_25340);
(statearr_25393_25439[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25392 === (20)))
{var inst_25350 = (state_25391[(8)]);var state_25391__$1 = state_25391;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25391__$1,(23),out,inst_25350);
} else
{if((state_val_25392 === (1)))
{var inst_25325 = (state_25391[(9)]);var inst_25325__$1 = calc_state.call(null);var inst_25326 = cljs.core.seq_QMARK_.call(null,inst_25325__$1);var state_25391__$1 = (function (){var statearr_25394 = state_25391;(statearr_25394[(9)] = inst_25325__$1);
return statearr_25394;
})();if(inst_25326)
{var statearr_25395_25440 = state_25391__$1;(statearr_25395_25440[(1)] = (2));
} else
{var statearr_25396_25441 = state_25391__$1;(statearr_25396_25441[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25392 === (24)))
{var inst_25343 = (state_25391[(10)]);var inst_25335 = inst_25343;var state_25391__$1 = (function (){var statearr_25397 = state_25391;(statearr_25397[(7)] = inst_25335);
return statearr_25397;
})();var statearr_25398_25442 = state_25391__$1;(statearr_25398_25442[(2)] = null);
(statearr_25398_25442[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25392 === (4)))
{var inst_25325 = (state_25391[(9)]);var inst_25331 = (state_25391[(2)]);var inst_25332 = cljs.core.get.call(null,inst_25331,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_25333 = cljs.core.get.call(null,inst_25331,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_25334 = cljs.core.get.call(null,inst_25331,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_25335 = inst_25325;var state_25391__$1 = (function (){var statearr_25399 = state_25391;(statearr_25399[(11)] = inst_25333);
(statearr_25399[(12)] = inst_25332);
(statearr_25399[(13)] = inst_25334);
(statearr_25399[(7)] = inst_25335);
return statearr_25399;
})();var statearr_25400_25443 = state_25391__$1;(statearr_25400_25443[(2)] = null);
(statearr_25400_25443[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25392 === (15)))
{var state_25391__$1 = state_25391;var statearr_25401_25444 = state_25391__$1;(statearr_25401_25444[(2)] = null);
(statearr_25401_25444[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25392 === (21)))
{var inst_25343 = (state_25391[(10)]);var inst_25335 = inst_25343;var state_25391__$1 = (function (){var statearr_25402 = state_25391;(statearr_25402[(7)] = inst_25335);
return statearr_25402;
})();var statearr_25403_25445 = state_25391__$1;(statearr_25403_25445[(2)] = null);
(statearr_25403_25445[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25392 === (13)))
{var inst_25387 = (state_25391[(2)]);var state_25391__$1 = state_25391;var statearr_25404_25446 = state_25391__$1;(statearr_25404_25446[(2)] = inst_25387);
(statearr_25404_25446[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25392 === (22)))
{var inst_25385 = (state_25391[(2)]);var state_25391__$1 = state_25391;var statearr_25405_25447 = state_25391__$1;(statearr_25405_25447[(2)] = inst_25385);
(statearr_25405_25447[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25392 === (6)))
{var inst_25389 = (state_25391[(2)]);var state_25391__$1 = state_25391;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25391__$1,inst_25389);
} else
{if((state_val_25392 === (25)))
{var state_25391__$1 = state_25391;var statearr_25406_25448 = state_25391__$1;(statearr_25406_25448[(2)] = null);
(statearr_25406_25448[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25392 === (17)))
{var inst_25365 = (state_25391[(14)]);var state_25391__$1 = state_25391;var statearr_25407_25449 = state_25391__$1;(statearr_25407_25449[(2)] = inst_25365);
(statearr_25407_25449[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25392 === (3)))
{var inst_25325 = (state_25391[(9)]);var state_25391__$1 = state_25391;var statearr_25408_25450 = state_25391__$1;(statearr_25408_25450[(2)] = inst_25325);
(statearr_25408_25450[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25392 === (12)))
{var inst_25365 = (state_25391[(14)]);var inst_25351 = (state_25391[(15)]);var inst_25346 = (state_25391[(16)]);var inst_25365__$1 = inst_25346.call(null,inst_25351);var state_25391__$1 = (function (){var statearr_25409 = state_25391;(statearr_25409[(14)] = inst_25365__$1);
return statearr_25409;
})();if(cljs.core.truth_(inst_25365__$1))
{var statearr_25410_25451 = state_25391__$1;(statearr_25410_25451[(1)] = (17));
} else
{var statearr_25411_25452 = state_25391__$1;(statearr_25411_25452[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25392 === (2)))
{var inst_25325 = (state_25391[(9)]);var inst_25328 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25325);var state_25391__$1 = state_25391;var statearr_25412_25453 = state_25391__$1;(statearr_25412_25453[(2)] = inst_25328);
(statearr_25412_25453[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25392 === (23)))
{var inst_25376 = (state_25391[(2)]);var state_25391__$1 = state_25391;if(cljs.core.truth_(inst_25376))
{var statearr_25413_25454 = state_25391__$1;(statearr_25413_25454[(1)] = (24));
} else
{var statearr_25414_25455 = state_25391__$1;(statearr_25414_25455[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25392 === (19)))
{var inst_25373 = (state_25391[(2)]);var state_25391__$1 = state_25391;if(cljs.core.truth_(inst_25373))
{var statearr_25415_25456 = state_25391__$1;(statearr_25415_25456[(1)] = (20));
} else
{var statearr_25416_25457 = state_25391__$1;(statearr_25416_25457[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25392 === (11)))
{var inst_25350 = (state_25391[(8)]);var inst_25356 = (inst_25350 == null);var state_25391__$1 = state_25391;if(cljs.core.truth_(inst_25356))
{var statearr_25417_25458 = state_25391__$1;(statearr_25417_25458[(1)] = (14));
} else
{var statearr_25418_25459 = state_25391__$1;(statearr_25418_25459[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25392 === (9)))
{var inst_25343 = (state_25391[(10)]);var inst_25343__$1 = (state_25391[(2)]);var inst_25344 = cljs.core.get.call(null,inst_25343__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_25345 = cljs.core.get.call(null,inst_25343__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_25346 = cljs.core.get.call(null,inst_25343__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_25391__$1 = (function (){var statearr_25419 = state_25391;(statearr_25419[(10)] = inst_25343__$1);
(statearr_25419[(17)] = inst_25345);
(statearr_25419[(16)] = inst_25346);
return statearr_25419;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_25391__$1,(10),inst_25344);
} else
{if((state_val_25392 === (5)))
{var inst_25335 = (state_25391[(7)]);var inst_25338 = cljs.core.seq_QMARK_.call(null,inst_25335);var state_25391__$1 = state_25391;if(inst_25338)
{var statearr_25420_25460 = state_25391__$1;(statearr_25420_25460[(1)] = (7));
} else
{var statearr_25421_25461 = state_25391__$1;(statearr_25421_25461[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25392 === (14)))
{var inst_25351 = (state_25391[(15)]);var inst_25358 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25351);var state_25391__$1 = state_25391;var statearr_25422_25462 = state_25391__$1;(statearr_25422_25462[(2)] = inst_25358);
(statearr_25422_25462[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25392 === (26)))
{var inst_25381 = (state_25391[(2)]);var state_25391__$1 = state_25391;var statearr_25423_25463 = state_25391__$1;(statearr_25423_25463[(2)] = inst_25381);
(statearr_25423_25463[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25392 === (16)))
{var inst_25361 = (state_25391[(2)]);var inst_25362 = calc_state.call(null);var inst_25335 = inst_25362;var state_25391__$1 = (function (){var statearr_25424 = state_25391;(statearr_25424[(18)] = inst_25361);
(statearr_25424[(7)] = inst_25335);
return statearr_25424;
})();var statearr_25425_25464 = state_25391__$1;(statearr_25425_25464[(2)] = null);
(statearr_25425_25464[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25392 === (10)))
{var inst_25350 = (state_25391[(8)]);var inst_25351 = (state_25391[(15)]);var inst_25349 = (state_25391[(2)]);var inst_25350__$1 = cljs.core.nth.call(null,inst_25349,(0),null);var inst_25351__$1 = cljs.core.nth.call(null,inst_25349,(1),null);var inst_25352 = (inst_25350__$1 == null);var inst_25353 = cljs.core._EQ_.call(null,inst_25351__$1,change);var inst_25354 = (inst_25352) || (inst_25353);var state_25391__$1 = (function (){var statearr_25426 = state_25391;(statearr_25426[(8)] = inst_25350__$1);
(statearr_25426[(15)] = inst_25351__$1);
return statearr_25426;
})();if(cljs.core.truth_(inst_25354))
{var statearr_25427_25465 = state_25391__$1;(statearr_25427_25465[(1)] = (11));
} else
{var statearr_25428_25466 = state_25391__$1;(statearr_25428_25466[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25392 === (18)))
{var inst_25345 = (state_25391[(17)]);var inst_25351 = (state_25391[(15)]);var inst_25346 = (state_25391[(16)]);var inst_25368 = cljs.core.empty_QMARK_.call(null,inst_25346);var inst_25369 = inst_25345.call(null,inst_25351);var inst_25370 = cljs.core.not.call(null,inst_25369);var inst_25371 = (inst_25368) && (inst_25370);var state_25391__$1 = state_25391;var statearr_25429_25467 = state_25391__$1;(statearr_25429_25467[(2)] = inst_25371);
(statearr_25429_25467[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25392 === (8)))
{var inst_25335 = (state_25391[(7)]);var state_25391__$1 = state_25391;var statearr_25430_25468 = state_25391__$1;(statearr_25430_25468[(2)] = inst_25335);
(statearr_25430_25468[(1)] = (9));
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
});})(c__21043__auto___25438,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__20987__auto__,c__21043__auto___25438,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__20988__auto__ = null;
var state_machine__20988__auto____0 = (function (){var statearr_25434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25434[(0)] = state_machine__20988__auto__);
(statearr_25434[(1)] = (1));
return statearr_25434;
});
var state_machine__20988__auto____1 = (function (state_25391){while(true){
var ret_value__20989__auto__ = (function (){try{while(true){
var result__20990__auto__ = switch__20987__auto__.call(null,state_25391);if(cljs.core.keyword_identical_QMARK_.call(null,result__20990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__20990__auto__;
}
break;
}
}catch (e25435){if((e25435 instanceof Object))
{var ex__20991__auto__ = e25435;var statearr_25436_25469 = state_25391;(statearr_25436_25469[(5)] = ex__20991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25391);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25435;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25470 = state_25391;
state_25391 = G__25470;
continue;
}
} else
{return ret_value__20989__auto__;
}
break;
}
});
state_machine__20988__auto__ = function(state_25391){
switch(arguments.length){
case 0:
return state_machine__20988__auto____0.call(this);
case 1:
return state_machine__20988__auto____1.call(this,state_25391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20988__auto____0;
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20988__auto____1;
return state_machine__20988__auto__;
})()
;})(switch__20987__auto__,c__21043__auto___25438,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__21045__auto__ = (function (){var statearr_25437 = f__21044__auto__.call(null);(statearr_25437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21043__auto___25438);
return statearr_25437;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21045__auto__);
});})(c__21043__auto___25438,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj25472 = {};return obj25472;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__15188__auto__ = p;if(and__15188__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__15188__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__15837__auto__ = (((p == null))?null:p);return (function (){var or__15200__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__15837__auto__)]);if(or__15200__auto__)
{return or__15200__auto__;
} else
{var or__15200__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__15200__auto____$1)
{return or__15200__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__15188__auto__ = p;if(and__15188__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__15188__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__15837__auto__ = (((p == null))?null:p);return (function (){var or__15200__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__15837__auto__)]);if(or__15200__auto__)
{return or__15200__auto__;
} else
{var or__15200__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__15200__auto____$1)
{return or__15200__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__15188__auto__ = p;if(and__15188__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__15188__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__15837__auto__ = (((p == null))?null:p);return (function (){var or__15200__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__15837__auto__)]);if(or__15200__auto__)
{return or__15200__auto__;
} else
{var or__15200__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__15200__auto____$1)
{return or__15200__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__15188__auto__ = p;if(and__15188__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__15188__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__15837__auto__ = (((p == null))?null:p);return (function (){var or__15200__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__15837__auto__)]);if(or__15200__auto__)
{return or__15200__auto__;
} else
{var or__15200__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__15200__auto____$1)
{return or__15200__auto____$1;
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
return (function (topic){var or__15200__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__15200__auto__))
{return or__15200__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__15200__auto__,mults){
return (function (p1__25473_SHARP_){if(cljs.core.truth_(p1__25473_SHARP_.call(null,topic)))
{return p1__25473_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__25473_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__15200__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25596 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25596 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25597){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25597 = meta25597;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25596.cljs$lang$type = true;
cljs.core.async.t25596.cljs$lang$ctorStr = "cljs.core.async/t25596";
cljs.core.async.t25596.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__15777__auto__,writer__15778__auto__,opt__15779__auto__){return cljs.core._write.call(null,writer__15778__auto__,"cljs.core.async/t25596");
});})(mults,ensure_mult))
;
cljs.core.async.t25596.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25596.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25596.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25596.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t25596.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25596.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25596.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25596.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25598){var self__ = this;
var _25598__$1 = this;return self__.meta25597;
});})(mults,ensure_mult))
;
cljs.core.async.t25596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25598,meta25597__$1){var self__ = this;
var _25598__$1 = this;return (new cljs.core.async.t25596(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25597__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25596 = ((function (mults,ensure_mult){
return (function __GT_t25596(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25597){return (new cljs.core.async.t25596(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25597));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25596(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__21043__auto___25718 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__21043__auto___25718,mults,ensure_mult,p){
return (function (){var f__21044__auto__ = (function (){var switch__20987__auto__ = ((function (c__21043__auto___25718,mults,ensure_mult,p){
return (function (state_25670){var state_val_25671 = (state_25670[(1)]);if((state_val_25671 === (7)))
{var inst_25666 = (state_25670[(2)]);var state_25670__$1 = state_25670;var statearr_25672_25719 = state_25670__$1;(statearr_25672_25719[(2)] = inst_25666);
(statearr_25672_25719[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25671 === (20)))
{var state_25670__$1 = state_25670;var statearr_25673_25720 = state_25670__$1;(statearr_25673_25720[(2)] = null);
(statearr_25673_25720[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25671 === (1)))
{var state_25670__$1 = state_25670;var statearr_25674_25721 = state_25670__$1;(statearr_25674_25721[(2)] = null);
(statearr_25674_25721[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25671 === (24)))
{var inst_25649 = (state_25670[(7)]);var inst_25658 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25649);var state_25670__$1 = state_25670;var statearr_25675_25722 = state_25670__$1;(statearr_25675_25722[(2)] = inst_25658);
(statearr_25675_25722[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25671 === (4)))
{var inst_25601 = (state_25670[(8)]);var inst_25601__$1 = (state_25670[(2)]);var inst_25602 = (inst_25601__$1 == null);var state_25670__$1 = (function (){var statearr_25676 = state_25670;(statearr_25676[(8)] = inst_25601__$1);
return statearr_25676;
})();if(cljs.core.truth_(inst_25602))
{var statearr_25677_25723 = state_25670__$1;(statearr_25677_25723[(1)] = (5));
} else
{var statearr_25678_25724 = state_25670__$1;(statearr_25678_25724[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25671 === (15)))
{var inst_25643 = (state_25670[(2)]);var state_25670__$1 = state_25670;var statearr_25679_25725 = state_25670__$1;(statearr_25679_25725[(2)] = inst_25643);
(statearr_25679_25725[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25671 === (21)))
{var inst_25663 = (state_25670[(2)]);var state_25670__$1 = (function (){var statearr_25680 = state_25670;(statearr_25680[(9)] = inst_25663);
return statearr_25680;
})();var statearr_25681_25726 = state_25670__$1;(statearr_25681_25726[(2)] = null);
(statearr_25681_25726[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25671 === (13)))
{var inst_25625 = (state_25670[(10)]);var inst_25627 = cljs.core.chunked_seq_QMARK_.call(null,inst_25625);var state_25670__$1 = state_25670;if(inst_25627)
{var statearr_25682_25727 = state_25670__$1;(statearr_25682_25727[(1)] = (16));
} else
{var statearr_25683_25728 = state_25670__$1;(statearr_25683_25728[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25671 === (22)))
{var inst_25655 = (state_25670[(2)]);var state_25670__$1 = state_25670;if(cljs.core.truth_(inst_25655))
{var statearr_25684_25729 = state_25670__$1;(statearr_25684_25729[(1)] = (23));
} else
{var statearr_25685_25730 = state_25670__$1;(statearr_25685_25730[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25671 === (6)))
{var inst_25649 = (state_25670[(7)]);var inst_25601 = (state_25670[(8)]);var inst_25651 = (state_25670[(11)]);var inst_25649__$1 = topic_fn.call(null,inst_25601);var inst_25650 = cljs.core.deref.call(null,mults);var inst_25651__$1 = cljs.core.get.call(null,inst_25650,inst_25649__$1);var state_25670__$1 = (function (){var statearr_25686 = state_25670;(statearr_25686[(7)] = inst_25649__$1);
(statearr_25686[(11)] = inst_25651__$1);
return statearr_25686;
})();if(cljs.core.truth_(inst_25651__$1))
{var statearr_25687_25731 = state_25670__$1;(statearr_25687_25731[(1)] = (19));
} else
{var statearr_25688_25732 = state_25670__$1;(statearr_25688_25732[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25671 === (25)))
{var inst_25660 = (state_25670[(2)]);var state_25670__$1 = state_25670;var statearr_25689_25733 = state_25670__$1;(statearr_25689_25733[(2)] = inst_25660);
(statearr_25689_25733[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25671 === (17)))
{var inst_25625 = (state_25670[(10)]);var inst_25634 = cljs.core.first.call(null,inst_25625);var inst_25635 = cljs.core.async.muxch_STAR_.call(null,inst_25634);var inst_25636 = cljs.core.async.close_BANG_.call(null,inst_25635);var inst_25637 = cljs.core.next.call(null,inst_25625);var inst_25611 = inst_25637;var inst_25612 = null;var inst_25613 = (0);var inst_25614 = (0);var state_25670__$1 = (function (){var statearr_25690 = state_25670;(statearr_25690[(12)] = inst_25612);
(statearr_25690[(13)] = inst_25613);
(statearr_25690[(14)] = inst_25611);
(statearr_25690[(15)] = inst_25614);
(statearr_25690[(16)] = inst_25636);
return statearr_25690;
})();var statearr_25691_25734 = state_25670__$1;(statearr_25691_25734[(2)] = null);
(statearr_25691_25734[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25671 === (3)))
{var inst_25668 = (state_25670[(2)]);var state_25670__$1 = state_25670;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25670__$1,inst_25668);
} else
{if((state_val_25671 === (12)))
{var inst_25645 = (state_25670[(2)]);var state_25670__$1 = state_25670;var statearr_25692_25735 = state_25670__$1;(statearr_25692_25735[(2)] = inst_25645);
(statearr_25692_25735[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25671 === (2)))
{var state_25670__$1 = state_25670;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25670__$1,(4),ch);
} else
{if((state_val_25671 === (23)))
{var state_25670__$1 = state_25670;var statearr_25693_25736 = state_25670__$1;(statearr_25693_25736[(2)] = null);
(statearr_25693_25736[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25671 === (19)))
{var inst_25601 = (state_25670[(8)]);var inst_25651 = (state_25670[(11)]);var inst_25653 = cljs.core.async.muxch_STAR_.call(null,inst_25651);var state_25670__$1 = state_25670;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25670__$1,(22),inst_25653,inst_25601);
} else
{if((state_val_25671 === (11)))
{var inst_25611 = (state_25670[(14)]);var inst_25625 = (state_25670[(10)]);var inst_25625__$1 = cljs.core.seq.call(null,inst_25611);var state_25670__$1 = (function (){var statearr_25694 = state_25670;(statearr_25694[(10)] = inst_25625__$1);
return statearr_25694;
})();if(inst_25625__$1)
{var statearr_25695_25737 = state_25670__$1;(statearr_25695_25737[(1)] = (13));
} else
{var statearr_25696_25738 = state_25670__$1;(statearr_25696_25738[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25671 === (9)))
{var inst_25647 = (state_25670[(2)]);var state_25670__$1 = state_25670;var statearr_25697_25739 = state_25670__$1;(statearr_25697_25739[(2)] = inst_25647);
(statearr_25697_25739[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25671 === (5)))
{var inst_25608 = cljs.core.deref.call(null,mults);var inst_25609 = cljs.core.vals.call(null,inst_25608);var inst_25610 = cljs.core.seq.call(null,inst_25609);var inst_25611 = inst_25610;var inst_25612 = null;var inst_25613 = (0);var inst_25614 = (0);var state_25670__$1 = (function (){var statearr_25698 = state_25670;(statearr_25698[(12)] = inst_25612);
(statearr_25698[(13)] = inst_25613);
(statearr_25698[(14)] = inst_25611);
(statearr_25698[(15)] = inst_25614);
return statearr_25698;
})();var statearr_25699_25740 = state_25670__$1;(statearr_25699_25740[(2)] = null);
(statearr_25699_25740[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25671 === (14)))
{var state_25670__$1 = state_25670;var statearr_25703_25741 = state_25670__$1;(statearr_25703_25741[(2)] = null);
(statearr_25703_25741[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25671 === (16)))
{var inst_25625 = (state_25670[(10)]);var inst_25629 = cljs.core.chunk_first.call(null,inst_25625);var inst_25630 = cljs.core.chunk_rest.call(null,inst_25625);var inst_25631 = cljs.core.count.call(null,inst_25629);var inst_25611 = inst_25630;var inst_25612 = inst_25629;var inst_25613 = inst_25631;var inst_25614 = (0);var state_25670__$1 = (function (){var statearr_25704 = state_25670;(statearr_25704[(12)] = inst_25612);
(statearr_25704[(13)] = inst_25613);
(statearr_25704[(14)] = inst_25611);
(statearr_25704[(15)] = inst_25614);
return statearr_25704;
})();var statearr_25705_25742 = state_25670__$1;(statearr_25705_25742[(2)] = null);
(statearr_25705_25742[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25671 === (10)))
{var inst_25612 = (state_25670[(12)]);var inst_25613 = (state_25670[(13)]);var inst_25611 = (state_25670[(14)]);var inst_25614 = (state_25670[(15)]);var inst_25619 = cljs.core._nth.call(null,inst_25612,inst_25614);var inst_25620 = cljs.core.async.muxch_STAR_.call(null,inst_25619);var inst_25621 = cljs.core.async.close_BANG_.call(null,inst_25620);var inst_25622 = (inst_25614 + (1));var tmp25700 = inst_25612;var tmp25701 = inst_25613;var tmp25702 = inst_25611;var inst_25611__$1 = tmp25702;var inst_25612__$1 = tmp25700;var inst_25613__$1 = tmp25701;var inst_25614__$1 = inst_25622;var state_25670__$1 = (function (){var statearr_25706 = state_25670;(statearr_25706[(12)] = inst_25612__$1);
(statearr_25706[(13)] = inst_25613__$1);
(statearr_25706[(14)] = inst_25611__$1);
(statearr_25706[(15)] = inst_25614__$1);
(statearr_25706[(17)] = inst_25621);
return statearr_25706;
})();var statearr_25707_25743 = state_25670__$1;(statearr_25707_25743[(2)] = null);
(statearr_25707_25743[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25671 === (18)))
{var inst_25640 = (state_25670[(2)]);var state_25670__$1 = state_25670;var statearr_25708_25744 = state_25670__$1;(statearr_25708_25744[(2)] = inst_25640);
(statearr_25708_25744[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25671 === (8)))
{var inst_25613 = (state_25670[(13)]);var inst_25614 = (state_25670[(15)]);var inst_25616 = (inst_25614 < inst_25613);var inst_25617 = inst_25616;var state_25670__$1 = state_25670;if(cljs.core.truth_(inst_25617))
{var statearr_25709_25745 = state_25670__$1;(statearr_25709_25745[(1)] = (10));
} else
{var statearr_25710_25746 = state_25670__$1;(statearr_25710_25746[(1)] = (11));
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
});})(c__21043__auto___25718,mults,ensure_mult,p))
;return ((function (switch__20987__auto__,c__21043__auto___25718,mults,ensure_mult,p){
return (function() {
var state_machine__20988__auto__ = null;
var state_machine__20988__auto____0 = (function (){var statearr_25714 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25714[(0)] = state_machine__20988__auto__);
(statearr_25714[(1)] = (1));
return statearr_25714;
});
var state_machine__20988__auto____1 = (function (state_25670){while(true){
var ret_value__20989__auto__ = (function (){try{while(true){
var result__20990__auto__ = switch__20987__auto__.call(null,state_25670);if(cljs.core.keyword_identical_QMARK_.call(null,result__20990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__20990__auto__;
}
break;
}
}catch (e25715){if((e25715 instanceof Object))
{var ex__20991__auto__ = e25715;var statearr_25716_25747 = state_25670;(statearr_25716_25747[(5)] = ex__20991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25670);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25715;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25748 = state_25670;
state_25670 = G__25748;
continue;
}
} else
{return ret_value__20989__auto__;
}
break;
}
});
state_machine__20988__auto__ = function(state_25670){
switch(arguments.length){
case 0:
return state_machine__20988__auto____0.call(this);
case 1:
return state_machine__20988__auto____1.call(this,state_25670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20988__auto____0;
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20988__auto____1;
return state_machine__20988__auto__;
})()
;})(switch__20987__auto__,c__21043__auto___25718,mults,ensure_mult,p))
})();var state__21045__auto__ = (function (){var statearr_25717 = f__21044__auto__.call(null);(statearr_25717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21043__auto___25718);
return statearr_25717;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21045__auto__);
});})(c__21043__auto___25718,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__21043__auto___25885 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__21043__auto___25885,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__21044__auto__ = (function (){var switch__20987__auto__ = ((function (c__21043__auto___25885,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25855){var state_val_25856 = (state_25855[(1)]);if((state_val_25856 === (7)))
{var state_25855__$1 = state_25855;var statearr_25857_25886 = state_25855__$1;(statearr_25857_25886[(2)] = null);
(statearr_25857_25886[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25856 === (1)))
{var state_25855__$1 = state_25855;var statearr_25858_25887 = state_25855__$1;(statearr_25858_25887[(2)] = null);
(statearr_25858_25887[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25856 === (4)))
{var inst_25819 = (state_25855[(7)]);var inst_25821 = (inst_25819 < cnt);var state_25855__$1 = state_25855;if(cljs.core.truth_(inst_25821))
{var statearr_25859_25888 = state_25855__$1;(statearr_25859_25888[(1)] = (6));
} else
{var statearr_25860_25889 = state_25855__$1;(statearr_25860_25889[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25856 === (15)))
{var inst_25851 = (state_25855[(2)]);var state_25855__$1 = state_25855;var statearr_25861_25890 = state_25855__$1;(statearr_25861_25890[(2)] = inst_25851);
(statearr_25861_25890[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25856 === (13)))
{var inst_25844 = cljs.core.async.close_BANG_.call(null,out);var state_25855__$1 = state_25855;var statearr_25862_25891 = state_25855__$1;(statearr_25862_25891[(2)] = inst_25844);
(statearr_25862_25891[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25856 === (6)))
{var state_25855__$1 = state_25855;var statearr_25863_25892 = state_25855__$1;(statearr_25863_25892[(2)] = null);
(statearr_25863_25892[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25856 === (3)))
{var inst_25853 = (state_25855[(2)]);var state_25855__$1 = state_25855;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25855__$1,inst_25853);
} else
{if((state_val_25856 === (12)))
{var inst_25841 = (state_25855[(8)]);var inst_25841__$1 = (state_25855[(2)]);var inst_25842 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25841__$1);var state_25855__$1 = (function (){var statearr_25864 = state_25855;(statearr_25864[(8)] = inst_25841__$1);
return statearr_25864;
})();if(cljs.core.truth_(inst_25842))
{var statearr_25865_25893 = state_25855__$1;(statearr_25865_25893[(1)] = (13));
} else
{var statearr_25866_25894 = state_25855__$1;(statearr_25866_25894[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25856 === (2)))
{var inst_25818 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_25819 = (0);var state_25855__$1 = (function (){var statearr_25867 = state_25855;(statearr_25867[(7)] = inst_25819);
(statearr_25867[(9)] = inst_25818);
return statearr_25867;
})();var statearr_25868_25895 = state_25855__$1;(statearr_25868_25895[(2)] = null);
(statearr_25868_25895[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25856 === (11)))
{var inst_25819 = (state_25855[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25855,(10),Object,null,(9));var inst_25828 = chs__$1.call(null,inst_25819);var inst_25829 = done.call(null,inst_25819);var inst_25830 = cljs.core.async.take_BANG_.call(null,inst_25828,inst_25829);var state_25855__$1 = state_25855;var statearr_25869_25896 = state_25855__$1;(statearr_25869_25896[(2)] = inst_25830);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25855__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25856 === (9)))
{var inst_25819 = (state_25855[(7)]);var inst_25832 = (state_25855[(2)]);var inst_25833 = (inst_25819 + (1));var inst_25819__$1 = inst_25833;var state_25855__$1 = (function (){var statearr_25870 = state_25855;(statearr_25870[(10)] = inst_25832);
(statearr_25870[(7)] = inst_25819__$1);
return statearr_25870;
})();var statearr_25871_25897 = state_25855__$1;(statearr_25871_25897[(2)] = null);
(statearr_25871_25897[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25856 === (5)))
{var inst_25839 = (state_25855[(2)]);var state_25855__$1 = (function (){var statearr_25872 = state_25855;(statearr_25872[(11)] = inst_25839);
return statearr_25872;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25855__$1,(12),dchan);
} else
{if((state_val_25856 === (14)))
{var inst_25841 = (state_25855[(8)]);var inst_25846 = cljs.core.apply.call(null,f,inst_25841);var state_25855__$1 = state_25855;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25855__$1,(16),out,inst_25846);
} else
{if((state_val_25856 === (16)))
{var inst_25848 = (state_25855[(2)]);var state_25855__$1 = (function (){var statearr_25873 = state_25855;(statearr_25873[(12)] = inst_25848);
return statearr_25873;
})();var statearr_25874_25898 = state_25855__$1;(statearr_25874_25898[(2)] = null);
(statearr_25874_25898[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25856 === (10)))
{var inst_25823 = (state_25855[(2)]);var inst_25824 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_25855__$1 = (function (){var statearr_25875 = state_25855;(statearr_25875[(13)] = inst_25823);
return statearr_25875;
})();var statearr_25876_25899 = state_25855__$1;(statearr_25876_25899[(2)] = inst_25824);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25855__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25856 === (8)))
{var inst_25837 = (state_25855[(2)]);var state_25855__$1 = state_25855;var statearr_25877_25900 = state_25855__$1;(statearr_25877_25900[(2)] = inst_25837);
(statearr_25877_25900[(1)] = (5));
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
});})(c__21043__auto___25885,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__20987__auto__,c__21043__auto___25885,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__20988__auto__ = null;
var state_machine__20988__auto____0 = (function (){var statearr_25881 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25881[(0)] = state_machine__20988__auto__);
(statearr_25881[(1)] = (1));
return statearr_25881;
});
var state_machine__20988__auto____1 = (function (state_25855){while(true){
var ret_value__20989__auto__ = (function (){try{while(true){
var result__20990__auto__ = switch__20987__auto__.call(null,state_25855);if(cljs.core.keyword_identical_QMARK_.call(null,result__20990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__20990__auto__;
}
break;
}
}catch (e25882){if((e25882 instanceof Object))
{var ex__20991__auto__ = e25882;var statearr_25883_25901 = state_25855;(statearr_25883_25901[(5)] = ex__20991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25855);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25882;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25902 = state_25855;
state_25855 = G__25902;
continue;
}
} else
{return ret_value__20989__auto__;
}
break;
}
});
state_machine__20988__auto__ = function(state_25855){
switch(arguments.length){
case 0:
return state_machine__20988__auto____0.call(this);
case 1:
return state_machine__20988__auto____1.call(this,state_25855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20988__auto____0;
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20988__auto____1;
return state_machine__20988__auto__;
})()
;})(switch__20987__auto__,c__21043__auto___25885,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__21045__auto__ = (function (){var statearr_25884 = f__21044__auto__.call(null);(statearr_25884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21043__auto___25885);
return statearr_25884;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21045__auto__);
});})(c__21043__auto___25885,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__21043__auto___26010 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__21043__auto___26010,out){
return (function (){var f__21044__auto__ = (function (){var switch__20987__auto__ = ((function (c__21043__auto___26010,out){
return (function (state_25986){var state_val_25987 = (state_25986[(1)]);if((state_val_25987 === (7)))
{var inst_25966 = (state_25986[(7)]);var inst_25965 = (state_25986[(8)]);var inst_25965__$1 = (state_25986[(2)]);var inst_25966__$1 = cljs.core.nth.call(null,inst_25965__$1,(0),null);var inst_25967 = cljs.core.nth.call(null,inst_25965__$1,(1),null);var inst_25968 = (inst_25966__$1 == null);var state_25986__$1 = (function (){var statearr_25988 = state_25986;(statearr_25988[(7)] = inst_25966__$1);
(statearr_25988[(9)] = inst_25967);
(statearr_25988[(8)] = inst_25965__$1);
return statearr_25988;
})();if(cljs.core.truth_(inst_25968))
{var statearr_25989_26011 = state_25986__$1;(statearr_25989_26011[(1)] = (8));
} else
{var statearr_25990_26012 = state_25986__$1;(statearr_25990_26012[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25987 === (1)))
{var inst_25957 = cljs.core.vec.call(null,chs);var inst_25958 = inst_25957;var state_25986__$1 = (function (){var statearr_25991 = state_25986;(statearr_25991[(10)] = inst_25958);
return statearr_25991;
})();var statearr_25992_26013 = state_25986__$1;(statearr_25992_26013[(2)] = null);
(statearr_25992_26013[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25987 === (4)))
{var inst_25958 = (state_25986[(10)]);var state_25986__$1 = state_25986;return cljs.core.async.ioc_alts_BANG_.call(null,state_25986__$1,(7),inst_25958);
} else
{if((state_val_25987 === (6)))
{var inst_25982 = (state_25986[(2)]);var state_25986__$1 = state_25986;var statearr_25993_26014 = state_25986__$1;(statearr_25993_26014[(2)] = inst_25982);
(statearr_25993_26014[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25987 === (3)))
{var inst_25984 = (state_25986[(2)]);var state_25986__$1 = state_25986;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25986__$1,inst_25984);
} else
{if((state_val_25987 === (2)))
{var inst_25958 = (state_25986[(10)]);var inst_25960 = cljs.core.count.call(null,inst_25958);var inst_25961 = (inst_25960 > (0));var state_25986__$1 = state_25986;if(cljs.core.truth_(inst_25961))
{var statearr_25995_26015 = state_25986__$1;(statearr_25995_26015[(1)] = (4));
} else
{var statearr_25996_26016 = state_25986__$1;(statearr_25996_26016[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25987 === (11)))
{var inst_25958 = (state_25986[(10)]);var inst_25975 = (state_25986[(2)]);var tmp25994 = inst_25958;var inst_25958__$1 = tmp25994;var state_25986__$1 = (function (){var statearr_25997 = state_25986;(statearr_25997[(10)] = inst_25958__$1);
(statearr_25997[(11)] = inst_25975);
return statearr_25997;
})();var statearr_25998_26017 = state_25986__$1;(statearr_25998_26017[(2)] = null);
(statearr_25998_26017[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25987 === (9)))
{var inst_25966 = (state_25986[(7)]);var state_25986__$1 = state_25986;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25986__$1,(11),out,inst_25966);
} else
{if((state_val_25987 === (5)))
{var inst_25980 = cljs.core.async.close_BANG_.call(null,out);var state_25986__$1 = state_25986;var statearr_25999_26018 = state_25986__$1;(statearr_25999_26018[(2)] = inst_25980);
(statearr_25999_26018[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25987 === (10)))
{var inst_25978 = (state_25986[(2)]);var state_25986__$1 = state_25986;var statearr_26000_26019 = state_25986__$1;(statearr_26000_26019[(2)] = inst_25978);
(statearr_26000_26019[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25987 === (8)))
{var inst_25958 = (state_25986[(10)]);var inst_25966 = (state_25986[(7)]);var inst_25967 = (state_25986[(9)]);var inst_25965 = (state_25986[(8)]);var inst_25970 = (function (){var c = inst_25967;var v = inst_25966;var vec__25963 = inst_25965;var cs = inst_25958;return ((function (c,v,vec__25963,cs,inst_25958,inst_25966,inst_25967,inst_25965,state_val_25987,c__21043__auto___26010,out){
return (function (p1__25903_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__25903_SHARP_);
});
;})(c,v,vec__25963,cs,inst_25958,inst_25966,inst_25967,inst_25965,state_val_25987,c__21043__auto___26010,out))
})();var inst_25971 = cljs.core.filterv.call(null,inst_25970,inst_25958);var inst_25958__$1 = inst_25971;var state_25986__$1 = (function (){var statearr_26001 = state_25986;(statearr_26001[(10)] = inst_25958__$1);
return statearr_26001;
})();var statearr_26002_26020 = state_25986__$1;(statearr_26002_26020[(2)] = null);
(statearr_26002_26020[(1)] = (2));
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
});})(c__21043__auto___26010,out))
;return ((function (switch__20987__auto__,c__21043__auto___26010,out){
return (function() {
var state_machine__20988__auto__ = null;
var state_machine__20988__auto____0 = (function (){var statearr_26006 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26006[(0)] = state_machine__20988__auto__);
(statearr_26006[(1)] = (1));
return statearr_26006;
});
var state_machine__20988__auto____1 = (function (state_25986){while(true){
var ret_value__20989__auto__ = (function (){try{while(true){
var result__20990__auto__ = switch__20987__auto__.call(null,state_25986);if(cljs.core.keyword_identical_QMARK_.call(null,result__20990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__20990__auto__;
}
break;
}
}catch (e26007){if((e26007 instanceof Object))
{var ex__20991__auto__ = e26007;var statearr_26008_26021 = state_25986;(statearr_26008_26021[(5)] = ex__20991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25986);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26007;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26022 = state_25986;
state_25986 = G__26022;
continue;
}
} else
{return ret_value__20989__auto__;
}
break;
}
});
state_machine__20988__auto__ = function(state_25986){
switch(arguments.length){
case 0:
return state_machine__20988__auto____0.call(this);
case 1:
return state_machine__20988__auto____1.call(this,state_25986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20988__auto____0;
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20988__auto____1;
return state_machine__20988__auto__;
})()
;})(switch__20987__auto__,c__21043__auto___26010,out))
})();var state__21045__auto__ = (function (){var statearr_26009 = f__21044__auto__.call(null);(statearr_26009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21043__auto___26010);
return statearr_26009;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21045__auto__);
});})(c__21043__auto___26010,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__21043__auto___26115 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__21043__auto___26115,out){
return (function (){var f__21044__auto__ = (function (){var switch__20987__auto__ = ((function (c__21043__auto___26115,out){
return (function (state_26092){var state_val_26093 = (state_26092[(1)]);if((state_val_26093 === (7)))
{var inst_26074 = (state_26092[(7)]);var inst_26074__$1 = (state_26092[(2)]);var inst_26075 = (inst_26074__$1 == null);var inst_26076 = cljs.core.not.call(null,inst_26075);var state_26092__$1 = (function (){var statearr_26094 = state_26092;(statearr_26094[(7)] = inst_26074__$1);
return statearr_26094;
})();if(inst_26076)
{var statearr_26095_26116 = state_26092__$1;(statearr_26095_26116[(1)] = (8));
} else
{var statearr_26096_26117 = state_26092__$1;(statearr_26096_26117[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26093 === (1)))
{var inst_26069 = (0);var state_26092__$1 = (function (){var statearr_26097 = state_26092;(statearr_26097[(8)] = inst_26069);
return statearr_26097;
})();var statearr_26098_26118 = state_26092__$1;(statearr_26098_26118[(2)] = null);
(statearr_26098_26118[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26093 === (4)))
{var state_26092__$1 = state_26092;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26092__$1,(7),ch);
} else
{if((state_val_26093 === (6)))
{var inst_26087 = (state_26092[(2)]);var state_26092__$1 = state_26092;var statearr_26099_26119 = state_26092__$1;(statearr_26099_26119[(2)] = inst_26087);
(statearr_26099_26119[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26093 === (3)))
{var inst_26089 = (state_26092[(2)]);var inst_26090 = cljs.core.async.close_BANG_.call(null,out);var state_26092__$1 = (function (){var statearr_26100 = state_26092;(statearr_26100[(9)] = inst_26089);
return statearr_26100;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26092__$1,inst_26090);
} else
{if((state_val_26093 === (2)))
{var inst_26069 = (state_26092[(8)]);var inst_26071 = (inst_26069 < n);var state_26092__$1 = state_26092;if(cljs.core.truth_(inst_26071))
{var statearr_26101_26120 = state_26092__$1;(statearr_26101_26120[(1)] = (4));
} else
{var statearr_26102_26121 = state_26092__$1;(statearr_26102_26121[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26093 === (11)))
{var inst_26069 = (state_26092[(8)]);var inst_26079 = (state_26092[(2)]);var inst_26080 = (inst_26069 + (1));var inst_26069__$1 = inst_26080;var state_26092__$1 = (function (){var statearr_26103 = state_26092;(statearr_26103[(10)] = inst_26079);
(statearr_26103[(8)] = inst_26069__$1);
return statearr_26103;
})();var statearr_26104_26122 = state_26092__$1;(statearr_26104_26122[(2)] = null);
(statearr_26104_26122[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26093 === (9)))
{var state_26092__$1 = state_26092;var statearr_26105_26123 = state_26092__$1;(statearr_26105_26123[(2)] = null);
(statearr_26105_26123[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26093 === (5)))
{var state_26092__$1 = state_26092;var statearr_26106_26124 = state_26092__$1;(statearr_26106_26124[(2)] = null);
(statearr_26106_26124[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26093 === (10)))
{var inst_26084 = (state_26092[(2)]);var state_26092__$1 = state_26092;var statearr_26107_26125 = state_26092__$1;(statearr_26107_26125[(2)] = inst_26084);
(statearr_26107_26125[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26093 === (8)))
{var inst_26074 = (state_26092[(7)]);var state_26092__$1 = state_26092;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26092__$1,(11),out,inst_26074);
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
});})(c__21043__auto___26115,out))
;return ((function (switch__20987__auto__,c__21043__auto___26115,out){
return (function() {
var state_machine__20988__auto__ = null;
var state_machine__20988__auto____0 = (function (){var statearr_26111 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26111[(0)] = state_machine__20988__auto__);
(statearr_26111[(1)] = (1));
return statearr_26111;
});
var state_machine__20988__auto____1 = (function (state_26092){while(true){
var ret_value__20989__auto__ = (function (){try{while(true){
var result__20990__auto__ = switch__20987__auto__.call(null,state_26092);if(cljs.core.keyword_identical_QMARK_.call(null,result__20990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__20990__auto__;
}
break;
}
}catch (e26112){if((e26112 instanceof Object))
{var ex__20991__auto__ = e26112;var statearr_26113_26126 = state_26092;(statearr_26113_26126[(5)] = ex__20991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26092);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26112;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26127 = state_26092;
state_26092 = G__26127;
continue;
}
} else
{return ret_value__20989__auto__;
}
break;
}
});
state_machine__20988__auto__ = function(state_26092){
switch(arguments.length){
case 0:
return state_machine__20988__auto____0.call(this);
case 1:
return state_machine__20988__auto____1.call(this,state_26092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20988__auto____0;
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20988__auto____1;
return state_machine__20988__auto__;
})()
;})(switch__20987__auto__,c__21043__auto___26115,out))
})();var state__21045__auto__ = (function (){var statearr_26114 = f__21044__auto__.call(null);(statearr_26114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21043__auto___26115);
return statearr_26114;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21045__auto__);
});})(c__21043__auto___26115,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t26135 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26135 = (function (ch,f,map_LT_,meta26136){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26136 = meta26136;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26135.cljs$lang$type = true;
cljs.core.async.t26135.cljs$lang$ctorStr = "cljs.core.async/t26135";
cljs.core.async.t26135.cljs$lang$ctorPrWriter = (function (this__15777__auto__,writer__15778__auto__,opt__15779__auto__){return cljs.core._write.call(null,writer__15778__auto__,"cljs.core.async/t26135");
});
cljs.core.async.t26135.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26135.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t26135.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26135.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t26138 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26138 = (function (fn1,_,meta26136,ch,f,map_LT_,meta26139){
this.fn1 = fn1;
this._ = _;
this.meta26136 = meta26136;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26139 = meta26139;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26138.cljs$lang$type = true;
cljs.core.async.t26138.cljs$lang$ctorStr = "cljs.core.async/t26138";
cljs.core.async.t26138.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__15777__auto__,writer__15778__auto__,opt__15779__auto__){return cljs.core._write.call(null,writer__15778__auto__,"cljs.core.async/t26138");
});})(___$1))
;
cljs.core.async.t26138.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26138.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t26138.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__26128_SHARP_){return f1.call(null,(((p1__26128_SHARP_ == null))?null:self__.f.call(null,p1__26128_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t26138.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26140){var self__ = this;
var _26140__$1 = this;return self__.meta26139;
});})(___$1))
;
cljs.core.async.t26138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26140,meta26139__$1){var self__ = this;
var _26140__$1 = this;return (new cljs.core.async.t26138(self__.fn1,self__._,self__.meta26136,self__.ch,self__.f,self__.map_LT_,meta26139__$1));
});})(___$1))
;
cljs.core.async.__GT_t26138 = ((function (___$1){
return (function __GT_t26138(fn1__$1,___$2,meta26136__$1,ch__$2,f__$2,map_LT___$2,meta26139){return (new cljs.core.async.t26138(fn1__$1,___$2,meta26136__$1,ch__$2,f__$2,map_LT___$2,meta26139));
});})(___$1))
;
}
return (new cljs.core.async.t26138(fn1,___$1,self__.meta26136,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__15188__auto__ = ret;if(cljs.core.truth_(and__15188__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__15188__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t26135.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26135.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26135.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t26135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26137){var self__ = this;
var _26137__$1 = this;return self__.meta26136;
});
cljs.core.async.t26135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26137,meta26136__$1){var self__ = this;
var _26137__$1 = this;return (new cljs.core.async.t26135(self__.ch,self__.f,self__.map_LT_,meta26136__$1));
});
cljs.core.async.__GT_t26135 = (function __GT_t26135(ch__$1,f__$1,map_LT___$1,meta26136){return (new cljs.core.async.t26135(ch__$1,f__$1,map_LT___$1,meta26136));
});
}
return (new cljs.core.async.t26135(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t26144 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26144 = (function (ch,f,map_GT_,meta26145){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26145 = meta26145;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26144.cljs$lang$type = true;
cljs.core.async.t26144.cljs$lang$ctorStr = "cljs.core.async/t26144";
cljs.core.async.t26144.cljs$lang$ctorPrWriter = (function (this__15777__auto__,writer__15778__auto__,opt__15779__auto__){return cljs.core._write.call(null,writer__15778__auto__,"cljs.core.async/t26144");
});
cljs.core.async.t26144.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26144.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t26144.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26144.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26144.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26144.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26146){var self__ = this;
var _26146__$1 = this;return self__.meta26145;
});
cljs.core.async.t26144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26146,meta26145__$1){var self__ = this;
var _26146__$1 = this;return (new cljs.core.async.t26144(self__.ch,self__.f,self__.map_GT_,meta26145__$1));
});
cljs.core.async.__GT_t26144 = (function __GT_t26144(ch__$1,f__$1,map_GT___$1,meta26145){return (new cljs.core.async.t26144(ch__$1,f__$1,map_GT___$1,meta26145));
});
}
return (new cljs.core.async.t26144(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t26150 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26150 = (function (ch,p,filter_GT_,meta26151){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26151 = meta26151;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26150.cljs$lang$type = true;
cljs.core.async.t26150.cljs$lang$ctorStr = "cljs.core.async/t26150";
cljs.core.async.t26150.cljs$lang$ctorPrWriter = (function (this__15777__auto__,writer__15778__auto__,opt__15779__auto__){return cljs.core._write.call(null,writer__15778__auto__,"cljs.core.async/t26150");
});
cljs.core.async.t26150.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26150.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t26150.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26150.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26150.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26150.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26150.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t26150.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26152){var self__ = this;
var _26152__$1 = this;return self__.meta26151;
});
cljs.core.async.t26150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26152,meta26151__$1){var self__ = this;
var _26152__$1 = this;return (new cljs.core.async.t26150(self__.ch,self__.p,self__.filter_GT_,meta26151__$1));
});
cljs.core.async.__GT_t26150 = (function __GT_t26150(ch__$1,p__$1,filter_GT___$1,meta26151){return (new cljs.core.async.t26150(ch__$1,p__$1,filter_GT___$1,meta26151));
});
}
return (new cljs.core.async.t26150(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__21043__auto___26235 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__21043__auto___26235,out){
return (function (){var f__21044__auto__ = (function (){var switch__20987__auto__ = ((function (c__21043__auto___26235,out){
return (function (state_26214){var state_val_26215 = (state_26214[(1)]);if((state_val_26215 === (7)))
{var inst_26210 = (state_26214[(2)]);var state_26214__$1 = state_26214;var statearr_26216_26236 = state_26214__$1;(statearr_26216_26236[(2)] = inst_26210);
(statearr_26216_26236[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26215 === (1)))
{var state_26214__$1 = state_26214;var statearr_26217_26237 = state_26214__$1;(statearr_26217_26237[(2)] = null);
(statearr_26217_26237[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26215 === (4)))
{var inst_26196 = (state_26214[(7)]);var inst_26196__$1 = (state_26214[(2)]);var inst_26197 = (inst_26196__$1 == null);var state_26214__$1 = (function (){var statearr_26218 = state_26214;(statearr_26218[(7)] = inst_26196__$1);
return statearr_26218;
})();if(cljs.core.truth_(inst_26197))
{var statearr_26219_26238 = state_26214__$1;(statearr_26219_26238[(1)] = (5));
} else
{var statearr_26220_26239 = state_26214__$1;(statearr_26220_26239[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26215 === (6)))
{var inst_26196 = (state_26214[(7)]);var inst_26201 = p.call(null,inst_26196);var state_26214__$1 = state_26214;if(cljs.core.truth_(inst_26201))
{var statearr_26221_26240 = state_26214__$1;(statearr_26221_26240[(1)] = (8));
} else
{var statearr_26222_26241 = state_26214__$1;(statearr_26222_26241[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26215 === (3)))
{var inst_26212 = (state_26214[(2)]);var state_26214__$1 = state_26214;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26214__$1,inst_26212);
} else
{if((state_val_26215 === (2)))
{var state_26214__$1 = state_26214;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26214__$1,(4),ch);
} else
{if((state_val_26215 === (11)))
{var inst_26204 = (state_26214[(2)]);var state_26214__$1 = state_26214;var statearr_26223_26242 = state_26214__$1;(statearr_26223_26242[(2)] = inst_26204);
(statearr_26223_26242[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26215 === (9)))
{var state_26214__$1 = state_26214;var statearr_26224_26243 = state_26214__$1;(statearr_26224_26243[(2)] = null);
(statearr_26224_26243[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26215 === (5)))
{var inst_26199 = cljs.core.async.close_BANG_.call(null,out);var state_26214__$1 = state_26214;var statearr_26225_26244 = state_26214__$1;(statearr_26225_26244[(2)] = inst_26199);
(statearr_26225_26244[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26215 === (10)))
{var inst_26207 = (state_26214[(2)]);var state_26214__$1 = (function (){var statearr_26226 = state_26214;(statearr_26226[(8)] = inst_26207);
return statearr_26226;
})();var statearr_26227_26245 = state_26214__$1;(statearr_26227_26245[(2)] = null);
(statearr_26227_26245[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26215 === (8)))
{var inst_26196 = (state_26214[(7)]);var state_26214__$1 = state_26214;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26214__$1,(11),out,inst_26196);
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
});})(c__21043__auto___26235,out))
;return ((function (switch__20987__auto__,c__21043__auto___26235,out){
return (function() {
var state_machine__20988__auto__ = null;
var state_machine__20988__auto____0 = (function (){var statearr_26231 = [null,null,null,null,null,null,null,null,null];(statearr_26231[(0)] = state_machine__20988__auto__);
(statearr_26231[(1)] = (1));
return statearr_26231;
});
var state_machine__20988__auto____1 = (function (state_26214){while(true){
var ret_value__20989__auto__ = (function (){try{while(true){
var result__20990__auto__ = switch__20987__auto__.call(null,state_26214);if(cljs.core.keyword_identical_QMARK_.call(null,result__20990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__20990__auto__;
}
break;
}
}catch (e26232){if((e26232 instanceof Object))
{var ex__20991__auto__ = e26232;var statearr_26233_26246 = state_26214;(statearr_26233_26246[(5)] = ex__20991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26214);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26232;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26247 = state_26214;
state_26214 = G__26247;
continue;
}
} else
{return ret_value__20989__auto__;
}
break;
}
});
state_machine__20988__auto__ = function(state_26214){
switch(arguments.length){
case 0:
return state_machine__20988__auto____0.call(this);
case 1:
return state_machine__20988__auto____1.call(this,state_26214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20988__auto____0;
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20988__auto____1;
return state_machine__20988__auto__;
})()
;})(switch__20987__auto__,c__21043__auto___26235,out))
})();var state__21045__auto__ = (function (){var statearr_26234 = f__21044__auto__.call(null);(statearr_26234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21043__auto___26235);
return statearr_26234;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21045__auto__);
});})(c__21043__auto___26235,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__21043__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__21043__auto__){
return (function (){var f__21044__auto__ = (function (){var switch__20987__auto__ = ((function (c__21043__auto__){
return (function (state_26413){var state_val_26414 = (state_26413[(1)]);if((state_val_26414 === (7)))
{var inst_26409 = (state_26413[(2)]);var state_26413__$1 = state_26413;var statearr_26415_26456 = state_26413__$1;(statearr_26415_26456[(2)] = inst_26409);
(statearr_26415_26456[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26414 === (20)))
{var inst_26379 = (state_26413[(7)]);var inst_26390 = (state_26413[(2)]);var inst_26391 = cljs.core.next.call(null,inst_26379);var inst_26365 = inst_26391;var inst_26366 = null;var inst_26367 = (0);var inst_26368 = (0);var state_26413__$1 = (function (){var statearr_26416 = state_26413;(statearr_26416[(8)] = inst_26390);
(statearr_26416[(9)] = inst_26367);
(statearr_26416[(10)] = inst_26366);
(statearr_26416[(11)] = inst_26368);
(statearr_26416[(12)] = inst_26365);
return statearr_26416;
})();var statearr_26417_26457 = state_26413__$1;(statearr_26417_26457[(2)] = null);
(statearr_26417_26457[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26414 === (1)))
{var state_26413__$1 = state_26413;var statearr_26418_26458 = state_26413__$1;(statearr_26418_26458[(2)] = null);
(statearr_26418_26458[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26414 === (4)))
{var inst_26354 = (state_26413[(13)]);var inst_26354__$1 = (state_26413[(2)]);var inst_26355 = (inst_26354__$1 == null);var state_26413__$1 = (function (){var statearr_26419 = state_26413;(statearr_26419[(13)] = inst_26354__$1);
return statearr_26419;
})();if(cljs.core.truth_(inst_26355))
{var statearr_26420_26459 = state_26413__$1;(statearr_26420_26459[(1)] = (5));
} else
{var statearr_26421_26460 = state_26413__$1;(statearr_26421_26460[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26414 === (15)))
{var state_26413__$1 = state_26413;var statearr_26425_26461 = state_26413__$1;(statearr_26425_26461[(2)] = null);
(statearr_26425_26461[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26414 === (21)))
{var state_26413__$1 = state_26413;var statearr_26426_26462 = state_26413__$1;(statearr_26426_26462[(2)] = null);
(statearr_26426_26462[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26414 === (13)))
{var inst_26367 = (state_26413[(9)]);var inst_26366 = (state_26413[(10)]);var inst_26368 = (state_26413[(11)]);var inst_26365 = (state_26413[(12)]);var inst_26375 = (state_26413[(2)]);var inst_26376 = (inst_26368 + (1));var tmp26422 = inst_26367;var tmp26423 = inst_26366;var tmp26424 = inst_26365;var inst_26365__$1 = tmp26424;var inst_26366__$1 = tmp26423;var inst_26367__$1 = tmp26422;var inst_26368__$1 = inst_26376;var state_26413__$1 = (function (){var statearr_26427 = state_26413;(statearr_26427[(9)] = inst_26367__$1);
(statearr_26427[(10)] = inst_26366__$1);
(statearr_26427[(11)] = inst_26368__$1);
(statearr_26427[(14)] = inst_26375);
(statearr_26427[(12)] = inst_26365__$1);
return statearr_26427;
})();var statearr_26428_26463 = state_26413__$1;(statearr_26428_26463[(2)] = null);
(statearr_26428_26463[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26414 === (22)))
{var state_26413__$1 = state_26413;var statearr_26429_26464 = state_26413__$1;(statearr_26429_26464[(2)] = null);
(statearr_26429_26464[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26414 === (6)))
{var inst_26354 = (state_26413[(13)]);var inst_26363 = f.call(null,inst_26354);var inst_26364 = cljs.core.seq.call(null,inst_26363);var inst_26365 = inst_26364;var inst_26366 = null;var inst_26367 = (0);var inst_26368 = (0);var state_26413__$1 = (function (){var statearr_26430 = state_26413;(statearr_26430[(9)] = inst_26367);
(statearr_26430[(10)] = inst_26366);
(statearr_26430[(11)] = inst_26368);
(statearr_26430[(12)] = inst_26365);
return statearr_26430;
})();var statearr_26431_26465 = state_26413__$1;(statearr_26431_26465[(2)] = null);
(statearr_26431_26465[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26414 === (17)))
{var inst_26379 = (state_26413[(7)]);var inst_26383 = cljs.core.chunk_first.call(null,inst_26379);var inst_26384 = cljs.core.chunk_rest.call(null,inst_26379);var inst_26385 = cljs.core.count.call(null,inst_26383);var inst_26365 = inst_26384;var inst_26366 = inst_26383;var inst_26367 = inst_26385;var inst_26368 = (0);var state_26413__$1 = (function (){var statearr_26432 = state_26413;(statearr_26432[(9)] = inst_26367);
(statearr_26432[(10)] = inst_26366);
(statearr_26432[(11)] = inst_26368);
(statearr_26432[(12)] = inst_26365);
return statearr_26432;
})();var statearr_26433_26466 = state_26413__$1;(statearr_26433_26466[(2)] = null);
(statearr_26433_26466[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26414 === (3)))
{var inst_26411 = (state_26413[(2)]);var state_26413__$1 = state_26413;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26413__$1,inst_26411);
} else
{if((state_val_26414 === (12)))
{var inst_26399 = (state_26413[(2)]);var state_26413__$1 = state_26413;var statearr_26434_26467 = state_26413__$1;(statearr_26434_26467[(2)] = inst_26399);
(statearr_26434_26467[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26414 === (2)))
{var state_26413__$1 = state_26413;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26413__$1,(4),in$);
} else
{if((state_val_26414 === (23)))
{var inst_26407 = (state_26413[(2)]);var state_26413__$1 = state_26413;var statearr_26435_26468 = state_26413__$1;(statearr_26435_26468[(2)] = inst_26407);
(statearr_26435_26468[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26414 === (19)))
{var inst_26394 = (state_26413[(2)]);var state_26413__$1 = state_26413;var statearr_26436_26469 = state_26413__$1;(statearr_26436_26469[(2)] = inst_26394);
(statearr_26436_26469[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26414 === (11)))
{var inst_26379 = (state_26413[(7)]);var inst_26365 = (state_26413[(12)]);var inst_26379__$1 = cljs.core.seq.call(null,inst_26365);var state_26413__$1 = (function (){var statearr_26437 = state_26413;(statearr_26437[(7)] = inst_26379__$1);
return statearr_26437;
})();if(inst_26379__$1)
{var statearr_26438_26470 = state_26413__$1;(statearr_26438_26470[(1)] = (14));
} else
{var statearr_26439_26471 = state_26413__$1;(statearr_26439_26471[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26414 === (9)))
{var inst_26401 = (state_26413[(2)]);var inst_26402 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_26413__$1 = (function (){var statearr_26440 = state_26413;(statearr_26440[(15)] = inst_26401);
return statearr_26440;
})();if(cljs.core.truth_(inst_26402))
{var statearr_26441_26472 = state_26413__$1;(statearr_26441_26472[(1)] = (21));
} else
{var statearr_26442_26473 = state_26413__$1;(statearr_26442_26473[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26414 === (5)))
{var inst_26357 = cljs.core.async.close_BANG_.call(null,out);var state_26413__$1 = state_26413;var statearr_26443_26474 = state_26413__$1;(statearr_26443_26474[(2)] = inst_26357);
(statearr_26443_26474[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26414 === (14)))
{var inst_26379 = (state_26413[(7)]);var inst_26381 = cljs.core.chunked_seq_QMARK_.call(null,inst_26379);var state_26413__$1 = state_26413;if(inst_26381)
{var statearr_26444_26475 = state_26413__$1;(statearr_26444_26475[(1)] = (17));
} else
{var statearr_26445_26476 = state_26413__$1;(statearr_26445_26476[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26414 === (16)))
{var inst_26397 = (state_26413[(2)]);var state_26413__$1 = state_26413;var statearr_26446_26477 = state_26413__$1;(statearr_26446_26477[(2)] = inst_26397);
(statearr_26446_26477[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26414 === (10)))
{var inst_26366 = (state_26413[(10)]);var inst_26368 = (state_26413[(11)]);var inst_26373 = cljs.core._nth.call(null,inst_26366,inst_26368);var state_26413__$1 = state_26413;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26413__$1,(13),out,inst_26373);
} else
{if((state_val_26414 === (18)))
{var inst_26379 = (state_26413[(7)]);var inst_26388 = cljs.core.first.call(null,inst_26379);var state_26413__$1 = state_26413;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26413__$1,(20),out,inst_26388);
} else
{if((state_val_26414 === (8)))
{var inst_26367 = (state_26413[(9)]);var inst_26368 = (state_26413[(11)]);var inst_26370 = (inst_26368 < inst_26367);var inst_26371 = inst_26370;var state_26413__$1 = state_26413;if(cljs.core.truth_(inst_26371))
{var statearr_26447_26478 = state_26413__$1;(statearr_26447_26478[(1)] = (10));
} else
{var statearr_26448_26479 = state_26413__$1;(statearr_26448_26479[(1)] = (11));
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
});})(c__21043__auto__))
;return ((function (switch__20987__auto__,c__21043__auto__){
return (function() {
var state_machine__20988__auto__ = null;
var state_machine__20988__auto____0 = (function (){var statearr_26452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26452[(0)] = state_machine__20988__auto__);
(statearr_26452[(1)] = (1));
return statearr_26452;
});
var state_machine__20988__auto____1 = (function (state_26413){while(true){
var ret_value__20989__auto__ = (function (){try{while(true){
var result__20990__auto__ = switch__20987__auto__.call(null,state_26413);if(cljs.core.keyword_identical_QMARK_.call(null,result__20990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__20990__auto__;
}
break;
}
}catch (e26453){if((e26453 instanceof Object))
{var ex__20991__auto__ = e26453;var statearr_26454_26480 = state_26413;(statearr_26454_26480[(5)] = ex__20991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26413);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26453;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26481 = state_26413;
state_26413 = G__26481;
continue;
}
} else
{return ret_value__20989__auto__;
}
break;
}
});
state_machine__20988__auto__ = function(state_26413){
switch(arguments.length){
case 0:
return state_machine__20988__auto____0.call(this);
case 1:
return state_machine__20988__auto____1.call(this,state_26413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20988__auto____0;
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20988__auto____1;
return state_machine__20988__auto__;
})()
;})(switch__20987__auto__,c__21043__auto__))
})();var state__21045__auto__ = (function (){var statearr_26455 = f__21044__auto__.call(null);(statearr_26455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21043__auto__);
return statearr_26455;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21045__auto__);
});})(c__21043__auto__))
);
return c__21043__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__21043__auto___26578 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__21043__auto___26578,out){
return (function (){var f__21044__auto__ = (function (){var switch__20987__auto__ = ((function (c__21043__auto___26578,out){
return (function (state_26553){var state_val_26554 = (state_26553[(1)]);if((state_val_26554 === (7)))
{var inst_26548 = (state_26553[(2)]);var state_26553__$1 = state_26553;var statearr_26555_26579 = state_26553__$1;(statearr_26555_26579[(2)] = inst_26548);
(statearr_26555_26579[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26554 === (1)))
{var inst_26530 = null;var state_26553__$1 = (function (){var statearr_26556 = state_26553;(statearr_26556[(7)] = inst_26530);
return statearr_26556;
})();var statearr_26557_26580 = state_26553__$1;(statearr_26557_26580[(2)] = null);
(statearr_26557_26580[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26554 === (4)))
{var inst_26533 = (state_26553[(8)]);var inst_26533__$1 = (state_26553[(2)]);var inst_26534 = (inst_26533__$1 == null);var inst_26535 = cljs.core.not.call(null,inst_26534);var state_26553__$1 = (function (){var statearr_26558 = state_26553;(statearr_26558[(8)] = inst_26533__$1);
return statearr_26558;
})();if(inst_26535)
{var statearr_26559_26581 = state_26553__$1;(statearr_26559_26581[(1)] = (5));
} else
{var statearr_26560_26582 = state_26553__$1;(statearr_26560_26582[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26554 === (6)))
{var state_26553__$1 = state_26553;var statearr_26561_26583 = state_26553__$1;(statearr_26561_26583[(2)] = null);
(statearr_26561_26583[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26554 === (3)))
{var inst_26550 = (state_26553[(2)]);var inst_26551 = cljs.core.async.close_BANG_.call(null,out);var state_26553__$1 = (function (){var statearr_26562 = state_26553;(statearr_26562[(9)] = inst_26550);
return statearr_26562;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26553__$1,inst_26551);
} else
{if((state_val_26554 === (2)))
{var state_26553__$1 = state_26553;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26553__$1,(4),ch);
} else
{if((state_val_26554 === (11)))
{var inst_26533 = (state_26553[(8)]);var inst_26542 = (state_26553[(2)]);var inst_26530 = inst_26533;var state_26553__$1 = (function (){var statearr_26563 = state_26553;(statearr_26563[(10)] = inst_26542);
(statearr_26563[(7)] = inst_26530);
return statearr_26563;
})();var statearr_26564_26584 = state_26553__$1;(statearr_26564_26584[(2)] = null);
(statearr_26564_26584[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26554 === (9)))
{var inst_26533 = (state_26553[(8)]);var state_26553__$1 = state_26553;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26553__$1,(11),out,inst_26533);
} else
{if((state_val_26554 === (5)))
{var inst_26533 = (state_26553[(8)]);var inst_26530 = (state_26553[(7)]);var inst_26537 = cljs.core._EQ_.call(null,inst_26533,inst_26530);var state_26553__$1 = state_26553;if(inst_26537)
{var statearr_26566_26585 = state_26553__$1;(statearr_26566_26585[(1)] = (8));
} else
{var statearr_26567_26586 = state_26553__$1;(statearr_26567_26586[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26554 === (10)))
{var inst_26545 = (state_26553[(2)]);var state_26553__$1 = state_26553;var statearr_26568_26587 = state_26553__$1;(statearr_26568_26587[(2)] = inst_26545);
(statearr_26568_26587[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26554 === (8)))
{var inst_26530 = (state_26553[(7)]);var tmp26565 = inst_26530;var inst_26530__$1 = tmp26565;var state_26553__$1 = (function (){var statearr_26569 = state_26553;(statearr_26569[(7)] = inst_26530__$1);
return statearr_26569;
})();var statearr_26570_26588 = state_26553__$1;(statearr_26570_26588[(2)] = null);
(statearr_26570_26588[(1)] = (2));
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
});})(c__21043__auto___26578,out))
;return ((function (switch__20987__auto__,c__21043__auto___26578,out){
return (function() {
var state_machine__20988__auto__ = null;
var state_machine__20988__auto____0 = (function (){var statearr_26574 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26574[(0)] = state_machine__20988__auto__);
(statearr_26574[(1)] = (1));
return statearr_26574;
});
var state_machine__20988__auto____1 = (function (state_26553){while(true){
var ret_value__20989__auto__ = (function (){try{while(true){
var result__20990__auto__ = switch__20987__auto__.call(null,state_26553);if(cljs.core.keyword_identical_QMARK_.call(null,result__20990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__20990__auto__;
}
break;
}
}catch (e26575){if((e26575 instanceof Object))
{var ex__20991__auto__ = e26575;var statearr_26576_26589 = state_26553;(statearr_26576_26589[(5)] = ex__20991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26553);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26575;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26590 = state_26553;
state_26553 = G__26590;
continue;
}
} else
{return ret_value__20989__auto__;
}
break;
}
});
state_machine__20988__auto__ = function(state_26553){
switch(arguments.length){
case 0:
return state_machine__20988__auto____0.call(this);
case 1:
return state_machine__20988__auto____1.call(this,state_26553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20988__auto____0;
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20988__auto____1;
return state_machine__20988__auto__;
})()
;})(switch__20987__auto__,c__21043__auto___26578,out))
})();var state__21045__auto__ = (function (){var statearr_26577 = f__21044__auto__.call(null);(statearr_26577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21043__auto___26578);
return statearr_26577;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21045__auto__);
});})(c__21043__auto___26578,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__21043__auto___26725 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__21043__auto___26725,out){
return (function (){var f__21044__auto__ = (function (){var switch__20987__auto__ = ((function (c__21043__auto___26725,out){
return (function (state_26695){var state_val_26696 = (state_26695[(1)]);if((state_val_26696 === (7)))
{var inst_26691 = (state_26695[(2)]);var state_26695__$1 = state_26695;var statearr_26697_26726 = state_26695__$1;(statearr_26697_26726[(2)] = inst_26691);
(statearr_26697_26726[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26696 === (1)))
{var inst_26658 = (new Array(n));var inst_26659 = inst_26658;var inst_26660 = (0);var state_26695__$1 = (function (){var statearr_26698 = state_26695;(statearr_26698[(7)] = inst_26659);
(statearr_26698[(8)] = inst_26660);
return statearr_26698;
})();var statearr_26699_26727 = state_26695__$1;(statearr_26699_26727[(2)] = null);
(statearr_26699_26727[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26696 === (4)))
{var inst_26663 = (state_26695[(9)]);var inst_26663__$1 = (state_26695[(2)]);var inst_26664 = (inst_26663__$1 == null);var inst_26665 = cljs.core.not.call(null,inst_26664);var state_26695__$1 = (function (){var statearr_26700 = state_26695;(statearr_26700[(9)] = inst_26663__$1);
return statearr_26700;
})();if(inst_26665)
{var statearr_26701_26728 = state_26695__$1;(statearr_26701_26728[(1)] = (5));
} else
{var statearr_26702_26729 = state_26695__$1;(statearr_26702_26729[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26696 === (15)))
{var inst_26685 = (state_26695[(2)]);var state_26695__$1 = state_26695;var statearr_26703_26730 = state_26695__$1;(statearr_26703_26730[(2)] = inst_26685);
(statearr_26703_26730[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26696 === (13)))
{var state_26695__$1 = state_26695;var statearr_26704_26731 = state_26695__$1;(statearr_26704_26731[(2)] = null);
(statearr_26704_26731[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26696 === (6)))
{var inst_26660 = (state_26695[(8)]);var inst_26681 = (inst_26660 > (0));var state_26695__$1 = state_26695;if(cljs.core.truth_(inst_26681))
{var statearr_26705_26732 = state_26695__$1;(statearr_26705_26732[(1)] = (12));
} else
{var statearr_26706_26733 = state_26695__$1;(statearr_26706_26733[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26696 === (3)))
{var inst_26693 = (state_26695[(2)]);var state_26695__$1 = state_26695;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26695__$1,inst_26693);
} else
{if((state_val_26696 === (12)))
{var inst_26659 = (state_26695[(7)]);var inst_26683 = cljs.core.vec.call(null,inst_26659);var state_26695__$1 = state_26695;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26695__$1,(15),out,inst_26683);
} else
{if((state_val_26696 === (2)))
{var state_26695__$1 = state_26695;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26695__$1,(4),ch);
} else
{if((state_val_26696 === (11)))
{var inst_26675 = (state_26695[(2)]);var inst_26676 = (new Array(n));var inst_26659 = inst_26676;var inst_26660 = (0);var state_26695__$1 = (function (){var statearr_26707 = state_26695;(statearr_26707[(7)] = inst_26659);
(statearr_26707[(8)] = inst_26660);
(statearr_26707[(10)] = inst_26675);
return statearr_26707;
})();var statearr_26708_26734 = state_26695__$1;(statearr_26708_26734[(2)] = null);
(statearr_26708_26734[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26696 === (9)))
{var inst_26659 = (state_26695[(7)]);var inst_26673 = cljs.core.vec.call(null,inst_26659);var state_26695__$1 = state_26695;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26695__$1,(11),out,inst_26673);
} else
{if((state_val_26696 === (5)))
{var inst_26668 = (state_26695[(11)]);var inst_26659 = (state_26695[(7)]);var inst_26660 = (state_26695[(8)]);var inst_26663 = (state_26695[(9)]);var inst_26667 = (inst_26659[inst_26660] = inst_26663);var inst_26668__$1 = (inst_26660 + (1));var inst_26669 = (inst_26668__$1 < n);var state_26695__$1 = (function (){var statearr_26709 = state_26695;(statearr_26709[(11)] = inst_26668__$1);
(statearr_26709[(12)] = inst_26667);
return statearr_26709;
})();if(cljs.core.truth_(inst_26669))
{var statearr_26710_26735 = state_26695__$1;(statearr_26710_26735[(1)] = (8));
} else
{var statearr_26711_26736 = state_26695__$1;(statearr_26711_26736[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26696 === (14)))
{var inst_26688 = (state_26695[(2)]);var inst_26689 = cljs.core.async.close_BANG_.call(null,out);var state_26695__$1 = (function (){var statearr_26713 = state_26695;(statearr_26713[(13)] = inst_26688);
return statearr_26713;
})();var statearr_26714_26737 = state_26695__$1;(statearr_26714_26737[(2)] = inst_26689);
(statearr_26714_26737[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26696 === (10)))
{var inst_26679 = (state_26695[(2)]);var state_26695__$1 = state_26695;var statearr_26715_26738 = state_26695__$1;(statearr_26715_26738[(2)] = inst_26679);
(statearr_26715_26738[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26696 === (8)))
{var inst_26668 = (state_26695[(11)]);var inst_26659 = (state_26695[(7)]);var tmp26712 = inst_26659;var inst_26659__$1 = tmp26712;var inst_26660 = inst_26668;var state_26695__$1 = (function (){var statearr_26716 = state_26695;(statearr_26716[(7)] = inst_26659__$1);
(statearr_26716[(8)] = inst_26660);
return statearr_26716;
})();var statearr_26717_26739 = state_26695__$1;(statearr_26717_26739[(2)] = null);
(statearr_26717_26739[(1)] = (2));
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
});})(c__21043__auto___26725,out))
;return ((function (switch__20987__auto__,c__21043__auto___26725,out){
return (function() {
var state_machine__20988__auto__ = null;
var state_machine__20988__auto____0 = (function (){var statearr_26721 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26721[(0)] = state_machine__20988__auto__);
(statearr_26721[(1)] = (1));
return statearr_26721;
});
var state_machine__20988__auto____1 = (function (state_26695){while(true){
var ret_value__20989__auto__ = (function (){try{while(true){
var result__20990__auto__ = switch__20987__auto__.call(null,state_26695);if(cljs.core.keyword_identical_QMARK_.call(null,result__20990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__20990__auto__;
}
break;
}
}catch (e26722){if((e26722 instanceof Object))
{var ex__20991__auto__ = e26722;var statearr_26723_26740 = state_26695;(statearr_26723_26740[(5)] = ex__20991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26695);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26722;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26741 = state_26695;
state_26695 = G__26741;
continue;
}
} else
{return ret_value__20989__auto__;
}
break;
}
});
state_machine__20988__auto__ = function(state_26695){
switch(arguments.length){
case 0:
return state_machine__20988__auto____0.call(this);
case 1:
return state_machine__20988__auto____1.call(this,state_26695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20988__auto____0;
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20988__auto____1;
return state_machine__20988__auto__;
})()
;})(switch__20987__auto__,c__21043__auto___26725,out))
})();var state__21045__auto__ = (function (){var statearr_26724 = f__21044__auto__.call(null);(statearr_26724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21043__auto___26725);
return statearr_26724;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21045__auto__);
});})(c__21043__auto___26725,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__21043__auto___26884 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__21043__auto___26884,out){
return (function (){var f__21044__auto__ = (function (){var switch__20987__auto__ = ((function (c__21043__auto___26884,out){
return (function (state_26854){var state_val_26855 = (state_26854[(1)]);if((state_val_26855 === (7)))
{var inst_26850 = (state_26854[(2)]);var state_26854__$1 = state_26854;var statearr_26856_26885 = state_26854__$1;(statearr_26856_26885[(2)] = inst_26850);
(statearr_26856_26885[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26855 === (1)))
{var inst_26813 = [];var inst_26814 = inst_26813;var inst_26815 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_26854__$1 = (function (){var statearr_26857 = state_26854;(statearr_26857[(7)] = inst_26814);
(statearr_26857[(8)] = inst_26815);
return statearr_26857;
})();var statearr_26858_26886 = state_26854__$1;(statearr_26858_26886[(2)] = null);
(statearr_26858_26886[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26855 === (4)))
{var inst_26818 = (state_26854[(9)]);var inst_26818__$1 = (state_26854[(2)]);var inst_26819 = (inst_26818__$1 == null);var inst_26820 = cljs.core.not.call(null,inst_26819);var state_26854__$1 = (function (){var statearr_26859 = state_26854;(statearr_26859[(9)] = inst_26818__$1);
return statearr_26859;
})();if(inst_26820)
{var statearr_26860_26887 = state_26854__$1;(statearr_26860_26887[(1)] = (5));
} else
{var statearr_26861_26888 = state_26854__$1;(statearr_26861_26888[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26855 === (15)))
{var inst_26844 = (state_26854[(2)]);var state_26854__$1 = state_26854;var statearr_26862_26889 = state_26854__$1;(statearr_26862_26889[(2)] = inst_26844);
(statearr_26862_26889[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26855 === (13)))
{var state_26854__$1 = state_26854;var statearr_26863_26890 = state_26854__$1;(statearr_26863_26890[(2)] = null);
(statearr_26863_26890[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26855 === (6)))
{var inst_26814 = (state_26854[(7)]);var inst_26839 = inst_26814.length;var inst_26840 = (inst_26839 > (0));var state_26854__$1 = state_26854;if(cljs.core.truth_(inst_26840))
{var statearr_26864_26891 = state_26854__$1;(statearr_26864_26891[(1)] = (12));
} else
{var statearr_26865_26892 = state_26854__$1;(statearr_26865_26892[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26855 === (3)))
{var inst_26852 = (state_26854[(2)]);var state_26854__$1 = state_26854;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26854__$1,inst_26852);
} else
{if((state_val_26855 === (12)))
{var inst_26814 = (state_26854[(7)]);var inst_26842 = cljs.core.vec.call(null,inst_26814);var state_26854__$1 = state_26854;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26854__$1,(15),out,inst_26842);
} else
{if((state_val_26855 === (2)))
{var state_26854__$1 = state_26854;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26854__$1,(4),ch);
} else
{if((state_val_26855 === (11)))
{var inst_26818 = (state_26854[(9)]);var inst_26822 = (state_26854[(10)]);var inst_26832 = (state_26854[(2)]);var inst_26833 = [];var inst_26834 = inst_26833.push(inst_26818);var inst_26814 = inst_26833;var inst_26815 = inst_26822;var state_26854__$1 = (function (){var statearr_26866 = state_26854;(statearr_26866[(11)] = inst_26832);
(statearr_26866[(12)] = inst_26834);
(statearr_26866[(7)] = inst_26814);
(statearr_26866[(8)] = inst_26815);
return statearr_26866;
})();var statearr_26867_26893 = state_26854__$1;(statearr_26867_26893[(2)] = null);
(statearr_26867_26893[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26855 === (9)))
{var inst_26814 = (state_26854[(7)]);var inst_26830 = cljs.core.vec.call(null,inst_26814);var state_26854__$1 = state_26854;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26854__$1,(11),out,inst_26830);
} else
{if((state_val_26855 === (5)))
{var inst_26818 = (state_26854[(9)]);var inst_26815 = (state_26854[(8)]);var inst_26822 = (state_26854[(10)]);var inst_26822__$1 = f.call(null,inst_26818);var inst_26823 = cljs.core._EQ_.call(null,inst_26822__$1,inst_26815);var inst_26824 = cljs.core.keyword_identical_QMARK_.call(null,inst_26815,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_26825 = (inst_26823) || (inst_26824);var state_26854__$1 = (function (){var statearr_26868 = state_26854;(statearr_26868[(10)] = inst_26822__$1);
return statearr_26868;
})();if(cljs.core.truth_(inst_26825))
{var statearr_26869_26894 = state_26854__$1;(statearr_26869_26894[(1)] = (8));
} else
{var statearr_26870_26895 = state_26854__$1;(statearr_26870_26895[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26855 === (14)))
{var inst_26847 = (state_26854[(2)]);var inst_26848 = cljs.core.async.close_BANG_.call(null,out);var state_26854__$1 = (function (){var statearr_26872 = state_26854;(statearr_26872[(13)] = inst_26847);
return statearr_26872;
})();var statearr_26873_26896 = state_26854__$1;(statearr_26873_26896[(2)] = inst_26848);
(statearr_26873_26896[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26855 === (10)))
{var inst_26837 = (state_26854[(2)]);var state_26854__$1 = state_26854;var statearr_26874_26897 = state_26854__$1;(statearr_26874_26897[(2)] = inst_26837);
(statearr_26874_26897[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26855 === (8)))
{var inst_26818 = (state_26854[(9)]);var inst_26814 = (state_26854[(7)]);var inst_26822 = (state_26854[(10)]);var inst_26827 = inst_26814.push(inst_26818);var tmp26871 = inst_26814;var inst_26814__$1 = tmp26871;var inst_26815 = inst_26822;var state_26854__$1 = (function (){var statearr_26875 = state_26854;(statearr_26875[(14)] = inst_26827);
(statearr_26875[(7)] = inst_26814__$1);
(statearr_26875[(8)] = inst_26815);
return statearr_26875;
})();var statearr_26876_26898 = state_26854__$1;(statearr_26876_26898[(2)] = null);
(statearr_26876_26898[(1)] = (2));
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
});})(c__21043__auto___26884,out))
;return ((function (switch__20987__auto__,c__21043__auto___26884,out){
return (function() {
var state_machine__20988__auto__ = null;
var state_machine__20988__auto____0 = (function (){var statearr_26880 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26880[(0)] = state_machine__20988__auto__);
(statearr_26880[(1)] = (1));
return statearr_26880;
});
var state_machine__20988__auto____1 = (function (state_26854){while(true){
var ret_value__20989__auto__ = (function (){try{while(true){
var result__20990__auto__ = switch__20987__auto__.call(null,state_26854);if(cljs.core.keyword_identical_QMARK_.call(null,result__20990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__20990__auto__;
}
break;
}
}catch (e26881){if((e26881 instanceof Object))
{var ex__20991__auto__ = e26881;var statearr_26882_26899 = state_26854;(statearr_26882_26899[(5)] = ex__20991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26854);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26881;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26900 = state_26854;
state_26854 = G__26900;
continue;
}
} else
{return ret_value__20989__auto__;
}
break;
}
});
state_machine__20988__auto__ = function(state_26854){
switch(arguments.length){
case 0:
return state_machine__20988__auto____0.call(this);
case 1:
return state_machine__20988__auto____1.call(this,state_26854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20988__auto____0;
state_machine__20988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20988__auto____1;
return state_machine__20988__auto__;
})()
;})(switch__20987__auto__,c__21043__auto___26884,out))
})();var state__21045__auto__ = (function (){var statearr_26883 = f__21044__auto__.call(null);(statearr_26883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21043__auto___26884);
return statearr_26883;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21045__auto__);
});})(c__21043__auto___26884,out))
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

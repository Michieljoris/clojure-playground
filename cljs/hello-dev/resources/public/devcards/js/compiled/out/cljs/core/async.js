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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t16612 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16612 = (function (f,fn_handler,meta16613){
this.f = f;
this.fn_handler = fn_handler;
this.meta16613 = meta16613;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16612.cljs$lang$type = true;
cljs.core.async.t16612.cljs$lang$ctorStr = "cljs.core.async/t16612";
cljs.core.async.t16612.cljs$lang$ctorPrWriter = (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"cljs.core.async/t16612");
});
cljs.core.async.t16612.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16612.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t16612.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t16612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16614){var self__ = this;
var _16614__$1 = this;return self__.meta16613;
});
cljs.core.async.t16612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16614,meta16613__$1){var self__ = this;
var _16614__$1 = this;return (new cljs.core.async.t16612(self__.f,self__.fn_handler,meta16613__$1));
});
cljs.core.async.__GT_t16612 = (function __GT_t16612(f__$1,fn_handler__$1,meta16613){return (new cljs.core.async.t16612(f__$1,fn_handler__$1,meta16613));
});
}
return (new cljs.core.async.t16612(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__16616 = buff;if(G__16616)
{var bit__8519__auto__ = null;if(cljs.core.truth_((function (){var or__7869__auto__ = bit__8519__auto__;if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return G__16616.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__16616.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16616);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16616);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
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
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
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
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_16617 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_16617);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_16617,ret){
return (function (){return fn1.call(null,val_16617);
});})(val_16617,ret))
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
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8717__auto___16618 = n;var x_16619 = 0;while(true){
if((x_16619 < n__8717__auto___16618))
{(a[x_16619] = 0);
{
var G__16620 = (x_16619 + 1);
x_16619 = G__16620;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__16621 = (i + 1);
i = G__16621;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t16625 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16625 = (function (flag,alt_flag,meta16626){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta16626 = meta16626;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16625.cljs$lang$type = true;
cljs.core.async.t16625.cljs$lang$ctorStr = "cljs.core.async/t16625";
cljs.core.async.t16625.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"cljs.core.async/t16625");
});})(flag))
;
cljs.core.async.t16625.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16625.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t16625.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t16625.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16627){var self__ = this;
var _16627__$1 = this;return self__.meta16626;
});})(flag))
;
cljs.core.async.t16625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16627,meta16626__$1){var self__ = this;
var _16627__$1 = this;return (new cljs.core.async.t16625(self__.flag,self__.alt_flag,meta16626__$1));
});})(flag))
;
cljs.core.async.__GT_t16625 = ((function (flag){
return (function __GT_t16625(flag__$1,alt_flag__$1,meta16626){return (new cljs.core.async.t16625(flag__$1,alt_flag__$1,meta16626));
});})(flag))
;
}
return (new cljs.core.async.t16625(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t16631 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16631 = (function (cb,flag,alt_handler,meta16632){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta16632 = meta16632;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16631.cljs$lang$type = true;
cljs.core.async.t16631.cljs$lang$ctorStr = "cljs.core.async/t16631";
cljs.core.async.t16631.cljs$lang$ctorPrWriter = (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"cljs.core.async/t16631");
});
cljs.core.async.t16631.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16631.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t16631.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t16631.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16633){var self__ = this;
var _16633__$1 = this;return self__.meta16632;
});
cljs.core.async.t16631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16633,meta16632__$1){var self__ = this;
var _16633__$1 = this;return (new cljs.core.async.t16631(self__.cb,self__.flag,self__.alt_handler,meta16632__$1));
});
cljs.core.async.__GT_t16631 = (function __GT_t16631(cb__$1,flag__$1,alt_handler__$1,meta16632){return (new cljs.core.async.t16631(cb__$1,flag__$1,alt_handler__$1,meta16632));
});
}
return (new cljs.core.async.t16631(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16634_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16634_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16635_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16635_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7869__auto__ = wport;if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__16636 = (i + 1);
i = G__16636;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7869__auto__ = ret;if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__7857__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7857__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7857__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
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
var alts_BANG___delegate = function (ports,p__16637){var map__16639 = p__16637;var map__16639__$1 = ((cljs.core.seq_QMARK_.call(null,map__16639))?cljs.core.apply.call(null,cljs.core.hash_map,map__16639):map__16639);var opts = map__16639__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__16637 = null;if (arguments.length > 1) {
  p__16637 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__16637);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__16640){
var ports = cljs.core.first(arglist__16640);
var p__16637 = cljs.core.rest(arglist__16640);
return alts_BANG___delegate(ports,p__16637);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t16648 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16648 = (function (ch,f,map_LT_,meta16649){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16649 = meta16649;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16648.cljs$lang$type = true;
cljs.core.async.t16648.cljs$lang$ctorStr = "cljs.core.async/t16648";
cljs.core.async.t16648.cljs$lang$ctorPrWriter = (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"cljs.core.async/t16648");
});
cljs.core.async.t16648.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16648.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t16648.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16648.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t16651 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16651 = (function (fn1,_,meta16649,ch,f,map_LT_,meta16652){
this.fn1 = fn1;
this._ = _;
this.meta16649 = meta16649;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16652 = meta16652;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16651.cljs$lang$type = true;
cljs.core.async.t16651.cljs$lang$ctorStr = "cljs.core.async/t16651";
cljs.core.async.t16651.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"cljs.core.async/t16651");
});})(___$1))
;
cljs.core.async.t16651.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16651.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t16651.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t16651.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__16641_SHARP_){return f1.call(null,(((p1__16641_SHARP_ == null))?null:self__.f.call(null,p1__16641_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t16651.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16653){var self__ = this;
var _16653__$1 = this;return self__.meta16652;
});})(___$1))
;
cljs.core.async.t16651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16653,meta16652__$1){var self__ = this;
var _16653__$1 = this;return (new cljs.core.async.t16651(self__.fn1,self__._,self__.meta16649,self__.ch,self__.f,self__.map_LT_,meta16652__$1));
});})(___$1))
;
cljs.core.async.__GT_t16651 = ((function (___$1){
return (function __GT_t16651(fn1__$1,___$2,meta16649__$1,ch__$2,f__$2,map_LT___$2,meta16652){return (new cljs.core.async.t16651(fn1__$1,___$2,meta16649__$1,ch__$2,f__$2,map_LT___$2,meta16652));
});})(___$1))
;
}
return (new cljs.core.async.t16651(fn1,___$1,self__.meta16649,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7857__auto__ = ret;if(cljs.core.truth_(and__7857__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7857__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t16648.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16648.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16648.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t16648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16650){var self__ = this;
var _16650__$1 = this;return self__.meta16649;
});
cljs.core.async.t16648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16650,meta16649__$1){var self__ = this;
var _16650__$1 = this;return (new cljs.core.async.t16648(self__.ch,self__.f,self__.map_LT_,meta16649__$1));
});
cljs.core.async.__GT_t16648 = (function __GT_t16648(ch__$1,f__$1,map_LT___$1,meta16649){return (new cljs.core.async.t16648(ch__$1,f__$1,map_LT___$1,meta16649));
});
}
return (new cljs.core.async.t16648(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t16657 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16657 = (function (ch,f,map_GT_,meta16658){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta16658 = meta16658;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16657.cljs$lang$type = true;
cljs.core.async.t16657.cljs$lang$ctorStr = "cljs.core.async/t16657";
cljs.core.async.t16657.cljs$lang$ctorPrWriter = (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"cljs.core.async/t16657");
});
cljs.core.async.t16657.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16657.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t16657.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16657.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t16657.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16657.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16657.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16659){var self__ = this;
var _16659__$1 = this;return self__.meta16658;
});
cljs.core.async.t16657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16659,meta16658__$1){var self__ = this;
var _16659__$1 = this;return (new cljs.core.async.t16657(self__.ch,self__.f,self__.map_GT_,meta16658__$1));
});
cljs.core.async.__GT_t16657 = (function __GT_t16657(ch__$1,f__$1,map_GT___$1,meta16658){return (new cljs.core.async.t16657(ch__$1,f__$1,map_GT___$1,meta16658));
});
}
return (new cljs.core.async.t16657(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t16663 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16663 = (function (ch,p,filter_GT_,meta16664){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta16664 = meta16664;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16663.cljs$lang$type = true;
cljs.core.async.t16663.cljs$lang$ctorStr = "cljs.core.async/t16663";
cljs.core.async.t16663.cljs$lang$ctorPrWriter = (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"cljs.core.async/t16663");
});
cljs.core.async.t16663.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16663.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t16663.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16663.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t16663.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16663.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16663.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t16663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16665){var self__ = this;
var _16665__$1 = this;return self__.meta16664;
});
cljs.core.async.t16663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16665,meta16664__$1){var self__ = this;
var _16665__$1 = this;return (new cljs.core.async.t16663(self__.ch,self__.p,self__.filter_GT_,meta16664__$1));
});
cljs.core.async.__GT_t16663 = (function __GT_t16663(ch__$1,p__$1,filter_GT___$1,meta16664){return (new cljs.core.async.t16663(ch__$1,p__$1,filter_GT___$1,meta16664));
});
}
return (new cljs.core.async.t16663(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
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
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10498__auto___16748 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto___16748,out){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto___16748,out){
return (function (state_16727){var state_val_16728 = (state_16727[1]);if((state_val_16728 === 7))
{var inst_16723 = (state_16727[2]);var state_16727__$1 = state_16727;var statearr_16729_16749 = state_16727__$1;(statearr_16729_16749[2] = inst_16723);
(statearr_16729_16749[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16728 === 1))
{var state_16727__$1 = state_16727;var statearr_16730_16750 = state_16727__$1;(statearr_16730_16750[2] = null);
(statearr_16730_16750[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16728 === 4))
{var inst_16709 = (state_16727[7]);var inst_16709__$1 = (state_16727[2]);var inst_16710 = (inst_16709__$1 == null);var state_16727__$1 = (function (){var statearr_16731 = state_16727;(statearr_16731[7] = inst_16709__$1);
return statearr_16731;
})();if(cljs.core.truth_(inst_16710))
{var statearr_16732_16751 = state_16727__$1;(statearr_16732_16751[1] = 5);
} else
{var statearr_16733_16752 = state_16727__$1;(statearr_16733_16752[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16728 === 6))
{var inst_16709 = (state_16727[7]);var inst_16714 = p.call(null,inst_16709);var state_16727__$1 = state_16727;if(cljs.core.truth_(inst_16714))
{var statearr_16734_16753 = state_16727__$1;(statearr_16734_16753[1] = 8);
} else
{var statearr_16735_16754 = state_16727__$1;(statearr_16735_16754[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16728 === 3))
{var inst_16725 = (state_16727[2]);var state_16727__$1 = state_16727;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16727__$1,inst_16725);
} else
{if((state_val_16728 === 2))
{var state_16727__$1 = state_16727;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16727__$1,4,ch);
} else
{if((state_val_16728 === 11))
{var inst_16717 = (state_16727[2]);var state_16727__$1 = state_16727;var statearr_16736_16755 = state_16727__$1;(statearr_16736_16755[2] = inst_16717);
(statearr_16736_16755[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16728 === 9))
{var state_16727__$1 = state_16727;var statearr_16737_16756 = state_16727__$1;(statearr_16737_16756[2] = null);
(statearr_16737_16756[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16728 === 5))
{var inst_16712 = cljs.core.async.close_BANG_.call(null,out);var state_16727__$1 = state_16727;var statearr_16738_16757 = state_16727__$1;(statearr_16738_16757[2] = inst_16712);
(statearr_16738_16757[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16728 === 10))
{var inst_16720 = (state_16727[2]);var state_16727__$1 = (function (){var statearr_16739 = state_16727;(statearr_16739[8] = inst_16720);
return statearr_16739;
})();var statearr_16740_16758 = state_16727__$1;(statearr_16740_16758[2] = null);
(statearr_16740_16758[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16728 === 8))
{var inst_16709 = (state_16727[7]);var state_16727__$1 = state_16727;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16727__$1,11,out,inst_16709);
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
});})(c__10498__auto___16748,out))
;return ((function (switch__10434__auto__,c__10498__auto___16748,out){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_16744 = [null,null,null,null,null,null,null,null,null];(statearr_16744[0] = state_machine__10435__auto__);
(statearr_16744[1] = 1);
return statearr_16744;
});
var state_machine__10435__auto____1 = (function (state_16727){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_16727);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e16745){if((e16745 instanceof Object))
{var ex__10438__auto__ = e16745;var statearr_16746_16759 = state_16727;(statearr_16746_16759[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16727);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16745;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16760 = state_16727;
state_16727 = G__16760;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_16727){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_16727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto___16748,out))
})();var state__10500__auto__ = (function (){var statearr_16747 = f__10499__auto__.call(null);(statearr_16747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto___16748);
return statearr_16747;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto___16748,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10498__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto__){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto__){
return (function (state_16926){var state_val_16927 = (state_16926[1]);if((state_val_16927 === 7))
{var inst_16922 = (state_16926[2]);var state_16926__$1 = state_16926;var statearr_16928_16969 = state_16926__$1;(statearr_16928_16969[2] = inst_16922);
(statearr_16928_16969[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16927 === 20))
{var inst_16892 = (state_16926[7]);var inst_16903 = (state_16926[2]);var inst_16904 = cljs.core.next.call(null,inst_16892);var inst_16878 = inst_16904;var inst_16879 = null;var inst_16880 = 0;var inst_16881 = 0;var state_16926__$1 = (function (){var statearr_16929 = state_16926;(statearr_16929[8] = inst_16879);
(statearr_16929[9] = inst_16881);
(statearr_16929[10] = inst_16878);
(statearr_16929[11] = inst_16880);
(statearr_16929[12] = inst_16903);
return statearr_16929;
})();var statearr_16930_16970 = state_16926__$1;(statearr_16930_16970[2] = null);
(statearr_16930_16970[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16927 === 1))
{var state_16926__$1 = state_16926;var statearr_16931_16971 = state_16926__$1;(statearr_16931_16971[2] = null);
(statearr_16931_16971[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16927 === 4))
{var inst_16867 = (state_16926[13]);var inst_16867__$1 = (state_16926[2]);var inst_16868 = (inst_16867__$1 == null);var state_16926__$1 = (function (){var statearr_16932 = state_16926;(statearr_16932[13] = inst_16867__$1);
return statearr_16932;
})();if(cljs.core.truth_(inst_16868))
{var statearr_16933_16972 = state_16926__$1;(statearr_16933_16972[1] = 5);
} else
{var statearr_16934_16973 = state_16926__$1;(statearr_16934_16973[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16927 === 15))
{var state_16926__$1 = state_16926;var statearr_16938_16974 = state_16926__$1;(statearr_16938_16974[2] = null);
(statearr_16938_16974[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16927 === 21))
{var state_16926__$1 = state_16926;var statearr_16939_16975 = state_16926__$1;(statearr_16939_16975[2] = null);
(statearr_16939_16975[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16927 === 13))
{var inst_16879 = (state_16926[8]);var inst_16881 = (state_16926[9]);var inst_16878 = (state_16926[10]);var inst_16880 = (state_16926[11]);var inst_16888 = (state_16926[2]);var inst_16889 = (inst_16881 + 1);var tmp16935 = inst_16879;var tmp16936 = inst_16878;var tmp16937 = inst_16880;var inst_16878__$1 = tmp16936;var inst_16879__$1 = tmp16935;var inst_16880__$1 = tmp16937;var inst_16881__$1 = inst_16889;var state_16926__$1 = (function (){var statearr_16940 = state_16926;(statearr_16940[8] = inst_16879__$1);
(statearr_16940[14] = inst_16888);
(statearr_16940[9] = inst_16881__$1);
(statearr_16940[10] = inst_16878__$1);
(statearr_16940[11] = inst_16880__$1);
return statearr_16940;
})();var statearr_16941_16976 = state_16926__$1;(statearr_16941_16976[2] = null);
(statearr_16941_16976[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16927 === 22))
{var state_16926__$1 = state_16926;var statearr_16942_16977 = state_16926__$1;(statearr_16942_16977[2] = null);
(statearr_16942_16977[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16927 === 6))
{var inst_16867 = (state_16926[13]);var inst_16876 = f.call(null,inst_16867);var inst_16877 = cljs.core.seq.call(null,inst_16876);var inst_16878 = inst_16877;var inst_16879 = null;var inst_16880 = 0;var inst_16881 = 0;var state_16926__$1 = (function (){var statearr_16943 = state_16926;(statearr_16943[8] = inst_16879);
(statearr_16943[9] = inst_16881);
(statearr_16943[10] = inst_16878);
(statearr_16943[11] = inst_16880);
return statearr_16943;
})();var statearr_16944_16978 = state_16926__$1;(statearr_16944_16978[2] = null);
(statearr_16944_16978[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16927 === 17))
{var inst_16892 = (state_16926[7]);var inst_16896 = cljs.core.chunk_first.call(null,inst_16892);var inst_16897 = cljs.core.chunk_rest.call(null,inst_16892);var inst_16898 = cljs.core.count.call(null,inst_16896);var inst_16878 = inst_16897;var inst_16879 = inst_16896;var inst_16880 = inst_16898;var inst_16881 = 0;var state_16926__$1 = (function (){var statearr_16945 = state_16926;(statearr_16945[8] = inst_16879);
(statearr_16945[9] = inst_16881);
(statearr_16945[10] = inst_16878);
(statearr_16945[11] = inst_16880);
return statearr_16945;
})();var statearr_16946_16979 = state_16926__$1;(statearr_16946_16979[2] = null);
(statearr_16946_16979[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16927 === 3))
{var inst_16924 = (state_16926[2]);var state_16926__$1 = state_16926;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16926__$1,inst_16924);
} else
{if((state_val_16927 === 12))
{var inst_16912 = (state_16926[2]);var state_16926__$1 = state_16926;var statearr_16947_16980 = state_16926__$1;(statearr_16947_16980[2] = inst_16912);
(statearr_16947_16980[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16927 === 2))
{var state_16926__$1 = state_16926;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16926__$1,4,in$);
} else
{if((state_val_16927 === 23))
{var inst_16920 = (state_16926[2]);var state_16926__$1 = state_16926;var statearr_16948_16981 = state_16926__$1;(statearr_16948_16981[2] = inst_16920);
(statearr_16948_16981[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16927 === 19))
{var inst_16907 = (state_16926[2]);var state_16926__$1 = state_16926;var statearr_16949_16982 = state_16926__$1;(statearr_16949_16982[2] = inst_16907);
(statearr_16949_16982[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16927 === 11))
{var inst_16892 = (state_16926[7]);var inst_16878 = (state_16926[10]);var inst_16892__$1 = cljs.core.seq.call(null,inst_16878);var state_16926__$1 = (function (){var statearr_16950 = state_16926;(statearr_16950[7] = inst_16892__$1);
return statearr_16950;
})();if(inst_16892__$1)
{var statearr_16951_16983 = state_16926__$1;(statearr_16951_16983[1] = 14);
} else
{var statearr_16952_16984 = state_16926__$1;(statearr_16952_16984[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16927 === 9))
{var inst_16914 = (state_16926[2]);var inst_16915 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_16926__$1 = (function (){var statearr_16953 = state_16926;(statearr_16953[15] = inst_16914);
return statearr_16953;
})();if(cljs.core.truth_(inst_16915))
{var statearr_16954_16985 = state_16926__$1;(statearr_16954_16985[1] = 21);
} else
{var statearr_16955_16986 = state_16926__$1;(statearr_16955_16986[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16927 === 5))
{var inst_16870 = cljs.core.async.close_BANG_.call(null,out);var state_16926__$1 = state_16926;var statearr_16956_16987 = state_16926__$1;(statearr_16956_16987[2] = inst_16870);
(statearr_16956_16987[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16927 === 14))
{var inst_16892 = (state_16926[7]);var inst_16894 = cljs.core.chunked_seq_QMARK_.call(null,inst_16892);var state_16926__$1 = state_16926;if(inst_16894)
{var statearr_16957_16988 = state_16926__$1;(statearr_16957_16988[1] = 17);
} else
{var statearr_16958_16989 = state_16926__$1;(statearr_16958_16989[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16927 === 16))
{var inst_16910 = (state_16926[2]);var state_16926__$1 = state_16926;var statearr_16959_16990 = state_16926__$1;(statearr_16959_16990[2] = inst_16910);
(statearr_16959_16990[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16927 === 10))
{var inst_16879 = (state_16926[8]);var inst_16881 = (state_16926[9]);var inst_16886 = cljs.core._nth.call(null,inst_16879,inst_16881);var state_16926__$1 = state_16926;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16926__$1,13,out,inst_16886);
} else
{if((state_val_16927 === 18))
{var inst_16892 = (state_16926[7]);var inst_16901 = cljs.core.first.call(null,inst_16892);var state_16926__$1 = state_16926;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16926__$1,20,out,inst_16901);
} else
{if((state_val_16927 === 8))
{var inst_16881 = (state_16926[9]);var inst_16880 = (state_16926[11]);var inst_16883 = (inst_16881 < inst_16880);var inst_16884 = inst_16883;var state_16926__$1 = state_16926;if(cljs.core.truth_(inst_16884))
{var statearr_16960_16991 = state_16926__$1;(statearr_16960_16991[1] = 10);
} else
{var statearr_16961_16992 = state_16926__$1;(statearr_16961_16992[1] = 11);
}
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
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10498__auto__))
;return ((function (switch__10434__auto__,c__10498__auto__){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_16965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16965[0] = state_machine__10435__auto__);
(statearr_16965[1] = 1);
return statearr_16965;
});
var state_machine__10435__auto____1 = (function (state_16926){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_16926);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e16966){if((e16966 instanceof Object))
{var ex__10438__auto__ = e16966;var statearr_16967_16993 = state_16926;(statearr_16967_16993[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16926);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16966;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16994 = state_16926;
state_16926 = G__16994;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_16926){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_16926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto__))
})();var state__10500__auto__ = (function (){var statearr_16968 = f__10499__auto__.call(null);(statearr_16968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto__);
return statearr_16968;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto__))
);
return c__10498__auto__;
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
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__10498__auto___17089 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto___17089){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto___17089){
return (function (state_17065){var state_val_17066 = (state_17065[1]);if((state_val_17066 === 7))
{var inst_17061 = (state_17065[2]);var state_17065__$1 = state_17065;var statearr_17067_17090 = state_17065__$1;(statearr_17067_17090[2] = inst_17061);
(statearr_17067_17090[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17066 === 1))
{var state_17065__$1 = state_17065;var statearr_17068_17091 = state_17065__$1;(statearr_17068_17091[2] = null);
(statearr_17068_17091[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17066 === 4))
{var inst_17044 = (state_17065[7]);var inst_17044__$1 = (state_17065[2]);var inst_17045 = (inst_17044__$1 == null);var state_17065__$1 = (function (){var statearr_17069 = state_17065;(statearr_17069[7] = inst_17044__$1);
return statearr_17069;
})();if(cljs.core.truth_(inst_17045))
{var statearr_17070_17092 = state_17065__$1;(statearr_17070_17092[1] = 5);
} else
{var statearr_17071_17093 = state_17065__$1;(statearr_17071_17093[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17066 === 13))
{var state_17065__$1 = state_17065;var statearr_17072_17094 = state_17065__$1;(statearr_17072_17094[2] = null);
(statearr_17072_17094[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17066 === 6))
{var inst_17044 = (state_17065[7]);var state_17065__$1 = state_17065;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17065__$1,11,to,inst_17044);
} else
{if((state_val_17066 === 3))
{var inst_17063 = (state_17065[2]);var state_17065__$1 = state_17065;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17065__$1,inst_17063);
} else
{if((state_val_17066 === 12))
{var state_17065__$1 = state_17065;var statearr_17073_17095 = state_17065__$1;(statearr_17073_17095[2] = null);
(statearr_17073_17095[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17066 === 2))
{var state_17065__$1 = state_17065;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17065__$1,4,from);
} else
{if((state_val_17066 === 11))
{var inst_17054 = (state_17065[2]);var state_17065__$1 = state_17065;if(cljs.core.truth_(inst_17054))
{var statearr_17074_17096 = state_17065__$1;(statearr_17074_17096[1] = 12);
} else
{var statearr_17075_17097 = state_17065__$1;(statearr_17075_17097[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17066 === 9))
{var state_17065__$1 = state_17065;var statearr_17076_17098 = state_17065__$1;(statearr_17076_17098[2] = null);
(statearr_17076_17098[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17066 === 5))
{var state_17065__$1 = state_17065;if(cljs.core.truth_(close_QMARK_))
{var statearr_17077_17099 = state_17065__$1;(statearr_17077_17099[1] = 8);
} else
{var statearr_17078_17100 = state_17065__$1;(statearr_17078_17100[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17066 === 14))
{var inst_17059 = (state_17065[2]);var state_17065__$1 = state_17065;var statearr_17079_17101 = state_17065__$1;(statearr_17079_17101[2] = inst_17059);
(statearr_17079_17101[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17066 === 10))
{var inst_17051 = (state_17065[2]);var state_17065__$1 = state_17065;var statearr_17080_17102 = state_17065__$1;(statearr_17080_17102[2] = inst_17051);
(statearr_17080_17102[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17066 === 8))
{var inst_17048 = cljs.core.async.close_BANG_.call(null,to);var state_17065__$1 = state_17065;var statearr_17081_17103 = state_17065__$1;(statearr_17081_17103[2] = inst_17048);
(statearr_17081_17103[1] = 10);
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
}
}
}
}
});})(c__10498__auto___17089))
;return ((function (switch__10434__auto__,c__10498__auto___17089){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_17085 = [null,null,null,null,null,null,null,null];(statearr_17085[0] = state_machine__10435__auto__);
(statearr_17085[1] = 1);
return statearr_17085;
});
var state_machine__10435__auto____1 = (function (state_17065){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_17065);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e17086){if((e17086 instanceof Object))
{var ex__10438__auto__ = e17086;var statearr_17087_17104 = state_17065;(statearr_17087_17104[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17065);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17086;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17105 = state_17065;
state_17065 = G__17105;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_17065){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_17065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto___17089))
})();var state__10500__auto__ = (function (){var statearr_17088 = f__10499__auto__.call(null);(statearr_17088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto___17089);
return statearr_17088;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto___17089))
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
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10498__auto___17206 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto___17206,tc,fc){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto___17206,tc,fc){
return (function (state_17181){var state_val_17182 = (state_17181[1]);if((state_val_17182 === 7))
{var inst_17177 = (state_17181[2]);var state_17181__$1 = state_17181;var statearr_17183_17207 = state_17181__$1;(statearr_17183_17207[2] = inst_17177);
(statearr_17183_17207[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17182 === 1))
{var state_17181__$1 = state_17181;var statearr_17184_17208 = state_17181__$1;(statearr_17184_17208[2] = null);
(statearr_17184_17208[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17182 === 4))
{var inst_17158 = (state_17181[7]);var inst_17158__$1 = (state_17181[2]);var inst_17159 = (inst_17158__$1 == null);var state_17181__$1 = (function (){var statearr_17185 = state_17181;(statearr_17185[7] = inst_17158__$1);
return statearr_17185;
})();if(cljs.core.truth_(inst_17159))
{var statearr_17186_17209 = state_17181__$1;(statearr_17186_17209[1] = 5);
} else
{var statearr_17187_17210 = state_17181__$1;(statearr_17187_17210[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17182 === 13))
{var state_17181__$1 = state_17181;var statearr_17188_17211 = state_17181__$1;(statearr_17188_17211[2] = null);
(statearr_17188_17211[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17182 === 6))
{var inst_17158 = (state_17181[7]);var inst_17164 = p.call(null,inst_17158);var state_17181__$1 = state_17181;if(cljs.core.truth_(inst_17164))
{var statearr_17189_17212 = state_17181__$1;(statearr_17189_17212[1] = 9);
} else
{var statearr_17190_17213 = state_17181__$1;(statearr_17190_17213[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17182 === 3))
{var inst_17179 = (state_17181[2]);var state_17181__$1 = state_17181;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17181__$1,inst_17179);
} else
{if((state_val_17182 === 12))
{var state_17181__$1 = state_17181;var statearr_17191_17214 = state_17181__$1;(statearr_17191_17214[2] = null);
(statearr_17191_17214[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17182 === 2))
{var state_17181__$1 = state_17181;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17181__$1,4,ch);
} else
{if((state_val_17182 === 11))
{var inst_17158 = (state_17181[7]);var inst_17168 = (state_17181[2]);var state_17181__$1 = state_17181;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17181__$1,8,inst_17168,inst_17158);
} else
{if((state_val_17182 === 9))
{var state_17181__$1 = state_17181;var statearr_17192_17215 = state_17181__$1;(statearr_17192_17215[2] = tc);
(statearr_17192_17215[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17182 === 5))
{var inst_17161 = cljs.core.async.close_BANG_.call(null,tc);var inst_17162 = cljs.core.async.close_BANG_.call(null,fc);var state_17181__$1 = (function (){var statearr_17193 = state_17181;(statearr_17193[8] = inst_17161);
return statearr_17193;
})();var statearr_17194_17216 = state_17181__$1;(statearr_17194_17216[2] = inst_17162);
(statearr_17194_17216[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17182 === 14))
{var inst_17175 = (state_17181[2]);var state_17181__$1 = state_17181;var statearr_17195_17217 = state_17181__$1;(statearr_17195_17217[2] = inst_17175);
(statearr_17195_17217[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17182 === 10))
{var state_17181__$1 = state_17181;var statearr_17196_17218 = state_17181__$1;(statearr_17196_17218[2] = fc);
(statearr_17196_17218[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17182 === 8))
{var inst_17170 = (state_17181[2]);var state_17181__$1 = state_17181;if(cljs.core.truth_(inst_17170))
{var statearr_17197_17219 = state_17181__$1;(statearr_17197_17219[1] = 12);
} else
{var statearr_17198_17220 = state_17181__$1;(statearr_17198_17220[1] = 13);
}
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
}
}
}
}
});})(c__10498__auto___17206,tc,fc))
;return ((function (switch__10434__auto__,c__10498__auto___17206,tc,fc){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_17202 = [null,null,null,null,null,null,null,null,null];(statearr_17202[0] = state_machine__10435__auto__);
(statearr_17202[1] = 1);
return statearr_17202;
});
var state_machine__10435__auto____1 = (function (state_17181){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_17181);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e17203){if((e17203 instanceof Object))
{var ex__10438__auto__ = e17203;var statearr_17204_17221 = state_17181;(statearr_17204_17221[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17181);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17203;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17222 = state_17181;
state_17181 = G__17222;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_17181){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_17181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto___17206,tc,fc))
})();var state__10500__auto__ = (function (){var statearr_17205 = f__10499__auto__.call(null);(statearr_17205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto___17206);
return statearr_17205;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto___17206,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10498__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto__){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto__){
return (function (state_17269){var state_val_17270 = (state_17269[1]);if((state_val_17270 === 7))
{var inst_17265 = (state_17269[2]);var state_17269__$1 = state_17269;var statearr_17271_17287 = state_17269__$1;(statearr_17271_17287[2] = inst_17265);
(statearr_17271_17287[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17270 === 6))
{var inst_17255 = (state_17269[7]);var inst_17258 = (state_17269[8]);var inst_17262 = f.call(null,inst_17255,inst_17258);var inst_17255__$1 = inst_17262;var state_17269__$1 = (function (){var statearr_17272 = state_17269;(statearr_17272[7] = inst_17255__$1);
return statearr_17272;
})();var statearr_17273_17288 = state_17269__$1;(statearr_17273_17288[2] = null);
(statearr_17273_17288[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17270 === 5))
{var inst_17255 = (state_17269[7]);var state_17269__$1 = state_17269;var statearr_17274_17289 = state_17269__$1;(statearr_17274_17289[2] = inst_17255);
(statearr_17274_17289[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17270 === 4))
{var inst_17258 = (state_17269[8]);var inst_17258__$1 = (state_17269[2]);var inst_17259 = (inst_17258__$1 == null);var state_17269__$1 = (function (){var statearr_17275 = state_17269;(statearr_17275[8] = inst_17258__$1);
return statearr_17275;
})();if(cljs.core.truth_(inst_17259))
{var statearr_17276_17290 = state_17269__$1;(statearr_17276_17290[1] = 5);
} else
{var statearr_17277_17291 = state_17269__$1;(statearr_17277_17291[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17270 === 3))
{var inst_17267 = (state_17269[2]);var state_17269__$1 = state_17269;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17269__$1,inst_17267);
} else
{if((state_val_17270 === 2))
{var state_17269__$1 = state_17269;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17269__$1,4,ch);
} else
{if((state_val_17270 === 1))
{var inst_17255 = init;var state_17269__$1 = (function (){var statearr_17278 = state_17269;(statearr_17278[7] = inst_17255);
return statearr_17278;
})();var statearr_17279_17292 = state_17269__$1;(statearr_17279_17292[2] = null);
(statearr_17279_17292[1] = 2);
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
});})(c__10498__auto__))
;return ((function (switch__10434__auto__,c__10498__auto__){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_17283 = [null,null,null,null,null,null,null,null,null];(statearr_17283[0] = state_machine__10435__auto__);
(statearr_17283[1] = 1);
return statearr_17283;
});
var state_machine__10435__auto____1 = (function (state_17269){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_17269);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e17284){if((e17284 instanceof Object))
{var ex__10438__auto__ = e17284;var statearr_17285_17293 = state_17269;(statearr_17285_17293[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17269);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17284;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17294 = state_17269;
state_17269 = G__17294;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_17269){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_17269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto__))
})();var state__10500__auto__ = (function (){var statearr_17286 = f__10499__auto__.call(null);(statearr_17286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto__);
return statearr_17286;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto__))
);
return c__10498__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10498__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto__){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto__){
return (function (state_17368){var state_val_17369 = (state_17368[1]);if((state_val_17369 === 7))
{var inst_17350 = (state_17368[2]);var state_17368__$1 = state_17368;var statearr_17370_17393 = state_17368__$1;(statearr_17370_17393[2] = inst_17350);
(statearr_17370_17393[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17369 === 1))
{var inst_17344 = cljs.core.seq.call(null,coll);var inst_17345 = inst_17344;var state_17368__$1 = (function (){var statearr_17371 = state_17368;(statearr_17371[7] = inst_17345);
return statearr_17371;
})();var statearr_17372_17394 = state_17368__$1;(statearr_17372_17394[2] = null);
(statearr_17372_17394[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17369 === 4))
{var inst_17345 = (state_17368[7]);var inst_17348 = cljs.core.first.call(null,inst_17345);var state_17368__$1 = state_17368;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17368__$1,7,ch,inst_17348);
} else
{if((state_val_17369 === 13))
{var inst_17362 = (state_17368[2]);var state_17368__$1 = state_17368;var statearr_17373_17395 = state_17368__$1;(statearr_17373_17395[2] = inst_17362);
(statearr_17373_17395[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17369 === 6))
{var inst_17353 = (state_17368[2]);var state_17368__$1 = state_17368;if(cljs.core.truth_(inst_17353))
{var statearr_17374_17396 = state_17368__$1;(statearr_17374_17396[1] = 8);
} else
{var statearr_17375_17397 = state_17368__$1;(statearr_17375_17397[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17369 === 3))
{var inst_17366 = (state_17368[2]);var state_17368__$1 = state_17368;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17368__$1,inst_17366);
} else
{if((state_val_17369 === 12))
{var state_17368__$1 = state_17368;var statearr_17376_17398 = state_17368__$1;(statearr_17376_17398[2] = null);
(statearr_17376_17398[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17369 === 2))
{var inst_17345 = (state_17368[7]);var state_17368__$1 = state_17368;if(cljs.core.truth_(inst_17345))
{var statearr_17377_17399 = state_17368__$1;(statearr_17377_17399[1] = 4);
} else
{var statearr_17378_17400 = state_17368__$1;(statearr_17378_17400[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17369 === 11))
{var inst_17359 = cljs.core.async.close_BANG_.call(null,ch);var state_17368__$1 = state_17368;var statearr_17379_17401 = state_17368__$1;(statearr_17379_17401[2] = inst_17359);
(statearr_17379_17401[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17369 === 9))
{var state_17368__$1 = state_17368;if(cljs.core.truth_(close_QMARK_))
{var statearr_17380_17402 = state_17368__$1;(statearr_17380_17402[1] = 11);
} else
{var statearr_17381_17403 = state_17368__$1;(statearr_17381_17403[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17369 === 5))
{var inst_17345 = (state_17368[7]);var state_17368__$1 = state_17368;var statearr_17382_17404 = state_17368__$1;(statearr_17382_17404[2] = inst_17345);
(statearr_17382_17404[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17369 === 10))
{var inst_17364 = (state_17368[2]);var state_17368__$1 = state_17368;var statearr_17383_17405 = state_17368__$1;(statearr_17383_17405[2] = inst_17364);
(statearr_17383_17405[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17369 === 8))
{var inst_17345 = (state_17368[7]);var inst_17355 = cljs.core.next.call(null,inst_17345);var inst_17345__$1 = inst_17355;var state_17368__$1 = (function (){var statearr_17384 = state_17368;(statearr_17384[7] = inst_17345__$1);
return statearr_17384;
})();var statearr_17385_17406 = state_17368__$1;(statearr_17385_17406[2] = null);
(statearr_17385_17406[1] = 2);
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
}
}
}
});})(c__10498__auto__))
;return ((function (switch__10434__auto__,c__10498__auto__){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_17389 = [null,null,null,null,null,null,null,null];(statearr_17389[0] = state_machine__10435__auto__);
(statearr_17389[1] = 1);
return statearr_17389;
});
var state_machine__10435__auto____1 = (function (state_17368){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_17368);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e17390){if((e17390 instanceof Object))
{var ex__10438__auto__ = e17390;var statearr_17391_17407 = state_17368;(statearr_17391_17407[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17368);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17390;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17408 = state_17368;
state_17368 = G__17408;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_17368){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_17368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto__))
})();var state__10500__auto__ = (function (){var statearr_17392 = f__10499__auto__.call(null);(statearr_17392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto__);
return statearr_17392;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto__))
);
return c__10498__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj17410 = {};return obj17410;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7857__auto__ = _;if(and__7857__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7857__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8496__auto__ = (((_ == null))?null:_);return (function (){var or__7869__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj17412 = {};return obj17412;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7857__auto__ = m;if(and__7857__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7857__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8496__auto__ = (((m == null))?null:m);return (function (){var or__7869__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7857__auto__ = m;if(and__7857__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7857__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8496__auto__ = (((m == null))?null:m);return (function (){var or__7869__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7857__auto__ = m;if(and__7857__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7857__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8496__auto__ = (((m == null))?null:m);return (function (){var or__7869__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t17634 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17634 = (function (cs,ch,mult,meta17635){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta17635 = meta17635;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17634.cljs$lang$type = true;
cljs.core.async.t17634.cljs$lang$ctorStr = "cljs.core.async/t17634";
cljs.core.async.t17634.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"cljs.core.async/t17634");
});})(cs))
;
cljs.core.async.t17634.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t17634.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t17634.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t17634.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t17634.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17634.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t17634.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17636){var self__ = this;
var _17636__$1 = this;return self__.meta17635;
});})(cs))
;
cljs.core.async.t17634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17636,meta17635__$1){var self__ = this;
var _17636__$1 = this;return (new cljs.core.async.t17634(self__.cs,self__.ch,self__.mult,meta17635__$1));
});})(cs))
;
cljs.core.async.__GT_t17634 = ((function (cs){
return (function __GT_t17634(cs__$1,ch__$1,mult__$1,meta17635){return (new cljs.core.async.t17634(cs__$1,ch__$1,mult__$1,meta17635));
});})(cs))
;
}
return (new cljs.core.async.t17634(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10498__auto___17855 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto___17855,cs,m,dchan,dctr,done){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto___17855,cs,m,dchan,dctr,done){
return (function (state_17767){var state_val_17768 = (state_17767[1]);if((state_val_17768 === 7))
{var inst_17763 = (state_17767[2]);var state_17767__$1 = state_17767;var statearr_17769_17856 = state_17767__$1;(statearr_17769_17856[2] = inst_17763);
(statearr_17769_17856[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 20))
{var inst_17668 = (state_17767[7]);var inst_17678 = cljs.core.first.call(null,inst_17668);var inst_17679 = cljs.core.nth.call(null,inst_17678,0,null);var inst_17680 = cljs.core.nth.call(null,inst_17678,1,null);var state_17767__$1 = (function (){var statearr_17770 = state_17767;(statearr_17770[8] = inst_17679);
return statearr_17770;
})();if(cljs.core.truth_(inst_17680))
{var statearr_17771_17857 = state_17767__$1;(statearr_17771_17857[1] = 22);
} else
{var statearr_17772_17858 = state_17767__$1;(statearr_17772_17858[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 27))
{var inst_17708 = (state_17767[9]);var inst_17639 = (state_17767[10]);var inst_17710 = (state_17767[11]);var inst_17715 = (state_17767[12]);var inst_17715__$1 = cljs.core._nth.call(null,inst_17708,inst_17710);var inst_17716 = cljs.core.async.put_BANG_.call(null,inst_17715__$1,inst_17639,done);var state_17767__$1 = (function (){var statearr_17773 = state_17767;(statearr_17773[12] = inst_17715__$1);
return statearr_17773;
})();if(cljs.core.truth_(inst_17716))
{var statearr_17774_17859 = state_17767__$1;(statearr_17774_17859[1] = 30);
} else
{var statearr_17775_17860 = state_17767__$1;(statearr_17775_17860[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 1))
{var state_17767__$1 = state_17767;var statearr_17776_17861 = state_17767__$1;(statearr_17776_17861[2] = null);
(statearr_17776_17861[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 24))
{var inst_17668 = (state_17767[7]);var inst_17685 = (state_17767[2]);var inst_17686 = cljs.core.next.call(null,inst_17668);var inst_17648 = inst_17686;var inst_17649 = null;var inst_17650 = 0;var inst_17651 = 0;var state_17767__$1 = (function (){var statearr_17777 = state_17767;(statearr_17777[13] = inst_17685);
(statearr_17777[14] = inst_17651);
(statearr_17777[15] = inst_17650);
(statearr_17777[16] = inst_17648);
(statearr_17777[17] = inst_17649);
return statearr_17777;
})();var statearr_17778_17862 = state_17767__$1;(statearr_17778_17862[2] = null);
(statearr_17778_17862[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 39))
{var state_17767__$1 = state_17767;var statearr_17782_17863 = state_17767__$1;(statearr_17782_17863[2] = null);
(statearr_17782_17863[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 4))
{var inst_17639 = (state_17767[10]);var inst_17639__$1 = (state_17767[2]);var inst_17640 = (inst_17639__$1 == null);var state_17767__$1 = (function (){var statearr_17783 = state_17767;(statearr_17783[10] = inst_17639__$1);
return statearr_17783;
})();if(cljs.core.truth_(inst_17640))
{var statearr_17784_17864 = state_17767__$1;(statearr_17784_17864[1] = 5);
} else
{var statearr_17785_17865 = state_17767__$1;(statearr_17785_17865[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 15))
{var inst_17651 = (state_17767[14]);var inst_17650 = (state_17767[15]);var inst_17648 = (state_17767[16]);var inst_17649 = (state_17767[17]);var inst_17664 = (state_17767[2]);var inst_17665 = (inst_17651 + 1);var tmp17779 = inst_17650;var tmp17780 = inst_17648;var tmp17781 = inst_17649;var inst_17648__$1 = tmp17780;var inst_17649__$1 = tmp17781;var inst_17650__$1 = tmp17779;var inst_17651__$1 = inst_17665;var state_17767__$1 = (function (){var statearr_17786 = state_17767;(statearr_17786[14] = inst_17651__$1);
(statearr_17786[15] = inst_17650__$1);
(statearr_17786[18] = inst_17664);
(statearr_17786[16] = inst_17648__$1);
(statearr_17786[17] = inst_17649__$1);
return statearr_17786;
})();var statearr_17787_17866 = state_17767__$1;(statearr_17787_17866[2] = null);
(statearr_17787_17866[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 21))
{var inst_17689 = (state_17767[2]);var state_17767__$1 = state_17767;var statearr_17791_17867 = state_17767__$1;(statearr_17791_17867[2] = inst_17689);
(statearr_17791_17867[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 31))
{var inst_17715 = (state_17767[12]);var inst_17719 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_17720 = cljs.core.async.untap_STAR_.call(null,m,inst_17715);var state_17767__$1 = (function (){var statearr_17792 = state_17767;(statearr_17792[19] = inst_17719);
return statearr_17792;
})();var statearr_17793_17868 = state_17767__$1;(statearr_17793_17868[2] = inst_17720);
(statearr_17793_17868[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 32))
{var inst_17708 = (state_17767[9]);var inst_17707 = (state_17767[20]);var inst_17709 = (state_17767[21]);var inst_17710 = (state_17767[11]);var inst_17722 = (state_17767[2]);var inst_17723 = (inst_17710 + 1);var tmp17788 = inst_17708;var tmp17789 = inst_17707;var tmp17790 = inst_17709;var inst_17707__$1 = tmp17789;var inst_17708__$1 = tmp17788;var inst_17709__$1 = tmp17790;var inst_17710__$1 = inst_17723;var state_17767__$1 = (function (){var statearr_17794 = state_17767;(statearr_17794[9] = inst_17708__$1);
(statearr_17794[22] = inst_17722);
(statearr_17794[20] = inst_17707__$1);
(statearr_17794[21] = inst_17709__$1);
(statearr_17794[11] = inst_17710__$1);
return statearr_17794;
})();var statearr_17795_17869 = state_17767__$1;(statearr_17795_17869[2] = null);
(statearr_17795_17869[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 40))
{var inst_17735 = (state_17767[23]);var inst_17739 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_17740 = cljs.core.async.untap_STAR_.call(null,m,inst_17735);var state_17767__$1 = (function (){var statearr_17796 = state_17767;(statearr_17796[24] = inst_17739);
return statearr_17796;
})();var statearr_17797_17870 = state_17767__$1;(statearr_17797_17870[2] = inst_17740);
(statearr_17797_17870[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 33))
{var inst_17726 = (state_17767[25]);var inst_17728 = cljs.core.chunked_seq_QMARK_.call(null,inst_17726);var state_17767__$1 = state_17767;if(inst_17728)
{var statearr_17798_17871 = state_17767__$1;(statearr_17798_17871[1] = 36);
} else
{var statearr_17799_17872 = state_17767__$1;(statearr_17799_17872[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 13))
{var inst_17658 = (state_17767[26]);var inst_17661 = cljs.core.async.close_BANG_.call(null,inst_17658);var state_17767__$1 = state_17767;var statearr_17800_17873 = state_17767__$1;(statearr_17800_17873[2] = inst_17661);
(statearr_17800_17873[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 22))
{var inst_17679 = (state_17767[8]);var inst_17682 = cljs.core.async.close_BANG_.call(null,inst_17679);var state_17767__$1 = state_17767;var statearr_17801_17874 = state_17767__$1;(statearr_17801_17874[2] = inst_17682);
(statearr_17801_17874[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 36))
{var inst_17726 = (state_17767[25]);var inst_17730 = cljs.core.chunk_first.call(null,inst_17726);var inst_17731 = cljs.core.chunk_rest.call(null,inst_17726);var inst_17732 = cljs.core.count.call(null,inst_17730);var inst_17707 = inst_17731;var inst_17708 = inst_17730;var inst_17709 = inst_17732;var inst_17710 = 0;var state_17767__$1 = (function (){var statearr_17802 = state_17767;(statearr_17802[9] = inst_17708);
(statearr_17802[20] = inst_17707);
(statearr_17802[21] = inst_17709);
(statearr_17802[11] = inst_17710);
return statearr_17802;
})();var statearr_17803_17875 = state_17767__$1;(statearr_17803_17875[2] = null);
(statearr_17803_17875[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 41))
{var inst_17726 = (state_17767[25]);var inst_17742 = (state_17767[2]);var inst_17743 = cljs.core.next.call(null,inst_17726);var inst_17707 = inst_17743;var inst_17708 = null;var inst_17709 = 0;var inst_17710 = 0;var state_17767__$1 = (function (){var statearr_17804 = state_17767;(statearr_17804[9] = inst_17708);
(statearr_17804[20] = inst_17707);
(statearr_17804[27] = inst_17742);
(statearr_17804[21] = inst_17709);
(statearr_17804[11] = inst_17710);
return statearr_17804;
})();var statearr_17805_17876 = state_17767__$1;(statearr_17805_17876[2] = null);
(statearr_17805_17876[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 43))
{var state_17767__$1 = state_17767;var statearr_17806_17877 = state_17767__$1;(statearr_17806_17877[2] = null);
(statearr_17806_17877[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 29))
{var inst_17751 = (state_17767[2]);var state_17767__$1 = state_17767;var statearr_17807_17878 = state_17767__$1;(statearr_17807_17878[2] = inst_17751);
(statearr_17807_17878[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 44))
{var inst_17760 = (state_17767[2]);var state_17767__$1 = (function (){var statearr_17808 = state_17767;(statearr_17808[28] = inst_17760);
return statearr_17808;
})();var statearr_17809_17879 = state_17767__$1;(statearr_17809_17879[2] = null);
(statearr_17809_17879[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 6))
{var inst_17699 = (state_17767[29]);var inst_17698 = cljs.core.deref.call(null,cs);var inst_17699__$1 = cljs.core.keys.call(null,inst_17698);var inst_17700 = cljs.core.count.call(null,inst_17699__$1);var inst_17701 = cljs.core.reset_BANG_.call(null,dctr,inst_17700);var inst_17706 = cljs.core.seq.call(null,inst_17699__$1);var inst_17707 = inst_17706;var inst_17708 = null;var inst_17709 = 0;var inst_17710 = 0;var state_17767__$1 = (function (){var statearr_17810 = state_17767;(statearr_17810[9] = inst_17708);
(statearr_17810[20] = inst_17707);
(statearr_17810[29] = inst_17699__$1);
(statearr_17810[21] = inst_17709);
(statearr_17810[11] = inst_17710);
(statearr_17810[30] = inst_17701);
return statearr_17810;
})();var statearr_17811_17880 = state_17767__$1;(statearr_17811_17880[2] = null);
(statearr_17811_17880[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 28))
{var inst_17707 = (state_17767[20]);var inst_17726 = (state_17767[25]);var inst_17726__$1 = cljs.core.seq.call(null,inst_17707);var state_17767__$1 = (function (){var statearr_17812 = state_17767;(statearr_17812[25] = inst_17726__$1);
return statearr_17812;
})();if(inst_17726__$1)
{var statearr_17813_17881 = state_17767__$1;(statearr_17813_17881[1] = 33);
} else
{var statearr_17814_17882 = state_17767__$1;(statearr_17814_17882[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 25))
{var inst_17709 = (state_17767[21]);var inst_17710 = (state_17767[11]);var inst_17712 = (inst_17710 < inst_17709);var inst_17713 = inst_17712;var state_17767__$1 = state_17767;if(cljs.core.truth_(inst_17713))
{var statearr_17815_17883 = state_17767__$1;(statearr_17815_17883[1] = 27);
} else
{var statearr_17816_17884 = state_17767__$1;(statearr_17816_17884[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 34))
{var state_17767__$1 = state_17767;var statearr_17817_17885 = state_17767__$1;(statearr_17817_17885[2] = null);
(statearr_17817_17885[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 17))
{var state_17767__$1 = state_17767;var statearr_17818_17886 = state_17767__$1;(statearr_17818_17886[2] = null);
(statearr_17818_17886[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 3))
{var inst_17765 = (state_17767[2]);var state_17767__$1 = state_17767;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17767__$1,inst_17765);
} else
{if((state_val_17768 === 12))
{var inst_17694 = (state_17767[2]);var state_17767__$1 = state_17767;var statearr_17819_17887 = state_17767__$1;(statearr_17819_17887[2] = inst_17694);
(statearr_17819_17887[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 2))
{var state_17767__$1 = state_17767;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17767__$1,4,ch);
} else
{if((state_val_17768 === 23))
{var state_17767__$1 = state_17767;var statearr_17820_17888 = state_17767__$1;(statearr_17820_17888[2] = null);
(statearr_17820_17888[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 35))
{var inst_17749 = (state_17767[2]);var state_17767__$1 = state_17767;var statearr_17821_17889 = state_17767__$1;(statearr_17821_17889[2] = inst_17749);
(statearr_17821_17889[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 19))
{var inst_17668 = (state_17767[7]);var inst_17672 = cljs.core.chunk_first.call(null,inst_17668);var inst_17673 = cljs.core.chunk_rest.call(null,inst_17668);var inst_17674 = cljs.core.count.call(null,inst_17672);var inst_17648 = inst_17673;var inst_17649 = inst_17672;var inst_17650 = inst_17674;var inst_17651 = 0;var state_17767__$1 = (function (){var statearr_17822 = state_17767;(statearr_17822[14] = inst_17651);
(statearr_17822[15] = inst_17650);
(statearr_17822[16] = inst_17648);
(statearr_17822[17] = inst_17649);
return statearr_17822;
})();var statearr_17823_17890 = state_17767__$1;(statearr_17823_17890[2] = null);
(statearr_17823_17890[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 11))
{var inst_17648 = (state_17767[16]);var inst_17668 = (state_17767[7]);var inst_17668__$1 = cljs.core.seq.call(null,inst_17648);var state_17767__$1 = (function (){var statearr_17824 = state_17767;(statearr_17824[7] = inst_17668__$1);
return statearr_17824;
})();if(inst_17668__$1)
{var statearr_17825_17891 = state_17767__$1;(statearr_17825_17891[1] = 16);
} else
{var statearr_17826_17892 = state_17767__$1;(statearr_17826_17892[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 9))
{var inst_17696 = (state_17767[2]);var state_17767__$1 = state_17767;var statearr_17827_17893 = state_17767__$1;(statearr_17827_17893[2] = inst_17696);
(statearr_17827_17893[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 5))
{var inst_17646 = cljs.core.deref.call(null,cs);var inst_17647 = cljs.core.seq.call(null,inst_17646);var inst_17648 = inst_17647;var inst_17649 = null;var inst_17650 = 0;var inst_17651 = 0;var state_17767__$1 = (function (){var statearr_17828 = state_17767;(statearr_17828[14] = inst_17651);
(statearr_17828[15] = inst_17650);
(statearr_17828[16] = inst_17648);
(statearr_17828[17] = inst_17649);
return statearr_17828;
})();var statearr_17829_17894 = state_17767__$1;(statearr_17829_17894[2] = null);
(statearr_17829_17894[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 14))
{var state_17767__$1 = state_17767;var statearr_17830_17895 = state_17767__$1;(statearr_17830_17895[2] = null);
(statearr_17830_17895[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 45))
{var inst_17757 = (state_17767[2]);var state_17767__$1 = state_17767;var statearr_17831_17896 = state_17767__$1;(statearr_17831_17896[2] = inst_17757);
(statearr_17831_17896[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 26))
{var inst_17699 = (state_17767[29]);var inst_17753 = (state_17767[2]);var inst_17754 = cljs.core.seq.call(null,inst_17699);var state_17767__$1 = (function (){var statearr_17832 = state_17767;(statearr_17832[31] = inst_17753);
return statearr_17832;
})();if(inst_17754)
{var statearr_17833_17897 = state_17767__$1;(statearr_17833_17897[1] = 42);
} else
{var statearr_17834_17898 = state_17767__$1;(statearr_17834_17898[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 16))
{var inst_17668 = (state_17767[7]);var inst_17670 = cljs.core.chunked_seq_QMARK_.call(null,inst_17668);var state_17767__$1 = state_17767;if(inst_17670)
{var statearr_17835_17899 = state_17767__$1;(statearr_17835_17899[1] = 19);
} else
{var statearr_17836_17900 = state_17767__$1;(statearr_17836_17900[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 38))
{var inst_17746 = (state_17767[2]);var state_17767__$1 = state_17767;var statearr_17837_17901 = state_17767__$1;(statearr_17837_17901[2] = inst_17746);
(statearr_17837_17901[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 30))
{var state_17767__$1 = state_17767;var statearr_17838_17902 = state_17767__$1;(statearr_17838_17902[2] = null);
(statearr_17838_17902[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 10))
{var inst_17651 = (state_17767[14]);var inst_17649 = (state_17767[17]);var inst_17657 = cljs.core._nth.call(null,inst_17649,inst_17651);var inst_17658 = cljs.core.nth.call(null,inst_17657,0,null);var inst_17659 = cljs.core.nth.call(null,inst_17657,1,null);var state_17767__$1 = (function (){var statearr_17839 = state_17767;(statearr_17839[26] = inst_17658);
return statearr_17839;
})();if(cljs.core.truth_(inst_17659))
{var statearr_17840_17903 = state_17767__$1;(statearr_17840_17903[1] = 13);
} else
{var statearr_17841_17904 = state_17767__$1;(statearr_17841_17904[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 18))
{var inst_17692 = (state_17767[2]);var state_17767__$1 = state_17767;var statearr_17842_17905 = state_17767__$1;(statearr_17842_17905[2] = inst_17692);
(statearr_17842_17905[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 42))
{var state_17767__$1 = state_17767;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17767__$1,45,dchan);
} else
{if((state_val_17768 === 37))
{var inst_17726 = (state_17767[25]);var inst_17639 = (state_17767[10]);var inst_17735 = (state_17767[23]);var inst_17735__$1 = cljs.core.first.call(null,inst_17726);var inst_17736 = cljs.core.async.put_BANG_.call(null,inst_17735__$1,inst_17639,done);var state_17767__$1 = (function (){var statearr_17843 = state_17767;(statearr_17843[23] = inst_17735__$1);
return statearr_17843;
})();if(cljs.core.truth_(inst_17736))
{var statearr_17844_17906 = state_17767__$1;(statearr_17844_17906[1] = 39);
} else
{var statearr_17845_17907 = state_17767__$1;(statearr_17845_17907[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17768 === 8))
{var inst_17651 = (state_17767[14]);var inst_17650 = (state_17767[15]);var inst_17653 = (inst_17651 < inst_17650);var inst_17654 = inst_17653;var state_17767__$1 = state_17767;if(cljs.core.truth_(inst_17654))
{var statearr_17846_17908 = state_17767__$1;(statearr_17846_17908[1] = 10);
} else
{var statearr_17847_17909 = state_17767__$1;(statearr_17847_17909[1] = 11);
}
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10498__auto___17855,cs,m,dchan,dctr,done))
;return ((function (switch__10434__auto__,c__10498__auto___17855,cs,m,dchan,dctr,done){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_17851 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17851[0] = state_machine__10435__auto__);
(statearr_17851[1] = 1);
return statearr_17851;
});
var state_machine__10435__auto____1 = (function (state_17767){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_17767);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e17852){if((e17852 instanceof Object))
{var ex__10438__auto__ = e17852;var statearr_17853_17910 = state_17767;(statearr_17853_17910[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17767);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17852;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17911 = state_17767;
state_17767 = G__17911;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_17767){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_17767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto___17855,cs,m,dchan,dctr,done))
})();var state__10500__auto__ = (function (){var statearr_17854 = f__10499__auto__.call(null);(statearr_17854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto___17855);
return statearr_17854;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto___17855,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj17913 = {};return obj17913;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7857__auto__ = m;if(and__7857__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7857__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8496__auto__ = (((m == null))?null:m);return (function (){var or__7869__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7857__auto__ = m;if(and__7857__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7857__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8496__auto__ = (((m == null))?null:m);return (function (){var or__7869__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7857__auto__ = m;if(and__7857__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7857__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8496__auto__ = (((m == null))?null:m);return (function (){var or__7869__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7857__auto__ = m;if(and__7857__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7857__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8496__auto__ = (((m == null))?null:m);return (function (){var or__7869__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7857__auto__ = m;if(and__7857__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7857__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8496__auto__ = (((m == null))?null:m);return (function (){var or__7869__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t18033 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18033 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18034){
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
this.meta18034 = meta18034;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18033.cljs$lang$type = true;
cljs.core.async.t18033.cljs$lang$ctorStr = "cljs.core.async/t18033";
cljs.core.async.t18033.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"cljs.core.async/t18033");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18033.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t18033.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18033.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18033.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18033.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18033.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18033.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18033.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18033.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18035){var self__ = this;
var _18035__$1 = this;return self__.meta18034;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18035,meta18034__$1){var self__ = this;
var _18035__$1 = this;return (new cljs.core.async.t18033(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18034__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t18033 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t18033(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18034){return (new cljs.core.async.t18033(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18034));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t18033(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__10498__auto___18152 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto___18152,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto___18152,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18105){var state_val_18106 = (state_18105[1]);if((state_val_18106 === 7))
{var inst_18049 = (state_18105[7]);var inst_18054 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18049);var state_18105__$1 = state_18105;var statearr_18107_18153 = state_18105__$1;(statearr_18107_18153[2] = inst_18054);
(statearr_18107_18153[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18106 === 20))
{var inst_18064 = (state_18105[8]);var state_18105__$1 = state_18105;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18105__$1,23,out,inst_18064);
} else
{if((state_val_18106 === 1))
{var inst_18039 = (state_18105[9]);var inst_18039__$1 = calc_state.call(null);var inst_18040 = cljs.core.seq_QMARK_.call(null,inst_18039__$1);var state_18105__$1 = (function (){var statearr_18108 = state_18105;(statearr_18108[9] = inst_18039__$1);
return statearr_18108;
})();if(inst_18040)
{var statearr_18109_18154 = state_18105__$1;(statearr_18109_18154[1] = 2);
} else
{var statearr_18110_18155 = state_18105__$1;(statearr_18110_18155[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18106 === 24))
{var inst_18057 = (state_18105[10]);var inst_18049 = inst_18057;var state_18105__$1 = (function (){var statearr_18111 = state_18105;(statearr_18111[7] = inst_18049);
return statearr_18111;
})();var statearr_18112_18156 = state_18105__$1;(statearr_18112_18156[2] = null);
(statearr_18112_18156[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18106 === 4))
{var inst_18039 = (state_18105[9]);var inst_18045 = (state_18105[2]);var inst_18046 = cljs.core.get.call(null,inst_18045,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_18047 = cljs.core.get.call(null,inst_18045,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_18048 = cljs.core.get.call(null,inst_18045,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_18049 = inst_18039;var state_18105__$1 = (function (){var statearr_18113 = state_18105;(statearr_18113[11] = inst_18047);
(statearr_18113[12] = inst_18048);
(statearr_18113[13] = inst_18046);
(statearr_18113[7] = inst_18049);
return statearr_18113;
})();var statearr_18114_18157 = state_18105__$1;(statearr_18114_18157[2] = null);
(statearr_18114_18157[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18106 === 15))
{var state_18105__$1 = state_18105;var statearr_18115_18158 = state_18105__$1;(statearr_18115_18158[2] = null);
(statearr_18115_18158[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18106 === 21))
{var inst_18057 = (state_18105[10]);var inst_18049 = inst_18057;var state_18105__$1 = (function (){var statearr_18116 = state_18105;(statearr_18116[7] = inst_18049);
return statearr_18116;
})();var statearr_18117_18159 = state_18105__$1;(statearr_18117_18159[2] = null);
(statearr_18117_18159[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18106 === 13))
{var inst_18101 = (state_18105[2]);var state_18105__$1 = state_18105;var statearr_18118_18160 = state_18105__$1;(statearr_18118_18160[2] = inst_18101);
(statearr_18118_18160[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18106 === 22))
{var inst_18099 = (state_18105[2]);var state_18105__$1 = state_18105;var statearr_18119_18161 = state_18105__$1;(statearr_18119_18161[2] = inst_18099);
(statearr_18119_18161[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18106 === 6))
{var inst_18103 = (state_18105[2]);var state_18105__$1 = state_18105;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18105__$1,inst_18103);
} else
{if((state_val_18106 === 25))
{var state_18105__$1 = state_18105;var statearr_18120_18162 = state_18105__$1;(statearr_18120_18162[2] = null);
(statearr_18120_18162[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18106 === 17))
{var inst_18079 = (state_18105[14]);var state_18105__$1 = state_18105;var statearr_18121_18163 = state_18105__$1;(statearr_18121_18163[2] = inst_18079);
(statearr_18121_18163[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18106 === 3))
{var inst_18039 = (state_18105[9]);var state_18105__$1 = state_18105;var statearr_18122_18164 = state_18105__$1;(statearr_18122_18164[2] = inst_18039);
(statearr_18122_18164[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18106 === 12))
{var inst_18065 = (state_18105[15]);var inst_18079 = (state_18105[14]);var inst_18060 = (state_18105[16]);var inst_18079__$1 = inst_18060.call(null,inst_18065);var state_18105__$1 = (function (){var statearr_18123 = state_18105;(statearr_18123[14] = inst_18079__$1);
return statearr_18123;
})();if(cljs.core.truth_(inst_18079__$1))
{var statearr_18124_18165 = state_18105__$1;(statearr_18124_18165[1] = 17);
} else
{var statearr_18125_18166 = state_18105__$1;(statearr_18125_18166[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18106 === 2))
{var inst_18039 = (state_18105[9]);var inst_18042 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18039);var state_18105__$1 = state_18105;var statearr_18126_18167 = state_18105__$1;(statearr_18126_18167[2] = inst_18042);
(statearr_18126_18167[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18106 === 23))
{var inst_18090 = (state_18105[2]);var state_18105__$1 = state_18105;if(cljs.core.truth_(inst_18090))
{var statearr_18127_18168 = state_18105__$1;(statearr_18127_18168[1] = 24);
} else
{var statearr_18128_18169 = state_18105__$1;(statearr_18128_18169[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18106 === 19))
{var inst_18087 = (state_18105[2]);var state_18105__$1 = state_18105;if(cljs.core.truth_(inst_18087))
{var statearr_18129_18170 = state_18105__$1;(statearr_18129_18170[1] = 20);
} else
{var statearr_18130_18171 = state_18105__$1;(statearr_18130_18171[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18106 === 11))
{var inst_18064 = (state_18105[8]);var inst_18070 = (inst_18064 == null);var state_18105__$1 = state_18105;if(cljs.core.truth_(inst_18070))
{var statearr_18131_18172 = state_18105__$1;(statearr_18131_18172[1] = 14);
} else
{var statearr_18132_18173 = state_18105__$1;(statearr_18132_18173[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18106 === 9))
{var inst_18057 = (state_18105[10]);var inst_18057__$1 = (state_18105[2]);var inst_18058 = cljs.core.get.call(null,inst_18057__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_18059 = cljs.core.get.call(null,inst_18057__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_18060 = cljs.core.get.call(null,inst_18057__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_18105__$1 = (function (){var statearr_18133 = state_18105;(statearr_18133[10] = inst_18057__$1);
(statearr_18133[17] = inst_18059);
(statearr_18133[16] = inst_18060);
return statearr_18133;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18105__$1,10,inst_18058);
} else
{if((state_val_18106 === 5))
{var inst_18049 = (state_18105[7]);var inst_18052 = cljs.core.seq_QMARK_.call(null,inst_18049);var state_18105__$1 = state_18105;if(inst_18052)
{var statearr_18134_18174 = state_18105__$1;(statearr_18134_18174[1] = 7);
} else
{var statearr_18135_18175 = state_18105__$1;(statearr_18135_18175[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18106 === 14))
{var inst_18065 = (state_18105[15]);var inst_18072 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18065);var state_18105__$1 = state_18105;var statearr_18136_18176 = state_18105__$1;(statearr_18136_18176[2] = inst_18072);
(statearr_18136_18176[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18106 === 26))
{var inst_18095 = (state_18105[2]);var state_18105__$1 = state_18105;var statearr_18137_18177 = state_18105__$1;(statearr_18137_18177[2] = inst_18095);
(statearr_18137_18177[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18106 === 16))
{var inst_18075 = (state_18105[2]);var inst_18076 = calc_state.call(null);var inst_18049 = inst_18076;var state_18105__$1 = (function (){var statearr_18138 = state_18105;(statearr_18138[18] = inst_18075);
(statearr_18138[7] = inst_18049);
return statearr_18138;
})();var statearr_18139_18178 = state_18105__$1;(statearr_18139_18178[2] = null);
(statearr_18139_18178[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18106 === 10))
{var inst_18065 = (state_18105[15]);var inst_18064 = (state_18105[8]);var inst_18063 = (state_18105[2]);var inst_18064__$1 = cljs.core.nth.call(null,inst_18063,0,null);var inst_18065__$1 = cljs.core.nth.call(null,inst_18063,1,null);var inst_18066 = (inst_18064__$1 == null);var inst_18067 = cljs.core._EQ_.call(null,inst_18065__$1,change);var inst_18068 = (inst_18066) || (inst_18067);var state_18105__$1 = (function (){var statearr_18140 = state_18105;(statearr_18140[15] = inst_18065__$1);
(statearr_18140[8] = inst_18064__$1);
return statearr_18140;
})();if(cljs.core.truth_(inst_18068))
{var statearr_18141_18179 = state_18105__$1;(statearr_18141_18179[1] = 11);
} else
{var statearr_18142_18180 = state_18105__$1;(statearr_18142_18180[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18106 === 18))
{var inst_18065 = (state_18105[15]);var inst_18059 = (state_18105[17]);var inst_18060 = (state_18105[16]);var inst_18082 = cljs.core.empty_QMARK_.call(null,inst_18060);var inst_18083 = inst_18059.call(null,inst_18065);var inst_18084 = cljs.core.not.call(null,inst_18083);var inst_18085 = (inst_18082) && (inst_18084);var state_18105__$1 = state_18105;var statearr_18143_18181 = state_18105__$1;(statearr_18143_18181[2] = inst_18085);
(statearr_18143_18181[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18106 === 8))
{var inst_18049 = (state_18105[7]);var state_18105__$1 = state_18105;var statearr_18144_18182 = state_18105__$1;(statearr_18144_18182[2] = inst_18049);
(statearr_18144_18182[1] = 9);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10498__auto___18152,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__10434__auto__,c__10498__auto___18152,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_18148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18148[0] = state_machine__10435__auto__);
(statearr_18148[1] = 1);
return statearr_18148;
});
var state_machine__10435__auto____1 = (function (state_18105){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_18105);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e18149){if((e18149 instanceof Object))
{var ex__10438__auto__ = e18149;var statearr_18150_18183 = state_18105;(statearr_18150_18183[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18105);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18149;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18184 = state_18105;
state_18105 = G__18184;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_18105){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_18105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto___18152,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__10500__auto__ = (function (){var statearr_18151 = f__10499__auto__.call(null);(statearr_18151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto___18152);
return statearr_18151;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto___18152,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj18186 = {};return obj18186;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7857__auto__ = p;if(and__7857__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7857__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8496__auto__ = (((p == null))?null:p);return (function (){var or__7869__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7857__auto__ = p;if(and__7857__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7857__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8496__auto__ = (((p == null))?null:p);return (function (){var or__7869__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7857__auto__ = p;if(and__7857__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7857__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8496__auto__ = (((p == null))?null:p);return (function (){var or__7869__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7857__auto__ = p;if(and__7857__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7857__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8496__auto__ = (((p == null))?null:p);return (function (){var or__7869__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
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
return (function (topic){var or__7869__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7869__auto__,mults){
return (function (p1__18187_SHARP_){if(cljs.core.truth_(p1__18187_SHARP_.call(null,topic)))
{return p1__18187_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__18187_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7869__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t18302 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18302 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta18303){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta18303 = meta18303;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18302.cljs$lang$type = true;
cljs.core.async.t18302.cljs$lang$ctorStr = "cljs.core.async/t18302";
cljs.core.async.t18302.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"cljs.core.async/t18302");
});})(mults,ensure_mult))
;
cljs.core.async.t18302.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t18302.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t18302.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t18302.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t18302.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t18302.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18302.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t18302.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18304){var self__ = this;
var _18304__$1 = this;return self__.meta18303;
});})(mults,ensure_mult))
;
cljs.core.async.t18302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18304,meta18303__$1){var self__ = this;
var _18304__$1 = this;return (new cljs.core.async.t18302(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta18303__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t18302 = ((function (mults,ensure_mult){
return (function __GT_t18302(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18303){return (new cljs.core.async.t18302(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18303));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t18302(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10498__auto___18416 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto___18416,mults,ensure_mult,p){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto___18416,mults,ensure_mult,p){
return (function (state_18372){var state_val_18373 = (state_18372[1]);if((state_val_18373 === 7))
{var inst_18368 = (state_18372[2]);var state_18372__$1 = state_18372;var statearr_18374_18417 = state_18372__$1;(statearr_18374_18417[2] = inst_18368);
(statearr_18374_18417[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 20))
{var state_18372__$1 = state_18372;var statearr_18375_18418 = state_18372__$1;(statearr_18375_18418[2] = null);
(statearr_18375_18418[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 1))
{var state_18372__$1 = state_18372;var statearr_18376_18419 = state_18372__$1;(statearr_18376_18419[2] = null);
(statearr_18376_18419[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 4))
{var inst_18307 = (state_18372[7]);var inst_18307__$1 = (state_18372[2]);var inst_18308 = (inst_18307__$1 == null);var state_18372__$1 = (function (){var statearr_18377 = state_18372;(statearr_18377[7] = inst_18307__$1);
return statearr_18377;
})();if(cljs.core.truth_(inst_18308))
{var statearr_18378_18420 = state_18372__$1;(statearr_18378_18420[1] = 5);
} else
{var statearr_18379_18421 = state_18372__$1;(statearr_18379_18421[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 15))
{var inst_18349 = (state_18372[2]);var state_18372__$1 = state_18372;var statearr_18380_18422 = state_18372__$1;(statearr_18380_18422[2] = inst_18349);
(statearr_18380_18422[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 21))
{var inst_18355 = (state_18372[8]);var inst_18363 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18355);var state_18372__$1 = state_18372;var statearr_18381_18423 = state_18372__$1;(statearr_18381_18423[2] = inst_18363);
(statearr_18381_18423[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 13))
{var inst_18331 = (state_18372[9]);var inst_18333 = cljs.core.chunked_seq_QMARK_.call(null,inst_18331);var state_18372__$1 = state_18372;if(inst_18333)
{var statearr_18382_18424 = state_18372__$1;(statearr_18382_18424[1] = 16);
} else
{var statearr_18383_18425 = state_18372__$1;(statearr_18383_18425[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 22))
{var inst_18365 = (state_18372[2]);var state_18372__$1 = (function (){var statearr_18384 = state_18372;(statearr_18384[10] = inst_18365);
return statearr_18384;
})();var statearr_18385_18426 = state_18372__$1;(statearr_18385_18426[2] = null);
(statearr_18385_18426[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 6))
{var inst_18355 = (state_18372[8]);var inst_18307 = (state_18372[7]);var inst_18355__$1 = topic_fn.call(null,inst_18307);var inst_18356 = cljs.core.deref.call(null,mults);var inst_18357 = cljs.core.get.call(null,inst_18356,inst_18355__$1);var inst_18358 = cljs.core.async.muxch_STAR_.call(null,inst_18357);var state_18372__$1 = (function (){var statearr_18386 = state_18372;(statearr_18386[8] = inst_18355__$1);
return statearr_18386;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18372__$1,19,inst_18358,inst_18307);
} else
{if((state_val_18373 === 17))
{var inst_18331 = (state_18372[9]);var inst_18340 = cljs.core.first.call(null,inst_18331);var inst_18341 = cljs.core.async.muxch_STAR_.call(null,inst_18340);var inst_18342 = cljs.core.async.close_BANG_.call(null,inst_18341);var inst_18343 = cljs.core.next.call(null,inst_18331);var inst_18317 = inst_18343;var inst_18318 = null;var inst_18319 = 0;var inst_18320 = 0;var state_18372__$1 = (function (){var statearr_18387 = state_18372;(statearr_18387[11] = inst_18318);
(statearr_18387[12] = inst_18317);
(statearr_18387[13] = inst_18320);
(statearr_18387[14] = inst_18342);
(statearr_18387[15] = inst_18319);
return statearr_18387;
})();var statearr_18388_18427 = state_18372__$1;(statearr_18388_18427[2] = null);
(statearr_18388_18427[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 3))
{var inst_18370 = (state_18372[2]);var state_18372__$1 = state_18372;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18372__$1,inst_18370);
} else
{if((state_val_18373 === 12))
{var inst_18351 = (state_18372[2]);var state_18372__$1 = state_18372;var statearr_18389_18428 = state_18372__$1;(statearr_18389_18428[2] = inst_18351);
(statearr_18389_18428[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 2))
{var state_18372__$1 = state_18372;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18372__$1,4,ch);
} else
{if((state_val_18373 === 19))
{var inst_18360 = (state_18372[2]);var state_18372__$1 = state_18372;if(cljs.core.truth_(inst_18360))
{var statearr_18390_18429 = state_18372__$1;(statearr_18390_18429[1] = 20);
} else
{var statearr_18391_18430 = state_18372__$1;(statearr_18391_18430[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 11))
{var inst_18331 = (state_18372[9]);var inst_18317 = (state_18372[12]);var inst_18331__$1 = cljs.core.seq.call(null,inst_18317);var state_18372__$1 = (function (){var statearr_18392 = state_18372;(statearr_18392[9] = inst_18331__$1);
return statearr_18392;
})();if(inst_18331__$1)
{var statearr_18393_18431 = state_18372__$1;(statearr_18393_18431[1] = 13);
} else
{var statearr_18394_18432 = state_18372__$1;(statearr_18394_18432[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 9))
{var inst_18353 = (state_18372[2]);var state_18372__$1 = state_18372;var statearr_18395_18433 = state_18372__$1;(statearr_18395_18433[2] = inst_18353);
(statearr_18395_18433[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 5))
{var inst_18314 = cljs.core.deref.call(null,mults);var inst_18315 = cljs.core.vals.call(null,inst_18314);var inst_18316 = cljs.core.seq.call(null,inst_18315);var inst_18317 = inst_18316;var inst_18318 = null;var inst_18319 = 0;var inst_18320 = 0;var state_18372__$1 = (function (){var statearr_18396 = state_18372;(statearr_18396[11] = inst_18318);
(statearr_18396[12] = inst_18317);
(statearr_18396[13] = inst_18320);
(statearr_18396[15] = inst_18319);
return statearr_18396;
})();var statearr_18397_18434 = state_18372__$1;(statearr_18397_18434[2] = null);
(statearr_18397_18434[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 14))
{var state_18372__$1 = state_18372;var statearr_18401_18435 = state_18372__$1;(statearr_18401_18435[2] = null);
(statearr_18401_18435[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 16))
{var inst_18331 = (state_18372[9]);var inst_18335 = cljs.core.chunk_first.call(null,inst_18331);var inst_18336 = cljs.core.chunk_rest.call(null,inst_18331);var inst_18337 = cljs.core.count.call(null,inst_18335);var inst_18317 = inst_18336;var inst_18318 = inst_18335;var inst_18319 = inst_18337;var inst_18320 = 0;var state_18372__$1 = (function (){var statearr_18402 = state_18372;(statearr_18402[11] = inst_18318);
(statearr_18402[12] = inst_18317);
(statearr_18402[13] = inst_18320);
(statearr_18402[15] = inst_18319);
return statearr_18402;
})();var statearr_18403_18436 = state_18372__$1;(statearr_18403_18436[2] = null);
(statearr_18403_18436[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 10))
{var inst_18318 = (state_18372[11]);var inst_18317 = (state_18372[12]);var inst_18320 = (state_18372[13]);var inst_18319 = (state_18372[15]);var inst_18325 = cljs.core._nth.call(null,inst_18318,inst_18320);var inst_18326 = cljs.core.async.muxch_STAR_.call(null,inst_18325);var inst_18327 = cljs.core.async.close_BANG_.call(null,inst_18326);var inst_18328 = (inst_18320 + 1);var tmp18398 = inst_18318;var tmp18399 = inst_18317;var tmp18400 = inst_18319;var inst_18317__$1 = tmp18399;var inst_18318__$1 = tmp18398;var inst_18319__$1 = tmp18400;var inst_18320__$1 = inst_18328;var state_18372__$1 = (function (){var statearr_18404 = state_18372;(statearr_18404[16] = inst_18327);
(statearr_18404[11] = inst_18318__$1);
(statearr_18404[12] = inst_18317__$1);
(statearr_18404[13] = inst_18320__$1);
(statearr_18404[15] = inst_18319__$1);
return statearr_18404;
})();var statearr_18405_18437 = state_18372__$1;(statearr_18405_18437[2] = null);
(statearr_18405_18437[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 18))
{var inst_18346 = (state_18372[2]);var state_18372__$1 = state_18372;var statearr_18406_18438 = state_18372__$1;(statearr_18406_18438[2] = inst_18346);
(statearr_18406_18438[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 8))
{var inst_18320 = (state_18372[13]);var inst_18319 = (state_18372[15]);var inst_18322 = (inst_18320 < inst_18319);var inst_18323 = inst_18322;var state_18372__$1 = state_18372;if(cljs.core.truth_(inst_18323))
{var statearr_18407_18439 = state_18372__$1;(statearr_18407_18439[1] = 10);
} else
{var statearr_18408_18440 = state_18372__$1;(statearr_18408_18440[1] = 11);
}
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
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10498__auto___18416,mults,ensure_mult,p))
;return ((function (switch__10434__auto__,c__10498__auto___18416,mults,ensure_mult,p){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_18412 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18412[0] = state_machine__10435__auto__);
(statearr_18412[1] = 1);
return statearr_18412;
});
var state_machine__10435__auto____1 = (function (state_18372){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_18372);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e18413){if((e18413 instanceof Object))
{var ex__10438__auto__ = e18413;var statearr_18414_18441 = state_18372;(statearr_18414_18441[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18372);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18413;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18442 = state_18372;
state_18372 = G__18442;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_18372){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_18372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto___18416,mults,ensure_mult,p))
})();var state__10500__auto__ = (function (){var statearr_18415 = f__10499__auto__.call(null);(statearr_18415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto___18416);
return statearr_18415;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto___18416,mults,ensure_mult,p))
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__10498__auto___18579 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto___18579,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto___18579,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18549){var state_val_18550 = (state_18549[1]);if((state_val_18550 === 7))
{var state_18549__$1 = state_18549;var statearr_18551_18580 = state_18549__$1;(statearr_18551_18580[2] = null);
(statearr_18551_18580[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18550 === 1))
{var state_18549__$1 = state_18549;var statearr_18552_18581 = state_18549__$1;(statearr_18552_18581[2] = null);
(statearr_18552_18581[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18550 === 4))
{var inst_18513 = (state_18549[7]);var inst_18515 = (inst_18513 < cnt);var state_18549__$1 = state_18549;if(cljs.core.truth_(inst_18515))
{var statearr_18553_18582 = state_18549__$1;(statearr_18553_18582[1] = 6);
} else
{var statearr_18554_18583 = state_18549__$1;(statearr_18554_18583[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18550 === 15))
{var inst_18545 = (state_18549[2]);var state_18549__$1 = state_18549;var statearr_18555_18584 = state_18549__$1;(statearr_18555_18584[2] = inst_18545);
(statearr_18555_18584[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18550 === 13))
{var inst_18538 = cljs.core.async.close_BANG_.call(null,out);var state_18549__$1 = state_18549;var statearr_18556_18585 = state_18549__$1;(statearr_18556_18585[2] = inst_18538);
(statearr_18556_18585[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18550 === 6))
{var state_18549__$1 = state_18549;var statearr_18557_18586 = state_18549__$1;(statearr_18557_18586[2] = null);
(statearr_18557_18586[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18550 === 3))
{var inst_18547 = (state_18549[2]);var state_18549__$1 = state_18549;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18549__$1,inst_18547);
} else
{if((state_val_18550 === 12))
{var inst_18535 = (state_18549[8]);var inst_18535__$1 = (state_18549[2]);var inst_18536 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18535__$1);var state_18549__$1 = (function (){var statearr_18558 = state_18549;(statearr_18558[8] = inst_18535__$1);
return statearr_18558;
})();if(cljs.core.truth_(inst_18536))
{var statearr_18559_18587 = state_18549__$1;(statearr_18559_18587[1] = 13);
} else
{var statearr_18560_18588 = state_18549__$1;(statearr_18560_18588[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18550 === 2))
{var inst_18512 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_18513 = 0;var state_18549__$1 = (function (){var statearr_18561 = state_18549;(statearr_18561[7] = inst_18513);
(statearr_18561[9] = inst_18512);
return statearr_18561;
})();var statearr_18562_18589 = state_18549__$1;(statearr_18562_18589[2] = null);
(statearr_18562_18589[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18550 === 11))
{var inst_18513 = (state_18549[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18549,10,Object,null,9);var inst_18522 = chs__$1.call(null,inst_18513);var inst_18523 = done.call(null,inst_18513);var inst_18524 = cljs.core.async.take_BANG_.call(null,inst_18522,inst_18523);var state_18549__$1 = state_18549;var statearr_18563_18590 = state_18549__$1;(statearr_18563_18590[2] = inst_18524);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18549__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18550 === 9))
{var inst_18513 = (state_18549[7]);var inst_18526 = (state_18549[2]);var inst_18527 = (inst_18513 + 1);var inst_18513__$1 = inst_18527;var state_18549__$1 = (function (){var statearr_18564 = state_18549;(statearr_18564[10] = inst_18526);
(statearr_18564[7] = inst_18513__$1);
return statearr_18564;
})();var statearr_18565_18591 = state_18549__$1;(statearr_18565_18591[2] = null);
(statearr_18565_18591[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18550 === 5))
{var inst_18533 = (state_18549[2]);var state_18549__$1 = (function (){var statearr_18566 = state_18549;(statearr_18566[11] = inst_18533);
return statearr_18566;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18549__$1,12,dchan);
} else
{if((state_val_18550 === 14))
{var inst_18535 = (state_18549[8]);var inst_18540 = cljs.core.apply.call(null,f,inst_18535);var state_18549__$1 = state_18549;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18549__$1,16,out,inst_18540);
} else
{if((state_val_18550 === 16))
{var inst_18542 = (state_18549[2]);var state_18549__$1 = (function (){var statearr_18567 = state_18549;(statearr_18567[12] = inst_18542);
return statearr_18567;
})();var statearr_18568_18592 = state_18549__$1;(statearr_18568_18592[2] = null);
(statearr_18568_18592[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18550 === 10))
{var inst_18517 = (state_18549[2]);var inst_18518 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_18549__$1 = (function (){var statearr_18569 = state_18549;(statearr_18569[13] = inst_18517);
return statearr_18569;
})();var statearr_18570_18593 = state_18549__$1;(statearr_18570_18593[2] = inst_18518);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18549__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18550 === 8))
{var inst_18531 = (state_18549[2]);var state_18549__$1 = state_18549;var statearr_18571_18594 = state_18549__$1;(statearr_18571_18594[2] = inst_18531);
(statearr_18571_18594[1] = 5);
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
}
}
}
}
}
}
});})(c__10498__auto___18579,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__10434__auto__,c__10498__auto___18579,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_18575 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18575[0] = state_machine__10435__auto__);
(statearr_18575[1] = 1);
return statearr_18575;
});
var state_machine__10435__auto____1 = (function (state_18549){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_18549);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e18576){if((e18576 instanceof Object))
{var ex__10438__auto__ = e18576;var statearr_18577_18595 = state_18549;(statearr_18577_18595[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18549);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18576;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18596 = state_18549;
state_18549 = G__18596;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_18549){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_18549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto___18579,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__10500__auto__ = (function (){var statearr_18578 = f__10499__auto__.call(null);(statearr_18578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto___18579);
return statearr_18578;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto___18579,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10498__auto___18704 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto___18704,out){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto___18704,out){
return (function (state_18680){var state_val_18681 = (state_18680[1]);if((state_val_18681 === 7))
{var inst_18660 = (state_18680[7]);var inst_18659 = (state_18680[8]);var inst_18659__$1 = (state_18680[2]);var inst_18660__$1 = cljs.core.nth.call(null,inst_18659__$1,0,null);var inst_18661 = cljs.core.nth.call(null,inst_18659__$1,1,null);var inst_18662 = (inst_18660__$1 == null);var state_18680__$1 = (function (){var statearr_18682 = state_18680;(statearr_18682[7] = inst_18660__$1);
(statearr_18682[9] = inst_18661);
(statearr_18682[8] = inst_18659__$1);
return statearr_18682;
})();if(cljs.core.truth_(inst_18662))
{var statearr_18683_18705 = state_18680__$1;(statearr_18683_18705[1] = 8);
} else
{var statearr_18684_18706 = state_18680__$1;(statearr_18684_18706[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18681 === 1))
{var inst_18651 = cljs.core.vec.call(null,chs);var inst_18652 = inst_18651;var state_18680__$1 = (function (){var statearr_18685 = state_18680;(statearr_18685[10] = inst_18652);
return statearr_18685;
})();var statearr_18686_18707 = state_18680__$1;(statearr_18686_18707[2] = null);
(statearr_18686_18707[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18681 === 4))
{var inst_18652 = (state_18680[10]);var state_18680__$1 = state_18680;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18680__$1,7,inst_18652);
} else
{if((state_val_18681 === 6))
{var inst_18676 = (state_18680[2]);var state_18680__$1 = state_18680;var statearr_18687_18708 = state_18680__$1;(statearr_18687_18708[2] = inst_18676);
(statearr_18687_18708[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18681 === 3))
{var inst_18678 = (state_18680[2]);var state_18680__$1 = state_18680;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18680__$1,inst_18678);
} else
{if((state_val_18681 === 2))
{var inst_18652 = (state_18680[10]);var inst_18654 = cljs.core.count.call(null,inst_18652);var inst_18655 = (inst_18654 > 0);var state_18680__$1 = state_18680;if(cljs.core.truth_(inst_18655))
{var statearr_18689_18709 = state_18680__$1;(statearr_18689_18709[1] = 4);
} else
{var statearr_18690_18710 = state_18680__$1;(statearr_18690_18710[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18681 === 11))
{var inst_18652 = (state_18680[10]);var inst_18669 = (state_18680[2]);var tmp18688 = inst_18652;var inst_18652__$1 = tmp18688;var state_18680__$1 = (function (){var statearr_18691 = state_18680;(statearr_18691[10] = inst_18652__$1);
(statearr_18691[11] = inst_18669);
return statearr_18691;
})();var statearr_18692_18711 = state_18680__$1;(statearr_18692_18711[2] = null);
(statearr_18692_18711[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18681 === 9))
{var inst_18660 = (state_18680[7]);var state_18680__$1 = state_18680;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18680__$1,11,out,inst_18660);
} else
{if((state_val_18681 === 5))
{var inst_18674 = cljs.core.async.close_BANG_.call(null,out);var state_18680__$1 = state_18680;var statearr_18693_18712 = state_18680__$1;(statearr_18693_18712[2] = inst_18674);
(statearr_18693_18712[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18681 === 10))
{var inst_18672 = (state_18680[2]);var state_18680__$1 = state_18680;var statearr_18694_18713 = state_18680__$1;(statearr_18694_18713[2] = inst_18672);
(statearr_18694_18713[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18681 === 8))
{var inst_18652 = (state_18680[10]);var inst_18660 = (state_18680[7]);var inst_18661 = (state_18680[9]);var inst_18659 = (state_18680[8]);var inst_18664 = (function (){var c = inst_18661;var v = inst_18660;var vec__18657 = inst_18659;var cs = inst_18652;return ((function (c,v,vec__18657,cs,inst_18652,inst_18660,inst_18661,inst_18659,state_val_18681,c__10498__auto___18704,out){
return (function (p1__18597_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__18597_SHARP_);
});
;})(c,v,vec__18657,cs,inst_18652,inst_18660,inst_18661,inst_18659,state_val_18681,c__10498__auto___18704,out))
})();var inst_18665 = cljs.core.filterv.call(null,inst_18664,inst_18652);var inst_18652__$1 = inst_18665;var state_18680__$1 = (function (){var statearr_18695 = state_18680;(statearr_18695[10] = inst_18652__$1);
return statearr_18695;
})();var statearr_18696_18714 = state_18680__$1;(statearr_18696_18714[2] = null);
(statearr_18696_18714[1] = 2);
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
}
});})(c__10498__auto___18704,out))
;return ((function (switch__10434__auto__,c__10498__auto___18704,out){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_18700 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18700[0] = state_machine__10435__auto__);
(statearr_18700[1] = 1);
return statearr_18700;
});
var state_machine__10435__auto____1 = (function (state_18680){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_18680);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e18701){if((e18701 instanceof Object))
{var ex__10438__auto__ = e18701;var statearr_18702_18715 = state_18680;(statearr_18702_18715[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18680);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18701;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18716 = state_18680;
state_18680 = G__18716;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_18680){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_18680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto___18704,out))
})();var state__10500__auto__ = (function (){var statearr_18703 = f__10499__auto__.call(null);(statearr_18703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto___18704);
return statearr_18703;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto___18704,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10498__auto___18809 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto___18809,out){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto___18809,out){
return (function (state_18786){var state_val_18787 = (state_18786[1]);if((state_val_18787 === 7))
{var inst_18768 = (state_18786[7]);var inst_18768__$1 = (state_18786[2]);var inst_18769 = (inst_18768__$1 == null);var inst_18770 = cljs.core.not.call(null,inst_18769);var state_18786__$1 = (function (){var statearr_18788 = state_18786;(statearr_18788[7] = inst_18768__$1);
return statearr_18788;
})();if(inst_18770)
{var statearr_18789_18810 = state_18786__$1;(statearr_18789_18810[1] = 8);
} else
{var statearr_18790_18811 = state_18786__$1;(statearr_18790_18811[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18787 === 1))
{var inst_18763 = 0;var state_18786__$1 = (function (){var statearr_18791 = state_18786;(statearr_18791[8] = inst_18763);
return statearr_18791;
})();var statearr_18792_18812 = state_18786__$1;(statearr_18792_18812[2] = null);
(statearr_18792_18812[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18787 === 4))
{var state_18786__$1 = state_18786;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18786__$1,7,ch);
} else
{if((state_val_18787 === 6))
{var inst_18781 = (state_18786[2]);var state_18786__$1 = state_18786;var statearr_18793_18813 = state_18786__$1;(statearr_18793_18813[2] = inst_18781);
(statearr_18793_18813[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18787 === 3))
{var inst_18783 = (state_18786[2]);var inst_18784 = cljs.core.async.close_BANG_.call(null,out);var state_18786__$1 = (function (){var statearr_18794 = state_18786;(statearr_18794[9] = inst_18783);
return statearr_18794;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18786__$1,inst_18784);
} else
{if((state_val_18787 === 2))
{var inst_18763 = (state_18786[8]);var inst_18765 = (inst_18763 < n);var state_18786__$1 = state_18786;if(cljs.core.truth_(inst_18765))
{var statearr_18795_18814 = state_18786__$1;(statearr_18795_18814[1] = 4);
} else
{var statearr_18796_18815 = state_18786__$1;(statearr_18796_18815[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18787 === 11))
{var inst_18763 = (state_18786[8]);var inst_18773 = (state_18786[2]);var inst_18774 = (inst_18763 + 1);var inst_18763__$1 = inst_18774;var state_18786__$1 = (function (){var statearr_18797 = state_18786;(statearr_18797[8] = inst_18763__$1);
(statearr_18797[10] = inst_18773);
return statearr_18797;
})();var statearr_18798_18816 = state_18786__$1;(statearr_18798_18816[2] = null);
(statearr_18798_18816[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18787 === 9))
{var state_18786__$1 = state_18786;var statearr_18799_18817 = state_18786__$1;(statearr_18799_18817[2] = null);
(statearr_18799_18817[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18787 === 5))
{var state_18786__$1 = state_18786;var statearr_18800_18818 = state_18786__$1;(statearr_18800_18818[2] = null);
(statearr_18800_18818[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18787 === 10))
{var inst_18778 = (state_18786[2]);var state_18786__$1 = state_18786;var statearr_18801_18819 = state_18786__$1;(statearr_18801_18819[2] = inst_18778);
(statearr_18801_18819[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18787 === 8))
{var inst_18768 = (state_18786[7]);var state_18786__$1 = state_18786;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18786__$1,11,out,inst_18768);
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
});})(c__10498__auto___18809,out))
;return ((function (switch__10434__auto__,c__10498__auto___18809,out){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_18805 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_18805[0] = state_machine__10435__auto__);
(statearr_18805[1] = 1);
return statearr_18805;
});
var state_machine__10435__auto____1 = (function (state_18786){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_18786);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e18806){if((e18806 instanceof Object))
{var ex__10438__auto__ = e18806;var statearr_18807_18820 = state_18786;(statearr_18807_18820[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18786);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18806;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18821 = state_18786;
state_18786 = G__18821;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_18786){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_18786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto___18809,out))
})();var state__10500__auto__ = (function (){var statearr_18808 = f__10499__auto__.call(null);(statearr_18808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto___18809);
return statearr_18808;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto___18809,out))
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
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10498__auto___18918 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto___18918,out){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto___18918,out){
return (function (state_18893){var state_val_18894 = (state_18893[1]);if((state_val_18894 === 7))
{var inst_18888 = (state_18893[2]);var state_18893__$1 = state_18893;var statearr_18895_18919 = state_18893__$1;(statearr_18895_18919[2] = inst_18888);
(statearr_18895_18919[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18894 === 1))
{var inst_18870 = null;var state_18893__$1 = (function (){var statearr_18896 = state_18893;(statearr_18896[7] = inst_18870);
return statearr_18896;
})();var statearr_18897_18920 = state_18893__$1;(statearr_18897_18920[2] = null);
(statearr_18897_18920[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18894 === 4))
{var inst_18873 = (state_18893[8]);var inst_18873__$1 = (state_18893[2]);var inst_18874 = (inst_18873__$1 == null);var inst_18875 = cljs.core.not.call(null,inst_18874);var state_18893__$1 = (function (){var statearr_18898 = state_18893;(statearr_18898[8] = inst_18873__$1);
return statearr_18898;
})();if(inst_18875)
{var statearr_18899_18921 = state_18893__$1;(statearr_18899_18921[1] = 5);
} else
{var statearr_18900_18922 = state_18893__$1;(statearr_18900_18922[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18894 === 6))
{var state_18893__$1 = state_18893;var statearr_18901_18923 = state_18893__$1;(statearr_18901_18923[2] = null);
(statearr_18901_18923[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18894 === 3))
{var inst_18890 = (state_18893[2]);var inst_18891 = cljs.core.async.close_BANG_.call(null,out);var state_18893__$1 = (function (){var statearr_18902 = state_18893;(statearr_18902[9] = inst_18890);
return statearr_18902;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18893__$1,inst_18891);
} else
{if((state_val_18894 === 2))
{var state_18893__$1 = state_18893;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18893__$1,4,ch);
} else
{if((state_val_18894 === 11))
{var inst_18873 = (state_18893[8]);var inst_18882 = (state_18893[2]);var inst_18870 = inst_18873;var state_18893__$1 = (function (){var statearr_18903 = state_18893;(statearr_18903[7] = inst_18870);
(statearr_18903[10] = inst_18882);
return statearr_18903;
})();var statearr_18904_18924 = state_18893__$1;(statearr_18904_18924[2] = null);
(statearr_18904_18924[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18894 === 9))
{var inst_18873 = (state_18893[8]);var state_18893__$1 = state_18893;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18893__$1,11,out,inst_18873);
} else
{if((state_val_18894 === 5))
{var inst_18870 = (state_18893[7]);var inst_18873 = (state_18893[8]);var inst_18877 = cljs.core._EQ_.call(null,inst_18873,inst_18870);var state_18893__$1 = state_18893;if(inst_18877)
{var statearr_18906_18925 = state_18893__$1;(statearr_18906_18925[1] = 8);
} else
{var statearr_18907_18926 = state_18893__$1;(statearr_18907_18926[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18894 === 10))
{var inst_18885 = (state_18893[2]);var state_18893__$1 = state_18893;var statearr_18908_18927 = state_18893__$1;(statearr_18908_18927[2] = inst_18885);
(statearr_18908_18927[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18894 === 8))
{var inst_18870 = (state_18893[7]);var tmp18905 = inst_18870;var inst_18870__$1 = tmp18905;var state_18893__$1 = (function (){var statearr_18909 = state_18893;(statearr_18909[7] = inst_18870__$1);
return statearr_18909;
})();var statearr_18910_18928 = state_18893__$1;(statearr_18910_18928[2] = null);
(statearr_18910_18928[1] = 2);
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
}
});})(c__10498__auto___18918,out))
;return ((function (switch__10434__auto__,c__10498__auto___18918,out){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_18914 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_18914[0] = state_machine__10435__auto__);
(statearr_18914[1] = 1);
return statearr_18914;
});
var state_machine__10435__auto____1 = (function (state_18893){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_18893);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e18915){if((e18915 instanceof Object))
{var ex__10438__auto__ = e18915;var statearr_18916_18929 = state_18893;(statearr_18916_18929[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18893);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18915;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18930 = state_18893;
state_18893 = G__18930;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_18893){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_18893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto___18918,out))
})();var state__10500__auto__ = (function (){var statearr_18917 = f__10499__auto__.call(null);(statearr_18917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto___18918);
return statearr_18917;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto___18918,out))
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
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10498__auto___19065 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto___19065,out){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto___19065,out){
return (function (state_19035){var state_val_19036 = (state_19035[1]);if((state_val_19036 === 7))
{var inst_19031 = (state_19035[2]);var state_19035__$1 = state_19035;var statearr_19037_19066 = state_19035__$1;(statearr_19037_19066[2] = inst_19031);
(statearr_19037_19066[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19036 === 1))
{var inst_18998 = (new Array(n));var inst_18999 = inst_18998;var inst_19000 = 0;var state_19035__$1 = (function (){var statearr_19038 = state_19035;(statearr_19038[7] = inst_19000);
(statearr_19038[8] = inst_18999);
return statearr_19038;
})();var statearr_19039_19067 = state_19035__$1;(statearr_19039_19067[2] = null);
(statearr_19039_19067[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19036 === 4))
{var inst_19003 = (state_19035[9]);var inst_19003__$1 = (state_19035[2]);var inst_19004 = (inst_19003__$1 == null);var inst_19005 = cljs.core.not.call(null,inst_19004);var state_19035__$1 = (function (){var statearr_19040 = state_19035;(statearr_19040[9] = inst_19003__$1);
return statearr_19040;
})();if(inst_19005)
{var statearr_19041_19068 = state_19035__$1;(statearr_19041_19068[1] = 5);
} else
{var statearr_19042_19069 = state_19035__$1;(statearr_19042_19069[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19036 === 15))
{var inst_19025 = (state_19035[2]);var state_19035__$1 = state_19035;var statearr_19043_19070 = state_19035__$1;(statearr_19043_19070[2] = inst_19025);
(statearr_19043_19070[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19036 === 13))
{var state_19035__$1 = state_19035;var statearr_19044_19071 = state_19035__$1;(statearr_19044_19071[2] = null);
(statearr_19044_19071[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19036 === 6))
{var inst_19000 = (state_19035[7]);var inst_19021 = (inst_19000 > 0);var state_19035__$1 = state_19035;if(cljs.core.truth_(inst_19021))
{var statearr_19045_19072 = state_19035__$1;(statearr_19045_19072[1] = 12);
} else
{var statearr_19046_19073 = state_19035__$1;(statearr_19046_19073[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19036 === 3))
{var inst_19033 = (state_19035[2]);var state_19035__$1 = state_19035;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19035__$1,inst_19033);
} else
{if((state_val_19036 === 12))
{var inst_18999 = (state_19035[8]);var inst_19023 = cljs.core.vec.call(null,inst_18999);var state_19035__$1 = state_19035;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19035__$1,15,out,inst_19023);
} else
{if((state_val_19036 === 2))
{var state_19035__$1 = state_19035;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19035__$1,4,ch);
} else
{if((state_val_19036 === 11))
{var inst_19015 = (state_19035[2]);var inst_19016 = (new Array(n));var inst_18999 = inst_19016;var inst_19000 = 0;var state_19035__$1 = (function (){var statearr_19047 = state_19035;(statearr_19047[7] = inst_19000);
(statearr_19047[8] = inst_18999);
(statearr_19047[10] = inst_19015);
return statearr_19047;
})();var statearr_19048_19074 = state_19035__$1;(statearr_19048_19074[2] = null);
(statearr_19048_19074[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19036 === 9))
{var inst_18999 = (state_19035[8]);var inst_19013 = cljs.core.vec.call(null,inst_18999);var state_19035__$1 = state_19035;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19035__$1,11,out,inst_19013);
} else
{if((state_val_19036 === 5))
{var inst_19003 = (state_19035[9]);var inst_19000 = (state_19035[7]);var inst_18999 = (state_19035[8]);var inst_19008 = (state_19035[11]);var inst_19007 = (inst_18999[inst_19000] = inst_19003);var inst_19008__$1 = (inst_19000 + 1);var inst_19009 = (inst_19008__$1 < n);var state_19035__$1 = (function (){var statearr_19049 = state_19035;(statearr_19049[12] = inst_19007);
(statearr_19049[11] = inst_19008__$1);
return statearr_19049;
})();if(cljs.core.truth_(inst_19009))
{var statearr_19050_19075 = state_19035__$1;(statearr_19050_19075[1] = 8);
} else
{var statearr_19051_19076 = state_19035__$1;(statearr_19051_19076[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19036 === 14))
{var inst_19028 = (state_19035[2]);var inst_19029 = cljs.core.async.close_BANG_.call(null,out);var state_19035__$1 = (function (){var statearr_19053 = state_19035;(statearr_19053[13] = inst_19028);
return statearr_19053;
})();var statearr_19054_19077 = state_19035__$1;(statearr_19054_19077[2] = inst_19029);
(statearr_19054_19077[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19036 === 10))
{var inst_19019 = (state_19035[2]);var state_19035__$1 = state_19035;var statearr_19055_19078 = state_19035__$1;(statearr_19055_19078[2] = inst_19019);
(statearr_19055_19078[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19036 === 8))
{var inst_18999 = (state_19035[8]);var inst_19008 = (state_19035[11]);var tmp19052 = inst_18999;var inst_18999__$1 = tmp19052;var inst_19000 = inst_19008;var state_19035__$1 = (function (){var statearr_19056 = state_19035;(statearr_19056[7] = inst_19000);
(statearr_19056[8] = inst_18999__$1);
return statearr_19056;
})();var statearr_19057_19079 = state_19035__$1;(statearr_19057_19079[2] = null);
(statearr_19057_19079[1] = 2);
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
}
}
}
}
}
});})(c__10498__auto___19065,out))
;return ((function (switch__10434__auto__,c__10498__auto___19065,out){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_19061 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19061[0] = state_machine__10435__auto__);
(statearr_19061[1] = 1);
return statearr_19061;
});
var state_machine__10435__auto____1 = (function (state_19035){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_19035);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e19062){if((e19062 instanceof Object))
{var ex__10438__auto__ = e19062;var statearr_19063_19080 = state_19035;(statearr_19063_19080[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19035);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19062;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19081 = state_19035;
state_19035 = G__19081;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_19035){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_19035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto___19065,out))
})();var state__10500__auto__ = (function (){var statearr_19064 = f__10499__auto__.call(null);(statearr_19064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto___19065);
return statearr_19064;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto___19065,out))
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
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10498__auto___19224 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto___19224,out){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto___19224,out){
return (function (state_19194){var state_val_19195 = (state_19194[1]);if((state_val_19195 === 7))
{var inst_19190 = (state_19194[2]);var state_19194__$1 = state_19194;var statearr_19196_19225 = state_19194__$1;(statearr_19196_19225[2] = inst_19190);
(statearr_19196_19225[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19195 === 1))
{var inst_19153 = [];var inst_19154 = inst_19153;var inst_19155 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_19194__$1 = (function (){var statearr_19197 = state_19194;(statearr_19197[7] = inst_19154);
(statearr_19197[8] = inst_19155);
return statearr_19197;
})();var statearr_19198_19226 = state_19194__$1;(statearr_19198_19226[2] = null);
(statearr_19198_19226[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19195 === 4))
{var inst_19158 = (state_19194[9]);var inst_19158__$1 = (state_19194[2]);var inst_19159 = (inst_19158__$1 == null);var inst_19160 = cljs.core.not.call(null,inst_19159);var state_19194__$1 = (function (){var statearr_19199 = state_19194;(statearr_19199[9] = inst_19158__$1);
return statearr_19199;
})();if(inst_19160)
{var statearr_19200_19227 = state_19194__$1;(statearr_19200_19227[1] = 5);
} else
{var statearr_19201_19228 = state_19194__$1;(statearr_19201_19228[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19195 === 15))
{var inst_19184 = (state_19194[2]);var state_19194__$1 = state_19194;var statearr_19202_19229 = state_19194__$1;(statearr_19202_19229[2] = inst_19184);
(statearr_19202_19229[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19195 === 13))
{var state_19194__$1 = state_19194;var statearr_19203_19230 = state_19194__$1;(statearr_19203_19230[2] = null);
(statearr_19203_19230[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19195 === 6))
{var inst_19154 = (state_19194[7]);var inst_19179 = inst_19154.length;var inst_19180 = (inst_19179 > 0);var state_19194__$1 = state_19194;if(cljs.core.truth_(inst_19180))
{var statearr_19204_19231 = state_19194__$1;(statearr_19204_19231[1] = 12);
} else
{var statearr_19205_19232 = state_19194__$1;(statearr_19205_19232[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19195 === 3))
{var inst_19192 = (state_19194[2]);var state_19194__$1 = state_19194;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19194__$1,inst_19192);
} else
{if((state_val_19195 === 12))
{var inst_19154 = (state_19194[7]);var inst_19182 = cljs.core.vec.call(null,inst_19154);var state_19194__$1 = state_19194;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19194__$1,15,out,inst_19182);
} else
{if((state_val_19195 === 2))
{var state_19194__$1 = state_19194;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19194__$1,4,ch);
} else
{if((state_val_19195 === 11))
{var inst_19162 = (state_19194[10]);var inst_19158 = (state_19194[9]);var inst_19172 = (state_19194[2]);var inst_19173 = [];var inst_19174 = inst_19173.push(inst_19158);var inst_19154 = inst_19173;var inst_19155 = inst_19162;var state_19194__$1 = (function (){var statearr_19206 = state_19194;(statearr_19206[7] = inst_19154);
(statearr_19206[8] = inst_19155);
(statearr_19206[11] = inst_19174);
(statearr_19206[12] = inst_19172);
return statearr_19206;
})();var statearr_19207_19233 = state_19194__$1;(statearr_19207_19233[2] = null);
(statearr_19207_19233[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19195 === 9))
{var inst_19154 = (state_19194[7]);var inst_19170 = cljs.core.vec.call(null,inst_19154);var state_19194__$1 = state_19194;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19194__$1,11,out,inst_19170);
} else
{if((state_val_19195 === 5))
{var inst_19162 = (state_19194[10]);var inst_19155 = (state_19194[8]);var inst_19158 = (state_19194[9]);var inst_19162__$1 = f.call(null,inst_19158);var inst_19163 = cljs.core._EQ_.call(null,inst_19162__$1,inst_19155);var inst_19164 = cljs.core.keyword_identical_QMARK_.call(null,inst_19155,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_19165 = (inst_19163) || (inst_19164);var state_19194__$1 = (function (){var statearr_19208 = state_19194;(statearr_19208[10] = inst_19162__$1);
return statearr_19208;
})();if(cljs.core.truth_(inst_19165))
{var statearr_19209_19234 = state_19194__$1;(statearr_19209_19234[1] = 8);
} else
{var statearr_19210_19235 = state_19194__$1;(statearr_19210_19235[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19195 === 14))
{var inst_19187 = (state_19194[2]);var inst_19188 = cljs.core.async.close_BANG_.call(null,out);var state_19194__$1 = (function (){var statearr_19212 = state_19194;(statearr_19212[13] = inst_19187);
return statearr_19212;
})();var statearr_19213_19236 = state_19194__$1;(statearr_19213_19236[2] = inst_19188);
(statearr_19213_19236[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19195 === 10))
{var inst_19177 = (state_19194[2]);var state_19194__$1 = state_19194;var statearr_19214_19237 = state_19194__$1;(statearr_19214_19237[2] = inst_19177);
(statearr_19214_19237[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19195 === 8))
{var inst_19162 = (state_19194[10]);var inst_19154 = (state_19194[7]);var inst_19158 = (state_19194[9]);var inst_19167 = inst_19154.push(inst_19158);var tmp19211 = inst_19154;var inst_19154__$1 = tmp19211;var inst_19155 = inst_19162;var state_19194__$1 = (function (){var statearr_19215 = state_19194;(statearr_19215[14] = inst_19167);
(statearr_19215[7] = inst_19154__$1);
(statearr_19215[8] = inst_19155);
return statearr_19215;
})();var statearr_19216_19238 = state_19194__$1;(statearr_19216_19238[2] = null);
(statearr_19216_19238[1] = 2);
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
}
}
}
}
}
});})(c__10498__auto___19224,out))
;return ((function (switch__10434__auto__,c__10498__auto___19224,out){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_19220 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19220[0] = state_machine__10435__auto__);
(statearr_19220[1] = 1);
return statearr_19220;
});
var state_machine__10435__auto____1 = (function (state_19194){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_19194);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e19221){if((e19221 instanceof Object))
{var ex__10438__auto__ = e19221;var statearr_19222_19239 = state_19194;(statearr_19222_19239[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19194);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19221;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19240 = state_19194;
state_19194 = G__19240;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_19194){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_19194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto___19224,out))
})();var state__10500__auto__ = (function (){var statearr_19223 = f__10499__auto__.call(null);(statearr_19223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto___19224);
return statearr_19223;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto___19224,out))
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
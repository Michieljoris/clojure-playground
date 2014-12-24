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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t18615 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18615 = (function (f,fn_handler,meta18616){
this.f = f;
this.fn_handler = fn_handler;
this.meta18616 = meta18616;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18615.cljs$lang$type = true;
cljs.core.async.t18615.cljs$lang$ctorStr = "cljs.core.async/t18615";
cljs.core.async.t18615.cljs$lang$ctorPrWriter = (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t18615");
});
cljs.core.async.t18615.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18615.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t18615.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t18615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18617){var self__ = this;
var _18617__$1 = this;return self__.meta18616;
});
cljs.core.async.t18615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18617,meta18616__$1){var self__ = this;
var _18617__$1 = this;return (new cljs.core.async.t18615(self__.f,self__.fn_handler,meta18616__$1));
});
cljs.core.async.__GT_t18615 = (function __GT_t18615(f__$1,fn_handler__$1,meta18616){return (new cljs.core.async.t18615(f__$1,fn_handler__$1,meta18616));
});
}
return (new cljs.core.async.t18615(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__18619 = buff;if(G__18619)
{var bit__12159__auto__ = null;if(cljs.core.truth_((function (){var or__11495__auto__ = bit__12159__auto__;if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return G__18619.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__18619.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18619);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18619);
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
{var val_18620 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_18620);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_18620,ret){
return (function (){return fn1.call(null,val_18620);
});})(val_18620,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__12365__auto___18621 = n;var x_18622 = (0);while(true){
if((x_18622 < n__12365__auto___18621))
{(a[x_18622] = (0));
{
var G__18623 = (x_18622 + (1));
x_18622 = G__18623;
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
var G__18624 = (i + (1));
i = G__18624;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t18628 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18628 = (function (flag,alt_flag,meta18629){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta18629 = meta18629;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18628.cljs$lang$type = true;
cljs.core.async.t18628.cljs$lang$ctorStr = "cljs.core.async/t18628";
cljs.core.async.t18628.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t18628");
});})(flag))
;
cljs.core.async.t18628.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18628.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t18628.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t18628.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18630){var self__ = this;
var _18630__$1 = this;return self__.meta18629;
});})(flag))
;
cljs.core.async.t18628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18630,meta18629__$1){var self__ = this;
var _18630__$1 = this;return (new cljs.core.async.t18628(self__.flag,self__.alt_flag,meta18629__$1));
});})(flag))
;
cljs.core.async.__GT_t18628 = ((function (flag){
return (function __GT_t18628(flag__$1,alt_flag__$1,meta18629){return (new cljs.core.async.t18628(flag__$1,alt_flag__$1,meta18629));
});})(flag))
;
}
return (new cljs.core.async.t18628(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t18634 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18634 = (function (cb,flag,alt_handler,meta18635){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta18635 = meta18635;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18634.cljs$lang$type = true;
cljs.core.async.t18634.cljs$lang$ctorStr = "cljs.core.async/t18634";
cljs.core.async.t18634.cljs$lang$ctorPrWriter = (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t18634");
});
cljs.core.async.t18634.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18634.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t18634.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t18634.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18636){var self__ = this;
var _18636__$1 = this;return self__.meta18635;
});
cljs.core.async.t18634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18636,meta18635__$1){var self__ = this;
var _18636__$1 = this;return (new cljs.core.async.t18634(self__.cb,self__.flag,self__.alt_handler,meta18635__$1));
});
cljs.core.async.__GT_t18634 = (function __GT_t18634(cb__$1,flag__$1,alt_handler__$1,meta18635){return (new cljs.core.async.t18634(cb__$1,flag__$1,alt_handler__$1,meta18635));
});
}
return (new cljs.core.async.t18634(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18637_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18637_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18638_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18638_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__11495__auto__ = wport;if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__18639 = (i + (1));
i = G__18639;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__11495__auto__ = ret;if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__11483__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__11483__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__11483__auto__;
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
var alts_BANG___delegate = function (ports,p__18640){var map__18642 = p__18640;var map__18642__$1 = ((cljs.core.seq_QMARK_.call(null,map__18642))?cljs.core.apply.call(null,cljs.core.hash_map,map__18642):map__18642);var opts = map__18642__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__18640 = null;if (arguments.length > 1) {
  p__18640 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__18640);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__18643){
var ports = cljs.core.first(arglist__18643);
var p__18640 = cljs.core.rest(arglist__18643);
return alts_BANG___delegate(ports,p__18640);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__14001__auto___18738 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14001__auto___18738){
return (function (){var f__14002__auto__ = (function (){var switch__13945__auto__ = ((function (c__14001__auto___18738){
return (function (state_18714){var state_val_18715 = (state_18714[(1)]);if((state_val_18715 === (7)))
{var inst_18710 = (state_18714[(2)]);var state_18714__$1 = state_18714;var statearr_18716_18739 = state_18714__$1;(statearr_18716_18739[(2)] = inst_18710);
(statearr_18716_18739[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18715 === (1)))
{var state_18714__$1 = state_18714;var statearr_18717_18740 = state_18714__$1;(statearr_18717_18740[(2)] = null);
(statearr_18717_18740[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18715 === (4)))
{var inst_18693 = (state_18714[(7)]);var inst_18693__$1 = (state_18714[(2)]);var inst_18694 = (inst_18693__$1 == null);var state_18714__$1 = (function (){var statearr_18718 = state_18714;(statearr_18718[(7)] = inst_18693__$1);
return statearr_18718;
})();if(cljs.core.truth_(inst_18694))
{var statearr_18719_18741 = state_18714__$1;(statearr_18719_18741[(1)] = (5));
} else
{var statearr_18720_18742 = state_18714__$1;(statearr_18720_18742[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18715 === (13)))
{var state_18714__$1 = state_18714;var statearr_18721_18743 = state_18714__$1;(statearr_18721_18743[(2)] = null);
(statearr_18721_18743[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18715 === (6)))
{var inst_18693 = (state_18714[(7)]);var state_18714__$1 = state_18714;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18714__$1,(11),to,inst_18693);
} else
{if((state_val_18715 === (3)))
{var inst_18712 = (state_18714[(2)]);var state_18714__$1 = state_18714;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18714__$1,inst_18712);
} else
{if((state_val_18715 === (12)))
{var state_18714__$1 = state_18714;var statearr_18722_18744 = state_18714__$1;(statearr_18722_18744[(2)] = null);
(statearr_18722_18744[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18715 === (2)))
{var state_18714__$1 = state_18714;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18714__$1,(4),from);
} else
{if((state_val_18715 === (11)))
{var inst_18703 = (state_18714[(2)]);var state_18714__$1 = state_18714;if(cljs.core.truth_(inst_18703))
{var statearr_18723_18745 = state_18714__$1;(statearr_18723_18745[(1)] = (12));
} else
{var statearr_18724_18746 = state_18714__$1;(statearr_18724_18746[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18715 === (9)))
{var state_18714__$1 = state_18714;var statearr_18725_18747 = state_18714__$1;(statearr_18725_18747[(2)] = null);
(statearr_18725_18747[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18715 === (5)))
{var state_18714__$1 = state_18714;if(cljs.core.truth_(close_QMARK_))
{var statearr_18726_18748 = state_18714__$1;(statearr_18726_18748[(1)] = (8));
} else
{var statearr_18727_18749 = state_18714__$1;(statearr_18727_18749[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18715 === (14)))
{var inst_18708 = (state_18714[(2)]);var state_18714__$1 = state_18714;var statearr_18728_18750 = state_18714__$1;(statearr_18728_18750[(2)] = inst_18708);
(statearr_18728_18750[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18715 === (10)))
{var inst_18700 = (state_18714[(2)]);var state_18714__$1 = state_18714;var statearr_18729_18751 = state_18714__$1;(statearr_18729_18751[(2)] = inst_18700);
(statearr_18729_18751[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18715 === (8)))
{var inst_18697 = cljs.core.async.close_BANG_.call(null,to);var state_18714__$1 = state_18714;var statearr_18730_18752 = state_18714__$1;(statearr_18730_18752[(2)] = inst_18697);
(statearr_18730_18752[(1)] = (10));
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
});})(c__14001__auto___18738))
;return ((function (switch__13945__auto__,c__14001__auto___18738){
return (function() {
var state_machine__13946__auto__ = null;
var state_machine__13946__auto____0 = (function (){var statearr_18734 = [null,null,null,null,null,null,null,null];(statearr_18734[(0)] = state_machine__13946__auto__);
(statearr_18734[(1)] = (1));
return statearr_18734;
});
var state_machine__13946__auto____1 = (function (state_18714){while(true){
var ret_value__13947__auto__ = (function (){try{while(true){
var result__13948__auto__ = switch__13945__auto__.call(null,state_18714);if(cljs.core.keyword_identical_QMARK_.call(null,result__13948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13948__auto__;
}
break;
}
}catch (e18735){if((e18735 instanceof Object))
{var ex__13949__auto__ = e18735;var statearr_18736_18753 = state_18714;(statearr_18736_18753[(5)] = ex__13949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18714);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18735;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18754 = state_18714;
state_18714 = G__18754;
continue;
}
} else
{return ret_value__13947__auto__;
}
break;
}
});
state_machine__13946__auto__ = function(state_18714){
switch(arguments.length){
case 0:
return state_machine__13946__auto____0.call(this);
case 1:
return state_machine__13946__auto____1.call(this,state_18714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13946__auto____0;
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13946__auto____1;
return state_machine__13946__auto__;
})()
;})(switch__13945__auto__,c__14001__auto___18738))
})();var state__14003__auto__ = (function (){var statearr_18737 = f__14002__auto__.call(null);(statearr_18737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14001__auto___18738);
return statearr_18737;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14003__auto__);
});})(c__14001__auto___18738))
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
return (function (p__18938){var vec__18939 = p__18938;var v = cljs.core.nth.call(null,vec__18939,(0),null);var p = cljs.core.nth.call(null,vec__18939,(1),null);var job = vec__18939;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__14001__auto___19121 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14001__auto___19121,res,vec__18939,v,p,job,jobs,results){
return (function (){var f__14002__auto__ = (function (){var switch__13945__auto__ = ((function (c__14001__auto___19121,res,vec__18939,v,p,job,jobs,results){
return (function (state_18944){var state_val_18945 = (state_18944[(1)]);if((state_val_18945 === (2)))
{var inst_18941 = (state_18944[(2)]);var inst_18942 = cljs.core.async.close_BANG_.call(null,res);var state_18944__$1 = (function (){var statearr_18946 = state_18944;(statearr_18946[(7)] = inst_18941);
return statearr_18946;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18944__$1,inst_18942);
} else
{if((state_val_18945 === (1)))
{var state_18944__$1 = state_18944;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18944__$1,(2),res,v);
} else
{return null;
}
}
});})(c__14001__auto___19121,res,vec__18939,v,p,job,jobs,results))
;return ((function (switch__13945__auto__,c__14001__auto___19121,res,vec__18939,v,p,job,jobs,results){
return (function() {
var state_machine__13946__auto__ = null;
var state_machine__13946__auto____0 = (function (){var statearr_18950 = [null,null,null,null,null,null,null,null];(statearr_18950[(0)] = state_machine__13946__auto__);
(statearr_18950[(1)] = (1));
return statearr_18950;
});
var state_machine__13946__auto____1 = (function (state_18944){while(true){
var ret_value__13947__auto__ = (function (){try{while(true){
var result__13948__auto__ = switch__13945__auto__.call(null,state_18944);if(cljs.core.keyword_identical_QMARK_.call(null,result__13948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13948__auto__;
}
break;
}
}catch (e18951){if((e18951 instanceof Object))
{var ex__13949__auto__ = e18951;var statearr_18952_19122 = state_18944;(statearr_18952_19122[(5)] = ex__13949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18944);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18951;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19123 = state_18944;
state_18944 = G__19123;
continue;
}
} else
{return ret_value__13947__auto__;
}
break;
}
});
state_machine__13946__auto__ = function(state_18944){
switch(arguments.length){
case 0:
return state_machine__13946__auto____0.call(this);
case 1:
return state_machine__13946__auto____1.call(this,state_18944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13946__auto____0;
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13946__auto____1;
return state_machine__13946__auto__;
})()
;})(switch__13945__auto__,c__14001__auto___19121,res,vec__18939,v,p,job,jobs,results))
})();var state__14003__auto__ = (function (){var statearr_18953 = f__14002__auto__.call(null);(statearr_18953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14001__auto___19121);
return statearr_18953;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14003__auto__);
});})(c__14001__auto___19121,res,vec__18939,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__18954){var vec__18955 = p__18954;var v = cljs.core.nth.call(null,vec__18955,(0),null);var p = cljs.core.nth.call(null,vec__18955,(1),null);var job = vec__18955;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__12365__auto___19124 = n;var __19125 = (0);while(true){
if((__19125 < n__12365__auto___19124))
{var G__18956_19126 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__18956_19126) {
case "async":
var c__14001__auto___19128 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__19125,c__14001__auto___19128,G__18956_19126,n__12365__auto___19124,jobs,results,process,async){
return (function (){var f__14002__auto__ = (function (){var switch__13945__auto__ = ((function (__19125,c__14001__auto___19128,G__18956_19126,n__12365__auto___19124,jobs,results,process,async){
return (function (state_18969){var state_val_18970 = (state_18969[(1)]);if((state_val_18970 === (7)))
{var inst_18965 = (state_18969[(2)]);var state_18969__$1 = state_18969;var statearr_18971_19129 = state_18969__$1;(statearr_18971_19129[(2)] = inst_18965);
(statearr_18971_19129[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18970 === (6)))
{var state_18969__$1 = state_18969;var statearr_18972_19130 = state_18969__$1;(statearr_18972_19130[(2)] = null);
(statearr_18972_19130[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18970 === (5)))
{var state_18969__$1 = state_18969;var statearr_18973_19131 = state_18969__$1;(statearr_18973_19131[(2)] = null);
(statearr_18973_19131[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18970 === (4)))
{var inst_18959 = (state_18969[(2)]);var inst_18960 = async.call(null,inst_18959);var state_18969__$1 = state_18969;if(cljs.core.truth_(inst_18960))
{var statearr_18974_19132 = state_18969__$1;(statearr_18974_19132[(1)] = (5));
} else
{var statearr_18975_19133 = state_18969__$1;(statearr_18975_19133[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18970 === (3)))
{var inst_18967 = (state_18969[(2)]);var state_18969__$1 = state_18969;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18969__$1,inst_18967);
} else
{if((state_val_18970 === (2)))
{var state_18969__$1 = state_18969;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18969__$1,(4),jobs);
} else
{if((state_val_18970 === (1)))
{var state_18969__$1 = state_18969;var statearr_18976_19134 = state_18969__$1;(statearr_18976_19134[(2)] = null);
(statearr_18976_19134[(1)] = (2));
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
});})(__19125,c__14001__auto___19128,G__18956_19126,n__12365__auto___19124,jobs,results,process,async))
;return ((function (__19125,switch__13945__auto__,c__14001__auto___19128,G__18956_19126,n__12365__auto___19124,jobs,results,process,async){
return (function() {
var state_machine__13946__auto__ = null;
var state_machine__13946__auto____0 = (function (){var statearr_18980 = [null,null,null,null,null,null,null];(statearr_18980[(0)] = state_machine__13946__auto__);
(statearr_18980[(1)] = (1));
return statearr_18980;
});
var state_machine__13946__auto____1 = (function (state_18969){while(true){
var ret_value__13947__auto__ = (function (){try{while(true){
var result__13948__auto__ = switch__13945__auto__.call(null,state_18969);if(cljs.core.keyword_identical_QMARK_.call(null,result__13948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13948__auto__;
}
break;
}
}catch (e18981){if((e18981 instanceof Object))
{var ex__13949__auto__ = e18981;var statearr_18982_19135 = state_18969;(statearr_18982_19135[(5)] = ex__13949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18969);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18981;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19136 = state_18969;
state_18969 = G__19136;
continue;
}
} else
{return ret_value__13947__auto__;
}
break;
}
});
state_machine__13946__auto__ = function(state_18969){
switch(arguments.length){
case 0:
return state_machine__13946__auto____0.call(this);
case 1:
return state_machine__13946__auto____1.call(this,state_18969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13946__auto____0;
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13946__auto____1;
return state_machine__13946__auto__;
})()
;})(__19125,switch__13945__auto__,c__14001__auto___19128,G__18956_19126,n__12365__auto___19124,jobs,results,process,async))
})();var state__14003__auto__ = (function (){var statearr_18983 = f__14002__auto__.call(null);(statearr_18983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14001__auto___19128);
return statearr_18983;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14003__auto__);
});})(__19125,c__14001__auto___19128,G__18956_19126,n__12365__auto___19124,jobs,results,process,async))
);

break;
case "compute":
var c__14001__auto___19137 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__19125,c__14001__auto___19137,G__18956_19126,n__12365__auto___19124,jobs,results,process,async){
return (function (){var f__14002__auto__ = (function (){var switch__13945__auto__ = ((function (__19125,c__14001__auto___19137,G__18956_19126,n__12365__auto___19124,jobs,results,process,async){
return (function (state_18996){var state_val_18997 = (state_18996[(1)]);if((state_val_18997 === (7)))
{var inst_18992 = (state_18996[(2)]);var state_18996__$1 = state_18996;var statearr_18998_19138 = state_18996__$1;(statearr_18998_19138[(2)] = inst_18992);
(statearr_18998_19138[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18997 === (6)))
{var state_18996__$1 = state_18996;var statearr_18999_19139 = state_18996__$1;(statearr_18999_19139[(2)] = null);
(statearr_18999_19139[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18997 === (5)))
{var state_18996__$1 = state_18996;var statearr_19000_19140 = state_18996__$1;(statearr_19000_19140[(2)] = null);
(statearr_19000_19140[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18997 === (4)))
{var inst_18986 = (state_18996[(2)]);var inst_18987 = process.call(null,inst_18986);var state_18996__$1 = state_18996;if(cljs.core.truth_(inst_18987))
{var statearr_19001_19141 = state_18996__$1;(statearr_19001_19141[(1)] = (5));
} else
{var statearr_19002_19142 = state_18996__$1;(statearr_19002_19142[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18997 === (3)))
{var inst_18994 = (state_18996[(2)]);var state_18996__$1 = state_18996;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18996__$1,inst_18994);
} else
{if((state_val_18997 === (2)))
{var state_18996__$1 = state_18996;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18996__$1,(4),jobs);
} else
{if((state_val_18997 === (1)))
{var state_18996__$1 = state_18996;var statearr_19003_19143 = state_18996__$1;(statearr_19003_19143[(2)] = null);
(statearr_19003_19143[(1)] = (2));
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
});})(__19125,c__14001__auto___19137,G__18956_19126,n__12365__auto___19124,jobs,results,process,async))
;return ((function (__19125,switch__13945__auto__,c__14001__auto___19137,G__18956_19126,n__12365__auto___19124,jobs,results,process,async){
return (function() {
var state_machine__13946__auto__ = null;
var state_machine__13946__auto____0 = (function (){var statearr_19007 = [null,null,null,null,null,null,null];(statearr_19007[(0)] = state_machine__13946__auto__);
(statearr_19007[(1)] = (1));
return statearr_19007;
});
var state_machine__13946__auto____1 = (function (state_18996){while(true){
var ret_value__13947__auto__ = (function (){try{while(true){
var result__13948__auto__ = switch__13945__auto__.call(null,state_18996);if(cljs.core.keyword_identical_QMARK_.call(null,result__13948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13948__auto__;
}
break;
}
}catch (e19008){if((e19008 instanceof Object))
{var ex__13949__auto__ = e19008;var statearr_19009_19144 = state_18996;(statearr_19009_19144[(5)] = ex__13949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18996);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19008;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19145 = state_18996;
state_18996 = G__19145;
continue;
}
} else
{return ret_value__13947__auto__;
}
break;
}
});
state_machine__13946__auto__ = function(state_18996){
switch(arguments.length){
case 0:
return state_machine__13946__auto____0.call(this);
case 1:
return state_machine__13946__auto____1.call(this,state_18996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13946__auto____0;
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13946__auto____1;
return state_machine__13946__auto__;
})()
;})(__19125,switch__13945__auto__,c__14001__auto___19137,G__18956_19126,n__12365__auto___19124,jobs,results,process,async))
})();var state__14003__auto__ = (function (){var statearr_19010 = f__14002__auto__.call(null);(statearr_19010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14001__auto___19137);
return statearr_19010;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14003__auto__);
});})(__19125,c__14001__auto___19137,G__18956_19126,n__12365__auto___19124,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__19146 = (__19125 + (1));
__19125 = G__19146;
continue;
}
} else
{}
break;
}
var c__14001__auto___19147 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14001__auto___19147,jobs,results,process,async){
return (function (){var f__14002__auto__ = (function (){var switch__13945__auto__ = ((function (c__14001__auto___19147,jobs,results,process,async){
return (function (state_19032){var state_val_19033 = (state_19032[(1)]);if((state_val_19033 === (9)))
{var inst_19025 = (state_19032[(2)]);var state_19032__$1 = (function (){var statearr_19034 = state_19032;(statearr_19034[(7)] = inst_19025);
return statearr_19034;
})();var statearr_19035_19148 = state_19032__$1;(statearr_19035_19148[(2)] = null);
(statearr_19035_19148[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19033 === (8)))
{var inst_19018 = (state_19032[(8)]);var inst_19023 = (state_19032[(2)]);var state_19032__$1 = (function (){var statearr_19036 = state_19032;(statearr_19036[(9)] = inst_19023);
return statearr_19036;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19032__$1,(9),results,inst_19018);
} else
{if((state_val_19033 === (7)))
{var inst_19028 = (state_19032[(2)]);var state_19032__$1 = state_19032;var statearr_19037_19149 = state_19032__$1;(statearr_19037_19149[(2)] = inst_19028);
(statearr_19037_19149[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19033 === (6)))
{var inst_19018 = (state_19032[(8)]);var inst_19013 = (state_19032[(10)]);var inst_19018__$1 = cljs.core.async.chan.call(null,(1));var inst_19019 = cljs.core.PersistentVector.EMPTY_NODE;var inst_19020 = [inst_19013,inst_19018__$1];var inst_19021 = (new cljs.core.PersistentVector(null,2,(5),inst_19019,inst_19020,null));var state_19032__$1 = (function (){var statearr_19038 = state_19032;(statearr_19038[(8)] = inst_19018__$1);
return statearr_19038;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19032__$1,(8),jobs,inst_19021);
} else
{if((state_val_19033 === (5)))
{var inst_19016 = cljs.core.async.close_BANG_.call(null,jobs);var state_19032__$1 = state_19032;var statearr_19039_19150 = state_19032__$1;(statearr_19039_19150[(2)] = inst_19016);
(statearr_19039_19150[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19033 === (4)))
{var inst_19013 = (state_19032[(10)]);var inst_19013__$1 = (state_19032[(2)]);var inst_19014 = (inst_19013__$1 == null);var state_19032__$1 = (function (){var statearr_19040 = state_19032;(statearr_19040[(10)] = inst_19013__$1);
return statearr_19040;
})();if(cljs.core.truth_(inst_19014))
{var statearr_19041_19151 = state_19032__$1;(statearr_19041_19151[(1)] = (5));
} else
{var statearr_19042_19152 = state_19032__$1;(statearr_19042_19152[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19033 === (3)))
{var inst_19030 = (state_19032[(2)]);var state_19032__$1 = state_19032;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19032__$1,inst_19030);
} else
{if((state_val_19033 === (2)))
{var state_19032__$1 = state_19032;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19032__$1,(4),from);
} else
{if((state_val_19033 === (1)))
{var state_19032__$1 = state_19032;var statearr_19043_19153 = state_19032__$1;(statearr_19043_19153[(2)] = null);
(statearr_19043_19153[(1)] = (2));
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
});})(c__14001__auto___19147,jobs,results,process,async))
;return ((function (switch__13945__auto__,c__14001__auto___19147,jobs,results,process,async){
return (function() {
var state_machine__13946__auto__ = null;
var state_machine__13946__auto____0 = (function (){var statearr_19047 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19047[(0)] = state_machine__13946__auto__);
(statearr_19047[(1)] = (1));
return statearr_19047;
});
var state_machine__13946__auto____1 = (function (state_19032){while(true){
var ret_value__13947__auto__ = (function (){try{while(true){
var result__13948__auto__ = switch__13945__auto__.call(null,state_19032);if(cljs.core.keyword_identical_QMARK_.call(null,result__13948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13948__auto__;
}
break;
}
}catch (e19048){if((e19048 instanceof Object))
{var ex__13949__auto__ = e19048;var statearr_19049_19154 = state_19032;(statearr_19049_19154[(5)] = ex__13949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19032);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19048;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19155 = state_19032;
state_19032 = G__19155;
continue;
}
} else
{return ret_value__13947__auto__;
}
break;
}
});
state_machine__13946__auto__ = function(state_19032){
switch(arguments.length){
case 0:
return state_machine__13946__auto____0.call(this);
case 1:
return state_machine__13946__auto____1.call(this,state_19032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13946__auto____0;
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13946__auto____1;
return state_machine__13946__auto__;
})()
;})(switch__13945__auto__,c__14001__auto___19147,jobs,results,process,async))
})();var state__14003__auto__ = (function (){var statearr_19050 = f__14002__auto__.call(null);(statearr_19050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14001__auto___19147);
return statearr_19050;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14003__auto__);
});})(c__14001__auto___19147,jobs,results,process,async))
);
var c__14001__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14001__auto__,jobs,results,process,async){
return (function (){var f__14002__auto__ = (function (){var switch__13945__auto__ = ((function (c__14001__auto__,jobs,results,process,async){
return (function (state_19088){var state_val_19089 = (state_19088[(1)]);if((state_val_19089 === (7)))
{var inst_19084 = (state_19088[(2)]);var state_19088__$1 = state_19088;var statearr_19090_19156 = state_19088__$1;(statearr_19090_19156[(2)] = inst_19084);
(statearr_19090_19156[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19089 === (20)))
{var state_19088__$1 = state_19088;var statearr_19091_19157 = state_19088__$1;(statearr_19091_19157[(2)] = null);
(statearr_19091_19157[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19089 === (1)))
{var state_19088__$1 = state_19088;var statearr_19092_19158 = state_19088__$1;(statearr_19092_19158[(2)] = null);
(statearr_19092_19158[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19089 === (4)))
{var inst_19053 = (state_19088[(7)]);var inst_19053__$1 = (state_19088[(2)]);var inst_19054 = (inst_19053__$1 == null);var state_19088__$1 = (function (){var statearr_19093 = state_19088;(statearr_19093[(7)] = inst_19053__$1);
return statearr_19093;
})();if(cljs.core.truth_(inst_19054))
{var statearr_19094_19159 = state_19088__$1;(statearr_19094_19159[(1)] = (5));
} else
{var statearr_19095_19160 = state_19088__$1;(statearr_19095_19160[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19089 === (15)))
{var inst_19066 = (state_19088[(8)]);var state_19088__$1 = state_19088;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19088__$1,(18),to,inst_19066);
} else
{if((state_val_19089 === (21)))
{var inst_19079 = (state_19088[(2)]);var state_19088__$1 = state_19088;var statearr_19096_19161 = state_19088__$1;(statearr_19096_19161[(2)] = inst_19079);
(statearr_19096_19161[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19089 === (13)))
{var inst_19081 = (state_19088[(2)]);var state_19088__$1 = (function (){var statearr_19097 = state_19088;(statearr_19097[(9)] = inst_19081);
return statearr_19097;
})();var statearr_19098_19162 = state_19088__$1;(statearr_19098_19162[(2)] = null);
(statearr_19098_19162[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19089 === (6)))
{var inst_19053 = (state_19088[(7)]);var state_19088__$1 = state_19088;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19088__$1,(11),inst_19053);
} else
{if((state_val_19089 === (17)))
{var inst_19074 = (state_19088[(2)]);var state_19088__$1 = state_19088;if(cljs.core.truth_(inst_19074))
{var statearr_19099_19163 = state_19088__$1;(statearr_19099_19163[(1)] = (19));
} else
{var statearr_19100_19164 = state_19088__$1;(statearr_19100_19164[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19089 === (3)))
{var inst_19086 = (state_19088[(2)]);var state_19088__$1 = state_19088;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19088__$1,inst_19086);
} else
{if((state_val_19089 === (12)))
{var inst_19063 = (state_19088[(10)]);var state_19088__$1 = state_19088;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19088__$1,(14),inst_19063);
} else
{if((state_val_19089 === (2)))
{var state_19088__$1 = state_19088;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19088__$1,(4),results);
} else
{if((state_val_19089 === (19)))
{var state_19088__$1 = state_19088;var statearr_19101_19165 = state_19088__$1;(statearr_19101_19165[(2)] = null);
(statearr_19101_19165[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19089 === (11)))
{var inst_19063 = (state_19088[(2)]);var state_19088__$1 = (function (){var statearr_19102 = state_19088;(statearr_19102[(10)] = inst_19063);
return statearr_19102;
})();var statearr_19103_19166 = state_19088__$1;(statearr_19103_19166[(2)] = null);
(statearr_19103_19166[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19089 === (9)))
{var state_19088__$1 = state_19088;var statearr_19104_19167 = state_19088__$1;(statearr_19104_19167[(2)] = null);
(statearr_19104_19167[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19089 === (5)))
{var state_19088__$1 = state_19088;if(cljs.core.truth_(close_QMARK_))
{var statearr_19105_19168 = state_19088__$1;(statearr_19105_19168[(1)] = (8));
} else
{var statearr_19106_19169 = state_19088__$1;(statearr_19106_19169[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19089 === (14)))
{var inst_19066 = (state_19088[(8)]);var inst_19068 = (state_19088[(11)]);var inst_19066__$1 = (state_19088[(2)]);var inst_19067 = (inst_19066__$1 == null);var inst_19068__$1 = cljs.core.not.call(null,inst_19067);var state_19088__$1 = (function (){var statearr_19107 = state_19088;(statearr_19107[(8)] = inst_19066__$1);
(statearr_19107[(11)] = inst_19068__$1);
return statearr_19107;
})();if(inst_19068__$1)
{var statearr_19108_19170 = state_19088__$1;(statearr_19108_19170[(1)] = (15));
} else
{var statearr_19109_19171 = state_19088__$1;(statearr_19109_19171[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19089 === (16)))
{var inst_19068 = (state_19088[(11)]);var state_19088__$1 = state_19088;var statearr_19110_19172 = state_19088__$1;(statearr_19110_19172[(2)] = inst_19068);
(statearr_19110_19172[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19089 === (10)))
{var inst_19060 = (state_19088[(2)]);var state_19088__$1 = state_19088;var statearr_19111_19173 = state_19088__$1;(statearr_19111_19173[(2)] = inst_19060);
(statearr_19111_19173[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19089 === (18)))
{var inst_19071 = (state_19088[(2)]);var state_19088__$1 = state_19088;var statearr_19112_19174 = state_19088__$1;(statearr_19112_19174[(2)] = inst_19071);
(statearr_19112_19174[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19089 === (8)))
{var inst_19057 = cljs.core.async.close_BANG_.call(null,to);var state_19088__$1 = state_19088;var statearr_19113_19175 = state_19088__$1;(statearr_19113_19175[(2)] = inst_19057);
(statearr_19113_19175[(1)] = (10));
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
});})(c__14001__auto__,jobs,results,process,async))
;return ((function (switch__13945__auto__,c__14001__auto__,jobs,results,process,async){
return (function() {
var state_machine__13946__auto__ = null;
var state_machine__13946__auto____0 = (function (){var statearr_19117 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19117[(0)] = state_machine__13946__auto__);
(statearr_19117[(1)] = (1));
return statearr_19117;
});
var state_machine__13946__auto____1 = (function (state_19088){while(true){
var ret_value__13947__auto__ = (function (){try{while(true){
var result__13948__auto__ = switch__13945__auto__.call(null,state_19088);if(cljs.core.keyword_identical_QMARK_.call(null,result__13948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13948__auto__;
}
break;
}
}catch (e19118){if((e19118 instanceof Object))
{var ex__13949__auto__ = e19118;var statearr_19119_19176 = state_19088;(statearr_19119_19176[(5)] = ex__13949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19088);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19118;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19177 = state_19088;
state_19088 = G__19177;
continue;
}
} else
{return ret_value__13947__auto__;
}
break;
}
});
state_machine__13946__auto__ = function(state_19088){
switch(arguments.length){
case 0:
return state_machine__13946__auto____0.call(this);
case 1:
return state_machine__13946__auto____1.call(this,state_19088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13946__auto____0;
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13946__auto____1;
return state_machine__13946__auto__;
})()
;})(switch__13945__auto__,c__14001__auto__,jobs,results,process,async))
})();var state__14003__auto__ = (function (){var statearr_19120 = f__14002__auto__.call(null);(statearr_19120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14001__auto__);
return statearr_19120;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14003__auto__);
});})(c__14001__auto__,jobs,results,process,async))
);
return c__14001__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__14001__auto___19278 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14001__auto___19278,tc,fc){
return (function (){var f__14002__auto__ = (function (){var switch__13945__auto__ = ((function (c__14001__auto___19278,tc,fc){
return (function (state_19253){var state_val_19254 = (state_19253[(1)]);if((state_val_19254 === (7)))
{var inst_19249 = (state_19253[(2)]);var state_19253__$1 = state_19253;var statearr_19255_19279 = state_19253__$1;(statearr_19255_19279[(2)] = inst_19249);
(statearr_19255_19279[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19254 === (1)))
{var state_19253__$1 = state_19253;var statearr_19256_19280 = state_19253__$1;(statearr_19256_19280[(2)] = null);
(statearr_19256_19280[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19254 === (4)))
{var inst_19230 = (state_19253[(7)]);var inst_19230__$1 = (state_19253[(2)]);var inst_19231 = (inst_19230__$1 == null);var state_19253__$1 = (function (){var statearr_19257 = state_19253;(statearr_19257[(7)] = inst_19230__$1);
return statearr_19257;
})();if(cljs.core.truth_(inst_19231))
{var statearr_19258_19281 = state_19253__$1;(statearr_19258_19281[(1)] = (5));
} else
{var statearr_19259_19282 = state_19253__$1;(statearr_19259_19282[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19254 === (13)))
{var state_19253__$1 = state_19253;var statearr_19260_19283 = state_19253__$1;(statearr_19260_19283[(2)] = null);
(statearr_19260_19283[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19254 === (6)))
{var inst_19230 = (state_19253[(7)]);var inst_19236 = p.call(null,inst_19230);var state_19253__$1 = state_19253;if(cljs.core.truth_(inst_19236))
{var statearr_19261_19284 = state_19253__$1;(statearr_19261_19284[(1)] = (9));
} else
{var statearr_19262_19285 = state_19253__$1;(statearr_19262_19285[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19254 === (3)))
{var inst_19251 = (state_19253[(2)]);var state_19253__$1 = state_19253;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19253__$1,inst_19251);
} else
{if((state_val_19254 === (12)))
{var state_19253__$1 = state_19253;var statearr_19263_19286 = state_19253__$1;(statearr_19263_19286[(2)] = null);
(statearr_19263_19286[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19254 === (2)))
{var state_19253__$1 = state_19253;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19253__$1,(4),ch);
} else
{if((state_val_19254 === (11)))
{var inst_19230 = (state_19253[(7)]);var inst_19240 = (state_19253[(2)]);var state_19253__$1 = state_19253;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19253__$1,(8),inst_19240,inst_19230);
} else
{if((state_val_19254 === (9)))
{var state_19253__$1 = state_19253;var statearr_19264_19287 = state_19253__$1;(statearr_19264_19287[(2)] = tc);
(statearr_19264_19287[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19254 === (5)))
{var inst_19233 = cljs.core.async.close_BANG_.call(null,tc);var inst_19234 = cljs.core.async.close_BANG_.call(null,fc);var state_19253__$1 = (function (){var statearr_19265 = state_19253;(statearr_19265[(8)] = inst_19233);
return statearr_19265;
})();var statearr_19266_19288 = state_19253__$1;(statearr_19266_19288[(2)] = inst_19234);
(statearr_19266_19288[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19254 === (14)))
{var inst_19247 = (state_19253[(2)]);var state_19253__$1 = state_19253;var statearr_19267_19289 = state_19253__$1;(statearr_19267_19289[(2)] = inst_19247);
(statearr_19267_19289[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19254 === (10)))
{var state_19253__$1 = state_19253;var statearr_19268_19290 = state_19253__$1;(statearr_19268_19290[(2)] = fc);
(statearr_19268_19290[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19254 === (8)))
{var inst_19242 = (state_19253[(2)]);var state_19253__$1 = state_19253;if(cljs.core.truth_(inst_19242))
{var statearr_19269_19291 = state_19253__$1;(statearr_19269_19291[(1)] = (12));
} else
{var statearr_19270_19292 = state_19253__$1;(statearr_19270_19292[(1)] = (13));
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
});})(c__14001__auto___19278,tc,fc))
;return ((function (switch__13945__auto__,c__14001__auto___19278,tc,fc){
return (function() {
var state_machine__13946__auto__ = null;
var state_machine__13946__auto____0 = (function (){var statearr_19274 = [null,null,null,null,null,null,null,null,null];(statearr_19274[(0)] = state_machine__13946__auto__);
(statearr_19274[(1)] = (1));
return statearr_19274;
});
var state_machine__13946__auto____1 = (function (state_19253){while(true){
var ret_value__13947__auto__ = (function (){try{while(true){
var result__13948__auto__ = switch__13945__auto__.call(null,state_19253);if(cljs.core.keyword_identical_QMARK_.call(null,result__13948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13948__auto__;
}
break;
}
}catch (e19275){if((e19275 instanceof Object))
{var ex__13949__auto__ = e19275;var statearr_19276_19293 = state_19253;(statearr_19276_19293[(5)] = ex__13949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19253);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19275;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19294 = state_19253;
state_19253 = G__19294;
continue;
}
} else
{return ret_value__13947__auto__;
}
break;
}
});
state_machine__13946__auto__ = function(state_19253){
switch(arguments.length){
case 0:
return state_machine__13946__auto____0.call(this);
case 1:
return state_machine__13946__auto____1.call(this,state_19253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13946__auto____0;
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13946__auto____1;
return state_machine__13946__auto__;
})()
;})(switch__13945__auto__,c__14001__auto___19278,tc,fc))
})();var state__14003__auto__ = (function (){var statearr_19277 = f__14002__auto__.call(null);(statearr_19277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14001__auto___19278);
return statearr_19277;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14003__auto__);
});})(c__14001__auto___19278,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__14001__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14001__auto__){
return (function (){var f__14002__auto__ = (function (){var switch__13945__auto__ = ((function (c__14001__auto__){
return (function (state_19341){var state_val_19342 = (state_19341[(1)]);if((state_val_19342 === (7)))
{var inst_19337 = (state_19341[(2)]);var state_19341__$1 = state_19341;var statearr_19343_19359 = state_19341__$1;(statearr_19343_19359[(2)] = inst_19337);
(statearr_19343_19359[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19342 === (6)))
{var inst_19330 = (state_19341[(7)]);var inst_19327 = (state_19341[(8)]);var inst_19334 = f.call(null,inst_19327,inst_19330);var inst_19327__$1 = inst_19334;var state_19341__$1 = (function (){var statearr_19344 = state_19341;(statearr_19344[(8)] = inst_19327__$1);
return statearr_19344;
})();var statearr_19345_19360 = state_19341__$1;(statearr_19345_19360[(2)] = null);
(statearr_19345_19360[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19342 === (5)))
{var inst_19327 = (state_19341[(8)]);var state_19341__$1 = state_19341;var statearr_19346_19361 = state_19341__$1;(statearr_19346_19361[(2)] = inst_19327);
(statearr_19346_19361[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19342 === (4)))
{var inst_19330 = (state_19341[(7)]);var inst_19330__$1 = (state_19341[(2)]);var inst_19331 = (inst_19330__$1 == null);var state_19341__$1 = (function (){var statearr_19347 = state_19341;(statearr_19347[(7)] = inst_19330__$1);
return statearr_19347;
})();if(cljs.core.truth_(inst_19331))
{var statearr_19348_19362 = state_19341__$1;(statearr_19348_19362[(1)] = (5));
} else
{var statearr_19349_19363 = state_19341__$1;(statearr_19349_19363[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19342 === (3)))
{var inst_19339 = (state_19341[(2)]);var state_19341__$1 = state_19341;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19341__$1,inst_19339);
} else
{if((state_val_19342 === (2)))
{var state_19341__$1 = state_19341;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19341__$1,(4),ch);
} else
{if((state_val_19342 === (1)))
{var inst_19327 = init;var state_19341__$1 = (function (){var statearr_19350 = state_19341;(statearr_19350[(8)] = inst_19327);
return statearr_19350;
})();var statearr_19351_19364 = state_19341__$1;(statearr_19351_19364[(2)] = null);
(statearr_19351_19364[(1)] = (2));
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
});})(c__14001__auto__))
;return ((function (switch__13945__auto__,c__14001__auto__){
return (function() {
var state_machine__13946__auto__ = null;
var state_machine__13946__auto____0 = (function (){var statearr_19355 = [null,null,null,null,null,null,null,null,null];(statearr_19355[(0)] = state_machine__13946__auto__);
(statearr_19355[(1)] = (1));
return statearr_19355;
});
var state_machine__13946__auto____1 = (function (state_19341){while(true){
var ret_value__13947__auto__ = (function (){try{while(true){
var result__13948__auto__ = switch__13945__auto__.call(null,state_19341);if(cljs.core.keyword_identical_QMARK_.call(null,result__13948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13948__auto__;
}
break;
}
}catch (e19356){if((e19356 instanceof Object))
{var ex__13949__auto__ = e19356;var statearr_19357_19365 = state_19341;(statearr_19357_19365[(5)] = ex__13949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19341);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19356;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19366 = state_19341;
state_19341 = G__19366;
continue;
}
} else
{return ret_value__13947__auto__;
}
break;
}
});
state_machine__13946__auto__ = function(state_19341){
switch(arguments.length){
case 0:
return state_machine__13946__auto____0.call(this);
case 1:
return state_machine__13946__auto____1.call(this,state_19341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13946__auto____0;
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13946__auto____1;
return state_machine__13946__auto__;
})()
;})(switch__13945__auto__,c__14001__auto__))
})();var state__14003__auto__ = (function (){var statearr_19358 = f__14002__auto__.call(null);(statearr_19358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14001__auto__);
return statearr_19358;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14003__auto__);
});})(c__14001__auto__))
);
return c__14001__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__14001__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14001__auto__){
return (function (){var f__14002__auto__ = (function (){var switch__13945__auto__ = ((function (c__14001__auto__){
return (function (state_19440){var state_val_19441 = (state_19440[(1)]);if((state_val_19441 === (7)))
{var inst_19422 = (state_19440[(2)]);var state_19440__$1 = state_19440;var statearr_19442_19465 = state_19440__$1;(statearr_19442_19465[(2)] = inst_19422);
(statearr_19442_19465[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19441 === (1)))
{var inst_19416 = cljs.core.seq.call(null,coll);var inst_19417 = inst_19416;var state_19440__$1 = (function (){var statearr_19443 = state_19440;(statearr_19443[(7)] = inst_19417);
return statearr_19443;
})();var statearr_19444_19466 = state_19440__$1;(statearr_19444_19466[(2)] = null);
(statearr_19444_19466[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19441 === (4)))
{var inst_19417 = (state_19440[(7)]);var inst_19420 = cljs.core.first.call(null,inst_19417);var state_19440__$1 = state_19440;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19440__$1,(7),ch,inst_19420);
} else
{if((state_val_19441 === (13)))
{var inst_19434 = (state_19440[(2)]);var state_19440__$1 = state_19440;var statearr_19445_19467 = state_19440__$1;(statearr_19445_19467[(2)] = inst_19434);
(statearr_19445_19467[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19441 === (6)))
{var inst_19425 = (state_19440[(2)]);var state_19440__$1 = state_19440;if(cljs.core.truth_(inst_19425))
{var statearr_19446_19468 = state_19440__$1;(statearr_19446_19468[(1)] = (8));
} else
{var statearr_19447_19469 = state_19440__$1;(statearr_19447_19469[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19441 === (3)))
{var inst_19438 = (state_19440[(2)]);var state_19440__$1 = state_19440;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19440__$1,inst_19438);
} else
{if((state_val_19441 === (12)))
{var state_19440__$1 = state_19440;var statearr_19448_19470 = state_19440__$1;(statearr_19448_19470[(2)] = null);
(statearr_19448_19470[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19441 === (2)))
{var inst_19417 = (state_19440[(7)]);var state_19440__$1 = state_19440;if(cljs.core.truth_(inst_19417))
{var statearr_19449_19471 = state_19440__$1;(statearr_19449_19471[(1)] = (4));
} else
{var statearr_19450_19472 = state_19440__$1;(statearr_19450_19472[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19441 === (11)))
{var inst_19431 = cljs.core.async.close_BANG_.call(null,ch);var state_19440__$1 = state_19440;var statearr_19451_19473 = state_19440__$1;(statearr_19451_19473[(2)] = inst_19431);
(statearr_19451_19473[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19441 === (9)))
{var state_19440__$1 = state_19440;if(cljs.core.truth_(close_QMARK_))
{var statearr_19452_19474 = state_19440__$1;(statearr_19452_19474[(1)] = (11));
} else
{var statearr_19453_19475 = state_19440__$1;(statearr_19453_19475[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19441 === (5)))
{var inst_19417 = (state_19440[(7)]);var state_19440__$1 = state_19440;var statearr_19454_19476 = state_19440__$1;(statearr_19454_19476[(2)] = inst_19417);
(statearr_19454_19476[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19441 === (10)))
{var inst_19436 = (state_19440[(2)]);var state_19440__$1 = state_19440;var statearr_19455_19477 = state_19440__$1;(statearr_19455_19477[(2)] = inst_19436);
(statearr_19455_19477[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19441 === (8)))
{var inst_19417 = (state_19440[(7)]);var inst_19427 = cljs.core.next.call(null,inst_19417);var inst_19417__$1 = inst_19427;var state_19440__$1 = (function (){var statearr_19456 = state_19440;(statearr_19456[(7)] = inst_19417__$1);
return statearr_19456;
})();var statearr_19457_19478 = state_19440__$1;(statearr_19457_19478[(2)] = null);
(statearr_19457_19478[(1)] = (2));
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
});})(c__14001__auto__))
;return ((function (switch__13945__auto__,c__14001__auto__){
return (function() {
var state_machine__13946__auto__ = null;
var state_machine__13946__auto____0 = (function (){var statearr_19461 = [null,null,null,null,null,null,null,null];(statearr_19461[(0)] = state_machine__13946__auto__);
(statearr_19461[(1)] = (1));
return statearr_19461;
});
var state_machine__13946__auto____1 = (function (state_19440){while(true){
var ret_value__13947__auto__ = (function (){try{while(true){
var result__13948__auto__ = switch__13945__auto__.call(null,state_19440);if(cljs.core.keyword_identical_QMARK_.call(null,result__13948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13948__auto__;
}
break;
}
}catch (e19462){if((e19462 instanceof Object))
{var ex__13949__auto__ = e19462;var statearr_19463_19479 = state_19440;(statearr_19463_19479[(5)] = ex__13949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19440);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19462;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19480 = state_19440;
state_19440 = G__19480;
continue;
}
} else
{return ret_value__13947__auto__;
}
break;
}
});
state_machine__13946__auto__ = function(state_19440){
switch(arguments.length){
case 0:
return state_machine__13946__auto____0.call(this);
case 1:
return state_machine__13946__auto____1.call(this,state_19440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13946__auto____0;
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13946__auto____1;
return state_machine__13946__auto__;
})()
;})(switch__13945__auto__,c__14001__auto__))
})();var state__14003__auto__ = (function (){var statearr_19464 = f__14002__auto__.call(null);(statearr_19464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14001__auto__);
return statearr_19464;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14003__auto__);
});})(c__14001__auto__))
);
return c__14001__auto__;
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
cljs.core.async.Mux = (function (){var obj19482 = {};return obj19482;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__11483__auto__ = _;if(and__11483__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__11483__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__12132__auto__ = (((_ == null))?null:_);return (function (){var or__11495__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj19484 = {};return obj19484;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__11483__auto__ = m;if(and__11483__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__11483__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__12132__auto__ = (((m == null))?null:m);return (function (){var or__11495__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__11483__auto__ = m;if(and__11483__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__11483__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__12132__auto__ = (((m == null))?null:m);return (function (){var or__11495__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__11483__auto__ = m;if(and__11483__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__11483__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__12132__auto__ = (((m == null))?null:m);return (function (){var or__11495__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t19706 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19706 = (function (cs,ch,mult,meta19707){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta19707 = meta19707;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19706.cljs$lang$type = true;
cljs.core.async.t19706.cljs$lang$ctorStr = "cljs.core.async/t19706";
cljs.core.async.t19706.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t19706");
});})(cs))
;
cljs.core.async.t19706.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t19706.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t19706.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t19706.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t19706.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19706.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t19706.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19708){var self__ = this;
var _19708__$1 = this;return self__.meta19707;
});})(cs))
;
cljs.core.async.t19706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19708,meta19707__$1){var self__ = this;
var _19708__$1 = this;return (new cljs.core.async.t19706(self__.cs,self__.ch,self__.mult,meta19707__$1));
});})(cs))
;
cljs.core.async.__GT_t19706 = ((function (cs){
return (function __GT_t19706(cs__$1,ch__$1,mult__$1,meta19707){return (new cljs.core.async.t19706(cs__$1,ch__$1,mult__$1,meta19707));
});})(cs))
;
}
return (new cljs.core.async.t19706(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__14001__auto___19927 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14001__auto___19927,cs,m,dchan,dctr,done){
return (function (){var f__14002__auto__ = (function (){var switch__13945__auto__ = ((function (c__14001__auto___19927,cs,m,dchan,dctr,done){
return (function (state_19839){var state_val_19840 = (state_19839[(1)]);if((state_val_19840 === (7)))
{var inst_19835 = (state_19839[(2)]);var state_19839__$1 = state_19839;var statearr_19841_19928 = state_19839__$1;(statearr_19841_19928[(2)] = inst_19835);
(statearr_19841_19928[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (20)))
{var inst_19740 = (state_19839[(7)]);var inst_19750 = cljs.core.first.call(null,inst_19740);var inst_19751 = cljs.core.nth.call(null,inst_19750,(0),null);var inst_19752 = cljs.core.nth.call(null,inst_19750,(1),null);var state_19839__$1 = (function (){var statearr_19842 = state_19839;(statearr_19842[(8)] = inst_19751);
return statearr_19842;
})();if(cljs.core.truth_(inst_19752))
{var statearr_19843_19929 = state_19839__$1;(statearr_19843_19929[(1)] = (22));
} else
{var statearr_19844_19930 = state_19839__$1;(statearr_19844_19930[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (27)))
{var inst_19787 = (state_19839[(9)]);var inst_19780 = (state_19839[(10)]);var inst_19711 = (state_19839[(11)]);var inst_19782 = (state_19839[(12)]);var inst_19787__$1 = cljs.core._nth.call(null,inst_19780,inst_19782);var inst_19788 = cljs.core.async.put_BANG_.call(null,inst_19787__$1,inst_19711,done);var state_19839__$1 = (function (){var statearr_19845 = state_19839;(statearr_19845[(9)] = inst_19787__$1);
return statearr_19845;
})();if(cljs.core.truth_(inst_19788))
{var statearr_19846_19931 = state_19839__$1;(statearr_19846_19931[(1)] = (30));
} else
{var statearr_19847_19932 = state_19839__$1;(statearr_19847_19932[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (1)))
{var state_19839__$1 = state_19839;var statearr_19848_19933 = state_19839__$1;(statearr_19848_19933[(2)] = null);
(statearr_19848_19933[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (24)))
{var inst_19740 = (state_19839[(7)]);var inst_19757 = (state_19839[(2)]);var inst_19758 = cljs.core.next.call(null,inst_19740);var inst_19720 = inst_19758;var inst_19721 = null;var inst_19722 = (0);var inst_19723 = (0);var state_19839__$1 = (function (){var statearr_19849 = state_19839;(statearr_19849[(13)] = inst_19757);
(statearr_19849[(14)] = inst_19722);
(statearr_19849[(15)] = inst_19720);
(statearr_19849[(16)] = inst_19721);
(statearr_19849[(17)] = inst_19723);
return statearr_19849;
})();var statearr_19850_19934 = state_19839__$1;(statearr_19850_19934[(2)] = null);
(statearr_19850_19934[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (39)))
{var state_19839__$1 = state_19839;var statearr_19854_19935 = state_19839__$1;(statearr_19854_19935[(2)] = null);
(statearr_19854_19935[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (4)))
{var inst_19711 = (state_19839[(11)]);var inst_19711__$1 = (state_19839[(2)]);var inst_19712 = (inst_19711__$1 == null);var state_19839__$1 = (function (){var statearr_19855 = state_19839;(statearr_19855[(11)] = inst_19711__$1);
return statearr_19855;
})();if(cljs.core.truth_(inst_19712))
{var statearr_19856_19936 = state_19839__$1;(statearr_19856_19936[(1)] = (5));
} else
{var statearr_19857_19937 = state_19839__$1;(statearr_19857_19937[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (15)))
{var inst_19722 = (state_19839[(14)]);var inst_19720 = (state_19839[(15)]);var inst_19721 = (state_19839[(16)]);var inst_19723 = (state_19839[(17)]);var inst_19736 = (state_19839[(2)]);var inst_19737 = (inst_19723 + (1));var tmp19851 = inst_19722;var tmp19852 = inst_19720;var tmp19853 = inst_19721;var inst_19720__$1 = tmp19852;var inst_19721__$1 = tmp19853;var inst_19722__$1 = tmp19851;var inst_19723__$1 = inst_19737;var state_19839__$1 = (function (){var statearr_19858 = state_19839;(statearr_19858[(14)] = inst_19722__$1);
(statearr_19858[(15)] = inst_19720__$1);
(statearr_19858[(16)] = inst_19721__$1);
(statearr_19858[(18)] = inst_19736);
(statearr_19858[(17)] = inst_19723__$1);
return statearr_19858;
})();var statearr_19859_19938 = state_19839__$1;(statearr_19859_19938[(2)] = null);
(statearr_19859_19938[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (21)))
{var inst_19761 = (state_19839[(2)]);var state_19839__$1 = state_19839;var statearr_19863_19939 = state_19839__$1;(statearr_19863_19939[(2)] = inst_19761);
(statearr_19863_19939[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (31)))
{var inst_19787 = (state_19839[(9)]);var inst_19791 = done.call(null,null);var inst_19792 = cljs.core.async.untap_STAR_.call(null,m,inst_19787);var state_19839__$1 = (function (){var statearr_19864 = state_19839;(statearr_19864[(19)] = inst_19791);
return statearr_19864;
})();var statearr_19865_19940 = state_19839__$1;(statearr_19865_19940[(2)] = inst_19792);
(statearr_19865_19940[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (32)))
{var inst_19779 = (state_19839[(20)]);var inst_19780 = (state_19839[(10)]);var inst_19781 = (state_19839[(21)]);var inst_19782 = (state_19839[(12)]);var inst_19794 = (state_19839[(2)]);var inst_19795 = (inst_19782 + (1));var tmp19860 = inst_19779;var tmp19861 = inst_19780;var tmp19862 = inst_19781;var inst_19779__$1 = tmp19860;var inst_19780__$1 = tmp19861;var inst_19781__$1 = tmp19862;var inst_19782__$1 = inst_19795;var state_19839__$1 = (function (){var statearr_19866 = state_19839;(statearr_19866[(22)] = inst_19794);
(statearr_19866[(20)] = inst_19779__$1);
(statearr_19866[(10)] = inst_19780__$1);
(statearr_19866[(21)] = inst_19781__$1);
(statearr_19866[(12)] = inst_19782__$1);
return statearr_19866;
})();var statearr_19867_19941 = state_19839__$1;(statearr_19867_19941[(2)] = null);
(statearr_19867_19941[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (40)))
{var inst_19807 = (state_19839[(23)]);var inst_19811 = done.call(null,null);var inst_19812 = cljs.core.async.untap_STAR_.call(null,m,inst_19807);var state_19839__$1 = (function (){var statearr_19868 = state_19839;(statearr_19868[(24)] = inst_19811);
return statearr_19868;
})();var statearr_19869_19942 = state_19839__$1;(statearr_19869_19942[(2)] = inst_19812);
(statearr_19869_19942[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (33)))
{var inst_19798 = (state_19839[(25)]);var inst_19800 = cljs.core.chunked_seq_QMARK_.call(null,inst_19798);var state_19839__$1 = state_19839;if(inst_19800)
{var statearr_19870_19943 = state_19839__$1;(statearr_19870_19943[(1)] = (36));
} else
{var statearr_19871_19944 = state_19839__$1;(statearr_19871_19944[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (13)))
{var inst_19730 = (state_19839[(26)]);var inst_19733 = cljs.core.async.close_BANG_.call(null,inst_19730);var state_19839__$1 = state_19839;var statearr_19872_19945 = state_19839__$1;(statearr_19872_19945[(2)] = inst_19733);
(statearr_19872_19945[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (22)))
{var inst_19751 = (state_19839[(8)]);var inst_19754 = cljs.core.async.close_BANG_.call(null,inst_19751);var state_19839__$1 = state_19839;var statearr_19873_19946 = state_19839__$1;(statearr_19873_19946[(2)] = inst_19754);
(statearr_19873_19946[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (36)))
{var inst_19798 = (state_19839[(25)]);var inst_19802 = cljs.core.chunk_first.call(null,inst_19798);var inst_19803 = cljs.core.chunk_rest.call(null,inst_19798);var inst_19804 = cljs.core.count.call(null,inst_19802);var inst_19779 = inst_19803;var inst_19780 = inst_19802;var inst_19781 = inst_19804;var inst_19782 = (0);var state_19839__$1 = (function (){var statearr_19874 = state_19839;(statearr_19874[(20)] = inst_19779);
(statearr_19874[(10)] = inst_19780);
(statearr_19874[(21)] = inst_19781);
(statearr_19874[(12)] = inst_19782);
return statearr_19874;
})();var statearr_19875_19947 = state_19839__$1;(statearr_19875_19947[(2)] = null);
(statearr_19875_19947[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (41)))
{var inst_19798 = (state_19839[(25)]);var inst_19814 = (state_19839[(2)]);var inst_19815 = cljs.core.next.call(null,inst_19798);var inst_19779 = inst_19815;var inst_19780 = null;var inst_19781 = (0);var inst_19782 = (0);var state_19839__$1 = (function (){var statearr_19876 = state_19839;(statearr_19876[(20)] = inst_19779);
(statearr_19876[(10)] = inst_19780);
(statearr_19876[(27)] = inst_19814);
(statearr_19876[(21)] = inst_19781);
(statearr_19876[(12)] = inst_19782);
return statearr_19876;
})();var statearr_19877_19948 = state_19839__$1;(statearr_19877_19948[(2)] = null);
(statearr_19877_19948[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (43)))
{var state_19839__$1 = state_19839;var statearr_19878_19949 = state_19839__$1;(statearr_19878_19949[(2)] = null);
(statearr_19878_19949[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (29)))
{var inst_19823 = (state_19839[(2)]);var state_19839__$1 = state_19839;var statearr_19879_19950 = state_19839__$1;(statearr_19879_19950[(2)] = inst_19823);
(statearr_19879_19950[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (44)))
{var inst_19832 = (state_19839[(2)]);var state_19839__$1 = (function (){var statearr_19880 = state_19839;(statearr_19880[(28)] = inst_19832);
return statearr_19880;
})();var statearr_19881_19951 = state_19839__$1;(statearr_19881_19951[(2)] = null);
(statearr_19881_19951[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (6)))
{var inst_19771 = (state_19839[(29)]);var inst_19770 = cljs.core.deref.call(null,cs);var inst_19771__$1 = cljs.core.keys.call(null,inst_19770);var inst_19772 = cljs.core.count.call(null,inst_19771__$1);var inst_19773 = cljs.core.reset_BANG_.call(null,dctr,inst_19772);var inst_19778 = cljs.core.seq.call(null,inst_19771__$1);var inst_19779 = inst_19778;var inst_19780 = null;var inst_19781 = (0);var inst_19782 = (0);var state_19839__$1 = (function (){var statearr_19882 = state_19839;(statearr_19882[(29)] = inst_19771__$1);
(statearr_19882[(20)] = inst_19779);
(statearr_19882[(10)] = inst_19780);
(statearr_19882[(30)] = inst_19773);
(statearr_19882[(21)] = inst_19781);
(statearr_19882[(12)] = inst_19782);
return statearr_19882;
})();var statearr_19883_19952 = state_19839__$1;(statearr_19883_19952[(2)] = null);
(statearr_19883_19952[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (28)))
{var inst_19779 = (state_19839[(20)]);var inst_19798 = (state_19839[(25)]);var inst_19798__$1 = cljs.core.seq.call(null,inst_19779);var state_19839__$1 = (function (){var statearr_19884 = state_19839;(statearr_19884[(25)] = inst_19798__$1);
return statearr_19884;
})();if(inst_19798__$1)
{var statearr_19885_19953 = state_19839__$1;(statearr_19885_19953[(1)] = (33));
} else
{var statearr_19886_19954 = state_19839__$1;(statearr_19886_19954[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (25)))
{var inst_19781 = (state_19839[(21)]);var inst_19782 = (state_19839[(12)]);var inst_19784 = (inst_19782 < inst_19781);var inst_19785 = inst_19784;var state_19839__$1 = state_19839;if(cljs.core.truth_(inst_19785))
{var statearr_19887_19955 = state_19839__$1;(statearr_19887_19955[(1)] = (27));
} else
{var statearr_19888_19956 = state_19839__$1;(statearr_19888_19956[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (34)))
{var state_19839__$1 = state_19839;var statearr_19889_19957 = state_19839__$1;(statearr_19889_19957[(2)] = null);
(statearr_19889_19957[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (17)))
{var state_19839__$1 = state_19839;var statearr_19890_19958 = state_19839__$1;(statearr_19890_19958[(2)] = null);
(statearr_19890_19958[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (3)))
{var inst_19837 = (state_19839[(2)]);var state_19839__$1 = state_19839;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19839__$1,inst_19837);
} else
{if((state_val_19840 === (12)))
{var inst_19766 = (state_19839[(2)]);var state_19839__$1 = state_19839;var statearr_19891_19959 = state_19839__$1;(statearr_19891_19959[(2)] = inst_19766);
(statearr_19891_19959[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (2)))
{var state_19839__$1 = state_19839;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19839__$1,(4),ch);
} else
{if((state_val_19840 === (23)))
{var state_19839__$1 = state_19839;var statearr_19892_19960 = state_19839__$1;(statearr_19892_19960[(2)] = null);
(statearr_19892_19960[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (35)))
{var inst_19821 = (state_19839[(2)]);var state_19839__$1 = state_19839;var statearr_19893_19961 = state_19839__$1;(statearr_19893_19961[(2)] = inst_19821);
(statearr_19893_19961[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (19)))
{var inst_19740 = (state_19839[(7)]);var inst_19744 = cljs.core.chunk_first.call(null,inst_19740);var inst_19745 = cljs.core.chunk_rest.call(null,inst_19740);var inst_19746 = cljs.core.count.call(null,inst_19744);var inst_19720 = inst_19745;var inst_19721 = inst_19744;var inst_19722 = inst_19746;var inst_19723 = (0);var state_19839__$1 = (function (){var statearr_19894 = state_19839;(statearr_19894[(14)] = inst_19722);
(statearr_19894[(15)] = inst_19720);
(statearr_19894[(16)] = inst_19721);
(statearr_19894[(17)] = inst_19723);
return statearr_19894;
})();var statearr_19895_19962 = state_19839__$1;(statearr_19895_19962[(2)] = null);
(statearr_19895_19962[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (11)))
{var inst_19740 = (state_19839[(7)]);var inst_19720 = (state_19839[(15)]);var inst_19740__$1 = cljs.core.seq.call(null,inst_19720);var state_19839__$1 = (function (){var statearr_19896 = state_19839;(statearr_19896[(7)] = inst_19740__$1);
return statearr_19896;
})();if(inst_19740__$1)
{var statearr_19897_19963 = state_19839__$1;(statearr_19897_19963[(1)] = (16));
} else
{var statearr_19898_19964 = state_19839__$1;(statearr_19898_19964[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (9)))
{var inst_19768 = (state_19839[(2)]);var state_19839__$1 = state_19839;var statearr_19899_19965 = state_19839__$1;(statearr_19899_19965[(2)] = inst_19768);
(statearr_19899_19965[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (5)))
{var inst_19718 = cljs.core.deref.call(null,cs);var inst_19719 = cljs.core.seq.call(null,inst_19718);var inst_19720 = inst_19719;var inst_19721 = null;var inst_19722 = (0);var inst_19723 = (0);var state_19839__$1 = (function (){var statearr_19900 = state_19839;(statearr_19900[(14)] = inst_19722);
(statearr_19900[(15)] = inst_19720);
(statearr_19900[(16)] = inst_19721);
(statearr_19900[(17)] = inst_19723);
return statearr_19900;
})();var statearr_19901_19966 = state_19839__$1;(statearr_19901_19966[(2)] = null);
(statearr_19901_19966[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (14)))
{var state_19839__$1 = state_19839;var statearr_19902_19967 = state_19839__$1;(statearr_19902_19967[(2)] = null);
(statearr_19902_19967[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (45)))
{var inst_19829 = (state_19839[(2)]);var state_19839__$1 = state_19839;var statearr_19903_19968 = state_19839__$1;(statearr_19903_19968[(2)] = inst_19829);
(statearr_19903_19968[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (26)))
{var inst_19771 = (state_19839[(29)]);var inst_19825 = (state_19839[(2)]);var inst_19826 = cljs.core.seq.call(null,inst_19771);var state_19839__$1 = (function (){var statearr_19904 = state_19839;(statearr_19904[(31)] = inst_19825);
return statearr_19904;
})();if(inst_19826)
{var statearr_19905_19969 = state_19839__$1;(statearr_19905_19969[(1)] = (42));
} else
{var statearr_19906_19970 = state_19839__$1;(statearr_19906_19970[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (16)))
{var inst_19740 = (state_19839[(7)]);var inst_19742 = cljs.core.chunked_seq_QMARK_.call(null,inst_19740);var state_19839__$1 = state_19839;if(inst_19742)
{var statearr_19907_19971 = state_19839__$1;(statearr_19907_19971[(1)] = (19));
} else
{var statearr_19908_19972 = state_19839__$1;(statearr_19908_19972[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (38)))
{var inst_19818 = (state_19839[(2)]);var state_19839__$1 = state_19839;var statearr_19909_19973 = state_19839__$1;(statearr_19909_19973[(2)] = inst_19818);
(statearr_19909_19973[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (30)))
{var state_19839__$1 = state_19839;var statearr_19910_19974 = state_19839__$1;(statearr_19910_19974[(2)] = null);
(statearr_19910_19974[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (10)))
{var inst_19721 = (state_19839[(16)]);var inst_19723 = (state_19839[(17)]);var inst_19729 = cljs.core._nth.call(null,inst_19721,inst_19723);var inst_19730 = cljs.core.nth.call(null,inst_19729,(0),null);var inst_19731 = cljs.core.nth.call(null,inst_19729,(1),null);var state_19839__$1 = (function (){var statearr_19911 = state_19839;(statearr_19911[(26)] = inst_19730);
return statearr_19911;
})();if(cljs.core.truth_(inst_19731))
{var statearr_19912_19975 = state_19839__$1;(statearr_19912_19975[(1)] = (13));
} else
{var statearr_19913_19976 = state_19839__$1;(statearr_19913_19976[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (18)))
{var inst_19764 = (state_19839[(2)]);var state_19839__$1 = state_19839;var statearr_19914_19977 = state_19839__$1;(statearr_19914_19977[(2)] = inst_19764);
(statearr_19914_19977[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (42)))
{var state_19839__$1 = state_19839;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19839__$1,(45),dchan);
} else
{if((state_val_19840 === (37)))
{var inst_19807 = (state_19839[(23)]);var inst_19711 = (state_19839[(11)]);var inst_19798 = (state_19839[(25)]);var inst_19807__$1 = cljs.core.first.call(null,inst_19798);var inst_19808 = cljs.core.async.put_BANG_.call(null,inst_19807__$1,inst_19711,done);var state_19839__$1 = (function (){var statearr_19915 = state_19839;(statearr_19915[(23)] = inst_19807__$1);
return statearr_19915;
})();if(cljs.core.truth_(inst_19808))
{var statearr_19916_19978 = state_19839__$1;(statearr_19916_19978[(1)] = (39));
} else
{var statearr_19917_19979 = state_19839__$1;(statearr_19917_19979[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19840 === (8)))
{var inst_19722 = (state_19839[(14)]);var inst_19723 = (state_19839[(17)]);var inst_19725 = (inst_19723 < inst_19722);var inst_19726 = inst_19725;var state_19839__$1 = state_19839;if(cljs.core.truth_(inst_19726))
{var statearr_19918_19980 = state_19839__$1;(statearr_19918_19980[(1)] = (10));
} else
{var statearr_19919_19981 = state_19839__$1;(statearr_19919_19981[(1)] = (11));
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
});})(c__14001__auto___19927,cs,m,dchan,dctr,done))
;return ((function (switch__13945__auto__,c__14001__auto___19927,cs,m,dchan,dctr,done){
return (function() {
var state_machine__13946__auto__ = null;
var state_machine__13946__auto____0 = (function (){var statearr_19923 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19923[(0)] = state_machine__13946__auto__);
(statearr_19923[(1)] = (1));
return statearr_19923;
});
var state_machine__13946__auto____1 = (function (state_19839){while(true){
var ret_value__13947__auto__ = (function (){try{while(true){
var result__13948__auto__ = switch__13945__auto__.call(null,state_19839);if(cljs.core.keyword_identical_QMARK_.call(null,result__13948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13948__auto__;
}
break;
}
}catch (e19924){if((e19924 instanceof Object))
{var ex__13949__auto__ = e19924;var statearr_19925_19982 = state_19839;(statearr_19925_19982[(5)] = ex__13949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19839);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19924;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19983 = state_19839;
state_19839 = G__19983;
continue;
}
} else
{return ret_value__13947__auto__;
}
break;
}
});
state_machine__13946__auto__ = function(state_19839){
switch(arguments.length){
case 0:
return state_machine__13946__auto____0.call(this);
case 1:
return state_machine__13946__auto____1.call(this,state_19839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13946__auto____0;
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13946__auto____1;
return state_machine__13946__auto__;
})()
;})(switch__13945__auto__,c__14001__auto___19927,cs,m,dchan,dctr,done))
})();var state__14003__auto__ = (function (){var statearr_19926 = f__14002__auto__.call(null);(statearr_19926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14001__auto___19927);
return statearr_19926;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14003__auto__);
});})(c__14001__auto___19927,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj19985 = {};return obj19985;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__11483__auto__ = m;if(and__11483__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__11483__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__12132__auto__ = (((m == null))?null:m);return (function (){var or__11495__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__11483__auto__ = m;if(and__11483__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__11483__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__12132__auto__ = (((m == null))?null:m);return (function (){var or__11495__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__11483__auto__ = m;if(and__11483__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__11483__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__12132__auto__ = (((m == null))?null:m);return (function (){var or__11495__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__11483__auto__ = m;if(and__11483__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__11483__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__12132__auto__ = (((m == null))?null:m);return (function (){var or__11495__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__11483__auto__ = m;if(and__11483__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__11483__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__12132__auto__ = (((m == null))?null:m);return (function (){var or__11495__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__19986){var map__19991 = p__19986;var map__19991__$1 = ((cljs.core.seq_QMARK_.call(null,map__19991))?cljs.core.apply.call(null,cljs.core.hash_map,map__19991):map__19991);var opts = map__19991__$1;var statearr_19992_19995 = state;(statearr_19992_19995[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__19991,map__19991__$1,opts){
return (function (val){var statearr_19993_19996 = state;(statearr_19993_19996[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__19991,map__19991__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_19994_19997 = state;(statearr_19994_19997[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__19986 = null;if (arguments.length > 3) {
  p__19986 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__19986);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__19998){
var state = cljs.core.first(arglist__19998);
arglist__19998 = cljs.core.next(arglist__19998);
var cont_block = cljs.core.first(arglist__19998);
arglist__19998 = cljs.core.next(arglist__19998);
var ports = cljs.core.first(arglist__19998);
var p__19986 = cljs.core.rest(arglist__19998);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__19986);
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
;var m = (function (){if(typeof cljs.core.async.t20118 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20118 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20119){
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
this.meta20119 = meta20119;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20118.cljs$lang$type = true;
cljs.core.async.t20118.cljs$lang$ctorStr = "cljs.core.async/t20118";
cljs.core.async.t20118.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t20118");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20118.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t20118.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20118.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20118.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20118.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20118.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20118.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20118.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20118.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20120){var self__ = this;
var _20120__$1 = this;return self__.meta20119;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20120,meta20119__$1){var self__ = this;
var _20120__$1 = this;return (new cljs.core.async.t20118(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20119__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t20118 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t20118(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20119){return (new cljs.core.async.t20118(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20119));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t20118(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__14001__auto___20237 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14001__auto___20237,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__14002__auto__ = (function (){var switch__13945__auto__ = ((function (c__14001__auto___20237,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20190){var state_val_20191 = (state_20190[(1)]);if((state_val_20191 === (7)))
{var inst_20134 = (state_20190[(7)]);var inst_20139 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20134);var state_20190__$1 = state_20190;var statearr_20192_20238 = state_20190__$1;(statearr_20192_20238[(2)] = inst_20139);
(statearr_20192_20238[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20191 === (20)))
{var inst_20149 = (state_20190[(8)]);var state_20190__$1 = state_20190;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20190__$1,(23),out,inst_20149);
} else
{if((state_val_20191 === (1)))
{var inst_20124 = (state_20190[(9)]);var inst_20124__$1 = calc_state.call(null);var inst_20125 = cljs.core.seq_QMARK_.call(null,inst_20124__$1);var state_20190__$1 = (function (){var statearr_20193 = state_20190;(statearr_20193[(9)] = inst_20124__$1);
return statearr_20193;
})();if(inst_20125)
{var statearr_20194_20239 = state_20190__$1;(statearr_20194_20239[(1)] = (2));
} else
{var statearr_20195_20240 = state_20190__$1;(statearr_20195_20240[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20191 === (24)))
{var inst_20142 = (state_20190[(10)]);var inst_20134 = inst_20142;var state_20190__$1 = (function (){var statearr_20196 = state_20190;(statearr_20196[(7)] = inst_20134);
return statearr_20196;
})();var statearr_20197_20241 = state_20190__$1;(statearr_20197_20241[(2)] = null);
(statearr_20197_20241[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20191 === (4)))
{var inst_20124 = (state_20190[(9)]);var inst_20130 = (state_20190[(2)]);var inst_20131 = cljs.core.get.call(null,inst_20130,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_20132 = cljs.core.get.call(null,inst_20130,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_20133 = cljs.core.get.call(null,inst_20130,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_20134 = inst_20124;var state_20190__$1 = (function (){var statearr_20198 = state_20190;(statearr_20198[(7)] = inst_20134);
(statearr_20198[(11)] = inst_20133);
(statearr_20198[(12)] = inst_20132);
(statearr_20198[(13)] = inst_20131);
return statearr_20198;
})();var statearr_20199_20242 = state_20190__$1;(statearr_20199_20242[(2)] = null);
(statearr_20199_20242[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20191 === (15)))
{var state_20190__$1 = state_20190;var statearr_20200_20243 = state_20190__$1;(statearr_20200_20243[(2)] = null);
(statearr_20200_20243[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20191 === (21)))
{var inst_20142 = (state_20190[(10)]);var inst_20134 = inst_20142;var state_20190__$1 = (function (){var statearr_20201 = state_20190;(statearr_20201[(7)] = inst_20134);
return statearr_20201;
})();var statearr_20202_20244 = state_20190__$1;(statearr_20202_20244[(2)] = null);
(statearr_20202_20244[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20191 === (13)))
{var inst_20186 = (state_20190[(2)]);var state_20190__$1 = state_20190;var statearr_20203_20245 = state_20190__$1;(statearr_20203_20245[(2)] = inst_20186);
(statearr_20203_20245[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20191 === (22)))
{var inst_20184 = (state_20190[(2)]);var state_20190__$1 = state_20190;var statearr_20204_20246 = state_20190__$1;(statearr_20204_20246[(2)] = inst_20184);
(statearr_20204_20246[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20191 === (6)))
{var inst_20188 = (state_20190[(2)]);var state_20190__$1 = state_20190;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20190__$1,inst_20188);
} else
{if((state_val_20191 === (25)))
{var state_20190__$1 = state_20190;var statearr_20205_20247 = state_20190__$1;(statearr_20205_20247[(2)] = null);
(statearr_20205_20247[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20191 === (17)))
{var inst_20164 = (state_20190[(14)]);var state_20190__$1 = state_20190;var statearr_20206_20248 = state_20190__$1;(statearr_20206_20248[(2)] = inst_20164);
(statearr_20206_20248[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20191 === (3)))
{var inst_20124 = (state_20190[(9)]);var state_20190__$1 = state_20190;var statearr_20207_20249 = state_20190__$1;(statearr_20207_20249[(2)] = inst_20124);
(statearr_20207_20249[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20191 === (12)))
{var inst_20164 = (state_20190[(14)]);var inst_20145 = (state_20190[(15)]);var inst_20150 = (state_20190[(16)]);var inst_20164__$1 = inst_20145.call(null,inst_20150);var state_20190__$1 = (function (){var statearr_20208 = state_20190;(statearr_20208[(14)] = inst_20164__$1);
return statearr_20208;
})();if(cljs.core.truth_(inst_20164__$1))
{var statearr_20209_20250 = state_20190__$1;(statearr_20209_20250[(1)] = (17));
} else
{var statearr_20210_20251 = state_20190__$1;(statearr_20210_20251[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20191 === (2)))
{var inst_20124 = (state_20190[(9)]);var inst_20127 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20124);var state_20190__$1 = state_20190;var statearr_20211_20252 = state_20190__$1;(statearr_20211_20252[(2)] = inst_20127);
(statearr_20211_20252[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20191 === (23)))
{var inst_20175 = (state_20190[(2)]);var state_20190__$1 = state_20190;if(cljs.core.truth_(inst_20175))
{var statearr_20212_20253 = state_20190__$1;(statearr_20212_20253[(1)] = (24));
} else
{var statearr_20213_20254 = state_20190__$1;(statearr_20213_20254[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20191 === (19)))
{var inst_20172 = (state_20190[(2)]);var state_20190__$1 = state_20190;if(cljs.core.truth_(inst_20172))
{var statearr_20214_20255 = state_20190__$1;(statearr_20214_20255[(1)] = (20));
} else
{var statearr_20215_20256 = state_20190__$1;(statearr_20215_20256[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20191 === (11)))
{var inst_20149 = (state_20190[(8)]);var inst_20155 = (inst_20149 == null);var state_20190__$1 = state_20190;if(cljs.core.truth_(inst_20155))
{var statearr_20216_20257 = state_20190__$1;(statearr_20216_20257[(1)] = (14));
} else
{var statearr_20217_20258 = state_20190__$1;(statearr_20217_20258[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20191 === (9)))
{var inst_20142 = (state_20190[(10)]);var inst_20142__$1 = (state_20190[(2)]);var inst_20143 = cljs.core.get.call(null,inst_20142__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_20144 = cljs.core.get.call(null,inst_20142__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_20145 = cljs.core.get.call(null,inst_20142__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_20190__$1 = (function (){var statearr_20218 = state_20190;(statearr_20218[(15)] = inst_20145);
(statearr_20218[(10)] = inst_20142__$1);
(statearr_20218[(17)] = inst_20144);
return statearr_20218;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_20190__$1,(10),inst_20143);
} else
{if((state_val_20191 === (5)))
{var inst_20134 = (state_20190[(7)]);var inst_20137 = cljs.core.seq_QMARK_.call(null,inst_20134);var state_20190__$1 = state_20190;if(inst_20137)
{var statearr_20219_20259 = state_20190__$1;(statearr_20219_20259[(1)] = (7));
} else
{var statearr_20220_20260 = state_20190__$1;(statearr_20220_20260[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20191 === (14)))
{var inst_20150 = (state_20190[(16)]);var inst_20157 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20150);var state_20190__$1 = state_20190;var statearr_20221_20261 = state_20190__$1;(statearr_20221_20261[(2)] = inst_20157);
(statearr_20221_20261[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20191 === (26)))
{var inst_20180 = (state_20190[(2)]);var state_20190__$1 = state_20190;var statearr_20222_20262 = state_20190__$1;(statearr_20222_20262[(2)] = inst_20180);
(statearr_20222_20262[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20191 === (16)))
{var inst_20160 = (state_20190[(2)]);var inst_20161 = calc_state.call(null);var inst_20134 = inst_20161;var state_20190__$1 = (function (){var statearr_20223 = state_20190;(statearr_20223[(7)] = inst_20134);
(statearr_20223[(18)] = inst_20160);
return statearr_20223;
})();var statearr_20224_20263 = state_20190__$1;(statearr_20224_20263[(2)] = null);
(statearr_20224_20263[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20191 === (10)))
{var inst_20149 = (state_20190[(8)]);var inst_20150 = (state_20190[(16)]);var inst_20148 = (state_20190[(2)]);var inst_20149__$1 = cljs.core.nth.call(null,inst_20148,(0),null);var inst_20150__$1 = cljs.core.nth.call(null,inst_20148,(1),null);var inst_20151 = (inst_20149__$1 == null);var inst_20152 = cljs.core._EQ_.call(null,inst_20150__$1,change);var inst_20153 = (inst_20151) || (inst_20152);var state_20190__$1 = (function (){var statearr_20225 = state_20190;(statearr_20225[(8)] = inst_20149__$1);
(statearr_20225[(16)] = inst_20150__$1);
return statearr_20225;
})();if(cljs.core.truth_(inst_20153))
{var statearr_20226_20264 = state_20190__$1;(statearr_20226_20264[(1)] = (11));
} else
{var statearr_20227_20265 = state_20190__$1;(statearr_20227_20265[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20191 === (18)))
{var inst_20145 = (state_20190[(15)]);var inst_20150 = (state_20190[(16)]);var inst_20144 = (state_20190[(17)]);var inst_20167 = cljs.core.empty_QMARK_.call(null,inst_20145);var inst_20168 = inst_20144.call(null,inst_20150);var inst_20169 = cljs.core.not.call(null,inst_20168);var inst_20170 = (inst_20167) && (inst_20169);var state_20190__$1 = state_20190;var statearr_20228_20266 = state_20190__$1;(statearr_20228_20266[(2)] = inst_20170);
(statearr_20228_20266[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20191 === (8)))
{var inst_20134 = (state_20190[(7)]);var state_20190__$1 = state_20190;var statearr_20229_20267 = state_20190__$1;(statearr_20229_20267[(2)] = inst_20134);
(statearr_20229_20267[(1)] = (9));
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
});})(c__14001__auto___20237,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__13945__auto__,c__14001__auto___20237,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__13946__auto__ = null;
var state_machine__13946__auto____0 = (function (){var statearr_20233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20233[(0)] = state_machine__13946__auto__);
(statearr_20233[(1)] = (1));
return statearr_20233;
});
var state_machine__13946__auto____1 = (function (state_20190){while(true){
var ret_value__13947__auto__ = (function (){try{while(true){
var result__13948__auto__ = switch__13945__auto__.call(null,state_20190);if(cljs.core.keyword_identical_QMARK_.call(null,result__13948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13948__auto__;
}
break;
}
}catch (e20234){if((e20234 instanceof Object))
{var ex__13949__auto__ = e20234;var statearr_20235_20268 = state_20190;(statearr_20235_20268[(5)] = ex__13949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20190);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20234;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20269 = state_20190;
state_20190 = G__20269;
continue;
}
} else
{return ret_value__13947__auto__;
}
break;
}
});
state_machine__13946__auto__ = function(state_20190){
switch(arguments.length){
case 0:
return state_machine__13946__auto____0.call(this);
case 1:
return state_machine__13946__auto____1.call(this,state_20190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13946__auto____0;
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13946__auto____1;
return state_machine__13946__auto__;
})()
;})(switch__13945__auto__,c__14001__auto___20237,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__14003__auto__ = (function (){var statearr_20236 = f__14002__auto__.call(null);(statearr_20236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14001__auto___20237);
return statearr_20236;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14003__auto__);
});})(c__14001__auto___20237,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj20271 = {};return obj20271;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__11483__auto__ = p;if(and__11483__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__11483__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__12132__auto__ = (((p == null))?null:p);return (function (){var or__11495__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__11483__auto__ = p;if(and__11483__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__11483__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__12132__auto__ = (((p == null))?null:p);return (function (){var or__11495__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__11483__auto__ = p;if(and__11483__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__11483__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__12132__auto__ = (((p == null))?null:p);return (function (){var or__11495__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__11483__auto__ = p;if(and__11483__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__11483__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__12132__auto__ = (((p == null))?null:p);return (function (){var or__11495__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
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
return (function (topic){var or__11495__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__11495__auto__,mults){
return (function (p1__20272_SHARP_){if(cljs.core.truth_(p1__20272_SHARP_.call(null,topic)))
{return p1__20272_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__20272_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__11495__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t20395 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20395 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta20396){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta20396 = meta20396;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20395.cljs$lang$type = true;
cljs.core.async.t20395.cljs$lang$ctorStr = "cljs.core.async/t20395";
cljs.core.async.t20395.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t20395");
});})(mults,ensure_mult))
;
cljs.core.async.t20395.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t20395.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t20395.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t20395.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t20395.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t20395.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20395.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t20395.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20397){var self__ = this;
var _20397__$1 = this;return self__.meta20396;
});})(mults,ensure_mult))
;
cljs.core.async.t20395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20397,meta20396__$1){var self__ = this;
var _20397__$1 = this;return (new cljs.core.async.t20395(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta20396__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t20395 = ((function (mults,ensure_mult){
return (function __GT_t20395(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20396){return (new cljs.core.async.t20395(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20396));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t20395(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__14001__auto___20517 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14001__auto___20517,mults,ensure_mult,p){
return (function (){var f__14002__auto__ = (function (){var switch__13945__auto__ = ((function (c__14001__auto___20517,mults,ensure_mult,p){
return (function (state_20469){var state_val_20470 = (state_20469[(1)]);if((state_val_20470 === (7)))
{var inst_20465 = (state_20469[(2)]);var state_20469__$1 = state_20469;var statearr_20471_20518 = state_20469__$1;(statearr_20471_20518[(2)] = inst_20465);
(statearr_20471_20518[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20470 === (20)))
{var state_20469__$1 = state_20469;var statearr_20472_20519 = state_20469__$1;(statearr_20472_20519[(2)] = null);
(statearr_20472_20519[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20470 === (1)))
{var state_20469__$1 = state_20469;var statearr_20473_20520 = state_20469__$1;(statearr_20473_20520[(2)] = null);
(statearr_20473_20520[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20470 === (24)))
{var inst_20448 = (state_20469[(7)]);var inst_20457 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20448);var state_20469__$1 = state_20469;var statearr_20474_20521 = state_20469__$1;(statearr_20474_20521[(2)] = inst_20457);
(statearr_20474_20521[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20470 === (4)))
{var inst_20400 = (state_20469[(8)]);var inst_20400__$1 = (state_20469[(2)]);var inst_20401 = (inst_20400__$1 == null);var state_20469__$1 = (function (){var statearr_20475 = state_20469;(statearr_20475[(8)] = inst_20400__$1);
return statearr_20475;
})();if(cljs.core.truth_(inst_20401))
{var statearr_20476_20522 = state_20469__$1;(statearr_20476_20522[(1)] = (5));
} else
{var statearr_20477_20523 = state_20469__$1;(statearr_20477_20523[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20470 === (15)))
{var inst_20442 = (state_20469[(2)]);var state_20469__$1 = state_20469;var statearr_20478_20524 = state_20469__$1;(statearr_20478_20524[(2)] = inst_20442);
(statearr_20478_20524[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20470 === (21)))
{var inst_20462 = (state_20469[(2)]);var state_20469__$1 = (function (){var statearr_20479 = state_20469;(statearr_20479[(9)] = inst_20462);
return statearr_20479;
})();var statearr_20480_20525 = state_20469__$1;(statearr_20480_20525[(2)] = null);
(statearr_20480_20525[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20470 === (13)))
{var inst_20424 = (state_20469[(10)]);var inst_20426 = cljs.core.chunked_seq_QMARK_.call(null,inst_20424);var state_20469__$1 = state_20469;if(inst_20426)
{var statearr_20481_20526 = state_20469__$1;(statearr_20481_20526[(1)] = (16));
} else
{var statearr_20482_20527 = state_20469__$1;(statearr_20482_20527[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20470 === (22)))
{var inst_20454 = (state_20469[(2)]);var state_20469__$1 = state_20469;if(cljs.core.truth_(inst_20454))
{var statearr_20483_20528 = state_20469__$1;(statearr_20483_20528[(1)] = (23));
} else
{var statearr_20484_20529 = state_20469__$1;(statearr_20484_20529[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20470 === (6)))
{var inst_20450 = (state_20469[(11)]);var inst_20448 = (state_20469[(7)]);var inst_20400 = (state_20469[(8)]);var inst_20448__$1 = topic_fn.call(null,inst_20400);var inst_20449 = cljs.core.deref.call(null,mults);var inst_20450__$1 = cljs.core.get.call(null,inst_20449,inst_20448__$1);var state_20469__$1 = (function (){var statearr_20485 = state_20469;(statearr_20485[(11)] = inst_20450__$1);
(statearr_20485[(7)] = inst_20448__$1);
return statearr_20485;
})();if(cljs.core.truth_(inst_20450__$1))
{var statearr_20486_20530 = state_20469__$1;(statearr_20486_20530[(1)] = (19));
} else
{var statearr_20487_20531 = state_20469__$1;(statearr_20487_20531[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20470 === (25)))
{var inst_20459 = (state_20469[(2)]);var state_20469__$1 = state_20469;var statearr_20488_20532 = state_20469__$1;(statearr_20488_20532[(2)] = inst_20459);
(statearr_20488_20532[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20470 === (17)))
{var inst_20424 = (state_20469[(10)]);var inst_20433 = cljs.core.first.call(null,inst_20424);var inst_20434 = cljs.core.async.muxch_STAR_.call(null,inst_20433);var inst_20435 = cljs.core.async.close_BANG_.call(null,inst_20434);var inst_20436 = cljs.core.next.call(null,inst_20424);var inst_20410 = inst_20436;var inst_20411 = null;var inst_20412 = (0);var inst_20413 = (0);var state_20469__$1 = (function (){var statearr_20489 = state_20469;(statearr_20489[(12)] = inst_20410);
(statearr_20489[(13)] = inst_20435);
(statearr_20489[(14)] = inst_20412);
(statearr_20489[(15)] = inst_20411);
(statearr_20489[(16)] = inst_20413);
return statearr_20489;
})();var statearr_20490_20533 = state_20469__$1;(statearr_20490_20533[(2)] = null);
(statearr_20490_20533[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20470 === (3)))
{var inst_20467 = (state_20469[(2)]);var state_20469__$1 = state_20469;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20469__$1,inst_20467);
} else
{if((state_val_20470 === (12)))
{var inst_20444 = (state_20469[(2)]);var state_20469__$1 = state_20469;var statearr_20491_20534 = state_20469__$1;(statearr_20491_20534[(2)] = inst_20444);
(statearr_20491_20534[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20470 === (2)))
{var state_20469__$1 = state_20469;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20469__$1,(4),ch);
} else
{if((state_val_20470 === (23)))
{var state_20469__$1 = state_20469;var statearr_20492_20535 = state_20469__$1;(statearr_20492_20535[(2)] = null);
(statearr_20492_20535[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20470 === (19)))
{var inst_20450 = (state_20469[(11)]);var inst_20400 = (state_20469[(8)]);var inst_20452 = cljs.core.async.muxch_STAR_.call(null,inst_20450);var state_20469__$1 = state_20469;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20469__$1,(22),inst_20452,inst_20400);
} else
{if((state_val_20470 === (11)))
{var inst_20410 = (state_20469[(12)]);var inst_20424 = (state_20469[(10)]);var inst_20424__$1 = cljs.core.seq.call(null,inst_20410);var state_20469__$1 = (function (){var statearr_20493 = state_20469;(statearr_20493[(10)] = inst_20424__$1);
return statearr_20493;
})();if(inst_20424__$1)
{var statearr_20494_20536 = state_20469__$1;(statearr_20494_20536[(1)] = (13));
} else
{var statearr_20495_20537 = state_20469__$1;(statearr_20495_20537[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20470 === (9)))
{var inst_20446 = (state_20469[(2)]);var state_20469__$1 = state_20469;var statearr_20496_20538 = state_20469__$1;(statearr_20496_20538[(2)] = inst_20446);
(statearr_20496_20538[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20470 === (5)))
{var inst_20407 = cljs.core.deref.call(null,mults);var inst_20408 = cljs.core.vals.call(null,inst_20407);var inst_20409 = cljs.core.seq.call(null,inst_20408);var inst_20410 = inst_20409;var inst_20411 = null;var inst_20412 = (0);var inst_20413 = (0);var state_20469__$1 = (function (){var statearr_20497 = state_20469;(statearr_20497[(12)] = inst_20410);
(statearr_20497[(14)] = inst_20412);
(statearr_20497[(15)] = inst_20411);
(statearr_20497[(16)] = inst_20413);
return statearr_20497;
})();var statearr_20498_20539 = state_20469__$1;(statearr_20498_20539[(2)] = null);
(statearr_20498_20539[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20470 === (14)))
{var state_20469__$1 = state_20469;var statearr_20502_20540 = state_20469__$1;(statearr_20502_20540[(2)] = null);
(statearr_20502_20540[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20470 === (16)))
{var inst_20424 = (state_20469[(10)]);var inst_20428 = cljs.core.chunk_first.call(null,inst_20424);var inst_20429 = cljs.core.chunk_rest.call(null,inst_20424);var inst_20430 = cljs.core.count.call(null,inst_20428);var inst_20410 = inst_20429;var inst_20411 = inst_20428;var inst_20412 = inst_20430;var inst_20413 = (0);var state_20469__$1 = (function (){var statearr_20503 = state_20469;(statearr_20503[(12)] = inst_20410);
(statearr_20503[(14)] = inst_20412);
(statearr_20503[(15)] = inst_20411);
(statearr_20503[(16)] = inst_20413);
return statearr_20503;
})();var statearr_20504_20541 = state_20469__$1;(statearr_20504_20541[(2)] = null);
(statearr_20504_20541[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20470 === (10)))
{var inst_20410 = (state_20469[(12)]);var inst_20412 = (state_20469[(14)]);var inst_20411 = (state_20469[(15)]);var inst_20413 = (state_20469[(16)]);var inst_20418 = cljs.core._nth.call(null,inst_20411,inst_20413);var inst_20419 = cljs.core.async.muxch_STAR_.call(null,inst_20418);var inst_20420 = cljs.core.async.close_BANG_.call(null,inst_20419);var inst_20421 = (inst_20413 + (1));var tmp20499 = inst_20410;var tmp20500 = inst_20412;var tmp20501 = inst_20411;var inst_20410__$1 = tmp20499;var inst_20411__$1 = tmp20501;var inst_20412__$1 = tmp20500;var inst_20413__$1 = inst_20421;var state_20469__$1 = (function (){var statearr_20505 = state_20469;(statearr_20505[(17)] = inst_20420);
(statearr_20505[(12)] = inst_20410__$1);
(statearr_20505[(14)] = inst_20412__$1);
(statearr_20505[(15)] = inst_20411__$1);
(statearr_20505[(16)] = inst_20413__$1);
return statearr_20505;
})();var statearr_20506_20542 = state_20469__$1;(statearr_20506_20542[(2)] = null);
(statearr_20506_20542[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20470 === (18)))
{var inst_20439 = (state_20469[(2)]);var state_20469__$1 = state_20469;var statearr_20507_20543 = state_20469__$1;(statearr_20507_20543[(2)] = inst_20439);
(statearr_20507_20543[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20470 === (8)))
{var inst_20412 = (state_20469[(14)]);var inst_20413 = (state_20469[(16)]);var inst_20415 = (inst_20413 < inst_20412);var inst_20416 = inst_20415;var state_20469__$1 = state_20469;if(cljs.core.truth_(inst_20416))
{var statearr_20508_20544 = state_20469__$1;(statearr_20508_20544[(1)] = (10));
} else
{var statearr_20509_20545 = state_20469__$1;(statearr_20509_20545[(1)] = (11));
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
});})(c__14001__auto___20517,mults,ensure_mult,p))
;return ((function (switch__13945__auto__,c__14001__auto___20517,mults,ensure_mult,p){
return (function() {
var state_machine__13946__auto__ = null;
var state_machine__13946__auto____0 = (function (){var statearr_20513 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20513[(0)] = state_machine__13946__auto__);
(statearr_20513[(1)] = (1));
return statearr_20513;
});
var state_machine__13946__auto____1 = (function (state_20469){while(true){
var ret_value__13947__auto__ = (function (){try{while(true){
var result__13948__auto__ = switch__13945__auto__.call(null,state_20469);if(cljs.core.keyword_identical_QMARK_.call(null,result__13948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13948__auto__;
}
break;
}
}catch (e20514){if((e20514 instanceof Object))
{var ex__13949__auto__ = e20514;var statearr_20515_20546 = state_20469;(statearr_20515_20546[(5)] = ex__13949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20469);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20514;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20547 = state_20469;
state_20469 = G__20547;
continue;
}
} else
{return ret_value__13947__auto__;
}
break;
}
});
state_machine__13946__auto__ = function(state_20469){
switch(arguments.length){
case 0:
return state_machine__13946__auto____0.call(this);
case 1:
return state_machine__13946__auto____1.call(this,state_20469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13946__auto____0;
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13946__auto____1;
return state_machine__13946__auto__;
})()
;})(switch__13945__auto__,c__14001__auto___20517,mults,ensure_mult,p))
})();var state__14003__auto__ = (function (){var statearr_20516 = f__14002__auto__.call(null);(statearr_20516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14001__auto___20517);
return statearr_20516;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14003__auto__);
});})(c__14001__auto___20517,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__14001__auto___20684 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14001__auto___20684,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__14002__auto__ = (function (){var switch__13945__auto__ = ((function (c__14001__auto___20684,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20654){var state_val_20655 = (state_20654[(1)]);if((state_val_20655 === (7)))
{var state_20654__$1 = state_20654;var statearr_20656_20685 = state_20654__$1;(statearr_20656_20685[(2)] = null);
(statearr_20656_20685[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20655 === (1)))
{var state_20654__$1 = state_20654;var statearr_20657_20686 = state_20654__$1;(statearr_20657_20686[(2)] = null);
(statearr_20657_20686[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20655 === (4)))
{var inst_20618 = (state_20654[(7)]);var inst_20620 = (inst_20618 < cnt);var state_20654__$1 = state_20654;if(cljs.core.truth_(inst_20620))
{var statearr_20658_20687 = state_20654__$1;(statearr_20658_20687[(1)] = (6));
} else
{var statearr_20659_20688 = state_20654__$1;(statearr_20659_20688[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20655 === (15)))
{var inst_20650 = (state_20654[(2)]);var state_20654__$1 = state_20654;var statearr_20660_20689 = state_20654__$1;(statearr_20660_20689[(2)] = inst_20650);
(statearr_20660_20689[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20655 === (13)))
{var inst_20643 = cljs.core.async.close_BANG_.call(null,out);var state_20654__$1 = state_20654;var statearr_20661_20690 = state_20654__$1;(statearr_20661_20690[(2)] = inst_20643);
(statearr_20661_20690[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20655 === (6)))
{var state_20654__$1 = state_20654;var statearr_20662_20691 = state_20654__$1;(statearr_20662_20691[(2)] = null);
(statearr_20662_20691[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20655 === (3)))
{var inst_20652 = (state_20654[(2)]);var state_20654__$1 = state_20654;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20654__$1,inst_20652);
} else
{if((state_val_20655 === (12)))
{var inst_20640 = (state_20654[(8)]);var inst_20640__$1 = (state_20654[(2)]);var inst_20641 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20640__$1);var state_20654__$1 = (function (){var statearr_20663 = state_20654;(statearr_20663[(8)] = inst_20640__$1);
return statearr_20663;
})();if(cljs.core.truth_(inst_20641))
{var statearr_20664_20692 = state_20654__$1;(statearr_20664_20692[(1)] = (13));
} else
{var statearr_20665_20693 = state_20654__$1;(statearr_20665_20693[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20655 === (2)))
{var inst_20617 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_20618 = (0);var state_20654__$1 = (function (){var statearr_20666 = state_20654;(statearr_20666[(9)] = inst_20617);
(statearr_20666[(7)] = inst_20618);
return statearr_20666;
})();var statearr_20667_20694 = state_20654__$1;(statearr_20667_20694[(2)] = null);
(statearr_20667_20694[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20655 === (11)))
{var inst_20618 = (state_20654[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20654,(10),Object,null,(9));var inst_20627 = chs__$1.call(null,inst_20618);var inst_20628 = done.call(null,inst_20618);var inst_20629 = cljs.core.async.take_BANG_.call(null,inst_20627,inst_20628);var state_20654__$1 = state_20654;var statearr_20668_20695 = state_20654__$1;(statearr_20668_20695[(2)] = inst_20629);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20654__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20655 === (9)))
{var inst_20618 = (state_20654[(7)]);var inst_20631 = (state_20654[(2)]);var inst_20632 = (inst_20618 + (1));var inst_20618__$1 = inst_20632;var state_20654__$1 = (function (){var statearr_20669 = state_20654;(statearr_20669[(10)] = inst_20631);
(statearr_20669[(7)] = inst_20618__$1);
return statearr_20669;
})();var statearr_20670_20696 = state_20654__$1;(statearr_20670_20696[(2)] = null);
(statearr_20670_20696[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20655 === (5)))
{var inst_20638 = (state_20654[(2)]);var state_20654__$1 = (function (){var statearr_20671 = state_20654;(statearr_20671[(11)] = inst_20638);
return statearr_20671;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20654__$1,(12),dchan);
} else
{if((state_val_20655 === (14)))
{var inst_20640 = (state_20654[(8)]);var inst_20645 = cljs.core.apply.call(null,f,inst_20640);var state_20654__$1 = state_20654;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20654__$1,(16),out,inst_20645);
} else
{if((state_val_20655 === (16)))
{var inst_20647 = (state_20654[(2)]);var state_20654__$1 = (function (){var statearr_20672 = state_20654;(statearr_20672[(12)] = inst_20647);
return statearr_20672;
})();var statearr_20673_20697 = state_20654__$1;(statearr_20673_20697[(2)] = null);
(statearr_20673_20697[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20655 === (10)))
{var inst_20622 = (state_20654[(2)]);var inst_20623 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_20654__$1 = (function (){var statearr_20674 = state_20654;(statearr_20674[(13)] = inst_20622);
return statearr_20674;
})();var statearr_20675_20698 = state_20654__$1;(statearr_20675_20698[(2)] = inst_20623);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20654__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20655 === (8)))
{var inst_20636 = (state_20654[(2)]);var state_20654__$1 = state_20654;var statearr_20676_20699 = state_20654__$1;(statearr_20676_20699[(2)] = inst_20636);
(statearr_20676_20699[(1)] = (5));
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
});})(c__14001__auto___20684,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__13945__auto__,c__14001__auto___20684,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__13946__auto__ = null;
var state_machine__13946__auto____0 = (function (){var statearr_20680 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20680[(0)] = state_machine__13946__auto__);
(statearr_20680[(1)] = (1));
return statearr_20680;
});
var state_machine__13946__auto____1 = (function (state_20654){while(true){
var ret_value__13947__auto__ = (function (){try{while(true){
var result__13948__auto__ = switch__13945__auto__.call(null,state_20654);if(cljs.core.keyword_identical_QMARK_.call(null,result__13948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13948__auto__;
}
break;
}
}catch (e20681){if((e20681 instanceof Object))
{var ex__13949__auto__ = e20681;var statearr_20682_20700 = state_20654;(statearr_20682_20700[(5)] = ex__13949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20654);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20681;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20701 = state_20654;
state_20654 = G__20701;
continue;
}
} else
{return ret_value__13947__auto__;
}
break;
}
});
state_machine__13946__auto__ = function(state_20654){
switch(arguments.length){
case 0:
return state_machine__13946__auto____0.call(this);
case 1:
return state_machine__13946__auto____1.call(this,state_20654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13946__auto____0;
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13946__auto____1;
return state_machine__13946__auto__;
})()
;})(switch__13945__auto__,c__14001__auto___20684,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__14003__auto__ = (function (){var statearr_20683 = f__14002__auto__.call(null);(statearr_20683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14001__auto___20684);
return statearr_20683;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14003__auto__);
});})(c__14001__auto___20684,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14001__auto___20809 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14001__auto___20809,out){
return (function (){var f__14002__auto__ = (function (){var switch__13945__auto__ = ((function (c__14001__auto___20809,out){
return (function (state_20785){var state_val_20786 = (state_20785[(1)]);if((state_val_20786 === (7)))
{var inst_20765 = (state_20785[(7)]);var inst_20764 = (state_20785[(8)]);var inst_20764__$1 = (state_20785[(2)]);var inst_20765__$1 = cljs.core.nth.call(null,inst_20764__$1,(0),null);var inst_20766 = cljs.core.nth.call(null,inst_20764__$1,(1),null);var inst_20767 = (inst_20765__$1 == null);var state_20785__$1 = (function (){var statearr_20787 = state_20785;(statearr_20787[(9)] = inst_20766);
(statearr_20787[(7)] = inst_20765__$1);
(statearr_20787[(8)] = inst_20764__$1);
return statearr_20787;
})();if(cljs.core.truth_(inst_20767))
{var statearr_20788_20810 = state_20785__$1;(statearr_20788_20810[(1)] = (8));
} else
{var statearr_20789_20811 = state_20785__$1;(statearr_20789_20811[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20786 === (1)))
{var inst_20756 = cljs.core.vec.call(null,chs);var inst_20757 = inst_20756;var state_20785__$1 = (function (){var statearr_20790 = state_20785;(statearr_20790[(10)] = inst_20757);
return statearr_20790;
})();var statearr_20791_20812 = state_20785__$1;(statearr_20791_20812[(2)] = null);
(statearr_20791_20812[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20786 === (4)))
{var inst_20757 = (state_20785[(10)]);var state_20785__$1 = state_20785;return cljs.core.async.ioc_alts_BANG_.call(null,state_20785__$1,(7),inst_20757);
} else
{if((state_val_20786 === (6)))
{var inst_20781 = (state_20785[(2)]);var state_20785__$1 = state_20785;var statearr_20792_20813 = state_20785__$1;(statearr_20792_20813[(2)] = inst_20781);
(statearr_20792_20813[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20786 === (3)))
{var inst_20783 = (state_20785[(2)]);var state_20785__$1 = state_20785;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20785__$1,inst_20783);
} else
{if((state_val_20786 === (2)))
{var inst_20757 = (state_20785[(10)]);var inst_20759 = cljs.core.count.call(null,inst_20757);var inst_20760 = (inst_20759 > (0));var state_20785__$1 = state_20785;if(cljs.core.truth_(inst_20760))
{var statearr_20794_20814 = state_20785__$1;(statearr_20794_20814[(1)] = (4));
} else
{var statearr_20795_20815 = state_20785__$1;(statearr_20795_20815[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20786 === (11)))
{var inst_20757 = (state_20785[(10)]);var inst_20774 = (state_20785[(2)]);var tmp20793 = inst_20757;var inst_20757__$1 = tmp20793;var state_20785__$1 = (function (){var statearr_20796 = state_20785;(statearr_20796[(11)] = inst_20774);
(statearr_20796[(10)] = inst_20757__$1);
return statearr_20796;
})();var statearr_20797_20816 = state_20785__$1;(statearr_20797_20816[(2)] = null);
(statearr_20797_20816[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20786 === (9)))
{var inst_20765 = (state_20785[(7)]);var state_20785__$1 = state_20785;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20785__$1,(11),out,inst_20765);
} else
{if((state_val_20786 === (5)))
{var inst_20779 = cljs.core.async.close_BANG_.call(null,out);var state_20785__$1 = state_20785;var statearr_20798_20817 = state_20785__$1;(statearr_20798_20817[(2)] = inst_20779);
(statearr_20798_20817[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20786 === (10)))
{var inst_20777 = (state_20785[(2)]);var state_20785__$1 = state_20785;var statearr_20799_20818 = state_20785__$1;(statearr_20799_20818[(2)] = inst_20777);
(statearr_20799_20818[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20786 === (8)))
{var inst_20766 = (state_20785[(9)]);var inst_20765 = (state_20785[(7)]);var inst_20757 = (state_20785[(10)]);var inst_20764 = (state_20785[(8)]);var inst_20769 = (function (){var c = inst_20766;var v = inst_20765;var vec__20762 = inst_20764;var cs = inst_20757;return ((function (c,v,vec__20762,cs,inst_20766,inst_20765,inst_20757,inst_20764,state_val_20786,c__14001__auto___20809,out){
return (function (p1__20702_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__20702_SHARP_);
});
;})(c,v,vec__20762,cs,inst_20766,inst_20765,inst_20757,inst_20764,state_val_20786,c__14001__auto___20809,out))
})();var inst_20770 = cljs.core.filterv.call(null,inst_20769,inst_20757);var inst_20757__$1 = inst_20770;var state_20785__$1 = (function (){var statearr_20800 = state_20785;(statearr_20800[(10)] = inst_20757__$1);
return statearr_20800;
})();var statearr_20801_20819 = state_20785__$1;(statearr_20801_20819[(2)] = null);
(statearr_20801_20819[(1)] = (2));
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
});})(c__14001__auto___20809,out))
;return ((function (switch__13945__auto__,c__14001__auto___20809,out){
return (function() {
var state_machine__13946__auto__ = null;
var state_machine__13946__auto____0 = (function (){var statearr_20805 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20805[(0)] = state_machine__13946__auto__);
(statearr_20805[(1)] = (1));
return statearr_20805;
});
var state_machine__13946__auto____1 = (function (state_20785){while(true){
var ret_value__13947__auto__ = (function (){try{while(true){
var result__13948__auto__ = switch__13945__auto__.call(null,state_20785);if(cljs.core.keyword_identical_QMARK_.call(null,result__13948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13948__auto__;
}
break;
}
}catch (e20806){if((e20806 instanceof Object))
{var ex__13949__auto__ = e20806;var statearr_20807_20820 = state_20785;(statearr_20807_20820[(5)] = ex__13949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20785);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20806;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20821 = state_20785;
state_20785 = G__20821;
continue;
}
} else
{return ret_value__13947__auto__;
}
break;
}
});
state_machine__13946__auto__ = function(state_20785){
switch(arguments.length){
case 0:
return state_machine__13946__auto____0.call(this);
case 1:
return state_machine__13946__auto____1.call(this,state_20785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13946__auto____0;
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13946__auto____1;
return state_machine__13946__auto__;
})()
;})(switch__13945__auto__,c__14001__auto___20809,out))
})();var state__14003__auto__ = (function (){var statearr_20808 = f__14002__auto__.call(null);(statearr_20808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14001__auto___20809);
return statearr_20808;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14003__auto__);
});})(c__14001__auto___20809,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14001__auto___20914 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14001__auto___20914,out){
return (function (){var f__14002__auto__ = (function (){var switch__13945__auto__ = ((function (c__14001__auto___20914,out){
return (function (state_20891){var state_val_20892 = (state_20891[(1)]);if((state_val_20892 === (7)))
{var inst_20873 = (state_20891[(7)]);var inst_20873__$1 = (state_20891[(2)]);var inst_20874 = (inst_20873__$1 == null);var inst_20875 = cljs.core.not.call(null,inst_20874);var state_20891__$1 = (function (){var statearr_20893 = state_20891;(statearr_20893[(7)] = inst_20873__$1);
return statearr_20893;
})();if(inst_20875)
{var statearr_20894_20915 = state_20891__$1;(statearr_20894_20915[(1)] = (8));
} else
{var statearr_20895_20916 = state_20891__$1;(statearr_20895_20916[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20892 === (1)))
{var inst_20868 = (0);var state_20891__$1 = (function (){var statearr_20896 = state_20891;(statearr_20896[(8)] = inst_20868);
return statearr_20896;
})();var statearr_20897_20917 = state_20891__$1;(statearr_20897_20917[(2)] = null);
(statearr_20897_20917[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20892 === (4)))
{var state_20891__$1 = state_20891;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20891__$1,(7),ch);
} else
{if((state_val_20892 === (6)))
{var inst_20886 = (state_20891[(2)]);var state_20891__$1 = state_20891;var statearr_20898_20918 = state_20891__$1;(statearr_20898_20918[(2)] = inst_20886);
(statearr_20898_20918[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20892 === (3)))
{var inst_20888 = (state_20891[(2)]);var inst_20889 = cljs.core.async.close_BANG_.call(null,out);var state_20891__$1 = (function (){var statearr_20899 = state_20891;(statearr_20899[(9)] = inst_20888);
return statearr_20899;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20891__$1,inst_20889);
} else
{if((state_val_20892 === (2)))
{var inst_20868 = (state_20891[(8)]);var inst_20870 = (inst_20868 < n);var state_20891__$1 = state_20891;if(cljs.core.truth_(inst_20870))
{var statearr_20900_20919 = state_20891__$1;(statearr_20900_20919[(1)] = (4));
} else
{var statearr_20901_20920 = state_20891__$1;(statearr_20901_20920[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20892 === (11)))
{var inst_20868 = (state_20891[(8)]);var inst_20878 = (state_20891[(2)]);var inst_20879 = (inst_20868 + (1));var inst_20868__$1 = inst_20879;var state_20891__$1 = (function (){var statearr_20902 = state_20891;(statearr_20902[(8)] = inst_20868__$1);
(statearr_20902[(10)] = inst_20878);
return statearr_20902;
})();var statearr_20903_20921 = state_20891__$1;(statearr_20903_20921[(2)] = null);
(statearr_20903_20921[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20892 === (9)))
{var state_20891__$1 = state_20891;var statearr_20904_20922 = state_20891__$1;(statearr_20904_20922[(2)] = null);
(statearr_20904_20922[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20892 === (5)))
{var state_20891__$1 = state_20891;var statearr_20905_20923 = state_20891__$1;(statearr_20905_20923[(2)] = null);
(statearr_20905_20923[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20892 === (10)))
{var inst_20883 = (state_20891[(2)]);var state_20891__$1 = state_20891;var statearr_20906_20924 = state_20891__$1;(statearr_20906_20924[(2)] = inst_20883);
(statearr_20906_20924[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20892 === (8)))
{var inst_20873 = (state_20891[(7)]);var state_20891__$1 = state_20891;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20891__$1,(11),out,inst_20873);
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
});})(c__14001__auto___20914,out))
;return ((function (switch__13945__auto__,c__14001__auto___20914,out){
return (function() {
var state_machine__13946__auto__ = null;
var state_machine__13946__auto____0 = (function (){var statearr_20910 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_20910[(0)] = state_machine__13946__auto__);
(statearr_20910[(1)] = (1));
return statearr_20910;
});
var state_machine__13946__auto____1 = (function (state_20891){while(true){
var ret_value__13947__auto__ = (function (){try{while(true){
var result__13948__auto__ = switch__13945__auto__.call(null,state_20891);if(cljs.core.keyword_identical_QMARK_.call(null,result__13948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13948__auto__;
}
break;
}
}catch (e20911){if((e20911 instanceof Object))
{var ex__13949__auto__ = e20911;var statearr_20912_20925 = state_20891;(statearr_20912_20925[(5)] = ex__13949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20891);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20911;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20926 = state_20891;
state_20891 = G__20926;
continue;
}
} else
{return ret_value__13947__auto__;
}
break;
}
});
state_machine__13946__auto__ = function(state_20891){
switch(arguments.length){
case 0:
return state_machine__13946__auto____0.call(this);
case 1:
return state_machine__13946__auto____1.call(this,state_20891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13946__auto____0;
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13946__auto____1;
return state_machine__13946__auto__;
})()
;})(switch__13945__auto__,c__14001__auto___20914,out))
})();var state__14003__auto__ = (function (){var statearr_20913 = f__14002__auto__.call(null);(statearr_20913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14001__auto___20914);
return statearr_20913;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14003__auto__);
});})(c__14001__auto___20914,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t20934 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20934 = (function (ch,f,map_LT_,meta20935){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20935 = meta20935;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20934.cljs$lang$type = true;
cljs.core.async.t20934.cljs$lang$ctorStr = "cljs.core.async/t20934";
cljs.core.async.t20934.cljs$lang$ctorPrWriter = (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t20934");
});
cljs.core.async.t20934.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20934.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t20934.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20934.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t20937 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20937 = (function (fn1,_,meta20935,ch,f,map_LT_,meta20938){
this.fn1 = fn1;
this._ = _;
this.meta20935 = meta20935;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20938 = meta20938;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20937.cljs$lang$type = true;
cljs.core.async.t20937.cljs$lang$ctorStr = "cljs.core.async/t20937";
cljs.core.async.t20937.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t20937");
});})(___$1))
;
cljs.core.async.t20937.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20937.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t20937.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__20927_SHARP_){return f1.call(null,(((p1__20927_SHARP_ == null))?null:self__.f.call(null,p1__20927_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t20937.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20939){var self__ = this;
var _20939__$1 = this;return self__.meta20938;
});})(___$1))
;
cljs.core.async.t20937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20939,meta20938__$1){var self__ = this;
var _20939__$1 = this;return (new cljs.core.async.t20937(self__.fn1,self__._,self__.meta20935,self__.ch,self__.f,self__.map_LT_,meta20938__$1));
});})(___$1))
;
cljs.core.async.__GT_t20937 = ((function (___$1){
return (function __GT_t20937(fn1__$1,___$2,meta20935__$1,ch__$2,f__$2,map_LT___$2,meta20938){return (new cljs.core.async.t20937(fn1__$1,___$2,meta20935__$1,ch__$2,f__$2,map_LT___$2,meta20938));
});})(___$1))
;
}
return (new cljs.core.async.t20937(fn1,___$1,self__.meta20935,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__11483__auto__ = ret;if(cljs.core.truth_(and__11483__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__11483__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t20934.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20934.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t20934.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t20934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20936){var self__ = this;
var _20936__$1 = this;return self__.meta20935;
});
cljs.core.async.t20934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20936,meta20935__$1){var self__ = this;
var _20936__$1 = this;return (new cljs.core.async.t20934(self__.ch,self__.f,self__.map_LT_,meta20935__$1));
});
cljs.core.async.__GT_t20934 = (function __GT_t20934(ch__$1,f__$1,map_LT___$1,meta20935){return (new cljs.core.async.t20934(ch__$1,f__$1,map_LT___$1,meta20935));
});
}
return (new cljs.core.async.t20934(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t20943 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20943 = (function (ch,f,map_GT_,meta20944){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta20944 = meta20944;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20943.cljs$lang$type = true;
cljs.core.async.t20943.cljs$lang$ctorStr = "cljs.core.async/t20943";
cljs.core.async.t20943.cljs$lang$ctorPrWriter = (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t20943");
});
cljs.core.async.t20943.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20943.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t20943.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20943.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t20943.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20943.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t20943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20945){var self__ = this;
var _20945__$1 = this;return self__.meta20944;
});
cljs.core.async.t20943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20945,meta20944__$1){var self__ = this;
var _20945__$1 = this;return (new cljs.core.async.t20943(self__.ch,self__.f,self__.map_GT_,meta20944__$1));
});
cljs.core.async.__GT_t20943 = (function __GT_t20943(ch__$1,f__$1,map_GT___$1,meta20944){return (new cljs.core.async.t20943(ch__$1,f__$1,map_GT___$1,meta20944));
});
}
return (new cljs.core.async.t20943(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t20949 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20949 = (function (ch,p,filter_GT_,meta20950){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta20950 = meta20950;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20949.cljs$lang$type = true;
cljs.core.async.t20949.cljs$lang$ctorStr = "cljs.core.async/t20949";
cljs.core.async.t20949.cljs$lang$ctorPrWriter = (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t20949");
});
cljs.core.async.t20949.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20949.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t20949.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20949.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t20949.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20949.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t20949.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t20949.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20951){var self__ = this;
var _20951__$1 = this;return self__.meta20950;
});
cljs.core.async.t20949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20951,meta20950__$1){var self__ = this;
var _20951__$1 = this;return (new cljs.core.async.t20949(self__.ch,self__.p,self__.filter_GT_,meta20950__$1));
});
cljs.core.async.__GT_t20949 = (function __GT_t20949(ch__$1,p__$1,filter_GT___$1,meta20950){return (new cljs.core.async.t20949(ch__$1,p__$1,filter_GT___$1,meta20950));
});
}
return (new cljs.core.async.t20949(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14001__auto___21034 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14001__auto___21034,out){
return (function (){var f__14002__auto__ = (function (){var switch__13945__auto__ = ((function (c__14001__auto___21034,out){
return (function (state_21013){var state_val_21014 = (state_21013[(1)]);if((state_val_21014 === (7)))
{var inst_21009 = (state_21013[(2)]);var state_21013__$1 = state_21013;var statearr_21015_21035 = state_21013__$1;(statearr_21015_21035[(2)] = inst_21009);
(statearr_21015_21035[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21014 === (1)))
{var state_21013__$1 = state_21013;var statearr_21016_21036 = state_21013__$1;(statearr_21016_21036[(2)] = null);
(statearr_21016_21036[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21014 === (4)))
{var inst_20995 = (state_21013[(7)]);var inst_20995__$1 = (state_21013[(2)]);var inst_20996 = (inst_20995__$1 == null);var state_21013__$1 = (function (){var statearr_21017 = state_21013;(statearr_21017[(7)] = inst_20995__$1);
return statearr_21017;
})();if(cljs.core.truth_(inst_20996))
{var statearr_21018_21037 = state_21013__$1;(statearr_21018_21037[(1)] = (5));
} else
{var statearr_21019_21038 = state_21013__$1;(statearr_21019_21038[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21014 === (6)))
{var inst_20995 = (state_21013[(7)]);var inst_21000 = p.call(null,inst_20995);var state_21013__$1 = state_21013;if(cljs.core.truth_(inst_21000))
{var statearr_21020_21039 = state_21013__$1;(statearr_21020_21039[(1)] = (8));
} else
{var statearr_21021_21040 = state_21013__$1;(statearr_21021_21040[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21014 === (3)))
{var inst_21011 = (state_21013[(2)]);var state_21013__$1 = state_21013;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21013__$1,inst_21011);
} else
{if((state_val_21014 === (2)))
{var state_21013__$1 = state_21013;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21013__$1,(4),ch);
} else
{if((state_val_21014 === (11)))
{var inst_21003 = (state_21013[(2)]);var state_21013__$1 = state_21013;var statearr_21022_21041 = state_21013__$1;(statearr_21022_21041[(2)] = inst_21003);
(statearr_21022_21041[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21014 === (9)))
{var state_21013__$1 = state_21013;var statearr_21023_21042 = state_21013__$1;(statearr_21023_21042[(2)] = null);
(statearr_21023_21042[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21014 === (5)))
{var inst_20998 = cljs.core.async.close_BANG_.call(null,out);var state_21013__$1 = state_21013;var statearr_21024_21043 = state_21013__$1;(statearr_21024_21043[(2)] = inst_20998);
(statearr_21024_21043[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21014 === (10)))
{var inst_21006 = (state_21013[(2)]);var state_21013__$1 = (function (){var statearr_21025 = state_21013;(statearr_21025[(8)] = inst_21006);
return statearr_21025;
})();var statearr_21026_21044 = state_21013__$1;(statearr_21026_21044[(2)] = null);
(statearr_21026_21044[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21014 === (8)))
{var inst_20995 = (state_21013[(7)]);var state_21013__$1 = state_21013;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21013__$1,(11),out,inst_20995);
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
});})(c__14001__auto___21034,out))
;return ((function (switch__13945__auto__,c__14001__auto___21034,out){
return (function() {
var state_machine__13946__auto__ = null;
var state_machine__13946__auto____0 = (function (){var statearr_21030 = [null,null,null,null,null,null,null,null,null];(statearr_21030[(0)] = state_machine__13946__auto__);
(statearr_21030[(1)] = (1));
return statearr_21030;
});
var state_machine__13946__auto____1 = (function (state_21013){while(true){
var ret_value__13947__auto__ = (function (){try{while(true){
var result__13948__auto__ = switch__13945__auto__.call(null,state_21013);if(cljs.core.keyword_identical_QMARK_.call(null,result__13948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13948__auto__;
}
break;
}
}catch (e21031){if((e21031 instanceof Object))
{var ex__13949__auto__ = e21031;var statearr_21032_21045 = state_21013;(statearr_21032_21045[(5)] = ex__13949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21013);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21031;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21046 = state_21013;
state_21013 = G__21046;
continue;
}
} else
{return ret_value__13947__auto__;
}
break;
}
});
state_machine__13946__auto__ = function(state_21013){
switch(arguments.length){
case 0:
return state_machine__13946__auto____0.call(this);
case 1:
return state_machine__13946__auto____1.call(this,state_21013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13946__auto____0;
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13946__auto____1;
return state_machine__13946__auto__;
})()
;})(switch__13945__auto__,c__14001__auto___21034,out))
})();var state__14003__auto__ = (function (){var statearr_21033 = f__14002__auto__.call(null);(statearr_21033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14001__auto___21034);
return statearr_21033;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14003__auto__);
});})(c__14001__auto___21034,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__14001__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14001__auto__){
return (function (){var f__14002__auto__ = (function (){var switch__13945__auto__ = ((function (c__14001__auto__){
return (function (state_21212){var state_val_21213 = (state_21212[(1)]);if((state_val_21213 === (7)))
{var inst_21208 = (state_21212[(2)]);var state_21212__$1 = state_21212;var statearr_21214_21255 = state_21212__$1;(statearr_21214_21255[(2)] = inst_21208);
(statearr_21214_21255[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21213 === (20)))
{var inst_21178 = (state_21212[(7)]);var inst_21189 = (state_21212[(2)]);var inst_21190 = cljs.core.next.call(null,inst_21178);var inst_21164 = inst_21190;var inst_21165 = null;var inst_21166 = (0);var inst_21167 = (0);var state_21212__$1 = (function (){var statearr_21215 = state_21212;(statearr_21215[(8)] = inst_21167);
(statearr_21215[(9)] = inst_21166);
(statearr_21215[(10)] = inst_21164);
(statearr_21215[(11)] = inst_21165);
(statearr_21215[(12)] = inst_21189);
return statearr_21215;
})();var statearr_21216_21256 = state_21212__$1;(statearr_21216_21256[(2)] = null);
(statearr_21216_21256[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21213 === (1)))
{var state_21212__$1 = state_21212;var statearr_21217_21257 = state_21212__$1;(statearr_21217_21257[(2)] = null);
(statearr_21217_21257[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21213 === (4)))
{var inst_21153 = (state_21212[(13)]);var inst_21153__$1 = (state_21212[(2)]);var inst_21154 = (inst_21153__$1 == null);var state_21212__$1 = (function (){var statearr_21218 = state_21212;(statearr_21218[(13)] = inst_21153__$1);
return statearr_21218;
})();if(cljs.core.truth_(inst_21154))
{var statearr_21219_21258 = state_21212__$1;(statearr_21219_21258[(1)] = (5));
} else
{var statearr_21220_21259 = state_21212__$1;(statearr_21220_21259[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21213 === (15)))
{var state_21212__$1 = state_21212;var statearr_21224_21260 = state_21212__$1;(statearr_21224_21260[(2)] = null);
(statearr_21224_21260[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21213 === (21)))
{var state_21212__$1 = state_21212;var statearr_21225_21261 = state_21212__$1;(statearr_21225_21261[(2)] = null);
(statearr_21225_21261[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21213 === (13)))
{var inst_21167 = (state_21212[(8)]);var inst_21166 = (state_21212[(9)]);var inst_21164 = (state_21212[(10)]);var inst_21165 = (state_21212[(11)]);var inst_21174 = (state_21212[(2)]);var inst_21175 = (inst_21167 + (1));var tmp21221 = inst_21166;var tmp21222 = inst_21164;var tmp21223 = inst_21165;var inst_21164__$1 = tmp21222;var inst_21165__$1 = tmp21223;var inst_21166__$1 = tmp21221;var inst_21167__$1 = inst_21175;var state_21212__$1 = (function (){var statearr_21226 = state_21212;(statearr_21226[(8)] = inst_21167__$1);
(statearr_21226[(9)] = inst_21166__$1);
(statearr_21226[(10)] = inst_21164__$1);
(statearr_21226[(11)] = inst_21165__$1);
(statearr_21226[(14)] = inst_21174);
return statearr_21226;
})();var statearr_21227_21262 = state_21212__$1;(statearr_21227_21262[(2)] = null);
(statearr_21227_21262[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21213 === (22)))
{var state_21212__$1 = state_21212;var statearr_21228_21263 = state_21212__$1;(statearr_21228_21263[(2)] = null);
(statearr_21228_21263[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21213 === (6)))
{var inst_21153 = (state_21212[(13)]);var inst_21162 = f.call(null,inst_21153);var inst_21163 = cljs.core.seq.call(null,inst_21162);var inst_21164 = inst_21163;var inst_21165 = null;var inst_21166 = (0);var inst_21167 = (0);var state_21212__$1 = (function (){var statearr_21229 = state_21212;(statearr_21229[(8)] = inst_21167);
(statearr_21229[(9)] = inst_21166);
(statearr_21229[(10)] = inst_21164);
(statearr_21229[(11)] = inst_21165);
return statearr_21229;
})();var statearr_21230_21264 = state_21212__$1;(statearr_21230_21264[(2)] = null);
(statearr_21230_21264[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21213 === (17)))
{var inst_21178 = (state_21212[(7)]);var inst_21182 = cljs.core.chunk_first.call(null,inst_21178);var inst_21183 = cljs.core.chunk_rest.call(null,inst_21178);var inst_21184 = cljs.core.count.call(null,inst_21182);var inst_21164 = inst_21183;var inst_21165 = inst_21182;var inst_21166 = inst_21184;var inst_21167 = (0);var state_21212__$1 = (function (){var statearr_21231 = state_21212;(statearr_21231[(8)] = inst_21167);
(statearr_21231[(9)] = inst_21166);
(statearr_21231[(10)] = inst_21164);
(statearr_21231[(11)] = inst_21165);
return statearr_21231;
})();var statearr_21232_21265 = state_21212__$1;(statearr_21232_21265[(2)] = null);
(statearr_21232_21265[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21213 === (3)))
{var inst_21210 = (state_21212[(2)]);var state_21212__$1 = state_21212;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21212__$1,inst_21210);
} else
{if((state_val_21213 === (12)))
{var inst_21198 = (state_21212[(2)]);var state_21212__$1 = state_21212;var statearr_21233_21266 = state_21212__$1;(statearr_21233_21266[(2)] = inst_21198);
(statearr_21233_21266[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21213 === (2)))
{var state_21212__$1 = state_21212;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21212__$1,(4),in$);
} else
{if((state_val_21213 === (23)))
{var inst_21206 = (state_21212[(2)]);var state_21212__$1 = state_21212;var statearr_21234_21267 = state_21212__$1;(statearr_21234_21267[(2)] = inst_21206);
(statearr_21234_21267[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21213 === (19)))
{var inst_21193 = (state_21212[(2)]);var state_21212__$1 = state_21212;var statearr_21235_21268 = state_21212__$1;(statearr_21235_21268[(2)] = inst_21193);
(statearr_21235_21268[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21213 === (11)))
{var inst_21178 = (state_21212[(7)]);var inst_21164 = (state_21212[(10)]);var inst_21178__$1 = cljs.core.seq.call(null,inst_21164);var state_21212__$1 = (function (){var statearr_21236 = state_21212;(statearr_21236[(7)] = inst_21178__$1);
return statearr_21236;
})();if(inst_21178__$1)
{var statearr_21237_21269 = state_21212__$1;(statearr_21237_21269[(1)] = (14));
} else
{var statearr_21238_21270 = state_21212__$1;(statearr_21238_21270[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21213 === (9)))
{var inst_21200 = (state_21212[(2)]);var inst_21201 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_21212__$1 = (function (){var statearr_21239 = state_21212;(statearr_21239[(15)] = inst_21200);
return statearr_21239;
})();if(cljs.core.truth_(inst_21201))
{var statearr_21240_21271 = state_21212__$1;(statearr_21240_21271[(1)] = (21));
} else
{var statearr_21241_21272 = state_21212__$1;(statearr_21241_21272[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21213 === (5)))
{var inst_21156 = cljs.core.async.close_BANG_.call(null,out);var state_21212__$1 = state_21212;var statearr_21242_21273 = state_21212__$1;(statearr_21242_21273[(2)] = inst_21156);
(statearr_21242_21273[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21213 === (14)))
{var inst_21178 = (state_21212[(7)]);var inst_21180 = cljs.core.chunked_seq_QMARK_.call(null,inst_21178);var state_21212__$1 = state_21212;if(inst_21180)
{var statearr_21243_21274 = state_21212__$1;(statearr_21243_21274[(1)] = (17));
} else
{var statearr_21244_21275 = state_21212__$1;(statearr_21244_21275[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21213 === (16)))
{var inst_21196 = (state_21212[(2)]);var state_21212__$1 = state_21212;var statearr_21245_21276 = state_21212__$1;(statearr_21245_21276[(2)] = inst_21196);
(statearr_21245_21276[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21213 === (10)))
{var inst_21167 = (state_21212[(8)]);var inst_21165 = (state_21212[(11)]);var inst_21172 = cljs.core._nth.call(null,inst_21165,inst_21167);var state_21212__$1 = state_21212;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21212__$1,(13),out,inst_21172);
} else
{if((state_val_21213 === (18)))
{var inst_21178 = (state_21212[(7)]);var inst_21187 = cljs.core.first.call(null,inst_21178);var state_21212__$1 = state_21212;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21212__$1,(20),out,inst_21187);
} else
{if((state_val_21213 === (8)))
{var inst_21167 = (state_21212[(8)]);var inst_21166 = (state_21212[(9)]);var inst_21169 = (inst_21167 < inst_21166);var inst_21170 = inst_21169;var state_21212__$1 = state_21212;if(cljs.core.truth_(inst_21170))
{var statearr_21246_21277 = state_21212__$1;(statearr_21246_21277[(1)] = (10));
} else
{var statearr_21247_21278 = state_21212__$1;(statearr_21247_21278[(1)] = (11));
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
});})(c__14001__auto__))
;return ((function (switch__13945__auto__,c__14001__auto__){
return (function() {
var state_machine__13946__auto__ = null;
var state_machine__13946__auto____0 = (function (){var statearr_21251 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21251[(0)] = state_machine__13946__auto__);
(statearr_21251[(1)] = (1));
return statearr_21251;
});
var state_machine__13946__auto____1 = (function (state_21212){while(true){
var ret_value__13947__auto__ = (function (){try{while(true){
var result__13948__auto__ = switch__13945__auto__.call(null,state_21212);if(cljs.core.keyword_identical_QMARK_.call(null,result__13948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13948__auto__;
}
break;
}
}catch (e21252){if((e21252 instanceof Object))
{var ex__13949__auto__ = e21252;var statearr_21253_21279 = state_21212;(statearr_21253_21279[(5)] = ex__13949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21212);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21252;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21280 = state_21212;
state_21212 = G__21280;
continue;
}
} else
{return ret_value__13947__auto__;
}
break;
}
});
state_machine__13946__auto__ = function(state_21212){
switch(arguments.length){
case 0:
return state_machine__13946__auto____0.call(this);
case 1:
return state_machine__13946__auto____1.call(this,state_21212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13946__auto____0;
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13946__auto____1;
return state_machine__13946__auto__;
})()
;})(switch__13945__auto__,c__14001__auto__))
})();var state__14003__auto__ = (function (){var statearr_21254 = f__14002__auto__.call(null);(statearr_21254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14001__auto__);
return statearr_21254;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14003__auto__);
});})(c__14001__auto__))
);
return c__14001__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14001__auto___21377 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14001__auto___21377,out){
return (function (){var f__14002__auto__ = (function (){var switch__13945__auto__ = ((function (c__14001__auto___21377,out){
return (function (state_21352){var state_val_21353 = (state_21352[(1)]);if((state_val_21353 === (7)))
{var inst_21347 = (state_21352[(2)]);var state_21352__$1 = state_21352;var statearr_21354_21378 = state_21352__$1;(statearr_21354_21378[(2)] = inst_21347);
(statearr_21354_21378[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21353 === (1)))
{var inst_21329 = null;var state_21352__$1 = (function (){var statearr_21355 = state_21352;(statearr_21355[(7)] = inst_21329);
return statearr_21355;
})();var statearr_21356_21379 = state_21352__$1;(statearr_21356_21379[(2)] = null);
(statearr_21356_21379[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21353 === (4)))
{var inst_21332 = (state_21352[(8)]);var inst_21332__$1 = (state_21352[(2)]);var inst_21333 = (inst_21332__$1 == null);var inst_21334 = cljs.core.not.call(null,inst_21333);var state_21352__$1 = (function (){var statearr_21357 = state_21352;(statearr_21357[(8)] = inst_21332__$1);
return statearr_21357;
})();if(inst_21334)
{var statearr_21358_21380 = state_21352__$1;(statearr_21358_21380[(1)] = (5));
} else
{var statearr_21359_21381 = state_21352__$1;(statearr_21359_21381[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21353 === (6)))
{var state_21352__$1 = state_21352;var statearr_21360_21382 = state_21352__$1;(statearr_21360_21382[(2)] = null);
(statearr_21360_21382[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21353 === (3)))
{var inst_21349 = (state_21352[(2)]);var inst_21350 = cljs.core.async.close_BANG_.call(null,out);var state_21352__$1 = (function (){var statearr_21361 = state_21352;(statearr_21361[(9)] = inst_21349);
return statearr_21361;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21352__$1,inst_21350);
} else
{if((state_val_21353 === (2)))
{var state_21352__$1 = state_21352;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21352__$1,(4),ch);
} else
{if((state_val_21353 === (11)))
{var inst_21332 = (state_21352[(8)]);var inst_21341 = (state_21352[(2)]);var inst_21329 = inst_21332;var state_21352__$1 = (function (){var statearr_21362 = state_21352;(statearr_21362[(7)] = inst_21329);
(statearr_21362[(10)] = inst_21341);
return statearr_21362;
})();var statearr_21363_21383 = state_21352__$1;(statearr_21363_21383[(2)] = null);
(statearr_21363_21383[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21353 === (9)))
{var inst_21332 = (state_21352[(8)]);var state_21352__$1 = state_21352;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21352__$1,(11),out,inst_21332);
} else
{if((state_val_21353 === (5)))
{var inst_21329 = (state_21352[(7)]);var inst_21332 = (state_21352[(8)]);var inst_21336 = cljs.core._EQ_.call(null,inst_21332,inst_21329);var state_21352__$1 = state_21352;if(inst_21336)
{var statearr_21365_21384 = state_21352__$1;(statearr_21365_21384[(1)] = (8));
} else
{var statearr_21366_21385 = state_21352__$1;(statearr_21366_21385[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21353 === (10)))
{var inst_21344 = (state_21352[(2)]);var state_21352__$1 = state_21352;var statearr_21367_21386 = state_21352__$1;(statearr_21367_21386[(2)] = inst_21344);
(statearr_21367_21386[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21353 === (8)))
{var inst_21329 = (state_21352[(7)]);var tmp21364 = inst_21329;var inst_21329__$1 = tmp21364;var state_21352__$1 = (function (){var statearr_21368 = state_21352;(statearr_21368[(7)] = inst_21329__$1);
return statearr_21368;
})();var statearr_21369_21387 = state_21352__$1;(statearr_21369_21387[(2)] = null);
(statearr_21369_21387[(1)] = (2));
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
});})(c__14001__auto___21377,out))
;return ((function (switch__13945__auto__,c__14001__auto___21377,out){
return (function() {
var state_machine__13946__auto__ = null;
var state_machine__13946__auto____0 = (function (){var statearr_21373 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21373[(0)] = state_machine__13946__auto__);
(statearr_21373[(1)] = (1));
return statearr_21373;
});
var state_machine__13946__auto____1 = (function (state_21352){while(true){
var ret_value__13947__auto__ = (function (){try{while(true){
var result__13948__auto__ = switch__13945__auto__.call(null,state_21352);if(cljs.core.keyword_identical_QMARK_.call(null,result__13948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13948__auto__;
}
break;
}
}catch (e21374){if((e21374 instanceof Object))
{var ex__13949__auto__ = e21374;var statearr_21375_21388 = state_21352;(statearr_21375_21388[(5)] = ex__13949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21352);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21374;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21389 = state_21352;
state_21352 = G__21389;
continue;
}
} else
{return ret_value__13947__auto__;
}
break;
}
});
state_machine__13946__auto__ = function(state_21352){
switch(arguments.length){
case 0:
return state_machine__13946__auto____0.call(this);
case 1:
return state_machine__13946__auto____1.call(this,state_21352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13946__auto____0;
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13946__auto____1;
return state_machine__13946__auto__;
})()
;})(switch__13945__auto__,c__14001__auto___21377,out))
})();var state__14003__auto__ = (function (){var statearr_21376 = f__14002__auto__.call(null);(statearr_21376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14001__auto___21377);
return statearr_21376;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14003__auto__);
});})(c__14001__auto___21377,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14001__auto___21524 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14001__auto___21524,out){
return (function (){var f__14002__auto__ = (function (){var switch__13945__auto__ = ((function (c__14001__auto___21524,out){
return (function (state_21494){var state_val_21495 = (state_21494[(1)]);if((state_val_21495 === (7)))
{var inst_21490 = (state_21494[(2)]);var state_21494__$1 = state_21494;var statearr_21496_21525 = state_21494__$1;(statearr_21496_21525[(2)] = inst_21490);
(statearr_21496_21525[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21495 === (1)))
{var inst_21457 = (new Array(n));var inst_21458 = inst_21457;var inst_21459 = (0);var state_21494__$1 = (function (){var statearr_21497 = state_21494;(statearr_21497[(7)] = inst_21458);
(statearr_21497[(8)] = inst_21459);
return statearr_21497;
})();var statearr_21498_21526 = state_21494__$1;(statearr_21498_21526[(2)] = null);
(statearr_21498_21526[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21495 === (4)))
{var inst_21462 = (state_21494[(9)]);var inst_21462__$1 = (state_21494[(2)]);var inst_21463 = (inst_21462__$1 == null);var inst_21464 = cljs.core.not.call(null,inst_21463);var state_21494__$1 = (function (){var statearr_21499 = state_21494;(statearr_21499[(9)] = inst_21462__$1);
return statearr_21499;
})();if(inst_21464)
{var statearr_21500_21527 = state_21494__$1;(statearr_21500_21527[(1)] = (5));
} else
{var statearr_21501_21528 = state_21494__$1;(statearr_21501_21528[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21495 === (15)))
{var inst_21484 = (state_21494[(2)]);var state_21494__$1 = state_21494;var statearr_21502_21529 = state_21494__$1;(statearr_21502_21529[(2)] = inst_21484);
(statearr_21502_21529[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21495 === (13)))
{var state_21494__$1 = state_21494;var statearr_21503_21530 = state_21494__$1;(statearr_21503_21530[(2)] = null);
(statearr_21503_21530[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21495 === (6)))
{var inst_21459 = (state_21494[(8)]);var inst_21480 = (inst_21459 > (0));var state_21494__$1 = state_21494;if(cljs.core.truth_(inst_21480))
{var statearr_21504_21531 = state_21494__$1;(statearr_21504_21531[(1)] = (12));
} else
{var statearr_21505_21532 = state_21494__$1;(statearr_21505_21532[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21495 === (3)))
{var inst_21492 = (state_21494[(2)]);var state_21494__$1 = state_21494;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21494__$1,inst_21492);
} else
{if((state_val_21495 === (12)))
{var inst_21458 = (state_21494[(7)]);var inst_21482 = cljs.core.vec.call(null,inst_21458);var state_21494__$1 = state_21494;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21494__$1,(15),out,inst_21482);
} else
{if((state_val_21495 === (2)))
{var state_21494__$1 = state_21494;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21494__$1,(4),ch);
} else
{if((state_val_21495 === (11)))
{var inst_21474 = (state_21494[(2)]);var inst_21475 = (new Array(n));var inst_21458 = inst_21475;var inst_21459 = (0);var state_21494__$1 = (function (){var statearr_21506 = state_21494;(statearr_21506[(7)] = inst_21458);
(statearr_21506[(10)] = inst_21474);
(statearr_21506[(8)] = inst_21459);
return statearr_21506;
})();var statearr_21507_21533 = state_21494__$1;(statearr_21507_21533[(2)] = null);
(statearr_21507_21533[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21495 === (9)))
{var inst_21458 = (state_21494[(7)]);var inst_21472 = cljs.core.vec.call(null,inst_21458);var state_21494__$1 = state_21494;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21494__$1,(11),out,inst_21472);
} else
{if((state_val_21495 === (5)))
{var inst_21458 = (state_21494[(7)]);var inst_21459 = (state_21494[(8)]);var inst_21467 = (state_21494[(11)]);var inst_21462 = (state_21494[(9)]);var inst_21466 = (inst_21458[inst_21459] = inst_21462);var inst_21467__$1 = (inst_21459 + (1));var inst_21468 = (inst_21467__$1 < n);var state_21494__$1 = (function (){var statearr_21508 = state_21494;(statearr_21508[(11)] = inst_21467__$1);
(statearr_21508[(12)] = inst_21466);
return statearr_21508;
})();if(cljs.core.truth_(inst_21468))
{var statearr_21509_21534 = state_21494__$1;(statearr_21509_21534[(1)] = (8));
} else
{var statearr_21510_21535 = state_21494__$1;(statearr_21510_21535[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21495 === (14)))
{var inst_21487 = (state_21494[(2)]);var inst_21488 = cljs.core.async.close_BANG_.call(null,out);var state_21494__$1 = (function (){var statearr_21512 = state_21494;(statearr_21512[(13)] = inst_21487);
return statearr_21512;
})();var statearr_21513_21536 = state_21494__$1;(statearr_21513_21536[(2)] = inst_21488);
(statearr_21513_21536[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21495 === (10)))
{var inst_21478 = (state_21494[(2)]);var state_21494__$1 = state_21494;var statearr_21514_21537 = state_21494__$1;(statearr_21514_21537[(2)] = inst_21478);
(statearr_21514_21537[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21495 === (8)))
{var inst_21458 = (state_21494[(7)]);var inst_21467 = (state_21494[(11)]);var tmp21511 = inst_21458;var inst_21458__$1 = tmp21511;var inst_21459 = inst_21467;var state_21494__$1 = (function (){var statearr_21515 = state_21494;(statearr_21515[(7)] = inst_21458__$1);
(statearr_21515[(8)] = inst_21459);
return statearr_21515;
})();var statearr_21516_21538 = state_21494__$1;(statearr_21516_21538[(2)] = null);
(statearr_21516_21538[(1)] = (2));
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
});})(c__14001__auto___21524,out))
;return ((function (switch__13945__auto__,c__14001__auto___21524,out){
return (function() {
var state_machine__13946__auto__ = null;
var state_machine__13946__auto____0 = (function (){var statearr_21520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21520[(0)] = state_machine__13946__auto__);
(statearr_21520[(1)] = (1));
return statearr_21520;
});
var state_machine__13946__auto____1 = (function (state_21494){while(true){
var ret_value__13947__auto__ = (function (){try{while(true){
var result__13948__auto__ = switch__13945__auto__.call(null,state_21494);if(cljs.core.keyword_identical_QMARK_.call(null,result__13948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13948__auto__;
}
break;
}
}catch (e21521){if((e21521 instanceof Object))
{var ex__13949__auto__ = e21521;var statearr_21522_21539 = state_21494;(statearr_21522_21539[(5)] = ex__13949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21494);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21521;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21540 = state_21494;
state_21494 = G__21540;
continue;
}
} else
{return ret_value__13947__auto__;
}
break;
}
});
state_machine__13946__auto__ = function(state_21494){
switch(arguments.length){
case 0:
return state_machine__13946__auto____0.call(this);
case 1:
return state_machine__13946__auto____1.call(this,state_21494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13946__auto____0;
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13946__auto____1;
return state_machine__13946__auto__;
})()
;})(switch__13945__auto__,c__14001__auto___21524,out))
})();var state__14003__auto__ = (function (){var statearr_21523 = f__14002__auto__.call(null);(statearr_21523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14001__auto___21524);
return statearr_21523;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14003__auto__);
});})(c__14001__auto___21524,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14001__auto___21683 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14001__auto___21683,out){
return (function (){var f__14002__auto__ = (function (){var switch__13945__auto__ = ((function (c__14001__auto___21683,out){
return (function (state_21653){var state_val_21654 = (state_21653[(1)]);if((state_val_21654 === (7)))
{var inst_21649 = (state_21653[(2)]);var state_21653__$1 = state_21653;var statearr_21655_21684 = state_21653__$1;(statearr_21655_21684[(2)] = inst_21649);
(statearr_21655_21684[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21654 === (1)))
{var inst_21612 = [];var inst_21613 = inst_21612;var inst_21614 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_21653__$1 = (function (){var statearr_21656 = state_21653;(statearr_21656[(7)] = inst_21613);
(statearr_21656[(8)] = inst_21614);
return statearr_21656;
})();var statearr_21657_21685 = state_21653__$1;(statearr_21657_21685[(2)] = null);
(statearr_21657_21685[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21654 === (4)))
{var inst_21617 = (state_21653[(9)]);var inst_21617__$1 = (state_21653[(2)]);var inst_21618 = (inst_21617__$1 == null);var inst_21619 = cljs.core.not.call(null,inst_21618);var state_21653__$1 = (function (){var statearr_21658 = state_21653;(statearr_21658[(9)] = inst_21617__$1);
return statearr_21658;
})();if(inst_21619)
{var statearr_21659_21686 = state_21653__$1;(statearr_21659_21686[(1)] = (5));
} else
{var statearr_21660_21687 = state_21653__$1;(statearr_21660_21687[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21654 === (15)))
{var inst_21643 = (state_21653[(2)]);var state_21653__$1 = state_21653;var statearr_21661_21688 = state_21653__$1;(statearr_21661_21688[(2)] = inst_21643);
(statearr_21661_21688[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21654 === (13)))
{var state_21653__$1 = state_21653;var statearr_21662_21689 = state_21653__$1;(statearr_21662_21689[(2)] = null);
(statearr_21662_21689[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21654 === (6)))
{var inst_21613 = (state_21653[(7)]);var inst_21638 = inst_21613.length;var inst_21639 = (inst_21638 > (0));var state_21653__$1 = state_21653;if(cljs.core.truth_(inst_21639))
{var statearr_21663_21690 = state_21653__$1;(statearr_21663_21690[(1)] = (12));
} else
{var statearr_21664_21691 = state_21653__$1;(statearr_21664_21691[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21654 === (3)))
{var inst_21651 = (state_21653[(2)]);var state_21653__$1 = state_21653;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21653__$1,inst_21651);
} else
{if((state_val_21654 === (12)))
{var inst_21613 = (state_21653[(7)]);var inst_21641 = cljs.core.vec.call(null,inst_21613);var state_21653__$1 = state_21653;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21653__$1,(15),out,inst_21641);
} else
{if((state_val_21654 === (2)))
{var state_21653__$1 = state_21653;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21653__$1,(4),ch);
} else
{if((state_val_21654 === (11)))
{var inst_21621 = (state_21653[(10)]);var inst_21617 = (state_21653[(9)]);var inst_21631 = (state_21653[(2)]);var inst_21632 = [];var inst_21633 = inst_21632.push(inst_21617);var inst_21613 = inst_21632;var inst_21614 = inst_21621;var state_21653__$1 = (function (){var statearr_21665 = state_21653;(statearr_21665[(11)] = inst_21631);
(statearr_21665[(7)] = inst_21613);
(statearr_21665[(8)] = inst_21614);
(statearr_21665[(12)] = inst_21633);
return statearr_21665;
})();var statearr_21666_21692 = state_21653__$1;(statearr_21666_21692[(2)] = null);
(statearr_21666_21692[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21654 === (9)))
{var inst_21613 = (state_21653[(7)]);var inst_21629 = cljs.core.vec.call(null,inst_21613);var state_21653__$1 = state_21653;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21653__$1,(11),out,inst_21629);
} else
{if((state_val_21654 === (5)))
{var inst_21621 = (state_21653[(10)]);var inst_21617 = (state_21653[(9)]);var inst_21614 = (state_21653[(8)]);var inst_21621__$1 = f.call(null,inst_21617);var inst_21622 = cljs.core._EQ_.call(null,inst_21621__$1,inst_21614);var inst_21623 = cljs.core.keyword_identical_QMARK_.call(null,inst_21614,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_21624 = (inst_21622) || (inst_21623);var state_21653__$1 = (function (){var statearr_21667 = state_21653;(statearr_21667[(10)] = inst_21621__$1);
return statearr_21667;
})();if(cljs.core.truth_(inst_21624))
{var statearr_21668_21693 = state_21653__$1;(statearr_21668_21693[(1)] = (8));
} else
{var statearr_21669_21694 = state_21653__$1;(statearr_21669_21694[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21654 === (14)))
{var inst_21646 = (state_21653[(2)]);var inst_21647 = cljs.core.async.close_BANG_.call(null,out);var state_21653__$1 = (function (){var statearr_21671 = state_21653;(statearr_21671[(13)] = inst_21646);
return statearr_21671;
})();var statearr_21672_21695 = state_21653__$1;(statearr_21672_21695[(2)] = inst_21647);
(statearr_21672_21695[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21654 === (10)))
{var inst_21636 = (state_21653[(2)]);var state_21653__$1 = state_21653;var statearr_21673_21696 = state_21653__$1;(statearr_21673_21696[(2)] = inst_21636);
(statearr_21673_21696[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21654 === (8)))
{var inst_21621 = (state_21653[(10)]);var inst_21613 = (state_21653[(7)]);var inst_21617 = (state_21653[(9)]);var inst_21626 = inst_21613.push(inst_21617);var tmp21670 = inst_21613;var inst_21613__$1 = tmp21670;var inst_21614 = inst_21621;var state_21653__$1 = (function (){var statearr_21674 = state_21653;(statearr_21674[(7)] = inst_21613__$1);
(statearr_21674[(8)] = inst_21614);
(statearr_21674[(14)] = inst_21626);
return statearr_21674;
})();var statearr_21675_21697 = state_21653__$1;(statearr_21675_21697[(2)] = null);
(statearr_21675_21697[(1)] = (2));
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
});})(c__14001__auto___21683,out))
;return ((function (switch__13945__auto__,c__14001__auto___21683,out){
return (function() {
var state_machine__13946__auto__ = null;
var state_machine__13946__auto____0 = (function (){var statearr_21679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21679[(0)] = state_machine__13946__auto__);
(statearr_21679[(1)] = (1));
return statearr_21679;
});
var state_machine__13946__auto____1 = (function (state_21653){while(true){
var ret_value__13947__auto__ = (function (){try{while(true){
var result__13948__auto__ = switch__13945__auto__.call(null,state_21653);if(cljs.core.keyword_identical_QMARK_.call(null,result__13948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13948__auto__;
}
break;
}
}catch (e21680){if((e21680 instanceof Object))
{var ex__13949__auto__ = e21680;var statearr_21681_21698 = state_21653;(statearr_21681_21698[(5)] = ex__13949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21653);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21680;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21699 = state_21653;
state_21653 = G__21699;
continue;
}
} else
{return ret_value__13947__auto__;
}
break;
}
});
state_machine__13946__auto__ = function(state_21653){
switch(arguments.length){
case 0:
return state_machine__13946__auto____0.call(this);
case 1:
return state_machine__13946__auto____1.call(this,state_21653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13946__auto____0;
state_machine__13946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13946__auto____1;
return state_machine__13946__auto__;
})()
;})(switch__13945__auto__,c__14001__auto___21683,out))
})();var state__14003__auto__ = (function (){var statearr_21682 = f__14002__auto__.call(null);(statearr_21682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14001__auto___21683);
return statearr_21682;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14003__auto__);
});})(c__14001__auto___21683,out))
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
// Compiled by ClojureScript 0.0-2371
goog.provide('sample_app.core');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client');
cljs.core.enable_console_print_BANG_.call(null);
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),(function (){return cljs.core.print.call(null,"reloaded");
}));
sample_app.core.foo = (function foo(a,b){return (a + b);
});
sample_app.core.foo2 = (function foo2(a,b){return (a + b);
});
if(typeof sample_app.core.state !== 'undefined')
{} else
{sample_app.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"hello2asdfasdf"], null));
}
cljs.core.println.call(null,("the state is"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sample_app.core.state))));

//# sourceMappingURL=core.js.map
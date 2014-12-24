// Compiled by ClojureScript 0.0-2371
goog.provide('cljmeetup.core');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client');
goog.require('weasel.repl');
goog.require('weasel.repl');
if(!(weasel.repl.alive_QMARK_.call(null)))
{weasel.repl.connect.call(null,"ws://127.0.0.1:8092");
} else
{}
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),(function (){return cljs.core.print.call(null,"reloaded");
}));
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"You can change this line an see the changes in the dev console");

//# sourceMappingURL=core.js.map
// Compiled by ClojureScript 0.0-2371
goog.provide('testreact.core');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client');
goog.require('weasel.repl');
goog.require('weasel.repl');
goog.require('testreact.react');
if(!(weasel.repl.alive_QMARK_.call(null)))
{weasel.repl.connect.call(null,"ws://127.0.0.1:8092");
} else
{}
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"You can change this line an see the changes in the dev console");

//# sourceMappingURL=core.js.map
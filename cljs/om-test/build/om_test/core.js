// Compiled by ClojureScript 0.0-2268
goog.provide('om_test.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('clojure.browser.repl');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
cljs.core.enable_console_print_BANG_.call(null);
om_test.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello bla world!"], null));
om.core.root.call(null,(function (app,owner){return React.DOM.h1(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(app));
}),om_test.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
cljs.core.swap_BANG_.call(null,om_test.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),"Do it sadfasdlive!");

//# sourceMappingURL=core.js.map
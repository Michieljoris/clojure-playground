// Compiled by ClojureScript 0.0-2202
goog.provide('hello_dev_devcards.core');
goog.require('cljs.core');
goog.require('hello_dev.core');
goog.require('hello_dev.core');
goog.require('devcards.core');
goog.require('devcards.core');
cljs.core.enable_console_print_BANG_.call(null);
devcards.core.start_devcard_ui_BANG_.call(null);
devcards.core.start_figwheel_reloader_BANG_.call(null);
devcards.core.register_card.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hello_dev_devcards.core","hello_dev_devcards.core",2276362170),new cljs.core.Keyword(null,"devcard-intro","devcard-intro",4151151286)], null),devcards.system.get_options.call(null,devcards.core.markdown_card.call(null,"# Devcards for hello-dev\n\n    I can be found in `devcards_src/hello_dev_devcards/core.cljs`.\n\n    If you add cards to this file, they will appear here on this page.\n\n    You can add devcards to any file as long as you require\n    `devcards.core` like so:\n\n    ```\n    (:require [devcards.core :as dc :include-macros true])\n    ```\n\n    As you add cards to other namspaces, those namspaces will\n    be listed on the Devcards **home** page.\n\n    <a href=\"https://github.com/bhauman/devcards/blob/master/example_src/devdemos/core.cljs\" target=\"_blank\">Here are some Devcard examples</a>")),(function (){return devcards.core.markdown_card.call(null,"# Devcards for hello-dev\n\n    I can be found in `devcards_src/hello_dev_devcards/core.cljs`.\n\n    If you add cards to this file, they will appear here on this page.\n\n    You can add devcards to any file as long as you require\n    `devcards.core` like so:\n\n    ```\n    (:require [devcards.core :as dc :include-macros true])\n    ```\n\n    As you add cards to other namspaces, those namspaces will\n    be listed on the Devcards **home** page.\n\n    <a href=\"https://github.com/bhauman/devcards/blob/master/example_src/devdemos/core.cljs\" target=\"_blank\">Here are some Devcard examples</a>");
}));
hello_dev_devcards.core.widget = (function widget(data,owner){if(typeof hello_dev_devcards.core.t21448 !== 'undefined')
{} else
{
/**
* @constructor
*/
hello_dev_devcards.core.t21448 = (function (owner,data,widget,meta21449){
this.owner = owner;
this.data = data;
this.widget = widget;
this.meta21449 = meta21449;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hello_dev_devcards.core.t21448.cljs$lang$type = true;
hello_dev_devcards.core.t21448.cljs$lang$ctorStr = "hello-dev-devcards.core/t21448";
hello_dev_devcards.core.t21448.cljs$lang$ctorPrWriter = (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"hello-dev-devcards.core/t21448");
});
hello_dev_devcards.core.t21448.prototype.om$IRender$ = true;
hello_dev_devcards.core.t21448.prototype.om$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return sablono.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"This is an om card, ",new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(self__.data)], null));
});
hello_dev_devcards.core.t21448.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21450){var self__ = this;
var _21450__$1 = this;return self__.meta21449;
});
hello_dev_devcards.core.t21448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21450,meta21449__$1){var self__ = this;
var _21450__$1 = this;return (new hello_dev_devcards.core.t21448(self__.owner,self__.data,self__.widget,meta21449__$1));
});
hello_dev_devcards.core.__GT_t21448 = (function __GT_t21448(owner__$1,data__$1,widget__$1,meta21449){return (new hello_dev_devcards.core.t21448(owner__$1,data__$1,widget__$1,meta21449));
});
}
return (new hello_dev_devcards.core.t21448(owner,data,widget,null));
});
devcards.core.register_card.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hello_dev_devcards.core","hello_dev_devcards.core",2276362170),new cljs.core.Keyword(null,"omcard-ex","omcard-ex",3791573092)], null),devcards.system.get_options.call(null,devcards.core.om_root_card.call(null,hello_dev_devcards.core.widget,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",1017460895),"yozers"], null))),(function (){return devcards.core.om_root_card.call(null,hello_dev_devcards.core.widget,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",1017460895),"yozers"], null));
}));

//# sourceMappingURL=core.js.map
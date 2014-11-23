// Compiled by ClojureScript 0.0-2371
goog.provide('testreact.react');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('reagent.core');
((1) + (1));
console.log("123");
if(typeof testreact.react.click_count !== 'undefined')
{} else
{testreact.react.click_count = reagent.core.atom.call(null,(0));
}
testreact.react.simple_component = (function simple_component(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testreact.react.state_ful_with_atom], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"I am a component ! "], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.someclass","p.someclass",-1904646929),cljs.core.deref.call(null,testreact.react.click_count),"I have ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"italics"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"purple"], null)], null)," and red "], null),"text."], null)], null);
});
testreact.react.calling_component = (function calling_component(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Parent component",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testreact.react.some_component], null)], null);
});
testreact.react.child = (function child(name){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Hi, I am ",name], null);
});
testreact.react.childcaller = (function childcaller(){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testreact.react.simple_component], null);
});
testreact.react.state_ful_with_atom = (function state_ful_with_atom(){return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return cljs.core.swap_BANG_.call(null,testreact.react.click_count,cljs.core.inc);
})], null),"I have been clicked already ",cljs.core.deref.call(null,testreact.react.click_count)," times."], null);
});
testreact.react.timer_component = (function timer_component(){var seconds_elapsed = reagent.core.atom.call(null,(0));return ((function (seconds_elapsed){
return (function (){setTimeout(((function (seconds_elapsed){
return (function (){return cljs.core.swap_BANG_.call(null,seconds_elapsed,cljs.core.inc);
});})(seconds_elapsed))
,(1000));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Seconds Elapsed: ",cljs.core.deref.call(null,seconds_elapsed)], null);
});
;})(seconds_elapsed))
});
testreact.react.mountit = (function mountit(component){return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null),document.body);
});
testreact.react.my_html = reagent.core.atom.call(null,"");
testreact.react.plain_component = (function plain_component(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"My html is ",cljs.core.deref.call(null,testreact.react.my_html)], null);
});
testreact.react.component_with_callback = cljs.core.with_meta.call(null,testreact.react.plain_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){return cljs.core.reset_BANG_.call(null,testreact.react.my_html,"bla");
})], null));
testreact.react.atom_input = (function atom_input(value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__13108_SHARP_){return cljs.core.reset_BANG_.call(null,value,p1__13108_SHARP_.target.value);
})], null)], null);
});
testreact.react.shared_state = (function shared_state(){var val = reagent.core.atom.call(null,"foo");return ((function (val){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The value is now: ",cljs.core.deref.call(null,val)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Change it here: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [testreact.react.atom_input,val], null)], null)], null);
});
;})(val))
});
testreact.react.bmi_data = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(180),new cljs.core.Keyword(null,"weight","weight",-1262796205),(80)], null));
testreact.react.calc_bmi = (function calc_bmi(){var map__13110 = cljs.core.deref.call(null,testreact.react.bmi_data);var map__13110__$1 = ((cljs.core.seq_QMARK_.call(null,map__13110))?cljs.core.apply.call(null,cljs.core.hash_map,map__13110):map__13110);var data = map__13110__$1;var bmi = cljs.core.get.call(null,map__13110__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));var weight = cljs.core.get.call(null,map__13110__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));var height = cljs.core.get.call(null,map__13110__$1,new cljs.core.Keyword(null,"height","height",1025178622));var h = (height / (100));if((bmi == null))
{return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"bmi","bmi",1421979636),(weight / (h * h)));
} else
{return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"weight","weight",-1262796205),((bmi * h) * h));
}
});
testreact.react.slider = (function slider(param,value,min,max){var reset = (function (){var G__13113 = (((param instanceof cljs.core.Keyword))?param.fqn:null);switch (G__13113) {
case "bmi":
return new cljs.core.Keyword(null,"weight","weight",-1262796205);

break;
default:
return new cljs.core.Keyword(null,"bmi","bmi",1421979636);

}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (reset){
return (function (p1__13111_SHARP_){return cljs.core.swap_BANG_.call(null,testreact.react.bmi_data,cljs.core.assoc,param,p1__13111_SHARP_.target.value,reset,null);
});})(reset))
], null)], null);
});
testreact.react.bmi_component = (function bmi_component(){var map__13117 = testreact.react.calc_bmi.call(null);var map__13117__$1 = ((cljs.core.seq_QMARK_.call(null,map__13117))?cljs.core.apply.call(null,cljs.core.hash_map,map__13117):map__13117);var bmi = cljs.core.get.call(null,map__13117__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));var height = cljs.core.get.call(null,map__13117__$1,new cljs.core.Keyword(null,"height","height",1025178622));var weight = cljs.core.get.call(null,map__13117__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));var vec__13118 = (((bmi < 18.5))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","underweight"], null):(((bmi < (25)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit","normal"], null):(((bmi < (30)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","overweight"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","obese"], null)
)));var color = cljs.core.nth.call(null,vec__13118,(0),null);var diagnose = cljs.core.nth.call(null,vec__13118,(1),null);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"BMI calculator"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Height: ",(height | (0)),"cm",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [testreact.react.slider,new cljs.core.Keyword(null,"height","height",1025178622),height,(100),(220)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Weight: ",(weight | (0)),"kg",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [testreact.react.slider,new cljs.core.Keyword(null,"weight","weight",-1262796205),weight,(30),(150)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"BMI: ",(bmi | (0))," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null),diagnose], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [testreact.react.slider,new cljs.core.Keyword(null,"bmi","bmi",1421979636),bmi,(10),(50)], null)], null)], null);
});
testreact.react.timer = reagent.core.atom.call(null,(new Date()));
testreact.react.time_color = reagent.core.atom.call(null,"#f34");
testreact.react.update_time = (function update_time(time){return setTimeout((function (){return cljs.core.reset_BANG_.call(null,time,(new Date()));
}),(100));
});
testreact.react.greeting = (function greeting(message){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),message], null);
});
testreact.react.clock = (function clock(){testreact.react.update_time.call(null,testreact.react.timer);
var time_str = cljs.core.first.call(null,clojure.string.split.call(null,cljs.core.deref.call(null,testreact.react.timer).toTimeString()," "));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-clock","div.example-clock",1559289088),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.deref.call(null,testreact.react.time_color)], null)], null),time_str], null);
});
testreact.react.color_input = (function color_input(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-input","div.color-input",-879914246),"Time color: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,testreact.react.time_color),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__13119_SHARP_){return cljs.core.reset_BANG_.call(null,testreact.react.time_color,p1__13119_SHARP_.target.value);
})], null)], null)], null);
});
testreact.react.simple_example = (function simple_example(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [testreact.react.greeting,"Hello world, it is now"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testreact.react.clock], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testreact.react.color_input], null)], null);
});
testreact.react.todos = reagent.core.atom.call(null,cljs.core.sorted_map.call(null));
testreact.react.counter = reagent.core.atom.call(null,(0));
testreact.react.add_todo = (function add_todo(text){var id = cljs.core.swap_BANG_.call(null,testreact.react.counter,cljs.core.inc);return cljs.core.swap_BANG_.call(null,testreact.react.todos,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),text,new cljs.core.Keyword(null,"done","done",-889844188),false], null));
});
testreact.react.toggle = (function toggle(id){return cljs.core.swap_BANG_.call(null,testreact.react.todos,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"done","done",-889844188)], null),cljs.core.not);
});
testreact.react.save = (function save(id,title){return cljs.core.swap_BANG_.call(null,testreact.react.todos,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"title","title",636505583)], null),title);
});
testreact.react.delete$ = (function delete$(id){return cljs.core.swap_BANG_.call(null,testreact.react.todos,cljs.core.dissoc,id);
});
testreact.react.mmap = (function mmap(m,f,a){return cljs.core.into.call(null,cljs.core.empty.call(null,m),f.call(null,a,m));
});
testreact.react.complete_all = (function complete_all(v){return cljs.core.swap_BANG_.call(null,testreact.react.todos,testreact.react.mmap,cljs.core.map,(function (p1__13120_SHARP_){return cljs.core.assoc_in.call(null,p1__13120_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"done","done",-889844188)], null),v);
}));
});
testreact.react.clear_done = (function clear_done(){return cljs.core.swap_BANG_.call(null,testreact.react.todos,testreact.react.mmap,cljs.core.remove,(function (p1__13121_SHARP_){return cljs.core.get_in.call(null,p1__13121_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"done","done",-889844188)], null));
}));
});
testreact.react.add_todo.call(null,"Rename Cloact to Reagent");
testreact.react.add_todo.call(null,"Add undo demo");
testreact.react.add_todo.call(null,"Make all rendering async");
testreact.react.add_todo.call(null,"Allow any arguments to component functions");
testreact.react.complete_all.call(null,true);
testreact.react.todo_input = (function todo_input(p__13124){var map__13127 = p__13124;var map__13127__$1 = ((cljs.core.seq_QMARK_.call(null,map__13127))?cljs.core.apply.call(null,cljs.core.hash_map,map__13127):map__13127);var on_stop = cljs.core.get.call(null,map__13127__$1,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515));var on_save = cljs.core.get.call(null,map__13127__$1,new cljs.core.Keyword(null,"on-save","on-save",1618176266));var title = cljs.core.get.call(null,map__13127__$1,new cljs.core.Keyword(null,"title","title",636505583));var val = reagent.core.atom.call(null,title);var stop = ((function (val,map__13127,map__13127__$1,on_stop,on_save,title){
return (function (){cljs.core.reset_BANG_.call(null,val,"");
if(cljs.core.truth_(on_stop))
{return on_stop.call(null);
} else
{return null;
}
});})(val,map__13127,map__13127__$1,on_stop,on_save,title))
;var save = ((function (val,stop,map__13127,map__13127__$1,on_stop,on_save,title){
return (function (){var v = clojure.string.trim.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,val))));if(!(cljs.core.empty_QMARK_.call(null,v)))
{on_save.call(null,v);
} else
{}
return stop.call(null);
});})(val,stop,map__13127,map__13127__$1,on_stop,on_save,title))
;return ((function (val,stop,save,map__13127,map__13127__$1,on_stop,on_save,title){
return (function (props){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.call(null,props,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,val),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),save,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (val,stop,save,map__13127,map__13127__$1,on_stop,on_save,title){
return (function (p1__13122_SHARP_){return cljs.core.reset_BANG_.call(null,val,p1__13122_SHARP_.target.value);
});})(val,stop,save,map__13127,map__13127__$1,on_stop,on_save,title))
,new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),((function (val,stop,save,map__13127,map__13127__$1,on_stop,on_save,title){
return (function (p1__13123_SHARP_){var G__13128 = p1__13123_SHARP_.which;switch (G__13128) {
case (13):
return save.call(null);

break;
case (27):
return stop.call(null);

break;
default:
return null;

}
});})(val,stop,save,map__13127,map__13127__$1,on_stop,on_save,title))
], null))], null);
});
;})(val,stop,save,map__13127,map__13127__$1,on_stop,on_save,title))
});
testreact.react.todo_edit = cljs.core.with_meta.call(null,testreact.react.todo_input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (p1__13130_SHARP_){return reagent.core.dom_node.call(null,p1__13130_SHARP_).focus();
})], null));
testreact.react.todo_stats = (function todo_stats(p__13131){var map__13134 = p__13131;var map__13134__$1 = ((cljs.core.seq_QMARK_.call(null,map__13134))?cljs.core.apply.call(null,cljs.core.hash_map,map__13134):map__13134);var done = cljs.core.get.call(null,map__13134__$1,new cljs.core.Keyword(null,"done","done",-889844188));var active = cljs.core.get.call(null,map__13134__$1,new cljs.core.Keyword(null,"active","active",1895962068));var filt = cljs.core.get.call(null,map__13134__$1,new cljs.core.Keyword(null,"filt","filt",169229082));var props_for = ((function (map__13134,map__13134__$1,done,active,filt){
return (function (name){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,name,cljs.core.deref.call(null,filt)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__13134,map__13134__$1,done,active,filt){
return (function (){return cljs.core.reset_BANG_.call(null,filt,name);
});})(map__13134,map__13134__$1,done,active,filt))
], null);
});})(map__13134,map__13134__$1,done,active,filt))
;return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span#todo-count","span#todo-count",-1116128108),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),active], null)," ",(function (){var G__13135 = active;switch (G__13135) {
case (1):
return "item";

break;
default:
return "items";

}
})()," left"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul#filters","ul#filters",-899831395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),props_for.call(null,new cljs.core.Keyword(null,"all","all",892129742)),"All"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),props_for.call(null,new cljs.core.Keyword(null,"active","active",1895962068)),"Active"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),props_for.call(null,new cljs.core.Keyword(null,"done","done",-889844188)),"Completed"], null)], null)], null),(((done > (0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#clear-completed","button#clear-completed",-1698725142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),testreact.react.clear_done], null),"Clear completed ",done], null):null)], null);
});
testreact.react.todo_item = (function todo_item(){var editing = reagent.core.atom.call(null,false);return ((function (editing){
return (function (p__13140){var map__13141 = p__13140;var map__13141__$1 = ((cljs.core.seq_QMARK_.call(null,map__13141))?cljs.core.apply.call(null,cljs.core.hash_map,map__13141):map__13141);var title = cljs.core.get.call(null,map__13141__$1,new cljs.core.Keyword(null,"title","title",636505583));var done = cljs.core.get.call(null,map__13141__$1,new cljs.core.Keyword(null,"done","done",-889844188));var id = cljs.core.get.call(null,map__13141__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(done)?"completed ":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.deref.call(null,editing))?"editing":null)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.view","div.view",-1680900976),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle","input.toggle",-519545942),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),done,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__13141,map__13141__$1,title,done,id,editing){
return (function (){return testreact.react.toggle.call(null,id);
});})(map__13141,map__13141__$1,title,done,id,editing))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),((function (map__13141,map__13141__$1,title,done,id,editing){
return (function (){return cljs.core.reset_BANG_.call(null,editing,true);
});})(map__13141,map__13141__$1,title,done,id,editing))
], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.destroy","button.destroy",1044866871),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__13141,map__13141__$1,title,done,id,editing){
return (function (){return testreact.react.delete$.call(null,id);
});})(map__13141,map__13141__$1,title,done,id,editing))
], null)], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,editing))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [testreact.react.todo_edit,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"edit",new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"on-save","on-save",1618176266),((function (map__13141,map__13141__$1,title,done,id,editing){
return (function (p1__13137_SHARP_){return testreact.react.save.call(null,id,p1__13137_SHARP_);
});})(map__13141,map__13141__$1,title,done,id,editing))
,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515),((function (map__13141,map__13141__$1,title,done,id,editing){
return (function (){return cljs.core.reset_BANG_.call(null,editing,false);
});})(map__13141,map__13141__$1,title,done,id,editing))
], null)], null):null)], null);
});
;})(editing))
});
testreact.react.todo_app = (function todo_app(props){var filt = reagent.core.atom.call(null,new cljs.core.Keyword(null,"all","all",892129742));return ((function (filt){
return (function (){var items = cljs.core.vals.call(null,cljs.core.deref.call(null,testreact.react.todos));var done = cljs.core.count.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"done","done",-889844188),items));var active = (cljs.core.count.call(null,items) - done);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section#todoapp","section#todoapp",41606040),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header#header","header#header",1650878621),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"todos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [testreact.react.todo_input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"new-todo",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What needs to be done?",new cljs.core.Keyword(null,"on-save","on-save",1618176266),testreact.react.add_todo], null)], null)], null),(((cljs.core.count.call(null,items) > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section#main","section#main",559170339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#toggle-all","input#toggle-all",-512330812),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),(active === (0)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (items,done,active,filt){
return (function (){return testreact.react.complete_all.call(null,(active > (0)));
});})(items,done,active,filt))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"toggle-all"], null),"Mark all as complete"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul#todo-list","ul#todo-list",-1648361723),(function (){var iter__12234__auto__ = ((function (items,done,active,filt){
return (function iter__13147(s__13148){return (new cljs.core.LazySeq(null,((function (items,done,active,filt){
return (function (){var s__13148__$1 = s__13148;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13148__$1);if(temp__4126__auto__)
{var s__13148__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13148__$2))
{var c__12232__auto__ = cljs.core.chunk_first.call(null,s__13148__$2);var size__12233__auto__ = cljs.core.count.call(null,c__12232__auto__);var b__13150 = cljs.core.chunk_buffer.call(null,size__12233__auto__);if((function (){var i__13149 = (0);while(true){
if((i__13149 < size__12233__auto__))
{var todo = cljs.core._nth.call(null,c__12232__auto__,i__13149);cljs.core.chunk_append.call(null,b__13150,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [testreact.react.todo_item,todo], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)));
{
var G__13152 = (i__13149 + (1));
i__13149 = G__13152;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13150),iter__13147.call(null,cljs.core.chunk_rest.call(null,s__13148__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13150),null);
}
} else
{var todo = cljs.core.first.call(null,s__13148__$2);return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [testreact.react.todo_item,todo], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)),iter__13147.call(null,cljs.core.rest.call(null,s__13148__$2)));
}
} else
{return null;
}
break;
}
});})(items,done,active,filt))
,null,null));
});})(items,done,active,filt))
;return iter__12234__auto__.call(null,cljs.core.filter.call(null,(function (){var G__13151 = (((cljs.core.deref.call(null,filt) instanceof cljs.core.Keyword))?cljs.core.deref.call(null,filt).fqn:null);switch (G__13151) {
case "all":
return cljs.core.identity;

break;
case "done":
return new cljs.core.Keyword(null,"done","done",-889844188);

break;
case "active":
return cljs.core.complement.call(null,new cljs.core.Keyword(null,"done","done",-889844188));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,filt)))));

}
})(),items));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer#footer","footer#footer",-1164052935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [testreact.react.todo_stats,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active","active",1895962068),active,new cljs.core.Keyword(null,"done","done",-889844188),done,new cljs.core.Keyword(null,"filt","filt",169229082),filt], null)], null)], null)], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer#info","footer#info",1634811413),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Double-click to edit a todo"], null)], null)], null);
});
;})(filt))
});

//# sourceMappingURL=react.js.map
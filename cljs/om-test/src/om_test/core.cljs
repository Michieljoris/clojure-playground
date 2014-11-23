(ns om-test.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clojure.browser.repl :as repl]
            ))

(repl/connect "http://localhost:9000/repl")
;; (repl/connect "http://localhost:9000/repl")
(enable-console-print!)
(def app-state (atom {:text "Hello bla world!"}))

(om/root
  (fn [app owner]
    (dom/h1 nil (:text app)))
  app-state
  {:target (. js/document (getElementById "app"))})
;
(swap! app-state assoc :text "Do it sadfasdlive!")




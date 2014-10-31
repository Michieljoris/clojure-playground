(ns sample-app.core
  (:require 
   ;; [clojure.browser.repl :as repl]
   ;; [weasel.repl :as repl]
    [figwheel.client :as fw :include-macros true]
   )
  )

;; piggyback:
;; (repl/connect "http://localhost:9000/repl")

;;weasel:
;; (if-not (repl/alive?)
;;   (repl/connect "ws://localhost:9001"))

;; figwheel
(enable-console-print!)

;; (println "123456You can change this line an see the changes in the dev console")

(fw/watch-and-reload
  :websocket-url "ws://localhost:3449/figwheel-ws" 
  :jsload-callback (fn [] (print "reloaded"))) ;; optional callback



(defn foo [a b]
  (+ a b))

(defn foo2 [a b]
  (+ a b))

;; (. js/console (log "And now it works!!!" (foo 1 2)))
;; (println "hell")(f)

(defonce state (atom {:text "hello2asdfasdf"}))

(println (str "the state is" @state))

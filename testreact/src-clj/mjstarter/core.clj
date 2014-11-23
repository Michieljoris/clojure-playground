(ns mjstarter.core
  (:require 
   [weasel.repl.websocket :refer [repl-env]]
   [cemerick.piggieback]
   )
  (:gen-class))

(defn -test
  "I'm just here to be tested..."
  [& args]
  (println "Hello, World!" )
  )

(defn weasel
  "Connect to a browser" 
  []
  (cemerick.piggieback/cljs-repl 
   :repl-env (repl-env                                          
              :ip "127.0.0.1" :port 8092)))



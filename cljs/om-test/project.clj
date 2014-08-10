(defproject om-test "0.1.0-SNAPSHOT"
  :description "<some description>"
  :url "<some url>"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2268"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [om "0.6.5"]
                 
                 [com.cemerick/piggieback "0.1.2"]
                 ]
  
  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
   
  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "dev" ; I just called the build dev since no optimizations are done
              :source-paths ["src"]
              ; :notify-command ["./test.sh" "-m"]
              :compiler { 
                         :output-to "main.js"
                         :output-dir "build"
                         :optimizations :none
                         :source-map true}}]})

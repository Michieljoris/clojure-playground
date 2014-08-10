(ns hello-dev-devcards.core
    (:require
     [devcards.core :as dc :include-macros true]
     [hello-dev.core :as hello-dev] 
     #_[om.core :as om :include-macros true]
     #_[sablono.core :as sab :include-macros true])
    (:require-macros
     [devcards.core :refer [defcard is are= are-not=]]))

(enable-console-print!)

(devcards.core/start-devcard-ui!)
(devcards.core/start-figwheel-reloader!)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/devcards/index.html

(defcard devcard-intro
  (dc/markdown-card
   "# Devcards for hello-dev

    I can be found in `devcards_src/hello_dev_devcards/core.cljs`.

    If you add cards to this file, they will appear here on this page.

    You can add devcards to any file as long as you require
    `devcards.core` like so:

    ```
    (:require [devcards.core :as dc :include-macros true])
    ```

    As you add cards to other namspaces, those namspaces will
    be listed on the Devcards **home** page.

    <a href=\"https://github.com/bhauman/devcards/blob/master/example_src/devdemos/core.cljs\" target=\"_blank\">Here are some Devcard examples</a>"))


(defn widget [data owner]
  (reify
    om/IRender
    (render [this]
      (sablono/html [:h2 "This is an om card, " (:text data)]))))

(defcard omcard-ex
    (dc/om-root-card widget {:text "yozers"}))


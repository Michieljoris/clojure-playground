(ns react
  (:require [reagent.core :as reagent :refer [atom]]))

(defn simple-component []
  [:div
   [:p "I am a component!"]
   [:p.someclass
    "I have " [:strong "bold"]
    [:span {:style {:color "red"}} " and red "] "text."]])



(defn mountit []
  (reagent/render-component [simple-component]
                            (.-body js/document)))

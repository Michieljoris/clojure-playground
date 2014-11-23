(ns testreact.react
  (:require [reagent.core :as reagent :refer [atom]]))

(+ 1 1 )

(. js/console (log "123"))

(defonce click-count (atom 0))


(defn simple-component []
  [:div
   [state-ful-with-atom]
   [:p "I am a component ! " ]
   [:p.someclass
    @click-count
    "I have " [:strong "italics"]
    [:span {:style {:color "purple"}} " and red "] "text."]])

;; (mountit simple-component)

(defn calling-component []
  [:div "Parent component"
   [some-component]])

(defn child [name]
  [:p "Hi, I am " name])

(defn childcaller []
  [simple-component ])


(defn state-ful-with-atom []
  [:div {:on-click #(swap! click-count inc)}
   "I have been clicked already " 
   @click-count " times."
   ])


(defn timer-component []
  (let [seconds-elapsed (atom 0)]
    (fn []
      (js/setTimeout #(swap! seconds-elapsed inc) 1000)
      [:div
       "Seconds Elapsed: " @seconds-elapsed])))


(defn mountit [component]
  (reagent/render-component [component]
                            (.-body js/document)))


(def my-html (atom ""))

(defn plain-component []
  [:p "My html is " @my-html])

(def component-with-callback
  (with-meta plain-component
    {:component-did-mount
     (fn [this]
       (reset! my-html "bla"))}))

(defn atom-input [value]
  [:input {:type "text"
           :value @value
           :on-change #(reset! value (-> % .-target .-value))}])

(defn shared-state []
  (let [val (atom "foo")]
    (fn []
      [:div
       [:p "The value is now: " @val]
       [:p "Change it here: " [atom-input val]]])))


(def bmi-data (atom {:height 180 :weight 80}))

(defn calc-bmi []
  (let [{:keys [height weight bmi] :as data} @bmi-data
        h (/ height 100)]
    (if (nil? bmi)
      (assoc data :bmi (/ weight (* h h)))
      (assoc data :weight (* bmi h h)))))

(defn slider [param value min max]
  (let [reset (case param :bmi :weight :bmi)]
    [:input {:type "range" :value value :min min :max max
             :style {:width "100%"}
             :on-change #(swap! bmi-data assoc
                                param (-> % .-target .-value)
                                reset nil)}]))

(defn bmi-component []
  (let [{:keys [weight height bmi]} (calc-bmi)
        [color diagnose] (cond
                          (< bmi 18.5) ["orange" "underweight"]
                          (< bmi 25) ["inherit" "normal"]
                          (< bmi 30) ["orange" "overweight"]
                          :else ["red" "obese"])]
    [:div
     [:h3 "BMI calculator"]
     [:div
      "Height: " (int height) "cm"
      [slider :height height 100 220]]
     [:div
      "Weight: " (int weight) "kg"
      [slider :weight weight 30 150]]
     [:div
      "BMI: " (int bmi) " "
      [:span {:style {:color color}} diagnose]
      [slider :bmi bmi 10 50]]]))
(def timer (atom (js/Date.)))
(def time-color (atom "#f34"))

(defn update-time [time]
  ;; Update the time every 1/10 second to be accurate...
  (js/setTimeout #(reset! time (js/Date.)) 100))

(defn greeting [message]
  [:h1 message])

(defn clock []
  (update-time timer)
  (let [time-str (-> @timer .toTimeString (clojure.string/split " ") first)]
    [:div.example-clock
     {:style {:color @time-color}}
     time-str]))

(defn color-input []
  [:div.color-input
   "Time color: "
   [:input {:type "text"
            :value @time-color
            :on-change #(reset! time-color (-> % .-target .-value))}]])

(defn simple-example []
  [:div
   [greeting "Hello world, it is now"]
   [clock]
   [color-input]])

; (defn ^:export run []
;   (reagent/render-component (fn [] [simple-example])
;                             (.-body js/document)))

(def todos (atom (sorted-map)))

(def counter (atom 0))

(defn add-todo [text]
  (let [id (swap! counter inc)]
    (swap! todos assoc id {:id id :title text :done false})))

(defn toggle [id] (swap! todos update-in [id :done] not))
(defn save [id title] (swap! todos assoc-in [id :title] title))
(defn delete [id] (swap! todos dissoc id))

(defn mmap [m f a] (->> m (f a) (into (empty m))))
(defn complete-all [v] (swap! todos mmap map #(assoc-in % [1 :done] v)))
(defn clear-done [] (swap! todos mmap remove #(get-in % [1 :done])))

(add-todo "Rename Cloact to Reagent")
(add-todo "Add undo demo")
(add-todo "Make all rendering async")
(add-todo "Allow any arguments to component functions")
(complete-all true)

(defn todo-input [{:keys [title on-save on-stop]}]
  (let [val (atom title)
        stop #(do (reset! val "")
                  (if on-stop (on-stop)))
        save #(let [v (-> @val str clojure.string/trim)]
                (if-not (empty? v) (on-save v))
                (stop))]
    (fn [props]
      [:input (merge props
                     {:type "text" :value @val :on-blur save
                      :on-change #(reset! val (-> % .-target .-value))
                      :on-key-up #(case (.-which %)
                                    13 (save)
                                    27 (stop)
                                    nil)})])))

(def todo-edit (with-meta todo-input
                 {:component-did-mount #(.focus (reagent/dom-node %))}))

(defn todo-stats [{:keys [filt active done]}]
  (let [props-for (fn [name]
                    {:class (if (= name @filt) "selected")
                     :on-click #(reset! filt name)})]
    [:div
     [:span#todo-count
      [:strong active] " " (case active 1 "item" "items") " left"]
     [:ul#filters
      [:li [:a (props-for :all) "All"]]
      [:li [:a (props-for :active) "Active"]]
      [:li [:a (props-for :done) "Completed"]]]
     (when (pos? done)
       [:button#clear-completed {:on-click clear-done}
        "Clear completed " done])]))

(defn todo-item []
  (let [editing (atom false)]
    (fn [{:keys [id done title]}]
      [:li {:class (str (if done "completed ")
                        (if @editing "editing"))}
       [:div.view
        [:input.toggle {:type "checkbox" :checked done
                        :on-change #(toggle id)}]
        [:label {:on-double-click #(reset! editing true)} title]
        [:button.destroy {:on-click #(delete id)}]]
       (when @editing
         [todo-edit {:class "edit" :title title
                     :on-save #(save id %)
                     :on-stop #(reset! editing false)}])])))

(defn todo-app [props]
  (let [filt (atom :all)]
    (fn []
      (let [items (vals @todos)
            done (->> items (filter :done) count)
            active (- (count items) done)]
        [:div
         [:section#todoapp
          [:header#header
           [:h1 "todos"]
           [todo-input {:id "new-todo"
                        :placeholder "What needs to be done?"
                        :on-save add-todo}]]
          (when (-> items count pos?)
            [:div
             [:section#main
              [:input#toggle-all {:type "checkbox" :checked (zero? active)
                                  :on-change #(complete-all (pos? active))}]
              [:label {:for "toggle-all"} "Mark all as complete"]
              [:ul#todo-list
               (for [todo (filter (case @filt
                                    :active (complement :done)
                                    :done :done
                                    :all identity) items)]
                 ^{:key (:id todo)} [todo-item todo])]]
             [:footer#footer
              [todo-stats {:active active :done done :filt filt}]]])]
         [:footer#info
          [:p "Double-click to edit a todo"]]]))))

;; (mountit todo-app)
; (defn ^:export run []
;   (reagent/render-component [todo-app] (.-body js/document)))











(ns test-react.cljs-async
  (:require [cljs.core.async :refer [chan put! take! timeout] :as async]
            [clojure.walk :refer [prewalk]]
            [goog.net.XhrIo])
  (:require-macros [cljs.core.async.macros :refer [go]]))


(js/alert "We're running ClojureScript")

(def c (chan))

(do )
(put! c 42)

(take! c (fn [x]
           (println x)))

(go 32)

(println take!)

(def canvas (.getElementById js/document "canvas"))


(def colors ["#FF0000"
             "#00FF00"
             "#0000FF"
             "#00FFFF"
             "#FFFF00"
             "#FF00FF"])

(defn make-cell [canvas x y]
  (let [ctx (-> js/document
                (.getElementById canvas)
                (.getContext "2d"))]
    (go (while true
          (set! (.-fillStyle ctx) (rand-nth colors))
          (.fillRect ctx x y 10 10)
          (<! (timeout (rand-int 1000)))))))

(defn make-scene [canvas rows cols]
  (dotimes [x cols]
    (dotimes [y rows]
      (make-cell canvas (* 10 x) (* 10 y)))))


(make-scene "canvas" 100 100)


;;; Same HTTP Examples, but in the browser

(defn fixup-keys [x]
  (prewalk
   (fn [x]
     (if (map? x)
       (zipmap (map keyword (keys x))
               (vals x))
       x))
   x))

;; IO is a tad different in JS, so this function has to be re-written
;; for ClojureScript.
(defn http-get [url]
  (let [c (chan 1)]
    (goog.net.XhrIo/send url (fn [e]
                               (->> e
                                    .-target
                                    .getResponseJson
                                    js->clj
                                    fixup-keys
                                    (put! c))))
    c))



(def key "b4cb6cd7a349b47ccfbb80e05a601a7c")

(defn request-and-process [url]
  (go
   (-> (str "http://api.themoviedb.org/3/" url "api_key=" key)
       http-get
       <!
       )))

(defn latest-movies []
  (request-and-process "movies/latest?"))

(defn top-rated-movies []
  (request-and-process "movie/top_rated?"))

(go (println (<! (top-rated-movies))))



(defn movie-by-id [id]
  (request-and-process (str "movie/" id "?")))

(go (println (<! (movie-by-id 238))))

(defn movie-cast [id]
  (request-and-process (str "movie/" id "/casts?")))

(go (println (<! (movie-cast 238))))

(defn people-by-id [id]
  (request-and-process (str "person/" id "?")))

(go (println (<! (people-by-id 3144))))

(defn avg [col]
  (-> (clojure.core/reduce + 0 col)
      (/ (count col))))

(avg [1 2 3 4 5])

(defn avg-cast-popularity [id]
  (go
   (let [cast (->> (movie-cast id)
                   <!
                   :cast
                   (clojure.core/map :id)
                   (clojure.core/map people-by-id)
                   (async/map vector)
                   <!
                   (clojure.core/map :popularity)
                   avg)]
     cast)))

(go (js/alert (pr-str (<! (avg-cast-popularity 238)))))


(defn omdb-by-title [q]
  (go
   (-> (str "http://www.omdbapi.com/?t=" q)
       http-get
       <!
       :body
       (cheshire/parse-string true))))

(defn omdb-item [id]
  (go
   (-> (str "http://www.omdbapi.com/?tomatoes=true&i=" id)
       http-get
       <!
       :body
       (cheshire/parse-string true))))

(<!! (omdb-by-title "the+matrix"))
(<!! (omdb-item "tt1285016"))



(go
 (time (dotimes [x 10]
         (<! (people-by-id 3144)))))

(go
 (time (let [chans (doall (for [x (range 10)]
                            (people-by-id 3144)))]
         (doseq [c chans]
           (<! c)))))

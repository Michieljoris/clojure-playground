;; (def a (atom 1))
;; (println (str "initial " @a))

;; (defn test [] (Thread/sleep 1000) (println @a))
;; (println "calling test")
;; (test)
;; (def a 2)

;; (println a)

;; (defmulti myprint class)
;; (defmethod myprint String [s] (println (str "in multi " s)))
;; (myprint "hello")

(defprotocol ProtocolName
"documentation"
(a-method [this arg1 arg2] "method docstring")
(another-method [x] [x arg] "docstring"))


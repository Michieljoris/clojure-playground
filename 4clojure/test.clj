(defn fib [n] 
  (cond (= n 2) [1 1] 
        :else (let [prev (fib (- n 1))]
                (into [(+  (first prev) (second prev))] prev) 
                )
        
      )
)

(fib 6)

(defn fib2 [n] 
  (reverse
   (loop [c n result [1 1]]
     (if (= c 2 ) 
       result
       (recur (dec c) 
              (into [(+  (first result) (second result))] result))))))

(fib2 8)

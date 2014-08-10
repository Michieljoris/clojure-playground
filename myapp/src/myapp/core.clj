
(#(apply concat ( (fn [s1 s2]
                   (map list s1 s2)
                   ) %1 %2 ))
[1 2] [3 4]
)


(#(apply concat 
          ((fn [s1 s2] 
            (map list s1 s2))
          %1 %2) )
 [1 2] [3 4]
   
   )

(
 #(and
    (contains? %2 %1)
    (nil? (%1 %2))) 

 :c {:a 12}
     
     )

(:c {:a 12})

({:a nil} :a 1 )

(not 1)
(keys {:a 12})

(contains? {:a 1} :a)



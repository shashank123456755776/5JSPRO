let res = document.getElementById("op")
let ro  = document.getElementById("yes")
let op1 = document.getElementById("op1")
let op2 = document.getElementById("op2")
let count=0// state managements in  javascripts 
 res.addEventListener("click",function(){
    ro.innerHTML = count+1
    count ++
     
 })
 op1.addEventListener("click",function(){
    ro.innerHTML = count-1
    count --
 })
 op2.addEventListener("click",function(){
    ro.innerHTML = 0
    count =0

 })
 
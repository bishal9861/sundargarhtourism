let btn1=document.querySelector("#item1");
let btn2=document.querySelector("#item2");
let btn3=document.querySelector("#item3");
let btn4=document.querySelector("#item4");
let btn5=document.querySelector("#item5");

let btn6=document.querySelector("#item6");
let airpath=document.querySelector(".bold-p-1");
let railpath=document.querySelector(".rail-1");
let roadpath=document.querySelector(".road-1");
let tourplacename=document.querySelector(".tour-brand-map");
let byairarray=["Nearest Airport is Jharsuguda","Nearest Airport is Rourlkela","Nearest Airport is Sambalpur","Nearest Airport is jharsuguda","Nearest Airport is jharsuguda","Nearest Airport is jharsuguda"];
let bytrain=["Nearest Railway Station is Rourkela","Nearest Railway Station is Jharsuguda"];
let byroad=["One can reach Khandadhar Waterfall <br>by road from Rourkela station<br>which is 19 kms away.",
"One can reach Vedavyas Dham <br>by road from Rourkela station<br>which is 30 kms away.",
"One can reach Vaishnodevi temple <br>by road from Rourkela station<br>which is 7 kms away.",
"One can reach Mandira Dam <br>by road from Rourkela station<br>which is 22 kms away.",
"One can reach Bholenath temple <br>by road from Rourkela station<br>which is 60 kms away.",
"One can reach Hanuman Vatika <br>by road from Rourkela station<br>which is 24 kms away."
]
btn1.addEventListener("click",()=>{
    tourplacename.textContent="Khandadhar Waterfalls";
    airpath.textContent=byairarray[0];
    railpath.textContent=bytrain[0];
    roadpath.innerHTML=byroad[0];
    
})
btn2.addEventListener("click",()=>{
    tourplacename.textContent="Vedavyas Dham";
    airpath.textContent=byairarray[1];
    railpath.textContent=bytrain[1];
    roadpath.innerHTML=byroad[1];
    
})
btn3.addEventListener("click",()=>{
    tourplacename.textContent="Vaishnodevi Temple";
    airpath.textContent=byairarray[2];
    railpath.textContent=bytrain[1];
    roadpath.innerHTML=byroad[2];
    
})
btn4.addEventListener("click",()=>{
    tourplacename.textContent="Mandira Dam";
    airpath.textContent=byairarray[3];
    railpath.textContent=bytrain[0];
    roadpath.innerHTML=byroad[3];
    
})
btn5.addEventListener("click",()=>{
    tourplacename.textContent="Bholenath Temple";
    airpath.textContent=byairarray[4];
    railpath.textContent=bytrain[1];
    roadpath.innerHTML=byroad[4];
    
})
btn6.addEventListener("click",()=>{
    tourplacename.textContent="Hanuman Vatika";
    airpath.textContent=byairarray[5];
    railpath.textContent=bytrain[1];
    roadpath.innerHTML=byroad[5];

    
})
console.log(btn1)


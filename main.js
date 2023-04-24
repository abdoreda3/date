let monthEl= document.querySelector('.month h1');
let fullData= document.querySelector('.month p');


let monthInx=new Date().getMonth();


let months=[
    "january",
     "february",
     "march", 
     "april",
     "may",
      "jun",
       "july",
        "August",
         "September"
        ,"october",
         "september",
          "oktober", 
          "november",
           "december"
]
monthEl.innerText =months[monthInx];

 fullData.innerText =new Date().toDateString();
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const Christmas = new Date("Dec 25, 2022 00:00:00").getTime();


const timer = setInterval( function () {

    let now = new  Date ().getTime(); 
    let difference = Christmas - now;
    
    if (difference >= 0 ) { 
        //Istruzioni per traformare varie fascie di tempo in millisecondi
        let day = Math .floor(difference / ( 1000 * 60 * 60 * 24 ));
        let hour = Math .floor((difference % ( 1000 * 60 * 60 * 24 )) / ( 1000 * 60 * 60 ));
        let min = Math .floor((difference % ( 1000 * 60 * 60 )) / ( 1000 * 60 ));
        let sec = Math .floor((difference % ( 1000 * 60 )) / 1000 ); 

        days.innerText=day
        hours.innerText=hour;
        minutes.innerText=min;
        seconds.innerText=sec;
    }else{
        return;
   }
}, 1000 );
    

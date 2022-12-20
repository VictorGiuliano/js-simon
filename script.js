const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const Christmas = new Date("Dec 25, 2022 00:00:00").getTime();


const timer = setInterval( function () {

    let now = new  Date ().getTime(); 
    let difference = Christmas - now;
    

    

}, 1000 );
    

//create a constructor to save all paths from our #logo
const logo = document.querySelectorAll('#logo path');

//console.log(logo); //print to a log file in Console -> Inspector

for( let i=0; i<logo.length; i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`); //get the total length of the specific stroke from the stroke-dasharray of every letter (check style.css)
}

// get the all seat from the button 
const seats = document.querySelectorAll('.seat');
let count = 0;
let cost = 550;
for(let index = 0; index < seats.length; index++){
    const seat = seats[index];
    const seatContainerElement = document.getElementById('seat-container')
    const p = document.createElement('p');
    seat.addEventListener('click', function(){
        console.log('click');
    });
}
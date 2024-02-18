
// get the all seat from the button 
const seats = document.querySelectorAll('.seat');
let count = 0;
let cost = 550;
for(let index = 0; index < seats.length; index++){
    const seat = seats[index];
    
    seat.addEventListener('click', function(){
        // get seat details
        const seatContainerElement = document.getElementById('seat-container')
        const p = document.createElement('p');
        const h3 = document.createElement('h3');
        const h4 = document.createElement('h4');
        const getSeatText = seat.innerText;
        p.innerText = getSeatText 
        h3.innerText = 'Economoy';
        h4.innerText = '550';
        seatContainerElement.appendChild(p);
        seatContainerElement.appendChild(h3);
        seatContainerElement.appendChild(h4);
        // get seat text ends
    });
}
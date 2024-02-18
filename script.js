
// get the all seat from the button 
const seats = document.querySelectorAll('.seat');
let sum = 0;
let count = 1;
for(let index = 0; index < seats.length; index++){
    const seat = seats[index];
    
    seat.addEventListener('click', function(){
        // get seat details
        const seatContainerElement = document.getElementById('seat-container')
        seat.style.backgroundColor = '#1DD100';
        seat.style.color = '#fff';
        const p = document.createElement('p');
        const h3 = document.createElement('h3');
        const h4 = document.createElement('h4');
        const getSeatText = seat.innerText;
        p.innerText = getSeatText 
        h3.innerText = 'Economoy';
        h4.innerText = 550;
        seatContainerElement.appendChild(p);
        seatContainerElement.appendChild(h3);
        seatContainerElement.appendChild(h4);
        // get seat text ends
        // get the total cost
        const totalCostElement = document.getElementById('total-cost')
        const getCostElement = seatContainerElement.querySelector('h4').innerText;
        const getCost = parseFloat(getCostElement);
        sum += getCost
        totalCostElement.innerText = sum
        const seatCountElement = document.getElementById('seat-select-count')
        
        seatCountElement.innerText = count++;
        if (count >= 0) {
            const copuponCodElement = document.getElementById('copupon-btn');
            copuponCodElement.disabled = false;
        }
    });
}
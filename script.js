
// get the all seat from the button 
const seats = document.querySelectorAll('.seat');
let sum = 0;
let count = 1;
 
function checkInput() {
    const numberElement = document.getElementById('number');
    const nextButtonElement = document.getElementById('next-btn');
    console.log(numberElement.value.length)
    if (numberElement.value.length > 0 && count > 0) {
      nextButtonElement.disabled = false;
    } else {
      nextButtonElement.disabled = true;
    }
  }
for(let index = 0; index < seats.length; index++){
    const seat = seats[index];
    
    seat.addEventListener('click', function(){
        // get seat details
        // checkInput()
        if (count === 5) {
            seat.disabled = true;
            return

        }
        const seatContainerElement = document.getElementById('seat-container')
        seat.style.backgroundColor = '#1DD100';
        seat.style.color = '#fff';
        // seat.style.disabled = true;
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
        // button disabled condition
        if (count >= 5) {
            const copuponCodElement = document.getElementById('copupon-btn');
            copuponCodElement.disabled = false;
        }
       
        // grand total calculation area
        const grandTotalElement = document.getElementById('grand-total');
        grandTotalElement.innerText = sum
        // seat left condition
        let seatLeftElement = document.getElementById('seat-left');
        let seatLeft = parseFloat(seatLeftElement.innerText);
        seatLeft--; 
        seatLeftElement.innerText = seatLeft;  
        
    });
}

// copupon code calculation area

document.getElementById('copupon-btn').addEventListener('click', function(){
    const codeElement = document.getElementById('copupon-code').value;
    const copuponCodElement = document.getElementById('none');
    if(codeElement === 'NEW15'){
        const grandTotalElement = document.getElementById('grand-total').innerText;
        const grandTotal = parseFloat(grandTotalElement);
        const discount = grandTotal * 0.15
        const cost = grandTotal - discount
        document.getElementById('grand-total').innerText = cost
        copuponCodElement.style.display = 'none';
    } else if(codeElement === 'Couple 20'){
        const grandTotalElement = document.getElementById('grand-total').innerText;
        const grandTotal = parseFloat(grandTotalElement);
        const discount = grandTotal * 0.20
        const cost = grandTotal - discount
        document.getElementById('grand-total').innerText = cost
        copuponCodElement.style.display = 'none';
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...Invalid discount code",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }
});
document.getElementById('next-btn').addEventListener('click', function() {
    Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Thank you for Booking Our Bus Seats.",
        text: " We are working hard to find the best service and deals for you.Shortly you will find a confirmation in your email.",
        confirmButtonText: "Continue",
        showConfirmButton: true,
        timer: 1500
      });
})
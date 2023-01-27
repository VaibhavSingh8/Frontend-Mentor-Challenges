const ratingNumber = document.querySelectorAll('.list-element');
const submitButton = document.querySelector('.submit-button');
const thankYouCard = document.querySelector('.thank-you');
const containerPage = document.querySelector('.container');

let getRating = null;

ratingNumber.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('active');
        getRating = button.innerHTML;
    })
});

submitButton.addEventListener('click', () =>{
    containerPage.classList.add('hidden');
    thankYouCard.classList.remove('hidden');
    document.getElementById("rating-val").innerHTML= getRating;
});
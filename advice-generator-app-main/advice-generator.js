function getRandomAdvice(){
    fetch("https://api.adviceslip.com/advice")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        document.querySelector('.advice-text').innerHTML = data.slip.advice;

        document.querySelector('.advice-number').innerHTML = data.slip.id;

    })
}
getRandomAdvice();

const btn = document.querySelector('#getAdvice');
btn.addEventListener("click", getRandomAdvice);

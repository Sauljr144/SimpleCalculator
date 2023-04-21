let buttons = document.querySelectorAll('[data-number]');
let equalsBtn = document.querySelector('[data-equals]');
let allClearBtn = document.querySelector('[data-all-clear]');
let answer = document.getElementById('answer');



buttons.forEach(btn => {
    btn.addEventListener('click', function(e){
        let value = btn.value;
        answer.innerText += value;
        console.log(value)
    });
});

equalsBtn.addEventListener('click', function(e){

    let solve = eval(answer.innerText);
    answer.innerText = solve;
    console.log(answer.innerText);

});

allClearBtn.addEventListener('click', function(e){

    answer.innerText = "";

});

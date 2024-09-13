

const box1 = document.querySelector('.box1');

const btn1 = document.querySelector('.box1 button');

const box2 = document.querySelector('.box2');

const d1 = document.querySelector('.p1 .d1');

const d2 = document.querySelector('.p1 .d2');

const d3 = document.querySelector('.p1 .d3');

const hache1 = document.querySelector('.hache1');

const p2 = document.querySelector('.p2');

const p3 = document.querySelector('.p3');




btn1.addEventListener('click', () =>{

    box1.style.display = "none";

    box2.style.display = "block";


    setTimeout( () =>{
        d1.style.display = "block";
    }, 2000);

    setTimeout( () =>{
        d2.style.display = "block";
    }, 4000);

    setTimeout( () =>{
        hache1.style.display = "block";
    }, 5000);

    setTimeout( () =>{
        d3.style.display = "block";
    }, 6500);


    setTimeout( () =>{
        p2.style.display = "block";
        p3.style.display = "block";
    }, 8000);

});
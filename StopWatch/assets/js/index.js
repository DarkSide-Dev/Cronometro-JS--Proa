let ms = 0;
let sc = 0;
let mn = 0;
let hr = 0;

let millisegundos = document.querySelector(".milliseconds");
let segundos = document.querySelector(".seconds");
let minutos = document.querySelector(".minutes");
let horas = document.querySelector(".hour");

function changeCss(index){

    if(index){

        document.getElementById("css").setAttribute("href", "./assets/css/index.css");

    }
    else{

        document.getElementById("css").setAttribute("href", "./assets/css/index2.css");

    }

}

function start(){

    timer = setInterval(changeNumbers, 10);

}

function stopp(){

    clearInterval(timer);

}

function restart(){

    ms = 0;
    sc = 0;
    mn = 0;
    hr = 0;

    millisegundos.innerHTML = "00";
    minutos.innerHTML = "00";
    segundos.innerHTML = "00";
    horas.innerHTML = "00";

}

function changeNumbers(){

    ms+=10;

    if(ms >= 1000){

        ms = 0;
        sc++;

    }

    if(sc >= 60){

        sc = 0;
        mn++;

    }

    if(mn >= 60){ 

        mn = 0;
        hr++;

    }

    if(ms/10 < 10){
        millisegundos.innerHTML = `0${ms/10}`;
    }
    else{
        millisegundos.innerHTML = ms/10;
    }
    
    if(sc < 10){
        segundos.innerHTML = `0${sc}`;
    }
    else{
        segundos.innerHTML = sc;
    }

    if(mn < 10){
        minutos.innerHTML = `0${mn}`;
    }
    else{
        minutos.innerHTML = mn;
    }

    if(hr < 10){
        horas.innerHTML = `0${hr}`;
    }
    else{
        horas.innerHTML = hr;
    }

}
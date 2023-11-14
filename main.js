let start = document.querySelector('.button1')
let stop = document.querySelector('.button2')
let cancel = document.querySelector('.button3')
let minute = document.querySelector('.minute')
let second = document.querySelector('.second')

let interval;
let s = 0
let m = 0

start.addEventListener('click' , () =>{
    interval = setInterval(() =>{
        s++
        if(s <= 9) {
            second.innerHTML = `0${s}`
        } else{
            second.innerHTML = s
        }
        console.log(start)
        if(s == 60) {
            m++
            minute.innerHTML = m
            s = 0 
            second.innerHTML = s
        }
    }, 1000)
} )

stop.addEventListener('click', () =>{
    clearInterval(interval)
})
cancel.addEventListener('click', () =>{
    clearInterval(interval)
    m = 0
    s = 0
    minute.innerHTML = '00'
    second.innerHTML ='00' 
})



export let sec = 120;
export function timer(){
    let timer = setInterval(function(){
        document.getElementById('myTime').innerHTML='Temps: '+ sec + 'sec';
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
  }
const game = document.querySelector('.game');
const gamestart = document.querySelector('.game .landscape button');
const countdown = document.querySelector('.game .landscape h2');
const cars = document.querySelectorAll('.game .roadblock .road img');
const flags = document.querySelectorAll('.game .roadblock .road button');
let timer = 3;
let a = 0, b = 0, c = 0, d = 0;
const count = document.querySelectorAll('.WINNER .win');
const patuhan = document.querySelector('.WINNER');
const ref = document.querySelector('.game .WINNER button');
const starterg = document.querySelector('.game audio'); 
const erg = document.querySelector('.game .landscape audio');

setTimeout(() => {
    gamestart.style.opacity = 1;
    
}, 500);
gamestart.onclick = function() {
    starterg.play();
    this.style.opacity = 0;
    this.style.visibility = 'hidden';
    countdown.style.opacity = 1;
    countdown.style.visibility = 'visible';
    let set = setInterval(() => {
        timer--;
        countdown.innerText = timer;
        if(timer == 0) {
            clearInterval(set);
            countdown.style.opacity = 0;
            erg.play();
            let fon1 = document.querySelector('.game .roadblock').classList.add('active');
            let fon2 = document.querySelector('.game .landscape').classList.add('active');
            let set2 = setInterval(() => {
                let a1 = Math.round(Math.random() * 5);
                let b1 = Math.round(Math.random() * 5);
                let c1 = Math.round(Math.random() * 5);
                let d1 = Math.round(Math.random() * 5);
                a += a1;
                b += b1;
                c += c1;
                d += d1;
                
                    cars[0].style.marginLeft = a + 'px';
                    cars[0].src = 'car1.gif';
                    
                    cars[1].style.marginLeft = b + 'px';
                    cars[1].src = 'car3.gif';
                    cars[2].style.marginLeft = c + 'px';
                    cars[2].src = 'car1.gif';
                    cars[3].style.marginLeft = d + 'px';
                    cars[3].src = 'car4.gif';
                    if(a > window.innerWidth) {
                        flags[0].style.opacity = '1';
                        flags[0].style.visibility = 'visible';
                        
                    }
                    if(b > window.innerWidth) {
                        flags[1].style.opacity = '1';
                        flags[1].style.visibility = 'visible';
                    }
                    if(c > window.innerWidth) {
                        flags[2].style.opacity = '1';
                        flags[2].style.visibility = 'visible';
                    }
                    if(d > window.innerWidth) {
                        flags[3].style.opacity = '1';
                        flags[3].style.visibility = 'visible';
                    }
                    if (a > window.innerWidth +50 || b > window.innerWidth +50 || c > window.innerWidth +50 || d > window.innerWidth +50) {
                        setTimeout(() => {
                            if (a > b && a > c && a > d) {
                                if (b > c && b > d) {
                                    if(c > d) {
                                        count[2].innerHTML = `<span>win 3</span> <img src="FRUS.png">`;
                                    } else if (c < d) {

                                    } count[2].innerHTML = `<span>win 3</span> <img src="FBRAZ.jpg">`;
                                    count[1].innerHTML = `<span>win 2</span> <img src="FUS.png">`;
                                } else if (c > b && c > d) {
                                    if(b > d) {
                                        count[2].innerHTML = `<span>win 3</span> <img src="FUS.png">`;
                                    } else if(d > b) {

                                    } count[2].innerHTML = `<span>win 3</span> <img src="FBRAZ.jpg">`;
                                    count[1].innerHTML = `<span>win 2</span> <img src="FRUS.png">`;
                                } else if (d > b && d > c) {
                                    if(b > c) {
                                        count[2].innerHTML = `<span>win 3</span> <img src="FUS.png">`;
                                    } else if(c > b) {

                                    } count[2].innerHTML = `<span>win 3</span> <img src="FRUS.png">`;
                                    count[1].innerHTML = `<span>win 2</span> <img src="FBRAZ.jpg">`;
                                }
                                count[0].innerHTML = `<span>win 1</span> <img src="FA.png">`;
                                
                            } else if (b > a && b > c && b > d) {
                                if (c > a && c > d) {
                                    if(a > d) {
                                        count[2].innerHTML = `<span>win 3</span> <img src="FA.png">`;
                                    } else if(a < d) {
                                        count[2].innerHTML = `<span>win 3</span> <img src="FBRAZ.jpg">`;
                                    }
                                    count[1].innerHTML = `<span>win 2</span> <img src="FRUS.png">`;
                                } else if (d > a && d > c) {
                                    if(a > c) {
                                        count[2].innerHTML = `<span>win 3</span> <img src="FA.png">`;
                                    } else if(a < c) {
                                        count[2].innerHTML = `<span>win 3</span> <img src="FRUS.png">`;
                                    }
                                    count[1].innerHTML = `<span>win 2</span> <img src="FBRAZ.jpg">`;
                                } else if (a > c && a > d) {
                                    if(c > d) {
                                        count[2].innerHTML = `<span>win 3</span> <img src="FRUS.png">`;
                                    } else if(c < d) {
                                        count[2].innerHTML = `<span>win 3</span> <img src="FBRAZ.jpg">`;
                                    }
                                    count[1].innerHTML = `<span>win 2</span> <img src="FA.png">`;
                                }
                                count[0].innerHTML = `<span>win 1</span> <img src="FUS.png">`;
                            } else if (c > a && c > b && c > d) {
                                if (b > a && b > d) {
                                    if(a > d) {
                                        count[2].innerHTML = `<span>win 3</span> <img src="FA.png">`;
                                    } else if(a < d) {
                                        count[2].innerHTML = `<span>win 3</span> <img src="FBRAZ.jpg">`;
                                    }
                                    count[1].innerHTML = `<span>win 2</span> <img src="FUS.png">`;
                                } else if (a > b && a > d) {
                                    if(b > d) {
                                        count[2].innerHTML = `<span>win 3</span> <img src="FUS.png">`;
                                    } else if(b < d) {
                                        count[2].innerHTML = `<span>win 3</span> <img src="FBRAZ.jpg">`;
                                    }
                                    count[1].innerHTML = `<span>win 2</span> <img src="FA.png">`;
                                } else if (d > b && d > a) {
                                    if(b > a) {
                                        count[2].innerHTML = `<span>win 3</span> <img src="FUS.png">`;
                                    } else if(a > b) {
                                        count[2].innerHTML = `<span>win 3</span> <img src="FA.png">`;
                                    }
                                    count[1].innerHTML = `<span>win 2</span> <img src="FBRAZ.jpg">`;
                                }
                                count[0].innerHTML = `<span>win 1</span> <img src="FRUS.png">`;
                            } else if (d > a && d > b && d > c) {
                                if (b > a && b > c) {
                                    if(a > c) {
                                        count[2].innerHTML = `<span>win 3</span> <img src="FA.png">`;
                                    } else if(a < c) {
                                        count[2].innerHTML = `<span>win 3</span> <img src="FRUS.png">`;
                                    }
                                    count[1].innerHTML = `<span>win 2</span> <img src="FUS.png">`;
                                } else if (c > a && c > b) {
                                    if(a > b) {
                                        count[2].innerHTML = `<span>win 3</span> <img src="FA.png">`;
                                    } else if(a < b) {
                                        count[2].innerHTML = `<span>win 3</span> <img src="FUS.png">`;
                                    }
                                    count[1].innerHTML = `<span>win 2</span> <img src="FRUS.png">`;
                                } else if (a > b && a > c) {
                                    if(b > c) {
                                        count[2].innerHTML = `<span>win 3</span> <img src="FUS.png">`;
                                    } else if(b < c) {
                                        count[2].innerHTML = `<span>win 3</span> <img src="FRUS.png">`;
                                    }
                                    count[1].innerHTML = `<span>win 2</span> <img src="FA.png">`;
                                }
                                count[0].innerHTML = `<span>win 1</span> <img src="FBRAZ.jpg">`;
                            }
                            patuhan.style.opacity = '1';
                            patuhan.style.visibility = 'visible';
                            game.classList.add('kanfet');
                            
                            clearInterval(set2);
                        }, 1500);
                    }
                
            }, 1);
        }
    }, 1000);
};
ref.onclick = function() {
    window.location.reload();
    starterg.autoplay();
}

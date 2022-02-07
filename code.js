var cursor = document.querySelector('.dino');
let audio = document.querySelector('#music');
let x;
document.addEventListener('mousemove', function(e) {
    x = e.clientX;
    if (x < 50 || x > 550) {
        return 0;
    }
    cursor.style.left = x + 'px';
});
let realGameOver = false;
let isGameOver = false;
let b = 0;
let $point = document.createElement('div');
if (!isGameOver) $point.classList.add('point');
document.querySelector('.main').append($point);
let point = ($x) => {
    if (audio) {
        audio.play();
    }
    document.querySelector('.point').style.left = `${$x}px`;
    document.querySelector('.point').style.top = `${b}px`;
    b = b + 1;
    let low, high;
    low = $x + 37;
    high = $x + 67;
    if (b > 441 && b < 657) {
        if (x > low && x < high) {
            document.querySelector('.main').removeChild(document.querySelector('.point'))
            $htmlPoint = parseInt(document.querySelector('#point').innerText);
            $htmlPoint += 1;
            document.querySelector('#point').innerText = $htmlPoint;
            isGameOver = true;
            return 0;
        }
    }
    if (b > 657) {
        document.querySelector('.main').removeChild(document.querySelector('.point'))
        alert('you lose');
        document.querySelector('#point').innerText = 0;
        realGameOver = true;
        return 0;

    }
    setTimeout(() => {
        point($x);
    }, 5);
};
let call = () => {
    if (isGameOver === true) {
        console.log('callFun')
        isGameOver = false;
        let $p = document.createElement('div');
        $p.classList.add('point');
        document.querySelector('.main').append($p);
        b = 0;
        let ran = Math.floor(Math.random() * 31) + 0;
        let num = posX[ran]
        point(num, $p);
    };
    if (realGameOver === true) {
        return 0;
    }
    console.log('hahaha');
    setTimeout(call, 2000);
}
point(60)
call();
let posX = [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400, 420, 440, 460, 480, 500, 520, 540, 560, 580];
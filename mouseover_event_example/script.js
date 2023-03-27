let root = document.getElementById('root');
root.addEventListener('mouseover', () => {
    root.style.color = 'red';
});

let blueWhite = document.getElementsByClassName('blue-white');
blueWhite[0].addEventListener('mouseover', function() {
    this.style.backgroundColor = 'blue';
    this.style.color = 'white';
});

let p = document.getElementsByTagName('p');
p[1].addEventListener('mouseover', function() {
    this.style.fontSize = '50px';
});






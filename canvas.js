let canvas = document.querySelector('canvas'),
c = canvas.getContext('2d');

canvas.width = window.innerWidth
canvas.height = window.innerHeight

c.beginPath();
c.moveTo(0,0);
c.lineTo(window.innerWidth, window.innerHeight);
c.strokeStyle ="#bada55";
c.stroke();

for(let i = 0; i < 3; i++) {
    let x = Math.random() * innerWidth;
    y = Math.random() * innerHeight;
    color = ['green','red','blue'];
    c.beginPath();
    c.arc(x,y,30,0, Math.PI * 2, false)
    c.strokeStyle = color[i];
    c.stroke();
}
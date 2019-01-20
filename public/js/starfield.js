console.log('starfield.js loaded...')

// create canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.height = innerHeight;
canvas.width = innerWidth;

//starfield background radial gradient
const backgroundGradient = 
console.log(ctx)
//listen for screen resize
addEventListener('resize',function(){
    
    canvas.height = innerHeight;
    canvas.width = innerWidth;
    console.log('screen resize', canvas.height, canvas.width);

    // run init
    init();
});


// create Star
function Star(x, y, radius, color){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
}

Star.prototype.draw = function(){
    //console.log('draw star');
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false); // arc(x, y, star angle, end angle[,anticlockwise]), 
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();

}

Star.prototype.update = function(){
    // console.log('update star')
    this.draw()
}


// instantiate stars 
let stars = []; // global array to give access to animate()

function init(){
    console.log('load starfield canvas')
    const NUM_STARS = 400;
    const x = 10;
    const y = 10;
    const radius =  10;
    const color = 'black';


    for(var i = 0; i < NUM_STARS; i++){
        stars.push(new Star(x, y, radius, color));
    }
    console.log(stars);

    stars.forEach(star => {
        star.update()
    });

};

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height); // erase canvas

}

// run
init();
// animate();
console.log('starfield.js loaded...')

// create canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');


canvas.height = innerHeight;
canvas.width = innerWidth;




//listen for screen resize
addEventListener('resize',function(){
    
    canvas.height = innerHeight;
    canvas.width = innerWidth;
    console.log('screen resize', canvas.height, canvas.width);

    // run init
    init();
    animate();
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
    ctx.save()
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false); // arc(x, y, star angle, end angle[,anticlockwise]), 
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
    ctx.restore();

}

Star.prototype.update = function(){
    // console.log('update star')
    this.draw()
    //stars = []
}



//starfield background radial gradient
let backgroundRadialGradient; // global array to give access to animate()

// instantiate stars 
let stars = []; // global array to give access to animate()

function init(){
    console.log(canvas.width/2, canvas.height/2)

    backgroundRadialGradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.height/canvas.width);
    backgroundRadialGradient.addColorStop(0, "white");
    backgroundRadialGradient.addColorStop(.5, "black");


    console.log('load starfield canvas')
    stars = []
    const NUM_STARS = 100;
    const radius = 1;
    const color = 'white';
    let x;
    let y;

    for(var i = 0; i < NUM_STARS; i++){
        x = Math.random() * canvas.width;
        y = Math.random() * canvas.height;
        stars.push(new Star(x, y, radius, color));
    }

};

function animate(){

    requestAnimationFrame(animate);
    ctx.fillStyle = backgroundRadialGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height); // reset canvas

    stars.forEach(star => {
        star.update()
    });
}

// run
init();
animate();
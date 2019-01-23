console.log('starfield.js loaded...')

// create canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.height = innerHeight;
canvas.width = innerWidth;


//listen for screen resize
addEventListener('resize', function(){
    canvas.height = innerHeight;
    canvas.width = innerWidth;
    // run init
    init();
    animate();
});

//Element Click listener
addEventListener('click', function(click){
    console.log(click)
    let x1 = click.x;
    let y1 = click.y;

    stars.forEach(star => {
        let x0 = star.x;
        let y0 = star.y;
        if(Math.sqrt((x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0)) < star.radius){
            hyperSpeed();
        }
    });

});

// Star Class
function Star(x, y, speed, radius, color){
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.radius = radius;
    this.color = color;

};

Star.prototype.draw = function(){
    ctx.save()
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false); // arc(x, y, star angle, end angle[,anticlockwise]), d
    ctx.fillStyle = this.color;
    ctx.shadowColor = "#E3EAEF";
    ctx.shadowBlur = "100"
    ctx.fill();
    ctx.closePath();
    ctx.restore();

};

Star.prototype.update = function(){
    this.draw()
};

Star.prototype.move = function(){

};

//starfield background radial gradient
let backgroundRadialGradient; // global array to give access to animate()

function createBackgroundGradiant(){
    backgroundRadialGradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, 500);
    backgroundRadialGradient.addColorStop(0, "#323232");
    // backgroundRadialGradient.addColorStop(.8, "red");
    backgroundRadialGradient.addColorStop(1, "black");
}

// instantiate stars 
let stars = []; // global array to give access to animate()

function createStarfield(){
    stars = []
    const NUM_STARS = 10;
    const radius = 5;

    for (var i = 0; i < NUM_STARS; i++) {

        let x = Math.floor(Math.random() * canvas.width);
        let y = Math.floor(Math.random() * canvas.height);
        let z = Math.floor(Math.random() * canvas.width);

        let color = '#e5e5e5';

        if (i % 2 == 0) {
            color = "#9999ff";
        } else if (i % 3 == 0) {
            color = "#e5e5ff";
        };
        stars.push(new Star(x, y, z, radius, color));
    };
};

// have stars animate away
function hyperSpeed(){
    console.log('AYOOO');
}


// initializes star field
function init(){

    createBackgroundGradiant();
    createStarfield();
};

function animate(){

    ctx.fillStyle = backgroundRadialGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height); // reset canvas
    stars.forEach(star => {
        star.update()
    });
};

// Start
init();
animate();
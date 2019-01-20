class Star {
    constructor(containerWidth, containerHeight) {
        this.radius = Math.random() * 1/5;
        this.x = Math.floor(Math.random() * containerWidth + 1);
        this.y = Math.floor(Math.random() * containerHeight + 1);
        this.baseSpeed = 5; // base speed of stars in px/sec
    }

    //Getter
    get displayArea() {
        console.log(this.calcArea());
    }

    //Method
    calcArea() {
        return this.height * this.width;
    }
};

/**
 * Front-End Starfield background using Canvas
 * 
 * To Do:
 * Create canvas
 * create background color/gradient
 * create background starfield
 * create planets - see mountain tutorial
 * 
 * 
 * Move from frontend to backend display 
 */
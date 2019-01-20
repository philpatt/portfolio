class Star {
    constructor(x, y, size, velocity, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.velocity = velocity;
        this.color = color;
    }

    // Methods
    calcArea() {
        return this.height * this.width;
    }

};


/**
 * To DO:
 * 
 * create background star class with proper properities/getters/methods
 * 
 * 
 * "draw" stars - canvas npm?
 * 
 */
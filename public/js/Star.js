class Star {
    constructor(height, width, speed) {
        this.height = height;
        this.width = width;
        this.speed = speed;
    }

    //Getter
    get area() {
        return this.calcArea();
    }

    //Method
    calcArea() {
        return this.height * this.width;
    }
};


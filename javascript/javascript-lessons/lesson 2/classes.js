/*
Classes are templates for creating objects. They encapsulate data with code to work on that data.
Classes are built on prototypes, but also have some syntax and semantics that are unique to them.
Create a class with the class keyword.
Classes use a constructor method for initializing new objects.
*/

class rectangle {
    constructor(height, width,) {   
        this.height = height;
        this.width = width;
    }
         calcArea() {
        return this.width * this.height;
    }
         calcPerimeter() {
        return 2 * (this.width + this.height);
    }
    get area() {
        return this.calcArea();
    }
    get perimeter() {
        return this.calcPerimeter();
    }
}
box = new rectangle(2, 5); 
console.log(box.perimeter);
console.log(box.area);

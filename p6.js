/*
    CIT 281: Project 6
    Name: Edwin Gutierrez
*/

// Shape constructor
class Shape {
    constructor (sides = []) {
        this.sides = sides;
    }
    perimeter = () => this.sides[0] != undefined ? this.sides.reduce((accumulator, currentValue) => accumulator + currentValue) : 0;
}

// Test console.log for perimeter method
// console.log(new Shape([5, 10]).perimeter());  // 15
// console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
// console.log(new Shape().perimeter()); // 0

// Rectangle area class
class Rectangle extends Shape {
    constructor (length = 0, width = 0) {
        super([length, width, length, width]);
        this.length = length;
        this.width = width;
    }
    area = () => this.width * this.length;
}

// Test console.logs for area and extended Rectangle class
//console.log(new Rectangle(4, 4).perimeter());  // 16
// console.log(new Rectangle(4, 4).area());  // 16
// console.log(new Rectangle(5, 5).perimeter()); // 20
// console.log(new Rectangle(5, 5).area()); // 25
// console.log(new Rectangle().perimeter()); // 0
// console.log(new Rectangle().area()); // 0

// Triangle area class
class Triangle extends Shape {
    constructor (sideA = 0, sideB = 0, sideC = 0) {
        super([sideA, sideB, sideC]);
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    area = () => {
        let s = (this.sideA + this.sideB + this.sideC)/2;
        let area = Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
        return area;
    }
}

// Test console.log for triangle area
// console.log(new Triangle(3, 4, 5).perimeter());  // 12
// console.log(new Triangle(3, 4, 5).area());  // 6
// console.log(new Triangle().perimeter()); // 0
// console.log(new Triangle().area()); // 0

// Array of sides arrays
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];

// Block of code will calculate and display area and perimeter results
for (const arrayOfNumbers of data) {

    switch (arrayOfNumbers.length) {
        case 0:
            console.log('Shape with 0 sides unsupported');
            break;
        case 1:
            console.log('Shape with 1 side unsupported');
            break;
        case 2:
            let rectanglePerimeter = new Rectangle(...arrayOfNumbers).perimeter();
            let rectangleArea = new Rectangle(...arrayOfNumbers).area();
            if (arrayOfNumbers[0] === arrayOfNumbers[1]) {
                console.log(`Square with sides ${arrayOfNumbers.toString()} has perimter of ${rectanglePerimeter} and area of ${rectangleArea}`)
            } else {
                console.log(`Rectangle with sides ${arrayOfNumbers.toString()} has perimter of ${rectanglePerimeter} and area of ${rectangleArea}`)
            }
            break;
        case 3:
            let trianglePerimeter = new Triangle(...arrayOfNumbers).perimeter();
            let triangleArea = new Triangle(...arrayOfNumbers).area();
            console.log(`Triangle with sides ${arrayOfNumbers.toString()} has perimeter of ${trianglePerimeter} and area of ${triangleArea}`);
            break;
    }
}
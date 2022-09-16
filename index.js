
// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides;

    }
    get countSides() {
        return this.sides.length;
    }
    get perimeter(){
        let sum  = this.sides.reduce((total, currentValue)=> {return total + currentValue})
        return sum;
    }
}
class Triangle extends Polygon{
    get isValid() {
        let x = this.sides[0];
        let y = this.sides[1];
        let z = this.sides[2];
        if( x + y < z || y + z < x || x + z < y) {
            return false;
        } else {
            return true;
        }
    }
}
class Square extends Polygon {
    get isValid(){
        return this.sides.every(val => val === this.sides[0]);
    }
        get area(){
            return this.sides[0] * this.sides[1];
            }
            }
    

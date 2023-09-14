function parseCount(num) {
    let result = Number.parseFloat(num);
    if (Number.isNaN(result)) {
        throw new Error("Невалидное значение");
    } else {
        return result;
    }
}

function validateCount(num) {
    try {
        return parseCount(num);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
      if ((a + b < c) || 
          (b + c < a) || 
          (a + c < b)) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
      
      this.a = a;
      this.b = b;
      this.c = c;
    }
  
    get perimeter() {
      return this.a + this.b + this.c;
    }
  
    get area() {
      let p = (this.a + this.b + this.c) * 0.5;
      let s = Math.sqrt(p * ((p - this.a) * (p - this.b) * (p - this.c)));
      return +s.toFixed(3);
    }
  }
  
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch(error) {
      return {
        get perimeter() {
          return "Ошибка! Треугольник не существует";
        },
        get area() {
          return "Ошибка! Треугольник не существует";
        }
      }
    }
  }
  
  
  let triangle = new Triangle(9, 8, 8);
  console.log(triangle.perimeter);
  console.log(triangle.area);
  
  console.log(getTriangle(1, 1, 4));﻿

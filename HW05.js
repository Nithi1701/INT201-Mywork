// Default Parameter คือ การกำหนดค่าล่วงหน้าหรือค่า default ให้กับมัน แทนที่เราต้องระบุค่าทุกครั้งที่เรียกฟังก์ชัน
// ให้ Default Parameter คือ vat = 7
function payment(quantity, price, vat = 7){
    return (quantity * price * (1 + vat/100) );
}
console.log(payment(5, 25));
// หากต้องการเปลี่ยนไปใช้ค่าอื่น ให้ระบุค่าที่ต้องการ
console.log(payment(2, 100, 10));
console.log('-------------------------------------------');
//higher order function
function add(x, y) {
    return x + y;
  }
function divideTwo(fn, x, y) {
    return fn(x, y) / 2;
  }
  
function isEven(n) {
    return n % 2 === 0;
  }

function check(a, b, fn1, fn2) {
    return fn2(fn1(a, b));
  }

function isOdd(n) {
    return n % 2 === 1;
  }

console.log(divideTwo(add, 3, 2));
const checkIsEven = check(2, 3, add, isEven);
console.log(checkIsEven);
const checkIsOdd = check(2, 3, add, isOdd);
console.log(checkIsOdd);
console.log('-------------------------------------------');

// Closer
function outer() {
    const nameOfProduct = 'Apple';
    return function inner() {
      console.log('Product Name : ' + nameOfProduct);
    };
  }
  
function numberOfProduct() {
    let count = 0;
    return function counts() {
      count += 1;
      console.log('Number of Product : ' + count);
    };
  }

const innerFunction = outer();
innerFunction();

  
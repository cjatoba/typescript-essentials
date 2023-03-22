const add = (a: number, b:number): number => a + b;

const addWithOptionTax = (a: number, b: number, tax?:number): number => {
    if (typeof tax != 'undefined') {
        return (a + b) - tax;
    }

    return a + b;
}

// console.log(addWithOptionTax(2, 2, 1));
// console.log(addWithOptionTax(2, 2));

const applyDiscount = (price: number, discount: number = 5): number => {
    return price - (price * (discount /100));
}

console.log(applyDiscount(100));
console.log(applyDiscount(100, 25));

const calcTotal = (name: string, ...numbers: number[]): number => {
    let total = 10;
    numbers.map(number => total += number)
    return total;
}

console.log(calcTotal('José', 1, 4, 7, 10));

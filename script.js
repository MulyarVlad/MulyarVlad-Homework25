class SuperMath {
    check(obj) {
        const confirmMessage = confirm (
            `Do you want to use operation with ${obj.znak} and numbers ${obj.X} and ${obj.Y}?`
        );
        if (confirmMessage === true) {
            return this.calculate(obj.X, obj.Y, obj.znak);
        } else {
            return this.input();
        }
    }


calculate(x, y, znak) {

    switch(znak) {
        case `+`:
            return x + y;
        
        case `-`:
            return x - y;

        case `/`:
            return x / y;

        case `*`:
            return x * y;

        case `%`:
            return x % y;
    }
}

input() {
    const x = +prompt(`Enter x:`)
    const y = +prompt(`Enter y:`)
    const znak = prompt(`Enter the operator (+, -, /, *, %):`);

    const operators = ["+", "-", "/", "*", "%"];

    if (operators.includes(znak)) {
        return this.calculate(x, y, znak);
    } else {
        console.log("Invalid Operator");
    }
}

}

const supermath = new SuperMath ();
const obj = {X:12, Y:3, znak: "/" };

const result = supermath.check(obj);

console.log(result);
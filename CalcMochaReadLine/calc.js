const operations = require('./operations.js');
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
console.log(`
	Calc.js

	This is calc Node.js! 
	Vers: 1.0.0.

	Input two numbers and select what to do with them
	`);

rl.question('Input first number: ', (x) => {
	rl.question('Input seconde number: ', (y) => {
		rl.question(`
Choose operation:
[1] Sum (+)
[2] Diff (-)
[3] Multiply (*)
[4] Division (/)
Result: `, (choice) => {
				if (!operations.validateNumbers(x, y)) {
					console.log('Only numbers are allowed');
				}  else {
					switch (choice) {
						case '1':
						console.log(`Sum ${x} and ${y} is ${operations.add(x, y)}.`);
						break;
						case '2':
						console.log(`Difference of  ${x} and  ${y} is ${operations.subtract(x, y)}.`);
						break;
						case '3':
						console.log(`Product of ${x} and ${y} is ${operations.multiply(x, y)}.`);
						break;
						case '4':
						console.log(`Quotient of ${x} and ${y} is ${operations.divide(x, y)}.`);
						break;
						default:
						console.log('Please restart the program and select a number between 1 and 4');
						break;
					}
				}
				rl.close();
			});
	});
});

//rl.close()
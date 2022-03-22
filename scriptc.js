const myOp = prompt("the operator?");
const numA1 = prompt("the first number?");
const numB1 = prompt("the second number?");
const numA = Number(numA1);
const numB = Number(numB1);
if(myOp == "*") {
	const numResult = numA * numB;
	console.log(`Result ${numResult}`);
} else {
	if(myOp == "/") {
		const numResult = numA / numB;
		console.log(`Result ${numResult}`);
	} else {
		if (myOp == "-") {
			const numResult = numA - numB;
			console.log(`Result ${numResult}`);
		} else {
			const numResult = numA + numB;
			console.log(`Result ${numResult}`);
		}
	}	
}
function range (start, end, step){
	var wrong = [];
	if (start === undefined || step === undefined || step === undefined || start > end || step <= 0)
		return wrong
	var seq = [];
    while (start <= end) {
        seq.push(start);
        start += step
    }
	return seq;
}



console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
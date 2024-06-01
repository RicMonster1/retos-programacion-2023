//EJERCICIO
let alphabet = {
	a: '4',
	b: '13',
	c: '[',
	d: ')',
	e: '3',
	f: '|=',
	g: '&',
	h: '#',
	i: '1',
	j: ',_|',
	k: '|<',
	l: '1',
	m: '/\\/\\',
	n: '^/',
	o: '0',
	p: '|*',
	q: '(_,)',
	r: 'I2',
	s: '5',
	t: '7',
	u: '(_)',
	v: '\\/',
	w: '\\/\\/',
	x: '><',
	y: 'j',
	z: '2',
	1: 'L',
	2: 'R',
	3: 'E',
	4: 'A',
	5: 'S',
	6: 'b',
	7: 'T',
	8: 'B',
	9: 'g',
	0: 'o',
};

String.prototype.translateToLeet = function () {
	let result = '';
	this.toLowerCase()
		.split('')
		.forEach((character) => {
			if (Object.keys(alphabet).includes(character)) {
				result = result + alphabet[character];
			} else {
				result = result + character;
			}
		});
	return result;
};

let text = 'Hola. Me llamo Ric. Tengo 21';
let translatedText = text.translateToLeet();

console.log(`\nTexto original:\n${text}`);
console.log(`\nTexto traducido:\n${translatedText}`);

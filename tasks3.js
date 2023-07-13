
//*---------------------------  Уровень 3.1 задачника JavaScript  ------------------------------------*//

// Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.

let num10 = 12345;

function checkNumRise(num) {

	let str = num.toString();
	let i = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i + 1] < str[i]) {
			return false;
		}
	}
	return true;
}

console.log(checkNumRise(num10));


// Дан массив: [1, '', 2, 3, '', 5] Удалите из массива все пустые строки.

let arr11 = [1, '', 2, 3, '', 5];

function deleteGap(arr) {
	let arrNew = [];
	for (let el of arr) {
		if (el !== '') {
			arrNew.push(el);
		}
	}
	return arrNew;
}

console.log(deleteGap(arr11));


// Дан массив: Отсортируйте элементы в каждом подмассиве.

let arr13 = [
	[2, 1, 4, 3, 5],
	[3, 5, 2, 4, 1],
	[4, 3, 1, 5, 2],
]

function sortArr13(arr) {
	for (let elem of arr) {
		elem.sort();
	}
	return arr;
}

console.log(sortArr13(arr13));


// Даны два массива: Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.

let arr14 = [1, 2, 3];
let arr15 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function alignArr(arr1, arr2) {
	let w = arr2.length;
	for (let i = arr1.length; i < w; i++) {
		arr2.pop();
	}
	return arr2;
}
console.log(alignArr(arr14, arr15));



//*---------------------------  Уровень 3.2 задачника JavaScript  ------------------------------------*//


// Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.

let count = 10;
while (count < 1000) {
	count++;
	let str = count.toString();
	if (Number(str[str.length - 2]) % 2 === 0) {
		console.log(count);
	}
}


// Дан массив. Удалите из него каждый пятый элемент.

let arr22 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

function deleteFive(arr) {
	let arrNew = [];
	for (let i = 0; i < arr.length; i++) {
		if ((i + 1) % 5 !== 0) {
			arrNew.push(arr[i]);
		}
	}
	return arrNew;
}

console.log(deleteFive(arr22));


// Дана некоторая переменная с числом: let num = 5;
// Сделайте строку, содержащую столько нулей, сколько указано в переменной. В нашем случае получится такая строка: '00000'

let num = 5;

function createZero(num) {
	let arr = [];
	for (let i = 0; i < num; i++) {
		arr.push(0);
	}
	return arr.join('');
}

console.log(createZero(5));


// Дана некоторая строка со словами: 'aaa bbb ccc eee fff'
// Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее: 'aaa ccc fff'

let str24 = 'aaa bbb ccc eee fff';

function delTwo(str) {

	let arr = str.split(' ');
	arrNew = [];
	for (let i = 0; i < arr.length; i++) {
		if ((i + 1) % 2 !== 0) {
			arrNew.push(arr[i]);
		}
	}
	return arrNew.join(' ')
}

console.log(delTwo(str24));


// Дан массив: Найдите сумму элементов этого массива.

let arr25 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]

function sumArr(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let elem of arr[i]) {
			sum += elem;
		}
	}
	return sum;
}

console.log(sumArr(arr25));



//*---------------------------  Уровень 3.3 задачника JavaScript  ------------------------------------*//


// Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.

let arr31 = ['aa', 'rur', 'iwugfo', 'uaf', 'uahfuihauiofho'];

function deleteWord(arr) {
	let arrNew = [];
	for (let el of arr) {
		if (el.length <= 3) {
			arrNew.push(el);
		}
	}
	return arrNew;
}

console.log(deleteWord(arr31));

function deleteWord1(arr) {
	let res = arr.filter(function (el) {
		if (el.length <= 3) {
			return true;
		} else {
			return false;
		}
	})
	return res;
}

console.log(deleteWord1(arr31));


// Дано некоторое число: Проверьте, что все цифры этого числа являются нечетными.

let num32 = 13579;

function isEven(num) {
	let arr = Array.from(String(num));
	for (let elem of arr) {
		if (+elem % 2 == 0) {
			return false;
		}
	}
	return true;
}

console.log(isEven(num32));


// Дано некоторое слово: Проверьте, что это слово читается одинаково с любой стороны.

let str33 = 'abcba';

function isPol(str) {
	let strNew = str33.split('').reverse().join('');
	if (str === strNew) {
		return true;
	} else {
		return false;
	}
}

console.log(isPol(str33));


// Дан массив: Найдите сумму элементов этого массива.

let arr34 = [
	[
		[11, 12, 13],
		[14, 15, 16],
		[17, 17, 19],
	],
	[
		[21, 22, 23],
		[24, 25, 26],
		[27, 27, 29],
	],
	[
		[31, 32, 33],
		[34, 35, 36],
		[37, 37, 39],
	],
]

function isSumArr34(arr) {

	let sum = 0;
	for (let subarr of arr) {
		for (let subsubarr of subarr) {
			for (let el of subsubarr) {
				sum += el;
			}
		}
	}
	return sum;
}

console.log(isSumArr34(arr34));



//*---------------------------  Уровень 3.4 задачника JavaScript  ------------------------------------*//


// Выведите в консоль все числа в промежутке от 10 до 1000, у которых первая цифра четная.

let count41 = 10;
while (count41 < 1000) {
	count41++;
	if (String(count41)[0] % 2 == 0) {
		console.log(count41);
	}
}


// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
// Поменяйте местами пары элементов этого массива: [2, 1, 4, 3, 6, 5]

let arr42 = [1, 2, 3, 4, 5, 6];

function revArr42(arr) {
	let arrNew = [];
	for (let i = 0; i < arr.length; i = i + 2) {
		arrNew.push(arr[i + 1]);
		arrNew.push(arr[i]);
	}
	return arrNew;
}

console.log(revArr42(arr42));


// Дан следующий объект: Найдите сумму элементов этого объекта.

let obj43 = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}

function sumObj(obj) {

	let sum = 0;
	for (let key in obj) {
		let subObj = obj[key];
		for (let subKey in subObj) {
			sum += subObj[subKey]
		}
	}
	return sum;
}

console.log(sumObj(obj43));



//*---------------------------  Уровень 3.5 задачника JavaScript  ------------------------------------*//


// Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'.

let str50 = 'Абзац – актуально, взвешенно, иронично о главных событиях дня'

function sortWordA(str) {
	let arrNew = [];
	let arr = str.split(' ');
	for (let el of arr) {
		if (el[0].toLowerCase() === 'а') {
			arrNew.push(el);
		}

	}
	return arrNew;
}
console.log(sortWordA(str50));


// Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.

let arr52 = [1, 3, 8, 5, 10, 12, 250];

function divFive(arr) {
	let arrNew = [];
	for (let el of arr) {
		if (el % 5 === 0) {
			arrNew.push(el);
		}
	}
	return arrNew;
}

console.log(divFive(arr52));


// Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль.

let arr53 = [1, 3, 8, 5, 0, 10, 12, 250, 800];

function hasZero(arr) {
	let arrNew = [];
	arr.map(function (el) {
		if (/0/.test(el)) {
			arrNew.push(el)
		}
	})
	return arrNew;
}
console.log(hasZero(arr53));


// Дан массив со числами. Проверьте, что в нем есть число, содержащее в себе цифру 3.

let arr54 = [1, 3, 8, 5, 0, 10, 12, 250, 800];

console.log(arr54.includes(3));


// Дано некоторое число: Отсортируйте цифры этого числа. В нашем случае должно получится следующее:

let num55 = 35142;
function func55(num) {
	return String(num).split('').sort().join('');
}
console.log(func55(num55));


// Напишите программу, которая сформирует следующую строку: '-1-2-3-4-5-'

function stringCreate() {
	let arr = [];
	for (let i = 0; i < 5; i++) {
		if (i == 0) {
			arr.push('-');
			arr.push(i + 1);
			arr.push('-');
		} else {
			arr.push(i + 1);
			arr.push('-');
		}
	}
	return arr.join('')
}
console.log(stringCreate());


// Дан следующий объект: Найдите сумму элементов этого объекта.

let obj57 = {
	1: {
		1: {
			1: 111,
			2: 112,
			3: 113,
		},
		2: {
			1: 121,
			2: 122,
			3: 123,
		},
	},
	2: {
		1: {
			1: 211,
			2: 212,
			3: 213,
		},
		2: {
			1: 221,
			2: 222,
			3: 223,
		},
	},
	3: {
		1: {
			1: 311,
			2: 312,
			3: 313,
		},
		2: {
			1: 321,
			2: 322,
			3: 323,
		},
	},
}

function sumObj57(obj) {
	let sum = 0;

	for (let key in obj) {
		let subObj = obj[key];
		for (let subKey in subObj) {
			let subsubObj = subObj[subKey];
			for (subsubKey in subsubObj) {
				sum += subsubObj[subsubKey]
			}
		}
	}
	return sum;
}

console.log(sumObj57(obj57));



//*---------------------------  Уровень 3.6 задачника JavaScript  ------------------------------------*//


// Дан массив с числами. Удалите из него числа, состоящие более чем из трех цифр.

let arr61 = [1, 20, 300, 5478, 4798, 45, 51548, 56, 487];

function delThreeNum(arr) {
	let arrNew = arr.filter(el => {
		if (String(el).length <= 3) {
			return true;
		}
	});
	return arrNew;
}

console.log(delThreeNum(arr61));


// Дано число, например, вот такое: Проверьте, что все цифры этого числа больше нуля.

let num62 = 12345;

function checkZeroNum(num) {
	for (let i = 0; i < String(num).length; i++) {
		if (Number(String(num)[i]) <= 0) {
			return false;
		}
	}
	return true;
}

console.log(checkZeroNum(num62));


// Дан некоторый массив, например, вот такой: [123, 456, 789]. 
// Слейте все элементы этого массива в один массив, разбив их посимвольно: [1, 2, 3, 4, 5, 6, 7, 8, 9]

let arr63 = [123, 456, 789];

function concatNums(arr) {
	let arrNew = arr.join('').split('');
	let arrTotal = [];
	for (let el of arrNew) {
		el = +el;
		arrTotal.push(el);
	}
	return arrTotal;
}
console.log(concatNums(arr63));


// Дан следующая структура: Найдите сумму элементов этой структуры.

let data64 = [
	{
		1: 11,
		2: 12,
		3: 13,
	},
	{
		1: 21,
		2: 22,
		3: 23,
	},
	{
		1: 24,
		2: 25,
		3: 26,
	},
];

function sumStruct(arr) {

	let sum = 0;
	for (let obj of arr) {
		for (let key in obj) {
			sum += obj[key]
		}
	}
	return sum;
}

console.log(sumStruct(data64));



//*---------------------------  Уровень 3.7 задачника JavaScript  ------------------------------------*//


// Дана строка со словами. Отсортируйте слова в алфавитном порядке.

let str71 = 'Людям нужна жесткая структура и точные указания от церкви, настаивал Арингароса, а не заигрывание и попустительство'

function sortStrAZ(str) {
	return str.toLowerCase().split(' ').sort().join(' ');
}

console.log(sortStrAZ(str71));


// Дано число. Получите массив делителей этого числа.

let num72 = 284;

function isDividor(num) {
	let arr = [];
	for (let i = 1; i <= num; i++) {
		if (num % i == 0) {
			arr.push(i);
		}
	}
	return arr;
}

console.log(isDividor(num72));


// Даны два числа. Получите массив общих делителей этих чисел.

let num73 = 300;
let num74 = 15;


function isDividor2(num1, num2) {
	let arr = [];
	let num;
	if (num1 > num2) {
		num = num1;
	} else {
		num = num2;
	}
	for (let i = 1; i <= num; i++) {
		if (num1 % i == 0 && num2 % i == 0) {
			arr.push(i);
		}
	}
	return arr;
}

console.log(isDividor2(num73, num74));


// Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы.

let num75 = 11;

function hasDividor(num) {
	let q = 0;
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			q++;
		}
	}
	if (q > 1 || q == 0) {
		return false;
	} else {
		return true;
	}
}
console.log(hasDividor(num75));


// Через запятую написаны числа. Получите максимальное из этих чисел.

let str76 = '1,457,54,4,45,79827,7219852';

function isHightNum(str) {

	let max;
	let arr = str.split(',')
	for (let i = 0; i < arr.length - 1; i++) {
		if (Number(arr[i]) > Number(arr[i + 1])) {
			max = arr[i];
		} else {
			max = arr[i + 1];
		}
	}
	return +max;
}

console.log(isHightNum(str76));


// Дан массив с числами. После каждого однозначного числа вставьте еще такое же.

let arr77 = [1, 20, 300, 5, 4798, 8, 51548, 6, 487];

function addMore(arr) {
	let arrNew = [];
	for (let el of arr) {
		if (String(el).length === 1) {
			arrNew.push(el);
			arrNew.push(el);
		} else {
			arrNew.push(el);
		}
	}
	return arrNew;
}

console.log(addMore(arr77));


// Дана строка. Удалите из нее все гласные буквы.

let str78 = 'строка';

function deleteVowels(str) {

	let strNow = '';
	let vow = 'аеёиоуыэюя';

	for (let i = 0; i < str.length; i++) {

		if (vow.indexOf(str[i]) == -1) {
			strNow += str[i];
		} else {
			strNow += '';
		}
	}
	return strNow;
}

console.log(deleteVowels(str78));


// Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке.

let str79 = 'Сделайте заглавной последнюю букву каждого слова в этой строке';

function changeLetters(str) {
	let arrNew = [];
	let arr = str.split(' ');
	for (let el of arr) {
		el = el.substr(0, el.length - 1) + el.substr(el.length - 1).toUpperCase();
		arrNew.push(el);
	}
	return arrNew.join(' ');
}

console.log(changeLetters(str79))


// Дан следующая структура: Найдите сумму элементов этой структуры.

let data79 = [
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
];

function isSumDataThis(arr) {

	let sum = 0;
	for (let obj of arr) {
		for (let key in obj) {
			let subArr = obj[key];
			for (let el of subArr) {
				sum += el;
			}
		}
	}
	return sum;
}

console.log(isSumDataThis(data79));



//*---------------------------  Уровень 3.8 задачника JavaScript  ------------------------------------*//

// Дан массив с числами. Проверьте, что все числа из этого массива содержат в себе цифру 3.

let arr80 = [13, 23, 300, 53, 63];

function hasThreeInArr(arr) {
	for (let elem of arr) {
		if (String(elem).indexOf(3) == -1) {
			return false;
		}
	}
	return true;
}
console.log(hasThreeInArr(arr80));


// Дана строка в формате: 'kebab-case'  Преобразуйте ее в формат: 'snake_case'

let str81 = 'mercedes-benz-w124';

function isSnake(str) {
	return str.split('-').join('_')
}

console.log(isSnake(str81));


// Дана строка в формате: 'snake_case'. Преобразуйте ее в формат: 'camelCase'

let str82 = 'mercedes_benz_w124';

function isCamelCase(str) {
	let arr = [];
	for (let el of str.split('_')) {
		arr.push(el.substr(0, 1).toUpperCase() + el.substr(1))
	}
	return arr.join('');
}

console.log(isCamelCase(str82));


// Дана строка в формате: 'camelCase'. Преобразуйте ее в формат: 'snake_case'.

let str83 = 'MercedesBenzW124';

function isSnakeCase(str) {
	let arr = [];
	let arrT = str.split('');

	for (let i = 0; i < arrT.length; i++) {

		if (/[A-Z]/.test(arrT[i])) {
			arr.push('_')
			arr.push(arrT[i].toLowerCase());
		} else {
			arr.push(arrT[i]);
		}
	}
	arr.shift();
	return arr.join('');
}

console.log(isSnakeCase(str83));


// Сформируйте с помощью циклов следующий массив:

// [
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// ]

function createArrInArr() {
	let arr = [];
	for (let i = 0; i < 5; i++) {
		let arr2 = [];
		arr.push(arr2);

		let q = 1;

		while (q <= 3) {
			arr2.push(q);
			q++;
		}
	}
	return arr;
}

console.log(createArrInArr());



//*---------------------------  Уровень 3.9 задачника JavaScript  ------------------------------------*//


// Дана строка. Проверьте, что эта строка состоит только из цифр.

let str91 = '1234dsf';

function isNumTrue(str) {

	let nums = '0123456789';
	for (let i = 0; i < str.length; i++) {

		if (nums.indexOf(str[i]) == -1) {
			return false
		}
	}
	return true;
}

console.log(isNumTrue(str91));


// Дана строка. Проверьте, что эта строка состоит только из четных цифр.

let str92 = '24688';

function isNum92(str) {

	for (let i = 0; i < str.length; i++) {
		if (+str[i] % 2 != 0) {
			return false
		}
	}
	return true;
}

console.log(isNum92(str92));


// Дан массив со числами. Удалите из него числа, имеющие два и более нуля.

let arr93 = [100000000000, 20, 300, 5, 4798, 51008, 600, 487];

let arrN93 = [];
let elem = '';
for (let el of arr93) {
	if (!/[0]{2,}/.test(el)) {
		arrN93.push(el);
	}
}
console.log(arr93)
console.log(arrN93)


// Найдите все числа от 1 до 1000, сумма цифр которых равна 13.

function sum13ofNum(data) {

	let arr = []
	let count = 1;

	while (count < data) {

		count++;
		let str = String(count);
		let sum = 0;

		for (let i = 0; i < str.length; i++) {
			sum += +str[i];
		}
		if (sum === 13) {
			arr.push(count);
		}
	}
	return arr;
}

console.log(sum13ofNum(1000));


// Сформируйте с помощью циклов следующий массив:

// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]

let arr95 = [];
let a = 1;
for (let i = 0; i < 3; i++) {

	let subarr = [];
	arr95.push(subarr)

	while (a < 10) {
		subarr.push(a);
		a++;

		if (subarr.length == 3) {
			break;
		}
	}
}
console.log(arr95);



//*---------------------------  Уровень 4.0 задачника JavaScript  ------------------------------------*//

// Дан массив. Сделайте так, чтобы в нем каждый элемент повторился два раза.

let arr101 = [10, 20, 300, 5, 4798, 51008, 600, 487];

function addCopyElArr(arr) {
	let newArr = [];
	for (let el of arr) {
		newArr.push(el);
		newArr.push(el);
	}
	return newArr;
}
console.log(addCopyElArr(arr101));


// Дан массив и число. Оставьте в массиве только те числа, которые являются делителями заданного числа.

let arr102 = [10, 20, 30, 40, 50];
let num102 = 100;

function isFilterArr(arr, num) {
	let arr1 = [];
	let arr2 = [];
	let str = String(num);
	for (let i = 1; i <= num; i++) {
		if (num % i === 0) {
			arr1.push(i);
		}
	}

	for (let elem of arr) {
		for (let i = 0; i < arr1.length; i++) {
			if (elem === arr1[i]) {
				arr2.push(elem);
			}
		}
	}
	return arr2;
}

console.log(isFilterArr(arr102, num102));


// Даны два числа. Получите массив цифр, которые есть и в одном, и во втором числе.

let num103 = 4613687951;
let num104 = 9751326;

function arrIsNums(num1, num2) {
	let arr = [];
	let str1 = String(num1);
	let str2 = String(num2);

	for (let i = 0; i < str1.length; i++) {
		for (let k = 0; k < str2.length; k++) {
			if (str2[k] === str1[i]) {
				arr.push(+str2[k])
				str2 = str2.slice(0, k) + str2.slice(k + 1);
			}
		}
	}
	return arr;
}

console.log(arrIsNums(num103, num104));


// Дано число. Получите массив позицией всех цифр 3 в этом числе, за исключением первой и последней.

let num105 = 2395338583338753;

function funcIsThree(num) {
	let arr = [];
	let str = String(num);
	for (let i = 0; i < str.length; i++) {
		if (str[i] === '3') {
			arr.push(i);
		}
	}
	arr.pop();
	arr.shift();
	return arr;

}
console.log(funcIsThree(num105));



// Дан массив с числами. Оставьте в нем числа, состоящие из разных цифр, а остальные удалите.

let arr106 = [123, 232, 979, 6666, 7777, 78943, 132, 23, 22, 864];

function isOther(arr) {

	let arrNew = [];
	let arr1 = [];
	for (let el of arr) {
		for (let i = 0; i < String(el).length - 1; i++) {
			if (String(el)[i] !== String(el)[i + 1]) {
				arrNew.push(el);
			}
		}
	}
	for (let i = 0; i < arrNew.length; i++) {
		if (arrNew[i] !== arrNew[i + 1]) {
			arr1.push(arrNew[i])
		}
	}

	return arr1;
}
console.log(isOther(arr106));


// Дан массив: Слейте элементы этого массива в один одномерный массив: [1, 2, 3, 4, 5, 6, 7, 8, 9]

let arr107 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]

function functionLast(arr) {
	let arrNew = [];
	for (let subarr of arr) {
		for (let el of subarr) {
			arrNew.push(el);

		}
	}
	return arrNew;
}
console.log(functionLast(arr107));







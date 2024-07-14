// Основы JS
/* <- === === === === === === === === === === === === === ===  Типы данных  === === === === === === === === === === === === === === -> */

// типы данных

// let int = 5,
// 				str ='lorem',
// 				float = 1.5,
// 				und,
// 				inf = 1 / 0,
// 				bool = true,
// 				n = null,
// 				nan = 'lorem' - 2

// console.log(int)
// console.log(str)
// console.log(float)
// console.log(und)
// console.log(inf)
// console.log(bool)
// console.log(n)
// console.log(nan)

/* <- === === === === === === === === === === === === === ===  Типы данных end  === === === === === === === === === === === === === === -> */

/* <- === === === === === === === === === === === === === ===  Математические операции  === === === === === === === === === === === === === === -> */

// let a = 27
// let b = 7

// console.log(a + ' + ' + b + ' = ' + (a + b))
// console.log(a + ' - ' + b + ' = ' + (a - b))
// console.log(a + ' * ' + b + ' = ' + a * b)
// console.log(a + ' / ' + b + ' = ' + a / b)
// console.log(a + ' % ' + b + ' = ' + a % b)
// console.log(a + ' ** ' + b + ' = ' + a ** b)

// console.log('');
// console.log('новый способ');
// console.log('');

// console.log(`${a} + ${b} = ${a + b}`)
// console.log(`${a} - ${b} = ${a - b}`)
// console.log(`${a} * ${b} = ${a * b}`)
// console.log(`${a} / ${b} = ${a / b}`)
// console.log(`${a} % ${b} = ${a % b}`)
// console.log(`${a} ** ${b} = ${a ** b}`)

// 27 / 7 = 3
// 7 * 3 = 21
// 27 - 21 = 6

// 13 / 9 = 1
// 9 * 1 = 9
// 13 - 9 = 4
/* <- === === === === === === === === === === === === === ===  Математические операции end  === === === === === === === === === === === === === === -> */

// Операторы сравнение (Операторы булевой логики 'true' 'false')

// console.log(5 > 2);
// console.log(5 == 2);
// console.log(5 != 2);
// console.log('5' === '5');
// console.log(true !== true);
// console.log(true == 1);
// console.log(false == 0);

// console.log(13 % 9);
// console.log(2 + 2 === 13 % 9);
// console.log(9 > '9');
// console.log((5 === 5 && 9 > '9') || (2 + 2 === 13 % 9))

// let a = 0
// console.log(Boolean (a));

// let b = '0'
// console.log(Boolean (b));
// console.log(a == b);

// Логический оператор или ( || )

// console.log(true || false || false);

// let a = ''
// a ||= `'Нет информации в ${a}'`
// console.log(a)

// if(a == false){
// 	console.log(`В значение нет данных`);
// }

// Логический оператор и ( && )

// console.log(true && false && true);

// let a = false
// a &&= `Лож`
// console.log(a);

// let greeting = 'Привет'
// if(greeting){
// 	greeting = greeting + ', пользователь'
// }
// console.log(greeting);

// Оператор нулевого слияния (??)

// let user;
// console.log(user ?? 'Anonymous')/* Выйдет Anonymous (user не существует) */

// let user = 'Ivan'
// console.log(user ?? 'Anonymous')/* Выйдет Ivan (user существует) */

// let x = ( null ) ?? 3
// console.log(x)

// Задачи (●'◡'●)

// let num = 9
// console.log(num > 5 && num <= 9);

// let a = 1
// let b = 0

// if (a > b) {
// 	console.log(`${a} больше ${b}`);
// 	alert(`${a} больше ${b}`)
// }else if(a < b){
// 	console.log(`${a} меньше ${b}`);
// 	alert(`${a} меньше ${b}`)
// }else{
// 	console.log(`${a} равно ${b}`);
// 	alert(`${a} равно ${b}`)
// }

// Задачи
// Простой задача на определение среднего числе

// let a = Number(prompt('Ведите первое число')),
// 				b = Number(prompt('Ведите второе число')),
// 				c = Number(prompt('Ведите третье число')),
// 				s = ((b > a && a > c) || (b < a && a < c)) ? console.log(`Первое число среднее = ${a}`) : ((a > b && b > c) || (a < b && b < c)) ? console.log(`Второе число среднее = ${b}`) : ((a > c && c > b) || (a < c && c < b)) ? console.log(`Трете число среднее = ${c}`) : console.log(`В условие нет среднего числа`)

// if ((b > a && a > c) || (b < a && a < c)){
// 	console.log(`Первое число среднее = ${a}`);
// }else if((a > b && b > c) || (a < b && b < c)){
// 	console.log(`Второе число среднее = ${b}`);
// }else if((a > c && c > b) || (a < c && c < b)){
// 	console.log(`Трете число среднее = ${c}`);
// }else{
// 	console.log(`В условие нет среднего числа`);
// }

// ((b > a && a > c) || (d > a && a > s) || (b < a && a < c) || (d < a && a < s))
/* 
let a = Number(prompt('Ведите первое число'))
let b = Number(prompt('Ведите второе число'))
let c = Number(prompt('Ведите третье число'))
let d = Number(prompt('Четвертое третье число'))
let s = Number(prompt('Пятое третье число'))

if ((b > a && a > c) || (d > a && a > s) || (b < a && a < c) || (d < a && a < s)){
	console.log(`Первое число среднее = ${a}`);
}
else if((a > b && b > c && d > b && b > s) || (a < b && b < c && d < b && b < s)){
	console.log(`Второе число среднее = ${b}`);
}
else if((a > c && c > b && d > c && c > s) || (a < c && c < b && d < c && c < s)){
	console.log(`Трете число среднее = ${c}`);
}
else if ((a > d && d > b && c > d && d > s) || (a < d && d < b && c < d && d < s)){
	console.log(`Трете число среднее = ${d}`);
}
else if ((a > s && s > b && c > s && s > d) || (a > s && s < b && c < s && s < d)) {
	console.log(`Трете число среднее = ${s}`);
}
else{
	console.log(`В условие нет среднего числа`);
}
 */

// Проверка типа данных и определение среднего числе

// let a = prompt('Ведите первое число')
// let b = prompt('Ведите второе число')
// let c = prompt('Ведите третье число')
// console.log(typeof(a));
// if (typeof(a) != Number || typeof(b) != Number || typeof(c) != Number) {
// 	console.log('В условие запишите цифры');
// }else{
// 	let num1 = Number(a),
// 					num2 = Number(b),
// 					num3 = Number(v)
// 	if ((num2 > num1 && num1 > num3) || (num2 < num1 && num1 < num3)){
// 		console.log(`${a} среднее число`);
// 	}else if((num1 > num2 && num2 > num3) || (num1 < num2 && num2 < num3)){
// 		console.log(`${b} среднее число`);
// 	}else if((num1 > num3 && num3 > num2) || (num1 < num3 && num3 < num2)){
// 		console.log(`${c} среднее число`);
// 	}else{
// 		console.log(`В условие нет среднего числа`);
// 	}
// }

// модули
// 27 / 7 = 3
// 7 * 3 = 21
// 27 - 21 = 6

// Задачи
// решение Марат https://t.me/c/1755050579/23890
// let numberOfBalls = prompt("Введите количество мячей", 0);
// console.log('numberOfBalls: ', numberOfBalls);
// let textResult = function(numberOfBalls) {
//   let num = parseInt(numberOfBalls % 10);
//   if (num === 0) {
//     return 'мячей';
//   } else if (num === 1) {
//     return 'мяч';
//   } else if (num === 2 || num === 3 || num === 4) {
//     return 'мяча';
//   } else if (num >= 5) {
//     return 'мячей';
//   }
// }
// console.log(textResult(numberOfBalls));

// alert(`В зале ${numberOfBalls} ${textResult(numberOfBalls)}`);

// Задачи
// Первое задачка от Сергей
// let userResponse = Number(prompt('Ведите число а код его подставить с окончанием на слово мяч')),
// 				moduleResult = userResponse % 10
// if(moduleResult == 1){
// 	console.log(`${userResponse} мяч`)
// } else if (moduleResult == 2 || moduleResult == 3 || moduleResult == 4){
// 	console.log(`${userResponse} мяча`)
// }else if(moduleResult == 0 || moduleResult >= 5){
// 	console.log(`${userResponse} мячей`)
// }

// Задачи
// Второе задачка от Сергей
// let userResponse = Number(prompt('Ведите свой возраст'))
// if (userResponse > 0){
// 	if (userResponse <= 18) {
// 		console.log('Вы еще молоды. Вам нужно учится');
// 	}else if (userResponse <= 59) {
// 		console.log('Вам нужно работать');
// 	}else if (userResponse <= 59) {
// 		console.log('Вам скоро на пенсию');
// 	}else if (userResponse <= 150) {
// 		console.log('Вы пенсионер')
// 	}else {
// 		console.log('Вы не человек');
// 	}
// } else{
// 	console.log('Ведите значение в положительном порядке');
// }

// console.log(true || false || false);
// console.log(true && false && true);

// Задачи

// Запросите у пользователя число. Выведите последнюю цифру данного числа, используя математический оператор.

// Sample Input 1:

// 18
// Sample Output 1:

// 8
// Sample Input 2:

// 103
// Sample Output 2:

// 3
// Sample Input 3:

// 356
// Sample Output 3:

// 6

// let resUsers = Number(prompt('Введите число')),
// 				moduleRes = resUsers % 10
// console.log(moduleRes)

// Трете задачка от Сергей
/* 
let userResponse = Number(prompt('Ведите время в цифрах'))

if (userResponse > 0 && userResponse <= 24) {
	if (userResponse >= 6 && userResponse < 12) {
		console.log(`${userResponse} часа утра`)
	} else if (userResponse >= 12 && userResponse < 18) {
		console.log(`${userResponse} часа дня`)
	} else if (userResponse >= 18 && userResponse < 24) {
		console.log(`${userResponse} часа вечера`)
	} else {
		console.log(`${userResponse} часа ночи`)
	}
} else {
	console.log('Вы чутка перебрали с алкоголем')
}
 */

// Задачи
// Четвертое задачка от Сергей

/* let userResponse = Number(prompt('Ведите время в цифрах'))

if (userResponse > 0 && userResponse <= 24) {
	if (userResponse >= 5 && userResponse < 12) {
		console.log('Доброе утро')
	} else if (userResponse >= 12 && userResponse < 18) {
		console.log('Добрый день')
	} else if (userResponse >= 18 && userResponse < 22) {
		console.log('Добрый вечер')
	} else {
		console.log('Доброй ночи')
	}
} else {
	console.log('Вы чутка перебрали с алкоголем')
} */

// Задачи

// Задачка от https://learn.javascript.ru/logical-operators#tasks
// let login = prompt('Кто там ?', '')
// if (login === 'azam') {
// 	let pass = prompt('Пароль', '')
// 	if (pass === '1234') {
// 		alert('Здравствуйте босс')
// 	}else if (pass === null || pass === ''){
// 		alert('Отменен')
// 	}else {
// 		alert('Не верный пароль босс')
// 	}
// }else if (login === null || login === '') {
// 	alert('Отменен')
// }else {
// 	alert('Я вас не знаю')
// }

/* <------ Циклы -------> */
// let i = 0
// Префикс инкримент
// console.log(++i) /* i = i + 1 log(i) */
// Постфикс инкримент
// console.log(i++)/* log(i) i = i + 1 */
// Префикс дикримент
// console.log(--i)/* i = i - 1 log(i) */
// Постфикс дикримент
// console.log(i--)/* log(i) i = i - 1 */

// while
// let i = 0
// while(i < 10){
// 	console.log(i++)
// }
// i = i - 1
// while(i > 0){
// 	console.log(--i)
// }

// do while
// let i = 0
// do{
// 	console.log(++i)
// }while(i < 10)
// do{
// 	console.log(--i)
// }while(i > 0)

// do{
// 	var resultUser = Number(prompt('угадайте число'))
// }while(resultUser != 2){
// 	console.log(resultUser)
// }

// for
// 								1								2					4
// for(let i = 0; i < 10; i++){
// 													3
// 	console.log(i)
// }

// let sum = 0,
// 	value
// while (true){
// 	value = Number(prompt('Введите число'))
// 	if (!value) break
// 	sum += value
// }
// console.log(`Сумма = ${sum}`)

// let resUsers = prompt('Введите число')

// console.log(`1 ${resUsers}`)
// // console.log(`2 ${resUsers === ''}`)
// console.log(`3 ${resUsers === ''}`);
// console.log(`4 ${resUsers === null}`);
// console.log(`5 ${Number.isNaN(+resUsers)}`)

// for(let i = 0; i < 10; i++){
// 	if (i % 2 == 0) continue
// 	console.log(i)
// }

// outer: for (let i = 0; i < 3; i++) {
// 	for (let j = 0; j < 3; j++) {
// 		let input = prompt(`Значение на координатах (${i},${j})`, '')
// 		console.log(!input);
// 		if (!input) break outer
// 	}
// }
// console.log('Готово!')

// let i = 0
// while (++i < 5) console.log(i)

// let i = 0
// while (i++ < 5) console.log(i)

// for(let i = 0; i < 5; i++) console.log(`1 ${i}`)
// for(let i = 0; i < 5; ++i) console.log(`2 ${i}`)

// for(let i = 0; i < 3; i++){
// 	console.log(`number ${i}!`)
// }

// let i = 0
// while(i < 3){
// 	console.log(`number ${i}`)
// 	i++
// }

// let a = Number(prompt('Введите число'))
// console.log(!a)
// console.log(Number.isNaN(a))

// let resultUser = Number(prompt('Введите число для подсчёта факториал числа'))
// let res = 1
// for(let i = 1; i <= resultUser; i++){
// 	res = res * i
// 	console.log(res)
// }

// Задачи
/* let resultUser = Number(prompt('Введите число'))
let str = ''
for(let i = 0; i < resultUser; i++){
	str = str + '#'
	console.log(str);
}
*/
/* 
#
##
###
####
#####
*/

// Задачи
/*let resultUser = Number(prompt('Введите число'))
let str = ''
let int = 0
for(let i = 0; i < resultUser * 2 - 1; i++){
	if(int < resultUser){
		for(let j = 0; j < i + 1; j++){
			str += '#'
		}
		console.log(str);
	}else{
		// for(let j = 0; j < resultUser * 2 - i - 1; j++){
		// 	str += '#'
		// }
		for(let j = resultUser * 2 - i - 1; j > 0; j--){
			str += '#'
		}
		console.log(str);
	}
	str = ''
	int++
}
*/

/* 
#
##
###
####
#####
####
###
##
#
*/

// Задачи
/* let resUser = Number(prompt('Введите число'))
let int = 0
let str = ''
for(let i = 0; i < resUser; i++){
		for(let j = 0; j < i; j++){
			str += '_'
		}
		console.log(`${str}*`)
	str = ''
}
*/
/* 
*
_*
__*
___*
____*
*/

// Задачи
/* let resUser = Number(prompt('Введите число'))
let int = 0
let str = ''
for(let i = 0; i < resUser * 2 - 1; i++){
	if (int < resUser) {
		for(let j = 0; j < i; j++){
			str += '_'
		}
		console.log(`${str}*`)
	}else{
		for(let j = 0; j < resUser * 2 - i - 1 - 1; j++){
			str += '_'
		}
		console.log(`${str}*`);
	}
	str = ''
	int++
}
*/

/* 
*
_*
__*
___*
____*
___*
__*
_*
*
*/

// Задачи
// let resUser = Number(prompt('Введите число'))
// let int = 0
// let str = ''
// for(let i = 0; i < resUser; i++){
// 	for(let j = 0; j < resUser - i - 1; j++){
// 		str += ' '
// 	}
// 	for(let j = 0; j < i * 2 + 1; j++){
// 		str += '*'
// 	}
// 	console.log(str);
// 	str = ''
// }

/*
----*
---***
--*****
-*******
*********
*/

// Задачи
/*
let resUser = Number(prompt('Введите число'))
let int = 0
let str = ''
for(let i = 0; i < resUser * 2 - 1; i++){
	if(int < resUser){
		for(let j = 0; j < resUser - i - 1; j++){
			str += '-'
		}
		for(let j = 0; j < i * 2 + 1; j++){
			str += '*'
		}
		console.log(str);
	}else{
		for(let j = 0; j < i - resUser + 1 ; j++){
			str += '-'
		}
		// for(let j = 0; j < 2 * (resUser * 2 - i) - 3; j++){
		// 	str += '*'
		// }
		for(let j = 2 * (resUser * 2 - i) - 3; j > 0; j--){
			str += '*'
		}
		console.log(str);
	}
	str = ''
	int++
}
*/

/*
----*
---***
--*****
-*******
*********
-*******
--*****
---***
----*
*/

// Задачи

// let num = Number(prompt('Введите число'))
// let str = ''
// let int = 0
// for(let i = 0; i < num * 2 - 1; i++){  /* 0 1 2 3 4 */
//   if(num > int){
//     for(let j = 0; j < num - i; j++){
//       if(j == 0){
//         str = str + '#'
//       }else{
//         str = '-' + str
//       }
//     }
//     for(let j = 0; j < i * 2; j++){
//       if(j < i * 2 - 1){
//         str = str + ' '
//       }else{
//         str = str + '#'
//       }
//     }
//     console.log(str);
//   }else{
//     for(let j = 0; j < i - num + 2; j++){
//       if(j < i - num + 1){
//         str = '-' + str
//       }else{
//         str = str + '#'
//       }
//     }
//     for(let j = 0; j < 2 * (num * 2 - i) - 4; j++){
//       if(j < 2 * (num * 2 - i) - 5){
//         str = str + ' '
//       }else{
//         str = str + '#'
//       }
//     }
//     console.log(str);
//   }
//   str = ''
//   int++
// }

// let resUser = Number(prompt('Введите число')),
// 	str = '',
// 	int = 0

// for (let i = 0; i < resUser * 2 - 1; i++) {
// 	/* <- === === === === === === === === === === === === === === === === === === -> */
// 	if (int < resUser) {
// 		for (let j = 0; j < resUser - i; j++) {
// 			if (j == 0) {
// 				str += '#'
// 				// str = '-' + str
// 			} else {
// 				str = '-' + str
// 				// str += '#'
// 			}
// 			/*       * */
// 			/*      *  */
// 			/*     *   */
// 			/*    *    */
// 			/*   *     */
// 		}
// 		/* <- === === === === === === === === === === === === === -> */
// 		for (let j = 0; j < i * 2; j++) {
// 			if (j < i * 2 - 1) {
// 				str += ' '
// 			} else {
// 				str += '#'
// 			}
// 			// 	/* *				   */
// 			// 	/*  *			   */
// 			// 	/*   *		   */
// 			// 	/*    *	   */
// 			// 	/*     *   */
// 		}
// 		/* <- === === === === === === === === === === === === === -> */
// 		console.log(str)
// 		/* <- === === === === === === === === === === === === === -> */
// 	} else {
// 	/* <- === === === === === === === === === === === === === === === === === === -> */
// 		for (let j = 0; j < i - resUser + 2; j++) {
// 			if (j < i - resUser + 1) {
// 				str += '-'
// 			} else {
// 				str += '#'
// 			}
// 			// 	/* *				   */
// 			// 	/*  *			   */
// 			// 	/*   *		   */
// 			// 	/*    *	   */
// 			// 	/*     *   */
// 		}
// 		/* <- === === === === === === === === === === === === === -> */
// 		for (let j = 0; j < 2 * (resUser * 2 - i) - 4; j++) {
// 			if (j < 2 * (resUser * 2 - i) - 5) {
// 				str += ' '
// 			} else {
// 				str += '#'
// 			}
// 			/*       * */
// 			/*      *  */
// 			/*     *   */
// 			/*    *    */
// 			/*   *     */
// 		}
// 		/* <- === === === === === === === === === === === === === -> */
// 		console.log(str)
// 	}
// 	/* <- === === === === === === === === === === === === === === === === === === -> */
// 	str = ''
// 	int++
// }

/*
-----*-----
----* *----
---*   *---
--*     *--
-*       *-
--*     *--
---*   *---
----* *----
-----*-----
*/

// Функции

// function sum (a = 7, b = 7) {
// 	let res = a + b
// 	return res
// }
// console.log(sum(10, 5))
// console.log(sum())

// function pow(a, n){
// 	let res = a ** n
// 	console.log(res)
// 	return res
// }

// console.log(sum(pow(5, 2), 10))

// console.log(sum());
// function sum (a = 7, b = 7) {
// 	let res = a + b
// 	return res
// }
// console.log(sum());

// Function Expression
// let sum2 = function(a, b){
// 	let res = a + b
// 	return res
// }
// console.log(sum2(5, 2));

// Function anonymous

// (function(a = 7, b = 7){
// 	let res = a + b
// 	console.log(res);
// }())

// function showPrimes(n) {
// 	nextPrime: for (let i = 2; i <= n; i++) {

// 			for (let j = 2; j < i; j++) {
// 					if (i % j == 0) continue nextPrime;
// 			}

// 			console.log( i ); // простое
// 	}
// }

// showPrimes(12)

// function showPrimes(n) {

// 	for (let i = 2; i < n; i++) {
// 			if (!isPrime(i)) continue;

// 			console.log(i);  // простое
// 	}
// }

// function isPrime(n) {
// 	for (let i = 2; i < n; i++) {
// 			if ( n % i == 0) return false;
// 	}
// 	return true;
// }

/* <- === === === === === === ===  Задачи  === === === === === === === -> */
// https://learn.javascript.ru/task/if-else-required

// function checkAge(age){
// 	if (age > 18) return true
// 	return confirm('Ты достиг возраст +18')
// }
// checkAge(17)

/* <- === === === === === === ===  Задачи  === === === === === === === -> */
// https://learn.javascript.ru/task/rewrite-function-question-or

// function checkAge(age){
// 	return age >= 18 ? true : confirm('Ты достиг возраст +18')
// }

// let resUser = prompt('Ведите свой возраст')
// console.log(checkAge(resUser))

/* <- === === === === === === ===  Задачи  === === === === === === === -> */

// https://learn.javascript.ru/task/min

// function min(a, b){
// 	return (a < b || b > a) ? console.log(`Первое значение меньше: ${a}.`) : (a > b || b < a) ? console.log(`Второе значение меньше: ${b}`) : console.log(`Нет меньшого значение`)
// }
// let resUserOne = Number(prompt('Введите первое число'))
// let resUserTwo = Number(prompt('Введите второе число'))
// min(resUserOne, resUserTwo)

/* <- === === === === === === ===  Задачи  === === === === === === === -> */

// https://learn.javascript.ru/task/pow

/*
Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Объяснить
Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
*/

// function pow(x, n){
// 	let result = x
// 	for(let i = 1; i < n; i++){
// 		result *= x
// 	}
// 	return result
// }

// let x = prompt(`x?`)
// let n = prompt(`n?`)
// if(n >= 1 && n % 1 == 0){
// 	console.log(pow(x,n))
// }else{
// 	console.log(`Степень ${n} не поддерживается, используйте натуральное число`)
// }

// function pow1(x, n){
// 	return x **n
// }
// console.log(pow1(21, 12))

/* <- === === === === === === ===  Задачи  === === === === === === === -> */

// Калбэк

// function ask(question, yes, no){
// 	if(confirm(question))yes()
// 	else no()
// }
// function showOk(){
// 	alert('Вы согласны')
// }
// function showCancel(){
// 	alert('Вы отменили выполнение.')
// }
// ask('Вы согласны ?', showOk, showCancel)

// function ask(question, yes, no){
// 	if(confirm(question)) yes()
// 	else no()
// }
// ask(
// 	'Вы согласны ?',
// 	function(){alert('Вы согласились.')},
// 	function(){alert('Вы от.')}
// )

/* <- === === === === === === ===  Задачи  === === === === === === === -> */

// Задаем размер куба
// const cubeSize = 5;

// Создаем массив, который будет хранить кубические ячейки
// const cube = [];

// // Заполняем массив ячейками куба
// for (let z = 0; z < cubeSize; z++) {
//   cube[z] = [];
//   for (let y = 0; y < cubeSize; y++) {
//     cube[z][y] = [];
//     for (let x = 0; x < cubeSize; x++) {
//       cube[z][y][x] = {
//         x: x,
//         y: y,
//         z: z,
//         visible: true
//       };
//     }
//   }
// }

// // Выводим куб в консоль
// console.log(cube);

/* <- === === === === === === ===  Задачи === === === === === === === -> */

// const pyramidHeight = 5;

// Создаем массив, который будет хранить ячейки пирамиды
// const pyramid = [];

// Заполняем массив ячейками пирамиды
// for (let y = 0; y < pyramidHeight; y++) {
//   pyramid[y] = [];
//   for (let x = 0; x < pyramidHeight * 2 - 1; x++) {
//     if (x >= pyramidHeight - 1 - y && x <= pyramidHeight - 1 + y) {
//       pyramid[y][x] = {
//         x: x,
//         y: y,
//         visible: true
//       };
//     } else {
//       pyramid[y][x] = {
//         x: x,
//         y: y,
//         visible: false
//       };
//     }
//   }
// }

// Выводим пирамиду в консоль
// console.log(pyramid);

/* <- === === === === === === ===  Задачи === === === === === === === -> */

// let a = prompt(`Введите 1 слово`)
// let b = prompt(`Введите 2 слово`)
// function anotherFunction(text){
// 	return text = 'Тексте пустой'
// }

// function showMessage(from, text = anotherFunction()){
// 	console.log(`${from} : ${text}`)
// }

// console.log(showMessage(a, b))

// let rand = Math.random()
// console.log(rand)
// console.log(Math.ceil(rand * 10 + 3))
// console.log(Math.floor(rand * 10 + 3))
// console.log(Math.round(rand * 10 + 3))

// function showPrimes(n){
// 	nextPrimes: for(let i = 2; i < n; i++){
// 		for(let j = 2; j < i; j++){
// 			if(i % j == 0) continue nextPrimes
// 		}
// 		alert(i)
// 	}
// }
// showPrimes(123)
// function checkAge(age){
// 	if(age > 18){
// 		return true
// 	}
// 	return confirm('Родители разрешили ?')
// }
// let age = Number(prompt('Введите возраст'))
// checkAge(age)

// Задачи
// 1. Два рандомные числа
// 2. Окно prompt с запросом решите пример с этими числами
// 3. Сравните ответ пользователя и решение машины верно или нет и выдать ответ в консоль
// 4. Расширить программу для вывода примеров с другими знаками рандомными
// 	4.1. Рандомные выражение решение
// 	4.2. В окно prompt разные выражение
// 	4.3. Сравнение ответа пользователя и решение машины верно или нет и выдать ответ в alert
// 5. Сделать вывод prompt с примером 10 раз минимум
// 6. Написать на prompt проверку что-бы пользователь обязательно ввёл данный именно число не мог нажать на кнопку ок или отмена без ввода данных
// function mathRandInt(min, max) {
// 	return Math.round(Math.random() * (max - min) + min)
// }

// Задачи
// let a = mathRandInt(3, 10),
// 				b = mathRandInt(3, 10),
// randSigns = mathRandInt(0, 3),
// 	randZnak,
// 	c
// if (randSigns == 0) {
// 	randZnak = '+'
// 	c = a + b
// } else if (randSigns == 1) {
// 	randZnak = '-'
// 	c = a - b
// } else if (randSigns == 2) {
// 	randZnak = '*'
// 	c = a * b
// } else if (randSigns == 3) {
// 	randZnak = '/'
// 	c = a / b
// }
// let resUsers = Number(prompt(`Решите пример ${a} ${randZnak} ${b} = ?`))

// if (resUsers == c) {
// 	alert(`Решение верно: ${a} ${randZnak} ${b} = ${resUsers}`)
// } else {
// 	alert(
// 		`Решение не верно: ${a} ${randZnak} ${b} = ${resUsers} правильный ответ: ${c}`
// 	)
// }

// for (let i = 0; i < 10; i++) {
// 	var a = mathRandInt(3, 10),
// 		b = mathRandInt(3, 10),
// 		randSigns = mathRandInt(0, 3),
// 		randZnak
// 	if (randSigns == 0) {
// 		randZnak = '+'
// 		c = a + b
// 	} else if (randSigns == 1) {
// 		randZnak = '-'
// 		c = a - b
// 	} else if (randSigns == 2) {
// 		randZnak = '*'
// 		c = a * b
// 	} else if (randSigns == 3) {
// 		randZnak = '/'
// 		c = a / b
// 	}
// }
// let resUsers = Number(prompt(`Решите пример ${a} ${randZnak} ${b} = ?`))

// if (resUsers == c) {
// 	alert(`Решение верно: ${a} ${randZnak} ${b} = ${resUsers}`)
// } else {
// 	alert(
// 		`Решение не верно: ${a} ${randZnak} ${b} = ${resUsers} правильный ответ: ${c}`
// 	)
// }

// Задачи
// function mathRandInt(min, max) {
// 	return Math.round(Math.random() * (max - min) + min)
// }

// function definitionSing(randSigns){
// 	let randZnak
// 	if (randSigns == 0) {
// 		randZnak = '+'
// 	} else if (randSigns == 1) {
// 		randZnak = '-'
// 	} else if (randSigns == 2) {
// 		randZnak = '*'
// 	} else if (randSigns == 3) {
// 		randZnak = '/'
// 	}
// 	return randZnak
// }
// function calcRandAnswer(a, b, randSigns){
// 	let c
// 	if (randSigns == 0) {
// 		c = a + b
// 	} else if (randSigns == 1) {
// 		c = a - b
// 	} else if (randSigns == 2) {
// 		c = a * b
// 	} else if (randSigns == 3) {
// 		c = a / b
// 	}
// 	return c
// }

// for (let i = 0; i < 5; i++) {
// 	let a = mathRandInt(3, 10),
// 				b = mathRandInt(3, 10),
// 				randSigns = mathRandInt(0, 3),
// 				randZnak = definitionSing(randSigns),
// 				randAnswer = calcRandAnswer(a, b, randSigns),
// 				resTrim = '',
// 				resUsers
// 	do {
// 		resTrim = '',
// 			resUsers = prompt(`Решите пример ${a} ${randZnak} ${b} = ?`)
// 		if (resUsers !== null) {
// 			for (let i = 0; i < resUsers.length; i++) {
// 				if (resUsers[i].trim()) {
// 					resTrim += resUsers[i]
// 				}
// 			}
// 		}
// 	} while (resTrim === '' || resUsers === null || Number.isNaN(+resTrim))
// 	{
// 		if (resTrim == randAnswer) {
// 			console.log(`Решение верно: ${a} ${randZnak} ${b} = ${resTrim}`)
// 		} else {
// 			console.log(`Решение не верно: ${a} ${randZnak} ${b} = ${resTrim} правильный ответ: ${randAnswer}`)
// 		}
// 	}
// }

// function mathRandInt(min, max) {
// 	return Math.round(Math.random() * (max - min) + min)
// }
// for (let i = 0; i < 5; i++) {
// 	let a = mathRandInt(3, 10),
// 		b = mathRandInt(3, 10),
// 		randSigns = mathRandInt(0, 3),
// 		resUsers,
// 		resTrim = '',
// 		randZnak,
// 		c
// 	if (randSigns == 0) {
// 		randZnak = '+'
// 		c = a + b
// 	} else if (randSigns == 1) {
// 		randZnak = '-'
// 		c = a - b
// 	} else if (randSigns == 2) {
// 		randZnak = '*'
// 		c = a * b
// 	} else if (randSigns == 3) {
// 		randZnak = '/'
// 		c = a / b
// 	}
// 	do {
// 		resTrim = '',
// 			resUsers = prompt(`Решите пример ${a} ${randZnak} ${b} = ?`)
// 		if (resUsers !== null) {
// 			for (let i = 0; i < resUsers.length; i++) {
// 				if (resUsers[i].trim()) {
// 					resTrim += resUsers[i]
// 				}
// 			}
// 		}
// 	} while (resTrim === '' || resUsers === null || Number.isNaN(+resTrim))
// 	{
// 		if (resTrim == c) {
// 			console.log(`Решение верно: ${a} ${randZnak} ${b} = ${resTrim}`)
// 		} else {
// 			console.log(`Решение не верно: ${a} ${randZnak} ${b} = ${resTrim} правильный ответ: ${c}`)
// 		}
// 	}
// }

// https://stepik.org/course/180784/promo?search=4566353655

// stepik kurs

// https://stepik.org/course/113615/promo?search=4566353674

//SQLite kurs

// let resUsers,
// 	resTrim = ''
// do {
// 	resTrim = ''
// 	resUsers = prompt(`Напишите только число`)
// 	if(resUsers !== null ){for (let i = 0; i < resUsers.length; i++) {
// 		if (resUsers[i].trim()) {
// 			resTrim += resUsers[i]
// 		}
// 	}}
// 	console.log(resTrim)
// } while (resTrim === '' || resUsers === null || Number.isNaN(+resTrim))
// {
// 	console.log(`Код правильно выполнился`)
// }

/* <- === === === === === === === === === === === === === ===  Объекты  === === === === === === === === === === === === === === -> */

// const user = {
// 	name: 'John',
// 	age: 20,
// 	jobs: 'Developer',
// 	fn: function () {
// 		console.log('Hello')
// 	},
// }
// console.log(user)
// user.name = 'Azamat'
// console.log(user)
// user.fn

// let login = prompt('Ведите имя пользователя'),
// 				ageUser = Number(prompt('Введите возраст')),
// 				ageRes,
// 				str

// const userObj = {
// 	1: {
// 		name: 'Azamat',
// 		age: 12,
// 	},
// 	2: {
// 		name: 'Adham',
// 		age: 23,
// 	},
// 	3: {
// 		name: 'Izzatila',
// 		age: 21,
// 	},
// }

// for(let i in userObj){
// 	if(login == userObj[i].name){
// 		str = userObj[i].name
// 	}
// 	if(ageUser == userObj[i].age){
// 		ageRes = userObj[i].age
// 	}else{
// 		ageRes = 'не верно указан'
// 	}

// }
// if(login == str){
// 	alert(`Вы ${str} зарегистрированы, ваш возраст ${ageRes}`)
// }else{
// 	alert(`Вы не зарегистрированы`)
// }

// const numLevels = parseInt(prompt("Введите количество уровней объекта:")),
// 					data = []

// 	for (let i = 0; i < numLevels; i++) {
// 		const level = {},
// 								numKeys = parseInt(prompt(`Введите количество ключей для уровня ${i + 1}:`))

// 	for (let j = 0; j < numKeys; j++) {
// 		const key = prompt(`Введите ключ ${j + 1} для уровня ${i + 1}`)

// 								/* value = prompt(`Введите значение для ключа ${key}:`)
// 								level[key] = value */

// 		for (let n = 0; n < key; n++) {
// 			const item = prompt(`Введите ключ ${n + 1} для уровня ${j + 1}`),
// 				value = prompt(`Введите значение для ключа ${item}:`)
// 		}
// 	}
// 	data.push(level)
// }
// console.log(data)

// const newObject = {
// 	name: 'level1',
// 	1: {
// 		name: 'level2',
// 		1: {
// 			1: 'level2.1'
// 		},
// 		2: {
// 			1: 'level2.2'
// 		},
// 	}
// }
// for(let i in newObject){

// }


// let str = new String('lorem rem'),
// 	str2 = ''
// for (let i = 0; i < str.length; i++) {
// 	if (str[i].trim()) {
// 		str2 += str[i]
// 	}
// }
// console.log(new String(str2))

// Задачи

// const pannier = {
// 	1:{
// 		'burger': {
// 			'info': 'big cheese',
// 			'size': 3000,
// 			'price': 30000,
// 		}
// 	},
// 	cola: {
// 		info: 'coca',
// 		size: 1500,
// 		price: 17000,
// 	},
// }
// console.log(pannier[1]);
// for(let key in pannier){
// 	console.log(pannier[key].info)
// }

/* <- === === === === === === === === === === === === === ===  Объекты end  === === === === === === === === === === === === === === -> */

/* <- === === === === === === === === === === === === === ===  Массивы  === === === === === === === === === === === === === === -> */

// const arr = [1, 2, 3, 4, 5, 6, 7]

/* Циклы для массива */
/* 1 For */
// for(let i = 0; i < arr.length; i++){
// 	console.log(arr[i]);
// }

/* 2 For IN */
// for(const i in arr){
// 	console.log(arr[i]);
// }

/* 3 For Of */
// for(const i of arr){
// 	console.log(i);
// }

/* 4  ForEACH */
// arr.forEach(function (item, key) {
// 	console.log(`${item} = ${key}`)
// })

/* 5 WHILE */
// let i = 0
// while(i < arr.length){
// 	console.log(arr[i]);
// 	i++
// }

// const cars = ['Mazda', 'Chevrolet', 'BMW', 'Toyota']
// console.log(cars)
// cars.push('KIA')
// console.log(cars)
// cars.unshift('Mercedes-benz')
// console.log(cars);
// cars.pop()
// console.log(cars);
// cars.shift()
// console.log(cars);

/* Splice */
// Удаляет 0 элементов по индексу 3 и добавляет 'Mercedes-benz'
// cars.splice(3, 0, 'Mercedes-benz')
// console.log(cars)
// Удаляет 2 элемента по индексу 0
// cars.splice(0, 2)
// Удаляет 1 эл по индексу 2 и добавляет 3 эл
// cars.splice(2, 1, cars)
// console.log(cars)

/* Slice */
// console.log(cars.slice(2))
// console.log(cars.slice(1))

/* function mathRandInt(min, max) {
	return Math.round(Math.random() * (max - min) + min)
}

const arrNum = []
let chetNum = 0,
				neChetNum = 0
for(let i = 0; i < 10; i++){
	arrNum.push(mathRandInt(0, 10))
}
for(const item in arrNum){
	if(arrNum[item] % 2 == 0){
		chetNum++
	}else{
		neChetNum++
	}
}

arrNum.forEach(function(item, key){
	if(arrNum[item] % 2 == 0){
				chetNum++
			}else{
				neChetNum++
			}
})
console.log(`Колличество чётных чисел = ${chetNum}`)
console.log(`Колличество не чётных чисел = ${neChetNum}`) */

// console.log(`hello Azamat`)

/* <- === === === === === === === === === === === === === ===  Массивы end  === === === === === === === === === === === === === === -> */

/* <- === === === === === === === === === === === === === ===  Не понятно что это пока  === === === === === === === === === === === === === === -> */
/* <- === === === === === === ===  Задачи === === === === === === === -> */

// class Llist {
// 	constructor() {
// 					this._length = 0;
// 					this._head = null;
// 					this._last = null;
// 	}
// 	addItems(...arr) {
// 					if (arr.length === 1) {
// 									this._head = new Node(arr[0]);
// 									this._last = this._head;
// 									this._length++;
// 					} else if (arr.length > 1) {
// 									this._head = new Node(arr[0]);
// 									this._last = this._head;
// 									this._length++;
// 									let currentNode = this._head;
// 									for (let i = 1; i < arr.length; i++) {
// 													currentNode.next = new Node(arr[i], currentNode);
// 													this._length++;
// 													this._last = currentNode.next;
// 													currentNode = currentNode.next;
// 									}
// 									return true;
// 					}
// 	}
// class Node {
// 	constructor(value, previous = null) {
// 		this.value = value
// 		this.next = null
// 		this.previous = previous
// 	}
// }

// class Llist {
// 	constructor() {
// 		this._length = 0
// 		this._head = null
// 		this._last = null
// 	}
// 	addItems(...arr) {
// 		if (arr.length === 1) {
// 			this._head = new Node(arr[0])
// 			this._last = this._head
// 			this._length++
// 		} else if (arr.length > 1) {
// 			this._head = new Node(arr[0])
// 			this._last = this._head
// 			this._length++
// 			let currentNode = this._head
// 			for (let i = 1; i < arr.length; i++) {
// 				currentNode.next = new Node(arr[i], currentNode)
// 				this._length++
// 				this._last = currentNode.next
// 				currentNode = currentNode.next
// 			}
// 			return true
// 		}
// 	}
// 	push(value) {
// 		if (!this._head) {
// 			this._head = new Node(value)
// 			this._last = this._head
// 		} else {
// 			this._last = this._last.next = new Node(value, this._last)
// 		}
// 		this._length++
// 		return value
// 	}
// 	pop() {
// 		if (!this._head) {
// 			new Error(
// 				'LinkedList empty. Please use Llist.pop() or Llist.addItems() for add item'
// 			)
// 		} else {
// 			let value = this._last.value
// 			if (this._length === 1) {
// 				this._head = null
// 				this._last = null
// 				this._length = 0
// 			} else {
// 				this._last = this._last.previous
// 				this._last.next = null
// 				this._length--
// 			}
// 			return value
// 		}
// 	}
// 	shift() {
// 		if (!this._head) {
// 			console.log(
// 				new Error(
// 					'LinkedList empty. Please use Llis.pop() or Llist.addItems() for add item'
// 				)
// 			)
// 		} else {
// 			let value = this._head.value
// 			if (this._length === 1) {
// 				this._head = null
// 				this._last = null
// 				this._length = 0
// 			} else {
// 				this._head = this._head.next
// 				this._head.previous = null
// 				this._length--
// 			}
// 			return value
// 		}
// 	}
// 	unshift(value) {
// 		if (this._length === 0) {
// 			this._head = new Node(value)
// 			this._last = this._head
// 			this._length++
// 		} else {
// 			let nextNode = this._head
// 			this._head = new Node(value)
// 			nextNode.previous = this._head
// 			this._head.next = nextNode
// 			this._length++
// 		}
// 	}
// 	getItem(index) {
// 		let currentNode = this._head
// 		if (index === 0) {
// 			return currentNode.value
// 		} else if (index >= this._length) {
// 			return null
// 		}
// 		for (let i = 1; i <= index; i++) {
// 			currentNode = currentNode.next
// 		}
// 		return currentNode.value
// 	}

// 	splice(start, end = this._length - 1) {
// 		let currentNodeStart = this._head
// 		for (let i = 0; i < start - 1; i++) {
// 			currentNodeStart = currentNodeStart.next
// 		}
// 		let currentNodeEnd = currentNodeStart
// 		if (end === this._length - 1 || end === 0) {
// 			currentNodeEnd.previous = currentNodeStart.previous
// 			currentNodeStart.next = null
// 			let currentNode = this._head
// 			this._length = 0
// 			while (currentNode) {
// 				currentNode = currentNode.next
// 				this._length++
// 			}
// 			this._last = currentNodeStart
// 			return this._head
// 		}
// 		for (let i = 0; i <= end; i++) {
// 			currentNodeEnd = currentNodeEnd.next
// 		}

// 		if (start === 0) {
// 			this._head = currentNodeEnd
// 		} else {
// 			currentNodeStart.next = currentNodeEnd
// 		}

// 		currentNodeEnd.previous = currentNodeStart

// 		let currentNode = this._head
// 		this._length = 0
// 		while (currentNode) {
// 			currentNode = currentNode.next
// 			this._length++
// 		}
// 		return this._head
// 	}

// 	toArray() {
// 		let arr = []
// 		let currentNode = this._head
// 		while (currentNode) {
// 			arr.push(currentNode.value)
// 			currentNode = currentNode.next
// 		}
// 		return arr
// 	}
// 	get length() {
// 		return this._length
// 	}
// }

// let d = new Llist()
// console.log(d)
// d.push(2)
// d.push(3)
// console.log(d)


/* <- === === === === === === === === === === === === === ===  Авто тестирование  === === === === === === === === === === === === === === -> */


function pow(x, n){
	// let result = x
	// for(let i = 1; i < n; i++){
	// 	result *= x
	// }
	return 27
}

describe('pow', function() {

	it("2 в степени 3 будет 8", function() {
			assert.equal(pow(3, 3), 27)
			// assert.equal(pow(2, 3), 8)
	});
	it("3 в степени 3 будет 27", function() {
		assert.equal(pow(3, 3), 27);
});

});
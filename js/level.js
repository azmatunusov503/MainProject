// Запрашиваем данные у пользователя

// const numLevels = parseInt(prompt('Введите количество уровней объекта:')),
// 	data = []

// Создаем многомерный объект
// for (let i = 0; i < numLevels; i++) {
// 	const level = {},
// 		numKeys = parseInt(prompt(`Введите количество ключей для уровня ${i + 1}:`))

// 	for (let j = 0; j < numKeys; j++) {
// 		const key = prompt(`Введите ключ ${j + 1} для уровня ${i + 1}:`),
// 			value = prompt(`Введите значение для ключа ${key}:`)
// 		level[key] = value
// 	}

// 	data.push(level)
// }

// console.log(data)

/* <- === === === === === === === === === === === === === ===  Задачи  === === === === === === === === === === === === === === -> */

// const head = {
// 	name: 'Head',
// 	children: [],
// }
// function addChildren(parent, childNames){
// 	childNames.forEach(name => {
// 		const child = {
// 			name: name,
// 			parent: parent
// 		}
// 		parent.children.push(child)
// 	});
// }
// const childNames = ['Child 1', 'Child 2', 'Child 3', 'Child 4', 'Child 5',]
// addChildren(head, childNames)

// console.log(head)

// const numLevels = parseInt(prompt("Введите количество уровней объекта:")),
// 					data = []

// Создаем многомерный объект
// for (let i = 0; i < numLevels; i++) {
//   const level = {},
// 								numKeys = parseInt(prompt(`Введите количество ключей для уровня ${i + 1}:`))

//   for (let j = 0; j < numKeys; j++) {
//     const key = prompt(`Введите ключ ${j + 1} для уровня ${i + 1}:`),
// 										value = prompt(`Введите значение для ключа ${key}:`)
//     level[key] = value
//   }

//   data.push(level)
// }

// console.log(data)

// const head = {
// 	name: 'Head',
// 	children: [],
// }

// function addChildren(parent, childrenNames) {
// 	childrenNames.forEach(name => {
// 		const child = {
// 			name: name,
// 			parent: parent,
// 		}
// 		parent.children.push(child)
// 	})
// }

// const childNames = [
// 	'Children 1',
// 	'Children 2',
// 	'Children 3',
// 	'Children 4',
// 	'Children 5',
// ]

// addChildren(head, childNames)

// console.log(head)
// console.log(JSON.stringify(head, null, 1))

/* // Отслеживание клавиатуры
document.addEventListener('keydown', function(event) {
	console.log(`Клавиша ${event.key} нажата. Код: ${event.code}`);
});

document.addEventListener('keyup', function(event) {
	console.log(`Клавиша ${event.key} отпущена. Код: ${event.code}`);
});

// Отслеживание мыши
document.addEventListener('click', function(event) {
	console.log(`Клик по координатам: (${event.clientX}, ${event.clientY})`);
});

document.addEventListener('mousemove', function(event) {
	console.log(`Мышь перемещена на координаты: (X: ${event.clientX}, Y: ${event.clientY})`);
});

document.addEventListener('mousedown', function(event) {
	console.log(`Кнопка мыши ${event.button} нажата`);
});

document.addEventListener('mouseup', function(event) {
	console.log(`Кнопка мыши ${event.button} отпущена`);
}); */


// const array = [1, 2, 3, 4, 5, 6]
// console.log(array.reduce((accumulator, initialValue) => {

// }))


console.log([0, 1, 2, 3, 4].reduce(function (previousValue, currentValue, index, array) {
	return previousValue + currentValue;
}))

function calcAB(a, b){
	return a + b
}
console.log(calcAB(1, 3, 23, 23))
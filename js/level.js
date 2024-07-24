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

const head = {
	name: 'Head',
	children: [],
}

function addChildren(parent, childrenNames) {
	childrenNames.forEach(name => {
		const child = {
			name: name,
			parent: parent,
		}
		parent.children.push(child)
	})
}

const childNames = [
	'Children 1',
	'Children 2',
	'Children 3',
	'Children 4',
	'Children 5',
]

addChildren(head, childNames)

// console.log(head)
// console.log(JSON.stringify(head, null, 1))


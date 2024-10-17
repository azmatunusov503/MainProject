/* <- === === === === === === === === === === === === === === === === === === === ===  if else  === === === === === === === === === === === === === === === === === === === === -> */

/* === Задача
	Вася положил 12 000$ на вклад 7% годовых с капитализацией 1 раз в мец.
	Вывести в консоль, сможет ли он купить дом за 13 500$ через 2 года после снятия вклада. И остаток после покупки.
	Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяуах
=== */

/* ===
	Code
=== */

// let deposit = 11000,
// 	percentages = 0.07,
// 	depositLength = 24,
// 	hoseCost = 13500,
// 	result = deposit * (1 + percentages / 12) ** 24

// if(result > hoseCost){
// 	console.log(`Мы накопили ${result}$ Можем купить. Остаток ${result - hoseCost}$`)
// }else{
// 	console.log(`Мы накопили: ${result}$. Купить не сможем`)
// }

/* === Вопросы:
	Нет
=== */
/* <- === === === === === === === === === === === === === === === === === === === ===  if else end  === === === === === === === === === === === === === === === === === === === === -> */

/* <- === === === === === === === === === === === === === === === === === === === ===  Switch  === === === === === === === === === === === === === === === === === === === === -> */

/* ===
	Code
=== */

// let role = prompt('Введите свой должность', 'Ты не кто и нечтожество')
// if(role === 'manager'){
// 	console.log('Менеджер')
// }else if(role === 'admin'){
// 	console.log('Админ')
// }else if(role === 'CEO'){
// 	console.log('CEO')
// }else{
// 	console.log('Я тебя не знаю и не пушу')
// }

// switch(role){
// 	case 'manager':
// 		console.log('Менеджер')
// 		break
// 	case 'admin':
// 		console.log('Админ')
// 		break
// 	case 'CEO':
// 		console.log('CEO')
// 		break
// 	default:
// 		console.log('Я тебя не знаю и не пушу')
// }

// switch(role){
// 	case 'manager':
// 	case 'admin':
// 		console.log('Не руководитель')
// 		break
// 	case 'CEO':
// 		console.log('Руководитель')
// 		break
// 	default:
// 		console.log('Я тебя не знаю и не пушу')
// }

// let num = Number(prompt('Введите число'))

// switch(true){
// 	case num < 0:
// 		console.log('Отрицательный')
// 		break
// 	case num > 0:
// 		console.log('Положительный')
// 		break
// 	default:
// 		console.log('Равен')
// }

/* === Вопросы:
	Нет
=== */
/* <- === === === === === === === === === === === === === === === === === === === ===  Switch end  === === === === === === === === === === === === === === === === === === === === -> */

/* <- === === === === === === === === === === === === === === === === === === === ===  Тернарный оператор  === === === === === === === === === === === === === === === === === === === === -> */
// let bmwX3Price = 100000
// 			,fordFocusPrice = 10000
// 			,butget = 20000
// console.log(`Я могу купить ${butget > bmwX3Price ? 'Ford' : butget > fordFocusPrice ? 'Ford' : 'велосипед'}, в бюджет ${butget}$`)

// let a = 3
// console.log((a < 6) ? ((a > 4) ? 'Yes': ((a <= 4) ? 'No': '!!!')) : '???')

/* ===
	Методом prompt получите ответ пользователя
	на вопрос "Сколько будет 7 + или - 15".
	Если ответ верен выведите в консоль "Успех", если нет - "Вы робот!", а если он введет "Я не робот", то тоже "Успех"
=== */

/* ===
	Code
=== */

// let reqRobot = prompt("Сколько будет 7 + или - 15")
// switch(true){
// 	case reqRobot === 'Я не робот':
// 	case Number(reqRobot) === 22:
// 	case Number(reqRobot) === -8:
// 		console.log('Успех')
// 		break
// 	default:
// 		console.log('Вы робот')
// }

/* === Вопросы:
	Нет
=== */
/* <- === === === === === === === === === === === === === === === === === === === ===  Тернарный оператор end  === === === === === === === === === === === === === === === === === === === === -> */

/* <- === === === === === === === === === === === === === === === === === === === ===  Булевой логика  === === === === === === === === === === === === === === === === === === === === -> */
/* === Операторы
	( || ) - или находит первое true и возвращает. 
		Пример:
			console.log(true || true || false) => true
			console.log(false || false || true) => true

	( ||= ) - логическое присваивание или, оператор принимает два операнда и выполняет следующие действия: Вычисляет операнды с лева на право. Конвертирует 'а' в логическое значение. Если 'а' ложное присваивает 'а' значение 'b'
		Пример:
			let a = false
			a ||= 'Я должен в короткое время научится программировать в BackEnd'
			console.log(a) => 'Я должен в короткое время научится программировать в BackEnd'

	( && ) - и находит первое false и возвращает.
		Пример:
			console.log(false || false || true) => false
			console.log(false || false || true) => false

	( &&= ) - логическое присваивание и, также работает как ||= но присваивает в том случае сли 'a' true.
		Пример:
			let a = 'Hello'
			a &&= ' world'
			console.log(a) => 'Hello world'

	( ! ) - не отрицает значение и возвращает противоположное. Допустим имеется true значение при использование оператора не возвращает false. 
		Пример: 
			console.log(!true) => false
			console.log(!false) => true

	( ?? ) - оператор нулевого слияние, обрабатывает null и undefined если значение в переменной 'a' равен null или undefined то в переменную будет записан default значение
		Пример:
			let a = null
			console.log(a ?? 'Default user') => 'Default user'
			let a = undefined
			console.log(a ?? 'Default user') => 'Default user'
			let user = ''
			console.log(user ?? 'Default user') => ''
			let age = 0
			console.log(age ?? 18) => 0
	( ??= ) - оператор нулевого присваивания, оператор присвоит 'x' значение 'y' только в том случае, если 'x' не определено (null/undefined)
		Пример:
			let x = null
						,y = 'Не определен'
			x ??= y
			console.log(x) => 'Не определен'
=== */

/* ===
	Code
=== */

// let isAdmin = true
// 			,canWrite = true
// 			,isEdited = true
// 			,isSuperAdmin = true
// console.log(`Системный файл: ${isAdmin || canWrite}`)
// console.log(`Системный файл: ${isAdmin && canWrite}`)
// console.log(`Файл с редактированием: ${isAdmin && canWrite && (!isEdited || isSuperAdmin)}`)

// console.log('Вася' || 'Oleg')
// console.log(false || 'Oleg')
// console.log(false && 'Oleg')
// console.log('Vasiya' && 'Oleg')

// let a = 'Ela'
// 			,userName = a || 'Petya'
// console.log(userName)

// let isAdmin = true
// 			,fileName = isAdmin && 'File.mp3'
// console.log(fileName)

// let a = ''
// a ||= 'Нет значение !'
// console.log(a)

// let a = false
// if (a === false){
// 	a = 'Нет значение !'
// }
// console.log(a)

// let a = false
// a &&= 'news'
// 	if(a === false){
// 		a = a
// 	}else{
// 		a = 'news'
// 	}
// console.log(a)

// let users
// 			,age = 0
// 			,nikName = null
// console.log(`Имя пользователя: ${users ?? 'Default User'}, Nike name: ${nikName ?? 'pasha'}, Возраст: ${age ?? 'Not age'} лет`)

/* === Задача
	Пользователь хочет приобрести игру в steam
	Он может это сделать только если:
	- Его баланс больше 1000 (balance)
	или число бонуса больше 100 (bonusBalance)
	- Он не забанен (isBanned)
	- Игра не куплена (isExist)
	- Игра в продаже (isSelling)
	Напишите условие для покупки и выведите в консоль результат
=== */

// let balance = 100
// 			,bonusBalance = 100
// 			,isBanned = false
// 			,isExist = false
// 			,isSelling = true
// if((balance >= 1000 || bonusBalance >= 100) && !isBanned && !isExist && isSelling){
// 	console.log('Можем купить игру')
// }else{
// 	console.log('Не можем купить игру')
// }

/* === Вопросы:
	Нет
=== */
/* <- === === === === === === === === === === === === === === === === === === === ===  Булевой логика end  === === === === === === === === === === === === === === === === === === === === -> */

/* <- === === === === === === === === === === === === === === === === === === === ===  Function  === === === === === === === === === === === === === === === === === === === === -> */
/* === Типы функции
	
=== */

/* ===
Code
=== */

// function fromMilesToKM(miles){
// 	let km = miles / 0.62137
// 	return km
// }

// function logName(name, surname){
// 	console.log(`Мое имя ${name} ${surname}`)
// }

// logName('Azamat', 'Yunusov')

// function countDepositSum(depositInUsd, month, rate){
// 	return depositInUsd * (1 + rate / 12) ** month
// }
// console.log(countDepositSum(1000, 24, 0.12))
// console.log(countDepositSum(1000, 12, 0.10))
// console.log(countDepositSum(1000, 6, 0.12))

// function powerOfTwo(num){
// 	return num * num
// }
// console.log(powerOfTwo(5))

// let poft = function(num){
// 	return num * num
// }

// console.log(poft(5))

// let poft = (num) => num * num

// console.log(poft(5))

// function toPower(num, power = 2){
// 	console.log(typeof power)
// 	return num ** power
// }
// console.log(toPower(2 , 3))
// console.log(toPower(2 , ))

// let toPowerArrow = (num, power) => num ** power
// console.log(toPowerArrow(2, 3))

// function canAccessWebSite(age){
// 	return (age < 18) ? false : true

// }
// let canAccessWebSite1 = age => age > 18

// console.log(canAccessWebSite(14))
// console.log(canAccessWebSite1(14))

// let KG_IN_USD = 7
// 			,KM_IN_USD = 5
// function calculateW(present){
// 	return present * KG_IN_USD
// }

// function calculateKm(distance){
// 	return distance * KM_IN_USD
// }

// function getExchangePrice(present1, present2, distance){
// 	let price1 = calculateW(present1)
// 				,price2 = calculateW(present2)
// 				,distancePrice = calculateKm(distance)
// 	return price1 + price2 + distancePrice
// }
// console.log(getExchangePrice(1, 2, 10))

/* === Задача
	Пользователь:
	- Возраст
	- Наличие работы
	- Деньги
	Нужно проверить может ли он купить новый MacBook за 2000$ ?
	Он может брать не только свои деньги, но и взять кредит.
	Ему дадут 500$, только если ему больше 24-х лет и он
	имеет работу, 100$ если ему просто больше 24-х лет и 0 в ином случае.
	Напишите функцию, которая принимает данные пользователя и товара и возвращает true или false;
=== */

// function computeCredit(age, hasJob = false){
// 	switch (true){
// 		case age > 24 && hasJob:
// 			return 500
// 		case age > 24:
// 			return 100
// 		default:
// 			return 0
// 	}
// }

// function canBuy(productPrice, age, money, hasJob = false){
// 	let creditMoney = computeCredit(age, hasJob)
// 	return (productPrice <= (money + creditMoney))
// }

// console.log(canBuy(2000, 25, 1500, true))

// function a(){
// 	return c()
// }
// function res(){
// 	return 'yes'
// }
// function c(){
// 	return res
// }

// console.log(typeof a())
/* === Вопросы:

=== */

/* <- === === === === === === === === === === === === === === === === === === === ===  Function end  === === === === === === === === === === === === === === === === === === === === -> */

/* <- === === === === === === === === === === === === === === === === === === === ===  Массивы  === === === === === === === === === === === === === === === === === === === === -> */
/* ===
	
=== */

/* ===
Code
=== */

// let role1 = 'admin'
// 			,role2 = 'user'
// 			,role3 = 'superuser'
// let roles = ['admin', 'user', 'superuser',]
// let userInfo = ['Anya', 25]
// console.log(roles.at(-1))

// let usersAge = [2040 - 2022, 10 > 0 ? 5 : 0]
// console.log(usersAge)

// let userNames = new Array('Vasya', 'Petya', 'Katya')
// console.log(userNames)

// function square(el){
// 	return el * el
// }
// console.log(square([1, 2, 3]))

// const users = ['Anya', 'Katya', 'Vika']
// console.log(users)

// users[2] = 'Elyanor'
// console.log(users)
// users[3] = 'Nika'
// console.log(users)
// users.push('Vasilika')
// users.unshift('Vasya')
// let el = users.pop()
// console.log(el)
// console.log(users)

// let roles = ['user', 'admin', 'manager', 'superuser']

// let elIndex = roles.indexOf('admin')
// 			,elIndex1 = roles.indexOf('superAdmin')
// console.log(elIndex)
// console.log(elIndex1)
// console.log(roles.includes('admin'))

// let res = roles.slice(1, -1)

// console.log(res)
// console.log(roles)

// let res = roles.splice(2, 1)

// let res = roles.reverse()

// console.log(res)
// console.log(roles)

// let newRoles = ['sysadmin', 'developer',]

// let res1 = roles.concat(newRoles)
// console.log(res1)

// let url = '/auth/user/login'
// let res = url.split('/')
// console.log(res)

// console.log(roles.join('/'))
// let array = [1, 2, 3, 4, 5,]
// console.log(array.unshift(9))

/* === Задача
	Дан список задач
	const tasks = ['Задача 1']
	Сделать функции:
	- Добавление задачи в конец
	- Удаление задачи по названию
	- Перенос задачи в начало списка по названию
	Всегда меняем исходный массив
	DRY
=== */

/* ===
Code
=== */
/* ===
!
*
? Модифицированный code
=== */

// const tasks = ['Задача 1', 'Задача 5', 'Задача 3']
// function manageTasks(arrays, taskToAdd = null, taskToPrioritize = null,  taskToRemove = null){

//  function addedTasksEnd(arr, task){
// 		let result = removeTask(arr, task, true)
// 					,oldTask = `Измененный: ${result}`
// 		if(!result){
// 			arr.push(task)
// 			return arr
// 		}
// 		arr.push(oldTask)
// 		arr.push(task)
// 		return arr
// 	}

// 	function priorityTask(arr, task){
// 		let result = removeTask(arr, task, true)
// 		if(!result){
// 			return
// 		}
// 		arr.unshift(result[0])
// 		return arr
// 	}
// 	function removeTask(arr, task, callback = false){
// 		let index = arr.indexOf(task)
// 		if(index === -1){
// 			return
// 		}
// 		if(callback){
// 			return arr.splice(index, 1)
// 		}
// 		arr.splice(index, 1)
// 		return	arr
// 	}

// 	if(taskToAdd){
// 		arrays = addedTasksEnd(arrays, taskToAdd)
// 	}
// 	if(taskToPrioritize){
// 		arrays = priorityTask(arrays, taskToPrioritize)
// 	}
// 	if(taskToRemove){
// 		arrays = removeTask(arrays, taskToRemove)
// 	}
// 	return arrays
// }

// console.log(manageTasks(tasks, 'Задача 2', null, null))
// console.log(manageTasks(tasks, null, 'Задача 2', null))
// console.log(manageTasks(tasks, null, null, 'Задача 3'))
// console.log(manageTasks(tasks, 'Задача 4', null,'Задача 1'))

// function add(task){
// 	tasks.push(task)
// }
// function remove(task){
// 	let index = tasks.indexOf(task)
// 	if(index === -1){
// 		return
// 	}
// 	return tasks.splice(index, 1)
// }
// function priorityTask(task){
// 	let result = remove(task)
// 	if(!result){
// 		return
// 	}
// 	return tasks.unshift(result[0])
// }

// add('Задача 2')
// add('Задача 3')
// add('Задача 4')
// add('Задача 5')
// console.log(tasks)

// console.log(remove('Задача 3'))
// console.log(tasks)
// console.log(priorityTask('Задача 2'))
// console.log(tasks)

/* const tasks = ['Задача 1', 'Задача 2', 'Задача 4'] */
// function manageTasks(arrays, taskToAdd = null, taskToPrioritize = null,  taskToRemove = null){

//  function addedTasksEnd(arr, task){
// 		let index = arr.indexOf(task)
// 					,oldTask = `Измененный: ${arr[index]}`
// 		if(index === -1){
// 			arr.push(task)
// 			return arr
// 		}
// 		arr.splice(index, 1)
// 		arr.push(oldTask)
// 		arr.push(task)
// 		return arr
// 	}

// 	function priorityTask(arr, task){
// 		let index = arr.indexOf(task)
// 		if(index !== -1){
// 			let oldTask = arr[index]
// 			arr.splice(index, 1)
// 			arr.unshift(oldTask)
// 		}
// 		return arr
// 	}
// 	function removeTask(arr, task){
// 		let index = arr.indexOf(task)
// 		if(index !== -1){
// 			arr.splice(index, 1)
// 		}
// 		return arr
// 	}

// 	if(taskToAdd){
// 		arrays = addedTasksEnd(arrays, taskToAdd)
// 	}
// 	if(taskToPrioritize){
// 		arrays = priorityTask(arrays, taskToPrioritize)
// 	}
// 	if(taskToRemove){
// 		arrays = removeTask(arrays, taskToRemove)
// 	}
// 	return arrays
// }

// console.log(manageTasks(tasks, 'Задача 2', null, null))
// console.log(manageTasks(tasks, 'Задача 3', null, null))
// console.log(manageTasks(tasks, 'Задача 4', null, null))
// console.log(manageTasks(tasks, 'Задача 5', null, null))

/* ===
 Деструктуризация
=== */
// let arrayData = ['Azamat', 21, 'Tashkent']

// function getData(){
// 	return ['Azamat', 21, 'Tashkent']
// }

// let userName =getData()[0]
// 			,age = getData()[1]
// 			,city = getData()[2]

// console.log(userName, age, city)
// let [userName, _, city] = arrayData

// console.log(userName, city)

/* ===
 REST оператор
=== */
// let data = [1, 2, 3, 4, 5, 6]

// let [one, two, ...others] = data

// console.log(one, two, others)

/* === Задача
	Дан произвольный url -
	'https://purpleschool.ru/course/javascript'
	Нужно сделать функцию, которая выводить в консоль:
	- Протокол (https)
	- Доменное имя (purpleschool.ru)
	- Пусть внутри сайта (/course/javascript)
=== */
// const url = 'https://purpleschool.ru/course/javascript'
// const url = 'https://www.instagram.com/_elia.n__/'
// let array = url.split('/')

// console.log(array)

// function getUrlParser(url){
// 	let [protocol, _, host, ...path] = url.split('/')
// 	if(protocol === 'https:' || protocol === 'http:'){
// 		if(!host.includes('.')){
// 			return
// 		}
// 		console.log(protocol, host, path)
// 		console.log(`Протокол: ${protocol.split(':')[0]}`)
// 		console.log(`Доменное имя: ${host}`)
// 		console.log(`Путь внутри сайта: /${path.join('/')}`)
// 	}
// }

// getUrlParser(url)

/* === Вопросы:

=== */
/* <- === === === === === === === === === === === === === === === === === === === ===  Массивы end  === === === === === === === === === === === === === === === === === === === === -> */

/* <- === === === === === === === === === === === === === === === === === === === ===  Циклы  === === === === === === === === === === === === === === === === === === === === -> */
/* === 

=== */

/* ===
Code
=== */

// for(let i = 0; i < 10; i++){
// 	console.log(`Наш баланс ${i}$`)

// }
// const tasks = ['Задача 1', 'Задача 2', 'Задача 3', 'Задача 4',]

// console.log(tasks[0])

// for(let i = 0; i < tasks.length; i++){

// 	if(tasks[i] === 'Задача 3') {
// 		continue
// 	}
// 	console.log(tasks[i])
// }
// console.log('-----')
// for(let i = 0; i < tasks.length; i++){

// 	if(tasks[i] === 'Задача 3') {
// 		break
// 	}
// 	console.log(tasks[i])
// }

/* <- === === === === === === === === === === === === === === === === === === === ===  9.3.Упражнение - Циклы в обратном порядке   === === === === === === === === === === === === === === === === === === === === -> */

/* === Задача

=== */

// const arr = ['!', 'JS', 'люблю', 'Я']
// console.log(arr.length)
// function reverseArray(arr){
// 	let resArray = []
// arr.forEach((_, index) => {
// 	resArray.unshift(arr[index])
// })
// for(let i = arr.length - 1; i >= 0; i--){
// 	resArray.push(arr[i])
// }
// 	return resArray.join(' ')
// }
// console.log(reverseArray(arr))

/* <- === === === === === === === === === === === === === === === === === === === ===  9.3.end   === === === === === === === === === === === === === === === === === === === === -> */

// for(let i = 1; i <= 5; i++){
// 	console.log(`Цикл 1 - ${i}`)
// 	for(let j = 1; j <= 5; j++){
// 		console.log(`Цикл 2 - ${j}`)
// 	}
// }

// const tasks = [[1, 'Задача 1'], [2, 'Задача 2']]

// for(let i = 0; i < tasks.length; i++){
// 	console.log(`Цикл 1 - ${i}`)
// 	for(let j = 0; j < tasks[i].length; j++){
// 		console.log(tasks[i][j])
// 	}
// }

// for(let i = 1; i < 5; i++){
// 	console.log(`Вывод - ${i}`)
// }

// let i = 1
// while(i < 5){
// 	console.log(`Вывод - ${i}`)
// 	i++
// }

// const arr = [1, 4, 8, 5]

// for(let i = 0; i < arr.length; i++){
// 	if(arr[i] > 5){
// 		continue
// 	}
// 	console.log(arr[i])
// }

// let i = 0
// while(arr[i] <= 5 && i < arr.length){
// 	console.log(arr[i])
// 	i++
// }

// let j = 0
// do{
// 	console.log(j)
// 	j++
// }while(j < 0)

// const arr = [1, 4, 7, 8]
// for(let i = 0; i < arr.length; i++){
// 	console.log(arr[i])
// }

// for(let el of arr){
// 	console.log(el)
// }

// for(let index in arr){
// 	console.log(index)
// }
// console.log(window)

/* <- === === === === === === === === === === === === === === === === === === === ===  9.7.Упражнение - Расчет итогового баланса   === === === === === === === === === === === === === === === === === === === === -> */
/* === Задача
	Есть выгрузка операций пользователя
	const operations = [1000, -700, 300, -500, 10_000]
	а так же начальный баланс в 100$
	Необходимо сделать функции расчёта:
	- Итогового баланса
	- Наличия отрицательного баланса (если после очередной операции баланс < 0, то выдавать false)
	- Расчет среднего расхода и среднего дохода
=== */

/* ===
code
=== */
// const userBalance = 100
// 					,operations = [1000, -700, 300, -500, 10_000]

// function calcSum(arrOfOperations, initialsBalance){
// 	let balance = initialsBalance
// 	for(const el of arrOfOperations){
// 		balance += el
// 	}
// 	return balance
// }
// console.log(calcSum(operations, userBalance))

// function checkOperations(arrOfOperations, initialsBalance){
// 	let balance = initialsBalance
// 				,isOk = true
// 	for(const el of arrOfOperations){
// 		balance += el
// 		if(balance < 0){
// 			isOk = false
// 			break
// 		}
// 	}
// 	return isOk
// }

// console.log(checkOperations(operations, userBalance))

// function avarageOperations(arrOfOperations){
// 	let positiveCount = 0
// 				,positiveSum = 0
// 				,negativeCount = 0
// 				,negativeSum = 0
// 	for(const el of arrOfOperations){
// 		if(el > 0){
// 			positiveCount++
// 			positiveSum += el
// 		}
// 		if(el < 0){
// 			negativeCount++
// 			negativeSum += el
// 		}
// 	}
// 	return [positiveSum / positiveCount, negativeSum / negativeCount]
// }
// console.log(avarageOperations(operations))
/* <- === === === === === === === === === === === === === === === === === === === ===  9.7.end   === === === === === === === === === === === === === === === === === === === === -> */

/* === Вопросы:

=== */
/* <- === === === === === === === === === === === === === === === === === === === ===  Циклы end  === === === === === === === === === === === === === === === === === === === === -> */

/* <- === === === === === === === === === === === === === === === === === === === ===  Функции высшего порядка  === === === === === === === === === === === === === === === === === === === === -> */

/* ===

=== */
/*
// function add(a, b){
// 	return a + b
// }
// function subtract(a, b){
// 	return a - b
// }
function power(a, b){
	return a ** b
}
// Функция высшего порядка
function calculate(a, b, fn){
	console.log(fn.name)
	const result = fn(a, b)
	return result
}

console.log(calculate(3, 5, power))





function power1(pow){
	return function (num){
		return num ** pow
	}
}

const powerOfTwo = power1(3)

console.log(powerOfTwo(5))

console.log(power1(4)(4))


let power = (pow) => (num) => num ** pow

console.log(power(4)(4))



*/
/* <- === === === === === === === === === === === === === === === === === === === ===  Решение интересное HomeWork 10.6   === === === === === === === === === === === === === === === === === === === === -> */
/* === Задача
	Напишите функцию, которая принимает:
	- Массив чисел
	- Функцию удаления элементов
	И возвращает отфильтрованный массив. При это функция удаления элементов принимает число и возвращает true, если его надо удалить и false, если надо оставить.
=== */

/* ===
code
=== */
/*
function power(a, b){
	return a ** b
}
// Функция высшего порядка
function calculate(a, b, fn){
	console.log(fn.name)
	const result = fn(a, b)
	return result
}

console.log(calculate(3, 5, power))

console.log(calculate(3, 5, (a, b) => a ** b))

const arr = [1, 2, 3, 4, 5]

function arrFilter(arr, num, fn){
	let resArr = []
	for(let i = 0; i < arr.length; i++){
		if(fn(num, arr[i])){
			resArr.push(arr[i])
		}
	}
	return resArr
}
console.log(arrFilter(arr, 5, (num, el) => num > el))


// let arrUsers = [
// 	{id: 1, name: 'Vasya',},
// 	{id: 2, name: 'Yun',},
// 	{id: 3, name: 'Kiril',},
// 	{id: 4, name: 'Lena',},
// ]

// console.log(arrUsers.filter(function(el, index, arr){
// 	return index === 0
// }))

// arr.filter((item, index, array) => {})
*/
/* === Вопросы:
 Нет
=== */
/* <- === === === === === === === === === === === === === === === === === === === ===  HomeWork 10.6 end  === === === === === === === === === === === === === === === === === === === === -> */

/* === Вопросы:

=== */

/* <- === === === === === === === === === === === === === === === === === === === ===  Функции высшего порядка end  === === === === === === === === === === === === === === === === === === === === -> */

/* <- === === === === === === === === === === === === === === === === === === === ===  Итерация в массиве  === === === === === === === === === === === === === === === === === === === === -> */
/* ===
	- forEach - Ознакомлен
	- map - Ознакомлен в базовом уровне
	- filter - Ознакомлен в базовом уровне
	- reduce - Ознакомлен в базовом уровне
	- find findIndex - Ознакомлен в базовом уровне
	- flat и flatMap - Ознакомлен в базовом уровне
=== */

/* ===
	Code
=== */

// const arr = [5, 10, 0, 15]

// for(const [i, el] of arr.entries()){
// 	console.log(`Раунд ${i+1} : ${el}`)
// }
// arr.forEach((item, index, array) => {
// 	console.log(`Элемент: ${item}; Индекс: ${index}; Массив: ${array};`)
// })

// const transactionInUSD = [10, -7, 50, -10, 100]

// const transactionInRUB = []
// for(const transaction of transactionInUSD){
// 	transactionInRUB.push(transaction * 60)
// }
// console.log(transactionInUSD)
// console.log(transactionInRUB)

// const transactionInRUB2 = transactionInUSD
// 					.map(item => item * 60)

// console.log(transactionInRUB2)

// const operations = [100, -20, 7, -20, 50]

// const resultOperation = []

// for(const operation of operations){
// 	if(operation > 0){
// 		resultOperation.push(operation)
// 	}
// }

// console.log(resultOperation)

// const resultOperation = operations.filter(item => item > 0)

// console.log(resultOperation)

// const resultRUBOperation = operations.filter(item => item > 0).map(operation => operation * 60)

// console.log(resultRUBOperation)

/* <- === === === === === === === === === === === === === === === === === === === ===  11.4.Упражнение - вывод изменений цен  === === === === === === === === === === === === === === === === === === === === -> */
/* === Задача не решена
	Имеется массив изменения цен prices, где внутри 1й элемент массива является ценой в момент X,
	2й - ценой в момент Y.
	Нужно преобразовать данные в массив, где будут отображены только положительные изменения цен: [100, 150]
/* ===
code
=== */

/* === Вопросы:
 Нет
=== */
/* <- === === === === === === === === === === === === === === === === === === === ===  11.4.Упражнение - вывод изменений цен end  === === === === === === === === === === === === === === === === === === === === -> */

// const operations = [100, -20, 7, -30, 50]

// let balance = 0
// for(const operation of arr){
// 	balance += operation
// }

// console.log(balance)

// console.log(operations.reduce((acc, operation) => {
// 	return acc += operation
// }, 0))
// console.log(operations.reduce((acc, item, index, array) => {
// 	return `acc ${acc}, item ${item}, index ${index}, array (${array})`
// }, 0))

/* <- === === === === === === === === === === === === === === === === === === === ===  11.4.Упражнение - среднее значение  === === === === === === === === === === === === === === === === === === === === -> */
/* === Задача не решена
	Найти среднее значение последовательность
	чисел с помощью reduce
/* ===
code
=== */
// const arr = [1, 5, 4, 10]
// console.log(arr.reduce((acc, item, index, array) => {
// 	if(index != array.length - 1){
// 		return acc + item
// 	}
// 	return (acc + item) / array.length
// }, 0))

// const arr = [2, 4, 4, 10, 20, -1]

// console.log(arr.find(el => el == -2))
// console.log(arr.findIndex(el => el == -1))

// let users = [
// 	{ id: 1, name: 'Вася' },
// 	{ id: 2, name: 'Петя' },
// 	{ id: 3, name: 'Лена' },
// 	{ id: 4, name: 'Вика' },
// ]
// console.log(users.find(item => item.id == 1))

/* <- === === === === === === === === === === === === === === === === === === === ===  11.8.Упражнение - реализация some  === === === === === === === === === === === === === === === === === === === === -> */
/* === Задача
	Написать функцию, которая возвращает true,
	если элемент есть, и false, если нет.
=== */
/* === 
	Code
=== */
// const array = [2, 2, 5, 10, 20]
// function some(el, array){
// 	return array.includes(el)
// }
// console.log(some(4, array))

// console.log(array.some(item => item === 4))

/* === Вопросы:
 Нет
=== */
/* <- === === === === === === === === === === === === === === === === === === === ===  11.8.Упражнение - реализация some  === === === === === === === === === === === === === === === === === === === === -> */



/* === Вопросы:
 Нет
=== */
/* <- === === === === === === === === === === === === === === === === === === === ===  11.4.Упражнение - среднее значение end  === === === === === === === === === === === === === === === === === === === === -> */


const prices = [[2, 5], [4, 1], [8, 3, [40, 50]]]
console.log(prices.flat(1))
console.log(prices.flatMap(el => el.concat([1])))

/* === Вопросы:

=== */
/* <- === === === === === === === === === === === === === === === === === === === ===  Итерация в массиве end  === === === === === === === === === === === === === === === === === === === === -> */




// Запрашиваем данные у пользователя
const numLevels = parseInt(prompt("Введите количество уровней объекта:")),
					data = []

// Создаем многомерный объект
for (let i = 0; i < numLevels; i++) {
  const level = {},
								numKeys = parseInt(prompt(`Введите количество ключей для уровня ${i + 1}:`))

  for (let j = 0; j < numKeys; j++) {
    const key = prompt(`Введите ключ ${j + 1} для уровня ${i + 1}:`),
										value = prompt(`Введите значение для ключа ${key}:`)
    level[key] = value
  }

  data.push(level)
}

console.log(data)
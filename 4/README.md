Запуск исходников

`npm i`

Создать папку logs

`npm start`


Результат в консоли:
```
npm start

> node-cources-express@1.0.0 start nodejsCources/4
> node .

listen on localhost:3000

```

Через package.json была решена проблема запуска в текущей директории:
- добавлен ключ "main":"app.js"
- добавлен ключ "scripts.start": "node ."


Роутер разделен на две части:
- users* роуты
- posts* роуты

Добавлен abstractController

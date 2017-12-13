Запуск исходников

`NODE_PATH=. node server.js`

Для запуска под Windows установить [git for Windows](https://git-scm.com/download/win) и запускать из-под него, потому что set NODE_PATH не работает адекватно 

Самописный роутер доработан:
- добавлена проверка на существования обработчика для URL
- добавлена проверка на допустимые МЕТОДЫ (methods) - например, для одинаковой обработки POST и PUT
- добавлена проверка на пропущенный аргумент в запросе

В `config.json` вынесен порт приложения (8080)

Создано два контроллера: IndexController и UsersController. В UsersController@edit показана обработка двух типов запросов и отправка заголовков
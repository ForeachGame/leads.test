# leads.test

## Установка проекта
```
npm install
```
или
```
npm install --force
```
У Vue 2 и нового eslint под typescript конфликт. По нему есть тема на гите, но нет решения

### Запуск проекта для разработки
```
npm run serve
```

### Компиляция проекта
```
npm run build
```

### Запуск линтера перед публикацией
```
npm run lint
```

### Описание
Проект сделан с помощью Vue-cli.

В проекте использовались
* Vue2
* Vuex
* Typescript
* Eslint

Проект поделён на 6 частей:
* **shared** — переиспользуемый код, не имеющий отношения к специфике приложения/бизнеса;
* **entities** — бизнес-сущности;
* **features** — взаимодействия с пользователем, действия, которые несут бизнес-ценность для пользователя;
* **widgets** — композиционный слой для соединения сущностей и фич в самостоятельные блоки;
* **pages** — композиционный слой для сборки полноценных страниц из сущностей, фич и виджетов;
* **app** — настройки, стили и провайдеры для всего приложения.

В каждом компоненте присутствует Public API для более корректного взаимодействия друг с другом

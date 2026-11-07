# Reactive_Programming_Binding1


## Запуск

```powershell
npm.cmd ci
npm.cmd start
```

Відкрийте http://localhost:4200. Для іншого порту: `npm.cmd start -- --port 4202`.

## Збірка

```powershell
npm.cmd run build
```

Результат: `dist/binding1/browser`.

## Вправи

Гілки накопичувальні: кожна наступна містить попередні вправи.

- `task-1`: інтерполяція імені та віку через `{{ ... }}`.
- `task-2`: прив’язка властивостей DOM через `[value]` та `[textContent]`.
- `task-3`: прив’язка атрибута таблиці через `[attr.colspan]`.
- `task-4`: обробка кліків через `(click)` і приклад передавання `$event`.
- `task-5`: синхронізація двох полів і привітання через `[(ngModel)]`.

Використано Angular 22, standalone-компонент і signals.

# Проектные компоненты (features/projects)

Назначение: компоненты, которые используются только на страницах проектов. Организация по атомик‑дизайну.

Структура:
- atoms/ — базовые элементы (иконки, бейджи и т.п.)
- molecules/ — композиции из атомов (напр. ProjectMeta)
- organisms/ — крупные блоки
- templates/ — шаблоны страниц/секций (напр. ProjectDetails)

Импорт через алиас:
- @features/projects/atoms/...
- @features/projects/molecules/...
- @features/projects/organisms/...
- @features/projects/templates/...

Пример:
```ts
import ProjectDetails from '@features/projects/templates/ProjectDetails';
```

Правила:
- Переиспользуемость внутри проекта; если компонент становится универсальным — переносим в общие `@atoms|@molecules|@organisms|@templates`.
- Tailwind только через классы. Адаптивность и a11y обязательны.
- Именование префиксом Project* для ясности.

Экспорт для карточек:
1 колонка: 960×540 WebP.
2 колонки: 1600×900 WebP.
Для contain — подгоняйте длинную сторону к целевым ширинам (960/1600), сохраняйте пропорции.

ProjectResultItem
 расширен: добавлен imageFit?: 'cover' | 'contain'.
[рендер Image] класс теперь зависит от imageFit: object-cover по умолчанию, object-contain если задано. Центровка через object-center.
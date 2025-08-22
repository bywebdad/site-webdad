# Типографика проекта

Единые правила для заголовков, текста и вертикального ритма. Основано на Tailwind-классах и атоме `SectionHeading`.

## Заголовки
- H1 (кейс, hero): `text-3xl md:text-5xl font-semibold tracking-tight`
- Заголовок секции (по умолчанию): `text-3xl md:text-4xl font-light tracking-tight`
- Крупный заголовок секции: `text-4xl md:text-5xl font-semibold tracking-tight`

Рекомендуется использовать атом `SectionHeading` (`src/components/atoms/SectionHeading.tsx`):

```tsx
<SectionHeading as="h2" size="md" align="center" className="mb-10">Заголовок</SectionHeading>
```

Параметры:
- `as`: `h1 | h2 | h3`
- `size`: `md | lg` (см. шкалу выше)
- `align`: `left | center`

## Текст
- Основной текст (статьи): `prose prose-slate dark:prose-invert`
- Аннотация/лид: `text-lg text-gray-700 dark:text-gray-300`
- Описание в карточках: `text-sm text-white/70` (на тёмном фоне)
- Вспомогательный/мелкий: `text-xs text-gray-500` (или `text-white/60` на тёмном)

## Вертикальный ритм
- Секции: `py-10 md:py-16`
- Отступ под заголовком секции: `mb-10`
- Сетки карточек: `gap-4` на мобильных, при необходимости `md:gap-6` или `md:gap-8`

## Цвет и акценты
- Брендовый акцент: `text-brand-500`, `bg-brand-500`, `border-brand-500/30`
- Мутированный текст на тёмном фоне: `text-white/70`
- Границы: `border-white/10` (тёмная тема), `border-black/5` (светлая)

## A11y
- Секции: `aria-labelledby` и id у заголовка
- Фокус-стили: `focus-visible:ring-2 focus-visible:ring-brand-500` для интерактивных элементов

## Примеры

Заголовок секции с сеткой карточек:
```tsx
<section aria-labelledby="my-heading" className="py-10 md:py-16">
  <div className="max-w-7xl mx-auto px-6">
    <SectionHeading id="my-heading" as="h2" size="md" align="center" className="mb-10">
      Результаты
    </SectionHeading>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">...</div>
  </div>
</section>
```

Описание в карточке на тёмном фоне:
```tsx
<p className="text-white/70 text-sm">Описание карточки...</p>
```

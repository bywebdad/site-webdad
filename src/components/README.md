# Компоненты проектов

Документация для компонентов, используемых на страницах проектов.

## Архитектура

Компоненты следуют принципам Atomic Design:

- **Атомы** (`atoms/`) - базовые переиспользуемые компоненты
- **Молекулы** (`molecules/`) - комбинации атомов
- **Организмы** (`organisms/`) - сложные компоненты из молекул и атомов
- **Шаблоны** (`templates/`) - макеты страниц

## Атомы

### ProjectImage
Компонент изображения проекта с поддержкой тем и адаптивности.

```tsx
import ProjectImage from '@atoms/ProjectImage';

<ProjectImage
  src="/projects/example/01.png"
  alt="Скриншот проекта"
  variant="light"
  priority={true}
/>
```

**Свойства:**
- `src` - URL изображения
- `alt` - альтернативный текст
- `variant` - тема ('light' | 'dark')
- `width`, `height` - размеры (по умолчанию 1600x1000)
- `sizes` - строка sizes для адаптивности
- `priority` - приоритет загрузки
- `className` - дополнительные CSS классы

### ProjectSection
Универсальная секция проекта с поддержкой паттернов и тем.

```tsx
import ProjectSection from '@atoms/ProjectSection';

<ProjectSection
  variant="light"
  showPattern={true}
  ariaLabelledBy="section-heading"
  className="py-16"
>
  {children}
</ProjectSection>
```

**Свойства:**
- `children` - дочерние элементы
- `variant` - тема ('light' | 'dark')
- `showPattern` - показывать фоновый паттерн
- `ariaLabelledBy` - ID для accessibility
- `className` - дополнительные CSS классы

## Молекулы

### ProjectHeader
Компонент заголовка проекта с поддержкой eyebrow, заголовка и вводного текста.

```tsx
import ProjectHeader from '@molecules/ProjectHeader';

<ProjectHeader
  eyebrow="Кейс"
  title="Название проекта"
  intro="Краткое описание проекта"
  variant="light"
  headingId="project-heading"
/>
```

**Свойства:**
- `eyebrow` - небольшой текст над заголовком
- `title` - основной заголовок
- `intro` - вводный текст
- `variant` - тема ('light' | 'dark')
- `headingId` - ID для accessibility
- `className` - дополнительные CSS классы

### ProjectContent
Компонент контента проекта для отображения массива параграфов.

```tsx
import ProjectContent from '@molecules/ProjectContent';

<ProjectContent
  content={[
    'Первый параграф текста.',
    'Второй параграф с дополнительной информацией.',
    <>Параграф с <strong>выделенным</strong> текстом.</>
  ]}
  variant="light"
/>
```

**Свойства:**
- `content` - массив ReactNode элементов
- `variant` - тема ('light' | 'dark')
- `className` - дополнительные CSS классы

## Шаблоны

### ProjectPageLayout
Универсальный макет для страниц проектов.

```tsx
import ProjectPageLayout from '@templates/ProjectPageLayout';

<ProjectPageLayout>
  <ProjectHero {...heroProps} />
  <ProjectResults {...resultsProps} />
  <ProjectOverview {...overviewProps} />
</ProjectPageLayout>
```

**Свойства:**
- `children` - дочерние элементы (обычно компоненты проекта)
- `className` - дополнительные CSS классы

## Организмы

### ProjectOverview
Комплексный компонент обзора проекта, объединяющий заголовок, изображение, контент и список преимуществ.

```tsx
import ProjectOverview from '@features/projects/organisms/ProjectOverview';

<ProjectOverview
  eyebrow="Кейс"
  title="Обзор проекта"
  intro="Вводное описание"
  image={{ src: '/image.png', alt: 'Описание' }}
  content={['Параграф 1', 'Параграф 2']}
  features={[
    {
      icon: <Icon />,
      title: 'Преимущество',
      description: 'Описание преимущества'
    }
  ]}
  variant="light"
  showPattern={true}
/>
```

## Типизация

Все типы определены в `src/types/project.ts`:

- `ProjectVariant` - варианты тем
- `BaseProjectProps` - базовые свойства
- `ProjectImageProps` - свойства изображения
- `ProjectHeaderProps` - свойства заголовка
- `ProjectContentProps` - свойства контента
- `ProjectSectionProps` - свойства секции
- `ProjectPageLayoutProps` - свойства макета

## Принципы использования

1. **Переиспользуемость** - компоненты созданы для использования в разных проектах
2. **Типизация** - все компоненты строго типизированы
3. **Accessibility** - поддержка ARIA атрибутов и семантической разметки
4. **Темы** - поддержка светлой и темной тем
5. **Адаптивность** - все компоненты адаптивны для мобильных устройств

## Примеры страниц

- `/projects/warehouse` - логистическая компания
- `/projects/GRE` - телеграм-бот для недвижимости
- `/projects/journal` - SaaS для управления проектами

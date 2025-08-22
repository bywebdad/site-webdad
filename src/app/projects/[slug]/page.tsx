import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  // Динамическая генерация путей отключена — используем статические страницы проектов
  return [];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  // Роут заглушка: всегда 404
  await params; // совместимость с Next 15.5
  return {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  // Динамический роут отключён: используем статические страницы проектов
  await params; // поддержка сигнатуры для Next 15.5
  return notFound();
}

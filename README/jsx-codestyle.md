# JSX Code Style

**КЛЮЧЕВОЙ ПРИНЦИП: Читаемость.**

Чтобы максимально легко читать файл надо:
1) Максимально выносить повторяющиеся куски в компоненты
2) Простое - лучше сложного (например if-else лучше тернарника)
3) Класть код максимально рядом c местом применения

## СТРУКТУРА КОДА:

```jsx
// Импорты разделены по типам

// Сперва идут те, что реже изменяются, например подключение scss файла
import { sTabs, sTitle, sContents } from './Some.css';
import cn from 'clsx';

// Потом библиотеки
import React, {
	ReactElement,
	ReactNode,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';

// Потом компоненты
import { TabProps } from '@/components/common/tabs/Tab/Tab';
import { TabTitle } from '@/components/common/tabs/TabTitle/TabTitle';
import { TabContent } from '@/components/common/tabs/TabContent/TabContent';
import { Row } from '@/components/common/Flex/Flex';

// Запрещено использовать any без веской причины. Причину указывать в комментариях
interface TabsProps {
	className?: string;
	startIndex?: number;
	children: ReactElement<TabProps>[];
	isContentReady?: boolean;
}

// Компоненты пишутся через React.FC, а не через функцию
// Только ИМЕНОВАННЫЙ экспорт
export const Tabs: React.FC<TabsProps> = ({
    // Деструктуризация свойств происходит в аргументах, c указанием значений по умолчанию
	className = '',
	startIndex = 0,
	children,
	isContentReady = true,
}) => {
    // В компоненте все сортируется в порядке: useRef, useState, useCallback, useEffect
    // Порядок можно ТОЧЕЧНО нарушать если это мешает реализации
    // Хуки разных типов разделяются отступами

    // useRef
	const otherEl = useRef<HTMLDivElement>(null);
	const contentsWrapperEl = useRef<HTMLDivElement>(null);

    // useState
	const [current, setCurrent] = useState(startIndex);
	const [something, setSomething] = useState<null | string>(null);

    // Использовать useMemo только для тяжелых вычислений
    // useMemo
    const a = 5;
    const b = 10;

    // Коллбэки не оборачиваются в useCallback без причины
    // Внутренние обработчики начинаются с handle, внешние (пропсы) с on: handleClick, onClick
	const handleBecomeActive = (index: number) => {
		doStuff();
	};

	// Этот коллбэк обернут потому что будет использован для отвязки в useEffect
	const handleResize = useCallback(() => {
		doStuff();
	}, []);

    // useEffect
	useEffect(() => {
		updateContentHeight(contentsWrapperEl.current);
	}, [current, updateContentHeight]);

	// Не забываем отвязывать глобальные слушатели
	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [handleResize]);

    // Максимально выносить весь JSX в return
    // Например, не стоит выносить куски в переменные без веской причины
    // Всегда использовать cn
	return (
		<div className={cn(sTabs, className)}>
			<Row wrap gap className={cn(sTitles)}>
				{titles}
			</Row>
			<div className={cn(sContents)} ref={contentsWrapperEl}>
				{contents}
			</div>
		</div>
	);
};
```

'use client';

import { memo, useEffect } from 'react';
import { create } from 'zustand';

import { API_URL } from '@/constants/env';
import { IPerson } from '@/db/models/person';

type State = {
	ready: boolean;
	count: number;
	persons: IPerson[];
};

type Actions = {
	init: () => Promise<void>;

	increment: () => void;
	decrement: () => void;
};

export const useApp$ = create<State & Actions>((set, get) => ({
	ready: false,
	count: 0,
	persons: [],

	async init() {
		const persons = await fetch(`${API_URL}/persons`).then((res) => res.json());
		set({ persons });
		set({ ready: true });
	},

	increment() {
		set({ count: get().count + 1 });
	},
	decrement() {
		set({ count: get().count - 1 });
	},
}));

const Init: React.FC = () => {
	const { init } = useApp$();

	useEffect(() => {
		init();
	}, [init]);

	return <></>;
};

export const InitApp$ = memo(Init);

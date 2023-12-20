import { create } from 'zustand';

type State = {
	count: number;
};

type Actions = {
	init: () => void;

	increment: (qty: number) => void;
	decrement: (qty: number) => void;
};

export const useAppStore = create<State & Actions>((set) => ({
	count: 0,

	init: () => {},

	increment: () => set((state) => ({ count: state.count + 1 })),
	decrement: () => set((state) => ({ count: state.count - 1 })),
}));

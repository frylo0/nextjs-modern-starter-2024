'use client';

import Cookies from 'js-cookie';
import { FormEventHandler, PropsWithChildren, useCallback, useEffect, useRef, useState } from 'react';

import { CLIENT_PASSWORD_PROTECTION } from '@/constants/env';
import { clientAuthUsers } from '@/constants/project';

export type TClientAuthUser = {
	username: string;
	password: string;
};

export type TClientAuthUsers = TClientAuthUser[];

export function useClientAuth(users: TClientAuthUser[]) {
	const [isClient, setIsClient] = useState<boolean>(false);
	const [loggedIn, setIsLoggedIn] = useState<boolean>(false);

	useEffect(() => {
		const isUserLoggedIn = Cookies.get('loggedIn') === 'true';
		setIsLoggedIn(isUserLoggedIn);
		setIsClient(true);
	}, []);

	const login = useCallback(
		(username: string, password: string) => {
			const user = users.find((user) => user.username === username && user.password === password);

			if (user) {
				setIsLoggedIn(true);
				Cookies.set('loggedIn', 'true', { expires: 7 });
			} else {
				alert('Authentication failed');
			}
		},
		[users]
	);

	const logout = useCallback(() => {
		setIsLoggedIn(false);
		Cookies.remove('loggedIn');
	}, []);

	return { loggedIn, login, logout, isClient };
}

type TWithAuthClientFactory = (isClientAuthEnabled: boolean, users: TClientAuthUsers) => React.FC<PropsWithChildren>;

export const withClientAuthFactory: TWithAuthClientFactory = (isClientAuthEnabled, users) => {
	const WithClientAuth = ({ children }: PropsWithChildren) => {
		const { loggedIn, login, isClient } = useClientAuth(users);

		const usernameRef = useRef<HTMLInputElement | null>(null);
		const passwordRef = useRef<HTMLInputElement | null>(null);

		const handleLogin: FormEventHandler<HTMLFormElement> = (e) => {
			e.preventDefault();

			const username = usernameRef.current?.value || '';
			const password = passwordRef.current?.value || '';

			login(username, password);
		};

		if (!isClientAuthEnabled) return children;
		if (!isClient) return null;

		if (loggedIn) return children;
		else
			return (
				<form
					style={{
						display: 'flex',
						color: 'white',
						flexDirection: 'column',
						alignItems: 'center',
						margin: 'auto',
						marginTop: '10em',
						gap: '1em',
					}}
					onSubmit={handleLogin}
				>
					<h1 style={{ fontSize: '1.5em' }}>Client Auth</h1>
					<h2 style={{ fontSize: '1.2em', marginBottom: '1em' }}>Next.js Modern Starter 2024</h2>

					<input type="text" placeholder="Username" ref={usernameRef} style={{ textAlign: 'center' }} />
					<input type="password" placeholder="Password" ref={passwordRef} style={{ textAlign: 'center' }} />

					<button style={{ marginTop: '1.25em' }}>Login</button>
				</form>
			);
	};

	return WithClientAuth;
};

export const WithClientAuth = withClientAuthFactory(CLIENT_PASSWORD_PROTECTION, clientAuthUsers);

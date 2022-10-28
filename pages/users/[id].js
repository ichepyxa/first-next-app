import { useRouter } from 'next/router'
import React from 'react'
import MainContainer from '../../components/MainContainer'

export default function UsersID({ user }) {
	return (
		<MainContainer title={`Пользователь с id = ${user.id || 'Отсутствует'}`}>
			<div className="container mx-auto">
				{user && Object.keys(user).length > 0 ? (
					<>
						<h2>Пользователь c id = {user.id || 'Отсутствует'}</h2>
						<p>Имя: {user.name || 'Отсутствует'}</p>
						<p>Email: {user.email || 'Отсутствует'}</p>
						<p>Phone: {user.phone || 'Отсутствует'}</p>
						<p>
							Website:{' '}
							{user.website ? (
								<a
									href={`http://${user.website}`}
									target="_blank"
									rel="noreferrer"
									className="border-blue-500 hover:border-b-2 hover:text-blue-500 transition-all text-blue-300"
								>
									{`http://${user.website}`}
								</a>
							) : (
								'Отсутствует'
							)}
						</p>
					</>
				) : (
					<h2>Неизвестный пользователь</h2>
				)}
			</div>
		</MainContainer>
	)
}

export async function getServerSideProps({ params }) {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/users/${params.id}`
	)
	const user = await response.json()

	return {
		props: {
			user,
		},
	}
}

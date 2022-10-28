import A from '../components/A'
import MainContainer from '../components/MainContainer'

export default function Users({ users }) {
	return (
		<MainContainer title="Пользователи">
			<div className="container mx-auto">
				<h2 className="text-4xl text-slate-700">Пользователи</h2>

				<ul className="mt-5">
					{users.map(user => (
						<li key={user.id} className="text-slate-700">
							Пользователь -{' '}
							<A
								href={`/users/${user.id}`}
								className="border-blue-500 hover:border-b-2 hover:text-blue-500 transition-all text-blue-300"
								text={user.name}
							/>
						</li>
					))}
				</ul>
			</div>
		</MainContainer>
	)
}

export async function getStaticProps(context) {
	const response = await fetch('https://jsonplaceholder.typicode.com/users')
	const users = await response.json()

	return {
		props: { users },
	}
}

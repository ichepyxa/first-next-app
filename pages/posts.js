import A from '../components/A'
import MainContainer from '../components/MainContainer'

export default function Posts({ posts, users }) {
	return (
		<MainContainer title="Посты">
			<div className="container mx-auto">
				<h2 className="text-4xl text-slate-700">Посты</h2>

				<ul className="w-full flex justify-center mt-5 items-center flex-col gap-5">
					{posts.map(post => (
						<li
							key={post.id}
							className="w-full p-6 shadow shadow-slate-400 rounded-lg text-slate-700 flex justify-between items-center"
						>
							<div className="w-full flex flex-col gap-4">
								<h2 className="text-2xl max-md:w-full w-4/5 font-semibold first-letter:uppercase break-all">
									{post.title}
								</h2>
								<p className="max-md:w-full w-2/3 break-all">
									<strong>Описание:</strong> {post.body || 'Отсутствует'}
								</p>
							</div>

							<div className="flex min-h-full justify-center items-end">
								<p className="self-end whitespace-nowrap">
									Создатель -{' '}
									<A
										href={`/users/${post.userId}`}
										className="border-blue-500 hover:border-b-2 hover:text-blue-500 transition-all text-blue-300"
										text={users.find(item => item.id === post.userId).name}
									/>
								</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</MainContainer>
	)
}

export async function getStaticProps(context) {
	const responsePosts = await fetch(
		'https://jsonplaceholder.typicode.com/posts'
	)
	const posts = await responsePosts.json()

	const responseUsers = await fetch(
		`https://jsonplaceholder.typicode.com/users`
	)
	const users = await responseUsers.json()

	return {
		props: { posts, users },
	}
}

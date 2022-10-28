import React from 'react'
import Head from 'next/head'
import A from './A'

const MainContainer = ({ title, children }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<header className="w-full bg-slate-700 py-4">
				<div className="container flex justify-between items-center mx-auto">
					<A
						href="/"
						className="text-white text-2xl uppercase font-semibold hover:text-gray-300 transition-colors"
						text="Лого сайта"
					/>
					<ul className="flex justify-center items-center gap-10">
						<li>
							<A
								href="/posts"
								className="text-white text-lg hover:text-gray-300 transition-colors"
								text="Посты"
							/>
						</li>
						<li>
							<A
								href="/users"
								className="text-white text-lg hover:text-gray-300 transition-colors"
								text="Пользователи"
							/>
						</li>
					</ul>
				</div>
			</header>
			<main className="py-4">{children}</main>
		</>
	)
}

export default MainContainer

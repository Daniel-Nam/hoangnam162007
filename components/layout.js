import Head from 'next/head'
import Header from './header'

export default function layout({ children }) {
	return (
		<div>
			<Head>
				<title>hoangnam162007</title>
				<meta
					name='description'
					content='Trang chủ chính thức của hoangnam162007'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />

			<main className='p-4 min-h-screen'>
				<div className='container'>{children}</div>
			</main>
		</div>
	)
}

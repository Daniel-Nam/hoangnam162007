import { FaLink } from 'react-icons/fa'

function products({ repos }) {
	return (
		<div>
			<h1 className='text-2xl font-bold mb-3'>
				Tất cả các sản phẩm ({repos.length})
			</h1>
			<div className='flex flex-col gap-5'>
				{repos.map((repo) => (
					<div key={repo.id} className='p-2 border'>
						<div className='text-xl font-bold'>
							<a
								href={repo.html_url}
								target='_blank'
								rel='noreferrer'>
								{repo.name}
							</a>
						</div>
						<div className='text-gray-600'>{repo.description}</div>
						<div className='flex items-center gap-2'>
							<FaLink />
							<a
								href={repo.homepage}
								target='_blank'
								rel='noreferrer'
								className='text-blue-500'>
								{repo.homepage}
							</a>
						</div>
						{repo.topics.length > 0 && (
							<div className='flex items-center flex-wrap gap-3'>
								<span>Topics:</span>
								{repo.topics.map((topic) => (
									<span
										key={topic}
										className='block p-1 border rounded-sm'>
										{topic}
									</span>
								))}
							</div>
						)}
						<div>Language: {repo.language}</div>
					</div>
				))}
			</div>
		</div>
	)
}

products.getInitialProps = async () => {
	const res = await fetch('https://api.github.com/users/daniel-nam/repos')
	const data = await res.json()

	return { repos: data }
}

export default products

import { useRouter } from 'next/router'

function ActiveLink({ children, href, setX, setW }) {
	const router = useRouter()

	const handleClick = (e) => {
		e.preventDefault()
		setX(e.currentTarget.offsetLeft)
		setW(e.currentTarget.offsetWidth)
		router.push(href)
	}

	return (
		<a
			href={href}
			className={`block transition ${
				router.asPath === href
					? 'text-blue-500 font-semibold'
					: 'text-gray-700'
			}`}
			onClick={handleClick}>
			{children}
		</a>
	)
}

export default ActiveLink

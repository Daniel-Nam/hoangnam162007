import { useState } from 'react'
import Image from 'next/image'

import ActiveLink from './activeLink'

export default function Header() {
	const [x, setX] = useState(0)
	const [w, setW] = useState(70)

	return (
		<header className='h-16 bg-white border-b px-4'>
			<nav className='flex items-center justify-between h-full container'>
				<div className='hidden sm:flex sm:items-center sm:gap-3'>
					<div className='h-[50px]'>
						<Image
							src='/images/logo.jpg'
							alt='Logo'
							width={50}
							height={50}
							className='object-cover rounded-full'
						/>
					</div>
					<h1 className='text-lg font-semibold'>Hoàng Nam</h1>
				</div>

				<div className='relative flex items-center gap-5 h-full'>
					<ActiveLink setX={setX} setW={setW} href='/'>
						Trang chủ
					</ActiveLink>
					<ActiveLink setX={setX} setW={setW} href='/contact'>
						Liên hệ
					</ActiveLink>
					<ActiveLink setX={setX} setW={setW} href='/products'>
						Các sản phẩm
					</ActiveLink>
					<div
						className='absolute bottom-0 h-1 bg-blue-500 rounded-full shadow shadow-blue-500/50 transition'
						style={{
							width: `${w}px`,
							transform: `translate3d(${x}px, 0, 0)`,
						}}></div>
				</div>
			</nav>
		</header>
	)
}

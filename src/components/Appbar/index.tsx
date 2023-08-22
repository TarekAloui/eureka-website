import React, { FC } from 'react'
import ThemeSwitcher from '../ThemeSwitcher'
import AppBarLogo from './AppBarLogo'

const Appbar: FC = () => {
	return (
		<nav className="border-gray-200 bg-bg-start">
			<div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
				<a href="/" className="flex items-center">
					<AppBarLogo />
				</a>
				<div className="flex flex-row items-center justify-between md:order-1">
					<div
						className="hidden w-full items-center justify-between md:flex md:w-auto"
						id="navbar-user"
					>
						<ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-transparent p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0">
							<li>
								<a
									href="/"
									className="block rounded py-2 pl-3 pr-4 text-t-primary hover:text-link-hover md:bg-transparent md:p-0"
									aria-current="page"
								>
									Home
								</a>
							</li>
							<li>
								<a
									href="/bookmarks"
									className="block rounded py-2 pl-3 pr-4 text-t-primary hover:text-link-hover md:bg-transparent md:p-0"
								>
									Bookmarks
								</a>
							</li>
							<li>
								<a
									href="/about"
									className="block rounded py-2 pl-3 pr-4 text-t-primary hover:text-link-hover md:bg-transparent md:p-0"
								>
									About
								</a>
							</li>
						</ul>
					</div>
					<ThemeSwitcher className="end-0 block rounded py-2 pl-3 pr-4 text-t-primary md:bg-transparent md:p-0" />
				</div>
				<div className="flex items-center md:order-2">
					<button
						type="button"
						className="mr-3 flex h-8 w-8 rounded-full text-sm md:mr-0"
						id="user-menu-button"
						aria-expanded="false"
						data-dropdown-toggle="user-dropdown"
						data-dropdown-placement="bottom"
					>
						<span className="sr-only">Open user menu</span>
						<svg
							className="align-self-center h-5 w-5 object-center hover:text-link-hover"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 17 14"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg>
					</button>
					<div
						className="z-50 my-4 hidden list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700"
						id="user-dropdown"
					>
						<div className="px-4 py-3">
							<span className="block text-sm text-gray-900 dark:text-white">
								UserName
							</span>
							<span className="block truncate  text-sm text-gray-500 dark:text-gray-400">
								name@eureka.com
							</span>
						</div>
						<ul className="py-2" aria-labelledby="user-menu-button">
							<li>
								<a
									href="#"
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
								>
									Settings
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
								>
									Sign out
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Appbar

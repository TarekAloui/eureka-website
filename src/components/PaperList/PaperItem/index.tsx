import { Paper } from '@/lib/model/Paper'
import Link from 'next/link'
import { FC, useCallback } from 'react'

interface PaperItemProps {
	paper: Paper
}

const PaperItem: FC<PaperItemProps> = ({ paper }: PaperItemProps) => {
	const paperJSON = JSON.stringify(paper)
	const searchParams = new URLSearchParams()!
	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams)
			params.set(name, value)

			return params.toString()
		},
		[searchParams],
	)

	return (
		<div className="relative mb-6 flex flex-col overflow-hidden rounded bg-bg-start p-6 shadow-lg">
			<div className="absolute right-3 top-3 text-xs text-t-secondary">
				Trendiness Score: {paper.trendiness_score}
			</div>

			<Link
				href={`/papers/${encodeURIComponent(
					paper.id,
				)}?${createQueryString('paperJSON', paperJSON)}`}
			>
				<h2 className="mb-2 text-2xl font-bold text-foreground hover:text-link">
					{paper.title}
				</h2>
			</Link>

			<div className="mb-4 flex-grow text-lg text-secondary">
				<p className="font-semibold text-primary">Abstract</p>
				<p>{paper.abstract}</p>
			</div>

			<div className="flex flex-wrap justify-between text-sm text-secondary">
				<div className="mb-4 w-full md:w-1/2">
					<p className="font-semibold text-primary">Authors</p>
					<ul>
						{paper.authors.map((author, index) => (
							<li key={index} className="mb-1">
								{author.name} - {author.affiliation}
							</li>
						))}
					</ul>
				</div>

				<div className="mb-4 w-full md:w-1/4">
					<p className="font-semibold text-primary">
						Publication Date
					</p>
					<p>{paper.pub_date.toLocaleDateString()}</p>
				</div>

				<div className="mb-4 w-full md:w-1/4">
					<p className="font-semibold text-primary">
						Journal Reference
					</p>
					<p>{paper.journal_ref}</p>
				</div>
			</div>
		</div>
	)
}

export default PaperItem

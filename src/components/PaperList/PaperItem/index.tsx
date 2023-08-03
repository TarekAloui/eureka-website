import { Paper } from '@/lib/model/Paper'
import { FC } from 'react'

interface PaperItemProps {
	paper: Paper
}

const PaperItem: FC<PaperItemProps> = ({ paper }) => (
	<div className="mb-6 overflow-hidden rounded bg-bg-start p-6 shadow-lg">
		<h2 className="mb-2 text-2xl font-bold text-primary">{paper.title}</h2>

		<div className="mb-4">
			<p className="font-semibold text-primary">Abstract</p>
			<p className="text-secondary">{paper.abstract}</p>
		</div>

		<div className="mb-4">
			<p className="font-semibold text-primary">Authors</p>
			<ul>
				{paper.authors.map((author, index) => (
					<li key={index} className="mb-1 text-secondary">
						{author.name} - {author.affiliation}
					</li>
				))}
			</ul>
		</div>

		<div className="mb-4">
			<p className="font-semibold text-primary">Publication Date</p>
			<p className="text-secondary">
				{paper.pub_date.toLocaleDateString()}
			</p>
		</div>

		<div className="mb-4">
			<p className="font-semibold text-primary">Journal Reference</p>
			<p className="text-secondary">{paper.journal_ref}</p>
		</div>

		<div className="mb-4">
			<p className="font-semibold text-primary">Trendiness Score</p>
			<p className="text-secondary">{paper.trendiness_score}</p>
		</div>
	</div>
)

export default PaperItem

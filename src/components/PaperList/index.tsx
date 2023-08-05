import { Paper } from '@/lib/model/Paper'
import PaperItem from './PaperItem'
import { FC } from 'react'
import { generateDummyData } from '@/lib/dummy/dummyPapers'

const PaperList: FC = () => {
	const papers: Paper[] = generateDummyData()[0]

	return (
		<div className="container mx-auto w-2/3 place-content-center p-6">
			{papers
				.sort((a, b) => b.trendiness_score - a.trendiness_score)
				.map((paper) => (
					<PaperItem key={paper.id} paper={paper} />
				))}
		</div>
	)
}

export default PaperList

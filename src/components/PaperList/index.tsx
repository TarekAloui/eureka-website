import { Paper } from '@/lib/model/Paper'
import PaperItem from './PaperItem'

interface PaperListProps {
	papers: Paper[]
}

const PaperList: React.FC<PaperListProps> = ({ papers }) => (
	<div className="container mx-auto w-2/3 place-content-center p-6">
		{papers
			.sort((a, b) => b.trendiness_score - a.trendiness_score)
			.map((paper) => (
				<PaperItem key={paper.id} paper={paper} />
			))}
	</div>
)

export default PaperList

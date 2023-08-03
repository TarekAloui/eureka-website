import { Paper } from '@/lib/model/Paper'
import PaperItem from './PaperItem'

interface PaperListProps {
	papers: Paper[]
}

const PaperList: React.FC<PaperListProps> = ({ papers }) => (
	<div className="bg-bg-end p-6">
		{papers.map((paper) => (
			<PaperItem key={paper.id} paper={paper} />
		))}
	</div>
)

export default PaperList

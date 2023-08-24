import { Paper } from '@/lib/model/Paper'
import PaperItem from './PaperItem'
import { FC } from 'react'
import { generateDummyData } from '@/lib/dummy/dummyPapers'
import { getClient } from '@/lib/apollo/client'
import { GetPapersDocument } from '@/lib/graphql/documents/graphql'
import PaperDetailsPage from '@/app/papers/[id]/page'

const PaperList: FC = async () => {
	const { papers } = (
		await getClient().query({
			query: GetPapersDocument,
		})
	).data
	return (
		<div className="container mx-auto w-2/3 place-content-center p-6">
			{papers &&
				papers
					.sort((a, b) => b!.trendiness_score - a!.trendiness_score)
					.map((paper) => (
						<PaperItem key={paper!.id} paper={paper} />
					))}
		</div>
	)
}

export default PaperList

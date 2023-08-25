import { Paper } from '@/lib/model/Paper'
import PaperItem from './PaperItem'
import { FC } from 'react'
import { getClient } from '@/lib/apollo/client'
import { GetPapersDocument } from '@/lib/graphql/documents/graphql'
import PaperDetailsPage from '@/app/papers/[id]/page'

const PaperList: FC = async () => {
	console.log('PaperList')
	try {
		const { papers } = (
			await getClient().query({
				query: GetPapersDocument,
			})
		).data
		return (
			<div className="container mx-auto w-2/3 place-content-center p-6">
				{papers &&
					[...papers]
						.sort((a, b) => b!.trendinessScore - a!.trendinessScore)
						.map((paper) => (
							<PaperItem key={paper!.id} paper={paper} />
						))}
			</div>
		)
	} catch (error) {
		console.log('ERROR LOADING PAPERS LIST :', error)
		return <div>ERROR</div>
	}
}

export default PaperList

import PaperDetails from '@/components/PaperDetails'
import { PaperType } from '@/lib/graphql/documents/graphql'
import { Paper } from '@/lib/model/Paper'
import { FC } from 'react'

interface PaperDetailsPageProps {
	params: {
		id: string
	}
	searchParams: {
		paperJSON: string
	}
}

const PaperDetailsPage: FC<PaperDetailsPageProps> = ({
	params,
	searchParams,
}: PaperDetailsPageProps) => {
	const { paperJSON } = searchParams

	// unpack the paper object from the query string
	const paper: PaperType = JSON.parse(paperJSON)

	return (
		<div className="container mx-auto h-full overflow-hidden">
			<PaperDetails paper={paper} />
		</div>
	)
}

export default PaperDetailsPage

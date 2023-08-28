import { Paper } from '@/lib/model/Paper'
import RelatedTweets from '@/components/RelatedTweets'
import { FC } from 'react'
import { getClient } from '@/lib/apollo/client'
import {
	GetRelatedTweetsDocument,
	PaperType,
	TweetInfoFragment,
} from '@/lib/graphql/documents/graphql'

interface PaperDetailsProps {
	paper: PaperType
}

const PaperDetails: FC<PaperDetailsProps> = async ({
	paper,
}: PaperDetailsProps) => {
	const relatedTweets = (
		await getClient().query({
			query: GetRelatedTweetsDocument,
			variables: { paperId: paper.id },
		})
	).data.paper?.relatedTweets as TweetInfoFragment[]
	return (
		<div className="flex h-full flex-col md:flex-row">
			<div className="p-6 md:w-2/3">
				<h2 className="mb-2 text-2xl font-bold text-foreground">
					{paper.title}
				</h2>
				<p className="font-semibold text-primary">Abstract</p>
				<p className="text-secondary">{paper.abstract}</p>
				<p className="font-semibold text-primary">Authors</p>
				<ul>
					{paper?.authors?.map((author, index) => (
						<li key={index} className="mb-1 text-secondary">
							{author?.name} - {author?.affiliation}
						</li>
					))}
				</ul>
				<p className="font-semibold text-primary">Publication Date</p>
				<p className="text-secondary">
					{new Date(paper?.pubDate).toLocaleDateString()}
				</p>
				<p className="font-semibold text-primary">Journal Reference</p>
				<p className="text-secondary">{paper.journalRef}</p>
			</div>
			<div className="rounded bg-secondary p-6 shadow md:w-1/3">
				<h2 className="mb-2 text-lg font-bold text-foreground">
					Related Tweets
				</h2>
				{relatedTweets ? (
					<RelatedTweets
						tweets={relatedTweets as TweetInfoFragment[]}
					/>
				) : (
					<div className="text-secondary">
						No related tweets found
					</div>
				)}
			</div>
		</div>
	)
}

export default PaperDetails

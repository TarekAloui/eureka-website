import TweetItem from './TweetItem'
import {
	GetRelatedTweetsQuery,
	TweetInfoFragment,
	TweetType,
} from '@/lib/graphql/documents/graphql'

interface TweetListProps {
	tweets: TweetInfoFragment[]
}

const RelatedTweets: React.FC<TweetListProps> = ({ tweets }) => {
	console.log('RelatedTweets', tweets)
	return (
		<div className="h-full space-y-4 overflow-auto scrollbar-thin scrollbar-track-accent-secondary scrollbar-thumb-accent scrollbar-thumb-rounded">
			{tweets?.map((tweet) => (
				<TweetItem
					key={(tweet as TweetInfoFragment).url}
					tweet={tweet as TweetInfoFragment}
				/>
			))}
		</div>
	)
}

export default RelatedTweets

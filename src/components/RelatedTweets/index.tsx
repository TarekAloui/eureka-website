import { Tweet } from '@/lib/model/Tweet'
import TweetItem from './TweetItem'

interface TweetListProps {
	tweets: Tweet[]
}

const RelatedTweets: React.FC<TweetListProps> = ({ tweets }) => (
	<div className="h-full space-y-4 overflow-auto scrollbar-thin scrollbar-track-accent-secondary scrollbar-thumb-accent scrollbar-thumb-rounded">
		{tweets.map((tweet) => (
			<TweetItem key={tweet.url} tweet={tweet} />
		))}
	</div>
)

export default RelatedTweets

import { TweetInfoFragment, TweetType } from '@/lib/graphql/documents/graphql'

interface TweetItemProps {
	tweet: TweetInfoFragment
}

const TweetItem: React.FC<TweetItemProps> = ({ tweet }) => (
	<div className="m-2 rounded border border-t-secondary bg-bg-start p-4">
		<a href={tweet.url} className="font-bold text-primary">
			{tweet.userName}
		</a>
		<p className="text-secondary">{tweet.text}</p>
		<p className="text-xs text-secondary">
			{new Date(tweet.date).toLocaleDateString()}
		</p>
		<p className="text-xs text-secondary">Retweets: {tweet.retweets}</p>
		<p className="text-xs text-secondary">Likes: {tweet.likes}</p>
	</div>
)

export default TweetItem

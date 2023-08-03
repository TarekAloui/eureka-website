import { faker } from '@faker-js/faker'
import { Paper, Author, Tweet } from '@/lib/model' // Replace with the actual path to your models

// List of well-known machine learning researchers for author data
const authors = [
	'Andrew Ng',
	'Yoshua Bengio',
	'Yann LeCun',
	'Geoffrey Hinton',
	'Ian Goodfellow',
	'Andrej Karpathy',
	'Chelsea Finn',
	'Sergey Levine',
	'Jeff Dean',
	'Li Fei-Fei',
]

// Function to generate a random sample of authors
function randomSampleAuthors(count: number): Author[] {
	const sample: Author[] = []
	for (let i = 0; i < count; i++) {
		const randomAuthorName =
			authors[Math.floor(Math.random() * authors.length)]
		sample.push({
			name: randomAuthorName,
			affiliation: faker.company.name(),
			hIndex: faker.datatype.number(100),
			i10Index: faker.datatype.number(100),
			citations: faker.datatype.number(5000),
			interests: [
				faker.lorem.word(),
				faker.lorem.word(),
				faker.lorem.word(),
			],
			profileUrl: faker.internet.url(),
		})
	}
	return sample
}

// Function to generate dummy tweets
function generateDummyTweets(count: number): Tweet[] {
	const tweets: Tweet[] = []
	for (let i = 0; i < count; i++) {
		tweets.push({
			url: faker.internet.url(),
			user_name: faker.internet.userName(),
			retweets: faker.datatype.number(),
			likes: faker.datatype.number(),
			text: faker.lorem.words(10),
			date: faker.date.recent(),
		})
	}
	return tweets
}

// Function to generate dummy data
function generateDummyData(numPapers = 50): Paper[] {
	const data: Paper[] = []
	for (let i = 0; i < numPapers; i++) {
		const paperAuthors = randomSampleAuthors(
			faker.datatype.number({ min: 1, max: 5 }),
		)
		data.push({
			id: faker.datatype.uuid(),
			title: faker.lorem.words(6),
			authors: paperAuthors,
			abstract: faker.lorem.paragraph(),
			pub_date: faker.date.past(5),
			updated_date: faker.date.recent(),
			categories: [
				faker.lorem.word(),
				faker.lorem.word(),
				faker.lorem.word(),
			],
			links: [faker.internet.url()],
			comment: 'No comment',
			journal_ref: 'Journal of Machine Learning Research',
			trendiness_score: faker.datatype.number(100),
			relatedTweets: generateDummyTweets(5),
		})
	}
	return data
}

// Generate the dummy data
const dummyData = generateDummyData()
export default dummyData

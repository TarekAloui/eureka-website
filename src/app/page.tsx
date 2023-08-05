import { Appbar } from '@/components'
import PaperList from '@/components/PaperList'
import dummyData from '../lib/dummy/dummyPapers'

export default function Home() {
	return (
		<main className="overflow-hidden">
			{dummyData && <PaperList papers={dummyData} />}
		</main>
	)
}
3

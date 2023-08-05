'use client'
import { FC } from 'react'

interface PaperDetailsPageProps {
	params: {
		id: string
	}
}

const PaperDetailsPage: FC<PaperDetailsPageProps> = ({
	params,
}: PaperDetailsPageProps) => {
	const { id } = params
	console.log(`Paper is ${id}`)
	return <div className="container overflow-hidden">Paper is {id}</div>
}

export default PaperDetailsPage

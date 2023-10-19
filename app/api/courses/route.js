import courses from './data.json';
import {NextResponse} from 'next/server'

export async function GET(request) {
    return NextResponse.json(courses)
}

export async function POST(request) {
    const {title, description, level, link} = await request.json()
    return NextResponse.json({message: 'Course created'})
}
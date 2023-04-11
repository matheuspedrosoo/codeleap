export interface Post {
	id: number
	username: string
	created_datetime: Date
	title: string
	content: string
}

export interface PostState {
	posts: Post[]
}

export interface ISignupState {
	username: string
}

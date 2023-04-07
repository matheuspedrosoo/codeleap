import { FormNewPost } from './components/FormNewPost'
import { PostItem } from './components/PostItem'

import { Container, Header, PostList } from './styles'

export function Posts() {
	const data = [
		{
			id: 1,
			username: 'Vini',
			created_datetime: '2023-01-06T12:34:56Z',
			title: 'My First Post at CodeLeap Network!',
			content: `
		Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi
						tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis
						placerat. Duis vel nibh at velit scelerisque suscipit.
						<br />
						<br />
						Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu
						sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
		`
		},
		{
			id: 2,
			username: 'Max',
			created_datetime: '2023-04-06T12:34:56Z',
			title: 'My Secound Post at CodeLeap Network!',
			content: `
		Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi
						tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis
						placerat. Duis vel nibh at velit scelerisque suscipit.
						<br />
						<br />
						Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu
						sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
		`
		}
	]

	return (
		<Container>
			<Header>
				<span>CodeLeap Network</span>
			</Header>

			<FormNewPost />

			{data &&
				data.map((post) => (
					<PostList>
						<PostItem
							key={post.id}
							post={post}
						/>
					</PostList>
				))}
		</Container>
	)
}

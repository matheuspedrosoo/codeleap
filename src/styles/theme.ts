import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			background: string
			light: string
			blue: string
			danger: string
			success: string
			black: string
			overlay: string
		}
	}
}

const theme: DefaultTheme = {
	colors: {
		background: '#DDDDDD',
		light: '#FFFFFF',
		blue: '#7695EC',
		danger: '#FF5151',
		success: '#47B960',
		black: '#000000',
		overlay: 'rgba(119, 119, 119, 0.8)'
	}
}

export default theme

import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			background: string
			white: string
			blue: string
			danger: string
			success: string
			black: string
			gray50: string
			gray60: string
			gray: string
			overlay: string
		}
	}
}

const theme: DefaultTheme = {
	colors: {
		background: '#DDDDDD',
		white: '#FFFFFF',
		blue: '#7695EC',
		danger: '#FF5151',
		success: '#47B960',
		black: '#000000',
		gray50: '#CCCCCC',
		gray60: '#999999',
		gray: '#777777',
		overlay: 'rgba(119, 119, 119, 0.8)'
	}
}

export default theme

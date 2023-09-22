import type { Preview, SvelteRenderer } from '@storybook/svelte';
import { withThemeByClassName } from '@storybook/addon-themes';

import '../src/app.postcss';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	},
	decorators: [
		withThemeByClassName<SvelteRenderer>({
			themes: {
				light: '',
				dark: 'dark'
			},
			defaultTheme: 'light'
		})
	]
};

export default preview;

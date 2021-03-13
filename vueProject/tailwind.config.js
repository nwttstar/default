module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
		defaultLineHeights: true,
		standardFontWeights: true,
	},
	purge: {
		layers: ['utilities'],
		enabled: true,
		content: ['index.html','./_resources/vue/**']
	},
	prefix: '-',
	theme: {
		screens: {
			'xs': '400px',
			'sm': {'max': '768px'},
			'md': {'max': '1000px'},
			'lg': {'max': '1200px'}
		},
		colors: {
			black: '#000',
			white: '#fff',
			b: {
				1: '#fde08e',
				2: '#eee',
				3: '#de3600',
			},
			f: {
				1: '#333',
				2: '#222',
				3: '#eee',
			},
			accent: {
				1: '#000099',
				2: '#de0000',
			}
		},
		fontSize: {
			...[...Array(50)].reduce((m, _, i) => {
				m[i*2] = `${i*2}px`
				return m
			}, {}),
		},
		fontFamily: {
			display: ['メイリオ', 'sans-serif'],
			body: ['Noto Sans JP', 'Lato', 'sans-serif'],
			en: ['Lato', 'sans-serif'],
		},
		borderWidth: {
			default: '1px',
			'0': '0',
			'2': '2px',
			'4': '4px',
		},
		borderRadius: {
			'none': '0',
			'sm': '.125rem',
			default: '.25rem',
			'lg': '.5rem',
			'full': '9999px',
		},
		opacity: {
			'0': '0',
			'20': '0.2',
			'40': '0.4',
			'60': '0.6',
			'80': '0.8',
			'100': '1',
		},
		lineHeight: {
			'0' : '0',
			'flat' : '.75',
			'none' : '1',
			'tight' : '1.25',
			'relaxed' : '1.75'
		},
		inset: {
			...[...Array(52)].reduce((m, _, i) => {
				if( i < 26) {
					m[i] = `${i}px`
					return m
				} else {
					m[i*2] = `${i*2}px`
					return m
				}
			}, {}),
			...[...Array(52)].reduce((m, _, i) => {
				if( i < 26) {
					m[-i] = `-${i}px`
					return m
				} else {
					m[-i*2] = `-${i*2}px`
					return m
				}
			}, {}),
		},
		extend: {
			spacing: {
				// 1px - 25px：1px刻みで指定化
				// 26px - 100px：2px刻みでまで指定可
				// （コンパイル負担削減のため）
				...[...Array(52)].reduce((m, _, i) => {
					if( i < 26) {
						m[i] = `${i}px`
						return m
					} else {
						m[i*2] = `${i*2}px`
						return m
					}
				}, {}),
				// 任意のspacing
				// '77': '77px'
			},
		},
	},
	variants: {
	},
	plugins: [

	],
	corePlugins: {
	}
}







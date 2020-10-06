module.exports = {
  future: {
    emoveDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    layers: ['utilities'],
    enabled: true,
    content: ['../../index.html','../Resources/vue/*.vue']
  },
  prefix: '-',
  theme: {
    screens: {
      'sp': '768px',
      'pc': {'max': '769px'}
    },
    colors: {
      black: '#000',
      white: '#fff',
      b: {
        base1: '#de3618',
        base2: '#de0018',
        base3: '#de3600',
      },
      f: {
        base1: '#003618',
        base2: '#de0018',
        base3: '#de3600',
      }
    },
    fontFamily: {
      display: ['メイリオ', 'sans-serif'],
      body: ['メイリオ', 'sans-serif'],
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
    extend: {
      spacing: {
        ...[...Array(100)].reduce((m, _, i) => {
          m[i] = `${i}px`
          return m
        }, {}),
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover', 'focus']
  },
  plugins: [

  ],
  corePlugins: {
    fontFamily: false,
    fontSize: false,
    textColor: false,
    accessibility: false,
    appearance: false,
    backgroundAttachment: false,
    borderCollapse: false,
    clear: false,
    float: false,
    fontSmoothing: false,
    fontVariantNumeric: false,
  }
}







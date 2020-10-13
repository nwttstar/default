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
        base1: '#000018',
        base2: '#de0018',
        base3: '#de3600',
      }
    },
    fontSize: {
      '10': '10px',
      '12': '12px',
      '14': '14px',
      '16': '16px',
      '18': '18px',
      '20': '20px',
      '24': '24px',
      '28': '28px',
      '32': '32px',
      '36': '36px',

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
        // 1px - 25px：1px刻みで指定化
        // 26px - 100px：2px刻みでまで指定可
        // （コンパイル負担削減のため）
        ...[...Array(51)].reduce((m, _, i) => {
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







window.ENV_CONFIG = {
    // currentEnv: 'prod',
    currentEnv: 'dev',
    dev: {
      REACT_APP_ENV: 'development',
      REACT_APP_CHAIN_ID: '97',
      REACT_APP_NETWORK_URL: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      REACT_APP_GOOGLE_ANALYTICS_ID: 'G-BLDJNHC5ER',
      REACT_APP_DEV_REQUEST_URL: 'http://164.52.93.83:28001/'
    },
    prod: {
      REACT_APP_ENV: 'production',
      REACT_APP_CHAIN_ID: '56',
      REACT_APP_NETWORK_URL: 'https://bsc-dataseed.binance.org/',
      REACT_APP_GOOGLE_ANALYTICS_ID: 'G-BLDJNHC5ER',
      REACT_APP_DEV_REQUEST_URL: 'http://164.52.93.83:28005/',
      REACT_APP_PORTIS_ID: 'c0e2bf01-4b08-4fd5-ac7b-8e26b58cd236',
      REACT_APP_FORTMATIC_KEY: 'pk_live_F937DF033A1666BF'
    }
  }
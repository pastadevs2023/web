import type { NextPage } from 'next'
import Head from 'next/head'
import { FiGlobe } from 'react-icons/fi'
import { SupportedLocale, SUPPORTED_LOCALES, SwapWidget } from '@uniswap/widgets'
import BaconFloating from '../components/bacon'
// ↓↓↓ Don't forget to import the widgets' fonts! ↓↓↓
import '@uniswap/widgets/fonts.css'
// ↑↑↑
import BaconDisk from '../assets/BACONDisk.png'
import styles from '../styles/Home.module.css'
// import DocumentationCards from '../components/DocumentationCards'
import Web3Connectors from '../components/Web3Connectors'
import { useActiveProvider } from '../connectors'
import { useCallback, useRef, useState } from 'react'
import { JSON_RPC_URL, baconTokenCA } from '../constants'
import Image from 'next/image'
import { Theme } from '@uniswap/widgets'

const theme: Theme = {
  secondary: '#fbae13',
  primary: '#ffffff',
  interactive: '#702700',
  container: '#c2280d',
  module: '#e85900',
  accent: '#8E8B78',
  outline: '#930000',
  dialog: '#FFF',
  fontFamily: 'Minecraft',
  borderRadius: 0.8,
}

const TOKEN_LIST = [
  {
    name: 'Dai Stablecoin',
    address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    symbol: 'DAI',
    decimals: 18,
    chainId: 1,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
  },
  {
    name: 'Tether USD',
    address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    symbol: 'USDT',
    decimals: 6,
    chainId: 1,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
  },
  {
    name: 'USD Coin',
    address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    symbol: 'USDC',
    decimals: 6,
    chainId: 1,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
  },
  {
    name: 'BBACON',
    address: baconTokenCA,
    symbol: 'BBACON',
    decimals: 6,
    chainId: 1,
    logoURI: 'https://github.com/bbacondevs/web/blob/master/assets/BACONDisk.png?raw=true',
  },
]
const UNI = baconTokenCA

const Home: NextPage = () => {
  // When a user clicks "Connect your wallet" in the SwapWidget, this callback focuses the connectors.
  const connectors = useRef<HTMLDivElement>(null)
  const focusConnectors = useCallback(() => connectors.current?.focus(), [])

  // The provider to pass to the SwapWidget.
  // This is a Web3Provider (from @ethersproject) supplied by @web3-react; see ./connectors.ts.
  const provider = useActiveProvider()

  // The locale to pass to the SwapWidget.
  // This is a value from the SUPPORTED_LOCALES exported by @uniswap/widgets.
  const [locale, setLocale] = useState<SupportedLocale>('en-US')
  const onSelectLocale = useCallback((e) => setLocale(e.target.value), [])

  return (
    <div className={styles.container}>
      <Head>
        <title>$BBACON</title>
        <meta name="description" content="Uniswap Widgets" />
        <link rel="icon" href="/bbaico.png" />
      </Head>
      <BaconFloating count={10} />
      <main className={styles.content_container}>
        <div className={styles.hero}>
          <Image
            src={'/baconBanner.png'}
            width={500}
            height={200}
            layout="responsive"
            objectFit="contain"
            alt="bacon"
          />
          <h1> Welcome to BBACON</h1>
          <p>
            Join the $BBACON family and take a bite out of the crypto revolution, commemorating that iconic 2012 moment
            when bacon met Bitcoin. Whether you&apos;re a seasoned crypto trader seeking the next big thing or a bacon
            aficionado ready to bring home the digital bacon, $BBACON is your token. Join us as we sizzle up the crypto
            universe, one $BBACON at a time.
          </p>
        </div>
        <div className={styles.main}>
          <h1 className={styles.title}>Buy $BBACON Now!</h1>

          <div className={styles.demo}>
            <div className={styles.connectors} ref={connectors} tabIndex={-1}>
              <Web3Connectors />
            </div>
            <div className={styles.i18n}>
              <label style={{ display: 'flex' }}>
                <FiGlobe />
              </label>
              <select onChange={onSelectLocale}>
                {SUPPORTED_LOCALES.map((locale) => (
                  <option key={locale} value={locale}>
                    {locale}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.widget}>
              <SwapWidget
                jsonRpcEndpoint={JSON_RPC_URL}
                tokenList={TOKEN_LIST}
                provider={provider}
                locale={locale}
                onConnectWallet={focusConnectors}
                defaultInputTokenAddress="NATIVE"
                defaultInputAmount="1"
                defaultOutputTokenAddress={UNI}
                theme={theme}
                convenienceFee={1}
                convenienceFeeRecipient={'0x2BBc3577dec0aA8e1bd1E8F6Dd62327c903D2077'}
              />
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.socials}>
            <a href="https://etherscan.io/token/0x5dbac6aefe501ff1c0a253f9f29d353470d80b84">
              <svg
                stroke="currentColor"
                fill="white"
                strokeWidth="0"
                viewBox="0 0 320 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path>
              </svg>
            </a>
            <a href="https://twitter.com/BBACON_ERC">
              <svg
                stroke="currentColor"
                fill="white"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </a>
            <a href="https://t.me/Bbaconportal">
              <svg
                stroke="currentColor"
                fill="white"
                strokeWidth="0"
                viewBox="0 0 496 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
              </svg>
            </a>
          </div>
          <div className={styles.rights}>
            <p style={{ fontSize: '10px' }}>© 2023 BACON, All Rights Reserved</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home

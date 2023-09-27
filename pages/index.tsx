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
  secondary: '#fb13c5',
  primary: '#890000',
  interactive: '#0dc2aa',
  container: '#faf600',
  module: '#00e827',
  accent: '#ff67ff',
  outline: '#d3f110',
  dialog: '#FFF',
  fontFamily: 'Aldentica',
  borderRadius: 0.1,
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
    name: 'CopyPasta',
    address: baconTokenCA,
    symbol: 'CopyPasta',
    decimals: 6,
    chainId: 1,
    logoURI:
      'https://github.com/pastadevs2023/web/blob/3209d91235696769798d9c28b16f26640ad1eb92/public/web.png?raw=true',
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
        <title>
          $CopyPasta | What the fuck did you just fucking say about me, you little bitch? Ill have you know I graduated
          top of my class in the Navy Seals, and Ive been involved in numerous secret raids on Al-Quaeda, and I have
          over 300 confirmed kills. I am trained in gorilla warfare and Im the top sniper in the entire US armed forces.
          You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which
          has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that
          shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies
          across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm
          that wipes out the pathetic little thing you call your life. Youre fucking dead, kid. I can be anywhere,
          anytime, and I can kill you in over seven hundred ways, and thats just with my bare hands. Not only am I
          extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine
          Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you
          little shit. If only you could have known what unholy retribution your little clever comment was about to
          bring down upon you, maybe you would have held your fucking tongue. But you couldnt, you didnt, and now youre
          paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. Youre fucking
          dead, kiddo.
        </title>
        <meta
          name="description"
          content="What the fuck did you just fucking say about me, you little bitch? Ill have you know I graduated
          top of my class in the Navy Seals, and Ive been involved in numerous secret raids on Al-Quaeda, and I have
          over 300 confirmed kills. I am trained in gorilla warfare and Im the top sniper in the entire US armed
          forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes
          of which has never been seen before on this Earth, mark my fucking words. You think you can get away with
          saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network
          of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The
          storm that wipes out the pathetic little thing you call your life. Youre fucking dead, kid. I can be
          anywhere, anytime, and I can kill you in over seven hundred ways, and thats just with my bare hands. Not only
          am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States
          Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent,
          you little shit. If only you could have known what unholy retribution your little clever comment
          was about to bring down upon you, maybe you would have held your fucking tongue. But you couldnt, you didnt,
          and now youre paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it.
          Youre fucking dead, kiddo."
        />
        <link rel="icon" href="/web.png" />
      </Head>
      <BaconFloating count={10} />
      <h1 className={styles.rotate}>rotate yo phone</h1>
      <main className={styles.content_container}>
        <p className={styles.introParagraphxl}>
          I&apos;m moving different. This shit ain&apos;t nothing to me man, I&apos;m a dog. I&apos;m biting the fart
          bubbles in the bath. We smokin symbiotes. Smoking that Whoopi Goldberg South Egyptian fur Burger Deluxe Mega
          Millions scratcher skunk Bubba Kush. We smoking dung beetle. I&apos;m on 12 Vicodins smoking on Scooby-Doo
          dick. We smoking Sequoia Banshee boogers. We snorting that good Buffalo Soldier Tamara and Jordanian gibbies.
          They must have amnesia, they forgot that I&apos;m him. That Burberry Backwoods pack hitting that pussy smell
          like a Hellcat V8. We smoking shit in a glass pipe blowing the Lord&apos;s bubbles. I&apos;m sick in the head.
          I&apos;m on them Broward County Tic Tacs. I&apos;m on them Georgetown geronimos. I&apos;m on them Nashville
          nibblers. I love my margielas in the Benz truck. I&apos;ll have to stunt on them next time. I don&apos;t give
          a fuck if I go blind I don&apos;t need to see the price tag anyway. I&apos;m high on 12 Jason Bourne&apos;s
          looking to beat the cum out of a thick fresh Oak. We&apos;re smoking filtered crack you stupid piece of shit.
          I&apos;ll fuckin kill you. I&apos;m gonna call that pussy The Matrix cause I&apos;m in this bitch and I
          can&apos;t get out. l Last guy who ran off on the pack got choked out by some Givenchy gloves. The last thing
          he ever saw was the price tag on them. Slowly faded into darkness and I let the archangels take him. I need
          more Sequoia Banshee boogers. Don&apos;t be shy girl I love me some pastrami mud flaps. I&apos;m moving like
          French Montana - HUH?? Welcome to the Cream Kingdom bitch. Open up Blac Chyna. I drink her piss out of another
          man&apos;s balls. My shooter a crackhead - he looked like Woody Harrelson. You ain&apos;t seen 10 bands in
          your life bitch. Reach for my neck you&apos;ll get turned into an example. Y&apos;all gotta stop playing with
          me. Man I threw diamonds at the strip clubs under the Great Pyramids. I pushed the camel through the eye of a
          needle. This shit ain&apos;t nothing to me man. I Tied the UPS to the back of a trackhawk and dragged them
          around the block for 24 hours. Motherfucker looked like a Resident Evil have campaign extra after we was done
          with them. Ops wanted some initiative blew up their entire quadrant. I&apos;m moving like Oppenheimer. She
          dropped that ass on me from an aggregarious angle. They thought I was Steven Wallace. Top shelf Zaza disrupted
          my circadian rhythm. I have seen the Magna Carta. I&apos;ve seen the Eye of Horus. I was flipping bricks for
          Manza Musa before y&apos;all even became a type 1 civilization. This shit ain&apos;t nothing to me you stupid
          piece of shit. Step the wrong way and you will perish. That pussy feel like Biscoff butter. You think I care
          about this shit? Ask me if I care about this shit, because I don&apos;t give a shit. If I had a dollar for
          every time they said I gave a shit, I&apos;d be broke, cause I don&apos;t give a shit. My bitch look like
          David Hasselhoff. I balled so hard they thought I was a fuckin nut sack. This shit ain&apos;t nothing to me
          man. I&apos;ll kill you you stupid piece of shit
        </p>
        <div className={styles.hero}>
          <div className={styles.circlecontainer}>
            <Image src={'/clogo.png'} width={1024} height={1024} layout="responsive" objectFit="cover" alt="logo" />
          </div>
          <h1> Welcome to CopyPasta</h1>
          <Image
            src={'/memes/pastaeat.jpg'}
            width={500}
            height={200}
            layout="responsive"
            objectFit="contain"
            alt="bacon"
          />
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
                convenienceFeeRecipient={'0x362Dc90C1C97CcE0ff5f86Ac151c486B995eb7a9'}
              />
            </div>
          </div>
        </div>
        <div className={styles.main}>
          <h1 className={styles.title}>HOW TO BUY</h1>
          <div className={styles.image}>
            <Image
              src="/memes/howtobuy.jpg"
              width={300}
              height={279}
              alt="if you dont know how you shouldnt buy this"
            />
          </div>
          <p className={styles.introParagraph}>
            To be fair, you have to have a very high IQ to understand Bitcoin. Its future applications are extremely
            subtle, and without a solid grasp of computing and economics most of its possible functions will go over a
            typical investor&apos;s head. There&apos;s also Sitoshis&apos;s free market outlook, which is deftly woven
            into his creation- his personal philosophy draws heavily from Robert Malthus, for instance. The shills
            understand this stuff; they have the intellectual capacity to truly appreciate the depths of this coin, to
            realise that it is not just speculation - it says something deep about LIFE. As a consequence people who
            dislike Bitcoin truly ARE idiots- of course they wouldn&apos;t appreciate, for instance, the brilliance in
            Satoshi&apos;s brilliant programming method - the &quot;Blockchain,&quot; which itself is a cryptic
            reference to Haber and Stornetta&apos;s Merkle trees. I&apos;m smirking right now just imagining one of
            those addlepated simpletons scratching their heads in confusion as our lord and savior&apos;s genius wit
            unfolds itself on their computer screens. What fools.. how I pity them. 😂 And yes, by the way, i DO have a
            Bitcoin tattoo. And no, you cannot see it. It&apos;s for the ladies&apos; eyes only- and even then they have
            to demonstrate that they&apos;re within 5 IQ points of my own (preferably lower) beforehand. Nothin
            personnel kid 😎
          </p>
          <h1 className={styles.title}>HOW WERE FEELING</h1>
          <p className={styles.introParagraph}>
            I can&apos;t do this anymore. I invested my entire life savings, my entire FAmILY&apos;s LIFE SAVINGS into
            fucking bitcoin and it went to shit. YOU GUYS TOLD ME IT WAS THE RIGHT DECISION, HOW WAS I SUPPOSED TO KNOW
            IT WOULD FALL SO QUICKLY my family is essentially homeless now, i have no other funds and i can&apos;t tell
            my wife what i did. she doesnt even like crypto. its over boys. i hope hell isnt as bad as they make it out
            to be
          </p>
          <h1 className={styles.title}>WHAT WERE DOING</h1>
          <div className={styles.image}>
            <Image
              src="/memes/copypasta.jpg"
              width={300}
              height={279}
              alt="if you dont know how you shouldnt buy this"
            />
          </div>
          <p className={styles.introParagraph}>
            Well, believe me, it&apos;s crystal clear: NFT&apos;s are racist. You don&apos;t believe this, huh? Well,
            I&apos;m going to explain it to you. First off, the name. The The Bored Ape Yacht Club wants you to believe
            that &quot;NFT&quot; stands for Non-fungible token. This name might be an accurate name for the images of
            apes that are sold, but it also stands for &quot;n****r(s) for trade&quot;. This is absolutely not okay.
            NFT&apos;s have been fully covered on national news and they usual tell you that images of apes are being
            traded. What they don&apos;t tell you, is that those apes usually have big lips, golden chains and rings and
            contains an awful lot of stereotypes. NFT&apos;s use apes as a methaphor for the stereotypical black
            communty. This can be explained: NFT&apos;s were invented on 4chan. 4chan is the breedplace of 99% of evil
            on the internet. The /pol/ communty, already infamous for it&apos;s racism and anti-semitism. created
            NFT&apos;s because they want to insult black people. Using complex trading methods on specific websites on
            the internet and needing a fast connection to the world wide web they try to exclude as many black people
            (mainly the African continent). It even goes beyond that. Neo-Nazi artists, like Ben Garisson and StoneToss
            have recently used this way of trading to sell their art full of hate. They can do this because NFT&apos;s
            are completely anonymous. Republicans and right-wingers say they screenshot NFT&apos;s. This is not an
            harmless joke, they try to demonstrate how &apos;worthless&apos; NFT&apos;s (abbreviation for: N****r(s) for
            Trade) are. Stop NFT&apos;s. Make a hashtag and cancel &apos;em. Cut off people that trade NFT&apos;s. Stop
            racism.
          </p>
        </div>
        <div className={styles.footer}>
          <div className={styles.socials}>
            <a href="https://etherscan.io/token/0x1F1cfB301Ae53E8D10aAaC39aB76c4E177C559e2">
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
            <a href="https://twitter.com/CopyPasta_ERC">
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
            <a href="https://t.me/copypasta_portal">
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
            <p style={{ fontSize: '10px' }}>0x1F1cfB301Ae53E8D10aAaC39aB76c4E177C559e2</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home

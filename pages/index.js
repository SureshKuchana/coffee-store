import Head from 'next/head'
import Banner from '../components/Banner'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Card from '../components/Card'
import coffeeStoresData from '../data/coffee-store.json'

export async function getStaticProps(context){
  console.log(" getStaticProps") 
  return {
    props : {
      coffeeStores : coffeeStoresData,
    }
  }
}

export default function Home(props) {
  console.log(" coffeeStoresData ",coffeeStoresData.length)
  const handleOnBannerBtnClick = () => {
    console.log(" hi there");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner handleClick={handleOnBannerBtnClick} buttonText="View stores nearby"/>
        <div className={styles.heroImage}>
          <Image src="/static/hero.png" width={700} height={400}/>
        </div>
        {
          props?.coffeeStores.length > 0 &&
          <>
          <h2 className={styles.heading2}>Tornoto Stores</h2>
          <div className={styles.cardLayout}>
            {props?.coffeeStores.map((coffeStore) => {
              return(
                  <Card key={coffeStore.id} className={styles.card} name={coffeStore.name} imgUrl={coffeStore.imgUrl} href={`/coffee-store/${coffeStore.id}`}/>
              )
            })}
            {/* <Card className={styles.card} name="DarkHouse Coffee" imgUrl="/static/hero.png" href="/coffee-store/darkhorse-coffee"/>
            <Card className={styles.card} name="DarkHouse Coffee" imgUrl="/static/hero.png" href="/coffee-store/darkhorse-coffee"/> */}
          </div>
          </>
        }
      </main>
    </div>
  )
}

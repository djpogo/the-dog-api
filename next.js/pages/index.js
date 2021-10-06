import Link from 'next/link';

import Image from './components/Image';
import styles from '../styles/Home.module.css'

export default function Home({ dogs }) {
  return (
      <main className={styles.main}>
        <ul className={styles.ul}>
        {dogs.map(dog => (
          <li key={dog.id} className={styles.li}>
            <Link href={`/dog/${dog.id}`}>
              <a>
                <Image
                  cover
                  src={dog.url}
                  alt={dog.id}
                />
              </a>
            </Link>
          </li>
        ))}
        </ul>
      </main>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const response = await fetch('https://api.thedogapi.com/v1/images/search?limit=20');
  let dogs = [];
  if (response.ok) {
    dogs = await response.json();
  }

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      dogs,
    },
  }
}
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { PostCard, Categories, PostWidget } from '../components/'
import { getPosts } from '../services'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ posts }) {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <div className="container mx-auto px-10 mb-8">
        <Head>
          <title>Nick Hoefle Food and Cooking</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post, index) => <PostCard post={post.node} key={post.title} />)}
          </div>
          <div className="lg:col-span-4 col-4-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
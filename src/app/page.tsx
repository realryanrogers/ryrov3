import Image from 'next/image'
import styles from './page.module.css'

import Link from 'next/link';
import getPostMetaData from '@/components/getPostMetaData';
import PostPreview from '@/components/PostPreview';




const HomePage = () => {

  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ))

  return(
    <div>
      {postPreviews}
    </div>
  )
}

export default HomePage;
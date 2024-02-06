import Image from 'next/image'
import styles from './page.module.css'

import Link from 'next/link';
import getPostMetaData from '@/components/getPostMetaData';
import PostPreview from '@/components/PostPreview';
import getNoteMetaData from '@/components/getNoteMetaData';






const HomePage = () => {
  const postMetaData = getPostMetaData();
  const noteMetaData = getNoteMetaData();
    const notePreviews = noteMetaData.sort((a, b) => {
    return new Date(b.published).getTime() - new Date(a.published).getTime()
  }).slice(0,5).map((note) => (
    
    <li className="frontPageList" key={note.slug}><Link href={`library/${note.slug}`}>{note.title}</Link></li>
    
  ))
  
  const postPreviews = postMetaData.filter((post) => {
  return post.category === "Writing" ? true : false
}).sort((a, b) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime()
}).slice(0,5).map((post) => (
  
  <li className="frontPageList" key={post.slug}><Link href={`posts/${post.slug}`}>{post.title}</Link></li>
  
))
  return(
    <div>
      <h2>Hello! I'm Ryan 👋</h2>
      <h3>I'm a game dev, amatuer chef, perpetual learner, and wannabe writer.</h3>
      <br/>
      <br/>
      <p className="frontPageList">Latest Posts</p>
      <div>
        <ul className='frontPageList'>{postPreviews}</ul>
        <Link href="posts" className="seeAllLink">{`See All ->`}</Link>
      </div>
      <p className="frontPageList">Latest Library Additions</p>
      <div>
        <ul className='frontPageList'>{notePreviews}</ul>
        <Link href="library" className="seeAllLink">{`See All ->`}</Link>
      </div>
    </div>
  )
}

export default HomePage;
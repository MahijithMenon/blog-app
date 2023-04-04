import Navbar from '@/components/Navbar/Navbar';
import Link from 'next/link';
import { useState, useEffect } from 'react';
const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 16px',
  },

  post: {
    margin: '32px 0',
  },

  postTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },

  postExcerpt: {
    fontSize: '16px',
    marginBottom: '16px',
  },

  postDate: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '16px',
  },

  postContent: {
    lineHeight: '1.6',
    marginBottom: '32px',
  },

  comment: {
    margin: '16px 0',
  },

  commentAuthor: {
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '4px',
  },

  commentContent: {
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '16px',
  },

  commentForm: {
    marginTop: '32px',
  },

  commentFormField: {
    display: 'block',
    marginBottom: '16px',
  },

  commentFormInput: {
    width: '100%',
    padding: '8px',
    fontSize: '16px',
    lineHeight: '1.6',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },

  commentFormSubmit: {
    display: 'block',
    padding: '8px 16px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#333',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

const posts = [
  {
    id: 1,
    title: 'First Post',
    excerpt: 'This is the excerpt for the first post',
    date: '2022-01-01',
    content: 'This is the content for the first post',
  },
  {
    id: 2,
    title: 'Second Post',
    excerpt: 'This is the excerpt for the second post',
    date: '2022-01-02',
    content: 'This is the content for the second post',
  },
  {
    id: 3,
    title: 'Third Post',
    excerpt: 'This is the excerpt for the third post',
    date: '2022-01-03',
    content: 'This is the content for the third post',
  },
];

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);
  const [displayPosts, setDisplayPosts] = useState([]);

  useEffect(() => {
    const startIndex = (page - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    setDisplayPosts(posts.slice(startIndex, endIndex));
  }, [page, postsPerPage]);

  // useEffect(() => {
  //   const startIndex = (page - 1) * postsPerPage;
  //   const endIndex = startIndex + postsPerPage;
  //   setDisplayPosts(posts.slice(startIndex, endIndex));
  // }, [page, posts, postsPerPage]);

  return (
    <div className={styles.container}>
      <Navbar />
      {displayPosts.map((post) => (
        <div className={styles.post} key={post.id}>
          <h2 className={styles.postTitle}>{post.title}</h2>
          <p className={styles.postExcerpt}>{post.excerpt}</p>
          <p className={styles.postDate}>{post.date}</p>
          <Link href={`/post/${post.id}`}>
            <p>Read more</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

// export const getStaticProps = async () => {
//   const posts = await getPaginatedPosts();
//   return {
//     props: { posts },
//   };
// };

export default HomePage;

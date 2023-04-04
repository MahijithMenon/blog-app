import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container">
      <h1 className="title">Blog Post #{id}</h1>
      <div className="content">
        <p>This is the content of the blog post with id {id}.</p>
      </div>
    </div>
  );
};

export default Post;

// export async function getStaticPaths() {
//   // Fetch a list of all the post IDs
//   const res = await fetch('https://example.com/posts');
//   const posts = await res.json();
//   const paths = posts.map((post) => ({
//     params: { id: post.id.toString() },
//   }));

//   return { paths, fallback: true };
// }

// export async function getStaticProps({ params }) {
//   // Fetch the post data based on the ID in the URL
//   const res = await fetch(`https://example.com/posts/${params.id}`);
//   const post = await res.json();

//   return { props: { post } };
// }

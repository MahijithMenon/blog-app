import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const CreatePostPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const { data: session, loading } = useSession();
  const router = useRouter();

  const handleCreatePost = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);

    if (image) {
      formData.append('image', image);
    }

    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
      body: formData,
    });

    if (response.ok) {
      router.push('/');
    } else {
      console.error('Failed to create post');
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1
        style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem' }}
      >
        Create a new post
      </h1>
      <form
        onSubmit={handleCreatePost}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridGap: '1rem',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label
            style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
            }}
          >
            Title
          </label>
          <input
            style={{
              border: '1px solid #ccc',
              padding: '0.5rem',
              marginBottom: '1rem',
              borderRadius: '0.25rem',
            }}
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <label
            style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
            }}
          >
            Image
          </label>
          <input
            style={{
              border: '1px solid #ccc',
              padding: '0.5rem',
              marginBottom: '1rem',
              borderRadius: '0.25rem',
            }}
            type="file"
            id="image"
            name="image"
            onChange={(event) => setImage(event.target.files[0])}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label
            style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
            }}
          >
            Content
          </label>
          <ReactQuill
            value={content}
            onChange={setContent}
            modules={{
              toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                [{ header: '1' }, { header: '2' }],
                [{ list: 'ordered' }, { list: 'bullet' }],
                [{ script: 'sub' }, { script: 'super' }],
                [{ indent: '-1' }, { indent: '+1' }],
                [{ direction: 'rtl' }, { align: [] }],
                ['clean'],
              ],
            }}
            style={{
              height: '400px',
              width: '100%',
              marginBottom: '1rem',
              border: '1px solid #ccc',
              borderRadius: '0.25rem',
              padding: '0.5rem',
            }}
          />
          <button
            style={{
              backgroundColor: '#3498db',
              color: '#fff',
              fontWeight: 'bold',
              padding: '0.5rem 1rem',
              borderRadius: '0.25rem',
              alignSelf: 'flex-end',
              cursor: 'pointer',
            }}
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostPage;

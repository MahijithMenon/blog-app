import Link from 'next/link';
// import styles from './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">
          <p>My Blog</p>
        </Link>
      </div>
      <div className="links">
        <Link href="/">
          <p className="link">Homepage</p>
        </Link>
        <Link href="/create-post">
          <p className="link">Create Post</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

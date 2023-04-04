import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

export default function LoginPage() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-md shadow-md p-8">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        {!session ? (
          <>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mb-4 w-full flex items-center justify-center"
              onClick={() => signIn('google')}
            >
              <Image
                src="/google-logo.svg"
                width={24}
                height={24}
                alt="Google Logo"
                className="mr-2"
              />
              Sign in with Google
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mb-4 w-full flex items-center justify-center"
              onClick={() => signIn('facebook')}
            >
              <Image
                src="/facebook-logo.svg"
                width={24}
                height={24}
                alt="Facebook Logo"
                className="mr-2"
              />
              Sign in with Facebook
            </button>
          </>
        ) : (
          <>
            <p className="mb-4">
              You are signed in as {session.user.name} ({session.user.email})
            </p>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full flex items-center justify-center"
              onClick={() => signOut()}
            >
              Sign out
            </button>
          </>
        )}
      </div>
    </div>
  );
}

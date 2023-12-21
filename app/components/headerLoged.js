import { useRouter } from 'next/router';
import Link from 'next/link';

const HeaderLoged = () => {
  const router = useRouter();

  return (
    <header className={`bg-color-default text-color-default`}>
      <div className="container mx-auto p-4">
        <nav className="flex items-center justify-between">
          <Link href="/">
            <text className={`text-xl font-bold ${router.pathname === '/' ? 'text-blue-500' : 'text-gray-500'}`}>Home</text>
          </Link>
          <Link href="/dashboard">
            <text className={`text-xl font-bold ml-4 ${router.pathname === '/dashboard' ? 'text-blue-500' : 'text-gray-500'}`}>Dash</text>
          </Link>
          <Link href="/profile">
            <text className={`text-xl font-bold ml-4 ${router.pathname === '/profile' ? 'text-blue-500' : 'text-gray-500'}`}>Profile</text>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default HeaderLoged;
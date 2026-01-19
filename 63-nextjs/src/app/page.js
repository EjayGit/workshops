import Header from '../components/Header'
import Link from 'next/link'

// route -> '/'
// the components that go into our routing system need to be called page.js.
export default function HomePage() {
  return (
    <div>
      <h1>Hello Universe</h1>
      <Link href='/'>Home</Link>
    </div>
  );
}

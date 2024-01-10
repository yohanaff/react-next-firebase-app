import Link from "next/link";

export default function Page({ }) {
  return (
    <div>
      <Link prefetch={false} href={{
        pathname: '/[username]',
        query: { username: 'yo' },
      }}>
        <a>Yo's profile</a>
      </Link>
    </div>
  )
}
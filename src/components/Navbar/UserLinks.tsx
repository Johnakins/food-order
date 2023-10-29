'use client'

import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'

const UserLinks = () => {
    const { status } = useSession()
    return (
        <div>
            {status === "authenticated" ? (
                <div>
                    <Link href='/orders'>orders</Link>
                    <span className='ml-4 cursor-pointer' onClick={() => signOut()}>Logout</span>
                </div>
            ) : <Link href='/login'>login</Link>}
        </div>
    )
}
export default UserLinks
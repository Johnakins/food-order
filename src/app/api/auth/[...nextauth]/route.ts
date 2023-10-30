import { NextAuthOptions } from "next-auth";
import { getServerSession, User } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import NextAuth from "next-auth/next";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prismadb from "@/lib/prismadb"

declare module "next-auth" {
    interface Session {
        user: User & {
            isAdmin: Boolean
        }
    }
}
declare module "next-auth/jwt" {
    interface JWT {
        isAdmin: Boolean
    }
}

const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prismadb),
    providers: [
        GoogleProvider({
            // clientId: process.env.GOOGLE_ID as string,
            // clientSecret: process.env.GOOGLE_SECRET as string,
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async session({ token, session }) {
            if (token) {
                session.user.isAdmin = token.isAdmin
            }
            return session
        },
        async jwt({ token }) {
            const userInDb = await prismadb.user.findUnique({
                where: {
                    email: token.email!
                }
            })
            token.isAdmin = userInDb?.isAdmin!
            return token
        }

    }
}

export const getAuthSession = () => getServerSession(authOptions)

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
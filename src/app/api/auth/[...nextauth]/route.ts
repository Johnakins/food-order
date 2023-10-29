import { NextAuthOptions } from "next-auth";
import { getServerSession } from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import NextAuth from "next-auth/next";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prismadb from "@/lib/prismadb"

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
}

export const getAuthSession = () => getServerSession(authOptions)

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
import { NextRequest, NextResponse } from "next/server";
import prismadb from '../../../lib/prismadb'
import { getAuthSession } from "../auth/[...nextauth]/route";
//FETCH ALL ORDERS
export const GET = async (req: NextRequest) => {
    const session = await getAuthSession()
    if (session) {
        try {
            if (session.user.isAdmin) {
                const orders = prismadb.order.findMany()
                return new NextResponse(JSON.stringify(orders), { status: 200 })
            } else {
                const orders = prismadb.order.findMany({
                    where: {
                        userEmail: session.user.email!
                    }
                })
                return new NextResponse(JSON.stringify(orders), { status: 200 })
            }

        } catch (error) {
            return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 })
        }
    } else {
        return new NextResponse(JSON.stringify({ message: "You are not authenticated" }), { status: 401 })
    }
}

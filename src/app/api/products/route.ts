import { NextRequest, NextResponse } from "next/server";
import prismadb from '../../../lib/prismadb'
//FETCH ALL PRODUCTS
export const GET = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url)
    const cat = searchParams.get("cat")

    try {
        const categories = await prismadb.product.findMany({
            where: {
                ...(cat ? { catSlug: cat } : { isFeatured: true }),
            }
        });
        return new NextResponse(JSON.stringify(categories), { status: 200 })
    } catch (error) {
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 })
    }
} 
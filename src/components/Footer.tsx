import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 uppercase text-red-500 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl">Johnakins</Link>
            <p>© ALL RIGHTS RESERVED.</p>
            {/* Footer */}
        </div>
    );
};

export default Footer;
import React from "react";
import Link from "next/link";

function Navbar() {
    return (
        <nav className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between">
            <div>
                <Link href="/" className="text-xl font-bold">Boba Breaks</Link>
            </div>

            <div className="flex space-x-4">
                <Link href="#learn" className="px-2">Learn</Link>
                <Link href="#opportunities" className="px-2">Opportunities</Link>
                <Link href="#advice" className="px-2">Advice</Link>
            </div>
        </nav>
    );
}

export default Navbar;

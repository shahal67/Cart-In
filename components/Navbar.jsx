'use client'
import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {

    const router = useRouter();

    const [search, setSearch] = useState('')
    const cartCount = useSelector(state => state.cart.total)

    const handleSearch = (e) => {
        e.preventDefault()
        router.push(`/shop?search=${search}`)
    }

    return (
        <nav className="relative bg-white">
            <div className="mx-6">
                <div className="flex items-center justify-between max-w-7xl mx-auto py-4 transition-all">

                    <Link href="/" className="relative text-4xl font-extrabold text-slate-800 hover:scale-105 transition-transform">
                        <span className="text-brand-primary">in-</span>cart<span className="text-brand-primary text-5xl leading-0 animate-bounce-slight inline-block">.</span>
                        <p className="absolute text-xs font-bold -top-1 -right-8 px-3 p-0.5 rounded-full flex items-center gap-2 text-white bg-brand-secondary shadow-md shadow-brand-secondary/40 animate-wiggle">
                            plus
                        </p>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden sm:flex items-center gap-4 lg:gap-8 text-slate-700 font-medium">
                        <Link href="/" className="hover:text-brand-primary hover:-translate-y-0.5 transition-all">Home</Link>
                        <Link href="/shop" className="hover:text-brand-primary hover:-translate-y-0.5 transition-all">Shop</Link>
                        <Link href="/" className="hover:text-brand-primary hover:-translate-y-0.5 transition-all">About</Link>
                        <Link href="/" className="hover:text-brand-primary hover:-translate-y-0.5 transition-all">Contact</Link>

                        <form onSubmit={handleSearch} className="hidden xl:flex items-center w-xs text-sm gap-2 bg-white border-2 border-slate-100 hover:border-brand-secondary px-4 py-3 rounded-full transition-colors shadow-sm focus-within:border-brand-secondary focus-within:shadow-md focus-within:shadow-brand-secondary/20">
                            <Search size={18} className="text-brand-secondary" />
                            <input className="w-full bg-transparent outline-none placeholder-slate-400 text-slate-700" type="text" placeholder="Search products" value={search} onChange={(e) => setSearch(e.target.value)} required />
                        </form>

                        <Link href="/cart" className="relative flex items-center gap-2 text-slate-700 hover:text-brand-primary hover:scale-105 transition-all">
                            <ShoppingCart size={20} />
                            Cart
                            <button className="absolute -top-2 left-3 text-[10px] font-bold text-white bg-brand-primary size-4 rounded-full flex items-center justify-center shadow-sm shadow-brand-primary/50">{cartCount}</button>
                        </Link>

                        <button className="btn-vibrant">
                            Login
                        </button>

                    </div>

                    {/* Mobile User Button  */}
                    <div className="sm:hidden">
                        <button className="btn-vibrant px-6 py-2 text-sm">
                            Login
                        </button>
                    </div>
                </div>
            </div>
            <hr className="border-slate-100" />
        </nav>
    )
}

export default Navbar
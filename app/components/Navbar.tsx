import Link from "next/link";

export default function Navbar(){
    return (
        <>
        <div className="bg-purple-400 p-6 text-center text-3xl text-white font-bold h-25 ">
            <Link href="/">
            Home 
            </Link> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Link href="/country">
            Country
            </Link>
        </div>
        
        </>
    )
}
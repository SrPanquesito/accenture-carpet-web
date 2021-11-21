import Link from 'next/link'
import Image from 'next/image'

const navigation = [
    {title: 'Home', href: "#", activeStatus: true}
]

const HeaderSimple = () => (
    <nav className="container flex items-center py-4 mt-4 sm:mt-12 font-poppins">
        <div className="py-1">
            <Image
                src='/imgs/logo-bookmark.svg'
                width={148}
                height={25}
            />
        </div>
        <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs">
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Contact</li>
            <button className="bg-bookmark-red text-white rounded-md px-7 py-3 uppercase" type="button">Login</button>
        </ul>
    </nav>
)

export default HeaderSimple
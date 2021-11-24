import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
            <li className="cursor-pointer hover:text-bookmark-purple hover:border-b hover:border-blue-500 hover:leading-loose transition duration-300">Features</li>
            <li className="cursor-pointer hover:text-bookmark-purple hover:border-b hover:border-blue-500 hover:leading-loose transition duration-300">Pricing</li>
            <li className="cursor-pointer hover:text-bookmark-purple hover:border-b hover:border-blue-500 hover:leading-loose transition duration-300">Contact</li>
            <button className="btn bg-bookmark-red text-white hover:bg-bookmark-white hover:text-black uppercase" type="button">Login</button>
        </ul>
        <div className="flex sm:hidden flex-1 justify-end">
            <FontAwesomeIcon icon="bars" className="w-6" />
        </div>
    </nav>
)

export default HeaderSimple
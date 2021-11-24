import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FooterSimple = () => (
    <footer className="bg-bookmark-blue py-8">
        <div className="container flex flex-col md:flex-row items-center">
            <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
                <img src="./imgs/logo-bookmark-white.png" alt="" />
                <ul className="flex text-white uppercase gap-12 text-xs">
                    <li className="cursor-pointer hover:text-bookmark-red">Features</li>
                    <li className="cursor-pointer hover:text-bookmark-red">Pricing</li>
                    <li className="cursor-pointer hover:text-bookmark-red">Contact</li>
                </ul>
            </div>
            <div className="flex gap-10 mt-12 md:mt-0">
                <FontAwesomeIcon icon={['fab', 'twitter']} className="w-6 text-white text-2xl cursor-pointer hover:text-bookmark-red" />
                <FontAwesomeIcon icon={['fab', 'facebook']} className="w-6 text-white text-2xl cursor-pointer hover:text-bookmark-red" />
            </div>
        </div>
    </footer>
)

export default FooterSimple
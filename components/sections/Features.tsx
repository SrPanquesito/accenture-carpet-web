import Image from 'next/image'

const Features = () => (
    <section className="bg-bookmark-white py-20">
        {/* Heading */}
        <div className="sm:w-3/4 lg:w-3/6 mx-auto px-2">
            <h1 className="text-3xl text-center text-bookmark-blue font-medium">Features</h1>
            <p className="text-center text-bookmark-grey mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo autem, reprehenderit obcaecati, delectus dolore suscipit non consequuntur cupiditate corporis dolorem exercitationem officia aut dicta totam iusto sit accusamus, culpa ipsam!
            </p>
        </div>
        {/* Feature #1 */}
        <div className="relative mt-20 lg:mt-24">
            <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                {/* Image */}
                <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                    {/* <Image 
                        src="/imgs/illustration-features-tab-1.png" 
                        // layout="responsive"
                        width={536} 
                        height={346} 
                    /> */}
                    <img src="/imgs/illustration-features-tab-1.png" className="h-5/6 w-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" />
                </div>
                {/* Content */}
                <div className="flex flex-1 flex-col items-center lg:items-start">
                    <h1 className="text-3xl text-bookmark-blue font-medium">Bookmark in one click</h1>
                    <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum reiciendis repudiandae optio aspernatur non ipsam obcaecati ipsum at eaque labore praesentium eveniet nihil et nam iusto, nesciunt, architecto libero ad.
                    </p>
                    <button type="button" className="btn btn-purple hover:bg-bookmark-white hover:text-black">
                        More info
                    </button>
                </div>
                {/* Rounded rectangle */}
                <div className="hidden lg:block overflow-hidden bg-bookmark-purple rounded-r-full absolute h-80 w-5/12 -bottom-24 left-0"></div>
            </div>
        </div>
        {/* Feature #2 */}
        <div className="relative mt-20 lg:mt-52">
            <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
                {/* Image */}
                <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                    {/* <Image src="/imgs/illustration-features-tab-2.png" width={478} height={393} /> */}
                    <img src="/imgs/illustration-features-tab-2.png" className="h-5/6 w-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" />
                </div>
                {/* Content */}
                <div className="flex flex-1 flex-col items-center lg:items-start">
                    <h1 className="text-3xl text-bookmark-blue font-medium">Intelligent search</h1>
                    <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum reiciendis repudiandae optio aspernatur non ipsam obcaecati ipsum at eaque labore praesentium eveniet nihil et nam iusto, nesciunt, architecto libero ad.
                    </p>
                    <button type="button" className="btn btn-purple hover:bg-bookmark-white hover:text-black">
                        More info
                    </button>
                </div>
                {/* Rounded rectangle */}
                <div className="hidden lg:block overflow-hidden bg-bookmark-purple rounded-l-full absolute h-80 w-5/12 -bottom-24 right-0"></div>
            </div>
        </div>
        {/* Feature #3 */}
        <div className="relative mt-20 lg:mt-24">
            <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                {/* Image */}
                <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                    {/* <Image src="/imgs/illustration-features-tab-3.png" width={440} height={380} /> */}
                    <img src="/imgs/illustration-features-tab-3.png" className="h-5/6 w-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" />
                </div>
                {/* Content */}
                <div className="flex flex-1 flex-col items-center lg:items-start">
                    <h1 className="text-3xl text-bookmark-blue font-medium">Share your bookmarks</h1>
                    <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum reiciendis repudiandae optio aspernatur non ipsam obcaecati ipsum at eaque labore praesentium eveniet nihil et nam iusto, nesciunt, architecto libero ad.
                    </p>
                    <button type="button" className="btn btn-purple hover:bg-bookmark-white hover:text-black">
                        More info
                    </button>
                </div>
                {/* Rounded rectangle */}
                <div className="hidden lg:block overflow-hidden bg-bookmark-purple rounded-r-full absolute h-80 w-5/12 -bottom-24 left-0"></div>
            </div>
        </div>
    </section>
)

export default Features
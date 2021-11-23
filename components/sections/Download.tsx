import Image from 'next/image'

const Download = () => (
    <section className="py-20 mt-20">
        {/* Heading */}
        <div className="sm:w-3/4 lg:w-3/6 mx-auto px-2">
            <h1 className="text-3xl text-center text-bookmark-blue font-medium">Download the extension</h1>
            <p className="text-center text-bookmark-grey mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo autem, reprehenderit obcaecati, delectus dolore suscipit non consequuntur cupiditate corporis dolorem exercitationem officia aut dicta totam iusto sit accusamus, culpa ipsam!
            </p>
        </div>
        {/* Cards */}
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">
            {/* Card 1 */}
            <div className="flex flex-col rounded-md shadow-md lg:mb-16">
                <div className="p-6 flex flex-col items-center">
                    <Image src="/imgs/logo-chrome.svg" width={120} height={120} />
                    <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Add to Chrome</h3>
                    <p className="mb-2 text-bookmark-grey font-light">Minimum version 62</p>
                </div>
                <hr className="border-b border-bookmark-white" />
                <div className="flex p-6">
                    <button type="button" className="btn btn-purple hover:bg-bookmark-white hover:text-black flex-1">
                        Add & Install Extension
                    </button>
                </div>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col rounded-md shadow-md lg:my-8">
                <div className="p-6 flex flex-col items-center">
                    <Image src="/imgs/logo-firefox.svg" width={120} height={120} />
                    <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Add to Firefox</h3>
                    <p className="mb-2 text-bookmark-grey font-light">Minimum version 62</p>
                </div>
                <hr className="border-b border-bookmark-white" />
                <div className="flex p-6">
                    <button type="button" className="btn btn-purple hover:bg-bookmark-white hover:text-black flex-1">
                        Add & Install Extension
                    </button>
                </div>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col rounded-md shadow-md lg:mt-16">
                <div className="p-6 flex flex-col items-center">
                    <Image src="/imgs/logo-opera.svg" width={120} height={120} />
                    <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Add to Opera</h3>
                    <p className="mb-2 text-bookmark-grey font-light">Minimum version 62</p>
                </div>
                <hr className="border-b border-bookmark-white" />
                <div className="flex p-6">
                    <button type="button" className="btn btn-purple hover:bg-bookmark-white hover:text-black flex-1">
                        Add & Install Extension
                    </button>
                </div>
            </div>
        </div>
    </section>
)

export default Download
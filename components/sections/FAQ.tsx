import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function FAQ() {
    return (
        <section className="bg-bookmark-white py-20">
            <div className="container">
                {/* Heading */}
                <div className="sm:w-3/4 lg:w-3/6 mx-auto px-2">
                    <h1 className="text-3xl text-center text-bookmark-blue font-medium">Frequently Asked Questions</h1>
                    <p className="text-center text-bookmark-grey mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo autem, reprehenderit obcaecati, delectus dolore suscipit non consequuntur cupiditate corporis dolorem exercitationem officia aut dicta totam iusto sit accusamus, culpa ipsam!
                    </p>
                </div>
                {/* FAQ Items */}
                <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
                    <div className="flex items-center border-b py-4">
                        <span className="flex-1">What is a Bookmark?</span>
                        <FontAwesomeIcon icon="chevron-down" className="w-6 text-bookmark-purple" />
                    </div>
                    <div className="flex items-center border-b py-4">
                        <span className="flex-1">How can I change my current bookmark?</span>
                        <FontAwesomeIcon icon="chevron-down" className="w-6 text-bookmark-purple" />
                    </div>
                    <div className="flex items-center border-b py-4">
                        <span className="flex-1">Is there a mobile app?</span>
                        <FontAwesomeIcon icon="chevron-down" className="w-6 text-bookmark-purple" />
                    </div>
                    <button type="button" className="flex self-center mt-12 btn btn-purple hover:bg-bookmark-white hover:text-black">
                        More info
                    </button>
                </div>
            </div>
        </section>
    )
}
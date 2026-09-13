import banner from '../assets/banner-stack.png';

const Banner = () => {
    return (
        <section className="container mx-auto px-6 flex flex-col lg:flex-row justify-between items-center py-8 lg:py-2">

            <div className="text-center lg:text-left">

                <h1 className="text-[28px] lg:text-[60px] font-extrabold leading-none">
                    <span className="block text-[#111827]">
                        Build Your Ideal
                    </span>

                    <span className="block bg-[linear-gradient(90deg,#FF5722_0%,#D81B7E_50%,#7C3AED_100%)] bg-clip-text text-transparent leading-[1.30]">
                        Development Stack
                    </span>
                </h1>

                <p className="max-w-xl mx-auto lg:mx-0 mt-6">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that
                    fits your next project.
                </p>

                <div className="flex justify-center lg:justify-start gap-3 mt-6">

                    <button className="
                    bg-[linear-gradient(90deg,#FF5722_0%,#D81B7E_50%,#7C3AED_100%)]
                    hover:bg-[linear-gradient(90deg,#E64A19_0%,#C2185B_50%,#6D28D9_100%)]
                    text-white
                    px-5
                    py-3
                    rounded-lg
                    font-semibol
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                    ">
                        Explore Technologies
                    </button>

                    <button className="
                        border
                        border-gray-300
                        text-gray-700
                        px-5
                        py-3
                        rounded-lg
                        hover:text-[#db2777]
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-lg
                    ">
                        Learn More
                    </button>

                </div>

            </div>

            <div className="mt-8 lg:mt-0">
                <img className="w-75 lg:w-125" src={banner} alt="Dev Stack" />
            </div>

        </section>
    );
};

export default Banner;
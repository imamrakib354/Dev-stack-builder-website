import banner from '../assets/banner-stack.png';

const Banner = () => {
    return (
        <section className="container mx-auto px-6 flex justify-between items-center py-16">

            <div>

                <h1 className="text-[60px] font-extrabold leading-none">
                    <span className="block text-[#111827]">
                        Build Your Ideal
                    </span>

                    <span className="block bg-[linear-gradient(90deg,#FF5722_0%,#D81B7E_50%,#7C3AED_100%)] bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h1>

                <p className="max-w-xl mt-6">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that
                    fits your next project.
                </p>

                <div className="flex gap-3 mt-6">

                    <button className="
                        bg-[linear-gradient(90deg,#FF5722_0%,#D81B7E_50%,#7C3AED_100%)]
                        text-white
                        px-5
                        py-3
                        rounded-lg
                        font-semibold
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
                    ">
                        Learn More
                    </button>

                </div>

            </div>

            <div>
                <img src={banner} alt="Dev Stack" />
            </div>

        </section>
    );
};

export default Banner;
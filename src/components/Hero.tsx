import BannerStack from "../assets/banner-stack.png";

const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12">
        <div className="max-w-xl text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Build Your Ideal
            <br />
            <span className="text-gradient-brand">Development Stack</span>
            </h1>

            <p className="mt-6 text-gray-500 text-base md:text-lg leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
            </p>

            <div className="mt-8 flex items-center justify-center md:justify-start gap-3 md:gap-4">
            <a href="#technologies" className="bg-gradient-brand text-white font-semibold px-4 py-2.5 md:px-6 md:py-3 rounded-lg text-sm md:text-base hover:opacity-90 transition-opacity">
                Explore Technologies
            </a>
            <a href="#learn-more" className="border border-gray-300 text-gray-700 font-semibold px-4 py-2.5 md:px-6 md:py-3 rounded-lg text-sm md:text-base hover:border-gray-400 transition-colors">
                Learn More
            </a>
            </div>
        </div>

        <div className="flex-shrink-0">
            <img
            src={BannerStack}
            alt="Development stack illustration"
            className="w-64 sm:w-80 md:w-[420px]"
            />
        </div>
        </section>
    );
};

export default Hero;
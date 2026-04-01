import BannerImage from "../assets/banner.png";
import { CiPlay1 } from "react-icons/ci";

const Banner = () => {
    return (
        <div className="relative min-h-162.5 flex items-center  overflow-hidden">
            <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
                {/* Left Content */}
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 bg-[#E1E7FF] text-sm font-medium px-5 py-2 rounded-full">
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4F39F6] to-[#9514FA] ">✨ New AI Powered Tools Available</span>
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter">
                        Super Charge Your
                        <br />
                        <span>
                            Digital Workflow
                        </span>
                    </h1>

                    <p className="text-lg text-zinc-500 max-w-lg">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.

                        Explore Products

                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                    <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA]  rounded-full text-white">Explore Products</button>
                    <button className="btn btn-outline border-violet-400 text-transparent bg-clip-text bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full"><CiPlay1 className="text-violet-400 text-2xl font-semibold"/> Watch Demo</button>
                    </div>

                </div>

                {/* Right Image */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative">
                        <img
                            className="relative h-130 lg:w-auto w-72 object-contain drop-shadow-2xl rounded-3xl"
                            src={BannerImage}
                            alt="AI Models Banner"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
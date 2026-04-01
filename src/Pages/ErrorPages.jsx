import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Lottie from "lottie-react";
import { Link } from "react-router";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const ErrorPages = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center py-12">
        <div className="w-full max-w-3xl">
          <DotLottieReact loop autoplay src="/Error.lottie" />
        </div>
        <div className="px-3 md:px-0 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable. Let's get you back on track!
          </p>

          <Link to="/">
            <button className="btn btn-primary text-white font-bold text-lg py-5 px-6 rounded-lg transition-all hover:shadow-xl">
              Take Me Home
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPages;

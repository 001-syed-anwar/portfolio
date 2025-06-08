import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from '@/assets/images/grain.jpg';

export const ContactSection = () => {
  return (
    <div id="contact" className="py-20 px-4 md:px-6 lg:px-20">
      <div className="relative z-0 overflow-hidden bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-800 py-8 px-10 rounded-3xl text-center">
        <div className='absolute inset-0 opacity-5 -z-10' style={{ backgroundImage: `url(${grainImage.src})` }} />
        <div className="flex flex-col gap-8 md:gap-16 justify-center items-center md:flex-row">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl">You can reach me over here!</h2>
            <p className="text-sm mt-2 md:text-base">
              Ready for any project collaboration or To be Hired in your company.
            </p>
          </div>
          <div>
            <button className="text-white border border-gray-950 bg-gray-800 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max">
              <span>Contact Me</span>
              <ArrowUpRightIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

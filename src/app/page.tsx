export default function Home() {
  return (
    <>
      <div className="px-2 pt-12 sm:px-5 md:px-10 md:py-12 lg:px-14">
        <h2 className="after-effect font-sans text-xl after:left-52">Hi!</h2>
        <div className="grid-cols-12 items-center pt-4 md:gap-10 md:pt-[30px] lg:grid ">
          <div className="col-span-12 space-y-2.5">
            <div className="lg:mr-16">
              <p className="leading-7 text-gray-500 dark:text-gray-100">
                Im Creative Director and UI/UX Designer from Sydney, Australia, working in web
                development and print media. I enjoy turning complex problems into simple, beautiful
                and intuitive designs.
              </p>
              <p className="mt-2.5 leading-7 text-gray-500 dark:text-gray-100">
                My aim is to bring across your message and identity in the most creative way. I
                created web design for many famous brand companies.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="px-2 pb-12 sm:px-5 md:px-10 lg:px-14 ">
        <h3 className="pb-5 text-[35px] font-medium dark:text-white">What I do!</h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2 ">
          <div className="p-10 dark:bg-transparent">
            {/* <img
              alt="icon"
              src="/images/icons/icon-1.svg"
              width="40"
              height="40"
              decoding="async"
              data-nimg="1"
              className="w-10 h-10 object-contain block"
              loading="lazy"
            /> */}
            <div className="space-y-2 break-all">
              <h3 className="text-xl font-semibold dark:text-white">Ui/Ux Design</h3>
              <p className=" leading-8 text-gray-500 dark:text-[#A6A6A6]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
              </p>
            </div>
          </div>
          <div className="p-10 dark:bg-transparent">
            {/* <img
              alt="icon"
              src="/images/icons/icon-2.svg"
              width="40"
              height="40"
              decoding="async"
              data-nimg="1"
              className="w-10 h-10 object-contain block"
              loading="lazy"
            /> */}
            <div className="space-y-2 break-all">
              <h3 className="text-xl font-semibold dark:text-white">App Development</h3>
              <p className=" leading-8 text-gray-500 dark:text-[#A6A6A6]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
              </p>
            </div>
          </div>
          <div className="p-10 dark:bg-transparent">
            {/* <img
              alt="icon"
              src="/images/icons/icon-3.svg"
              width="40"
              height="40"
              decoding="async"
              data-nimg="1"
              className="w-10 h-10 object-contain block"
              loading="lazy"
            /> */}
            <div className="space-y-2 break-all">
              <h3 className="text-xl font-semibold dark:text-white">Photography</h3>
              <p className=" leading-8 text-gray-500 dark:text-[#A6A6A6]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
              </p>
            </div>
          </div>
          <div className="p-10 dark:bg-transparent">
            {/* <img
              alt="icon"
              src="/images/icons/icon-4.svg"
              width="40"
              height="40"
              decoding="async"
              data-nimg="1"
              className="w-10 h-10 object-contain block"
              loading="lazy"
            /> */}
            <div className="space-y-2 break-all">
              <h3 className="text-xl font-semibold dark:text-white">Photography</h3>
              <p className=" leading-8 text-gray-500 dark:text-[#A6A6A6]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

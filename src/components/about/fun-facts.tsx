const FunFacts = () => {
  return (
    <section className="bg-neutral-100 px-8 py-32 md:px-24">
      <div className="-m-4 flex flex-wrap">
        <div className="w-full p-4 lg:w-1/2">
          <p className="mb-6 font-medium tracking-tight text-gray-700">
            Fun facts
          </p>
          <h1 className="max-w-xs font-heading text-4xl font-medium tracking-tight md:max-w-md md:text-6xl">
            Well established & experienced in many fields.
          </h1>
        </div>
        <div className="w-full p-4 lg:w-1/2">
          <div className="flex flex-wrap gap-6 lg:justify-end">
            <div>
              <div className="relative mb-4 h-[460px] w-20 rounded-full bg-gray-50">
                <div className="absolute bottom-0 left-0 right-0">
                  <div className="h-80 rounded-full bg-black">
                    <p
                      className="absolute bottom-20 left-1/2 -translate-x-1/2 -rotate-90 transform whitespace-nowrap font-medium tracking-tight text-white"
                      data-last-active-input=""
                    >
                      Realized projects
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-center text-2xl font-medium tracking-tight">
                70%
              </p>
            </div>
            <div>
              <div className="relative mb-4 h-[460px] w-20 rounded-full bg-gray-50">
                <div className="absolute bottom-0 left-0 right-0">
                  <div className="h-56 rounded-full bg-black">
                    <p className="absolute bottom-20 left-1/2 -translate-x-1/2 -rotate-90 transform whitespace-nowrap font-medium tracking-tight text-white">
                      Regional offices
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-center text-2xl font-medium tracking-tight">
                45%
              </p>
            </div>
            <div>
              <div className="relative mb-4 h-[460px] w-20 rounded-full bg-gray-50">
                <div className="absolute bottom-0 left-0 right-0">
                  <div className="h-96 rounded-full bg-orange-500">
                    <p className="absolute bottom-20 left-1/2 -translate-x-1/2 -rotate-90 transform whitespace-nowrap font-medium tracking-tight text-white">
                      Team members
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-center text-2xl font-medium tracking-tight">
                25+
              </p>
            </div>
            <div>
              <div className="relative mb-4 h-[460px] w-20 rounded-full bg-gray-50">
                <div className="absolute bottom-0 left-0 right-0">
                  <div className="h-64 rounded-full bg-orange-500">
                    <p className="absolute bottom-20 left-1/2 -translate-x-1/2 -rotate-90 transform whitespace-nowrap font-medium tracking-tight text-white">
                      Year of experiences
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-center text-2xl font-medium tracking-tight">
                15
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFacts;

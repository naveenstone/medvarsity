
const CourseDetails = () => (
    <div className="flex justify-between items-center w-[1141px] h-[620px]">
      <div className="flex flex-col justify-between items-start w-[590px] h-[500px]">
        <div className="flex justify-between items-center w-[180px] h-10">
          <div className="flex flex-col justify-center items-center w-10 h-10 rounded-[40px] bg-white">
            <img
              width="20px"
              height="20px"
              src="./svg/course/SvgAsset1.svg"
              alt="Svg Asset 1"
            />
          </div>
          <div className="flex flex-row justify-center items-center pt-1 pr-6 pb-1 pl-6 rounded-lg border-red-300 border-solid w-[122px] h-10 bg-white">
            <p className="font-sf-pro-display text-base whitespace-nowrap w-[74px] text-neutral-700 text-opacity-100 leading-5 font-medium">
              Fellowship
            </p>
          </div>
        </div>
        <div className="ml-0.5 flex flex-col justify-between items-start w-[588px] h-[396px]">
          <div className="flex flex-col justify-between items-start w-[588px] h-56">
            <div className="flex flex-col   gap-6 w-[588px] h-[187px]">
              <p className="font-sf-pro-display text-4xl w-[650px] text-zinc-800 text-opacity-100 leading-10 font-bold">
                Fellowship in Critical Care Medicine - 2021 Edition
              </p>
              <p className="font-sf-pro-display text-lg w-[600px] h-14 text-neutral-700 text-opacity-100 leading-6 font-normal">
                An opportunity to learn new courses online just by one click
                Certificate Course in Vaccine Administration
              </p>
            </div>
            <img
              width="109.5px"
              height="22px"
              src="./svg/course/SvgAsset2.svg"
              alt="Svg Asset 2"
            />
          </div>
          <div className="flex justify-between items-center w-[280px] h-[51px]">
            <div className="flex flex-col justify-between items-start pt-1 pb-0.5 pl-px w-[115px] h-[51px]">
              <p className="font-sf-pro-display text-sm whitespace-nowrap text-slate-600 text-opacity-100 leading-5 font-medium">
                Next Batch from
              </p>
              <p className="font-sf-pro-display text-lg whitespace-nowrap text-neutral-700 text-opacity-100 leading-6 font-bold pt-2">
                25/06/2022
              </p>
            </div>
            <div className="flex flex-col justify-between items-start pt-1 pb-0.5 pl-px w-[133px] h-[51px]">
              <p className="font-sf-pro-display text-sm whitespace-nowrap text-slate-600 text-opacity-100 leading-5 font-medium">
                Course Price
              </p>
              <p className="font-sf-pro-display text-lg whitespace-nowrap text-neutral-700 text-opacity-100 leading-10 font-bold">
                ₹ 14,799
              </p>
            </div>
          </div>
          <div className="flex flex-row   gap-4 w-[449px] h-12">
            <div className="flex flex-col justify-center items-center rounded-[30px] w-[186px] h-12 bg-orange-500">
              <p className="font-sf-pro-display text-sm whitespace-nowrap text-white text-opacity-100 leading-5 font-bold">
                Enquiry Now
              </p>
            </div>
            <div className="flex flex-col justify-center items-center rounded-[100px] w-[119px] h-12 bg-white">
              <p className="font-sf-pro-display text-sm whitespace-nowrap text-stone-800 text-opacity-100 leading-5 font-medium">
                Buy Now
              </p>
            </div>
            <div className="flex flex-col justify-center items-center w-12 h-12 rounded-[61px] bg-white">
              <img
                width="24px"
                height="24px"
                src="./svg/course/SvgAsset3.svg"
                alt="Svg Asset 3"
              />
            </div>
            <div className="flex flex-col justify-center items-center w-12 h-12 rounded-[40px] bg-white">
              <img
                width="24px"
                height="24px"
                src="./svg/course/SvgAsset4.svg"
                alt="Svg Asset 4"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center rounded-3xl bg-slate-400 items-center w-[350px] h-[500px]">
        <div>
          <img
            width="50px"
            height="50px"
            src="./svg/course/SvgAsset5.svg"
            alt="Svg Asset 5"
          />
        </div>
      </div>
    </div>
  );
  
  export default CourseDetails;
  
const Footer = () => (
    <div className="relative w-full h-[124px]">
      <div className="absolute top-10 flex flex-col justify-center items-center w-full h-[84px] bg-slate-800">
        <div className="flex justify-between items-center w-[1042px] h-[72px]">
          <img
            src="./images/Person.png"
            alt="Image Asset 1"
            width="72px"
            height="72px"
          />
          <p className="font-sf-pro-display text-base whitespace-nowrap text-white text-opacity-100 leading-5 font-semibold">
            IT’S REALLY EASY TO CONNECT WITH US.
          </p>
          <div className="flex flex-col justify-center items-center rounded-[30px] w-[186px] h-10 bg-orange-500">
            <p className="font-sf-pro-display text-sm whitespace-nowrap text-white text-opacity-100 leading-5 font-bold">
              Enquiry Now
            </p>
          </div>
          <div className="flex flex-row justify-center items-center gap-8 w-[184px] h-6">
            <div className="flex justify-between items-center pr-0.5 w-[151px] h-6">
              <img
                width="24px"
                height="24px"
                src="./svg/footer/SvgAsset1.svg"
                alt="Svg Asset 1"
              />
              <p className="font-sf-pro-display text-base whitespace-nowrap text-white text-opacity-100 leading-5 font-normal">
                +91 7680872011
              </p>
            </div>
            <div className="w-px h-6 bg-slate-400"> </div>
          </div>
          <div className="flex justify-between items-center pr-px w-40 h-6">
            <img
              width="24px"
              height="24px"
              src="./svg/footer/SvgAsset2.svg"
              alt="Svg Asset 2"
            />
            <p className="font-sf-pro-display text-base whitespace-nowrap text-white text-opacity-100 leading-5 font-normal">
              1800-103-6006
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex flex-row justify-center">
        <div className=" w-[1242px] flex flex-row justify-end">
            <img
            width="60px"
            height="60px"
            src="./svg/footer/SvgAsset3.svg"
            alt="Svg Asset 3"
            />
        </div>
      </div>
    </div>
  );
  
  export default Footer;
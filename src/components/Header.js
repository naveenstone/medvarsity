const Header = () => (
  <div className="flex flex-col justify-center w-full h-[72px] shadow-xl bg-white">
    <div className="flex flex-row justify-center">
    <div className="flex justify-between items-center w-[1140px] h-14">
      <img
        src="./images/ImageAsset1.png"
        alt="Image Asset 1"
        width="120px"
        height="38px"
      />
      <div className="flex flex-row   gap-2 w-[548px] h-14">
        <div className="flex flex-row justify-center items-center gap-2 pt-4 pr-4 pb-4 pl-4 w-[106px] h-14">
          <img
            width="24px"
            height="24px"
            src="./svg/SvgAsset1.svg"
            alt="Svg Asset 1"
          />
          <p className="font-sf-pro-display text-base whitespace-nowrap w-10 text-stone-800 text-opacity-100 leading-6 font-medium">
            Home
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-2 pt-4 pr-4 pb-4 pl-4 w-[164px] h-14">
          <img
            width="24px"
            height="24px"
            src="./svg/SvgAsset2.svg"
            alt="Svg Asset 2"
          />
          <div className="flex justify-between items-center pl-px w-[100px] h-6">
            <p className="font-sf-pro-display text-base whitespace-nowrap text-slate-600 text-opacity-100 leading-6 font-medium">
              Speciality
            </p>
            <img
              width="24px"
              height="24px"
              src="./svg/SvgAsset3.svg"
              alt="Svg Asset 3"
            />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-2 pt-4 pr-4 pb-4 pl-4 w-[119px] h-14">
          <img
            width="24px"
            height="24px"
            src="./svg/SvgAsset4.svg"
            alt="Svg Asset 4"
          />
          <div className="flex flex-col justify-center items-center w-14 h-6">
            <p className="font-sf-pro-display text-base whitespace-nowrap text-slate-600 text-opacity-100 leading-6 font-medium">
              Careers
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-2 pt-4 pr-4 pb-4 pl-4 w-[135px] h-14">
          <img
            width="24px"
            height="24px"
            src="./svg/SvgAsset5.svg"
            alt="Svg Asset 5"
          />
          <div className="flex flex-col justify-center items-center w-[71px] h-6">
            <p className="font-sf-pro-display text-base whitespace-nowrap text-slate-600 text-opacity-100 leading-6 font-medium">
              Enterprise
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row  items-center gap-4 w-[227px] h-11">
        <img
          width="24px"
          height="24px"
          src="./svg/SvgAsset6.svg"
          alt="Svg Asset 6"
        />
        <img
          width="24px"
          height="24px"
          src="./svg/SvgAsset7.svg"
          alt="Svg Asset 7"
        />
        <div className="flex flex-row justify-center items-center gap-4 w-[147px] h-11">
          <div className="flex justify-between items-center w-[107px] h-11">
            <div className="flex flex-col justify-center items-center w-11 h-11">
              <img
                src="./images/ImageAsset2.png"
                alt="Image Asset 2"
                width="32px"
                height="32px"
              />
            </div>
            <div className="flex flex-col justify-center items-center w-14 h-8">
              <p className="font-sf-pro-display text-lg whitespace-nowrap text-neutral-700 text-opacity-100 leading-8 font-normal">
                Manish
              </p>
            </div>
          </div>
          <img
            width="24px"
            height="24px"
            src="./svg/SvgAsset8.svg"
            alt="Svg Asset 8"
          />
        </div>
      </div>
      </div>
    </div>
  </div>
);

export default Header;

const PhoneMockup = ({ children }) => {
    return (
      <div className="relative w-[320px] h-[600px] mx-auto ">
        <div className="absolute inset-0 bg-gray-900 rounded-[50px] p-2 shadow-2xl">
          <div className="relative h-full w-full overflow-hidden rounded-[40px] bg-white">
            {children}
          </div>
        </div>
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-xl z-10"></div>
      </div>
    );
  };
  export default PhoneMockup
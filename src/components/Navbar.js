import React from "react";

const Navbar = () => {
  return (
    <>
      {/* sidebar */}
      <div className="flex h-screen ">
  {/* sidebar */}
  <div className="hidden md:flex flex-col w-64 bg-white text-black">
    <div className="flex items-center justify-center h-16 bg-white">
      <span className="text-black font-bold uppercase">Take Care!</span>
    </div>
    <div className="flex flex-col flex-1 overflow-y-auto">
      <nav className="flex-1 px-2 py-4 h-[150%] bg-white">
        <a
          href="./dashboard"
          className="flex items-center px-4 py-2 text-black hover:bg-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          Dashboard
        </a>
        <a
          href="./MedicalHistory"
          className="flex items-center px-4 py-2 mt-2 text-black hover:bg-gray-700"
        >  <img className="h-6 w-6 mr-2 text-white"
        src="./medical-kit-svgrepo-com.svg"/>
          Medical History
        </a>
        <a
          href="./Appointment"
          className="flex items-center px-4 py-2 mt-2 text-black hover:bg-gray-700"
        >
           <img className="h-6 w-6 mr-2 text-black"
        src="./schedule-calendar-svgrepo-com (1).svg"/>
         Upcoming Meets
        </a>

        <a
          href="/"
          className="flex items-center px-4 py-2 mt-2 text-black hover:bg-gray-700"
        >  <img className="h-6 w-6 mr-2 text-black"
        src="./7124045_logout_icon.svg"/>
          Log OUT
        </a>
      </nav>
    </div>
  </div>
  {/* Main content */}
  
</div>
    </>
  );
};

export default Navbar;

import React from "react";
import Navhome2 from "./navhome";
import Navbar from "./Navbar";
import Card from "./card";

const DashSearch = () => {
  return (
    <>
      <div className="h-screen w-full bg-white relative flex overflow-hidden">
        {/* Sidebar */}
        <aside className="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white">
          {/* Profile */}
          <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
           <a href="/dashboard"> <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg></a>
          </div>
          {/* Courses */}
          <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
           <a href="./dash_search"> <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg></a>
          </div>
          {/* Theme */}
          <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
           <a href="/My_dash"> <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg></a>
          </div>
          {/* Configuration */}
          <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
            <a href=""><svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg></a>
          </div>
        </aside>
        <div className="w-full h-full flex flex-col justify-between">
          {/* Header */}
          <header className="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-gray-800">
            {/* Informação */}
            <div className="flex flex-shrink-0 items-center space-x-4 text-white">
              {/* Texto */}
              <div className="flex flex-col items-end ">
                {/* Nome */}
                <div className="text-md font-medium ">Unknow Unknow</div>
                {/* Título */}
                <div className="text-sm font-regular">Student</div>
              </div>
              {/* Foto */}
              <div className="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400" />
            </div>
          </header>
          {/* Main */}
          <div className=" bg-slate-200">
          <div className="w-[50%] mx-auto mt-2">
  <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
    <div className="grid place-items-center h-full w-12 text-gray-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
    <input
      className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
      type="text"
      id="search"
      placeholder="Search something.."
    />
  </div>
</div>
</div>

          <main className="max-w-full h-full flex relative overflow-y-hidden bg-slate-200">
            {/* Container */}
            
            <div className="h-full w-full m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll">
              {/* Container */}
              
              <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-300">
                <header className="card-header bg-gray-800 text-white py-3 px-4">
                  <p className="card-header-title">
                    <span className="icon justify-center">
                      <i className="mdi mdi-account" />
                    </span>
                    Course Info
                  </p>
                </header>
                <div className="card-content py-4 px-6 grid grid-cols-2 gap-4 items-center">
                  <div className="h-auto">
                    <img
                      alt="Build from scratch or select prebuilt tailwind templates"
                      src="./Doctors-pana.svg"
                      className="full-rounded align-top"
                      style={{ display: "block", margin: "0 auto" }}
                    />
                  </div>
                  <div>
                    <div className="field mb-4">
                      <label className="label text-lg font-semibold">
                        Name
                      </label>
                      {/* Add input field for name */}
                    </div>
                    <div className="field mb-4">
                      <label className="label text-lg font-semibold">
                        Name
                      </label>
                      {/* Add input field for name */}
                    </div>
                    <div className="field mb-4">
                      <label className="label text-lg font-semibold">
                        Name
                      </label>
                      {/* Add input field for name */}
                    </div>

                    {/* Add other written info here */}
                  </div>
                </div>
              </div>
              <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-300">
                <header className="card-header bg-gray-800 text-white py-3 px-4">
                  <p className="card-header-title">
                    <span className="icon justify-center">
                      <i className="mdi mdi-account" />
                    </span>
                    Course Info
                  </p>
                </header>
                <div className="card-content py-4 px-6 grid grid-cols-2 gap-4 items-center">
                  <div className="h-auto">
                    <img
                      alt="Build from scratch or select prebuilt tailwind templates"
                      src="./Doctors-pana.svg"
                      className="full-rounded align-top"
                      style={{ display: "block", margin: "0 auto" }}
                    />
                  </div>
                  <div>
                    <div className="field mb-4">
                      <label className="label text-lg font-semibold">
                        Name
                      </label>
                      {/* Add input field for name */}
                    </div>
                    <div className="field mb-4">
                      <label className="label text-lg font-semibold">
                        Name
                      </label>
                      {/* Add input field for name */}
                    </div>
                    <div className="field mb-4">
                      <label className="label text-lg font-semibold">
                        Name
                      </label>
                      {/* Add input field for name */}
                    </div>

                    {/* Add other written info here */}
                  </div>
                </div>
              </div>
              <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-300">
                <header className="card-header bg-gray-800 text-white py-3 px-4">
                  <p className="card-header-title">
                    <span className="icon justify-center">
                      <i className="mdi mdi-account" />
                    </span>
                    Course Info
                  </p>
                </header>
                <div className="card-content py-4 px-6 grid grid-cols-2 gap-4 items-center">
                  <div className="h-auto">
                    <img
                      alt="Build from scratch or select prebuilt tailwind templates"
                      src="./Doctors-pana.svg"
                      className="full-rounded align-top"
                      style={{ display: "block", margin: "0 auto" }}
                    />
                  </div>
                  <div>
                    <div className="field mb-4">
                      <label className="label text-lg font-semibold">
                        Name
                      </label>
                      {/* Add input field for name */}
                    </div>
                    <div className="field mb-4">
                      <label className="label text-lg font-semibold">
                        Name
                      </label>
                      {/* Add input field for name */}
                    </div>
                    <div className="field mb-4">
                      <label className="label text-lg font-semibold">
                        Name
                      </label>
                      {/* Add input field for name */}
                    </div>

                    {/* Add other written info here */}
                  </div>
                </div>
              </div>
              <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-300">
                <header className="card-header bg-gray-800 text-white py-3 px-4">
                  <p className="card-header-title">
                    <span className="icon justify-center">
                      <i className="mdi mdi-account" />
                    </span>
                    Course Info
                  </p>
                </header>
                <div className="card-content py-4 px-6 grid grid-cols-2 gap-4 items-center">
                  <div className="h-auto">
                    <img
                      alt="Build from scratch or select prebuilt tailwind templates"
                      src="./Doctors-pana.svg"
                      className="full-rounded align-top"
                      style={{ display: "block", margin: "0 auto" }}
                    />
                  </div>
                  <div>
                    <div className="field mb-4">
                      <label className="label text-lg font-semibold">
                        Name
                      </label>
                      {/* Add input field for name */}
                    </div>
                    <div className="field mb-4">
                      <label className="label text-lg font-semibold">
                        Name
                      </label>
                      {/* Add input field for name */}
                    </div>
                    <div className="field mb-4">
                      <label className="label text-lg font-semibold">
                        Name
                      </label>
                      {/* Add input field for name */}
                    </div>

                    {/* Add other written info here */}
                  </div>
                </div>
              </div>
              <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-300">
                <header className="card-header bg-gray-800 text-white py-3 px-4">
                  <p className="card-header-title">
                    <span className="icon justify-center">
                      <i className="mdi mdi-account" />
                    </span>
                    Course Info
                  </p>
                </header>
                <div className="card-content py-4 px-6 grid grid-cols-2 gap-4 items-center">
                  <div className="h-auto">
                    <img
                      alt="Build from scratch or select prebuilt tailwind templates"
                      src="./Doctors-pana.svg"
                      className="full-rounded align-top"
                      style={{ display: "block", margin: "0 auto" }}
                    />
                  </div>
                  <div>
                    <div className="field mb-4">
                      <label className="label text-lg font-semibold">
                        Name
                      </label>
                      {/* Add input field for name */}
                    </div>
                    <div className="field mb-4">
                      <label className="label text-lg font-semibold">
                        Name
                      </label>
                      {/* Add input field for name */}
                    </div>
                    <div className="field mb-4">
                      <label className="label text-lg font-semibold">
                        Name
                      </label>
                      {/* Add input field for name */}
                    </div>

                    {/* Add other written info here */}
                  </div>
                </div>
              </div>
              <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-300">
                <header className="card-header bg-gray-800 text-white py-3 px-4">
                  <p className="card-header-title">
                    <span className="icon justify-center">
                      <i className="mdi mdi-account" />
                    </span>
                    Course Info
                  </p>
                </header>
                <div className="card-content py-4 px-6 grid grid-cols-2 gap-4 items-center">
                  <div className="h-auto">
                    <img
                      alt="Build from scratch or select prebuilt tailwind templates"
                      src="./Doctors-pana.svg"
                      className="full-rounded align-top"
                      style={{ display: "block", margin: "0 auto" }}
                    />
                  </div>
                  <div>
                    <div className="field mb-4">
                      <label className="label text-lg font-semibold">
                        Name
                      </label>
                      {/* Add input field for name */}
                    </div>
                    <div className="field mb-4">
                      <label className="label text-lg font-semibold">
                        Name
                      </label>
                      {/* Add input field for name */}
                    </div>
                    <div className="field mb-4">
                      <label className="label text-lg font-semibold">
                        Name
                      </label>
                      {/* Add input field for name */}
                    </div>

                    {/* Add other written info here */}
                  </div>
                </div>
              </div>
              
              <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-300">
                <header className="card-header bg-gray-800 text-white py-3 px-4">
                  <p className="card-header-title">
                    <span className="icon justify-center">
                      <i className="mdi mdi-account" />
                    </span>
                    Course Info
                  </p>
                </header>
                <div className="card-content py-4 px-6 grid grid-cols-2 gap-4 items-center">
                  <div className="h-auto">
                    <img
                      alt="Build from scratch or select prebuilt tailwind templates"
                      src="./Doctors-pana.svg"
                      className="full-rounded align-top"
                      style={{ display: "block", margin: "0 auto" }}
                    />
                  </div>
                  <div>
                    <div className="field mb-4">
                      <label className="label text-lg font-semibold">
                        Name
                      </label>
                      {/* Add input field for name */}
                    </div>
                    <div className="field mb-4">
                      <label className="label text-lg font-semibold">
                        Name
                      </label>
                      {/* Add input field for name */}
                    </div>
                    <div className="field mb-4">
                      <label className="label text-lg font-semibold">
                        Name
                      </label>
                      {/* Add input field for name */}
                    </div>

                    {/* Add other written info here */}
                  </div>
                </div>
              </div>
              <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-300">
                <header className="card-header bg-gray-800 text-white py-3 px-4">
                  <p className="card-header-title">
                    <span className="icon justify-center">
                      <i className="mdi mdi-account" />
                    </span>
                    Course Info
                  </p>
                </header>
                <div className="card-content py-4 px-6 grid grid-cols-2 gap-4 items-center">
                  <div className="h-auto">
                    <img
                      alt="Build from scratch or select prebuilt tailwind templates"
                      src="./Doctors-pana.svg"
                      className="full-rounded align-top"
                      style={{ display: "block", margin: "0 auto" }}
                    />
                  </div>
                  <div>
                    <div className="field mb-4">
                      <label className="label text-lg font-semibold">
                        Name
                      </label>
                      {/* Add input field for name */}
                    </div>
                    <div className="field mb-4">
                      <label className="label text-lg font-semibold">
                        Name
                      </label>
                      {/* Add input field for name */}
                    </div>
                    <div className="field mb-4">
                      <label className="label text-lg font-semibold">
                        Name
                      </label>
                      {/* Add input field for name */}
                    </div>

                    {/* Add other written info here */}
                  </div>
                </div>
              </div>
              <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-300">
                <header className="card-header bg-gray-800 text-white py-3 px-4">
                  <p className="card-header-title">
                    <span className="icon justify-center">
                      <i className="mdi mdi-account" />
                    </span>
                    Course Info
                  </p>
                </header>
                <div className="card-content py-4 px-6 grid grid-cols-2 gap-4 items-center">
                  <div className="h-auto">
                    <img
                      alt="Build from scratch or select prebuilt tailwind templates"
                      src="./Doctors-pana.svg"
                      className="full-rounded align-top"
                      style={{ display: "block", margin: "0 auto" }}
                    />
                  </div>
                  <div>
                    <div className="field mb-4">
                      <label className="label text-lg font-semibold">
                        Name
                      </label>
                      {/* Add input field for name */}
                    </div>
                    <div className="field mb-4">
                      <label className="label text-lg font-semibold">
                        Name
                      </label>
                      {/* Add input field for name */}
                    </div>
                    <div className="field mb-4">
                      <label className="label text-lg font-semibold">
                        Name
                      </label>
                      {/* Add input field for name */}
                    </div>

                    {/* Add other written info here */}
                  </div>
                </div>
              </div>
              
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default DashSearch;

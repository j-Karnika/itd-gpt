"use client";

import { useState } from "react";

const paragraphsData = [
  { id: 1, text: "Who is Elon Musk." },
  { id: 2, text: "Search history 2." },
  { id: 3, text: "Search history 3." },
  { id: 4, text: "Search history 4." },
  { id: 5, text: "Search history 5." },
  { id: 6, text: "Search history 6." },
];

// const handelonClick = () =>  {
//   console.log("onclick triggered")
// }

const page = () => {
  const [msg, getMsg] = useState("");
  const [showData, gotData] = useState(false);

  // if(msg !== ""){
  //   console.log(msg)
  // }

  const getAiResponse = async () => {
    console.log(msg);
    const obj = {
      msg,
    };
    getMsg((msg) => "");
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    };
    const response = await fetch("/api/gpt", options);
    const data = await response.json();
    // console.log(data)
    if (data["response"] !== "") {
      gotData(true);
      console.log("The AI Response : ", data["response"]);
    } else {
      console.log("The iTD-GPT has no solution for your query.");
    }
    // console.log('ui response',data['response'])
  };

  return (
    <div className="bg-white-400 p-0 h-screen flex flex-row">
      {/*Sidebar content */}
      <ul className="border border-solid w-1/5 bg-black h-screen p-5 flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="relative group">
              <p className="text-white border-l-2 border-t-2 mr-1 border-b-2 border-solid border-white p-1 font-bold rounded-r-md rounded-l text-3xl">
                iTD-GPT
              </p>
              <p className="absolute hidden text-white group-hover:block top-20 bg-black">
                iTalent Digital
              </p>
            </div>
            <h3 className="p-1 font-mono  font-semibold text-white">
              New Chat
            </h3>
          </div>
          <div className="relative group">
            <svg
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="m7 17.013l4.413-.015l9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583l-1.597 1.582l-1.586-1.585l1.594-1.58zM9 13.417l6.03-5.973l1.586 1.586l-6.029 5.971L9 15.006v-1.589z"
              />
              <path
                fill="white"
                d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"
              />
            </svg>
            <p className="absolute hidden text-white group-hover:block left-0">
              New chat
            </p>
          </div>
        </div>
        {paragraphsData.map((paragraph) => (
          <li key={paragraph.id}>
            <p
              className="p-2 font-medium text-white leading-loose hover:bg-gray-600 hover:bg-opacity-50 hover:text-white hover:rounded-md"
              id={`paragraph-${paragraph.id}`}
            >
              {paragraph.text}
            </p>
          </li>
        ))}
        <div className="flex justify-between self-end h-screen w-full">
          <div className="self-end flex items-center  mb-1">
            <h3 className="text-white font-bold mr-14">
              <span className="text-white text-2xl bg-purple-900 mr-2 h-10 p-2 rounded-full">
                J
              </span>{" "}
              John Doe
            </h3>
            <div className="group relative transition-all duration-300 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="cursor-pointer"
                // onClick={() => handelonClick()}
              >
                <g fill="none" stroke="white" stroke-width="1.5">
                  <circle cx="12" cy="12" r="3" />
                  <path
                    d="M13.765 2.152C13.398 2 12.932 2 12 2c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.092.223-.129.484-.143.863a1.617 1.617 0 0 1-.79 1.353a1.617 1.617 0 0 1-1.567.008c-.336-.178-.579-.276-.82-.308a2 2 0 0 0-1.478.396C4.04 5.79 3.806 6.193 3.34 7c-.466.807-.7 1.21-.751 1.605a2 2 0 0 0 .396 1.479c.148.192.355.353.676.555c.473.297.777.803.777 1.361c0 .558-.304 1.064-.777 1.36c-.321.203-.529.364-.676.556a2 2 0 0 0-.396 1.479c.052.394.285.798.75 1.605c.467.807.7 1.21 1.015 1.453a2 2 0 0 0 1.479.396c.24-.032.483-.13.819-.308a1.617 1.617 0 0 1 1.567.008c.483.28.77.795.79 1.353c.014.38.05.64.143.863a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083c.092-.223.129-.483.143-.863c.02-.558.307-1.074.79-1.353a1.617 1.617 0 0 1 1.567-.008c.336.178.579.276.819.308a2 2 0 0 0 1.479-.396c.315-.242.548-.646 1.014-1.453c.466-.807.7-1.21.751-1.605a2 2 0 0 0-.396-1.479c-.148-.192-.355-.353-.676-.555A1.617 1.617 0 0 1 19.562 12c0-.558.304-1.064.777-1.36c.321-.203.529-.364.676-.556a2 2 0 0 0 .396-1.479c-.052-.394-.285-.798-.75-1.605c-.467-.807-.7-1.21-1.015-1.453a2 2 0 0 0-1.479-.396c-.24.032-.483.13-.82.308a1.617 1.617 0 0 1-1.566-.008a1.617 1.617 0 0 1-.79-1.353c-.014-.38-.05-.64-.143-.863a2 2 0 0 0-1.083-1.083Z"
                    opacity=".5"
                  />
                </g>
              </svg>
              <p className="absolute hidden text-white group-hover:block p-0">
                Settings
              </p>
            </div>
          </div>
        </div>
      </ul>
      {/* Main div for main content */}
      <div className="p-2 flex justify-center items-end w-full  border-2 border-solid border-red-400">
        <div className=" p-2 flex flex-col items-center justify-between w-3/4 h-3/5">
          {showData
            ? <div className="border-10 border-solid border-blue-500 ">You are Getting the AI response</div>
            : (
              <>
              <h1 className=" font-bold text-3xl">How can I help you today?</h1>
              <div className="">
                <div className="flex flex-wrap ">
                  <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 ">
                    <div className="h-full max-w-md mx-auto bg-white rounded p-4 shadow-md hover:bg-gray-100 cursor-pointer">
                      <h2 className="text-sm font-medium mb-2">
                        Make up a Story
                      </h2>
                      <p className="text-sm font-medium font-Söhne  text-gray-500">
                        About Sharky, a tooth-brushing shark superhero...
                      </p>
                    </div>
                  </div>

                  <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4">
                    <div className="h-full max-w-md mx-auto bg-white rounded p-4 shadow-md hover:bg-gray-100 cursor-pointer">
                      <h2 className="text-sm font-medium mb-2">
                        Tell me a Fun Fact
                      </h2>
                      <p className="text-sm font-medium font-Söhne  text-gray-500">
                        About the Roman Empire...
                      </p>
                    </div>
                  </div>

                  <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4">
                    <div className="h-full max-w-md mx-auto bg-white rounded p-4 shadow-md hover:bg-gray-100 cursor-pointer">
                      <h2 className="text-sm font-medium mb-2">
                        Write a Thank-You Note
                      </h2>
                      <p className="text-sm font-medium font-Söhne  text-gray-500">
                        To our babysitter for the last-minute help...
                      </p>
                    </div>
                  </div>

                  <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4">
                    <div className="h-full max-w-md mx-auto bg-white rounded p-4 shadow-md hover:bg-gray-100 cursor-pointer">
                      <h2 className="text-sm font-medium mb-2">
                        Give me Ideas
                      </h2>
                      <p className="text-sm font-medium font-Söhne  text-gray-500">
                        About how to plan my New Year's resolutions...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </>
            )}
          <div className="w-full">
            <div className=" h-11 relative w-full rounded-xl bottom-0 m-auto flex items-center justify-between border border-solid border-gray-300">
              <input
                type="text"
                className=" w-full outline-none pl-2 placeholder-gray-500 text-black"
                placeholder="Message AI"
                value={msg}
                onChange={(e) => getMsg(e.target.value)}
              />
              <div
                className="cursor-pointer relative group"
                onClick={getAiResponse}
              >
                <div className="h-10 w-10 flex items-center justify-center bg-gray-300 text-white rounded-lg">
                  <div className="text-xl">↑</div>
                </div>
                <p className="absolute hidden text-white rounded-xl text-center group-hover:block bottom-12 bg-black">
                  Ask AI
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;

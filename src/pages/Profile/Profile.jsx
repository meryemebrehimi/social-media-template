import React from "react";
import { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import InnerHeader from "../../components/common/InnerHeader";
import Explore from "../Explore/Explore";

function Profile() {
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const [item, setItem] = useState({
    id: 2,
    profilePicture:
      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
    username: "Janell Shrum",
    status: "how's the wheater out there?",
  });
  return (
    <div className=" w-full md:w-4/6 mx-auto bg-slate-900 text-white h-screen overflow-y-scroll scrollbar-none">
      <div className="px-3 py-2">
        <InnerHeader setIsSettingOpen={setIsSettingOpen} item={item} direction>
          <Link to="/profile/settings">
            <IoMdSettings
              onClick={() => setIsSettingOpen((prev) => !prev)}
              className="hover:text-slate-600 hover:cursor-pointer xl:mr-2.5 lg:mr-1.5 xl:w-10 xl:h-10 w-8 h-8   text-slate-400"
            />
          </Link>
        </InnerHeader>
        <ProfileBody />
      </div>
      <Explore />
    </div>
  );
}

export default Profile;

function ProfileBody() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col gap-1 text-center md:p-5 mt-4">
        <Link
          className="block mx-auto bg-center bg-no-repeat bg-cover w-20 h-20 rounded-full border border-gray-400 shadow-lg"
          href=""
        >
          <img
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            alt=""
            className="rounded-full"
          />
        </Link>
        <h2 className="font-bold">Marina Davinchi</h2>
        <span className="text-sm text-gray-400">
          New York, NY - Los Angeles, CA
        </span>
        <span className="text-sm text-gray-400">
          https://www.youtube.com/watch?v=dQw4w9WgXcQ
        </span>
      </div>

      <div className="flex justify-center w-full items-center md:p-1 gap-2 my-3">
        <div className="font-semibold text-center mx-4">
          <p className="text-white">102</p>
          <span className="text-gray-400">Posts</span>
        </div>
        <Link
          to="followers"
          className="font-semibold text-center mx-4 cursor-pointer"
        >
          <p className="text-white">102</p>
          <span className="text-gray-400">Followers</span>
        </Link>
        <Link
          to="followings"
          className="font-semibold text-center mx-4 cursor-pointer"
        >
          <p className="text-white">102</p>
          <span className="text-gray-400">Folowing</span>
        </Link>
      </div>

      <div className="flex justify-around gap-2 w-full my-5 md:p-5">
        <button className="bg-slate-500 hover:bg-slate-600 w-3/6 px-10 py-2 rounded-2xl text-white shadow-lg">
          Follow
        </button>
        <button
          onClick={() => navigate("/messages/1")}
          className="bg-slate-800 hover:bg-slate-900 border w-3/6  border-gray-500 px-10 py-2 rounded-2xl shadow-lg"
        >
          Message
        </button>
      </div>

      <div className="flex justify-between md:p-5 items-center">
        <button className="w-full py-2 border-b-2 border-blue-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
        </button>
        <button className="w-full py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
{
  /* <div className="grid grid-cols-3 gap-2 my-3">
          <div className="postCenter w-full ">
            <img
              alt=""
              className="aspect-square rounded-lg object-cover opacity-100 group-hover:opacity-80  "
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            />
          </div>
          <div className="postCenter w-full ">
            <img
              alt=""
              className="aspect-square rounded-lg object-cover opacity-100 group-hover:opacity-80  "
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            />
          </div>
          <div className="postCenter w-full ">
            <img
              alt=""
              className="aspect-square rounded-lg object-cover opacity-100 group-hover:opacity-80  "
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            />
          </div>
          <div className="postCenter w-full ">
            <img
              alt=""
              className="aspect-square rounded-lg object-cover opacity-100 group-hover:opacity-80  "
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            />
          </div>
          <div className="postCenter w-full ">
            <img
              alt=""
              className="aspect-square rounded-lg object-cover opacity-100 group-hover:opacity-80  "
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            />
          </div>
          <div className="postCenter w-full ">
            <img
              alt=""
              className="aspect-square rounded-lg object-cover opacity-100 group-hover:opacity-80  "
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            />
          </div>
          <div className="postCenter w-full ">
            <img
              alt=""
              className="aspect-square rounded-lg object-cover opacity-100 group-hover:opacity-80  "
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            />
          </div>
          <div className="postCenter w-full ">
            <img
              alt=""
              className="aspect-square rounded-lg object-cover opacity-100 group-hover:opacity-80  "
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            />
          </div>
          <div className="postCenter w-full ">
            <img
              alt=""
              className="aspect-square rounded-lg object-cover opacity-100 group-hover:opacity-80  "
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            />
          </div>
        </div> */
}

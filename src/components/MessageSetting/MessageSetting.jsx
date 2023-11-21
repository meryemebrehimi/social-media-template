import { IoIosArrowRoundBack } from "react-icons/io";
import { TiArrowBackOutline } from "react-icons/ti";

export default function MessageSetting({ setIsSettingOpen }) {
  return (
    <div className=" flex flex-col justify-between w-full border-l dark:border-slate-800 border-slate-400 ">
      <div className="setting head  w-full border-b dark:border-slate-800 border-slate-400">
        <button
          onClick={() => {
            setIsSettingOpen((prev) => !prev);
            navigate("/");
          }}
          className="flex w-full ml-2.5 text-slate-400 py-2"
        >
          <TiArrowBackOutline
            className="hover:text-slate-600 cursor-pointers p-1 w-8 h-8
          "
          />
          <span className="self-center font-bold">Back</span>
        </button>
        <div className="muteContainer text-lg flex justify-between items-center h-20 px-4">
          <span>mute messages</span>
          <span>
            <input
              className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </span>
        </div>
      </div>
      <div className="text-red-700 border-t dark:border-slate-800 border-slate-400 text-lg">
        <div className="muteContainer flex justify-between items-center h-16 px-4 cursor-pointer">
          <span>Block </span>
        </div>
        <div className="muteContainer flex justify-between items-center h-16 px-4 cursor-pointer">
          <span> Delete Chat</span>
        </div>
        <div className="muteContainer flex justify-between items-center h-16 px-4 cursor-pointer">
          <span>Report</span>
        </div>
      </div>
    </div>
  );
}

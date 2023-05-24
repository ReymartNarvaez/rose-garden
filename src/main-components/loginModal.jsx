import { close } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { Input } from "../components/account/input";
import { Link } from "react-router-dom";

export const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed grid grid-rows-1 inset-0 flex items-center justify-center z-10">
          <div className="">
            <div className="grid grid-rows-2 gap-4 m-1 bg-white p-4 rounded shadow w-full mb-3">
              <div className="grid grid-cols-3 gap-4 border-b border-gray-300 place-items-center">
                <h1 className="col-span-2 text-2xl text-[#3A5254] font-bold justify-self-end mr-5">
                  Login
                </h1>
                <IonIcon
                  icon={close}
                  className="text-4xl text-[#3A5254] cursor-pointer mr-3"
                  onClick={onClose}
                />
              </div>
              <div>
                <Input placeholder={"Email"} type="text" />
                <Input placeholder={"Password"} type="password" />
              </div>
              <div className="grid grid-rows-2 place-items-center">
                <button className="hover:text-[#E1D9D9] hover:bg-[#9EB5B7] bg-[#3A5254] text-white px-4 py-2 w-full rounded">
                  Login
                </button>
                <Link className="hover:text-[#E1D9D1] text-[#3A5254]">
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="justify-self-center gap-1 m-1 bg-white p-4 rounded shadow w-full">
              <div className="grid grid-rows-2 place-items-center">
                <h1 className="underline text-xl mb-8">Become a member!</h1>
                <button className="hover:bg-[#9EB5B7] border border-[#3A5254] text-[#3A5254] px-4 py-2 w-full rounded">
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

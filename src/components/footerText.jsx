import { Link } from "react-router-dom";

export const FooterText = ({ path, pathLabel, title }) => {
  return (
    <div className="navbar-menu bg-[#3A5254] md:min-h-fit sm:min-h-[60vh] left-0 top-[-100%] flex justify-center md:w-auto w-full px-5">
      <ul className="md:mb-8 flex md:flex-col flex-col md:items-center text-[#FFFFFF]">
        <li className="md:mt-8 font-extrabold">{title}</li>
        {path.map((item, index) => (
          <li key={index} className="md:mx-5 my-2">
            <Link className="hover:text-[#E1D9D1]" to={"/" + item}>
              {pathLabel[index]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

import { FooterText } from "../components/footerText";

export const Footer = () => {
  const ourTeamPath = ["about", "team", "what-we-do", "contact"];
  const ourTeamLabel = ["About us", "Team", "What we do", "Contact"];

  const morePath = ["projects", "events", "donate", "blog"];
  const moreLabel = ["Projects", "Events", "Donate", "Blog"];

  const connectPath = ["about", "team", "what-we-do", "contact"];
  const connectLabel = ["Facebook", "Instagram", "Twitter", "Linkdin"];

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 bg-[#3A5254] items-center w-[100%] mx-auto mt-2">
      <div className="grid md:grid-cols-3 grid justify-items-end mt-8">
        <FooterText
          title={"Our Team"}
          path={ourTeamPath}
          pathLabel={ourTeamLabel}
        />
        <FooterText title={"More"} path={morePath} pathLabel={moreLabel} />
        <FooterText
          title={"Connect"}
          path={connectPath}
          pathLabel={connectLabel}
        />
      </div>
      <div className="grid place-items-center mb-8">
        <h1 className="m-5 text-[#FFFFFF]">Subscribe to get latest updates</h1>
        <div className="flex border border-[#FFFFFF] rounded">
          <input
            type="text"
            className="block w-full px-4 py-2 text-[#FFFFFF] bg-[#3A5254] border rounded-l-md  focus:outline-none focus:ring-opacity-40"
            placeholder="Your email"
          />
          <button className="px-4 text-[#3A5254] bg-[#FFFFFF] border-l rounded-r ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

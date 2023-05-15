export const StartImage = () => {
  return (
    <div className="flex hidden md:block">
      <div
        className="bg-[url('src/assets/image/Pental.png')] bg-center w-full bg-cover bg-no-repeat h-[250px]
     flex items-center justify-center font-extrabold text-[#FFFFFF] text-[20px] lg:text-[30px] xl:text-[40px]"
      >
        <ul className="flex items-center justify-center flex-col md:min-h-fit min-h-[60vh] w-1/2">
          <li className="m-2">Petals & Posies,</li>
          <li className="m-2">A Floral Wonderland Awaits You</li>
        </ul>
      </div>
    </div>
  );
};

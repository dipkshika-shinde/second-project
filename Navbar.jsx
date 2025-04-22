import { CiMenuBurger } from "react-icons/ci";

function Navbar(){
    return(
        <div className="navbar w-full h-[40px]  flex justify-self-start items-center">
            <div className="left w-2/4 h-full flex  justify-self-start items-center pl-6 text-[20px] font-bold sm:w-2/5 ">
                <h1>Logo</h1>
            </div>
            <div className="mid hidden sm:flex  sm:w-3/5 sm:h-full sm:gap-10  sm:items-center sm:justify-self-start">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Help</a>
              <a href="#">Service</a>
            </div>
            <div className="right flex justify-end items-center  w-2/4 h-full  pr-6  sm:w-2/5" >
            <CiMenuBurger  size={20}/>
            </div>
        </div>
    )
}

export default Navbar;
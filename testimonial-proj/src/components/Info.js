
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import './Info.css' 
function Info({details}){

    // console.log(details);
    return(
        <div className="relative flex flex-col items-center justify-center">
            <div className="h-[150px] w-[150px] rounded-full absolute left-1 -top-28">
                <img className="h-[150px] w-[150px] rounded-full bg-border" src={details.image}></img>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h3 className="font-bold text-2xl tracking-wide" >{details?.name}</h3>
                <p className="text-violet-300 font-semibold opacity-70">{details?.job}</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 gap-y-3 ">
                <div className="text-violet-400">
                    <FaQuoteLeft/>
                </div>
                <p className=" text-gray-600">{details?.text}</p>
                <div className="text-violet-400">
                    <FaQuoteRight/>
                </div>
            </div>
        </div>
    )

}

export default Info;
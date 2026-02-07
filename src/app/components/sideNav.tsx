import { GoEye } from "react-icons/go";
import { FaChartLine } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import { GoGoal } from "react-icons/go";
import { TbListCheck } from "react-icons/tb";
import { IoIosLink } from "react-icons/io";
import { FaWandMagicSparkles } from "react-icons/fa6";

export default function SideNav(){
    let navIcons=new Map<string,React.ElementType>();

    const options:string[]=["Site Overview","Analytics","Smart Keyword Generator","Goals","Content Evaluation","Backlink Audit","Link Optimization Wizard"];

    const icons=[GoEye,FaChartLine,BsStars,GoGoal,TbListCheck,IoIosLink,FaWandMagicSparkles]

    for(let i=0;i<options.length;i++){
        navIcons.set(options[i],icons[i]);
    }

    return <div className="w-max p-5 h-[100vh] flex flex-col gap-10 items-start bg-black text-white justify-center">
        {options.map((opt)=>{
            const Icon:React.ElementType = navIcons.get(opt)!;
            return (
            <div key={opt}>
                <p className="cursor-pointer w-full px-2 py-2 text-left flex gap-3 items-center justify-items-start text-base font-medium text-gray-500 hover:text-white  hover:border-solid hover:border-[0.01em] hover:border-gray-400 hover:rounded-md hover:[box-shadow:inset_0_0_5px_rgba(255,255,255)]">{<Icon/>} {opt}</p>
            </div>
        )
        })}
    </div>
}
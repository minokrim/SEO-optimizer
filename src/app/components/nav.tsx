import Image from "next/image"
import { RxHamburgerMenu } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PrimaryCTA } from "./ui/primaryCta"; 
export default function Nav(){
    return <div className="flex items-center justify-center p-5 bg-black text-white">
        <main className="flex md:gap-15 items-center border-1 justify-between w-[90vw] md:w-max md:border-[0.001em] border-solid border-gray-100 p-3 rounded-2xl cursor-pointer">
        <Image src="/logo.png" width={30} height={30} alt="website logo" className="block"/>

        <section className="hidden md:flex gap-5 items-center justify-center">
            <div className="flex items-center justify-center">
                <h5>Features</h5>
                <RiArrowDropDownLine className="text-3xl"/>
            </div>

            <h5>Developer</h5>
            <div className="flex items-center justify-center">
                <h5>Company</h5>
                <RiArrowDropDownLine className="text-3xl"/>
            </div>

            <h5>Blog</h5>

            <h5 className="whitespace-nowrap">Change-Log</h5>
                    <PrimaryCTA>Join Waitlist</PrimaryCTA>
        </section>

        <section className="md:hidden">
            <RxHamburgerMenu className="flex text-4xl md:hidden "/>
        </section>
        </main>
    </div>
}
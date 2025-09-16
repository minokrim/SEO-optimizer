import Image from "next/image"
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";

export default function Footer(){
    return <div className="flex justify-between items-start md:items-center p-2 mt-10 w-[90%]">
        <div className="flex flex-col md:flex-row md:justify-between w-[65%] gap-5">
                <Image src="/logo.png" width={30} height={30} alt="website logo" className="block"/>

            <section className="flex flex-col md:flex-row gap-10">
                <p>Features</p>
                <p>Integrations</p>
                <p>Updates</p>
                <p>FAQ</p>
                <p>Pricing</p>
            </section>
        </div>

            <section className="flex text-xl gap-5 text-gray-600">
                <BsTwitterX/>
                <FaInstagram/>
                <RiYoutubeLine/>
            </section>
    </div>
}
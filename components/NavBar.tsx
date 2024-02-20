import Link from "next/link";
import Image from "next/image";

import { CustomButton } from ".";

const NavBar = () => {
  return (
    <header className="w-full absoulute z-10">
        <nav className=" max-x-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
            <Link href="/" className="flex justify-center items-center">
                <Image
                src='/assets/logo-text.svg'
                alt="Roboko Logo"
                width={180}
                height={180}
                className="object-contain"
                ></Image>
            </Link>

            <CustomButton 
                title='Sign In'
                btnType="button"
                containerStyles="text-white rounded-full bg-black min-w-[120px] py-3 px-6 hover:bg-less-black transition-all duration-300 ease-in-out"
            />
        </nav>
    </header>
  );
}

export default NavBar
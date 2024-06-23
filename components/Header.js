import Image from "next/image";
import Link from "next/link";
// config
import config from "@/config/general";

const Header = () => {
    return (
        <header className="mt-40 flex-col sm:flex-row flex justify-between items-start">
            <Image src={"/images/logo2.png"} width={400} height={400} alt={config.title} />
            <nav>
            </nav>
        </header>
    );
};

export default Header;

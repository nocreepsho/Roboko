import Image from "next/image"
import Link from "next/link"

import { footerLinks } from "@/constants"

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 border-t border-primary-green-200 bg-primary-green">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/assets/logo-text.svg"
            alt="Roboko Logo"
            width={110}
            height={110}
            priority
            className="object-contain" />
          <p className="text-base text-grey-700">
            Roboko 2024 <br />
            All rights reserved &copy;
          </p>



          <div
            className="footer__copyrights-link">
            <Link href="/"
              className="text-gray-700">
              Privacy Policy
            </Link>
            <Link href="/"
              className="text-gray-700">
              Terms of Service
            </Link>
          </div>
        </div>


        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="font-normal">
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col items-center justify-center">
          <Link href="/">
          <Image src="/assets/icons-github.svg" alt="Github" width={32} height={32} />
          </Link>
          <span className="font-medium">Made with ❤️ by <Link href="/" className="underline decoration-dotted">Shobhit</Link></span>
        </div>


      </div>

    </footer>
  )
}

export default Footer
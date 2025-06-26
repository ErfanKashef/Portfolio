import { IconBrandGithub, IconBrandInstagram } from "@tabler/icons-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-10">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <div className="text-base font-medium">Erfan Kashef</div>
            <div className="text-base font-normal text-gray-primary underline">
              <Link href="erfankashefdev@gamil.com" type="email">
                erfankashefdev@gamil.com
              </Link>
            </div>
          </div>
          <div>
            <p className="text-base font-medium">front-end developer</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <p className="text-2xl font-medium">Media</p>
          </div>
          <div className="flex gap-2 items-center text-gray-primary">
            <IconBrandGithub size={32} />
            <IconBrandInstagram size={32} />
          </div>
        </div>
      </div>
      <div className="text-center text-gray-primary">
        <p>© 2023 Erfan Kashef. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

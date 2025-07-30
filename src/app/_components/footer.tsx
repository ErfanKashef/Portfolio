import { IconBrandGithub, IconBrandInstagram } from "@tabler/icons-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-10 border-t border-gray-primary px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6">
        {/* اطلاعات شخصی */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <div className="text-base font-medium">Erfan Kashef</div>
            <Link
              href="mailto:erfankashefdev@gmail.com"
              className="text-base font-normal text-gray-primary underline"
            >
              erfankashefdev@gmail.com
            </Link>
          </div>
          <p className="text-base font-medium">front-end developer</p>
        </div>

        {/* بخش مدیا */}
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-medium">Media</p>
          <div className="flex gap-3 items-center text-gray-primary">
            <a
              href="https://github.com/erfankashef"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandGithub size={28} />
            </a>
            <a
              href="https://instagram.com/erfan_kasheff"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandInstagram size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* کپی‌رایت */}
      <div className="text-center text-gray-primary pb-4 text-sm">
        <p>© 2025 Erfan Kashef. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

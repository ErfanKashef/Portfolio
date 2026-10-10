import { IconBrandInstagram, IconMail, IconPhone } from "@tabler/icons-react";

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="pb-24">
        <div className="pb-5">
          <div className="flex gap-4 items-center">
            <div className="w-full flex items-center gap-10">
              <div className="flex">
                <span className="text-primary text-4xl font-medium">#</span>
                <p className="text-4xl font-medium">contacts</p>
              </div>
              <div className="border border-primary h-[1px] w-2/6"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p>
              I’m interested in freelance opportunities. However, if you have
              other requests or questions, don’t hesitate to contact me.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            <div className="border border-gray-primary p-4 text-center space-y-2">
              <p className="font-semibold text-lg">Message me here</p>
              <a
                href="mailto:erfankashefdev@gmail.com"
                className="flex gap-2 items-center justify-center cursor-pointer text-gray-primary hover:text-primary"
              >
                <IconMail size={24} />
                <p>erfankashefdev@gmail.com</p>
              </a>
              <div className="flex gap-2 items-center justify-center">
                <a
                  href="https://instagram.com/erfan_kasheff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 items-center justify-center cursor-pointer text-gray-primary hover:text-primary"
                >
                  <IconBrandInstagram size={24} />
                  <p>erfan_kasheff</p>
                </a>
              </div>
              <div className="flex gap-2 items-center justify-center">
                <a
                  href="tel:09355633507"
                  className="flex gap-2 items-center justify-center cursor-pointer text-gray-primary hover:text-primary"
                >
                  <IconPhone size={24} />
                  <p>09355633507</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

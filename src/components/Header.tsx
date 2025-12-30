"use client";

import { useEffect, useRef } from "react";
import { CldImage } from "next-cloudinary";
import ContactInfo from "./ContactInfo";
import { ContactInfoProps } from "./ContactInfo";
import { useI18n } from "@/locales/client";

interface HeaderProps {
  name: string;
  lastName: string;
  profilePicture: string;
  contactInfo: ContactInfoProps;
}

const Header = ({
  name,
  lastName,
  profilePicture,
  contactInfo,
}: HeaderProps) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const t = useI18n();

  const updateHeaderHeight = () => {
    if (headerRef.current) {
      const height = headerRef.current.offsetHeight;
      document.documentElement.style.setProperty(
        "--header-height",
        `${height}px`
      );
    }
  };

  useEffect(() => {
    updateHeaderHeight();

    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  return (
    <header className="absolute right-0 left-0 lg:p-4" ref={headerRef}>
      <div className="flex flex-wrap bg-[#018E94] p-4 lg:justify-between lg:gap-2">
        <div className="-mb-4 -ml-4 aspect-square w-3/12 max-w-44 bg-radial-[at_50%_90%] from-white to-transparent to-70%">
          <CldImage
            aspectRatio={"1:1"}
            width={180}
            height={180}
            quality={100}
            crop="fill"
            alt={t("profilePictureAlt", { name, lastName })}
            src={profilePicture}
          />
        </div>
        <div className="flex flex-grow items-center justify-center lg:flex-grow-0">
          <h1 className="text-2xl leading-[1] text-white sm:text-4xl 2xl:text-4xl">
            <b className="block">{name}</b>
            {lastName}
          </h1>
        </div>
        <div className="hidden lg:block">
          <ContactInfo {...contactInfo} />
        </div>
      </div>
    </header>
  );
};

export default Header;

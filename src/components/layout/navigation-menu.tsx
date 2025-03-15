"use client";

import { MainMenuContent } from "@/lib/definitions";
import { getMediaUrl } from "@/utils/all";
import { ArrowUpRight, Grip } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavigationMenu = ({ menuContent }: { menuContent: MainMenuContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <div className="fixed left-1/2 right-4 top-6 z-50 flex w-full -translate-x-1/2 items-center justify-between px-4 md:px-12 mix-blend-difference">
        <Link href="/" aria-label="Home">
          <div className="relative h-[64px] w-[64px] animate-spin-slow">
            <Image
              src={getMediaUrl(menuContent.logo)}
              alt="Saad Tanvir Logo"
              fill
              priority
              sizes="(max-width: 768px) 64px, 128px"
              style={{ objectFit: "contain" }}
            />
          </div>
        </Link>
        <button
          onClick={() => setIsOpen(true)}
          className="group/menu flex items-center px-0"
        >
          <span className="mr-4 inline-block text-xl font-medium text-gray-50 md:text-2xl">
            Menu
          </span>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-xs border-gray-400 p-2 md:h-16 md:w-16">
            <Grip className="h-4 w-4 scale-100 text-gray-50 group-hover/menu:scale-90 md:h-6 md:w-6" />
          </div>
        </button>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Side Navigation Menu */}
      <div
        className={`fixed right-0 top-4 bottom-4 z-50 w-[95%] transform overflow-hidden rounded-lg bg-white transition-transform duration-300 ease-in-out md:w-[616px] ${
          isOpen ? "-translate-x-4" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col p-6">
          {/* Header */}
          <div className="mb-12 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-0 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                className="animate-pulse"
              >
                <circle cx="4" cy="4" r="4" fill={menuContent["status-color"]} />
              </svg>
              <span className="text-sm font-normal text-[--gray-900]">
                {menuContent["status-text"]}
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="px-3 py-3 text-black transition-colors hover:text-gray-600"
            >
              <span className="text-sm">Close</span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mb-auto">
            <ul className="space-y-2">
              {menuContent.links.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between text-lg transition-colors hover:text-[var(--orange-color)]"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="relative">
                      {item.label}{" "}
                      {item.children && item.children.length > 0 && (
                        <span className="absolute -right-6 -top-4 ml-2 flex h-6 w-6 items-center justify-center rounded-full border-xs border-gray-300 text-xs">
                          {item.children.length}
                        </span>
                      )}
                    </span>
                  </Link>
                  {item.children && (
                    <ul className="mt-2 space-y-2 pl-8">
                      {item.children.map((subItem) => (
                        <li key={subItem.href}>
                          <Link
                            href={subItem.href}
                            className="block text-[var(--gray-500)] transition-colors hover:text-[var(--orange-color)]"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Email */}
          <div className="pt-6">
            <a
              href={`mailto:${menuContent.email}`}
              className="mb-0 inline-flex items-center space-x-2 text-sm transition-colors hover:text-gray-600"
            >
              <span>{menuContent.email}</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>

            {/* Social Links */}
            <div className="absolute bottom-6 right-4 grid grid-cols-1 gap-4">
              {menuContent["social-links"].map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 text-sm capitalize transition-colors hover:text-gray-600"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationMenu;

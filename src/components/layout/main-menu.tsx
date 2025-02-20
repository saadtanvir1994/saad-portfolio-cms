"use client";

import { gsap } from "@/utils/gsap";
import { useGSAP } from "@gsap/react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { MainMenuContent } from "@/lib/definitions";
import { getMediaUrl } from "@/utils/all";

const MainMenu = ({ menuContent }: { menuContent: MainMenuContent }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(true); // Default to mobile for SSR

  const menuRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const menuItemsRef = useRef<Array<HTMLLIElement | null>>([]);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const menuItems = menuContent.links;
  const logoDark = menuContent["logo-dark"];
  const logoLight = menuContent["logo-light"];
  const actionBtn = menuContent["action-button"];

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useGSAP(() => {
    if (isMounted && !isMobile && menuRef.current) {
      gsap.fromTo(
        menuItemsRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        menuRef.current,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );
    }
  }, [isMounted, isMobile]);

  // Services dropdown animation
  useGSAP(() => {
    if (isServicesOpen && dropdownRef.current && isMounted) {
      gsap.fromTo(
        dropdownRef.current,
        {
          opacity: 0,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        }
      );
    }
  }, [isServicesOpen, isMounted]);

  // Initial server-matching render
  if (!isMounted) {
    return (
      <nav className="dark fixed bottom-3 left-1/2 z-50 w-[84%] -translate-x-1/2 transform rounded-full border-xs border-[--gray-200] bg-[--gray-25] px-4 py-2 shadow-lg md:w-fit md:px-8 md:py-4">
        <div className="flex justify-between gap-40">
          <Link href="/" aria-label="Saad Tanvir - Home">
            <div className="relative h-12 w-12">
              <Image
                src={getMediaUrl(logoLight)}
                alt="Saad Tanvir Logo"
                fill
                priority
                sizes="(max-width: 768px) 48px, 160px"
                style={{ objectFit: "contain" }}
              />
            </div>
          </Link>
          <div className="h-12 w-12" />
        </div>
      </nav>
    );
  }

  return (
    <nav
      ref={menuRef}
      className="font-nortica dark fixed bottom-3 left-1/2 z-50 w-[84%] -translate-x-1/2 transform rounded-full border-xs border-[--gray-200] bg-[--gray-25] px-4 py-2 shadow-lg md:w-fit md:px-6"
      aria-label="Main navigation"
      role="navigation"
    >
      {/* Mobile Header */}
      <div className={isMobile ? "block" : "hidden"}>
        <div className="flex items-center justify-between gap-40">
          <Link href="/" aria-label="Saad Tanvir - Home">
            <div className="relative h-16 w-16 animate-spin-slow">
              <Image
                src={getMediaUrl(logoDark)}
                alt="Saad Tanvir Logo"
                fill
                priority
                sizes="(max-width: 768px) 64px"
                style={{ objectFit: "contain" }}
              />
            </div>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[--gray-25] text-white shadow-lg"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className={`${isMobile ? "hidden" : "block"}`}>
        <div className="flex items-center justify-between gap-40">
          <Link href="/" aria-label="Saad Tanvir - Home">
            <div className="relative h-[48px] w-[48px] animate-spin-slow">
              <Image
                src={getMediaUrl(logoDark)}
                alt="Saad Tanvir Logo"
                fill
                priority
                sizes="(max-width: 768px) 48px, 128px"
                style={{ objectFit: "contain" }}
              />
            </div>
          </Link>

          <ul className="flex items-center space-x-6" role="menubar">
            {menuItems.map((item, index) => (
              <li
                key={item.label}
                ref={(el) => {
                  menuItemsRef.current[index] = el;
                }}
                role="none"
                className="relative w-fit uppercase tracking-wide"
                onMouseEnter={() => item.children && setIsServicesOpen(true)}
                onMouseLeave={() => item.children && setIsServicesOpen(false)}
              >
                <Link
                  href={item.href}
                  className={`text-nowrap py-4 text-base font-medium uppercase transition-colors hover:text-white ${
                    item.children ? "flex items-center gap-1" : ""
                  } ${
                    pathname === item.href
                      ? "text-[var(--orange-color2)]"
                      : "text-gray-100"
                  }`}
                  role="menuitem"
                  aria-current={pathname === item.href ? "page" : undefined}
                  aria-expanded={item.children ? isServicesOpen : undefined}
                  aria-haspopup={item.children ? "true" : undefined}
                >
                  {item.label}
                  {item.children && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M7.66667 3.66667H4.33333V0.333333C4.33333 0.244928 4.29821 0.160143 4.2357 0.0976311C4.17319 0.035119 4.08841 0 4 0V0C3.91159 0 3.82681 0.035119 3.7643 0.0976311C3.70179 0.160143 3.66667 0.244928 3.66667 0.333333V3.66667H0.333333C0.244928 3.66667 0.160143 3.70179 0.0976311 3.7643C0.035119 3.82681 0 3.91159 0 4H0C0 4.08841 0.035119 4.17319 0.0976311 4.2357C0.160143 4.29821 0.244928 4.33333 0.333333 4.33333H3.66667V7.66667C3.66667 7.75507 3.70179 7.83986 3.7643 7.90237C3.82681 7.96488 3.91159 8 4 8C4.08841 8 4.17319 7.96488 4.2357 7.90237C4.29821 7.83986 4.33333 7.75507 4.33333 7.66667V4.33333H7.66667C7.75507 4.33333 7.83986 4.29821 7.90237 4.2357C7.96488 4.17319 8 4.08841 8 4C8 3.91159 7.96488 3.82681 7.90237 3.7643C7.83986 3.70179 7.75507 3.66667 7.66667 3.66667Z"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                </Link>

                {item.children && isServicesOpen && (
                  <ul
                    ref={dropdownRef}
                    className="absolute bottom-8 left-1/2 mb-2 -translate-x-1/2 transform rounded-lg bg-[--gray-25] p-2 shadow-xl"
                    role="menu"
                    aria-label="Services submenu"
                  >
                    {item.children.map((child) => (
                      <li key={child.label} role="none">
                        <Link
                          href={child.href}
                          className={`block whitespace-nowrap rounded px-4 py-2 text-sm transition-colors hover:bg-[--gray-50] hover:text-white ${
                            pathname === child.href
                              ? "text-[var(--orange-color2)]"
                              : "text-gray-200"
                          }`}
                          role="menuitem"
                          aria-current={
                            pathname === child.href ? "page" : undefined
                          }
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <Link href={actionBtn.href} className={`relative`}>
                <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-gray-300 bg-[--gray-900] px-4 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    className="animate-pulse"
                  >
                    <circle cx="4" cy="4" r="4" fill="#56D556" />
                  </svg>
                  <span className="text-sm font-normal text-[--gray-50]">
                    {actionBtn.label}
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobile && (
        <div
          ref={mobileMenuRef}
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } fixed bottom-20 left-1/2 w-full -translate-x-1/2 transform rounded-lg border-xs border-[--gray-200] bg-[--gray-25] p-4 shadow-lg`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <ul className="w-full space-y-2" role="menu">
            {menuItems.map((item) => (
              <li key={item.label} role="none">
                <Link
                  href={item.href}
                  className={`font-nortica block rounded-lg px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors hover:bg-[--gray-50] hover:text-white ${
                    pathname === item.href
                      ? "text-[var(--orange-color2)]"
                      : "text-gray-200"
                  }`}
                  role="menuitem"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="ml-4 mt-2 space-y-1" role="menu">
                    {item.children.map((child) => (
                      <li key={child.label} role="none">
                        <Link
                          href={child.href}
                          className={`block rounded-lg px-4 py-2 text-sm font-normal uppercase tracking-wider transition-colors hover:bg-[--gray-50] hover:text-white ${
                            pathname === child.href
                              ? "text-[var(--orange-color2)]"
                              : "text-white"
                          }`}
                          role="menuitem"
                          onClick={() => setIsMobileMenuOpen(false)}
                          aria-current={
                            pathname === child.href ? "page" : undefined
                          }
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MainMenu;

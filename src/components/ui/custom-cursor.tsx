"use client";
import { gsap } from "@/utils/gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";

interface CursorProps {
  color?: string;
  size?: {
    small: number;
    large: number;
  };
  borderWidth?: number;
  followSpeed?: number;
  initialDelay?: number;
}

interface CursorState {
  scale: number;
  text: string | null;
  hasBackground: boolean;
  isArrow: boolean;
}

const CustomCursor: React.FC<CursorProps> = ({
  color = "white",
  size = { small: 8, large: 10 },
  borderWidth = 2,
  followSpeed = 6,
  initialDelay = 0,
}) => {
  const cursorSmall = useRef<HTMLDivElement>(null);
  const cursorBig = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>({
    scale: 1,
    text: null,
    hasBackground: false,
    isArrow: false,
  });

  const mousePosition = useRef({ x: 0, y: 0 });
  const followerPosition = useRef({ x: 0, y: 0 });

  useGSAP(() => {
    const cursor = cursorSmall.current;
    const follower = cursorBig.current;

    if (!cursor || !follower) return;

    gsap.to([cursor, follower], {
      duration: 0.3,
      opacity: 1,
      delay: initialDelay,
      ease: "power2.out",
    });

    const updateCursor = () => {
      gsap.set(cursor, {
        x: mousePosition.current.x,
        y: mousePosition.current.y,
        xPercent: -50,
        yPercent: -50,
      });

      followerPosition.current.x +=
        (mousePosition.current.x - followerPosition.current.x) / followSpeed;
      followerPosition.current.y +=
        (mousePosition.current.y - followerPosition.current.y) / followSpeed;

      gsap.set(follower, {
        x: followerPosition.current.x,
        y: followerPosition.current.y,
        xPercent: -50,
        yPercent: -50,
      });
    };

    gsap.ticker.add(updateCursor);

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseDown = () => {
      gsap.to(cursorState.hasBackground ? follower : [cursor, follower], {
        scale: 0.8,
        duration: 0.2,
      });
    };

    const handleMouseUp = () => {
      gsap.to(cursorState.hasBackground ? follower : [cursor, follower], {
        scale: cursorState.scale,
        duration: 0.2,
      });
    };

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorData = target.closest("[data-cursor]");
      const isInteractive = target.closest('a, button, input, [role="button"]');

      if (cursorData) {
        const text = cursorData.getAttribute("data-cursor");
        setCursorState((prev) => ({
          ...prev,
          scale: 2.0,
          text: text,
          hasBackground: true,
          isArrow: isInteractive !== null,
        }));

        gsap.to(cursor, {
          opacity: 0,
          duration: 0.3,
          display: "none",
        });

        gsap.to(follower, {
          scale: 2.0,
          backgroundColor: "white",
          opacity: 1,
          border: "none",
          width: size.large * 2,
          height: size.large * 2,
          duration: 0.4,
          rotate: isInteractive ? 45 : 0,
        });
      } else if (isInteractive) {
        setCursorState((prev) => ({
          ...prev,
          scale: 1.6,
          text: null,
          hasBackground: false,
          isArrow: true,
        }));

        gsap.to(follower, {
          scale: 1.6,
          backgroundColor: "transparent",
          rotate: 45,
          duration: 0.3,
        });
      } else {
        handleDefaultState();
      }
    };

    const handleDefaultState = () => {
      setCursorState({
        scale: 1,
        text: null,
        hasBackground: false,
        isArrow: false,
      });

      gsap.to(cursor, {
        opacity: 1,
        duration: 0.3,
        display: "block",
      });

      gsap.to(follower, {
        scale: 1,
        backgroundColor: "transparent",
        border: `${borderWidth}px solid ${color}`,
        width: size.large,
        height: size.large,
        rotate: 0,
        duration: 0.3,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleElementHover);

    return () => {
      gsap.ticker.remove(updateCursor);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleElementHover);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorSmall}
        className={`pointer-events-none fixed z-[9999] opacity-0 mix-blend-difference transition-opacity duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          width: `${size.small}px`,
          height: `${size.small}px`,
          backgroundColor: color,
          borderRadius: "50%",
        }}
      />
      <div
        ref={cursorBig}
        className={`pointer-events-none fixed z-[9999] flex items-center justify-center text-center opacity-0 ${
          cursorState.text
            ? "bg-white/10 mix-blend-difference shadow-sm backdrop-blur-[.5px]"
            : "mix-blend-difference"
        } transition-opacity duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${cursorState.text ? "p-4" : ""}`}
        style={{
          width: `${size.large}px`,
          height: `${size.large}px`,
          border: `${borderWidth}px solid ${color}`,
          borderRadius: "50%",
        }}
      >
        {cursorState.text && !cursorState.isArrow && (
          <span className="whitespace-wrap text-[10px] font-medium uppercase text-[var(--gray-950)]">
            {cursorState.text}
          </span>
        )}
        {cursorState.text && cursorState.isArrow && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            className={`-rotate-[45deg] transform`}
          >
            <path
              d="M9.16682 0H4.16682V0.833333H8.57765L0.0180664 9.39292L0.607233 9.98208L9.16682 1.4225V5.83333H10.0002V0.833333C10.0002 0.37375 9.6264 0 9.16682 0Z"
              className={`${
                cursorState.text ? "fill-[var(--gray-900)]" : "fill-white"
              }`}
            />
          </svg>
        )}
        {cursorState.isArrow && !cursorState.text && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 20 20"
            fill="none"
            className={`-rotate-[45deg] transform ${
              cursorState.text ? "fill-[var(--gray-900)]" : "fill-white"
            }`}
          >
            <circle
              cx="10"
              cy="10"
              r="9"
              className={`${
                cursorState.text ? "stroke-[var(--gray-900)]" : "stroke-white"
              }`}
              strokeWidth="2"
            />
            <path
              d="M7 14L13 6"
              className={`${
                cursorState.text ? "stroke-[var(--gray-900)]" : "stroke-white"
              }`}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </div>
    </>
  );
};

export default CustomCursor;

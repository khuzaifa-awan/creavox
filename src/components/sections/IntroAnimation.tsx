"use client";
import { useEffect, useRef, useState } from "react";

export function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const tubeInnerRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const stage = stageRef.current;
      const tubeInner = tubeInnerRef.current;
      if (!stage || !tubeInner) return;

      const numLines = 10;
      const fontSize = 8; // vw
      const angle = 360 / numLines;

      // Clone lines
      const firstLine = tubeInner.querySelector(".line") as HTMLElement;
      for (let i = 0; i < numLines - 1; i++) {
        const clone = firstLine.cloneNode(true) as HTMLElement;
        tubeInner.appendChild(clone);
      }

      const lines = tubeInner.querySelectorAll<HTMLElement>(".line");

      // Calculate radius
      const getRadius = () => {
        const fontSizePx = (window.innerWidth / 100) * fontSize;
        return (fontSizePx / 2) / Math.sin((180 / numLines) * (Math.PI / 180));
      };

      let radius = getRadius();

      const positionLines = () => {
        radius = getRadius();
        gsap.set(lines, {
          rotationX: (index) => -angle * index,
          z: radius,
          transformOrigin: `50% 50% -${radius}px`,
        });
      };

      const setProps = () => {
        lines.forEach((line) => {
          const degrees = gsap.getProperty(line, "rotateX") as number;
          const radians = degrees * (Math.PI / 180);
          const conversion = Math.abs(Math.cos(radians) / 2 + 0.5);
          gsap.set(line, {
            opacity: conversion + 0.1,
            fontWeight: 200 + 600 * conversion,
          });
        });
      };

      positionLines();
      setProps();
      window.addEventListener("resize", () => {
        positionLines();
        setProps();
      });

      // Fade in stage
      gsap.to(stage, { autoAlpha: 1, duration: 0.8, delay: 0.2 });

      // Main timeline — rotate 90°, zoom, fade out, reveal hero
      const tl = gsap.timeline({ delay: 0.8 });

      // Rotate 90°
      tl.to(lines, {
        rotationX: "+=90",
        duration: 1.2,
        ease: "power2.inOut",
        onUpdate: setProps,
      });

      // Zoom camera in
      tl.to(
        tubeInner.parentElement,
        {
          perspective: "5vw",
          duration: 1,
          ease: "expo.out",
        },
        "-=0.4"
      );

      // Fade out all lines
      tl.to(
        lines,
        {
          opacity: 0,
          scale: 2,
          duration: 0.6,
          ease: "power2.in",
          stagger: 0.02,
        },
        "-=0.2"
      );

      // Fade out entire stage
      tl.to(stage, {
        autoAlpha: 0,
        duration: 0.4,
        ease: "power1.in",
        onComplete: () => {
          setDone(true);
          onComplete();
        },
      });
    };

    init();
  }, [onComplete]);

  if (done) return null;

  return (
    <div
      ref={stageRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#0b0d11",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        visibility: "hidden",
      }}
    >
      {/* Tube */}
      <div
        style={{
          position: "fixed",
          top: "50vh",
          left: "50vw",
          perspective: "100vw",
        }}
      >
        <div
          ref={tubeInnerRef}
          style={{ position: "relative", transformStyle: "preserve-3d" }}
        >
          <h1
            className="line"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              margin: 0,
              fontFamily: "'Poppins', sans-serif",
              fontSize: "8vw",
              fontWeight: 800,
              textTransform: "uppercase",
              lineHeight: 1,
              color: "#F0EFE7",
              transformStyle: "preserve-3d",
              whiteSpace: "nowrap",
              letterSpacing: "0.05em",
            }}
          >
            Creavox
          </h1>
        </div>
      </div>
    </div>
  );
}
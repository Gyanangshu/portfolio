import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

const MarqueeRow = ({ speed = 20, reverse = false, skills }) => {
  const rowRef = useRef(null);
  const tweenRef = useRef(null);

  useGSAP(() => {
    const el = rowRef.current;
    const totalWidth = el.scrollWidth / 2;

    gsap.set(el, { x: reverse ? -totalWidth : 0 });

    tweenRef.current = gsap.to(el, {
      x: reverse ? 0 : -totalWidth,
      duration: speed,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => {
          return reverse 
            ? parseFloat(x) % totalWidth
            : parseFloat(x) % totalWidth;
        })
      }
    });

    const parent = el.parentElement;
    const pause = () => tweenRef.current.pause();
    const resume = () => tweenRef.current.resume();

    parent.addEventListener("mouseenter", pause);
    parent.addEventListener("mouseleave", resume);

    return () => {
      parent.removeEventListener("mouseenter", pause);
      parent.removeEventListener("mouseleave", resume);
      tweenRef.current?.kill();
    };
  }, [reverse, speed]);

  return (
    <div className="overflow-hidden w-full cursor-pointer">
      <div ref={rowRef} className="flex gap-3 whitespace-nowrap w-max">
        {[...skills, ...skills].map((skill, i) => (
          <div
            key={i}
            className="flex items-center gap-1.5 rounded-3xl pl-3 pr-4 py-1 border-2 border-white/40 w-max backdrop-blur-md"
          >
            <Image
              src={skill.icon.src || skill.icon}
              alt={skill.name}
              height={25}
              width={25}
            />
            <p className="font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsMarquee = ({ skillsList }) => {
  const chunkSize = Math.ceil(skillsList.length / 3);
  const rows = [
    skillsList.slice(0, chunkSize),
    skillsList.slice(chunkSize, chunkSize * 2),
    skillsList.slice(chunkSize * 2),
  ];

  return (
    <div className="relative w-full flex flex-col gap-5 pt-16 marquee-mask">
      <MarqueeRow skills={rows[0]} speed={20} reverse={false} />
      <MarqueeRow skills={rows[1]} speed={25} reverse={true} />
      <MarqueeRow skills={rows[2]} speed={20} reverse={false} />
    </div>
  );
};

export default SkillsMarquee;
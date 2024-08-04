"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useToast } from "./use-toast";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    type: string;
    source: string;
    link: string;
    difficulty: string;
    description: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { toast } = useToast();
  const [liked, setLiked] = useState<boolean>(false);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className,
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          rel="noopener noreferrer"
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-600 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="grid grid-flow-col justify-between">
              <form>
                <button type="submit">
                  <Heart className="hover:cursor-pointer hover:fill-red-400" />
                </button>
              </form>
              <SquareArrowOutUpRight className="hover:fill-primary hover:cursor-pointer" />
            </div>

            <Link href={item.link} target="_blank">
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <CardDescription className=" text-primary">
                <div>Source: {item.source}</div>
                <div>Type: {item.type}</div>
                <div>Difficulty: {item.difficulty}</div>
              </CardDescription>
            </Link>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl  h-full w-full p-4 overflow-hidden bg-muted border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className,
      )}
    >
      <div className="relative  z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-primary font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-secondary-foreground tracking-wide leading-relaxed text-sm",
        className,
      )}
    >
      {children}
    </p>
  );
};

"use client";
import { Card } from "./card";
import { cn } from "@/utils/style";

type Props = {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

export const BaseCard = ({ children, className, onClick }: Props) => (
  <Card
    onClick={onClick}
    className={cn(
      "relative flex aspect-[1/1.4142] scale-100 cursor-pointer items-center justify-center bg-secondary/50 p-0 active:scale-95",
      className
    )}
  >
    {children}
  </Card>
);

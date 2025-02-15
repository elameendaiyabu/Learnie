import Link from "next/link";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUser, Menu, GraduationCap } from "lucide-react";
import { ThemeSwitcher } from "./ThemeSwitcher";

type Props = {};

export default async function Header({}: Props) {


  return (
    <header className="sticky z-50 top-0 flex h-16 items-center gap-4 border-b bg-opacity-60 backdrop-blur-md px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <GraduationCap className=" h-6 w-6" />
          <span className="sr-only">
            Personalized Recommendation System for Online Learning Resources
          </span>
        </Link>
        <Button variant="ghost">
          <Link href="#" className=" transition-colors   p-2 rounded">
            Home
          </Link>
        </Button>
        <Button variant="ghost">
          <Link href="#" className=" transition-colors  p-2 rounded">
            Saved
          </Link>
        </Button>
        <Button variant="ghost">
          <Link href="#" className=" transition-colors  p-2 rounded">
            Popular
          </Link>
        </Button>
        <Button variant="ghost">
          <Link href="#" className=" transition-colors  p-2 rounded">
            Reviews
          </Link>
        </Button>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <GraduationCap className=" h-6 w-6" />
              <span className="sr-only">
                Personalized Recommendation System for Online Learning Resources
              </span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Saved
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Popular
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Reviews
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative"></div>
        </form>
        <ThemeSwitcher />
            <Link href="/auth/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/auth/signup">
              <Button>Sign Up</Button>
            </Link>
          
      </div>
    </header>
  );
}

import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white border-b z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold text-primary">Better</a>
        </Link>

        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/">
            <a className="text-gray-600 hover:text-primary transition-colors">
              Home
            </a>
          </Link>
          <Link href="/about-us">
            <a className="text-gray-600 hover:text-primary transition-colors">
              About Us
            </a>
          </Link>
          <Link href="/mortgage-calculator">
            <a className="text-gray-600 hover:text-primary transition-colors">
              Mortgage Calculator
            </a>
          </Link>
          <Link href="/start">
            <Button variant="default">Get Started</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
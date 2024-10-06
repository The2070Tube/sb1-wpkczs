"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, User } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      setIsLoggedIn(true);
      setUserName(userData.name);
    } else {
      setIsLoggedIn(false);
      setUserName("");
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUserName("");
    router.push('/');
  };

  return (
    <header className="bg-background shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          AI Learning
        </Link>
        <nav className="hidden md:flex space-x-4 items-center">
          <Link href="/dashboard" className="hover:underline">
            Dashboard
          </Link>
          <Link href="/courses" className="hover:underline">
            Courses
          </Link>
          <Link href="/marketplace" className="hover:underline">
            Marketplace
          </Link>
          <ModeToggle />
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <User className="h-6 w-6" />
              <span>{userName}</span>
              <Button onClick={handleSignOut}>Sign Out</Button>
            </div>
          ) : (
            <Button asChild>
              <Link href="/signin">Sign In</Link>
            </Button>
          )}
        </nav>
        <div className="md:hidden flex items-center">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu />
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background py-2">
          <nav className="flex flex-col space-y-2 px-4">
            <Link href="/dashboard" className="hover:underline">
              Dashboard
            </Link>
            <Link href="/courses" className="hover:underline">
              Courses
            </Link>
            <Link href="/marketplace" className="hover:underline">
              Marketplace
            </Link>
            {isLoggedIn ? (
              <>
                <span>{userName}</span>
                <Button onClick={handleSignOut}>Sign Out</Button>
              </>
            ) : (
              <Button asChild>
                <Link href="/signin">Sign In</Link>
              </Button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
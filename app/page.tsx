import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Code, Briefcase, Languages } from "lucide-react";

export default function Home() {
  const categories = [
    { title: "Coding", icon: Code, description: "Learn programming languages and software development" },
    { title: "Business Skills", icon: Briefcase, description: "Develop essential skills for the corporate world" },
    { title: "Language Learning", icon: Languages, description: "Master new languages with AI-powered lessons" },
    { title: "General Knowledge", icon: BookOpen, description: "Expand your knowledge across various subjects" },
  ];

  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to AI-Driven Learning</h1>
        <p className="text-xl mb-6">Personalized courses tailored to your learning style and goals</p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/signin">Sign In</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/register">Register</Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Explore Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {<category.icon className="mr-2" />}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{category.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const courses = [
  { id: 1, title: "Introduction to Python", category: "Coding", difficulty: "Beginner", progress: 0 },
  { id: 2, title: "Advanced JavaScript", category: "Coding", difficulty: "Advanced", progress: 25 },
  { id: 3, title: "Machine Learning Basics", category: "Data Science", difficulty: "Intermediate", progress: 10 },
  { id: 4, title: "Business Communication", category: "Business", difficulty: "Beginner", progress: 50 },
  { id: 5, title: "Spanish for Beginners", category: "Language", difficulty: "Beginner", progress: 0 },
  { id: 6, title: "Digital Marketing Fundamentals", category: "Marketing", difficulty: "Beginner", progress: 0 },
];

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Courses</h1>

      <div className="flex justify-between items-center">
        <Input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Button>Filter</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{course.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-2">
                <Badge>{course.difficulty}</Badge>
                <span>{course.progress}% complete</span>
              </div>
              <Progress value={course.progress} className="mb-4" />
              <Button className="w-full">
                {course.progress > 0 ? "Continue" : "Start"} Course
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
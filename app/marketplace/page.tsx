"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const courses = [
  { id: 1, title: "Advanced React Patterns", instructor: "Jane Doe", price: 49.99, rating: 4.8, students: 1200 },
  { id: 2, title: "Machine Learning with Python", instructor: "John Smith", price: 59.99, rating: 4.7, students: 980 },
  { id: 3, title: "Financial Modeling in Excel", instructor: "Emily Brown", price: 39.99, rating: 4.5, students: 750 },
  { id: 4, title: "Digital Marketing Mastery", instructor: "Michael Johnson", price: 54.99, rating: 4.6, students: 1100 },
  { id: 5, title: "UX/UI Design Fundamentals", instructor: "Sarah Lee", price: 44.99, rating: 4.9, students: 1500 },
  { id: 6, title: "Data Visualization with D3.js", instructor: "David Wilson", price: 49.99, rating: 4.7, students: 820 },
];

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Course Marketplace</h1>

      <div className="flex justify-between items-center">
        <Input
          type="text"
          placeholder="Search courses or instructors..."
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
              <CardDescription>By {course.instructor}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <Badge variant="secondary">${course.price}</Badge>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>{course.rating}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{course.students} students enrolled</p>
              <Button className="w-full">Enroll Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
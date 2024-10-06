"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Award, TrendingUp } from "lucide-react";

export default function Dashboard() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  const recommendedCourses = [
    { title: "Advanced JavaScript", progress: 25 },
    { title: "Machine Learning Basics", progress: 10 },
    { title: "Business Communication", progress: 50 },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Welcome back, Learner!</h1>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Courses in Progress
                </CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Completed Courses
                </CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">10</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Learning Streak
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7 days</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="progress">
          <Card>
            <CardHeader>
              <CardTitle>Course Progress</CardTitle>
              <CardDescription>Your progress across all courses</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recommendedCourses.map((course, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span>{course.title}</span>
                    <span>{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="w-full" />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="achievements">
          <Card>
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
              <CardDescription>Your learning milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Completed 10 courses</li>
                <li>7-day learning streak</li>
                <li>Mastered JavaScript Basics</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Recommended Courses</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {recommendedCourses.map((course, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={course.progress} className="mb-2" />
                <p>{course.progress}% complete</p>
                <Button className="mt-4">Continue Learning</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
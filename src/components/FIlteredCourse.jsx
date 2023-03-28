import React from "react";
import { courses } from "@/assets/json/Courses.js";
import { CourseCard } from "./CourseCard";
import styled from "styled-components";

export const Courses = ({ category }) => {
  const filteredCourses = category
    ? courses.filter((course) => course.category === category)
    : courses;

  return (
    <MaskedCourses>
      {filteredCourses.map((course) => (
        <CourseCard key={course.id} allCourses={course} />
      ))}
    </MaskedCourses>
  );
};

let MaskedCourses = styled.section`
  transition: 0.5s ease;
  @media (min-width: 820px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .each_courses {
      transition: 0.5s ease;
      width: 48%;
    }
  }
  @media (min-width: 1200px) {
    .each_courses {
      transition: 0.5s ease;
      width: 32%;
    }
  }
`;
// const courses = [
//   {
//     id: 1,
//     title: "React Fundamentals",
//     rating: "4.8 (2.5k+ ratings)",
//     courseImg: "/images/react-fundamentals.jpg",
//     duration: "2h 30m",
//     instructorName: "John Doe",
//     instructorPicture: "/images/john-doe.jpg",
//     totalLessons: 30,
//     category: "Development",
//     price: 99.99,
//   },
//   {
//     id: 2,
//     title: "Graphic Design Basics",
//     rating: "4.5 (1.2k+ ratings)",
//     courseImg: "/images/graphic-design-basics.jpg",
//     duration: "3h 45m",
//     instructorName: "Jane Smith",
//     instructorPicture: "/images/jane-smith.jpg",
//     totalLessons: 25,
//     category: "Designs",
//     price: 149.99,
//   },
//   {
//     id: 3,
//     title: "Social Media Marketing",
//     rating: "4.2 (3k+ ratings)",
//     courseImg: "/images/social-media-marketing.jpg",
//     duration: "4h 15m",
//     instructorName: "Mike Johnson",
//     instructorPicture: "/images/mike-johnson.jpg",
//     totalLessons: 40,
//     category: "Marketing",
//     price: 199.99,
//   },
//   {
//     id: 4,
//     title: "Hello",
//     rating: "4.8 (2.5k+ ratings)",
//     courseImg: "/images/react-fundamentals.jpg",
//     duration: "2h 30m",
//     instructorName: "John Doe",
//     instructorPicture: "/images/john-doe.jpg",
//     totalLessons: 30,
//     category: "Development",
//     price: 99.99,
//   },
//   {
//     id: 5,
//     title: "Graphic Design Basics",
//     rating: "4.5 (1.2k+ ratings)",
//     courseImg: "/images/graphic-design-basics.jpg",
//     duration: "3h 45m",
//     instructorName: "Jane Smith",
//     instructorPicture: "/images/jane-smith.jpg",
//     totalLessons: 25,
//     category: "Designs",
//     price: 149.99,
//   },
//   {
//     id: 6,
//     title: "Social Media Marketing",
//     rating: "4.2 (3k+ ratings)",
//     courseImg: "/images/social-media-marketing.jpg",
//     duration: "4h 15m",
//     instructorName: "Mike Johnson",
//     instructorPicture: "/images/mike-johnson.jpg",
//     totalLessons: 40,
//     category: "Marketing",
//     price: 199.99,
//   },
//   // ...
// ];

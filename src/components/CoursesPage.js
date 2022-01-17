import React, { useState, useEffect } from "react";
import courseStore from "../stores/CourseStore";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import { loadCourses, deleteCourse } from "../actions/courseActions";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    // When there are no courses in the store, load them by calling the API.
    if (courseStore.getCourses().length === 0) {
      console.log("Course store is empty, loading courses.");
      loadCourses();
    } else {
      console.log("Course store has already been loaded.");
    }
    // Cleanup on unmount
    return () => courseStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    //Flux steps explained here.
    // This is the 4th step of, React -> actions -> stores -> React
    // ---------------------------------------------------------^--
    // When the store is changed, useEffect is called by registering listener, remember?
    setCourses(courseStore.getCourses());
  }

  return (
    <div>
      <h2>Courses</h2>
      <Link className="btn btn-primary mb-3" to="/course">
        Add Course
      </Link>
      <CourseList
        courses={courses}
        // Passing the deleteCourse function here instead of importing it in CourseList
        // to avoid coupling the CourseList to FLux
        deleteCourse={deleteCourse}
      />
    </div>
  );
}

export default CoursesPage;

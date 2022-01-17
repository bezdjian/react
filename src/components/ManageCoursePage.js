import React from "react";
import CourseForm from "./CourseForm";
import { useState, useEffect } from "react";
import courseStore from "../stores/CourseStore";
import * as courseActions from "../actions/courseActions";
import { toast } from "react-toastify";

const ManageCoursePage = (props) => {
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  useEffect(() => {
    // Run onChange function when Flux store changes.
    courseStore.addChangeListener(loadCourses);
    const slug = props.match.params.slug; // from path /courses/:slug

    // After UI viewing this component, when the user hits refresh,
    // we want to reload all the courses from the store
    if (courses.length === 0) {
      console.log("Empty, loading...");
      courseActions.loadCourses();
    } else if (slug) {
      console.log("Getting the course by slug");
      let _course = courseStore.getCourseBySlug(slug);
      setCourse(_course);
      toast.success("Course loaded", { theme: "colored" });
    }
    // Cleanup change listener on component onmount
    return () => courseStore.removeChangeListener(loadCourses);
  }, [courses.length, props.match.params.slug]); // <- keeps an eye on this prop for any changes. If it changes, runs useEffect and runs the logic inside useEffect function which loads the course.

  function loadCourses() {
    setCourses(courseStore.getCourses());
  }

  // Instead of handleFormChange(event) and then event.target,
  // we can use handleFormChange({target}) directly instead.
  function handleOnChange({ target }) {
    // Creates a copy with all the values and updates the ones you declare.
    // ...course = Copies from the course object.
    // [event.target.name]: event.target.value = Computed property. Reads as: Set a property on this object on the value of this variable
    const updatedCourse = {
      ...course,
      [target.name]: target.value,
    };
    setCourse(updatedCourse);
  }

  function formIsValid() {
    const _errors = {};

    if (!course.title) _errors.title = "Title is required!";
    if (!course.authorId) _errors.authorId = "Author is required!";
    if (!course.category) _errors.category = "Category is required!";

    setErrors(_errors);
    console.log("Object.keys(_errors).length: ", Object.keys(_errors).length);
    // Form is valid when _errors object has no objects.
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault(); // Does not post back to server.
    if (!formIsValid()) return;

    courseActions
      .saveCourse(course)
      .then(() => {
        props.history.push("/courses");
        toast.success("Course saved!", {
          theme: "colored",
        });
      })
      .catch((err) => {
        console.log("Error in save course: ", err);
        toast.error(err);
      });
  }

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        errors={errors}
        course={course}
        onChange={handleOnChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;

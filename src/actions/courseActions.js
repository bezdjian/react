import * as courseApi from "../api/courseApi";
import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

export function saveCourse(course) {
  // Tells all the stores that a course was just created with given actionType.
  return courseApi.saveCourse(course).then((savedCourse) => {
    dispatcher.dispatch({
      actionType: course.id
        ? actionTypes.UPDATE_COURSE
        : actionTypes.CREATE_COURSE,
      course: savedCourse,
    });
  });
}

export function loadCourses() {
  return courseApi.getCourses().then((courses) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      courses: courses,
      // You can also write like below, since the props and variable names are alike
      // courses
    });
  });
}

export function deleteCourse(id) {
  //Flux steps explained here.
  // This is the 2st step of, React -> actions -> stores -> React
  // -------------------------------------^----------------------
  return courseApi.deleteCourse(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_COURSE,
      id,
    });
  });
}

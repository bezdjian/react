import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _courses = [];

class CourseStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getCourses() {
    return _courses;
  }

  getCourseBySlug(slug) {
    return _courses.find((course) => course.slug === slug);
  }
}

const store = new CourseStore();

dispatcher.register((action) => {
  console.log("Action: ", action);
  switch (action.actionType) {
    case actionTypes.CREATE_COURSE:
      _courses.push(action.course); // action.course is specified in courseActions.js
      store.emitChange(); // Notify listeners
      break;

    case actionTypes.LOAD_COURSES:
      _courses = action.courses;
      store.emitChange();
      break;
    case actionTypes.UPDATE_COURSE:
      _courses = _courses.map((course) =>
        // If we are updating an existing course
        course.id === action.course.id ? action.course : course
      );
      store.emitChange();
      break;
    case actionTypes.DELETE_COURSE:
      //Flux steps explained here.
      // This is the 3rd step of, React -> actions -> stores -> React
      // -----------------------------------------------^------------
      _courses = _courses.filter(
        (course) => course.id !== parseInt(action.id, 10)
      );
      store.emitChange();
      break;
    default:
      // Nothing to do.. yet..
      console.log(
        `action.actionType: ${action.actionType} is not implemented yet.`
      );
  }
});

export default store;

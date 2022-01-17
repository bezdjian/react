import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function CourseList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <td>#</td>
          <td>Title</td>
          <td>Author ID</td>
          <td>Category</td>
          <td> </td>
        </tr>
      </thead>
      <tbody>
        {props.courses.map((course) => {
          return (
            <tr key={course.id}>
              <td>
                <Link to={"/course/" + course.id}>{course.id}</Link>
              </td>
              <td>
                <Link to={"/course/" + course.slug}>{course.title}</Link>
              </td>
              <td>{course.authorId}</td>
              <td>{course.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteCourse(props.deleteCourse, course.id)}
                >
                  X
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function deleteCourse(deleteCourse, id) {
  //Flux steps explained here.
  // This is the 1st step of, React -> actions -> stores -> React
  // ---------------------------^--------------------------------
  deleteCourse(id);
  toast.success(`Course '${id}' has been deleted`);
}

// This works in development mode.
CourseList.propTypes = {
  deleteCourse: PropTypes.func.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CourseList;

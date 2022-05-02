import { useSelector, useDispatch } from "react-redux";

function addCourseAction(title) {
  return { type: "ADD_COURSE", title };
}

export default function CourseList() {
  const qty = 2;

  const courses = useSelector((state) => state.data);
  const dispatch = useDispatch();

  function addCourse() {
    dispatch(addCourseAction("html"));
  }
  return (
    <>
      <ul>
        {courses.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ul>
      <button type="button" onClick={addCourse}>
        adicionar curso
      </button>
    </>
  );
}

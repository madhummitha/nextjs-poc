import Link from "next/link";

async function fetchCourses() {
    const response = await fetch("http://localhost:3000/api/courses")
    const courses = await response.json();
    return courses;
}

const Courses = async() => {
    const courses = await fetchCourses()
    return (
        <div className="courses">
            {courses.map((course) => {
                <div key={course.id} className="card">
                    <h2>{courses.title}</h2>
                    <small>Level: {course.level}</small>
                    <p>{course.description}</p>
                    <Link href={course.link} target="_blank" className=""></Link>
                </div>
            })}
        </div>
    )
}

export default Courses;

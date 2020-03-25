import React from 'react';
export default(props) => {
    const course = props.element;
    return (
        <div className="shadow p-6 bg-white mr-4">
            <h4 className="font-bold">{course.title}</h4>
            <div className="text-center">
                <span className="inline-block bg-green-200 text-green-7000 p-2 mt-2 radius">
                    Progreso: {course.progress}
                </span>
            </div>
        </div>

);}
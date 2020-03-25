import React, { Fragment } from 'react';


export default (props) => {

    const post = props.element;
    return (
        <div className="shadow bg-white mr-4 rounded flex-shrink-0" style={{width:'300px'}}>
            
            <div className="p-8">
                <h4 className="font-bold d-40 overflow-y-hidden">
                    {post.title}
                </h4>
                <div className="text-center mt-8">
                    <a className="btn" href={post.link}>Leer</a>
                </div>
            </div>
        </div>
    );
}


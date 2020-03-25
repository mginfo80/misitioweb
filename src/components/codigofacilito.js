import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Post from "./posts";
import Course from "./course";

export default () => {
    const data = useStaticQuery(graphql`{
        codigofacilitoJson {
            data {
            courses {
                progress
                title
                url
            }
            }
        }
    }`);
    
    console.log(data);
    return (
        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto">
                    <Post data={data.codigofacilitoJson.data.courses}
                    card={Course}
                    title="Mis certificados online en CódigoFacilito" />
                    
                </div>

            </div>
        </section>
    );
}
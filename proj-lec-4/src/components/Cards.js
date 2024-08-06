import React from "react";
import Card from "./Card"

function Cards({courses,category}){


     let allCourses=[];

     console.log();

     //returns all the courses Indiscriminantely
    const getCourses=()=>{

        if(category === "All"){
        Object.values(courses).forEach ( (courseCategory)=>{
            courseCategory.forEach( (course) => {
                allCourses.push(course);
            })
        } );
    }
    else{
        return courses[category];
    }

        return allCourses;
    }

    return (<div className="flex flex-wrap justify-center gap-4 mb-4">
        {
            getCourses().map( (courses)=>{
                
                return (<Card course={courses} key={courses.id}></Card>);
            }
             )
        }
    </div>);
}

export default Cards;
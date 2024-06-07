"use strict"

window.onload = () => {

    console.log("hello from details");

    const urlParams = new URLSearchParams(location.search);

    console.log(urlParams.get("courseid"))

    if (urlParams.has("courseid")) {

        //if we have a course id, display it's details
        displayCourseDetails(urlParams.get("courseid"))

    } else {
        alert("no valid course id");
        window.location.href = "./index.html";
    }

}

async function displayCourseDetails(courseId) {

    //
    let courseDetails = await getCourseDetails(courseId);

    console.log(courseDetails)

    let courseDetailsDiv = document.querySelector("#courseDetails");

    courseDetailsDiv.innerHTML = `
<div>courseId: ${courseDetails.id}</div>
<div>courseName: ${courseDetails.courseName}</div>
<div>instructor: ${courseDetails.instructor}</div>
<div>numDays: ${courseDetails.numDays}</div>
`


}

async function getCourseDetails(courseId) {

    let response = await fetch("http://localhost:8081/api/courses/" + courseId);

    let data = await response.json();

    return data;

}



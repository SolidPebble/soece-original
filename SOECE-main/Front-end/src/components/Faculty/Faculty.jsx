import React, { useEffect, useState } from 'react';
import Navbar from "../Home/Navbar";
import './Faculty.css';

const getImage = (name) => {
  try {
    return new URL(`../../assets/${name}.jpg`, import.meta.url).href;
  } catch {
    return "https://cdn-icons-png.flaticon.com/512/149/149071.png";
  }
};

const Faculty = () => {

const [mentors,setMentors] = useState([]);

useEffect(()=>{

  fetch("/api/faculty")
.then(res => res.json())
.then(data => setMentors(data))
.catch(err => console.log(err));

},[]);



const director = mentors.find(m =>
m.Designation?.toLowerCase().includes("director")
);


const hod = mentors.find(m =>
m.Designation?.toLowerCase().includes("head")
&& !m.Designation?.toLowerCase().includes("director")
);


const professors = mentors.filter(m =>
m.Designation?.toLowerCase().includes("professor")
&& !m.Designation?.toLowerCase().includes("head")
);


const phd = mentors.filter(m =>
m.Designation?.toLowerCase().includes("phd")
);




return (

<>

<Navbar/>

<div className="faculty-section">

<div className="container">

<h1 className="faculty-title">

Our <span className="highlight">Mentors</span>

</h1>



{/* Director */}

{/* Director */}

{director && (

<div className="director-container">

<h2 className="designation-title">
Director
</h2>

<div className="faculty-card director-card">

<div className="faculty-img-container">

<img
src={getImage(director.Name)}
alt={director.Name}
/>

</div>

<div className="faculty-info">

<h3>{director.Name}</h3>

<p className="faculty-role">
{director.Designation}
</p>

<p className="faculty-spec">
{director.Department}
</p>

<p className="faculty-spec">
{director.Qualification}
</p>

<div className="faculty-contact">

<span>{director.Email}</span>

</div>

</div>

</div>

</div>

)}



{/* Head of Department Centered */}

{hod && (

<div className="director-container">

<h2 className="designation-title">

Head of Department

</h2>

<div className="faculty-card director-card">

<div className="faculty-img-container">

<img
src={getImage(hod.Name)}
alt={hod.Name}
/>

</div>

<div className="faculty-info">

<h3>{hod.Name}</h3>

<p className="faculty-role">
{hod.Designation}
</p>

<p className="faculty-spec">
{hod.Department}
</p>

<div className="faculty-contact">

<span>{hod.Email}</span>

</div>

</div>

</div>

</div>

)}



{/* Professors */}

{professors.length > 0 && (

<div className="designation-section">

<h2 className="designation-title">

Professors

</h2>

<div className="faculty-grid">

{professors.map((mentor)=>(
<div key={mentor.id} className="faculty-card">

<div className="faculty-img-container">

<img
src={getImage(mentor.Name)}
alt={mentor.Name}
/>

</div>

<div className="faculty-info">

<h3>{mentor.Name}</h3>

<p className="faculty-role">
{mentor.Designation}
</p>

<p className="faculty-spec">
{mentor.Department}
</p>

<div className="faculty-contact">

<span>{mentor.Email}</span>

</div>

</div>

</div>
))}

</div>

</div>

)}



{/* PhD Scholars */}

{phd.length > 0 && (

<div className="designation-section">

<h2 className="designation-title">

PhD Scholars

</h2>

<div className="faculty-grid">

{phd.map((mentor)=>(
<div key={mentor.id} className="faculty-card">

<div className="faculty-img-container">

<img
src={getImage(mentor.Name)}
alt={mentor.Name}
/>

</div>

<div className="faculty-info">

<h3>{mentor.Name}</h3>

<p className="faculty-role">
{mentor.Designation}
</p>

<p className="faculty-spec">
{mentor.Department}
</p>

<div className="faculty-contact">

<span>{mentor.Email}</span>

</div>

</div>

</div>
))}

</div>

</div>

)}



</div>

</div>

</>

);

};

export default Faculty;
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import SchoolIcon from "@material-ui/icons/School";
// import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <>
    <div className="exp-title">
    <h3>WHAT I HAVE DONE SO FAR</h3>
    <h1>WORK EXPERIANCE</h1>
    </div>
    <div className="experience" id="experiences">
      <VerticalTimeline lineColor=" rgba(170, 54, 124, 0.5)">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="August-2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
        //   icon={<SchoolIcon />}
        >
            <div>
          <h3 className="vertical-timeline-element-title">
          Java Developer
          </h3>
          <h5>Infeanet Solutions</h5>
          <p>◦	Developed object-oriented programming solutions, Implementing Java-based applications with features like exception handling, multithreading, and file I/O and learnt to write clean, efficient, and reusable code.</p>
<p>◦	Collaborated with a team to develop and debug application modules.  Created and maintained database schemas, tables, and stored procedures.
</p><p>◦	Gained proficiency in integrating Java applications with MySQL databases.
</p><p>◦	 Contributed to testing and debugging processes to ensure high-quality deliverables.
</p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="September-2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
        //   icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Web-developer
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            Inten-Pe
          </h5>
          <p>Successfully completed an internship in Web Development, focusing on designing and building responsive and user-friendly websites. Gained proficiency in core web technologies, including: HTML ,CSS, JAVASCRIPT ,BOOTSTRAP</p>
          <p>Responsive Websites: Designed and developed multiple responsive websites, ensuring compatibility across various devices and browsers.</p>
            <p> Integrated modern design principles to create intuitive user interfaces.</p>
<p>Code Optimization: Focused on clean, modular, and reusable code to enhance scalability and maintainability.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Jan-2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
        //   icon={}
        >
          <h3 className="vertical-timeline-element-title ">
           Python Developer
          </h3>

          <h5 className="vertical-timeline-element-subtitle">
           Shreevidya infotech
          </h5>

          <p> ◦	I learned how to approach a real world and what steps are required to build solutions using Python. Completed 5 web development projects, resulting in a 20% increase in website load speed and a 15% boost in user engagement.</p>
          <p>◦ Completed an intensive internship in Core Python, focusing on developing robust programming skills and database management using MySQL. Gained hands-on experience by working on real-world projects</p>
        </VerticalTimelineElement>
        

       
      </VerticalTimeline>
    </div>
    </>
  );
}

export default Experience;

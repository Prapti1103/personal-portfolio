/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/books.png";
import projImg3 from "../assets/img/freshcart.png";
import projImg4 from "../assets/img/seven-mentor.png";
import projImg5 from "../assets/img/finder.png";
import projImg6 from "../assets/img/creative-agency.png";
import projImg21 from "../assets/img/serum.png";
import projImg22 from "../assets/img/gymweb.png";
import projImg23 from "../assets/img/amazon.png";
import projImg24 from "../assets/img/cuda.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
 
  // const texturl1="https://github.com/Prapti1103/Dormitory_Booking"
  // const gotToNewPage=()=>{
  //   navigate("https://github.com/Prapti1103/Dormitory_Booking");
  // }
  
  const projects = [
    {
      title: "Dormitory Booking",
      description: "Web-application",
      imgUrl: projImg1,
      texturl:"live demo",
    },
    {
      title: "Soil Serum Web",
      description: "Web-application",
      imgUrl: projImg21,
      texturl:"live demo",
    },
    
    {
      title: "FreshCart Web",
      description: "Responsive web-application",
      imgUrl: projImg3,
      texturl:"Click here for live demo ",
    },
    {
      title: "Sevenmentor web-clone",
      description: "Responsive web-application",
      imgUrl: projImg4,
      texturl:"Click here for live demo ",
    },
    {
      title: "Finder Web",
      description: "Responsive web-application",
      imgUrl: projImg5,
      texturl:"Click here for live demo ",
    },
    {
      title: "Creative-agency webz",
      description: "Responsive web-application",
      imgUrl: projImg6,
      texturl:"Click here for live demo ",
    },
  ];
  const project2 = [
    {
      title: "PM Bookly",
      description: "Web application",
      imgUrl: projImg2,
      texturl:"Click here for live",
      // livelink:"https://bookzbyprapti.netlify.app/",
    },
    
    {
      title: "Gym Web",
      description: "Web application",
      imgUrl: projImg22,
      texturl:"Click here for live",
      
    },
    {
      title: "Amazon Web",
      description: "Responsive web-application",
      imgUrl: projImg23,
      texturl:"Click here for live demo ",
    },
    {
      title: "Cuda Webs",
      description: "Responsive web-application",
      imgUrl: projImg24,
      texturl:"Click here for live demo ",
    },
    {
      title: "Finder Web",
      description: "Responsive web-application",
      imgUrl: projImg5,
      texturl:"Click here for live demo ",
    },
    {
      title: "Creative-agency webz",
      description: "Responsive web-application",
      imgUrl: projImg6,
      texturl:"Click here for live demo ",
    },
  ];
  
  
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>🚀 Explore my project portfolio to see real-world examples of my work, showcasing my ability to tackle complex challenges and deliver efficient, scalable, and user-friendly solutions. Each project is briefly described, with links to code repositories and live demos, reflecting my dedication to quality and innovation. Dive in to witness my skills in action and how I bring ideas to life!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    
                      <Row >
                        {
                          projects.map((project, index) => {
                            return (
                              
                              <ProjectCard 
                                key={index}
                                {...project}
                               
                                />
                              
                              
                            )
                          })
                        }
                      </Row>
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          project2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row> </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

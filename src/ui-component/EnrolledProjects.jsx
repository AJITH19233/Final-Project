import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AppContext } from './AppContext';
import { Link } from 'react-router-dom';
import MobileAppImage from '../Assets/orange theme.jpg';
import './Datascience.css';
import WebDevelopmentImage from '../Assets/orange theme.jpg'
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Reportsubmission from './Reportsubmission';
import Weeksubmission from './Weeksubmission';
import Messages from './Messages';
import Scorecard from './Scorecard';
import DatascienceImage from '../Assets/orange theme.jpg'

const EnrolledProjects = () => {
  // const { enrolled, setEnrolled ,userId, setUserId} = useContext(AppContext);
  const userId = localStorage.getItem('userId');
const [enrolledProjects, setEnrolledProjects] = useState([]);
console.log(enrolledProjects, "project selected ");

useEffect(() => {
  const fetchEnrolledProjects = async () => {
      console.log(`http://localhost:3000/user/${userId}/enrolled-projects`);
    try {
      const response = await axios.get(`http://localhost:3000/user/${userId}/enrolled-projects`);
      setEnrolledProjects(response.data.enrolledProjects);
    } catch (error) {
      console.error('Fetch Enrolled Projects Error:', error);
    }
  };

  fetchEnrolledProjects();
}, [userId]);

return (
  <div className='container d-flex justify-content-center'>
    <h2>Enrolled Projects:</h2>
    <ul>
      {enrolledProjects.map((project) => (
         <div className="datadev">

         <Link to="/Studentdash" className="back-button">Back</Link> {/*Add this line for the back button */}
                
                 {/* Image with text overlay */}
                 <div className="image-container-d">
                   <img src={DatascienceImage} alt="Data Science Project" className="project-image-d" />
                   <div className="image-overlay-d">
                   <div className="image-text-d">
                   <h2 key={project._id}>{project.title}</h2>
                   <br></br>
                   <h1 key={project._id}>Complete {project.title}: Technology, Development Skill.</h1>
                 </div>
               </div>
               </div>
                  <br></br>
         
               <div className="content-box-d">
                   <section id='title' className='py-md-5'>
                     {/* <div className="title-box"> */}
                       <h2 className='my-5 text-center'>What you'll learn</h2>
                     {/* </div> */}
                     <div className='learning-box'>
                       <ul className='learning-list'>
                         <li key={project._id}> * The course provides the entire toolbox you need to become a {project.title}.</li>
                         <li> * Learn how to pre-process data.</li>
                         <li key={project._id}> * Understand the Technology behind {project.title}.</li>
                         <li> * Learn more about Database Management:.</li>
                         <li key={project._id}> * Be able to create {project.title} Application.</li>
                         <li> * Unfold the power of deep neural networks.</li>
                         <li key={project._id}> * Improve {project.title} by studying underfitting, overfitting, training, validation, n-fold cross validation, testing, and how hyperparameters could improve performance</li>
                         <li> * Warm up your fingers as you will be eager to apply everything you have learned here to more and more real-life situations </li>
                       </ul>
                     </div>
                   </section>
                   </div>
                      <br></br>
         
                      <div className="content-box-a">
                   <section id='title' className='py-md-5'>
                     <div>
                       <h2>This Course Includes</h2>
                     </div>
               <ListGroup>
               <ListGroup.Item>On-demand video</ListGroup.Item>
               <ListGroup.Item>Coding exercises</ListGroup.Item>
               <ListGroup.Item>Articles</ListGroup.Item>
               <ListGroup.Item>Downloadable resources</ListGroup.Item>
               <ListGroup.Item>Access on mobile and TV</ListGroup.Item>
               <ListGroup.Item>Certificate of completion</ListGroup.Item>
               </ListGroup>
                   </section>
                   </div>
                     <br></br>  
         
                   <div className='content-docs'>
                     <section id='title' className='py-md-5'>
                   <div>
                     <h2>Course Content</h2>
                     </div>
                <Accordion defaultActiveKey={0} className="mt-5 p-3">
                    <Accordion.Item eventKey="0" className="item" >
                       <Accordion.Header key={project._id}>Introduction to {project.title} </Accordion.Header>
                          <Accordion.Body key={project._id}>
                          {project.title} is one of the best suited professions to thrive this century. It is digital, programming-oriented, and analytical. Therefore, it comes as no surprise that the demand for {project.title} has been surging in the job marketplace.     
         
                          However, supply has been very limited. It is difficult to acquire the skills necessary to be hired as a {project.title}.    
                          </Accordion.Body>
                     </Accordion.Item>
            <Accordion.Item eventKey="1" className="item" >
              <Accordion.Header>Project Overview Document</Accordion.Header>
                 <Accordion.Body>
            <a href="https://drive.google.com/file/d/1BZUxMMK7sLhAjFr5txV30DaquXy9u6k0/view">PDF LINK</a>
                 </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="item" >
              <Accordion.Header>Reference Materials</Accordion.Header>
                 <Accordion.Body>
                 <ol>
    <li><a href="https://www.youtube.com/watch?v=bjj1Fgy8I1Q">Reference 1</a></li>
    <li><a href="https://www.youtube.com/watch?v=pegu6VqZmv4">Reference 2</a></li>
    <li><a href="https://www.youtube.com/watch?v=3QOlo2pEpvc">Reference 3</a></li>
    <li><a href="https://www.youtube.com/watch?v=6RXtL_3BFGE">Reference 4</a></li>
  </ol>
                 </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="item" >
              <Accordion.Header>Weekly Submission and Submission Link</Accordion.Header>
                 <Accordion.Body>
                 <Weeksubmission/>
                 </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className="item" >
              <Accordion.Header>Final Project Report Submission</Accordion.Header>
                 <Accordion.Body>
                      <Reportsubmission/>
                 </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" className="item" >
              <Accordion.Header>Viva Voce Format</Accordion.Header>
                 <Accordion.Body>
                 <h2>Viva Voce Assessment</h2>
        <p>Use the following scale to provide marks:</p>
        <ul>
            <li>5: Excellent</li>
            <li>4: Very Good</li>
            <li>3: Good</li>
            <li>2: Satisfactory</li>
            <li>1: Needs Improvement</li>
        </ul>

        <div>
            <h3>1. Introduction and Communication (10 marks)</h3>
            <label for="communicationSkills">Communication Skills (5):</label>

            <label for="introduction">Introduction (5):</label>
            
        </div>

        <div>
            <h3>2. Technical Knowledge (20 marks)</h3>
            <label for="coreConcepts">Understanding of Core Concepts (10):</label>
            
            <label for="technicalSkills">Relevant Technical Skills (10):</label>
            
        </div>

        <div>
            <h3>3. Problem-Solving and Application (15 marks)</h3>
            <label for="problemSolving">Problem-Solving Skills (7):</label>
            
            <label for="applicationOfKnowledge">Application of Knowledge (8):</label>
            
        </div>

        <div>
            <h3>4. Adaptability and Learning Agility (10 marks)</h3>
            <label for="adaptability">Adaptability (5):</label>
            

            <label for="learningAgility">Learning Agility (5):</label>
          
        </div>

        <div>
            <h3>5. Professionalism and Work Ethic (15 marks)</h3>
            <label for="professionalDemeanor">Professional Demeanor (7):</label>
            
            <label for="workEthic">Work Ethic (8):</label>
            
        </div>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSelmvgFIdoRH3Eb3gzQA-hWWfhwwKGJeEpivByKbnOtoF5mtw/viewform?usp=sf_link">Submission Link</a>

                 </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6" className="item" >
              <Accordion.Header>Discussion Forum</Accordion.Header>
                 <Accordion.Body>
                 <Messages/>
                 </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7" className="item" >
              <Accordion.Header>Score System</Accordion.Header>
            
                 <Accordion.Body>
                 <Scorecard />
                 </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </section>
        </div>
      </div>
 ))}
 </ul>
</div>
  );
};

export default EnrolledProjects;

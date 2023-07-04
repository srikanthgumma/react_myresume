import mig from './images/sri.jpg'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BiGitBranch } from "react-icons/bi";
import { AiOutlinePhone } from "react-icons/ai";
import { BiAt } from "react-icons/bi";
import { BiHome } from "react-icons/bi";
import './App.css';

function App() {
  return (
    <div id="resdiv">
          <h1 style={{marginLeft:"40%",color:"white"}}>RESUME</h1>
            <div style={{padding:"15px",color:"white"}}>
                <div  id='lop'>
                   <div style={{float:"left",paddingTop:"40px"}} id='sri'>
                   <h1 style={{fontWeight:"bold"}}>SRIKANTH GUMMADI</h1>
                    <p>B.Tech Computer Science & Engineering</p>
                    <div id="resgrid" style={{display:"grid",gridTemplateColumns:"250px 250px",gap:"15px"}}>
                        <span><AiOutlinePhone/>{"  "}+91 9505907430</span>
                        <span><BiAt /> {"  "}srikanthgummadi516@gmail.com</span>
                        <span> <BiGitBranch /><a href='https://github.com/srikanthgumma/'>My Github Profile</a></span>
                        <span><BiHome />{"  "}Siddipet, Telangana</span>
                    </div>
                   </div>
                    <div style={{float:"right"}}>
                        <img src={mig} alt="my" width="200px" height="230px" style={{borderRadius:"50%"}} />
                    </div>
                </div>


                <div style={{width:"100%",height:"180px",color:"white"}} id='lop'>
                   <div style={{float:"left",fontWeight:"bold",paddingTop:"30px"}} id='career'>
                   <h3>Career Objective</h3>
                    <p> Seeking for challenging position in an organization which can utilize my abilities and skills in the best possibilities and skills in the best possible ways,<br />
                     and which motivates my sincere efforts in the right direction for the success of organization. </p>
                  
                   </div>
                 
                </div>


                <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
      style={{width:"100%",backgroundColor:"black"}}
    >
      <Tab eventKey="home" title="Education" id=''>
      <Card>
      <Card.Header>B.TECH, IIET UNIVERSITY</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Department: Compuer Science and Engineering, Gained 65%
            {' '}
          </p>
          <footer className="blockquote-footer">
            2017-2021 <cite title="Source Title">Siddipet</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>  
    <Card>
      <Card.Header>INTERMEDIATE</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Branch: MPC, Gained 87%
            {' '}
          </p>
          <footer className="blockquote-footer">
            2015-2017 <cite title="Source Title">Siddipet</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>  
    <Card>
      <Card.Header>BOARD OF SECONDARY EDUCATION TS</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Sencondary Education, Gained 77%
            {' '}
          </p>
          <footer className="blockquote-footer">
            2015<cite title="Source Title"> Raghavpoor</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>  
        </Tab>


      <Tab eventKey="profile"  title="Workshop">
      <Card>
      <Card.Header>CYBER SECURITY WORKSHOP</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Participated in the 'Ethical Hacking and cyber security workshop ' held at Indur  Institute of Engineering and Technology {' '}
          </p>
          <footer className="blockquote-footer">
            Date in <cite title="Source Title">Siddipet</cite>{" "}<a href='/'>Certificate</a>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>  
    <Card>
      <Card.Header>BLOGGING WORKSHOP</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Participated in the ‘Ethical Hacking and cyber security workshop '' held at Indur Institute of Engineering and Technology,
            {' '}
          </p>
          <footer className="blockquote-footer">
            Date in <cite title="Source Title">Siddipet</cite>{" "}<a href='/'>Certificate</a>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>  
  

      </Tab>


      <Tab eventKey="longer-tab" title="Technologies" >
      <Button variant="outline-dark" style={{width:"100%",border:"none",color:"white",fontWeight:"bold"}}>HYPERTEXT MARKUP LANGUAGE</Button>
      <Button variant="outline-dark" style={{width:"100%",border:"none",color:"white",fontWeight:"bold"}}>CASCADING STYLE SHEET</Button>
      <Button variant="outline-dark" style={{width:"100%",border:"none",color:"white",fontWeight:"bold"}}>JAVASCRIPCT</Button>
      <Button variant="outline-dark" style={{width:"100%",border:"none",color:"white",fontWeight:"bold"}}>BOOTSTRAP</Button>
      <Button variant="outline-dark" style={{width:"100%",border:"none",color:"white",fontWeight:"bold"}}>REACT JS</Button>
      <Button variant="outline-dark" style={{width:"100%",border:"none",color:"white",fontWeight:"bold"}}>GITHUB</Button>
      {/* <Button variant="outline-dark">Dark</Button> */}
            </Tab>

      <Tab eventKey="contact" title="Hobbies" >
      <Button variant="outline-dark" style={{width:"100%",border:"none",color:"white",fontWeight:"bold"}}>	Learning New Things</Button><br/>
      <Button variant="outline-dark" style={{width:"100%",border:"none",color:"white",fontWeight:"bold"}}>	Reading Books</Button><br/>
      <Button variant="outline-dark" style={{width:"100%",border:"none",color:"white",fontWeight:"bold"}}>	Browsing Internet</Button><br/>

      </Tab>


      
    </Tabs>

        

            </div>
            
        </div>
  );
}

export default App;

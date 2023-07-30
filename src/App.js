import Card from 'react-bootstrap/Card';
import { AiOutlineHome } from 'react-icons/ai';
import { SlLocationPin } from 'react-icons/sl';
import { GiSkills } from 'react-icons/gi';
import { LiaProjectDiagramSolid } from 'react-icons/lia';
import './App.css';

function App() { 
  return (
    <div style={{textAlign:"center"}}>
            <h1 style={{color:"white",marginBottom:"70px"}}>Webpage under pruduction</h1>
        <div style={{ display: "flex" }} id='home'>
            <div id='home1' style={{position:"sticky",left:"0"}}>
                <a href="#home" title='Home'><AiOutlineHome /></a>
                <a href="" title='My Location'><SlLocationPin /></a>
                <a href="#skills" title='My Skills'><GiSkills /></a>
                <a href="#projects" title='My Projects'><LiaProjectDiagramSolid /></a>
            </div>
            <div style={{ color: "white", display: "flex", flexDirection: "row", gap: "30px", width: "100%" }} >
                <div style={{ width: "30%", height: "auto" }} id='home'>
                    <div style={{ padding: "30px" }}>
                        <Card style={{ width: '100%', backgroundColor: "transparent", color: "white", textAlign: "center" }}>
                            <Card.Img variant="top" src='' style={{ borderRadius: "50%", backgroundColor:"white",opacity:".2", width: "250px", height: "250px", marginLeft: "auto", marginRight: "auto" }} />
                            <Card.Body>
                                <Card.Title style={{ lineHeight: "3px", marginBottom: "30px" }}>
                                    <h1 style={{ fontSize: "28px", fontWeight: "bold",opacity:".1" }}>I am Srikanth Gummadi</h1><br />
                                    <span style={{ fontSize: "11px",opacity:".1" }}>Front-End Developer and Instagram Influencer</span>
                                </Card.Title>
                                {/* <Card.Text id='about'>
                                    About Me!

                                </Card.Text> */}
                            </Card.Body>
                        </Card>

                    </div>

                </div>
                <div style={{  width: "65%" }}>
                    <p style={{ padding: "36px", textAlign: "justify",opacity:".02" }}>Hi All, My full name is srikanth gummadi. actually i am from siddipet. but currently i have been staying in hyd for quite a long time now. to begin with my introduction, I am very passsionate about web development and my passion towards web development started my career as web developer with interest on HTML, CSS and JS after I graduated from Indur Institute Of Engineering and Technology in siddipet with a bachelor degree in CSE.<br /> <br /> And my hobbies include reading books and learning new things every day. One of my strengths is whenever i am given a problem, no matter what, I will always and anyhow figure out way to find the solution for the problem.

                        I decided to become  a web developer when i was in my fisrt year in the institution. Cuz, I was very curious about how websites are built and how to build such webpages. then I learnt basics of web development like HTML,CSS and JS. <br /> <br />Later after graduation, I got interest on ReactJs because to become a good web developer and to produce better performing web products, ReactJs is a must and it is like an Asset to web developer. So, I learnt ReactJs at 10K coders and i have also developed real time projects such as Weather App, To-Do list App, Responsive Landing Page and E-Prathibha educational website. with these skills i have like HTML, CSS, JS & REACTJS, i am sure i will develop and produce better web products.

                        I am interested in working with a team and i am always open new opportunities and challenges.</p>
                </div>
            </div>
        </div>
        <div style={{width:"100%",textAlign:"center",height:"300px",marginTop:"40px",padding:"30px"}} id='tasks'>
            <h1 style={{color:"white",opacity:".1"}}>Tasks</h1>
          <div style={{display:"flex"}}>
          <div style={{backgroundColor:"#A40606",width:"200px",height:"200px",opacity:".1",margin:'auto',borderRadius:"50%"}}>
            </div>
            <div style={{backgroundColor:"#080357",width:"200px",height:"200px",opacity:".1",margin:'auto',marginTop:"30px",borderRadius:"50%"}}>
            </div>
            <div style={{backgroundColor:"#109648",width:"200px",height:"200px",opacity:".1",margin:'auto',marginTop:"50px",borderRadius:"50%"}}>
            </div>
            <div style={{backgroundColor:"#fff648",width:"200px",height:"200px",opacity:".1",margin:'auto',marginTop:"50px",borderRadius:"50%"}}>
            </div>
            <div style={{backgroundColor:"#1096f0",width:"200px",height:"200px",opacity:".1",margin:'auto',marginTop:"50px",borderRadius:"50%"}}>
            </div>
          </div>
        </div>

        <div style={{width:"100%",textAlign:"center",height:"300px",marginTop:"100px",padding:"30px"}} id='skills'>
            <h1 style={{color:"white",opacity:".1"}}>My Skills</h1>
          <div style={{display:"flex"}}>
          <div style={{backgroundColor:"white",width:"200px",height:"200px",opacity:".1",margin:'auto'}}>
            </div>
            <div style={{backgroundColor:"blue",width:"200px",height:"200px",opacity:".1",margin:'auto',marginTop:"30px"}}>
            </div>
            <div style={{backgroundColor:"yellow",width:"200px",height:"200px",opacity:".1",margin:'auto',marginTop:"50px"}}>
            </div>
            
          </div>
        </div>


        <div style={{width:"100%",textAlign:"center",height:"auto",marginTop:"40px",padding:"70px"}} id='projects'>
            <h1 style={{color:"white",opacity:".1"}}>My Projects</h1>
          <div style={{display:"grid",gridTemplateColumns:"200px 200px 200px",gap:"30px",justifyContent:"space-evenly"}}>
          <div style={{backgroundColor:"purple",width:"200px",height:"200px",opacity:".1",margin:'auto',marginTop:"30px"}}>
            </div>
            <div style={{backgroundColor:"black",width:"200px",height:"200px",opacity:".1",margin:'auto',marginTop:"30px"}}>
            </div>
            <div style={{backgroundColor:"gray",width:"200px",height:"200px",opacity:".1",margin:'auto',marginTop:"30px"}}>
            </div>
            <div style={{backgroundColor:"purple",width:"200px",height:"200px",opacity:".1",margin:'auto',marginTop:"30px"}}>
            </div>
            <div style={{backgroundColor:"blue",width:"200px",height:"200px",opacity:".1",margin:'auto',marginTop:"30px"}}>
            </div>
            <div style={{backgroundColor:"red",width:"200px",height:"200px",opacity:".1",margin:'auto',marginTop:"30px"}}>
            </div>
          </div>
        </div>

        <div style={{marginTop:"60px",margin:"auto",paddingBottom:"40px"}}>
            <h1 style={{color:"white",opacity:".1"}}>My Location</h1>
            <div style={{color:"white",opacity:".5"}}>
                ....................................,.......................................................
            </div>
        </div>
        
        <footer style={{padding:"120px"}}>
            <div><h1 style={{color:"white",opacity:".5"}} >Thank You for visiting my webpage</h1></div>
        </footer>



      
        </div>
  )
}

export default App;

import React, { Component } from "react";
import {Card} from "react-bootstrap";
import '../../App.css';

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "100%" }} className="container valign-wrapper background2">
        <div className="row">
          <div className="col s12 center-align">
            <h4 style={{ fontFamily:'monospace', color:'white'}}>
              <b>Working </b>
              <span style={{ fontFamily: "Monospace", color:'white'}}> SubTitle</span>
            </h4>
            <br></br>
            <div className='image'>
              <img className='object-fit_cover'src="http://berkshirehorseworks.com/wp-content/uploads/Veteran_with_Horse_21.png" alt="" style={{objectFit:'cover',backgroundColor: '#444'}}></img>
            </div>
            <br></br>
            <a href='/register'
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect waves-light hoverable indigo accent-3"
            >
              Register
            </a>
            <a href='/login'
              style={{
                marginLeft: "2rem",
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect white hoverable black-text"
            >
              Log In
            </a>
            <p className="flow-text grey-text text-darken-1">
            <Card style={{ width: '100%', marginTop:'30px', fontFamily: "Monospace", fontStyle:"italic" }}>
              <Card.Body>
                <Card.Title style={{fontWeight:'bold', color:'black'}}>"What is Equine Therapy?"</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">CRC Health </Card.Subtitle>
                <Card.Text>
                <span>Equine Therapy (also referred to as Horse Therapy, Equine-Assisted Therapy, and Equine-Assisted Psychotherapy) is a form of experiential therapy that involves interactions between patients and horses.</span>
                <br></br>
                <span>Equine Therapy involves activities (such as grooming, feeding, haltering and leading a horse) that are supervised by a mental health professional, often with the support of a horse professional.</span>
                </Card.Text>
                <Card.Link href="https://www.crchealth.com/types-of-therapy/what-is-equine-therapy/">Additional Info</Card.Link>
              </Card.Body>
            </Card>
            <Card style={{ width: '100%', fontFamily: "Monospace", fontStyle:"italic" }}>
              <Card.Body>
                <Card.Title style={{fontWeight:'bold', color:'black'}}>"Take the 'D' out of PTSD"</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Dr. Jeanne Stellman of Columbia University</Card.Subtitle>
                <Card.Text>
                <span>"Many people think our entire group of veterans are all nutsy because they have been exposed to combat. But potential employers don’t know their personal medical history," and can’t know for sure if a veteran has PTSD or not. "We need to overcome the stigma by education and figuring out the realistic alternatives."</span>
                <br></br>
                </Card.Text>
                <Card.Link href="https://www.legion.org/veteranshealthcare/203662/taking-d-out-ptsd">Additional Info</Card.Link>
              </Card.Body>
            </Card>
            <Card style={{ width: '100%', fontFamily: "Monospace", fontStyle:"italic" }}>
              <Card.Body>
                <Card.Title style={{fontWeight:'bold', color:'black'}}>Your Mission, Should You Choose to Accept It</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Get yourself well</Card.Subtitle>
                <Card.Text>
                <span> 
                  For the most part, equine therapy is very very sparse in the US. After years of success in the UK, it seems to finally be gaining traction here.</span>
                <br></br>
                <span></span>
                </Card.Text>
                <Card.Link href="http://www.operationwearehere.com/EquineTherapy.html">Find someone near you</Card.Link>
              </Card.Body>
            </Card>
            </p>
            <br />
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
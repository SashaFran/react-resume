import React, { Component } from 'react';

class Contact extends Component {
  render() {
     const mystyle = {
         marginLeft : "10%",
     };

    if(this.props.data){
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var country = this.props.data.address.country;
      var zip = this.props.data.address.zip;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
      var linkedin = this.props.data.linkedin;
      var citizenships = this.props.data.citizenships.map(function(citizenships){
         return<ul>
               <li>Citizenship: {citizenships.namecitizenship}</li>
               <li>Status: {citizenships.status}</li>
               </ul>
      })
      
   }

    return (
      <section id="contact">

         <div className="row row-card">
            <div>
               <h4>{message}</h4>
                  <ul>
                     <li><a href="mailto:{email}?Subject=Hello,%20let's%20chat">Email</a><span style={mystyle}>{email}</span></li>
                     <li><a href="https://www.linkedin.com/in/sasha-ailen-franchini-053210176/" target="_blank">LinkedIn</a><span style={mystyle}>{linkedin}</span></li>
                  </ul>
            </div>
            <div>
				   <h4>Useful information</h4>
				   <p className="address">
               {city}, {state}, {country} ({zip})<br />
               Willing to relocate<br/> 
				   </p>
            </div>
            <div>
               <h4>Citizenships</h4>
               <div id='citizenships'>{citizenships}</div>
            </div>
         </div>
   </section>
    );
  }
}

export default Contact;

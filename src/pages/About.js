import React from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container my-10">
        <h1 className="text-lg">
          <b>Problem Statement&nbsp;</b>
        </h1>
        <br />
        <p>To estimate the probable penetration rate for a:</p>
        <p>1) Rotary Percussive drilling machine</p>
        <p>2) Rotary drilling machine</p>
        <p>
          <br />
        </p>
        <p>The algorithms to be considered are as follow:</p>
        <p>&nbsp;a) Rotary Percussive:</p>
        <p>&nbsp; &nbsp; &bull; USBM, 1969&nbsp;</p>
        <p>&nbsp; &nbsp; &bull; Norway, 1979&nbsp;</p>
        <p>&nbsp; &nbsp; &bull; Benaola, 1985</p>
        <p>&nbsp;b) Rotary:&nbsp;</p>
        <p>&nbsp; &nbsp; &bull; Bauer and Calder, 1967&nbsp;</p>
        <p>&nbsp; &nbsp; &bull; Baurer, 1971&nbsp;</p>
        <p>&nbsp; &nbsp; &bull; Calder and Workman, 1994</p>
        <p>
          <br />
        </p>
        <p>
          The user is given the options to select any of the two drilling
          methods. Thereafter, empirical options for each of this category is
          provided. After selecting any option, required input parameters like
          thrust value, rotation speed, etc.(with units) have to be mentioned.
        </p>
        <p>
          <br />
        </p>
        <h1 className="text-lg">
          <b>Approach&nbsp;</b>
        </h1>
        <br />
        <p>
          To Solve this problem, We are creating a website, where users can
          select from the above mentioned method and give input parameters
          required for calculating the rate of Penetration.
        </p>
        <p>
          Then after reading the input data the website will return the rate of
          penetration .
        </p>
        <p>
          <br />
        </p>
        <h1 className="text-lg">
          <b>Technology /Tool used &nbsp;</b>
        </h1>
        <br />
        <ol>
          <li>
            <p>Web Development</p>
          </li>
        </ol>
        <p>&nbsp; &nbsp; React.js For FrontEnd Development of &nbsp;Website.</p>
        <p>
          <br />
        </p>
        <ol start="2">
          <li>
            <p>Image Processing&nbsp;</p>
          </li>
        </ol>
        <p>
          &nbsp; &nbsp; WebPlotDigitizer &nbsp;tool to extract data from graphs,
        </p>
        <p>
          <br />
        </p>
        <ol start="3">
          <li>
            <p>Regression Equation</p>
          </li>
        </ol>
        <p>
          &nbsp; &nbsp;Dcode Equation Finder tool : to get the equation of
          function from the data point on the graph (that we get from image
          processing of graph)
        </p>
        <p>
          <br />
        </p>
        <h1 className="text-lg">
          <b>References &nbsp;</b>
        </h1>
        <br />
        <p>Dcode equation finder:</p>
        <p>
          <a href="https://www.dcode.fr/function-equation-finder">
            https://www.dcode.fr/function-equation-finder
          </a>
        </p>
        <p>
          <br />
          Drilling and Blasting of Rocks by C. Lopez Jimeno (Author), E. Lopez
          Jimeno (Author), Francisco Javier Ayala Carcedo (Author).
        </p>
        <br />
        <p>WebPlotDigitizer:</p>
        <p>
          <a href="https://apps.automeris.io/wpd/">
            https://apps.automeris.io/wpd/
          </a>
        </p>
        <p>
          <br />
        </p>
        <p></p>
        <h1 className="text-lg">
          <b>Source Code &nbsp;</b>
        </h1>
        <br />
        <p></p>
        <p>The Code is uploaded on github:</p>
        <p>
          <br />
        </p>
        <p>
          <a href="https://github.com/rajnishism/penetrationRateCalculator">
            https://github.com/rajnishism/penetrationRateCalculator
          </a>
        </p>
        <p>
          <br />
        </p>
        <p>The website is hosted online :&nbsp;</p>
        <p>
          <br />
        </p>
        <h1 className="text-lg">
          <b>Contributor and mentor &nbsp;</b>
        </h1>
        <br />
        <p></p>
        <ul>
          <li>
            <p>Rajnish Kumar (20JE0763)</p>
          </li>
          <li>
            <p>Sibtain Khan (20JE0946)</p>
          </li>
          <li>
            <p>Md. Athar Imam (20JE0555)</p>
          </li>
        </ul>
        <p>
          <br />
        </p>
        <p>
          <strong>MENTOR:&nbsp;</strong>
        </p>
        <p>Assistant Prof. Yashwanth Kr. Gujjala, PhD</p>
        <p>Indian Institute of Technology (Indian School of Mines), Dhanbad</p>
        <p>Dept. of Mining Engineering</p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp;&nbsp;<p>&nbsp; &nbsp;&nbsp;</p>
      </div>
      <Footer />
    </div>
  );
};

export default About;

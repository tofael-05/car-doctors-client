import React from 'react';
import aboutimg1 from '../assets/images/about_us/person.jpg'
import aboutimg2 from '../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="grid md:grid-cols-2 gap-10">
            <div>
                <img src={aboutimg1} alt="" />
                <div>
                    <img src={aboutimg2} alt="" />
                </div>
            </div>
            <div>
                <p>About us</p>
                <h1>We are qualified <br /> & of experience <br /> in this field</h1>
                <p>There are many variations of passages of Lorem Ipsum <br /> available, but the majority have suffered alteration in some  <br /> form, by injected humour, or randomised words which don't <br /> look even slightly believable. </p>
                <p>the majority have suffered alteration in some form, by injected <br /> humour, or randomised words which don't look even slightly <br /> believable. </p>
                <button className="bg-red-600 p-3 rounded-md">Get More Info</button>
            </div>
        </div>
    );
};

export default About;
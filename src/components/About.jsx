import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Charles Chijuka is a highly skilled software engineer with 3+ years of
          experience developing and maintaining web applications. He has strong
          experience with frontend technologies such as ReactJS, JavaScript,
          React Native and AngularJS. Charles has a strong understanding of web
          security principles and is proficient in using Git for version control
          and code reviews.
        </p>

        <br />

        <p className="text-xl">
          He has a Bachelor of Science in Economics and a Master of Education in
          Educational Administration and Planning. Charles has successfully
          completed several projects such as a Netflix clone, a blog
          application, a basic e-commerce React dashboard, and a food services
          application. He has a proven ability to work in a fast-paced and
          collaborative environment and has delivered projects on time and
          within budget.
        </p>
      </div>
    </div>
  );
};

export default About;

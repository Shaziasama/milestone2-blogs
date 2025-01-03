
import React from "react";
import BlogCard from "../components/BlogCard";
import { title } from "process";

export default function Mega() {
  const posts = [
    {
      id: "1",
      title: "HTML Block of Webdevelopment",
      description: "Explore HTML, the backbone of every web",

      date: "2025-1-2",
      imageUrl: "../images/html.png",
    },


    {
      id: "2",
      title: "Basic Machine Learning",
      description: "Explore Basic Machine Learning",

      date: "2025-1-2",
      imageUrl: "../images/basic machine.png",
    },

    {
      id: "3",
      title: "Deep Learning",
      description: "Explore Deep Learning",

      date: "2025-1-2",
      imageUrl: "../images/deep learning.png",
    },

    {
      id: "4",
      title: "Airtifcal Intelligence",
      description: "Ai",

      date: "2025-1-2",
      imageUrl: "../images/ai.png",
    },

    {
      id: "5",
      title: "Impact of Airtifcal Intelligence in Health",
      description: "Explore Airtifcal Intelligence in Health",

      date: "2025-1-2",
      imageUrl: "../images/health.png",
    },
    {
      id: "6",
      title: "Technology",
      description: "The Transformative Power of Technology",

      date: "2025-1-2",
      imageUrl: "../images/tecnology.png",
    },
    
    {
      id: "7",
      title: "Web Development",
      description: "The Evolution of Web Development",

      date: "2025-1-2",
      imageUrl: "../images/web.png",
    },
    
    {
      id: "6",
      title: "NextJs",
      description: "A Powerful Framework for React",

      date: "2025-1-2",
      imageUrl: "../images/nextjs.png",
    },






    

  ];
  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-cyan-900 animate-color-change">
        Exploring the world of AI and technology
      </h1>
      <div className="grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <div className="blog-card">
              <BlogCard post={post} isDarkBackground={index % 2 === 0} />
              

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



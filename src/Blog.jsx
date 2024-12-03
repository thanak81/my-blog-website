import React from 'react';
import { Calendar, User, Clock, Tag } from 'lucide-react';
import Sidebar from './Sidebar';

const Blog = () => {
    const post = {
      title: "Top Car Collection Blog",
      date: "March 15, 2024",
      author: "Thanak Mech",
      readTime: "5 min read",
      tags: ["Car", "Sport Car", "Lambo", "Race Car"],
      headerImage: "./thanak.jpg",
     content: [
        {
          type: "heading",
          content: "My Dream Sports Car Collection"
        },
        {
          type: "text",
          content: "Welcome to my personal garage showcase! I've always been fascinated by the perfect blend of engineering and artistry that goes into creating these magnificent machines. From everyday drivers to track-focused beasts, each car has its own unique character and story."
        },
        {
          type: "image",
          src: "./topcar1.jpg",
          caption: "The elegant lines of a modern luxury sports car"
        },
        {
          type: "heading",
          content: "Track-Ready Performance Machines"
        },
        {
          type: "text",
          content: "There's something magical about track-focused sports cars. The raw power, the precise handling, the way they connect you to the road - it's an experience that nothing else can match. These machines are built for one purpose: pure driving pleasure."
        },
        {
          type: "image",
          src: "./topcar2.avif",
          caption: "A track-focused sports car in its natural habitat"
        },
        {
          type: "text",
          content: "The symphony of a high-revving engine, the g-forces pushing you into your seat during acceleration, the precise feedback through the steering wheel - these cars deliver an intoxicating cocktail of sensations that make every drive memorable."
        },
        {
          type: "heading",
          content: "The Ultimate: Formula 1 Technology"
        },
        {
          type: "text",
          content: "At the pinnacle of automotive engineering, we find Formula 1 cars. These aren't just vehicles; they're rolling laboratories where cutting-edge technology meets extreme performance. Every component is optimized for maximum performance, pushing the boundaries of what's possible on four wheels."
        },
        {
          type: "image",
          src: "./topcar3.jpg",
          caption: "A modern Formula 1 car showcasing aerodynamic excellence"
        },
        {
          type: "text",
          content: "The aerodynamics alone are a testament to human ingenuity - generating enough downforce to theoretically drive upside down on a ceiling at high speeds. The carbon fiber construction, hybrid powertrains, and advanced electronics all work in perfect harmony to achieve lap times that seemed impossible just a decade ago."
        },
        {
          type: "heading",
          content: "Evolution of Speed"
        },
        {
          type: "text",
          content: "From the iconic classics that established the sports car genre to the modern hypercars pushing the boundaries of performance, the evolution of these machines tells a fascinating story of human innovation and our endless pursuit of speed and excellence."
        },
        {
          type: "image",
          src: "./topcar4.jpg",
          caption: "A modern hypercar representing the future of automotive performance"
        }
      ]
    };
  
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="border-b">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-900">Thanak's Blog</h1>
            <p className="mt-2 text-gray-600">Update on my favorite car</p>
          </div>
        </header>
  
        {/* Main Content with Sidebar */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <Sidebar post={post} />
            
            {/* Main Content */}
            <main className="flex-1">
              <article>
                {/* Title Section */}
                <header className="mb-8">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    {post.title}
                  </h2>
                  <div className="flex flex-wrap items-center text-sm text-gray-500 gap-6 mb-4">
                    <span className="flex items-center gap-1">
                      <User size={16} />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={16} />
                      {post.readTime}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="text-blue-600 text-sm hover:text-blue-800 cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </header>
    
                {/* Content */}
                <div className="prose max-w-none">
                  {post.content.map((block, index) => {
                    if (block.type === "text") {
                      return (
                        <p key={index} className="mb-6 text-gray-600 leading-relaxed">
                          {block.content}
                        </p>
                      );
                    } else if (block.type === "image") {
                      return (
                        <figure key={index} className="my-8">
                          <img 
                            src={block.src} 
                            alt={block.caption}
                            className="w-full rounded-lg shadow-md"
                          />
                          <figcaption className="mt-2 text-center text-sm text-gray-500">
                            {block.caption}
                          </figcaption>
                        </figure>
                      );
                    } else if (block.type === "heading") {
                      return (
                        <h3 key={index} className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                          {block.content}
                        </h3>
                      );
                    }
                    return null;
                  })}
                </div>
    
                {/* Author Bio */}
                <div className="mt-12 pt-8 border-t">
                  <div className="flex items-center gap-4">
                    <img src='./thanak.jpg' className="w-16 h-16 bg-gray-200 rounded-full"/>
                    <div>
                      <h3 className="font-semibold text-gray-900">Written by {post.author}</h3>
                      <p className="text-gray-600 mt-1">
                        Software developer and technical writer passionate about web technologies and open source.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </main>
          </div>
        </div>
  
        {/* Footer */}
        <footer className="border-t mt-12">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center">
              <p className="text-gray-600">© 2024 Thanak's Blog</p>
              <div className="flex gap-6">
                <a href="#" className="text-gray-600 hover:text-gray-900">Twitter</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">GitHub</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">LinkedIn</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  };
  
  export default Blog;

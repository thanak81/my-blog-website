import React from 'react';
import { Calendar, User, Clock, Tag } from 'lucide-react';
const Blog = () => {
    const post = {
      title: "My favorite animals",
      date: "March 15, 2024",
      author: "Thanak's Blog",
      readTime: "5 min read",
      tags: ["Animals", "Pet", "Cat", "Dog"],
      headerImage: "/api/placeholder/1200/600",
      content: [

        {
          type: "heading",
          content: "This is my Cat"
        },
        {
          type: "text",
          content: "Components are the building blocks of any React application. They're like LEGO pieces that you can combine to build complex interfaces."
        },
        {
          type: "image",
          src: "./cat.avif",
          caption: "React components hierarchy example"
        },
        
        {
            type: "heading",
            content: "This is my Cat"
          },
        {
          type: "text",
          content: "State management in React is what makes your applications dynamic and interactive. React's state management system allows components to maintain and update their data without requiring a page refresh."
        },
        {
          type: "image",
          src: "./dog.jpg",
          caption: "State management flow diagram"
        },
        {
          type: "text",
          content: "Props are how components communicate with each other. They allow you to pass data from parent components to child components, creating a one-way data flow that makes your applications more predictable and easier to debug."
        },
        {
          type: "heading",
          content: "The Virtual DOM"
        },
        {
          type: "text",
          content: "The Virtual DOM is another innovative feature that sets React apart. Instead of directly manipulating the browser's DOM, React creates a lightweight copy in memory."
        },
        {
            type: "image",
            src: "./dog.jpg",
            caption: "State management flow diagram"
          },
      ]
    };
  
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="border-b">
          <div className="max-w-3xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-900">Thanak's Blog</h1>
            <p className="mt-2 text-gray-600">Update on my animals i owned</p>
          </div>
        </header>
  
        {/* Main Content */}
        <main className="max-w-3xl mx-auto px-4 py-12">
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
  
            {/* Featured Image
            <div className="mb-8">
              <img 
                src={post.headerImage} 
                alt={post.title}
                className="w-full aspect-video object-cover rounded-lg shadow-lg"
              />
            </div> */}
  
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
                <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
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
  
        {/* Footer */}
        <footer className="border-t mt-12">
          <div className="max-w-3xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center">
              <p className="text-gray-600">© 2024 John's Blog</p>
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

import React from 'react';
import { Calendar, User, Clock, Tag } from 'lucide-react';
import Sidebar from './Sidebar';

const Blog = () => {
    const post = {
      title: "My favorite animals",
      date: "March 15, 2024",
      author: "Thanak Mech",
      readTime: "5 min read",
      tags: ["Animals", "Pet", "Cat", "Dog"],
      headerImage: "./thanak.jpg",
      content : [
        {
          type: "heading",
          content: "This is my Cat fuckk"
        },
        {
          type: "text",
          content: "Meet my adorable furry friend! She's a playful companion who loves to chase laser pointers and cuddle on lazy afternoons. Her favorite spot is the sunny windowsill where she watches birds."
        },
        {
          type: "image",
          src: "./cat.avif",
          caption: "My cat lounging in her favorite spot"
        },
        {
          type: "heading",
          content: "This is my Dog"
        },
        {
          type: "text",
          content: "Every morning starts with her gentle purrs and eager meows for breakfast. She has this cute habit of tapping my face with her paw when she decides it's time for me to wake up and give her attention."
        },
        {
          type: "image",
          src: "./dog.jpg",
          caption: "Morning cuddles with my dog"
        },
        {
          type: "text",
          content: "She's quite the acrobat too! You should see her leaping from furniture to furniture, showing off her impressive agility. Despite her athletic abilities, she's also a complete softie who loves belly rubs."
        },
        {
          type: "heading",
          content: "My pets behavior"
        },
        {
          type: "text",
          content: "When it comes to nap time, she has the most adorable habit of curling up into a perfect little croissant shape. Her favorite napping spots rotate between my laptop keyboard, fresh laundry, and any cardboard box she can squeeze into."
        },
        {
          type: "image",
          src: "./cat&dog.webp",
          caption: "My cat and dog chilling"
        }
      ]
    };
  
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="border-b">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-900">Thanak's Blog</h1>
            <p className="mt-2 text-gray-600">Update on my animals i owned</p>
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

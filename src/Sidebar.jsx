import React, { useState } from 'react';
import { Menu, X, Search, BookOpen, Tag, Archive, ChevronRight } from 'lucide-react';

const Sidebar = ({ post }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Recent posts data (you can make this dynamic later)
  const recentPosts = [
    "My favorite animals",
    "Pet care tips",
    "Weekend adventures with pets",
    "Training your dog",
    "Cat behavior guide"
  ];

  // Archives data (you can make this dynamic later)
  const archives = [
    "March 2024",
    "February 2024",
    "January 2024",
    "December 2023"
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md lg:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:w-72 lg:mr-8
      `}>
        <div className="p-6 h-full overflow-y-auto">
          {/* Search */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search posts..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>

          {/* Recent Posts */}
          <div className="mb-8">
            <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
              <BookOpen size={20} />
              Recent Posts
            </h3>
            <ul className="space-y-4">
              {recentPosts.map((title, index) => (
                <li key={index}>
                  <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                    <ChevronRight size={16} />
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags Cloud */}
          <div className="mb-8">
            <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
              <Tag size={20} />
              Popular Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {post && post.tags && post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-sm text-gray-600 rounded-full hover:bg-blue-100 hover:text-blue-600 cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Archives */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
              <Archive size={20} />
              Archives
            </h3>
            <ul className="space-y-2">
              {archives.map((month, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    {month}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
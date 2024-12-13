import React, { useState } from 'react';
import { Book, BookOpen, Bookmark, Heart } from 'lucide-react';

const PoetryPage = () => {
  const [selectedPoem, setSelectedPoem] = useState(null);

  const poems = [
    {
      id: 1,
      title: "प्रेम की पुकार",
      author: "अभिषेक चव्हाण",
      content: "यह प्रेम की पुकार है\nहर दिल की झंकार है\nआसमान से उतरी\nधरती पर बिखरी\nयह प्यार की बहार है",
      category: "प्रेम"
    },
    {
      id: 2,
      title: "जीवन पथ",
      author: "अभिषेक चव्हाण",
      content: "उलझ सा गया हु बातों में\nचाहे दिन हो या हो रातों में \nमैं वक्त वक्त पर मै भी \nखुद से खूब बतलाता हु \nरख पैर अपने जहाज पे \nमै हवा में उड़ जाता हु \nअरे पकड़ो पकड़ो  पकड़ो \nपीछे से आवाजें काफी आती है \nपीछे मुड़ता हु तो दुनिया \nधुंधला सी क्यों जाती है \nन दिखता है सिरा कोई \nसांसें भी कम हो जाती है  \nखुशियों का तो क्या बताऊं \nयह जिंदगी गायब हो जाती है \nआज फिर रहगया इससे मिलने \nकैसे अब इसको इजहार करूं \nरह गया इससे सब कुछ पूछना \nकैस मै इससे हिसाब करूं \nसोचा लिख दूं खत इसके नाम  \nआखिर कहीं तो इससे सवाल करूं \nलिख दूं उसमें बातें कुछ ऐसी \nमैं खूब इससे बदनाम करूं ",
      category: "जीवन"
    },
    // Add more poems as needed
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-purple-900/20 pt-24 px-4">
      {/* Decorative Header */}
      <div className="relative text-center mb-16">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 mb-4">
          काव्य संग्रह
        </h1>
        <div className="absolute left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-sm"></div>
        
        {/* Paisley Decorative Elements */}
        <svg className="absolute -top-8 left-4 w-24 h-24 text-orange-500/20" viewBox="0 0 100 100">
          <path d="M50,0 C60,20 90,50 50,100 C10,50 40,20 50,0" fill="currentColor"/>
        </svg>
        <svg className="absolute -top-8 right-4 w-24 h-24 text-pink-500/20 scale-x-[-1]" viewBox="0 0 100 100">
          <path d="M50,0 C60,20 90,50 50,100 C10,50 40,20 50,0" fill="currentColor"/>
        </svg>
      </div>

      {/* Poetry Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {poems.map((poem) => (
          <div 
            key={poem.id}
            className="group relative bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500"
            onClick={() => setSelectedPoem(poem)}
          >
            {/* Decorative Corner */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-orange-500/40 rounded-tl-lg"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-pink-500/40 rounded-br-lg"></div>

            <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
              {poem.title}
            </h3>
            <p className="text-gray-400 mb-4">{poem.author}</p>
            <div className="text-gray-300 font-hindi leading-relaxed mb-4 whitespace-pre-line">
              {poem.content.slice(0, 100)}...
            </div>
            
            {/* Footer */}
            <div className="flex justify-between items-center text-gray-400">
              <span className="flex items-center gap-2">
                <BookOpen size={16} />
                {poem.category}
              </span>
              <div className="flex gap-3">
                <Heart className="hover:text-pink-500 cursor-pointer transition-colors" size={18} />
                <Bookmark className="hover:text-orange-500 cursor-pointer transition-colors" size={18} />
              </div>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
          </div>
        ))}
      </div>

      {/* Poetry Modal */}
      {selectedPoem && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="relative max-w-2xl w-full bg-black/80 rounded-lg p-8 border border-orange-500/20">
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-orange-500/40 rounded-tl-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-pink-500/40 rounded-br-lg"></div>

            <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
              {selectedPoem.title}
            </h2>
            <p className="text-gray-400 mb-6">{selectedPoem.author}</p>
            <div className="text-gray-300 font-hindi leading-relaxed mb-8 whitespace-pre-line">
              {selectedPoem.content}
            </div>
            
            <button 
              onClick={() => setSelectedPoem(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>

            {/* Footer */}
            <div className="flex justify-between items-center text-gray-400 border-t border-orange-500/20 pt-4">
              <span className="flex items-center gap-2">
                <Book size={16} />
                {selectedPoem.category}
              </span>
              <div className="flex gap-4">
                <Heart className="hover:text-pink-500 cursor-pointer transition-colors" size={20} />
                <Bookmark className="hover:text-orange-500 cursor-pointer transition-colors" size={20} />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PoetryPage;
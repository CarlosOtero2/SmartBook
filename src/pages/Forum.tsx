import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ForumPost, ForumReply } from '../types/forum';
import { format } from 'date-fns';
import { MessageSquare, Send } from 'lucide-react';

export const Forum: React.FC = () => {
  const [posts, setPosts] = useState<ForumPost[]>([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [replyContent, setReplyContent] = useState<string>('');
  const [activePost, setActivePost] = useState<string | null>(null);

  const handleSubmitPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.title.trim() || !newPost.content.trim()) return;

    const post: ForumPost = {
      id: Date.now().toString(),
      title: newPost.title,
      content: newPost.content,
      author: 'Usuario Anónimo',
      timestamp: new Date(),
      replies: [],
    };

    setPosts([post, ...posts]);
    setNewPost({ title: '', content: '' });
  };

  const handleSubmitReply = (postId: string) => {
    if (!replyContent.trim()) return;

    const reply: ForumReply = {
      id: Date.now().toString(),
      content: replyContent,
      author: 'Usuario Anónimo',
      timestamp: new Date(),
    };

    setPosts(posts.map(post => 
      post.id === postId
        ? { ...post, replies: [...post.replies, reply] }
        : post
    ));

    setReplyContent('');
    setActivePost(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Foro de Discusión
        </h1>

        {/* New Post Form */}
        <form onSubmit={handleSubmitPost} className="mb-8 bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Título
            </label>
            <input
              type="text"
              id="title"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Escribe el título de tu publicación"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
              Contenido
            </label>
            <textarea
              id="content"
              value={newPost.content}
              onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              placeholder="Escribe tu mensaje"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Publicar
          </button>
        </form>

        {/* Posts List */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.content}</p>
                <div className="text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{format(post.timestamp, 'dd/MM/yyyy HH:mm')}</span>
                </div>

                {/* Replies */}
                {post.replies.length > 0 && (
                  <div className="mt-4 space-y-4">
                    {post.replies.map((reply) => (
                      <div key={reply.id} className="pl-4 border-l-2 border-gray-200">
                        <p className="text-gray-600">{reply.content}</p>
                        <div className="text-sm text-gray-500 mt-1">
                          <span>{reply.author}</span>
                          <span className="mx-2">•</span>
                          <span>{format(reply.timestamp, 'dd/MM/yyyy HH:mm')}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Reply Form */}
                {activePost === post.id ? (
                  <div className="mt-4">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={replyContent}
                        onChange={(e) => setReplyContent(e.target.value)}
                        className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Escribe una respuesta..."
                      />
                      <button
                        onClick={() => handleSubmitReply(post.id)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                      >
                        <Send size={18} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setActivePost(post.id)}
                    className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-700"
                  >
                    <MessageSquare size={18} />
                    <span>Responder</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Navigation />
      <Footer />
    </div>
  );
};
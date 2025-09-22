import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              HTMLRLDB
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A modern React TypeScript frontend with Vite, Tailwind CSS, and React Router
            </p>
          </header>

          <main className="max-w-4xl mx-auto">
            <Routes>
              <Route path="/" element={
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="text-center">
                    <div className="flex justify-center space-x-8 mb-8">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-2xl">⚡</span>
                        </div>
                        <p className="text-sm text-gray-600">Vite</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-2xl">⚛️</span>
                        </div>
                        <p className="text-sm text-gray-600">React</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-2xl">🔷</span>
                        </div>
                        <p className="text-sm text-gray-600">TypeScript</p>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                      Welcome to your modern React app!
                    </h2>
                    
                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                      <button 
                        onClick={() => setCount((count) => count + 1)}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                      >
                        Count is {count}
                      </button>
                      <p className="text-gray-600 mt-4">
                        Edit <code className="bg-gray-200 px-2 py-1 rounded text-sm">src/App.tsx</code> and save to test Hot Module Replacement
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 text-left">
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-blue-800 mb-2">🚀 Fast Development</h3>
                        <p className="text-blue-700 text-sm">
                          Vite provides lightning-fast HMR and optimized builds for the best developer experience.
                        </p>
                      </div>
                      <div className="bg-green-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-green-800 mb-2">🎨 Modern Styling</h3>
                        <p className="text-green-700 text-sm">
                          Tailwind CSS for rapid UI development with utility-first CSS framework.
                        </p>
                      </div>
                      <div className="bg-purple-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-purple-800 mb-2">🔒 Type Safety</h3>
                        <p className="text-purple-700 text-sm">
                          TypeScript ensures type safety and better developer experience with IntelliSense.
                        </p>
                      </div>
                      <div className="bg-orange-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-orange-800 mb-2">🛣️ Routing</h3>
                        <p className="text-orange-700 text-sm">
                          React Router for client-side routing and navigation in your single-page application.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              } />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App

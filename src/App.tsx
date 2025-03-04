import React from 'react';
import { Calendar, Clock, MessageSquare, Check, ArrowRight, Play, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Calendar className="h-8 w-8 text-[#25D366]" />
          <span className="font-bold text-xl">ScheduleAI</span>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#features" className="hover:text-[#25D366] transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-[#25D366] transition-colors">How It Works</a>
          <a href="#pricing" className="hover:text-[#25D366] transition-colors">Pricing</a>
          <a 
            href="https://x.com/ArthurDaKingsta" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#25D366] transition-colors"
          >
            Contact
          </a>
          <a 
            href="https://www.paypal.com/ncp/payment/CVW73FG3AUEK4" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#25D366] text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
          >
            Start Trial
          </a>
        </div>
        <button className="md:hidden">
          <ChevronDown className="h-6 w-6" />
        </button>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Schedule Events in Seconds with AI – No More Calendar Form Filling!
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Use natural language in WhatsApp to add events to your Google Calendar instantly.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            No more tedious forms. One box, one button, and let AI do the rest – all in your favorite app, WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="https://www.paypal.com/ncp/payment/CVW73FG3AUEK4" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#25D366] text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center"
            >
              <span>Start Your 5$ Trial Now</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#video-demo" 
              className="border border-gray-300 bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center"
            >
              <Play className="mr-2 h-5 w-5 text-[#25D366]" />
              <span>Watch Demo</span>
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="bg-white rounded-xl shadow-xl p-4 max-w-md mx-auto">
            <div className="bg-[#075E54] text-white p-3 rounded-t-lg">
              <h3 className="font-medium">ScheduleAI Assistant</h3>
            </div>
            <div className="bg-[#ECE5DD] p-4 h-96 overflow-y-auto space-y-4">
              <div className="flex justify-end">
                <div className="bg-[#DCF8C6] p-3 rounded-lg max-w-xs">
                  <p className="text-sm">Schedule lunch with Sarah next Friday at 1pm at Cafe Milano</p>
                  <p className="text-xs text-gray-500 text-right">11:42 AM</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-lg max-w-xs">
                  <p className="text-sm">I've added "Lunch with Sarah" to your calendar:</p>
                  <div className="mt-2 bg-[#4285F4] text-white p-2 rounded-md text-xs">
                    <p className="font-bold">Lunch with Sarah</p>
                    <p>Friday, Mar 12 • 1:00-2:00 PM</p>
                    <p>Cafe Milano</p>
                  </div>
                  <p className="text-xs text-gray-500 text-right">11:42 AM</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-[#DCF8C6] p-3 rounded-lg max-w-xs">
                  <p className="text-sm">Also add team meeting tomorrow at 10am and dentist appointment on Monday at 3pm</p>
                  <p className="text-xs text-gray-500 text-right">11:43 AM</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-lg max-w-xs">
                  <p className="text-sm">I've added 2 events to your calendar:</p>
                  <div className="mt-2 bg-[#4285F4] text-white p-2 rounded-md text-xs mb-2">
                    <p className="font-bold">Team Meeting</p>
                    <p>Tomorrow • 10:00-11:00 AM</p>
                  </div>
                  <div className="bg-[#4285F4] text-white p-2 rounded-md text-xs">
                    <p className="font-bold">Dentist Appointment</p>
                    <p>Monday, Mar 8 • 3:00-4:00 PM</p>
                  </div>
                  <p className="text-xs text-gray-500 text-right">11:43 AM</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-3 border-t flex items-center">
              <input 
                type="text" 
                placeholder="Type your event here..." 
                className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none"
              />
              <button className="ml-2 bg-[#25D366] text-white p-2 rounded-full">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why You'll Love It</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#25D366] bg-opacity-10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <MessageSquare className="h-7 w-7 text-[#25D366]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">One App Convenience</h3>
              <p className="text-gray-600">Schedule in WhatsApp – no switching apps or learning new interfaces.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#4285F4] bg-opacity-10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Calendar className="h-7 w-7 text-[#4285F4]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Natural Language Magic</h3>
              <p className="text-gray-600">Type "lunch with Sarah next Friday" – done! No forms to fill out.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-purple-500 bg-opacity-10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Check className="h-7 w-7 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Multiple Events, One Go</h3>
              <p className="text-gray-600">Add as many events as you want in a single message – batch processing made easy.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-amber-500 bg-opacity-10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Clock className="h-7 w-7 text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Time Saved, Frustration Avoided</h3>
              <p className="text-gray-600">Skip the forms, boost productivity, and never miss an appointment again.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section id="video-demo" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">See It In Action</h2>
          <div className="max-w-3xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
              <iframe 
                className="w-full h-96 rounded-xl"
                src="https://youtube.com/embed/SD-ewpTn2HA" 
                title="ScheduleAI Demo" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What People Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                  alt="Alex" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Arthur</h4>
                  <p className="text-gray-500 text-sm">SWE student</p>
                </div>
              </div>
              <p className="text-gray-700">"This saved me stress every week – so simple! I can't believe how much time I wasted with traditional calendar apps."</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                  alt="Sarah" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Arthur</h4>
                  <p className="text-gray-500 text-sm">WhatsApp user</p>
                </div>
              </div>
              <p className="text-gray-700">"I'm already using Whatsapp for note taking. And now I can use it to schedule events too. It's a game-changer for my productivity."</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                  alt="Michael" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Arthur</h4>
                  <p className="text-gray-500 text-sm">AI enthusiast</p>
                </div>
              </div>
              <p className="text-gray-700">"I always wished i had a personal assistant that I can offload my work to. This is the closest thing to that."</p>
            </div>
          </div>
          <div className="flex justify-center items-center mt-12 space-x-8">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg" alt="Google Calendar" className="h-8" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-[#25D366] bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#25D366]">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sign Up</h3>
              <p className="text-gray-600">Sign up with Google in one click. No complicated forms or lengthy registration process.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#4285F4] bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#4285F4]">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Connect</h3>
              <p className="text-gray-600">Grant calendar access (2-field form) and connect your WhatsApp account.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-500 bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-500">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Start Scheduling</h3>
              <p className="text-gray-600">Chat with the AI on WhatsApp – start scheduling events using natural language!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Simple Pricing</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Start with a trial that costs less than a coffee, then continue with our affordable monthly plan.
          </p>
          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-[#25D366] p-6 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">One-Week Trial</h3>
              <div className="flex justify-center items-center">
                <span className="text-4xl font-bold">$5</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-[#25D366] mr-3" />
                  <span>Full access to all features</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-[#25D366] mr-3" />
                  <span>Unlimited event scheduling</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-[#25D366] mr-3" />
                  <span>WhatsApp & Google Calendar integration</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-[#25D366] mr-3" />
                  <span>After trial: $20 for 2 months</span>
                </li>
              </ul>
              <a 
                href="https://www.paypal.com/ncp/payment/CVW73FG3AUEK4" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full bg-[#25D366] text-white py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors text-center"
              >
                Start Your Trial Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#25D366] to-[#128C7E]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Simplify Your Scheduling?</h2>
          <p className="text-xl text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of busy professionals who have revolutionized how they manage their calendar.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="https://www.paypal.com/ncp/payment/CVW73FG3AUEK4" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-[#25D366] px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors inline-block"
            >
              Start Your 5$ Trial Now
            </a>
            <a 
              href="#video-demo" 
              className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              Watch Demo
            </a>
          </div>
          <div className="mt-8 text-white text-opacity-90">
            <p>Questions? <a href="https://x.com/ArthurDaKingsta" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Contact me on X @ArthurDaKingsta</a></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <Calendar className="h-8 w-8 text-[#25D366]" />
              <span className="font-bold text-xl">ScheduleAI</span>
            </div>
            <div className="flex space-x-6 mb-6 md:mb-0">
              <a href="#features" className="hover:text-[#25D366] transition-colors">Features</a>
              <a href="#how-it-works" className="hover:text-[#25D366] transition-colors">How It Works</a>
              <a href="#pricing" className="hover:text-[#25D366] transition-colors">Pricing</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://x.com/ArthurDaKingsta" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>Contact me on Twitter: @ArthurDaKingsta</span>
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>Made by Arthur © {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
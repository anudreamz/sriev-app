export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-green-600">sriev.com</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-green-600">
                Sign In
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Find EV Charging Stations in <span className="text-green-600">Sri Lanka</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Discover available charging stations, book your time slot, and power your electric vehicle journey across Sri Lanka
            </p>
            
            {/* Search Box */}
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-2">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Enter your location or destination..."
                  className="flex-1 px-4 py-3 border-0 focus:ring-0 focus:outline-none text-lg"
                />
                <button className="bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700 font-semibold">
                  Find Stations
                </button>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">50+</div>
                <div className="text-gray-600">Charging Stations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">100+</div>
                <div className="text-gray-600">Available Chargers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">24/7</div>
                <div className="text-gray-600">Booking Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Find Stations</h3>
              <p className="text-gray-600">Search for available charging stations near your location or along your route</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Book Your Slot</h3>
              <p className="text-gray-600">Choose your preferred time slot and confirm your booking</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔋</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Charge & Go</h3>
              <p className="text-gray-600">Arrive at your booked time, charge your vehicle, and continue your journey</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
'use client'

import { useState } from 'react'

export default function Home() {
  const [searchLocation, setSearchLocation] = useState('')
  const [filteredStations, setFilteredStations] = useState([])

  const chargingStations = [
    {
      name: "Ceylon Electricity Board - Colombo",
      location: "Colombo Fort",
      types: ["CCS2", "Type 2"],
      power: "50kW",
      price: "Rs. 45/kWh"
    },
    {
      name: "Dialog Axiata Charging Hub",
      location: "Colombo 03",
      types: ["CCS2", "CHAdeMO", "Type 2"],
      power: "60kW",
      price: "Rs. 50/kWh"
    },
    {
      name: "Sierra Cables Charging Station",
      location: "Kadawatha",
      types: ["CCS2", "Type 2"],
      power: "22kW",
      price: "Rs. 40/kWh"
    },
    {
      name: "Softlogic Charging Point",
      location: "Battaramulla",
      types: ["Type 2", "AC"],
      power: "22kW",
      price: "Rs. 42/kWh"
    },
    {
      name: "Hyundai Lanka Charging",
      location: "Dematagoda",
      types: ["CCS2", "Type 2"],
      power: "50kW",
      price: "Rs. 48/kWh"
    },
    {
      name: "Kandy City Center Charging",
      location: "Kandy",
      types: ["CCS2", "Type 2"],
      power: "22kW",
      price: "Rs. 45/kWh"
    },
    {
      name: "Galle Fort Charging Station",
      location: "Galle",
      types: ["Type 2", "AC"],
      power: "22kW",
      price: "Rs. 45/kWh"
    },
    {
      name: "CEB Charging Point - Kurunegala",
      location: "Kurunegala",
      types: ["CCS2"],
      power: "50kW",
      price: "Rs. 44/kWh"
    }
  ]

  // Search function
  const handleSearch = () => {
    if (!searchLocation.trim()) {
      setFilteredStations([])
      return
    }

    const searchTerm = searchLocation.toLowerCase()
    const filtered = chargingStations.filter(station =>
      station.location.toLowerCase().includes(searchTerm) ||
      station.name.toLowerCase().includes(searchTerm)
    )
    setFilteredStations(filtered)
  }

  // Display stations (filtered or all)
  const displayStations = filteredStations.length > 0 ? filteredStations : chargingStations

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
              <button className="text-gray-600 hover:text-green-600">Sign In</button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">Sign Up</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Find EV Charging Stations in <span className="text-green-600">Sri Lanka</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Discover {displayStations.length} charging stations across Sri Lanka with real-time availability
            </p>
            
            {/* Search Box */}
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-2 mb-8">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Enter city or location (Colombo, Kandy, Galle...)"
                  className="flex-1 px-4 py-3 border-0 focus:ring-0 focus:outline-none text-lg"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <button 
                  className="bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700 font-semibold"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>

            {/* Search Tips */}
            <div className="text-center mb-8">
              <p className="text-gray-600">
                Try searching: <span className="text-green-600 font-medium">Colombo, Kandy, Galle, Kurunegala, Battaramulla</span>
              </p>
            </div>

            {/* Search Results Info */}
            {filteredStations.length > 0 && (
              <div className="bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded-lg mb-6">
                <p>
                  Found <strong>{filteredStations.length}</strong> stations matching "<strong>{searchLocation}</strong>"
                  <button 
                    className="ml-4 text-green-600 hover:text-green-800 underline"
                    onClick={() => {
                      setSearchLocation('')
                      setFilteredStations([])
                    }}
                  >
                    Show all stations
                  </button>
                </p>
              </div>
            )}

            {filteredStations.length === 0 && searchLocation.trim() && (
              <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-3 rounded-lg mb-6">
                <p>
                  No stations found for "<strong>{searchLocation}</strong>". Showing all stations instead.
                </p>
              </div>
            )}

            {/* Charging Stations List */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {filteredStations.length > 0 ? 'Search Results' : 'All Charging Stations in Sri Lanka'}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {displayStations.map((station, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">{station.name}</h3>
                      <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                        Available
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 flex items-center">
                      📍 {station.location}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {station.types.map((type, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
                          {type}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-lg font-bold text-green-600">{station.power}</span>
                        <span className="text-gray-500 ml-2">• {station.price}</span>
                      </div>
                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm">
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">{chargingStations.length}+</div>
              <div className="text-green-100">Charging Stations</div>
            </div>
            <div>
              <div className="text-3xl font-bold">8+</div>
              <div className="text-green-100">Cities Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold">20+</div>
              <div className="text-green-100">Charging Points</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-green-100">Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
// EV Charging Sri Lanka - Search Enabled
cat > src/app/page.tsx << 'EOF'
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
    }
  ]

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

  const displayStations = filteredStations.length > 0 ? filteredStations : chargingStations

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-green-600">sriev.com</h1>
            </div>
          </div>
        </div>
      </nav>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Find EV Charging Stations in Sri Lanka
            </h1>
            
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-2 mb-8">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Search Colombo, Kandy..."
                  className="flex-1 px-4 py-3 border-0 focus:ring-0 focus:outline-none text-lg"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                />
                <button 
                  className="bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700 font-semibold"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {displayStations.map((station, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-semibold">{station.name}</h3>
                  <p className="text-gray-600">📍 {station.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
EOF
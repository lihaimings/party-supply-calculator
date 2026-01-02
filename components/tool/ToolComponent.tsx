'use client'

import { useState, useEffect, useCallback } from 'react'

interface PartyPlan {
  id: string
  name: string
  guestCount: number
  duration: number
  eventType: string
  includeAlcohol: boolean
  createdAt: string
  results: CalculationResults | null
}

interface CalculationResults {
  food: {
    appetizers: number
    mainDishes: number
    sides: number
    desserts: number
  }
  drinks: {
    water: number
    soda: number
    juice: number
    alcohol: number
  }
  supplies: {
    plates: number
    cups: number
    napkins: number
    utensils: number
  }
  budget: {
    food: number
    drinks: number
    supplies: number
    total: number
  }
}

const EVENT_TYPES = [
  { value: 'casual', label: 'Casual Party', foodMultiplier: 1, drinkMultiplier: 1 },
  { value: 'birthday', label: 'Birthday Party', foodMultiplier: 1.2, drinkMultiplier: 1.1 },
  { value: 'wedding', label: 'Wedding Reception', foodMultiplier: 1.5, drinkMultiplier: 1.3 },
  { value: 'corporate', label: 'Corporate Event', foodMultiplier: 1.3, drinkMultiplier: 0.8 },
  { value: 'holiday', label: 'Holiday Party', foodMultiplier: 1.4, drinkMultiplier: 1.4 },
  { value: 'bbq', label: 'BBQ / Cookout', foodMultiplier: 1.3, drinkMultiplier: 1.2 },
]

export default function ToolComponent() {
  const [guestCount, setGuestCount] = useState(20)
  const [duration, setDuration] = useState(3)
  const [eventType, setEventType] = useState('casual')
  const [includeAlcohol, setIncludeAlcohol] = useState(true)
  const [planName, setPlanName] = useState('')
  const [results, setResults] = useState<CalculationResults | null>(null)
  const [savedPlans, setSavedPlans] = useState<PartyPlan[]>([])
  const [showSaved, setShowSaved] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('partyPlans')
    if (saved) {
      setSavedPlans(JSON.parse(saved))
    }
  }, [])

  const calculateSupplies = useCallback(() => {
    const event = EVENT_TYPES.find(e => e.value === eventType) || EVENT_TYPES[0]
    const foodMult = event.foodMultiplier
    const drinkMult = event.drinkMultiplier
    const durationMult = duration / 3

    const food = {
      appetizers: Math.ceil(guestCount * 6 * foodMult),
      mainDishes: Math.ceil(guestCount * 1.2 * foodMult),
      sides: Math.ceil(guestCount * 2 * foodMult),
      desserts: Math.ceil(guestCount * 1.5 * foodMult),
    }

    const drinks = {
      water: Math.ceil(guestCount * 2 * durationMult * drinkMult),
      soda: Math.ceil(guestCount * 1.5 * durationMult * drinkMult),
      juice: Math.ceil(guestCount * 1 * durationMult * drinkMult),
      alcohol: includeAlcohol ? Math.ceil(guestCount * 2 * durationMult * drinkMult) : 0,
    }

    const supplies = {
      plates: Math.ceil(guestCount * 2.5),
      cups: Math.ceil(guestCount * 3),
      napkins: Math.ceil(guestCount * 4),
      utensils: Math.ceil(guestCount * 3),
    }

    const budget = {
      food: Math.round((food.appetizers * 0.5 + food.mainDishes * 8 + food.sides * 2 + food.desserts * 3) * 100) / 100,
      drinks: Math.round((drinks.water * 0.5 + drinks.soda * 1 + drinks.juice * 1.5 + drinks.alcohol * 3) * 100) / 100,
      supplies: Math.round((supplies.plates * 0.15 + supplies.cups * 0.1 + supplies.napkins * 0.05 + supplies.utensils * 0.2) * 100) / 100,
      total: 0,
    }
    budget.total = Math.round((budget.food + budget.drinks + budget.supplies) * 100) / 100

    const newResults: CalculationResults = { food, drinks, supplies, budget }
    setResults(newResults)
    return newResults
  }, [guestCount, duration, eventType, includeAlcohol])

  const savePlan = () => {
    if (!planName.trim()) {
      alert('Please enter a plan name')
      return
    }
    if (!results) {
      alert('Please calculate first')
      return
    }

    const newPlan: PartyPlan = {
      id: Date.now().toString(),
      name: planName,
      guestCount,
      duration,
      eventType,
      includeAlcohol,
      createdAt: new Date().toISOString(),
      results,
    }

    const updated = [...savedPlans, newPlan]
    setSavedPlans(updated)
    localStorage.setItem('partyPlans', JSON.stringify(updated))
    setPlanName('')
    alert('Plan saved!')
  }

  const loadPlan = (plan: PartyPlan) => {
    setGuestCount(plan.guestCount)
    setDuration(plan.duration)
    setEventType(plan.eventType)
    setIncludeAlcohol(plan.includeAlcohol)
    setResults(plan.results)
    setShowSaved(false)
  }

  const deletePlan = (id: string) => {
    const updated = savedPlans.filter(p => p.id !== id)
    setSavedPlans(updated)
    localStorage.setItem('partyPlans', JSON.stringify(updated))
  }

  const resetForm = () => {
    setGuestCount(20)
    setDuration(3)
    setEventType('casual')
    setIncludeAlcohol(true)
    setPlanName('')
    setResults(null)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-white rounded-2xl shadow-lg shadow-rose-100/50 border border-rose-100 p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-2xl">🎈</span> Party Details
          </h2>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Guests
              </label>
              <input
                type="number"
                min="1"
                max="1000"
                value={guestCount}
                onChange={(e) => setGuestCount(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full px-4 py-3 border border-rose-200 rounded-xl focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Party Duration (hours)
              </label>
              <input
                type="range"
                min="1"
                max="8"
                value={duration}
                onChange={(e) => setDuration(parseInt(e.target.value))}
                className="w-full h-2 bg-rose-200 rounded-lg appearance-none cursor-pointer accent-rose-600"
              />
              <div className="text-center text-rose-600 font-semibold mt-1">{duration} hours</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Type
              </label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full px-4 py-3 border border-rose-200 rounded-xl focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 outline-none transition-all bg-white"
              >
                {EVENT_TYPES.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="alcohol"
                checked={includeAlcohol}
                onChange={(e) => setIncludeAlcohol(e.target.checked)}
                className="w-5 h-5 text-rose-600 border-rose-300 rounded focus:ring-rose-500"
              />
              <label htmlFor="alcohol" className="text-sm font-medium text-gray-700">
                Include Alcoholic Beverages
              </label>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                onClick={calculateSupplies}
                className="flex-1 bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
              >
                🧮 Calculate
              </button>
              <button
                onClick={resetForm}
                className="px-6 py-3 border border-rose-200 text-rose-600 hover:bg-rose-50 font-semibold rounded-xl transition-colors"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-white rounded-2xl shadow-lg shadow-rose-100/50 border border-rose-100 p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-2xl">📊</span> Calculation Results
          </h2>

          {results ? (
            <div className="space-y-6">
              {/* Food */}
              <div>
                <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <span>🍕</span> Food (servings)
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-rose-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Appetizers</div>
                    <div className="text-xl font-bold text-rose-600">{results.food.appetizers}</div>
                  </div>
                  <div className="bg-rose-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Main Dishes</div>
                    <div className="text-xl font-bold text-rose-600">{results.food.mainDishes}</div>
                  </div>
                  <div className="bg-rose-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Sides</div>
                    <div className="text-xl font-bold text-rose-600">{results.food.sides}</div>
                  </div>
                  <div className="bg-rose-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Desserts</div>
                    <div className="text-xl font-bold text-rose-600">{results.food.desserts}</div>
                  </div>
                </div>
              </div>

              {/* Drinks */}
              <div>
                <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <span>🥤</span> Drinks (servings)
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Water</div>
                    <div className="text-xl font-bold text-blue-600">{results.drinks.water}</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Soda</div>
                    <div className="text-xl font-bold text-blue-600">{results.drinks.soda}</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Juice</div>
                    <div className="text-xl font-bold text-blue-600">{results.drinks.juice}</div>
                  </div>
                  {includeAlcohol && (
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="text-sm text-gray-600">Alcohol</div>
                      <div className="text-xl font-bold text-blue-600">{results.drinks.alcohol}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Supplies */}
              <div>
                <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <span>🍽️</span> Supplies (items)
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-amber-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Plates</div>
                    <div className="text-xl font-bold text-amber-600">{results.supplies.plates}</div>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Cups</div>
                    <div className="text-xl font-bold text-amber-600">{results.supplies.cups}</div>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Napkins</div>
                    <div className="text-xl font-bold text-amber-600">{results.supplies.napkins}</div>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Utensil Sets</div>
                    <div className="text-xl font-bold text-amber-600">{results.supplies.utensils}</div>
                  </div>
                </div>
              </div>

              {/* Budget */}
              <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl p-4 text-white">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <span>💰</span> Estimated Budget
                </h3>
                <div className="grid grid-cols-3 gap-3 mb-3">
                  <div>
                    <div className="text-sm opacity-80">Food</div>
                    <div className="text-lg font-bold">${results.budget.food}</div>
                  </div>
                  <div>
                    <div className="text-sm opacity-80">Drinks</div>
                    <div className="text-lg font-bold">${results.budget.drinks}</div>
                  </div>
                  <div>
                    <div className="text-sm opacity-80">Supplies</div>
                    <div className="text-lg font-bold">${results.budget.supplies}</div>
                  </div>
                </div>
                <div className="border-t border-white/30 pt-3">
                  <div className="text-sm opacity-80">Total Estimated Cost</div>
                  <div className="text-3xl font-bold">${results.budget.total}</div>
                </div>
              </div>

              {/* Save Plan */}
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Plan name..."
                  value={planName}
                  onChange={(e) => setPlanName(e.target.value)}
                  className="flex-1 px-4 py-2 border border-rose-200 rounded-xl focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 outline-none"
                />
                <button
                  onClick={savePlan}
                  className="px-6 py-2 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-xl transition-colors"
                >
                  💾 Save
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-gray-400">
              <div className="text-6xl mb-4">🎊</div>
              <p>Enter party details and click Calculate to see results</p>
            </div>
          )}
        </div>
      </div>

      {/* Saved Plans */}
      <div className="mt-8">
        <button
          onClick={() => setShowSaved(!showSaved)}
          className="flex items-center gap-2 text-rose-600 hover:text-rose-700 font-semibold mb-4"
        >
          <span>{showSaved ? '▼' : '▶'}</span>
          📁 Saved Plans ({savedPlans.length})
        </button>

        {showSaved && savedPlans.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {savedPlans.map(plan => (
              <div key={plan.id} className="bg-white rounded-xl shadow border border-rose-100 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-800">{plan.name}</h4>
                  <button
                    onClick={() => deletePlan(plan.id)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    ✕
                  </button>
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>👥 {plan.guestCount} guests • {plan.duration}h</p>
                  <p>🎉 {EVENT_TYPES.find(e => e.value === plan.eventType)?.label}</p>
                  <p>💰 ${plan.results?.budget.total || 0}</p>
                </div>
                <button
                  onClick={() => loadPlan(plan)}
                  className="mt-3 w-full py-2 text-sm bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg transition-colors"
                >
                  Load Plan
                </button>
              </div>
            ))}
          </div>
        )}

        {showSaved && savedPlans.length === 0 && (
          <p className="text-gray-400 text-center py-4">No saved plans yet</p>
        )}
      </div>
    </div>
  )
}

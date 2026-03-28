import { useState } from 'react'
import { Wizard } from './components/Wizard'
import { QuoteHistory } from './components/QuoteHistory'
import type { ResultadoCotizacion, ProyectoInput } from './utils/calculations'

export type AppView = 'wizard' | 'history'

export interface SavedQuote {
  id: string
  fecha: string
  input: ProyectoInput
  result: ResultadoCotizacion
}

export default function App() {
  const [view, setView] = useState<AppView>('wizard')
  const [quotes, setQuotes] = useState<SavedQuote[]>(() => {
    try { return JSON.parse(localStorage.getItem('micsa_quotes') || '[]') } catch { return [] }
  })

  const saveQuote = (input: ProyectoInput, result: ResultadoCotizacion) => {
    const q: SavedQuote = {
      id: Date.now().toString(),
      fecha: new Date().toLocaleDateString('es-MX'),
      input,
      result,
    }
    const updated = [q, ...quotes].slice(0, 50)
    setQuotes(updated)
    localStorage.setItem('micsa_quotes', JSON.stringify(updated))
  }

  const deleteQuote = (id: string) => {
    const updated = quotes.filter(q => q.id !== id)
    setQuotes(updated)
    localStorage.setItem('micsa_quotes', JSON.stringify(updated))
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-[#1F3864] text-white shadow-lg no-print">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#C9973A] rounded-lg flex items-center justify-center font-bold text-[#1F3864] text-lg">M</div>
            <div>
              <div className="font-bold text-lg leading-tight">MICSA Cotizador</div>
              <div className="text-xs text-blue-200">Servicios Industriales · v2.0</div>
            </div>
          </div>
          <nav className="flex gap-2">
            <button
              onClick={() => setView('wizard')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${view==='wizard' ? 'bg-white text-[#1F3864]' : 'text-blue-200 hover:text-white hover:bg-white/10'}`}
            >
              Nueva Cotización
            </button>
            <button
              onClick={() => setView('history')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors relative ${view==='history' ? 'bg-white text-[#1F3864]' : 'text-blue-200 hover:text-white hover:bg-white/10'}`}
            >
              Historial
              {quotes.length > 0 && (
                <span className="ml-1 bg-[#C9973A] text-white text-xs rounded-full px-1.5 py-0.5">{quotes.length}</span>
              )}
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {view === 'wizard' && <Wizard onSave={saveQuote} />}
        {view === 'history' && <QuoteHistory quotes={quotes} onNew={() => setView('wizard')} onDelete={deleteQuote} />}
      </main>
    </div>
  )
}

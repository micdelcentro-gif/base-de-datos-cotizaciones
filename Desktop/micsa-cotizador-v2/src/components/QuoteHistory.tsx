import { useState } from 'react'
import type { SavedQuote } from '../App'
import { fmt, pct } from '../utils/calculations'
import { QuotePreview } from './QuotePreview'

interface Props {
  quotes: SavedQuote[]
  onNew: () => void
  onDelete: (id: string) => void
}

export function QuoteHistory({ quotes, onNew, onDelete }: Props) {
  const [preview, setPreview] = useState<SavedQuote | null>(null)

  if (preview) return (
    <QuotePreview
      input={preview.input}
      result={preview.result}
      onBack={() => setPreview(null)}
      onSave={() => setPreview(null)}
    />
  )

  if (quotes.length === 0) return (
    <div className="text-center py-20">
      <div className="text-6xl mb-4">📋</div>
      <div className="text-slate-500 text-lg mb-4">No hay cotizaciones guardadas aún</div>
      <button onClick={onNew} className="bg-[#1F3864] text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-800">
        Crear primera cotización
      </button>
    </div>
  )

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#1F3864]">Historial de Cotizaciones</h2>
        <button onClick={onNew} className="bg-[#1F3864] text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-800">
          + Nueva cotización
        </button>
      </div>
      {quotes.map(q => (
        <div key={q.id} className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                  q.input.tipoServicio === 'seguridad'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-amber-100 text-amber-700'
                }`}>
                  {q.input.tipoServicio === 'seguridad' ? '🛡️ Seguridad' : '🏗️ Industrial'}
                </span>
                <span className="text-xs text-slate-400">{q.fecha}</span>
              </div>
              <div className="font-bold text-slate-800 text-lg truncate">{q.input.cliente}</div>
              <div className="text-slate-500 text-sm truncate">{q.input.descripcion}</div>
              <div className="text-xs text-slate-400 mt-1">
                {q.input.ubicacion} · {q.input.duracionMeses} mes{q.input.duracionMeses > 1 ? 'es' : ''}
                {q.input.local ? ' · Local' : ' · Foráneo'}
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-2xl font-black text-[#1F3864]">{fmt(q.result.totalFinal)}</div>
              <div className="text-xs text-green-600 font-medium">Margen: {pct(q.result.margenPct)}</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-3 pt-3 border-t border-slate-100 text-xs">
            <div><span className="text-slate-400">Sin IVA: </span><span className="font-medium">{fmt(q.result.precioSinIVA)}</span></div>
            <div><span className="text-slate-400">Utilidad: </span><span className="font-medium text-green-600">{fmt(q.result.margenBruto)}</span></div>
            <div><span className="text-slate-400">Nómina: </span><span className="font-medium">{fmt(q.result.totalNomina)}</span></div>
          </div>
          <div className="flex gap-2 mt-3">
            <button
              onClick={() => setPreview(q)}
              className="flex-1 text-center text-sm py-1.5 rounded-lg bg-[#1F3864] text-white hover:bg-blue-800 font-medium transition-colors"
            >
              Ver / Imprimir
            </button>
            <button
              onClick={() => {
                if (confirm(`¿Borrar cotización de ${q.input.cliente}?`)) onDelete(q.id)
              }}
              className="px-3 py-1.5 rounded-lg border border-red-200 text-red-500 hover:bg-red-50 text-sm transition-colors"
            >
              🗑️
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

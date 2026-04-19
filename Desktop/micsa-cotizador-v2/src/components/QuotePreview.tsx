import { useRef } from 'react'
import type { ProyectoInput, ResultadoCotizacion } from '../utils/calculations'
import { fmt, pct } from '../utils/calculations'

interface Props {
  input: ProyectoInput
  result: ResultadoCotizacion
  onBack: () => void
  onSave: () => void
}

export function QuotePreview({ input, result, onBack, onSave }: Props) {
  const printRef = useRef<HTMLDivElement>(null)

  const handlePrint = () => {
    window.print()
  }

  const folio = `MICSA-${Date.now().toString().slice(-6)}`
  const hoy = new Date().toLocaleDateString('es-MX', { year:'numeric', month:'long', day:'numeric' })
  const vigencia = new Date(Date.now() + 15*24*60*60*1000).toLocaleDateString('es-MX', { year:'numeric', month:'long', day:'numeric' })

  return (
    <div>
      {/* Toolbar */}
      <div className="flex gap-3 mb-6 no-print">
        <button onClick={onBack} className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium">
          ← Regresar
        </button>
        <button onClick={() => { onSave(); onBack() }} className="px-4 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700 font-medium">
          💾 Guardar en historial
        </button>
        <button onClick={handlePrint} className="px-5 py-2 rounded-xl bg-[#1F3864] text-white hover:bg-blue-800 font-medium ml-auto">
          🖨️ Imprimir / PDF
        </button>
      </div>

      {/* Documento imprimible */}
      <div ref={printRef} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-10 max-w-4xl mx-auto print:shadow-none print:border-none print:rounded-none print:p-8">

        {/* Header */}
        <div className="flex justify-between items-start mb-8 pb-6 border-b-2 border-[#1F3864]">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-[#1F3864] rounded-xl flex items-center justify-center text-white font-black text-xl">M</div>
              <div>
                <div className="font-black text-[#1F3864] text-xl leading-tight">MICSA CONSTRUCCIÓN</div>
                <div className="font-black text-[#1F3864] text-xl leading-tight">INDUSTRIAL S.A. de C.V.</div>
              </div>
            </div>
            <div className="text-xs text-slate-500 space-y-0.5 ml-15">
              <div>RFC: MIC-230126-8S5</div>
              <div>Monclova, Coahuila, México</div>
              <div>Daniel Valenciano — Director General</div>
            </div>
          </div>
          <div className="text-right">
            <div className="inline-block bg-[#C9973A] text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
              {input.tipoServicio === 'seguridad' ? '🛡️ SEGURIDAD PATRIMONIAL' : '🏗️ SERVICIOS INDUSTRIALES'}
            </div>
            <div className="text-2xl font-black text-[#1F3864]">{folio}</div>
            <div className="text-sm text-slate-500 mt-1">Fecha: {hoy}</div>
            <div className="text-sm text-slate-500">Vigencia: {vigencia}</div>
          </div>
        </div>

        {/* Datos del cliente */}
        <div className="grid grid-cols-2 gap-4 mb-8 bg-slate-50 rounded-xl p-4">
          <div>
            <div className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Cliente</div>
            <div className="font-bold text-slate-800 text-lg">{input.cliente || '—'}</div>
          </div>
          <div>
            <div className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Ubicación</div>
            <div className="font-semibold text-slate-700">{input.ubicacion || '—'}</div>
          </div>
          <div className="col-span-2">
            <div className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Descripción del servicio</div>
            <div className="text-slate-700">{input.descripcion || '—'}</div>
          </div>
          <div>
            <div className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Duración</div>
            <div className="font-semibold text-slate-700">{input.duracionValor} {input.unidadDuracion}</div>
          </div>
          <div>
            <div className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Tipo</div>
            <div className="font-semibold text-slate-700">{input.local ? 'Local' : 'Foráneo'}</div>
          </div>
        </div>

        {/* Tabla de conceptos */}
        <h3 className="font-bold text-[#1F3864] text-base mb-3">Desglose de Conceptos</h3>
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="bg-[#1F3864] text-white">
              <th className="text-left px-3 py-2 rounded-tl-lg">Concepto</th>
              <th className="text-right px-3 py-2 rounded-tr-lg">Importe</th>
            </tr>
          </thead>
          <tbody>
            {result.lineas.filter(l => l.venta > 0).map((l, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                <td className="px-3 py-2 text-slate-700">{l.concepto}</td>
                <td className="px-3 py-2 text-right font-medium text-slate-800">{fmt(l.venta)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-slate-200">
              <td className="px-3 py-2 font-semibold text-slate-700">Subtotal sin IVA</td>
              <td className="px-3 py-2 text-right font-semibold text-slate-800">{fmt(result.precioSinIVA)}</td>
            </tr>
            <tr>
              <td className="px-3 py-2 text-slate-600">IVA (16%)</td>
              <td className="px-3 py-2 text-right text-slate-700">{fmt(result.iva)}</td>
            </tr>
            <tr className="bg-[#1F3864] text-white">
              <td className="px-4 py-3 font-black text-lg rounded-bl-lg">TOTAL A FACTURAR</td>
              <td className="px-4 py-3 text-right font-black text-xl rounded-br-lg">{fmt(result.totalFinal)}</td>
            </tr>
          </tfoot>
        </table>

        {/* Análisis financiero (solo para uso interno) */}
        <div className="bg-green-50 border border-green-100 rounded-xl p-4 mb-6 no-print">
          <div className="font-bold text-green-800 text-sm mb-2">📊 Análisis interno (no aparece en PDF del cliente)</div>
          <div className="grid grid-cols-3 gap-3 text-sm">
            <div className="text-center">
              <div className="text-xs text-green-600">Costo real MICSA</div>
              <div className="font-bold text-green-900">{fmt(result.costoReal)}</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-green-600">Utilidad bruta</div>
              <div className="font-bold text-green-900">{fmt(result.margenBruto)}</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-green-600">Margen %</div>
              <div className="font-bold text-green-900">{pct(result.margenPct)}</div>
            </div>
          </div>
        </div>

        {/* Condiciones comerciales */}
        <div className="border border-slate-200 rounded-xl overflow-hidden mb-6">
          <div className="bg-[#1F3864] text-white px-4 py-2 font-bold text-sm">Condiciones Comerciales</div>
          <div className="divide-y divide-slate-100 text-sm">
            {[
              ['Forma de pago', '50% anticipo al inicio · 50% contra terminación o mensual según alcance'],
              ['Vigencia de la propuesta', '15 días naturales a partir de la fecha de emisión'],
              ['Penalidad por mora', '3% mensual sobre saldo insoluto a partir del día 6'],
              ['Ajuste de precios', 'Los precios son en pesos MXN. Sujetos a ajuste anual por INPC/CONASAMI'],
              ['Exclusiones', 'Materiales de construcción, equipos del cliente, permisos municipales y federales'],
              ['Inicio del servicio', '7 días hábiles posteriores a firma del contrato o PO'],
            ].map(([label, val]) => (
              <div key={label} className="flex px-4 py-2">
                <span className="font-medium text-slate-700 w-44 shrink-0">{label}:</span>
                <span className="text-slate-600">{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Notas */}
        {input.notas && (
          <div className="bg-yellow-50 rounded-xl p-4 mb-6 border border-yellow-100">
            <div className="font-semibold text-yellow-800 text-sm mb-1">Notas del proyecto:</div>
            <div className="text-sm text-yellow-700">{input.notas}</div>
          </div>
        )}

        {/* Footer */}
        <div className="border-t-2 border-[#1F3864] pt-4 text-center text-xs text-slate-500">
          <div className="font-bold text-[#1F3864] mb-1">MICSA Construcción Industrial S.A. de C.V. · RFC: MIC-230126-8S5</div>
          <div>Monclova, Coahuila · Daniel Valenciano, Director General · danielvalenciano@micsa.mx</div>
          <div className="mt-1">Este documento es confidencial y tiene validez únicamente con firma y sello del Director General.</div>
        </div>
      </div>
    </div>
  )
}

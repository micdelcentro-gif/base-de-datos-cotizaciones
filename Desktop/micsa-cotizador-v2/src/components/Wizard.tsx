import { useState } from 'react'
import { calcular, fmt, pct } from '../utils/calculations'
import type { ProyectoInput, RolItem, EquipoItem, ResultadoCotizacion } from '../utils/calculations'
import { ROLES, ROLES_SEGURIDAD, EQUIPOS, EQUIPOS_SEGURIDAD, FINANCIERO } from '../data/catalog'
import { QuotePreview } from './QuotePreview'

// ── Estado inicial por tipo de servicio ──────────────────────────────────────
function emptyInput(tipo: 'industrial' | 'seguridad'): ProyectoInput {
  const trabajadores: RolItem[] = tipo === 'seguridad'
    ? ROLES_SEGURIDAD.map(r => ({ rolId: r.id, rolNombre: r.nombre, cantidad: 0, tarifaSemanal: 0, sueldoMensual: r.sueldoMensual }))
    : ROLES.map(r => ({ rolId: r.id, rolNombre: r.nombre, cantidad: 0, tarifaSemanal: r.tarifaSemanal, sueldoMensual: 0 }))

  const allEquipos = tipo === 'seguridad'
    ? [...EQUIPOS_SEGURIDAD, ...EQUIPOS]
    : EQUIPOS

  const equipos: EquipoItem[] = allEquipos.map(e => ({
    equipoId: e.id,
    equipoNombre: e.nombre,
    cantidad: 0,
    unidad: 'mes',
    tarifa: e.tarifaMes,
    duracion: 1,
  }))

  return {
    tipoServicio: tipo,
    cliente: '', ubicacion: '', descripcion: '', duracionValor: 1, unidadDuracion: 'meses',
    trabajadores, equipos,
    incluirHospedaje: false, diasHospedaje: 0,
    incluirHerramientas: false, costoHerramientas: 0,
    incluirRC: true, local: tipo === 'seguridad', margenExtra: 0, notas: '',
  }
}

const STEPS = ['Proyecto', 'Personal', 'Equipos', 'Extras', 'Resumen']

export function Wizard({ onSave }: { onSave: (i: ProyectoInput, r: ResultadoCotizacion) => void }) {
  const [step, setStep] = useState(0)
  const [input, setInput] = useState<ProyectoInput>(() => emptyInput('industrial'))
  const [showPreview, setShowPreview] = useState(false)
  const result = calcular(input)

  const upd = (k: keyof ProyectoInput, v: unknown) => setInput(p => ({ ...p, [k]: v }))

  const cambiarTipo = (tipo: 'industrial' | 'seguridad') => {
    setInput(emptyInput(tipo))
    setStep(0)
  }

  const updRol = (idx: number, k: keyof RolItem, v: unknown) =>
    setInput(p => {
      const trab = [...p.trabajadores]
      trab[idx] = { ...trab[idx], [k]: v }
      return { ...p, trabajadores: trab }
    })

  const updEq = (idx: number, k: keyof EquipoItem, v: unknown) =>
    setInput(p => {
      const eqs = [...p.equipos]
      const eq = { ...eqs[idx], [k]: v }
      const allCatalog = input.tipoServicio === 'seguridad'
        ? [...EQUIPOS_SEGURIDAD, ...EQUIPOS]
        : EQUIPOS
      const cat = allCatalog.find(e => e.id === eq.equipoId)
      if (k === 'unidad' && cat) {
        eq.tarifa = v === 'dia' ? cat.tarifaDia : v === 'semana' ? cat.tarifaSemana : cat.tarifaMes
      }
      eqs[idx] = eq
      return { ...p, equipos: eqs }
    })

  const totalTrab = input.trabajadores.reduce((s, r) => s + r.cantidad, 0)
  const esSeguridad = input.tipoServicio === 'seguridad'

  if (showPreview) return (
    <QuotePreview input={input} result={result}
      onBack={() => setShowPreview(false)}
      onSave={() => { onSave(input, result); setShowPreview(false) }}
    />
  )

  return (
    <div className="max-w-4xl mx-auto">

      {/* ── Selector de tipo de servicio ── */}
      <div className="flex gap-3 mb-6 no-print">
        <button
          onClick={() => cambiarTipo('industrial')}
          className={`flex-1 py-3 px-4 rounded-xl border-2 font-semibold text-sm transition-colors ${
            !esSeguridad
              ? 'border-[#1F3864] bg-[#1F3864] text-white'
              : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
          }`}
        >
          🏗️ Servicios Industriales
        </button>
        <button
          onClick={() => cambiarTipo('seguridad')}
          className={`flex-1 py-3 px-4 rounded-xl border-2 font-semibold text-sm transition-colors ${
            esSeguridad
              ? 'border-[#1F3864] bg-[#1F3864] text-white'
              : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
          }`}
        >
          🛡️ Seguridad Patrimonial
        </button>
      </div>

      {/* Step indicator */}
      <div className="flex items-center mb-8 no-print">
        {STEPS.map((s, i) => (
          <div key={s} className="flex items-center flex-1 last:flex-none">
            <button
              onClick={() => setStep(i)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                i === step ? 'bg-[#1F3864] text-white' :
                i < step ? 'bg-green-100 text-green-700' :
                'bg-slate-100 text-slate-400'
              }`}
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                i === step ? 'bg-white text-[#1F3864]' :
                i < step ? 'bg-green-500 text-white' :
                'bg-slate-300 text-slate-500'
              }`}>
                {i < step ? '✓' : i + 1}
              </span>
              <span className="text-sm font-medium hidden sm:block">{s}</span>
            </button>
            {i < STEPS.length - 1 && (
              <div className={`flex-1 h-0.5 mx-1 ${i < step ? 'bg-green-400' : 'bg-slate-200'}`} />
            )}
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">

        {/* ── PASO 0: PROYECTO ── */}
        {step === 0 && (
          <div className="space-y-5">
            <h2 className="text-xl font-bold text-[#1F3864]">Datos del Proyecto</h2>

            {/* Banner informativo según tipo */}
            {esSeguridad ? (
              <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 text-sm text-blue-800">
                🛡️ <strong>Modo Seguridad Patrimonial</strong> — Cálculo por sueldo mensual + FIS 1.34
                (IMSS, INFONAVIT, SAR, aguinaldo, vacaciones integrados). Mercado Monclova 2026.
              </div>
            ) : (
              <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm text-amber-800">
                🏗️ <strong>Modo Industrial</strong> — Cálculo por tarifa semanal × semanas.
                Incluye IMSS patronal separado.
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Cliente *" required>
                <input className="input" value={input.cliente}
                  onChange={e => upd('cliente', e.target.value)}
                  placeholder="Nombre de la empresa" />
              </Field>
              <Field label="Ubicación *">
                <input className="input" value={input.ubicacion}
                  onChange={e => upd('ubicacion', e.target.value)}
                  placeholder="Ciudad, Estado" />
              </Field>
            </div>

            <Field label="Descripción del servicio *">
              <textarea className="input h-20 resize-none" value={input.descripcion}
                onChange={e => upd('descripcion', e.target.value)}
                placeholder={esSeguridad
                  ? 'Ej: Seguridad patrimonial 24/7, control de acceso, rondines...'
                  : 'Ej: Instalación de línea de producción, mantenimiento preventivo...'} />
            </Field>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Duración *">
                <div className="flex gap-2">
                  <input type="number" min={1} max={365} className="input flex-1"
                    value={input.duracionValor}
                    onChange={e => upd('duracionValor', Math.max(1, +e.target.value))} />
                  <select className="input w-28" value={input.unidadDuracion}
                    onChange={e => upd('unidadDuracion', e.target.value)}>
                    <option value="dias">Días</option>
                    <option value="semanas">Semanas</option>
                    <option value="meses">Meses</option>
                  </select>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  = {(input.unidadDuracion === 'dias' ? input.duracionValor / 7 : input.unidadDuracion === 'semanas' ? input.duracionValor : input.duracionValor * FINANCIERO.SEMANAS_MES).toFixed(1)} semanas
                </p>
              </Field>
              {!esSeguridad && (
                <Field label="¿Proyecto local o foráneo?">
                  <div className="flex gap-3 mt-1">
                    <Toggle active={input.local} onClick={() => upd('local', true)} label="Local" />
                    <Toggle active={!input.local} onClick={() => upd('local', false)} label="Foráneo" />
                  </div>
                </Field>
              )}
            </div>

            <Field label="Notas adicionales">
              <textarea className="input h-16 resize-none" value={input.notas}
                onChange={e => upd('notas', e.target.value)}
                placeholder="Observaciones, alcances específicos..." />
            </Field>
          </div>
        )}

        {/* ── PASO 1: PERSONAL ── */}
        {step === 1 && (
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#1F3864]">Personal Requerido</h2>
              <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium">
                {totalTrab} elemento{totalTrab !== 1 ? 's' : ''}
              </div>
            </div>

            {esSeguridad && (
              <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-600 space-y-1">
                <div className="font-semibold text-slate-700">Cálculo por elemento/mes:</div>
                <div>Costo real = Sueldo neto × FIS 1.34 × meses</div>
                <div className="text-slate-400">FIS incluye: IMSS 18% + INFONAVIT 5% + SAR 2% + aguinaldo 20d + vacaciones + prima vacacional</div>
              </div>
            )}

            <p className="text-sm text-slate-500">
              {esSeguridad
                ? 'Ingresa la cantidad de guardias por puesto. El costo se calcula sobre sueldo mensual neto + cargas sociales (FIS).'
                : 'Ingresa la cantidad de cada rol. Deja en 0 los que no aplican.'}
            </p>

            <div className="space-y-3">
              {input.trabajadores.map((rol, idx) => {
                const tarifa = esSeguridad ? rol.sueldoMensual : rol.tarifaSemanal
                const sufijo = esSeguridad ? '/mes' : '/sem'
                const durSemanas = input.unidadDuracion === 'dias' ? input.duracionValor / 7
                  : input.unidadDuracion === 'semanas' ? input.duracionValor
                  : input.duracionValor * FINANCIERO.SEMANAS_MES
                const durMeses = durSemanas / FINANCIERO.SEMANAS_MES
                const costoTotal = esSeguridad
                  ? rol.cantidad * rol.sueldoMensual * 1.34 * durMeses
                  : rol.cantidad * rol.tarifaSemanal * durSemanas
                return (
                  <div key={rol.rolId} className={`p-3 rounded-xl border transition-colors ${
                    rol.cantidad > 0 ? 'bg-blue-50 border-blue-100' : 'bg-slate-50 border-slate-100'
                  }`}>
                    {/* Línea 1: nombre + tarifa */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium text-sm text-slate-800">{rol.rolNombre}</div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-slate-400">$</span>
                        <input
                          type="number" min={0} step={500}
                          value={tarifa}
                          onChange={e => updRol(idx, esSeguridad ? 'sueldoMensual' : 'tarifaSemanal', Math.max(0, +e.target.value))}
                          className="w-20 text-right border border-slate-200 rounded-lg px-1.5 py-0.5 text-sm font-semibold bg-white"
                        />
                        <span className="text-xs text-slate-400">{sufijo}</span>
                      </div>
                    </div>
                    {/* Línea 2: +/− + total */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => updRol(idx, 'cantidad', Math.max(0, rol.cantidad - 1))}
                          className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 font-bold text-sm">−</button>
                        <input type="number" min={0} max={99} value={rol.cantidad}
                          onChange={e => updRol(idx, 'cantidad', Math.max(0, +e.target.value))}
                          className="w-12 text-center border border-slate-200 rounded-lg py-1 text-sm font-semibold bg-white" />
                        <button
                          onClick={() => updRol(idx, 'cantidad', rol.cantidad + 1)}
                          className="w-7 h-7 rounded-lg bg-[#1F3864] text-white hover:bg-blue-800 font-bold text-sm">+</button>
                      </div>
                      <div className="text-sm font-bold text-slate-700">
                        {rol.cantidad > 0 ? fmt(costoTotal) : <span className="text-slate-300">—</span>}
                      </div>
                    </div>
                    {esSeguridad && rol.cantidad > 0 && (
                      <div className="text-xs text-blue-500 mt-1.5">
                        ${(rol.sueldoMensual * 1.34).toLocaleString('es-MX', { maximumFractionDigits: 0 })}/mes c/FIS × {rol.cantidad} personas
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {totalTrab > 0 && (
              <div className="bg-blue-50 rounded-xl p-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-xs text-slate-500">Nómina integrada</div>
                  <div className="font-bold text-[#1F3864]">{fmt(result.totalNomina)}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">{esSeguridad ? 'IMSS (en FIS)' : 'IMSS patronal'}</div>
                  <div className="font-bold text-[#1F3864]">{esSeguridad ? 'Incluido ✓' : fmt(result.totalIMSS)}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">EPP / Uniformes</div>
                  <div className="font-bold text-[#1F3864]">{fmt(result.totalEPP)}</div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── PASO 2: EQUIPOS ── */}
        {step === 2 && (
          <div className="space-y-5">
            <h2 className="text-xl font-bold text-[#1F3864]">
              {esSeguridad ? 'Cuatrimotos y Equipos' : 'Equipos en Renta'}
            </h2>
            <p className="text-sm text-slate-500">
              {esSeguridad
                ? 'Cuatrimotos: renta + mantenimiento mensual. La gasolina se calcula automáticamente por unidad.'
                : 'El IVA se aplica automáticamente sobre renta de equipos.'}
            </p>
            <div className="space-y-3">
              {input.equipos.map((eq, idx) => {
                const allCatalog = esSeguridad ? [...EQUIPOS_SEGURIDAD, ...EQUIPOS] : EQUIPOS
                const cat = allCatalog.find(e => e.id === eq.equipoId)!
                const esCuatri = eq.equipoId === 'cuatrimoto'
                return (
                  <div key={eq.equipoId} className={`p-4 rounded-xl border transition-colors ${
                    eq.cantidad > 0
                      ? esCuatri ? 'bg-blue-50 border-blue-200' : 'bg-amber-50 border-amber-200'
                      : 'bg-slate-50 border-slate-100'
                  }`}>
                    <div className="flex items-center gap-3 flex-wrap">
                      <div className="flex-1 min-w-[160px]">
                        <div className="font-medium text-sm text-slate-800">
                          {esCuatri && '🏍️ '}{eq.equipoNombre}
                        </div>
                        <div className="text-xs text-slate-500">
                          {cat.tarifaDia > 0 && `Día: $${cat.tarifaDia.toLocaleString('es-MX')} · `}
                          {cat.tarifaSemana > 0 && `Sem: $${cat.tarifaSemana.toLocaleString('es-MX')} · `}
                          Mes: ${cat.tarifaMes.toLocaleString('es-MX')}
                          {esCuatri && ' (+$1,500/mes gasolina por unidad)'}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-slate-500">Cant:</span>
                        <input type="number" min={0} max={99} value={eq.cantidad}
                          onChange={e => updEq(idx, 'cantidad', Math.max(0, +e.target.value))}
                          className="w-14 text-center border border-slate-200 rounded-lg py-1.5 text-sm font-semibold" />
                      </div>
                      {!esCuatri && (
                        <>
                          <select value={eq.unidad}
                            onChange={e => updEq(idx, 'unidad', e.target.value)}
                            className="border border-slate-200 rounded-lg px-2 py-1.5 text-sm bg-white">
                            {cat.tarifaDia > 0 && <option value="dia">Por día</option>}
                            {cat.tarifaSemana > 0 && <option value="semana">Por semana</option>}
                            <option value="mes">Por mes</option>
                          </select>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-slate-500">Duración:</span>
                            <input type="number" min={1} max={365} value={eq.duracion}
                              onChange={e => updEq(idx, 'duracion', Math.max(1, +e.target.value))}
                              className="w-16 text-center border border-slate-200 rounded-lg py-1.5 text-sm font-semibold" />
                          </div>
                        </>
                      )}
                      {esCuatri && eq.cantidad > 0 && (
                        <div className="text-right text-sm">
                          <div className="font-bold text-blue-700">
                            {fmt(eq.cantidad * eq.tarifa * (input.unidadDuracion === 'dias' ? input.duracionValor/7/4.33 : input.unidadDuracion === 'semanas' ? input.duracionValor/4.33 : input.duracionValor) * 1.16)} renta c/IVA
                          </div>
                          <div className="text-xs text-blue-500">
                            + {fmt(eq.cantidad * 1500 * (input.unidadDuracion === 'dias' ? input.duracionValor/30 : input.unidadDuracion === 'semanas' ? input.duracionValor/4.33 : input.duracionValor))} gasolina
                          </div>
                        </div>
                      )}
                      {!esCuatri && eq.cantidad > 0 && (
                        <div className="font-bold text-amber-700 text-sm min-w-[100px] text-right">
                          {fmt(eq.cantidad * eq.tarifa * eq.duracion * 1.16)} c/IVA
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* ── PASO 3: EXTRAS ── */}
        {step === 3 && (
          <div className="space-y-5">
            <h2 className="text-xl font-bold text-[#1F3864]">Costos Adicionales</h2>

            {/* RC */}
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div>
                <div className="font-medium text-slate-800">Seguro RC (Responsabilidad Civil)</div>
                <div className="text-xs text-slate-500">$8,500/mes — SIEMPRE incluir según regla MICSA</div>
              </div>
              <Toggle active={input.incluirRC}
                onClick={() => upd('incluirRC', !input.incluirRC)}
                label={input.incluirRC ? 'Incluido' : 'No incluido'} />
            </div>

            {/* Herramientas */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-slate-800">Herramientas y Consumibles</div>
                  <div className="text-xs text-slate-500">Se cobra al doble del costo (regla MICSA)</div>
                </div>
                <Toggle active={input.incluirHerramientas}
                  onClick={() => upd('incluirHerramientas', !input.incluirHerramientas)}
                  label={input.incluirHerramientas ? 'Sí' : 'No'} />
              </div>
              {input.incluirHerramientas && (
                <div>
                  <label className="text-xs font-medium text-slate-600">Costo de herramientas ($)</label>
                  <input type="number" min={0} className="input mt-1"
                    value={input.costoHerramientas}
                    onChange={e => upd('costoHerramientas', Math.max(0, +e.target.value))}
                    placeholder="Ej: 11000" />
                  <p className="text-xs text-slate-500 mt-1">
                    Se cotizará como: {fmt(input.costoHerramientas * 2)} (×2 markup)
                  </p>
                </div>
              )}
            </div>

            {/* Hospedaje — solo industrial o si se activa en seguridad */}
            {(!esSeguridad || !input.local) && (
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-slate-800">Hospedaje y Viáticos</div>
                    <div className="text-xs text-slate-500">$1,200/noche · $166.60/día viáticos (LFT art.84)</div>
                  </div>
                  <Toggle active={input.incluirHospedaje}
                    onClick={() => upd('incluirHospedaje', !input.incluirHospedaje)}
                    label={input.incluirHospedaje ? 'Sí' : 'No'} />
                </div>
                {input.incluirHospedaje && (
                  <div>
                    <label className="text-xs font-medium text-slate-600">Días totales de estadía</label>
                    <input type="number" min={0} className="input mt-1"
                      value={input.diasHospedaje}
                      onChange={e => upd('diasHospedaje', Math.max(0, +e.target.value))} />
                    <p className="text-xs text-slate-500 mt-1">
                      {totalTrab} personas × {input.diasHospedaje} noches = {fmt(totalTrab * input.diasHospedaje * 1200 * 1.95)} (hospedaje con margen)
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Preview rápido */}
            <div className="bg-green-50 rounded-xl p-4 space-y-2 border border-green-100">
              <div className="font-semibold text-green-800 text-sm">Vista previa del cálculo</div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <MiniRow label="Nómina integrada" val={fmt(result.totalNomina)} />
                <MiniRow label="EPP / Uniformes" val={fmt(result.totalEPP)} />
                <MiniRow label="DC3 + Examen" val={fmt(result.totalObligatorios)} />
                <MiniRow label="Gestión MICSA 15%" val={fmt(result.gestionMICSA)} />
                <MiniRow label="IVA 16%" val={fmt(result.iva)} />
                <MiniRow label="Margen estimado" val={pct(result.margenPct)} />
              </div>
              <div className="border-t border-green-200 pt-2 flex justify-between font-bold text-green-900">
                <span>TOTAL CON IVA</span>
                <span>{fmt(result.totalFinal)}</span>
              </div>
            </div>
          </div>
        )}

        {/* ── PASO 4: RESUMEN ── */}
        {step === 4 && (
          <div className="space-y-5">
            <h2 className="text-xl font-bold text-[#1F3864]">Resumen y Vista Previa</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <KpiCard label="Total con IVA" val={fmt(result.totalFinal)} color="blue" />
              <KpiCard label="Sin IVA" val={fmt(result.precioSinIVA)} color="indigo" />
              <KpiCard label="Margen bruto" val={pct(result.margenPct)} color="green" />
              <KpiCard label="Utilidad $" val={fmt(result.margenBruto)} color="emerald" />
            </div>

            {/* Desglose */}
            <div className="space-y-2">
              <h3 className="font-semibold text-slate-700 text-sm">Desglose por concepto</h3>
              {result.lineas
                .filter(l => l.venta > 0)
                .map((l, i) => (
                  <div key={i} className="flex justify-between items-start py-2 px-3 rounded-lg hover:bg-slate-50 text-sm">
                    <div className="flex-1">
                      <span className={`inline-block px-1.5 py-0.5 rounded text-xs mr-2 ${
                        l.categoria === 'Nómina'      ? 'bg-blue-100 text-blue-700' :
                        l.categoria === 'IMSS'        ? 'bg-purple-100 text-purple-700' :
                        l.categoria === 'EPP'         ? 'bg-yellow-100 text-yellow-700' :
                        l.categoria === 'Obligatorios'? 'bg-red-100 text-red-700' :
                        l.categoria === 'Logística'   ? 'bg-orange-100 text-orange-700' :
                        l.categoria === 'Equipos'     ? 'bg-amber-100 text-amber-700' :
                        l.categoria === 'Herramientas'? 'bg-cyan-100 text-cyan-700' :
                        l.categoria === 'Gestión'     ? 'bg-green-100 text-green-700' :
                        'bg-slate-100 text-slate-600'
                      }`}>{l.categoria}</span>
                      <span className="text-slate-700">{l.concepto}</span>
                      {l.nota && <div className="text-xs text-slate-400 ml-10 mt-0.5">{l.nota}</div>}
                    </div>
                    <div className="text-right ml-4 shrink-0">
                      <div className="font-semibold text-slate-800">{fmt(l.venta)}</div>
                      {l.margen > 0 && <div className="text-xs text-green-600">{pct(l.margen)} margen</div>}
                    </div>
                  </div>
                ))}

              <div className="border-t-2 border-slate-200 mt-2 pt-2 flex justify-between font-bold text-base">
                <span>Subtotal sin IVA</span><span>{fmt(result.precioSinIVA)}</span>
              </div>
              <div className="flex justify-between text-sm text-slate-600">
                <span>IVA 16%</span><span>{fmt(result.iva)}</span>
              </div>
              <div className="bg-[#1F3864] text-white rounded-xl px-4 py-3 flex justify-between font-bold text-lg">
                <span>TOTAL A FACTURAR</span><span>{fmt(result.totalFinal)}</span>
              </div>
            </div>

            <button
              onClick={() => setShowPreview(true)}
              className="w-full bg-[#C9973A] hover:bg-amber-600 text-white font-bold py-3 rounded-xl transition-colors"
            >
              Ver cotización formal / Imprimir PDF →
            </button>
          </div>
        )}

        {/* Nav */}
        <div className="flex justify-between mt-8 pt-4 border-t border-slate-100 no-print">
          <button
            onClick={() => setStep(s => Math.max(0, s - 1))}
            disabled={step === 0}
            className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 font-medium"
          >← Anterior</button>
          {step < STEPS.length - 1 && (
            <button
              onClick={() => setStep(s => s + 1)}
              disabled={step === 0 && !input.cliente}
              className="px-6 py-2.5 rounded-xl bg-[#1F3864] text-white hover:bg-blue-800 disabled:opacity-40 font-medium"
            >Siguiente →</button>
          )}
          {step === STEPS.length - 1 && totalTrab > 0 && (
            <button
              onClick={() => { onSave(input, result); alert('¡Cotización guardada en historial!') }}
              className="px-6 py-2.5 rounded-xl bg-green-700 text-white hover:bg-green-800 font-medium"
            >Guardar cotización ✓</button>
          )}
        </div>
      </div>
    </div>
  )
}

// ── Helpers UI ────────────────────────────────────────────────────────────────
function Field({ label, children, required }: { label: string; children: React.ReactNode; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        {label}{required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
    </div>
  )
}

function Toggle({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button onClick={onClick}
      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors border ${
        active
          ? 'bg-[#1F3864] text-white border-[#1F3864]'
          : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300'
      }`}>
      {label}
    </button>
  )
}

function MiniRow({ label, val }: { label: string; val: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-slate-600">{label}</span>
      <span className="font-medium text-slate-800">{val}</span>
    </div>
  )
}

function KpiCard({ label, val, color }: { label: string; val: string; color: string }) {
  const colors: Record<string, string> = {
    blue:    'bg-blue-50 text-blue-800 border-blue-100',
    indigo:  'bg-indigo-50 text-indigo-800 border-indigo-100',
    green:   'bg-green-50 text-green-800 border-green-100',
    emerald: 'bg-emerald-50 text-emerald-800 border-emerald-100',
  }
  return (
    <div className={`rounded-xl p-3 border ${colors[color]}`}>
      <div className="text-xs opacity-70">{label}</div>
      <div className="font-bold text-lg mt-0.5">{val}</div>
    </div>
  )
}

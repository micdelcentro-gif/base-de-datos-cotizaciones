import { FINANCIERO, EPP_BASE_KIT, EPP_MONTHLY, EPP_SEGURIDAD_KIT } from '../data/catalog'

export type TipoServicio = 'industrial' | 'seguridad'

export interface RolItem {
  rolId: string
  rolNombre: string
  cantidad: number
  // Industrial: tarifa por semana
  tarifaSemanal: number
  // Seguridad: sueldo mensual neto (FIS se aplica en el cálculo)
  sueldoMensual: number
}

export interface EquipoItem {
  equipoId: string
  equipoNombre: string
  cantidad: number
  unidad: 'dia' | 'semana' | 'mes'
  tarifa: number
  duracion: number
}

export type UnidadDuracion = 'dias' | 'semanas' | 'meses'

export interface ProyectoInput {
  tipoServicio: TipoServicio
  cliente: string
  ubicacion: string
  descripcion: string
  duracionValor: number
  unidadDuracion: UnidadDuracion
  trabajadores: RolItem[]
  equipos: EquipoItem[]
  incluirHospedaje: boolean
  diasHospedaje: number
  incluirHerramientas: boolean
  costoHerramientas: number
  incluirRC: boolean
  local: boolean
  margenExtra: number
  notas: string
}

export interface LineaDetalle {
  concepto: string
  categoria: string
  costo: number
  venta: number
  margen: number
  esObligatorio?: boolean
  nota?: string
}

export interface ResultadoCotizacion {
  lineas: LineaDetalle[]
  totalNomina: number
  totalISN: number
  totalIMSS: number
  totalEPP: number
  totalLogistica: number
  totalEquipos: number
  totalHerramientas: number
  totalObligatorios: number
  totalRC: number
  subtotalDirecto: number
  gestionMICSA: number
  subtotalAntesIVA: number
  iva: number
  totalFinal: number
  margenBruto: number
  margenPct: number
  costoReal: number
  precioSinIVA: number
}

export function calcular(input: ProyectoInput): ResultadoCotizacion {
  const F = FINANCIERO
  const { duracionValor: val, unidadDuracion: unidad } = input
  const semanas = unidad === 'dias' ? val / 7 : unidad === 'semanas' ? val : val * F.SEMANAS_MES
  const meses = semanas / F.SEMANAS_MES
  const totalTrabajadores = input.trabajadores.reduce((s, r) => s + r.cantidad, 0)
  const esSeguridad = input.tipoServicio === 'seguridad'

  const lineas: LineaDetalle[] = []

  // ── 1. NÓMINA ───────────────────────────────────────────────────────────────
  let totalNomina = 0

  if (esSeguridad) {
    // Seguridad: sueldo mensual neto × FIS × meses
    // FIS = 1.34 absorbe IMSS, INFONAVIT, SAR, aguinaldo, vacaciones, prima vacacional
    for (const rol of input.trabajadores) {
      if (rol.cantidad === 0) continue
      const costoUnitarioMes = rol.sueldoMensual * F.FIS
      const costoTotal = rol.cantidad * costoUnitarioMes * meses
      totalNomina += costoTotal
      lineas.push({
        concepto: `Nómina — ${rol.rolNombre} (${rol.cantidad} × $${rol.sueldoMensual.toLocaleString('es-MX')}/mes × FIS ${F.FIS} × ${meses.toFixed(2)} mes${meses !== 1 ? 'es' : ''})`,
        categoria: 'Nómina',
        costo: costoTotal,
        venta: costoTotal,
        margen: 0,
        nota: `Costo integrado = sueldo neto × ${F.FIS} (incluye IMSS, INFONAVIT, SAR, aguinaldo, vacaciones)`,
      })
    }
  } else {
    // Industrial: tarifa semanal × semanas
    for (const rol of input.trabajadores) {
      if (rol.cantidad === 0) continue
      const costo = rol.cantidad * rol.tarifaSemanal * semanas
      totalNomina += costo
      lineas.push({
        concepto: `Nómina — ${rol.rolNombre} (${rol.cantidad} × $${rol.tarifaSemanal.toLocaleString('es-MX')}/sem × ${semanas.toFixed(1)} sem)`,
        categoria: 'Nómina',
        costo,
        venta: costo,
        margen: 0,
        nota: `${rol.cantidad} trabajador${rol.cantidad > 1 ? 'es' : ''}, ${meses} mes${meses > 1 ? 'es' : ''}`,
      })
    }
  }

  // ── 1b. ISN Coahuila 3% sobre nómina ────────────────────────────────────────
  let totalISN = 0
  if (totalTrabajadores > 0 && totalNomina > 0) {
    totalISN = totalNomina * F.ISN_PCT
    lineas.push({
      concepto: `ISN Coahuila 3% sobre nómina`,
      categoria: 'IMSS',
      costo: totalISN,
      venta: totalISN,
      margen: 0,
      nota: 'Impuesto Sobre Nómina — Coahuila — Ley ISN Coahuila 2026',
    })
  }

  // ── 2. IMSS ─────────────────────────────────────────────────────────────────
  // Seguridad: ya integrado en FIS — se muestra como $0 separado (transparencia)
  // Industrial: flat rate histórico por trabajador
  let totalIMSS = 0
  if (totalTrabajadores > 0) {
    if (esSeguridad) {
      // IMSS ya incluido en FIS — línea informativa en $0
      lineas.push({
        concepto: `IMSS Patronal (${totalTrabajadores} trabajadores) — incluido en FIS`,
        categoria: 'IMSS',
        costo: 0,
        venta: 0,
        margen: 0,
        nota: `IMSS ${(F.IMSS_PCT * 100).toFixed(0)}% + INFONAVIT ${(F.INFONAVIT_PCT * 100).toFixed(0)}% + SAR ${(F.SAR_PCT * 100).toFixed(0)}% integrados en FIS ${F.FIS}`,
      })
    } else {
      totalIMSS = totalTrabajadores * F.IMSS_POR_TRABAJADOR * meses
      lineas.push({
        concepto: `IMSS Patronal (${totalTrabajadores} trab. × $${F.IMSS_POR_TRABAJADOR.toLocaleString('es-MX')}/mes × ${meses} mes${meses > 1 ? 'es' : ''})`,
        categoria: 'IMSS',
        costo: totalIMSS,
        venta: totalIMSS,
        margen: 0,
      })
    }
  }

  // ── 3. EPP ───────────────────────────────────────────────────────────────────
  let costoEPPBase = 0
  let costoEPPMensual = 0

  if (totalTrabajadores > 0) {
    if (esSeguridad) {
      // Kit de guardia táctico — amortizado a 10 meses
      const AMORTIZACION = 10
      for (const item of EPP_SEGURIDAD_KIT) {
        costoEPPBase += item.costo * item.qty * totalTrabajadores
      }
      const epp_mensual_amortizado = (costoEPPBase / AMORTIZACION) * meses
      lineas.push({
        concepto: `Uniformes y Equipamiento Táctico (${totalTrabajadores} guardias)`,
        categoria: 'EPP',
        costo: epp_mensual_amortizado,
        venta: epp_mensual_amortizado,
        margen: 0,
        nota: `Kit: pantalón×2, camisola×2, botas, chamarra, gorra, fornitura, chaleco, linterna, radio, gafete. Amortizado ${AMORTIZACION} meses.`,
      })
      costoEPPBase = epp_mensual_amortizado
    } else {
      for (const item of EPP_BASE_KIT) costoEPPBase += item.costo * item.qty * totalTrabajadores
      for (const item of EPP_MONTHLY) costoEPPMensual += item.costo * item.qty * totalTrabajadores * meses
      lineas.push({
        concepto: `EPP — Kit base (${totalTrabajadores} personas)`,
        categoria: 'EPP',
        costo: costoEPPBase,
        venta: costoEPPBase,
        margen: 0,
        nota: 'Casco, lentes, guantes, tapones, barbiquejo, chaleco, botas',
      })
      if (meses > 1) {
        lineas.push({
          concepto: `EPP — Reemplazos mensuales (${totalTrabajadores} pers. × ${meses} meses)`,
          categoria: 'EPP',
          costo: costoEPPMensual,
          venta: costoEPPMensual,
          margen: 0,
          nota: 'Lentes, guantes (×2), tapones (×2) por mes',
        })
      }
    }
  }
  const totalEPP = costoEPPBase + costoEPPMensual

  // ── 4. DC3 + EXAMEN MÉDICO ───────────────────────────────────────────────────
  const costoDC3  = totalTrabajadores * F.DC3_COSTO
  const ventaDC3  = totalTrabajadores * F.DC3_VENTA
  const costoExam = totalTrabajadores * F.EXAMEN_MEDICO_COSTO
  const ventaExam = totalTrabajadores * F.EXAMEN_MEDICO_VENTA
  const totalObligatorios = ventaDC3 + ventaExam

  if (totalTrabajadores > 0) {
    lineas.push({
      concepto: `DC3 Capacitación (${totalTrabajadores} trabajadores)`,
      categoria: 'Obligatorios',
      costo: costoDC3,
      venta: ventaDC3,
      margen: (ventaDC3 - costoDC3) / ventaDC3,
      esObligatorio: true,
      nota: `Costo $${F.DC3_COSTO} → Venta $${F.DC3_VENTA} por persona (regla MICSA)`,
    })
    lineas.push({
      concepto: `Examen Médico de Ingreso (${totalTrabajadores} trabajadores)`,
      categoria: 'Obligatorios',
      costo: costoExam,
      venta: ventaExam,
      margen: (ventaExam - costoExam) / ventaExam,
      esObligatorio: true,
      nota: `Costo $${F.EXAMEN_MEDICO_COSTO} → Venta $${F.EXAMEN_MEDICO_VENTA} por persona (regla MICSA)`,
    })
  }

  // ── 5. HOSPEDAJE + VIÁTICOS ──────────────────────────────────────────────────
  let totalLogistica = 0
  if (!input.local && input.incluirHospedaje && input.diasHospedaje > 0) {
    const noches = input.diasHospedaje * totalTrabajadores
    const costoHosp = noches * F.HOSPEDAJE_POR_NOCHE
    const ventaHosp = costoHosp * 1.95
    totalLogistica += ventaHosp
    lineas.push({
      concepto: `Hospedaje (${totalTrabajadores} pers. × ${input.diasHospedaje} noches)`,
      categoria: 'Logística',
      costo: costoHosp,
      venta: ventaHosp,
      margen: (ventaHosp - costoHosp) / ventaHosp,
      nota: 'Margen ~95% según regla MICSA',
    })
    const costoViaticos = totalTrabajadores * input.diasHospedaje * F.VIATICOS_POR_DIA
    totalLogistica += costoViaticos
    lineas.push({
      concepto: `Viáticos (${totalTrabajadores} pers. × ${input.diasHospedaje} días × $${F.VIATICOS_POR_DIA}/día)`,
      categoria: 'Logística',
      costo: costoViaticos,
      venta: costoViaticos,
      margen: 0,
    })
  }

  // ── 5b. GASOLINA CUATRIMOTOS (solo seguridad) ────────────────────────────────
  if (esSeguridad) {
    const numCuatrimotos = input.equipos.filter(e => e.equipoId === 'cuatrimoto' && e.cantidad > 0)
      .reduce((s, e) => s + e.cantidad, 0)
    if (numCuatrimotos > 0) {
      const costoGas = numCuatrimotos * F.GASOLINA_CUATRIMOTO * meses
      totalLogistica += costoGas
      lineas.push({
        concepto: `Gasolina Cuatrimotos (${numCuatrimotos} unidad${numCuatrimotos > 1 ? 'es' : ''} × $${F.GASOLINA_CUATRIMOTO.toLocaleString('es-MX')}/mes × ${meses} mes${meses > 1 ? 'es' : ''})`,
        categoria: 'Logística',
        costo: costoGas,
        venta: costoGas,
        margen: 0,
        nota: `$${F.GASOLINA_CUATRIMOTO.toLocaleString('es-MX')}/unidad/mes — Source: estimado operativo MICSA`,
      })
    }
  }

  // ── 6. HERRAMIENTAS ───────────────────────────────────────────────────────────
  let totalHerramientas = 0
  if (input.incluirHerramientas && input.costoHerramientas > 0) {
    const ventaHerr = input.costoHerramientas * F.HERRAMIENTAS_MARKUP
    totalHerramientas = ventaHerr
    lineas.push({
      concepto: `Herramientas y Consumibles`,
      categoria: 'Herramientas',
      costo: input.costoHerramientas,
      venta: ventaHerr,
      margen: (ventaHerr - input.costoHerramientas) / ventaHerr,
      nota: 'Costo × 2 (regla MICSA — 50% margen sobre herramienta)',
    })
  }

  // ── 7. EQUIPOS EN RENTA ───────────────────────────────────────────────────────
  let totalEquipos = 0
  for (const eq of input.equipos) {
    if (eq.cantidad === 0 || eq.duracion === 0) continue
    const subtotal = eq.cantidad * eq.tarifa * eq.duracion
    const conIVA = subtotal * (1 + F.IVA)
    totalEquipos += conIVA
    lineas.push({
      concepto: `Renta — ${eq.equipoNombre} (${eq.cantidad} × ${eq.duracion} ${eq.unidad}${eq.duracion > 1 ? 's' : ''})`,
      categoria: 'Equipos',
      costo: subtotal,
      venta: conIVA,
      margen: F.IVA,
      nota: `IVA incluido en renta de equipo`,
    })
  }

  // ── 8. SEGURO RC ──────────────────────────────────────────────────────────────
  let totalRC = 0
  if (input.incluirRC) {
    totalRC = F.RC_SEGURO_BASE * meses
    lineas.push({
      concepto: `Seguro RC (Responsabilidad Civil) — ${meses} mes${meses > 1 ? 'es' : ''}`,
      categoria: 'Seguros',
      costo: totalRC,
      venta: totalRC,
      margen: 0,
      esObligatorio: true,
    })
  }

  // ── GESTIÓN + TOTALES ─────────────────────────────────────────────────────────
  const baseParaGestion = totalNomina + totalISN + totalIMSS + totalEPP + totalLogistica + totalRC
  const gestionMICSA = baseParaGestion * F.GESTIÓN_MICSA_PCT
  const subtotalDirecto = totalNomina + totalISN + totalIMSS + totalEPP + totalLogistica +
                          totalEquipos + totalHerramientas + totalObligatorios + totalRC

  lineas.push({
    concepto: `Gestión Administrativa MICSA (15% sobre M.O. + logística)`,
    categoria: 'Gestión',
    costo: gestionMICSA * 0.6,
    venta: gestionMICSA,
    margen: 0.4,
    nota: 'Base: nómina + cargas + EPP + logística + RC. Herramientas y DC3 excluidos (ya tienen markup)',
  })

  const subtotalAntesIVA = subtotalDirecto + gestionMICSA
  const iva = subtotalAntesIVA * F.IVA
  const totalFinal = subtotalAntesIVA + iva

  const costoReal = totalNomina + totalISN + totalIMSS + costoEPPBase + costoEPPMensual +
    (input.incluirHospedaje ? input.diasHospedaje * totalTrabajadores * F.HOSPEDAJE_POR_NOCHE : 0) +
    (input.incluirHerramientas ? input.costoHerramientas : 0) +
    totalEquipos / (1 + F.IVA) +
    (input.incluirRC ? totalRC : 0) +
    costoDC3 + costoExam

  const margenBruto = subtotalAntesIVA - costoReal
  const margenPct = subtotalAntesIVA > 0 ? margenBruto / subtotalAntesIVA : 0

  return {
    lineas,
    totalNomina, totalISN, totalIMSS, totalEPP, totalLogistica,
    totalEquipos, totalHerramientas, totalObligatorios, totalRC,
    subtotalDirecto, gestionMICSA, subtotalAntesIVA, iva, totalFinal,
    margenBruto, margenPct, costoReal, precioSinIVA: subtotalAntesIVA,
  }
}

export function fmt(n: number): string {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency', currency: 'MXN', minimumFractionDigits: 2,
  }).format(n)
}

export function pct(n: number): string {
  return (n * 100).toFixed(1) + '%'
}

// ── CATÁLOGO EPP ──────────────────────────────────────────────────────────────
export const EPP_BASE_KIT = [
  { id:'casco',      nombre:'Casco de Seguridad',             costo:85,  qty:1 },
  { id:'lentes',     nombre:'Lentes de Seguridad',            costo:28,  qty:1 },
  { id:'guantes',    nombre:'Guantes Anticorte N5',           costo:33,  qty:1 },
  { id:'tapones',    nombre:'Tapones Auditivos (par)',         costo:8,   qty:1 },
  { id:'barbiquejo', nombre:'Barbiquejo p/casco',              costo:15,  qty:1 },
  { id:'chaleco',    nombre:'Chaleco Reflejante',              costo:185, qty:1 },
  { id:'botas',      nombre:'Botas de Seguridad Dieléctricas',costo:620, qty:1 },
]

export const EPP_MONTHLY = [
  { id:'lentes_m',  nombre:'Lentes (reemplazo mensual)',  costo:28, qty:1 },
  { id:'guantes_m', nombre:'Guantes (reemplazo mensual)', costo:33, qty:2 },
  { id:'tapones_m', nombre:'Tapones (reemplazo mensual)', costo:8,  qty:2 },
]

// ── EPP SEGURIDAD (kit de guardia) ────────────────────────────────────────────
export const EPP_SEGURIDAD_KIT = [
  { id:'pantalon',  nombre:'Pantalón Táctico Comando',    costo:600, qty:2 },
  { id:'camisa',    nombre:'Camisola Táctica Manga Larga',costo:510, qty:2 },
  { id:'botas_seg', nombre:'Botas Tácticas Policiales',   costo:900, qty:1 },
  { id:'chamarra',  nombre:'Chamarra Térmica/Neopreno',   costo:905, qty:1 },
  { id:'gorra',     nombre:'Gorra Táctica con Logo',      costo:166, qty:1 },
  { id:'fornitura', nombre:'Fornitura / Cinturón Táctico',costo:228, qty:1 },
  { id:'chaleco_s', nombre:'Chaleco Táctico/Reflejante',  costo:819, qty:1 },
  { id:'linterna',  nombre:'Linterna Táctica Recargable', costo:200, qty:1 },
  { id:'radio',     nombre:'Radio Portátil (inversión)',  costo:1500,qty:1 },
  { id:'gafete',    nombre:'Gafete PVC con Holograma',    costo:50,  qty:1 },
]

// ── ROLES INDUSTRIALES (tarifa SEMANAL) ───────────────────────────────────────
// Source: Mercado Monclova, Coahuila 2026
export const ROLES = [
  { id:'mecanico',      nombre:'Mecánico / Electricista',   tarifaSemanal:10000 },
  { id:'maniobrista',   nombre:'Maniobrista',                tarifaSemanal:8500  },
  { id:'soldador',      nombre:'Soldador Certificado',       tarifaSemanal:12000 },
  { id:'supervisor',    nombre:'Supervisor de Obra',         tarifaSemanal:15000 },
  { id:'ayudante',      nombre:'Ayudante General',           tarifaSemanal:7500  },
  { id:'electricista',  nombre:'Electricista Industrial',    tarifaSemanal:11000 },
  { id:'instrumentista',nombre:'Instrumentista',             tarifaSemanal:13000 },
]

// ── ROLES DE SEGURIDAD PATRIMONIAL (sueldo MENSUAL neto) ─────────────────────
// Source: Guía Maestra de Cotización MICSA v1.0, Marzo 2026 — Monclova, Coahuila
export const ROLES_SEGURIDAD = [
  { id:'oficial',    nombre:'Oficial de Seguridad',            sueldoMensual:10300 },
  { id:'patrullero', nombre:'Patrullero Cuatrimoto',           sueldoMensual:11000 },
  { id:'caseta',     nombre:'Oficial Administrativo (Caseta)', sueldoMensual:9500  },
  { id:'monitorista',nombre:'Monitorista CCTV',                sueldoMensual:12000 },
  { id:'resp_turno', nombre:'Responsable de Turno',            sueldoMensual:13000 },
  { id:'jefe',       nombre:'Jefe de Vigilancia',              sueldoMensual:18000 },
]

// ── EQUIPOS EN RENTA ──────────────────────────────────────────────────────────
export const EQUIPOS = [
  { id:'montacargas_25',  nombre:'Montacargas 2,500 kg',          tarifaDia:2475,  tarifaSemana:7700,  tarifaMes:22638 },
  { id:'montacargas_5t',  nombre:'Montacargas 5,000 kg',          tarifaDia:4320,  tarifaSemana:12960, tarifaMes:39000 },
  { id:'plataforma_45',   nombre:'Plataforma Elevadora 45ft',     tarifaDia:2700,  tarifaSemana:8100,  tarifaMes:24300 },
  { id:'montacargas_40t', nombre:'Montacargas Pesado 40-60 ton',  tarifaDia:28000, tarifaSemana:84000, tarifaMes:252000},
  { id:'grua_pluma',      nombre:'Grúa Pluma Industrial',         tarifaDia:9500,  tarifaSemana:28500, tarifaMes:85500 },
  { id:'andamio',         nombre:'Andamio Multidireccional (set)',tarifaDia:1200,  tarifaSemana:3600,  tarifaMes:10800 },
]

// ── EQUIPOS DE SEGURIDAD (cuatrimotos) ───────────────────────────────────────
export const EQUIPOS_SEGURIDAD = [
  { id:'cuatrimoto', nombre:'Cuatrimoto (Renta + Mantenimiento)', tarifaDia:0, tarifaSemana:0, tarifaMes:3500 },
]

// ── CONSTANTES FINANCIERAS ────────────────────────────────────────────────────
export const FINANCIERO = {
  SEMANAS_MES:          4.33,    // 365/12/7 — Source: cálculo estándar LFT
  FIS:                  1.34,    // Factor Integración Salarial — Source: Guía Maestra MICSA v1.0 Mar-2026
  IMSS_PCT:             0.18,    // IMSS patronal Clase V (alto riesgo) — Source: IMSS 2026
  INFONAVIT_PCT:        0.05,    // INFONAVIT patronal — Source: INFONAVIT 2026
  SAR_PCT:              0.02,    // SAR/Afore — Source: SAR 2026
  // Valores legacy para modo industrial (flat rate histórico)
  IMSS_POR_TRABAJADOR:  1489.25, // IMSS patronal mensual flat (solo modo industrial)
  DC3_COSTO:            100,
  DC3_VENTA:            500,     // 5x markup — Source: Regla MICSA
  EXAMEN_MEDICO_COSTO:  250,
  EXAMEN_MEDICO_VENTA:  850,     // Source: Regla MICSA
  HOSPEDAJE_POR_NOCHE:  1200,
  VIATICOS_POR_DIA:     166.6,   // Source: LFT art.84
  HERRAMIENTAS_MARKUP:  2.0,
  GESTIÓN_MICSA_PCT:    0.15,    // Source: Guía Maestra MICSA
  INDIRECTOS_PCT:       0.1197,
  IVA:                  0.16,
  RC_SEGURO_BASE:       8500,
  GASOLINA_CUATRIMOTO:  1500,    // por unidad/mes — Source: estimado operativo MICSA
}

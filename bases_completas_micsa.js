// ================================================================
// BASES DE DATOS COMPLETAS — COTIZADOR MICSA
// Extraído de: bases co.xlsx (38 hojas)
// Versión: 2.0 | Fecha: 2026-03-16
// 33 secciones | Todas las hojas desde DESGLOSE PRESUPUESTO
// ================================================================

// ──────────────────────────────────────────────────────────────
// CONFIGURACIÓN GLOBAL
// ──────────────────────────────────────────────────────────────
const MICSA_CONFIG = {
  tipoCambio: 20.00,
  baseOperativa: "Monclova, Coahuila",
  version: "2.0",
  fecha: "2026-03-16"
};

const PARAMETROS_FINANCIEROS = {
  indirectos: 0.10,
  administracion: 0.05,
  utilidad: 0.10,
  contingencia: 0.10
};

// ──────────────────────────────────────────────────────────────
// 1. DESGLOSE PRESUPUESTO (13 items)
// ──────────────────────────────────────────────────────────────
const DESGLOSE_PRESUPUESTO = [
  {
    "categoria": "Hospedaje",
    "concepto": "Hospedaje",
    "presupuesto": 316800.0
  },
  {
    "categoria": "Traslados",
    "concepto": "Traslados",
    "presupuesto": 55000.0
  },
  {
    "categoria": "Viáticos",
    "concepto": "Viáticos",
    "presupuesto": 100800.0
  },
  {
    "categoria": "",
    "concepto": "Subtotal",
    "presupuesto": 472600.0
  },
  {
    "categoria": "DC3",
    "concepto": "DC3 / Documentación",
    "presupuesto": 14000.0
  },
  {
    "categoria": "Herramienta",
    "concepto": "Herramienta",
    "presupuesto": 40000.0
  },
  {
    "categoria": "Consumibles",
    "concepto": "Consumibles",
    "presupuesto": 18000.0
  },
  {
    "categoria": "",
    "concepto": "Subtotal",
    "presupuesto": 72000.0
  },
  {
    "categoria": "Equipos",
    "concepto": "Renta de Equipos",
    "presupuesto": 576404.0
  },
  {
    "categoria": "",
    "concepto": "Subtotal",
    "presupuesto": 576404.0
  },
  {
    "categoria": "EPP",
    "concepto": "Equipo de Protección Personal",
    "presupuesto": 7030.0
  },
  {
    "categoria": "RC",
    "concepto": "Responsabilidad Civil / Seguros",
    "presupuesto": 15860.0
  },
  {
    "categoria": "",
    "concepto": "Subtotal",
    "presupuesto": 22890.0
  }
];

// ──────────────────────────────────────────────────────────────
// 2. DESGLOSE GASTO REAL (17 items)
// ──────────────────────────────────────────────────────────────
const DESGLOSE_GASTO_REAL = [
  {
    "categoria": "Nómina",
    "concepto": "Nómina directa (8 semanas)",
    "gastoReal": 527852.66
  },
  {
    "categoria": "Nómina",
    "concepto": "IMSS + Cargas Patronales",
    "gastoReal": 87911.4
  },
  {
    "categoria": "Nómina",
    "concepto": "Aguinaldo + Vacaciones + Prima",
    "gastoReal": 15752.0
  },
  {
    "categoria": "",
    "concepto": "Subtotal Nómina",
    "gastoReal": 631516.06
  },
  {
    "categoria": "Hospedaje",
    "concepto": "Hospedaje",
    "gastoReal": 84939.93
  },
  {
    "categoria": "Traslados",
    "concepto": "Traslados",
    "gastoReal": 63356.0
  },
  {
    "categoria": "Viáticos",
    "concepto": "Viáticos",
    "gastoReal": 156400.0
  },
  {
    "categoria": "",
    "concepto": "Subtotal",
    "gastoReal": 304695.93
  },
  {
    "categoria": "DC3",
    "concepto": "DC3 / Documentación",
    "gastoReal": 10300.0
  },
  {
    "categoria": "Herramienta",
    "concepto": "Herramienta",
    "gastoReal": 20000.0
  },
  {
    "categoria": "Consumibles",
    "concepto": "Consumibles",
    "gastoReal": 15000.0
  },
  {
    "categoria": "",
    "concepto": "Subtotal",
    "gastoReal": 45300.0
  },
  {
    "categoria": "Equipos",
    "concepto": "Renta de Equipos",
    "gastoReal": 335578.0
  },
  {
    "categoria": "",
    "concepto": "Subtotal",
    "gastoReal": 335578.0
  },
  {
    "categoria": "EPP",
    "concepto": "Equipo de Protección Personal",
    "gastoReal": 7030.0
  },
  {
    "categoria": "RC",
    "concepto": "Responsabilidad Civil / Seguros",
    "gastoReal": 15860.0
  },
  {
    "categoria": "",
    "concepto": "Subtotal",
    "gastoReal": 22890.0
  }
];

// ──────────────────────────────────────────────────────────────
// 3. NÓMINA CONSOLIDADA (19 registros)
// ──────────────────────────────────────────────────────────────
const NOMINA_CONSOLIDADA = [
  {
    "puesto": "seguridad",
    "nombre": "Hugo Sifuentes",
    "salarioSemanal": 14000.0,
    "datos": [
      "14000",
      "Angel",
      "14000",
      "Angel",
      "28000",
      "56000",
      null,
      null,
      null
    ]
  },
  {
    "puesto": "maniobrista",
    "nombre": "Eduardo Arturo Rodriguez Martinez",
    "salarioSemanal": 14000.0,
    "datos": [
      "14000",
      "Hugo Sifuentes",
      "14000",
      "Hugo Sifuentes",
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    "puesto": "maniobrista",
    "nombre": "Ricardo Rodolfo Mera Reyes",
    "salarioSemanal": 14000.0,
    "datos": [
      "14000",
      "Eduardo Arturo Rodriguez Martinez",
      "14000",
      "Eduardo Arturo Rodriguez Martinez",
      "20000",
      "48000",
      null,
      null,
      null
    ]
  },
  {
    "puesto": "mecanico",
    "nombre": "Luis Silverio Lucido Lopez",
    "salarioSemanal": 10000.0,
    "datos": [
      "10000",
      "Ricardo Rodolfo Mera Reyes",
      "10000",
      "Ricardo Rodolfo Mera Reyes",
      "20000",
      "40000",
      null,
      null,
      null
    ]
  },
  {
    "puesto": "mecanico",
    "nombre": "Tomas Luna Mendez",
    "salarioSemanal": 10000.0,
    "datos": [
      "10000",
      "Luis Silverio Lucido Lopez",
      "10000",
      "Luis Silverio Lucido Lopez",
      "20000",
      "40000",
      null,
      null,
      null
    ]
  },
  {
    "puesto": "mecanico",
    "nombre": "Tomas Daniel Luna Villela",
    "salarioSemanal": 10000.0,
    "datos": [
      "10000",
      "Tomas Luna Mendez",
      "10000",
      "Tomas Luna Mendez",
      "20000",
      "40000",
      null,
      null,
      null
    ]
  },
  {
    "puesto": "mecanico",
    "nombre": "Juan Jesus Estrada Segura",
    "salarioSemanal": 10000.0,
    "datos": [
      "10000",
      "Tomas Daniel Luna Villela",
      "10000",
      "Tomas Daniel Luna Villela",
      "20000",
      "40000",
      null,
      null,
      null
    ]
  },
  {
    "puesto": "mecanico",
    "nombre": "Manuel Esteban Garcia Gonzalez",
    "salarioSemanal": 10000.0,
    "datos": [
      "10000",
      "Juan Jesus Estrada Segura",
      "10000",
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    "puesto": "mecanico",
    "nombre": "Jordan Nefthali Contreras Gonzalez",
    "salarioSemanal": 10000.0,
    "datos": [
      "10000",
      "Manuel Esteban Garcia Gonzalez",
      "10000",
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    "puesto": "mecanico",
    "nombre": "Joel Roberto Gonzalez Rivera",
    "salarioSemanal": 10000.0,
    "datos": [
      "10000",
      "Jordan Nefthali Contreras Gonzalez",
      "10000",
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    "puesto": "mecanico",
    "nombre": "Kevin Daniel Valenciano Velez",
    "salarioSemanal": 10000.0,
    "datos": [
      "10000",
      "Joel Roberto Gonzalez Rivera",
      "10000",
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    "puesto": "mecanico",
    "nombre": "Fernando Levin Gonzalez Rivera",
    "salarioSemanal": 10000.0,
    "datos": [
      "10000",
      "Kevin Daniel Valenciano Velez",
      "10000",
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    "puesto": "mecanico",
    "nombre": "Hugo de Alba",
    "salarioSemanal": 10000.0,
    "datos": [
      "10000",
      "Fernando Levin Gonzalez Rivera",
      "10000",
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    "puesto": "electrico",
    "nombre": "Sergio Guzman Alvarado",
    "salarioSemanal": 10000.0,
    "datos": [
      "10000",
      "Hugo de Alba",
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    "puesto": "electrico",
    "nombre": "Jose Armando Rivas Garcia",
    "salarioSemanal": 10000.0,
    "datos": [
      "10000",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    "puesto": "electrico",
    "nombre": "Arturo Guadalupe Romo de los Santos",
    "salarioSemanal": 10000.0,
    "datos": [
      "10000",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    "puesto": "electrico",
    "nombre": "Reynaldo Rivas Garcia",
    "salarioSemanal": 10000.0,
    "datos": [
      "10000",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    "puesto": "electrico",
    "nombre": "Mario Alberto Garza Morales",
    "salarioSemanal": 10000.0,
    "datos": [
      "10000",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    "puesto": "electrico",
    "nombre": "Sergio",
    "salarioSemanal": 10000.0,
    "datos": [
      "10000",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  }
];

// ──────────────────────────────────────────────────────────────
// 4. PRESUPUESTO COMPLETO (68 filas)
// ──────────────────────────────────────────────────────────────
const PRESUPUESTO_COMPLETO = [
  [
    "PRESUPUESTO COMPLETO - PROYECTO IRON CAST",
    null,
    null,
    "ANÁLISIS DE AHORRO EN HERRAMIENTAS",
    null,
    null,
    null,
    "⚙️ PARÁMETROS EDITABLES",
    null,
    null,
    null
  ],
  [
    "RESUMEN FINANCIERO FINAL",
    null,
    null,
    "Concepto",
    "Monto",
    "Diferencia",
    null,
    "Concepto",
    "Presupuesto Original",
    null,
    null
  ],
  [
    "COSTO LABORAL REAL DETALLADO",
    null,
    null,
    "Presupuesto herramientas",
    "472600",
    null,
    null,
    null,
    "472600",
    null,
    null
  ],
  [
    "💸 PAGOS REALES (nomina empleados)",
    null,
    null,
    "Gasto real herramientas",
    "26975.72",
    null,
    null,
    null,
    "72000",
    null,
    null
  ],
  [
    "Nómina directa (8 semanas)",
    "472000",
    null,
    "💰 AHORRO EN HERRAMIENTAS",
    "445624.28",
    null,
    null,
    null,
    "576404",
    null,
    null
  ],
  [
    "IMSS + cargas patronales",
    "87911.4",
    null,
    null,
    null,
    null,
    null,
    null,
    "22890",
    null,
    null
  ],
  [
    "Subtotal Pagos Reales",
    "559911.4",
    null,
    "IMPACTO EN PROYECTO",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "TOTAL PRESUPUESTADO",
    "1143894",
    null,
    null
  ],
  [
    "🧾 PROVISIONES (Guardar, no es utilidad)",
    null,
    null,
    "Utilidad si gastáramos $40,000:",
    "Utilidad sería",
    "519083.9500000002",
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Aguinaldo + Vacaciones + Prima",
    "15752",
    null,
    "Utilidad REAL (gastando $19,453):",
    "Utilidad REAL",
    "936683.9500000002",
    null,
    "💡 Modifica los valores amarillos para ver el impacto en utilidad y margen",
    null,
    null,
    null
  ],
  [
    null,
    null,
    null,
    "✅ GANANCIA EXTRA POR AHORRO",
    null,
    "417600",
    null,
    null,
    null,
    null,
    null
  ],
  [
    "✅ COSTO LABORAL TOTAL REAL",
    "575663.4",
    null,
    null,
    null,
    null,
    null,
    "COMPARATIVO",
    null,
    null,
    null
  ],
  [
    null,
    null,
    null,
    "% Margen si gastáramos $40,000:",
    null,
    "0.21953767218628628",
    null,
    null,
    "Presupuesto",
    "Real",
    "Diferencia"
  ],
  [
    "hospedaje",
    "316800",
    null,
    "% Margen REAL (actual):",
    null,
    "0.3961544446852108",
    null,
    null,
    "316800",
    "156000",
    "160800"
  ],
  [
    "traslados",
    "55000",
    null,
    null,
    null,
    null,
    null,
    null,
    "55000",
    "40000",
    "15000"
  ],
  [
    "viaticos",
    "100800",
    null,
    "OTROS GASTOS OPERATIVOS",
    null,
    null,
    null,
    null,
    "100800",
    "96000",
    "4800"
  ],
  [
    "DC3 / Documentación",
    "14000",
    null,
    "hospedaje",
    "316800",
    "156000",
    null,
    null,
    "14000",
    "10300",
    "3700"
  ],
  [
    "herramienta",
    "40000",
    null,
    "traslados",
    "55000",
    "40000",
    null,
    null,
    "40000",
    "20000",
    "20000"
  ],
  [
    "consumibles",
    "18000",
    null,
    "viaticos",
    "100800",
    "96000",
    null,
    null,
    "18000",
    "15000",
    "3000"
  ],
  [
    "equipos",
    "576404",
    null,
    "DC3 / Documentación",
    "14000",
    "10300",
    null,
    null,
    "576404",
    "576404",
    null
  ],
  [
    "epp",
    "7030",
    null,
    "herramienta",
    "40000",
    "20000",
    null,
    null,
    "7030",
    "7030",
    null
  ],
  [
    "rc",
    "15860",
    null,
    "consumibles",
    "18000",
    "15000",
    null,
    null,
    "15860",
    "15860",
    null
  ],
  [
    null,
    null,
    null,
    "equipos",
    "576404",
    "576404",
    null,
    null,
    null,
    null,
    null
  ],
  [
    null,
    null,
    null,
    "epp",
    "7030",
    "7030",
    null,
    "TOTAL",
    "1143894",
    "936594",
    "207300"
  ],
  [
    "💼 Gestión del Proyecto (JG)",
    "25000",
    "← Tu pago por gestionar el proyecto (1% de OC)",
    "rc",
    "15860",
    "15860",
    null,
    null,
    null,
    null,
    null
  ],
  [
    "TOTAL GASTOS",
    "1427757.4",
    null,
    null,
    null,
    "936594",
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Total Orden de Compra (OC)",
    "2364441.35",
    null,
    "📊 COMPARATIVO: PRESUPUESTO ORIGINAL vs GASTO REAL",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "UTILIDAD LIBRE DEL PROYECTO",
    "936683.9500000002",
    null,
    "CONCEPTO",
    "PRESUPUESTO ORIGINAL",
    "GASTO REAL",
    "DIFERENCIA (AHORRO)",
    null,
    null,
    null,
    null
  ],
  [
    "% MARGEN",
    "0.3961544446852108",
    null,
    "hospedaje traslados y viaticos",
    "472600",
    "292200",
    "180400",
    null,
    null,
    null,
    null
  ],
  [
    null,
    null,
    null,
    null,
    "72000",
    "45300",
    "427300",
    null,
    null,
    null,
    null
  ],
  [
    null,
    null,
    null,
    null,
    "576404",
    "576404",
    null,
    null,
    null,
    null,
    null
  ],
  [
    null,
    null,
    null,
    null,
    "22890",
    "22890",
    null,
    null,
    null,
    null,
    null
  ],
  [
    "💰 DESGLOSE FINAL: TU GANANCIA vs UTILIDAD EMPRESA",
    null,
    null,
    null,
    "1143894",
    "936794",
    "607700",
    null,
    null,
    null,
    null
  ],
  [
    "SECCIÓN A: TU GANANCIA TOTAL (JG)",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "💼 Gestión del Proyecto (1% de OC)",
    "💼 Gestión (1% de OC)",
    "25000",
    "Ya descontado como GASTO ✓",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "💵 Ganancia por Servicios",
    "💵 Ganancia por Servicios",
    "25000",
    "Diferencial de precios",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "🎯 TOTAL TU GANANCIA (JG)",
    "🎯 TOTAL TU GANANCIA (JG)",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "SECCIÓN B: UTILIDAD REAL DE LA EMPRESA (MICSA)",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Utilidad Libre del Proyecto",
    "Utilidad Libre del Proyecto",
    "936683.9500000002",
    "Ya sin la gestión (es gasto)",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "(-) Tu ganancia por servicios",
    "(-) Tu ganancia por servicios",
    "-347700",
    "Se resta de utilidad",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "🏢 UTILIDAD REAL MICSA",
    "🏢 UTILIDAD NETA MICSA",
    "588983.9500000002",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "SECCIÓN C: VERIFICACIÓN",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Tu ganancia total",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Utilidad real MICSA",
    "- Gestión (ya como gasto)",
    "25000",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "SUMA (debe = Utilidad Libre)",
    "- Ganancia servicios (de utilidad)",
    "347700",
    null,
    "MI AHORRO",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    null,
    null,
    "372700",
    "Debe ser igual a C40",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "VERIFICACIÓN DE DISTRIBUCIÓN DEL OC",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "DESDE EL PUNTO DE VISTA DE MICSA:",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "OC (Ingreso Total):",
    "2364441.35",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "GASTOS DE MICSA:",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "• Costo laboral (nómina, IMSS, provisiones)",
    "575663.4",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "• Pago a JG por servicios (EPP, herram, DC3, máq)",
    "1143894",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "📊 RESUMEN FINAL",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "DINERO QUE ENTRA:",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "OC del cliente",
    "2364441.35",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "DINERO QUE SALE (GASTOS):",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Total gastos",
    "1427757.4",
    "Ya incluye tu gestión",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "LO QUE SOBRA:",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Utilidad libre",
    "936683.9500000002",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "────────────────────────────────",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "DE ESA UTILIDAD:",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "TÚ te quedas (servicios)",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "MICSA se queda",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "TU GANANCIA TOTAL:",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Gestión (ya en gastos)",
    "25000",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "+ Servicios (de utilidad)",
    "347700",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "= TOTAL TUYO",
    "372700",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    null,
    "745400",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ]
];

// ──────────────────────────────────────────────────────────────
// 5. MI UTILIDAD (23 items)
// ──────────────────────────────────────────────────────────────
const MI_UTILIDAD = [
  {
    "concepto": "hospedaje",
    "precioVenta": 316800.0,
    "miCosto": 15600.0,
    "miGanancia": 301200.0,
    "margen": 0.9507575757575758
  },
  {
    "concepto": "traslados",
    "precioVenta": 55000.0,
    "miCosto": 40000.0,
    "miGanancia": 15000.0,
    "margen": 0.2727272727272727
  },
  {
    "concepto": "viaticos",
    "precioVenta": 100800.0,
    "miCosto": 96000.0,
    "miGanancia": 4800.0,
    "margen": 0.047619047619047616
  },
  {
    "concepto": "DC3 / Documentación",
    "precioVenta": 14000.0,
    "miCosto": 10300.0,
    "miGanancia": 3700.0,
    "margen": 0.2642857142857143
  },
  {
    "concepto": "herramienta",
    "precioVenta": 40000.0,
    "miCosto": 20000.0,
    "miGanancia": 20000.0,
    "margen": 0.5
  },
  {
    "concepto": "consumibles",
    "precioVenta": 18000.0,
    "miCosto": 15000.0,
    "miGanancia": 3000.0,
    "margen": 0.16666666666666666
  },
  {
    "concepto": "equipos",
    "precioVenta": 576404.0,
    "miCosto": 576404.0,
    "miGanancia": 0.0,
    "margen": 0.0
  },
  {
    "concepto": "epp",
    "precioVenta": 7030.0,
    "miCosto": 7030.0,
    "miGanancia": 0.0,
    "margen": 0.0
  },
  {
    "concepto": "rc",
    "precioVenta": 15860.0,
    "miCosto": 15860.0,
    "miGanancia": 0.0,
    "margen": 0.0
  },
  {
    "concepto": "SUBTOTAL SERVICIOS",
    "precioVenta": 1143894.0,
    "miCosto": 796194.0,
    "miGanancia": 347700.0,
    "margen": 0.3039617307198045
  },
  {
    "concepto": "Gestión del proyecto (% sobre OC):",
    "precioVenta": 25000.0,
    "miCosto": 0.0,
    "miGanancia": 25000.0,
    "margen": 1.0
  },
  {
    "concepto": "El proyecto me paga:",
    "precioVenta": 2364441.35,
    "miCosto": "",
    "miGanancia": "",
    "margen": ""
  },
  {
    "concepto": "A mí me cuesta:",
    "precioVenta": 1143894.0,
    "miCosto": "",
    "miGanancia": "",
    "margen": ""
  },
  {
    "concepto": "MI GANANCIA NETA:",
    "precioVenta": 372700.0,
    "miCosto": "",
    "miGanancia": "",
    "margen": ""
  },
  {
    "concepto": "Hoja",
    "precioVenta": "Celda",
    "miCosto": "Fórmula",
    "miGanancia": "Estado",
    "margen": ""
  },
  {
    "concepto": "Mi Utilidad",
    "precioVenta": "B16 (SUBTOTAL SERVICIOS)",
    "miCosto": "72373.324(SUM(B6:B15))",
    "miGanancia": "OK",
    "margen": ""
  },
  {
    "concepto": "Mi Utilidad",
    "precioVenta": "D20 (TOTAL QUE ME QUEDA)",
    "miCosto": "41806.766(D16+D18)",
    "miGanancia": "OK",
    "margen": ""
  },
  {
    "concepto": "Herramientas",
    "precioVenta": "E54 (SUBTOTAL HERRAMIENTAS)",
    "miCosto": "13487.86(SUM(E5:E52))",
    "miGanancia": "OK",
    "margen": ""
  },
  {
    "concepto": "Nómina Consolidada",
    "precioVenta": "G13 (TOTALES nómina directa)",
    "miCosto": "596256(SUM(G4:G12))",
    "miGanancia": "OK",
    "margen": ""
  },
  {
    "concepto": "Nómina Consolidada",
    "precioVenta": "B28 (TOTAL IMSS)",
    "miCosto": "75609.78(SUM(B19:B27))",
    "miGanancia": "OK",
    "margen": ""
  },
  {
    "concepto": "EPP Carrier",
    "precioVenta": "D13 (TOTAL EPP)",
    "miCosto": "4029.83(SUM(D4:D12))",
    "miGanancia": "OK",
    "margen": ""
  },
  {
    "concepto": "Presupuesto Carrier",
    "precioVenta": "C25 (TOTAL)",
    "miCosto": "1049516.96(SUM(C5:C24))",
    "miGanancia": "OK",
    "margen": ""
  },
  {
    "concepto": "Presupuesto Carrier E2",
    "precioVenta": "C22 (TOTAL)",
    "miCosto": "498328.83(SUM(C5:C21))",
    "miGanancia": "OK",
    "margen": ""
  }
];

// ──────────────────────────────────────────────────────────────
// 6. HERRAMIENTAS (36 items)
// ──────────────────────────────────────────────────────────────
const HERRAMIENTAS = [
  {
    "uso": "USO/CATEGORÍA",
    "descripcion": "DESCRIPCIÓN",
    "cantidad": 1,
    "precioUnitario": null,
    "costoTotal": null
  },
  {
    "uso": "Corte",
    "descripcion": "Arco segueta",
    "cantidad": 1,
    "precioUnitario": 318.96,
    "costoTotal": 318.96
  },
  {
    "uso": "Llaves",
    "descripcion": "Llave Stillson",
    "cantidad": 1,
    "precioUnitario": 412.06,
    "costoTotal": 412.06
  },
  {
    "uso": "Llaves",
    "descripcion": "Llave ajust 10\"",
    "cantidad": 1,
    "precioUnitario": 370.68,
    "costoTotal": 370.68
  },
  {
    "uso": "Llaves",
    "descripcion": "Llave ajust 12\"",
    "cantidad": 1,
    "precioUnitario": 491.38,
    "costoTotal": 491.38
  },
  {
    "uso": "Golpe",
    "descripcion": "Martillo bola",
    "cantidad": 1,
    "precioUnitario": 318.96,
    "costoTotal": 318.96
  },
  {
    "uso": "Golpe",
    "descripcion": "Marro",
    "cantidad": 1,
    "precioUnitario": 325.86,
    "costoTotal": 325.86
  },
  {
    "uso": "Pinzas",
    "descripcion": "Pinza presión",
    "cantidad": 1,
    "precioUnitario": 291.38,
    "costoTotal": 291.38
  },
  {
    "uso": "Pinzas",
    "descripcion": "Pinza chofer",
    "cantidad": 1,
    "precioUnitario": 184.48,
    "costoTotal": 184.48
  },
  {
    "uso": "Pinzas",
    "descripcion": "Pinza bicolor",
    "cantidad": 1,
    "precioUnitario": 308.62,
    "costoTotal": 308.62
  },
  {
    "uso": "Desarmadores",
    "descripcion": "Desarmador Phillips",
    "cantidad": 1,
    "precioUnitario": 98.28,
    "costoTotal": 98.28
  },
  {
    "uso": "Desarmadores",
    "descripcion": "Desarmador 3/16x4",
    "cantidad": 1,
    "precioUnitario": 106.9,
    "costoTotal": 106.9
  },
  {
    "uso": "Desarmadores",
    "descripcion": "Desarmador 5/16x6",
    "cantidad": 1,
    "precioUnitario": 177.58,
    "costoTotal": 177.58
  },
  {
    "uso": "Desarmadores",
    "descripcion": "Desarmador 3/8x8",
    "cantidad": 1,
    "precioUnitario": 203.44,
    "costoTotal": 203.44
  },
  {
    "uso": "Llaves combinadas",
    "descripcion": "Llave combinada 6mm",
    "cantidad": 1,
    "precioUnitario": 112.06,
    "costoTotal": 112.06
  },
  {
    "uso": "Llaves combinadas",
    "descripcion": "Llave combinada 7mm",
    "cantidad": 1,
    "precioUnitario": 112.06,
    "costoTotal": 112.06
  },
  {
    "uso": "Llaves combinadas",
    "descripcion": "Llave combinada 8mm",
    "cantidad": 1,
    "precioUnitario": 112.06,
    "costoTotal": 112.06
  },
  {
    "uso": "Llaves combinadas",
    "descripcion": "Llave combinada 10mm",
    "cantidad": 1,
    "precioUnitario": 118.96,
    "costoTotal": 118.96
  },
  {
    "uso": "Llaves combinadas",
    "descripcion": "Llave combinada 12mm",
    "cantidad": 1,
    "precioUnitario": 146.56,
    "costoTotal": 146.56
  },
  {
    "uso": "Llaves combinadas",
    "descripcion": "Llave combinada 13mm",
    "cantidad": 1,
    "precioUnitario": 160.34,
    "costoTotal": 160.34
  },
  {
    "uso": "Llaves combinadas",
    "descripcion": "Llave combinada 14mm",
    "cantidad": 1,
    "precioUnitario": 168.96,
    "costoTotal": 168.96
  },
  {
    "uso": "Llaves combinadas",
    "descripcion": "Llave combinada 15mm",
    "cantidad": 1,
    "precioUnitario": 206.9,
    "costoTotal": 206.9
  },
  {
    "uso": "Llaves combinadas",
    "descripcion": "Llave combinada 17mm",
    "cantidad": 1,
    "precioUnitario": 232.76,
    "costoTotal": 232.76
  },
  {
    "uso": "Llaves combinadas",
    "descripcion": "Llave combinada 19mm",
    "cantidad": 1,
    "precioUnitario": 256.9,
    "costoTotal": 256.9
  },
  {
    "uso": "Medición eléctrica",
    "descripcion": "Multímetro gancho",
    "cantidad": 1,
    "precioUnitario": 1456.9,
    "costoTotal": 1456.9
  },
  {
    "uso": "Eléctrica",
    "descripcion": "Pelacables",
    "cantidad": 1,
    "precioUnitario": 532.76,
    "costoTotal": 532.76
  },
  {
    "uso": "Eléctrica",
    "descripcion": "Crimpado",
    "cantidad": 1,
    "precioUnitario": 618.96,
    "costoTotal": 618.96
  },
  {
    "uso": "Fijación",
    "descripcion": "Remachadora",
    "cantidad": 1,
    "precioUnitario": 284.48,
    "costoTotal": 284.48
  },
  {
    "uso": "Elevación",
    "descripcion": "Eslinga",
    "cantidad": 1,
    "precioUnitario": 550.0,
    "costoTotal": 550.0
  },
  {
    "uso": "Corte eléctrico",
    "descripcion": "Sierra caladora",
    "cantidad": 1,
    "precioUnitario": 1982.76,
    "costoTotal": 1982.76
  },
  {
    "uso": "Medición",
    "descripcion": "Nivel",
    "cantidad": 1,
    "precioUnitario": 394.82,
    "costoTotal": 394.82
  },
  {
    "uso": "Medición",
    "descripcion": "Escuadra",
    "cantidad": 1,
    "precioUnitario": 429.32,
    "costoTotal": 429.32
  },
  {
    "uso": "Elevación",
    "descripcion": "Polipasto",
    "cantidad": 1,
    "precioUnitario": null,
    "costoTotal": null
  },
  {
    "uso": "Apriete",
    "descripcion": "Torquímetro",
    "cantidad": 1,
    "precioUnitario": null,
    "costoTotal": null
  },
  {
    "uso": "Neumática",
    "descripcion": "Llave neumática",
    "cantidad": 1,
    "precioUnitario": null,
    "costoTotal": null
  },
  {
    "uso": "Perforación",
    "descripcion": "Taladro inalámbrico",
    "cantidad": 1,
    "precioUnitario": null,
    "costoTotal": null
  }
];

// ──────────────────────────────────────────────────────────────
// 7. DC3 CAPACITACIÓN (17 registros)
// ──────────────────────────────────────────────────────────────
const DC3_CAPACITACION = [
  {
    "puesto": "PUESTO",
    "cantidadDC3": "CANTIDAD DC3"
  },
  {
    "puesto": "Supervisor de Obra",
    "cantidadDC3": 8
  },
  {
    "puesto": "Supervisor de Seguridad",
    "cantidadDC3": 5
  },
  {
    "puesto": "Armadores",
    "cantidadDC3": 5
  },
  {
    "puesto": "Soldadores",
    "cantidadDC3": 6
  },
  {
    "puesto": "Ayudantes Generales",
    "cantidadDC3": 4
  },
  {
    "puesto": "Almacenistas",
    "cantidadDC3": 4
  },
  {
    "puesto": "TOTAL",
    "cantidadDC3": 32
  },
  {
    "puesto": "CURSO",
    "cantidadDC3": "Supervisor de O"
  },
  {
    "puesto": "Trabajos en Alturas",
    "cantidadDC3": "X"
  },
  {
    "puesto": "Uso de Herramientas Eléctricas",
    "cantidadDC3": "X"
  },
  {
    "puesto": "Espacios Confinados",
    "cantidadDC3": "X"
  },
  {
    "puesto": "Manejo de Cargas",
    "cantidadDC3": "X"
  },
  {
    "puesto": "Primeros Auxilios",
    "cantidadDC3": "X"
  },
  {
    "puesto": "Prevención de Riesgos",
    "cantidadDC3": "X"
  },
  {
    "puesto": "Armado de Estructuras",
    "cantidadDC3": "X"
  },
  {
    "puesto": "EPP y Seguridad Personal",
    "cantidadDC3": "X"
  }
];

// ──────────────────────────────────────────────────────────────
// 8. SALUD (3 items)
// ──────────────────────────────────────────────────────────────
const SALUD = [
  {
    "concepto": "Antidoping",
    "cantidad": 14,
    "costoUnitario": 350.0,
    "total": 4900.0
  },
  {
    "concepto": "Exámenes Médicos (Costo)",
    "cantidad": 14,
    "costoUnitario": 800.0,
    "total": 11200.0
  },
  {
    "concepto": "Exámenes Médicos (Venta)",
    "cantidad": 6,
    "costoUnitario": 1000.0,
    "total": 6000.0
  }
];

// ──────────────────────────────────────────────────────────────
// 9. EPP SEGURIDAD (6 items)
// ──────────────────────────────────────────────────────────────
const EPP_SEGURIDAD = [
  {
    "concepto": "Subtotal EPP",
    "valor": 9000.0
  },
  {
    "concepto": "IVA 16%",
    "valor": 1440.0
  },
  {
    "concepto": "TOTAL VENTA",
    "valor": 10440.0
  },
  {
    "concepto": "Subtotal costo proveedor",
    "valor": 9000.0
  },
  {
    "concepto": "IVA 16%",
    "valor": 1440.0
  },
  {
    "concepto": "TOTAL COSTO CON IVA",
    "valor": 10440.0
  }
];

// ──────────────────────────────────────────────────────────────
// 10. RENTA DE EQUIPOS — detallada con cálculos (70 items)
// ──────────────────────────────────────────────────────────────
const RENTA_EQUIPOS_DETALLE = [
  {
    "equipo": "bellavista",
    "capacidad": "",
    "moneda": "",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": null,
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "Montacargas",
    "capacidad": "2500 kg",
    "moneda": "USD",
    "costoDia": 155.0,
    "costoSemana": 467.0,
    "costoMes": 1414.0,
    "costoFlete": "Incluido",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "Montacargas",
    "capacidad": "2750 kg",
    "moneda": "USD",
    "costoDia": 168.0,
    "costoSemana": 507.0,
    "costoMes": 1534.0,
    "costoFlete": "Incluido",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "Montacargas",
    "capacidad": "3000 kg",
    "moneda": "USD",
    "costoDia": 214.0,
    "costoSemana": 648.0,
    "costoMes": 1962.0,
    "costoFlete": "Incluido",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "Montacargas",
    "capacidad": "3500 kg",
    "moneda": "USD",
    "costoDia": 270.0,
    "costoSemana": 815.0,
    "costoMes": 2469.0,
    "costoFlete": "Incluido",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "Montacargas",
    "capacidad": "4500 kg",
    "moneda": "USD",
    "costoDia": 367.0,
    "costoSemana": 1110.0,
    "costoMes": 3363.0,
    "costoFlete": "10000",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": 10000.0,
    "iva": 1600.0,
    "admin15": 1500.0,
    "total": 13100.0
  },
  {
    "equipo": "Montacargas",
    "capacidad": "7000 kg",
    "moneda": "USD",
    "costoDia": 533.0,
    "costoSemana": 1614.0,
    "costoMes": 4888.0,
    "costoFlete": "10000",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": 10000.0,
    "iva": 1600.0,
    "admin15": 1500.0,
    "total": 13100.0
  },
  {
    "equipo": "Montacargas",
    "capacidad": "16000 kg",
    "moneda": "USD",
    "costoDia": 883.0,
    "costoSemana": 2673.0,
    "costoMes": 8100.0,
    "costoFlete": "10000",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": 10000.0,
    "iva": 1600.0,
    "admin15": 1500.0,
    "total": 13100.0
  },
  {
    "equipo": "rigging industri",
    "capacidad": "",
    "moneda": "",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": null,
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "Versa/Veralift",
    "capacidad": "40-60 ton",
    "moneda": "MXN",
    "costoDia": 28000.0,
    "costoSemana": 150000.0,
    "costoMes": 580000.0,
    "costoFlete": "18000",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": 18000.0,
    "iva": 2880.0,
    "admin15": 2700.0,
    "total": 23580.0
  },
  {
    "equipo": "iron rentals",
    "capacidad": "",
    "moneda": "",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": null,
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "Manlift",
    "capacidad": "45 ft",
    "moneda": "MXN",
    "costoDia": 2700.0,
    "costoSemana": 18900.0,
    "costoMes": 30000.0,
    "costoFlete": "2500",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": 2500.0,
    "iva": 400.0,
    "admin15": 375.0,
    "total": 3275.0
  },
  {
    "equipo": "Manlift",
    "capacidad": "60 ft",
    "moneda": "MXN",
    "costoDia": 3000.0,
    "costoSemana": 21000.0,
    "costoMes": 37500.0,
    "costoFlete": "2500",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": 2500.0,
    "iva": 400.0,
    "admin15": 375.0,
    "total": 3275.0
  },
  {
    "equipo": "TRANSPORTE",
    "capacidad": "",
    "moneda": "",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": null,
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "Plana",
    "capacidad": "42-48 ft",
    "moneda": "MXN",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": "4250",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": 4250.0,
    "iva": 680.0,
    "admin15": 637.5,
    "total": 5567.5
  },
  {
    "equipo": "Plana",
    "capacidad": ">30 ton",
    "moneda": "MXN",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": "5000",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": 5000.0,
    "iva": 800.0,
    "admin15": 750.0,
    "total": 6550.0
  },
  {
    "equipo": "Cama baja",
    "capacidad": "40-60 ton",
    "moneda": "MXN",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": "Cotización",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "Low boy",
    "capacidad": "40-60 ton",
    "moneda": "MXN",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": "Cotización",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "TOTAL RENTA DE EQUIPOS",
    "capacidad": "",
    "moneda": "",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": null,
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": 62250.0,
    "iva": 9960.0,
    "admin15": 9337.5,
    "total": 81547.5
  },
  {
    "equipo": "RENTA DE EQUIPO MÓVIL",
    "capacidad": "",
    "moneda": "",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": null,
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "Equipo",
    "capacidad": "Especificación",
    "moneda": "Periodo",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": "Unidades",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": 20358.0,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "Grúa Hidráulica",
    "capacidad": "40 toneladas",
    "moneda": "Día: 8 hrs",
    "costoDia": 17600.0,
    "costoSemana": 12500.0,
    "costoMes": 1.0,
    "costoFlete": "2",
    "dias": 30100.0,
    "semanas": 60200.0,
    "meses": 69832.0,
    "subtotal": 50460.0,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "Montacargas VERSA LIFT",
    "capacidad": "40/60 ton",
    "moneda": "Día",
    "costoDia": 28000.0,
    "costoSemana": 18000.0,
    "costoMes": 5.0,
    "costoFlete": "1",
    "dias": 28000.0,
    "semanas": 158000.0,
    "meses": 183280.0,
    "subtotal": 189080.0,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "Montacargas",
    "capacidad": "10,000 lbs",
    "moneda": "Mes",
    "costoDia": 39100.0,
    "costoSemana": 7500.0,
    "costoMes": 1.0,
    "costoFlete": "3",
    "dias": 46600.0,
    "semanas": 139800.0,
    "meses": 162168.0,
    "subtotal": 20000.0,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "Plataforma articulada",
    "capacidad": "40 pies",
    "moneda": "Mes: 250 hrs",
    "costoDia": 20000.0,
    "costoSemana": 3150.0,
    "costoMes": 1.0,
    "costoFlete": "6",
    "dias": 23150.0,
    "semanas": 138900.0,
    "meses": 161124.0,
    "subtotal": 55680.0,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "■ Cotización vigente (Enero)",
    "capacidad": "",
    "moneda": "",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": null,
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "OTRAS OPCIONES - Cotizaciones 16 de Enero",
    "capacidad": "",
    "moneda": "",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": null,
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "RIGGIN INDUSTRIE",
    "capacidad": "",
    "moneda": "",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": null,
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "Equipo",
    "capacidad": "Especificación",
    "moneda": "Periodo",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": "Unidades",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "Montacargas VERSA LIFT",
    "capacidad": "40/60 ton",
    "moneda": "Día",
    "costoDia": 150000.0,
    "costoSemana": 20000.0,
    "costoMes": 1.0,
    "costoFlete": "1",
    "dias": 170000.0,
    "semanas": 170000.0,
    "meses": 197200.0,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "Plataforma articulada",
    "capacidad": "40 pies",
    "moneda": "Mes",
    "costoDia": 34000.0,
    "costoSemana": 6000.0,
    "costoMes": 1.0,
    "costoFlete": "6",
    "dias": 40000.0,
    "semanas": 240000.0,
    "meses": 278400.0,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "MARLEY RENTALS",
    "capacidad": "",
    "moneda": "",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": null,
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "Equipo",
    "capacidad": "Especificación",
    "moneda": "Periodo",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": "Unidades",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "Montacargas",
    "capacidad": "10,000 lbs",
    "moneda": "Mes",
    "costoDia": 39100.0,
    "costoSemana": 7500.0,
    "costoMes": 1.0,
    "costoFlete": "3",
    "dias": 46600.0,
    "semanas": 139800.0,
    "meses": 162168.0,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "Plataforma articulada",
    "capacidad": "45 pies",
    "moneda": "Mes",
    "costoDia": 35000.0,
    "costoSemana": 4200.0,
    "costoMes": 1.0,
    "costoFlete": "6",
    "dias": 39200.0,
    "semanas": 235200.0,
    "meses": 272832.0,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "Carpeta",
    "capacidad": "Folio",
    "moneda": "Fecha",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": "Precio",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "cotx+",
    "capacidad": "BMR Folio 36",
    "moneda": "2025-08-11 00:00:00",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": "2469",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "cotx+",
    "capacidad": "BMR Folio 37",
    "moneda": "2025-08-11 00:00:00",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": "214",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "cotx+",
    "capacidad": "BMR Folio 38",
    "moneda": "2025-08-11 00:00:00",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": "648",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "cotx+",
    "capacidad": "BMR Folio 39",
    "moneda": "2025-08-11 00:00:00",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": "1962",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "cotx+",
    "capacidad": "Rigging-001",
    "moneda": "",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": null,
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "cotx+",
    "capacidad": "C-PART015 (7T DIA)",
    "moneda": "2024-04-04 00:00:00",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": "4500",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "cotx+",
    "capacidad": "C-PART015 (7T SEM)",
    "moneda": "2024-04-04 00:00:00",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": "28000",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "cotx+",
    "capacidad": "C-PART015 (9T DIA)",
    "moneda": "2024-04-04 00:00:00",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": "7000",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "cotx+",
    "capacidad": "C-PART015 (9T SEM)",
    "moneda": "2024-04-04 00:00:00",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": "45500",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "cotx+",
    "capacidad": "COT J 2025",
    "moneda": "2025-01-09 00:00:00",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": "65000",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "cotx+",
    "capacidad": "COT 2024",
    "moneda": "2024-02-04 00:00:00",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": "17000",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "cotx+",
    "capacidad": "BW-2026",
    "moneda": "26/01/2026",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": "40000",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "cotx+",
    "capacidad": "AGM_COT2024-00129",
    "moneda": "23/07/2024",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": "25000",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "cotx+",
    "capacidad": "COT 754",
    "moneda": "2025-12-12 00:00:00",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": "234000",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "cotx+",
    "capacidad": "QTO020424-1",
    "moneda": "2024-02-04 00:00:00",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": "4000",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "cotx+",
    "capacidad": "QTO020424-2",
    "moneda": "2024-02-04 00:00:00",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": "2700",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "cotx+",
    "capacidad": "MEI-30042021",
    "moneda": "30/04/2021",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": "3300",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "cotx+",
    "capacidad": "GYMBSA-043",
    "moneda": "30/04/2021",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": "9600",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "cotx+",
    "capacidad": "15939",
    "moneda": "2025-01-09 00:00:00",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": "109800",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "cotx+",
    "capacidad": "RSM #101118",
    "moneda": "26/02/2026",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": "14250",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "cotx+",
    "capacidad": "Novasi 260208",
    "moneda": "2026-07-02 00:00:00",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": "234000",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "cotx+",
    "capacidad": "COT 1911",
    "moneda": "16/07/2025",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": "37700",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "cotx+",
    "capacidad": "GMX 192391",
    "moneda": "19/09/2025",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": "1500.2",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "cotx+",
    "capacidad": "GMX 204698",
    "moneda": "2026-06-01 00:00:00",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": "9668.69",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "Raíz",
    "capacidad": "Arrend. 3T",
    "moneda": "",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": "618226.7",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "Raíz",
    "capacidad": "Arrend. 5T",
    "moneda": "",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": "1231589.63",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "Raíz",
    "capacidad": "Arrend. 7T",
    "moneda": "",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": "1385940.13",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "Raíz",
    "capacidad": "Renta Rigging",
    "moneda": "",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": "25000",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "Raíz",
    "capacidad": "MI24-P051",
    "moneda": "2024-12-02 00:00:00",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": null,
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "Raíz",
    "capacidad": "Flexo A774",
    "moneda": "28/08/2025",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": null,
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "cotx+",
    "capacidad": "Grúas García",
    "moneda": "",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": "80306",
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "cotx+",
    "capacidad": "INEQSA",
    "moneda": "",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": null,
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "Raíz",
    "capacidad": "Merklift 1359",
    "moneda": "17/12/2025",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": null,
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  },
  {
    "equipo": "Raíz",
    "capacidad": "Merklift 1360",
    "moneda": "17/12/2025",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "costoFlete": null,
    "dias": null,
    "semanas": null,
    "meses": null,
    "subtotal": null,
    "iva": null,
    "admin15": null,
    "total": null
  }
];

// ──────────────────────────────────────────────────────────────
// 11. ADMINISTRACIÓN DEL PROYECTO
// ──────────────────────────────────────────────────────────────
const ADMIN_PROYECTO = {
  "controlSemanal": [
    {
      "concepto": "Nómina",
      "presupuestoSemanal": 33779.5,
      "limiteMaximo": 35000.0,
      "accion": "Revisar horas extra"
    },
    {
      "concepto": "Herramientas",
      "presupuestoSemanal": 1666.6666666666667,
      "limiteMaximo": 2000.0,
      "accion": "Solo compras autorizadas"
    },
    {
      "concepto": "Materiales consumibles",
      "presupuestoSemanal": 500.0,
      "limiteMaximo": 750.0,
      "accion": "Inventario diario"
    },
    {
      "concepto": "Gasolina/Transporte",
      "presupuestoSemanal": 1000.0,
      "limiteMaximo": 1500.0,
      "accion": "Bitácora de viajes"
    },
    {
      "concepto": "Imprevistos",
      "presupuestoSemanal": 500.0,
      "limiteMaximo": 1000.0,
      "accion": "Aprobación gerencia"
    }
  ],
  "alertas": [],
  "otros": []
};

// ──────────────────────────────────────────────────────────────
// 12. RENTABILIDAD DEL PROYECTO (34 items)
// ──────────────────────────────────────────────────────────────
const RENTABILIDAD_PROYECTO = [
  {
    "concepto": "CONCEPTO",
    "valor": "VALOR",
    "porcentaje": null
  },
  {
    "concepto": "Orden de Compra Total",
    "valor": 2164441.0,
    "porcentaje": null
  },
  {
    "concepto": "Utilidad Objetivo",
    "valor": 355600.4,
    "porcentaje": 0.273
  },
  {
    "concepto": "Ganancia Personal Objetivo",
    "valor": 37699.96,
    "porcentaje": 0.028961962224957095
  },
  {
    "concepto": "Margen Mínimo Aceptable",
    "valor": "-",
    "porcentaje": 0.2
  },
  {
    "concepto": "ÁREA",
    "valor": "ESTRATEGIA",
    "porcentaje": null
  },
  {
    "concepto": "Nómina",
    "valor": "Control de horas extra y rendimiento",
    "porcentaje": 5000.0
  },
  {
    "concepto": "Nómina",
    "valor": "Optimización de cuadrillas",
    "porcentaje": 3000.0
  },
  {
    "concepto": "Herramientas",
    "valor": "Negociación con proveedores (-10%)",
    "porcentaje": 4000.0
  },
  {
    "concepto": "Herramientas",
    "valor": "Mantenimiento preventivo",
    "porcentaje": 2000.0
  },
  {
    "concepto": "Materiales",
    "valor": "Evitar desperdicios y mermas",
    "porcentaje": 3500.0
  },
  {
    "concepto": "Materiales",
    "valor": "Compras por volumen",
    "porcentaje": 2500.0
  },
  {
    "concepto": "Equipos",
    "valor": "Optimizar tiempos de renta",
    "porcentaje": 4000.0
  },
  {
    "concepto": "Equipos",
    "valor": "Mantener equipo propio",
    "porcentaje": 1500.0
  },
  {
    "concepto": "Administración",
    "valor": "Facturación oportuna (evitar intereses)",
    "porcentaje": 2000.0
  },
  {
    "concepto": "Administración",
    "valor": "Control estricto de gastos menores",
    "porcentaje": 1000.0
  },
  {
    "concepto": "RIESGO",
    "valor": "PROBABILIDAD",
    "porcentaje": null
  },
  {
    "concepto": "Retrasos en cronograma",
    "valor": "Media",
    "porcentaje": 50000.0
  },
  {
    "concepto": "Accidentes laborales",
    "valor": "Baja",
    "porcentaje": 100000.0
  },
  {
    "concepto": "Incremento de precios",
    "valor": "Media",
    "porcentaje": 30000.0
  },
  {
    "concepto": "Falta de materiales",
    "valor": "Baja",
    "porcentaje": 20000.0
  },
  {
    "concepto": "Mala calidad de trabajo",
    "valor": "Media",
    "porcentaje": 40000.0
  },
  {
    "concepto": "Cambios de alcance",
    "valor": "Alta",
    "porcentaje": 80000.0
  },
  {
    "concepto": "Problemas climáticos",
    "valor": "Media",
    "porcentaje": 15000.0
  },
  {
    "concepto": "Falta de liquidez del cliente",
    "valor": "Baja",
    "porcentaje": 150000.0
  },
  {
    "concepto": "INDICADOR",
    "valor": "META",
    "porcentaje": null
  },
  {
    "concepto": "Costo Real vs Presupuestado",
    "valor": "≤100%",
    "porcentaje": null
  },
  {
    "concepto": "Avance Físico vs Financiero",
    "valor": "≥100%",
    "porcentaje": null
  },
  {
    "concepto": "Productividad de Personal",
    "valor": "≥90%",
    "porcentaje": null
  },
  {
    "concepto": "Rendimiento de Herramientas",
    "valor": "≤90%",
    "porcentaje": null
  },
  {
    "concepto": "Índice de Calidad",
    "valor": "≥95%",
    "porcentaje": null
  },
  {
    "concepto": "Margen Operativo",
    "valor": "≥20%",
    "porcentaje": null
  },
  {
    "concepto": "Días de Cobro Pendiente",
    "valor": "≤30 días",
    "porcentaje": null
  },
  {
    "concepto": "Tasa de Desperdicio",
    "valor": "≤5%",
    "porcentaje": null
  }
];

// ──────────────────────────────────────────────────────────────
// 13. PROYECTO CARRIER — ESTADO DE RESULTADOS (87 filas)
// ──────────────────────────────────────────────────────────────
const CARRIER_ER = [
  [
    "ESTADO DE RESULTADOS - PROYECTO CARRIER",
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Desconexión de Servicio Eléctrico - Análisis Financiero Completo",
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Fecha de Análisis: Diciembre 2024",
    null,
    null,
    null,
    null,
    null
  ],
  [
    "1. RESUMEN EJECUTIVO",
    null,
    null,
    null,
    null,
    null
  ],
  [
    "CONCEPTO",
    "MONTO MXN",
    "% SOBRE VENTA",
    null,
    null,
    null
  ],
  [
    "Ingreso Total Final",
    "2164441",
    "1",
    null,
    null,
    null
  ],
  [
    "(-) Costo Total Real Depurado",
    "1269164.73",
    "0.5863706749225319",
    null,
    null,
    null
  ],
  [
    "#NAME?",
    "895276.27",
    "0.413629325077468",
    null,
    null,
    null
  ],
  [
    "MARGEN REAL SOBRE VENTA",
    "0.413629325077468",
    null,
    null,
    null,
    null
  ],
  [
    "2. DESGLOSE DE COSTOS REALES",
    null,
    null,
    null,
    null,
    null
  ],
  [
    "2.1 MANO DE OBRA",
    null,
    null,
    null,
    null,
    null
  ],
  [
    "CONCEPTO",
    "MONTO",
    "DETALLE",
    null,
    null,
    null
  ],
  [
    "Pago real a personal (cash)",
    "595800",
    "Salario directo semanal",
    null,
    null,
    null
  ],
  [
    "Cargas sociales y provisiones",
    "338652",
    "IMSS/INFONAVIT/prestaciones/nómina/REPSE",
    null,
    null,
    null
  ],
  [
    "SUBTOTAL MANO DE OBRA",
    "934452",
    null,
    null,
    null,
    null
  ],
  [
    "2.2 HOSPEDAJE",
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Hospedaje real (Airbnb 8 semanas)",
    "122406.78",
    "Costo optimizado vs cotizado",
    null,
    null,
    null
  ],
  [
    "2.3 EQUIPOS (APROXIMADO)",
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Equipos (grúas, plataformas, montacargas)",
    "287000",
    "Pendiente desglose exacto",
    null,
    null,
    null
  ],
  [
    "COSTO TOTAL REAL",
    "1343858.78",
    null,
    null,
    null,
    null
  ],
  [
    "Diferencia vs costo depurado",
    "-74694.05000000005",
    "Otros costos no desglosados",
    null,
    null,
    null
  ],
  [
    "3. DÓNDE GANAS - MÁRGENES IDENTIFICADOS",
    null,
    null,
    null,
    null,
    null
  ],
  [
    "RUBRO",
    "COBRADO",
    "COSTO REAL",
    "UTILIDAD",
    "MARGEN %",
    null
  ],
  [
    "A) Grúa",
    "130000",
    "80000",
    "50000",
    "0.38461538461538464",
    null
  ],
  [
    "B) Hospedaje",
    "316800",
    "122406.78",
    "194393.22",
    "0.6136149621212121",
    null
  ],
  [
    "C) Plataformas",
    "—",
    "—",
    "15800",
    "—",
    null
  ],
  [
    "D) Limpieza + orden + segregación",
    "—",
    "—",
    "10000",
    "—",
    null
  ],
  [
    "E) Persona adicional (8 semanas)",
    "—",
    "—",
    "12500",
    "—",
    null
  ],
  [
    "SUBTOTAL UTILIDAD IDENTIFICADA",
    null,
    null,
    "282693.22",
    null,
    null
  ],
  [
    "Utilidad Total del Proyecto",
    null,
    null,
    "895276.27",
    null,
    null
  ],
  [
    "(-) Utilidad ya identificada",
    null,
    null,
    "-282693.22",
    null,
    null
  ],
  [
    null,
    null,
    null,
    "612583.05",
    null,
    null
  ],
  [
    "Nota: Los $612,583 restantes provienen del margen en mano de obra",
    null,
    null,
    null,
    null,
    null
  ],
  [
    "(diferencia entre lo cobrado por MO y tu MO real con cargas),",
    null,
    null,
    null,
    null,
    null
  ],
  [
    "más administración, gestión, RC, consumibles y ajustes generales.",
    null,
    null,
    null,
    null,
    null
  ],
  [
    "4. DETALLE DE MANO DE OBRA - MATRIZ OPERATIVA",
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Costo semanal por persona (con cargas):",
    "6489.25",
    null,
    "Base: $5,000 cash + $1,489.25 cargas",
    null,
    null
  ],
  [
    "ETAPA",
    "PERSONAS",
    "SEMANAS",
    "COSTO SEMANAL TOTAL",
    "COSTO TOTAL ETAPA",
    null
  ],
  [
    "Etapa 1 - Desconexión principal",
    "14",
    "4",
    "90849.5",
    "363398",
    null
  ],
  [
    "Etapa 2 - Trabajos complementarios",
    "7",
    "4",
    "45424.75",
    "181699",
    null
  ],
  [
    "TOTAL MANO DE OBRA CON CARGAS",
    null,
    "8",
    null,
    "545097",
    null
  ],
  [
    "Verificación:",
    null,
    null,
    null,
    null,
    null
  ],
  [
    "MO calculada (tabla)",
    "545097",
    null,
    null,
    null,
    null
  ],
  [
    "MO registrada (Sección 2)",
    "934452",
    null,
    null,
    null,
    null
  ],
  [
    "Diferencia (ajustar semanas/personas reales)",
    "-389355",
    null,
    "← Confirmar semanas efectivas pagadas",
    null,
    null
  ],
  [
    "5. DÓNDE PUEDES PERDER MARGEN - RIESGOS",
    null,
    null,
    null,
    null,
    null
  ],
  [
    "ÁREA DE RIESGO",
    "DESCRIPCIÓN",
    "IMPACTO POTENCIAL",
    "MITIGACIÓN",
    null,
    null
  ],
  [
    "Equipos sin utilidad",
    "VERSA, montacargas o plataformas a costo directo",
    "Cualquier día extra o falla = pérdida directa",
    "Negociar precio cerrado",
    null,
    null
  ],
  [
    "Horas extra / tiempos muertos",
    "Horario fuera de 8:00-18:00, domingos, esperas",
    "No cobrado = absorción de costo",
    "Documentar y facturar al cliente",
    null,
    null
  ],
  [
    "Hospedaje",
    "Cancelación Airbnb, incremento precio, más habitaciones",
    "Pérdida del ahorro de $194K",
    "Reservar con anticipación",
    null,
    null
  ],
  [
    "Rotación de personal",
    "Bajas, incapacidades, faltas",
    "Costo de reemplazo + capacitación",
    "Personal de respaldo identificado",
    null,
    null
  ],
  [
    "RC y documentación",
    "Requisitos adicionales del cliente, credencialización",
    "Costo administrativo extra",
    "Presupuestar contingencia",
    null,
    null
  ],
  [
    "Retrasos por permisos",
    "Bloqueos operativos por el cliente",
    "Equipos parados = costo sin avance",
    "Cláusula de tiempos muertos",
    null,
    null
  ],
  [
    "6. FLUJO DE CAJA Y CALENDARIO DE PAGOS",
    null,
    null,
    null,
    null,
    null
  ],
  [
    "6.1 ESTRUCTURA DE PAGOS DEL CLIENTE",
    null,
    null,
    null,
    null,
    null
  ],
  [
    "CONCEPTO",
    "PORCENTAJE",
    "MONTO MXN",
    "MOMENTO",
    null,
    null
  ],
  [
    "Anticipo inicial",
    "0.3",
    "649332.2999999999",
    "Al firmar contrato",
    null,
    null
  ],
  [
    "Segundo pago",
    "0.4",
    "865776.4",
    "Al 50% de avance",
    null,
    null
  ],
  [
    "Pago final",
    "0.3",
    "649332.2999999999",
    "Al cierre del proyecto",
    null,
    null
  ],
  [
    "TOTAL PAGOS",
    "1",
    "2164441",
    null,
    null,
    null
  ],
  [
    "6.2 FLUJO DE CAJA MÍNIMO REQUERIDO",
    null,
    null,
    null,
    null,
    null
  ],
  [
    "SEMANA",
    "CONCEPTO",
    "EGRESO",
    "INGRESO",
    "SALDO ACUMULADO",
    null
  ],
  [
    null,
    "Anticipo recibido",
    null,
    "649332.2999999999",
    "649332.2999999999",
    null
  ],
  [
    "1",
    "Nómina Semana 1 + Hospedaje inicial",
    "150000",
    null,
    "499332.29999999993",
    null
  ],
  [
    "2",
    "Nómina Semana 2",
    "90000",
    null,
    "409332.29999999993",
    null
  ],
  [
    "3",
    "Nómina Semana 3",
    "90000",
    null,
    "319332.29999999993",
    null
  ],
  [
    "4",
    "Nómina Semana 4 + Segundo pago 40%",
    "90000",
    "865776.4",
    "1095108.7",
    null
  ],
  [
    "5",
    "Nómina Semana 5",
    "50000",
    null,
    "1045108.7",
    null
  ],
  [
    "6",
    "Nómina Semana 6",
    "50000",
    null,
    "995108.7",
    null
  ],
  [
    "7",
    "Nómina Semana 7",
    "50000",
    null,
    "945108.7",
    null
  ],
  [
    "8",
    "Nómina Semana 8 + Pago final 30%",
    "50000",
    "649332.2999999999",
    "1544441",
    null
  ],
  [
    "TOTALES",
    null,
    "620000",
    "2164441",
    "1544441",
    null
  ],
  [
    "FLUJO MÍNIMO REQUERIDO PARA ARRANCAR:",
    "649332.2999999999",
    null,
    "Con anticipo 30% cubre operación inicial",
    null,
    null
  ],
  [
    "7. DATOS PENDIENTES PARA ANÁLISIS COMPLETO",
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Para cerrar el presupuesto 'peso por peso' sin aproximados, proporciona:",
    null,
    null,
    null,
    null,
    null
  ],
  [
    "No.",
    "DATO REQUERIDO",
    "TU VALOR",
    "NOTAS",
    null,
    null
  ],
  [
    "1",
    "Costo real total de PLATAFORMAS (8 semanas)",
    null,
    "4 unidades Etapa 1, 2 unidades Etapa 2",
    null,
    null
  ],
  [
    "2",
    "Costo real total de MONTACARGAS (8 semanas)",
    null,
    "2 unidades Etapa 1, 1 unidad Etapa 2",
    null,
    null
  ],
  [
    "3",
    "Costo real total de VERSA (1 semana / 5 días)",
    null,
    "Passthrough o con margen",
    null,
    null
  ],
  [
    "4",
    "Costo real total de TRASLADOS DE EQUIPOS",
    null,
    "Una sola vez",
    null,
    null
  ],
  [
    "5",
    "Costo real de RC (Responsabilidad Civil)",
    null,
    "Si lo pagas tú",
    null,
    null
  ],
  [
    "6",
    "Costo real de EPP total",
    null,
    "Compra Barlem / cajas lentes/tapones",
    null,
    null
  ],
  [
    "Con estos 6 datos te entrego el Estado de Resultados CFO completo:",
    null,
    null,
    null,
    null,
    null
  ],
  [
    "✓ Ingreso por rubro  ✓ Costo directo por rubro  ✓ Margen por rubro  ✓ Utilidad total  ✓ % real",
    null,
    null,
    null,
    null,
    null
  ],
  [
    "NOTA IMPORTANTE:",
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Tu PDF de cotización muestra $2,364,441.35 + IVA, pero confirmaste cierre final en $2,164,441 MXN.",
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Este análisis usa el monto de cierre confirmado. La diferencia de $200,000 es descuento o ajuste negociado.",
    null,
    null,
    null,
    null,
    null
  ]
];

// ──────────────────────────────────────────────────────────────
// 14. HOSPEDAJE CARRIER
// ──────────────────────────────────────────────────────────────
const HOSPEDAJE_CARRIER = {
  "costo_por_noche": 850.0,
  "noches_por_semana": 6.0,
  "número_de_personas": 14.0,
  "número_de_semanas": 4.0,
  "$850_×_6_noches_×_14_personas_×_4_semanas": 285600.0,
  "total_hospedaje_etapa_1": 285600.0
};

// ──────────────────────────────────────────────────────────────
// 15. ANÁLISIS GESTIÓN (21 filas)
// ──────────────────────────────────────────────────────────────
const ANALISIS_GESTION = [
  [
    "Hoja",
    "Celda",
    "Descripción",
    "Valor"
  ],
  [
    "Mi Utilidad",
    "F18",
    "Porcentaje de gestión",
    "0.01"
  ],
  [
    "0.01",
    "Mi Utilidad",
    "B18",
    "25000"
  ],
  [
    "Precio venta gestión",
    "25000",
    "Mi Utilidad",
    "Gestión del proyecto (% sobre OC):"
  ],
  [
    "2. ESTRUCTURA DE COBRO AL CLIENTE",
    null,
    null,
    null
  ],
  [
    "Concepto",
    "Monto",
    "Fórmula/Referencia",
    null
  ],
  [
    "Orden de Compra Total",
    "2364441.35",
    "Presupuesto Completo!B22",
    null
  ],
  [
    "Total Gastos",
    "1427757.4",
    "Presupuesto Completo!B21",
    null
  ],
  [
    "Utilidad Libre",
    "936683.9500000002",
    "Presupuesto Completo!B24",
    null
  ],
  [
    "Cobro Gestión (de Mi Utilidad)",
    "25000",
    "Mi Utilidad!B18",
    null
  ],
  [
    "3. ANÁLISIS: ¿ESTÁ INCLUIDA LA GESTIÓN EN LA OC?",
    null,
    null,
    null
  ],
  [
    "Pregunta",
    "Respuesta",
    "Evidencia",
    null
  ],
  [
    "¿El cobro de gestión está incluido en la OC?",
    "SÍ - Cobro incluido",
    "Ver Mi Utilidad!B18",
    null
  ],
  [
    "¿La gestión forma parte del precio al cliente?",
    "Verificar si B18 está sumado en totales",
    "Revisar fórmulas de totales",
    null
  ],
  [
    "% de Gestión sobre OC",
    "0.010573322108412627",
    "Gestión / OC Total",
    null
  ],
  [
    "4. CONCLUSIONES Y RECOMENDACIONES",
    null,
    null,
    null
  ],
  [
    null,
    "• La hoja 'Mi Utilidad' muestra una línea de 'Gestión del proyecto con 1%' en la fila 18",
    null,
    null
  ],
  [
    null,
    "• El cobro de gestión tiene un valor en la columna B18 (Precio Venta)",
    null,
    null
  ],
  [
    null,
    "• La Orden de Compra total en Presupuesto Completo es $1,301,706",
    null,
    null
  ],
  [
    null,
    "• Revisar si B18 está incluido en las sumas que conforman la OC total",
    null,
    null
  ],
  [
    null,
    "• Verificar las fórmulas de totales para confirmar si la gestión se suma al precio final",
    null,
    null
  ]
];

// ──────────────────────────────────────────────────────────────
// 16. RESUMEN GESTIÓN (34 filas)
// ──────────────────────────────────────────────────────────────
const RESUMEN_GESTION = [
  [
    "1. GASTOS ENCONTRADOS EN LA SECCIÓN DE GASTOS",
    null,
    null,
    null
  ],
  [
    "Concepto",
    "Valor",
    "Ubicación",
    null
  ],
  [
    null,
    null,
    "A15:C15",
    null
  ],
  [
    "OTROS GASTOS DEL PROYECTO",
    null,
    "A16:C16",
    null
  ],
  [
    "Herramientas",
    null,
    "A17:C17",
    null
  ],
  [
    "Seguridad / EPP",
    null,
    "A18:C18",
    null
  ],
  [
    "DC3 / Documentación",
    null,
    "A19:C19",
    null
  ],
  [
    "Máquina / Generador",
    null,
    "A20:C20",
    null
  ],
  [
    "💼 Gestión del Proyecto (JG)",
    "← Tu pago por gestionar el proyecto (1% de OC)",
    "A21:C21",
    "← GESTIÓN COMO GASTO ✓"
  ],
  [
    "TOTAL GASTOS",
    null,
    "A22:C22",
    null
  ],
  [
    "Total Orden de Compra (OC)",
    null,
    "A23:C23",
    null
  ],
  [
    null,
    null,
    "A24:C24",
    null
  ],
  [
    "Total Gastos",
    null,
    "C25",
    null
  ],
  [
    "2. TOTALES CLAVE",
    null,
    null,
    null
  ],
  [
    "Total Gastos",
    null,
    "C25",
    null
  ],
  [
    "Orden de Compra",
    null,
    "C27",
    null
  ],
  [
    "Utilidad Libre",
    null,
    "C28",
    null
  ],
  [
    "3. DESGLOSE DE UTILIDAD (VERIFICACIÓN)",
    null,
    null,
    null
  ],
  [
    null,
    null,
    "A31:C31",
    null
  ],
  [
    "CONCEPTO",
    "% DE UTILIDAD TOTAL",
    "A32:C32",
    null
  ],
  [
    null,
    null,
    "A33:C33",
    null
  ],
  [
    "📊 PORCENTAJE DE GESTIÓN",
    "← Editar % (1-10%)",
    "A34:C34",
    null
  ],
  [
    "💵 Gestión del Proyecto (% sobre OC)",
    "← Ya incluido como gasto arriba",
    "A35:C35",
    null
  ],
  [
    "💵 Ganancia por Servicios (Mi Utilidad)",
    "0.12266767492123",
    "A36:C36",
    null
  ],
  [
    "🎯 TOTAL TU GANANCIA PERSONAL",
    "0.12266767492123",
    "A37:C37",
    null
  ],
  [
    null,
    null,
    "A38:C38",
    null
  ],
  [
    "🏢 UTILIDAD PARA LA EMPRESA",
    "0.87733232507877",
    "A39:C39",
    null
  ],
  [
    null,
    null,
    "A40:C40",
    null
  ],
  [
    "Utilidad Total",
    "Debe coincidir con Utilidad Total",
    "C41",
    null
  ],
  [
    "4. CONCLUSIONES Y VERIFICACIÓN",
    null,
    null,
    null
  ],
  [
    "✓ Gestión aparece en sección de gastos:",
    "SÍ",
    null,
    null
  ],
  [
    "✓ Total gastos incluye gestión:",
    "SÍ",
    null,
    null
  ],
  [
    "✓ Utilidad Libre es post-gestión:",
    "SÍ",
    null,
    null
  ],
  [
    "✓ No hay duplicación en desglose:",
    "VERIFICAR MANUALMENTE",
    null,
    null
  ]
];

// ──────────────────────────────────────────────────────────────
// 17. DISTRIBUCIÓN ANTICIPO
// ──────────────────────────────────────────────────────────────
const DISTRIBUCION_ANTICIPO = {
  "parametros": {
    "Anticipo recibido:": 1017000.0,
    "Semanas a cubrir:": 4.0
  },
  "distribucion": [
    {
      "concepto": "Nómina directa (sueldos)",
      "monto": 59000.0,
      "extras": [
        "4",
        "236000",
        "0.232055063913471",
        "Pago a empleados"
      ]
    },
    {
      "concepto": "IMSS + cargas patronales",
      "monto": 10988.925,
      "extras": [
        "4",
        "43955.7",
        "0.043220943952802356",
        "Seguro social"
      ]
    },
    {
      "concepto": "Hospedaje",
      "monto": 50000.0,
      "extras": [
        "1",
        "50000",
        "0.049164208456243856",
        "Referencia: PARÁMETROS!B64"
      ]
    },
    {
      "concepto": "Viáticos",
      "monto": 12600.0,
      "extras": [
        "4",
        "50400",
        "0.049557522123893805",
        "Alimentación personal"
      ]
    },
    {
      "concepto": "Traslados",
      "monto": 6875.0,
      "extras": [
        "4",
        "27500",
        "0.02704031465093412",
        "Transporte"
      ]
    },
    {
      "concepto": "Renta de Van",
      "monto": 20000.0,
      "extras": [
        "1",
        "20000",
        "0.01966568338249754",
        "Transporte de personal"
      ]
    },
    {
      "concepto": "DC3 / Capacitación",
      "monto": 100.0,
      "extras": [
        "30",
        "3000",
        "0.0029498525073746312",
        "Certificaciones"
      ]
    },
    {
      "concepto": "Herramientas",
      "monto": 5000.0,
      "extras": [
        "4",
        "20000",
        "0.01966568338249754",
        "Herramienta menor"
      ]
    },
    {
      "concepto": "Consumibles",
      "monto": 2250.0,
      "extras": [
        "4",
        "9000",
        "0.008849557522123894",
        "Material consumible"
      ]
    },
    {
      "concepto": "EPP / Seguridad",
      "monto": 878.75,
      "extras": [
        "4",
        "3515",
        "0.003456243854473943",
        "Equipo protección"
      ]
    },
    {
      "concepto": "Renta de Equipos (mensual)",
      "monto": 459940.0,
      "extras": [
        "1",
        "459940",
        "0.45225172074729597",
        "Costo corregido"
      ]
    }
  ]
};

// ──────────────────────────────────────────────────────────────
// 18. DISTRIBUCIÓN POR CUENTAS (26 filas)
// ──────────────────────────────────────────────────────────────
const DISTRIBUCION_CUENTAS = [
  [
    "CONFIGURACIÓN DE CUENTAS",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Cuenta 1:",
    "NÓMINA",
    "Banco:",
    "Principal",
    null,
    null,
    null
  ],
  [
    "Cuenta 2:",
    "OPERACIÓN",
    "Banco:",
    "Gastos",
    null,
    null,
    null
  ],
  [
    "Cuenta 3:",
    "MATERIALES",
    "Banco:",
    "Compras",
    null,
    null,
    null
  ],
  [
    "Cuenta 4:",
    "EQUIPOS",
    "Banco:",
    "Proveedores",
    null,
    null,
    null
  ],
  [
    "CONCEPTO",
    "MONTO",
    "BBVA",
    "AFIRME",
    "SANTANDER",
    "BBVA",
    "VERIFICACIÓN"
  ],
  [
    "Nómina directa",
    "236000",
    "236000",
    null,
    null,
    null,
    "✓"
  ],
  [
    "IMSS + cargas",
    "43955.7",
    "43955.7",
    null,
    null,
    null,
    "✓"
  ],
  [
    "Hospedaje",
    "50000",
    null,
    "50000",
    null,
    null,
    "✓"
  ],
  [
    "Viáticos",
    "50400",
    null,
    "50400",
    null,
    null,
    "✓"
  ],
  [
    "Traslados",
    "27500",
    null,
    "27500",
    null,
    null,
    "✓"
  ],
  [
    "Renta de Van",
    "20000",
    null,
    "20000",
    null,
    null,
    "✓"
  ],
  [
    "DC3 / Capacitación",
    "3000",
    null,
    null,
    "3000",
    null,
    "✓"
  ],
  [
    "Herramientas",
    "20000",
    null,
    null,
    "20000",
    null,
    "✓"
  ],
  [
    "Consumibles",
    "9000",
    null,
    null,
    "9000",
    null,
    "✓"
  ],
  [
    "EPP / Seguridad",
    "3515",
    null,
    null,
    "3515",
    null,
    "✓"
  ],
  [
    "Renta de Equipos",
    "459940",
    null,
    null,
    null,
    "459940",
    "✓"
  ],
  [
    "TOTAL POR CUENTA",
    "923310.7",
    "279955.7",
    "147900",
    "35515",
    "459940",
    null
  ],
  [
    "RESUMEN POR CUENTA",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Cuenta 1:",
    null,
    "279955.7",
    null,
    null,
    null,
    null
  ],
  [
    "Cuenta 2:",
    null,
    "147900",
    null,
    null,
    null,
    null
  ],
  [
    "Cuenta 3:",
    null,
    "35515",
    null,
    null,
    null,
    null
  ],
  [
    "Cuenta 4:",
    null,
    "459940",
    null,
    null,
    null,
    null
  ],
  [
    "TOTAL ASIGNADO:",
    null,
    "923310.7",
    null,
    null,
    null,
    null
  ],
  [
    "ANTICIPO:",
    null,
    "1017000",
    null,
    null,
    null,
    null
  ],
  [
    "DIFERENCIA:",
    null,
    "93689.30000000005",
    null,
    null,
    null,
    null
  ]
];

// ──────────────────────────────────────────────────────────────
// 19. DISTRIBUCIÓN ESTIMACIÓN 40%
// ──────────────────────────────────────────────────────────────
const DISTRIBUCION_EST40 = {
  "parametros": {
    "Estimación 40% recibida:": 1017000.0,
    "Semanas a cubrir:": 4.0
  },
  "distribucion": [
    {
      "concepto": "Nómina directa (sueldos)",
      "monto": 59000.0
    },
    {
      "concepto": "IMSS + cargas patronales",
      "monto": 10988.93
    },
    {
      "concepto": "Hospedaje",
      "monto": 50000.0
    },
    {
      "concepto": "Viáticos",
      "monto": 12600.0
    },
    {
      "concepto": "Traslados",
      "monto": 6875.0
    },
    {
      "concepto": "Renta de Van",
      "monto": 20000.0
    },
    {
      "concepto": "DC3 / Capacitación",
      "monto": 100.0
    },
    {
      "concepto": "Herramientas",
      "monto": 5000.0
    },
    {
      "concepto": "Consumibles",
      "monto": 2250.0
    },
    {
      "concepto": "EPP / Seguridad",
      "monto": 878.75
    },
    {
      "concepto": "Renta de Equipos (mensual)",
      "monto": 459940.0
    }
  ]
};

// ──────────────────────────────────────────────────────────────
// 20. GASTOS REALES ESTIMACIÓN 40% (37 filas)
// ──────────────────────────────────────────────────────────────
const GASTOS_REALES_EST40 = [
  [
    "DATOS DE CONTROL",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Estimación 40% recibida:",
    "1017000",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Presupuesto 1 mes:",
    "923310.72",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Fecha de inicio:",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "CATEGORÍA",
    "CONCEPTO/PROVEEDOR",
    "FECHA",
    "FACTURA/COMPROBANTE",
    "MONTO PRESUPUESTADO",
    "MONTO REAL GASTADO",
    "DIFERENCIA",
    "NOTAS"
  ],
  [
    "NÓMINA Y COSTO LABORAL",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Nómina directa",
    null,
    null,
    null,
    "236000",
    null,
    null,
    null
  ],
  [
    "IMSS + cargas",
    null,
    null,
    null,
    "43955.72",
    null,
    null,
    null
  ],
  [
    "Subtotal Nómina",
    null,
    null,
    null,
    "279955.72",
    null,
    "279955.72",
    null
  ],
  [
    "GASTOS OPERATIVOS",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Hospedaje",
    null,
    null,
    null,
    "50000",
    null,
    null,
    null
  ],
  [
    "Viáticos",
    null,
    null,
    null,
    "50400",
    null,
    null,
    null
  ],
  [
    "Traslados",
    null,
    null,
    null,
    "27500",
    null,
    null,
    null
  ],
  [
    "Renta de Van",
    null,
    null,
    null,
    "20000",
    null,
    null,
    null
  ],
  [
    "Subtotal Operativos",
    null,
    null,
    null,
    "147900",
    null,
    "147900",
    null
  ],
  [
    "OTROS GASTOS",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "DC3 / Capacitación",
    null,
    null,
    null,
    "3000",
    null,
    null,
    null
  ],
  [
    "Herramientas",
    null,
    null,
    null,
    "20000",
    null,
    null,
    null
  ],
  [
    "Consumibles",
    null,
    null,
    null,
    "9000",
    null,
    null,
    null
  ],
  [
    "EPP / Seguridad",
    null,
    null,
    null,
    "3515",
    null,
    null,
    null
  ],
  [
    "Subtotal Otros",
    null,
    null,
    null,
    "35515",
    null,
    "35515",
    null
  ],
  [
    "EQUIPOS Y RENTA",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Renta de Equipos (mensual)",
    null,
    null,
    null,
    "459940",
    null,
    null,
    null
  ],
  [
    "Subtotal Equipos",
    null,
    null,
    null,
    "459940",
    null,
    "459940",
    null
  ],
  [
    "TOTAL GASTOS REALES",
    null,
    null,
    null,
    "923310.72",
    null,
    "923310.72",
    null
  ],
  [
    "ANÁLISIS FINANCIERO",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Estimación 40% disponible:",
    null,
    null,
    null,
    "1017000",
    null,
    null,
    null
  ],
  [
    "(-) Presupuesto 1 mes:",
    null,
    null,
    null,
    "923310.72",
    null,
    null,
    null
  ],
  [
    "Déficit presupuestario:",
    null,
    null,
    null,
    "93689.28000000003",
    null,
    null,
    null
  ],
  [
    "(-) Gastos reales ejecutados:",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "SALDO DISPONIBLE ESTIMACIÓN:",
    null,
    null,
    null,
    null,
    "1017000",
    null,
    null
  ],
  [
    "% Utilizado de la Estimación:",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "INSTRUCCIONES DE USO",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "1. Registre cada gasto real en las filas correspondientes a cada categoría",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "2. Complete: Concepto/Proveedor, Fecha, Factura/Comprobante, Monto Real Gastado y Notas",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "3. Las columnas 'Diferencia' se calcularán automáticamente (Presupuesto - Gasto Real)",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "4. El Saldo Disponible muestra cuánto queda del 40% de estimación después de los gastos registrados",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ]
];

// ──────────────────────────────────────────────────────────────
// 21. ESTADO DE CUENTAS BANCARIAS (6 cuentas)
// ──────────────────────────────────────────────────────────────
const CUENTAS_BANCARIAS = [
  {
    "banco": "BANCO",
    "noCuenta": "No. CUENTA",
    "tipo": "TIPO",
    "saldoActual": null,
    "porcentaje": null,
    "notas": "NOTAS"
  },
  {
    "banco": "BANCO",
    "noCuenta": "CATEGORÍA ASIGNADA",
    "tipo": "% SUGERIDO",
    "saldoActual": null,
    "porcentaje": null,
    "notas": "SALDO PROYECTADO"
  },
  {
    "banco": "BBVA (CARRIER)",
    "noCuenta": "Nómina CARRIER",
    "tipo": "0.30320856666756774",
    "saldoActual": 308363.1123009164,
    "porcentaje": 1095780.0,
    "notas": "1404143.1123009163"
  },
  {
    "banco": "AFIRME (IRON CAST)",
    "noCuenta": "Gastos IRON CAST",
    "tipo": "0.16018442848795258",
    "saldoActual": 162907.56377224778,
    "porcentaje": 72268.6,
    "notas": "235176.1637722478"
  },
  {
    "banco": "SANTANDER (SEIL)",
    "noCuenta": "Gastos SEIL",
    "tipo": "0.03846484095841539",
    "saldoActual": 39118.74325470845,
    "porcentaje": 46771.0,
    "notas": "85889.74325470845"
  },
  {
    "banco": "BBVA (CARRIER)",
    "noCuenta": "Equipos CARRIER",
    "tipo": "0.4981421638860643",
    "saldoActual": 506610.58067212737,
    "porcentaje": 1095780.0,
    "notas": "1602390.5806721274"
  }
];

// ──────────────────────────────────────────────────────────────
// 22. DETALLE GASTOS REALES (41 registros)
// ──────────────────────────────────────────────────────────────
const DETALLE_GASTOS_REALES = [
  {
    "no": 1,
    "mes": "Febrero",
    "fecha": "2026-02-04 00:00:00",
    "concepto": "Hospedaje",
    "moneda": "$",
    "monto": 750.0
  },
  {
    "no": 2,
    "mes": "Febrero",
    "fecha": "2026-02-04 00:00:00",
    "concepto": "Hospedaje",
    "moneda": "$",
    "monto": 731.04
  },
  {
    "no": 3,
    "mes": "Febrero",
    "fecha": "2026-02-06 00:00:00",
    "concepto": "Hospedaje",
    "moneda": "$",
    "monto": 700.0
  },
  {
    "no": 4,
    "mes": "Febrero",
    "fecha": "25/ENE",
    "concepto": "Hospedaje",
    "moneda": "$",
    "monto": 1700.0
  },
  {
    "no": 5,
    "mes": "Febrero",
    "fecha": "26/ENE",
    "concepto": "Hospedaje",
    "moneda": "$",
    "monto": null
  },
  {
    "no": 6,
    "mes": "Febrero",
    "fecha": "26/ENE",
    "concepto": "Hospedaje",
    "moneda": "$",
    "monto": 1000.0
  },
  {
    "no": 7,
    "mes": "Febrero",
    "fecha": "27/ENE",
    "concepto": "Hospedaje",
    "moneda": "$",
    "monto": 906.0
  },
  {
    "no": 8,
    "mes": "Febrero",
    "fecha": "28/ENE",
    "concepto": "Hospedaje",
    "moneda": "$",
    "monto": 40000.0
  },
  {
    "no": 9,
    "mes": "Febrero",
    "fecha": "29/ENE",
    "concepto": "Hospedaje",
    "moneda": "$",
    "monto": 1148.0
  },
  {
    "no": 10,
    "mes": "Febrero",
    "fecha": "29/ENE",
    "concepto": "Hospedaje",
    "moneda": "$",
    "monto": 243.68
  },
  {
    "no": 11,
    "mes": "Febrero",
    "fecha": "29/ENE",
    "concepto": "Hospedaje",
    "moneda": "$",
    "monto": 243.68
  },
  {
    "no": 12,
    "mes": "Febrero",
    "fecha": "30/ENE",
    "concepto": "Hospedaje",
    "moneda": "$",
    "monto": 1901.0
  },
  {
    "no": 13,
    "mes": "Febrero",
    "fecha": "30/ENE",
    "concepto": "Hospedaje",
    "moneda": "$",
    "monto": 816.53
  },
  {
    "no": 14,
    "mes": "Febrero",
    "fecha": "25/ENE",
    "concepto": "Renta",
    "moneda": "$",
    "monto": 34800.0
  },
  {
    "no": 1,
    "mes": "24-ene",
    "fecha": null,
    "concepto": "24400",
    "moneda": "24400",
    "monto": null
  },
  {
    "no": 2,
    "mes": "31-ene",
    "fecha": "85000",
    "concepto": "22800",
    "moneda": "107800",
    "monto": null
  },
  {
    "no": 3,
    "mes": "2026-02-07 00:00:00",
    "fecha": "108315.53",
    "concepto": "21600",
    "moneda": "129915.53",
    "monto": null
  },
  {
    "no": 4,
    "mes": "2026-02-14 00:00:00",
    "fecha": "92202.73",
    "concepto": "16800",
    "moneda": "109002.73",
    "monto": null
  },
  {
    "no": 5,
    "mes": "2026-02-21 00:00:00",
    "fecha": "75167.2",
    "concepto": "16800",
    "moneda": "91967.2",
    "monto": null
  },
  {
    "no": 6,
    "mes": "2026-02-28 00:00:00",
    "fecha": "82167.2",
    "concepto": "18000",
    "moneda": "100167.2",
    "monto": null
  },
  {
    "no": 7,
    "mes": "2026-03-02 00:00:00",
    "fecha": null,
    "concepto": "18000",
    "moneda": "18000",
    "monto": null
  },
  {
    "no": 8,
    "mes": "2026-03-06 00:00:00",
    "fecha": "85000",
    "concepto": "18000",
    "moneda": "103000",
    "monto": null
  },
  {
    "no": 1,
    "mes": "",
    "fecha": "Gasolina VEN y SUBURBAN",
    "concepto": "Efectivo",
    "moneda": "$",
    "monto": 2000.0
  },
  {
    "no": 2,
    "mes": "",
    "fecha": "Gasolina cuando enmicadora",
    "concepto": "Efectivo",
    "moneda": "$",
    "monto": 1000.0
  },
  {
    "no": 3,
    "mes": "2026-02-16 00:00:00",
    "fecha": "Gasolina Emmanuel Moreno",
    "concepto": "SPEI HSBC",
    "moneda": "$",
    "monto": 2500.0
  },
  {
    "no": 4,
    "mes": "2026-02-12 00:00:00",
    "fecha": "Gasolina Emmanuel Moreno",
    "concepto": "SPEI HSBC",
    "moneda": "$",
    "monto": 2000.0
  },
  {
    "no": 5,
    "mes": "2026-02-18 00:00:00",
    "fecha": "Última gasolina Emmanuel",
    "concepto": "SPEI HSBC",
    "moneda": "$",
    "monto": 2000.0
  },
  {
    "no": 6,
    "mes": "28/ENE",
    "fecha": "Gasolina 2801 Joel",
    "concepto": "SPEI BANORTE",
    "moneda": "$",
    "monto": 1000.0
  },
  {
    "no": 7,
    "mes": "28/ENE",
    "fecha": "Gasolina enmicadora Emmanuel",
    "concepto": "SPEI HSBC",
    "moneda": "$",
    "monto": 1000.0
  },
  {
    "no": 8,
    "mes": "28/ENE",
    "fecha": "Gasolina 2801 Joel",
    "concepto": "SPEI BANORTE",
    "moneda": "$",
    "monto": 1000.0
  },
  {
    "no": 9,
    "mes": "28/ENE",
    "fecha": "Gasolina enmicadora Emmanuel",
    "concepto": "SPEI HSBC",
    "moneda": "$",
    "monto": 1000.0
  },
  {
    "no": 10,
    "mes": "2026-02-17 00:00:00",
    "fecha": "Gasolina Emmanuel Moreno",
    "concepto": "SPEI HSBC",
    "moneda": "$",
    "monto": 1000.0
  },
  {
    "no": 11,
    "mes": "27/ENE",
    "fecha": "Bidón de gasolina Damina Solis",
    "concepto": "SPEI SANTANDER",
    "moneda": "$",
    "monto": null
  },
  {
    "no": 12,
    "mes": "27/ENE",
    "fecha": "Bidón de gasolina Damina Solis",
    "concepto": "SPEI SANTANDER",
    "moneda": "$",
    "monto": null
  },
  {
    "no": 13,
    "mes": "2026-02-16 00:00:00",
    "fecha": "Gasolina",
    "concepto": "PAGO TERCERO BNET",
    "moneda": "$",
    "monto": 600.0
  },
  {
    "no": 14,
    "mes": "2026-02-01 00:00:00",
    "fecha": "Gasolina 0102",
    "concepto": "PAGO TERCERO BNET",
    "moneda": "$",
    "monto": 500.0
  },
  {
    "no": 15,
    "mes": "2026-02-01 00:00:00",
    "fecha": "Gasolina 0102",
    "concepto": "PAGO TERCERO BNET",
    "moneda": "$",
    "monto": 500.0
  },
  {
    "no": 16,
    "mes": "2026-02-13 00:00:00",
    "fecha": "Adeudo gasolina",
    "concepto": "PAGO TERCERO BNET",
    "moneda": "$",
    "monto": 500.0
  },
  {
    "no": 17,
    "mes": "2026-02-11 00:00:00",
    "fecha": "Gasolina Iron",
    "concepto": "PAGO TERCERO BNET",
    "moneda": "$",
    "monto": 456.0
  },
  {
    "no": 18,
    "mes": "2026-02-20 00:00:00",
    "fecha": "Gasolina",
    "concepto": "PAGO TERCERO BNET",
    "moneda": "$",
    "monto": 300.0
  },
  {
    "no": 19,
    "mes": "2026-03-06 00:00:00",
    "fecha": "Gasolina semana en curso",
    "concepto": "Varios",
    "moneda": "$",
    "monto": 6000.0
  }
];

// ──────────────────────────────────────────────────────────────
// 23. CLASIFICACIÓN CFDIs (68 registros)
// ──────────────────────────────────────────────────────────────
const CLASIFICACION_CFDIS = [
  {
    "no": 1,
    "uuid": "UUID-001",
    "rfcEmisor": "RFC000001",
    "proveedor": "VICTOR MANUEL TECUANHUEHUE CANTU",
    "fecha": "2026-01-15 00:00:00",
    "monto": 163.98,
    "categoria": "Sin clasificar",
    "tipo": "",
    "notas": ""
  },
  {
    "no": 2,
    "uuid": "UUID-003",
    "rfcEmisor": "RFC000003",
    "proveedor": "RAUL VAQUERA CHAVEZ",
    "fecha": "2026-01-15 00:00:00",
    "monto": 1246.61,
    "categoria": "Sin clasificar",
    "tipo": "",
    "notas": ""
  },
  {
    "no": 3,
    "uuid": "UUID-023",
    "rfcEmisor": "RFC000023",
    "proveedor": "ARTURO VALDES PEREZ",
    "fecha": "2026-01-15 00:00:00",
    "monto": 450.0,
    "categoria": "Sin clasificar",
    "tipo": "",
    "notas": ""
  },
  {
    "no": 4,
    "uuid": "UUID-024",
    "rfcEmisor": "RFC000024",
    "proveedor": "ANGEL VISUAL STRONG",
    "fecha": "2026-01-15 00:00:00",
    "monto": 580.0,
    "categoria": "Sin clasificar",
    "tipo": "",
    "notas": ""
  },
  {
    "no": 5,
    "uuid": "UUID-025",
    "rfcEmisor": "RFC000025",
    "proveedor": "JUAN JOSE VAZQUEZ ZAMORA",
    "fecha": "2026-01-15 00:00:00",
    "monto": 1860.0,
    "categoria": "Sin clasificar",
    "tipo": "",
    "notas": ""
  },
  {
    "no": 6,
    "uuid": "UUID-026",
    "rfcEmisor": "RFC000026",
    "proveedor": "MA. ENCARNACION RODRIGUEZ VALDES",
    "fecha": "2026-01-15 00:00:00",
    "monto": 1290.0,
    "categoria": "Viáticos",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 7,
    "uuid": "UUID-027",
    "rfcEmisor": "RFC000027",
    "proveedor": "MARIA OLEGARIA FLORES SALINAS",
    "fecha": "2026-01-15 00:00:00",
    "monto": 220.0,
    "categoria": "Viáticos",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 8,
    "uuid": "UUID-028",
    "rfcEmisor": "RFC000028",
    "proveedor": "PROVEEDORA FERRETERA LA MUNDIAL",
    "fecha": "2026-01-15 00:00:00",
    "monto": 2283.58,
    "categoria": "Herramienta",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 9,
    "uuid": "UUID-030",
    "rfcEmisor": "RFC000030",
    "proveedor": "INDUSTRIAL FERRETERA DE MONCLOVA",
    "fecha": "2026-01-15 00:00:00",
    "monto": 252.0,
    "categoria": "Herramienta",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 10,
    "uuid": "UUID-032",
    "rfcEmisor": "RFC000032",
    "proveedor": "BARLEM PROTEC DE MEXICO",
    "fecha": "2026-01-15 00:00:00",
    "monto": 8427.52,
    "categoria": "EPP",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 11,
    "uuid": "UUID-033",
    "rfcEmisor": "RFC000033",
    "proveedor": "BARLEM PROTEC DE MEXICO",
    "fecha": "2026-01-15 00:00:00",
    "monto": 760.96,
    "categoria": "EPP",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 12,
    "uuid": "UUID-034",
    "rfcEmisor": "RFC000034",
    "proveedor": "REFACCIONARIA ROGELIO",
    "fecha": "2026-01-15 00:00:00",
    "monto": 81.47,
    "categoria": "Herramienta",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 13,
    "uuid": "UUID-035",
    "rfcEmisor": "RFC000035",
    "proveedor": "SERVICIOS GASOLINEROS DE MEXICO",
    "fecha": "2026-01-15 00:00:00",
    "monto": 1000.0,
    "categoria": "Consumibles",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 14,
    "uuid": "UUID-036",
    "rfcEmisor": "RFC000036",
    "proveedor": "AUTOZONE DE MEXICO",
    "fecha": "2026-01-15 00:00:00",
    "monto": 258.0,
    "categoria": "Traslados",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 15,
    "uuid": "UUID-037",
    "rfcEmisor": "RFC000037",
    "proveedor": "AUTOZONE DE MEXICO",
    "fecha": "2026-01-15 00:00:00",
    "monto": 338.0,
    "categoria": "Traslados",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 16,
    "uuid": "UUID-038",
    "rfcEmisor": "RFC000038",
    "proveedor": "MANUEL BOULLOSA MARTINEZ",
    "fecha": "2026-01-15 00:00:00",
    "monto": 700.01,
    "categoria": "Sin clasificar",
    "tipo": "",
    "notas": ""
  },
  {
    "no": 17,
    "uuid": "UUID-039",
    "rfcEmisor": "RFC000039",
    "proveedor": "CALZADO DE TRABAJO",
    "fecha": "2026-01-15 00:00:00",
    "monto": 306.6,
    "categoria": "EPP",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 18,
    "uuid": "UUID-041",
    "rfcEmisor": "RFC000041",
    "proveedor": "BARLEM PROTEC DE MEXICO",
    "fecha": "2026-01-15 00:00:00",
    "monto": null,
    "categoria": "EPP",
    "tipo": "Proyecto",
    "notas": "Sin monto"
  },
  {
    "no": 19,
    "uuid": "UUID-042",
    "rfcEmisor": "RFC000042",
    "proveedor": "MA. ENCARNACION RODRIGUEZ VALDES",
    "fecha": "2026-01-15 00:00:00",
    "monto": 105.0,
    "categoria": "Viáticos",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 20,
    "uuid": "UUID-043",
    "rfcEmisor": "RFC000043",
    "proveedor": "ADMINISTRADORA INMOBILIARIA Y DE CONSTRUCCIONES DEL NORTE",
    "fecha": "2026-01-15 00:00:00",
    "monto": 906.01,
    "categoria": "Hospedaje",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 21,
    "uuid": "UUID-046",
    "rfcEmisor": "RFC000046",
    "proveedor": "OPERADORA FACTORY",
    "fecha": "2026-01-15 00:00:00",
    "monto": 7623.3,
    "categoria": "Equipos",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 22,
    "uuid": "UUID-047",
    "rfcEmisor": "RFC000047",
    "proveedor": "MAGRILU EQUIPOS DE SEGURIDAD INDUSTRIAL",
    "fecha": "2026-01-15 00:00:00",
    "monto": 1566.0,
    "categoria": "EPP",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 23,
    "uuid": "UUID-048",
    "rfcEmisor": "RFC000048",
    "proveedor": "SERVICIOS GASOLINEROS DE MEXICO",
    "fecha": "2026-01-15 00:00:00",
    "monto": 1000.0,
    "categoria": "Consumibles",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 24,
    "uuid": "UUID-049",
    "rfcEmisor": "RFC000049",
    "proveedor": "JOSE JAVIER GARZON LIZARRAGA",
    "fecha": "2026-01-15 00:00:00",
    "monto": 1616.03,
    "categoria": "Sin clasificar",
    "tipo": "",
    "notas": ""
  },
  {
    "no": 25,
    "uuid": "UUID-050",
    "rfcEmisor": "RFC000050",
    "proveedor": "FERRETERA ELIZONDO HERMANOS",
    "fecha": "2026-01-15 00:00:00",
    "monto": 1500.0,
    "categoria": "Herramienta",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 26,
    "uuid": "UUID-051",
    "rfcEmisor": "RFC000051",
    "proveedor": "FERRETERA ELIZONDO HERMANOS",
    "fecha": "2026-01-15 00:00:00",
    "monto": 2000.0,
    "categoria": "Herramienta",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 27,
    "uuid": "UUID-052",
    "rfcEmisor": "RFC000052",
    "proveedor": "FERRETERA ELIZONDO HERMANOS",
    "fecha": "2026-01-15 00:00:00",
    "monto": 1800.0,
    "categoria": "Herramienta",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 28,
    "uuid": "UUID-053",
    "rfcEmisor": "RFC000053",
    "proveedor": "FERRETERA ELIZONDO HERMANOS",
    "fecha": "2026-01-15 00:00:00",
    "monto": 2200.0,
    "categoria": "Herramienta",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 29,
    "uuid": "UUID-054",
    "rfcEmisor": "RFC000054",
    "proveedor": "FERRETERA ELIZONDO HERMANOS",
    "fecha": "2026-01-15 00:00:00",
    "monto": 1700.0,
    "categoria": "Herramienta",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 30,
    "uuid": "UUID-055",
    "rfcEmisor": "RFC000055",
    "proveedor": "FERRETERA ELIZONDO HERMANOS",
    "fecha": "2026-01-15 00:00:00",
    "monto": 1900.0,
    "categoria": "Herramienta",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 31,
    "uuid": "UUID-056",
    "rfcEmisor": "RFC000056",
    "proveedor": "FERRETERA ELIZONDO HERMANOS",
    "fecha": "2026-01-15 00:00:00",
    "monto": 2100.0,
    "categoria": "Herramienta",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 32,
    "uuid": "UUID-057",
    "rfcEmisor": "RFC000057",
    "proveedor": "FERRETERA ELIZONDO HERMANOS",
    "fecha": "2026-01-15 00:00:00",
    "monto": 1600.0,
    "categoria": "Herramienta",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 33,
    "uuid": "UUID-058",
    "rfcEmisor": "RFC000058",
    "proveedor": "FERRETERA ELIZONDO HERMANOS",
    "fecha": "2026-01-15 00:00:00",
    "monto": 2300.0,
    "categoria": "Herramienta",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 34,
    "uuid": "UUID-061",
    "rfcEmisor": "RFC000061",
    "proveedor": "CENTRAL FERRETERA DEL NORTE",
    "fecha": "2026-01-15 00:00:00",
    "monto": 7180.0,
    "categoria": "Herramienta",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 35,
    "uuid": "UUID-062",
    "rfcEmisor": "RFC000062",
    "proveedor": "CONSORCIO EMPRESARIAL 2000",
    "fecha": "2026-01-15 00:00:00",
    "monto": 159.0,
    "categoria": "Consumibles",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 36,
    "uuid": "UUID-063",
    "rfcEmisor": "RFC000063",
    "proveedor": "CONSORCIO EMPRESARIAL 2000",
    "fecha": "2026-01-15 00:00:00",
    "monto": 343.0,
    "categoria": "Consumibles",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 37,
    "uuid": "UUID-064",
    "rfcEmisor": "RFC000064",
    "proveedor": "AEROENLACES NACIONALES",
    "fecha": "2026-01-15 00:00:00",
    "monto": 1200.0,
    "categoria": "Traslados",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 38,
    "uuid": "UUID-065",
    "rfcEmisor": "RFC000065",
    "proveedor": "AEROENLACES NACIONALES",
    "fecha": "2026-01-15 00:00:00",
    "monto": 1350.0,
    "categoria": "Traslados",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 39,
    "uuid": "UUID-066",
    "rfcEmisor": "RFC000066",
    "proveedor": "AEROENLACES NACIONALES",
    "fecha": "2026-01-15 00:00:00",
    "monto": 980.0,
    "categoria": "Traslados",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 40,
    "uuid": "UUID-067",
    "rfcEmisor": "RFC000067",
    "proveedor": "AEROENLACES NACIONALES",
    "fecha": "2026-01-15 00:00:00",
    "monto": 1100.0,
    "categoria": "Traslados",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 41,
    "uuid": "UUID-068",
    "rfcEmisor": "RFC000068",
    "proveedor": "AEROENLACES NACIONALES",
    "fecha": "2026-01-15 00:00:00",
    "monto": 1450.0,
    "categoria": "Traslados",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 42,
    "uuid": "UUID-069",
    "rfcEmisor": "RFC000069",
    "proveedor": "AEROENLACES NACIONALES",
    "fecha": "2026-01-15 00:00:00",
    "monto": 1050.0,
    "categoria": "Traslados",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 43,
    "uuid": "UUID-070",
    "rfcEmisor": "RFC000070",
    "proveedor": "OFFICE DEPOT DE MEXICO",
    "fecha": "2026-01-15 00:00:00",
    "monto": 109.0,
    "categoria": "Viáticos",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 44,
    "uuid": "UUID-071",
    "rfcEmisor": "RFC000071",
    "proveedor": "OMNIBUS DE MEXICO",
    "fecha": "2026-01-15 00:00:00",
    "monto": 1648.0,
    "categoria": "Traslados",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 45,
    "uuid": "UUID-072",
    "rfcEmisor": "RFC000072",
    "proveedor": "HOME DEPOT MEXICO",
    "fecha": "2026-01-15 00:00:00",
    "monto": 345.0,
    "categoria": "Herramienta",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 46,
    "uuid": "UUID-073",
    "rfcEmisor": "RFC000073",
    "proveedor": "MARIA OLEGARIA FLORES SALINAS",
    "fecha": "2026-01-15 00:00:00",
    "monto": 3063.51,
    "categoria": "Viáticos",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 47,
    "uuid": "UUID-074",
    "rfcEmisor": "RFC000074",
    "proveedor": "IRON RENTALS",
    "fecha": "2026-01-15 00:00:00",
    "monto": 30276.0,
    "categoria": "Equipos",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 48,
    "uuid": "UUID-075",
    "rfcEmisor": "RFC000075",
    "proveedor": "SERVICIOS HABITACIONALES E ITINERANTES",
    "fecha": "2026-01-15 00:00:00",
    "monto": 1009.12,
    "categoria": "Hospedaje",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 49,
    "uuid": "UUID-076",
    "rfcEmisor": "RFC000076",
    "proveedor": "AUTOZONE DE MEXICO",
    "fecha": "2026-01-15 00:00:00",
    "monto": 159.0,
    "categoria": "Traslados",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 50,
    "uuid": "UUID-077",
    "rfcEmisor": "RFC000077",
    "proveedor": "SIBA COMBUSTIBLES Y LUBRICANTES",
    "fecha": "2026-01-15 00:00:00",
    "monto": 300.0,
    "categoria": "Consumibles",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 51,
    "uuid": "UUID-078",
    "rfcEmisor": "RFC000078",
    "proveedor": "SIBA COMBUSTIBLES Y LUBRICANTES",
    "fecha": "2026-01-15 00:00:00",
    "monto": 150.01,
    "categoria": "Consumibles",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 52,
    "uuid": "UUID-079",
    "rfcEmisor": "RFC000079",
    "proveedor": "SIBA COMBUSTIBLES Y LUBRICANTES",
    "fecha": "2026-01-15 00:00:00",
    "monto": 200.0,
    "categoria": "Consumibles",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 53,
    "uuid": "UUID-080",
    "rfcEmisor": "RFC000080",
    "proveedor": "OSCAR ENRIQUE GONZALEZ JUAREZ",
    "fecha": "2026-01-15 00:00:00",
    "monto": 11054.8,
    "categoria": "Sin clasificar",
    "tipo": "",
    "notas": ""
  },
  {
    "no": 54,
    "uuid": "UUID-081",
    "rfcEmisor": "RFC000081",
    "proveedor": "AEROENLACES NACIONALES",
    "fecha": "2026-01-15 00:00:00",
    "monto": 621.18,
    "categoria": "Traslados",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 55,
    "uuid": "UUID-082",
    "rfcEmisor": "RFC000082",
    "proveedor": "OPERADORA DE ESTACIONES Y PARADORES",
    "fecha": "2026-01-15 00:00:00",
    "monto": 1000.0,
    "categoria": "Consumibles",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 56,
    "uuid": "UUID-083",
    "rfcEmisor": "RFC000083",
    "proveedor": "RED ESTATAL DE AUTOPISTAS DE NUEVO LEON",
    "fecha": "2026-01-15 00:00:00",
    "monto": 126.0,
    "categoria": "Traslados",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 57,
    "uuid": "UUID-084",
    "rfcEmisor": "RFC000084",
    "proveedor": "AUTOZONE DE MEXICO",
    "fecha": "2026-01-15 00:00:00",
    "monto": 159.0,
    "categoria": "Traslados",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 58,
    "uuid": "UUID-085",
    "rfcEmisor": "RFC000085",
    "proveedor": "SCARLETT MIZRAIM PUENTE CONTRERAS",
    "fecha": "2026-01-15 00:00:00",
    "monto": 34800.0,
    "categoria": "Hospedaje",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 59,
    "uuid": "UUID-086",
    "rfcEmisor": "RFC000086",
    "proveedor": "SILVIA RAQUEL QUINTERO GARCIA",
    "fecha": "2026-01-15 00:00:00",
    "monto": 2320.0,
    "categoria": "Sin clasificar",
    "tipo": "",
    "notas": ""
  },
  {
    "no": 60,
    "uuid": "UUID-087",
    "rfcEmisor": "RFC000087",
    "proveedor": "ROCIO BERENICE GARCIA RIVERA",
    "fecha": "2026-01-15 00:00:00",
    "monto": 282.0,
    "categoria": "Sin clasificar",
    "tipo": "",
    "notas": ""
  },
  {
    "no": 61,
    "uuid": "UUID-088",
    "rfcEmisor": "RFC000088",
    "proveedor": "CENTRAL FERRETERA DEL NORTE",
    "fecha": "2026-01-15 00:00:00",
    "monto": 139.0,
    "categoria": "Herramienta",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 62,
    "uuid": "UUID-089",
    "rfcEmisor": "RFC000089",
    "proveedor": "CRISTIAN RICARDO CASTILLO RODRIGUEZ",
    "fecha": "2026-01-15 00:00:00",
    "monto": 5000.0,
    "categoria": "Sin clasificar",
    "tipo": "",
    "notas": ""
  },
  {
    "no": 63,
    "uuid": "UUID-090",
    "rfcEmisor": "RFC000090",
    "proveedor": "SERVICIOS GASOLINEROS DE MEXICO",
    "fecha": "2026-01-15 00:00:00",
    "monto": 400.0,
    "categoria": "Consumibles",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 64,
    "uuid": "UUID-091",
    "rfcEmisor": "RFC000091",
    "proveedor": "ELIA MARGARITA CANTU GONZALEZ",
    "fecha": "2026-01-15 00:00:00",
    "monto": 3000.0,
    "categoria": "Sin clasificar",
    "tipo": "",
    "notas": ""
  },
  {
    "no": 65,
    "uuid": "UUID-092",
    "rfcEmisor": "RFC000092",
    "proveedor": "ZENIA LIZETH ANDRADE RAMIREZ",
    "fecha": "2026-01-15 00:00:00",
    "monto": 30546.64,
    "categoria": "Hospedaje",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 66,
    "uuid": "UUID-093",
    "rfcEmisor": "RFC000093",
    "proveedor": "FERREMATERIALES27",
    "fecha": "2026-01-15 00:00:00",
    "monto": 23200.0,
    "categoria": "Herramienta",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 67,
    "uuid": "UUID-094",
    "rfcEmisor": "RFC000094",
    "proveedor": "FERREMATERIALES27",
    "fecha": "2026-01-15 00:00:00",
    "monto": 446981.74,
    "categoria": "Herramienta",
    "tipo": "Proyecto",
    "notas": ""
  },
  {
    "no": 68,
    "uuid": "UUID-095",
    "rfcEmisor": "RFC000095",
    "proveedor": "ISRAEL RODRIGUEZ GUERRERO",
    "fecha": "2026-01-15 00:00:00",
    "monto": 49520.0,
    "categoria": "Sin clasificar",
    "tipo": "",
    "notas": ""
  }
];

// ──────────────────────────────────────────────────────────────
// 24. PRESUPUESTO VS REAL (121 filas)
// ──────────────────────────────────────────────────────────────
const PRESUPUESTO_VS_REAL = [
  {
    "concepto": "CONCEPTO",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": null,
    "diferencia": null,
    "estado": "ESTADO"
  },
  {
    "concepto": "COSTOS LABORALES / NÓMINA",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "Mano de Obra / Nómina",
    "presupuestoE1": 363398.0,
    "presupuestoE2": 181699.0,
    "presupuestoTotal": 545097.0,
    "gastoReal": 527852.66,
    "diferencia": 17244.339999999967,
    "estado": "✅ Ahorro"
  },
  {
    "concepto": "IMSS + Cargas Patronales",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": 87911.4,
    "diferencia": -87911.4,
    "estado": "⚠️ Excedido"
  },
  {
    "concepto": "Aguinaldo / Vacaciones / Bono",
    "presupuestoE1": 28000.0,
    "presupuestoE2": null,
    "presupuestoTotal": 28000.0,
    "gastoReal": 15752.0,
    "diferencia": 12248.0,
    "estado": "✅ Ahorro"
  },
  {
    "concepto": "Subtotal Nómina",
    "presupuestoE1": 391398.0,
    "presupuestoE2": 181699.0,
    "presupuestoTotal": 573097.0,
    "gastoReal": 631516.06,
    "diferencia": -58419.06000000003,
    "estado": "⚠️ Excedido"
  },
  {
    "concepto": "HOSPEDAJE, TRASLADOS Y VIÁTICOS",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "Hospedaje",
    "presupuestoE1": 201600.0,
    "presupuestoE2": 115200.0,
    "presupuestoTotal": 316800.0,
    "gastoReal": 84939.93,
    "diferencia": 231860.07,
    "estado": "✅ Ahorro"
  },
  {
    "concepto": "Traslados",
    "presupuestoE1": 35000.0,
    "presupuestoE2": 20000.0,
    "presupuestoTotal": 55000.0,
    "gastoReal": 63356.0,
    "diferencia": -8356.0,
    "estado": "⚠️ Excedido"
  },
  {
    "concepto": "Viáticos",
    "presupuestoE1": 67200.0,
    "presupuestoE2": 33600.0,
    "presupuestoTotal": 100800.0,
    "gastoReal": 156400.0,
    "diferencia": -55600.0,
    "estado": "⚠️ Excedido"
  },
  {
    "concepto": "Subtotal Hosp/Trasl/Viát",
    "presupuestoE1": 303800.0,
    "presupuestoE2": 168800.0,
    "presupuestoTotal": 472600.0,
    "gastoReal": 304695.93,
    "diferencia": 167904.07,
    "estado": "✅ Ahorro"
  },
  {
    "concepto": "DOCUMENTACIÓN Y HERRAMIENTAS",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "DC3 / Capacitaciones",
    "presupuestoE1": 14000.0,
    "presupuestoE2": null,
    "presupuestoTotal": 14000.0,
    "gastoReal": 10300.0,
    "diferencia": 3700.0,
    "estado": "✅ Ahorro"
  },
  {
    "concepto": "Herramienta",
    "presupuestoE1": 25000.0,
    "presupuestoE2": 15000.0,
    "presupuestoTotal": 40000.0,
    "gastoReal": 20000.0,
    "diferencia": 20000.0,
    "estado": "✅ Ahorro"
  },
  {
    "concepto": "Consumibles",
    "presupuestoE1": 12000.0,
    "presupuestoE2": 6000.0,
    "presupuestoTotal": 18000.0,
    "gastoReal": 15000.0,
    "diferencia": 3000.0,
    "estado": "✅ Ahorro"
  },
  {
    "concepto": "Subtotal Doc/Herr",
    "presupuestoE1": 51000.0,
    "presupuestoE2": 21000.0,
    "presupuestoTotal": 72000.0,
    "gastoReal": 45300.0,
    "diferencia": 26700.0,
    "estado": "✅ Ahorro"
  },
  {
    "concepto": "RENTA DE EQUIPOS",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "Plataformas",
    "presupuestoE1": 104400.0,
    "presupuestoE2": 52200.0,
    "presupuestoTotal": 156600.0,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "Montacargas",
    "presupuestoE1": 90000.0,
    "presupuestoE2": 45000.0,
    "presupuestoTotal": 135000.0,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "Renta de Equipos (total real)",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 291600.0,
    "gastoReal": 335578.0,
    "diferencia": -43978.0,
    "estado": "⚠️ Excedido"
  },
  {
    "concepto": "Subtotal Equipos",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 291600.0,
    "gastoReal": 335578.0,
    "diferencia": -43978.0,
    "estado": "⚠️ Excedido"
  },
  {
    "concepto": "SEGURIDAD",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "EPP / Protección",
    "presupuestoE1": 4030.0,
    "presupuestoE2": 3000.0,
    "presupuestoTotal": 7030.0,
    "gastoReal": 7030.0,
    "diferencia": null,
    "estado": "➖ Igual"
  },
  {
    "concepto": "Seguro RC",
    "presupuestoE1": 15859.13,
    "presupuestoE2": null,
    "presupuestoTotal": 15859.13,
    "gastoReal": 15860.0,
    "diferencia": -0.8700000000008004,
    "estado": "⚠️ Excedido"
  },
  {
    "concepto": "Subtotal Seguridad",
    "presupuestoE1": 19889.129999999997,
    "presupuestoE2": 3000.0,
    "presupuestoTotal": 22889.129999999997,
    "gastoReal": 22890.0,
    "diferencia": -0.8700000000008004,
    "estado": "⚠️ Excedido"
  },
  {
    "concepto": "Administración",
    "presupuestoE1": 15000.0,
    "presupuestoE2": 10000.0,
    "presupuestoTotal": 25000.0,
    "gastoReal": null,
    "diferencia": 25000.0,
    "estado": "✅ Ahorro"
  },
  {
    "concepto": "💰 TOTAL PROYECTO (E1+E2)",
    "presupuestoE1": 781087.13,
    "presupuestoE2": 384499.0,
    "presupuestoTotal": 1457186.13,
    "gastoReal": 1339979.99,
    "diferencia": 117206.1399999999,
    "estado": "✅ Ahorro"
  },
  {
    "concepto": "⚠️ EXCEDENTES Y GASTOS ADICIONALES NO PRESUPUESTADOS",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "No.",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "1",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": 62000.0,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "2",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": 42000.0,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "3",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": 22000.0,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "4",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": 87600.0,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "5",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": 8336.1,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "6",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": 12948.3,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "7",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": 50100.0,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "8",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": 20900.0,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "9",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": 19760.0,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "10",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": 56000.0,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "11",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": 16000.0,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "12",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": 14000.0,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "13",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": 8000.0,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "14",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": 15000.0,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "⚠️ TOTAL EXCEDENTES",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": 434644.4,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "SERVICIOS ADICIONALES COTIZADOS",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "Grúa 40 TON (2 unid, 8 hrs/unid)",
    "presupuestoE1": 130000.0,
    "presupuestoE2": null,
    "presupuestoTotal": 130000.0,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "VERSA LIFT 46/60 (5 días)",
    "presupuestoE1": 183280.0,
    "presupuestoE2": null,
    "presupuestoTotal": 183280.0,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "Adicionales Operación (Limpieza, SIPLOC, etc)",
    "presupuestoE1": 102538.0,
    "presupuestoE2": null,
    "presupuestoTotal": 102538.0,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "Subtotal Adicionales",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 415818.0,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "🏗️ COSTO TOTAL DEL PROYECTO",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 1873004.13,
    "gastoReal": 1774624.3900000001,
    "diferencia": 98379.73999999976,
    "estado": "✅ Ahorro"
  },
  {
    "concepto": "PRECIO VENTA (antes IVA)",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 2364441.35,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "💚 UTILIDAD REAL ESTIMADA",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 589816.96,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "MARGEN DE UTILIDAD REAL",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 0.24945298812338904,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "🚨 ANÁLISIS DE FLUJO Y PROYECCIÓN - SEMANA EN CURSO",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "💰 FLUJO DE EFECTIVO ACTUAL",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "OC Total (antes IVA)",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 2364441.35,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "Cobrado (80%)",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 1891553.08,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "Por cobrar (20%)",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 472888.27,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "Total Gastado (Real + Excedentes)",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 1774624.3900000001,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "Cobrado - Gastado",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 116928.68999999994,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "🔮 PROYECCIÓN - GASTOS RESTANTES",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "CONCEPTO",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "Nómina (14 personas)",
    "presupuestoE1": null,
    "presupuestoE2": 85000.0,
    "presupuestoTotal": 255000.0,
    "gastoReal": 340000.0,
    "diferencia": 64000.0,
    "estado": ""
  },
  {
    "concepto": "Viáticos",
    "presupuestoE1": null,
    "presupuestoE2": 18000.0,
    "presupuestoTotal": 54000.0,
    "gastoReal": 72000.0,
    "diferencia": 18000.0,
    "estado": ""
  },
  {
    "concepto": "Gasolina",
    "presupuestoE1": null,
    "presupuestoE2": 6000.0,
    "presupuestoTotal": 18000.0,
    "gastoReal": 24000.0,
    "diferencia": 6000.0,
    "estado": ""
  },
  {
    "concepto": "Grúa (4 días)",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 70400.0,
    "gastoReal": 70400.0,
    "diferencia": 70400.0,
    "estado": ""
  },
  {
    "concepto": "Versa Lift (4 días)",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 112000.0,
    "gastoReal": 112000.0,
    "diferencia": 112000.0,
    "estado": ""
  },
  {
    "concepto": "Casa Ramos Arizpe",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 10000.0,
    "gastoReal": 10000.0,
    "diferencia": 7500.0,
    "estado": ""
  },
  {
    "concepto": "TOTAL GASTO FUTURO",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 519400.0,
    "gastoReal": 628400.0,
    "diferencia": 277900.0,
    "estado": ""
  },
  {
    "concepto": "🚨 RESULTADO ESTIMADO AL FINAL DEL PROYECTO",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "Gasto Total Actual",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 1774624.3900000001,
    "gastoReal": 1774624.3900000001,
    "diferencia": 1774624.3900000001,
    "estado": ""
  },
  {
    "concepto": "(+) Gasto Futuro Estimado",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 519400.0,
    "gastoReal": 628400.0,
    "diferencia": 277900.0,
    "estado": ""
  },
  {
    "concepto": "GASTO TOTAL FINAL",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 2294024.39,
    "gastoReal": 2403024.39,
    "diferencia": 2052524.3900000001,
    "estado": ""
  },
  {
    "concepto": "OC Total",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 2364441.35,
    "gastoReal": 2364441.35,
    "diferencia": 2364441.35,
    "estado": ""
  },
  {
    "concepto": "UTILIDAD / (PÉRDIDA)",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 70416.95999999996,
    "gastoReal": -38583.04000000004,
    "diferencia": 311916.95999999996,
    "estado": ""
  },
  {
    "concepto": "MARGEN",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 0.02978164799900829,
    "gastoReal": -0.016318036393670764,
    "diferencia": 0.13191993956627426,
    "estado": ""
  },
  {
    "concepto": "Ganancia pretendida",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 745400.0,
    "gastoReal": 745400.0,
    "diferencia": 745400.0,
    "estado": ""
  },
  {
    "concepto": "DIFERENCIA vs PRETENDIDO",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": -674983.04,
    "gastoReal": -783983.04,
    "diferencia": -433483.04000000004,
    "estado": ""
  },
  {
    "concepto": "💡 ALTERNATIVA: REDUCIR A 7 PERSONAS (como estaba planeado)",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "Nómina (7 personas)",
    "presupuestoE1": null,
    "presupuestoE2": 32000.0,
    "presupuestoTotal": 128000.0,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "Viáticos (7 personas)",
    "presupuestoE1": null,
    "presupuestoE2": 9000.0,
    "presupuestoTotal": 36000.0,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "Gasolina (reducida)",
    "presupuestoE1": null,
    "presupuestoE2": 3000.0,
    "presupuestoTotal": 12000.0,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "Equipos (Grúa+Versa+Casa Ramos)",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 192400.0,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "Hospedaje (1 casa solamente)",
    "presupuestoE1": null,
    "presupuestoE2": 7500.0,
    "presupuestoTotal": 30000.0,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "TOTAL GASTO FUTURO (7 pers)",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 398400.0,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "GASTO TOTAL (actual + 7 pers 4 sem)",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 2173024.39,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "UTILIDAD con 7 personas",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 191416.95999999996,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "MARGEN con 7 personas",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 0.08095652700372541,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "💥 IMPACTO DE MANTENER 14 PERSONAS (en vez de reducir a 7)",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "CONCEPTO",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "Nómina (sem 5-8)",
    "presupuestoE1": null,
    "presupuestoE2": 128000.0,
    "presupuestoTotal": 340000.0,
    "gastoReal": 212000.0,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "Viáticos",
    "presupuestoE1": null,
    "presupuestoE2": 36000.0,
    "presupuestoTotal": 72000.0,
    "gastoReal": 36000.0,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "Gasolina",
    "presupuestoE1": null,
    "presupuestoE2": 12000.0,
    "presupuestoTotal": 24000.0,
    "gastoReal": 12000.0,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "Hospedaje (1 casa vs 2)",
    "presupuestoE1": null,
    "presupuestoE2": 30000.0,
    "presupuestoTotal": 60000.0,
    "gastoReal": 30000.0,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "TOTAL IMPACTO",
    "presupuestoE1": null,
    "presupuestoE2": 206000.0,
    "presupuestoTotal": 496000.0,
    "gastoReal": 290000.0,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "⚠️ Mantener 14 personas en lugar de 7 durante semanas 5-8 costó ~$290,000 adicionales que eliminaron toda la utilidad del proyecto",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "💲 PROYECCIÓN PARA COBRO DE ADICIONALES",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "Base: 2 semanas restantes, 7 personas, 1 casa. OC = $2,364,441.35",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "SITUACIÓN ACTUAL DEL PROYECTO",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "OC Actual (antes IVA)",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 2364441.35,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "Gasto Real Acumulado (actual)",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 1774624.3900000001,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "Gasto Futuro Estimado (7 pers, 4 sem)",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 277900.0,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "GASTO TOTAL PROYECTADO",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 2052524.3900000001,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "✅ Superávit actual (OC - Gasto Total)",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 311916.95999999996,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "ESCENARIOS DE COBRO ADICIONAL",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "ESCENARIO",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "A) Sin cobrar adicionales\n(solo con OC actual)",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 2364441.35,
    "gastoReal": 311916.95999999996,
    "diferencia": 0.13191993956627426,
    "estado": ""
  },
  {
    "concepto": "B) Cobrar ganancia pretendida\n($745,400)",
    "presupuestoE1": 433483.04000000004,
    "presupuestoE2": 502840.3264,
    "presupuestoTotal": 2797924.39,
    "gastoReal": 745400.0,
    "diferencia": 0.26641177390787174,
    "estado": ""
  },
  {
    "concepto": "C) Cobrar todos los excedentes\ndocumentados ($370,460)",
    "presupuestoE1": 370460.0,
    "presupuestoE2": 429733.6,
    "presupuestoTotal": 2734901.35,
    "gastoReal": 682376.96,
    "diferencia": 0.24950697399012214,
    "estado": ""
  },
  {
    "concepto": "D) Margen 20% sobre gasto total",
    "presupuestoE1": 201214.13749999972,
    "presupuestoE2": 233408.39949999965,
    "presupuestoTotal": 2565655.4875,
    "gastoReal": 513131.0974999997,
    "diferencia": 0.1999999999999999,
    "estado": ""
  },
  {
    "concepto": "DESGLOSE DE ADICIONALES A COTIZAR",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "No.",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": null,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "1",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 62000.0,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "2",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 87600.0,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "3",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 50100.0,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "4",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 19760.0,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "5",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 94000.0,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "6",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 57000.0,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "TOTAL ADICIONALES BASE",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 370460.0,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "IVA (16%)",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 59273.6,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  },
  {
    "concepto": "TOTAL CON IVA",
    "presupuestoE1": null,
    "presupuestoE2": null,
    "presupuestoTotal": 429733.6,
    "gastoReal": null,
    "diferencia": null,
    "estado": ""
  }
];

// ──────────────────────────────────────────────────────────────
// 25. PLAN DE TRABAJO (9 actividades)
// ──────────────────────────────────────────────────────────────
const PLAN_TRABAJO = [
  {
    "etapa": "ETAPA",
    "semana": "SEMANA",
    "actividad": "ACTIVIDAD",
    "personalPlan": null,
    "personalReal": null,
    "costoSemanalPlan": null,
    "costoSemanalReal": null,
    "diferencia": null,
    "avancePlan": null,
    "avanceReal": null,
    "equiposPlan": "EQUIPOS PLAN",
    "estado": "ESTADO"
  },
  {
    "etapa": "ETAPA 1: DESINSTALACIÓN",
    "semana": "Semana 1",
    "actividad": "Preparación y Movilización",
    "personalPlan": 14,
    "personalReal": 18,
    "costoSemanalPlan": 109000.0,
    "costoSemanalReal": 140000.0,
    "diferencia": 31000.0,
    "avancePlan": 0.1,
    "avanceReal": 0.1,
    "equiposPlan": "4 Plat + 2 Montac",
    "estado": "⚠️ +4 personas"
  },
  {
    "etapa": "ETAPA 1: DESINSTALACIÓN",
    "semana": "Semana 2",
    "actividad": "Identificación y Etiquetado",
    "personalPlan": 14,
    "personalReal": 18,
    "costoSemanalPlan": 109000.0,
    "costoSemanalReal": 140000.0,
    "diferencia": 31000.0,
    "avancePlan": 0.3,
    "avanceReal": 0.3,
    "equiposPlan": "4 Plat + 2 Montac",
    "estado": "⚠️ +4 personas"
  },
  {
    "etapa": "ETAPA 1: DESINSTALACIÓN",
    "semana": "Semana 3",
    "actividad": "Desconexión Eléctrica",
    "personalPlan": 14,
    "personalReal": 18,
    "costoSemanalPlan": 109000.0,
    "costoSemanalReal": 140000.0,
    "diferencia": 31000.0,
    "avancePlan": 0.5,
    "avanceReal": 0.5,
    "equiposPlan": "4 Plat + 2 Montac",
    "estado": "⚠️ +4 personas"
  },
  {
    "etapa": "ETAPA 1: DESINSTALACIÓN",
    "semana": "Semana 4",
    "actividad": "Desmontaje y Carga",
    "personalPlan": 14,
    "personalReal": 14,
    "costoSemanalPlan": 109000.0,
    "costoSemanalReal": 109000.0,
    "diferencia": null,
    "avancePlan": 0.7,
    "avanceReal": 0.7,
    "equiposPlan": "4 Plat + 2 Montac",
    "estado": "✅ Igual"
  },
  {
    "etapa": "ETAPA 2: SERVICIOS",
    "semana": "Semana 5",
    "actividad": "Desconexión de Tuberías",
    "personalPlan": 7,
    "personalReal": 14,
    "costoSemanalPlan": 41000.0,
    "costoSemanalReal": 109000.0,
    "diferencia": 68000.0,
    "avancePlan": 0.8,
    "avanceReal": 0.8,
    "equiposPlan": "2 Plat + 1 Montac",
    "estado": "⚠️ +7 personas"
  },
  {
    "etapa": "ETAPA 2: SERVICIOS",
    "semana": "Semana 6",
    "actividad": "Retiro de Tuberías Aéreas",
    "personalPlan": 7,
    "personalReal": 14,
    "costoSemanalPlan": 41000.0,
    "costoSemanalReal": 109000.0,
    "diferencia": 68000.0,
    "avancePlan": 0.85,
    "avanceReal": null,
    "equiposPlan": "2 Plat + 1 Montac",
    "estado": "⚠️ +7 personas"
  },
  {
    "etapa": "ETAPA 2: SERVICIOS",
    "semana": "Semana 7",
    "actividad": "Limpieza de Nave",
    "personalPlan": 7,
    "personalReal": 7,
    "costoSemanalPlan": 41000.0,
    "costoSemanalReal": 41000.0,
    "diferencia": null,
    "avancePlan": 0.95,
    "avanceReal": null,
    "equiposPlan": "2 Plat + 1 Montac",
    "estado": "🔮 Proyectado"
  },
  {
    "etapa": "ETAPA 2: SERVICIOS",
    "semana": "Semana 8",
    "actividad": "Cierre de Proyecto",
    "personalPlan": 7,
    "personalReal": 7,
    "costoSemanalPlan": 41000.0,
    "costoSemanalReal": 41000.0,
    "diferencia": null,
    "avancePlan": 1.0,
    "avanceReal": null,
    "equiposPlan": "2 Plat + 1 Montac",
    "estado": "🔮 Proyectado"
  }
];

// ──────────────────────────────────────────────────────────────
// 26. BITÁCORA CONSOLIDADA (54 filas)
// ──────────────────────────────────────────────────────────────
const BITACORA_CONSOLIDADA = [
  [
    "0.01",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Relocalización de Celdas LCV4 y LCH — Planta A Santa Catarina, N.L.",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Cliente:",
    "CARRIER MÉXICO — CMXA",
    null,
    "Proyecto:",
    "MIC-01-Ent / CERES",
    null,
    null
  ],
  [
    "Ejecutor:",
    "AMISA / MICSA",
    null,
    "OC:",
    "$2,364,441.35 + IVA",
    null,
    null
  ],
  [
    "Fecha del reporte:",
    "4 de marzo de 2026",
    null,
    "Semana actual:",
    "Semana 6 de 8",
    null,
    null
  ],
  [
    "1️⃣ AVANCE GENERAL DEL PROYECTO",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "SEMANA",
    "ETAPA",
    "ACTIVIDAD PRINCIPAL",
    "PERSONAL",
    "AVANCE",
    "ESTATUS",
    null
  ],
  [
    "Sem 1",
    "Desinstalación",
    "Preparación y movilización",
    "18 personas",
    "0.1",
    "✅ Completada",
    null
  ],
  [
    "Sem 2",
    "Desinstalación",
    "Identificación, etiquetado y packing lists",
    "18 personas",
    "0.3",
    "✅ Completada",
    null
  ],
  [
    "Sem 3",
    "Desinstalación",
    "Desconexión eléctrica y cableado",
    "18 personas",
    "0.5",
    "✅ Completada",
    null
  ],
  [
    "Sem 4",
    "Desinstalación",
    "Desmontaje, maniobras y carga a camión",
    "14 personas",
    "0.7",
    "✅ Completada",
    null
  ],
  [
    "Sem 5",
    "Servicios",
    "Desconexión de tuberías",
    "14 personas",
    "0.8",
    "✅ Completada",
    null
  ],
  [
    "Sem 6",
    "Servicios",
    "Retiro de tuberías aéreas",
    "14 personas",
    "0.85",
    "🔶 En curso",
    null
  ],
  [
    "Sem 7",
    "Servicios",
    "Limpieza de nave",
    "7 personas",
    "0.95",
    "🔮 Proyectada",
    null
  ],
  [
    "Sem 8",
    "Servicios",
    "Cierre, entrega y documentación",
    "7 personas",
    "1",
    "🔮 Proyectada",
    null
  ],
  [
    "2️⃣ ESTATUS DE EMBARQUES",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "CÓDIGO",
    "EQUIPO",
    "PESO",
    "DESTINO",
    "FECHA EMBARQUE",
    "ESTATUS",
    null
  ],
  [
    "M-108",
    "Dobladora de Coil",
    "2 TON",
    "Planta C",
    "18/02/2026",
    "🟢 EMBARCADO",
    null
  ],
  [
    "M-042",
    "Hairpin Bender M-042",
    "8 TON",
    "Planta C",
    "18/02/2026",
    "🟢 EMBARCADO",
    null
  ],
  [
    "M-1603",
    "Fin Press M-1603 (accesorios)",
    "20 TON",
    "Planta C",
    "17-20/02/2026",
    "🟢 EMBARCADO",
    null
  ],
  [
    "CAB-LCH-001",
    "Cabina LCH (6 paquetes + puertas)",
    "3 TON",
    "Planta C",
    "17/02/2026",
    "🟢 EMBARCADO",
    null
  ],
  [
    "POL-001",
    "Polipasto Bandera",
    "—",
    "Planta C",
    "18/02/2026",
    "🟢 EMBARCADO",
    null
  ],
  [
    "M-37",
    "Expander M-37",
    "17 TON",
    "Planta C",
    "Pendiente",
    "🟡 PENDIENTE PROGRAMAR",
    null
  ],
  [
    "M-175",
    "Grúa de Fin Press",
    "8 TON",
    "Planta C",
    "Pendiente",
    "🟡 PENDIENTE PROGRAMAR",
    null
  ],
  [
    "GV-LCH",
    "Grúa Viajera LCH",
    "—",
    "—",
    "Pendiente",
    "🔴 PEND. DESMANTELAR",
    null
  ],
  [
    "RESUMEN EMBARQUES:",
    "Embarcados: 5/8",
    "Pendientes: 2",
    "Por desmantelar: 1",
    "Avance: 62.5%",
    null,
    null
  ],
  [
    "EQUIPOS A CHATARRA (no requieren embarque):",
    null,
    "Abanicos (23), Brazer, Burst Test, Extractores (2), Recuperador, Runtests (4), Sist. Pre-vacío",
    null,
    null,
    null,
    null
  ],
  [
    "3️⃣ ANÁLISIS DE RECURSOS: HORAS-HOMBRE PLAN vs REAL",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "PERIODO",
    "PERSONAL PLAN",
    "PERSONAL REAL",
    "HORAS PLAN",
    "HORAS REAL",
    "HH EXCEDENTE",
    "NOTA"
  ],
  [
    "Sem 1-3 (Etapa 1)",
    "14",
    "18",
    "3528",
    "4536",
    "1008",
    "+4 personas sobre plan OC"
  ],
  [
    "Sem 4 (Etapa 1)",
    "14",
    "14",
    "1176",
    "1176",
    null,
    "Conforme a plan"
  ],
  [
    "Sem 5-6 (Etapa 2)",
    "7",
    "14",
    "1176",
    "2352",
    "1176",
    "Cuadrilla completa por requerimiento"
  ],
  [
    "Sem 7-8 (Etapa 2)",
    "7",
    "7",
    "1176",
    "1176",
    null,
    "Proyectado conforme a plan"
  ],
  [
    null,
    null,
    null,
    "7056",
    "9240",
    "2184",
    "+2,184 HH (+31%) sobre plan"
  ],
  [
    "Nota: Jornada base = 12 hrs/día × 7 días/semana. Total plan original: 7,056 HH. Real + proyección: 8,232 HH.",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "4️⃣ COSTOS ADICIONALES IDENTIFICADOS",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "No.",
    "CONCEPTO",
    "DESCRIPCIÓN / JUSTIFICACIÓN",
    null,
    "MONTO",
    null,
    null
  ],
  [
    "1",
    "Recurso humano adicional",
    "Se mantuvieron 14 personas en semanas 5-6 por requerimiento de alcance. Plan original: 7 personas. Excedente: 1,176 HH",
    null,
    "85001",
    null,
    null
  ],
  [
    "2",
    "Tiempo extra (domingos)",
    "Jornadas dominicales no contempladas en OC original para cumplir con fechas de entrega del cliente",
    null,
    "87600",
    null,
    null
  ],
  [
    "3",
    "Nóminas caídas y rotación",
    "Baja y reemplazo de personal por condiciones de proyecto. Incluye liquidaciones y re-contrataciones",
    null,
    "63048",
    null,
    null
  ],
  [
    "4",
    "DC-3 / Capacitación personal nuevo",
    "Capacitación y certificación de 13 nuevos ingresos por rotación. Incluye exámenes médicos e inducción de seguridad",
    null,
    "40660",
    null,
    null
  ],
  [
    "5",
    "Diferencial renta de equipos",
    "Incremento de precios en plataformas, montacargas, Versa Lift y grúa telescópica respecto a cotización original",
    null,
    "94000",
    null,
    null
  ],
  [
    "6",
    "Hospedaje adicional",
    "Renta de segunda casa-habitación para alojar cuadrilla adicional durante semanas 5-8",
    null,
    "57000",
    null,
    null
  ],
  [
    "TOTAL ADICIONALES (antes de IVA)",
    null,
    null,
    null,
    "427309",
    null,
    null
  ],
  [
    "IVA (16%)",
    null,
    null,
    null,
    "68369.44",
    null,
    null
  ],
  [
    "TOTAL ADICIONALES (IVA incluido)",
    null,
    null,
    null,
    "495678.44",
    null,
    null
  ],
  [
    "5️⃣ RESUMEN DE COBRANZA",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "CONCEPTO",
    null,
    null,
    "ANTES IVA",
    "CON IVA (16%)",
    null,
    null
  ],
  [
    "✅ OC — Ya cobrado (80%)",
    null,
    null,
    "1891553.08",
    "2194201.5727999997",
    null,
    null
  ],
  [
    "🟡 OC — Pendiente (20%)",
    null,
    null,
    "472888.27",
    "548550.3931999999",
    null,
    null
  ],
  [
    "OC TOTAL",
    null,
    null,
    "2364441.35",
    "2742751.9659999995",
    null,
    null
  ],
  [
    "🔴 ADICIONALES (APARTE de OC)",
    null,
    null,
    "427309",
    "495678.44",
    null,
    null
  ],
  [
    "💰 TOTAL POR COBRAR (20% OC + Adicionales)",
    null,
    null,
    "900197.27",
    "1044228.8332",
    null,
    null
  ],
  [
    "🏦 INGRESO TOTAL DEL PROYECTO (OC + Adicionales)",
    null,
    null,
    "2791750.35",
    "3238430.4059999995",
    null,
    null
  ]
];

// ──────────────────────────────────────────────────────────────
// 27. CONTROL PROYECTO — TABLERO (28 filas)
// ──────────────────────────────────────────────────────────────
const CONTROL_PROYECTO = [
  [
    "⚙️ TABLERO DE CONTROL DE PROYECTO — PLANTILLA REUTILIZABLE",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "📝 Llena SOLO las celdas AMARILLAS — todo lo demás se calcula solo",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "DATOS DEL PROYECTO",
    null,
    null,
    null,
    "PARÁMETROS COSTO",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Proyecto:",
    "MIC-01-Ent",
    null,
    null,
    "OC (antes IVA):",
    "2364441.35",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Cliente:",
    "Carrier México",
    null,
    null,
    "Ganancia pretendida:",
    "745400",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Semanas plan:",
    "8",
    null,
    null,
    "Costo/pers/sem:",
    "7786",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Hrs/día:",
    "12",
    "Días/sem:",
    "7",
    "Gastos fijos/sem:",
    "6071",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    null,
    null,
    null,
    null,
    null,
    "24000",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "📅 CONTROL SEMANAL",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "SEM",
    "PERS\nPLAN",
    "PERS\nREAL",
    "HH PLAN",
    "HH REAL",
    "COSTO PLAN",
    "COSTO REAL",
    "DESVIACIÓN\n$",
    "AVANCE\n%",
    "GASTO\nACUMULADO",
    "PRESUP\nACUMULADO",
    "SALDO vs OC",
    "🚨 ALERTA"
  ],
  [
    "1",
    "14",
    "18",
    "1176",
    "1512",
    "108994",
    "133278",
    "24284",
    "0.1",
    "133278",
    "108994",
    "2231163.35",
    "➖ OK"
  ],
  [
    "2",
    "14",
    "18",
    "1176",
    "1512",
    "108994",
    "133278",
    "24284",
    "0.3",
    "266556",
    "217988",
    "2097885.35",
    "➖ OK"
  ],
  [
    "3",
    "14",
    "18",
    "1176",
    "1512",
    "108994",
    "133278",
    "24284",
    "0.5",
    "399834",
    "326982",
    "1964607.35",
    "➖ OK"
  ],
  [
    "4",
    "14",
    "14",
    "1176",
    "1176",
    "108994",
    "108994",
    null,
    "0.7",
    "508828",
    "435976",
    "1855613.35",
    "➖ OK"
  ],
  [
    "5",
    "7",
    "14",
    "588",
    "1176",
    "66497",
    "108994",
    "42497",
    "0.8",
    "617822",
    "502473",
    "1746619.35",
    "➖ OK"
  ],
  [
    "6",
    "7",
    "14",
    "588",
    "1176",
    "66497",
    "108994",
    "42497",
    "0.85",
    "726816",
    "568970",
    "1637625.35",
    "➖ OK"
  ],
  [
    "7",
    "7",
    "7",
    "588",
    "588",
    "66497",
    "66497",
    null,
    "0.95",
    "793313",
    "635467",
    "1571128.35",
    "➖ OK"
  ],
  [
    "8",
    "7",
    "7",
    "588",
    "588",
    "66497",
    "66497",
    null,
    "1",
    "859810",
    "701964",
    "1504631.35",
    "➖ OK"
  ],
  [
    "TOTAL",
    "84",
    "110",
    "7056",
    "9240",
    "701964",
    "859810",
    "157846",
    null,
    "859810",
    "701964",
    "1504631.35",
    "✅ EN META"
  ],
  [
    "📊 DASHBOARD RESUMEN",
    null,
    null,
    null,
    null,
    null,
    "🚨 SEMÁFORO DEL PROYECTO",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "OC del proyecto:",
    null,
    "2364441.35",
    null,
    null,
    null,
    "HH Excedente:",
    null,
    "2184",
    "0.30952380952380953",
    null,
    null,
    null
  ],
  [
    "Gasto total real:",
    null,
    "859810",
    null,
    null,
    null,
    "Costo excedente:",
    null,
    "157846",
    null,
    null,
    null,
    null
  ],
  [
    "Utilidad estimada:",
    null,
    "1504631.35",
    null,
    null,
    null,
    "% desviación costo:",
    null,
    "0.22486338330740607",
    null,
    null,
    null,
    null
  ],
  [
    "Margen:",
    null,
    "0.6363580767186295",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Ganancia pretendida:",
    null,
    "745400",
    null,
    null,
    null,
    "🟢 = Dentro de presupuesto",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Diferencia vs pretendido:",
    null,
    "759231.3500000001",
    null,
    null,
    null,
    "🟡 = Excedido <5% del presupuesto",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Adicional a cobrar (para pretendido):",
    null,
    null,
    null,
    null,
    null,
    "🔴 = Excedido >5% del presupuesto",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Adicional + IVA:",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ]
];

// ──────────────────────────────────────────────────────────────
// 28. DESGLOSE ADICIONALES (164 filas)
// ──────────────────────────────────────────────────────────────
const DESGLOSE_ADICIONALES = [
  [
    "DESGLOSE DETALLADO Y JUSTIFICACIÓN DE COSTOS ADICIONALES",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Proyecto: MIC-01-Ent / CERES — Carrier México CMXA",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Solicitud de Orden de Cambio — Trabajo Adicional No Contemplado en OC Original",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Documento:",
    "Solicitud de Orden de Cambio / Adicional",
    null,
    null,
    "OC Original:",
    "2364441.35",
    null,
    null
  ],
  [
    "Fecha:",
    "4 de marzo de 2026",
    null,
    null,
    "Monto Adicional:",
    "1150167",
    null,
    null
  ],
  [
    "Elaboró:",
    "[Nombre del Responsable]",
    null,
    null,
    "Adicional + IVA:",
    "1334193.72",
    null,
    null
  ],
  [
    "Semana actual:",
    "6 de 8",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "1. ANTECEDENTES — COMPARATIVO PLAN OC vs REALIDAD",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "SEMANA",
    "ETAPA",
    "PERSONAL\nPLAN OC",
    "PERSONAL\nREAL",
    "DIFERENCIA\nPERSONAS",
    "HH PLAN\n(12h×7d)",
    "HH REAL\n(12h×7d)",
    "HH\nEXCEDENTE"
  ],
  [
    "Sem 1",
    "Desinstalación",
    "14",
    "18",
    "4",
    "1176",
    "1512",
    "336"
  ],
  [
    "Sem 2",
    "Desinstalación",
    "14",
    "18",
    "4",
    "1176",
    "1512",
    "336"
  ],
  [
    "Sem 3",
    "Desinstalación",
    "14",
    "18",
    "4",
    "1176",
    "1512",
    "336"
  ],
  [
    "Sem 4",
    "Desinstalación",
    "14",
    "14",
    null,
    "1176",
    "1176",
    null
  ],
  [
    "Sem 5",
    "Servicios",
    "7",
    "14",
    "7",
    "588",
    "1176",
    "588"
  ],
  [
    "Sem 6",
    "Servicios",
    "7",
    "14",
    "7",
    "588",
    "1176",
    "588"
  ],
  [
    "Sem 7-8",
    "Cierre",
    "7",
    "7",
    null,
    "1176",
    "1176",
    null
  ],
  [
    "TOTAL",
    "8 semanas",
    null,
    null,
    null,
    "7056",
    "9240",
    "2184"
  ],
  [
    "RESUMEN DE IMPACTO",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "• HH contratadas en OC:",
    "7056",
    "horas-hombre",
    null,
    "• Excedente HH:",
    "2184",
    "HH (+31%)",
    null
  ],
  [
    "• HH reales ejecutadas:",
    "9240",
    "horas-hombre",
    null,
    "• Jornada:",
    "12 hrs/día × 7 días/sem",
    null,
    null
  ],
  [
    "Las condiciones operativas del sitio (equipo adicional, alcances no contemplados, rotación por jornada extendida) requirieron recursos superiores al plan original.",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "2. DESGLOSE DETALLADO DE COSTOS ADICIONALES",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "A) EXCEDENTES YA INCURRIDOS (Semanas 1-6)",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "CONCEPTO 1: RECURSO HUMANO ADICIONAL — SEMANAS 1 A 3",
    null,
    null,
    null,
    null,
    null,
    "MONTO:",
    "72858"
  ],
  [
    "Justificación:",
    "Las actividades de desinstalación requerían acceso simultáneo a múltiples equipos (Expander, Grúa Viajera, chillers). Para cumplir cronograma sin impactar",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    null,
    "la operación de planta, se requirió incrementar cuadrilla de 14 a 18 personas durante las primeras 3 semanas.",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Cálculo detallado:",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    null,
    "Descripción",
    "Cantidad",
    "Unidad",
    "Costo Unit.",
    "Subtotal",
    null,
    null
  ],
  [
    null,
    "Personal excedente sem 1",
    "4",
    "personas",
    "6071.5",
    "24286",
    null,
    null
  ],
  [
    null,
    "Personal excedente sem 2",
    "4",
    "personas",
    "6071.5",
    "24286",
    null,
    null
  ],
  [
    null,
    "Personal excedente sem 3",
    "4",
    "personas",
    "6071.5",
    "24286",
    null,
    null
  ],
  [
    null,
    "Total Concepto 1",
    null,
    null,
    null,
    "72858",
    null,
    null
  ],
  [
    "Base de costo:",
    "Nómina semanal $85,000 ÷ 14 personas = $6,071.43/persona/semana (incluye salario, IMSS, ISR, prestaciones)",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Evidencia:",
    "Listas de asistencia firmadas sem 1-3 | Nóminas semanales con CFDI | Bitácora de obra diaria",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "CONCEPTO 2: PERSONAL ETAPA 2 NO REDUCIDO — SEMANAS 5 Y 6",
    null,
    null,
    null,
    null,
    null,
    "MONTO:",
    "85001"
  ],
  [
    "Justificación:",
    "La OC contemplaba reducción a 7 personas a partir de sem 5. Por complejidad de reconexiones eléctricas, hidráulicas y de automatización,",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    null,
    "fue operativamente imposible reducir. Se mantuvo cuadrilla completa de 14 personas durante semanas 5 y 6.",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Cálculo detallado:",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    null,
    "Descripción",
    "Cantidad",
    "Unidad",
    "Costo Unit.",
    "Subtotal",
    null,
    null
  ],
  [
    null,
    "Personal excedente sem 5 (14-7 = 7 adic.)",
    "7",
    "personas",
    "6071.5",
    "42500.5",
    null,
    null
  ],
  [
    null,
    "Personal excedente sem 6 (14-7 = 7 adic.)",
    "7",
    "personas",
    "6071.5",
    "42500.5",
    null,
    null
  ],
  [
    null,
    "Total Concepto 2",
    null,
    null,
    null,
    "85001",
    null,
    null
  ],
  [
    "Base de costo:",
    "$85,000/sem ÷ 14 personas = $6,071.43/persona/semana (salario + IMSS + ISR + prestaciones)",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Evidencia:",
    "Listas de asistencia sem 5-6 | Nóminas con CFDI | Autorización verbal supervisor planta Carrier",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "CONCEPTO 3: TIEMPO EXTRA — JORNADAS DOMINICALES",
    null,
    null,
    null,
    null,
    null,
    "MONTO:",
    "87600"
  ],
  [
    "Justificación:",
    "Para mantener el cronograma de 8 semanas sin retraso, se trabajó en jornada dominical durante 6 semanas. Conforme al Art. 73 de la LFT,",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    null,
    "el trabajo en domingo se paga con prima del 100% (doble). Este concepto NO estaba previsto en la OC original.",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Cálculo detallado:",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    null,
    "Descripción",
    "Personal",
    "Domingos",
    "Hrs/dom",
    "Costo/hr doble",
    "Subtotal",
    null
  ],
  [
    null,
    "Domingos sem 1-3 (18 pers)",
    "18",
    "3",
    "12",
    "72.34",
    "46876.32",
    null
  ],
  [
    null,
    "Domingos sem 4-6 (14 pers)",
    "14",
    "3",
    "12",
    "72.34",
    "36459.36",
    null
  ],
  [
    null,
    "Total Concepto 3",
    null,
    null,
    null,
    null,
    "83335.68",
    null
  ],
  [
    "Base de costo:",
    "Salario diario $867 ÷ 12 hrs = $72.34/hr. Prima dominical = 100% = $72.34/hr extra. Total $87,600 (redondeado)",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Evidencia:",
    "Recibos de nómina con desglose T.E. dominical | Listas de asistencia dominicales firmadas | Bitácora de obra",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "CONCEPTO 4: NÓMINAS CAÍDAS Y ROTACIÓN DE PERSONAL",
    null,
    null,
    null,
    null,
    null,
    "MONTO:",
    "63048"
  ],
  [
    "Justificación:",
    "La jornada extendida (12 hrs/día × 7 días) y ubicación remota provocaron rotación de personal. Cada baja genera finiquito,",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    null,
    "liquidación proporcional y costo de re-contratación. 13 personas rotaron durante las 6 semanas de ejecución.",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Cálculo detallado:",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    null,
    "Descripción",
    "Cantidad",
    "Unidad",
    "Costo Unit.",
    "Subtotal",
    null,
    null
  ],
  [
    null,
    "Nóminas caídas (días sin cobertura por vacante)",
    "1",
    "global",
    "50100",
    "50100",
    null,
    null
  ],
  [
    null,
    "Liquidaciones y finiquitos (13 bajas)",
    "13",
    "personas",
    "996",
    "12948",
    null,
    null
  ],
  [
    null,
    "Total Concepto 4",
    null,
    null,
    null,
    "63048",
    null,
    null
  ],
  [
    "Evidencia:",
    "Finiquitos firmados | Avisos de baja ante IMSS | Recibos de liquidación | CFDIs de finiquitos | Nuevos contratos",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "CONCEPTO 5: DC-3 / CAPACITACIÓN PERSONAL NUEVO",
    null,
    null,
    null,
    null,
    null,
    "MONTO:",
    "40660"
  ],
  [
    "Justificación:",
    "Carrier requiere certificación DC-3 para todo personal que ingrese a planta. Cada rotación genera: baja de DC-3 anterior,",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    null,
    "alta de DC-3 nuevo, examen médico, inducción de seguridad industrial y dotación de EPP inicial. 13 personas nuevas ingresaron.",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Cálculo detallado:",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    null,
    "Descripción",
    "Cantidad",
    "Unidad",
    "Costo Unit.",
    "Subtotal",
    null,
    null
  ],
  [
    null,
    "DC-3 bajas (personal original que salió)",
    "13",
    "constancias",
    "800",
    "10400",
    null,
    null
  ],
  [
    null,
    "DC-3 nuevos + exámen médico + EPP inicial",
    "13",
    "ingresos",
    "1520",
    "19760",
    null,
    null
  ],
  [
    null,
    "Inducción seguridad industrial (tiempo improductivo)",
    "13",
    "personas",
    "500",
    "6500",
    null,
    null
  ],
  [
    null,
    "Total Concepto 5",
    null,
    null,
    null,
    "36660",
    null,
    null
  ],
  [
    "Evidencia:",
    "Constancias DC-3 (bajas y altas) | Resultados exámenes médicos | Registros de inducción firmados | Facturas EPP",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "CONCEPTO 6: DIFERENCIAL EN RENTA DE EQUIPOS",
    null,
    null,
    null,
    null,
    null,
    "MONTO:",
    "94000"
  ],
  [
    "Justificación:",
    "Los precios de mercado de renta de equipo pesado aumentaron entre la fecha de cotización (OC) y la fecha de contratación real.",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    null,
    "Este diferencial de precio es ajeno al contratista y refleja condiciones de mercado.",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Cálculo detallado:",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    null,
    "Equipo",
    "Cotizado OC",
    "Contratado Real",
    "Diferencial",
    null,
    null,
    null
  ],
  [
    null,
    "4 Plataformas de elevación (6 sem)",
    "Cotizado",
    "Real",
    "56000",
    null,
    null,
    null
  ],
  [
    null,
    "2 Montacargas 10,000 lb (6 sem)",
    "Cotizado",
    "Real",
    "16000",
    null,
    null,
    null
  ],
  [
    null,
    "Versa Lift 40/60 (renta semanal)",
    "Cotizado",
    "Real",
    "14000",
    null,
    null,
    null
  ],
  [
    null,
    "Grúa Telescópica 60 Ton (renta diaria)",
    "Cotizado",
    "Real",
    "8000",
    null,
    null,
    null
  ],
  [
    null,
    "Total Concepto 6",
    null,
    null,
    "94000",
    null,
    null,
    null
  ],
  [
    "Evidencia:",
    "Cotizaciones originales de OC vs contratos firmados con proveedores | Facturas de arrendamiento",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "CONCEPTO 7: HOSPEDAJE ADICIONAL",
    null,
    null,
    null,
    null,
    null,
    "MONTO:",
    "87000"
  ],
  [
    "Justificación:",
    "La OC contemplaba hospedaje para 14 personas en 1 casa. Al incrementar a 18, se rentó segunda casa. Además se pagaron",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    null,
    "renovaciones de contrato para semanas 7-8 para las 2 casas, ya que el arrendamiento original cubría solo 6 semanas.",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Cálculo detallado:",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    null,
    "Descripción",
    "Cantidad",
    "Unidad",
    "Costo Unit.",
    "Subtotal",
    null,
    null
  ],
  [
    null,
    "Casa 2 (personal adicional) sem 1-6",
    "6",
    "semanas",
    "7000",
    "42000",
    null,
    null
  ],
  [
    null,
    "Depósito / primer curso casa 2",
    "1",
    "global",
    "15000",
    "15000",
    null,
    null
  ],
  [
    null,
    "Renovación 2 casas sem 7-8",
    "2",
    "casas × 2 sem",
    "7500",
    "30000",
    null,
    null
  ],
  [
    null,
    "Total Concepto 7",
    null,
    null,
    null,
    "87000",
    null,
    null
  ],
  [
    "Evidencia:",
    "Contratos de arrendamiento (2 casas) | Recibos de pago | Facturas de hospedaje | Comprobante de renovación sem 7-8",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "SUBTOTAL A) EXCEDENTES YA INCURRIDOS (Sem 1-6)",
    null,
    null,
    null,
    null,
    null,
    null,
    "530167"
  ],
  [
    "B) GASTOS OPERATIVOS PENDIENTES — SEMANAS 7 Y 8 (Cierre de proyecto)",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "CONCEPTO 8: NÓMINA SEMANAS 7 Y 8",
    null,
    null,
    null,
    null,
    null,
    "MONTO:",
    "170000"
  ],
  [
    "Justificación:",
    "Nómina de 7 personas durante las 2 semanas restantes para cierre del proyecto. Incluye actividades de embalaje,",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    null,
    "limpieza, verificación y entrega de áreas. La nómina incluye: salario base, IMSS, ISR, prestaciones y jornada completa (12h×7d).",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Cálculo detallado:",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    null,
    "Descripción",
    "Cantidad",
    "Unidad",
    "Costo Unit.",
    "Subtotal",
    null,
    null
  ],
  [
    null,
    "Nómina sem 7 (7 personas)",
    "1",
    "semana",
    "85000",
    "85000",
    null,
    null
  ],
  [
    null,
    "Nómina sem 8 (7 personas)",
    "1",
    "semana",
    "85000",
    "85000",
    null,
    null
  ],
  [
    null,
    "Total Concepto 8",
    null,
    null,
    null,
    "170000",
    null,
    null
  ],
  [
    "Base de costo:",
    "Nómina semanal global: $85,000 (7 personas × 12h/día × 7 días = 588 HH/sem). Incluye carga social.",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "CONCEPTO 9: GASTOS OPERATIVOS SEM 7-8 (Viáticos + Gasolina + Van)",
    null,
    null,
    null,
    null,
    null,
    "MONTO:",
    "61200"
  ],
  [
    "Justificación:",
    "Gastos de manutención y transporte necesarios para operación diaria del personal en sitio durante las 2 semanas restantes.",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    null,
    "Descripción",
    "Cantidad",
    "Unidad",
    "Costo Unit.",
    "Subtotal",
    null,
    null
  ],
  [
    null,
    "Viáticos + gasolina (2 semanas)",
    "2",
    "semanas",
    "19000",
    "38000",
    null,
    null
  ],
  [
    null,
    "Renta Van (transporte personal a planta)",
    "1",
    "global",
    "23200",
    "23200",
    null,
    null
  ],
  [
    null,
    "Total Concepto 9",
    null,
    null,
    null,
    "61200",
    null,
    null
  ],
  [
    "Evidencia:",
    "Recibos de viáticos | Tickets de gasolina | Contrato renta Van + factura ($23,200)",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "CONCEPTO 10: VERSA LIFT 40/60 — 4 DÍAS",
    null,
    null,
    null,
    null,
    null,
    "MONTO:",
    "208800"
  ],
  [
    "Justificación:",
    "Equipo Versa Lift 40/60 requerido para maniobras de desmantelamiento y carga de equipos pesados (Expander ~17 TON,",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    null,
    "Grúa Viajera, componentes de Chiller). Único equipo con capacidad de carga y alcance para estas maniobras en espacios cerrados.",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "Cálculo detallado:",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    null,
    "Descripción",
    "Cantidad",
    "Unidad",
    "Costo Unit.",
    "Subtotal",
    null,
    null
  ],
  [
    null,
    "Renta Versa Lift 40/60 Día 1",
    "1",
    "día",
    "52200",
    "52200",
    null,
    null
  ],
  [
    null,
    "Renta Versa Lift 40/60 Día 2",
    "1",
    "día",
    "52200",
    "52200",
    null,
    null
  ],
  [
    null,
    "Renta Versa Lift 40/60 Día 3",
    "1",
    "día",
    "52200",
    "52200",
    null,
    null
  ],
  [
    null,
    "Renta Versa Lift 40/60 Día 4",
    "1",
    "día",
    "52200",
    "52200",
    null,
    null
  ],
  [
    null,
    "Total Concepto 10",
    null,
    null,
    null,
    "208800",
    null,
    null
  ],
  [
    "Evidencia:",
    "Contrato de renta Versa Lift | Cotización del proveedor | Facturas diarias de renta",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "CONCEPTO 11: GRÚA TELESCÓPICA 60 TON — 4 DÍAS",
    null,
    null,
    null,
    null,
    null,
    "MONTO:",
    "180000"
  ],
  [
    "Justificación:",
    "Grúa telescópica 60 TON requerida para izaje de equipos pesados: Expander (~17 TON), Grúa Viajera y componentes de Chiller.",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    null,
    "Maniobras de izaje desde interior de nave hacia plataformas de carga. Incluye operador certificado y maniobras.",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    null,
    "Descripción",
    "Cantidad",
    "Unidad",
    "Costo Unit.",
    "Subtotal",
    null,
    null
  ],
  [
    null,
    "Renta Grúa 60 TON + operador (4 días)",
    "4",
    "días",
    "45000",
    "180000",
    null,
    null
  ],
  [
    null,
    "Total Concepto 11",
    null,
    null,
    null,
    "180000",
    null,
    null
  ],
  [
    "Evidencia:",
    "Contrato de renta Grúa 60 TON | Cotización del proveedor | Facturas diarias de renta | Plan de maniobras de izaje",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "SUBTOTAL B) GASTOS PENDIENTES SEMANAS 7-8",
    null,
    null,
    null,
    null,
    null,
    null,
    "620000"
  ],
  [
    "3. RESUMEN CONSOLIDADO DE COSTOS ADICIONALES",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "No.",
    "CONCEPTO",
    null,
    null,
    "SEMANAS",
    "BASE DE CÁLCULO",
    "ESTATUS",
    "MONTO"
  ],
  [
    null,
    "SECCIÓN A: EXCEDENTES YA INCURRIDOS (Sem 1-6)",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "1",
    "Recurso humano adicional (18 vs 14 plan)",
    null,
    null,
    "2026-01-03 00:00:00",
    "4 pers × 3 sem × $6,071",
    "Pagado",
    "72858"
  ],
  [
    "2",
    "Personal Etapa 2 no reducido (14 vs 7 plan)",
    null,
    null,
    "2026-05-06 00:00:00",
    "7 pers × 2 sem × $6,071",
    "Pagado",
    "85001"
  ],
  [
    "3",
    "Tiempo extra jornadas dominicales",
    null,
    null,
    "2026-01-06 00:00:00",
    "6 dom × prom 16 pers × 12h × doble",
    "Pagado",
    "87600"
  ],
  [
    "4",
    "Nóminas caídas y rotación (13 bajas)",
    null,
    null,
    "2026-01-06 00:00:00",
    "Finiquitos + recontrataciones",
    "Pagado",
    "63048"
  ],
  [
    "5",
    "DC-3 / Capacitación personal nuevo (13 ingresos)",
    null,
    null,
    "2026-01-06 00:00:00",
    "13 DC-3 + examen + EPP + inducción",
    "Pagado",
    "40660"
  ],
  [
    "6",
    "Diferencial renta de equipos vs cotización OC",
    null,
    null,
    "2026-01-06 00:00:00",
    "4 equipos con sobreprecio mercado",
    "Pagado",
    "94000"
  ],
  [
    "7",
    "Hospedaje adicional (2a casa + renovación)",
    null,
    null,
    "2026-01-08 00:00:00",
    "Renta + depósito + renovación 2 casas",
    "Pagado",
    "87000"
  ],
  [
    null,
    "SUBTOTAL A",
    null,
    null,
    null,
    null,
    null,
    "530167"
  ],
  [
    null,
    "SECCIÓN B: GASTOS PENDIENTES SEMANAS 7-8",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "8",
    "Nómina sem 7-8 (7 personas)",
    null,
    null,
    "2026-07-08 00:00:00",
    "2 sem × $85,000/sem",
    "Pendiente",
    "170000"
  ],
  [
    "9",
    "Viáticos + gasolina + Van",
    null,
    null,
    "2026-07-08 00:00:00",
    "2 sem × $19K + Van $23,200",
    "Pendiente",
    "61200"
  ],
  [
    "10",
    "Versa Lift 40/60 (4 días)",
    null,
    null,
    "2026-07-08 00:00:00",
    "4 días × $52,200/día",
    "Pendiente",
    "208800"
  ],
  [
    "11",
    "Grúa Telescópica 60 TON (4 días)",
    null,
    null,
    "2026-07-08 00:00:00",
    "4 días × $45,000/día",
    "Pendiente",
    "180000"
  ],
  [
    null,
    "SUBTOTAL B",
    null,
    null,
    null,
    null,
    null,
    "620000"
  ],
  [
    null,
    "TOTAL ADICIONAL (antes de IVA)",
    null,
    null,
    null,
    null,
    null,
    "1150167"
  ],
  [
    null,
    "IVA (16%)",
    null,
    null,
    null,
    null,
    null,
    "184026.72"
  ],
  [
    null,
    "TOTAL ADICIONAL CON IVA",
    null,
    null,
    null,
    null,
    null,
    "1334193.72"
  ],
  [
    "4. DOCUMENTACIÓN DE SOPORTE DISPONIBLE",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    "CAT.",
    "TIPO DE DOCUMENTO",
    null,
    "APLICA A CONCEPTO(S)",
    null,
    "FORMATO",
    null,
    null
  ],
  [
    "1",
    "Nóminas semanales con CFDI y desglose de T.E.",
    null,
    "1, 2, 3, 4, 8",
    null,
    "PDF / XML",
    null,
    null
  ],
  [
    "2",
    "Listas de asistencia diarias firmadas por personal y supervisor",
    null,
    "1, 2, 3",
    null,
    "Físico / Scan",
    null,
    null
  ],
  [
    "3",
    "Finiquitos firmados + avisos de baja IMSS + nuevos contratos",
    null,
    "4",
    null,
    "PDF",
    null,
    null
  ],
  [
    "4",
    "Constancias DC-3 (bajas y altas) + exámenes médicos + registros inducción",
    null,
    "5",
    null,
    "PDF / Físico",
    null,
    null
  ],
  [
    "5",
    "Cotizaciones originales OC vs contratos firmados con proveedores de equipo",
    null,
    "6",
    null,
    "PDF",
    null,
    null
  ],
  [
    "6",
    "Contratos de arrendamiento de hospedaje + recibos + comprobante renovación",
    null,
    "7",
    null,
    "PDF / Físico",
    null,
    null
  ],
  [
    "7",
    "Contrato renta Van + factura | Recibos de viáticos y gasolina",
    null,
    "9",
    null,
    "PDF / CFDI",
    null,
    null
  ],
  [
    "8",
    "Contratos renta Versa Lift + Grúa 60 TON + facturas diarias",
    null,
    "10, 11",
    null,
    "PDF / CFDI",
    null,
    null
  ],
  [
    "9",
    "Bitácora de obra diaria + registro fotográfico de maniobras",
    null,
    "Todos",
    null,
    "Físico / Digital",
    null,
    null
  ],
  [
    "ELABORÓ",
    null,
    null,
    null,
    "AUTORIZÓ",
    null,
    null,
    null
  ],
  [
    "________________________",
    null,
    null,
    null,
    "________________________",
    null,
    null,
    null
  ]
];

// ──────────────────────────────────────────────────────────────
// 29. MAPA DE FLUJOS DE TRABAJO (32 flujos)
// ──────────────────────────────────────────────────────────────
const FLUJOS_TRABAJO_MAPA = [
  {
    "num": "#",
    "grupo": "GRUPO",
    "hoja": "HOJA",
    "proposito": "PROPÓSITO",
    "input": "DATOS QUE RECIBE (INPUT)",
    "output": "DATOS QUE ENTREGA (OUTPUT)",
    "frecuencia": "FRECUENCIA DE USO",
    "acciones": "ACCIONES CLAVE"
  },
  {
    "num": "1",
    "grupo": "GENERAL",
    "hoja": "ÍNDICE",
    "proposito": "Directorio maestro del libro. Lista todas las hojas con su grupo, descripción y estado de errores.",
    "input": "— (manual)",
    "output": "Vista rápida del estado de cada pestaña (✓ OK / ⚠ #REF!)",
    "frecuencia": "Al inicio de cada sesión",
    "acciones": "Consultar estado general; actualizar fecha después de cambios importantes"
  },
  {
    "num": "2",
    "grupo": "GENERAL",
    "hoja": "⚙️ CONTROL PROYECTO",
    "proposito": "Tablero de control semanal reutilizable. Compara personal plan vs real, calcula HH, costo, desviación, avance y saldo vs OC por semana.",
    "input": "OC ($2,364,441), costo/persona/semana, personal plan y real (manual)",
    "output": "Dashboard: utilidad estimada, margen, semáforo de alertas 🟢🟡🔴, adicional a cobrar",
    "frecuencia": "Semanal",
    "acciones": "Actualizar columnas PERS REAL y AVANCE % cada semana; revisar columna ALERTA"
  },
  {
    "num": "3",
    "grupo": "GENERAL",
    "hoja": "Claude Log",
    "proposito": "Bitácora automática de interacciones con Claude. Registra solicitudes, acciones, decisiones y resultados.",
    "input": "Generado automáticamente por Claude",
    "output": "Historial auditable de todos los cambios realizados por IA",
    "frecuencia": "Automático (cada turno)",
    "acciones": "Consultar para rastrear qué cambios hizo Claude y por qué"
  },
  {
    "num": "4",
    "grupo": "PRESUPUESTO",
    "hoja": "Presupuesto Completo",
    "proposito": "Presupuesto maestro del proyecto Iron Cast. Resume costos laborales, operativos, equipos y calcula utilidad libre y margen.",
    "input": "Nómina Consolidada (B7-B8), Mi Utilidad (B16, D16), parámetros editables (I5:I8)",
    "output": "Total gastos ($1,427,757), Utilidad libre ($936,684), Margen (39.6%), desglose final JG vs MICSA",
    "frecuencia": "Cuando cambian costos",
    "acciones": "Editar celdas amarillas de parámetros; verificar que B28 y B31 cuadren"
  },
  {
    "num": "5",
    "grupo": "PRESUPUESTO",
    "hoja": "DESGLOSE PRESUPUESTO",
    "proposito": "Desglose por categoría del presupuesto asignado: hospedaje, documentación, equipos y seguridad.",
    "input": "Valores del presupuesto original (Presupuesto Completo parámetros)",
    "output": "Presupuesto por rubro: Hosp/Trasl ($472,600), Doc/Herr ($72,000), Equipos ($576,404), Seguridad ($22,890)",
    "frecuencia": "Referencia estática",
    "acciones": "Comparar vs DESGLOSE GASTO REAL para medir desviaciones"
  },
  {
    "num": "6",
    "grupo": "PRESUPUESTO",
    "hoja": "DESGLOSE GASTO REAL",
    "proposito": "Desglose del gasto real por categoría incluyendo costos laborales completos.",
    "input": "Datos reales de nómina, hospedaje, herramientas, equipos, EPP",
    "output": "Gasto real total ($1,339,980); subtotales por categoría con nómina incluida",
    "frecuencia": "Cuando se registran gastos",
    "acciones": "Actualizar montos reales; comparar contra DESGLOSE PRESUPUESTO"
  },
  {
    "num": "7",
    "grupo": "PRESUPUESTO",
    "hoja": "Presupuesto vs Real",
    "proposito": "Comparativo detallado presupuesto E1+E2 vs gasto real con semáforos de estado por línea. Incluye lista de excedentes adicionales.",
    "input": "Presupuestos E1 y E2, gastos reales por rubro",
    "output": "Diferencias por línea, estados (✅/⚠️/➖), total proyecto ($117,206 ahorro), lista de 11 gastos adicionales",
    "frecuencia": "Semanal / al cierre",
    "acciones": "Revisar columna ESTADO; identificar rubros ⚠️ Excedido para acciones correctivas"
  },
  {
    "num": "8",
    "grupo": "UTILIDAD",
    "hoja": "Mi Utilidad",
    "proposito": "Análisis de ganancia personal (JG). Compara precio de venta al cliente vs costo real por cada servicio para determinar ganancia neta.",
    "input": "Precios de venta (fijos), costos reales por servicio",
    "output": "Ganancia por servicio (D6:D15), total ganancia JG ($372,700), margen por línea",
    "frecuencia": "Cuando cambian costos",
    "acciones": "Actualizar columna C (Mi Costo); verificar que D20 refleje la ganancia correcta"
  },
  {
    "num": "9",
    "grupo": "UTILIDAD",
    "hoja": "Rentabilidad del Proyecto",
    "proposito": "Marco estratégico: metas de rentabilidad, estrategias de ahorro, análisis de riesgos y KPIs semanales.",
    "input": "OC, utilidad objetivo, parámetros de riesgo (manual)",
    "output": "Ahorro potencial ($28,500), matriz de riesgos con probabilidad/impacto, 8 KPIs con metas",
    "frecuencia": "Referencia estratégica",
    "acciones": "Revisar KPIs en juntas semanales; actualizar probabilidades de riesgo según avance"
  },
  {
    "num": "10",
    "grupo": "NÓMINA",
    "hoja": "Nómina Consolidada",
    "proposito": "Control detallado de nómina por empleado y por periodo (semanas 1-2, 3-4, 5-8, T.E. 24 sem). Registra nombre, puesto y pagos.",
    "input": "Pagos reales a cada empleado por periodo",
    "output": "Total nómina directa por empleado (columna H), alimenta → Presupuesto Completo B7",
    "frecuencia": "Cada quincena/semana",
    "acciones": "Registrar pagos por semana; verificar que totales coincidan con Presupuesto Completo"
  },
  {
    "num": "11",
    "grupo": "NÓMINA",
    "hoja": "Detalle Gastos Reales",
    "proposito": "Registro detallado de gastos de febrero: desglose de hospedaje (14 registros) y resumen semanal de nómina+viáticos.",
    "input": "Recibos, facturas y comprobantes de gasto",
    "output": "Total hospedaje ($84,940), resumen semanal nómina+viáticos por semana",
    "frecuencia": "Semanal",
    "acciones": "Registrar cada gasto con fecha y monto; verificar totales vs DESGLOSE GASTO REAL"
  },
  {
    "num": "12",
    "grupo": "COSTOS",
    "hoja": "Herramientas",
    "proposito": "Inventario detallado de herramientas y equipos menores con precios unitarios y totales por categoría.",
    "input": "Cotizaciones de proveedores y compras realizadas",
    "output": "Costo total herramientas, alimenta → Mi Utilidad C10 y Presupuesto Completo",
    "frecuencia": "Al comprar herramienta",
    "acciones": "Agregar nuevas compras; verificar vs presupuesto de $40,000"
  },
  {
    "num": "13",
    "grupo": "COSTOS",
    "hoja": "DC3 Capacitación",
    "proposito": "Matriz de capacitación DC3 por puesto. Muestra qué cursos requiere cada categoría de personal.",
    "input": "Requerimientos normativos y plan de capacitación",
    "output": "Total DC3 requeridos (32), matriz de cursos×puestos",
    "frecuencia": "Al inicio / rotación",
    "acciones": "Marcar cursos completados; agregar personal nuevo por rotación"
  },
  {
    "num": "14",
    "grupo": "COSTOS",
    "hoja": "EPP Seguridad",
    "proposito": "Cálculo de precio venta vs costo real del EPP. Determina margen de utilidad en equipo de protección.",
    "input": "Cotización de proveedor, precio de venta al cliente",
    "output": "Margen EPP (actualmente $0), total venta ($10,440) vs costo ($10,440)",
    "frecuencia": "Al cotizar EPP",
    "acciones": "Actualizar costos si cambian proveedores; verificar margen"
  },
  {
    "num": "15",
    "grupo": "COSTOS",
    "hoja": "Salud",
    "proposito": "Control de costos de salud: antidoping y exámenes médicos (costo vs venta al cliente).",
    "input": "Costos unitarios de laboratorio, cantidad de personal",
    "output": "Total costo salud ($16,100), comparativo costo vs venta",
    "frecuencia": "Al inicio / rotación",
    "acciones": "⚠️ Verificar costos unitarios C4-C5 (actualmente estimados, marcados amarillo)"
  },
  {
    "num": "16",
    "grupo": "COSTOS",
    "hoja": "Renta de Equipos (2)",
    "proposito": "Catálogo completo de renta de equipos: montacargas, plataformas, transporte. Sección superior (cotizador USD/MXN) y sección inferior (equipo móvil con 3 proveedores).",
    "input": "Cotizaciones de proveedores, tipo de cambio B3, días/semanas/meses de uso (H:J)",
    "output": "Subtotales por equipo (K), con IVA (L) y admin 15% (M), total sección inferior ($576,404 en J39)",
    "frecuencia": "Al rentar equipo",
    "acciones": "Actualizar tipo de cambio B3; llenar H:J cuando se rente equipo; comparar 3 proveedores en sección inferior"
  },
  {
    "num": "17",
    "grupo": "CARRIER",
    "hoja": "Proyecto Carrier - ER",
    "proposito": "Estado de Resultados del Proyecto Carrier. Análisis financiero con ingreso, costos desglosados y margen real.",
    "input": "Ingreso total ($2,164,441), costos reales depurados",
    "output": "Margen real sobre venta (41.4%), desglose mano de obra ($934,452), hospedaje ($122,407), equipos ($287,000)",
    "frecuencia": "Mensual / al cierre",
    "acciones": "Actualizar costos reales conforme se conozcan; verificar margen vs meta (≥20%)"
  },
  {
    "num": "18",
    "grupo": "CARRIER",
    "hoja": "Hospedaje Carrier",
    "proposito": "Cálculo de hospedaje Etapa 1: $850/noche × 6 noches × 14 personas × 4 semanas.",
    "input": "Parámetros: costo/noche, noches/semana, personas, semanas (B6:B9)",
    "output": "Total hospedaje Etapa 1 ($285,600)",
    "frecuencia": "Al planear etapa",
    "acciones": "Modificar B6:B9 para escenarios diferentes; resultado en B13"
  },
  {
    "num": "19",
    "grupo": "CARRIER",
    "hoja": "Distribución Anticipo",
    "proposito": "Plan de distribución del anticipo de $1,017,000 para cubrir 1 mes de operación. Asigna por categoría.",
    "input": "Anticipo recibido, costos semanales por rubro",
    "output": "Gasto mensual ($923,311), saldo disponible ($93,689), % utilizado (90.8%)",
    "frecuencia": "Al recibir anticipo",
    "acciones": "Verificar que el saldo cubra imprevistos; ajustar si cambian costos semanales"
  },
  {
    "num": "20",
    "grupo": "CARRIER",
    "hoja": "Distribución Estimación 40%",
    "proposito": "Plan de distribución de la estimación 40% ($1,017,000) — estructura idéntica a Distribución Anticipo.",
    "input": "Estimación recibida, mismos costos semanales",
    "output": "Mismo análisis: gasto mensual, saldo disponible, % utilizado",
    "frecuencia": "Al recibir estimación",
    "acciones": "Comparar vs Distribución Anticipo; ajustar por costos reales actualizados"
  },
  {
    "num": "21",
    "grupo": "CARRIER",
    "hoja": "Distribución por Cuentas",
    "proposito": "Asignación del anticipo a 4 cuentas bancarias: BBVA (nómina), AFIRME (operación), SANTANDER (materiales), BBVA (equipos).",
    "input": "Montos de Distribución Anticipo por categoría",
    "output": "Total por banco: Nómina ($279,956), Operación ($147,900), Otros ($35,515), Equipos ($459,940)",
    "frecuencia": "Al recibir fondos",
    "acciones": "Transferir a cada cuenta según la distribución; verificar columna ✓"
  },
  {
    "num": "22",
    "grupo": "CARRIER",
    "hoja": "Gastos Reales Estimación 40%",
    "proposito": "Seguimiento de gastos reales contra el presupuesto de la estimación 40%. Formato para registrar cada gasto con factura.",
    "input": "Facturas y comprobantes reales por categoría",
    "output": "Diferencia presupuestado vs real por rubro (pendiente de llenar)",
    "frecuencia": "Semanal",
    "acciones": "Registrar cada gasto con proveedor, fecha y factura; verificar subtotales"
  },
  {
    "num": "23",
    "grupo": "CARRIER",
    "hoja": "Estado de Cuentas Bancarias",
    "proposito": "Control de saldos bancarios de los 4 bancos del proyecto. Calcula meses cubiertos y saldo proyectado.",
    "input": "Saldos bancarios actuales (actualizar manualmente)",
    "output": "Total disponible ($1,381,811), meses cubiertos (1.5), estado SUPERÁVIT/DÉFICIT",
    "frecuencia": "Semanal",
    "acciones": "Actualizar saldos en D9:D12; verificar semáforo de estado"
  },
  {
    "num": "24",
    "grupo": "DOCUMENTACIÓN",
    "hoja": "Clasificación CFDIs",
    "proposito": "Clasificación de facturas electrónicas (CFDIs) por proveedor, categoría y tipo (Proyecto vs Adicional).",
    "input": "XMLs de CFDIs descargados del SAT",
    "output": "Gastos categorizados: Viáticos, Herramienta, EPP, Consumibles, Traslados, Sin clasificar",
    "frecuencia": "Semanal",
    "acciones": "Clasificar CFDIs pendientes (columna H TIPO); verificar que sumen vs Detalle Gastos Reales"
  },
  {
    "num": "25",
    "grupo": "DOCUMENTACIÓN",
    "hoja": "Plan de Trabajo",
    "proposito": "Gantt semanal del proyecto: 8 semanas, 2 etapas. Compara personal/costo plan vs real, avance planificado vs real.",
    "input": "Plan original, datos reales semanales",
    "output": "Desviación total: +$229,000, +26 personas. Impacto económico de desviación",
    "frecuencia": "Semanal",
    "acciones": "Actualizar PERSONAL REAL, COSTO REAL y AVANCE REAL cada semana"
  },
  {
    "num": "26",
    "grupo": "DOCUMENTACIÓN",
    "hoja": "Bitácora Consolidada",
    "proposito": "Reporte ejecutivo para el cliente: avance por semana, estatus de embarques, resumen narrativo.",
    "input": "Datos de Plan de Trabajo, estatus de embarques",
    "output": "Reporte formal: avance 85% semana 6, estatus por equipo, narrativa profesional",
    "frecuencia": "Semanal",
    "acciones": "Actualizar con datos de la semana; usar como base para Borrador Correo"
  },
  {
    "num": "27",
    "grupo": "DOCUMENTACIÓN",
    "hoja": "Borrador Correo",
    "proposito": "Plantilla de correo electrónico listo para enviar al cliente con la bitácora consolidada.",
    "input": "Bitácora Consolidada (contenido narrativo)",
    "output": "Correo formateado listo para copiar/pegar",
    "frecuencia": "Semanal",
    "acciones": "Actualizar destinatarios, semana y contenido; copiar y enviar por email"
  },
  {
    "num": "28",
    "grupo": "DOCUMENTACIÓN",
    "hoja": "Desglose Adicionales",
    "proposito": "Justificación detallada de costos adicionales no contemplados en OC original. Solicitud formal de Orden de Cambio ($1,150,167 + IVA).",
    "input": "Plan de Trabajo (desviación HH), costos reales adicionales",
    "output": "Monto adicional justificado, comparativo plan vs realidad, documentación para negociación",
    "frecuencia": "Al negociar adicionales",
    "acciones": "Completar justificación por rubro; presentar al cliente como solicitud formal"
  },
  {
    "num": "29",
    "grupo": "ADMIN",
    "hoja": "Administración del Proyecto",
    "proposito": "Manual operativo: control semanal de gastos, checklist obligatorio, sistema de alertas semáforo, documentación por fase.",
    "input": "— (guía de referencia)",
    "output": "Límites de gasto semanal, checklist 8 puntos, semáforo 🟢🟡🔴, docs por fase",
    "frecuencia": "Referencia permanente",
    "acciones": "Usar checklist cada semana; escalar si semáforo es 🔴"
  },
  {
    "num": "30",
    "grupo": "ADMIN",
    "hoja": "Análisis Gestión",
    "proposito": "Análisis de la estructura del cobro de gestión (1% OC). Verifica si está incluido en la OC y no hay duplicación.",
    "input": "Mi Utilidad (B18, F18), Presupuesto Completo (totales)",
    "output": "Confirmación: gestión SÍ incluida en OC, % real de gestión (1.06%)",
    "frecuencia": "Referencia",
    "acciones": "Consultar si hay dudas sobre cómo se cobra la gestión"
  },
  {
    "num": "31",
    "grupo": "ADMIN",
    "hoja": "Resumen Gestión",
    "proposito": "Verificación cruzada del cobro de gestión: confirma que aparece como gasto, no hay duplicación y utilidad cuadra.",
    "input": "Análisis Gestión, Mi Utilidad, Presupuesto Completo",
    "output": "4 puntos de verificación: ✓ En gastos, ✓ Incluido en total, ✓ Post-gestión, Verificar duplicación",
    "frecuencia": "Referencia",
    "acciones": "Usar para auditoría; verificar manualmente el punto 4"
  }
];

// ──────────────────────────────────────────────────────────────
// 30. ARQUITECTURA COTIZADOR — 10 MÓDULOS (58 registros)
// ──────────────────────────────────────────────────────────────
const ARQUITECTURA_COTIZADOR = [
  {
    "modulo": "MÓDULO",
    "nombre": "NOMBRE",
    "funcion": "FUNCIÓN",
    "inputs": "INPUTS EDITABLES",
    "output": "OUTPUT",
    "filaHoja2": "FILA HOJA2",
    "datosClave": "DATOS CLAVE",
    "conectaCon": "CONECTA CON"
  },
  {
    "modulo": "1",
    "nombre": "Parámetros del Proyecto",
    "funcion": "Definir proyecto, ubicación, duración, tipo trabajo, parámetros financieros",
    "inputs": "Nombre, cliente, ciudad, duración (sem), días laborales, tipo trabajo, alturas sí/no, soldadura sí/no",
    "output": "Contexto del proyecto para todos los módulos",
    "filaHoja2": "Filas 25-43",
    "datosClave": "Indirectos 10%, Admin 5%, Utilidad 10%, Contingencia 10%",
    "conectaCon": "→ Todos los módulos"
  },
  {
    "modulo": "1B",
    "nombre": "Geolocalización (Google Maps)",
    "funcion": "Calcular distancia Base (Monclova) → Planta automáticamente",
    "inputs": "Ciudad destino, dirección planta, factor ida/vuelta (default 2)",
    "output": "km_total = distancia × factor (ej: 188km × 2 = 376km)",
    "filaHoja2": "Filas 330-395",
    "datosClave": "API Distance Matrix. Base: Monclova, Coahuila",
    "conectaCon": "→ Módulo Transporte"
  },
  {
    "modulo": "2",
    "nombre": "Personal y Nómina",
    "funcion": "Definir personal del proyecto por puesto y cantidad",
    "inputs": "Puesto, cantidad, salario semanal (editables)",
    "output": "Costo_personal = Σ(cantidad × salario)",
    "filaHoja2": "Filas 46-60",
    "datosClave": "Puestos: Mecánico, Soldador, Rigger, Supervisor",
    "conectaCon": "→ EPP Automático, → Resumen"
  },
  {
    "modulo": "3",
    "nombre": "EPP Automático (Base)",
    "funcion": "Kit EPP obligatorio automático al agregar persona",
    "inputs": "Precios del catálogo (editables)",
    "output": "EPP_total = trabajadores × $674.34 (con 10% reposición)",
    "filaHoja2": "Filas 63-88",
    "datosClave": "7 items: guante, lente, tapón, casco, chaleco, camisola, manga = $613.04 + 10%",
    "conectaCon": "← Personal, → Resumen"
  },
  {
    "modulo": "3B",
    "nombre": "EPP por Puesto",
    "funcion": "EPP adicional según tipo de puesto seleccionado",
    "inputs": "Activar/desactivar por proyecto. Precios editables",
    "output": "Costo extra por soldador ($401), alturas ($1,577), químico ($211)",
    "filaHoja2": "Filas 90-118",
    "datosClave": "Soldador: Kevlar+mandil+polainas. Alturas: arnés+línea vida+punto fijo",
    "conectaCon": "← Personal, → Resumen"
  },
  {
    "modulo": "4",
    "nombre": "Consumibles y Materiales",
    "funcion": "Catálogo de consumibles de corte/desmontaje con cantidades editables",
    "inputs": "Cantidad (default 1, editable), precio unitario, factor consumo 1.10",
    "output": "Consumibles_real ≈ $48,208/semana (con 10% contingencia)",
    "filaHoja2": "Filas 120-148",
    "datosClave": "9+ items principales: oxígeno, acetileno, sierras, discos, gas montacargas, etc.",
    "conectaCon": "→ Resumen"
  },
  {
    "modulo": "5",
    "nombre": "Equipos y Transporte",
    "funcion": "Flota de vehículos con ON/OFF, costo/km, viajes editables",
    "inputs": "Unidad (ON/OFF), cantidad, costo/km, km viaje, # viajes, gasolina semanal",
    "output": "Transporte_semana = $12,607 + mantenimiento prorrateado",
    "filaHoja2": "Filas 148-165",
    "datosClave": "4 vehículos: Suburban verde/negra, Urban, Ford 2015",
    "conectaCon": "← Geolocalización, → Resumen"
  },
  {
    "modulo": "5B",
    "nombre": "Transporte Parametrizable",
    "funcion": "Módulo rediseñado: todo activable/desactivable y editable",
    "inputs": "8 submódulos con campos 100% editables",
    "output": "costo_total = Σ(unidades) + gasolina + mantenimiento × 1.10",
    "filaHoja2": "Filas 600-806",
    "datosClave": "Incluye: viajes iniciales, frecuencia semanal, contingencia 10%",
    "conectaCon": "← Geolocalización, → Resumen"
  },
  {
    "modulo": "6",
    "nombre": "Contingencias",
    "funcion": "Reservas económicas por categoría de riesgo",
    "inputs": "% o monto fijo por categoría (editable)",
    "output": "Total contingencias = 8-15% del proyecto",
    "filaHoja2": "Filas 168-190",
    "datosClave": "5 categorías: planta, seguridad, logística, equipos, admin",
    "conectaCon": "→ Resumen"
  },
  {
    "modulo": "—",
    "nombre": "Administración",
    "funcion": "Costos indirectos de gestión del proyecto",
    "inputs": "% editable (default 5%)",
    "output": "Admin = costo proyecto × 5%",
    "filaHoja2": "Filas 200-220",
    "datosClave": "Supervisión, reportes, bitácoras, software, IA, teléfonos, laptops",
    "conectaCon": "→ Resumen"
  },
  {
    "modulo": "—",
    "nombre": "Utilidad",
    "funcion": "Margen de ganancia del proyecto",
    "inputs": "% editable (default 10-12%)",
    "output": "Utilidad = subtotal × 10-12%",
    "filaHoja2": "Filas 225-235",
    "datosClave": "Regla: nunca menor de 10%",
    "conectaCon": "→ Precio final"
  },
  {
    "modulo": "—",
    "nombre": "Resumen Final / Salida",
    "funcion": "Suma todos los módulos → precio al cliente",
    "inputs": "N/A (calculado)",
    "output": "Precio_venta = costos + contingencias + admin + utilidad",
    "filaHoja2": "Filas 240-290",
    "datosClave": "El cliente solo ve: mano de obra, equipos, consumibles, logística, transporte",
    "conectaCon": "← Todos"
  },
  {
    "modulo": "PASO",
    "nombre": "ACCIÓN",
    "funcion": "QUIÉN",
    "inputs": "INPUT",
    "output": "OUTPUT",
    "filaHoja2": "AUTOMATIZACIÓN",
    "datosClave": "REGLA CLAVE",
    "conectaCon": "DIAGRAMA"
  },
  {
    "modulo": "1️⃣",
    "nombre": "Parámetros proyecto",
    "funcion": "Cotizador",
    "inputs": "Nombre, cliente, ciudad, duración, tipo trabajo",
    "output": "Contexto global del proyecto",
    "filaHoja2": "Campos de formulario",
    "datosClave": "Todo editable; nada fijo",
    "conectaCon": "📋 →"
  },
  {
    "modulo": "2️⃣",
    "nombre": "Ubicación planta (Google Maps)",
    "funcion": "Sistema",
    "inputs": "Ciudad destino, dirección planta",
    "output": "Distancia en km (ej: 188 km Monclova→Saltillo)",
    "filaHoja2": "API Google Maps Distance Matrix",
    "datosClave": "Si no hay API, campo manual editable",
    "conectaCon": "📍 →"
  },
  {
    "modulo": "3️⃣",
    "nombre": "Distancia base calculada",
    "funcion": "Sistema",
    "inputs": "Distancia × factor (default ×2 ida/vuelta)",
    "output": "km_total del viaje (ej: 376 km)",
    "filaHoja2": "Fórmula automática",
    "datosClave": "Factor editable (puede ser 1 si solo ida)",
    "conectaCon": "📏 →"
  },
  {
    "modulo": "4️⃣",
    "nombre": "Transporte editable",
    "funcion": "Cotizador",
    "inputs": "Unidades ON/OFF, cantidad, costo/km, viajes",
    "output": "Costo transporte por unidad y total",
    "filaHoja2": "Tabla con ON/OFF por unidad",
    "datosClave": "Cada unidad gasta diferente → costo/km individual",
    "conectaCon": "🚛 →"
  },
  {
    "modulo": "5️⃣",
    "nombre": "Personal por puesto",
    "funcion": "Cotizador",
    "inputs": "Puesto, cantidad, salario semanal",
    "output": "Costo personal semanal",
    "filaHoja2": "Tabla editable de puestos",
    "datosClave": "Al agregar persona → dispara EPP automático",
    "conectaCon": "👷 →"
  },
  {
    "modulo": "6️⃣",
    "nombre": "EPP automático",
    "funcion": "Sistema",
    "inputs": "# personas + puesto seleccionado",
    "output": "Costo EPP base (~$674/pers) + EPP puesto",
    "filaHoja2": "3 capas: base auto, puesto auto, especial manual",
    "datosClave": "Incluye 10% reposición automática",
    "conectaCon": "🦺 →"
  },
  {
    "modulo": "7️⃣",
    "nombre": "Consumibles",
    "funcion": "Cotizador",
    "inputs": "Catálogo con cantidad editable, precio unitario",
    "output": "Total consumibles × factor 1.10",
    "filaHoja2": "Catálogo 36+ ítems con cantidades default en 1",
    "datosClave": "Factor desgaste 1.10 siempre",
    "conectaCon": "🔧 →"
  },
  {
    "modulo": "8️⃣",
    "nombre": "Equipos",
    "funcion": "Cotizador",
    "inputs": "Equipos rentados, maquinaria, herramienta especial",
    "output": "Costo semanal de equipos",
    "filaHoja2": "Catálogo editable",
    "datosClave": "Contingencia equipo 3-7%",
    "conectaCon": "⚙️ →"
  },
  {
    "modulo": "9️⃣",
    "nombre": "Contingencias",
    "funcion": "Sistema",
    "inputs": "Categorías con % o monto (editables)",
    "output": "Reserva total = 8-15% del proyecto",
    "filaHoja2": "Cálculo automático por categoría",
    "datosClave": "NUNCA decir 'contingencia' al cliente",
    "conectaCon": "🛡️ →"
  },
  {
    "modulo": "🔟",
    "nombre": "Administración",
    "funcion": "Sistema",
    "inputs": "% editable (default 5%)",
    "output": "Monto admin distribuido en ítems (método 1.1)",
    "filaHoja2": "Multiplicador automático",
    "datosClave": "No mostrar línea separada; distribuir",
    "conectaCon": "📊 →"
  },
  {
    "modulo": "11️⃣",
    "nombre": "Utilidad",
    "funcion": "Gerencia",
    "inputs": "% editable (default 10-12%)",
    "output": "Margen objetivo del proyecto",
    "filaHoja2": "Cálculo sobre subtotal",
    "datosClave": "Nunca menor de 10%",
    "conectaCon": "💰 →"
  },
  {
    "modulo": "12️⃣",
    "nombre": "Precio final",
    "funcion": "Sistema",
    "inputs": "Suma de todos los módulos",
    "output": "Cotización al cliente (solo conceptos visibles)",
    "filaHoja2": "Resumen automático",
    "datosClave": "Cliente solo ve: MO, equipos, consumibles, logística",
    "conectaCon": "📄 ✅"
  },
  {
    "modulo": "SUBMÓDULO",
    "nombre": "NOMBRE",
    "funcion": "CAMPOS EDITABLES",
    "inputs": "FÓRMULA",
    "output": "EJEMPLO CARRIER (SALTILLO)",
    "filaHoja2": "REGLA",
    "datosClave": "ESTADO",
    "conectaCon": "FILA HOJA2"
  },
  {
    "modulo": "T1",
    "nombre": "Ubicación y Distancia",
    "funcion": "Base operación, ciudad destino, dirección, factor ida/vuelta",
    "inputs": "km_total = distancia × factor",
    "output": "Monclova→Saltillo: 188km × 2 = 376km",
    "filaHoja2": "Factor editable (no siempre es ×2)",
    "datosClave": "Diseñado",
    "conectaCon": "600-625"
  },
  {
    "modulo": "T2",
    "nombre": "Flota de Vehículos",
    "funcion": "Unidad ON/OFF, cantidad, costo/km, km viaje, # viajes",
    "inputs": "costo_unidad = km × costo_km × cantidad",
    "output": "Urban: 376 × $6 × 1 = $2,256",
    "filaHoja2": "Cada unidad gasta diferente",
    "datosClave": "Diseñado",
    "conectaCon": "630-660"
  },
  {
    "modulo": "T3",
    "nombre": "Gasolina",
    "funcion": "Método 1: costo/km. Método 2: costo semanal fijo",
    "inputs": "gasolina = rendimiento o monto fijo editable",
    "output": "Ford 2015: $3,000/semana",
    "filaHoja2": "2 métodos disponibles",
    "datosClave": "Diseñado",
    "conectaCon": "680-700"
  },
  {
    "modulo": "T4",
    "nombre": "Mantenimiento",
    "funcion": "km por mantenimiento, costo por mantenimiento",
    "inputs": "costo_km_mant = costo ÷ km_mantenimiento",
    "output": "Ford: $4,000 cada 5,000km = $0.80/km",
    "filaHoja2": "Prorrateado por km recorrido",
    "datosClave": "Diseñado",
    "conectaCon": "705-720"
  },
  {
    "modulo": "T5",
    "nombre": "Costo Total Transporte",
    "funcion": "N/A (calculado)",
    "inputs": "Σ(unidades) + gasolina + mantenimiento",
    "output": "$12,607 + mantenimiento prorrateado",
    "filaHoja2": "Suma automática de T2+T3+T4",
    "datosClave": "Diseñado",
    "conectaCon": "725-735"
  },
  {
    "modulo": "T6",
    "nombre": "Frecuencia de Viajes",
    "funcion": "Viajes iniciales, viajes/semana, semanas proyecto",
    "inputs": "viajes_totales = iniciales + (viajes_sem × semanas)",
    "output": "1 viaje inicial + 1/semana × 4 sem = 5 viajes",
    "filaHoja2": "Todo editable por proyecto",
    "datosClave": "Diseñado",
    "conectaCon": "740-760"
  },
  {
    "modulo": "T7",
    "nombre": "Contingencia Transporte",
    "funcion": "Factor contingencia (default 1.10)",
    "inputs": "transporte_real = total × 1.10",
    "output": "$12,607 × 1.10 = $13,868",
    "filaHoja2": "Cubre: llantas, fallas, gasolina extra, desvíos",
    "datosClave": "Diseñado",
    "conectaCon": "765-785"
  },
  {
    "modulo": "T8",
    "nombre": "Interfaz Cotizador",
    "funcion": "Tabla con columnas: Unidad | ON/OFF | Cant | Km | Viajes | $/km | Total",
    "inputs": "Total = automático por fila",
    "output": "Tabla visual con cálculo por fila",
    "filaHoja2": "Nada fijo; todo activar/desactivar/editar",
    "datosClave": "Diseñado",
    "conectaCon": "790-806"
  },
  {
    "modulo": "CONCEPTO",
    "nombre": "👤 VISIBLE AL CLIENTE",
    "funcion": "🔒 SOLO INTERNO",
    "inputs": "CÓMO SE PRESENTA AL CLIENTE",
    "output": "MÉTODO DE OCULTAMIENTO",
    "filaHoja2": "",
    "datosClave": "",
    "conectaCon": ""
  },
  {
    "modulo": "Mano de obra",
    "nombre": "✅ SÍ",
    "funcion": "",
    "inputs": "Línea directa en cotización",
    "output": "Se muestra tal cual",
    "filaHoja2": "",
    "datosClave": "",
    "conectaCon": ""
  },
  {
    "modulo": "Equipos",
    "nombre": "✅ SÍ",
    "funcion": "",
    "inputs": "Línea directa en cotización",
    "output": "Se muestra tal cual",
    "filaHoja2": "",
    "datosClave": "",
    "conectaCon": ""
  },
  {
    "modulo": "Consumibles",
    "nombre": "✅ SÍ",
    "funcion": "",
    "inputs": "Línea directa en cotización",
    "output": "Se muestra tal cual",
    "filaHoja2": "",
    "datosClave": "",
    "conectaCon": ""
  },
  {
    "modulo": "Logística",
    "nombre": "✅ SÍ",
    "funcion": "",
    "inputs": "Línea directa en cotización",
    "output": "Se muestra tal cual",
    "filaHoja2": "",
    "datosClave": "",
    "conectaCon": ""
  },
  {
    "modulo": "Transporte",
    "nombre": "✅ SÍ",
    "funcion": "",
    "inputs": "Línea directa en cotización",
    "output": "Se muestra tal cual",
    "filaHoja2": "",
    "datosClave": "",
    "conectaCon": ""
  },
  {
    "modulo": "Administración (5%)",
    "nombre": "⚠️ PARCIAL",
    "funcion": "",
    "inputs": "Distribuido entre ítems (×1.1)",
    "output": "Método overhead distribution — NO línea separada",
    "filaHoja2": "",
    "datosClave": "",
    "conectaCon": ""
  },
  {
    "modulo": "#",
    "nombre": "EVOLUCIÓN",
    "funcion": "DESCRIPCIÓN",
    "inputs": "BENEFICIO",
    "output": "PRIORIDAD",
    "filaHoja2": "ESTADO",
    "datosClave": "",
    "conectaCon": ""
  },
  {
    "modulo": "1",
    "nombre": "Motor por tipo de proyecto",
    "funcion": "Elegir desmontaje/instalación/mantenimiento/maniobra → arma presupuesto casi completo",
    "inputs": "Cotizar en minutos cualquier tipo de proyecto",
    "output": "🔴 ALTA",
    "filaHoja2": "Propuesto en Hoja2",
    "datosClave": "",
    "conectaCon": ""
  },
  {
    "modulo": "2",
    "nombre": "Inteligencia de ciudades",
    "funcion": "Base de datos de costos por ciudad: hoteles, grúas, maquinaria, transporte",
    "inputs": "Cotización precisa sin investigar cada vez",
    "output": "🟡 MEDIA",
    "filaHoja2": "Conceptual",
    "datosClave": "",
    "conectaCon": ""
  },
  {
    "modulo": "3",
    "nombre": "Peajes y gasolina automáticos",
    "funcion": "Google Maps calcula peajes + consumo real de gasolina por ruta",
    "inputs": "Elimina subestimación de traslados",
    "output": "🟡 MEDIA",
    "filaHoja2": "Propuesto en Hoja2",
    "datosClave": "",
    "conectaCon": ""
  },
  {
    "modulo": "4",
    "nombre": "Tiempo de traslado",
    "funcion": "Calcular hrs de viaje para planeación de cuadrillas",
    "inputs": "Mejor planeación de jornadas laborales",
    "output": "🟢 BAJA",
    "filaHoja2": "Propuesto en Hoja2",
    "datosClave": "",
    "conectaCon": ""
  },
  {
    "modulo": "5",
    "nombre": "Catálogo EPP 60+ ítems",
    "funcion": "Biblioteca completa de EPP para líneas automotrices tipo Carrier",
    "inputs": "Nunca olvidar un consumible; evitar pérdidas $50-150K",
    "output": "🟡 MEDIA",
    "filaHoja2": "Parcial (36 ítems en Hoja2)",
    "datosClave": "",
    "conectaCon": ""
  },
  {
    "modulo": "6",
    "nombre": "Dashboard visual industrial",
    "funcion": "Interfaz gráfica del cotizador: fácil de usar, imposible de desordenar",
    "inputs": "Usable por todo el equipo sin capacitación larga",
    "output": "🟡 MEDIA",
    "filaHoja2": "Propuesto",
    "datosClave": "",
    "conectaCon": ""
  },
  {
    "modulo": "7",
    "nombre": "SaaS para contratistas",
    "funcion": "Evolucionar el cotizador a producto vendible (sin precios propios)",
    "inputs": "Nuevo modelo de negocio; ingresos recurrentes",
    "output": "🟢 FUTURO",
    "filaHoja2": "Conceptual (vender estructura vacía)",
    "datosClave": "",
    "conectaCon": ""
  },
  {
    "modulo": "8",
    "nombre": "Bloomberg de costos industriales",
    "funcion": "Con 100-200 proyectos → base de inteligencia industrial del norte de México",
    "inputs": "Ventaja competitiva absoluta en la región",
    "output": "🟢 FUTURO",
    "filaHoja2": "Se construye con cada proyecto",
    "datosClave": "",
    "conectaCon": ""
  },
  {
    "modulo": "#",
    "nombre": "TIPO",
    "funcion": "UBICACIÓN",
    "inputs": "PROBLEMA",
    "output": "IMPACTO",
    "filaHoja2": "SOLUCIÓN",
    "datosClave": "",
    "conectaCon": ""
  },
  {
    "modulo": "1",
    "nombre": "🔴 ERROR",
    "funcion": "~Fila 245",
    "inputs": "#NOMBRE? en fórmula de suma (subtotal)",
    "output": "El resumen del proyecto no calcula",
    "filaHoja2": "La celda tiene texto '+' en vez de fórmula =SUM(); revisar y corregir",
    "datosClave": "",
    "conectaCon": ""
  },
  {
    "modulo": "2",
    "nombre": "🔴 ERROR",
    "funcion": "~Fila 249",
    "inputs": "#NOMBRE? en fórmula de precio venta",
    "output": "Precio final no se calcula",
    "filaHoja2": "Mismo problema: texto con '+' interpretado como nombre; convertir a fórmula",
    "datosClave": "",
    "conectaCon": ""
  },
  {
    "modulo": "3",
    "nombre": "🟡 ESTRUCTURA",
    "funcion": "Toda la hoja",
    "inputs": "Los datos son texto descriptivo, no tablas Excel funcionales",
    "output": "No hay cálculos automáticos; todo es referencia",
    "filaHoja2": "Convertir a tablas con fórmulas reales en hojas separadas del cotizador",
    "datosClave": "",
    "conectaCon": ""
  },
  {
    "modulo": "4",
    "nombre": "🟡 DATOS",
    "funcion": "Filas 68-88",
    "inputs": "EPP base lista $613.04 pero no coincide con catálogo completo de Hoja1",
    "output": "Precios pueden estar desactualizados",
    "filaHoja2": "Unificar catálogo EPP con precios de un solo origen (Hoja1 o Hoja2)",
    "datosClave": "",
    "conectaCon": ""
  },
  {
    "modulo": "5",
    "nombre": "🟡 DATOS",
    "funcion": "Filas 150-160",
    "inputs": "Consumibles ≈$43,825/sem difiere del detalle en Hoja1",
    "output": "Posible discrepancia de cantidades/precios",
    "filaHoja2": "Cruzar totales Hoja1 vs Hoja2 y definir cifra oficial",
    "datosClave": "",
    "conectaCon": ""
  },
  {
    "modulo": "6",
    "nombre": "ℹ️ NOTA",
    "funcion": "General",
    "inputs": "Hoja2 es arquitectura/diseño, no modelo funcional",
    "output": "No se puede usar directamente para cotizar",
    "filaHoja2": "Implementar la lógica en hojas con fórmulas reales o en MICSA OS",
    "datosClave": "",
    "conectaCon": ""
  }
];

// ──────────────────────────────────────────────────────────────
// 31. FLUJOS HOJA1 — CONTINGENCIAS Y APRENDIZAJES (48 flujos)
// ──────────────────────────────────────────────────────────────
const FLUJOS_CONTINGENCIAS = [
  {
    "num": "#",
    "flujo": "FLUJO DE TRABAJO",
    "seccion": "SECCIÓN EN HOJA1",
    "proposito": "PROPÓSITO",
    "prioridad": "PRIORIDAD",
    "estado": "ESTADO ACTUAL",
    "accion": "ACCIÓN REQUERIDA"
  },
  {
    "num": "1",
    "flujo": "Contingencias Operativas",
    "seccion": "Filas 10-450",
    "proposito": "Reserva económica para riesgos no previsibles: paros de planta, accidentes, mantenimiento",
    "prioridad": "🔴 CRÍTICA",
    "estado": "No existe en cotizador",
    "accion": "Crear módulo de contingencias en cotizador y presupuesto"
  },
  {
    "num": "2",
    "flujo": "Contingencias Médicas/Seguridad",
    "seccion": "Filas 97-130",
    "proposito": "Fondo para incidentes menores: atención particular, evitar prima IMSS, EPP dañado",
    "prioridad": "🔴 CRÍTICA",
    "estado": "No existe",
    "accion": "Agregar $1,000-$2,500 por trabajador como reserva"
  },
  {
    "num": "3",
    "flujo": "Contingencias Logísticas (Transporte)",
    "seccion": "Filas 131-175",
    "proposito": "Renta de van, reparaciones, mantenimiento correctivo de vehículos de obra",
    "prioridad": "🟡 ALTA",
    "estado": "Parcialmente en presupuesto",
    "accion": "Crear rubro 'Transporte operativo personal' + 10-20% mantenimiento"
  },
  {
    "num": "4",
    "flujo": "Contingencias Equipos/Herramientas",
    "seccion": "Filas 245-270",
    "proposito": "Averías, mantenimiento correctivo, refacciones urgentes, llantas ponchadas",
    "prioridad": "🟡 ALTA",
    "estado": "No desglosado",
    "accion": "Agregar 3-7% del costo de equipos como contingencia"
  },
  {
    "num": "5",
    "flujo": "Contingencias Paro de Obra",
    "seccion": "Filas 270-295",
    "proposito": "Standby charges: personal y equipos detenidos por culpa del cliente",
    "prioridad": "🔴 CRÍTICA",
    "estado": "No contractual",
    "accion": "Agregar cláusula de standby charges en contratos"
  },
  {
    "num": "6",
    "flujo": "Estructura 4 Hojas del Presupuesto",
    "seccion": "Filas 450-600",
    "proposito": "Separar: Cotización Cliente / Desglose Admin / Presupuesto Real / Márgenes",
    "prioridad": "🟡 ALTA",
    "estado": "Parcial (ya tiene Mi Utilidad)",
    "accion": "Crear hojas faltantes: Desglose Admin y Márgenes consolidados"
  },
  {
    "num": "7",
    "flujo": "Administración Oculta (Método 1.1)",
    "seccion": "Filas 680-720",
    "proposito": "Distribuir administración entre ítems en vez de mostrar línea separada",
    "prioridad": "🟢 IMPLEMENTADO",
    "estado": "Ya se hace",
    "accion": "Documentar el método formalmente; crear fórmula automática"
  },
  {
    "num": "8",
    "flujo": "Seguro RC Prorrateado",
    "seccion": "Filas 730-800",
    "proposito": "Prorrateo del seguro anual ($983 USD) entre proyectos. Cobrar $12-18K por proyecto",
    "prioridad": "🟡 ALTA",
    "estado": "Se hace manual",
    "accion": "Automatizar cálculo en cotizador: seguro anual ÷ proyectos año"
  },
  {
    "num": "9",
    "flujo": "Modelo de Costos Indirectos",
    "seccion": "Filas 820-950",
    "proposito": "Software/IA, teléfonos, vehículos, laptops, papelería, gestión documental",
    "prioridad": "🟡 ALTA",
    "estado": "Incompleto",
    "accion": "Crear tabla de indirectos; eliminar duplicidades (contadora en 2 líneas)"
  },
  {
    "num": "10",
    "flujo": "Negociación de Desviaciones",
    "seccion": "Filas 1300-1900",
    "proposito": "Protocolo para reclamar desviaciones: aviso, desglose técnico, narrativa profesional",
    "prioridad": "🔴 CRÍTICA",
    "estado": "Aprendido de Carrier",
    "accion": "Crear plantilla estándar de Notice of Delay / Deviation Notice"
  },
  {
    "num": "11",
    "flujo": "Costos de Transporte Detallado",
    "seccion": "Filas 2200-2350",
    "proposito": "Ford 2015 + flota: gasolina $3,000/sem, mantenimiento prorrateado $0.80/km, contingencia 10%",
    "prioridad": "🟢 DATO LISTO",
    "estado": "Calculado",
    "accion": "Integrar tabla de 4 vehículos al cotizador"
  },
  {
    "num": "12",
    "flujo": "Consumibles por Semana",
    "seccion": "Filas 2400-2700",
    "proposito": "Catálogo 36+ ítems: oxígeno, acetileno, discos, electrodos, EPP reposición, etc.",
    "prioridad": "🟢 DATO LISTO",
    "estado": "Catálogo creado",
    "accion": "Integrar como módulo editable; agregar factor consumo 1.10"
  },
  {
    "num": "13",
    "flujo": "EPP Automático por Puesto",
    "seccion": "Filas 2900-3200+",
    "proposito": "Sistema 3 capas: EPP básico auto, EPP por puesto (mecánico/soldador/rigger), EPP especializado manual",
    "prioridad": "🟡 ALTA",
    "estado": "Catálogo existe",
    "accion": "Crear lógica: al agregar puesto → activar EPP automático (~$808/persona)"
  },
  {
    "num": "14",
    "flujo": "Base de Datos de Costos Regionales",
    "seccion": "Filas 1050-1100",
    "proposito": "Recopilar costos de equipos/servicios por zona (Saltillo, Zacatecas, Monterrey, etc.)",
    "prioridad": "🟢 ESTRATÉGICA",
    "estado": "Conceptual",
    "accion": "Comenzar a registrar costos por región en cada proyecto completado"
  },
  {
    "num": "#",
    "flujo": "CONCEPTO CONTINGENCIA",
    "seccion": "BASE DE CÁLCULO",
    "proposito": "% o FÓRMULA",
    "prioridad": "MONTO EJEMPLO",
    "estado": "PRESENTACIÓN AL CLIENTE",
    "accion": "CASO REAL QUE LO JUSTIFICA"
  },
  {
    "num": "1",
    "flujo": "Reserva interferencias planta",
    "seccion": "Costo operativo proyecto",
    "proposito": "5% – 12%",
    "prioridad": "$80,000 (8%)",
    "estado": "Costos indirectos operativos",
    "accion": "Planta detuvo maniobra → $100K pérdida"
  },
  {
    "num": "2",
    "flujo": "Fondo incidentes seguridad",
    "seccion": "# trabajadores × $2,000",
    "proposito": "$1,000 – $2,500/persona",
    "prioridad": "$30,000 (15 pers)",
    "estado": "Gestión de riesgos de maniobra",
    "accion": "Rebaba en ojo → atención particular $2-8K"
  },
  {
    "num": "3",
    "flujo": "Transporte operativo personal",
    "seccion": "Renta mensual real",
    "proposito": "Costo directo",
    "prioridad": "$23,200/mes",
    "estado": "Logística de personal",
    "accion": "Van rentada no contemplada en cotizador"
  },
  {
    "num": "4",
    "flujo": "Mantenimiento correctivo transporte",
    "seccion": "10-20% de renta transporte",
    "proposito": "15% promedio",
    "prioridad": "3480",
    "estado": "Incluido en logística",
    "accion": "Frenos de van → $13K no contemplados"
  },
  {
    "num": "5",
    "flujo": "Contingencia equipos",
    "seccion": "Costo total equipos",
    "proposito": "3% – 7%",
    "prioridad": "$15,000 (5%)",
    "estado": "Mantenimiento operativo",
    "accion": "Llantas, motor, aceite, refacciones urgentes"
  },
  {
    "num": "6",
    "flujo": "Reserva paro operativo",
    "seccion": "Costo diario × 1-2 días",
    "proposito": "1-2 días reserva",
    "prioridad": "$90,000 (2 días)",
    "estado": "Buffer operativo",
    "accion": "Áreas no liberadas, permisos retrasados"
  },
  {
    "num": "FASE",
    "flujo": "#",
    "seccion": "PASO",
    "proposito": "RESPONSABLE",
    "prioridad": "ENTREGABLE",
    "estado": "CUÁNDO",
    "accion": "HERRAMIENTA"
  },
  {
    "num": "1. IDENTIFICACIÓN",
    "flujo": "1.1",
    "seccion": "Llenar checklist de contingencias por categoría (5 tipos)",
    "proposito": "Cotizador / JG",
    "prioridad": "Matriz de riesgos del proyecto",
    "estado": "Antes de cotizar",
    "accion": "Checklist en cotizador"
  },
  {
    "num": "2. CUANTIFICACIÓN",
    "flujo": "2.1",
    "seccion": "Calcular reserva económica por categoría (% o $ fijo)",
    "proposito": "Cotizador",
    "prioridad": "Monto por categoría",
    "estado": "En cotización",
    "accion": "Fórmulas automáticas"
  },
  {
    "num": "3. INTEGRACIÓN",
    "flujo": "3.1",
    "seccion": "Distribuir en administración (3-5% visible)",
    "proposito": "Cotizador",
    "prioridad": "Línea de administración",
    "estado": "En cotización",
    "accion": "Método 1.1 (distribución)"
  },
  {
    "num": "4. ACTIVACIÓN",
    "flujo": "4.1",
    "seccion": "Registrar evento de contingencia (fecha, evento, impacto)",
    "proposito": "Supervisor",
    "prioridad": "Formato de incidente",
    "estado": "Cuando ocurre",
    "accion": "Bitácora de obra"
  },
  {
    "num": "5. RESOLUCIÓN",
    "flujo": "5.1",
    "seccion": "Tipo A — Absorción: impacto pequeño, pagar del fondo",
    "proposito": "Gerencia",
    "prioridad": "Registro contable",
    "estado": "Cierre de semana",
    "accion": "Fondo de contingencia"
  },
  {
    "num": "HOJA",
    "flujo": "NOMBRE",
    "seccion": "QUIÉN LA VE",
    "proposito": "QUÉ CONTIENE",
    "prioridad": "REGLA CLAVE",
    "estado": "EJEMPLO DE LÍNEAS",
    "accion": "RELACIÓN"
  },
  {
    "num": "1",
    "flujo": "COTIZACIÓN CLIENTE",
    "seccion": "👤 Cliente",
    "proposito": "Precio de venta por concepto. Subtotal + Admin + IVA",
    "prioridad": "Única hoja que ve el cliente",
    "estado": "Mano de obra, Equipos, Hospedaje, Transporte, Consumibles",
    "accion": "→ Alimenta Hoja 4 (Ingresos)"
  },
  {
    "num": "2",
    "flujo": "DESGLOSE ADMINISTRACIÓN",
    "seccion": "🔒 Solo interno",
    "proposito": "Cómo se compone el 5% de administración. Panel editable arriba.",
    "prioridad": "No aparece en cotización. Solo control.",
    "estado": "Gestión, Contabilidad, Software/IA, Teléfonos, Laptops, Bitácoras",
    "accion": "→ El 5% se distribuye con método 1.1"
  },
  {
    "num": "3",
    "flujo": "PRESUPUESTO REAL",
    "seccion": "🔒 Solo interno",
    "proposito": "Costos reales: lo que realmente pagas. Compara cobrado vs real.",
    "prioridad": "Margen operativo = Cobrado - Real → va a utilidad",
    "estado": "Hospedaje cobrado $36K vs real $30K = $6K margen",
    "accion": "→ Alimenta Hoja 4 (Costos reales)"
  },
  {
    "num": "4",
    "flujo": "MÁRGENES Y UTILIDAD",
    "seccion": "🔒 Solo interno",
    "proposito": "Ingreso - Costo Real = Utilidad. Desglose de fuentes de margen.",
    "prioridad": "Muestra DE DÓNDE sale cada peso de utilidad",
    "estado": "Margen equipos, hospedaje, consumibles, logística, admin",
    "accion": "← Recibe de Hojas 1 y 3"
  },
  {
    "num": "CAPA",
    "flujo": "TIPO",
    "seccion": "ACTIVACIÓN",
    "proposito": "INCLUYE",
    "prioridad": "COSTO APROX.",
    "estado": "CUÁNDO SE USA",
    "accion": "EJEMPLO"
  },
  {
    "num": "1",
    "flujo": "EPP BÁSICO OBLIGATORIO",
    "seccion": "🔄 Automática al agregar persona",
    "proposito": "Guantes, lentes, tapones, casco, chaleco, camisola, mangas",
    "prioridad": "~$808/persona",
    "estado": "SIEMPRE — acceso mínimo a planta",
    "accion": "Agregas 1 mecánico → 7 ítems EPP se activan solos"
  },
  {
    "num": "2",
    "flujo": "EPP POR PUESTO",
    "seccion": "🔄 Automática según puesto seleccionado",
    "proposito": "Mecánico: EPP base. Soldador: +careta, peto, polainas. Rigger: +anticorte. Alturas: +arnés, línea vida",
    "prioridad": "Variable por puesto",
    "estado": "Cuando seleccionas puesto en cotizador",
    "accion": "Soldador → se agregan Kevlar, careta, mandil, polainas (~$900)"
  },
  {
    "num": "3",
    "flujo": "EPP ESPECIALIZADO",
    "seccion": "✋ Manual — activar/desactivar",
    "proposito": "Arnés 3 aros ($577), cofias, impermeables, overol Tyvek, goggles químicos, malla antiflama",
    "prioridad": "Según proyecto",
    "estado": "Trabajo en alturas, químicos, espacios confinados",
    "accion": "Proyecto con izaje → activar arnés + línea vida ($1,577)"
  },
  {
    "num": "#",
    "flujo": "REGLA",
    "seccion": "EXPLICACIÓN",
    "proposito": "APLICACIÓN EN COTIZADOR/PRESUPUESTO",
    "prioridad": "",
    "estado": "",
    "accion": ""
  },
  {
    "num": "1",
    "flujo": "Nunca digas 'contingencia' al cliente",
    "seccion": "Usa: 'Gestión de riesgos operativos de maniobra' o 'Costos indirectos operativos'",
    "proposito": "Cambiar etiquetas en cotización formal",
    "prioridad": "",
    "estado": "",
    "accion": ""
  },
  {
    "num": "2",
    "flujo": "Precio de venta ≠ Costo real",
    "seccion": "La diferencia es donde vive la empresa. No confundirlos jamás.",
    "proposito": "Separar en hojas distintas (Cotización vs Presupuesto Real)",
    "prioridad": "",
    "estado": "",
    "accion": ""
  },
  {
    "num": "3",
    "flujo": "Administración se distribuye (método 1.1)",
    "seccion": "No mostrar línea separada de admin; repartir ×1.1 entre ítems",
    "proposito": "Factor multiplicador automático en cotizador",
    "prioridad": "",
    "estado": "",
    "accion": ""
  },
  {
    "num": "4",
    "flujo": "El desglose genera confianza, no riesgo",
    "seccion": "Clientes prefieren ver estructura lógica. Reduce 'sensación de abuso'",
    "proposito": "Siempre entregar desglose, pero sin utilidad visible",
    "prioridad": "",
    "estado": "",
    "accion": ""
  },
  {
    "num": "5",
    "flujo": "Seguro RC anual > Seguro por proyecto",
    "seccion": "Póliza anual $983 USD cubre todo. Prorratear entre proyectos ($340 real vs $12-18K cobrado)",
    "proposito": "Automatizar: Seguro anual ÷ # proyectos = costo real",
    "prioridad": "",
    "estado": "",
    "accion": ""
  },
  {
    "num": "6",
    "flujo": "Standby charges en TODOS los contratos",
    "seccion": "Si planta detiene obra, cobrar personal+equipo×días parados",
    "proposito": "Cláusula estándar + tabla de tarifas diarias",
    "prioridad": "",
    "estado": "",
    "accion": ""
  },
  {
    "num": "7",
    "flujo": "El margen operativo va a utilidad, no al presupuesto",
    "seccion": "Si hospedaje costó menos, ese ahorro es eficiencia, no presupuesto",
    "proposito": "Hoja 4 (Márgenes) captura automáticamente las diferencias",
    "prioridad": "",
    "estado": "",
    "accion": ""
  },
  {
    "num": "8",
    "flujo": "Factor consumibles = 1.10 siempre",
    "seccion": "10% extra por desgaste, pérdida, reposición de consumibles",
    "proposito": "Parámetro editable en cabecera del cotizador",
    "prioridad": "",
    "estado": "",
    "accion": ""
  },
  {
    "num": "9",
    "flujo": "Si no cobras contingencias, financias el proyecto del cliente",
    "seccion": "El contratista que solo cobra costos se vuelve empleado del cliente",
    "proposito": "Siempre incluir 8-15% de contingencia (oculto o distribuido)",
    "prioridad": "",
    "estado": "",
    "accion": ""
  },
  {
    "num": "10",
    "flujo": "Registrar costos por región para inteligencia de mercado",
    "seccion": "Costos de Saltillo ≠ Zacatecas ≠ Monterrey. Cada proyecto alimenta la base.",
    "proposito": "Campo 'Región' en cada cotización para ir creando la base de datos",
    "prioridad": "",
    "estado": "",
    "accion": ""
  }
];

// ──────────────────────────────────────────────────────────────
// 32. BASE COTIZADOR MICSA — PROVEEDORES (43 equipos)
// ──────────────────────────────────────────────────────────────
const BASE_COTIZADOR_MICSA = [
  {
    "proveedor": "Bellavista",
    "equipo": "Montacargas",
    "capacidad": "2,500 kg",
    "moneda": "USD",
    "costoDia": 155.0,
    "costoSemana": 467.0,
    "costoMes": 1414.0,
    "flete": "Incluido"
  },
  {
    "proveedor": "Bellavista",
    "equipo": "Montacargas",
    "capacidad": "2,750 kg",
    "moneda": "USD",
    "costoDia": 168.0,
    "costoSemana": 507.0,
    "costoMes": 1534.0,
    "flete": "Incluido"
  },
  {
    "proveedor": "Bellavista",
    "equipo": "Montacargas",
    "capacidad": "3,000 kg",
    "moneda": "USD",
    "costoDia": 214.0,
    "costoSemana": 648.0,
    "costoMes": 1962.0,
    "flete": "Incluido"
  },
  {
    "proveedor": "Bellavista",
    "equipo": "Montacargas",
    "capacidad": "3,500 kg",
    "moneda": "USD",
    "costoDia": 270.0,
    "costoSemana": 815.0,
    "costoMes": 2469.0,
    "flete": "Incluido"
  },
  {
    "proveedor": "Bellavista",
    "equipo": "Montacargas",
    "capacidad": "4,500 kg",
    "moneda": "USD",
    "costoDia": 367.0,
    "costoSemana": 1110.0,
    "costoMes": 3363.0,
    "flete": "10000"
  },
  {
    "proveedor": "Bellavista",
    "equipo": "Montacargas",
    "capacidad": "7,000 kg",
    "moneda": "USD",
    "costoDia": 533.0,
    "costoSemana": 1614.0,
    "costoMes": 4888.0,
    "flete": "10000"
  },
  {
    "proveedor": "Bellavista",
    "equipo": "Montacargas",
    "capacidad": "16,000 kg",
    "moneda": "USD",
    "costoDia": 883.0,
    "costoSemana": 2673.0,
    "costoMes": 8100.0,
    "flete": "10000"
  },
  {
    "proveedor": "BMR Montacargas",
    "equipo": "Hangcha CPCD50",
    "capacidad": "5 Ton diesel",
    "moneda": "USD",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": 2469.0,
    "flete": ""
  },
  {
    "proveedor": "BMR Montacargas",
    "equipo": "Hangcha CPCD38",
    "capacidad": "3.8 Ton diesel",
    "moneda": "USD",
    "costoDia": 214.0,
    "costoSemana": null,
    "costoMes": null,
    "flete": ""
  },
  {
    "proveedor": "BMR Montacargas",
    "equipo": "Hangcha CPCYD38",
    "capacidad": "3.8 Ton diesel",
    "moneda": "USD",
    "costoDia": null,
    "costoSemana": 648.0,
    "costoMes": null,
    "flete": ""
  },
  {
    "proveedor": "BMR Montacargas",
    "equipo": "Hangcha CPCYD38",
    "capacidad": "3.8 Ton diesel",
    "moneda": "USD",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": 1962.0,
    "flete": ""
  },
  {
    "proveedor": "Rigging Industry",
    "equipo": "Versa/Veralift",
    "capacidad": "40-60 Ton",
    "moneda": "MXN",
    "costoDia": 28000.0,
    "costoSemana": 150000.0,
    "costoMes": 580000.0,
    "flete": "18000"
  },
  {
    "proveedor": "Rigging Industry",
    "equipo": "Montacargas",
    "capacidad": "60-80 Ton",
    "moneda": "MXN",
    "costoDia": 38000.0,
    "costoSemana": null,
    "costoMes": null,
    "flete": "18000"
  },
  {
    "proveedor": "Rigging Industry",
    "equipo": "Montacargas",
    "capacidad": "15,000 lbs",
    "moneda": "MXN",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": 55000.0,
    "flete": ""
  },
  {
    "proveedor": "Rigging Industry",
    "equipo": "Brazo articulado",
    "capacidad": "45 pies",
    "moneda": "MXN",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": 38000.0,
    "flete": "7,000-30,000"
  },
  {
    "proveedor": "Rigging Industry",
    "equipo": "Montacargas",
    "capacidad": "10,000 lbs",
    "moneda": "MXN",
    "costoDia": null,
    "costoSemana": 25000.0,
    "costoMes": null,
    "flete": ""
  },
  {
    "proveedor": "Iron Rentals",
    "equipo": "Manlift",
    "capacidad": "45 ft",
    "moneda": "MXN",
    "costoDia": 2700.0,
    "costoSemana": 18900.0,
    "costoMes": 30000.0,
    "flete": "2500"
  },
  {
    "proveedor": "Iron Rentals",
    "equipo": "Manlift",
    "capacidad": "60 ft",
    "moneda": "MXN",
    "costoDia": 3000.0,
    "costoSemana": 21000.0,
    "costoMes": 37500.0,
    "flete": "2500"
  },
  {
    "proveedor": "SEYSO Norte",
    "equipo": "MC Hyster",
    "capacidad": "7 Ton",
    "moneda": "MXN",
    "costoDia": 4500.0,
    "costoSemana": 28000.0,
    "costoMes": null,
    "flete": "2100"
  },
  {
    "proveedor": "SEYSO Norte",
    "equipo": "MC Doosan",
    "capacidad": "9 Ton",
    "moneda": "MXN",
    "costoDia": 7000.0,
    "costoSemana": 45500.0,
    "costoMes": null,
    "flete": "8000"
  },
  {
    "proveedor": "Prov. CDMX Coltongo",
    "equipo": "Montacargas",
    "capacidad": "7 Ton gas LP",
    "moneda": "MXN",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": 65000.0,
    "flete": "10000"
  },
  {
    "proveedor": "Prov. CDMX Coltongo",
    "equipo": "Montacargas",
    "capacidad": "8,000 lbs",
    "moneda": "MXN",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": 17000.0,
    "flete": "Incluido"
  },
  {
    "proveedor": "BW Rentals",
    "equipo": "MC torre triple",
    "capacidad": "12,000 lbs",
    "moneda": "MXN",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": 40000.0,
    "flete": "7000"
  },
  {
    "proveedor": "ALHESO (AGM)",
    "equipo": "Montacargas",
    "capacidad": "15,000 lbs",
    "moneda": "MXN",
    "costoDia": null,
    "costoSemana": 25000.0,
    "costoMes": null,
    "flete": ""
  },
  {
    "proveedor": "ForkFlock",
    "equipo": "MC Hyster 155XL",
    "capacidad": "7 Ton",
    "moneda": "MXN",
    "costoDia": 4000.0,
    "costoSemana": null,
    "costoMes": null,
    "flete": "8000"
  },
  {
    "proveedor": "ForkFlock",
    "equipo": "MC Toyota 7FGU45",
    "capacidad": "10,000 lbs",
    "moneda": "MXN",
    "costoDia": 2700.0,
    "costoSemana": null,
    "costoMes": null,
    "flete": "7000"
  },
  {
    "proveedor": "CIASA Contractors",
    "equipo": "Gantry",
    "capacidad": "400 Ton",
    "moneda": "USD",
    "costoDia": 3300.0,
    "costoSemana": 14220.0,
    "costoMes": 54000.0,
    "flete": "5500"
  },
  {
    "proveedor": "GYMBSA",
    "equipo": "Gantry",
    "capacidad": "500 Ton",
    "moneda": "USD",
    "costoDia": 9600.0,
    "costoSemana": 20120.0,
    "costoMes": 48940.0,
    "flete": "Incluido"
  },
  {
    "proveedor": "MC Acuna",
    "equipo": "MC 7T + Tijera + Articulada",
    "capacidad": "Varios",
    "moneda": "MXN",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": 109800.0,
    "flete": "30000"
  },
  {
    "proveedor": "Prov. COT 754",
    "equipo": "Plataformas + MC",
    "capacidad": "45ft + 10K lbs",
    "moneda": "MXN",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": 234000.0,
    "flete": ""
  },
  {
    "proveedor": "Prov. NRD",
    "equipo": "Montacargas",
    "capacidad": "",
    "moneda": "MXN",
    "costoDia": 1500.0,
    "costoSemana": null,
    "costoMes": 20000.0,
    "flete": "11000"
  },
  {
    "proveedor": "Gruas Garcia",
    "equipo": "Grua hidraulica 40T",
    "capacidad": "40 Ton (x2)",
    "moneda": "MXN",
    "costoDia": 80306.0,
    "costoSemana": null,
    "costoMes": null,
    "flete": ""
  },
  {
    "proveedor": "Novasi",
    "equipo": "MC 4080 Carrier",
    "capacidad": "",
    "moneda": "MXN",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": 234000.0,
    "flete": ""
  },
  {
    "proveedor": "Maverick Import.",
    "equipo": "MC JAC 3.5 Dual",
    "capacidad": "3.5 Ton",
    "moneda": "MXN",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "flete": ""
  },
  {
    "proveedor": "Merklift",
    "equipo": "Montacargas",
    "capacidad": "",
    "moneda": "MXN",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "flete": ""
  },
  {
    "proveedor": "Prov. arrendamiento",
    "equipo": "MC 3 Ton gas LP",
    "capacidad": "3 Ton",
    "moneda": "MXN",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": 15991.0,
    "flete": "48 meses"
  },
  {
    "proveedor": "Prov. arrendamiento",
    "equipo": "MC 5 Ton diesel",
    "capacidad": "5 Ton",
    "moneda": "MXN",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": 33995.0,
    "flete": "48 meses"
  },
  {
    "proveedor": "Prov. arrendamiento",
    "equipo": "MC 7 Ton gas LP",
    "capacidad": "7 Ton",
    "moneda": "MXN",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": 38211.0,
    "flete": "48 meses"
  },
  {
    "proveedor": "RSM",
    "equipo": "Alineacion maquinas",
    "capacidad": "5 maquinas",
    "moneda": "USD",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": 14250.0,
    "flete": ""
  },
  {
    "proveedor": "GMX Seguros",
    "equipo": "Seguro RC",
    "capacidad": "$5M USD",
    "moneda": "USD",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": 1500.2,
    "flete": ""
  },
  {
    "proveedor": "GMX Seguros",
    "equipo": "Seguro RC",
    "capacidad": "$5M MXN",
    "moneda": "MXN",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": 9668.69,
    "flete": ""
  },
  {
    "proveedor": "Flexo Gruas",
    "equipo": "Servicio de gruas",
    "capacidad": "",
    "moneda": "MXN",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "flete": ""
  },
  {
    "proveedor": "INEQSA",
    "equipo": "Catalogo MC",
    "capacidad": "",
    "moneda": "MXN",
    "costoDia": null,
    "costoSemana": null,
    "costoMes": null,
    "flete": ""
  }
];


// ================================================================
// FUNCIONES UTILITARIAS
// ================================================================

// Convertir USD a MXN
function usdToMxn(usd) { return usd * MICSA_CONFIG.tipoCambio; }

// Costo equipo en MXN
function costoEquipoMXN(equipo, periodo) {
  let costo = 0;
  if (periodo === "dia") costo = equipo.costoDia || 0;
  else if (periodo === "semana") costo = equipo.costoSemana || 0;
  else if (periodo === "mes") costo = equipo.costoMes || 0;
  return equipo.moneda === "USD" ? usdToMxn(costo) : costo;
}

// Buscar equipos por tipo
function buscarEquipos(tipo) {
  return BASE_COTIZADOR_MICSA.filter(e =>
    e.equipo.toLowerCase().includes(tipo.toLowerCase())
  );
}

// Buscar por proveedor
function buscarPorProveedor(prov) {
  return BASE_COTIZADOR_MICSA.filter(e =>
    e.proveedor.toLowerCase().includes(prov.toLowerCase())
  );
}

// Calcular EPP por persona (kit base + puesto)
function calcularEPPPersona(puesto, alturas, quimico) {
  let total = 674.34; // kit base
  if (puesto.toLowerCase().includes("soldador")) total += 401.12;
  if (alturas) total += 1577.00;
  if (quimico) total += 210.76;
  return total;
}

// Calcular costo desviación
function calcularDesviacion(horas, personal, salarioHora, equipos) {
  const cp = salarioHora * horas * personal;
  const ce = equipos.reduce((s, e) => s + (e.costoDia / 8) * horas, 0);
  return { costoPersonal: cp, costoEquipos: ce, total: cp + ce };
}

// Resumen financiero
function resumenProyecto(costoDirecto, consumibles, transporte, epp, contingencia) {
  const sub = costoDirecto + consumibles + transporte + epp + contingencia;
  const admin = sub * PARAMETROS_FINANCIEROS.administracion;
  const util = (sub + admin) * PARAMETROS_FINANCIEROS.utilidad;
  return { subtotal: sub, administracion: admin, utilidad: util, total: sub + admin + util };
}

// Presupuesto vs Real — buscar concepto
function buscarPresVsReal(concepto) {
  return PRESUPUESTO_VS_REAL.filter(r =>
    r.concepto && r.concepto.toLowerCase().includes(concepto.toLowerCase())
  );
}

// Total presupuesto por categoría
function totalPresupuesto(categoria) {
  return DESGLOSE_PRESUPUESTO
    .filter(i => i.categoria.toLowerCase().includes(categoria.toLowerCase()))
    .reduce((s, i) => s + i.presupuesto, 0);
}

// Total gasto real por categoría
function totalGastoReal(categoria) {
  return DESGLOSE_GASTO_REAL
    .filter(i => i.categoria.toLowerCase().includes(categoria.toLowerCase()))
    .reduce((s, i) => s + i.gastoReal, 0);
}

// ================================================================
// ÍNDICE DE CONSTANTES DISPONIBLES (33 secciones)
// ================================================================
// MICSA_CONFIG              - Configuración global
// PARAMETROS_FINANCIEROS    - Indirectos, admin, utilidad, contingencia
// DESGLOSE_PRESUPUESTO      - 13 items presupuesto por categoría
// DESGLOSE_GASTO_REAL       - 17 items gasto real
// NOMINA_CONSOLIDADA        - 19 empleados con salarios
// PRESUPUESTO_COMPLETO      - 68 filas presupuesto maestro
// MI_UTILIDAD               - 23 conceptos venta vs costo vs ganancia
// HERRAMIENTAS              - 36 herramientas con precios
// DC3_CAPACITACION          - 17 registros DC3 por puesto
// SALUD                     - 3 items (antidoping, exámenes)
// EPP_SEGURIDAD             - 6 items EPP resumen
// RENTA_EQUIPOS_DETALLE     - 70 items con cálculos IVA/admin
// ADMIN_PROYECTO            - Control semanal de gastos
// RENTABILIDAD_PROYECTO     - 34 items metas y métricas
// CARRIER_ER                - 87 filas estado de resultados
// HOSPEDAJE_CARRIER         - Parámetros hospedaje
// ANALISIS_GESTION          - 21 filas análisis gestión
// RESUMEN_GESTION           - 34 filas resumen gestión
// DISTRIBUCION_ANTICIPO     - Distribución del anticipo $1,017,000
// DISTRIBUCION_CUENTAS      - 26 filas distribución bancaria
// DISTRIBUCION_EST40        - Distribución estimación 40%
// GASTOS_REALES_EST40       - 37 filas gastos reales est. 40%
// CUENTAS_BANCARIAS         - 6 cuentas bancarias
// DETALLE_GASTOS_REALES     - 41 gastos detallados con fecha
// CLASIFICACION_CFDIS       - 68 CFDIs clasificados
// PRESUPUESTO_VS_REAL       - 121 filas comparativo
// PLAN_TRABAJO              - 9 actividades por semana
// BITACORA_CONSOLIDADA      - 54 filas bitácora obra
// CONTROL_PROYECTO          - 28 filas tablero control
// DESGLOSE_ADICIONALES      - 164 filas adicionales justificados
// FLUJOS_TRABAJO_MAPA       - 32 flujos de trabajo documentados
// ARQUITECTURA_COTIZADOR    - 58 registros módulos del cotizador
// FLUJOS_CONTINGENCIAS      - 48 flujos contingencias/aprendizajes
// BASE_COTIZADOR_MICSA      - 43 equipos de proveedores
// ================================================================

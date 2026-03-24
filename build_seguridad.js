const {Document,Packer,Paragraph,TextRun,Table,TableRow,TableCell,
  AlignmentType,BorderStyle,WidthType,ShadingType,LevelFormat,
  ImageRun,VerticalAlign,PageBreak,Header,Footer,PageNumber,
  HeadingLevel,TableOfContents} = require('docx');
const fs = require('fs');

const logo = fs.readFileSync('/Users/jordangonzalez/Downloads/_ORGANIZADO/05_Imagenes/logo grupo.PNG');

// ═══════════ HELPERS ═══════════
const bb = (c='CCCCCC',sz=1) => ({style:BorderStyle.SINGLE,size:sz,color:c});
const brd = (c='CCCCCC',sz=1) => ({top:bb(c,sz),bottom:bb(c,sz),left:bb(c,sz),right:bb(c,sz)});
const nb = {style:BorderStyle.NONE,size:0,color:'FFFFFF'};
const nob = {top:nb,bottom:nb,left:nb,right:nb};

const tx = (s,o={}) => new TextRun({text:String(s),font:'Arial',size:o.sz||21,
  bold:o.b,italics:o.i,color:o.c||'2D3748',characterSpacing:o.cs,break:o.br});

const sp = (n=1) => Array.from({length:n},()=>
  new Paragraph({spacing:{before:20,after:20},children:[tx('')]}));

const bod = (s,o={}) => new Paragraph({spacing:{before:50,after:70},
  alignment:o.a||AlignmentType.JUSTIFIED,children:[tx(s,{sz:o.sz||21})]});

const cen = (ch,o={}) => new Paragraph({alignment:AlignmentType.CENTER,
  spacing:{before:o.sb||60,after:o.sa||80},
  children:Array.isArray(ch)?ch:[ch]});

const h1 = s => new Paragraph({spacing:{before:360,after:160},
  border:{bottom:{style:BorderStyle.SINGLE,size:12,color:'C9A84C',space:6}},
  children:[tx(s,{sz:28,b:true,c:'0A1628'})]});

const h2 = s => new Paragraph({spacing:{before:240,after:100},
  children:[tx(s,{sz:22,b:true,c:'1A7B8A'})]});

const h3 = s => new Paragraph({spacing:{before:180,after:80},
  children:[tx(s,{sz:20,b:true,c:'2A3F5F'})]});

const bl = s => new Paragraph({numbering:{reference:'bl',level:0},
  spacing:{before:40,after:40},alignment:AlignmentType.JUSTIFIED,
  children:[tx(s,{sz:20})]});

const nl = (s,ref='nl') => new Paragraph({numbering:{reference:ref,level:0},
  spacing:{before:40,after:40},alignment:AlignmentType.JUSTIFIED,
  children:[tx(s,{sz:20})]});

const pgBreak = () => new Paragraph({children:[new PageBreak()]});

// Banner de sección
function secBanner(num, title, sub) {
  return new Table({width:{size:9900,type:WidthType.DXA},columnWidths:[1500,8400],
    rows:[new TableRow({children:[
      new TableCell({borders:nob,shading:{fill:'C9A84C',type:ShadingType.CLEAR},
        margins:{top:160,bottom:160,left:140,right:140},verticalAlign:VerticalAlign.CENTER,
        children:[new Paragraph({alignment:AlignmentType.CENTER,
          children:[tx(num,{sz:38,b:true,c:'0A1628'})]})]}),
      new TableCell({borders:nob,shading:{fill:'0A1628',type:ShadingType.CLEAR},
        margins:{top:120,bottom:120,left:220,right:140},children:[
          new Paragraph({spacing:{after:30},children:[tx('C A P Í T U L O',{sz:14,b:true,c:'C9A84C'})]}),
          new Paragraph({spacing:{after:40},children:[tx(title,{sz:24,b:true,c:'FFFFFF'})]}),
          sub ? new Paragraph({children:[tx(sub,{sz:15,i:true,c:'C9A84C'})]})
              : new Paragraph({children:[tx('')]}),
        ]}),
    ]})]});
}

// Tabla estilizada
function tbl(headers, rows, widths) {
  const w = widths || headers.map(() => Math.floor(9900/headers.length));
  const headerRow = new TableRow({children: headers.map((h,i) =>
    new TableCell({borders:brd('888888'),shading:{fill:'0A1628',type:ShadingType.CLEAR},
      margins:{top:70,bottom:70,left:100,right:100},
      width:{size:w[i],type:WidthType.DXA},
      children:[new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:0,after:0},
        children:[tx(h,{sz:16,b:true,c:'C9A84C'})]})]}))});
  const dataRows = rows.map((row,ri) => new TableRow({children: row.map((cell,ci) =>
    new TableCell({borders:brd('CCCCCC'),margins:{top:60,bottom:60,left:100,right:100},
      width:{size:w[ci],type:WidthType.DXA},
      shading:{fill:ri%2===0?'F8F9FA':'FFFFFF',type:ShadingType.CLEAR},
      children:[new Paragraph({spacing:{before:0,after:0},
        children:[tx(cell,{sz:17})]})]}))
  }));
  return new Table({width:{size:9900,type:WidthType.DXA},columnWidths:w,
    rows:[headerRow,...dataRows]});
}

// Tabla info (2 columnas, label gold + value)
function infoTbl(pairs) {
  return new Table({width:{size:9900,type:WidthType.DXA},columnWidths:[3200,6700],
    rows:pairs.map(([l,v]) => new TableRow({children:[
      new TableCell({borders:brd('CCCCCC'),shading:{fill:'0A1628',type:ShadingType.CLEAR},
        margins:{top:50,bottom:50,left:120,right:120},
        children:[new Paragraph({children:[tx(l,{sz:18,b:true,c:'C9A84C'})]})]}),
      new TableCell({borders:brd('CCCCCC'),margins:{top:50,bottom:50,left:120,right:120},
        children:[new Paragraph({children:[tx(v,{sz:18})]})]}),
    ]}))});
}

// Caja de alerta
function alertBox(title, text, color='C0392B', bgColor='FFF2F0') {
  return new Table({width:{size:9900,type:WidthType.DXA},columnWidths:[9900],
    rows:[new TableRow({children:[new TableCell({
      borders:{top:bb(color,8),bottom:bb(color,8),left:bb(color,8),right:bb(color,8)},
      shading:{fill:bgColor,type:ShadingType.CLEAR},
      margins:{top:100,bottom:100,left:160,right:160},
      children:[
        new Paragraph({spacing:{before:0,after:40},children:[tx(title,{sz:19,b:true,c:color})]}),
        new Paragraph({spacing:{before:0,after:0},alignment:AlignmentType.JUSTIFIED,
          children:[tx(text,{sz:18,c:'333333'})]})
      ]})]})]});
}

// Info box (navy/gold)
function infoBox(title, text) {
  return alertBox(title, text, '1A7B8A', 'E8F4F8');
}

// Checklist table
function checklist(items) {
  const rows = items.map((item, i) => [String(i+1), item, '\u2610', '\u2610']);
  return tbl(['No.','Item a Verificar','\u2713 OK','\u2717 N/C'], rows, [600,7500,900,900]);
}

// Firma table
function firmas(pairs) {
  const w = Math.floor(9900/pairs.length);
  return new Table({width:{size:9900,type:WidthType.DXA},columnWidths:pairs.map(()=>w),
    rows:[
      new TableRow({children:pairs.map(()=>
        new TableCell({borders:nob,margins:{top:400,bottom:50,left:100,right:100},
          children:[new Paragraph({alignment:AlignmentType.CENTER,
            border:{bottom:{style:BorderStyle.SINGLE,size:4,color:'333333',space:4}},
            children:[tx('')]})]}))
      }),
      new TableRow({children:pairs.map(([n,c])=>
        new TableCell({borders:nob,margins:{top:40,bottom:20,left:100,right:100},
          children:[
            new Paragraph({alignment:AlignmentType.CENTER,children:[tx(n,{sz:18,b:true,c:'0A1628'})]}),
            new Paragraph({alignment:AlignmentType.CENTER,children:[tx(c,{sz:16,c:'1A7B8A'})]}),
          ]}))
      }),
    ]});
}

// ═══════════ NUMBERING ═══════════
const numbering = {config:[
  {reference:'bl',levels:[{level:0,format:LevelFormat.BULLET,text:'\u2022',
    alignment:AlignmentType.LEFT,
    style:{paragraph:{indent:{left:720,hanging:360},spacing:{before:40,after:40}}}}]},
  {reference:'nl',levels:[{level:0,format:LevelFormat.DECIMAL,text:'%1.',
    alignment:AlignmentType.LEFT,
    style:{paragraph:{indent:{left:720,hanging:360},spacing:{before:40,after:40}}}}]},
]};

// ═══════════ PORTADA ═══════════
const portada = [
  cen([new ImageRun({data:logo,transformation:{width:280,height:120},type:'jpg'})],{sb:200,sa:100}),
  ...sp(1),
  cen([tx('S I S T E M A   D E',{sz:18,c:'C9A84C',b:true})]),
  cen([tx('G E S T I Ó N   D E',{sz:18,c:'C9A84C',b:true})]),
  cen([tx('SEGURIDAD E HIGIENE',{sz:40,b:true,c:'0A1628'})],{sb:40}),
  cen([tx('INDUSTRIAL',{sz:40,b:true,c:'0A1628'})],{sb:10}),
  cen([tx('P O L Í T I C A   G E N E R A L   Y   P R O C E D I M I E N T O S',{sz:14,c:'1A7B8A'})],{sb:20}),
  cen([tx('O P E R A T I V O S',{sz:14,c:'1A7B8A'})]),
  ...sp(1),
  cen([tx('Versión: 1.0  |  Año: 2026  |  Clasificación: Documento Controlado',{sz:17,c:'666666'})]),
  cen([tx('Revisión Periódica: Anual o ante cambio normativo',{sz:17,c:'666666'})]),
  ...sp(1),
  infoTbl([
    ['Elaboró','Jordan N. Contreras González — Director General'],
    ['Revisó','Joel Contreras González — Director de Operaciones'],
    ['Supervisó Seguridad','Fernando Contreras González — REPSE / RH'],
    ['Código de documento','MICSA-SEG-POL-001'],
    ['Fecha de emisión','Marzo 2026'],
    ['Próxima revisión','Marzo 2027'],
    ['Número de páginas','44+'],
    ['Aplica a','Todo el personal MICSA, subcontratistas y visitantes'],
  ]),
  ...sp(2),
  cen([tx('"La seguridad no es un costo. Es la única forma de seguir operando."',{sz:19,i:true,c:'1A7B8A'})]),
  cen([tx('— Jordan Nefthali Contreras González, Fundador de GRUPO MICSA',{sz:16,i:true,c:'888888'})]),
  ...sp(2),
  firmas([
    ['Jordan N. Contreras G.','Director General'],
    ['Joel Contreras González','Director de Operaciones'],
    ['Fernando Contreras González','REPSE / RH'],
  ]),
];

// ═══════════ CONTROL VERSIONES ═══════════
const controlVersiones = [
  pgBreak(),
  h1('Control de Versiones y Revisiones'),
  bod('Este documento es un documento controlado dentro del Sistema de Gestión de Seguridad de GRUPO MICSA. Toda modificación debe ser autorizada por el Director General y por el responsable de REPSE. La versión vigente es siempre la publicada en el sistema MICSA OS. Cualquier copia impresa es una copia no controlada y puede estar desactualizada.'),
  ...sp(1),
  tbl(['Rev.','Fecha','Descripción del Cambio','Elaboró','Autorizó'],
    [['1.0','Mar 2026','Emisión inicial del documento. Sistema completo de seguridad MICSA Jordan OS v1.0.','Jordan Contreras','Jordan Contreras'],
     ['—','—','Reservado para próxima revisión','—','—'],
     ['—','—','Reservado para próxima revisión','—','—'],
    ],[800,1200,4200,1850,1850]),
  ...sp(1),
  alertBox('DISTRIBUCIÓN CONTROLADA',
    'Este documento debe entregarse a: (1) Director General, (2) Director de Operaciones, (3) Responsable REPSE/RH, (4) Supervisores de Campo, (5) Responsable de Logística. Cada receptor firma acuse y se registra en el sistema MICSA OS. La copia digital en MICSA OS es la versión oficial vigente.',
    '1A7B8A','E8F4F8'),
];

// ═══════════ CAP 01 — OBJETO, ALCANCE Y DEFINICIONES ═══════════
const cap01 = [
  pgBreak(),
  secBanner('01','OBJETO, ALCANCE Y DEFINICIONES','Fundamento, propósito y vocabulario del sistema de seguridad MICSA'),
  ...sp(1),
  h1('1.1 Objeto'),
  bod('La presente Política de Seguridad Industrial establece el marco normativo interno de GRUPO MICSA — Montajes e Izajes del Centro Industrial Contractor S.A. de C.V. — para la prevención, identificación, control y eliminación de los riesgos laborales derivados de las actividades propias de la empresa: montaje de maquinaria y equipo industrial, maniobras de izaje con grúas y montacargas, integración de líneas de producción, trabajos electromecánicos, y servicios de mantenimiento industrial.'),
  bod('El propósito fundamental de este documento es garantizar que toda persona que trabaje bajo la responsabilidad de MICSA — ya sea empleado directo, trabajador REPSE, subcontratista o personal eventual — cuente con las herramientas, el conocimiento y los procedimientos necesarios para realizar su trabajo de forma segura, en cumplimiento con la legislación mexicana vigente en materia de seguridad e higiene laboral.'),
  bod('Esta política no es un documento decorativo. Es un sistema operativo de seguridad que genera evidencia documental de cumplimiento, protege la vida de los trabajadores, protege el patrimonio de la empresa, y es el fundamento legal ante cualquier inspección de la STPS, el IMSS, o cualquier auditoría de cliente.'),
  infoBox('FUNDAMENTO LEGAL: Ley Federal del Trabajo Art. 132 Fracc. XVI, XVII',
    'El patrón está obligado a instalar y operar las fábricas, talleres, oficinas, locales y demás lugares en que deban ejecutarse los trabajos, de manera que se garantice la seguridad y la vida de los trabajadores. Cumplir con las normas que fijen las leyes y los reglamentos para prevenir los accidentes y enfermedades en los centros de trabajo. MICSA cumple esta obligación a través del presente sistema.'),
  ...sp(1),
  h1('1.2 Alcance'),
  bod('Esta política aplica de forma obligatoria e irrestricta a:'),
  bl('Todo el personal de planta y eventual de GRUPO MICSA, sin distinción de cargo, antigüedad o tipo de contrato.'),
  bl('Todo el personal suministrado bajo el esquema REPSE (Registro de Prestadoras de Servicios Especializados u Obras Especializadas) que opere en nombre o bajo instrucciones de MICSA.'),
  bl('Subcontratistas, proveedores de servicio y sus trabajadores que ingresen a los centros de trabajo donde MICSA tenga responsabilidad como contratista.'),
  bl('Visitantes y personal externo dentro de las instalaciones o frentes de trabajo de MICSA.'),
  bl('Todo proyecto ejecutado por MICSA, ya sea en planta de cliente (Carrier, IronCast, Mergon, Denso, Trinity Rail, ArcaContinental u otros) o en instalaciones propias.'),
  bod('No existe exención por urgencia operativa, presión de cliente, falta de tiempo, ni ninguna otra justificación. Los procedimientos de seguridad se aplican siempre, en todo momento y en todo lugar donde MICSA ejecute trabajos.'),
  alertBox('PELIGRO — RIESGO CRÍTICO:',
    'REGLA ABSOLUTA: Ningún supervisor, gerente, cliente ni el propio Director General puede ordenar que un trabajo se ejecute incumpliendo los procedimientos de seguridad de este documento. Si alguien recibe esa instrucción, tiene la obligación de negarse y escalar de inmediato a Jordan González. La presión de entrega nunca justifica poner en riesgo una vida.'),
  ...sp(1),
  h1('1.3 Definiciones'),
  bod('Para efectos de la presente Política, los siguientes términos tienen el significado que se indica:'),
  tbl(['Término','Definición Operativa MICSA'],
    [
      ['Accidente de Trabajo','Acontecimiento no deseado, no planificado, que interrumpe o interfiere el proceso normal de trabajo y que puede generar lesión personal, daño a equipos o al ambiente. En MICSA todo accidente — sin excepción — se reporta, se investiga y se documenta.'],
      ['Acto Inseguro','Acción u omisión humana que genera o incrementa la probabilidad de un accidente. Ejemplos: trabajar sin EPP, omitir bloqueo de energía, mover carga con gente debajo, desactivar guardas de seguridad.'],
      ['Análisis de Seguridad en el Trabajo (AST)','Identificación sistemática de los peligros específicos de una tarea antes de iniciar su ejecución. Es la herramienta principal de prevención en campo. Ver Capítulo 6.'],
      ['APR — Análisis Preliminar de Riesgos','Evaluación inicial de los riesgos de un proyecto completo, generada antes del Briefing Operativo. La genera Joel con apoyo de los supervisores.'],
      ['Área Restringida','Zona dentro del frente de trabajo donde solo puede ingresar personal con autorización específica, EPP completo y capacitación verificada. Se delimita con cinta o valla y señalización.'],
      ['Autoridad de Seguridad','Fernando Contreras González, responsable REPSE y RH. Tiene autoridad para detener cualquier trabajo que represente riesgo inminente, sin necesidad de autorización superior.'],
      ['Barricada / Perímetro de Seguridad','Delimitación física del área de trabajo para evitar el ingreso de personal no autorizado. Obligatoria en todas las maniobras de izaje, trabajos en altura y espacios confinados.'],
      ['Bloqueo / Etiquetado (LOTO)','Procedimiento de Lock Out / Tag Out. Aislamiento y bloqueo de todas las fuentes de energía (eléctrica, neumática, hidráulica, mecánica, térmica, gravitacional) antes de intervenir cualquier equipo. Ver Capítulo 8.3.'],
      ['Capacidad de Carga','Carga máxima que puede levantar de forma segura un equipo de izaje. Se obtiene de la placa del fabricante y NUNCA se supera bajo ninguna circunstancia.'],
      ['Condición Insegura','Estado físico de un lugar de trabajo, equipo, herramienta o material que representa un peligro potencial. Se elimina antes de iniciar el trabajo.'],
      ['DC-3','Constancia de Habilidades Laborales emitida por la STPS. Documenta la capacitación del trabajador en un tema específico. Requerida para trabajos de alto riesgo.'],
      ['EPP — Equipo de Protección Personal','Dispositivos, accesorios o indumentaria de uso individual destinados a proteger al trabajador de uno o más riesgos durante el trabajo. Su uso es obligatorio. Ver Capítulo 4.'],
      ['Frente de Trabajo','El área física donde MICSA ejecuta sus servicios en la planta del cliente o en instalaciones propias.'],
      ['IMSS','Instituto Mexicano del Seguro Social. Todo trabajador de MICSA debe estar dado de alta antes del primer día de trabajo.'],
      ['Incidente','Suceso que no generó lesión ni daño, pero que bajo circunstancias ligeramente diferentes lo habría generado. Todo incidente se reporta y se investiga igual que un accidente.'],
      ['Izaje','Operación de levantar, desplazar o bajar una carga utilizando equipo mecánico (grúa, montacargas, polipasto, tecle). Es la actividad de mayor riesgo de MICSA.'],
      ['LOTO','Lock Out / Tag Out. Ver \'Bloqueo / Etiquetado\'.'],
      ['NOM-STPS','Norma Oficial Mexicana emitida por la Secretaría del Trabajo y Previsión Social. Son de cumplimiento obligatorio. Ver Capítulo 2 para el listado completo aplicable a MICSA.'],
      ['Peligro','Fuente, situación o acto con potencial para causar daño (lesión o enfermedad a personas, daño a propiedad, daño al ambiente, o una combinación de estos).'],
      ['Permiso de Trabajo','Documento formal que autoriza la ejecución de un trabajo de alto riesgo por un período específico, en un lugar específico, con medidas de control verificadas. Ver Capítulo 7.'],
      ['Plan de Izaje','Documento técnico que especifica el procedimiento detallado para ejecutar una maniobra de izaje compleja: equipos, puntos de anclaje, rutas, señalero, comunicaciones. Ver Capítulo 5.2.'],
      ['Riesgo','Combinación de la probabilidad de que ocurra un evento peligroso y de la severidad de las lesiones o daños que puede causar. Se mide en la matriz de riesgo.'],
      ['REPSE','Registro de Prestadoras de Servicios Especializados u Obras Especializadas ante la STPS. MICSA número 282364.'],
      ['Señalero / Rigger','Trabajador capacitado y designado específicamente para guiar al operador de grúa durante las maniobras de izaje. Solo el señalero autorizado puede dar señales al operador.'],
      ['STPS','Secretaría del Trabajo y Previsión Social. Autoridad laboral en México.'],
      ['Subcontratista','Empresa o persona física que MICSA contrata para ejecutar una parte del trabajo bajo la supervisión de MICSA. Su seguridad es responsabilidad de MICSA mientras opera en el frente de trabajo.'],
      ['Trabajo en Altura','Cualquier trabajo donde exista riesgo de caída de más de 1.8 metros. Requiere sistema de protección contra caídas completo.'],
      ['Trabajo en Caliente','Cualquier trabajo que genere chispa, llama, calor o ignición: soldadura, corte, esmerilado, uso de sopletes.'],
      ['Zona de Peligro','Espacio circundante al punto de operación de una máquina o maniobra donde el riesgo de lesión es inminente.'],
    ],[2800,7100]),
];

// ═══════════ CAP 02 — MARCO LEGAL ═══════════
const cap02 = [
  pgBreak(),
  secBanner('02','MARCO LEGAL APLICABLE','Normatividad mexicana vigente que rige la seguridad industrial en MICSA'),
  ...sp(1),
  h1('2.1 Legislación Federal'),
  bod('Las actividades de GRUPO MICSA están reguladas por un marco normativo federal integral. El incumplimiento de cualquiera de estas disposiciones expone a la empresa a multas económicas, suspensión de operaciones, y responsabilidad penal de los representantes. El cumplimiento no es opcional.'),
  h2('2.1.1 Constitución Política de los Estados Unidos Mexicanos'),
  bod('El Artículo 123, Apartado A, fracción XV establece que el patrón está obligado a observar las disposiciones legales sobre higiene y seguridad en las instalaciones de su establecimiento y adoptar las medidas adecuadas para prevenir accidentes en el uso de las máquinas, instrumentos y materiales de trabajo.'),
  h2('2.1.2 Ley Federal del Trabajo (LFT)'),
  bod('La Ley Federal del Trabajo, en su Título Noveno \'Riesgos de Trabajo\' y particularmente en los artículos 472 al 513, regula todos los aspectos de los accidentes de trabajo y las enfermedades profesionales. Los artículos de mayor relevancia para MICSA son:'),
  tbl(['Artículo','Contenido y Aplicación en MICSA'],
    [
      ['Art. 132 Fracc. XVI','Instalar y operar de manera segura todos los lugares de trabajo. MICSA cumple esta obligación a través de este sistema de gestión.'],
      ['Art. 132 Fracc. XVII','Cumplir con las normas de prevención de accidentes y enfermedades. Cumplimiento vía NOM-STPS.'],
      ['Art. 473','Define riesgo de trabajo como accidentes y enfermedades a que están expuestos los trabajadores en ejercicio o con motivo del trabajo.'],
      ['Art. 474','Define accidente de trabajo: toda lesión orgánica o perturbación funcional, inmediata o posterior, o la muerte, producida repentinamente en ejercicio o con motivo del trabajo.'],
      ['Art. 475','Define enfermedad de trabajo: todo estado patológico derivado de la acción continuada de una causa que tenga su origen o motivo en el trabajo.'],
      ['Art. 487','El trabajador que sufra un riesgo de trabajo tiene derecho a asistencia médica y quirúrgica, rehabilitación, hospitalización, medicamentos, aparatos de prótesis, indemnización.'],
      ['Art. 509','Las empresas con más de 100 trabajadores deben constituir Comisiones de Seguridad e Higiene. MICSA constituye su Comisión con las personas designadas en el Capítulo 3.'],
      ['Art. 512','Las Comisiones de Seguridad e Higiene investigan las causas de los accidentes y enfermedades, proponen medidas preventivas y vigilan que se cumplan.'],
    ],[2000,7900]),
  h2('2.1.3 Ley del Seguro Social'),
  bod('El artículo 64 y siguientes de la Ley del Seguro Social establecen las prestaciones en dinero y en especie por riesgos de trabajo. La obligación de MICSA es mantener a todos sus trabajadores con alta ante el IMSS desde el primer día de trabajo, con el salario correcto y la clasificación de riesgo correspondiente.'),
  bod('La clase de riesgo de MICSA corresponde a la Fracción V — Industria de la transformación / montaje industrial, con una prima de riesgo determinada por el siniestro ocurrido. Fernando Contreras es el responsable de mantener esta clasificación actualizada ante el IMSS.'),
  h1('2.2 Reglamento Federal de Seguridad y Salud en el Trabajo'),
  bod('El Reglamento Federal de Seguridad y Salud en el Trabajo (DOF 13-noviembre-2014) establece en sus artículos 6 al 10 las obligaciones generales del patrón, que en el caso de MICSA incluyen:'),
  nl('Adoptar las medidas de seguridad y salud en el trabajo que correspondan a los riesgos en el centro de trabajo.'),
  nl('Llevar los registros sobre las condiciones de seguridad y salud en el trabajo y los accidentes y enfermedades de trabajo.'),
  nl('Dar aviso a la autoridad laboral de los accidentes de trabajo que ocurran dentro de las 72 horas siguientes.'),
  nl('Proporcionar a los trabajadores los equipos de protección personal de conformidad con los riesgos identificados.'),
  nl('Capacitar y adiestrar a los trabajadores sobre los riesgos y las medidas preventivas.'),
  nl('Permitir el acceso a los inspectores de la STPS y proporcionarles la información que requieran.'),
  h1('2.3 Normas Oficiales Mexicanas NOM-STPS — Catálogo Aplicable'),
  bod('Las Normas Oficiales Mexicanas de seguridad e higiene laboral son de cumplimiento obligatorio. A continuación se presenta el catálogo completo de NOM-STPS que aplican a las actividades de MICSA, con el nivel de cumplimiento requerido y el capítulo de este documento donde se desarrolla el procedimiento correspondiente.'),
  tbl(['NOM','Título','Actividad MICSA','Cap.'],
    [
      ['NOM-001-STPS-2008','Edificios, locales, instalaciones y áreas en los centros de trabajo. Condiciones de seguridad.','Todos los frentes de trabajo','5.1'],
      ['NOM-002-STPS-2010','Condiciones de seguridad — Prevención, protección y combate de incendios en los centros de trabajo.','Todos los frentes, especialmente trabajos en caliente','5.3'],
      ['NOM-004-STPS-1999','Sistemas de protección y dispositivos de seguridad en la maquinaria y equipo que se utilice en los centros de trabajo.','Instalación y montaje de maquinaria','5.1'],
      ['NOM-005-STPS-1998','Relativa a las condiciones de seguridad e higiene en los centros de trabajo para el manejo, transporte y almacenamiento de sustancias químicas peligrosas.','Manejo de solventes, aceites, gases industriales','5.6'],
      ['NOM-006-STPS-2014','Manejo y almacenamiento de materiales — Condiciones y procedimientos de seguridad.','Montaje, maniobras, logística de materiales','5.2'],
      ['NOM-009-STPS-2011','Condiciones de seguridad para realizar trabajos en altura.','Montajes en nivel elevado, estructuras, mezanines','5.1'],
      ['NOM-010-STPS-1999','Condiciones de seguridad e higiene en los centros de trabajo donde se manejen, transporten, procesen o almacenen sustancias químicas capaces de generar contaminación en el medio ambiente laboral.','Almacén y uso de productos químicos','5.6'],
      ['NOM-011-STPS-2001','Condiciones de seguridad e higiene en los centros de trabajo donde se genere ruido.','Uso de herramienta neumática, esmerilado','4.2'],
      ['NOM-013-STPS-1993','Relativa a las condiciones de seguridad e higiene en los centros de trabajo donde se generen radiaciones electromagnéticas no ionizantes.','Soldadura eléctrica y arco','5.3'],
      ['NOM-017-STPS-2008','Equipo de protección personal — Selección, uso y manejo en los centros de trabajo.','Todo el personal MICSA','4'],
      ['NOM-018-STPS-2015','Sistema Armonizado para la Identificación y Comunicación de Peligros y Riesgos de Productos Químicos Peligrosos en los Centros de Trabajo.','Uso de solventes, gases, lubricantes','5.6'],
      ['NOM-019-STPS-2011','Constitución, integración, organización y funcionamiento de las comisiones de seguridad e higiene.','Comisión de Seguridad MICSA','3.3'],
      ['NOM-020-STPS-2011','Recipientes sujetos a presión, recipientes criogénicos y generadores de vapor o calderas — Funcionamiento — Condiciones de seguridad.','Equipos neumáticos, compresores, autoclaves','5.6'],
      ['NOM-021-STPS-1994','Relativa a los requerimientos y características de los informes de los riesgos de trabajo que ocurran.','Reporte de incidentes y accidentes','9'],
      ['NOM-022-STPS-2015','Electricidad estática en los centros de trabajo — Condiciones de seguridad.','Trabajos electromecánicos, soldadura','5.5'],
      ['NOM-025-STPS-2008','Condiciones de iluminación en los centros de trabajo.','Trabajo nocturno, zonas sin iluminación natural','5.1'],
      ['NOM-026-STPS-2008','Colores y señales de seguridad e higiene e identificación de riesgos por fluidos conducidos en tuberías.','Señalización de todos los frentes','5.1'],
      ['NOM-027-STPS-2008','Actividades de soldadura y corte — Condiciones de seguridad e higiene.','Soldadura eléctrica, oxigas, plasma','5.3'],
      ['NOM-029-STPS-2011','Mantenimiento de las instalaciones eléctricas en los centros de trabajo — Condiciones de seguridad.','Trabajos eléctricos y electromecánicos','5.5'],
      ['NOM-030-STPS-2009','Servicios preventivos de seguridad y salud en el trabajo.','Programa de capacitación MICSA','10'],
      ['NOM-031-STPS-2011','Construcción — Condiciones de seguridad y salud en el trabajo.','Obras civiles menores dentro de proyectos industriales','5.1'],
      ['NOM-033-STPS-2015','Trabajos en espacios confinados — Condiciones de seguridad y salud.','Trabajo en tanques, silos, fosas, ductos','5.4'],
      ['NOM-034-STPS-2016','Condiciones de seguridad para el acceso y desarrollo de actividades en espacios confinados en los centros de trabajo.','Trabajos especiales en espacios cerrados','5.4'],
      ['NOM-035-STPS-2018','Factores de riesgo psicosocial en el trabajo — Identificación, análisis y prevención.','Todo el personal MICSA','10.5'],
      ['NOM-036-1-STPS-2018','Factores de riesgo ergonómico en el trabajo — Levantamiento, carga, descarga y transporte.','Personal de campo — montajes manuales','4.4'],
    ],[2200,4200,2200,1300]),
  ...sp(1),
  h1('2.4 Normas Relacionadas con Izaje y Equipo de Carga'),
  bod('Por la naturaleza especializada de las actividades de izaje de MICSA, aplican adicionalmente las siguientes normas y estándares técnicos:'),
  tbl(['Norma / Estándar','Descripción','Aplicación en MICSA'],
    [
      ['NOM-006-STPS-2014','Manejo y almacenamiento de materiales — Condiciones y procedimientos de seguridad.','Base para todos los procedimientos de manejo de cargas'],
      ['ASME B30.2','Overhead and Gantry Cranes — Safety Standard','Grúas aéreas en plantas de cliente'],
      ['ASME B30.9','Slings — Safety Standard','Estrobos y eslingas de izaje'],
      ['ASME B30.20','Below-the-Hook Lifting Devices','Dispositivos de sujeción de carga'],
      ['ASME B30.26','Rigging Hardware — Safety Standard','Grilletes, anillos, cadenas de izaje'],
      ['ASME P30.1','Planning for Load Handling Activities','Planeación de maniobras complejas'],
      ['OSHA 1926.1400','Cranes and Derricks in Construction','Referencial para operación de grúas'],
      ['ISO 4306','Cranes — Vocabulary','Vocabulario técnico de grúas'],
    ],[2500,4200,3200]),
  infoBox('ACTUALIZACIÓN NORMATIVA',
    'Fernando Contreras es responsable de vigilar las actualizaciones del DOF en materia de NOM-STPS. Cuando se emita una nueva norma o se modifique una existente, tiene un plazo de 30 días para evaluar el impacto en los procedimientos de MICSA y actualizar este documento.'),
];

// ═══════════ CAP 03 — RESPONSABILIDADES ═══════════
const cap03 = [
  pgBreak(),
  secBanner('03','RESPONSABILIDADES Y AUTORIDAD','Quién hace qué en el sistema de seguridad industrial MICSA'),
  ...sp(1),
  h1('3.1 Principio de Responsabilidad Escalonada'),
  bod('En MICSA, la seguridad es responsabilidad de TODOS y de forma específica de CADA UNO según su rol. No existe el \'yo pensé que alguien más lo haría\'. Este capítulo define qué debe hacer cada persona del equipo en materia de seguridad, tanto en su actividad cotidiana como ante una emergencia.'),
  bod('La responsabilidad en seguridad no se delega hacia abajo — fluye en ambas direcciones. Un Director es tan responsable de la seguridad de su equipo como cada trabajador lo es de la suya propia. Nadie puede ordenar a otro que comprometa su seguridad.'),
  h1('3.2 Matriz de Responsabilidades por Rol'),
  h2('3.2.1 Jordan Nefthali Contreras González — Director General'),
  bod('El Director General es el responsable máximo del sistema de seguridad industrial de MICSA. Su liderazgo visible en seguridad establece la cultura de toda la organización.'),
  bod('Responsabilidades específicas de Jordan en materia de seguridad:'),
  nl('Aprobar, publicar y actualizar la presente Política de Seguridad Industrial.'),
  nl('Asignar los recursos económicos necesarios para EPP, capacitación, herramienta de seguridad y señalización.'),
  nl('Participar activamente en la Comisión de Seguridad e Higiene como Presidente.'),
  nl('Revisar mensualmente los indicadores de seguridad: número de incidentes, días sin accidente, capacitaciones completadas.'),
  nl('Tomar decisiones de paro total de operaciones cuando la seguridad de las personas esté en riesgo crítico.'),
  nl('Firmar todos los documentos de investigación de accidentes graves como Director responsable.'),
  nl('Dar el ejemplo visible de cumplimiento: usar EPP en los frentes de trabajo, participar en las pláticas de seguridad.'),
  nl('Asegurarse de que ningún trabajador empiece a laborar sin estar dado de alta en el IMSS.'),
  nl('Garantizar que los subcontratistas y proveedores cumplan los estándares de seguridad de MICSA como condición de contratación.'),
  nl('Responder personalmente ante la STPS, el IMSS y las autoridades en caso de accidente grave.'),

  h2('3.2.2 Joel Contreras González — Director de Operaciones (COO)'),
  bod('El Director de Operaciones es la línea de comando principal en seguridad dentro de todos los proyectos activos. Es el puente entre la política de Jordan y la ejecución de campo de Roberto Ulises Sifuentes Fraire, Hugo Arnoldo de Alba Romero, Sergio Guzmán y Fernando.'),
  nl('Verificar los 5 Gates de seguridad en el Briefing Operativo antes de autorizar el arranque de cualquier proyecto.'),
  nl('Revisar y aprobar los Análisis Preliminares de Riesgo (APR) de cada proyecto.'),
  nl('Asegurarse de que cada supervisor de campo tenga el Plan de Izaje aprobado antes de iniciar maniobras.'),
  nl('Responder a incidentes en campo en las primeras 2 horas y coordinar la respuesta de emergencia.'),
  nl('Verificar que todo el personal asignado a un proyecto está dado de alta en IMSS y tiene el DC-3 correspondiente.'),
  nl('Revisar la bitácora de seguridad (F-01) de cada proyecto activo todos los días.'),
  nl('Detener cualquier trabajo cuando reciba reporte de condición insegura hasta que se corrija.'),
  nl('Participar en la investigación de todos los accidentes e incidentes de sus proyectos.'),
  nl('Asegurarse de que el EPP completo llegue al frente de trabajo antes de que llegue el personal.'),
  nl('Comunicar a Jordan de inmediato cualquier accidente grave, paro de obra por seguridad o inspección de STPS.'),

  h2('3.2.3 Francis — Directora Financiera (CFO)'),
  bod('La responsabilidad de Francis en seguridad es de soporte financiero y cumplimiento administrativo:'),
  nl('Aprobar y garantizar el presupuesto para EPP, capacitación y herramienta de seguridad en cada proyecto.'),
  nl('Verificar que las primas del IMSS de todos los trabajadores correspondan a la clase de riesgo correcta.'),
  nl('Mantener actualizados los pagos de cuotas IMSS para garantizar cobertura médica de todos los trabajadores.'),
  nl('Registrar los costos de accidentes (ausentismo, reemplazo, daños) como indicador de la eficiencia del sistema.'),

  h2('3.2.4 Fernando Contreras González — Responsable REPSE y Recursos Humanos'),
  bod('Fernando es el operador del sistema de seguridad. Es quien verifica que los requisitos normativos y documentales estén en regla en todo momento. Su trabajo previene multas, inspecciones y accidentes por falta de documentación.'),
  nl('Mantener el registro REPSE 282364 vigente y actualizado ante la STPS.'),
  nl('Gestionar el alta y baja de todos los trabajadores ante el IMSS, con el salario correcto, desde el primer día.'),
  nl('Administrar y renovar todos los DC-3 del equipo de campo. Ningún trabajador hace trabajo de alto riesgo sin DC-3 vigente.'),
  nl('Elaborar y mantener actualizado el programa anual de capacitación en seguridad.'),
  nl('Presidir o coordinar las reuniones de la Comisión de Seguridad e Higiene.'),
  nl('Investigar los accidentes e incidentes junto con el supervisor del área y elaborar el informe formal.'),
  nl('Llevar el control de las inspecciones de EPP: qué tiene cada trabajador, en qué estado, cuándo vence.'),
  nl('Verificar el cumplimiento de NOM-STPS y elaborar el programa de cumplimiento normativo anual.'),
  nl('Representar a MICSA ante la STPS e IMSS en inspecciones y notificaciones.'),
  nl('Mantener los archivos físicos y digitales de toda la documentación de seguridad.'),

  h2('3.2.5 Roberto Ulises Sifuentes Fraire — Supervisor de Campo'),
  bod('El Supervisor de Campo es el responsable directo de la seguridad en el frente de trabajo. Es la figura de autoridad en seguridad que los trabajadores ven todos los días. Su comportamiento en seguridad define el comportamiento de toda la cuadrilla.'),
  nl('Verificar que todo el personal tenga EPP completo y en buen estado antes de iniciar cualquier actividad.'),
  nl('Realizar el AST (Análisis de Seguridad en el Trabajo) antes de iniciar cada tarea.'),
  nl('Dar la plática de seguridad de 5 minutos (\'Talk Box\') al inicio de cada día de trabajo.'),
  nl('Identificar y reportar de inmediato toda condición insegura al área de trabajo.'),
  nl('Detener el trabajo de cualquier trabajador que observe ejecutando un acto inseguro.'),
  nl('Verificar que el área esté libre de personal antes de iniciar maniobras de izaje.'),
  nl('Asegurarse de que todos los permisos de trabajo (altura, caliente, espacio confinado) estén firmados antes de empezar.'),
  nl('Llenar el F-01 (Bitácora) con los datos de seguridad del día, incluyendo cualquier incidente.'),
  nl('Reportar a Joel en las primeras 30 minutos cualquier incidente o accidente.'),
  nl('Verificar que el área quede limpia, ordenada y con EPP recuperado al terminar cada jornada.'),
  nl('Nunca permitir trabajo bajo la carga durante maniobras de izaje. Esta regla no tiene excepciones.'),

  h2('3.2.6 Hugo Arnoldo de Alba Romero — Supervisor de Campo'),
  bod('Las responsabilidades de Hugo Arnoldo de Alba Romero son idénticas a las de Roberto Ulises Sifuentes Fraire (Sección 3.2.5). Cuando Hugo está asignado a un proyecto, él es la autoridad de seguridad en ese frente.'),

  h2('3.2.7 Sergio Guzmán — Responsable de Logística'),
  bod('Sergio Guzmán tiene responsabilidad de seguridad en todo lo que se refiere a equipos, herramienta, transporte y mantenimiento del parque vehicular e industrial de MICSA.'),
  nl('Verificar que todo el equipo de izaje tenga su certificación vigente antes de enviarlo a campo.'),
  nl('Mantener el inventario de EPP actualizado y reponer cualquier equipo que esté dañado, vencido o que el trabajador reporte deteriorado.'),
  nl('Revisar el estado mecánico de los vehículos de MICSA antes de autorizar su uso en campo.'),
  nl('Asegurarse de que los estrobos, eslingas, grilletes y demás aparejos de izaje tengan su carga de trabajo segura (SWL) marcada y vigente.'),
  nl('Inspeccionar y registrar el estado de toda la herramienta antes de enviarla a campo.'),
  nl('Mantener el botiquín de primeros auxilios de cada unidad y del almacén actualizados.'),
  nl('Verificar que los extintores estén vigentes y con carga en almacén y vehículos.'),

  h2('3.2.8 Alexis — Sistemas'),
  bod('Alexis garantiza que los sistemas digitales de seguridad funcionen correctamente:'),
  nl('Mantener operativo el módulo de seguridad en MICSA OS y MICSA Docs.'),
  nl('Asegurar que los formatos de seguridad (AST, Permisos, F-01) estén disponibles digitalmente en todo momento.'),
  nl('Implementar alertas y notificaciones automáticas cuando venzan DC-3, certificaciones de equipo o vigencias de EPP.'),

  h2('3.2.9 Todo el Personal de Campo — Riggers, Cuadrilla, Operadores'),
  bod('Cada trabajador de MICSA es responsable de su propia seguridad y de la seguridad de sus compañeros. Ser trabajador de MICSA significa aceptar las siguientes responsabilidades sin excepción:'),
  nl('Usar el EPP completo y correcto para cada tarea, todo el tiempo, sin excepción.'),
  nl('Conocer los peligros de su área de trabajo y las medidas de control que aplican.'),
  nl('Reportar INMEDIATAMENTE cualquier condición insegura, acto inseguro o incidente al supervisor.'),
  nl('Nunca operar equipo para el que no tiene capacitación o para el que no tiene autorización.'),
  nl('Participar activamente en el AST antes de iniciar cada tarea.'),
  nl('Acatar las instrucciones de seguridad del supervisor sin cuestionamiento en campo — los cuestionamientos se hacen antes o después del trabajo, no durante.'),
  nl('Negarse a realizar cualquier trabajo que considere peligroso y no tiene los controles correctos. Esto no es desobediencia — es un derecho del trabajador contemplado en la LFT.'),
  nl('Mantener su área de trabajo limpia y ordenada.'),
  nl('Nunca trabajar bajo la influencia de alcohol, drogas o medicamentos que alteren el estado de alerta.'),
  nl('Cuidar, usar correctamente y reportar el deterioro del EPP asignado.'),

  h1('3.3 Comisión de Seguridad e Higiene'),
  bod('De conformidad con la NOM-019-STPS-2011 y el Artículo 509 de la Ley Federal del Trabajo, GRUPO MICSA constituye su Comisión de Seguridad e Higiene con la siguiente integración:'),
  tbl(['Cargo en Comisión','Nombre','Cargo MICSA','Responsabilidad Principal'],
    [
      ['Presidente','Jordan N. Contreras González','Director General','Aprobar recursos y decisiones finales de seguridad'],
      ['Secretario','Fernando Contreras González','REPSE / RH','Convocar, registrar y dar seguimiento a acuerdos'],
      ['Representante de Operaciones','Joel Contreras González','Director de Operaciones','Reportar el estado de seguridad de proyectos activos'],
      ['Representante de Campo','Roberto Ulises Sifuentes Fraire','Supervisor de Campo','Reportar condiciones de los frentes de trabajo'],
      ['Representante de Campo','Hugo Arnoldo de Alba Romero','Supervisor de Campo','Reportar condiciones de los frentes de trabajo'],
      ['Representante de Logística','Sergio Guzmán','Logística','Reportar estado del equipo y EPP'],
      ['Representante de Trabajadores','Designado por rotación','Personal de campo','Voz del trabajador en materia de seguridad'],
    ],[2200,2400,2200,3100]),
  bod('La Comisión se reúne mensualmente en fecha fija definida por Fernando. Las reuniones son obligatorias para todos sus integrantes. Se levanta acta de cada reunión y se registra en el sistema MICSA OS. Los acuerdos tienen plazo de cumplimiento y responsable asignado.'),
  h2('3.3.1 Agenda Estándar de la Reunión Mensual de Seguridad'),
  nl('Revisión de accidentes e incidentes del mes: análisis de causas y acciones correctivas.'),
  nl('Estado de indicadores: días sin accidente, número de near-misses reportados, porcentaje de capacitaciones completadas.'),
  nl('Inspecciones de campo: reporte de condiciones inseguras encontradas y corregidas.'),
  nl('Estado del EPP: inventario, vigencias, reposiciones pendientes.'),
  nl('Estado de certificaciones de equipo de izaje: qué vence próximamente.'),
  nl('Estado de DC-3 del personal: quién tiene pendiente renovación.'),
  nl('Revisión del programa de capacitación del mes: qué se ejecutó, qué está pendiente.'),
  nl('Propuestas de mejora: cualquier integrante puede proponer.'),
  nl('Acuerdos del mes anterior: estado de cumplimiento.'),
  nl('Nuevos acuerdos: responsable y fecha límite para cada uno.'),
];

// Por tamaño, continuaremos con los siguientes capítulos
// Vamos a guardar esta primera parte y luego agregar el resto

// ═══════════ CAP 04-12 + ANEXOS (continuación) ═══════════
// Se cargan desde archivo separado para manejar el tamaño
const cap04_12 = require('./build_seguridad_p2.js');

const sections = [{
  properties: {
    page: {
      size: {width:12240, height:15840},
      margin: {top:1440, right:1080, bottom:1080, left:1260},
    },
  },
  headers: {
    default: new Header({
      children: [
        new Table({width:{size:9900,type:WidthType.DXA},columnWidths:[2500,7400],
          rows:[new TableRow({children:[
            new TableCell({borders:nob,margins:{top:0,bottom:0,left:0,right:0},
              verticalAlign:VerticalAlign.CENTER,
              children:[new Paragraph({children:[
                new ImageRun({data:logo,transformation:{width:160,height:68},type:'jpg'})
              ]})]}),
            new TableCell({borders:nob,margins:{top:0,bottom:0,left:0,right:0},
              verticalAlign:VerticalAlign.CENTER,
              children:[new Paragraph({alignment:AlignmentType.RIGHT,
                border:{bottom:{style:BorderStyle.SINGLE,size:4,color:'C9A84C',space:4}},
                children:[tx('Política Seguridad Industrial  |  GRUPO MICSA  |  RFC: MIC2301268S5  |  REPSE: 282364',{sz:14,c:'888888'})]})]})
          ]})]})
      ],
    }),
  },
  footers: {
    default: new Footer({
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          border:{top:{style:BorderStyle.SINGLE,size:4,color:'C9A84C',space:6}},
          children: [
            tx('MICSA OS  |  MIC2301268S5  |  REPSE 282364  |  Ciudad Frontera, Coahuila, México  |  Pág. ',{sz:14,c:'888888'}),
            new TextRun({children:[PageNumber.CURRENT],font:'Arial',size:14,color:'888888'}),
            tx('  de  ',{sz:14,c:'888888'}),
            new TextRun({children:[PageNumber.TOTAL_PAGES],font:'Arial',size:14,color:'888888'}),
          ],
        }),
      ],
    }),
  },
  children: [
    ...portada,
    ...controlVersiones,
    ...cap01,
    ...cap02,
    ...cap03,
    ...cap04_12,
  ],
}];

const doc = new Document({numbering, sections});

Packer.toBuffer(doc).then(buf => {
  const outPath = '/Users/jordangonzalez/Downloads/MICSA_Seguridad_Higiene_Industrial.docx';
  fs.writeFileSync(outPath, buf);
  console.log('OK', Math.round(buf.length/1024), 'KB ->', outPath);
}).catch(e => { console.error('ERROR:', e.message); process.exit(1); });

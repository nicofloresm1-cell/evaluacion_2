import { useState } from 'react'
import './App.css'

function App() {
  const [expandedLaw, setExpandedLaw] = useState(null)

  const laws = [
    {
      id: 1,
      name: 'Ley 19.628',
      title: 'Protección de datos personales',
      icon: '🔒',
      color: 'from-blue-600 to-blue-400',
      description: 'Regula el tratamiento de datos personales y establece derechos de los titulares.',
      rights: ['Acceso', 'Rectificación', 'Cancelación', 'Oposición'],
      details: {
        year: '1999',
        scope: 'Aplicable a cualquier persona o entidad que recopile datos personales',
        keyPoints: [
          'Primera ley sobre protección de datos en Chile',
          'Crea el Consejo para Transparencia',
          'Establece el derecho de acceso a datos personales',
          'Permite solicitar rectificación o cancelación'
        ],
        sanctions: 'Multas de hasta 50 UTM',
        contact: 'Consejo para la Transparencia y Acceso a la Información Pública'
      }
    },
    {
      id: 2,
      name: 'Ley 21.096',
      title: 'Protección de datos personales (reforma)',
      icon: '⚖️',
      color: 'from-purple-600 to-purple-400',
      description: 'Moderniza la protección de datos con nuevos derechos y responsabilidades.',
      rights: ['Portabilidad', 'Derecho al olvido', 'Consentimiento explícito', 'Evaluación automatizada'],
      details: {
        year: '2021',
        scope: 'Reforma a la Ley 19.628 con nuevas obligaciones para empresas',
        keyPoints: [
          'Consentimiento explícito y afirmativo requerido',
          'Derecho a la portabilidad de datos',
          'Derecho al olvido (cancellación efectiva)',
          'Prohibición de decisiones basadas únicamente en algoritmos',
          'Responsabilidad empresarial aumentada',
          'Multas de hasta 15.000 UTM por incumplimiento'
        ],
        sanctions: 'Multas de hasta 15.000 UTM',
        contact: 'Servicio Nacional del Consumidor (SERNAC)'
      }
    },
    {
      id: 3,
      name: 'LGPD Chile',
      title: 'Ley de Gobierno Digital',
      icon: '💻',
      color: 'from-green-600 to-green-400',
      description: 'Promueve la transformación digital del Estado con protección de datos.',
      rights: ['Interoperabilidad', 'Transparencia', 'Acceso digital', 'Seguridad'],
      details: {
        year: '2011 (última reforma 2021)',
        scope: 'Aplicable a órganos e instituciones de la administración pública',
        keyPoints: [
          'Promueve la transformación digital del Estado',
          'Garantiza acceso digital a servicios públicos',
          'Interoperabilidad entre sistemas públicos',
          'Seguridad y autenticación digital',
          'Transparencia en el uso de datos',
          'Firma electrónica reconocida'
        ],
        sanctions: 'Responsabilidad administrativa',
        contact: 'Ministerio Secretaría General de la Presidencia (MINSEGPRES)'
      }
    },
    {
      id: 4,
      name: 'Ley 20.584',
      title: 'Derechos del paciente',
      icon: '🏥',
      color: 'from-red-600 to-red-400',
      description: 'Protege datos sensibles de salud en instituciones médicas.',
      rights: ['Confidencialidad médica', 'Acceso a historiales', 'Consentimiento', 'Privacidad'],
      details: {
        year: '2012',
        scope: 'Aplicable a todas las instituciones proveedoras de servicios de salud',
        keyPoints: [
          'Derechos fundamentales del paciente en el sistema de salud',
          'Confidencialidad de información médica',
          'Acceso a historial clínico',
          'Consentimiento informado para tratamientos',
          'Intimidad y privacidad en atención médica',
          'Protección de datos sensibles de salud'
        ],
        sanctions: 'Multas y sanciones administrativas',
        contact: 'Superintendencia de Salud'
      }
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">🛡️ Protección de Datos en Chile</h1>
          <p className="text-lg md:text-xl text-blue-100">Marco legal y derechos fundamentales del ciudadano digital</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Info Cards Grid */}
        <div className="space-y-6 mb-12">
          {laws.map((law) => (
            <div key={law.id}>
              {/* Card */}
              <div
                className="group bg-slate-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={() => setExpandedLaw(expandedLaw === law.id ? null : law.id)}
              >
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${law.color} p-6 text-white`}>
                  <div className="text-5xl mb-3">{law.icon}</div>
                  <h3 className="text-2xl font-bold mb-1">{law.name}</h3>
                  <p className="text-lg opacity-90">{law.title}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-slate-200 mb-4">{law.description}</p>
                  
                  {/* Rights Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {law.rights.map((right) => (
                      <span
                        key={right}
                        className="px-3 py-1 bg-slate-600 text-slate-100 rounded-full text-sm font-medium hover:bg-slate-500 transition-colors"
                      >
                        ✓ {right}
                      </span>
                    ))}
                  </div>

                  {/* Expand indicator */}
                  <div className="text-center">
                    <button className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                      {expandedLaw === law.id ? '▼ Menos info' : '▶ Más info'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Expanded Content - Below the card */}
              {expandedLaw === law.id && (
                <div className="mt-4 animate-fade-in bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg shadow-xl overflow-hidden">
                  {/* Landing Page Content */}
                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Left Column */}
                      <div>
                        <div className="mb-8">
                          <h3 className="text-2xl font-bold text-white mb-3">📅 Año de Vigencia</h3>
                          <p className="text-xl text-blue-300">{law.details.year}</p>
                        </div>

                        <div className="mb-8">
                          <h3 className="text-2xl font-bold text-white mb-3">🎯 Alcance</h3>
                          <p className="text-slate-200 leading-relaxed">{law.details.scope}</p>
                        </div>

                        <div className="mb-8">
                          <h3 className="text-2xl font-bold text-white mb-3">⚠️ Sanciones</h3>
                          <p className="text-red-300 font-semibold text-lg">{law.details.sanctions}</p>
                        </div>

                        <div>
                          <h3 className="text-2xl font-bold text-white mb-3">📞 Contacto</h3>
                          <p className="text-slate-200">{law.details.contact}</p>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4">📋 Puntos Clave</h3>
                        <div className="space-y-3">
                          {law.details.keyPoints.map((point, idx) => (
                            <div key={idx} className="flex gap-3 items-start">
                              <span className="text-blue-400 font-bold text-lg min-w-fit">✓</span>
                              <p className="text-slate-200">{point}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* All Rights */}
                    <div className="mt-8 pt-8 border-t border-slate-500">
                      <h3 className="text-xl font-bold text-white mb-4">🔐 Derechos Asociados</h3>
                      <div className="flex flex-wrap gap-3">
                        {law.rights.map((right) => (
                          <div
                            key={right}
                            className="px-4 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-500 transition-colors"
                          >
                            ✓ {right}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Key Principles Section */}
        <div className="bg-slate-700 rounded-lg p-8 mb-12 shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6">📋 Principios Fundamentales</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-600 p-6 rounded-lg">
              <div className="text-3xl mb-3">📌</div>
              <h4 className="text-xl font-bold text-white mb-2">Legitimidad</h4>
              <p className="text-slate-300">Los datos solo se recopilan con propósito legítimo y consentimiento.</p>
            </div>
            <div className="bg-slate-600 p-6 rounded-lg">
              <div className="text-3xl mb-3">🔐</div>
              <h4 className="text-xl font-bold text-white mb-2">Seguridad</h4>
              <p className="text-slate-300">Protección técnica y administrativa de datos sensibles.</p>
            </div>
            <div className="bg-slate-600 p-6 rounded-lg">
              <div className="text-3xl mb-3">🔍</div>
              <h4 className="text-xl font-bold text-white mb-2">Transparencia</h4>
              <p className="text-slate-300">Derecho a saber qué datos se tienen y cómo se utilizan.</p>
            </div>
          </div>
        </div>

        {/* Rights Timeline */}
        <div className="bg-slate-700 rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-8">⏱️ Evolución de la Protección de Datos</h2>
          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div className="w-1 h-16 bg-blue-500 mt-2"></div>
              </div>
              <div className="pb-6">
                <h4 className="text-xl font-bold text-white mb-1">1999: Ley 19.628</h4>
                <p className="text-slate-300">Primer marco legal sobre protección de datos personales en Chile.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div className="w-1 h-16 bg-purple-500 mt-2"></div>
              </div>
              <div className="pb-6">
                <h4 className="text-xl font-bold text-white mb-1">2021: Ley 21.096</h4>
                <p className="text-slate-300">Reforma que moderniza derechos y responsabilidades de empresas.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1">Presente: Cumplimiento Normativo</h4>
                <p className="text-slate-300">Empresas deben implementar políticas de privacidad y seguridad.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-900 border-t border-slate-700 py-8 px-6 mt-12">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>Infografía sobre la protección de datos en Chile | Información con fines educativos</p>
          <p className="text-sm mt-2">Consulta las leyes vigentes para regulaciones oficiales</p>
        </div>
      </div>
    </div>
  )
}

export default App

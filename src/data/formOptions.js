export const FORM_OPTIONS = {
  tipoProyecto: [
    { value: 'importacion-general', label: 'Importación General' },
    { value: 'importacion-especializada', label: 'Importación Especializada' },
    { value: 'consultoria', label: 'Consultoría' },
    { value: 'logistica', label: 'Logística' }
  ],
  presupuesto: [
    { value: '0-10k', label: '$0 - $10,000' },
    { value: '10k-50k', label: '$10,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k+', label: '$100,000+' }
  ],
  tema: [
    { value: 'cotizacion', label: 'Solicitar Cotización' },
    { value: 'informacion', label: 'Información General' },
    { value: 'soporte', label: 'Soporte Técnico' },
    { value: 'partnership', label: 'Oportunidades de Negocio' }
  ]
};

export const INITIAL_FORM_DATA = {
  nombre: '',
  correo: '',
  tipoProyecto: '',
  presupuesto: '',
  tema: '',
  detalles: ''
};
// Google Tag Manager Events
export const GTMEvents = {
  // Conversão - Formulário de contato enviado
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  
  // Conversão - WhatsApp clicado
  WHATSAPP_CLICK: 'whatsapp_click',
  
  // Conversão - Telefone clicado
  PHONE_CLICK: 'phone_click',
  
  // Conversão - Orçamento solicitado
  QUOTE_REQUEST: 'quote_request',
  
  // Conversão - Agendamento de visita
  SCHEDULE_VISIT: 'schedule_visit',
  
  // Engajamento - Seção visualizada
  SECTION_VIEW: 'section_view',
  
  // Engajamento - Serviço específico clicado
  SERVICE_CLICK: 'service_click'
};

// Função para enviar eventos para o GTM
export const sendGTMEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: eventName,
      ...eventData,
      timestamp: new Date().toISOString()
    });
  }
};

// Eventos específicos prontos para usar
export const trackContactForm = (method: 'form' | 'whatsapp' | 'phone') => {
  sendGTMEvent(GTMEvents.CONTACT_FORM_SUBMIT, {
    contact_method: method,
    page_location: window.location.href
  });
};

export const trackWhatsAppClick = (source: string, message?: string) => {
  sendGTMEvent(GTMEvents.WHATSAPP_CLICK, {
    click_source: source,
    message_content: message,
    page_location: window.location.href
  });
};

export const trackPhoneClick = (source: string) => {
  sendGTMEvent(GTMEvents.PHONE_CLICK, {
    click_source: source,
    page_location: window.location.href
  });
};

export const trackQuoteRequest = (service: string) => {
  sendGTMEvent(GTMEvents.QUOTE_REQUEST, {
    service_type: service,
    page_location: window.location.href
  });
};

export const trackScheduleVisit = (source: string) => {
  sendGTMEvent(GTMEvents.SCHEDULE_VISIT, {
    click_source: source,
    page_location: window.location.href
  });
};

export const trackSectionView = (sectionName: string) => {
  sendGTMEvent(GTMEvents.SECTION_VIEW, {
    section_name: sectionName,
    page_location: window.location.href
  });
};

export const trackServiceClick = (serviceName: string) => {
  sendGTMEvent(GTMEvents.SERVICE_CLICK, {
    service_name: serviceName,
    page_location: window.location.href
  });
};
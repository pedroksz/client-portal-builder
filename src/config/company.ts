// ===========================================
// CONFIGURAÇÃO DA EMPRESA
// Altere os dados abaixo antes de compilar
// ===========================================

export const company = {
  // Nome completo da empresa
  name: "FAROLDIGITAL GEOTECNOLOGIA LTDA",
  
  // CNPJ da empresa
  cnpj: "97.551.525/0001-57",
  
  // Atividade principal da empresa
  activity: "consultoria em gestão empresarial",
  
  // Email de contato
  email: "contato@faroldigital.com.br",
  
  // Telefone formatado para exibição
  phoneFormatted: "(11) 4863-7288",
  
  // Telefone para link tel:
  phoneLink: "+5511948637288",
  
  // Número do WhatsApp (apenas números com código do país)
  whatsapp: "5511948637288",
  
  // Horário de atendimento
  serviceHours: "8h às 20h",
};

// ===========================================
// CONFIGURAÇÃO DE SEO
// ===========================================

export const seo = {
  // Título da página (aparece na aba do navegador)
  title: "Portal do Cliente",
  
  // Descrição para mecanismos de busca
  description: `${company.name} - Portal do Cliente para atendimento via WhatsApp`,
  
  // Autor do site
  author: company.name,
};

// Link do WhatsApp gerado automaticamente
export const whatsappLink = `https://wa.me/${company.whatsapp}`;

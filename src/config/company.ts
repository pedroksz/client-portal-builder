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
// CONFIGURAÇÃO DE TEMA / CORES
// Altere apenas o "hue" para mudar todas as cores!
// ===========================================

export const theme = {
  // HUE: Número de 0 a 360 que define a cor base do site
  // Exemplos:
  //   0   = Vermelho
  //   30  = Laranja
  //   60  = Amarelo
  //   120 = Verde
  //   180 = Ciano
  //   215 = Azul (atual)
  //   270 = Roxo
  //   300 = Rosa/Magenta
  //   330 = Rosa avermelhado
  hue: 215,
  
  // ACCENT HUE: Cor de destaque (botões WhatsApp, etc.)
  // Dica: Use cores complementares ou análogas
  // Deixe como null para calcular automaticamente (cor complementar)
  accentHue: 145, // Verde WhatsApp (null = automático)
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

// Link do WhatsApp (formato wa.me com mensagem)
export const whatsappLink = `wa.me/${company.whatsapp}?text=Olá!%20Preciso%20de%20atendimento`;

// Função para abrir WhatsApp sem mostrar URL no hover
export const openWhatsApp = () => {
  window.open(`https://${whatsappLink}`, "_blank", "noopener,noreferrer");
};

// ===========================================
// GERADOR DE PALETA DE CORES (NÃO ALTERAR)
// ===========================================

// Calcula o accent hue automaticamente se não definido
const getAccentHue = () => {
  if (theme.accentHue !== null) return theme.accentHue;
  // Cor complementar (oposta no círculo cromático)
  return (theme.hue + 150) % 360;
};

// Gera as variáveis CSS baseadas no hue
export const generateThemeColors = () => {
  const h = theme.hue;
  const ah = getAccentHue();
  
  return {
    light: {
      background: `${h} 20% 97%`,
      foreground: `${h} 50% 15%`,
      card: `0 0% 100%`,
      cardForeground: `${h} 50% 15%`,
      popover: `0 0% 100%`,
      popoverForeground: `${h} 50% 15%`,
      primary: `${h} 60% 25%`,
      primaryForeground: `0 0% 100%`,
      secondary: `${h} 40% 96%`,
      secondaryForeground: `${h} 50% 15%`,
      muted: `${h} 15% 92%`,
      mutedForeground: `${h} 15% 45%`,
      accent: `${ah} 75% 42%`,
      accentForeground: `0 0% 100%`,
      success: `${ah} 75% 42%`,
      successLight: `${ah} 70% 95%`,
      successForeground: `${ah} 75% 25%`,
      warning: `${h} 70% 50%`,
      warningLight: `${h} 100% 97%`,
      warningForeground: `${h} 70% 35%`,
      destructive: `0 84% 60%`,
      destructiveForeground: `0 0% 100%`,
      border: `${h} 20% 88%`,
      input: `${h} 20% 88%`,
      ring: `${h} 60% 25%`,
    },
    dark: {
      background: `${h} 30% 8%`,
      foreground: `${h} 40% 98%`,
      card: `${h} 30% 12%`,
      cardForeground: `${h} 40% 98%`,
      popover: `${h} 30% 12%`,
      popoverForeground: `${h} 40% 98%`,
      primary: `${h} 40% 98%`,
      primaryForeground: `${h} 50% 15%`,
      secondary: `${h} 32% 17%`,
      secondaryForeground: `${h} 40% 98%`,
      muted: `${h} 32% 17%`,
      mutedForeground: `${h} 20% 65%`,
      accent: `${ah} 75% 42%`,
      accentForeground: `0 0% 100%`,
      success: `${ah} 75% 42%`,
      successLight: `${ah} 30% 15%`,
      successForeground: `${ah} 75% 70%`,
      warning: `${h} 70% 50%`,
      warningLight: `${h} 50% 15%`,
      warningForeground: `${h} 70% 70%`,
      destructive: `0 62% 30%`,
      destructiveForeground: `${h} 40% 98%`,
      border: `${h} 32% 17%`,
      input: `${h} 32% 17%`,
      ring: `${h} 26% 83%`,
    },
  };
};

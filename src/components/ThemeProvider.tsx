import { useEffect } from "react";
import { generateThemeColors, theme } from "@/config/company";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const colors = generateThemeColors();
    const root = document.documentElement;

    // Mantém as cores neutras (foreground/muted-foreground, etc.) estáveis.
    // Aqui aplicamos SOMENTE as cores de marca (indicadores/ícones), via <style>,
    // para não "tingir" textos/descrições ao mudar o hue.
    //
    // Também removemos overrides inline antigos (de versões anteriores) para evitar
    // que variáveis neutras fiquem presas e continuem mudando.
    [
      "--background",
      "--foreground",
      "--card",
      "--card-foreground",
      "--popover",
      "--popover-foreground",
      "--primary",
      "--primary-foreground",
      "--secondary",
      "--secondary-foreground",
      "--muted",
      "--muted-foreground",
      "--accent",
      "--accent-foreground",
      "--success",
      "--success-light",
      "--success-foreground",
      "--warning",
      "--warning-light",
      "--warning-foreground",
      "--destructive",
      "--destructive-foreground",
      "--border",
      "--input",
      "--ring",
    ].forEach((cssVar) => root.style.removeProperty(cssVar));

    const styleId = "dynamic-brand-theme";
    let styleEl = document.getElementById(styleId) as HTMLStyleElement | null;

    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = styleId;
      document.head.appendChild(styleEl);
    }

    styleEl.textContent = `
      :root {
        --primary: ${colors.light.primary};
        --secondary: ${colors.light.secondary};
        --accent: ${colors.light.accent};
        --success: ${colors.light.success};
        --success-light: ${colors.light.successLight};
        --success-foreground: ${colors.light.successForeground};
        --warning: ${colors.light.warning};
        --warning-light: ${colors.light.warningLight};
        --warning-foreground: ${colors.light.warningForeground};
        --ring: ${colors.light.ring};
      }

      .dark {
        --primary: ${colors.dark.primary};
        --secondary: ${colors.dark.secondary};
        --accent: ${colors.dark.accent};
        --success: ${colors.dark.success};
        --success-light: ${colors.dark.successLight};
        --success-foreground: ${colors.dark.successForeground};
        --warning: ${colors.dark.warning};
        --warning-light: ${colors.dark.warningLight};
        --warning-foreground: ${colors.dark.warningForeground};
        --ring: ${colors.dark.ring};
      }
    `;
  }, [theme.hue, theme.accentHue]);

  return <>{children}</>;
};

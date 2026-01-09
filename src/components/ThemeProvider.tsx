import { useEffect } from "react";
import { generateThemeColors } from "@/config/company";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const colors = generateThemeColors();
    const root = document.documentElement;

    // Aplica as cores do tema light
    root.style.setProperty("--background", colors.light.background);
    root.style.setProperty("--foreground", colors.light.foreground);
    root.style.setProperty("--card", colors.light.card);
    root.style.setProperty("--card-foreground", colors.light.cardForeground);
    root.style.setProperty("--popover", colors.light.popover);
    root.style.setProperty("--popover-foreground", colors.light.popoverForeground);
    root.style.setProperty("--primary", colors.light.primary);
    root.style.setProperty("--primary-foreground", colors.light.primaryForeground);
    root.style.setProperty("--secondary", colors.light.secondary);
    root.style.setProperty("--secondary-foreground", colors.light.secondaryForeground);
    root.style.setProperty("--muted", colors.light.muted);
    root.style.setProperty("--muted-foreground", colors.light.mutedForeground);
    root.style.setProperty("--accent", colors.light.accent);
    root.style.setProperty("--accent-foreground", colors.light.accentForeground);
    root.style.setProperty("--success", colors.light.success);
    root.style.setProperty("--success-light", colors.light.successLight);
    root.style.setProperty("--success-foreground", colors.light.successForeground);
    root.style.setProperty("--warning", colors.light.warning);
    root.style.setProperty("--warning-light", colors.light.warningLight);
    root.style.setProperty("--warning-foreground", colors.light.warningForeground);
    root.style.setProperty("--destructive", colors.light.destructive);
    root.style.setProperty("--destructive-foreground", colors.light.destructiveForeground);
    root.style.setProperty("--border", colors.light.border);
    root.style.setProperty("--input", colors.light.input);
    root.style.setProperty("--ring", colors.light.ring);

    // Cria estilos para o dark mode
    const darkStyleId = "dynamic-dark-theme";
    let darkStyle = document.getElementById(darkStyleId) as HTMLStyleElement;
    
    if (!darkStyle) {
      darkStyle = document.createElement("style");
      darkStyle.id = darkStyleId;
      document.head.appendChild(darkStyle);
    }

    darkStyle.textContent = `
      .dark {
        --background: ${colors.dark.background};
        --foreground: ${colors.dark.foreground};
        --card: ${colors.dark.card};
        --card-foreground: ${colors.dark.cardForeground};
        --popover: ${colors.dark.popover};
        --popover-foreground: ${colors.dark.popoverForeground};
        --primary: ${colors.dark.primary};
        --primary-foreground: ${colors.dark.primaryForeground};
        --secondary: ${colors.dark.secondary};
        --secondary-foreground: ${colors.dark.secondaryForeground};
        --muted: ${colors.dark.muted};
        --muted-foreground: ${colors.dark.mutedForeground};
        --accent: ${colors.dark.accent};
        --accent-foreground: ${colors.dark.accentForeground};
        --success: ${colors.dark.success};
        --success-light: ${colors.dark.successLight};
        --success-foreground: ${colors.dark.successForeground};
        --warning: ${colors.dark.warning};
        --warning-light: ${colors.dark.warningLight};
        --warning-foreground: ${colors.dark.warningForeground};
        --destructive: ${colors.dark.destructive};
        --destructive-foreground: ${colors.dark.destructiveForeground};
        --border: ${colors.dark.border};
        --input: ${colors.dark.input};
        --ring: ${colors.dark.ring};
      }
    `;
  }, []);

  return <>{children}</>;
};

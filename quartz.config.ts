import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Wiki",
    pageTitleSuffix: "",
    enableSPA: false,
    enablePopovers: false,
    analytics: null,
    locale: "cs-CZ",
    baseUrl: process.env.QUARTZ_BASE_URL ?? "www.hlidacstatu.cz",
    ignorePatterns: ["private", "templates", ".obsidian", "meta", "log.md", "hot.md"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Cabin",
        body: "Cabin",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f8f9fa",
          lightgray: "#dee2e6",
          gray: "#6c757d",
          darkgray: "#495057",
          dark: "#212529",
          secondary: "#0074E4",
          tertiary: "#FFBF66",
          highlight: "rgba(0, 116, 228, 0.10)",
          textHighlight: "#FFBF6688",
        },
        darkMode: {
          light: "#212529",
          lightgray: "#343a40",
          gray: "#6c757d",
          darkgray: "#dee2e6",
          dark: "#f8f9fa",
          secondary: "#4DA3FF",
          tertiary: "#FFBF66",
          highlight: "rgba(77, 163, 255, 0.20)",
          textHighlight: "#FFBF6688",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.IcoLinks(),

    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config

import { render } from "preact-render-to-string"
import { QuartzComponent, QuartzComponentProps } from "./types"
import HeaderConstructor from "./Header"
import BodyConstructor from "./Body"
import { JSResourceToScriptElement, StaticResources } from "../util/resources"
import { FullSlug, RelativeURL, joinSegments, normalizeHastElement } from "../util/path"
import { clone } from "../util/clone"
import { visit } from "unist-util-visit"
import { Root, Element, ElementContent } from "hast"
import { GlobalConfiguration } from "../cfg"
import { i18n } from "../i18n"
import { styleText } from "util"

interface RenderComponents {
  head: QuartzComponent
  header: QuartzComponent[]
  beforeBody: QuartzComponent[]
  pageBody: QuartzComponent
  afterBody: QuartzComponent[]
  left: QuartzComponent[]
  right: QuartzComponent[]
  footer: QuartzComponent
}

const HlidacStatuNavbar = (
 
<header class="hs-navbar">
        <div class="nav-inner">
            <a href="/" class="logo">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="46px" height="46px" viewBox="0 0 46 46" version="1.1">
                    <g id="Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="06-DOBRA" transform="translate(-31.000000, -18.000000)">
                            <g id="Group" transform="translate(31.000000, 18.000000)">
                                <path d="M34.7926176,43 L34.7926176,25.8136542 C34.7926176,19.2536826 29.4005716,14.55625 22.8156981,14.55625 L22.7226406,14.55625 C16.137767,14.55625 10.4707785,19.2536826 10.4707785,25.8136542 L10.4707785,43 L34.7926176,43 Z" id="Fill-1" fill="#25272D"></path>
                                <path d="M30.6778527,27.9431372 C29.1549094,27.5784772 26.5447427,27.4633214 24.731801,27.9431372 C22.9188592,28.422953 22.6712952,30.9140119 24.731801,30.9140119 C26.7923068,30.9140119 32.200796,28.3077972 30.6778527,27.9431372 Z" id="Oval" fill="#266cae"></path>
                                <path d="M21.7334082,27.9431372 C20.2104649,27.5784772 17.6002983,27.4633214 15.7873565,27.9431372 C13.9744148,28.422953 13.7268507,30.9140119 15.7873565,30.9140119 C17.8478623,30.9140119 23.2563515,28.3077972 21.7334082,27.9431372 Z" id="Oval" fill="#266cae" transform="translate(18.166667, 29.269506) scale(-1, 1) translate(-18.166667, -29.269506) "></path>
                                <path d="M23.1340731,0.78903332 C22.7184471,0.423872614 22.0477586,0.424188294 21.6368425,0.78903332 L0.744673078,19.3388181 C0.333401493,19.7039788 0.245239258,20.3678589 0.557111502,20.8356673 L1.4428885,22.1643327 C1.75057268,22.625859 2.33675444,22.7031399 2.74956077,22.3392375 L22.3815156,5.03302363 L42.2405567,22.3392375 C42.6593161,22.7041666 43.2441756,22.6321411 43.5562369,22.1643327 L44.4425508,20.8356673 C44.7504215,20.374141 44.6627092,19.7036631 44.2474425,19.3388181 L23.1340731,0.78903332 Z" id="Combined-Shape" fill="#25272D"></path>
                            </g>
                        </g>
                    </g>
                </svg>
                <div style="line-height: 1.2em;">
                    <div>Hlídač</div><div><strong>státu</strong></div>
                </div>
            </a>

            <nav class="nav-links">
                <a href="/smlouvy" class="nav-link-item">Smlouvy</a>
                <a href="/dotace" class="nav-link-item">Dotace</a>
                <a href="https://platy.hlidacstatu.cz" class="nav-link-item">Platy</a>
                <a href="/menupage/urady" class="nav-link-item">Úřady</a>
                <a href="/verejnezakazky" class="nav-link-item">Zakázky</a>
                <a href="/menupage/firmy" class="nav-link-item">Sponzoři &amp; firmy</a>
                <a href="https://texty.hlidacstatu.cz/jak-podporit-hlidac-statu-fungovani-ceska/" class="btn btn-xs btn-primary">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 17s-7-4.35-7-9a4 4 0 0 1 7-2.65A4 4 0 0 1 17 8c0 4.65-7 9-7 9z" fill="white"></path>
                    </svg>
                    Podpořte nás
                </a>

            </nav>

            <div class="nav-actions">

                <button class="nav-toggle btn btn-link p-0 ms-auto text-dark" type="button" aria-label="Menu" data-bs-toggle="collapse" data-bs-target="#mobileNav">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6h18M3 12h18M3 18h18" stroke="#28313B" stroke-width="2" stroke-linecap="round"></path>
                    </svg>
                </button>
            </div>

        </div>

        <div class="collapse" id="mobileNav">
            <div style="padding: 8px 40px 16px; border-top: 1px solid var(--hs-light); display:flex; flex-direction:column; gap:4px;">
                <a href="/smlouvy" class="nav-link-item py-2">Smlouvy</a>
                <a href="/dotace" class="nav-link-item py-2">Dotace</a>
                <a href="https://platy.hlidacstatu.cz" class="nav-link-item py-2">Platy</a>
                <a href="/menupage/urady" class="nav-link-item py-2">Úřady</a>
                <a href="/verejnezakazky" class="nav-link-item py-2">Zakázky</a>
                <a href="/menupage/firmy" class="nav-link-item py-2">Sponzoři &amp; firmy</a>

                <div style="display:flex; gap:12px; margin-top:12px; flex-wrap:wrap;">
                    <a href="https://texty.hlidacstatu.cz/jak-podporit-hlidac-statu-fungovani-ceska/" class="btn btn-xs btn-primary">❤ Podpořte nás</a>
                </div>
            </div>
        </div>
    </header>

)

const HlidacStatuFooter = (
  <footer class="hs-footer">
    <div class="hs-wrap">
      <div class="footer-grid">
        <div class="footer-logo-col">
          <div class="logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="46px" height="46px" viewBox="0 0 46 46" version="1.1">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-31.000000, -18.000000)">
                  <g transform="translate(31.000000, 18.000000)">
                    <path d="M34.7926176,43 L34.7926176,25.8136542 C34.7926176,19.2536826 29.4005716,14.55625 22.8156981,14.55625 L22.7226406,14.55625 C16.137767,14.55625 10.4707785,19.2536826 10.4707785,25.8136542 L10.4707785,43 L34.7926176,43 Z" fill="#25272D"></path>
                    <path d="M30.6778527,27.9431372 C29.1549094,27.5784772 26.5447427,27.4633214 24.731801,27.9431372 C22.9188592,28.422953 22.6712952,30.9140119 24.731801,30.9140119 C26.7923068,30.9140119 32.200796,28.3077972 30.6778527,27.9431372 Z" fill="#266cae"></path>
                    <path d="M21.7334082,27.9431372 C20.2104649,27.5784772 17.6002983,27.4633214 15.7873565,27.9431372 C13.9744148,28.422953 13.7268507,30.9140119 15.7873565,30.9140119 C17.8478623,30.9140119 23.2563515,28.3077972 21.7334082,27.9431372 Z" fill="#266cae" transform="translate(18.166667, 29.269506) scale(-1, 1) translate(-18.166667, -29.269506) "></path>
                    <path d="M23.1340731,0.78903332 C22.7184471,0.423872614 22.0477586,0.424188294 21.6368425,0.78903332 L0.744673078,19.3388181 C0.333401493,19.7039788 0.245239258,20.3678589 0.557111502,20.8356673 L1.4428885,22.1643327 C1.75057268,22.625859 2.33675444,22.7031399 2.74956077,22.3392375 L22.3815156,5.03302363 L42.2405567,22.3392375 C42.6593161,22.7041666 43.2441756,22.6321411 43.5562369,22.1643327 L44.4425508,20.8356673 C44.7504215,20.374141 44.6627092,19.7036631 44.2474425,19.3388181 L23.1340731,0.78903332 Z" fill="#25272D"></path>
                  </g>
                </g>
              </g>
            </svg>
            <div class="logo-text">
              Hlídač <strong>státu</strong>
            </div>
          </div>

          <p class="footer-perex">
            10 let hlídáme český stát. Největší nezávislý watchdog v ČR. Financován výhradně dárci.
            Bez reklam. Bez státních dotací.
          </p>
        </div>

        <div class="footer-cols">
          <div class="footer-col">
            <p class="footer-col-head">Data, fakta, analýzy</p>
            <a href="https://www.hlidacstatu.cz/smlouvy">Smlouvy</a>
            <a href="https://www.hlidacstatu.cz/dotace">Dotace</a>
            <a href="https://www.hlidacstatu.cz/verejnezakazky">Veřejné zakázky</a>
            <a href="https://platy.hlidacstatu.cz/">Platy úředníků</a>
            <a href="https://platy.hlidacstatu.cz/politici">Platy politiků</a>
            <a href="https://www.hlidacstatu.cz/adresar">Firmy a úřady</a>
            <a href="https://www.hlidacstatu.cz/sponzori">Politický sponzoring</a>
            <a href="https://www.hlidacstatu.cz/kindex" title="Index klíčových rizik">K-Index</a>
            <a href="https://www.hlidacstatu.cz/data" title="Další databáze a unikátní data">
              Další databáze
            </a>
            <a href="https://www.hlidacstatu.cz/statniweby" title="Státní weby">Státní weby</a>
          </div>

          <div class="footer-col">
            <p class="footer-col-head">O projektu</p>
            <a href="https://www.hlidacstatu.cz/impact-report">Co jsme dokázali!</a>
            <a href="https://texty.hlidacstatu.cz/o-serveru">Kdo jsme</a>
            <a href="https://texty.hlidacstatu.cz/kodex">Etický kodex</a>
            <a href="https://api.hlidacstatu.cz/">API a data</a>
            <a href="https://mcp.api.hlidacstatu.cz/">AI a MCP server</a>
            <a href="https://texty.hlidacstatu.cz/pro-media">Pro média</a>
            <a href="https://texty.hlidacstatu.cz/jak-podporit-hlidac-statu-fungovani-ceska/">
              Podpořte nás
            </a>
            <a href="https://texty.hlidacstatu.cz/kontakt/">Kontakt</a>
          </div>

          <div class="footer-col">
            <p class="footer-col-head">Komunita - Hlídač</p>
            <a href="https://x.com/hlidacstatu" class="social-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153Zm-1.291 19.482h2.039L6.486 3.24H4.298L17.61 20.635Z"></path>
              </svg>
              @HlidacStatu
            </a>
            <a href="https://www.facebook.com/HlidacStatu/" class="social-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z"></path>
              </svg>
              Facebook
            </a>
            <a href="https://cz.linkedin.com/company/hlidacstatu" class="social-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z"></path>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© 2016–{new Date().getFullYear()} Hlídač státu, z. ú.</span>
        <div>
          <a href="https://texty.hlidacstatu.cz/provoznipodminky/">Ochrana soukromí</a>
          <a href="https://texty.hlidacstatu.cz/provoznipodminky/">Podmínky použití</a>
          <a href="https://texty.hlidacstatu.cz/tym-hlidace-statu/">Team</a>
        </div>
      </div>
    </div>
  </footer>
)

// HS_NAVBAR toggles the whole Hlídač státu chrome: custom navbar + custom footer,
// with Quartz's own footer suppressed so the two don't stack.
const useHlidacStatuChrome = process.env.HS_NAVBAR === "1"

const headerRegex = new RegExp(/h[1-6]/)
export function pageResources(
  baseDir: FullSlug | RelativeURL,
  staticResources: StaticResources,
): StaticResources {
  const contentIndexPath = joinSegments(baseDir, "static/contentIndex.json")
  const contentIndexScript = `const fetchData = fetch("${contentIndexPath}").then(data => data.json())`

  const resources: StaticResources = {
    css: [
      {
        content: joinSegments(baseDir, "index.css"),
      },
      ...staticResources.css,
    ],
    js: [
      {
        src: joinSegments(baseDir, "prescript.js"),
        loadTime: "beforeDOMReady",
        contentType: "external",
      },
      {
        loadTime: "beforeDOMReady",
        contentType: "inline",
        spaPreserve: true,
        script: contentIndexScript,
      },
      ...staticResources.js,
    ],
    additionalHead: staticResources.additionalHead,
  }

  resources.js.push({
    src: joinSegments(baseDir, "postscript.js"),
    loadTime: "afterDOMReady",
    moduleType: "module",
    contentType: "external",
  })

  return resources
}

function renderTranscludes(
  root: Root,
  cfg: GlobalConfiguration,
  slug: FullSlug,
  componentData: QuartzComponentProps,
  visited: Set<FullSlug>,
) {
  // process transcludes in componentData
  visit(root, "element", (node, _index, _parent) => {
    if (node.tagName === "blockquote") {
      const classNames = (node.properties?.className ?? []) as string[]
      if (classNames.includes("transclude")) {
        const inner = node.children[0] as Element
        const transcludeTarget = (inner.properties["data-slug"] ?? slug) as FullSlug
        if (visited.has(transcludeTarget)) {
          console.warn(
            styleText(
              "yellow",
              `Warning: Skipping circular transclusion: ${slug} -> ${transcludeTarget}`,
            ),
          )
          node.children = [
            {
              type: "element",
              tagName: "p",
              properties: { style: "color: var(--secondary);" },
              children: [
                {
                  type: "text",
                  value: `Circular transclusion detected: ${transcludeTarget}`,
                },
              ],
            },
          ]
          return
        }
        visited.add(transcludeTarget)

        const page = componentData.allFiles.find((f) => f.slug === transcludeTarget)
        if (!page) {
          return
        }

        let blockRef = node.properties.dataBlock as string | undefined
        if (blockRef?.startsWith("#^")) {
          // block transclude
          blockRef = blockRef.slice("#^".length)
          let blockNode = page.blocks?.[blockRef]
          if (blockNode) {
            if (blockNode.tagName === "li") {
              blockNode = {
                type: "element",
                tagName: "ul",
                properties: {},
                children: [blockNode],
              }
            }

            node.children = [
              normalizeHastElement(blockNode, slug, transcludeTarget),
              {
                type: "element",
                tagName: "a",
                properties: { href: inner.properties?.href, class: ["internal", "transclude-src"] },
                children: [
                  { type: "text", value: i18n(cfg.locale).components.transcludes.linkToOriginal },
                ],
              },
            ]
          }
        } else if (blockRef?.startsWith("#") && page.htmlAst) {
          // header transclude
          blockRef = blockRef.slice(1)
          let startIdx = undefined
          let startDepth = undefined
          let endIdx = undefined
          for (const [i, el] of page.htmlAst.children.entries()) {
            // skip non-headers
            if (!(el.type === "element" && el.tagName.match(headerRegex))) continue
            const depth = Number(el.tagName.substring(1))

            // lookin for our blockref
            if (startIdx === undefined || startDepth === undefined) {
              // skip until we find the blockref that matches
              if (el.properties?.id === blockRef) {
                startIdx = i
                startDepth = depth
              }
            } else if (depth <= startDepth) {
              // looking for new header that is same level or higher
              endIdx = i
              break
            }
          }

          if (startIdx === undefined) {
            return
          }

          node.children = [
            ...(page.htmlAst.children.slice(startIdx, endIdx) as ElementContent[]).map((child) =>
              normalizeHastElement(child as Element, slug, transcludeTarget),
            ),
            {
              type: "element",
              tagName: "a",
              properties: { href: inner.properties?.href, class: ["internal", "transclude-src"] },
              children: [
                { type: "text", value: i18n(cfg.locale).components.transcludes.linkToOriginal },
              ],
            },
          ]
        } else if (page.htmlAst) {
          // page transclude
          node.children = [
            {
              type: "element",
              tagName: "h1",
              properties: {},
              children: [
                {
                  type: "text",
                  value:
                    page.frontmatter?.title ??
                    i18n(cfg.locale).components.transcludes.transcludeOf({
                      targetSlug: page.slug!,
                    }),
                },
              ],
            },
            ...(page.htmlAst.children as ElementContent[]).map((child) =>
              normalizeHastElement(child as Element, slug, transcludeTarget),
            ),
            {
              type: "element",
              tagName: "a",
              properties: { href: inner.properties?.href, class: ["internal", "transclude-src"] },
              children: [
                { type: "text", value: i18n(cfg.locale).components.transcludes.linkToOriginal },
              ],
            },
          ]
        }
      }
    }
  })
}

export function renderPage(
  cfg: GlobalConfiguration,
  slug: FullSlug,
  componentData: QuartzComponentProps,
  components: RenderComponents,
  pageResources: StaticResources,
): string {
  // make a deep copy of the tree so we don't remove the transclusion references
  // for the file cached in contentMap in build.ts
  const root = clone(componentData.tree) as Root
  const visited = new Set<FullSlug>([slug])
  renderTranscludes(root, cfg, slug, componentData, visited)

  // set componentData.tree to the edited html that has transclusions rendered
  componentData.tree = root

  const {
    head: Head,
    header,
    beforeBody,
    pageBody: Content,
    afterBody,
    left,
    right,
    footer: Footer,
  } = components
  const Header = HeaderConstructor()
  const Body = BodyConstructor()

  const LeftComponent = (
    <div class="left sidebar">
      {left.map((BodyComponent) => (
        <BodyComponent {...componentData} />
      ))}
    </div>
  )

  const RightComponent = (
    <div class="right sidebar">
      {right.map((BodyComponent) => (
        <BodyComponent {...componentData} />
      ))}
    </div>
  )

  // With the Hlídač státu chrome the custom footer takes over, so Quartz's own one is dropped.
  const FooterComponent = useHlidacStatuChrome ? <></> : <Footer {...componentData} />


  const lang = componentData.fileData.frontmatter?.lang ?? cfg.locale?.split("-")[0] ?? "en"
  const direction = i18n(cfg.locale).direction ?? "ltr"
  const doc = (
    <html lang={lang} dir={direction}>
      <Head {...componentData} />
      <body data-slug={slug}>
        {useHlidacStatuChrome && HlidacStatuNavbar}
        <div id="quartz-root" class="page">
          <Body {...componentData}>
            {LeftComponent}
            <div class="center">
              <div class="page-header">
                <Header {...componentData}>
                  {header.map((HeaderComponent) => (
                    <HeaderComponent {...componentData} />
                  ))}
                </Header>
                <div class="popover-hint">
                  {beforeBody.map((BodyComponent) => (
                    <BodyComponent {...componentData} />
                  ))}
                </div>
              </div>
              <Content {...componentData} />
              <hr />
              <div class="page-footer">
                {afterBody.map((BodyComponent) => (
                  <BodyComponent {...componentData} />
                ))}
              </div>
            </div>
            {RightComponent}
            {FooterComponent}
          </Body>
        </div>
        {useHlidacStatuChrome && HlidacStatuFooter}
      </body>
      {pageResources.js
        .filter((resource) => resource.loadTime === "afterDOMReady")
        .map((res) => JSResourceToScriptElement(res, true))}
    </html>
  )

  return "<!DOCTYPE html>\n" + render(doc)
}

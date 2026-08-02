import { QuartzTransformerPlugin } from "../types"
import { Root, Text, Element, ElementContent } from "hast"
import { visit, SKIP } from "unist-util-visit"


// IČO/IČ/ICO/IC + (mezera) | (dvojtečka s volitelnou mezerou) + 8 číslic
const ICO_REGEX = /\b(I[ČC]O?(?:\s+|:\s*))(\d{8})\b/g

const SKIP_TAGS = new Set(["a", "code", "pre", "script", "style"])

export const IcoLinks: QuartzTransformerPlugin = () => ({
  name: "IcoLinks",
  htmlPlugins() {
    return [
      () => (tree: Root) => {
        visit(tree, "text", (node: Text, index, parent) => {
          if (!parent || index === undefined) return
          if (parent.type === "element" && SKIP_TAGS.has((parent as Element).tagName)) {
            return
          }

          const value = node.value
          ICO_REGEX.lastIndex = 0
          if (!ICO_REGEX.test(value)) return
          ICO_REGEX.lastIndex = 0

          const out: ElementContent[] = []
          let last = 0
          let m: RegExpExecArray | null

          while ((m = ICO_REGEX.exec(value)) !== null) {
            if (m.index > last) {
              out.push({ type: "text", value: value.slice(last, m.index) })
            }
            // popisek "IČO " necháme jako prostý text
            out.push({ type: "text", value: m[1] })
            // samotných 8 číslic uděláme jako odkaz
            out.push({
              type: "element",
              tagName: "a",
              properties: {
                href: `https://www.hlidacstatu.cz/subjekt/${m[2]}`,
                target: "_blank",
                rel: ["noopener", "noreferrer"],
                className: ["external", "ico-link"],
              },
              children: [{ type: "text", value: m[2] }],
            })
            last = m.index + m[0].length
          }
          if (last < value.length) {
            out.push({ type: "text", value: value.slice(last) })
          }

          ;(parent as Element).children.splice(index, 1, ...out)
          return [SKIP, index + out.length]
        })
      },
    ]
  },
})

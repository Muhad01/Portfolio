"use client"

import { useMemo } from "react"
import { ExternalLink, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import { DEFAULT_PROJECT_PREVIEW_URL } from "@/data/projects"

/** Values below 1 zoom the embedded page out (smaller UI, more content visible). */
const PREVIEW_SCALE = 0.55

interface ProjectMacPreviewProps {
  src: string
  title: string
  className?: string
}

function normalizePreviewUrl(raw: string): string {
  const t = raw.trim()
  if (!t) return DEFAULT_PROJECT_PREVIEW_URL
  if (/^https?:\/\//i.test(t)) return t
  return `https://${t}`
}

export function ProjectMacPreview({ src, title, className }: ProjectMacPreviewProps) {
  const url = useMemo(() => normalizePreviewUrl(src), [src])

  let hostname = ""
  try {
    hostname = new URL(url).hostname
  } catch {
    hostname = url
  }

  return (
    <div
      className={cn(
        "flex h-full max-h-[calc(100dvh-10rem)] min-h-0 w-full sm:max-h-[calc(100dvh-11rem)]",
        "max-w-[1000px] flex-col mx-auto rounded-xl overflow-hidden border border-border/80 bg-zinc-900/90 shadow-2xl ring-1 ring-white/10",
        className,
      )}
    >
      <div className="flex shrink-0 items-center gap-3 px-3 sm:px-4 py-2.5 bg-gradient-to-b from-zinc-800 to-zinc-900 border-b border-white/5">
        <div className="flex gap-1.5 shrink-0" aria-hidden>
          <span className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-inner" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e] shadow-inner" />
          <span className="w-3 h-3 rounded-full bg-[#28c840] shadow-inner" />
        </div>
        <div className="flex-1 min-w-0 flex justify-center sm:justify-start">
          <div className="flex items-center gap-2 rounded-lg bg-black/40 px-3 py-1 text-[11px] sm:text-xs text-zinc-300 font-mono border border-white/5 max-w-full">
            <Globe className="w-3.5 h-3.5 opacity-50 shrink-0" aria-hidden />
            <span className="truncate" title={url}>
              {hostname}
            </span>
          </div>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 flex items-center gap-1 text-[11px] text-zinc-400 hover:text-zinc-200 transition-colors"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Open</span>
        </a>
      </div>

      <div
        className={cn(
          "project-preview-viewport relative w-full min-h-0 flex-1 overflow-hidden bg-zinc-950",
        )}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="origin-top-left"
            style={{
              width: `${100 / PREVIEW_SCALE}%`,
              height: `${100 / PREVIEW_SCALE}%`,
              transform: `scale(${PREVIEW_SCALE})`,
            }}
          >
            <iframe
              title={`Live preview: ${title}`}
              src={url}
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowFullScreen
              className={cn(
                "box-border h-full w-full border-0 bg-zinc-950 [color-scheme:dark]",
              )}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

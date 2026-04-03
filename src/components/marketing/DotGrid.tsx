"use client"

import { useEffect, useRef, useCallback } from "react"

const GRID_SPACING = 28
const DOT_RADIUS = 1
const GLOW_RADIUS = 140
const CONNECT_RADIUS = 100
const LINE_OPACITY = 0.35

export function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animRef = useRef<number>(0)

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const w = canvas.clientWidth
    const h = canvas.clientHeight

    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.scale(dpr, dpr)
    }

    ctx.clearRect(0, 0, w, h)

    const mx = mouseRef.current.x
    const my = mouseRef.current.y

    const cols = Math.ceil(w / GRID_SPACING) + 1
    const rows = Math.ceil(h / GRID_SPACING) + 1

    const glowDots: { x: number; y: number; intensity: number }[] = []

    // Draw dots
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * GRID_SPACING
        const y = r * GRID_SPACING

        const dx = x - mx
        const dy = y - my
        const dist = Math.sqrt(dx * dx + dy * dy)

        ctx.beginPath()
        ctx.arc(x, y, DOT_RADIUS, 0, Math.PI * 2)

        if (dist < GLOW_RADIUS) {
          const intensity = 1 - dist / GLOW_RADIUS
          const easedIntensity = intensity * intensity

          // Red glow dot
          const r_color = Math.round(153 + (255 - 153) * easedIntensity)
          const g_color = Math.round(27 * (1 - easedIntensity * 0.5))
          const b_color = Math.round(27 * (1 - easedIntensity * 0.5))
          const alpha = 0.12 + easedIntensity * 0.8

          ctx.fillStyle = `rgba(${r_color}, ${g_color}, ${b_color}, ${alpha})`

          // Scale dot up near cursor
          const dotScale = DOT_RADIUS + easedIntensity * 1.5
          ctx.arc(x, y, dotScale, 0, Math.PI * 2)

          glowDots.push({ x, y, intensity: easedIntensity })
        } else {
          ctx.fillStyle = "rgba(0, 0, 0, 0.07)"
        }

        ctx.fill()
      }
    }

    // Draw connections between nearby glowing dots
    if (glowDots.length > 1) {
      for (let i = 0; i < glowDots.length; i++) {
        for (let j = i + 1; j < glowDots.length; j++) {
          const a = glowDots[i]
          const b = glowDots[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < CONNECT_RADIUS) {
            const lineIntensity = (1 - dist / CONNECT_RADIUS) * Math.min(a.intensity, b.intensity)
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(153, 27, 27, ${lineIntensity * LINE_OPACITY})`
            ctx.lineWidth = lineIntensity * 1.2
            ctx.stroke()
          }
        }
      }
    }

    animRef.current = requestAnimationFrame(draw)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)
    animRef.current = requestAnimationFrame(draw)

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animRef.current)
    }
  }, [draw])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ zIndex: 0 }}
    />
  )
}

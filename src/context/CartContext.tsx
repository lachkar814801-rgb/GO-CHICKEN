import { createContext, useContext, useMemo, useState, ReactNode } from 'react'
import { menuData, sides, formatPrice, WHATSAPP_NUMBER, MenuItem } from '../data/menuData'

export interface CartLine {
  id: string
  qty: number
  sideId: string // '' tant que le client n'a pas choisi
}

interface CartCtx {
  lines: CartLine[]
  open: boolean
  setOpen: (v: boolean) => void
  qtyOf: (id: string) => number
  setQty: (id: string, qty: number) => void
  setSide: (id: string, sideId: string) => void
  clear: () => void
  count: number
  total: number
  hasUnpriced: boolean
  allSidesChosen: boolean
  detailed: { line: CartLine; item: MenuItem }[]
  buildWhatsAppUrl: (name: string, note: string) => string
}

const Ctx = createContext<CartCtx | null>(null)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [lines, setLines] = useState<CartLine[]>([])
  const [open, setOpen] = useState(false)

  const setQty = (id: string, qty: number) =>
    setLines(prev => {
      if (qty <= 0) return prev.filter(l => l.id !== id)
      const exists = prev.some(l => l.id === id)
      return exists
        ? prev.map(l => (l.id === id ? { ...l, qty } : l))
        : [...prev, { id, qty, sideId: '' }]
    })

  const setSide = (id: string, sideId: string) =>
    setLines(prev => prev.map(l => (l.id === id ? { ...l, sideId } : l)))

  const value = useMemo<CartCtx>(() => {
    const detailed = lines
      .map(line => ({ line, item: menuData.find(m => m.id === line.id)! }))
      .filter(d => d.item)
    const count = lines.reduce((n, l) => n + l.qty, 0)
    const total = detailed.reduce((s, d) => s + (d.item.price ?? 0) * d.line.qty, 0)
    const hasUnpriced = detailed.some(d => d.item.price === undefined)
    const allSidesChosen = detailed.length > 0 && detailed.every(d => d.line.sideId)

    const buildWhatsAppUrl = (name: string, note: string) => {
      const rows = detailed.map(({ line, item }) => {
        const side = sides.find(s => s.id === line.sideId)?.labelFr ?? '-'
        const price = item.price !== undefined ? formatPrice(item.price * line.qty) : 'prix à confirmer'
        return `• ${line.qty} x ${item.titleFr}${item.note ? ` (${item.note})` : ''} — accompagnement : ${side} — ${price}`
      })
      const text = [
        'Bonjour GO CHICKEN, je souhaite passer commande :',
        '',
        ...rows,
        '',
        `Total : ${formatPrice(total)}${hasUnpriced ? ' (+ articles à prix à confirmer)' : ''}`,
        name.trim() ? `Nom : ${name.trim()}` : '',
        note.trim() ? `Remarque : ${note.trim()}` : '',
      ]
        .filter((l, i, a) => l !== '' || (a[i - 1] !== '' && i !== a.length - 1))
        .join('\n')
      return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    }

    return {
      lines,
      open,
      setOpen,
      qtyOf: id => lines.find(l => l.id === id)?.qty ?? 0,
      setQty,
      setSide,
      clear: () => setLines([]),
      count,
      total,
      hasUnpriced,
      allSidesChosen,
      detailed,
      buildWhatsAppUrl,
    }
  }, [lines, open])

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export const useCart = () => {
  const c = useContext(Ctx)
  if (!c) throw new Error('useCart doit être utilisé dans CartProvider')
  return c
}

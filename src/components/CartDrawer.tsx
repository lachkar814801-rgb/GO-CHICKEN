import { useState } from 'react'
import { X, Minus, Plus, ShoppingBag, MessageCircle, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { sides, formatPrice } from '../data/menuData'

const CartDrawer = () => {
  const { lines, open, setOpen, count, total, hasUnpriced, allSidesChosen, detailed, setQty, setSide, clear, buildWhatsAppUrl } = useCart()
  const [name, setName] = useState('')
  const [note, setNote] = useState('')

  const send = () => {
    window.open(buildWhatsAppUrl(name, note), '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      {/* Barre flottante */}
      {count > 0 && !open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:w-80 z-40 flex items-center justify-between gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-background font-bold px-5 py-4 rounded-full shadow-2xl"
        >
          <span className="flex items-center gap-2">
            <ShoppingBag size={20} />
            Ma commande ({count})
          </span>
          <span>{formatPrice(total)}</span>
        </button>
      )}

      {/* Panneau */}
      {open && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/70" onClick={() => setOpen(false)} />
          <aside className="relative w-full max-w-md h-full bg-surface flex flex-col shadow-2xl">
            <header className="flex items-center justify-between p-4 border-b border-white/10">
              <h2 className="text-xl font-black text-white">Ma commande</h2>
              <button onClick={() => setOpen(false)} className="p-2 text-white hover:bg-white/10 rounded-lg" aria-label="Fermer">
                <X size={22} />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {lines.length === 0 && <p className="text-gray-400 text-center mt-10">Votre panier est vide.</p>}

              {detailed.map(({ line, item }) => (
                <div key={line.id} className="bg-background/60 rounded-xl p-3 border border-white/10">
                  <div className="flex gap-3">
                    <img src={item.image} alt={item.titleFr} className="w-16 h-16 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-white leading-tight">{item.titleFr}</p>
                      <p className="text-yellow-400 text-sm">
                        {item.price !== undefined ? formatPrice(item.price * line.qty) : 'Prix sur demande'}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 self-start">
                      <button onClick={() => setQty(line.id, line.qty - 1)} className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center" aria-label="Moins">
                        <Minus size={14} />
                      </button>
                      <span className="w-5 text-center text-white font-bold">{line.qty}</span>
                      <button onClick={() => setQty(line.id, line.qty + 1)} className="w-8 h-8 rounded-full bg-yellow-400 text-background flex items-center justify-center" aria-label="Plus">
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 mt-3 mb-2">
                    Accompagnement offert (au choix) <span className="text-red-400">*</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {sides.map(s => (
                      <button
                        key={s.id}
                        onClick={() => setSide(line.id, s.id)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                          line.sideId === s.id
                            ? 'bg-yellow-400 text-background border-yellow-400'
                            : 'border-white/20 text-white hover:border-yellow-400/60'
                        }`}
                      >
                        {s.labelFr} <span dir="rtl" className="opacity-70">· {s.labelAr}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              {lines.length > 0 && (
                <div className="space-y-3 pt-2">
                  <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Votre nom (optionnel)"
                    className="w-full bg-background/60 border border-white/10 rounded-lg px-3 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-yellow-400"
                  />
                  <textarea
                    value={note}
                    onChange={e => setNote(e.target.value)}
                    placeholder="Remarque (adresse, sans piment, heure de retrait…)"
                    rows={2}
                    className="w-full bg-background/60 border border-white/10 rounded-lg px-3 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-yellow-400"
                  />
                  <button onClick={clear} className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-red-400">
                    <Trash2 size={13} /> Vider la commande
                  </button>
                </div>
              )}
            </div>

            {lines.length > 0 && (
              <footer className="p-4 border-t border-white/10 space-y-3">
                <div className="flex justify-between text-white font-bold text-lg">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
                {hasUnpriced && <p className="text-xs text-gray-400">Certains articles sont à prix sur demande : le total sera confirmé sur WhatsApp.</p>}
                {!allSidesChosen && <p className="text-xs text-red-400">Choisissez un accompagnement pour chaque plat.</p>}
                <button
                  onClick={send}
                  disabled={!allSidesChosen}
                  className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-full transition-colors"
                >
                  <MessageCircle size={20} />
                  Envoyer la commande sur WhatsApp
                </button>
              </footer>
            )}
          </aside>
        </div>
      )}
    </>
  )
}

export default CartDrawer

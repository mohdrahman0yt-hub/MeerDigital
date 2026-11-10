import {
  BadgeCheck,
  Globe,
  Megaphone,
  Scale,
  ShoppingBag,
  Store,
} from 'lucide-react'

const map = {
  scale: Scale,
  store: Store,
  globe: Globe,
  badge: BadgeCheck,
  bag: ShoppingBag,
  megaphone: Megaphone,
}

export default function ServiceIcon({ name, size = 22 }) {
  const Icon = map[name] || Globe
  return <Icon size={size} strokeWidth={1.8} />
}

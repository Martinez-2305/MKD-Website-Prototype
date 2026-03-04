import { Home, Briefcase, MapPin, HelpCircle, Mail } from "lucide-react"
import { NavBar } from "@/components/ui/tubelight-navbar"

export function MartKamNavBar() {
  const navItems = [
    { name: "Home",     url: "#",          icon: Home },
    { name: "Services", url: "#services",  icon: Briefcase },
    { name: "Areas",    url: "#areas",     icon: MapPin },
    { name: "Why Us",   url: "#why",       icon: HelpCircle },
    { name: "Contact",  url: "#contact",   icon: Mail },
  ]

  return <NavBar items={navItems} />
}

import accomodationSvg from "../assets/accommodation.svg"
import foodSvg from "../assets/food.svg"
import servicesSvg from "../assets/services.svg"
import transportSvg from "../assets/transport.svg"
import othersSvg from "../assets/others.svg"

export const CATEGORIES = {
  accommodation: {
    name: "Hospedagem",
    icon: accomodationSvg
  },
  food: {
    name: "Alimentação",
    icon: foodSvg
  },
  services: {
    name: "Serviços",
    icon: servicesSvg
  },
  transport: {
    name: "Transporte",
    icon: transportSvg
  },
  others: {
    name: "Outros",
    icon: othersSvg
  },
}

export const CATEGORIES_KEYS = Object.keys(CATEGORIES) as Array<keyof typeof CATEGORIES>
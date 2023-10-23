import ServiveCard from "../components/ServiveCard"
// import { services } from "../constants/page"
import { shieldTick, support, truckFast } from "@/assets/icons";

const services = [
  {
      imgURL: truckFast,
      label: "Free shipping",
      subtext: "Enjoy seamless shopping with our complimentary shipping service."
  },
  {
      imgURL: shieldTick,
      label: "Secure Payment",
      subtext: "Experience worry-free transactions with our secure payment options."
  },
  {
      imgURL: support,
      label: "Love to help you",
      subtext: "Our dedicated team is here to assist you every step of the way."
  },
];

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) =>(
        <ServiveCard key={service.label} {...service} />
      ))}
    </section>
  )
}

export default Services
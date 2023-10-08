import ServiveCard from "../components/ServiveCard"
import { services } from "../constants/page"

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
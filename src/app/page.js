// import { 
//   Hero,
//   Footer,
//   Services,
//   Subscribe,
//   SpecialOffer,
//   SuperQuality,
//   CustomerReviews,
//   PopularProducts, } from "./sections/page";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import Services from "./sections/Services";
import Subscribe from "./sections/Subscribe";
import SpecialOffer from "./sections/SpecialOffer";
import SuperQuality from "./sections/SuperQuality";
import CustomerReviews from "./sections/CustomerReviews";
import PopularProducts from "./sections/PopularProducts";

const Home = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="padding bg-pale-blue ">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default Home;
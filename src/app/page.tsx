import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Cta from '../components/CTA';

export default function Home() {
  return (
    <div className="min-h-[100vh] background">
        <Navbar />
        <Hero />
        <Cta />
    </div>
  );
}

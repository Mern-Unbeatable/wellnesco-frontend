import Hero from '../Components/Hero/Hero';
import TrustBar from '../Components/TrustBar/TrustBar';
import Stats from '../Components/Stats/Stats';
import HowItWorks from '../Components/HowItWorks/HowItWorks';
import Services from '../Components/Services/Services';
import Lifestyle from '../Components/Lifestyle/Lifestyle';
import BodyScore from '../Components/BodyScore/BodyScore';
import Safety from '../Components/Safety/Safety';
import Membership from '../Components/Membership/Membership';
import Provider from '../Components/Provider/Provider';
import AppCTA from '../Components/AppCTA/AppCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Stats />
      <HowItWorks />
      <Services />
      <Lifestyle />
      <BodyScore />
      <Safety />
      <Membership />
      <Provider />
      <AppCTA />
    </>
  );
}

import HeroSection from "./component/HeroSection"
import Navbar from "./component/Navbar"
export default function Home() {
  return (
    <main className="bg-[#121212] flex min-h-screen justify-between flex-col items-center p-2">
      <Navbar/>
      <div className="container pt-24 mx-auto px-12 py-4">
      <HeroSection />
      </div>
    </main>
  );
}

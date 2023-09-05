import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <Hero />
      <Gallery />
    </div>
  );
}

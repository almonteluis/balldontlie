import Image from "next/image";
import Navbar from '@/components/Navbar'
import Players from '@/pages/players'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Players />
    </div>
  );
}

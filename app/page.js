import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h1 className="text-green-600 bg-green-100 border-green-800 border-4">
        Hello world!
      </h1>
      <h1 className="text-vuejs-100 mb-1 bg-[#123]">
        Hello world!
      </h1>
      <p className="text-xs md:text-lg lg:text-3xl">Hello Long Sentence</p>
    </div>
  );
}

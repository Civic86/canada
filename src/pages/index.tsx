import dynamic from "next/dynamic";
import Image from "next/image";
const DynamicMap = dynamic(() => import("../../components/Map"), { ssr: false });

export default function Home() {
  return (
    <div>
      <header
        style={{
          textAlign: "center",
          padding: "30px",
          backgroundColor: "blue",
          display: "flex",
          justifyContent: "center",
          gap: 20,
          alignItems: "center",
        }}
      >

        <Image
          src="/images/leaf.png"
          alt="Canada Line"
          width={100}
          height={100}
        />
        <h1 style={{ color: "white", fontSize: 28 }}>
          Canada Line
        </h1>
      </header>
      <DynamicMap />
    </div>
  );
}

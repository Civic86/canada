import dynamic from "next/dynamic";

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

        <h1 style={{ color: "white", fontSize: 28 }}>
          Canada Line
        </h1>
      </header>
      <DynamicMap />
    </div>
  );
}

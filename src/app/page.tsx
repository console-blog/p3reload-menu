export default function Home() {
  return (
    <main className="relative">
      <div className="absolute top-0 left-0 w-screen h-screen object-cover bg-blue-500 opacity-90">
        <video
          className="w-full h-full object-cover mix-blend-overlay opacity-40"
          width="1920"
          height="1080"
          preload="auto"
          autoPlay
          loop
        >
          <source src="/underwater.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </main>
  );
}

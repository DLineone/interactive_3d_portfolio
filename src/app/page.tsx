
import MainContent from './../components/MainContent';
import ARView from './../components/ARView';

export default function Home() {
  return (
    <main className="
      container mx-auto sm:my-4 rounded-lg
      bg-pink-200 relative
    ">
      {/* h-[calc(100vh-2rem)] <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="absolute top-0 -left-4 size-72 bg-purple-300 rounded-full mix-blend-multiply blur-2xl opacity-90"></div>
        <div className="absolute top-0 -right-4 size-72 bg-yellow-300 rounded-full mix-blend-multiply blur-2xl opacity-90"></div>
        <div className="absolute -bottom-32 -left-40 size-72 bg-pink-300 rounded-full mix-blend-multiply blur-2xl opacity-90"></div>
      </div> */}
      <MainContent></MainContent>
      <ARView></ARView>
    </main>
  );
}

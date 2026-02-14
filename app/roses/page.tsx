import Spline from '@splinetool/react-spline/next';

export default function RosesPage() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-rose-900 via-pink-900 to-red-900">
      {/* Back Button */}
      <a 
        href="/"
        className="absolute top-6 left-6 z-50 flex items-center gap-2 rounded-full bg-white/90 px-6 py-3 font-semibold text-rose-600 shadow-xl backdrop-blur-sm transition-all hover:bg-white hover:scale-105"
      >
        <span>←</span>
        Back to Message
      </a>

      {/* Spline 3D Scene */}
      <div className="h-full w-full">
        <Spline
          scene="https://prod.spline.design/Q80c8rvSK06AlvC8/scene.splinecode" 
        />
      </div>

      {/* Overlay Message */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 z-50 -translate-x-1/2 text-center">
        <div className="rounded-2xl bg-white/90 px-8 py-4 shadow-2xl backdrop-blur-sm">
          <p className="text-lg font-semibold text-rose-600">
            These roses bloom forever, just like my love for you 🌹
          </p>
        </div>
      </div>
    </main>
  );
}
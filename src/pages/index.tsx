import WallpaperShowcase from '@src/components/WallpaperShowcase';

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4 p-4 text-center">Wallpaper Showcase</h1>
      <h2 className="text-2xl font-bold mb-4 p-4 text-center"><a href="https://github.com/Comp-Labs/Wallpapers" className="text-blue-600">Wallpapers Repository</a></h2>
      <WallpaperShowcase />
    </>
  );
}

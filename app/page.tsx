import HeroHeadings from '@/components/HeroHeadings';
import SocialsBar from '@/components/SocialsBar';

export default function Home() {
  return (
    <div className="min-h-full col-center lg:row-center gap-8 px-4">
      <HeroHeadings />
      <SocialsBar />
    </div>
  );
}

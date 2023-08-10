import SocialsBar from './_components/SocialsBar';

export default function Home() {
  return (
    <div className="min-h-full col-center sm:row-center gap-8 px-4">
      <div className="max-w-xl">
        <h1 className="heading-xl select-none">Marius Horghidan</h1>
        <h2 className="heading-md text-primary-pale flex items-end gap-2 select-none">
          The Hub<span className="bg-accent rounded-full block w-4 h-4 blur-sm mb-1"></span>
        </h2>
      </div>
      <SocialsBar />
    </div>
  );
}

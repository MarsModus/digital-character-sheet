import Head from "next/head";
import AbilitySection from "../components/ability-score-section/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>Version 0.0.0.1</title>
        <meta
          name="description"
          content="Digital Character Sheet for Ozriks Campaign"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="flex flex-col justify-start items-center min-h-screen w-full">
        <h4 className="text-white">Ability Scores</h4>
        <AbilitySection />
      </main>
    </>
  );
}

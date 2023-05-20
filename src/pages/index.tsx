import Head from "next/head";

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
      <main className="flex flex-col justify-start items-center min-h-screen w-full bg-stone-800">
        <h4 className="text-white">Hello</h4>
      </main>
    </>
  );
}

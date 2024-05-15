import ShowList from "../components/ShowListContent/ShowList";

export default function ShowListPage() {

  return (
    <main className="p-24 h-screen bg-gradient-to-r from-red-500 to-orange-500">
      <div className="mb-15 row z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="fixed left-0 top-0 flex w-full justify-center border-b  bg-white from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
Thank you for make your secret santa List here the results </h1>
      </div>
      <ShowList/>
    </main>
  );
}

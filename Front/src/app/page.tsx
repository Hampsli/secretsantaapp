import PrincipalForm from "./components/principalForm/PrincipalForm";

export default function Home() {

  return (
    <main className="p-24 h-screen bg-gradient-to-r from-red-500 to-orange-500">
      <div className="mb-15 row z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="fixed left-0 top-0 flex w-full justify-center border-b  bg-white from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Hello! Make your secret santa list
        </h1>
      </div>
      <div className="mb-20 mt-20 row text-left bg-yellow-50 border-b pt-4 pb-4 pl-4 pr-4 rounded-xl">
          <h3 className="font-bold mb-2">Instructions</h3>
          <ul>
           <li>&#8226; Add your family members and you in the next inputs</li>
           <li>&#8226; if you need add another family member only click on the blue rigth button of the left</li>
            <li>&#8226; When you finish add your family remember check the inmediate relations on your family list</li>
            <li>&#8226; do you finished? click on create secret santa list button!</li>
          </ul>
      </div>
      <PrincipalForm />
    </main>
  );
}

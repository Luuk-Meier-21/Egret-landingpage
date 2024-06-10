import Logo from "./components/Logo/Logo";

const USPS = [
  {
    title: "Screen reader first",
    text: "Egret is designed with a screen reader first approach.",
  },
  {
    title: "Opinionated",
    text: "Experience over aesthetics, Egret pushes users to think how its works something works instead of how looks.",
  },
  {
    title: "Simplicity by design",
    text: "Egret isn't your all-in-one design tool. It strives to provide an accessible prototyping experience, and nothing else..",
  },
] as const;

function App() {
  return (
    <div className="flex min-h-screen flex-col font-serif text-gray-700 antialiased">
      <nav className="mx-auto flex w-full max-w-5xl items-start px-5 py-5 md:px-20">
        <Logo />
      </nav>

      <main className="mx-auto w-full max-w-5xl font-serif ">
        <article className="flex flex-col items-start gap-y-6 px-10 py-20 md:px-20">
          <h1 className="text-4xl leading-[120%] tracking-heading md:text-[52px]">
            An opinionated prototyping tool for visually impaired designers.
          </h1>
          <p className="max-w-[26em] text-lg leading-[140%] tracking-paragraph">
            Egret is currently in development! The current release is unstable
            and intended for testing purposes only.
          </p>
          <a
            className="flex whitespace-nowrap rounded-xl bg-yellow-500 px-4 py-2.5 text-yellow-700"
            target="_Blank"
            href="https://drive.usercontent.google.com/download?id=1CZO-5OL_WKDTUfP7oqUJG7xvD8mStLaI&export=download&authuser=0"
            download="installer-egret-universal.dmg"
          >
            Get Egret for MacOS
          </a>
        </article>

        <figure className="flex rounded-[16px] bg-gray-700/15">
          <img src="banner.png" alt="" className="w-full" />
        </figure>

        <article className="flex flex-col items-center gap-x-5 gap-y-20 px-10 py-20 md:flex-row md:px-20">
          <ul className="flex max-w-[26em] flex-col items-start gap-y-6">
            {USPS.map((item, index) => (
              <li
                key={index}
                className="before:block before:w-3/4 before:min-w-min before:border-t-[1px] before:border-t-gray-700/15 before:pb-5 first:before:hidden"
              >
                <h2 className="mb-2.5 text-2xl leading-[140%] tracking-heading md:text-3xl">
                  {item.title}
                </h2>
                <p className="max-w-[26em] text-lg leading-[140%] tracking-paragraph">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
          <aside className="bg-red relative flex h-full flex-1 justify-end bg-transparent">
            <div className="flex w-full max-w-[275px] flex-col items-center md:mb-10">
              <img src="app-icon.png" alt="" />
              <a
                className="flex whitespace-nowrap rounded-xl bg-yellow-500 px-4 py-2.5 text-yellow-700"
                target="_Blank"
                href="https://drive.usercontent.google.com/download?id=1CZO-5OL_WKDTUfP7oqUJG7xvD8mStLaI&export=download&authuser=0"
                download="installer-egret-universal.dmg"
              >
                Get Egret for MacOS
              </a>
            </div>
          </aside>
        </article>
      </main>
      <footer className="mx-auto mt-auto w-full max-w-5xl gap-5 px-5 md:px-20">
        <div className="flex w-full flex-row items-end border-t-[1px] border-t-gray-700/15 py-5">
          <Logo />
          <p className="ml-auto text-sm">
            Project by{" "}
            <a
              className="underline hover:decoration-transparent"
              href="https://luukmeier.com"
            >
              Luuk Meier
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

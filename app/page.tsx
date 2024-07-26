import Link from "next/link";
import AuthButton from "../components/AuthButton";

export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center bg-mint_cream">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 bg-dark_purple">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          Bem vindo(a)!
          <div className="flex flex-row justify-center gap-2">
            <Link
              href="/authenticated"
              className="py-1 px-6 flex rounded-md no-underline bg-mint_cream hover:bg-licorice text-night font-bold uppercase hover:text-mint_cream hover:border hover:border-mint_cream"
            >
              CHAT
            </Link>
            <AuthButton />
          </div>
        </div>
      </nav>

      <div className="flex-1 flex flex-col gap-20 max-w-4xl px-3 text-night">
        <main className="flex-1 flex flex-col gap-6">
          <h2>descrição do projeto</h2>
        </main>
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs bg-dark_purple">
        <div>
          <p>Powered by {"ciunek"}</p>

          <div className="flex justify-between">
            <a href="https://www.linkedin.com/in/viniciusciunek/" target="_blank" className="font-bold hover:underline" rel="noreferrer">
              linkedin
            </a>{" "}
            <a href="https://github.com/viniciusciunek" target="_blank" className="font-bold hover:underline" rel="noreferrer">
              github
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

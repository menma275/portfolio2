import SocialMedia from "./SocialMedia";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 max-w-3xl h-7 mx-auto py-7 px-5 flex justify-between items-center z-50">
      <a href="/" className="cursor-pointer">
        <h1 className="text-lg">Kusuke SAKAMURA</h1>
      </a>
      <SocialMedia />
    </header>
  );
}

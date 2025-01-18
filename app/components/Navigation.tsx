import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="py-7 shadow-md mb-7">
      <div className="max-w-4xl mx-auto">
        <ul className="flex gap-6 text-lg">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li className="ml-auto">
            <Link href={"/posts"}>Posts</Link>
          </li>
          <li>
            <Link href={"/technologies"}>Technologies</Link>
          </li>
          <li>
            <Link href={"/burmese-pwals"}>ပွဲများ</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

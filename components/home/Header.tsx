import Link from "next/link";
import EchonoteDot from "../icons/EchonoteDot";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return <Link href={href}>{children}</Link>;
};

export default function Header() {
  return (
    <nav className="container mx-auto flex items-center justify-between px-8 py-4 ">
      <div>
        <NavLink href="/">
          <div className="flex lg:flex-1 gap-2 justify-center items-center">
            <EchonoteDot />
            <p className="font-heading font-bold text-black text-lg tracking-wide">
              Echo<span className="text-teal">Note</span>
            </p>
          </div>
        </NavLink>
      </div>

      <div
        className="flex lg:justify-center
          gap-2 lg:gap-12 lg:items-center"
      >
        {/* <NavLink href="/#pricing">Pricing</NavLink>
        <NavLink href="/#posts">Your posts</NavLink> */}
      </div>

      <div className="flex lg:justify-end lg:flex-1">
        <div className="flex gap-2 items-center">
          {/* <NavLink href="/dashboard">Upload</NavLink> */}
          {/* {profile would sty here} */}
        </div>
        {/* <NavLink href="/sign-in">Sign in</NavLink> */}
      </div>
    </nav>
  );
}

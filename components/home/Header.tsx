import Link from "next/link";
import EchonoteDot from "../icons/EchonoteDot";
import { Show, SignUpButton, UserButton } from "@clerk/nextjs";

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
        <NavLink href="#">
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
        <NavLink href="#pricing">Pricing</NavLink>
        <Show when="signed-in">
          <NavLink href="/#posts">Your posts</NavLink>
        </Show>
      </div>

      <div className="flex lg:justify-end lg:flex-1">
        <div className="flex gap-2 items-center">
          <Show when="signed-in">
            <NavLink href="/dashboard">Upload file</NavLink>
          </Show>
          {/* {profile would sty here} */}
          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>

        <Show when="signed-out">
          <NavLink href="/sign-in">Sign in</NavLink>
          {/* <SignInButton /> */}
          <SignUpButton />
        </Show>
      </div>
    </nav>
  );
}

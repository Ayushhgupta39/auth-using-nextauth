import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Link from "next/link";

export const Navbar = async () => {
  const session = await getServerSession(options);
  return (
    <div className="w-full bg-slate-400 p-2 flex items-center rounded-lg justify-evenly">
      <div>
        <Link href={"/"}>
          <p>Home</p>
        </Link>
      </div>
      {!session && (
        <div>
          <Link href={"/api/auth/signin"}>
            <p>SignIn</p>
          </Link>
        </div>
      )}
      {session && (
        <div>
          <Link href="/api/auth/signout">
            <p>Sign Out</p>
          </Link>
        </div>
      )}
      <Link href={"/server"}>
        {" "}
        <p>Server</p>
      </Link>
      <div>
        <Link href={"/client"}>
          {" "}
          <p>Client</p>
        </Link>
      </div>
      <div>
        <Link href={"/extra"}>
          {" "}
          <p>Extra</p>
        </Link>
      </div>
    </div>
  );
};

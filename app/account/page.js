import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest area",
};

async function Page() {
  const session = await auth();

  console.log(session);

  return (
    <h2 className="mb-7 text-2xl font-semibold text-accent-400">
      Welcome, {session.user.name.split(" ").at(0)}
    </h2>
  );
}

export default Page;

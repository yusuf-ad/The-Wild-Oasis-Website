import Counter from "../components/Counter";

async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return (
    <div>
      <h1>cabins page</h1>

      <ul style={{ display: "flex", gap: "4px" }}>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <Counter users={data} />
    </div>
  );
}

export default Page;

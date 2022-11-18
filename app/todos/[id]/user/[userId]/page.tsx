interface UserProps {
  params: any;
}

export default async function Index({ params }: UserProps) {
  const userData = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  const user = await userData.json();
  return (
    <div className="border border-success p-4">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

export function Greeting({ title, name = "suer" }) {
  console.log(title, name);
  return (
    <h1>
      {title} nombre: {name}
    </h1>
  );
}

export function UserCard({name, amount, married, address}) {
  console.log(name, amount, married, address);
  return (
    <div>
      <h1>{name}</h1>
      <p>💵{amount}</p>
      <p>{married ? "married" : "single"}</p>
      <ul>
        <li>City: {address.city}</li>
        <li>Calle: {address.street}</li>
      </ul>
    </div>
  );
}

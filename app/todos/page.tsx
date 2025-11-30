import Input from "@/components/input";

export default function Todos() {
  return (
    <div>
      <h1>Todos!</h1>
      <ul>
        <li><Input /></li>
      </ul>
      <form action="/todos">
        <button>+</button>
      </form>
    </div>
  )
}
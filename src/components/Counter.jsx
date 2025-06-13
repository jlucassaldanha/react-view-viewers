import IconUser from "./IconUser";

function Counter({ count }) {
  return (
    <div className="flex gap-2 mt-10 ml-10">
      <IconUser />
      <p className=" text-red-600">{count} Espectadores totais</p>
    </div>
  );
}

export default Counter;

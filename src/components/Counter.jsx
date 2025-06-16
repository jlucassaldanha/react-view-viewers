import IconUser from "./IconUser";

function Counter({ count }) {
  return (
    <div className="flex gap-2 mt-8 ml-8 pl-1.5">
      <IconUser fillColor="fill-red-700"/>
      <p className=" text-red-600">{count} Espectadores totais</p>
    </div>
  );
}

export default Counter;

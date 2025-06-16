import IconUser from "./IconUser";

function Counter({ count }) {
  return (
    <div className="flex gap-2 mt-8 ml-8 pl-1.5">
      <IconUser fillColor="fill-[#aa3e3e]"/>
      <p className="font-medium text-[#aa3e3e]">{count} Espectadores totais</p>
    </div>
  );
}

export default Counter;

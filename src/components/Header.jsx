function Header(prop) {
  return (
    <header className="pt-1.5 pb-2 pl-5 shadow shadow-black">
      {prop.children}
    </header>
  );
}

export default Header;

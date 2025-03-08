export default function Header() {
  return (
    <>
      <header>
        <div className="flex flex-row py-[2rem] px-[10rem] justify-between">
          <h1 className="text-4xl font-bold font-crete text-[#444]">
            Travel Angency<span className="text-[orange] w-[]">.</span>{" "}
          </h1>

          <nav>
            <ul className="flex flex-row font-bold text-[#444]">
              <li className="mx-3 uppercase">
                <a href="#">accueil</a>
              </li>
              <li className="mx-3 uppercase">
                <a href="#">destinations</a>
              </li>
              <li className="mx-3 uppercase">
                <a href="#">circuits</a>
              </li>
              <li className="mx-3 uppercase">
                <a href="#">contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

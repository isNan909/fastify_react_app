import appLogo from '../assets/app-logo.svg';

function Headerbar() {
  return (
    <>
      <header>
        <nav className="py-7 shadow-md mb-[80px]">
          <img className="mx-auto" src={appLogo} alt="app-logo" />
        </nav>
      </header>
    </>
  );
}

export default Headerbar;

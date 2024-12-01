import iceLogo from "../assets/ice.png";
import SideNavLink from "../components/SideNavLink";

export default function SideBar() {
  return (
    <aside className="flex flex-col items-center gap-10">
      <img src={iceLogo} alt="App logo" className="w-16" />
      <nav className="bg-[#1C2940] w-14 rounded-full flex flex-col items-center gap-3">
        <SideNavLink route="/" icon="home" />
        <SideNavLink route="/wallet" icon="wallet" />
        <SideNavLink route="/stake" icon="stake" />
        <SideNavLink route="/history" icon="history" />
      </nav>
    </aside>
  );
}

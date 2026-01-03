export default function useSideBar() {
  const isSideBarOpen = useState("isSideBarOpen", () => false);
  function openSideBar() {
    document.getElementById("sideBar").classList.remove("translate-x-65");
    isSideBarOpen.value = true;
  }
  function closeSideBar() {
    document.getElementById("sideBar").classList.add("translate-x-65");
    isSideBarOpen.value = false;
  }
  return { openSideBar, closeSideBar, isSideBarOpen };
}

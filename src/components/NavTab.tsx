interface NavTabProps {
  tabName: string;
  selected: boolean;
}

const NavTab = (props: NavTabProps) => {
  return (
    <a className={
        "py-4 px-2 font-semibold hover:text-green-500 transition duration-300 border-b-4 " +
        (props.selected ? "border-green-500 text-green-500" : "border-transparent text-gray-500")}
      href="#">
      {props.tabName}
    </a>
  );
};

export default NavTab;

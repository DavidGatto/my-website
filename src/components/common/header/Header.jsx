const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <img
            className="w-[120px] h-[120px]"
            src="https://res.cloudinary.com/dzmn27ifb/image/upload/v1700959473/Screenshot_2023-11-25_175218-removebg-preview_nn6fro.png"
            alt="logo"
          />

          <a href="https://walink.co/6958cd" target="blank">
            <button className="btn btn-sm">Work with me</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

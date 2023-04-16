const Header = () => {
  return (
    <div className="relative shadow">
      <div className="w-full">
        <div className="relative z-1 h-16 mx-auto px-5 max-w-7xl flex items-center justify-between text-white">
          <a className="text-2xl hover:text-cyan-400 transition-colors" href="">
            Logo
          </a>

          <ul className="flex items-center gap-5">
            <li>
              <a className="hover:text-cyan-400 transition-colors" href="">
                Link 1
              </a>
            </li>
            <li>
              <a className="hover:text-cyan-400 transition-colors" href="">
                Link 2
              </a>
            </li>
            <li>
              <a className="hover:text-cyan-400 transition-colors" href="">
                Link 3
              </a>
            </li>
            <li>
              <a className="hover:text-cyan-400 transition-colors" href="">
                Link 4
              </a>
            </li>
            <li>
              <a className="hover:text-cyan-400 transition-colors" href="">
                Link 5
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

export const Menu = () => {
  return (
    <div className="w-3/4 mx-auto text-white grid grid-cols-12 gap-4 pt-5 pb-5">
      <div className="logo col-span-8">
        <h1 className="pl-5">Bakery</h1>
      </div>
      <nav className="logo col-span-4">
        <ul className="flex text-lg">
            <li className="flex-1">HOME</li>
            <li  className="flex-1">ABOUT US</li>
            <li  className="flex-1">RESERTION</li>
            <li  className="flex-1">BAKERS</li>
        </ul>
      </nav>
    </div>
  )
}



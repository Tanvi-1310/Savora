function Topbar() {
  return (
    <header className="bg-white shadow-md h-20 flex justify-between items-center px-8">

      <div>

        <h2 className="text-2xl font-bold">
          Dashboard
        </h2>

        <p className="text-gray-500">
          Welcome back, Admin 👋
        </p>

      </div>

      <div className="flex items-center gap-4">

        <button className="text-2xl">
          🔔
        </button>

        <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
          A
        </div>

      </div>

    </header>
  );
}

export default Topbar;
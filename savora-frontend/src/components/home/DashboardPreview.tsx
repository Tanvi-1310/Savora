function DashboardPreview() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            Powerful Dashboard
          </h2>

          <p className="text-gray-500 mt-4">
            Monitor your restaurant operations from one place.
          </p>

        </div>

        <div className="mt-16 bg-white rounded-3xl shadow-xl p-10">

          <div className="grid md:grid-cols-4 gap-8">

            <div className="rounded-2xl bg-orange-100 p-6">
              <h3 className="text-lg font-semibold">Today's Orders</h3>
              <p className="text-4xl font-bold mt-3">248</p>
            </div>

            <div className="rounded-2xl bg-green-100 p-6">
              <h3 className="text-lg font-semibold">Revenue</h3>
              <p className="text-4xl font-bold mt-3">₹85K</p>
            </div>

            <div className="rounded-2xl bg-blue-100 p-6">
              <h3 className="text-lg font-semibold">Reservations</h3>
              <p className="text-4xl font-bold mt-3">64</p>
            </div>

            <div className="rounded-2xl bg-purple-100 p-6">
              <h3 className="text-lg font-semibold">Employees</h3>
              <p className="text-4xl font-bold mt-3">18</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default DashboardPreview;
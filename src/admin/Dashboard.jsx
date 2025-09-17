export default function Dashboard() {
  return (
    <div className="grid md:grid-cols-4 min-h-screen">
      {/* Sidebar */}
      <aside className="bg-arba-darkgreen text-white p-6">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <ul className="space-y-4">
          <li>Dashboard</li>
          <li>Sessions</li>
          <li>Registrations</li>
          <li>Settings</li>
        </ul>
      </aside>

      {/* Content */}
      <main className="col-span-3 p-8">
        <h1 className="text-2xl font-bold mb-6">Overview</h1>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">Total Sessions: 5</div>
          <div className="bg-white p-6 rounded-lg shadow">Registrations: 150</div>
          <div className="bg-white p-6 rounded-lg shadow">Revenue: $2000</div>
        </div>
      </main>
    </div>
  );
}

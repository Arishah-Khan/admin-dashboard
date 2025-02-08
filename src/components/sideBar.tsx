import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">
      <h2 className="text-lg font-bold">Admin Dashboard</h2>
      <nav className="mt-4">
        <ul>
          <li className="mb-2"><Link href="/dashboard">🏠 Dashboard</Link></li>
          <li className="mb-2"><Link href="/dashboard/orders">📦 Orders</Link></li>
          <li className="mb-2"><Link href="/dashboard/menu">🍔 Menu</Link></li>
          <li className="mb-2"><Link href="/dashboard/users">👥 Users</Link></li>
        </ul>
      </nav>
    </div>
  );
}

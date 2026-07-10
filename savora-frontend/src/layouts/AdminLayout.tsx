import type { ReactNode } from "react";

import Sidebar from "../components/admin/Sidebar";
import Topbar from "../components/admin/Topbar";

interface Props {
  children: ReactNode;
}

function AdminLayout({ children }: Props) {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1">

        <Topbar />

        <main className="p-8 bg-gray-100 min-h-screen">

          {children}

        </main>

      </div>

    </div>
  );
}

export default AdminLayout;
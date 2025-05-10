import Navbar from "../components/Navbar";
import AppSidebar from "../components/Sidebar";
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";
import HomeContent from "./HomeContent";

function HomePage() {
  return (
    <div className="flex h-screen">
      <SidebarProvider>
        <AppSidebar />
        <div className="flex flex-col flex-1">
          <Navbar />
          <main className="flex-1 p-4 overflow-auto">
            <HomeContent />
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
}

export default HomePage;

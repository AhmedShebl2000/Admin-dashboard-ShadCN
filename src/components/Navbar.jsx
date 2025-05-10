import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { LogOut, Moon, Sun, Settings, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useTheme } from "@/components/theme-provider";

function Navbar() {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  return (
    <nav className="p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <a href="/">Dashboard</a>
      </div>

      <div className="flex items-center gap-4">
        {theme === "light" && (
          <Moon className="cursor-pointer" onClick={() => setTheme("dark")} />
        )}
        {theme === "dark" && (
          <Sun className="cursor-pointer" onClick={() => setTheme("light")} />
        )}

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage
                className="rounded-full h-10"
                src="https://avatars.githubusercontent.com/u/1486366"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="h-[1.2rem] w-[1.2rem] " /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings /> Settings
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <LogOut /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

export default Navbar;

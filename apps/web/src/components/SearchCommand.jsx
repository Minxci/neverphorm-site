
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Users, Gamepad2, Info, Mail } from 'lucide-react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command.jsx";

const SearchCommand = ({ onSelect }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const pages = [
    { title: "Home", route: "/", icon: Home, description: "Return to the main page" },
    { title: "Join the Team", route: "/join-the-team", icon: Users, description: "View future opportunities" },
  ];

  const sections = [
    { title: "Game", route: "/#game", icon: Gamepad2, description: "Learn about No 2 Weeks" },
    { title: "About", route: "/#about", icon: Info, description: "Our studio philosophy" },
    { title: "Contact", route: "/#contact", icon: Mail, description: "Get in touch with us" },
  ];

  const handleSelect = (route) => {
    if (route.startsWith('/#')) {
      const id = route.substring(2);
      if (location.pathname === '/') {
        // If already on home page, just scroll
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to home with hash
        navigate(route);
      }
    } else {
      navigate(route);
    }
    
    if (onSelect) {
      onSelect();
    }
  };

  return (
    <Command className="rounded-lg border shadow-md bg-background">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        
        <CommandGroup heading="Pages">
          {pages.map((page) => (
            <CommandItem
              key={page.route}
              value={page.title}
              onSelect={() => handleSelect(page.route)}
              className="flex items-center gap-3 py-3 cursor-pointer"
            >
              <page.icon className="w-4 h-4 text-muted-foreground" />
              <div className="flex flex-col">
                <span className="font-medium">{page.title}</span>
                <span className="text-xs text-muted-foreground">{page.description}</span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandGroup heading="Sections">
          {sections.map((section) => (
            <CommandItem
              key={section.route}
              value={section.title}
              onSelect={() => handleSelect(section.route)}
              className="flex items-center gap-3 py-3 cursor-pointer"
            >
              <section.icon className="w-4 h-4 text-muted-foreground" />
              <div className="flex flex-col">
                <span className="font-medium">{section.title}</span>
                <span className="text-xs text-muted-foreground">{section.description}</span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default SearchCommand;

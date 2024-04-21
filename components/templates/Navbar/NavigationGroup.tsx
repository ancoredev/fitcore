import React from "react";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

import { Menu } from "@/lib/types";
import { ListItem } from "./ListItem";

interface NavigationItemProps {
  link: Menu;
}

export const NavigationGroup: React.FC<NavigationItemProps> = ({ link }) => {
  if (link.sublinks)
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger>{link.header}</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-1 p-3 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
            {link.sublinks?.map((component) => (
              <ListItem
                key={component.title}
                title={component.title}
                href={component.href}
                description={component.description}
              />
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  return (
    <NavigationMenuItem>
      <Link href="/" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {link.header}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

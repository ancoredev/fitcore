"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { navlinks } from "@/lib/links";
import { NavigationGroup } from "./NavigationGroup";

export function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navlinks.map((item) => (
          <NavigationGroup key={item.header} link={item} />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";

interface Props extends React.HTMLProps<HTMLAnchorElement> {
  title: string;
  href: string;
  description?: string;
}

export const ListItem: React.FC<Props> = ({
  className,
  title,
  description = "",
  ...props
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {description && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {description}
            </p>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  );
};

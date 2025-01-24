"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
// import { usePathname } from "next/navigation"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Our Values",
    href: "/about",
    description:
      "We believe in innovation, integrity, and excellence. Our values guide every project we take on and every partnership we build",
  },
  {
    title: "About Us",
    href: "/about",
    description:
      "Looking for a career in tech? We&#39;re always seeking passionate, driven individuals to join our team. Check out open positions and apply today!",
  },
  {
    title: "Contact",
    href: "/about",
    description:
      "We value long-term partnerships with businesses aiming for digital growth. Let&#39;s collaborate to create impactful solutions together.",
  },
  {
    title: "Terms & Conditions",
    href: "//about",
    description:
      "We believe in the power of innovation and support startups with funding and mentorship. Explore opportunities to partner with us in driving the next big idea.",
  },
]

export function NavigationMenuDemo() {

  return (
    <NavigationMenu>
      <NavigationMenuList>
      <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-noire`} >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={`text-noire`}>
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    
                    <Image alt="logo" src="/logo.png" width={100} height={100} className="rounded-full" />
                    <div className=" text-md font-medium text-teal-500">
                    Mahura A Lewatle Trading Pty Ltd
                    </div>
                    <p className="text-sm mt-4 leading-tight text-muted-foreground">
                    Travel & Transportation And Other Business
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/services/drilling" title="💧 Drilling">
              Water resource management and infrastructure in rural areas. 
              </ListItem>
              <ListItem href="/services/farming" title="💧 Farming">
              Empowering Farmers with Advanced Water & Land Management.
              </ListItem>
              <ListItem href="/services/training" title="💧 Malt Training">
              Trains and Prepares competent and skilled seafarers for the oil and gas, offshore, merchant navy and port operations in the maritime sectors..
              </ListItem>
             
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={`text-noire`}>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/blog" legacyBehavior passHref>
            <NavigationMenuLink className={`text-noire ${navigationMenuTriggerStyle()}`}>
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const  ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-lg font-bold leading-none text-darkTeal">{title}</div>
          <p className="line-clamp-2 text-[12px] leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

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



export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
      <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-teal-500`} >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={`text-teal-500`}>
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="#about"
                  >
                    
                    <Image alt="logo" src="/logo.png" width={100} height={100} className="rounded-full" />
                    <div className=" text-md font-medium text-teal-500">
                    Mahura A Lewatle Trading Pty Ltd
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    Travel & Transportation And Other Business
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="#service-1" title="💧 Rural Area Water Supply through Drilling & Equipping Boreholes">
              We provide tailored water supply solutions for rural areas by drilling boreholes and equipping them with the necessary infrastructure to ensure a sustainable and clean water supply. Whether you&#39;re a local government, NGO, or a private entity, our expertise in borehole drilling ensures that your community or project has access to safe drinking water.
              </ListItem>
              <ListItem href="#service-2" title="💧 Groundwater Assessment, Development & Management">
              Understanding the dynamics of groundwater is essential for sustainable water use. Our comprehensive groundwater services cover assessment, development, and long-term management of aquifers to ensure efficient resource utilization.
              </ListItem>
              <ListItem href="#service-3" title="💧 Geophysical Survey & Geological Mapping">
              To ensure the success of water projects, understanding the geological and geophysical conditions of the area is essential. Our geophysical survey and geological mapping services provide crucial data to guide decision-making for water resource development.</ListItem>
             
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#about-us" legacyBehavior passHref>
            <NavigationMenuLink className={`text-teal-500 ${navigationMenuTriggerStyle()}`}>
              About Us
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
          <div className="text-[12px] font-medium leading-none text-teal-500">{title}</div>
          <p className="line-clamp-2 text-[12px] leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

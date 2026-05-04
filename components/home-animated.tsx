"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 380, damping: 28 },
  },
};

export function HomeAnimated() {
  return (
    <motion.main
      className="flex w-full max-w-lg flex-col gap-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div className="text-center" variants={item}>
        <p className="text-sm font-medium text-muted-foreground">Next.js · Tailwind CSS v4 · shadcn/ui · Framer Motion</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">Wildcalm</h1>
        <p className="mt-3 text-muted-foreground">
          Your app is wired with Tailwind, shadcn, and motion. Extend from here.
        </p>
      </motion.div>

      <motion.div variants={item}>
        <Card>
          <CardHeader>
            <CardTitle>Get started</CardTitle>
            <CardDescription>
              Edit <code className="rounded bg-muted px-1.5 py-0.5 text-sm">app/page.tsx</code> and add
              components with{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm">npx shadcn@latest add</code>.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="https://ui.shadcn.com/docs/installation/next"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants(), "w-full sm:w-auto")}
            >
              shadcn/ui docs
            </Link>
            <Link
              href="https://tailwindcss.com/docs/installation/framework-guides/nextjs"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline" }), "w-full sm:w-auto")}
            >
              Tailwind + Next.js
            </Link>
          </CardContent>
          <CardFooter className="text-sm text-muted-foreground">
            Run <code className="rounded bg-muted px-1.5 py-0.5">npm run dev</code> to start the dev server.
          </CardFooter>
        </Card>
      </motion.div>
    </motion.main>
  );
}

import type { ReactNode } from "react";

type PageLayoutProps = {
  title: string;
  children: ReactNode;
};

export default function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <main className="page">
      <h2 className="text-4xl font-bold">{title}</h2>
      <section className="flex flex-col py-8 w-full">{children}</section>
    </main>
  );
}

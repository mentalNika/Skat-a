import "./globals.scss";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { ColorSchemeScript } from "@mantine/core";
import { cookies } from "next/headers";
import { Metadata } from "next";

const InterFont = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "700"],
  variable: "--inter",
});

export const metadata: Metadata = {
  title: {
    template: "Skat-a | %s",
    default: "Skat-a",
  },
  description: "Добро пожаловать на сайт логистического агентсва Скат-а",
  openGraph: {
    title: {
      template: "Skat-a | %s",
      default: "Skat-a",
    },
    description: "Добро пожаловать на сайт логистического агентсва Скат-а",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_HOST}/images/helmet.png`,
        width: 800,
        height: 600,
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    title: {
      template: "Skat-a | %s",
      default: "Skat-a",
    },
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_HOST}/images/helmet.png`,
        width: 800,
        height: 600,
      },
    ],
    description: "Добро пожаловать на сайт логистического агентсва Скат-а",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookiesStore = await cookies();
  const initialScheme = (cookiesStore.get("colorScheme")?.value ?? "light") as
    | "light"
    | "dark";

  return (
    <html
      lang="ru"
      data-mantine-color-scheme={initialScheme}
      suppressHydrationWarning
    >
      <head>
        <ColorSchemeScript defaultColorScheme={initialScheme} />
      </head>

      <body className={InterFont.variable}>
        <Providers fontFamily={InterFont} defaultColorScheme={initialScheme}>
          {children}
        </Providers>
      </body>
    </html>
  );
}

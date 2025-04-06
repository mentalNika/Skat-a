"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { FC, PropsWithChildren } from "react";
import { MantineProvider } from "@mantine/core";
import { theme } from "@/app/theme";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n/config";

interface Props extends PropsWithChildren {
  defaultColorScheme: "light" | "dark";
  fontFamily: NextFontWithVariable;
}
const queryClient = new QueryClient();
export const Providers: FC<Props> = ({
  children,
  defaultColorScheme,
  fontFamily,
}) => {
  console.log(defaultColorScheme);
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider
        defaultColorScheme={defaultColorScheme}
        theme={{ ...theme, fontFamily: fontFamily.style.fontFamily }}
      >
        {/* {children} */}
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
};

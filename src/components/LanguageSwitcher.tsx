"use client";
import { useLanguage } from "@/lib/hooks/useLanguage";
import { Select, useMantineTheme } from "@mantine/core";

export function LanguageSwitcher() {
  const theme = useMantineTheme();
  const { changeLanguage } = useLanguage();

  return (
    <Select
      value={"theme.dir"} // или сохраняйте язык в теме
      onChange={(value) => value && changeLanguage(value)}
      data={[
        { value: "en", label: "English" },
        { value: "ru", label: "Русский" },
      ]}
    />
  );
}

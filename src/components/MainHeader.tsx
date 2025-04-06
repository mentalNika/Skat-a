"use client";
import { useEffect, useState } from "react";
import {
  ActionIcon,
  Box,
  Burger,
  Container,
  Group,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import classes from "./MainHeader.module.scss";
import Link from "next/link";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { setCookieColorscheme } from "@/lib/utils/clientColorScheme";

const mainLinks = [
  { link: "/about", label: "Features" },
  { link: "/pricing", label: "Pricing" },
  { link: "/learn", label: "Learn" },
  { link: "/community", label: "Community" },
];

export function MainHeader() {
  const [opened, { toggle }] = useDisclosure(false);
  const [scrolled, setScrolled] = useState(false);
  const { setColorScheme, colorScheme } = useMantineColorScheme();

  const handleChangeScheme = () => {
    const nextScheme = colorScheme === "dark" ? "light" : "dark";
    setCookieColorscheme(nextScheme);
    setColorScheme(nextScheme);
  };
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const mainItems = mainLinks.map((item) => (
    <Link
      href={item.link}
      key={item.label}
      className={classes.mainLink}
      color={"textPrimary"}
    >
      {item.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={classes.videoBg}
        poster="your-poster.jpg"
      >
        <source
          src="https://cdn.prod.website-files.com/649bc60a5baf71dfbdca9f99%2F67ae9e71db6c79bb4a174ee3_seavantage-main-video-2025-transcode.mp4"
          type="video/mp4"
        />
      </video>

      <Container
        className={`${classes.inner} ${scrolled ? classes.scrolled : ""}`}
        size="xl"
      >
        <div className={classes.logo}>
          {/* <Image src="/logo.svg" alt="Logo" width={120} height={30} /> */}
        </div>

        <Box className={classes.links} visibleFrom="sm">
          <Group gap={20} className={classes.mainLinks}>
            {mainItems}
          </Group>
          <ActionIcon
            variant={"transparent"}
            color={"blue"}
            onClick={() => handleChangeScheme()}
            h={"unset"}
            w={"unset"}
          >
            {colorScheme === "light" ? (
              <IconSun size={34} />
            ) : (
              <IconMoon size={34} />
            )}
          </ActionIcon>
        </Box>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
          hiddenFrom="sm"
        />
      </Container>
    </header>
  );
}

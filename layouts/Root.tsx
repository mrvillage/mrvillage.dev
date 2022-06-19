import { AppShell } from "@mantine/core";
import { RootHeader } from "../components/Layout/RootHeader";
import { mainLinks } from "../components/Layout/mainLinks";
import { useDisclosure } from "@mantine/hooks";
import { RootHeaderNavbar } from "../components/Layout/RootHeaderNavbarProps";
import PageScrollArea from "../components/Layout/PageScrollArea";
import { JSXElementWithLayout } from "../types/layout";
import { layoutGetLayout } from "../utils/layout";

interface RootProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

export default function Root({
  children,
  showFooter,
}: RootProps): JSXElementWithLayout {
  const [navbarOpened, navbarOpenedHandlers] = useDisclosure(false);
  return (
    <AppShell
      padding={0}
      fixed
      navbarOffsetBreakpoint="sm"
      navbar={
        <RootHeaderNavbar
          links={mainLinks}
          opened={navbarOpened}
          toggleOpened={navbarOpenedHandlers.toggle}
        />
      }
      header={
        <RootHeader
          links={mainLinks}
          opened={navbarOpened}
          toggleOpened={navbarOpenedHandlers.toggle}
        />
      }
    >
      <PageScrollArea showFooter={showFooter}>{children}</PageScrollArea>
    </AppShell>
  );
}

Root.getLayout = layoutGetLayout(Root);

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
  headerInheritBackgroundColor?: boolean;
  footerInheritBackgroundColor?: boolean;
  showFooterBody?: boolean;
}

export default function Root({
  children,
  showFooter,
  headerInheritBackgroundColor,
  footerInheritBackgroundColor,
  showFooterBody,
}: RootProps): JSXElementWithLayout {
  const [navbarOpened, navbarOpenedHandlers] = useDisclosure(false);
  return (
    <>
      <RootHeader
        links={mainLinks}
        opened={navbarOpened}
        toggleOpened={navbarOpenedHandlers.toggle}
        inheritBackgroundColor={headerInheritBackgroundColor}
      />
      <RootHeaderNavbar
        links={mainLinks}
        opened={navbarOpened}
        toggleOpened={navbarOpenedHandlers.toggle}
      />
      <main>
        <PageScrollArea
          showFooter={showFooter}
          footerInheritBackgroundColor={footerInheritBackgroundColor}
          showFooterBody={showFooterBody}
        >
          {children}
        </PageScrollArea>
      </main>
    </>
  );
}

Root.getLayout = layoutGetLayout(Root);

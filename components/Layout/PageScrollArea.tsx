import { HEADER_HEIGHT } from "./RootHeader";
import { Box, ScrollArea } from "@mantine/core";
import Footer from "./Footer";
import { footerLinks } from "./footerLinks";

interface PageScrollAreaProps {
  children: React.ReactNode;
  showFooter?: boolean;
  footerInheritBackgroundColor?: boolean;
  showFooterBody?: boolean;
}

export default function PageScrollArea({
  children,
  showFooter = true,
  footerInheritBackgroundColor,
  showFooterBody,
}: PageScrollAreaProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: `calc(100vh - ${HEADER_HEIGHT}px)`,
      }}
    >
      {/* Recursively apply height style since ScrollArea injects additional divs without a height so the footer ends up elevated */}
      <style
        dangerouslySetInnerHTML={{
          __html: `.full-height > div > div{height: 100%;}`,
        }}
      />
      <ScrollArea
        sx={{ display: "flex", flexGrow: 1, height: "100%" }}
        className="full-height"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Box p="md" sx={{ flexGrow: 1 }}>
            {children}
          </Box>
          {showFooter && (
            <Footer
              links={footerLinks}
              inheritBackgroundColor={footerInheritBackgroundColor}
              showFooterBody={showFooterBody}
            />
          )}
        </Box>
      </ScrollArea>
    </Box>
  );
}

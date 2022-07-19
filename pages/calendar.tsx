import { Group, ScrollArea } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { CalendarColumn, HOUR_HEIGHT } from "../components/Calendar";
import { DndAreaContextProvider } from "../context/dnd";

export default function Page() {
  const { width } = useViewportSize();
  console.log(width);
  return (
    <DndAreaContextProvider maxX={180} maxY={360 - HOUR_HEIGHT * 2}>
      <div style={{ width: "100%" }}>
        <ScrollArea>
          <Group noWrap>
            <CalendarColumn />
            <CalendarColumn />
            <CalendarColumn />
            <CalendarColumn />
            <CalendarColumn />
            <CalendarColumn />
            <CalendarColumn />
            <CalendarColumn />
            <CalendarColumn />
            <CalendarColumn />
          </Group>
          <CalendarColumn />
          <CalendarColumn />
        </ScrollArea>
      </div>
    </DndAreaContextProvider>
  );
}

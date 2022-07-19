import { DndContext, useDraggable } from "@dnd-kit/core";
import { Coordinates, UniqueIdentifier } from "@dnd-kit/core/dist/types";
import { createSnapModifier, restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { Button } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useState } from "react";
import { useDndAreaContext } from "../context/dnd";
import { useDefaultSensors } from "../hooks/dnd";
import { draggableStyles, setCoordinatesWithAreaLimit } from "../utils/dnd";

export const FIFTEEN_MINUTE_HEIGHT = 9;
export const HOUR_HEIGHT = 36;

function Draggable({ x, y, id }: { x: number; y: number; id: number }) {
  const { maxX, maxY } = useDndAreaContext();
  const { listeners, setNodeRef, transform } = useDraggable({
    id,
  });
  const styles = draggableStyles(transform, {
    limitToArea: true,
    x,
    y,
    maxX,
    maxY,
  });
  return (
    <Button
      ref={setNodeRef}
      {...listeners}
      style={{
        ...styles,
        height: `${HOUR_HEIGHT - 1}px`,
        top: styles.top + 1,
        position: "absolute",
      }}
      fullWidth
      radius={1}
    >
      Calendar
    </Button>
  );
}

export function CalendarColumn() {
  const { maxX, maxY } = useDndAreaContext();
  const [coordinates, setCoordinates] = useState<
    Record<UniqueIdentifier, Coordinates>
  >({
    1: { x: 0, y: 0 },
    2: { x: 0, y: 0 },
    3: { x: 0, y: 0 },
    4: { x: 0, y: 0 },
  });
  const sensors = useDefaultSensors();
  const snapToGrid = createSnapModifier(FIFTEEN_MINUTE_HEIGHT);
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  return (
    <DndContext
      onDragStart={(event) => {
        setActiveId(event.active.id);
      }}
      onDragEnd={({ delta }) => {
        if (activeId) {
          setCoordinates((prev) => {
            const newCoords = setCoordinatesWithAreaLimit(
              prev[activeId],
              delta,
              {
                maxX,
                maxY,
              }
            );
            for (const [id, coords] of Object.entries(prev)) {
              if (id == activeId) {
                continue;
              } else if (
                newCoords.y > coords.y - HOUR_HEIGHT &&
                newCoords.y < coords.y + HOUR_HEIGHT
              ) {
                showNotification({
                  message:
                    "You can't move that event to the same time as another event",
                });
                return prev;
              }
            }
            return {
              ...prev,
              [activeId]: newCoords,
            };
          });
        }
        setActiveId(null);
      }}
      modifiers={[snapToGrid, restrictToVerticalAxis]}
      sensors={sensors}
    >
      <div
        style={{
          position: "relative",
          width: "180px",
          height: "360px",
          backgroundImage: `repeating-linear-gradient(
      0deg,
      transparent,
      transparent ${HOUR_HEIGHT - 1}px,
      #ddd ${HOUR_HEIGHT - 1}px,
      #ddd ${HOUR_HEIGHT}px
    )
    `,
          backgroundSize: `${HOUR_HEIGHT}px ${HOUR_HEIGHT}px`,
        }}
      >
        <Draggable x={0} y={coordinates[1].y} id={1} />
        <Draggable x={0} y={coordinates[2].y} id={2} />
        <Draggable x={0} y={coordinates[3].y} id={3} />
        <Draggable x={0} y={coordinates[4].y} id={4} />
      </div>
    </DndContext>
  );
}

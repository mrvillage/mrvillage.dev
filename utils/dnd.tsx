import { Coordinates } from "@dnd-kit/core/dist/types";
import type { Transform } from "@dnd-kit/utilities/dist/css";

interface DraggableTransformOptions {
  limitToArea?: boolean;
  x?: number;
  y?: number;
  maxX?: number;
  maxY?: number;
}

export function draggableTransform(
  transform: Transform | null,
  options?: DraggableTransformOptions
) {
  const {
    limitToArea = false,
    x: currentX = 0,
    y: currentY = 0,
    maxX = Infinity,
    maxY = Infinity,
  } = options || {};
  let x = transform?.x ?? 0;
  let y = transform?.y ?? 0;
  if (limitToArea) {
    const nextX = currentX + x;
    const nextY = currentY + y;
    if (nextX < 0) {
      x = -currentX;
    }
    if (nextY < 0) {
      y = -currentY;
    }
    if (nextX > maxX) {
      x = maxX - currentX;
    }
    if (nextY > maxY) {
      y = maxY - currentY;
    }
  }
  return `translate3d(${x}px, ${y}px, 0px) scale(1)`;
}

interface SetCoordinatesWithAreaLimitOptions {
  maxX: number;
  maxY: number;
}

export function setCoordinatesWithAreaLimit(
  prev: Coordinates,
  delta: Coordinates,
  { maxX, maxY }: SetCoordinatesWithAreaLimitOptions
) {
  const currentX = prev.x;
  const currentY = prev.y;
  let x = delta.x;
  let y = delta.y;
  const nextX = currentX + x;
  const nextY = currentY + y;
  if (nextX < 0) {
    x = -currentX;
  }
  if (nextY < 0) {
    y = -currentY;
  }
  if (nextX > maxX) {
    x = maxX - currentX;
  }
  if (nextY > maxY) {
    y = maxY - currentY;
  }
  return {
    x: currentX + x,
    y: currentY + y,
  };
}

interface DraggableStylesOptions {
  limitToArea?: boolean;
  x?: number;
  y?: number;
  maxX?: number;
  maxY?: number;
}

export function draggableStyles(
  transform: Transform | null,
  options?: DraggableStylesOptions
) {
  const {
    limitToArea = false,
    x = 0,
    y = 0,
    maxX = Infinity,
    maxY = Infinity,
  } = options || {};
  return {
    transform: draggableTransform(transform, {
      limitToArea,
      x,
      y,
      maxX,
      maxY,
    }),
    top: y,
    left: x,
  };
}

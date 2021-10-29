import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

const GridLayout = () => {
  const [currentBreakPoint, setCurrentBreakPoint] = useState();
  return (
    <ResponsiveGridLayout
      onBreakpointChange={this.handleBreakPointChange}
      isDraggable
      isResizable
      draggableHandle=".grid-item__title"
      breakpoints={{ lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
    ></ResponsiveGridLayout>
  );
};

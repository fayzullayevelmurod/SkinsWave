// hooks/useTradeLockTooltip.js
import { useEffect, useRef, useState } from 'react';

export function useTradeLockTooltip() {
  const tooltipRef = useRef(null);
  const productRefs = useRef([]);
  const [activeTooltip, setActiveTooltip] = useState(null);

  const handleTooltipToggle = (index) => setActiveTooltip(index);
  const handleTooltipHide = () => setActiveTooltip(null);

  useEffect(() => {
    if (
      activeTooltip === null ||
      !tooltipRef.current ||
      !productRefs.current[activeTooltip]
    )
      return;

    const tooltip = tooltipRef.current;
    const product = productRefs.current[activeTooltip];
    const productRect = product.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    const viewportWidth = window.innerWidth;

    let leftPosition = productRect.left - tooltipRect.width - 60;
    if (leftPosition < 0) {
      leftPosition = productRect.right + 60;
    }
    if (leftPosition + tooltipRect.width > viewportWidth) {
      leftPosition = productRect.left - tooltipRect.width - 60;
    }

    tooltip.style.left = `${leftPosition}px`;
    tooltip.style.top = `${productRect.top - 130}px`;
    tooltip.style.display = 'block';
  }, [activeTooltip]);

  useEffect(() => {
    if (activeTooltip === null && tooltipRef.current) {
      tooltipRef.current.style.display = 'none';
    }
  }, [activeTooltip]);

  return {
    tooltipRef,
    productRefs,
    activeTooltip,
    handleTooltipToggle,
    handleTooltipHide,
  };
}

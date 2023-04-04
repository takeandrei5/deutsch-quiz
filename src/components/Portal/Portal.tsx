import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import type { PortalProps } from "./types";

const Portal: React.FC<PortalProps> = (props: PortalProps) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal-preload-images");
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(props.children, ref.current)
    : null;
};

export default Portal;

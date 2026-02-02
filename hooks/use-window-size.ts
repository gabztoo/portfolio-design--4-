"use client"

import { useEffect, useState, useCallback } from "react"

const TINY_THRESHOLD = 400

export function useWindowSize(onTinyWindow: () => void) {
  const [wasTiny, setWasTiny] = useState(false)

  const handleResize = useCallback(() => {
    const isTiny = window.innerWidth < TINY_THRESHOLD || window.innerHeight < TINY_THRESHOLD
    
    if (isTiny && !wasTiny) {
      setWasTiny(true)
      onTinyWindow()
    } else if (!isTiny) {
      setWasTiny(false)
    }
  }, [wasTiny, onTinyWindow])

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [handleResize])
}

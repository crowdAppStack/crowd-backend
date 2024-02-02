import React from "react"
import { useGuards } from "@/hooks/useGuards"

type Props = {
  guard: string | string[],
  element: JSX.Element
}

const ProtectedRoute: React.FC<Props>= ({ guard, element }: Props) => {
  const passed = useGuards(guard)

  return passed && element
}

export default ProtectedRoute

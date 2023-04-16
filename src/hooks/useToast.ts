import { useState } from 'react'

type ToastArgs = {
  title: string
  description: string
  variant: 'success' | 'danger' | 'warning' | 'default'
}

export const UseToast = () => {
  const [listToast, setListToast] = useState<ToastArgs[]>([])

  const addNewToast = (newToast: ToastArgs) => {
    setListToast((prevState) => [...prevState, newToast])
  }

  return {
    addNewToast,
    listToast,
  }
}

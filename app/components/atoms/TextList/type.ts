import {  ReactNode } from "react"

export type TextListItemProps = {
  icon?: ReactNode
  title: String
}

export type TextListProp = {
  items: TextListItemProps[]
}

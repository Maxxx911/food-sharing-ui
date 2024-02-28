import {  ComponentType } from "react"
import { LinkProps } from "next/link";


export type TextListItemProps = {
  isLink: Boolean
  to?: LinkProps["href"]
} & ListItemProps;

export type ListItemProps = {
  icon?: ComponentType<any>
  title: string
}

export type LinkItemProps = {
  to?: LinkProps["href"]
} & ListItemProps;

export type TextListProp = {
  items: TextListItemProps[]
}

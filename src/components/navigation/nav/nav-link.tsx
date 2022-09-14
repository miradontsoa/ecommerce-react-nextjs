import React from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

export interface NavLinkProps extends LinkProps {
  children: React.ReactElement
}

/* Add attribure data-active to a Link */
const NavLink = ({ children, href, ...props }: NavLinkProps) => {
  const router = useRouter()
  return (
    <Link href={href} {...props}>
      {router.pathname === href ? React.cloneElement(children, { 'data-active': true }) : children}
    </Link>
  )
}
export default NavLink;
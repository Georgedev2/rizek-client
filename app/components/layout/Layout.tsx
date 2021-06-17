/* import { LayoutContainer } from './components'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const DefaultLayout = ({ children }: Props) => <LayoutContainer> {children}</LayoutContainer>

export default DefaultLayout */

import styled from 'styled-components'

export const Layout = styled.div`
  width: 68%;
  margin: auto;

  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      width: 100%;
    }
  }
`
export default Layout

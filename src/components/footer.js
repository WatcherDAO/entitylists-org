import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 1rem;
  box-sizing: border-box;
  border-top: 1px solid #1f1f1f;
`

const Nav = styled.nav`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  width: fit-content;

  > * {
    margin-left: 1rem;
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      <span>A WatcherDAO Project</span>
      <Nav>
        <a href="https://watcherdao.org/docs/">Docs</a>
        <a href="https://github.com/WatcherDAO">GitHub</a>
        <a href="https://discord.gg/">DAO</a>
        <a href="https://app.watcherdao.org">App</a>
      </Nav>
    </StyledFooter>
  )
}

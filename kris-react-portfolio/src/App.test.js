import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

jest.mock('gsap-trial', () => ({
  registerPlugin: () => {},
  timeline: () => ({
    to: () => ({
      from: () => ({}),
    }),
  }),
  from: () => {},
  fromTo: () => {},
  set: () => {},
}))
jest.mock('gsap-trial/DrawSVGPlugin', () => ({}))

test('renders contact button', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )
  const linkElement = screen.getByText(/CONTACT ME/i)
  expect(linkElement).toBeInTheDocument()
})

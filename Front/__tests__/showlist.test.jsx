import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ShowListPage from '../src/app/Showlist/page.tsx'

// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}));

 
describe('ShowList', () => {
  it('renders a page with text and rows', () => {
    render(<ShowListPage />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })
})
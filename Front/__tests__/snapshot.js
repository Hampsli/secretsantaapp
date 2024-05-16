import { render } from '@testing-library/react'
import Page from '../src/app/page'
import ShowListPage from '../src/app/Showlist/page.tsx'


// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}));

 
it('renders homepage unchanged', () => {
  const { container } = render(<Page />)
  expect(container).toMatchSnapshot()
})

it('renders final screen unchanged', () => {
  const { container } = render(<ShowListPage/>)
  expect(container).toMatchSnapshot()
})
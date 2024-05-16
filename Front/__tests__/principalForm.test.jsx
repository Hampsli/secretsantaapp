import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import PrincipalForm from '../src/app/components/principalForm/PrincipalForm.tsx'

// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}));

 
describe('PrincipalForm', () => {
  it('renders Form with empty inputs', () => {
    render(<PrincipalForm />)
 
    const button = screen.getByRole('button',{name:'add family member'})
 
    expect(button).toBeInTheDocument()
  })
  
})
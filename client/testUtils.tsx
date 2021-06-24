import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Form, Formik } from 'formik'
import { NextApiRequest, NextApiResponse } from 'next'

const NextImageMock = (props: any): any => React.createElement('img', props)
NextImageMock.displayName = 'NextImageMock'
jest.mock('next/image', () => NextImageMock)

const NextLinkMock = ({ children, href }: any): any =>
  React.Children.map(children, (child) =>
    React.cloneElement(child, {
      href,
    }),
  )
NextLinkMock.displayName = 'NextLinkMock'
jest.mock('next/link', () => NextLinkMock)

window.matchMedia = jest.fn().mockImplementation((query: any) => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  }
})

export const mockRequest = (
  fn: (req: NextApiRequest, res: NextApiResponse) => Promise<void>,
  reqData: any = {},
) => {
  return new Promise((res) => {
    const response = {
      status: (code: any) => ({
        json: (value: any) => {
          res([code, value])
        },
        send: (value: any) => response.status(code).json(value),
      }),
    }
    return fn(reqData, response as any)
  })
}

const AllTheProviders: React.FC = ({ children }) => {
  return <>{children}</>
}
AllTheProviders.displayName = 'AllTheProviders'

export const FORM_ID = 'form'
export const FormikWrap: React.FC<{ onSubmit?: any; values?: any }> = ({
  onSubmit = () => {},
  values = { name: '' },
  children,
}) => {
  return (
    <Formik
      initialValues={{ ...values }}
      validate={() => {}}
      onSubmit={(values) => onSubmit(Object.entries(values))}
    >
      <Form data-testid="form">{children}</Form>
    </Formik>
  )
}
FormikWrap.displayName = 'FormikWrap'

const customRender = (ui: React.ReactElement) => {
  return render(ui, { wrapper: AllTheProviders })
}

export * from '@testing-library/react'

export { customRender as render }

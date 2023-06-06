import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className='d-flex align-items-center p-5 bg-light text-dark'>
      <div className='container d-flex flex-column align-items-center justify-content-center'>

        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold display-1 text-secondary'>
            <span className='sr-only'>Error</span> {status || 404}
          </h2>
          <p className='text-2xl font-semibold mb-8'>{error?.message}</p>
          <Link
            to='/'
            className='btn btn-primary btn-lg rounded-pill'
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
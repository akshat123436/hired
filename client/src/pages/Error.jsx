import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
    <div>Error page</div>
    <Link to="/">Got back come</Link>
    </div>
  )
}

export default Error
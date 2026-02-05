import React from 'react'
import { ClipLoader } from "react-spinners";
const override = {
    display: "block",
    margin : "100px auto"
}
const spinners = ({ loading}) => {
  return (
    <div>
          <ClipLoader
        color="#00000"
        loading = {loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default spinners
import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Paths } from "../../const/paths";
function Form() {
    return (
        <Routes>
            {
                Paths.map((data, key) => (
                    <Route
                        key={key}
                        path={data.path}
                        element={
                            <data.component 
                                {...{
                                    data,
                                }}
                            />
                        }
                    />
                ))
            }
        </Routes>
    )
}

export default Form
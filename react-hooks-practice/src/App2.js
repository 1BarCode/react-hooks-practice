import React, { useState } from 'react'

function App2() {
    const [resourceType, setResourceType] = useState('posts')


    return (
        <div>
            <div>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
            </div>
            <h1>{resourceType}</h1>
        </div>
    )
}





export default App2;
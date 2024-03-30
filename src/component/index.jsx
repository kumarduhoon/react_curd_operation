import React from 'react'

function Index() {
    const [user, setUser] = React.useState({
        id: Date.now(),
        fullname: "",
        desigation: "",
        description: ""
    })
    const [userData, setUserData] = React.useState([])
    const [isupdate, setIsUpdate] = React.useState(false)
    function onChangeHandler(e) {
        const { name, value } = e.target
        setUser((pre) => ({ ...pre, [name]: value }))
    }

    function onSubmitHandler(e) {
        setUserData((prev) => ([...prev, user]))
        setUser({
            id: "",
            fullname: "",
            desigation: "",
            description: ""
        })
    }

    function deletuser(id) {
        const newData = userData.filter((item) => (item.id !== id))
        setUserData(newData)
    }

    function updateHandler(id) {
        const data = userData.find((item) => item.id === id)
        if (data) {
            setIsUpdate(true)
            setUser({
                id: id,
                fullname: data.fullname,
                desigation: data.desigation,
                description: data.description
            })
        }
    }

    function onClearHandler() {
        setIsUpdate(false)
        setUser({
            id: "",
            fullname: "",
            desigation: "",
            description: ""
        })
    }

    function updateDataHandle() {
        let index = userData.map((item) => (item.id)).indexOf(user.id)
        const data = [...userData]
        data[index].id = user.id
        data[index].fullname = user.fullname
        data[index].desigation = user.desigation
        data[index].description = user.description
        onClearHandler()
    }

    return (
        <>
            <div>User Details</div>
            <br />
            <div>
                <label htmlFor='fullname'> FullName :
                    <input
                        id="fullname"
                        type="text"
                        name="fullname"
                        value={user.fullname}
                        onChange={onChangeHandler}
                    />
                </label>
                <br />
                <br />
                <br />
                <label htmlFor='desigation'> Desigation :
                    <input
                        id="desigation"
                        type="text"
                        name="desigation"
                        value={user.desigation}
                        onChange={onChangeHandler}
                    />
                </label>
                <br />
                <br />
                <br />
                <label htmlFor='description'> Description :
                    <input
                        id="description"
                        type='text'
                        name='description'
                        value={user.description}
                        onChange={onChangeHandler}
                    />
                </label>
                <br />
                <br />
                <br />
                {isupdate ? <button type='button' onClick={updateDataHandle}>update</button> : <button onClick={onSubmitHandler} type='button'> submit</button>}
                <button onClick={onClearHandler} type='button'> Clear</button>
            </div>
            <br />
            <br />
            <br />
            <div>
                {userData.length > 0 && userData.map((item, index) => {
                    return (
                        <li key={index}><span><ul>
                            <li>{item.fullname}</li>
                            <li>{item.desigation}</li>
                            <li>{item.description}</li>
                        </ul></span>
                            <button type='button' onClick={() => (updateHandler(item.id))}>update</button>
                            <span>
                                <button type='button' onClick={() => deletuser(item.id)}>Delete</button>
                            </span><span></span></li>
                    )
                })}
            </div>
        </>
    )
}

export default Index

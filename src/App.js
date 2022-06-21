import React, { useState } from "react";

const Structure = () => {

    const [data, setData] = useState([{
        usrname: '',
        dept: '',
        rate: '',
    }])

    const [details, setDetails] = useState([]);

    const nameEvent = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        // console.log(data);
    }

    const Submited = (e) => {
        e.preventDefault()
        const newData = { ...data, id: new Date().getTime().toString() }
        // console.log(newData);
        setDetails([...details, newData])
        console.log(details);


    }
    return (
        <>
            <div className="top__containt"><h1>EMPLOYEE FEEDBACK FORM</h1><hr /></div>
            <form onSubmit={Submited}>
                <div className="all__inputs">
                    <label>Name: </label>
                    <input
                        type="text"
                        onChange={nameEvent}
                        value={data.usrname}
                        name='name'
                    />
                    <br /><br />
                    <label className="dept">Department: </label>
                    <input
                        type="text"
                        onChange={nameEvent}
                        value={data.dept}
                        name='dept'
                    /><br /><br />
                    <label>Rating: </label>
                    <input
                        type="number"
                        onChange={nameEvent}
                        value={data.rate}
                        name='rate'
                    /><br />
                </div>
                <div className="button"><input type="Submit" /></div>
            </form>
            <div className="result">
                {
                    details.map((e) => {
                        return (
                            <div className="section">
                                <p>Name: {e.name}</p>
                                <p>Department: {e.dept}</p>
                                <p>Rating: {e.rate}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Structure;

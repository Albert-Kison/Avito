import {useState} from 'react';

function Header() {
    const [formData, setFormData] = useState({
        itemName: '',
    });

    function handleSubmit(event) {
        event.preventDefault();

        console.log(formData);
        fetch("http://localhost:3003", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formData),
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    function handleChange(event) {
        const {name, value} = event.target;

        setFormData({...formData, [name]: value});
    }

    return (
        <div className="header">
            <nav>
                <ul>
                    <li>Country</li>
                    <li>City</li>
                    <li>Sign in</li>
                </ul>
                <form onSubmit={handleSubmit}>
                    <input placeholder="Search" type="text" name="itemName" onChange={handleChange}/>
                </form>
            </nav>
        </div>
    );
}

export default Header;
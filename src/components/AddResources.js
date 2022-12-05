import * as React from 'react';
import {useState} from "react";

function AddResources() {

    //=== Form fields ===
    const [name, setName] = useState('');
    const [addressStreet, setAddressStreet] = useState('');
    const [addressCity, setAddressCity] = useState('');
    const [addressState, setAddressState] = useState('');
    const [addressZip, setAddressZip] = useState('');
    const [phone, setPhone] = useState('');
    const [orgType, setOrgType] = useState('');
    const [religious, setRelig] = useState(false);
    const [health, setHealth] = useState(false);
    const [food, setFood] = useState(false);
    const [shelter, setShelter] = useState(false);
    const [cloth, setCloth] = useState(false);
    const [acceptMen, setAcceptMen] = useState(false);
    const [acceptWomen, setAcceptWomen] = useState(false);
    const [acceptChildren, setAcceptChildren] = useState(false);
    const [description, setDescription] = useState('');
    const [URL, setURL] = useState('');

    //=== Event handlers ===
    // Form submit
    //const handleSubmit = (event) => {
        // Submit the form here
    //};

    //=== HTML to render ===
    return (
        <div className="AddResources">
            <header className="Add Resources">
                <form >
                Form to add resources goes here
                    <label>
                        Organization Name:
                        <input type = "text" value={name} onChange={(e) => setName(e.target.value)}/>
                    </label>
                    <label>
                        Street:
                        <input type = "text" value={addressStreet} onChange={(e) => setAddressStreet(e.target.value)}/>
                    </label>
                    <label>
                        City:
                        <input type = "text" value={addressCity} onChange={(e) => setAddressCity(e.target.value)}/>
                    </label>
                    <label>
                        State:
                        <input type = "text" value={addressState} onChange={(e) => setAddressState(e.target.value)}/>
                    </label>
                    <label>
                        Zip:
                        <input type = "text" value={addressZip} onChange={(e) => setAddressZip(e.target.value)}/>
                    </label>
                    <label>
                        Telephone Number:
                        <input type = "text" value={phone} onChange={(e) => setPhone((e.target.value))}/>
                    </label>
                    <label>
                        Type of Organization:
                        <input type = "text" value={orgType} onChange={(e) => setOrgType(e.target.value)}/>
                    </label>
                    <label>
                        Accepts men?
                        <input type = "checkbox" value={acceptMen} onChange={(e) => setAcceptMen(e.target.value)}/>
                    </label>
                    <label>
                        Accepts women?
                        <input type = "checkbox" value={acceptWomen} onChange={(e) => setAcceptWomen(e.target.value)}/>
                    </label>
                    <label>
                        Accepts minors?
                        <input type = "checkbox" value={acceptChildren} onChange={(e) => setAcceptChildren(e.target.value)}/>
                    </label>
                    <label>
                        Has religious services?
                        <input type = "checkbox" value={religious} onChange={(e) => setRelig(e.target.value)}/>
                    </label>
                    <label>
                        Offers food services?
                        <input type = "checkbox" value={food} onChange={(e) => setFood(e.target.value)}/>
                    </label>
                    <label>
                        Offers healthcare services?
                        <input type = "checkbox" value={health} onChange={(e) => setHealth(e.target.value)}/>
                    </label>
                    <label>
                        Offers clothing services?
                        <input type = "checkbox" value={cloth} onChange={(e) => setCloth(e.target.value)}/>
                    </label>
                    <label>
                        Is a shelter?
                        <input type = "checkbox" value={shelter} onChange={(e) => setShelter(e.target.value)}/>
                    </label>
                    <label>
                        Link:
                        <input type = "text" value={URL} onChange={(e) => setURL(e.target.value)}/>
                    </label>
                    <label>
                        Enter a short description:
                        <input type = "text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    </label>
                    <input type = "submit"/>
                </form>
            </header>
        </div>
    );
}
export default AddResources;
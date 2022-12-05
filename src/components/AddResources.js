import * as React from 'react';
import ReactDOM from 'react-dom';

function AddResources() {

    // Form fields
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

    return (
        <div className="AddResources">
            <header className="Add Resources">
                <form>
                Form to add resources goes here
                    <label>
                        Organization Name:
                        <input type = "text" value={name}/>
                    </label>
                    <label>
                        Street:
                        <input type = "text" value={addressStreet}/>
                    </label>
                    <label>
                        City:
                        <input type = "text" value={addressCity}/>
                    </label>
                    <label>
                        State:
                        <input type = "text" value={addressState}/>
                    </label>
                    <label>
                        Zip:
                        <input type = "text" value={addressZip}/>
                    </label>
                    <label>
                        Telephone Number:
                        <input type = "text" value={phone}/>
                    </label>
                    <label>
                        Type of Organization:
                        <input type = "text" value={orgType}/>
                    </label>
                    <label>
                        Accepts men?
                        <select value={acceptMen}>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                    </label>
                    <label>
                        Accepts women?
                        <select value={acceptWomen}>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                    </label>
                    <label>
                        Accepts minors?
                        <select value={acceptchildren}>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                    </label>
                    <label>
                        Has religious services?
                        <select value={religious}>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                    </label>
                    <label>
                        Offers food services?
                        <select value={food}>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                    </label>
                    <label>
                        Offers healthcare services?
                        <select value={health}>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                    </label>
                    <label>
                        Offers clothing services?
                        <select value={cloth}>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                    </label>
                    <label>
                        Is a shelter?
                        <select value={shelter}>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                    </label>
                    <label>
                        Link:
                        <input type = "text" value={URL}/>
                    </label>
                    <label>
                        Enter a short description:
                        <input type = "text" value={description}/>
                    </label>
                </form>
            </header>
        </div>
    );
}
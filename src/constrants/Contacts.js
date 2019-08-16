import React from 'react'

const Contacts = ({contacts}) => {
    return (
        <div id="contactsList">
            <h1>Contact List</h1>
            {contacts.map(function (contact, i) {
                return <div className="card" key={i}>
                    <div className="card-body" key={contact.key}>
                        <h5 className="card-title" key={contact.key}>{contact.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{contact.email}</h6>
                        <p className="card-text">{contact.company.catchPhrase}</p>
                    </div>
                </div>
            })}
        </div>
    )
};

export default Contacts
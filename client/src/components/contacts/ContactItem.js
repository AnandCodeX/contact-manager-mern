/** @format */

import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";
import { NavLink } from "react-router-dom";

const ContactItem = ({ contact }) => {
	const contactContext = useContext(ContactContext);
	const { deleteContact, setCurrent, clearCurrent } = contactContext;

	const { _id, name, email, phone, type } = contact;

	const onDelete = () => {
		deleteContact(_id);
		clearCurrent();
	};

	return (
		<div className='card m '>
			<i className='far fa-user' />
			<span className='px text-left'>{name} </span>

			<ul className='list'>
				{email && (
					<li>
						<i className='fas fa-envelope-open' /> {email}
					</li>
				)}
				{phone && (
					<li>
						<i className='fas fa-phone' /> {phone}
					</li>
				)}
			</ul>
			<p>
				<NavLink to='/'>
					<button className='btn btn-edit' onClick={() => setCurrent(contact)}>
						Edit
					</button>
				</NavLink>
				<button className='btn btn-delete' onClick={onDelete}>
					Delete
				</button>
			</p>
		</div>
	);
};

ContactItem.propTypes = {
	contact: PropTypes.object.isRequired,
};

export default ContactItem;

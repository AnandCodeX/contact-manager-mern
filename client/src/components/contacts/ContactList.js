/** @format */

import React, { Fragment, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactItem from "./ContactItem";
import Spinner from "../layout/Spinner";
import ContactContext from "../../context/contact/contactContext";

const ContactList = () => {
	const contactContext = useContext(ContactContext);

	const { contacts, filtered, getContacts, loading } = contactContext;

	useEffect(() => {
		getContacts();
		
	}, []);

	return (
		<div>
			<section className='contact__btn__selector'>
				<NavLink to='/contacts/'>
					<button className='btn__list' type='submit'>
						Contact List
					</button>
				</NavLink>
				<NavLink to='/'>
					<button className='btn__add' type='submit'>
						Add Contact
					</button>
				</NavLink>
			</section>
			{contacts !== null && !loading ? (
				<div className='contact-list'>
					{filtered !== null
						? filtered.map((contact) => (
								<CSSTransition
									key={contact._id}
									timeout={500}
									classNames='item'>
									<ContactItem contact={contact} />
								</CSSTransition>
						  ))
						: contacts.map((contact) => (
								<CSSTransition
									key={contact._id}
									timeout={500}
									classNames='item'>
									<ContactItem contact={contact} />
								</CSSTransition>
						  ))}
				</div>
			) : (
				<Spinner />
			)}
		</div>
	);
};

export default ContactList;

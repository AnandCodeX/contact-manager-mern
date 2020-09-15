/** @format */

import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";

import AuthContext from "../../context/auth/authContext";

const Home = () => {
	const authContext = useContext(AuthContext);

	useEffect(() => {
		authContext.loadUser();
		
	}, []);

	return (
		<div className='center'>
			<section className='contact__btn__selector my-1'>
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

			<div className='wv-40 ml-20'>
				<ContactForm />
			</div>
		</div>
	);
};

export default Home;

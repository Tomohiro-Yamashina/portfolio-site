// Component
import Top from '@/components/main/Top/Top.jsx';
import AboutUs from '@/components/main/About/AboutUs.jsx';
import Works from '@/components/main/Works/Works.jsx';
import Company from '@/components/main/Company/Company.jsx';
import Contact from '@/components/main/Contact/Contact.jsx';

function Main() {
	return (
		<main>
			<Top />
			<AboutUs id="about" />
			<Works id="works" />
			<Company id="company" />
			<Contact id="contact" />
		</main>
	);
}

export default Main;

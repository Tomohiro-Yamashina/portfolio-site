import Top from '@/components/main/Top/Top.jsx';
import AboutUs from '@/components/main/About/AboutUs.jsx';
import Works from '@/components/main/Works/Works.jsx';
import Company from '@/components/main/Company/Company.jsx';
import Contact from '@/components/main/Contact/Contact.jsx';
import './Main.module.scss';

function Main() {
	return (
		<main>
			<Top />
			<AboutUs />
			<Works />
			<Company />
			<Contact />
		</main>
	);
}

export default Main;

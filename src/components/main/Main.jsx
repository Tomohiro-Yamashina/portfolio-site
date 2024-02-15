import Top from '@/components/main/Top/Top.jsx';
import AboutUs from '@/components/main/AboutUs.jsx';
import Works from '@/components/main/Works.jsx';
import Company from '@/components/main/Company.jsx';
import Contact from '@/components/main/Contact.jsx';
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

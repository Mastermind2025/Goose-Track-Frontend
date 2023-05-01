import { Header } from './header_b/header_b';
import { Main } from './main_c/main_c';
import { Footer } from './footer_f/footer_f';
import { Team } from './our_team/our_team';

export default function HomePage() {
    return (
        <div>
            <Header />
            <Main />
            <Team />
            <Footer />
        </div>
    );
}
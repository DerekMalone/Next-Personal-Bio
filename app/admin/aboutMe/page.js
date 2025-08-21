import { AboutMeForm } from '../../components/admin/aboutMe/aboutMeForm';
import RedirectButton from '../../components/navigation/navbar/Button';


export default function AboutMePage() {
    return (
        <>
        <RedirectButton href="/admin" component="Admin Dashboard" />
        <AboutMeForm />
        </>
    )
};
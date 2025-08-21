import AdminProjectList from '../../components/admin/projects/AdminProjectList';
import RedirectButton from '../../components/navigation/navbar/Button';

export default function ProjectsPage() {
    return (
        <div>     
            <RedirectButton href="/admin" component="Admin Dashboard" />   
            <AdminProjectList />
        </div>
    )
}
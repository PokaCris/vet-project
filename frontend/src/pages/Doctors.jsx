import DoctorsList from "../components/DoctorsList/DoctorsList";
import MakeAppointment from '../components/MakeAppointment/MakeAppointment';

function Doctors() {
    return (
        <div>
            <DoctorsList />
            <MakeAppointment />
        </div>
    );
}

export default Doctors;
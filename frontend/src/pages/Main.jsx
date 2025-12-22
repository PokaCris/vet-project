import MainImg from "../components/MainImg/MainImg";
import ServicesClinic from "../components/ServicesClinic/ServicesClinic";
import VeterinarTypes from "../components/VeterinarTypes/VeterinarTypes";
import LogosSlider from "../components/LogosSlider/LogosSlider";
import MakeAppointment from '../components/MakeAppointment/MakeAppointment';

function Main() {
    return (
        <>
            <MainImg />
            <ServicesClinic />
            <VeterinarTypes />
            <LogosSlider />
            <MakeAppointment />
        </>
    );
}

export default Main;
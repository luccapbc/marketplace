import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
import Card from "../components/card/Card";
import RangeName from "../components/range/RangeName";

const UserPage = () => {
    return (
        <main>
            <Header></Header>
            <RangeName></RangeName>
            <SideBar></SideBar>
            <Card></Card>
           
        </main>

    )
}

export default UserPage;
import Footer from "components/Footer";
import Header from "components/Header";
import Profile from "components/Profile";
import PostList from "components/PsotList";

export default function ProfilePage(){
    return (
        <>
        <Header />
        <Profile />
        <PostList hasNavigation={false} />
        <Footer />
        </>
    )
}
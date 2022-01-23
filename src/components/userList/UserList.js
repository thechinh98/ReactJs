import User from "../user/User";
import Search from "../search/Search";

export default function UserList(){
    return (
        <div>
        <Search />
        <br/>
        <User />
        </div>
    );
}
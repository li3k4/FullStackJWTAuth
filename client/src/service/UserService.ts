import { IUser } from '../models/IUser';
import $api from "../http";
import {AxiosResponse} from 'axios';

class UserService {
    static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>('/users')
    }
}

export default UserService;

import { SignUpCityList } from './SignUpCityList.interface';

export interface SignUpStateList{
    cities: SignUpCityList[],
    description: string,
    id: string,
    name: string
}
import { createFunction, createGenerator, LightStorage } from '@light/storage';

interface User{
    name: string,
    id: number,
}
declare const user: User

const localLightStorage = new LightStorage(localStorage)

const createStorage = createGenerator(localLightStorage)

const userStorage = createStorage<User>('user');

userStorage.set(user)
userStorage.get()


const storage = createFunction(localLightStorage)
storage<User>('user', user)
storage<User>('user')





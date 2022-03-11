import {get} from "./request";

export const sayHello = () => {
    return get('https://ztian-music-1690062-1310031202.ap-shanghai.run.tcloudbase.com/hello');
};
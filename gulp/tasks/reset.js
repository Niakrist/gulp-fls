import del from 'del';
//import { deleteSync } from 'del'
export const reset = () => {
    return del(app.path.clean);
}
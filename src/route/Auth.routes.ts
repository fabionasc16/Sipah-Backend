import { Router } from 'express';
import { AuthService } from '../service/auth.service';


const authRoutes = Router();
const authService = new AuthService();

authRoutes.post('/auth', authService.authenticate);
authRoutes.get('/unities', authService.unities)
authRoutes.get('/profiles', authService.profiles);
authRoutes.get('/user/exists/:cpf', authService.findUsuarioByCpf);
/*authRoutes.post('/resetpassword', authService.resetPassword);
authRoutes.post('/cancelrequest', authService.cancelRequest);
authRoutes.post('/verify', authService.verifyRole);
authRoutes.post('/verify-token', authService.verifyJWT);
authRoutes.post('/logout', authService.logout);
authRoutes.post('/reset-pass', authService.updatePassword);*/

export { authRoutes };
